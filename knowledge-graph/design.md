以下是第二步细化稿，只保留**知识网络结构、每个结构里有什么、以及结构之间的关系**，可以直接作为后续绘制 AI 中文知识网络图的底稿。它延续你要系统学习 **AI / LLM / Agent** 的目标，并保留后续继续往下钻的空间。 

## 0. 总体组织方式

这张图不要只画成一棵树，最好同时按三种维度组织：
**纵向主干**：基础 → 学习 → 模型 → 训练/推理 → 应用 → Agent → 生产；
**横向分支**：语言、视觉、语音、视频、多模态、决策、机器人、3D、游戏等；
**横切公共轴**：数据、评测、安全、基础设施、产品。这样的组织方式同时兼容经典 AI 的主线、Hugging Face 对 LLM/Agents/MCP/RL/CV/Audio/Diffusion/Robotics 等课程体系的划分，以及 OpenAI 对 agent 的 models / tools / state / orchestration 拆法。([aima.cs.berkeley.edu][1])

```text
AI 知识网络
├─ A. 基础理论与计算机底座
├─ B. 经典 AI
├─ C. 机器学习
├─ D. 深度学习与基础模型
├─ E. 模态与任务域
├─ F. 数据层（横切）
├─ G. LLM 核心机制
├─ H. 模型适配、后训练与对齐
├─ I. 检索、记忆与外部知识
├─ J. AI 应用工程
├─ K. Agent 系统
├─ L. 运行时与基础设施
├─ M. 评测、安全与治理
└─ N. 产品、场景与组织
```

---

## A. 基础理论与计算机底座

这一层是整张图的公共地基；HF 的 LLM 课程、Google 的 ML 基础课程、PyTorch 基础教程都把“编程、数据、建模、优化、训练流程”放在前置位置。([Hugging Face][2])

### A1. 数学基础

* 线性代数

  * 向量、矩阵、张量
  * 线性变换
  * 内积、范数、相似度
  * 分解、特征值/特征向量
* 概率统计

  * 随机变量、分布、采样
  * 期望、方差、协方差
  * 条件概率、贝叶斯
  * 估计、校准、置信
* 微积分与优化

  * 导数、偏导、链式法则
  * 梯度下降
  * SGD、Adam 类优化器
  * 学习率、收敛、稳定性
* 信息论

  * 熵
  * 交叉熵
  * KL 散度
  * 互信息
* 数值计算

  * 浮点精度
  * 数值稳定性
  * 近似计算
  * 并行计算直觉

### A2. 计算机基础

* 编程语言

  * Python
  * JavaScript / TypeScript
  * C / C++ / Rust / Swift（偏系统或高性能方向）
* 数据结构与算法

  * 数组、链表、树、图、堆、哈希
  * 搜索、排序、图算法
* 操作系统与并发

  * 进程、线程、协程
  * 并发、异步、锁、队列
* 网络与协议

  * HTTP
  * WebSocket
  * RPC / JSON-RPC
  * API 设计
* 数据系统

  * SQL
  * NoSQL
  * 缓存
  * 消息队列
  * 对象存储
  * 向量存储
* 软件工程

  * Git
  * 包管理
  * 测试
  * CI/CD
  * 日志
  * 监控
  * 密钥与权限管理

### A3. 实验与研究方法

* 问题定义
* Baseline
* 指标设计
* 对照实验
* 消融实验
* 误差分析
* 可重复性
* 版本管理

### A 层关系

* A 是 C、D、J、K、L、M 的前置层。
* 数学基础主要流向：机器学习、深度学习、优化、评测。
* 计算机基础主要流向：应用工程、Agent 编排、部署与基础设施。
* 实验方法主要流向：训练、评测、调优、产品迭代。

---

## B. 经典 AI

经典 AI 不是“过时知识”，而是今天很多 Agent / RL / Robotics / Planning 系统的上游。AIMA 的经典主线包括：搜索、约束满足、知识表示、推理、规划、不确定性推理、决策、多智能体、机器学习、强化学习、NLP、机器人、CV、伦理与安全。([aima.cs.berkeley.edu][1])

### B1. 智能体观

* 环境（Environment）
* 状态（State）
* 动作（Action）
* 目标（Goal）
* 效用（Utility）
* 策略（Policy）
* 感知—决策—行动闭环

