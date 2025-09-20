// 搜索功能实现
class TutorialSearch {
    constructor() {
        this.searchIndex = [];
        this.searchInput = null;
        this.searchResults = null;
        this.init();
    }

    init() {
        this.createSearchInterface();
        this.buildSearchIndex();
        this.bindEvents();
    }

    createSearchInterface() {
        // 在侧边栏顶部添加搜索框
        const sidebar = document.getElementById('sidebar');
        const searchHTML = `
            <div class="mb-6 p-4 border-b border-gray-200">
                <div class="relative">
                    <input
                        type="text"
                        id="search-input"
                        placeholder="搜索教程内容..."
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                    <div class="absolute right-2 top-2">
                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>
                <div id="search-results" class="mt-3 space-y-1 hidden"></div>
            </div>
        `;

        sidebar.querySelector('.flex-1').insertAdjacentHTML('afterbegin', searchHTML);
    }

    buildSearchIndex() {
        // 构建搜索索引
        const sections = [
            { id: 'intro', title: '什么是 BMAD-METHOD', category: '入门篇', keywords: ['介绍', '概念', '基础', '入门'] },
            { id: 'installation', title: '环境准备与安装', category: '入门篇', keywords: ['安装', '环境', '配置', '准备'] },
            { id: 'first-project', title: '第一个项目', category: '入门篇', keywords: ['项目', '开始', '实践', '示例'] },
            { id: 'basic-concepts', title: '核心概念理解', category: '入门篇', keywords: ['概念', '理论', '理解', '基础'] },
            { id: 'agents', title: '智能体系统深入', category: '进阶篇', keywords: ['智能体', '系统', 'AI', '代理'] },
            { id: 'workflows', title: '工作流设计', category: '进阶篇', keywords: ['工作流', '流程', '设计', '自动化'] },
            { id: 'templates', title: '模板系统', category: '进阶篇', keywords: ['模板', '模式', '复用', '框架'] },
            { id: 'project-management', title: '项目管理实践', category: '进阶篇', keywords: ['管理', '项目', '实践', '流程'] },
            { id: 'custom-agents', title: '自定义智能体', category: '高级篇', keywords: ['自定义', '扩展', '开发', '智能体'] },
            { id: 'expansion-packs', title: '扩展包开发', category: '高级篇', keywords: ['扩展', '插件', '开发', '包'] },
            { id: 'architecture', title: '架构设计模式', category: '高级篇', keywords: ['架构', '设计', '模式', '结构'] },
            { id: 'optimization', title: '性能优化', category: '高级篇', keywords: ['优化', '性能', '效率', '提升'] },
            { id: 'case-study-web', title: 'Web应用开发案例', category: '实战篇', keywords: ['案例', 'Web', '开发', '应用'] },
            { id: 'case-study-api', title: 'API服务开发案例', category: '实战篇', keywords: ['API', '服务', '开发', '接口'] },
            { id: 'case-study-creative', title: '创意写作案例', category: '实战篇', keywords: ['创意', '写作', '内容', '案例'] },
            { id: 'troubleshooting', title: '常见问题解决', category: '实战篇', keywords: ['问题', '解决', '故障', '排查'] }
        ];

        this.searchIndex = sections;
    }

    bindEvents() {
        this.searchInput = document.getElementById('search-input');
        this.searchResults = document.getElementById('search-results');

        if (!this.searchInput) return;

        this.searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query.length > 0) {
                this.performSearch(query);
            } else {
                this.hideResults();
            }
        });

        // 点击搜索框外部隐藏结果
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#search-input') && !e.target.closest('#search-results')) {
                this.hideResults();
            }
        });

        // ESC键隐藏搜索结果
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideResults();
                this.searchInput.blur();
            }
        });
    }

    performSearch(query) {
        const results = this.searchIndex.filter(section => {
            const searchText = `${section.title} ${section.category} ${section.keywords.join(' ')}`.toLowerCase();
            return searchText.includes(query.toLowerCase());
        });

        this.displayResults(results, query);
    }

    displayResults(results, query) {
        if (results.length === 0) {
            this.searchResults.innerHTML = `
                <div class="px-3 py-2 text-sm text-gray-500">
                    没有找到包含 "${query}" 的内容
                </div>
            `;
        } else {
            this.searchResults.innerHTML = results.map(result => `
                <div class="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer"
                     onclick="tutorial.loadSection('${result.id}'); document.getElementById('search-results').classList.add('hidden');">
                    <div class="font-medium text-sm text-gray-800">${this.highlightQuery(result.title, query)}</div>
                    <div class="text-xs text-purple-600 mt-1">${result.category}</div>
                </div>
            `).join('');
        }

        this.searchResults.classList.remove('hidden');
    }

    highlightQuery(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
    }

    hideResults() {
        this.searchResults.classList.add('hidden');
    }
}

// 键盘快捷键支持
class KeyboardShortcuts {
    constructor() {
        this.bindShortcuts();
    }

    bindShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K 聚焦搜索框
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('search-input');
                if (searchInput) {
                    searchInput.focus();
                }
            }

            // 数字键快速导航 (1-9)
            if (e.key >= '1' && e.key <= '9' && !e.target.matches('input, textarea')) {
                const sectionIndex = parseInt(e.key) - 1;
                const sections = document.querySelectorAll('[data-section]');
                if (sections[sectionIndex]) {
                    const sectionId = sections[sectionIndex].getAttribute('data-section');
                    tutorial.loadSection(sectionId);
                }
            }
        });
    }

    navigateResults(direction) {
        const results = document.querySelectorAll('#search-results > div');
        if (results.length === 0) return;

        const current = document.querySelector('#search-results .bg-purple-100');
        let currentIndex = current ? Array.from(results).indexOf(current) : -1;

        // 移除当前高亮
        if (current) {
            current.classList.remove('bg-purple-100');
        }

        // 计算新索引
        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = results.length - 1;
        if (newIndex >= results.length) newIndex = 0;

        results[newIndex].classList.add('bg-purple-100');
    }
}

// 初始化搜索和交互功能
document.addEventListener('DOMContentLoaded', () => {
    window.tutorialSearch = new TutorialSearch();
    window.keyboardShortcuts = new KeyboardShortcuts();
});