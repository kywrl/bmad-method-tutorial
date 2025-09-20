// 教程内容扩展文件
BMadTutorial.prototype.getInstallationContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <h1>环境准备与安装</h1>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p class="text-yellow-800"><strong>注意：</strong> 确保你的系统满足以下要求才能顺利使用 BMAD-METHOD。</p>
            </div>

            <h2>系统要求</h2>
            <div class="bg-white p-6 rounded-lg shadow-md border mb-6">
                <h3 class="text-lg font-semibold mb-4">必需软件</h3>
                <ul class="space-y-2">
                    <li>✅ <strong>Node.js</strong> v20 或更高版本</li>
                    <li>✅ <strong>npm</strong> v9 或更高版本</li>
                    <li>✅ <strong>Git</strong> 最新版本</li>
                    <li>🔧 <strong>VS Code</strong>（推荐，可选）</li>
                </ul>
            </div>

            <h2>步骤1：检查Node.js版本</h2>
            <p>首先检查你的Node.js版本是否符合要求：</p>
            <pre><code class="language-bash"># 检查Node.js版本
node --version

# 检查npm版本
npm --version

# 检查Git版本
git --version</code></pre>

            <div class="bg-blue-50 p-4 rounded-lg my-4">
                <p class="text-blue-800"><strong>版本要求：</strong></p>
                <ul class="text-blue-700 mt-2">
                    <li>Node.js: ≥ v20.0.0</li>
                    <li>npm: ≥ v9.0.0</li>
                    <li>Git: 任何现代版本</li>
                </ul>
            </div>

            <h2>步骤2：安装BMAD-METHOD</h2>
            <p>BMAD-METHOD提供了简单的一键安装方式：</p>

            <pre><code class="language-bash"># 全局安装（推荐）
npx bmad-method install

# 或者项目级安装
npm install bmad-method</code></pre>

            <h2>步骤3：验证安装</h2>
            <p>安装完成后，验证BMAD-METHOD是否正确安装：</p>

            <pre><code class="language-bash"># 检查版本
bmad --version

# 查看帮助信息
bmad --help