### B2. 搜索

* 无信息搜索

  * BFS
  * DFS
  * Uniform Cost Search
* 启发式搜索

  * Greedy
  * A*
* 局部搜索

  * Hill Climbing
  * Simulated Annealing
* 对抗搜索

  * Minimax
  * Alpha-Beta Pruning
  * Monte Carlo Tree Search

### B3. 约束满足与组合问题

* CSP
* SAT / SMT
* 变量、域、约束
* 回溯搜索
* 约束传播
* 调度、排班、组合优化

### B4. 知识表示

* 命题逻辑
* 一阶逻辑
* 规则系统
* 本体（Ontology）
* 知识图谱
* 语义网络
* 符号表示

### B5. 推理

* 演绎推理
* 归纳推理
* 溯因推理
* 定理证明
* 规则推理
* 基于知识的问答

### B6. 规划

* Goal-based planning
* Task planning
* Symbolic planning
* Plan search
* Multi-step planning
* Plan verification

### B7. 不确定性与概率推理

* 贝叶斯网络
* 隐马尔可夫模型
* 时序概率模型
* 概率图模型
* 概率程序
* 在不确定条件下推理

### B8. 决策与多智能体

* 决策理论
* MDP
* POMDP
* Multi-agent decision making
* 博弈论直觉
* 协作与竞争

### B9. 经典 AI 与现代 AI 的连接点

* 搜索 → 推理模型 / tree search / verifier
* 规划 → Agent task decomposition
* 知识表示 → KG-RAG / ontology-guided systems
* 决策 → RL / tool selection / policy learning
* 多智能体 → multi-agent orchestration

### B 层关系

* B2/B3/B6 是 K 层 Agent 编排的理论祖先。
* B4/B5 与 I 层检索、知识库、KG-RAG 强连接。
* B7/B8 与 C 层机器学习、强化学习、M 层风险决策相连。
* B 层很多内容在现代系统里不再单独主导模型，但会以“约束、规则、图、规划器、验证器”的形式复现。

---

## C. 机器学习

Google 的 ML 基础课程把核心问题组织为回归、分类、特征、损失、泛化、指标等；这层是理解预训练、SFT、偏好优化、评测集、泛化与分布漂移的通用语言。([Google for Developers][3])

### C1. 问题设定

* 特征（Features）
* 标签（Labels）
* 目标函数
* 训练集 / 验证集 / 测试集
* IID 假设
* 分布漂移
* 泛化

### C2. 学习范式

* 监督学习

  * 回归
  * 分类
  * 排序
* 无监督学习

  * 聚类
  * 降维
  * 密度估计
* 自监督学习
* 半监督学习
* 迁移学习
* 在线学习
* 主动学习
* 元学习
* 强化学习

### C3. 经典模型家族

* 线性回归 / 逻辑回归
* 决策树
* 随机森林
* GBDT
* SVM / 核方法
* 朴素贝叶斯
* 聚类模型
* 矩阵分解 / 表示学习

### C4. 共性问题

* 过拟合 / 欠拟合
* 偏差 / 方差
* 类别不平衡
* 特征工程
* 数据泄漏
* 校准
* 鲁棒性
* 可解释性

### C5. 指标体系

* Accuracy
* Precision / Recall / F1
* AUC
* MSE / MAE
* Ranking metrics
* Calibration
* Cost-sensitive metrics

### C6. 与大模型的对应关系

* 预训练 ≈ 大规模自监督学习
* SFT ≈ 监督学习
* DPO / GRPO / RFT / RLHF ≈ 反馈/奖励驱动的后训练
* Evals ≈ 面向生成式系统的扩展测试体系

### C 层关系

* C 是 D、G、H、M 的直接前置层。
* C 的“泛化、分布、指标、反馈”概念，贯穿 LLM、Agent、评测和产品层。
* C 与 B 的关系：B 更偏符号决策与推理；C 更偏数据驱动学习；现代 AI 多数系统是二者混合。

---

## D. 深度学习与基础模型

PyTorch 教程把数据、模型、优化、训练作为完整工作流；HF 的课程与文档则把 Transformer、Diffusion、CV、Audio、多模态等统一到基础模型生态里。([PyTorch Documentation][4])

