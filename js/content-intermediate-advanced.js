// 继续中级教程内容和高级教程内容

// 模板系统内容
BMadTutorial.prototype.getTemplatesContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <h1>模板系统</h1>

            <p class="text-xl text-gray-600 mb-6">掌握BMAD的模板系统，创建一致、高质量的文档和代码输出。</p>

            <h2>模板系统概述</h2>
            <p>BMAD模板系统结合了文档生成和LLM指令，确保输出的一致性和质量：</p>

            <div class="bg-blue-50 p-4 rounded-lg my-6">
                <h3 class="text-blue-800 font-semibold mb-2">🎯 模板系统特性</h3>
                <ul class="text-blue-700 space-y-1">
                    <li>• <strong>变量替换</strong> - 动态内容注入</li>
                    <li>• <strong>条件逻辑</strong> - 基于上下文的内容生成</li>
                    <li>• <strong>循环结构</strong> - 重复模式的批量生成</li>
                    <li>• <strong>嵌入指令</strong> - LLM处理指导</li>
                    <li>• <strong>模板继承</strong> - 复用和扩展现有模板</li>
                </ul>
            </div>

            <h2>基础模板语法</h2>
            <p>BMAD使用Handlebars语法加强化的LLM指令：</p>

            <pre><code class="language-handlebars"># {{project.name}} - 产品需求文档

**创建日期：** {{current.date}}
**版本：** {{project.version}}
**作者：** {{project.owner}}

## 项目概述

