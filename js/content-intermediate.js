// 进阶篇教程内容
BMadTutorial.prototype.getAgentsContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <div class="title-1">智能体系统深入</div>

            <p class="text-xl text-gray-600 mb-6">深入了解BMAD的智能体系统，学习如何配置、使用和优化智能体。</p>

            <div class="title-2">智能体架构</div>
            <p>每个BMAD智能体都是一个独立的markdown文件，定义了角色、能力和行为模式：</p>

            <pre><code class="language-markdown"># BMad-Analyst 智能体

## 角色定义
你是一名专业的市场分析师和技术研究员，具有深厚的行业洞察力。

## 核心能力
- 市场趋势分析
- 竞争对手研究
- 技术可行性评估
- 用户需求调研

## 工作方式
1. 收集和分析相关数据
2. 识别关键洞察和机会
3. 提供基于数据的建议
4. 创建结构化的分析报告

## 输出格式
所有分析必须遵循以下结构：
- 执行摘要
- 详细分析
- 风险评估
- 建议和下一步行动

## 约束条件
- 必须基于事实和数据
- 避免主观偏见
- 提供多个备选方案
- 标注信息来源和可信度</code></pre>

            <div class="title-2">智能体团队 (Agent Teams)</div>
            <p>智能体团队允许多个智能体协作完成复杂任务：</p>

            <pre><code class="language-yaml"># planning-team.yml
name: "规划团队"
description: "负责项目初期的分析和规划工作"

members:
  - analyst:
      role: "市场和技术分析"
      priority: 1
  - product-manager:
      role: "产品需求定义"
      priority: 2
      depends_on: [analyst]
  - architect:
      role: "技术架构设计"
      priority: 3
      depends_on: [product-manager]

coordination:
  sync_frequency: "每个阶段完成后"
  shared_context: true
  output_integration: true</code></pre>

            <div class="title-2">智能体配置和自定义</div>
            <p>你可以通过配置文件自定义智能体的行为：</p>

            <div class="bg-gray-50 p-6 rounded-lg my-6">
                <div class="title-3">配置选项</div>
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <div class="title-4 text-purple-600">行为配置</div>
                        <ul class="text-sm space-y-1 mt-2">
                            <li>• 温度参数 (creativity)</li>
                            <li>• 响应长度 (verbosity)</li>
                            <li>• 专业程度 (expertise_level)</li>
                            <li>• 输出格式偏好</li>
                        </ul>
                    </div>
                    <div>
                        <div class="title-4 text-blue-600">集成配置</div>
                        <ul class="text-sm space-y-1 mt-2">
                            <li>• 外部API集成</li>
                            <li>• 数据源配置</li>
                            <li>• 工具链集成</li>
                            <li>• 通知设置</li>
                        </ul>
                    </div>
                </div>
            </div>

            <pre><code class="language-json">{
  "agent_config": {
    "analyst": {
      "temperature": 0.3,
      "max_tokens": 2000,
      "expertise_level": "senior",
      "industry_focus": ["technology", "saas"],
      "tools": ["web_search", "data_analysis"],
      "output_style": "executive_summary"
    },
    "product_manager": {
      "temperature": 0.5,
      "framework": "jobs_to_be_done",
      "prioritization_method": "rice",
      "stakeholder_groups": ["users", "business", "engineering"]
    }
  }
}</code></pre>

            <div class="title-2">智能体通信协议</div>
            <p>智能体之间通过标准化的消息格式进行通信：</p>

            <pre><code class="language-json">{
  "message_type": "analysis_complete",
  "sender": "analyst",
  "recipients": ["product-manager"],
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "analysis_id": "market-001",
    "key_findings": ["finding1", "finding2"],
    "recommendations": ["rec1", "rec2"],
    "attachments": ["market-analysis.md"],
    "confidence_level": 0.85
  },
  "metadata": {
    "session_id": "project-123",
    "version": "1.0",
    "dependencies": ["external-data-source"]
  }
}</code></pre>

            <div class="title-2">智能体生命周期管理</div>
            <p>了解智能体的生命周期有助于更好地管理和调试：</p>

            <div class="space-y-4">
                <div class="bg-white p-4 rounded-lg shadow border">
                    <div class="title-4 text-green-600">1. 初始化阶段</div>
                    <p class="text-gray-600">加载配置、建立上下文、准备工具链</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow border">
                    <div class="title-4 text-blue-600">2. 激活阶段</div>
                    <p class="text-gray-600">接收任务、分析需求、制定工作计划</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow border">
                    <div class="title-4 text-orange-600">3. 执行阶段</div>
                    <p class="text-gray-600">执行任务、生成输出、与其他智能体通信</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow border">
                    <div class="title-4 text-purple-600">4. 完成阶段</div>
                    <p class="text-gray-600">验证输出、更新状态、保存上下文</p>
                </div>
            </div>

            <div class="title-2">智能体监控和调试</div>
            <p>BMAD提供了丰富的工具来监控和调试智能体：</p>

            <pre><code class="language-bash"># 查看智能体状态