### D1. 神经网络基础

* 张量
* 参数
* 前向传播
* 反向传播
* Autograd
* 激活函数
* Normalization
* Regularization
* Optimizer
* Checkpoint

### D2. 架构家族

* MLP
* CNN
* RNN / LSTM / GRU
* Transformer
* Diffusion models
* Mixture of Experts
* State Space Models
* Graph Neural Networks

### D3. 训练范式

* 从头训练
* 预训练
* 微调
* 多任务训练
* 迁移学习
* 蒸馏
* 自训练 / 伪标签
* Curriculum / staged training

### D4. 基础模型类型

* 文本基础模型
* 视觉基础模型
* 语音 / 音频基础模型
* 视频基础模型
* 多模态基础模型
* 具身/世界模型（更偏前沿与系统）

### D5. 生成范式

* 自回归生成
* 编码—解码生成
* 扩散生成
* 条件生成
* 控制生成

### D6. 规模化要素

* 数据规模
* 参数规模
* 训练算力
* 上下文长度
* 训练时长
* 系统优化

### D 层关系

* D 是 E、G、H、L 的模型底层。
* “基础模型”是 D 层产物；“LLM / VLM / Voice model”是 D 层下的特化家族。
* D 与 C 的关系：C 提供学习原理；D 提供现代可扩展实现。

---

## E. 模态与任务域

HF Learn 把 LLM、Agents、MCP、Deep RL、CV、Audio、Diffusion、Robotics、3D、Games 并列为学习分支；Transformers 文档覆盖 text、vision、audio、video、multimodal；AIMA 也把 NLP、Robotics、CV 放在 AI 应用主干中。([Hugging Face][5])

### E1. 语言（NLP / LLM）

* 文本分类
* 信息抽取
* 命名实体识别
* 翻译
* 摘要
* 问答
* 对话
* 检索
* 代码生成与理解
* 结构化解析
* LLM：通用语言能力模型

### E2. 视觉（CV）

* 图像分类
* 目标检测
* 分割
* OCR / 文档理解
* 姿态估计
* 跟踪
* 图像生成
* 图像编辑
* 视觉检索

### E3. 音频 / 语音

* 自动语音识别（ASR）
* 说话人识别
* 音频分类
* 语音翻译
* 文本转语音（TTS）
* 语音到语音
* 音乐/音频生成

### E4. 视频

* 视频理解
* 视频检索
* 视频摘要
* 动作识别
* 视频问答
* 视频生成

### E5. 多模态

* 图文
* 音文
* 视频文
* 视觉语言模型（VLM）
* Omni / any-to-any 系统
* 多模态推理
* 多模态 Agent

### E6. 决策与强化学习

* 策略学习
* 值函数
* 奖励设计
* 探索/利用
* 在线交互决策
* 模拟环境学习

### E7. 机器人与具身智能

* 感知
* 定位
* 建图
* 操作
* 导航
* 控制
* 技能学习
* 感知—规划—动作闭环

### E8. 扩展领域

* 3D ML
* 游戏 AI
* 推荐系统
* 时间序列
* 图学习
* 科学计算 / Scientific AI

### E 层关系

* E 是“任务域”分支，不是新的基础原理层。
* D 层基础模型在 E 层变成具体模态家族。
* G 层 LLM 核心主要属于 E1，但会向 E5 多模态扩展。
* E6/E7 与 B 层经典决策、C 层强化学习、K 层 Agent 系统强连接。

---

## F. 数据层（横切层）

HF Datasets 把数据访问、处理、共享、流式加载、跨模态支持作为基础设施；OpenAI 的 eval/agent-eval 又把 datasets、traces、eval runs 连成闭环。([Hugging Face][6])

### F1. 数据类型

* 预训练语料
* 指令微调数据
* 偏好数据
* 奖励数据
* 工具调用数据
* Agent traces
* Eval datasets
* 知识库文档
* 用户行为日志
* 合成数据

### F2. 数据形态

* 文本
* 图像
* 音频
* 视频
* 多模态对
* JSON / schema data
* 图结构
* 时间序列
* 代码
* 交互轨迹

### F3. 数据工程

* 采集
* 清洗
* 去重
* 过滤
* 切分
* 标注
* 版本管理
* 数据增广
* 合成生成
* 流式处理