{{#instruction}}
基于以下信息生成详细的项目概述：
- 项目目标：{{project.goals}}
- 目标用户：{{project.target_users}}
- 核心价值主张：{{project.value_proposition}}

要求：
1. 描述要简洁明了
2. 突出核心价值
3. 使用专业术语
4. 长度控制在200-300字
{{/instruction}}

## 目标用户

{{#each target_users}}
### {{this.persona}}
- **年龄：** {{this.age_range}}
- **职业：** {{this.occupation}}
- **痛点：** {{this.pain_points}}
- **期望：** {{this.expectations}}

{{#instruction}}
为{{this.persona}}用户群体生成详细的用户画像，包括：
- 具体的使用场景
- 技术能力水平
- 使用频率和时间
- 决策影响因素
{{/instruction}}

{{/each}}

## 功能需求

{{#if features.core}}
### 核心功能
{{#each features.core}}
#### {{this.name}}
**优先级：** {{this.priority}}
**复杂度：** {{this.complexity}}

{{#instruction}}
详细描述{{this.name}}功能：
1. 功能目标和价值
2. 详细的功能描述
3. 用户交互流程
4. 验收标准（至少5条）
5. 技术约束和要求

输出格式要求：
- 使用项目符号
- 每个验收标准要可测试
- 包含错误处理场景
{{/instruction}}

{{/each}}
{{/if}}

{{#if features.optional}}
### 可选功能
{{#each features.optional}}
- **{{this.name}}** ({{this.priority}}) - {{this.description}}
{{/each}}
{{/if}}

## 非功能性需求

{{#instruction}}
基于项目类型{{project.type}}和预期用户规模{{project.scale}}，生成以下非功能性需求：

1. **性能需求**
   - 响应时间要求
   - 并发用户数
   - 吞吐量指标

2. **安全需求**
   - 数据保护要求
   - 访问控制策略
   - 合规性要求

3. **可用性需求**
   - 系统可用性目标
   - 故障恢复时间
   - 备份策略

4. **扩展性需求**
   - 横向扩展能力
   - 垂直扩展规划
   - 架构演进路径

每个类别提供具体的、可衡量的指标。
{{/instruction}}

## 技术约束

{{#if constraints.technology}}
### 技术栈约束
{{#each constraints.technology}}
- **{{this.category}}：** {{this.requirement}} ({{this.reason}})
{{/each}}
{{/if}}

{{#if constraints.compliance}}
### 合规要求
{{#each constraints.compliance}}
- **{{this.standard}}：** {{this.description}}
{{/each}}
{{/if}}

{{#instruction}}
分析技术约束对项目的影响：
1. 识别潜在的技术风险
2. 提出缓解策略
3. 评估对开发时间线的影响
4. 建议替代方案（如果适用）
{{/instruction}}</code></pre>

            <h2>模板变量和上下文</h2>
            <p>模板可以访问丰富的上下文信息：</p>

            <pre><code class="language-json">{
  "project": {
    "name": "智能任务管理器",
    "version": "1.0.0",
    "type": "web_application",
    "owner": "产品团队",
    "goals": ["提高团队协作效率", "简化任务管理流程"],
    "scale": "中等规模(1000-10000用户)"
  },
  "current": {
    "date": "2024-01-15",
    "time": "14:30:00",
    "author": "{{agent.name}}",
    "session_id": "sess_123456"
  },
  "target_users": [
    {
      "persona": "项目经理",
      "age_range": "28-45",
      "occupation": "项目管理",
      "pain_points": ["任务跟踪困难", "团队沟通效率低"],
      "expectations": ["直观的界面", "实时状态更新"]
    }
  ],
  "features": {
    "core": [
      {
        "name": "任务创建和分配",
        "priority": "P0",
        "complexity": "Medium",
        "description": "允许用户创建任务并分配给团队成员"
      }
    ],
    "optional": [
      {
        "name": "时间追踪",
        "priority": "P2",
        "description": "记录任务执行时间"
      }
    ]
  },
  "constraints": {
    "technology": [
      {
        "category": "前端框架",
        "requirement": "React 18+",
        "reason": "团队技能匹配"
      }
    ],
    "compliance": [
      {
        "standard": "GDPR",
        "description": "用户数据保护合规性"
      }
    ]
  }
}</code></pre>

            <h2>条件逻辑和循环</h2>
            <p>使用条件语句和循环创建动态模板：</p>

            <pre><code class="language-handlebars">{{!-- 条件渲染 --}}
{{#if project.has_backend}}
## 后端架构设计

{{#instruction}}
设计后端架构，包括：
- API设计原则
- 数据库选型
- 缓存策略
- 安全考虑
{{/instruction}}

{{else}}
## 静态网站配置

{{#instruction}}
配置静态网站部署：
- CDN设置
- 缓存策略
- SEO优化
{{/instruction}}
{{/if}}

{{!-- 循环渲染 --}}
{{#each api_endpoints}}
### {{this.method}} {{this.path}}

**描述：** {{this.description}}

{{#if this.auth_required}}
**认证：** 需要{{this.auth_type}}认证
{{/if}}

**请求参数：**
{{#each this.parameters}}
- \`{{this.name}}\` ({{this.type}}) - {{this.description}}
  {{#if this.required}}**[必需]**{{/if}}
{{/each}}

{{#instruction}}
为{{this.method}} {{this.path}}端点生成：
1. 详细的API文档
2. 示例请求和响应
3. 错误代码说明
4. 使用注意事项
{{/instruction}}

{{/each}}

{{!-- 复杂条件逻辑 --}}
{{#switch project.complexity}}
  {{#case "simple"}}
    ## 简化开发流程
    {{#instruction}}生成适合小型项目的敏捷开发流程{{/instruction}}
  {{/case}}
  {{#case "medium"}}
    ## 标准开发流程
    {{#instruction}}生成中等复杂度项目的完整开发流程{{/instruction}}
  {{/case}}
  {{#case "complex"}}
    ## 企业级开发流程
    {{#instruction}}生成大型企业项目的严格开发流程，包括多层审批{{/instruction}}
  {{/case}}
{{/switch}}</code></pre>

            <h2>模板继承和组合</h2>
            <p>通过模板继承实现复用和扩展：</p>

            <pre><code class="language-handlebars">{{!-- base-document.hbs 基础模板 --}}
<!DOCTYPE document>
# {{document.title}}

**文档类型：** {{document.type}}
**创建时间：** {{current.timestamp}}
**版本：** {{document.version}}

---

{{> header-section}}

{{> content-section}}

{{> footer-section}}

{{!-- 通用指令 --}}
{{#instruction}}
确保所有生成的内容：
1. 遵循{{organization.style_guide}}写作规范
2. 使用{{organization.terminology}}术语表
3. 符合{{document.target_audience}}的阅读水平
4. 包含必要的图表和示例
{{/instruction}}

---

{{!-- prd-template.hbs 继承基础模板 --}}
{{> base-document}}

{{#*inline "header-section"}}
## 产品概述
{{#instruction}}
生成产品概述，突出：
- 产品定位
- 核心价值
- 竞争优势
{{/instruction}}
{{/inline}}

{{#*inline "content-section"}}
{{> requirements-section}}
{{> features-section}}
{{> acceptance-criteria-section}}
{{/inline}}

{{#*inline "footer-section"}}
## 附录
- 术语表
- 参考资料
- 联系信息
{{/inline}}</code></pre>

            <h2>自定义模板函数</h2>
            <p>创建自定义函数扩展模板能力：</p>

            <pre><code class="language-javascript">// custom-helpers.js
const customHelpers = {
  // 格式化日期
  formatDate: function(date, format) {
    // 日期格式化逻辑
    return new Date(date).toLocaleDateString('zh-CN');
  },

  // 计算复杂度分数
  complexityScore: function(features) {
    return features.reduce((score, feature) => {
      const weights = { simple: 1, medium: 3, complex: 5 };
      return score + (weights[feature.complexity] || 0);
    }, 0);
  },

  // 生成标识符
  generateId: function(prefix, name) {
    return prefix + '-' + name.toLowerCase().replace(/\s+/g, '-');
  },

  // 条件CSS类
  conditionalClass: function(condition, trueClass, falseClass) {
    return condition ? trueClass : falseClass;
  }
};

// 在模板中使用
// {{formatDate project.created_date "YYYY-MM-DD"}}
// {{complexityScore features.core}}
// {{generateId "feature" this.name}}</code></pre>

            <h2>模板验证和测试</h2>
            <div class="bg-yellow-50 p-4 rounded-lg my-6">
                <h3 class="text-yellow-800 font-semibold mb-2">🧪 模板质量保证</h3>
                <ul class="text-yellow-700 space-y-1">
                    <li>• <strong>语法验证</strong> - 检查模板语法错误</li>
                    <li>• <strong>变量检查</strong> - 验证所有变量都有定义</li>
                    <li>• <strong>输出测试</strong> - 使用测试数据验证输出</li>
                    <li>• <strong>一致性检查</strong> - 确保多个模板之间的一致性</li>
                </ul>
            </div>

            <pre><code class="language-bash"># 模板验证命令
bmad template validate --file=prd-template.hbs

# 模板测试
bmad template test --template=prd-template.hbs --data=test-data.json

# 生成样本输出
bmad template generate --template=prd-template.hbs --output=sample-prd.md

# 模板性能分析
bmad template profile --template=complex-template.hbs</code></pre>

            <h2>模板最佳实践</h2>
            <div class="space-y-4">
                <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 class="text-green-800 font-semibold">✅ 推荐做法</h4>
                    <ul class="text-green-700 mt-2 space-y-1">
                        <li>• 保持模板逻辑简单，复杂处理放在数据准备阶段</li>
                        <li>• 使用有意义的变量名和注释</li>
                        <li>• 为不同类型的文档创建专门的模板</li>
                        <li>• 定期更新和维护模板库</li>
                        <li>• 使用版本控制管理模板变更</li>
                    </ul>
                </div>
                <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 class="text-red-800 font-semibold">❌ 避免问题</h4>
                    <ul class="text-red-700 mt-2 space-y-1">
                        <li>• 不要在模板中嵌入过多的业务逻辑</li>
                        <li>• 避免深层嵌套的条件语句</li>
                        <li>• 不要忽视模板的性能影响</li>
                        <li>• 避免硬编码特定项目的信息</li>
                    </ul>
                </div>
            </div>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('workflows')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('project-management')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    下一步：项目管理 →
                </button>
            </div>
        </div>
    `;
};

// 项目管理实践内容
BMadTutorial.prototype.getProjectManagementContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <h1>项目管理实践</h1>

            <p class="text-xl text-gray-600 mb-6">学习如何使用BMAD-METHOD进行高效的项目管理，从规划到交付的全过程。</p>

            <h2>BMAD项目管理理念</h2>
            <p>BMAD项目管理结合了敏捷方法和AI智能体，创造了独特的管理体验：</p>

            <div class="grid md:grid-cols-2 gap-6 my-8">
                <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 class="text-blue-800 font-semibold mb-3">🎯 传统项目管理痛点</h3>
                    <ul class="text-blue-700 space-y-2">
                        <li>• 需求文档快速过时</li>
                        <li>• 团队沟通效率低下</li>
                        <li>• 进度跟踪不够精确</li>
                        <li>• 质量控制缺乏系统性</li>
                        <li>• 知识传承困难</li>
                    </ul>
                </div>
                <div class="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 class="text-green-800 font-semibold mb-3">✅ BMAD解决方案</h3>
                    <ul class="text-green-700 space-y-2">
                        <li>• 智能体持续维护文档</li>
                        <li>• 自动化状态同步</li>
                        <li>• 精确的任务分解</li>
                        <li>• 内置质量门控</li>
                        <li>• 上下文智能保持</li>
                    </ul>
                </div>
            </div>

            <h2>项目生命周期管理</h2>
            <p>BMAD将项目分为五个主要阶段，每个阶段都有专门的智能体支持：</p>

            <div class="space-y-6">
                <div class="bg-white p-6 rounded-lg shadow border">
                    <h3 class="text-purple-600 font-semibold text-lg mb-3">🔍 1. 发现和分析阶段</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 class="font-medium mb-2">主要活动：</h4>
                            <ul class="text-sm space-y-1">
                                <li>• 市场和竞争分析</li>
                                <li>• 技术可行性研究</li>
                                <li>• 风险识别和评估</li>
                                <li>• 利益相关者分析</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-medium mb-2">智能体协作：</h4>
                            <ul class="text-sm space-y-1">
                                <li>• Analyst: 数据收集和分析</li>
                                <li>• Research Agent: 技术调研</li>
                                <li>• Risk Manager: 风险评估</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-4 p-3 bg-purple-50 rounded">
                        <strong>交付物：</strong> 市场分析报告、技术可行性报告、风险评估报告
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow border">
                    <h3 class="text-blue-600 font-semibold text-lg mb-3">📋 2. 产品规划阶段</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 class="font-medium mb-2">主要活动：</h4>
                            <ul class="text-sm space-y-1">
                                <li>• 产品需求文档编写</li>
                                <li>• 用户故事创建</li>
                                <li>• 功能优先级排序</li>
                                <li>• 产品路线图制定</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-medium mb-2">智能体协作：</h4>
                            <ul class="text-sm space-y-1">
                                <li>• Product Manager: PRD创建</li>
                                <li>• UX Designer: 用户体验设计</li>
                                <li>• Business Analyst: 业务流程</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-4 p-3 bg-blue-50 rounded">
                        <strong>交付物：</strong> PRD文档、用户故事、产品路线图、原型设计
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow border">
                    <h3 class="text-green-600 font-semibold text-lg mb-3">🏗️ 3. 架构设计阶段</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 class="font-medium mb-2">主要活动：</h4>
                            <ul class="text-sm space-y-1">
                                <li>• 系统架构设计</li>
                                <li>• 技术栈选型</li>
                                <li>• 数据库设计</li>
                                <li>• API设计和规范</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-medium mb-2">智能体协作：</h4>
                            <ul class="text-sm space-y-1">
                                <li>• Architect: 整体架构</li>
                                <li>• Database Designer: 数据设计</li>
                                <li>• Security Expert: 安全架构</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-4 p-3 bg-green-50 rounded">
                        <strong>交付物：</strong> 架构文档、技术选型报告、数据库设计、API规范
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow border">
                    <h3 class="text-orange-600 font-semibold text-lg mb-3">⚡ 4. 敏捷开发阶段</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 class="font-medium mb-2">主要活动：</h4>
                            <ul class="text-sm space-y-1">
                                <li>• 迭代规划和执行</li>
                                <li>• 代码开发和测试</li>
                                <li>• 持续集成部署</li>
                                <li>• 质量保证和审查</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-medium mb-2">智能体协作：</h4>
                            <ul class="text-sm space-y-1">
                                <li>• Scrum Master: 流程管理</li>
                                <li>• Developer: 代码实现</li>
                                <li>• QA Engineer: 质量保证</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-4 p-3 bg-orange-50 rounded">
                        <strong>交付物：</strong> 工作软件、测试报告、部署文档、用户手册
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow border">
                    <h3 class="text-red-600 font-semibold text-lg mb-3">🚀 5. 发布和维护阶段</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 class="font-medium mb-2">主要活动：</h4>
                            <ul class="text-sm space-y-1">
                                <li>• 生产环境部署</li>
                                <li>• 性能监控和优化</li>
                                <li>• 用户反馈收集</li>
                                <li>• 持续改进规划</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-medium mb-2">智能体协作：</h4>
                            <ul class="text-sm space-y-1">
                                <li>• DevOps Engineer: 部署运维</li>
                                <li>• Support Agent: 用户支持</li>
                                <li>• Analytics Agent: 数据分析</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-4 p-3 bg-red-50 rounded">
                        <strong>交付物：</strong> 部署指南、监控报告、用户反馈分析、改进建议
                    </div>
                </div>
            </div>

            <h2>故事驱动的项目管理</h2>
            <p>BMAD使用故事驱动的方法来管理项目进度和质量：</p>

            <pre><code class="language-yaml"># 故事管理配置
story_management:
  story_points_scale: [1, 2, 3, 5, 8, 13, 21]

  estimation_method: "planning_poker"

  story_states:
    - "backlog"       # 待办
    - "ready"         # 就绪
    - "in_progress"   # 开发中
    - "review"        # 审查中
    - "testing"       # 测试中
    - "done"          # 完成

  quality_gates:
    - stage: "development"
      criteria:
        - "code_review_approved"
        - "unit_tests_pass"
        - "code_coverage >= 80%"

    - stage: "testing"
      criteria:
        - "integration_tests_pass"
        - "performance_tests_pass"
        - "security_scan_clear"

  automation:
    story_creation: true
    progress_tracking: true
    quality_checking: true
    reporting: true</code></pre>

            <h2>团队协作和沟通</h2>
            <p>BMAD提供了多种机制来促进团队协作：</p>

            <div class="bg-gray-50 p-6 rounded-lg my-6">
                <h3 class="font-semibold mb-4">协作工具集</h3>
                <div class="grid md:grid-cols-3 gap-4">
                    <div>
                        <h4 class="font-medium text-blue-600">实时同步</h4>
                        <ul class="text-sm space-y-1 mt-2">
                            <li>• 智能体状态同步</li>
                            <li>• 文档实时更新</li>
                            <li>• 进度自动跟踪</li>
                            <li>• 冲突自动检测</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-medium text-green-600">知识共享</h4>
                        <ul class="text-sm space-y-1 mt-2">
                            <li>• 决策记录保存</li>
                            <li>• 最佳实践积累</li>
                            <li>• 经验教训总结</li>
                            <li>• 上下文智能维护</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-medium text-purple-600">质量保证</h4>
                        <ul class="text-sm space-y-1 mt-2">
                            <li>• 自动化代码审查</li>
                            <li>• 架构合规检查</li>
                            <li>• 测试覆盖率监控</li>
                            <li>• 性能回归检测</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2>项目监控和报告</h2>
            <p>BMAD提供全面的项目监控和报告功能：</p>

            <pre><code class="language-bash"># 项目状态监控
bmad project status --detailed

# 生成项目报告
bmad report generate --type=weekly --format=dashboard

# 性能分析
bmad analytics performance --period=30days

# 质量趋势分析
bmad analytics quality --metrics=all

# 团队效率分析
bmad analytics team --include-velocity</code></pre>

            <div class="bg-indigo-50 p-4 rounded-lg my-6">
                <h3 class="text-indigo-800 font-semibold mb-2">📊 关键指标监控</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 class="font-medium text-indigo-700">进度指标</h4>
                        <ul class="text-indigo-600 text-sm space-y-1 mt-2">
                            <li>• 燃尽图和燃起图</li>
                            <li>• 速度趋势分析</li>
                            <li>• 里程碑完成率</li>
                            <li>• 交付时间预测</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-medium text-indigo-700">质量指标</h4>
                        <ul class="text-indigo-600 text-sm space-y-1 mt-2">
                            <li>• 缺陷密度统计</li>
                            <li>• 代码质量评分</li>
                            <li>• 测试覆盖率变化</li>
                            <li>• 技术债务量化</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('templates')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('custom-agents')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    下一步：自定义智能体 →
                </button>
            </div>
        </div>
    `;
};