# 初始化新项目（可选）
bmad init my-first-project</code></pre>

            <h2>VS Code扩展（推荐）</h2>
            <p>为了获得最佳的开发体验，建议安装以下VS Code扩展：</p>

            <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">推荐扩展：</h4>
                <ul class="space-y-1">
                    <li>• YAML Support</li>
                    <li>• Markdown All in One</li>
                    <li>• GitLens</li>
                    <li>• Thunder Client（API测试）</li>
                </ul>
            </div>

            <h2>配置Git（如果尚未配置）</h2>
            <pre><code class="language-bash"># 设置用户名和邮箱
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 验证配置
git config --list</code></pre>

            <h2>故障排除</h2>
            <div class="space-y-4">
                <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 class="text-red-800 font-semibold">常见问题：Node.js版本过低</h4>
                    <p class="text-red-700 mt-2">如果你的Node.js版本低于v20，请访问 <a href="https://nodejs.org" class="underline">nodejs.org</a> 下载最新版本。</p>
                </div>

                <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 class="text-red-800 font-semibold">权限问题</h4>
                    <p class="text-red-700 mt-2">如果在安装过程中遇到权限问题，尝试使用 <code>sudo</code>（Linux/Mac）或以管理员身份运行命令提示符（Windows）。</p>
                </div>
            </div>

            <div class="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <h3 class="text-green-800 font-semibold mb-2">🎉 安装成功！</h3>
                <p class="text-green-700">恭喜！你已经成功安装了BMAD-METHOD。现在可以开始创建你的第一个项目了。</p>
            </div>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('intro')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('first-project')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    下一步：第一个项目 →
                </button>
            </div>
        </div>
    `;
};

BMadTutorial.prototype.getFirstProjectContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <h1>创建第一个项目</h1>

            <p class="text-xl text-gray-600 mb-6">让我们通过创建一个简单的Web应用来体验BMAD-METHOD的强大功能。</p>

            <h2>项目初始化</h2>
            <p>使用BMAD-METHOD创建新项目非常简单：</p>

            <pre><code class="language-bash"># 创建新项目
bmad init my-todo-app

# 进入项目目录
cd my-todo-app

# 查看项目结构
ls -la</code></pre>

            <h2>项目结构解析</h2>
            <p>BMAD-METHOD会为你创建一个结构化的项目目录：</p>

            <pre><code class="language-text">my-todo-app/
├── bmad-core/              # BMAD核心文件
│   ├── agents/            # 智能体定义
│   ├── agent-teams/       # 智能体团队
│   └── workflows/         # 工作流定义
├── docs/                  # 项目文档
├── src/                   # 源代码
├── tests/                 # 测试文件
├── .bmadrc                # BMAD配置文件
└── package.json           # 项目依赖</code></pre>

            <div class="bg-blue-50 p-4 rounded-lg my-6">
                <h3 class="text-blue-800 font-semibold mb-2">🏗️ 项目结构说明</h3>
                <div class="text-blue-700 space-y-2">
                    <p><strong>bmad-core/</strong> - BMAD框架的核心组件</p>
                    <p><strong>agents/</strong> - 定义各种专门的AI智能体</p>
                    <p><strong>workflows/</strong> - 项目开发的工作流程</p>
                    <p><strong>.bmadrc</strong> - BMAD的配置文件</p>
                </div>
            </div>

            <h2>启动项目规划</h2>
            <p>现在让我们使用BMAD的智能体系统来规划我们的todo应用：</p>

            <pre><code class="language-bash"># 启动分析师智能体进行市场分析
bmad agent analyst --task="分析todo应用的市场需求"

# 启动产品经理智能体创建PRD
bmad agent pm --task="为todo应用创建产品需求文档"

# 启动架构师智能体设计系统架构
bmad agent architect --task="设计todo应用的技术架构"</code></pre>

            <h2>理解智能体协作</h2>
            <p>BMAD的核心优势在于智能体之间的协作。让我们看看每个智能体的作用：</p>

            <div class="grid md:grid-cols-3 gap-6 my-8">
                <div class="bg-white p-6 rounded-lg shadow-md border">
                    <h3 class="text-lg font-semibold mb-3 text-purple-600">🔍 分析师</h3>
                    <ul class="text-sm space-y-1">
                        <li>• 市场研究</li>
                        <li>• 竞争分析</li>
                        <li>• 用户需求分析</li>
                        <li>• 技术趋势调研</li>
                    </ul>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border">
                    <h3 class="text-lg font-semibold mb-3 text-blue-600">📋 产品经理</h3>
                    <ul class="text-sm space-y-1">
                        <li>• 需求文档编写</li>
                        <li>• 功能优先级排序</li>
                        <li>• 用户故事创建</li>
                        <li>• 验收标准定义</li>
                    </ul>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border">
                    <h3 class="text-lg font-semibold mb-3 text-green-600">🏗️ 架构师</h3>
                    <ul class="text-sm space-y-1">
                        <li>• 系统架构设计</li>
                        <li>• 技术选型</li>
                        <li>• 数据库设计</li>
                        <li>• API设计</li>
                    </ul>
                </div>
            </div>

            <h2>生成的文档示例</h2>
            <p>运行智能体后，你会在 <code>docs/</code> 目录下看到生成的文档：</p>

            <pre><code class="language-text">docs/
├── market-analysis.md      # 市场分析报告
├── prd.md                 # 产品需求文档
├── architecture.md        # 系统架构文档
└── user-stories.md        # 用户故事</code></pre>

            <h2>开始开发循环</h2>
            <p>有了完整的规划文档，现在可以开始开发循环：</p>

            <pre><code class="language-bash"># 启动Scrum Master智能体
bmad agent scrum-master --task="从epic创建第一个开发故事"

# 查看生成的故事文件
cat docs/stories/story-001-setup-project.md

# 开始实现故事
bmad develop --story=001</code></pre>

            <div class="bg-green-50 p-4 rounded-lg my-6">
                <h3 class="text-green-800 font-semibold mb-2">💡 开发循环的核心</h3>
                <p class="text-green-700">BMAD的开发循环确保每个功能都有清晰的需求、架构指导和测试策略。这种结构化的方法大大减少了开发过程中的混乱和返工。</p>
            </div>

            <h2>Web UI界面（可选）</h2>
            <p>如果你更喜欢图形化界面，可以启动BMAD的Web UI：</p>

            <pre><code class="language-bash"># 启动Web UI
bmad web --port=3000

# 访问 http://localhost:3000</code></pre>

            <h2>项目状态检查</h2>
            <p>随时检查项目的当前状态：</p>

            <pre><code class="language-bash"># 查看项目状态
bmad status

# 查看当前故事进度
bmad story status

# 查看所有智能体活动
bmad agents list</code></pre>

            <div class="mt-8 p-6 bg-purple-50 border border-purple-200 rounded-lg">
                <h3 class="text-purple-800 font-semibold mb-2">🎯 小结</h3>
                <p class="text-purple-700">恭喜！你已经成功创建了第一个BMAD项目。通过智能体协作，你获得了完整的项目规划和清晰的开发路径。接下来我们将深入学习BMAD的核心概念。</p>
            </div>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('installation')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('basic-concepts')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    下一步：核心概念 →
                </button>
            </div>
        </div>
    `;
};