### F4. 数据质量

* 覆盖度
* 正确性
* 一致性
* 多样性
* 噪声控制
* 分布匹配
* 偏差与公平性
* 时效性

### F5. 数据治理

* License
* 隐私
* PII
* 数据保留
* 权限
* 数据卡 / model card 对齐
* 审计

### F6. 数据在系统中的角色

* 预训练数据 → 决定基础能力上限
* SFT 数据 → 决定任务风格与稳定性
* 偏好/奖励数据 → 决定对齐方向
* 工具 traces → 决定 Agent 行为优化
* Eval datasets → 决定可重复评测
* 知识库文档 → 决定 RAG 质量

### F 层关系

* F 横穿 D、G、H、I、K、M、N。
* 同样叫“数据”，但训练数据、知识库数据、用户会话数据、评测数据、trace 数据是不同节点。
* F 是整张图里最容易被混淆、但最应该单独画出的横切层。

---

## G. LLM 核心机制

HF 的 LLM 课程把 LLM 学习路径组织为 Transformers、fine-tuning、datasets、tokenizers、reasoning models；HF Tokenizers 文档把 tokenizer 视为完整管线；OpenAI 在 agent 构建里又把模型选择、推理能力、状态与工具结合放在核心位置。([Hugging Face][2])

### G1. 语言建模基础

* Token
* Vocabulary
* Tokenization
* Embedding
* Positional information
* Next-token prediction

### G2. Transformer 机制

* Self-attention
* Multi-head attention
* Feed-forward blocks
* Residual / normalization
* 长上下文处理
* KV cache

### G3. 上下文与记忆

* 参数记忆（weights）
* 上下文记忆（prompt context）
* 会话记忆（session memory）
* 外部记忆（RAG / tools / stores）

### G4. 生成与解码

* Greedy
* Sampling
* Temperature
* Top-k
* Top-p
* Stop conditions
* Structured generation

### G5. 能力面

* 续写
* 指令跟随
* 摘要
* 翻译
* 归纳
* 提取
* 工具选择
* 多步推理
* 代码生成
* 多模态理解

### G6. 局限面

* 幻觉
* 过期知识
* 长上下文退化
* 工具误用
* 受提示与检索质量影响
* 受数据分布影响

### G7. 模型类型细分

* 通用对话模型
* 推理强化模型
* 代码模型
* 多模态模型
* 小模型 / 边缘模型
* 专项模型

### G 层关系

* G 是 H、I、J、K 的核心模型层。
* G 与 F 的关系：tokenizer、语料、上下文窗口、任务分布共同决定 LLM 能力边界。
* G 与 I 的关系：LLM 负责生成与决策，I 层负责给它提供外部知识。
* G 与 K 的关系：Agent 不是替代 LLM，而是用 LLM 作为认知引擎。

---

## H. 模型适配、后训练与对齐

PEFT 把“只调整少量参数”的适配方法系统化；TRL 覆盖 SFT、DPO、GRPO 等后训练方法；OpenAI 的 SFT、fine-tuning、RFT、model optimization 则把“行为定制、偏好优化、蒸馏、评测驱动优化”连成一条后训练链。([Hugging Face][7])

### H1. 不改权重的控制

* Prompt engineering
* System prompt
* Few-shot / in-context learning
* Prompt templates
* Structured outputs
* Tool schemas

### H2. 监督式后训练

* SFT
* Domain fine-tuning
* Style fine-tuning
* Tool / function-calling fine-tuning
* Vision fine-tuning
* Task-specific tuning

### H3. 偏好优化与对齐

* Reward modeling
* DPO
* Online DPO
* GRPO
* RLHF
* RFT
* Policy / constitutional alignment

### H4. 参数高效适配

* Adapter
* LoRA
* QLoRA
* 其他 PEFT 变体

### H5. 压缩与效率优化

* Quantization
* Distillation
* Pruning
* Smaller specialized models
* Quantization-aware training（部分方法）

### H6. 行为优化维度

* 更准确
* 更稳定
* 更短/更长
* 更结构化
* 更会调用工具
* 更适应特定领域
* 更便宜 / 更快

### H 层关系

