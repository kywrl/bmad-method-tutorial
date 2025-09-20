// 主要的JavaScript功能文件
class BMadTutorial {
    constructor() {
        this.currentSection = 'intro';
        this.init();
    }

    init() {
        this.bindEvents();
        this.initHighlighting();

        // 确定要显示的章节
        const sectionToLoad = this.determineSectionToLoad();

        // 直接加载确定的章节，不显示"欢迎回来"页面
        this.loadSection(sectionToLoad);
    }

    // 确定要加载的章节
    determineSectionToLoad() {
        // 检查URL hash
        const urlHash = this.getURLHash();
        if (urlHash && this.isValidSection(urlHash)) {
            return urlHash;
        }

        // 默认返回intro
        return 'intro';
    }

    // 验证章节是否有效
    isValidSection(section) {
        const validSections = [
            'intro', 'installation', 'first-project', 'basic-concepts',
            'agents', 'workflows', 'templates', 'project-management',
            'custom-agents', 'expansion-packs', 'architecture', 'optimization',
            'case-study-web', 'case-study-api', 'case-study-creative', 'troubleshooting'
        ];
        return validSections.includes(section);
    }


    // 获取章节标题
    getSectionTitle(section) {
        const titles = {
            'intro': '什么是 BMAD-METHOD',
            'installation': '环境准备与安装',
            'first-project': '第一个项目',
            'basic-concepts': '核心概念理解',
            'agents': '智能体系统深入',
            'workflows': '工作流设计',
            'templates': '模板系统',
            'project-management': '项目管理实践',
            'custom-agents': '自定义智能体',
            'expansion-packs': '扩展包开发',
            'architecture': '架构设计模式',
            'optimization': '性能优化',
            'case-study-web': 'Web应用开发案例',
            'case-study-api': 'API服务开发案例',
            'case-study-creative': '创意写作案例',
            'troubleshooting': '常见问题解决'
        };
        return titles[section] || section;
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

        // 监听浏览器后退/前进按钮
        window.addEventListener('popstate', (e) => {
            const urlHash = this.getURLHash();
            if (urlHash && this.isValidSection(urlHash)) {
                this.loadSection(urlHash, false); // false表示不更新URL
            } else if (!urlHash) {
                this.loadSection('intro', false);
            }
        });
    }

    initHighlighting() {
        // 初始化代码高亮
        hljs.highlightAll();
    }

    async loadSection(sectionName, updateURL = true) {
        try {
            this.currentSection = sectionName;

            // 更新导航状态
            this.updateNavigation(sectionName);

            // 加载内容
            const content = await this.fetchSectionContent(sectionName);
            this.displayContent(content);

            // 只更新URL，不保存进度
            if (updateURL) {
                this.updateURLHash(sectionName);
            }

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

    // URL Hash 管理
    updateURLHash(section) {
        if (section) {
            window.history.replaceState(null, null, `#${section}`);
        } else {
            window.history.replaceState(null, null, window.location.pathname);
        }
    }

    getURLHash() {
        return window.location.hash.substring(1); // 移除 # 符号
    }


    toggleMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('show');
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
                <div class="title-1">什么是 BMAD-METHOD</div>

                <!-- GitHub 项目信息 -->
                <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <div class="title-3">GitHub 开源项目</div>
                            <p class="text-gray-600 mb-3">BMAD-METHOD™ 是一个开源项目，欢迎查看源代码、提交问题或参与贡献。</p>
                            <a href="https://github.com/bmad-code-org/BMAD-METHOD" target="_blank"
                               class="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                                </svg>
                                访问 GitHub 仓库
                            </a>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <p class="text-blue-800"><strong>BMAD-METHOD™</strong> 全称为 <strong>Blockchain Multi-Agent Development METHOD</strong>（区块链多智能体开发方法），是一个通用AI智能体框架，旨在变革多个领域的AI驱动开发。</p>
                </div>

                <div class="title-2">核心理念</div>
                <p>BMAD-METHOD 通过两个核心创新来解决传统开发中的痛点：</p>

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

                <div class="title-2">主要特性</div>
                <ul>
                    <li><strong>消除规划不一致和上下文丢失</strong> - 通过结构化的智能体协作</li>
                    <li><strong>多领域支持</strong> - 软件开发、创意写作、商业策略、个人健康等</li>
                    <li><strong>扩展包系统</strong> - 通过"扩展包"支持自定义领域</li>
                    <li><strong>灵活的界面</strong> - 支持CLI和Web UI</li>
                </ul>

                <div class="title-2">适用场景</div>
                <div class="space-y-4">
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <div class="title-4">🖥️ 软件开发</div>
                        <p>从需求分析到架构设计，再到代码实现的完整开发流程</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <div class="title-4">✍️ 创意写作</div>
                        <p>结构化的内容创作和编辑流程</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <div class="title-4">📈 商业策略</div>
                        <p>市场分析、商业计划和战略规划</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <div class="title-4">🏥 个人健康</div>
                        <p>健康管理和生活方式优化</p>
                    </div>
                </div>

                <div class="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                    <div class="title-3 text-green-800">💡 为什么选择 BMAD-METHOD？</div>
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