BMadTutorial.prototype.getBasicConceptsContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <h1>核心概念理解</h1>

            <p class="text-xl text-gray-600 mb-6">深入理解BMAD-METHOD的核心概念是掌握这个框架的关键。</p>

            <h2>1. 智能体系统 (Agent System)</h2>
            <p>BMAD的核心是智能体系统，每个智能体都有特定的角色和专长：</p>

            <div class="bg-white p-6 rounded-lg shadow-md border mb-6">
                <h3 class="text-lg font-semibold mb-4">智能体类型</h3>
                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <span class="text-purple-600 font-bold">A</span>
                        </div>
                        <div>
                            <h4 class="font-semibold">分析师 (Analyst)</h4>
                            <p class="text-gray-600">负责市场研究、需求分析和技术调研</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span class="text-blue-600 font-bold">P</span>
                        </div>
                        <div>
                            <h4 class="font-semibold">产品经理 (Product Manager)</h4>
                            <p class="text-gray-600">创建PRD、定义功能和管理产品路线图</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <span class="text-green-600 font-bold">T</span>
                        </div>
                        <div>
                            <h4 class="font-semibold">架构师 (Architect)</h4>
                            <p class="text-gray-600">设计系统架构、技术选型和数据设计</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                            <span class="text-orange-600 font-bold">S</span>
                        </div>
                        <div>
                            <h4 class="font-semibold">Scrum Master</h4>
                            <p class="text-gray-600">管理开发流程、创建故事和协调团队</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>2. 工作流程 (Workflows)</h2>
            <p>BMAD使用YAML定义的工作流程来协调智能体之间的协作：</p>

            <pre><code class="language-yaml"># 示例工作流程
name: "Web应用开发流程"
description: "从概念到部署的完整开发流程"

phases:
  - name: "规划阶段"
    agents:
      - analyst
      - product-manager
      - architect
    outputs:
      - market-analysis.md
      - prd.md
      - architecture.md

  - name: "开发阶段"
    agents:
      - scrum-master
      - developer
    outputs:
      - user-stories.md
      - implementation
      - tests</code></pre>

            <h2>3. 模板系统 (Template System)</h2>
            <p>BMAD的模板系统确保输出的一致性和质量：</p>

            <div class="bg-gray-50 p-4 rounded-lg my-6">
                <h4 class="font-semibold mb-2">模板特性：</h4>
                <ul class="space-y-1">
                    <li>• <strong>变量替换</strong> - 动态内容生成</li>
                    <li>• <strong>条件逻辑</strong> - 基于上下文的内容</li>
                    <li>• <strong>嵌入指令</strong> - LLM处理指令</li>
                    <li>• <strong>一致性保证</strong> - 标准化输出格式</li>
                </ul>
            </div>

            <pre><code class="language-markdown"># PRD模板示例
# 产品需求文档：{{project.name}}

## 项目概览
**项目名称：** {{project.name}}
**版本：** {{project.version}}
**创建日期：** {{current.date}}

