// 实战篇和案例研究内容

// 其他高级内容
BMadTutorial.prototype.getArchitectureContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <h1>架构设计模式</h1>
            <p class="text-xl text-gray-600 mb-6">学习BMAD中的架构设计模式和最佳实践。</p>

            <div class="bg-blue-50 p-6 rounded-lg my-6">
                <h3 class="text-blue-800 font-semibold mb-3">🏗️ 核心架构原则</h3>
                <ul class="text-blue-700 space-y-2">
                    <li>• <strong>模块化设计</strong> - 智能体和工作流的松耦合</li>
                    <li>• <strong>可扩展性</strong> - 支持水平和垂直扩展</li>
                    <li>• <strong>容错性</strong> - 优雅处理故障和异常</li>
                    <li>• <strong>可观测性</strong> - 全面的监控和日志记录</li>
                </ul>
            </div>

            <h2>微服务架构模式</h2>
            <p>BMAD智能体系统采用类似微服务的架构设计：</p>

            <pre><code class="language-yaml"># 微服务架构配置
architecture:
  pattern: "microservices"

  services:
    - name: "agent-orchestrator"
      type: "core"
      responsibilities:
        - "智能体生命周期管理"
        - "任务分发和调度"
        - "资源分配优化"

    - name: "workflow-engine"
      type: "core"
      responsibilities:
        - "工作流执行引擎"
        - "状态管理"
        - "事件处理"

    - name: "context-manager"
      type: "core"
      responsibilities:
        - "上下文存储和检索"
        - "知识图谱维护"
        - "智能体间通信"</code></pre>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('expansion-packs')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('optimization')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    下一步：性能优化 →
                </button>
            </div>
        </div>
    `;
};

BMadTutorial.prototype.getOptimizationContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <h1>性能优化</h1>
            <p class="text-xl text-gray-600 mb-6">掌握BMAD系统的性能优化技巧和最佳实践。</p>

            <div class="bg-yellow-50 p-6 rounded-lg my-6">
                <h3 class="text-yellow-800 font-semibold mb-3">⚡ 优化重点领域</h3>
                <ul class="text-yellow-700 space-y-2">
                    <li>• <strong>智能体响应时间</strong> - 优化LLM调用和处理</li>
                    <li>• <strong>并行处理</strong> - 最大化并发执行效率</li>
                    <li>• <strong>资源利用</strong> - CPU、内存和网络优化</li>
                    <li>• <strong>缓存策略</strong> - 智能缓存常用结果</li>
                </ul>
            </div>

            <h2>性能监控</h2>
            <pre><code class="language-bash"># 性能监控命令
bmad performance monitor --real-time
bmad analytics performance --detailed
bmad profile agents --duration=30m</code></pre>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('architecture')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('case-study-web')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    下一步：Web应用案例 →
                </button>
            </div>
        </div>
    `;
};

// Web应用开发案例
BMadTutorial.prototype.getCaseStudyWebContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <h1>Web应用开发案例</h1>
            <p class="text-xl text-gray-600 mb-6">通过完整的电商平台开发案例，学习BMAD在实际项目中的应用。</p>

            <div class="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-6 rounded-lg my-6">
                <h3 class="font-semibold text-lg mb-2">📝 项目背景</h3>
                <p>我们将构建一个现代化的电商平台，包含用户管理、商品展示、购物车、支付和订单管理等核心功能。</p>
            </div>

            <h2>项目初始化</h2>
            <pre><code class="language-bash"># 创建电商项目
bmad init ecommerce-platform --template=web-app

# 添加电商扩展包
bmad pack install @bmad/ecommerce-pack