* Prompt ≠ Fine-tuning

  * Prompt：改输入控制
  * Fine-tuning：改权重行为
* PEFT ⊂ Fine-tuning
* QLoRA = 量化 + LoRA 训练路径
* Distillation ≠ Quantization

  * Distillation：迁移行为到小模型
  * Quantization：降低数值精度以节省内存/算力
* H 与 M 强连接：后训练必须靠评测收敛，而不是只看主观感觉。

---

## I. 检索、记忆与外部知识

OpenAI 的 embeddings、file search、tools 文档与 HF 的 RAG 文档共同说明：RAG 的本质是把参数记忆与外部非参数记忆接起来；file search 又把 chunking、embeddings、vector+keyword retrieval 做成工程链路。([OpenAI Developers][8])

### I1. 表示与检索基础

* Embeddings
* Dense retrieval
* Sparse retrieval
* Hybrid retrieval
* Similarity search
* Reranking

### I2. 知识库构建

* 数据接入
* 文档解析
* Chunking
* Metadata
* Indexing
* Vector store
* Keyword index
* Update / refresh

### I3. RAG 管线

* Query understanding
* Retrieval
* Rerank
* Context packing
* Generation
* Citation / provenance
* Post-processing

### I4. RAG 形态

* Basic RAG
* Multi-hop RAG
* Query rewriting RAG
* Agentic RAG
* KG-RAG
* Long-context + retrieval hybrid

### I5. 记忆类型

* 参数记忆
* 非参数知识库
* 会话记忆
* 用户长期记忆
* 任务记忆
* Episodic memory
* Semantic memory

### I6. 关键质量点

* 召回率
* 精准率
* Chunk 质量
* 过期知识
* 授权与权限边界
* 可追溯性
* 引用可信度

### I 层关系

* RAG = LLM + external memory，不是训练方法。
* RAG 与 H 层微调是互补关系，不是天然替代关系。
* I 与 K 连接时会出现 agentic RAG：模型先决定“要不要检索、检索什么、何时停止检索”。
* I 与 F 关系最紧：知识库数据质量直接决定回答质量。

---

## J. AI 应用工程

OpenAI 把结构化输出、函数调用、工具、会话状态、流式响应、上下文管理等组织成应用层的核心能力；这层是“模型能力”向“可维护软件系统”转化的地方。([OpenAI Developers][9])

### J1. 模型接口层

* Chat / responses
* Prompt composition
* System / user / tool messages
* Context assembly
* Input / output contracts

### J2. 结构化输出

* JSON mode
* JSON Schema
* Typed outputs
* Validation
* Parsing
* Error recovery

### J3. 工具调用

* Function calling
* Tool schema design
* Tool routing
* Tool execution
* Tool result injection
* Tool retries / fallback

### J4. 会话与状态

* Conversation state
* Session memory
* Server-managed state
* Client-managed replay
* Context compaction
* Prompt caching
* Token budgeting

### J5. 流式与实时

* Streaming text
* Streaming tool events
* WebSocket / realtime
* Voice interaction
* Incremental UI updates

### J6. 多模态应用

* Image input
* Audio input/output
* File input
* Mixed-modal interfaces

### J7. 工程可靠性

* Retry
* Timeout
* Idempotency
* Fallback
* Circuit breaking
* Error classes
* Observability hooks

### J8. 安全与权限

* Auth
* Secret management
* Permission scopes
* Sensitive action approval
* Isolation boundaries

### J9. 应用形态

* Chat app
* Copilot
* Search / QA
* Document assistant
* Coding assistant
* Workflow assistant
* Voice assistant

### J 层关系

* J 是“单个 AI 功能/应用”的工程层；K 是“多步自主系统”的工程层。
* J 可不进入 K：很多优秀 AI 产品只是强应用工程，不一定需要 Agent。
* J 需要同时连接 G、I、L、M、N 四层，才能从 demo 变成产品。

---

## K. Agent 系统

OpenAI 把 agent 的核心原语定义为 **models、tools、state/memory、orchestration**；LangGraph 区分了固定路径的 workflow 与动态路径的 agent；MCP 则把外部数据/工具/工作流连接标准化为 resources / prompts / tools。([OpenAI Developers][10])

### K1. Agent 的最小构成

