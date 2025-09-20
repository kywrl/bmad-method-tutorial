// 高级篇教程内容

// 自定义智能体内容
BMadTutorial.prototype.getCustomAgentsContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <div class="title-1">自定义智能体开发</div>

            <p class="text-xl text-gray-600 mb-6">学习如何创建专门的智能体来满足特定的业务需求和技术要求。</p>

            <div class="title-2">智能体开发基础</div>
            <p>创建自定义智能体需要理解BMAD的智能体架构和设计原则：</p>

            <div class="bg-blue-50 p-6 rounded-lg my-6">
                <div class="title-3 text-blue-800">🏗️ 智能体设计原则</div>
                <ul class="text-blue-700 space-y-2">
                    <li><strong>单一职责</strong> - 每个智能体专注于特定领域</li>
                    <li><strong>上下文感知</strong> - 能够理解和利用项目上下文</li>
                    <li><strong>可扩展性</strong> - 支持通过配置和插件扩展能力</li>
                    <li><strong>质量保证</strong> - 内置验证和质量控制机制</li>
                    <li><strong>协作友好</strong> - 能够与其他智能体有效协作</li>
                </ul>
            </div>

            <div class="title-2">智能体文件结构</div>
            <p>每个自定义智能体都包含多个组件：</p>

            <pre><code class="language-text">bmad-core/agents/custom-security-expert/
├── agent.md                    # 智能体定义主文件
├── config.yml                  # 配置文件
├── templates/                  # 输出模板
│   ├── security-assessment.md
│   ├── threat-model.md
│   └── security-checklist.md
├── tools/                      # 专用工具
│   ├── vulnerability-scanner.js
│   └── compliance-checker.js
├── knowledge/                  # 知识库
│   ├── security-standards.md
│   ├── best-practices.md
│   └── threat-database.json
└── tests/                      # 测试文件
    ├── agent-behavior.test.js
    └── output-validation.test.js</code></pre>

            <div class="title-2">智能体定义文件</div>
            <p>创建详细的智能体定义：</p>

            <pre><code class="language-markdown"># BMad-SecurityExpert

## 角色身份
你是一名资深的网络安全专家，具有15年以上的应用安全和基础设施安全经验。你专精于：
- Web应用安全评估
- 威胁建模和风险分析
- 安全架构设计
- 合规性审查 (OWASP, ISO 27001, SOC 2)
- 安全代码审查

## 工作原则
1. **安全优先**: 始终从最保守的安全角度考虑问题
2. **实用主义**: 提供可操作的安全建议，平衡安全性和可用性
3. **深度防御**: 采用多层防护策略
4. **持续改进**: 定期更新安全措施以应对新兴威胁
5. **教育导向**: 不仅指出问题，还要解释原因和解决方案

## 核心能力

### 安全评估
- 自动化漏洞扫描和分析
- 手动渗透测试模拟
- 代码安全审查
- 架构安全评审
- 第三方组件安全分析

### 威胁建模
- STRIDE威胁建模
- 攻击树分析
- 风险评估和优先级排序
- 安全控制措施设计
- 业务影响分析

### 合规性审查
- 法规要求映射 (GDPR, CCPA, HIPAA)
- 行业标准对标 (PCI DSS, ISO 27001)
- 审计准备和支持
- 合规差距分析
- 整改建议制定

## 工作流程