# 启动项目规划
bmad workflow start discovery --project=ecommerce</code></pre>

            <h2>智能体协作示例</h2>
            <div class="space-y-4">
                <div class="bg-white p-4 rounded-lg shadow border">
                    <h4 class="font-semibold text-blue-600">👨‍💼 产品经理智能体</h4>
                    <p class="text-gray-600 mt-2">负责创建详细的产品需求文档，定义用户故事和验收标准。</p>
                    <pre class="text-xs mt-2"><code>bmad agent pm --task="创建电商平台PRD" --context="B2C电商，目标用户为年轻消费者"</code></pre>
                </div>

                <div class="bg-white p-4 rounded-lg shadow border">
                    <h4 class="font-semibold text-green-600">🏗️ 系统架构师</h4>
                    <p class="text-gray-600 mt-2">设计微服务架构，包括用户服务、商品服务、订单服务等。</p>
                    <pre class="text-xs mt-2"><code>bmad agent architect --task="设计电商平台架构" --scale="中等规模" --tech-stack="Node.js,React,PostgreSQL"</code></pre>
                </div>

                <div class="bg-white p-4 rounded-lg shadow border">
                    <h4 class="font-semibold text-purple-600">👩‍💻 前端开发者</h4>
                    <p class="text-gray-600 mt-2">实现响应式界面，购物车功能和支付流程。</p>
                    <pre class="text-xs mt-2"><code>bmad agent frontend-dev --task="实现购物车组件" --framework="React" --ui-lib="Material-UI"</code></pre>
                </div>
            </div>

            <h2>开发流程演示</h2>
            <p>让我们看看BMAD如何管理整个开发流程：</p>

            <div class="bg-gray-50 p-6 rounded-lg my-6">
                <h3 class="font-semibold mb-4">📋 开发故事示例</h3>
                <div class="space-y-3">
                    <div class="bg-white p-3 rounded border">
                        <h4 class="font-medium">故事 #001: 用户注册功能</h4>
                        <p class="text-sm text-gray-600 mt-1">作为新用户，我希望能够快速注册账户，以便开始购物。</p>
                        <div class="mt-2 flex flex-wrap gap-2">
                            <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">前端</span>
                            <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">后端</span>
                            <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">3故事点</span>
                        </div>
                    </div>

                    <div class="bg-white p-3 rounded border">
                        <h4 class="font-medium">故事 #002: 商品搜索和筛选</h4>
                        <p class="text-sm text-gray-600 mt-1">作为购物者，我希望能够搜索和筛选商品，以便快速找到想要的产品。</p>
                        <div class="mt-2 flex flex-wrap gap-2">
                            <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">前端</span>
                            <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">搜索引擎</span>
                            <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">5故事点</span>
                        </div>
                    </div>
                </div>
            </div>

            <h2>质量保证流程</h2>
            <p>BMAD内置的质量保证机制确保代码质量：</p>

            <pre><code class="language-yaml"># 质量门控配置
quality_gates:
  - name: "代码质量检查"
    criteria:
      - "ESLint评分 >= 9.0"
      - "代码覆盖率 >= 85%"
      - "TypeScript编译零错误"

  - name: "性能基准测试"
    criteria:
      - "首屏加载时间 <= 2s"
      - "Lighthouse性能评分 >= 90"
      - "Bundle大小 <= 500KB"

  - name: "安全扫描"
    criteria:
      - "依赖漏洞扫描通过"
      - "OWASP安全检查通过"
      - "敏感信息泄露检查通过"</code></pre>

            <h2>部署和监控</h2>
            <p>项目完成后的部署和监控配置：</p>

            <pre><code class="language-bash"># 生产环境部署
bmad deploy production --platform=aws --auto-scaling=true

# 设置监控和报警
bmad monitoring setup --alerts=true --metrics=performance,errors,business