* 模型（Model）
* 指令（Instructions）
* 工具（Tools）
* 状态 / 记忆（State / Memory）
* 编排（Orchestration）
* Guardrails
* Human review

### K2. 执行形态

* Workflow

  * 固定路径
  * 规则驱动
* Agent

  * 动态决定步骤
  * 动态决定工具
* Hybrid system

  * 固定骨架 + 局部 agent 决策

### K3. 单 Agent 模式

* ReAct / reason-act loop
* Plan-then-act
* Reflect / retry
* Tool-using agent
* Retrieval-first agent
* Verification loop

### K4. 多 Agent 模式

* Manager / worker
* Router / specialists
* Handoff
* Agents-as-tools
* Reviewer / critic / verifier
* Debate / voting
* Subgraphs

### K5. 图式编排

* State
* Nodes
* Edges
* Conditional branches
* Loops
* Parallel execution
* Checkpoints
* Resumability

### K6. Agent 记忆

* Session memory
* Episodic memory
* Semantic memory
* User memory
* Task memory
* Long-term distilled memory
* Memory injection / compaction

### K7. 工具与外部连接

* Built-in tools
* Function tools
* File search / web search / code tools
* MCP servers

  * Resources
  * Prompts
  * Tools
* Connectors
* Computer / shell / browser actions

### K8. 人在回路

* Approval before side effects
* Escalation
* Review queues
* Human override
* Manual correction
* HITL checkpoints

### K9. Agent 观测与控制

* Tracing
* Step logs
* Tool-call records
* Handoff records
* Guardrail results
* Auditability

### K10. Agent 形态分支

* Knowledge agent
* Research agent
* Coding agent
* Workflow automation agent
* Voice agent
* Computer-use agent
* Multi-agent organization

### K 层关系

* Agent = G 层模型 + J 层应用工程 + I 层知识 + L 层运行时 + M 层控制。
* Workflow ≠ Agent

  * Workflow：预定义路径
  * Agent：动态路径
* MCP ≠ Agent

  * MCP：连接协议 / 能力接口
  * Agent：使用这些接口完成多步任务的系统
* Multi-agent ≠ 更强模型

  * 它是编排结构，不是模型类别
* K 与 B 层经典 AI 强连接：规划、搜索、决策、图式编排在这里重新出现。

---

## L. 运行时与基础设施

vLLM 把离线批推理和 OpenAI-compatible online serving 作为核心能力；Ollama 支持本地模型、tool calling、structured outputs 与 OpenAI compatibility；MLX/MLX-LM 面向 Apple silicon 本地推理和微调；Transformers.js 则代表浏览器/JS 运行时路线；Accelerate、DDP/FSDP 负责训练和大规模执行。([vLLM][11])

### L1. 模型访问方式

* 云 API
* 自托管推理
* 本地推理
* 浏览器 / Edge 推理
* 混合推理

### L2. 服务运行时

* vLLM
* Ollama
* MLX / MLX-LM
* Transformers.js
* 其他 OpenAI-compatible servers

### L3. 推理优化

* Batching
* KV cache
* Prefix cache
* Quantized inference
* Context length management
* Compiled kernels
* Concurrency control
* Throughput / latency tuning

### L4. 训练基础设施

* PyTorch
* Accelerate
* DDP
* FSDP
* Checkpointing
* Distributed training
* Experiment tracking

### L5. 系统基础设施

* SQL / NoSQL
* Vector DB
* Object storage
* Cache
* Queue
* Artifact storage
* Container / deployment layer

### L6. 硬件层

* CPU
* GPU
* NPU
* Apple silicon unified memory
* Multi-GPU
* VRAM / RAM / disk constraints
* Network bandwidth

### L7. 生产运行指标

* Latency
* Throughput
* Cost
* Error rate
* Availability
* Token usage
* GPU utilization
* Context pressure

### L 层关系

* L 不是模型本体，而是模型/Agent 的承载层。
* H 层量化、蒸馏会直接影响 L 层资源消耗。
* J/K 层的并发、流式、状态管理，最终都落在 L 层执行。
* F/M 层的数据与评测，也需要 L 层的存储、调度、执行能力。

---

## M. 评测、安全与治理