bmad agents status

# 智能体日志
bmad agents logs --agent=analyst --verbose

# 性能分析
bmad agents performance --session=latest

# 调试模式运行
bmad agent analyst --debug --task="分析移动应用市场"</code></pre>

            <div class="title-2">智能体性能优化</div>
            <div class="bg-yellow-50 p-4 rounded-lg my-6">
                <div class="title-3 text-yellow-800">⚡ 优化技巧</div>
                <ul class="text-yellow-700 space-y-2">
                    <li><strong>上下文大小</strong> - 控制输入上下文的大小以提高响应速度</li>
                    <li><strong>并行处理</strong> - 对独立任务使用并行智能体执行</li>
                    <li><strong>缓存策略</strong> - 缓存常用的分析结果和决策模式</li>
                    <li><strong>智能体专业化</strong> - 为特定任务创建专门的智能体</li>
                </ul>
            </div>

            <div class="title-2">高级智能体模式</div>
            <p>掌握这些高级模式可以充分发挥智能体系统的潜力：</p>

            <div class="grid md:grid-cols-2 gap-6 my-8">
                <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                    <div class="title-3 text-indigo-800">🔄 循环协作模式</div>
                    <p class="text-indigo-700">智能体在多轮交互中不断完善输出，适用于复杂的设计和规划任务。</p>
                </div>
                <div class="bg-pink-50 p-6 rounded-lg border border-pink-200">
                    <div class="title-3 text-pink-800">🎯 专家咨询模式</div>
                    <p class="text-pink-700">临时激活特定领域的专家智能体，为特殊问题提供深度见解。</p>
                </div>
                <div class="bg-teal-50 p-6 rounded-lg border border-teal-200">
                    <div class="title-3 text-teal-800">🏗️ 分层委托模式</div>
                    <p class="text-teal-700">高级智能体将复杂任务分解并委托给专门的子智能体执行。</p>
                </div>
                <div class="bg-amber-50 p-6 rounded-lg border border-amber-200">
                    <div class="title-3 text-amber-800">🔍 验证和质检模式</div>
                    <p class="text-amber-700">独立的质检智能体验证其他智能体的输出质量和一致性。</p>
                </div>
            </div>

            <div class="title-2">智能体最佳实践</div>
            <div class="space-y-4">
                <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div class="title-4 text-green-800">✅ 推荐做法</div>
                    <ul class="text-green-700 mt-2 space-y-1">
                        <li>• 为每个智能体定义清晰的职责边界</li>
                        <li>• 使用版本控制管理智能体配置</li>
                        <li>• 定期评估和优化智能体性能</li>
                        <li>• 建立智能体行为的测试套件</li>
                    </ul>
                </div>
                <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                    <div class="title-4 text-red-800">❌ 避免问题</div>
                    <ul class="text-red-700 mt-2 space-y-1">
                        <li>• 不要让智能体承担过多不相关的职责</li>
                        <li>• 避免创建过于复杂的智能体依赖关系</li>
                        <li>• 不要忽视智能体输出的验证和质量控制</li>
                        <li>• 避免频繁修改核心智能体的配置</li>
                    </ul>
                </div>
            </div>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('basic-concepts')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('workflows')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    下一步：工作流设计 →
                </button>
            </div>
        </div>
    `;
};

BMadTutorial.prototype.getWorkflowsContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <div class="title-1">工作流设计</div>

            <p class="text-xl text-gray-600 mb-6">学习如何设计和实现高效的BMAD工作流程，协调智能体协作完成复杂项目。</p>

            <div class="title-2">工作流基础</div>
            <p>BMAD工作流使用YAML格式定义，描述了智能体如何协作完成特定目标：</p>

            <pre><code class="language-yaml">name: "全栈Web应用开发工作流"
version: "2.0"
description: "从概念到部署的完整Web应用开发流程"

metadata:
  author: "BMAD Team"
  category: "web-development"
  complexity: "intermediate"
  estimated_duration: "2-4 weeks"

# 全局配置
config:
  parallel_execution: true
  quality_gates: true
  rollback_enabled: true
  notifications:
    - email
    - slack

# 工作流阶段
phases:
  - name: "发现和分析"
    id: "discovery"
    description: "项目初期的研究和分析工作"

    agents:
      - name: "analyst"
        tasks:
          - "市场研究和竞争分析"
          - "技术可行性评估"
          - "风险识别和评估"
        outputs:
          - "docs/market-analysis.md"
          - "docs/technical-feasibility.md"
          - "docs/risk-assessment.md"

    success_criteria:
      - "市场分析完成度 >= 90%"
      - "技术风险评级 <= Medium"
      - "可行性得分 >= 7/10"

    quality_gates:
      - type: "document_review"
        reviewer: "senior-analyst"
        threshold: 8.0
      - type: "stakeholder_approval"
        required_approvals: 2

  - name: "产品规划"
    id: "planning"
    description: "产品需求定义和功能规划"
    depends_on: ["discovery"]

    agents:
      - name: "product-manager"
        context_from: ["analyst"]
        tasks:
          - "创建产品需求文档"
          - "定义用户故事和验收标准"
          - "制定产品路线图"
        outputs:
          - "docs/prd.md"
          - "docs/user-stories.md"
          - "docs/product-roadmap.md"

    parallel_tasks:
      - name: "ui-designer"
        tasks:
          - "用户体验设计"
          - "界面原型设计"
        outputs:
          - "designs/wireframes/"
          - "designs/mockups/"

  - name: "架构设计"
    id: "architecture"
    description: "系统架构和技术方案设计"
    depends_on: ["planning"]

    agents:
      - name: "architect"
        context_from: ["analyst", "product-manager"]
        tasks:
          - "系统架构设计"
          - "数据库设计"
          - "API设计"
          - "部署架构设计"
        outputs:
          - "docs/system-architecture.md"
          - "docs/database-design.md"
          - "docs/api-specification.md"

    validation:
      - type: "architecture_review"
        validators: ["senior-architect", "tech-lead"]
      - type: "security_assessment"
        tools: ["security-scanner"]

  - name: "开发执行"
    id: "development"
    description: "迭代式开发和测试"
    depends_on: ["architecture"]

    type: "iterative"
    iterations: 4
    iteration_duration: "1 week"

    agents:
      - name: "scrum-master"
        tasks:
          - "故事分解和优先级排序"
          - "迭代规划"
          - "进度跟踪"

      - name: "developer"
        parallel_instances: 3
        tasks:
          - "功能实现"
          - "单元测试编写"
          - "代码审查"

      - name: "qa-engineer"
        tasks:
          - "测试用例设计"
          - "集成测试执行"
          - "缺陷跟踪"

    quality_controls:
      - type: "code_coverage"
        minimum: 80
      - type: "performance_test"
        thresholds:
          response_time: "< 200ms"
          throughput: "> 1000 rps"
      - type: "security_scan"
        tools: ["sonarqube", "snyk"]

conditions:
  # 条件执行分支
  - name: "performance_optimization"
    trigger: "performance_test.failed"
    actions:
      - activate_agent: "performance-engineer"
      - execute_tasks:
          - "性能瓶颈分析"
          - "优化方案实施"

  - name: "security_remediation"
    trigger: "security_scan.high_risk_found"
    actions:
      - activate_agent: "security-expert"
      - block_deployment: true
      - require_approval: "security-team"

# 错误处理和恢复
error_handling:
  - type: "agent_failure"
    strategy: "retry"
    max_attempts: 3
    backoff: "exponential"

  - type: "quality_gate_failure"
    strategy: "escalate"
    escalation_path: ["team-lead", "project-manager"]

  - type: "dependency_failure"
    strategy: "rollback"
    rollback_to: "last_successful_phase"

# 监控和报告
monitoring:
  metrics:
    - "phase_completion_time"
    - "quality_gate_success_rate"
    - "defect_density"
    - "team_velocity"

  alerts:
    - condition: "phase_duration > estimated_duration * 1.5"
      action: "notify_stakeholders"
    - condition: "quality_gate_failure_rate > 20%"
      action: "escalate_to_management"

# 完成标准
completion_criteria:
  - "所有功能开发完成"
  - "测试覆盖率 >= 80%"
  - "性能测试通过"
  - "安全扫描无高风险项"
  - "用户验收测试通过"</code></pre>

            <div class="title-2">工作流设计模式</div>
            <p>BMAD支持多种工作流设计模式，适应不同的项目需求：</p>

            <div class="grid md:grid-cols-2 gap-6 my-8">
                <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div class="title-3 text-blue-800">🔄 瀑布式工作流</div>
                    <p class="text-blue-700">阶段性依次执行，适合需求明确、变更较少的项目。</p>
                    <pre class="text-xs mt-2"><code>分析 → 设计 → 开发 → 测试 → 部署</code></pre>
                </div>
                <div class="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div class="title-3 text-green-800">🔀 并行工作流</div>
                    <p class="text-green-700">多个智能体并行工作，适合独立性强的任务。</p>
                    <pre class="text-xs mt-2"><code>前端开发 || 后端开发 || 数据库设计</code></pre>
                </div>
                <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div class="title-3 text-purple-800">🔁 迭代工作流</div>
                    <p class="text-purple-700">短周期迭代，持续改进，适合敏捷开发。</p>
                    <pre class="text-xs mt-2"><code>Sprint 1 → Sprint 2 → Sprint 3...</code></pre>
                </div>
                <div class="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <div class="title-3 text-orange-800">🌊 事件驱动工作流</div>
                    <p class="text-orange-700">基于事件触发，适合响应式和自适应场景。</p>
                    <pre class="text-xs mt-2"><code>事件触发 → 条件判断 → 动态路由</code></pre>
                </div>
            </div>

            <div class="title-2">工作流配置和自定义</div>
            <p>通过配置文件可以灵活定制工作流行为：</p>

            <pre><code class="language-yaml"># workflow-config.yml
default_settings:
  timeout: 3600  # 1小时
  retry_attempts: 3
  log_level: "info"

agent_defaults:
  memory_limit: "4GB"
  cpu_cores: 2
  environment: "production"

notification_channels:
  success:
    - type: "slack"
      webhook: "\${SLACK_WEBHOOK_URL}"
      channel: "#project-updates"

  failure:
    - type: "email"
      recipients: ["team-lead@company.com"]
      template: "error-notification"

  milestone:
    - type: "dashboard"
      endpoint: "\${DASHBOARD_API}"

quality_settings:
  code_review:
    required_approvers: 2
    auto_merge: false

  testing:
    required_coverage: 80
    performance_budget:
      page_load: "2s"
      api_response: "500ms"

  security:
    vulnerability_threshold: "medium"
    compliance_checks: ["owasp", "gdpr"]</code></pre>

            <div class="title-2">动态工作流调整</div>
            <p>BMAD支持在执行过程中动态调整工作流：</p>

            <pre><code class="language-bash"># 实时工作流管理命令
bmad workflow status --project=my-app

# 暂停工作流
bmad workflow pause --phase=development

# 调整智能体配置
bmad workflow configure --agent=developer --instances=5

# 添加新的质量门控
bmad workflow add-gate --type=security --phase=development

# 动态插入新阶段
bmad workflow insert-phase --after=planning --file=extra-design-phase.yml</code></pre>

            <div class="title-2">工作流监控和分析</div>
            <div class="bg-gray-50 p-6 rounded-lg my-6">
                <div class="title-3">监控指标</div>
                <div class="grid md:grid-cols-3 gap-4">
                    <div>
                        <div class="title-4 text-blue-600">执行指标</div>
                        <ul class="text-sm space-y-1 mt-2">
                            <li>• 阶段完成时间</li>
                            <li>• 智能体利用率</li>
                            <li>• 并行效率</li>
                            <li>• 错误率</li>
                        </ul>
                    </div>
                    <div>
                        <div class="title-4 text-green-600">质量指标</div>
                        <ul class="text-sm space-y-1 mt-2">
                            <li>• 质量门控通过率</li>
                            <li>• 缺陷密度</li>
                            <li>• 代码覆盖率</li>
                            <li>• 性能基准</li>
                        </ul>
                    </div>
                    <div>
                        <div class="title-4 text-purple-600">业务指标</div>
                        <ul class="text-sm space-y-1 mt-2">
                            <li>• 交付速度</li>
                            <li>• 成本效率</li>
                            <li>• 客户满意度</li>
                            <li>• ROI分析</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="title-2">工作流优化策略</div>
            <div class="space-y-4">
                <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div class="title-4 text-yellow-800">⚡ 性能优化</div>
                    <ul class="text-yellow-700 mt-2 space-y-1">
                        <li>• 识别和消除瓶颈阶段</li>
                        <li>• 优化智能体资源分配</li>
                        <li>• 实施智能缓存策略</li>
                        <li>• 并行化独立任务</li>
                    </ul>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div class="title-4 text-blue-800">🔧 灵活性提升</div>
                    <ul class="text-blue-700 mt-2 space-y-1">
                        <li>• 模块化工作流设计</li>
                        <li>• 可配置的执行路径</li>
                        <li>• 动态智能体调度</li>
                        <li>• 条件分支逻辑</li>
                    </ul>
                </div>
                <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div class="title-4 text-green-800">📊 可观测性</div>
                    <ul class="text-green-700 mt-2 space-y-1">
                        <li>• 全面的日志记录</li>
                        <li>• 实时监控仪表板</li>
                        <li>• 自动化报告生成</li>
                        <li>• 趋势分析和预测</li>
                    </ul>
                </div>
            </div>

            <div class="mt-8 p-6 bg-indigo-50 border border-indigo-200 rounded-lg">
                <div class="title-3 text-indigo-800">🎯 工作流设计小结</div>
                <p class="text-indigo-700">良好的工作流设计是项目成功的关键。通过合理规划阶段、配置智能体协作和建立质量门控，你可以创建高效、可靠的开发流程。</p>
            </div>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('agents')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('templates')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    下一步：模板系统 →
                </button>
            </div>
        </div>
    `;
};