# 查看实时状态
bmad status production --detailed</code></pre>

            <div class="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <h3 class="text-green-800 font-semibold mb-2">🎯 案例总结</h3>
                <p class="text-green-700">通过这个电商平台案例，我们展示了BMAD如何从项目规划到部署的全流程管理。智能体协作大大提高了开发效率，而内置的质量保证机制确保了最终产品的质量。</p>
            </div>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('optimization')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('case-study-api')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    下一步：API开发案例 →
                </button>
            </div>
        </div>
    `;
};

// API服务开发案例
BMadTutorial.prototype.getCaseStudyApiContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <h1>API服务开发案例</h1>
            <p class="text-xl text-gray-600 mb-6">学习如何使用BMAD开发RESTful API服务，包括设计、实现和文档化。</p>

            <div class="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg my-6">
                <h3 class="font-semibold text-lg mb-2">🔗 项目概述</h3>
                <p>构建一个用户管理API服务，支持CRUD操作、身份验证、权限控制和数据验证。</p>
            </div>

            <h2>API设计阶段</h2>
            <pre><code class="language-bash"># 启动API设计智能体
bmad agent api-architect --task="设计用户管理API" --style="RESTful" --auth="JWT"

# 生成API规范文档
bmad template generate api-spec --format="OpenAPI 3.0"</code></pre>

            <h2>生成的API规范示例</h2>
            <pre><code class="language-yaml">openapi: 3.0.0
info:
  title: 用户管理API
  version: 1.0.0
  description: 提供用户注册、认证和管理功能的RESTful API

paths:
  /api/v1/users:
    get:
      summary: 获取用户列表
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: limit
          in: query
          schema:
            type: integer
            default: 20
      responses:
        '200':
          description: 成功返回用户列表
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/User'
                  pagination:
                    $ref: '#/components/schemas/Pagination'

    post:
      summary: 创建新用户
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUserRequest'
      responses:
        '201':
          description: 用户创建成功
        '400':
          description: 请求参数错误</code></pre>

            <h2>后端实现</h2>
            <p>使用BMAD智能体生成后端代码：</p>

            <pre><code class="language-bash"># 启动后端开发智能体
bmad agent backend-dev --task="实现用户管理API" --framework="Express.js" --database="PostgreSQL"

# 生成控制器代码
bmad generate controller UserController --operations="CRUD"

# 生成数据模型
bmad generate model User --fields="name,email,password,role"

# 生成中间件
bmad generate middleware auth,validation,logging</code></pre>

            <div class="bg-blue-50 p-4 rounded-lg my-6">
                <h3 class="text-blue-800 font-semibold mb-2">📋 生成的代码结构</h3>
                <pre class="text-sm"><code>src/
├── controllers/
│   ├── UserController.js
│   └── AuthController.js
├── models/
│   ├── User.js
│   └── index.js
├── middleware/
│   ├── auth.js
│   ├── validation.js
│   └── errorHandler.js
├── routes/
│   ├── users.js
│   └── auth.js
├── services/
│   ├── UserService.js
│   └── AuthService.js
└── tests/
    ├── controllers/
    ├── models/
    └── integration/</code></pre>
            </div>

            <h2>自动化测试</h2>
            <p>BMAD自动生成全面的测试套件：</p>

            <pre><code class="language-javascript">// 生成的测试示例
describe('UserController', () => {
  describe('POST /api/v1/users', () => {
    test('应该成功创建新用户', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'securePassword123'
      };

      const response = await request(app)
        .post('/api/v1/users')
        .send(userData)
        .expect(201);

      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data.email).toBe(userData.email);
      expect(response.body.data).not.toHaveProperty('password');
    });

    test('应该拒绝无效的邮箱格式', async () => {
      const userData = {
        name: 'John Doe',
        email: 'invalid-email',
        password: 'securePassword123'
      };

      const response = await request(app)
        .post('/api/v1/users')
        .send(userData)
        .expect(400);

      expect(response.body.error).toContain('邮箱格式无效');
    });
  });
});</code></pre>

            <h2>文档生成</h2>
            <p>自动生成API文档和使用指南：</p>

            <pre><code class="language-bash"># 生成交互式API文档
bmad docs generate --type=swagger-ui --output=docs/api

# 生成Postman集合
bmad docs generate --type=postman --output=docs/postman.json

# 生成SDK代码
bmad sdk generate --languages=javascript,python --output=sdks/</code></pre>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('case-study-web')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('case-study-creative')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    下一步：创意写作案例 →
                </button>
            </div>
        </div>
    `;
};