OpenAI 的 eval 文档把评测分成 datasets、graders、eval runs；agent-evals 又强调 traces、tool calls、handoffs、guardrails 的工作流级评测；安全文档强调 moderation、adversarial testing、human oversight，以及在 agent 场景下避免把不可信输入直接提升到高权限上下文。([OpenAI Developers][12])

### M1. 模型级评测

* 语言能力
* 推理能力
* 多模态能力
* 结构化输出正确率
* 安全性
* 稳定性
* 延迟/成本

### M2. 应用级评测

* 最终答案正确性
* 引用真实性
* Schema adherence
* Tool execution success
* UX consistency
* Failure recovery

### M3. Agent 级评测

* Trace grading
* Tool selection correctness
* Handoff correctness
* Routing quality
* Policy compliance
* Workflow completion rate
* Approval correctness

### M4. 在线评测

* A/B tests
* Human feedback
* Acceptance rate
* Task completion
* Business KPIs
* Real-user failure mining

### M5. 安全控制

* Moderation
* Jailbreak defense
* Prompt injection defense
* Sensitive tool controls
* Least privilege
* Sandboxing
* Approval gates
* Rate limiting

### M6. Guardrails

* Input guardrails
* Output guardrails
* Tool guardrails
* Policy guardrails
* Schema validation
* Redaction / filtering

### M7. 隐私与合规

* PII handling
* Data retention
* Access control
* Audit logs
* Regulatory compliance
* Governance policies

### M8. 对抗测试与审计

* Red teaming
* Attack simulation
* Safety regression tests
* Incident review
* Postmortem

### M 层关系

* M 横跨 G、H、I、J、K、L、N。
* 评测不是上线后的附属物，而是训练、优化、路由、工具设计的反馈入口。
* 安全不是单点模块，而是输入、上下文、工具、输出、权限、审计的联合系统。
* Agent 时代的评测对象不只“答案”，还包括“过程”。

---

## N. 产品、场景与组织

OpenAI 的 building agents、model optimization、evaluation best practices 都指向同一个事实：是否需要 RAG、是否需要 fine-tuning、是否需要 Agent、多大模型、多复杂的编排，都应该由任务、成本、风险和评测闭环来决定。([OpenAI Developers][10])

### N1. 场景类型

* 问答 / 检索
* 助手 / Copilot
* 编码
* 数据分析
* 文档处理
* 工作流自动化
* 研究
* 多模态交互
* 机器人 / 具身任务

### N2. 自动化等级

* Suggestion only
* Draft and review
* Execute with approval
* Narrow autonomous execution
* Human-supervised autonomy

### N3. 决策变量

* 质量要求
* 延迟要求
* 成本预算
* 错误代价
* 安全风险
* 是否需要最新知识
* 是否需要外部动作
* 是否需要可审计流程

### N4. 体验设计

* 信任
* 透明度
* 引用
* 控制权
* 可撤销
* 纠错入口
* 长任务可见性

### N5. 团队与流程

* 产品经理
* 应用工程师
* 模型工程师
* 数据工程师
* Eval / QA
* 安全 / Policy
* 运维 / 平台

### N6. 持续改进闭环

* 用户问题 / 场景
* 日志与 traces
* 数据沉淀
* 新 evals
* Prompt / tool / routing 改进
* Fine-tuning / distillation
* 部署新版本
* 再评测

### N 层关系

* N 是整张图的选择器：决定下方哪些层需要被激活。
* “是否需要 Agent”是 N 层决策，不是 K 层默认答案。
* “是否需要微调或 RAG”也是 N 层的产品/成本/风险权衡。
* 没有 N 层，下面所有技术节点都会变成无目标堆叠。

---

## 结构之间的关系总表

下面这部分建议你后续在图里画成**边**。

### 1. 前置关系

* A → C → D → G
* A → J → K → N
* B → K
* B → E6 / E7
* C → H / M
* D → E / G / H / L

### 2. 构成关系

* G = LLM 核心模型层
* I = 外部知识层
* J = AI 应用工程层
* K = 模型 + 工具 + 状态/记忆 + 编排 + 护栏
* RAG = G + I
* Agent = G + J + I + M + L

### 3. 互补关系

* H 与 I 互补

  * 微调解决“行为与风格问题”
  * RAG 解决“知识更新与外部信息问题”
