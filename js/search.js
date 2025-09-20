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
                <div id="search-results" class="hidden mt-3 max-h-64 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg"></div>
            </div>
        `;

        const existingContent = sidebar.querySelector('.p-6');
        existingContent.insertAdjacentHTML('afterbegin', searchHTML);

        this.searchInput = document.getElementById('search-input');
        this.searchResults = document.getElementById('search-results');
    }

    buildSearchIndex() {
        // 构建搜索索引
        const sections = [
            { id: 'intro', title: '什么是 BMAD-METHOD', category: '入门篇', keywords: ['介绍', '概念', '核心理念', '智能体', '规划', '上下文工程'] },
            { id: 'installation', title: '环境准备与安装', category: '入门篇', keywords: ['安装', '环境', 'nodejs', 'npm', 'git', '配置'] },
            { id: 'first-project', title: '第一个项目', category: '入门篇', keywords: ['项目', '初始化', '创建', 'todo应用', '智能体协作'] },
            { id: 'basic-concepts', title: '核心概念理解', category: '入门篇', keywords: ['智能体系统', '工作流程', '模板系统', '上下文工程', '故事驱动'] },

            { id: 'agents', title: '智能体系统深入', category: '进阶篇', keywords: ['智能体', '配置', '自定义', '团队', '通信协议', '监控'] },
            { id: 'workflows', title: '工作流设计', category: '进阶篇', keywords: ['工作流', '设计模式', '配置', '监控', '优化'] },
            { id: 'templates', title: '模板系统', category: '进阶篇', keywords: ['模板', '变量', '条件逻辑', '继承', '自定义函数'] },
            { id: 'project-management', title: '项目管理实践', category: '进阶篇', keywords: ['项目管理', '生命周期', '协作', '监控', '报告'] },

            { id: 'custom-agents', title: '自定义智能体', category: '高级篇', keywords: ['自定义', '智能体开发', '测试', '验证', '部署'] },
            { id: 'expansion-packs', title: '扩展包开发', category: '高级篇', keywords: ['扩展包', '开发', '发布', '分发', '管理'] },
            { id: 'architecture', title: '架构设计模式', category: '高级篇', keywords: ['架构', '设计模式', '微服务', '扩展性'] },
            { id: 'optimization', title: '性能优化', category: '高级篇', keywords: ['性能', '优化', '监控', '缓存', '并行处理'] },

            { id: 'case-study-web', title: 'Web应用开发案例', category: '实战篇', keywords: ['web应用', '电商', '案例', '实战', '开发'] },
            { id: 'case-study-api', title: 'API服务开发案例', category: '实战篇', keywords: ['api', '服务', 'restful', '后端', '开发'] },
            { id: 'case-study-creative', title: '创意写作案例', category: '实战篇', keywords: ['创意写作', '小说', '故事', '角色', '写作'] },
            { id: 'troubleshooting', title: '常见问题解决', category: '实战篇', keywords: ['问题', '故障排除', '调试', '帮助', '支持'] }
        ];

        this.searchIndex = sections;
    }

    bindEvents() {
        let searchTimeout;

        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.performSearch(e.target.value);
            }, 300);
        });

        this.searchInput.addEventListener('focus', () => {
            if (this.searchInput.value.trim()) {
                this.searchResults.classList.remove('hidden');
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('#search-input') && !e.target.closest('#search-results')) {
                this.searchResults.classList.add('hidden');
            }
        });
    }

    performSearch(query) {
        if (!query.trim()) {
            this.searchResults.classList.add('hidden');
            return;
        }

        const results = this.searchIndex.filter(section => {
            const searchText = `${section.title} ${section.category} ${section.keywords.join(' ')}`.toLowerCase();
            return searchText.includes(query.toLowerCase());
        });

        this.displayResults(results, query);
    }

    displayResults(results, query) {
        if (results.length === 0) {
            this.searchResults.innerHTML = `
                <div class="p-3 text-gray-500 text-sm">
                    没有找到包含 "${query}" 的内容
                </div>
            `;
        } else {
            const resultsHTML = results.map(result => `
                <div class="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                     onclick="tutorial.loadSection('${result.id}'); document.getElementById('search-results').classList.add('hidden');">
                    <div class="font-medium text-sm text-gray-800">${this.highlightQuery(result.title, query)}</div>
                    <div class="text-xs text-purple-600 mt-1">${result.category}</div>
                </div>
            `).join('');

            this.searchResults.innerHTML = resultsHTML;
        }

        this.searchResults.classList.remove('hidden');
    }

    highlightQuery(text, query) {
        if (!query.trim()) return text;

        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
    }
}

// 键盘快捷键支持
class KeyboardShortcuts {
    constructor() {
        this.bindShortcuts();
    }

    bindShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K 打开搜索
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('search-input');
                if (searchInput) {
                    searchInput.focus();
                    searchInput.select();
                }
            }

            // ESC 关闭搜索结果
            if (e.key === 'Escape') {
                const searchResults = document.getElementById('search-results');
                if (searchResults && !searchResults.classList.contains('hidden')) {
                    searchResults.classList.add('hidden');
                }
            }

            // 方向键导航
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                const searchResults = document.getElementById('search-results');
                if (searchResults && !searchResults.classList.contains('hidden')) {
                    e.preventDefault();
                    this.navigateResults(e.key === 'ArrowDown' ? 1 : -1);
                }
            }

            // Enter 选择结果
            if (e.key === 'Enter') {
                const searchResults = document.getElementById('search-results');
                if (searchResults && !searchResults.classList.contains('hidden')) {
                    const selected = searchResults.querySelector('.bg-purple-100');
                    if (selected) {
                        selected.click();
                    }
                }
            }
        });
    }

    navigateResults(direction) {
        const searchResults = document.getElementById('search-results');
        const items = searchResults.querySelectorAll('[onclick]');

        if (items.length === 0) return;

        let currentIndex = -1;
        items.forEach((item, index) => {
            if (item.classList.contains('bg-purple-100')) {
                currentIndex = index;
                item.classList.remove('bg-purple-100');
            }
        });

        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = items.length - 1;
        if (newIndex >= items.length) newIndex = 0;

        items[newIndex].classList.add('bg-purple-100');
    }
}

// 书签功能
class BookmarkManager {
    constructor() {
        this.bookmarks = this.loadBookmarks();
        this.init();
    }

    init() {
        this.createBookmarkInterface();
        this.updateBookmarkDisplay();
    }

    createBookmarkInterface() {
        // 在侧边栏添加书签区域
        const sidebar = document.getElementById('sidebar');
        const bookmarkHTML = `
            <div class="mt-6 border-t pt-6">
                <h3 class="font-semibold text-gray-800 mb-3 px-3">📑 我的书签</h3>
                <div id="bookmark-list" class="space-y-1"></div>
            </div>
        `;

        sidebar.querySelector('.p-6').insertAdjacentHTML('beforeend', bookmarkHTML);
    }

    addBookmark(sectionId, title) {
        if (!this.bookmarks.includes(sectionId)) {
            this.bookmarks.push(sectionId);
            this.saveBookmarks();
            this.updateBookmarkDisplay();
            this.showNotification('已添加到书签');
        }
    }

    removeBookmark(sectionId) {
        const index = this.bookmarks.indexOf(sectionId);
        if (index > -1) {
            this.bookmarks.splice(index, 1);
            this.saveBookmarks();
            this.updateBookmarkDisplay();
            this.showNotification('已从书签移除');
        }
    }

    updateBookmarkDisplay() {
        const bookmarkList = document.getElementById('bookmark-list');

        if (this.bookmarks.length === 0) {
            bookmarkList.innerHTML = '<p class="text-gray-500 text-sm px-3">暂无书签</p>';
            return;
        }

        const bookmarkHTML = this.bookmarks.map(sectionId => {
            const sectionElement = document.querySelector(`[data-section="${sectionId}"]`);
            const title = sectionElement ? sectionElement.textContent : sectionId;

            return `
                <div class="flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded">
                    <a href="#" onclick="tutorial.loadSection('${sectionId}')" class="text-sm text-gray-700 hover:text-purple-600 flex-1">
                        ${title}
                    </a>
                    <button onclick="bookmarkManager.removeBookmark('${sectionId}')" class="text-gray-400 hover:text-red-500 ml-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            `;
        }).join('');

        bookmarkList.innerHTML = bookmarkHTML;
    }

    loadBookmarks() {
        const saved = localStorage.getItem('bmad-tutorial-bookmarks');
        return saved ? JSON.parse(saved) : [];
    }

    saveBookmarks() {
        localStorage.setItem('bmad-tutorial-bookmarks', JSON.stringify(this.bookmarks));
    }

    showNotification(message) {
        // 创建简单的通知
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 2000);
    }
}

// 初始化搜索和交互功能
document.addEventListener('DOMContentLoaded', () => {
    window.tutorialSearch = new TutorialSearch();
    window.keyboardShortcuts = new KeyboardShortcuts();
    window.bookmarkManager = new BookmarkManager();
});