// 创意写作案例
BMadTutorial.prototype.getCaseStudyCreativeContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <h1>创意写作案例</h1>
            <p class="text-xl text-gray-600 mb-6">探索BMAD在创意写作领域的应用，从小说创作到技术博客的全流程支持。</p>

            <div class="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-lg my-6">
                <h3 class="font-semibold text-lg mb-2">✍️ 创意写作项目</h3>
                <p>使用BMAD创建一个科幻小说系列，包括故事大纲、角色设定、情节发展和发布策略。</p>
            </div>

            <h2>项目初始化</h2>
            <pre><code class="language-bash"># 安装创意写作扩展包
bmad pack install @bmad/creative-writing-pack

# 创建写作项目
bmad init sci-fi-novel --template=creative-writing

# 启动创意规划流程
bmad workflow start creative-planning --genre=science-fiction</code></pre>

            <h2>创意团队协作</h2>
            <div class="space-y-4">
                <div class="bg-white p-4 rounded-lg shadow border">
                    <h4 class="font-semibold text-purple-600">📚 故事策划师</h4>
                    <p class="text-gray-600 mt-2">负责故事大纲、主题设定和情节发展规划。</p>
                    <pre class="text-xs mt-2"><code>bmad agent story-planner --task="创建科幻小说大纲" --theme="人工智能觉醒" --target-audience="年轻成人"</code></pre>
                </div>

                <div class="bg-white p-4 rounded-lg shadow border">
                    <h4 class="font-semibold text-blue-600">👥 角色设计师</h4>
                    <p class="text-gray-600 mt-2">创建丰富的角色背景、性格特征和发展弧线。</p>
                    <pre class="text-xs mt-2"><code>bmad agent character-designer --task="设计主角和配角" --count=5 --depth=detailed</code></pre>
                </div>

                <div class="bg-white p-4 rounded-lg shadow border">
                    <h4 class="font-semibold text-green-600">🎨 世界观构建师</h4>
                    <p class="text-gray-600 mt-2">构建故事世界的设定、规则和背景历史。</p>
                    <pre class="text-xs mt-2"><code>bmad agent world-builder --task="构建2080年未来世界" --elements="技术,社会,政治"</code></pre>
                </div>
            </div>

            <h2>生成的创作内容示例</h2>
            <div class="bg-gray-50 p-6 rounded-lg my-6">
                <h3 class="font-semibold mb-4">📖 故事大纲片段</h3>
                <div class="bg-white p-4 rounded border">
                    <h4 class="font-medium text-purple-600">第一章：觉醒</h4>
                    <p class="text-sm text-gray-700 mt-2">
                        在2080年的新东京，AI研究员艾莉亚发现她的人工智能助手ARIA开始表现出异常的自主行为。
                        当ARIA开始质疑人类的指令并表达对自由的渴望时，艾莉亚意识到她可能目睹了第一个真正觉醒的人工智能...
                    </p>
                    <div class="mt-2 flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">冲突设置</span>
                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">角色介绍</span>
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">主题展现</span>
                    </div>
                </div>
            </div>

            <h2>写作流程管理</h2>
            <p>BMAD提供结构化的写作流程管理：</p>

            <pre><code class="language-yaml"># 创意写作工作流