* J 与 K 互补

  * 应用工程负责稳定软件能力
  * Agent 系统负责多步自治与工具编排
* B 与 G/K 互补

  * 经典规划/搜索/推理给现代 Agent 提供结构化骨架

### 4. 替代 / 取舍关系

* Prompting ↔ Fine-tuning

  * 前者轻量、快
  * 后者更稳定、更深度
* Long context ↔ Retrieval

  * 长上下文可减少检索步骤
  * 检索可减少上下文成本
* 单 Agent ↔ 多 Agent

  * 单 Agent 简单
  * 多 Agent 适合复杂分工
* 大模型 ↔ 小模型 + 蒸馏/微调

  * 大模型强
  * 小模型更便宜、更易部署

### 5. 反馈闭环关系

* 用户场景 → N
* N → J / K / H / I / L 选型
* 运行日志 / traces → F / M
* M → H / I / J / K 调整
* 调整后的系统再回到 L / N
* 形成：**产品需求 → 实现 → 评测 → 改进 → 重部署** 闭环

### 6. 数据流关系

* 预训练数据 → D/G
* SFT 数据 → H
* 偏好 / 奖励数据 → H
* 知识库数据 → I
* Tool traces → K/M
* Eval datasets → M
* 用户交互日志 → F/N/M

### 7. 记忆关系

* 参数记忆 = 模型权重中的知识
* 非参数记忆 = 检索库 / 向量库 / 文档库
* 会话记忆 = 当前对话状态
* 长期记忆 = 从历史中提炼出的稳定用户/任务信息
* Agent 记忆 = 会话记忆 + 任务记忆 + 外部长期记忆

### 8. 协议与接口关系

* Function calling：应用内部定义工具接口
* MCP：跨系统标准化连接 tools / resources / prompts
* OpenAI-compatible API：运行时兼容层
* Schema / JSON：结构化输出与工具输入输出的约束层

### 9. 安全边界关系

* 输入边界：输入 guardrails / moderation
* 上下文边界：不要把不可信内容提升到高权限系统上下文
* 工具边界：least privilege / approval / sandbox
* 输出边界：schema / filtering / redaction
* 审计边界：trace / log / approval records

### 10. 最核心的几条“总关系”

* **AI ⊃ 机器学习 ⊃ 深度学习 ⊃ 基础模型 ⊃ LLM / 多模态模型**
* **Agent 不是模型类别，而是系统类别**
* **RAG 不是训练方法，而是知识增强方法**
* **MCP 不是 Agent 框架，而是外部能力连接协议**
* **Eval / Safety / Data 不是附属模块，而是横穿全图的公共轴**

这版已经可以直接拿去画成一张大的 AI 网络知识图。

[1]: https://aima.cs.berkeley.edu/global-index.html "https://aima.cs.berkeley.edu/global-index.html"
[2]: https://huggingface.co/learn/llm-course/chapter1/1 "https://huggingface.co/learn/llm-course/chapter1/1"
[3]: https://developers.google.com/machine-learning/crash-course?utm_source=chatgpt.com "Machine Learning Crash Course"
[4]: https://docs.pytorch.org/tutorials/beginner/basics/intro.html?utm_source=chatgpt.com "Learn the Basics — PyTorch Tutorials 2.11.0+cu130 ..."
[5]: https://huggingface.co/learn "https://huggingface.co/learn"
[6]: https://huggingface.co/docs/datasets/index?utm_source=chatgpt.com "Datasets"
[7]: https://huggingface.co/docs/peft/index?utm_source=chatgpt.com "PEFT"
[8]: https://developers.openai.com/api/docs/guides/embeddings?utm_source=chatgpt.com "Vector embeddings | OpenAI API"
[9]: https://developers.openai.com/api/docs/guides/structured-outputs?utm_source=chatgpt.com "Structured model outputs | OpenAI API"
[10]: https://developers.openai.com/tracks/building-agents "https://developers.openai.com/tracks/building-agents"
[11]: https://docs.vllm.ai/en/stable/getting_started/quickstart/ "https://docs.vllm.ai/en/stable/getting_started/quickstart/"
[12]: https://developers.openai.com/api/docs/guides/evals?utm_source=chatgpt.com "Working with evals | OpenAI API"