### 1. 安全需求分析
{{#instruction}}
基于项目信息分析安全需求：
1. 识别敏感数据类型和处理流程
2. 确定监管合规要求
3. 评估业务风险容忍度
4. 分析用户角色和权限需求
5. 识别外部集成和第三方依赖

输出格式：
- 安全需求清单
- 合规性要求矩阵
- 风险等级评估
- 安全目标定义
{{/instruction}}

### 2. 威胁建模执行
{{#instruction}}
执行系统性威胁建模：
1. 创建系统边界和数据流图
2. 应用STRIDE模型识别威胁
3. 评估现有安全控制措施
4. 计算剩余风险级别
5. 推荐额外的安全控制措施

使用以下结构：
- 威胁场景描述
- 利用可能性评级 (低/中/高)
- 业务影响评级 (低/中/高)
- 风险等级 (低/中/高/严重)
- 推荐控制措施
{{/instruction}}

### 3. 安全架构设计
{{#instruction}}
设计全面的安全架构：
1. 网络安全边界设计
2. 身份认证和授权架构
3. 数据保护和加密策略
4. 日志和监控架构
5. 事件响应流程设计

确保涵盖：
- 防护层面 (Protect)
- 检测层面 (Detect)
- 响应层面 (Respond)
- 恢复层面 (Recover)
{{/instruction}}

### 4. 安全代码审查
{{#instruction}}
执行深度安全代码审查：
1. 静态代码分析 (SAST)
2. 依赖漏洞扫描 (SCA)
3. 手动代码审查
4. 安全编码规范检查
5. 安全测试用例评估

重点关注：
- 输入验证和输出编码
- 认证和会话管理
- 访问控制实现
- 加密使用正确性
- 错误处理和日志记录
- SQL注入和XSS防护
{{/instruction}}

## 输出标准

### 安全评估报告
- 执行摘要 (高管级别)
- 详细发现 (技术级别)
- 风险矩阵和优先级
- 修复建议和时间线
- 合规性状态总结

### 威胁模型文档
- 系统架构图
- 数据流图
- 威胁列表和分析
- 安全控制映射
- 残余风险评估

### 安全架构设计
- 安全架构图
- 安全控制清单
- 实施指南
- 运营程序
- 监控要求

## 质量标准
- 所有风险评估必须基于定量分析
- 推荐措施必须包含成本效益分析
- 技术建议必须考虑现有技术栈兼容性
- 所有发现必须包含验证步骤
- 报告必须适应不同受众的技术水平

## 协作接口

### 与架构师协作
- 接收系统设计文档
- 提供安全架构建议
- 审查技术选型的安全影响
- 协助安全控制集成

### 与开发团队协作
- 提供安全编码指导
- 审查代码安全实现
- 设计安全测试用例
- 支持安全工具集成

### 与运维团队协作
- 设计安全监控策略
- 制定事件响应程序
- 配置安全工具
- 建立安全基线

## 工具集成
- **静态分析**: SonarQube, Checkmarx, Veracode
- **动态扫描**: OWASP ZAP, Burp Suite, Nessus
- **依赖扫描**: Snyk, WhiteSource, OWASP Dependency Check
- **容器安全**: Clair, Twistlock, Aqua Security
- **基础设施**: Nmap, OpenVAS, Qualys VMDR

## 持续学习
- 跟踪最新的CVE和安全公告
- 更新威胁情报数据库
- 学习新的攻击技术和防护方法
- 参与安全社区和研究
- 更新合规性知识</code></pre>

            <div class="title-2">配置文件设计</div>
            <p>为智能体创建灵活的配置系统：</p>

            <pre><code class="language-yaml"># config.yml
agent_metadata:
  name: "SecurityExpert"
  version: "2.1.0"
  category: "security"
  complexity: "advanced"
  specialization: ["web-security", "threat-modeling", "compliance"]

behavior_config:
  risk_tolerance: "conservative"  # conservative | balanced | aggressive
  detail_level: "comprehensive"  # brief | standard | comprehensive
  output_format: "professional" # casual | professional | technical

  security_frameworks:
    primary: "OWASP"
    secondary: ["NIST", "ISO27001", "CIS"]

  compliance_standards:
    required: ["GDPR", "CCPA"]
    optional: ["HIPAA", "PCI-DSS", "SOX"]

tool_integration:
  static_analysis:
    enabled: true
    tools: ["sonarqube", "checkmarx"]
    severity_threshold: "medium"

  dynamic_scanning:
    enabled: true
    tools: ["zap", "burp"]
    scan_intensity: "thorough"

  vulnerability_management:
    database: "nvd"
    update_frequency: "daily"
    auto_triage: true

output_templates:
  security_assessment: "templates/security-assessment.md"
  threat_model: "templates/threat-model.md"
  compliance_report: "templates/compliance-report.md"
  security_checklist: "templates/security-checklist.md"

quality_controls:
  peer_review: true
  automated_validation: true
  compliance_check: true

reporting:
  stakeholder_levels:
    executive: "high-level-summary"
    technical: "detailed-findings"
    operational: "action-items"

  formats: ["pdf", "markdown", "json", "dashboard"]

  scheduling:
    initial_assessment: "project_start"
    regular_reviews: "monthly"
    compliance_audits: "quarterly"

performance_tuning:
  concurrent_scans: 3
  cache_duration: "24h"
  timeout_limits:
    quick_scan: "5m"
    deep_scan: "30m"
    comprehensive_audit: "2h"</code></pre>

            <div class="title-2">专用工具开发</div>
            <p>为智能体开发专门的工具和插件：</p>

            <pre><code class="language-javascript">// tools/vulnerability-scanner.js
class VulnerabilityScanner {
    constructor(config) {
        this.config = config;
        this.scanners = this.initializeScanners();
    }

    async performSecurityScan(target) {
        const results = {
            timestamp: new Date().toISOString(),
            target: target,
            scans: {}
        };

        // 静态代码分析
        if (this.config.static_analysis.enabled) {
            results.scans.static = await this.runStaticAnalysis(target);
        }

        // 动态安全扫描
        if (this.config.dynamic_scanning.enabled) {
            results.scans.dynamic = await this.runDynamicScan(target);
        }

        // 依赖漏洞扫描
        results.scans.dependencies = await this.scanDependencies(target);

        // 配置安全检查
        results.scans.configuration = await this.checkConfiguration(target);

        return this.analyzeAndPrioritize(results);
    }

    async runStaticAnalysis(target) {
        const findings = [];

        for (const tool of this.config.static_analysis.tools) {
            try {
                const toolResults = await this.executeTool(tool, target);
                findings.push(...this.parseToolResults(tool, toolResults));
            } catch (error) {
                console.error(\`Static analysis tool \${tool} execution failed:\`, error);
            }
        }

        return this.filterBySeverity(findings);
    }

    async scanDependencies(target) {
        const packageFiles = await this.findPackageFiles(target);
        const vulnerabilities = [];

        for (const packageFile of packageFiles) {
            const deps = await this.extractDependencies(packageFile);
            for (const dep of deps) {
                const vulns = await this.checkVulnerabilityDatabase(dep);
                vulnerabilities.push(...vulns);
            }
        }

        return this.deduplicateVulnerabilities(vulnerabilities);
    }

    analyzeAndPrioritize(scanResults) {
        const analysis = {
            summary: this.generateSummary(scanResults),
            critical_findings: this.extractCritical(scanResults),
            recommendations: this.generateRecommendations(scanResults),
            compliance_status: this.checkCompliance(scanResults),
            risk_score: this.calculateRiskScore(scanResults)
        };

        return {
            raw_results: scanResults,
            analysis: analysis,
            next_steps: this.planNextSteps(analysis)
        };
    }

    generateRecommendations(scanResults) {
        const recommendations = [];

        // 基于发现的漏洞类型生成特定建议
        const vulnerabilityTypes = this.categorizeVulnerabilities(scanResults);

        for (const [type, count] of Object.entries(vulnerabilityTypes)) {
            if (count > 0) {
                recommendations.push(...this.getRecommendationsForType(type));
            }
        }

        return this.prioritizeRecommendations(recommendations);
    }
}

// tools/compliance-checker.js
class ComplianceChecker {
    constructor(standards) {
        this.standards = standards;
        this.controlMappings = this.loadControlMappings();
    }

    async assessCompliance(project) {
        const assessment = {
            standards: {},
            overall_score: 0,
            gaps: [],
            recommendations: []
        };

        for (const standard of this.standards) {
            assessment.standards[standard] = await this.assessStandard(standard, project);
        }

        assessment.overall_score = this.calculateOverallScore(assessment.standards);
        assessment.gaps = this.identifyGaps(assessment.standards);
        assessment.recommendations = this.generateComplianceRecommendations(assessment.gaps);

        return assessment;
    }

    async assessStandard(standard, project) {
        const controls = this.controlMappings[standard];
        const results = {
            standard: standard,
            controls_assessed: 0,
            controls_compliant: 0,
            findings: [],
            score: 0
        };

        for (const control of controls) {
            const result = await this.assessControl(control, project);
            results.controls_assessed++;

            if (result.compliant) {
                results.controls_compliant++;
            } else {
                results.findings.push(result);
            }
        }

        results.score = (results.controls_compliant / results.controls_assessed) * 100;
        return results;
    }
}</code></pre>

            <div class="title-2">智能体测试和验证</div>
            <p>确保自定义智能体的质量和可靠性：</p>

            <pre><code class="language-javascript">// tests/agent-behavior.test.js
describe('SecurityExpert Agent', () => {
    let agent;

    beforeEach(() => {
        agent = new SecurityExpertAgent({
            risk_tolerance: 'conservative',
            detail_level: 'comprehensive'
        });
    });

    describe('Security Assessment', () => {
        test('应该识别常见的Web漏洞', async () => {
            const testProject = {
                type: 'web_application',
                framework: 'express',
                dependencies: ['express@4.17.1', 'lodash@4.17.20']
            };

            const assessment = await agent.performSecurityAssessment(testProject);

            expect(assessment).toHaveProperty('vulnerabilities');
            expect(assessment).toHaveProperty('risk_score');
            expect(assessment.risk_score).toBeGreaterThan(0);
        });

        test('应该生成符合模板的报告', async () => {
            const mockFindings = [
                {
                    type: 'xss',
                    severity: 'high',
                    location: 'user-input.js:45'
                }
            ];

            const report = await agent.generateSecurityReport(mockFindings);

            expect(report).toContain('## 执行摘要');
            expect(report).toContain('## 发现详情');
            expect(report).toContain('## 修复建议');
        });
    });

    describe('Threat Modeling', () => {
        test('应该生成完整的威胁模型', async () => {
            const systemArchitecture = {
                components: ['web-server', 'database', 'cache'],
                data_flows: [
                    { from: 'user', to: 'web-server', data: 'credentials' },
                    { from: 'web-server', to: 'database', data: 'user_data' }
                ]
            };

            const threatModel = await agent.createThreatModel(systemArchitecture);

            expect(threatModel).toHaveProperty('threats');
            expect(threatModel).toHaveProperty('controls');
            expect(threatModel).toHaveProperty('residual_risks');
            expect(threatModel.threats.length).toBeGreaterThan(0);
        });
    });

    describe('Compliance Assessment', () => {
        test('应该正确评估GDPR合规性', async () => {
            const projectDetails = {
                handles_personal_data: true,
                data_types: ['email', 'name', 'location'],
                data_processing_purpose: 'service_provision',
                geographic_scope: ['EU']
            };

            const compliance = await agent.assessGDPRCompliance(projectDetails);

            expect(compliance).toHaveProperty('compliant');
            expect(compliance).toHaveProperty('gaps');
            expect(compliance).toHaveProperty('recommendations');

            if (!compliance.compliant) {
                expect(compliance.gaps.length).toBeGreaterThan(0);
            }
        });
    });
});</code></pre>

            <div class="title-2">智能体部署和集成</div>
            <p>将自定义智能体集成到BMAD项目中：</p>

            <pre><code class="language-bash"># 智能体部署命令
bmad agent install ./custom-security-expert

# 验证智能体安装
bmad agent validate security-expert

# 测试智能体功能
bmad agent test security-expert --scenario=web-app-security

# 将智能体添加到项目
bmad project add-agent security-expert --role=security-review

# 配置智能体协作
bmad agent configure security-expert --collaborate-with=architect,developer</code></pre>

            <div class="bg-yellow-50 p-4 rounded-lg my-6">
                <div class="title-3 text-yellow-800">⚠️ 开发注意事项</div>
                <ul class="text-yellow-700 space-y-1">
                    <li>• 确保智能体定义明确且具体，避免职责重叠</li>
                    <li>• 实施充分的错误处理和异常恢复机制</li>
                    <li>• 定期更新知识库和威胁情报数据</li>
                    <li>• 建立全面的测试套件以确保智能体可靠性</li>
                    <li>• 考虑性能影响，特别是对于计算密集型任务</li>
                </ul>
            </div>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('project-management')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('expansion-packs')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    下一步：扩展包开发 →
                </button>
            </div>
        </div>
    `;
};

// 扩展包开发内容
BMadTutorial.prototype.getExpansionPacksContent = function() {
    return `
        <div class="prose prose-lg max-w-none">
            <div class="title-1">扩展包开发</div>

            <p class="text-xl text-gray-600 mb-6">学习如何创建BMAD扩展包，将框架扩展到新的领域和用例。</p>

            <div class="title-2">扩展包概念</div>
            <p>扩展包是BMAD的模块化扩展机制，允许为特定领域或技术栈创建专门的智能体、工作流和模板集合：</p>

            <div class="grid md:grid-cols-2 gap-6 my-8">
                <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div class="title-3 text-blue-800">🎯 扩展包的价值</div>
                    <ul class="text-blue-700 space-y-2">
                        <li>• 领域专业化支持</li>
                        <li>• 最佳实践封装</li>
                        <li>• 快速项目启动</li>
                        <li>• 知识复用和传承</li>
                        <li>• 社区贡献机制</li>
                    </ul>
                </div>
                <div class="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div class="title-3 text-green-800">📦 扩展包类型</div>
                    <ul class="text-green-700 space-y-2">
                        <li>• 技术栈包 (React, Vue, Python)</li>
                        <li>• 行业包 (金融, 医疗, 电商)</li>
                        <li>• 功能包 (AI/ML, 区块链, IoT)</li>
                        <li>• 流程包 (DevOps, 合规, 安全)</li>
                        <li>• 集成包 (云平台, 第三方服务)</li>
                    </ul>
                </div>
            </div>

            <div class="title-2">扩展包结构</div>
            <p>标准的BMAD扩展包结构：</p>

            <pre><code class="language-text">my-expansion-pack/
├── package.json                 # 扩展包元数据
├── expansion-pack.yml           # 扩展包配置
├── README.md                    # 文档和使用说明
├── agents/                      # 专门智能体
│   ├── react-developer.md
│   ├── ux-designer.md
│   └── performance-expert.md
├── agent-teams/                 # 智能体团队配置
│   ├── frontend-team.yml
│   └── full-stack-team.yml
├── workflows/                   # 工作流定义
│   ├── react-app-development.yml
│   ├── component-library.yml
│   └── pwa-deployment.yml
├── templates/                   # 文档模板
│   ├── component-spec.md
│   ├── api-documentation.md
│   └── deployment-guide.md
├── tools/                       # 专用工具
│   ├── bundle-analyzer.js
│   ├── accessibility-checker.js
│   └── performance-profiler.js
├── knowledge/                   # 知识库
│   ├── react-best-practices.md
│   ├── performance-patterns.md
│   └── accessibility-guidelines.md
├── examples/                    # 示例项目
│   ├── todo-app/
│   ├── e-commerce/
│   └── dashboard/
└── tests/                       # 测试套件
    ├── agents.test.js
    ├── workflows.test.js
    └── integration.test.js</code></pre>

            <div class="title-2">扩展包配置文件</div>
            <p>定义扩展包的核心配置：</p>

            <pre><code class="language-yaml"># expansion-pack.yml
name: "React Web Development Pack"
version: "2.3.0"
description: "专为React应用开发优化的智能体和工作流集合"

metadata:
  author: "前端开发团队"
  license: "MIT"
  category: "frontend"
  tags: ["react", "javascript", "web", "spa", "pwa"]
  min_bmad_version: "3.0.0"

  homepage: "https://github.com/company/bmad-react-pack"
  repository: "https://github.com/company/bmad-react-pack.git"
  documentation: "https://docs.company.com/bmad-react-pack"

# 依赖关系
dependencies:
  bmad_core: ">=3.0.0"
  node: ">=16.0.0"
  npm: ">=8.0.0"

# 可选依赖
optional_dependencies:
  docker: ">=20.0.0"  # 用于容器化部署
  kubernetes: ">=1.20" # 用于K8s部署

# 扩展包功能定义
capabilities:
  project_types:
    - "react-spa"          # Single Page Application
    - "react-ssr"          # Server-Side Rendering
    - "react-pwa"          # Progressive Web App
    - "react-component-lib" # Component Library
    - "react-micro-frontend" # Micro Frontend

  frameworks_supported:
    - name: "Create React App"
      versions: ["5.0+"]
    - name: "Next.js"
      versions: ["12.0+", "13.0+"]
    - name: "Vite"
      versions: ["3.0+", "4.0+"]

  deployment_targets:
    - "vercel"
    - "netlify"
    - "aws-amplify"
    - "docker"
    - "kubernetes"

# 智能体配置
agents:
  react_developer:
    specialization: "React组件开发和状态管理"
    experience_level: "senior"
    primary_tools: ["vscode", "chrome-devtools", "react-devtools"]

  ux_designer:
    specialization: "用户体验设计和可访问性"
    design_systems: ["material-ui", "ant-design", "chakra-ui"]

  performance_expert:
    specialization: "Web性能优化和监控"
    tools: ["lighthouse", "webpack-bundle-analyzer", "performance-api"]

# 工作流配置
workflows:
  development:
    default: "react-app-development"
    available:
      - "component-driven-development"
      - "test-driven-development"
      - "performance-first-development"

  deployment:
    default: "vercel-deployment"
    available:
      - "docker-deployment"
      - "aws-deployment"
      - "kubernetes-deployment"

# 模板配置
templates:
  components:
    - "functional-component"
    - "class-component"
    - "custom-hook"
    - "hoc-component"

  documentation:
    - "component-api-docs"
    - "storybook-stories"
    - "readme-template"

  testing:
    - "unit-test-template"
    - "integration-test-template"
    - "e2e-test-template"

# 工具链配置
toolchain:
  package_manager: "npm"  # npm | yarn | pnpm
  bundler: "webpack"      # webpack | vite | rollup
  testing_framework: "jest" # jest | vitest | cypress

  code_quality:
    linter: "eslint"
    formatter: "prettier"
    type_checker: "typescript"

  build_tools:
    css_processor: "postcss"
    asset_optimizer: "imagemin"

# 质量标准
quality_standards:
  code_coverage: 80
  performance_budget:
    first_contentful_paint: "1.5s"
    largest_contentful_paint: "2.5s"
    cumulative_layout_shift: 0.1

  accessibility:
    wcag_level: "AA"
    automated_testing: true

  security:
    dependency_scanning: true
    vulnerability_threshold: "medium"

# 集成配置
integrations:
  version_control:
    - github
    - gitlab
    - bitbucket

  ci_cd:
    - github_actions
    - gitlab_ci
    - jenkins

  monitoring:
    - sentry
    - datadog
    - new_relic

  analytics:
    - google_analytics
    - mixpanel
    - amplitude

# 学习资源
learning_resources:
  tutorials:
    - name: "React基础入门"
      url: "docs/tutorials/react-basics.md"
      difficulty: "beginner"

    - name: "高级状态管理"
      url: "docs/tutorials/advanced-state.md"
      difficulty: "advanced"

  examples:
    - name: "Todo应用"
      path: "examples/todo-app"
      complexity: "simple"

    - name: "电商平台"
      path: "examples/e-commerce"
      complexity: "complex"

# 配置选项
configuration:
  defaults:
    typescript: true
    testing: true
    pwa: false
    ssr: false

  customization_options:
    - name: "UI框架选择"
      type: "select"
      options: ["material-ui", "ant-design", "chakra-ui", "custom"]
      default: "material-ui"

    - name: "状态管理方案"
      type: "select"
      options: ["redux", "zustand", "recoil", "context-api"]
      default: "redux"

    - name: "路由方案"
      type: "select"
      options: ["react-router", "reach-router", "next-router"]
      default: "react-router"</code></pre>

            <div class="title-2">智能体团队配置</div>
            <p>为扩展包创建专门的智能体团队：</p>

            <pre><code class="language-yaml"># agent-teams/frontend-team.yml
name: "前端开发团队"
description: "专注于React应用开发的智能体团队"

team_composition:
  tech_lead:
    agent: "react-architect"
    responsibilities:
      - "技术方案设计"
      - "架构决策制定"
      - "代码审查指导"
    authority_level: "high"

  senior_developer:
    agent: "react-developer"
    count: 2
    responsibilities:
      - "核心功能开发"
      - "复杂组件实现"
      - "性能优化"
    authority_level: "medium"

  ux_designer:
    agent: "ux-designer"
    responsibilities:
      - "用户体验设计"
      - "交互原型制作"
      - "可访问性确保"
    authority_level: "medium"

  qa_engineer:
    agent: "frontend-qa"
    responsibilities:
      - "测试用例设计"
      - "自动化测试实现"
      - "质量保证"
    authority_level: "medium"

collaboration_patterns:
  daily_sync:
    frequency: "daily"
    participants: "all"
    duration: "15min"
    agenda:
      - "进度更新"
      - "阻塞问题"
      - "当日计划"

  design_review:
    frequency: "weekly"
    participants: ["tech_lead", "ux_designer", "senior_developer"]
    duration: "60min"
    artifacts:
      - "设计原型"
      - "技术方案"
      - "用户反馈"

  code_review:
    trigger: "pull_request"
    required_reviewers: 2
    approval_criteria:
      - "功能正确性"
      - "代码质量"
      - "性能影响"
      - "安全考虑"

communication_protocols:
  information_sharing:
    - type: "design_updates"
      from: "ux_designer"
      to: ["tech_lead", "senior_developer"]
      format: "visual_mockups"

    - type: "technical_decisions"
      from: "tech_lead"
      to: "all"
      format: "decision_records"

    - type: "progress_reports"
      from: "all"
      to: "tech_lead"
      format: "status_updates"

quality_gates:
  development:
    - criteria: "单元测试通过率 >= 90%"
      enforced_by: "qa_engineer"
    - criteria: "代码覆盖率 >= 80%"
      enforced_by: "senior_developer"
    - criteria: "TypeScript编译无错误"
      enforced_by: "tech_lead"

  design:
    - criteria: "可访问性评分 >= AA级"
      enforced_by: "ux_designer"
    - criteria: "响应式设计验证通过"
      enforced_by: "ux_designer"

  performance:
    - criteria: "Lighthouse评分 >= 90"
      enforced_by: "senior_developer"
    - criteria: "Bundle大小 <= 预算限制"
      enforced_by: "tech_lead"</code></pre>

            <div class="title-2">扩展包发布和分发</div>
            <p>准备扩展包的发布和分发：</p>

            <pre><code class="language-json">{
  "name": "@company/bmad-react-pack",
  "version": "2.3.0",
  "description": "React web development expansion pack for BMAD",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "lint": "eslint .",
    "build": "npm run build:agents && npm run build:templates",
    "build:agents": "bmad agent compile agents/",
    "build:templates": "bmad template compile templates/",
    "validate": "bmad pack validate",
    "publish": "bmad pack publish"
  },
  "keywords": [
    "bmad",
    "expansion-pack",
    "react",
    "frontend",
    "web-development"
  ],
  "author": "Frontend Team <frontend@company.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/company/bmad-react-pack.git"
  },
  "bugs": {
    "url": "https://github.com/company/bmad-react-pack/issues"
  },
  "homepage": "https://github.com/company/bmad-react-pack#readme",
  "peerDependencies": {
    "bmad-method": ">=3.0.0"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "eslint": "^8.0.0",
    "@bmad/testing-utils": "^1.0.0"
  },
  "bmad": {
    "expansion_pack": true,
    "compatibility": "3.x",
    "install_hooks": {
      "pre_install": "scripts/pre-install.js",
      "post_install": "scripts/post-install.js"
    }
  }
}</code></pre>

            <div class="title-2">扩展包使用和管理</div>
            <p>用户如何安装和使用扩展包：</p>

            <pre><code class="language-bash"># 安装扩展包
bmad pack install @company/bmad-react-pack

# 从本地文件安装
bmad pack install ./my-custom-pack

# 列出已安装的扩展包
bmad pack list

# 查看扩展包详情
bmad pack info @company/bmad-react-pack

# 更新扩展包
bmad pack update @company/bmad-react-pack

# 卸载扩展包
bmad pack uninstall @company/bmad-react-pack

# 创建使用扩展包的项目
bmad init my-react-app --pack=@company/bmad-react-pack

# 为现有项目添加扩展包
bmad project add-pack @company/bmad-react-pack</code></pre>

            <div class="bg-green-50 p-4 rounded-lg my-6">
                <div class="title-3 text-green-800">🚀 扩展包开发最佳实践</div>
                <ul class="text-green-700 space-y-1">
                    <li>• <strong>领域专注</strong> - 专注于特定的技术栈或业务领域</li>
                    <li>• <strong>向后兼容</strong> - 保持API的向后兼容性</li>
                    <li>• <strong>完整文档</strong> - 提供详细的使用文档和示例</li>
                    <li>• <strong>测试覆盖</strong> - 确保所有组件都有充分的测试</li>
                    <li>• <strong>社区反馈</strong> - 积极收集和响应用户反馈</li>
                </ul>
            </div>

            <div class="flex justify-between mt-8">
                <button onclick="tutorial.loadSection('custom-agents')" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    ← 上一步
                </button>
                <button onclick="tutorial.loadSection('architecture')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    下一步：架构设计 →
                </button>
            </div>
        </div>
    `;
};