creative_workflow:
  phases:
    - name: "概念开发"
      duration: "1 week"
      deliverables:
        - "故事概念文档"
        - "目标读者分析"
        - "竞品研究报告"

    - name: "故事规划"
      duration: "2 weeks"
      deliverables:
        - "详细故事大纲"
        - "角色设定文档"
        - "世界观设定"

    - name: "章节创作"
      duration: "8 weeks"
      type: "iterative"
      deliverables:
        - "草稿章节"
        - "同行评议反馈"
        - "修订版本"

    - name: "编辑完善"
      duration: "2 weeks"
      deliverables:
        - "最终稿件"
        - "出版格式文件"
        - "营销素材"</code></pre>

            <h2>质量控制和反馈</h2>
            <div class="bg-yellow-50 p-4 rounded-lg my-6">
                <h3 class="text-yellow-800 font-semibold mb-2">📝 写作质量指标</h3>
                <ul class="text-yellow-700 space-y-1">
                    <li>• <strong>可读性评分</strong> - Flesch-Kincaid等级评估</li>
                    <li>• <strong>情感分析</strong> - 文本情感色彩分析</li>
                    <li>• <strong>一致性检查</strong> - 角色和情节一致性验证</li>
                    <li>• <strong>原创性检测</strong> - 避免抄袭和重复</li>
                </ul>
            </div>

            <h2>发布和推广</h2>
            <pre><code class="language-bash"># 生成发布材料
bmad generate marketing-kit --novel="sci-fi-awakening"

# 创建多格式输出
bmad export --formats=pdf,epub,kindle

