// 主要的JavaScript功能文件
class BMadTutorial {
    constructor() {
        this.currentSection = 'intro';
        this.completedSections = new Set();
        this.init();
    }

    init() {
        this.loadProgress();
        this.bindEvents();
        this.initHighlighting();
    }

    bindEvents() {
        // 导航点击事件
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.target.getAttribute('data-section');
                if (section) {
                    this.loadSection(section);
                }
            });
        });

        // 移动端菜单切换
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // 键盘导航
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'n') {
                this.nextSection();
            } else if (e.key === 'ArrowLeft' || e.key === 'p') {
                this.previousSection();
            }
        });
    }

    initHighlighting() {
        // 初始化代码高亮
        hljs.highlightAll();
    }

    async loadSection(sectionName) {
        try {
            this.currentSection = sectionName;

            // 更新导航状态
            this.updateNavigation(sectionName);

            // 加载内容
            const content = await this.fetchSectionContent(sectionName);
            this.displayContent(content);

            // 标记为已完成
            this.markAsCompleted(sectionName);

            // 更新进度
            this.updateProgress();

        } catch (error) {
            console.error('加载章节失败:', error);
            this.displayError();
        }
    }

    async fetchSectionContent(sectionName) {
        // 这里将返回预定义的内容，在实际应用中可以从服务器获取
        return this.getSectionContent(sectionName);
    }

    getSectionContent(sectionName) {
        const contents = {
            'intro': this.getIntroContent(),
            'installation': this.getInstallationContent(),
            'first-project': this.getFirstProjectContent(),
            'basic-concepts': this.getBasicConceptsContent(),
            'agents': this.getAgentsContent(),
            'workflows': this.getWorkflowsContent(),
            'templates': this.getTemplatesContent(),
            'project-management': this.getProjectManagementContent(),
            'custom-agents': this.getCustomAgentsContent(),
            'expansion-packs': this.getExpansionPacksContent(),
            'architecture': this.getArchitectureContent(),
            'optimization': this.getOptimizationContent(),
            'case-study-web': this.getCaseStudyWebContent(),
            'case-study-api': this.getCaseStudyApiContent(),
            'case-study-creative': this.getCaseStudyCreativeContent(),
            'troubleshooting': this.getTroubleshootingContent()
        };

        return contents[sectionName] || this.getNotFoundContent();
    }

    displayContent(content) {
        const contentDiv = document.getElementById('content');

        // 淡出效果
        contentDiv.classList.remove('show');

        setTimeout(() => {
            contentDiv.innerHTML = content;

            // 重新初始化代码高亮
            hljs.highlightAll();

            // 淡入效果
            contentDiv.classList.add('show');

            // 滚动到顶部
            window.scrollTo(0, 0);
        }, 250);
    }

    updateNavigation(sectionName) {
        // 移除所有活动状态
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('bg-purple-100', 'text-purple-700', 'font-medium');
        });

        // 添加当前活动状态
        const activeItem = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeItem) {
            activeItem.classList.add('bg-purple-100', 'text-purple-700', 'font-medium');
        }
    }

    markAsCompleted(sectionName) {
        this.completedSections.add(sectionName);
        this.saveProgress();
    }

    updateProgress() {
        const totalSections = document.querySelectorAll('[data-section]').length;
        const completedCount = this.completedSections.size;
        const percentage = Math.round((completedCount / totalSections) * 100);

        document.getElementById('progress-text').textContent = `${percentage}%`;
        document.getElementById('progress-bar').style.width = `${percentage}%`;
    }

    saveProgress() {
        localStorage.setItem('bmad-tutorial-progress', JSON.stringify({
            currentSection: this.currentSection,
            completedSections: Array.from(this.completedSections)
        }));
    }

    loadProgress() {
        const saved = localStorage.getItem('bmad-tutorial-progress');
        if (saved) {
            const data = JSON.parse(saved);
            this.currentSection = data.currentSection || 'intro';
            this.completedSections = new Set(data.completedSections || []);
            this.updateProgress();
        }
    }

    toggleMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('-translate-x-full');
    }

    nextSection() {
        const sections = Array.from(document.querySelectorAll('[data-section]'))
            .map(item => item.getAttribute('data-section'));
        const currentIndex = sections.indexOf(this.currentSection);

        if (currentIndex < sections.length - 1) {
            this.loadSection(sections[currentIndex + 1]);
        }
    }

    previousSection() {
        const sections = Array.from(document.querySelectorAll('[data-section]'))
            .map(item => item.getAttribute('data-section'));
        const currentIndex = sections.indexOf(this.currentSection);

        if (currentIndex > 0) {
            this.loadSection(sections[currentIndex - 1]);
        }
    }

    displayError() {
        const content = `
            <div class="text-center py-16">
                <div class="text-6xl mb-4">😅</div>
                <h2 class="text-2xl font-bold text-gray-800 mb-4">内容加载失败</h2>
                <p class="text-gray-600 mb-8">请检查网络连接或稍后重试</p>
                <button onclick="location.reload()" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    重新加载
                </button>
            </div>
        `;
        this.displayContent(content);
    }

    // 内容获取方法 - 将在下一个文件中定义具体内容
    getIntroContent() {
        return `
            <div class="prose prose-lg max-w-none">
                <h1>什么是 BMAD-METHOD™</h1>
                <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <p class="text-blue-800"><strong>BMAD-METHOD™</strong> 是一个通用AI智能体框架，旨在变革多个领域的AI驱动开发。</p>
                </div>

                <h2>核心理念</h2>
                <p>BMAD-METHOD 代表 "Agentic Agile Driven Development"（智能体敏捷驱动开发），它通过两个核心创新来解决传统开发中的痛点：</p>

                <div class="grid md:grid-cols-2 gap-6 my-8">
                    <div class="bg-white p-6 rounded-lg shadow-md border">
                        <h3 class="text-lg font-semibold mb-3 text-purple-600">🤖 智能体规划</h3>
                        <p>专门的AI智能体（分析师、产品经理、架构师）协作创建详细的产品需求和架构文档。</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border">
                        <h3 class="text-lg font-semibold mb-3 text-purple-600">📋 上下文工程开发</h3>
                        <p>Scrum Master智能体将计划转换为超详细的开发故事，确保上下文连贯性。</p>
                    </div>
                </div>

                <h2>主要特性</h2>
                <ul>
                    <li><strong>消除规划不一致和上下文丢失</strong> - 通过结构化的智能体协作</li>
                    <li><strong>多领域支持</strong> - 软件开发、创意写作、商业策略、个人健康等</li>
                    <li><strong>扩展包系统</strong> - 通过"扩展包"支持自定义领域</li>
                    <li><strong>灵活的界面</strong> - 支持CLI和Web UI</li>
                </ul>

                <h2>适用场景</h2>
                <div class="space-y-4">
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h4 class="font-semibold">🖥️ 软件开发</h4>
                        <p>从需求分析到架构设计，再到代码实现的完整开发流程</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h4 class="font-semibold">✍️ 创意写作</h4>
                        <p>结构化的内容创作和编辑流程</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h4 class="font-semibold">📈 商业策略</h4>
                        <p>市场分析、商业计划和战略规划</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h4 class="font-semibold">🏥 个人健康</h4>
                        <p>健康管理和生活方式优化</p>
                    </div>
                </div>

                <div class="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                    <h3 class="text-green-800 font-semibold mb-2">💡 为什么选择 BMAD-METHOD？</h3>
                    <p class="text-green-700">传统的开发方法常常面临需求变更、上下文丢失、团队协作困难等问题。BMAD-METHOD通过智能体系统提供了一个系统性的解决方案，确保从想法到实现的每个环节都保持清晰和一致。</p>
                </div>

                <div class="flex justify-between mt-8">
                    <div></div>
                    <button onclick="tutorial.loadSection('installation')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                        下一步：环境准备 →
                    </button>
                </div>
            </div>
        `;
    }

    getNotFoundContent() {
        return `
            <div class="text-center py-16">
                <div class="text-6xl mb-4">🔍</div>
                <h2 class="text-2xl font-bold text-gray-800 mb-4">内容正在准备中</h2>
                <p class="text-gray-600">这个章节的内容正在编写中，敬请期待！</p>
            </div>
        `;
    }
}

// 启动函数
function startLearning() {
    tutorial.loadSection('intro');
}

// 全局实例
let tutorial;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    tutorial = new BMadTutorial();
});