## 目标用户
{{#each target_users}}
- {{this.persona}}: {{this.description}}
{{/each}}

## 核心功能
{{#each features}}
### {{this.name}}
**优先级：** {{this.priority}}
**描述：** {{this.description}}
{{/each}}</code></pre>

            <h2>4. 上下文工程 (Context Engineering)</h2>
            <p>BMAD的核心创新之一是上下文工程，确保信息在整个开发过程中保持一致：</p>

            <div class="grid md:grid-cols-2 gap-6 my-8">
                <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 class="text-blue-800 font-semibold mb-3">问题：传统开发</h3>
                    <ul class="text-blue-700 space-y-2">
                        <li>• 需求文档过时</li>
                        <li>• 架构偏离设计</li>
                        <li>• 代码不符合规范</li>
                        <li>• 测试覆盖不足</li>
                    </ul>
                </div>
                <div class="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 class="text-green-800 font-semibold mb-3">解决：BMAD方法</h3>
                    <ul class="text-green-700 space-y-2">
                        <li>• 智能体持续同步</li>
                        <li>• 架构约束自动检查</li>
                        <li>• 代码生成遵循规范</li>
                        <li>• 测试策略一体化</li>
                    </ul>
                </div>
            </div>

            <h2>5. 故事驱动开发 (Story-Driven Development)</h2>
            <p>BMAD将大型项目分解为小的、可管理的故事：</p>

            <pre><code class="language-markdown"># 故事示例：用户注册功能
**故事ID：** STORY-001
**标题：** 用户注册功能
**优先级：** 高

## 用户故事
作为一个新用户，我希望能够创建账户，以便开始使用应用。

## 验收标准
- [ ] 用户可以输入邮箱和密码
- [ ] 密码强度验证
- [ ] 邮箱格式验证
- [ ] 注册成功后跳转到欢迎页面

## 技术任务
- [ ] 创建注册API端点
- [ ] 实现前端注册表单
- [ ] 添加表单验证
- [ ] 编写单元测试
- [ ] 集成测试

## 架构约束
- 遵循REST API设计原则
- 使用JWT进行身份验证
- 密码加密存储</code></pre>

            <h2>6. 质量门控 (Quality Gates)</h2>
            <p>BMAD内置了多层质量检查机制：</p>

            <div class="space-y-4">
                <div class="bg-white p-4 rounded-lg shadow border">
                    <h4 class="font-semibold text-purple-600">代码质量检查</h4>
                    <p class="text-gray-600">静态代码分析、代码规范检查、安全扫描</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow border">
                    <h4 class="font-semibold text-blue-600">测试覆盖率</h4>
                    <p class="text-gray-600">单元测试、集成测试、E2E测试的自动化验证</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow border">
                    <h4 class="font-semibold text-green-600">架构合规性</h4>
                    <p class="text-gray-600">确保实现符合设计的架构原则和约束</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow border">
                    <h4 class="font-semibold text-orange-600">性能基准</h4>
                    <p class="text-gray-600">性能测试和性能回归检测</p>
                </div>
            </div>

            <h2>7. 扩展包系统 (Expansion Packs)</h2>
            <p>BMAD支持通过扩展包来支持不同的领域和技术栈：</p>

            <pre><code class="language-yaml"># 扩展包配置示例
name: "React Web App Pack"
version: "1.0.0"
description: "React应用开发专用扩展包"

agents:
  - frontend-architect
  - react-developer
  - ui-designer

templates:
  - component-template.md
  - test-template.js

workflows:
  - react-development.yml

dependencies:
  - react
  - typescript
  - jest</code></pre>

            <div class="mt-8 p-6 bg-indigo-50 border border-indigo-200 rounded-lg">
                <h3 class="text-indigo-800 font-semibold mb-2">🎓 概念总结</h3>
                <p class="text-indigo-700">这些核心概念构成了BMAD-METHOD的基础。理解它们将帮助你更好地利用框架的强大功能。在下一个章节中，我们将深入学习智能体系统的高级用法。</p>
            </div>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('first-project')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('agents')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    下一步：智能体系统 →
                </button>
            </div>
        </div>
    `;
};