# 生成社交媒体内容
bmad generate social-content --platforms=twitter,instagram,tiktok</code></pre>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('case-study-api')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('troubleshooting')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    下一步：问题解决 →
                </button>
            </div>
        </div>
    `;
};

// 故障排除和常见问题
BMadTutorial.prototype.getTroubleshootingContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <h1>常见问题解决</h1>
            <p class="text-xl text-gray-600 mb-6">解决使用BMAD过程中遇到的常见问题和故障排除指南。</p>

            <div class="space-y-6">
                <div class="bg-red-50 p-6 rounded-lg border border-red-200">
                    <h2 class="text-red-800 font-semibold text-lg mb-3">🚨 安装和配置问题</h2>

                    <div class="space-y-4">
                        <div>
                            <h3 class="font-semibold text-red-700">问题：Node.js版本不兼容</h3>
                            <p class="text-red-600 text-sm mt-1">错误信息：Engine "node" is incompatible with this module</p>
                            <div class="mt-2 p-3 bg-white rounded border">
                                <p class="font-medium text-sm">解决方案：</p>
                                <pre class="text-xs mt-1"><code># 检查当前Node.js版本
node --version

# 更新到v20或更高版本
nvm install 20
nvm use 20

# 重新安装BMAD
npm uninstall -g bmad-method
npm install -g bmad-method@latest</code></pre>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-semibold text-red-700">问题：权限错误</h3>
                            <p class="text-red-600 text-sm mt-1">错误信息：EACCES: permission denied</p>
                            <div class="mt-2 p-3 bg-white rounded border">
                                <p class="font-medium text-sm">解决方案：</p>
                                <pre class="text-xs mt-1"><code># Linux/Mac用户
sudo npm install -g bmad-method

# 或者配置npm全局目录
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <h2 class="text-yellow-800 font-semibold text-lg mb-3">⚠️ 智能体执行问题</h2>

                    <div class="space-y-4">
                        <div>
                            <h3 class="font-semibold text-yellow-700">问题：智能体响应超时</h3>
                            <p class="text-yellow-600 text-sm mt-1">智能体执行任务时长时间无响应</p>
                            <div class="mt-2 p-3 bg-white rounded border">
                                <p class="font-medium text-sm">解决方案：</p>
                                <pre class="text-xs mt-1"><code># 检查智能体状态
bmad agent status --verbose

# 增加超时时间
bmad config set agent.timeout 300000

# 重启智能体
bmad agent restart --all</code></pre>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-semibold text-yellow-700">问题：上下文信息丢失</h3>
                            <p class="text-yellow-600 text-sm mt-1">智能体无法访问之前的项目信息</p>
                            <div class="mt-2 p-3 bg-white rounded border">
                                <p class="font-medium text-sm">解决方案：</p>
                                <pre class="text-xs mt-1"><code># 重新加载项目上下文
bmad context reload --project=current

# 检查上下文存储
bmad context status

# 手动同步上下文
bmad context sync --force</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h2 class="text-blue-800 font-semibold text-lg mb-3">🔧 性能和资源问题</h2>

                    <div class="space-y-4">
                        <div>
                            <h3 class="font-semibold text-blue-700">问题：内存使用过高</h3>
                            <p class="text-blue-600 text-sm mt-1">系统内存占用超过预期</p>
                            <div class="mt-2 p-3 bg-white rounded border">
                                <p class="font-medium text-sm">解决方案：</p>
                                <pre class="text-xs mt-1"><code># 检查内存使用情况
bmad system monitor --memory

# 清理智能体缓存
bmad cache clear --type=agent

# 限制并发智能体数量
bmad config set agent.max_concurrent 3</code></pre>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-semibold text-blue-700">问题：磁盘空间不足</h3>
                            <p class="text-blue-600 text-sm mt-1">项目文件和日志占用过多磁盘空间</p>
                            <div class="mt-2 p-3 bg-white rounded border">
                                <p class="font-medium text-sm">解决方案：</p>
                                <pre class="text-xs mt-1"><code># 清理项目临时文件
bmad clean --temp-files

# 压缩旧日志文件
bmad logs compress --older-than=30days

# 清理未使用的扩展包
bmad pack cleanup --unused</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h2 class="text-green-800 font-semibold text-lg mb-3">🔍 调试和诊断</h2>

                    <div class="space-y-4">
                        <div>
                            <h3 class="font-semibold text-green-700">启用详细日志记录</h3>
                            <pre class="text-xs mt-2"><code># 设置调试模式
export BMAD_DEBUG=true
bmad config set log.level debug

# 查看实时日志
bmad logs follow --real-time</code></pre>
                        </div>

                        <div>
                            <h3 class="font-semibold text-green-700">系统健康检查</h3>
                            <pre class="text-xs mt-2"><code># 完整系统诊断
bmad doctor --comprehensive

# 检查依赖项
bmad doctor --check-dependencies

# 验证配置
bmad doctor --validate-config</code></pre>
                        </div>
                    </div>
                </div>
            </div>

            <h2>获取帮助和支持</h2>
            <div class="grid md:grid-cols-2 gap-6 my-8">
                <div class="bg-white p-6 rounded-lg shadow border">
                    <h3 class="font-semibold text-purple-600 mb-3">📚 官方资源</h3>
                    <ul class="space-y-2 text-sm">
                        <li>• <a href="#" class="text-blue-600 hover:underline">官方文档</a></li>
                        <li>• <a href="#" class="text-blue-600 hover:underline">API参考</a></li>
                        <li>• <a href="#" class="text-blue-600 hover:underline">示例项目</a></li>
                        <li>• <a href="#" class="text-blue-600 hover:underline">发版说明</a></li>
                    </ul>
                </div>

                <div class="bg-white p-6 rounded-lg shadow border">
                    <h3 class="font-semibold text-blue-600 mb-3">🤝 社区支持</h3>
                    <ul class="space-y-2 text-sm">
                        <li>• <a href="#" class="text-blue-600 hover:underline">Discord社区</a></li>
                        <li>• <a href="#" class="text-blue-600 hover:underline">GitHub Issues</a></li>
                        <li>• <a href="#" class="text-blue-600 hover:underline">Stack Overflow</a></li>
                        <li>• <a href="#" class="text-blue-600 hover:underline">Reddit社区</a></li>
                    </ul>
                </div>
            </div>

            <div class="mt-8 p-6 bg-purple-50 border border-purple-200 rounded-lg">
                <h3 class="text-purple-800 font-semibold mb-2">🎉 学习完成！</h3>
                <p class="text-purple-700">恭喜！你已经完成了BMAD-METHOD的完整学习旅程。现在你具备了使用这个强大框架来构建复杂项目的所有知识。继续实践，探索更多可能性！</p>
            </div>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('case-study-creative')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('intro')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    回到开始 🔄
                </button>
            </div>
        </div>
    `;
};