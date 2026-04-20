# AI 知识图谱（graph.json Markdown 导出）

> 该文件由 `data/graph.json` 自动导出，请不要手动编辑。
> source: `data/graph.json`
> generatedAt: 2026-04-20

## 元信息
- version: 4
- updatedAt: 2026-04-20
- description: 知识图谱结构写在 graph.json；节点 detail 存在 detail-index.json + details/*.json；知识补充直接维护 JSON 分片，不再生成外部 prompt 工作区。
- domains: 14
- modules: 100
- concepts: 775

## 阶段总览
### 01 基础底座
先把经典 AI、机器学习、深度学习和底层能力串成一条主线。
- stageId: `foundation`
- color: `#96b6df`
- domain codes: `A`, `B`, `C`, `D`
- domains: A. 基础理论与计算机底座 / B. 经典 AI / C. 机器学习 / D. 深度学习与基础模型

### 02 任务域与数据
然后再把语言、视觉、语音、视频、多模态以及数据横切层挂上去。
- stageId: `modalities`
- color: `#88aad4`
- domain codes: `E`, `F`
- domains: E. 模态、任务域与智能形态 / F. 数据层（横切层）

### 03 大模型系统
这一段把 LLM 本体、后训练、对齐、检索和外部知识连接起来。
- stageId: `llm-system`
- color: `#799dc8`
- domain codes: `G`, `H`, `I`
- domains: G. LLM 核心机制 / H. 模型适配、后训练与对齐 / I. 检索、记忆与外部知识

### 04 应用与 Agent
应用工程负责稳定性，Agent 系统负责多步自治、状态和工具编排。
- stageId: `application`
- color: `#6d90ba`
- domain codes: `J`, `K`
- domains: J. AI 应用工程 / K. Agent 系统

### 05 运行、治理与产品
最后把运行时、基础设施、评测、安全和产品组织闭环补完整。
- stageId: `production`
- color: `#5f82ac`
- domain codes: `L`, `M`, `N`
- domains: L. 运行时与基础设施 / M. 评测、安全与治理 / N. 产品、场景与组织


## Domain 结构

## A. 基础理论与计算机底座

这一层是整张图的公共地基；HF 的 LLM 课程、Google 的 ML 基础课程、PyTorch 基础教程都把“编程、数据、建模、优化、训练流程”放在前置位置。

- pathKey: `A`
- stage: 01 基础底座
- modules: 3
- concepts: 63

### Domain 关系
- 基础理论与计算机底座 是 机器学习、深度学习与基础模型、AI 应用工程、Agent 系统、运行时与基础设施、评测、安全与治理 的前置层。
- 数学基础主要流向：机器学习、深度学习、优化、评测。
- 计算机基础主要流向：应用工程、Agent 编排、部署与基础设施。
- 实验方法主要流向：训练、评测、调优、产品迭代。

### Modules

#### A1. 数学基础
- pathKey: `A/A1. 数学基础`
- concept count: 25
- concepts:
  - 线性代数 · `A/A1. 数学基础/线性代数`
    - 向量、矩阵、张量 · `A/A1. 数学基础/线性代数/向量、矩阵、张量`
    - 线性变换 · `A/A1. 数学基础/线性代数/线性变换`
    - 内积、范数、相似度 · `A/A1. 数学基础/线性代数/内积、范数、相似度`
    - 分解、特征值/特征向量 · `A/A1. 数学基础/线性代数/分解、特征值/特征向量`
  - 概率统计 · `A/A1. 数学基础/概率统计`
    - 随机变量、分布、采样 · `A/A1. 数学基础/概率统计/随机变量、分布、采样`
    - 期望、方差、协方差 · `A/A1. 数学基础/概率统计/期望、方差、协方差`
    - 条件概率、贝叶斯 · `A/A1. 数学基础/概率统计/条件概率、贝叶斯`
    - 估计、校准、置信 · `A/A1. 数学基础/概率统计/估计、校准、置信`
  - 微积分与优化 · `A/A1. 数学基础/微积分与优化`
    - 导数、偏导、链式法则 · `A/A1. 数学基础/微积分与优化/导数、偏导、链式法则`
    - 梯度下降 · `A/A1. 数学基础/微积分与优化/梯度下降`
    - SGD、Adam 类优化器 · `A/A1. 数学基础/微积分与优化/SGD、Adam 类优化器`
    - 学习率、收敛、稳定性 · `A/A1. 数学基础/微积分与优化/学习率、收敛、稳定性`
  - 信息论 · `A/A1. 数学基础/信息论`
    - 熵 · `A/A1. 数学基础/信息论/熵`
    - 交叉熵 · `A/A1. 数学基础/信息论/交叉熵`
    - KL 散度 · `A/A1. 数学基础/信息论/KL 散度`
    - 互信息 · `A/A1. 数学基础/信息论/互信息`
  - 数值计算 · `A/A1. 数学基础/数值计算`
    - 浮点精度 · `A/A1. 数学基础/数值计算/浮点精度`
    - 数值稳定性 · `A/A1. 数学基础/数值计算/数值稳定性`
    - 近似计算 · `A/A1. 数学基础/数值计算/近似计算`
    - 并行计算直觉 · `A/A1. 数学基础/数值计算/并行计算直觉`

#### A2. 计算机基础
- pathKey: `A/A2. 计算机基础`
- concept count: 30
- concepts:
  - 编程语言 · `A/A2. 计算机基础/编程语言`
    - Python · `A/A2. 计算机基础/编程语言/Python`
    - JavaScript / TypeScript · `A/A2. 计算机基础/编程语言/JavaScript / TypeScript`
    - C / C++ / Rust / Swift（偏系统或高性能方向） · `A/A2. 计算机基础/编程语言/C / C++ / Rust / Swift（偏系统或高性能方向）`
  - 数据结构与算法 · `A/A2. 计算机基础/数据结构与算法`
    - 数组、链表、树、图、堆、哈希 · `A/A2. 计算机基础/数据结构与算法/数组、链表、树、图、堆、哈希`
    - 搜索、排序、图算法 · `A/A2. 计算机基础/数据结构与算法/搜索、排序、图算法`
  - 操作系统与并发 · `A/A2. 计算机基础/操作系统与并发`
    - 进程、线程、协程 · `A/A2. 计算机基础/操作系统与并发/进程、线程、协程`
    - 并发、异步、锁、队列 · `A/A2. 计算机基础/操作系统与并发/并发、异步、锁、队列`
  - 网络与协议 · `A/A2. 计算机基础/网络与协议`
    - HTTP · `A/A2. 计算机基础/网络与协议/HTTP`
    - WebSocket · `A/A2. 计算机基础/网络与协议/WebSocket`
    - RPC / JSON-RPC · `A/A2. 计算机基础/网络与协议/RPC / JSON-RPC`
    - API 设计 · `A/A2. 计算机基础/网络与协议/API 设计`
  - 数据系统 · `A/A2. 计算机基础/数据系统`
    - SQL · `A/A2. 计算机基础/数据系统/SQL`
    - NoSQL · `A/A2. 计算机基础/数据系统/NoSQL`
    - 缓存 · `A/A2. 计算机基础/数据系统/缓存`
    - 消息队列 · `A/A2. 计算机基础/数据系统/消息队列`
    - 对象存储 · `A/A2. 计算机基础/数据系统/对象存储`
    - 向量存储 · `A/A2. 计算机基础/数据系统/向量存储`
  - 软件工程 · `A/A2. 计算机基础/软件工程`
    - Git · `A/A2. 计算机基础/软件工程/Git`
    - 包管理 · `A/A2. 计算机基础/软件工程/包管理`
    - 测试 · `A/A2. 计算机基础/软件工程/测试`
    - CI/CD · `A/A2. 计算机基础/软件工程/CI/CD`
    - 日志 · `A/A2. 计算机基础/软件工程/日志`
    - 监控 · `A/A2. 计算机基础/软件工程/监控`
    - 密钥与权限管理 · `A/A2. 计算机基础/软件工程/密钥与权限管理`

#### A3. 实验与研究方法
- pathKey: `A/A3. 实验与研究方法`
- concept count: 8
- concepts:
  - 问题定义 · `A/A3. 实验与研究方法/问题定义`
  - Baseline · `A/A3. 实验与研究方法/Baseline`
  - 指标设计 · `A/A3. 实验与研究方法/指标设计`
  - 对照实验 · `A/A3. 实验与研究方法/对照实验`
  - 消融实验 · `A/A3. 实验与研究方法/消融实验`
  - 误差分析 · `A/A3. 实验与研究方法/误差分析`
  - 可重复性 · `A/A3. 实验与研究方法/可重复性`
  - 版本管理 · `A/A3. 实验与研究方法/版本管理`

## B. 经典 AI

经典 AI 不是“过时知识”，而是今天很多 Agent / RL / Robotics / Planning 系统的上游。AIMA 的经典主线包括：搜索、约束满足、知识表示、推理、规划、不确定性推理、决策、多智能体、机器学习、强化学习、NLP、机器人、CV、伦理与安全。

- pathKey: `B`
- stage: 01 基础底座
- modules: 9
- concepts: 63

### Domain 关系
- 搜索/约束满足与组合问题/规划 是 Agent 系统 层 Agent 编排的理论祖先。
- 知识表示/推理 与 检索、记忆与外部知识 层检索、知识库、KG-RAG 强连接。
- 不确定性与概率推理/决策与多智能体 与 机器学习 层机器学习、强化学习、评测、安全与治理 层风险决策相连。
- 经典 AI 层很多内容在现代系统里不再单独主导模型，但会以“约束、规则、图、规划器、验证器”的形式复现。

### Modules

#### B1. 智能体观
- pathKey: `B/B1. 智能体观`
- concept count: 7
- concepts:
  - 环境（Environment） · `B/B1. 智能体观/环境（Environment）`
  - 状态（State） · `B/B1. 智能体观/状态（State）`
  - 动作（Action） · `B/B1. 智能体观/动作（Action）`
  - 目标（Goal） · `B/B1. 智能体观/目标（Goal）`
  - 效用（Utility） · `B/B1. 智能体观/效用（Utility）`
  - 策略（Policy） · `B/B1. 智能体观/策略（Policy）`
  - 感知—决策—行动闭环 · `B/B1. 智能体观/感知—决策—行动闭环`

#### B2. 搜索
- pathKey: `B/B2. 搜索`
- concept count: 14
- concepts:
  - 无信息搜索 · `B/B2. 搜索/无信息搜索`
    - BFS · `B/B2. 搜索/无信息搜索/BFS`
    - DFS · `B/B2. 搜索/无信息搜索/DFS`
    - Uniform Cost Search · `B/B2. 搜索/无信息搜索/Uniform Cost Search`
  - 启发式搜索 · `B/B2. 搜索/启发式搜索`
    - Greedy · `B/B2. 搜索/启发式搜索/Greedy`
    - A* · `B/B2. 搜索/启发式搜索/A*`
  - 局部搜索 · `B/B2. 搜索/局部搜索`
    - Hill Climbing · `B/B2. 搜索/局部搜索/Hill Climbing`
    - Simulated Annealing · `B/B2. 搜索/局部搜索/Simulated Annealing`
  - 对抗搜索 · `B/B2. 搜索/对抗搜索`
    - Minimax · `B/B2. 搜索/对抗搜索/Minimax`
    - Alpha-Beta Pruning · `B/B2. 搜索/对抗搜索/Alpha-Beta Pruning`
    - Monte Carlo Tree Search · `B/B2. 搜索/对抗搜索/Monte Carlo Tree Search`

#### B3. 约束满足与组合问题
- pathKey: `B/B3. 约束满足与组合问题`
- concept count: 6
- concepts:
  - CSP · `B/B3. 约束满足与组合问题/CSP`
  - SAT / SMT · `B/B3. 约束满足与组合问题/SAT / SMT`
  - 变量、域、约束 · `B/B3. 约束满足与组合问题/变量、域、约束`
  - 回溯搜索 · `B/B3. 约束满足与组合问题/回溯搜索`
  - 约束传播 · `B/B3. 约束满足与组合问题/约束传播`
  - 调度、排班、组合优化 · `B/B3. 约束满足与组合问题/调度、排班、组合优化`

#### B4. 知识表示
- pathKey: `B/B4. 知识表示`
- concept count: 7
- concepts:
  - 命题逻辑 · `B/B4. 知识表示/命题逻辑`
  - 一阶逻辑 · `B/B4. 知识表示/一阶逻辑`
  - 规则系统 · `B/B4. 知识表示/规则系统`
  - 本体（Ontology） · `B/B4. 知识表示/本体（Ontology）`
  - 知识图谱 · `B/B4. 知识表示/知识图谱`
  - 语义网络 · `B/B4. 知识表示/语义网络`
  - 符号表示 · `B/B4. 知识表示/符号表示`

#### B5. 推理
- pathKey: `B/B5. 推理`
- concept count: 6
- concepts:
  - 演绎推理 · `B/B5. 推理/演绎推理`
  - 归纳推理 · `B/B5. 推理/归纳推理`
  - 溯因推理 · `B/B5. 推理/溯因推理`
  - 定理证明 · `B/B5. 推理/定理证明`
  - 规则推理 · `B/B5. 推理/规则推理`
  - 基于知识的问答 · `B/B5. 推理/基于知识的问答`

#### B6. 规划
- pathKey: `B/B6. 规划`
- concept count: 6
- concepts:
  - Goal-based planning · `B/B6. 规划/Goal-based planning`
  - Task planning · `B/B6. 规划/Task planning`
  - Symbolic planning · `B/B6. 规划/Symbolic planning`
  - Plan search · `B/B6. 规划/Plan search`
  - Multi-step planning · `B/B6. 规划/Multi-step planning`
  - Plan verification · `B/B6. 规划/Plan verification`

#### B7. 不确定性与概率推理
- pathKey: `B/B7. 不确定性与概率推理`
- concept count: 6
- concepts:
  - 贝叶斯网络 · `B/B7. 不确定性与概率推理/贝叶斯网络`
  - 隐马尔可夫模型 · `B/B7. 不确定性与概率推理/隐马尔可夫模型`
  - 时序概率模型 · `B/B7. 不确定性与概率推理/时序概率模型`
  - 概率图模型 · `B/B7. 不确定性与概率推理/概率图模型`
  - 概率程序 · `B/B7. 不确定性与概率推理/概率程序`
  - 在不确定条件下推理 · `B/B7. 不确定性与概率推理/在不确定条件下推理`

#### B8. 决策与多智能体
- pathKey: `B/B8. 决策与多智能体`
- concept count: 6
- concepts:
  - 决策理论 · `B/B8. 决策与多智能体/决策理论`
  - MDP · `B/B8. 决策与多智能体/MDP`
  - POMDP · `B/B8. 决策与多智能体/POMDP`
  - Multi-agent decision making · `B/B8. 决策与多智能体/Multi-agent decision making`
  - 博弈论直觉 · `B/B8. 决策与多智能体/博弈论直觉`
  - 协作与竞争 · `B/B8. 决策与多智能体/协作与竞争`

#### B9. 经典 AI 与现代 AI 的连接点
- pathKey: `B/B9. 经典 AI 与现代 AI 的连接点`
- concept count: 5
- concepts:
  - 搜索 → 推理模型 / tree search / verifier · `B/B9. 经典 AI 与现代 AI 的连接点/搜索 → 推理模型 / tree search / verifier`
  - 规划 → Agent task decomposition · `B/B9. 经典 AI 与现代 AI 的连接点/规划 → Agent task decomposition`
  - 知识表示 → KG-RAG / ontology-guided systems · `B/B9. 经典 AI 与现代 AI 的连接点/知识表示 → KG-RAG / ontology-guided systems`
  - 决策 → RL / tool selection / policy learning · `B/B9. 经典 AI 与现代 AI 的连接点/决策 → RL / tool selection / policy learning`
  - 多智能体 → multi-agent orchestration · `B/B9. 经典 AI 与现代 AI 的连接点/多智能体 → multi-agent orchestration`

## C. 机器学习

Google 的 ML 基础课程把核心问题组织为回归、分类、特征、损失、泛化、指标等；这层是理解预训练、SFT、偏好优化、评测集、泛化与分布漂移的通用语言。

- pathKey: `C`
- stage: 01 基础底座
- modules: 6
- concepts: 49

### Domain 关系
- 机器学习 是 深度学习与基础模型、LLM 核心机制、模型适配、后训练与对齐、评测、安全与治理 的直接前置层。
- 机器学习 的“泛化、分布、指标、反馈”概念，贯穿 LLM、Agent、评测和产品层。
- 机器学习 与 经典 AI 的关系：经典 AI 更偏符号决策与推理；机器学习 更偏数据驱动学习；现代 AI 多数系统是二者混合。

### Modules

#### C1. 问题设定
- pathKey: `C/C1. 问题设定`
- concept count: 7
- concepts:
  - 特征（Features） · `C/C1. 问题设定/特征（Features）`
  - 标签（Labels） · `C/C1. 问题设定/标签（Labels）`
  - 目标函数 · `C/C1. 问题设定/目标函数`
  - 训练集 / 验证集 / 测试集 · `C/C1. 问题设定/训练集 / 验证集 / 测试集`
  - IID 假设 · `C/C1. 问题设定/IID 假设`
  - 分布漂移 · `C/C1. 问题设定/分布漂移`
  - 泛化 · `C/C1. 问题设定/泛化`

#### C2. 学习范式
- pathKey: `C/C2. 学习范式`
- concept count: 15
- concepts:
  - 监督学习 · `C/C2. 学习范式/监督学习`
    - 回归 · `C/C2. 学习范式/监督学习/回归`
    - 分类 · `C/C2. 学习范式/监督学习/分类`
    - 排序 · `C/C2. 学习范式/监督学习/排序`
  - 无监督学习 · `C/C2. 学习范式/无监督学习`
    - 聚类 · `C/C2. 学习范式/无监督学习/聚类`
    - 降维 · `C/C2. 学习范式/无监督学习/降维`
    - 密度估计 · `C/C2. 学习范式/无监督学习/密度估计`
  - 自监督学习 · `C/C2. 学习范式/自监督学习`
  - 半监督学习 · `C/C2. 学习范式/半监督学习`
  - 迁移学习 · `C/C2. 学习范式/迁移学习`
  - 在线学习 · `C/C2. 学习范式/在线学习`
  - 主动学习 · `C/C2. 学习范式/主动学习`
  - 元学习 · `C/C2. 学习范式/元学习`
  - 强化学习 · `C/C2. 学习范式/强化学习`

#### C3. 经典模型家族
- pathKey: `C/C3. 经典模型家族`
- concept count: 8
- concepts:
  - 线性回归 / 逻辑回归 · `C/C3. 经典模型家族/线性回归 / 逻辑回归`
  - 决策树 · `C/C3. 经典模型家族/决策树`
  - 随机森林 · `C/C3. 经典模型家族/随机森林`
  - GBDT · `C/C3. 经典模型家族/GBDT`
  - SVM / 核方法 · `C/C3. 经典模型家族/SVM / 核方法`
  - 朴素贝叶斯 · `C/C3. 经典模型家族/朴素贝叶斯`
  - 聚类模型 · `C/C3. 经典模型家族/聚类模型`
  - 矩阵分解 / 表示学习 · `C/C3. 经典模型家族/矩阵分解 / 表示学习`

#### C4. 共性问题
- pathKey: `C/C4. 共性问题`
- concept count: 8
- concepts:
  - 过拟合 / 欠拟合 · `C/C4. 共性问题/过拟合 / 欠拟合`
  - 偏差 / 方差 · `C/C4. 共性问题/偏差 / 方差`
  - 类别不平衡 · `C/C4. 共性问题/类别不平衡`
  - 特征工程 · `C/C4. 共性问题/特征工程`
  - 数据泄漏 · `C/C4. 共性问题/数据泄漏`
  - 校准 · `C/C4. 共性问题/校准`
  - 鲁棒性 · `C/C4. 共性问题/鲁棒性`
  - 可解释性 · `C/C4. 共性问题/可解释性`

#### C5. 指标体系
- pathKey: `C/C5. 指标体系`
- concept count: 7
- concepts:
  - Accuracy · `C/C5. 指标体系/Accuracy`
  - Precision / Recall / F1 · `C/C5. 指标体系/Precision / Recall / F1`
  - AUC · `C/C5. 指标体系/AUC`
  - MSE / MAE · `C/C5. 指标体系/MSE / MAE`
  - Ranking metrics · `C/C5. 指标体系/Ranking metrics`
  - Calibration · `C/C5. 指标体系/Calibration`
  - Cost-sensitive metrics · `C/C5. 指标体系/Cost-sensitive metrics`

#### C6. 与大模型的对应关系
- pathKey: `C/C6. 与大模型的对应关系`
- concept count: 4
- concepts:
  - 预训练 ≈ 大规模自监督学习 · `C/C6. 与大模型的对应关系/预训练 ≈ 大规模自监督学习`
  - SFT ≈ 监督学习 · `C/C6. 与大模型的对应关系/SFT ≈ 监督学习`
  - DPO / GRPO / RFT / RLHF ≈ 反馈/奖励驱动的后训练 · `C/C6. 与大模型的对应关系/DPO / GRPO / RFT / RLHF ≈ 反馈/奖励驱动的后训练`
  - Evals ≈ 面向生成式系统的扩展测试体系 · `C/C6. 与大模型的对应关系/Evals ≈ 面向生成式系统的扩展测试体系`

## D. 深度学习与基础模型

PyTorch 教程把数据、模型、优化、训练作为完整工作流；HF 的课程与文档则把 Transformer、Diffusion、CV、Audio、多模态等统一到基础模型生态里。

- pathKey: `D`
- stage: 01 基础底座
- modules: 6
- concepts: 43

### Domain 关系
- 深度学习与基础模型 是 模态、任务域与智能形态、LLM 核心机制、模型适配、后训练与对齐、运行时与基础设施 的模型底层。
- “基础模型”是 深度学习与基础模型 层产物；“LLM / VLM / Voice model”是 深度学习与基础模型 层下的特化家族。
- 深度学习与基础模型 与 机器学习 的关系：机器学习 提供学习原理；深度学习与基础模型 提供现代可扩展实现。

### Modules

#### D1. 神经网络基础
- pathKey: `D/D1. 神经网络基础`
- concept count: 10
- concepts:
  - 张量 · `D/D1. 神经网络基础/张量`
  - 参数 · `D/D1. 神经网络基础/参数`
  - 前向传播 · `D/D1. 神经网络基础/前向传播`
  - 反向传播 · `D/D1. 神经网络基础/反向传播`
  - Autograd · `D/D1. 神经网络基础/Autograd`
  - 激活函数 · `D/D1. 神经网络基础/激活函数`
  - Normalization · `D/D1. 神经网络基础/Normalization`
  - Regularization · `D/D1. 神经网络基础/Regularization`
  - Optimizer · `D/D1. 神经网络基础/Optimizer`
  - Checkpoint · `D/D1. 神经网络基础/Checkpoint`

#### D2. 架构家族
- pathKey: `D/D2. 架构家族`
- concept count: 8
- concepts:
  - MLP · `D/D2. 架构家族/MLP`
  - CNN · `D/D2. 架构家族/CNN`
  - RNN / LSTM / GRU · `D/D2. 架构家族/RNN / LSTM / GRU`
  - Transformer · `D/D2. 架构家族/Transformer`
  - Diffusion models · `D/D2. 架构家族/Diffusion models`
  - Mixture of Experts · `D/D2. 架构家族/Mixture of Experts`
  - State Space Models · `D/D2. 架构家族/State Space Models`
  - Graph Neural Networks · `D/D2. 架构家族/Graph Neural Networks`

#### D3. 训练范式
- pathKey: `D/D3. 训练范式`
- concept count: 8
- concepts:
  - 从头训练 · `D/D3. 训练范式/从头训练`
  - 预训练 · `D/D3. 训练范式/预训练`
  - 微调 · `D/D3. 训练范式/微调`
  - 多任务训练 · `D/D3. 训练范式/多任务训练`
  - 迁移学习 · `D/D3. 训练范式/迁移学习`
  - 蒸馏 · `D/D3. 训练范式/蒸馏`
  - 自训练 / 伪标签 · `D/D3. 训练范式/自训练 / 伪标签`
  - Curriculum / staged training · `D/D3. 训练范式/Curriculum / staged training`

#### D4. 基础模型类型
- pathKey: `D/D4. 基础模型类型`
- concept count: 6
- concepts:
  - 文本基础模型 · `D/D4. 基础模型类型/文本基础模型`
  - 视觉基础模型 · `D/D4. 基础模型类型/视觉基础模型`
  - 语音 / 音频基础模型 · `D/D4. 基础模型类型/语音 / 音频基础模型`
  - 视频基础模型 · `D/D4. 基础模型类型/视频基础模型`
  - 多模态基础模型 · `D/D4. 基础模型类型/多模态基础模型`
  - 具身/世界模型（更偏前沿与系统） · `D/D4. 基础模型类型/具身/世界模型（更偏前沿与系统）`

#### D5. 生成范式
- pathKey: `D/D5. 生成范式`
- concept count: 5
- concepts:
  - 自回归生成 · `D/D5. 生成范式/自回归生成`
  - 编码—解码生成 · `D/D5. 生成范式/编码—解码生成`
  - 扩散生成 · `D/D5. 生成范式/扩散生成`
  - 条件生成 · `D/D5. 生成范式/条件生成`
  - 控制生成 · `D/D5. 生成范式/控制生成`

#### D6. 规模化要素
- pathKey: `D/D6. 规模化要素`
- concept count: 6
- concepts:
  - 数据规模 · `D/D6. 规模化要素/数据规模`
  - 参数规模 · `D/D6. 规模化要素/参数规模`
  - 训练算力 · `D/D6. 规模化要素/训练算力`
  - 上下文长度 · `D/D6. 规模化要素/上下文长度`
  - 训练时长 · `D/D6. 规模化要素/训练时长`
  - 系统优化 · `D/D6. 规模化要素/系统优化`

## E. 模态、任务域与智能形态

HF Learn 把 LLM、Agents、MCP、Deep RL、CV、Audio、Diffusion、Robotics、3D、Games 并列为学习分支；Transformers 文档覆盖 text、vision、audio、video、multimodal；AIMA 也把 NLP、Robotics、CV 放在 AI 应用主干中。

- pathKey: `E`
- stage: 02 任务域与数据
- modules: 8
- concepts: 60
- display note: 把模态、多模态、决策、具身与扩展能力拆开阅读，避免混在同一层。

### Domain 关系
- 模态、任务域与智能形态 是“任务域”分支，不是新的基础原理层。
- 深度学习与基础模型 层基础模型在 模态、任务域与智能形态 层变成具体模态家族。
- LLM 核心机制 层 LLM 核心主要属于 语言（NLP / LLM），但会向 多模态 多模态扩展。
- 决策与强化学习/机器人与具身智能 与 经典 AI 层经典决策、机器学习 层强化学习、Agent 系统 层 Agent 系统强连接。

### Module 分组
- 模态与多模态: E1. 语言（NLP / LLM） / E2. 视觉（CV） / E3. 音频 / 语音 / E4. 视频 / E5. 多模态
- 决策、具身与扩展: E6. 决策与强化学习 / E7. 机器人与具身智能 / E8. 扩展领域

### Modules

#### E1. 语言（NLP / LLM）
- pathKey: `E/E1. 语言（NLP / LLM）`
- concept count: 11
- concepts:
  - 文本分类 · `E/E1. 语言（NLP / LLM）/文本分类`
  - 信息抽取 · `E/E1. 语言（NLP / LLM）/信息抽取`
  - 命名实体识别 · `E/E1. 语言（NLP / LLM）/命名实体识别`
  - 翻译 · `E/E1. 语言（NLP / LLM）/翻译`
  - 摘要 · `E/E1. 语言（NLP / LLM）/摘要`
  - 问答 · `E/E1. 语言（NLP / LLM）/问答`
  - 对话 · `E/E1. 语言（NLP / LLM）/对话`
  - 检索 · `E/E1. 语言（NLP / LLM）/检索`
  - 代码生成与理解 · `E/E1. 语言（NLP / LLM）/代码生成与理解`
  - 结构化解析 · `E/E1. 语言（NLP / LLM）/结构化解析`
  - LLM：通用语言能力模型 · `E/E1. 语言（NLP / LLM）/LLM：通用语言能力模型`

#### E2. 视觉（CV）
- pathKey: `E/E2. 视觉（CV）`
- concept count: 9
- concepts:
  - 图像分类 · `E/E2. 视觉（CV）/图像分类`
  - 目标检测 · `E/E2. 视觉（CV）/目标检测`
  - 分割 · `E/E2. 视觉（CV）/分割`
  - OCR / 文档理解 · `E/E2. 视觉（CV）/OCR / 文档理解`
  - 姿态估计 · `E/E2. 视觉（CV）/姿态估计`
  - 跟踪 · `E/E2. 视觉（CV）/跟踪`
  - 图像生成 · `E/E2. 视觉（CV）/图像生成`
  - 图像编辑 · `E/E2. 视觉（CV）/图像编辑`
  - 视觉检索 · `E/E2. 视觉（CV）/视觉检索`

#### E3. 音频 / 语音
- pathKey: `E/E3. 音频 / 语音`
- concept count: 7
- concepts:
  - 自动语音识别（ASR） · `E/E3. 音频 / 语音/自动语音识别（ASR）`
  - 说话人识别 · `E/E3. 音频 / 语音/说话人识别`
  - 音频分类 · `E/E3. 音频 / 语音/音频分类`
  - 语音翻译 · `E/E3. 音频 / 语音/语音翻译`
  - 文本转语音（TTS） · `E/E3. 音频 / 语音/文本转语音（TTS）`
  - 语音到语音 · `E/E3. 音频 / 语音/语音到语音`
  - 音乐/音频生成 · `E/E3. 音频 / 语音/音乐/音频生成`

#### E4. 视频
- pathKey: `E/E4. 视频`
- concept count: 6
- concepts:
  - 视频理解 · `E/E4. 视频/视频理解`
  - 视频检索 · `E/E4. 视频/视频检索`
  - 视频摘要 · `E/E4. 视频/视频摘要`
  - 动作识别 · `E/E4. 视频/动作识别`
  - 视频问答 · `E/E4. 视频/视频问答`
  - 视频生成 · `E/E4. 视频/视频生成`

#### E5. 多模态
- pathKey: `E/E5. 多模态`
- concept count: 7
- concepts:
  - 图文 · `E/E5. 多模态/图文`
  - 音文 · `E/E5. 多模态/音文`
  - 视频文 · `E/E5. 多模态/视频文`
  - 视觉语言模型（VLM） · `E/E5. 多模态/视觉语言模型（VLM）`
  - Omni / any-to-any 系统 · `E/E5. 多模态/Omni / any-to-any 系统`
  - 多模态推理 · `E/E5. 多模态/多模态推理`
  - 多模态 Agent · `E/E5. 多模态/多模态 Agent`

#### E6. 决策与强化学习
- pathKey: `E/E6. 决策与强化学习`
- concept count: 6
- concepts:
  - 策略学习 · `E/E6. 决策与强化学习/策略学习`
  - 值函数 · `E/E6. 决策与强化学习/值函数`
  - 奖励设计 · `E/E6. 决策与强化学习/奖励设计`
  - 探索/利用 · `E/E6. 决策与强化学习/探索/利用`
  - 在线交互决策 · `E/E6. 决策与强化学习/在线交互决策`
  - 模拟环境学习 · `E/E6. 决策与强化学习/模拟环境学习`

#### E7. 机器人与具身智能
- pathKey: `E/E7. 机器人与具身智能`
- concept count: 8
- concepts:
  - 感知 · `E/E7. 机器人与具身智能/感知`
  - 定位 · `E/E7. 机器人与具身智能/定位`
  - 建图 · `E/E7. 机器人与具身智能/建图`
  - 操作 · `E/E7. 机器人与具身智能/操作`
  - 导航 · `E/E7. 机器人与具身智能/导航`
  - 控制 · `E/E7. 机器人与具身智能/控制`
  - 技能学习 · `E/E7. 机器人与具身智能/技能学习`
  - 感知—规划—动作闭环 · `E/E7. 机器人与具身智能/感知—规划—动作闭环`

#### E8. 扩展领域
- pathKey: `E/E8. 扩展领域`
- concept count: 6
- concepts:
  - 3D ML · `E/E8. 扩展领域/3D ML`
  - 游戏 AI · `E/E8. 扩展领域/游戏 AI`
  - 推荐系统 · `E/E8. 扩展领域/推荐系统`
  - 时间序列 · `E/E8. 扩展领域/时间序列`
  - 图学习 · `E/E8. 扩展领域/图学习`
  - 科学计算 / Scientific AI · `E/E8. 扩展领域/科学计算 / Scientific AI`

## F. 数据层（横切层）

HF Datasets 把数据访问、处理、共享、流式加载、跨模态支持作为基础设施；OpenAI 的 eval/agent-eval 又把 datasets、traces、eval runs 连成闭环。

- pathKey: `F`
- stage: 02 任务域与数据
- modules: 7
- concepts: 59
- crosscut note: 这是全局数据轴：训练、检索、评测、线上反馈都会经过这里。

### Domain 关系
- 数据层（横切层） 横穿 深度学习与基础模型、LLM 核心机制、模型适配、后训练与对齐、检索、记忆与外部知识、Agent 系统、评测、安全与治理、产品、场景与组织。
- 同样叫“数据”，但训练数据、知识库数据、用户会话数据、评测数据、trace 数据是不同节点。
- 数据层（横切层） 是整张图里最容易被混淆、但最应该单独画出的横切层。

### Modules

#### F1. 数据类型
- pathKey: `F/F1. 数据类型`
- concept count: 10
- concepts:
  - 预训练语料 · `F/F1. 数据类型/预训练语料`
  - 指令微调数据 · `F/F1. 数据类型/指令微调数据`
  - 偏好数据 · `F/F1. 数据类型/偏好数据`
  - 奖励数据 · `F/F1. 数据类型/奖励数据`
  - 工具调用数据 · `F/F1. 数据类型/工具调用数据`
  - Agent traces · `F/F1. 数据类型/Agent traces`
  - Eval datasets · `F/F1. 数据类型/Eval datasets`
  - 知识库文档 · `F/F1. 数据类型/知识库文档`
  - 用户行为日志 · `F/F1. 数据类型/用户行为日志`
  - 合成数据 · `F/F1. 数据类型/合成数据`

#### F2. 数据形态
- pathKey: `F/F2. 数据形态`
- concept count: 10
- concepts:
  - 文本 · `F/F2. 数据形态/文本`
  - 图像 · `F/F2. 数据形态/图像`
  - 音频 · `F/F2. 数据形态/音频`
  - 视频 · `F/F2. 数据形态/视频`
  - 多模态对 · `F/F2. 数据形态/多模态对`
  - JSON / schema data · `F/F2. 数据形态/JSON / schema data`
  - 图结构 · `F/F2. 数据形态/图结构`
  - 时间序列 · `F/F2. 数据形态/时间序列`
  - 代码 · `F/F2. 数据形态/代码`
  - 交互轨迹 · `F/F2. 数据形态/交互轨迹`

#### F3. 数据工程
- pathKey: `F/F3. 数据工程`
- concept count: 10
- concepts:
  - 采集 · `F/F3. 数据工程/采集`
  - 清洗 · `F/F3. 数据工程/清洗`
  - 去重 · `F/F3. 数据工程/去重`
  - 过滤 · `F/F3. 数据工程/过滤`
  - 切分 · `F/F3. 数据工程/切分`
  - 标注 · `F/F3. 数据工程/标注`
  - 版本管理 · `F/F3. 数据工程/版本管理`
  - 数据增广 · `F/F3. 数据工程/数据增广`
  - 合成生成 · `F/F3. 数据工程/合成生成`
  - 流式处理 · `F/F3. 数据工程/流式处理`

#### F4. 数据质量
- pathKey: `F/F4. 数据质量`
- concept count: 8
- concepts:
  - 覆盖度 · `F/F4. 数据质量/覆盖度`
  - 正确性 · `F/F4. 数据质量/正确性`
  - 一致性 · `F/F4. 数据质量/一致性`
  - 多样性 · `F/F4. 数据质量/多样性`
  - 噪声控制 · `F/F4. 数据质量/噪声控制`
  - 分布匹配 · `F/F4. 数据质量/分布匹配`
  - 偏差与公平性 · `F/F4. 数据质量/偏差与公平性`
  - 时效性 · `F/F4. 数据质量/时效性`

#### F5. 数据治理
- pathKey: `F/F5. 数据治理`
- concept count: 7
- concepts:
  - License · `F/F5. 数据治理/License`
  - 隐私 · `F/F5. 数据治理/隐私`
  - PII · `F/F5. 数据治理/PII`
  - 数据保留 · `F/F5. 数据治理/数据保留`
  - 权限 · `F/F5. 数据治理/权限`
  - 数据卡 / model card 对齐 · `F/F5. 数据治理/数据卡 / model card 对齐`
  - 审计 · `F/F5. 数据治理/审计`

#### F6. 数据在系统中的角色
- pathKey: `F/F6. 数据在系统中的角色`
- concept count: 6
- concepts:
  - 预训练数据 → 决定基础能力上限 · `F/F6. 数据在系统中的角色/预训练数据 → 决定基础能力上限`
  - SFT 数据 → 决定任务风格与稳定性 · `F/F6. 数据在系统中的角色/SFT 数据 → 决定任务风格与稳定性`
  - 偏好/奖励数据 → 决定对齐方向 · `F/F6. 数据在系统中的角色/偏好/奖励数据 → 决定对齐方向`
  - 工具 traces → 决定 Agent 行为优化 · `F/F6. 数据在系统中的角色/工具 traces → 决定 Agent 行为优化`
  - Eval datasets → 决定可重复评测 · `F/F6. 数据在系统中的角色/Eval datasets → 决定可重复评测`
  - 知识库文档 → 决定 RAG 质量 · `F/F6. 数据在系统中的角色/知识库文档 → 决定 RAG 质量`

#### F7. 后训练数据构建
- pathKey: `F/F7. 后训练数据构建`
- concept count: 8
- concepts:
  - Train / validation / test split · `F/F7. 后训练数据构建/Train / validation / test split`
  - Instruction crafting · `F/F7. 后训练数据构建/Instruction crafting`
  - Multi-turn examples · `F/F7. 后训练数据构建/Multi-turn examples`
  - Weight masking · `F/F7. 后训练数据构建/Weight masking`
  - Preference data · `F/F7. 后训练数据构建/Preference data`
  - Reward / verifier data · `F/F7. 后训练数据构建/Reward / verifier data`
  - Contamination / leakage checks · `F/F7. 后训练数据构建/Contamination / leakage checks`
  - Rubric-based graders for RFT · `F/F7. 后训练数据构建/Rubric-based graders for RFT`

## G. LLM 核心机制

HF 的 LLM 课程把 LLM 学习路径组织为 Transformers、fine-tuning、datasets、tokenizers、reasoning models；HF Tokenizers 文档把 tokenizer 视为完整管线；OpenAI 在 agent 构建里又把模型选择、推理能力、状态与工具结合放在核心位置。

- pathKey: `G`
- stage: 03 大模型系统
- modules: 8
- concepts: 58

### Domain 关系
- LLM 核心机制 是 模型适配、后训练与对齐、检索、记忆与外部知识、AI 应用工程、Agent 系统 的核心模型层。
- LLM 核心机制 与 数据层（横切层） 的关系：tokenizer、语料、上下文窗口、任务分布共同决定 LLM 能力边界。
- LLM 核心机制 与 检索、记忆与外部知识 的关系：LLM 负责生成与决策，检索、记忆与外部知识 层负责给它提供外部知识。
- LLM 核心机制 与 Agent 系统 的关系：Agent 不是替代 LLM，而是用 LLM 作为认知引擎。
- 推理模型与模型路由 负责回答“什么问题该交给 reasoning model、什么问题该交给通用 GPT、什么时候要做模型路由”。

### Modules

#### G1. 语言建模基础
- pathKey: `G/G1. 语言建模基础`
- concept count: 13
- concepts:
  - Token · `G/G1. 语言建模基础/Token`
  - Vocabulary · `G/G1. 语言建模基础/Vocabulary`
  - Tokenization pipeline · `G/G1. 语言建模基础/Tokenization pipeline`
    - Normalization · `G/G1. 语言建模基础/Tokenization pipeline/Normalization`
    - Pre-tokenization · `G/G1. 语言建模基础/Tokenization pipeline/Pre-tokenization`
    - Model（BPE / WordPiece / Unigram） · `G/G1. 语言建模基础/Tokenization pipeline/Model（BPE / WordPiece / Unigram）`
    - Post-processing · `G/G1. 语言建模基础/Tokenization pipeline/Post-processing`
    - Decoding · `G/G1. 语言建模基础/Tokenization pipeline/Decoding`
    - Special tokens / chat templates · `G/G1. 语言建模基础/Tokenization pipeline/Special tokens / chat templates`
  - Embedding · `G/G1. 语言建模基础/Embedding`
  - Positional information · `G/G1. 语言建模基础/Positional information`
  - Next-token prediction · `G/G1. 语言建模基础/Next-token prediction`
  - Token efficiency · `G/G1. 语言建模基础/Token efficiency`

#### G2. Transformer 机制
- pathKey: `G/G2. Transformer 机制`
- concept count: 6
- concepts:
  - Self-attention · `G/G2. Transformer 机制/Self-attention`
  - Multi-head attention · `G/G2. Transformer 机制/Multi-head attention`
  - Feed-forward blocks · `G/G2. Transformer 机制/Feed-forward blocks`
  - Residual / normalization · `G/G2. Transformer 机制/Residual / normalization`
  - 长上下文处理 · `G/G2. Transformer 机制/长上下文处理`
  - KV cache · `G/G2. Transformer 机制/KV cache`

#### G3. 上下文与记忆
- pathKey: `G/G3. 上下文与记忆`
- concept count: 4
- concepts:
  - 参数记忆（weights） · `G/G3. 上下文与记忆/参数记忆（weights）`
  - 上下文记忆（prompt context） · `G/G3. 上下文与记忆/上下文记忆（prompt context）`
  - 会话记忆（session memory） · `G/G3. 上下文与记忆/会话记忆（session memory）`
  - 外部记忆（RAG / tools / stores） · `G/G3. 上下文与记忆/外部记忆（RAG / tools / stores）`

#### G4. 生成与解码
- pathKey: `G/G4. 生成与解码`
- concept count: 7
- concepts:
  - Greedy · `G/G4. 生成与解码/Greedy`
  - Sampling · `G/G4. 生成与解码/Sampling`
  - Temperature · `G/G4. 生成与解码/Temperature`
  - Top-k · `G/G4. 生成与解码/Top-k`
  - Top-p · `G/G4. 生成与解码/Top-p`
  - Stop conditions · `G/G4. 生成与解码/Stop conditions`
  - Structured generation · `G/G4. 生成与解码/Structured generation`

#### G5. 能力面
- pathKey: `G/G5. 能力面`
- concept count: 10
- concepts:
  - 续写 · `G/G5. 能力面/续写`
  - 指令跟随 · `G/G5. 能力面/指令跟随`
  - 摘要 · `G/G5. 能力面/摘要`
  - 翻译 · `G/G5. 能力面/翻译`
  - 归纳 · `G/G5. 能力面/归纳`
  - 提取 · `G/G5. 能力面/提取`
  - 工具选择 · `G/G5. 能力面/工具选择`
  - 多步推理 · `G/G5. 能力面/多步推理`
  - 代码生成 · `G/G5. 能力面/代码生成`
  - 多模态理解 · `G/G5. 能力面/多模态理解`

#### G6. 局限面
- pathKey: `G/G6. 局限面`
- concept count: 6
- concepts:
  - 幻觉 · `G/G6. 局限面/幻觉`
  - 过期知识 · `G/G6. 局限面/过期知识`
  - 长上下文退化 · `G/G6. 局限面/长上下文退化`
  - 工具误用 · `G/G6. 局限面/工具误用`
  - 受提示与检索质量影响 · `G/G6. 局限面/受提示与检索质量影响`
  - 受数据分布影响 · `G/G6. 局限面/受数据分布影响`

#### G7. 模型类型细分
- pathKey: `G/G7. 模型类型细分`
- concept count: 6
- concepts:
  - 通用对话模型 · `G/G7. 模型类型细分/通用对话模型`
  - 推理强化模型 · `G/G7. 模型类型细分/推理强化模型`
  - 代码模型 · `G/G7. 模型类型细分/代码模型`
  - 多模态模型 · `G/G7. 模型类型细分/多模态模型`
  - 小模型 / 边缘模型 · `G/G7. 模型类型细分/小模型 / 边缘模型`
  - 专项模型 · `G/G7. 模型类型细分/专项模型`

#### G8. 推理模型与模型路由
- pathKey: `G/G8. 推理模型与模型路由`
- concept count: 6
- concepts:
  - Reasoning models vs GPT models · `G/G8. 推理模型与模型路由/Reasoning models vs GPT models`
  - Planner / executor split · `G/G8. 推理模型与模型路由/Planner / executor split`
  - Verifier / judge · `G/G8. 推理模型与模型路由/Verifier / judge`
  - Test-time compute / reasoning effort · `G/G8. 推理模型与模型路由/Test-time compute / reasoning effort`
  - Model routing policy · `G/G8. 推理模型与模型路由/Model routing policy`
  - 什么时候不要用 reasoning model · `G/G8. 推理模型与模型路由/什么时候不要用 reasoning model`

## H. 模型适配、后训练与对齐

PEFT 把“只调整少量参数”的适配方法系统化；TRL 覆盖 SFT、DPO、GRPO 等后训练方法；OpenAI 的 SFT、fine-tuning、RFT、model optimization 则把“行为定制、偏好优化、蒸馏、评测驱动优化”连成一条后训练链。

- pathKey: `H`
- stage: 03 大模型系统
- modules: 7
- concepts: 42

### Domain 关系
- Prompt ≠ Fine-tuning
- PEFT ⊂ Fine-tuning
- QLoRA = 量化 + LoRA 训练路径
- Distillation ≠ Quantization
- 模型适配、后训练与对齐 与 评测、安全与治理 强连接：后训练必须靠评测收敛，而不是只看主观感觉。

### Modules

#### H1. 不改权重的控制
- pathKey: `H/H1. 不改权重的控制`
- concept count: 6
- concepts:
  - Prompt engineering · `H/H1. 不改权重的控制/Prompt engineering`
  - System prompt · `H/H1. 不改权重的控制/System prompt`
  - Few-shot / in-context learning · `H/H1. 不改权重的控制/Few-shot / in-context learning`
  - Prompt templates · `H/H1. 不改权重的控制/Prompt templates`
  - Structured outputs · `H/H1. 不改权重的控制/Structured outputs`
  - Tool schemas · `H/H1. 不改权重的控制/Tool schemas`

#### H2. 监督式后训练
- pathKey: `H/H2. 监督式后训练`
- concept count: 6
- concepts:
  - SFT · `H/H2. 监督式后训练/SFT`
  - Domain fine-tuning · `H/H2. 监督式后训练/Domain fine-tuning`
  - Style fine-tuning · `H/H2. 监督式后训练/Style fine-tuning`
  - Tool / function-calling fine-tuning · `H/H2. 监督式后训练/Tool / function-calling fine-tuning`
  - Vision fine-tuning · `H/H2. 监督式后训练/Vision fine-tuning`
  - Task-specific tuning · `H/H2. 监督式后训练/Task-specific tuning`

#### H3. 偏好优化与对齐
- pathKey: `H/H3. 偏好优化与对齐`
- concept count: 7
- concepts:
  - Reward modeling · `H/H3. 偏好优化与对齐/Reward modeling`
  - DPO · `H/H3. 偏好优化与对齐/DPO`
  - Online DPO · `H/H3. 偏好优化与对齐/Online DPO`
  - GRPO · `H/H3. 偏好优化与对齐/GRPO`
  - RLHF · `H/H3. 偏好优化与对齐/RLHF`
  - RFT · `H/H3. 偏好优化与对齐/RFT`
  - Policy / constitutional alignment · `H/H3. 偏好优化与对齐/Policy / constitutional alignment`

#### H4. 参数高效适配
- pathKey: `H/H4. 参数高效适配`
- concept count: 4
- concepts:
  - Adapter · `H/H4. 参数高效适配/Adapter`
  - LoRA · `H/H4. 参数高效适配/LoRA`
  - QLoRA · `H/H4. 参数高效适配/QLoRA`
  - 其他 PEFT 变体 · `H/H4. 参数高效适配/其他 PEFT 变体`

#### H5. 压缩与效率优化
- pathKey: `H/H5. 压缩与效率优化`
- concept count: 5
- concepts:
  - Quantization · `H/H5. 压缩与效率优化/Quantization`
  - Distillation · `H/H5. 压缩与效率优化/Distillation`
  - Pruning · `H/H5. 压缩与效率优化/Pruning`
  - Smaller specialized models · `H/H5. 压缩与效率优化/Smaller specialized models`
  - Quantization-aware training（部分方法） · `H/H5. 压缩与效率优化/Quantization-aware training（部分方法）`

#### H6. 行为优化维度
- pathKey: `H/H6. 行为优化维度`
- concept count: 7
- concepts:
  - 更准确 · `H/H6. 行为优化维度/更准确`
  - 更稳定 · `H/H6. 行为优化维度/更稳定`
  - 更短/更长 · `H/H6. 行为优化维度/更短/更长`
  - 更结构化 · `H/H6. 行为优化维度/更结构化`
  - 更会调用工具 · `H/H6. 行为优化维度/更会调用工具`
  - 更适应特定领域 · `H/H6. 行为优化维度/更适应特定领域`
  - 更便宜 / 更快 · `H/H6. 行为优化维度/更便宜 / 更快`

#### H7. 后训练数据构建
- pathKey: `H/H7. 后训练数据构建`
- concept count: 7
- concepts:
  - Train / validation / test split · `H/H7. 后训练数据构建/Train / validation / test split`
  - Instruction crafting · `H/H7. 后训练数据构建/Instruction crafting`
  - Multi-turn examples · `H/H7. 后训练数据构建/Multi-turn examples`
  - Weight masking · `H/H7. 后训练数据构建/Weight masking`
  - Preference / reward / verifier data · `H/H7. 后训练数据构建/Preference / reward / verifier data`
  - Contamination / leakage checks · `H/H7. 后训练数据构建/Contamination / leakage checks`
  - Rubric-based graders for RFT · `H/H7. 后训练数据构建/Rubric-based graders for RFT`

## I. 检索、记忆与外部知识

OpenAI 的 embeddings、file search、tools 文档与 HF 的 RAG 文档共同说明：RAG 的本质是把参数记忆与外部非参数记忆接起来；file search 又把 chunking、embeddings、vector+keyword retrieval 做成工程链路。

- pathKey: `I`
- stage: 03 大模型系统
- modules: 6
- concepts: 48

### Domain 关系
- RAG = LLM + external memory，不是训练方法。
- RAG 与 模型适配、后训练与对齐 层微调是互补关系，不是天然替代关系。
- 检索、记忆与外部知识 与 Agent 系统 连接时会出现 agentic RAG：模型先决定“要不要检索、检索什么、何时停止检索”。
- 检索、记忆与外部知识 与 数据层（横切层） 关系最紧：知识库数据质量直接决定回答质量。

### Modules

#### I1. 表示与检索基础
- pathKey: `I/I1. 表示与检索基础`
- concept count: 6
- concepts:
  - Embeddings · `I/I1. 表示与检索基础/Embeddings`
  - Dense retrieval · `I/I1. 表示与检索基础/Dense retrieval`
  - Sparse retrieval · `I/I1. 表示与检索基础/Sparse retrieval`
  - Hybrid retrieval · `I/I1. 表示与检索基础/Hybrid retrieval`
  - Similarity search · `I/I1. 表示与检索基础/Similarity search`
  - Reranking · `I/I1. 表示与检索基础/Reranking`

#### I2. 知识库构建
- pathKey: `I/I2. 知识库构建`
- concept count: 12
- concepts:
  - 数据接入 · `I/I2. 知识库构建/数据接入`
  - Parser types · `I/I2. 知识库构建/Parser types`
    - Text / Markdown · `I/I2. 知识库构建/Parser types/Text / Markdown`
    - PDF / Office · `I/I2. 知识库构建/Parser types/PDF / Office`
    - HTML / web content · `I/I2. 知识库构建/Parser types/HTML / web content`
    - Code / repository parsers · `I/I2. 知识库构建/Parser types/Code / repository parsers`
  - Chunking strategy · `I/I2. 知识库构建/Chunking strategy`
  - Metadata schema · `I/I2. 知识库构建/Metadata schema`
  - Indexing · `I/I2. 知识库构建/Indexing`
  - Vector store · `I/I2. 知识库构建/Vector store`
  - Keyword index · `I/I2. 知识库构建/Keyword index`
  - Update / refresh / re-index / delete · `I/I2. 知识库构建/Update / refresh / re-index / delete`

#### I3. RAG 管线
- pathKey: `I/I3. RAG 管线`
- concept count: 10
- concepts:
  - Query understanding · `I/I3. RAG 管线/Query understanding`
  - Query rewrite · `I/I3. RAG 管线/Query rewrite`
  - Retrieval · `I/I3. RAG 管线/Retrieval`
  - Permission-aware retrieval · `I/I3. RAG 管线/Permission-aware retrieval`
  - Rerank · `I/I3. RAG 管线/Rerank`
  - Context packing · `I/I3. RAG 管线/Context packing`
  - Citation span alignment · `I/I3. RAG 管线/Citation span alignment`
  - Generation · `I/I3. RAG 管线/Generation`
  - Citation / provenance · `I/I3. RAG 管线/Citation / provenance`
  - Post-processing · `I/I3. RAG 管线/Post-processing`

#### I4. RAG 形态
- pathKey: `I/I4. RAG 形态`
- concept count: 6
- concepts:
  - Basic RAG · `I/I4. RAG 形态/Basic RAG`
  - Multi-hop RAG · `I/I4. RAG 形态/Multi-hop RAG`
  - Query rewriting RAG · `I/I4. RAG 形态/Query rewriting RAG`
  - Agentic RAG · `I/I4. RAG 形态/Agentic RAG`
  - KG-RAG · `I/I4. RAG 形态/KG-RAG`
  - Long-context + retrieval hybrid · `I/I4. RAG 形态/Long-context + retrieval hybrid`

#### I5. 记忆类型
- pathKey: `I/I5. 记忆类型`
- concept count: 7
- concepts:
  - 参数记忆 · `I/I5. 记忆类型/参数记忆`
  - 非参数知识库 · `I/I5. 记忆类型/非参数知识库`
  - 会话记忆 · `I/I5. 记忆类型/会话记忆`
  - 用户长期记忆 · `I/I5. 记忆类型/用户长期记忆`
  - 任务记忆 · `I/I5. 记忆类型/任务记忆`
  - Episodic memory · `I/I5. 记忆类型/Episodic memory`
  - Semantic memory · `I/I5. 记忆类型/Semantic memory`

#### I6. 关键质量点
- pathKey: `I/I6. 关键质量点`
- concept count: 7
- concepts:
  - 召回率 · `I/I6. 关键质量点/召回率`
  - 精准率 · `I/I6. 关键质量点/精准率`
  - Chunk 质量 · `I/I6. 关键质量点/Chunk 质量`
  - 过期知识 · `I/I6. 关键质量点/过期知识`
  - 授权与权限边界 · `I/I6. 关键质量点/授权与权限边界`
  - 可追溯性 · `I/I6. 关键质量点/可追溯性`
  - 引用可信度 · `I/I6. 关键质量点/引用可信度`

## J. AI 应用工程

OpenAI 把结构化输出、函数调用、工具、会话状态、流式响应、上下文管理等组织成应用层的核心能力；这层是“模型能力”向“可维护软件系统”转化的地方。

- pathKey: `J`
- stage: 04 应用与 Agent
- modules: 9
- concepts: 52

### Domain 关系
- AI 应用工程 是“单个 AI 功能/应用”的工程层；Agent 系统 是“多步自主系统”的工程层。
- AI 应用工程 可不进入 Agent 系统：很多优秀 AI 产品只是强应用工程，不一定需要 Agent。
- AI 应用工程 需要同时连接 LLM 核心机制、检索、记忆与外部知识、运行时与基础设施、评测、安全与治理、产品、场景与组织 四层，才能从 demo 变成产品。

### Modules

#### J1. 模型接口层
- pathKey: `J/J1. 模型接口层`
- concept count: 5
- concepts:
  - Chat / responses · `J/J1. 模型接口层/Chat / responses`
  - Prompt composition · `J/J1. 模型接口层/Prompt composition`
  - System / user / tool messages · `J/J1. 模型接口层/System / user / tool messages`
  - Context assembly · `J/J1. 模型接口层/Context assembly`
  - Input / output contracts · `J/J1. 模型接口层/Input / output contracts`

#### J2. 结构化输出
- pathKey: `J/J2. 结构化输出`
- concept count: 6
- concepts:
  - JSON mode · `J/J2. 结构化输出/JSON mode`
  - JSON Schema · `J/J2. 结构化输出/JSON Schema`
  - Typed outputs · `J/J2. 结构化输出/Typed outputs`
  - Validation · `J/J2. 结构化输出/Validation`
  - Parsing · `J/J2. 结构化输出/Parsing`
  - Error recovery · `J/J2. 结构化输出/Error recovery`

#### J3. 工具调用
- pathKey: `J/J3. 工具调用`
- concept count: 6
- concepts:
  - Function calling · `J/J3. 工具调用/Function calling`
  - Tool schema design · `J/J3. 工具调用/Tool schema design`
  - Tool routing · `J/J3. 工具调用/Tool routing`
  - Tool execution · `J/J3. 工具调用/Tool execution`
  - Tool result injection · `J/J3. 工具调用/Tool result injection`
  - Tool retries / fallback · `J/J3. 工具调用/Tool retries / fallback`

#### J4. 会话与状态
- pathKey: `J/J4. 会话与状态`
- concept count: 7
- concepts:
  - Conversation state · `J/J4. 会话与状态/Conversation state`
  - Session memory · `J/J4. 会话与状态/Session memory`
  - Server-managed state · `J/J4. 会话与状态/Server-managed state`
  - Client-managed replay · `J/J4. 会话与状态/Client-managed replay`
  - Context compaction · `J/J4. 会话与状态/Context compaction`
  - Prompt caching · `J/J4. 会话与状态/Prompt caching`
  - Token budgeting · `J/J4. 会话与状态/Token budgeting`

#### J5. 流式与实时
- pathKey: `J/J5. 流式与实时`
- concept count: 5
- concepts:
  - Streaming text · `J/J5. 流式与实时/Streaming text`
  - Streaming tool events · `J/J5. 流式与实时/Streaming tool events`
  - WebSocket / realtime · `J/J5. 流式与实时/WebSocket / realtime`
  - Voice interaction · `J/J5. 流式与实时/Voice interaction`
  - Incremental UI updates · `J/J5. 流式与实时/Incremental UI updates`

#### J6. 多模态应用
- pathKey: `J/J6. 多模态应用`
- concept count: 4
- concepts:
  - Image input · `J/J6. 多模态应用/Image input`
  - Audio input/output · `J/J6. 多模态应用/Audio input/output`
  - File input · `J/J6. 多模态应用/File input`
  - Mixed-modal interfaces · `J/J6. 多模态应用/Mixed-modal interfaces`

#### J7. 工程可靠性
- pathKey: `J/J7. 工程可靠性`
- concept count: 7
- concepts:
  - Retry · `J/J7. 工程可靠性/Retry`
  - Timeout · `J/J7. 工程可靠性/Timeout`
  - Idempotency · `J/J7. 工程可靠性/Idempotency`
  - Fallback · `J/J7. 工程可靠性/Fallback`
  - Circuit breaking · `J/J7. 工程可靠性/Circuit breaking`
  - Error classes · `J/J7. 工程可靠性/Error classes`
  - Observability hooks · `J/J7. 工程可靠性/Observability hooks`

#### J8. 安全与权限
- pathKey: `J/J8. 安全与权限`
- concept count: 5
- concepts:
  - Auth · `J/J8. 安全与权限/Auth`
  - Secret management · `J/J8. 安全与权限/Secret management`
  - Permission scopes · `J/J8. 安全与权限/Permission scopes`
  - Sensitive action approval · `J/J8. 安全与权限/Sensitive action approval`
  - Isolation boundaries · `J/J8. 安全与权限/Isolation boundaries`

#### J9. 应用形态
- pathKey: `J/J9. 应用形态`
- concept count: 7
- concepts:
  - Chat app · `J/J9. 应用形态/Chat app`
  - Copilot · `J/J9. 应用形态/Copilot`
  - Search / QA · `J/J9. 应用形态/Search / QA`
  - Document assistant · `J/J9. 应用形态/Document assistant`
  - Coding assistant · `J/J9. 应用形态/Coding assistant`
  - Workflow assistant · `J/J9. 应用形态/Workflow assistant`
  - Voice assistant · `J/J9. 应用形态/Voice assistant`

## K. Agent 系统

OpenAI 把 agent 的核心原语定义为 models、tools、state/memory、orchestration；LangGraph 区分了固定路径的 workflow 与动态路径的 agent；MCP 则把外部数据/工具/工作流连接标准化为 resources / prompts / tools。

- pathKey: `K`
- stage: 04 应用与 Agent
- modules: 10
- concepts: 84

### Domain 关系
- Agent = LLM 核心机制 层模型 + AI 应用工程 层应用工程 + 检索、记忆与外部知识 层知识 + 运行时与基础设施 层运行时 + 评测、安全与治理 层控制。
- Workflow ≠ Agent
- MCP ≠ Agent
- Multi-agent ≠ 更强模型
- Agent 系统 与 经典 AI 层经典 AI 强连接：规划、搜索、决策、图式编排在这里重新出现。

### Modules

#### K1. Agent 的最小构成
- pathKey: `K/K1. Agent 的最小构成`
- concept count: 7
- concepts:
  - 模型（Model） · `K/K1. Agent 的最小构成/模型（Model）`
  - 指令（Instructions） · `K/K1. Agent 的最小构成/指令（Instructions）`
  - 工具（Tools） · `K/K1. Agent 的最小构成/工具（Tools）`
  - 状态 / 记忆（State / Memory） · `K/K1. Agent 的最小构成/状态 / 记忆（State / Memory）`
  - 编排（Orchestration） · `K/K1. Agent 的最小构成/编排（Orchestration）`
  - Guardrails · `K/K1. Agent 的最小构成/Guardrails`
  - Human review · `K/K1. Agent 的最小构成/Human review`

#### K2. 执行形态
- pathKey: `K/K2. 执行形态`
- concept count: 8
- concepts:
  - Workflow · `K/K2. 执行形态/Workflow`
    - 固定路径 · `K/K2. 执行形态/Workflow/固定路径`
    - 规则驱动 · `K/K2. 执行形态/Workflow/规则驱动`
  - Agent · `K/K2. 执行形态/Agent`
    - 动态决定步骤 · `K/K2. 执行形态/Agent/动态决定步骤`
    - 动态决定工具 · `K/K2. 执行形态/Agent/动态决定工具`
  - Hybrid system · `K/K2. 执行形态/Hybrid system`
    - 固定骨架 + 局部 agent 决策 · `K/K2. 执行形态/Hybrid system/固定骨架 + 局部 agent 决策`

#### K3. 单 Agent 模式
- pathKey: `K/K3. 单 Agent 模式`
- concept count: 6
- concepts:
  - ReAct / reason-act loop · `K/K3. 单 Agent 模式/ReAct / reason-act loop`
  - Plan-then-act · `K/K3. 单 Agent 模式/Plan-then-act`
  - Reflect / retry · `K/K3. 单 Agent 模式/Reflect / retry`
  - Tool-using agent · `K/K3. 单 Agent 模式/Tool-using agent`
  - Retrieval-first agent · `K/K3. 单 Agent 模式/Retrieval-first agent`
  - Verification loop · `K/K3. 单 Agent 模式/Verification loop`

#### K4. 多 Agent 模式
- pathKey: `K/K4. 多 Agent 模式`
- concept count: 7
- concepts:
  - Manager / worker · `K/K4. 多 Agent 模式/Manager / worker`
  - Router / specialists · `K/K4. 多 Agent 模式/Router / specialists`
  - Handoff · `K/K4. 多 Agent 模式/Handoff`
  - Agents-as-tools · `K/K4. 多 Agent 模式/Agents-as-tools`
  - Reviewer / critic / verifier · `K/K4. 多 Agent 模式/Reviewer / critic / verifier`
  - Debate / voting · `K/K4. 多 Agent 模式/Debate / voting`
  - Subgraphs · `K/K4. 多 Agent 模式/Subgraphs`

#### K5. 图式编排
- pathKey: `K/K5. 图式编排`
- concept count: 8
- concepts:
  - State · `K/K5. 图式编排/State`
  - Nodes · `K/K5. 图式编排/Nodes`
  - Edges · `K/K5. 图式编排/Edges`
  - Conditional branches · `K/K5. 图式编排/Conditional branches`
  - Loops · `K/K5. 图式编排/Loops`
  - Parallel execution · `K/K5. 图式编排/Parallel execution`
  - Checkpoints · `K/K5. 图式编排/Checkpoints`
  - Resumability · `K/K5. 图式编排/Resumability`

#### K6. Agent 记忆
- pathKey: `K/K6. Agent 记忆`
- concept count: 7
- concepts:
  - Session memory · `K/K6. Agent 记忆/Session memory`
  - Episodic memory · `K/K6. Agent 记忆/Episodic memory`
  - Semantic memory · `K/K6. Agent 记忆/Semantic memory`
  - User memory · `K/K6. Agent 记忆/User memory`
  - Task memory · `K/K6. Agent 记忆/Task memory`
  - Long-term distilled memory · `K/K6. Agent 记忆/Long-term distilled memory`
  - Memory injection / compaction · `K/K6. Agent 记忆/Memory injection / compaction`

#### K7. 工具与外部连接
- pathKey: `K/K7. 工具与外部连接`
- concept count: 22
- concepts:
  - Built-in tools · `K/K7. 工具与外部连接/Built-in tools`
  - Function tools · `K/K7. 工具与外部连接/Function tools`
  - File search / web search / code tools · `K/K7. 工具与外部连接/File search / web search / code tools`
  - MCP protocol stack · `K/K7. 工具与外部连接/MCP protocol stack`
    - Base protocol（JSON-RPC） · `K/K7. 工具与外部连接/MCP protocol stack/Base protocol（JSON-RPC）`
    - Lifecycle & capability negotiation · `K/K7. 工具与外部连接/MCP protocol stack/Lifecycle & capability negotiation`
    - Authorization · `K/K7. 工具与外部连接/MCP protocol stack/Authorization`
    - Transports（stdio / HTTP） · `K/K7. 工具与外部连接/MCP protocol stack/Transports（stdio / HTTP）`
    - Roots / sampling · `K/K7. 工具与外部连接/MCP protocol stack/Roots / sampling`
    - Logging / argument completion · `K/K7. 工具与外部连接/MCP protocol stack/Logging / argument completion`
  - MCP servers · `K/K7. 工具与外部连接/MCP servers`
    - Resources · `K/K7. 工具与外部连接/MCP servers/Resources`
    - Prompts · `K/K7. 工具与外部连接/MCP servers/Prompts`
    - Tools · `K/K7. 工具与外部连接/MCP servers/Tools`
  - Sandbox workspace · `K/K7. 工具与外部连接/Sandbox workspace`
    - Workspace filesystem · `K/K7. 工具与外部连接/Sandbox workspace/Workspace filesystem`
    - Commands / packages · `K/K7. 工具与外部连接/Sandbox workspace/Commands / packages`
    - Artifacts · `K/K7. 工具与外部连接/Sandbox workspace/Artifacts`
    - Ports / preview · `K/K7. 工具与外部连接/Sandbox workspace/Ports / preview`
    - Resume same workspace after review · `K/K7. 工具与外部连接/Sandbox workspace/Resume same workspace after review`
  - Connectors · `K/K7. 工具与外部连接/Connectors`
  - Computer / shell / browser actions · `K/K7. 工具与外部连接/Computer / shell / browser actions`

#### K8. 人在回路
- pathKey: `K/K8. 人在回路`
- concept count: 6
- concepts:
  - Approval before side effects · `K/K8. 人在回路/Approval before side effects`
  - Escalation · `K/K8. 人在回路/Escalation`
  - Review queues · `K/K8. 人在回路/Review queues`
  - Human override · `K/K8. 人在回路/Human override`
  - Manual correction · `K/K8. 人在回路/Manual correction`
  - HITL checkpoints · `K/K8. 人在回路/HITL checkpoints`

#### K9. Agent 观测与控制
- pathKey: `K/K9. Agent 观测与控制`
- concept count: 6
- concepts:
  - Tracing · `K/K9. Agent 观测与控制/Tracing`
  - Step logs · `K/K9. Agent 观测与控制/Step logs`
  - Tool-call records · `K/K9. Agent 观测与控制/Tool-call records`
  - Handoff records · `K/K9. Agent 观测与控制/Handoff records`
  - Guardrail results · `K/K9. Agent 观测与控制/Guardrail results`
  - Auditability · `K/K9. Agent 观测与控制/Auditability`

#### K10. Agent 形态分支
- pathKey: `K/K10. Agent 形态分支`
- concept count: 7
- concepts:
  - Knowledge agent · `K/K10. Agent 形态分支/Knowledge agent`
  - Research agent · `K/K10. Agent 形态分支/Research agent`
  - Coding agent · `K/K10. Agent 形态分支/Coding agent`
  - Workflow automation agent · `K/K10. Agent 形态分支/Workflow automation agent`
  - Voice agent · `K/K10. Agent 形态分支/Voice agent`
  - Computer-use agent · `K/K10. Agent 形态分支/Computer-use agent`
  - Multi-agent organization · `K/K10. Agent 形态分支/Multi-agent organization`

## L. 运行时与基础设施

vLLM 把离线批推理和 OpenAI-compatible online serving 作为核心能力；Ollama 支持本地模型、tool calling、structured outputs 与 OpenAI compatibility；MLX/MLX-LM 面向 Apple silicon 本地推理和微调；Transformers.js 则代表浏览器/JS 运行时路线；Accelerate、DDP/FSDP 负责训练和大规模执行。

- pathKey: `L`
- stage: 05 运行、治理与产品
- modules: 7
- concepts: 52
- crosscut note: 这是全局运行时轴：模型访问、服务运行、推理优化和生产指标都会受它约束。

### Domain 关系
- 运行时与基础设施 不是模型本体，而是模型/Agent 的承载层。
- 模型适配、后训练与对齐 层量化、蒸馏会直接影响 运行时与基础设施 层资源消耗。
- AI 应用工程/Agent 系统 层的并发、流式、状态管理，最终都落在 运行时与基础设施 层执行。
- 数据层（横切层）/评测、安全与治理 层的数据与评测，也需要 运行时与基础设施 层的存储、调度、执行能力。

### Modules

#### L1. 模型访问方式
- pathKey: `L/L1. 模型访问方式`
- concept count: 5
- concepts:
  - 云 API · `L/L1. 模型访问方式/云 API`
  - 自托管推理 · `L/L1. 模型访问方式/自托管推理`
  - 本地推理 · `L/L1. 模型访问方式/本地推理`
  - 浏览器 / Edge 推理 · `L/L1. 模型访问方式/浏览器 / Edge 推理`
  - 混合推理 · `L/L1. 模型访问方式/混合推理`

#### L2. 服务运行时
- pathKey: `L/L2. 服务运行时`
- concept count: 5
- concepts:
  - vLLM · `L/L2. 服务运行时/vLLM`
  - Ollama · `L/L2. 服务运行时/Ollama`
  - MLX / MLX-LM · `L/L2. 服务运行时/MLX / MLX-LM`
  - Transformers.js · `L/L2. 服务运行时/Transformers.js`
  - 其他 OpenAI-compatible servers · `L/L2. 服务运行时/其他 OpenAI-compatible servers`

#### L3. 推理优化
- pathKey: `L/L3. 推理优化`
- concept count: 13
- concepts:
  - PagedAttention · `L/L3. 推理优化/PagedAttention`
  - Continuous batching · `L/L3. 推理优化/Continuous batching`
  - Chunked prefill · `L/L3. 推理优化/Chunked prefill`
  - KV cache · `L/L3. 推理优化/KV cache`
  - Prefix cache · `L/L3. 推理优化/Prefix cache`
  - Prefix cache sharing / invalidation · `L/L3. 推理优化/Prefix cache sharing / invalidation`
  - KV offload · `L/L3. 推理优化/KV offload`
  - Speculative decoding · `L/L3. 推理优化/Speculative decoding`
  - Quantized inference · `L/L3. 推理优化/Quantized inference`
  - Context length management · `L/L3. 推理优化/Context length management`
  - Compiled graphs / kernels · `L/L3. 推理优化/Compiled graphs / kernels`
  - Concurrency control · `L/L3. 推理优化/Concurrency control`
  - Throughput / latency tuning · `L/L3. 推理优化/Throughput / latency tuning`

#### L4. 训练基础设施
- pathKey: `L/L4. 训练基础设施`
- concept count: 7
- concepts:
  - PyTorch · `L/L4. 训练基础设施/PyTorch`
  - Accelerate · `L/L4. 训练基础设施/Accelerate`
  - DDP · `L/L4. 训练基础设施/DDP`
  - FSDP · `L/L4. 训练基础设施/FSDP`
  - Checkpointing · `L/L4. 训练基础设施/Checkpointing`
  - Distributed training · `L/L4. 训练基础设施/Distributed training`
  - Experiment tracking · `L/L4. 训练基础设施/Experiment tracking`

#### L5. 系统基础设施
- pathKey: `L/L5. 系统基础设施`
- concept count: 7
- concepts:
  - SQL / NoSQL · `L/L5. 系统基础设施/SQL / NoSQL`
  - Vector DB · `L/L5. 系统基础设施/Vector DB`
  - Object storage · `L/L5. 系统基础设施/Object storage`
  - Cache · `L/L5. 系统基础设施/Cache`
  - Queue · `L/L5. 系统基础设施/Queue`
  - Artifact storage · `L/L5. 系统基础设施/Artifact storage`
  - Container / deployment layer · `L/L5. 系统基础设施/Container / deployment layer`

#### L6. 硬件层
- pathKey: `L/L6. 硬件层`
- concept count: 7
- concepts:
  - CPU · `L/L6. 硬件层/CPU`
  - GPU · `L/L6. 硬件层/GPU`
  - NPU · `L/L6. 硬件层/NPU`
  - Apple silicon unified memory · `L/L6. 硬件层/Apple silicon unified memory`
  - Multi-GPU · `L/L6. 硬件层/Multi-GPU`
  - VRAM / RAM / disk constraints · `L/L6. 硬件层/VRAM / RAM / disk constraints`
  - Network bandwidth · `L/L6. 硬件层/Network bandwidth`

#### L7. 生产运行指标
- pathKey: `L/L7. 生产运行指标`
- concept count: 8
- concepts:
  - Latency · `L/L7. 生产运行指标/Latency`
  - Throughput · `L/L7. 生产运行指标/Throughput`
  - Cost · `L/L7. 生产运行指标/Cost`
  - Error rate · `L/L7. 生产运行指标/Error rate`
  - Availability · `L/L7. 生产运行指标/Availability`
  - Token usage · `L/L7. 生产运行指标/Token usage`
  - GPU utilization · `L/L7. 生产运行指标/GPU utilization`
  - Context pressure · `L/L7. 生产运行指标/Context pressure`

## M. 评测、安全与治理

OpenAI 的 eval 文档把评测分成 datasets、graders、eval runs；agent-evals 又强调 traces、tool calls、handoffs、guardrails 的工作流级评测；安全文档强调 moderation、adversarial testing、human oversight，以及在 agent 场景下避免把不可信输入直接提升到高权限上下文。

- pathKey: `M`
- stage: 05 运行、治理与产品
- modules: 8
- concepts: 58
- crosscut note: 这是全局治理轴：模型、应用与 Agent 的评测、安全和合规边界都在这里收束。

### Domain 关系
- 评测、安全与治理 横跨 LLM 核心机制、模型适配、后训练与对齐、检索、记忆与外部知识、AI 应用工程、Agent 系统、运行时与基础设施、产品、场景与组织。
- 评测不是上线后的附属物，而是训练、优化、路由、工具设计的反馈入口。
- 安全不是单点模块，而是输入、上下文、工具、输出、权限、审计的联合系统。
- Agent 时代的评测对象不只“答案”，还包括“过程”。

### Modules

#### M1. 模型级评测
- pathKey: `M/M1. 模型级评测`
- concept count: 7
- concepts:
  - 语言能力 · `M/M1. 模型级评测/语言能力`
  - 推理能力 · `M/M1. 模型级评测/推理能力`
  - 多模态能力 · `M/M1. 模型级评测/多模态能力`
  - 结构化输出正确率 · `M/M1. 模型级评测/结构化输出正确率`
  - 安全性 · `M/M1. 模型级评测/安全性`
  - 稳定性 · `M/M1. 模型级评测/稳定性`
  - 延迟/成本 · `M/M1. 模型级评测/延迟/成本`

#### M2. 应用级评测
- pathKey: `M/M2. 应用级评测`
- concept count: 6
- concepts:
  - 最终答案正确性 · `M/M2. 应用级评测/最终答案正确性`
  - 引用真实性 · `M/M2. 应用级评测/引用真实性`
  - Schema adherence · `M/M2. 应用级评测/Schema adherence`
  - Tool execution success · `M/M2. 应用级评测/Tool execution success`
  - UX consistency · `M/M2. 应用级评测/UX consistency`
  - Failure recovery · `M/M2. 应用级评测/Failure recovery`

#### M3. Agent 级评测
- pathKey: `M/M3. Agent 级评测`
- concept count: 13
- concepts:
  - Trace schema · `M/M3. Agent 级评测/Trace schema`
  - Grader rubric · `M/M3. Agent 级评测/Grader rubric`
  - Outcome checks · `M/M3. Agent 级评测/Outcome checks`
  - Process checks · `M/M3. Agent 级评测/Process checks`
  - Artifact checks · `M/M3. Agent 级评测/Artifact checks`
  - Trace grading · `M/M3. Agent 级评测/Trace grading`
  - Tool selection correctness · `M/M3. Agent 级评测/Tool selection correctness`
  - Handoff correctness · `M/M3. Agent 级评测/Handoff correctness`
  - Routing quality · `M/M3. Agent 级评测/Routing quality`
  - Policy compliance · `M/M3. Agent 级评测/Policy compliance`
  - Workflow completion rate · `M/M3. Agent 级评测/Workflow completion rate`
  - Approval correctness · `M/M3. Agent 级评测/Approval correctness`
  - Failure taxonomy · `M/M3. Agent 级评测/Failure taxonomy`

#### M4. 在线评测
- pathKey: `M/M4. 在线评测`
- concept count: 7
- concepts:
  - A/B tests · `M/M4. 在线评测/A/B tests`
  - Human feedback · `M/M4. 在线评测/Human feedback`
  - Acceptance rate · `M/M4. 在线评测/Acceptance rate`
  - Task completion · `M/M4. 在线评测/Task completion`
  - Business KPIs · `M/M4. 在线评测/Business KPIs`
  - Canary / regression set · `M/M4. 在线评测/Canary / regression set`
  - Real-user failure mining · `M/M4. 在线评测/Real-user failure mining`

#### M5. 安全控制
- pathKey: `M/M5. 安全控制`
- concept count: 8
- concepts:
  - Moderation · `M/M5. 安全控制/Moderation`
  - Jailbreak defense · `M/M5. 安全控制/Jailbreak defense`
  - Prompt injection defense · `M/M5. 安全控制/Prompt injection defense`
  - Sensitive tool controls · `M/M5. 安全控制/Sensitive tool controls`
  - Least privilege · `M/M5. 安全控制/Least privilege`
  - Sandboxing · `M/M5. 安全控制/Sandboxing`
  - Approval gates · `M/M5. 安全控制/Approval gates`
  - Rate limiting · `M/M5. 安全控制/Rate limiting`

#### M6. Guardrails
- pathKey: `M/M6. Guardrails`
- concept count: 6
- concepts:
  - Input guardrails · `M/M6. Guardrails/Input guardrails`
  - Output guardrails · `M/M6. Guardrails/Output guardrails`
  - Tool guardrails · `M/M6. Guardrails/Tool guardrails`
  - Policy guardrails · `M/M6. Guardrails/Policy guardrails`
  - Schema validation · `M/M6. Guardrails/Schema validation`
  - Redaction / filtering · `M/M6. Guardrails/Redaction / filtering`

#### M7. 隐私与合规
- pathKey: `M/M7. 隐私与合规`
- concept count: 6
- concepts:
  - PII handling · `M/M7. 隐私与合规/PII handling`
  - Data retention · `M/M7. 隐私与合规/Data retention`
  - Access control · `M/M7. 隐私与合规/Access control`
  - Audit logs · `M/M7. 隐私与合规/Audit logs`
  - Regulatory compliance · `M/M7. 隐私与合规/Regulatory compliance`
  - Governance policies · `M/M7. 隐私与合规/Governance policies`

#### M8. 对抗测试与审计
- pathKey: `M/M8. 对抗测试与审计`
- concept count: 5
- concepts:
  - Red teaming · `M/M8. 对抗测试与审计/Red teaming`
  - Attack simulation · `M/M8. 对抗测试与审计/Attack simulation`
  - Safety regression tests · `M/M8. 对抗测试与审计/Safety regression tests`
  - Incident review · `M/M8. 对抗测试与审计/Incident review`
  - Postmortem · `M/M8. 对抗测试与审计/Postmortem`

## N. 产品、场景与组织

OpenAI 的 building agents、model optimization、evaluation best practices 都指向同一个事实：是否需要 RAG、是否需要 fine-tuning、是否需要 Agent、多大模型、多复杂的编排，都应该由任务、成本、风险和评测闭环来决定。

- pathKey: `N`
- stage: 05 运行、治理与产品
- modules: 6
- concepts: 44
- crosscut note: 这是全局产品闭环：场景、自动化等级、体验设计与团队流程最终在这里落地。

### Domain 关系
- 产品、场景与组织 是整张图的选择器：决定下方哪些层需要被激活。
- “是否需要 Agent”是 产品、场景与组织 层决策，不是 Agent 系统 层默认答案。
- “是否需要微调或 RAG”也是 产品、场景与组织 层的产品/成本/风险权衡。
- 没有 产品、场景与组织 层，下面所有技术节点都会变成无目标堆叠。

### Modules

#### N1. 场景类型
- pathKey: `N/N1. 场景类型`
- concept count: 9
- concepts:
  - 问答 / 检索 · `N/N1. 场景类型/问答 / 检索`
  - 助手 / Copilot · `N/N1. 场景类型/助手 / Copilot`
  - 编码 · `N/N1. 场景类型/编码`
  - 数据分析 · `N/N1. 场景类型/数据分析`
  - 文档处理 · `N/N1. 场景类型/文档处理`
  - 工作流自动化 · `N/N1. 场景类型/工作流自动化`
  - 研究 · `N/N1. 场景类型/研究`
  - 多模态交互 · `N/N1. 场景类型/多模态交互`
  - 机器人 / 具身任务 · `N/N1. 场景类型/机器人 / 具身任务`

#### N2. 自动化等级
- pathKey: `N/N2. 自动化等级`
- concept count: 5
- concepts:
  - Suggestion only · `N/N2. 自动化等级/Suggestion only`
  - Draft and review · `N/N2. 自动化等级/Draft and review`
  - Execute with approval · `N/N2. 自动化等级/Execute with approval`
  - Narrow autonomous execution · `N/N2. 自动化等级/Narrow autonomous execution`
  - Human-supervised autonomy · `N/N2. 自动化等级/Human-supervised autonomy`

#### N3. 决策变量
- pathKey: `N/N3. 决策变量`
- concept count: 8
- concepts:
  - 质量要求 · `N/N3. 决策变量/质量要求`
  - 延迟要求 · `N/N3. 决策变量/延迟要求`
  - 成本预算 · `N/N3. 决策变量/成本预算`
  - 错误代价 · `N/N3. 决策变量/错误代价`
  - 安全风险 · `N/N3. 决策变量/安全风险`
  - 是否需要最新知识 · `N/N3. 决策变量/是否需要最新知识`
  - 是否需要外部动作 · `N/N3. 决策变量/是否需要外部动作`
  - 是否需要可审计流程 · `N/N3. 决策变量/是否需要可审计流程`

#### N4. 体验设计
- pathKey: `N/N4. 体验设计`
- concept count: 7
- concepts:
  - 信任 · `N/N4. 体验设计/信任`
  - 透明度 · `N/N4. 体验设计/透明度`
  - 引用 · `N/N4. 体验设计/引用`
  - 控制权 · `N/N4. 体验设计/控制权`
  - 可撤销 · `N/N4. 体验设计/可撤销`
  - 纠错入口 · `N/N4. 体验设计/纠错入口`
  - 长任务可见性 · `N/N4. 体验设计/长任务可见性`

#### N5. 团队与流程
- pathKey: `N/N5. 团队与流程`
- concept count: 7
- concepts:
  - 产品经理 · `N/N5. 团队与流程/产品经理`
  - 应用工程师 · `N/N5. 团队与流程/应用工程师`
  - 模型工程师 · `N/N5. 团队与流程/模型工程师`
  - 数据工程师 · `N/N5. 团队与流程/数据工程师`
  - Eval / QA · `N/N5. 团队与流程/Eval / QA`
  - 安全 / Policy · `N/N5. 团队与流程/安全 / Policy`
  - 运维 / 平台 · `N/N5. 团队与流程/运维 / 平台`

#### N6. 持续改进闭环
- pathKey: `N/N6. 持续改进闭环`
- concept count: 8
- concepts:
  - 用户问题 / 场景 · `N/N6. 持续改进闭环/用户问题 / 场景`
  - 日志与 traces · `N/N6. 持续改进闭环/日志与 traces`
  - 数据沉淀 · `N/N6. 持续改进闭环/数据沉淀`
  - 新 evals · `N/N6. 持续改进闭环/新 evals`
  - Prompt / tool / routing 改进 · `N/N6. 持续改进闭环/Prompt / tool / routing 改进`
  - Fine-tuning / distillation · `N/N6. 持续改进闭环/Fine-tuning / distillation`
  - 部署新版本 · `N/N6. 持续改进闭环/部署新版本`
  - 再评测 · `N/N6. 持续改进闭环/再评测`

## 结构之间的关系总表

### 1. 前置关系
- 基础理论与计算机底座 → 机器学习 → 深度学习与基础模型 → LLM 核心机制
  - references: 基础理论与计算机底座 (`A`) / 机器学习 (`C`) / 深度学习与基础模型 (`D`) / LLM 核心机制 (`G`)
- 基础理论与计算机底座 → AI 应用工程 → Agent 系统 → 产品、场景与组织
  - references: 基础理论与计算机底座 (`A`) / AI 应用工程 (`J`) / Agent 系统 (`K`) / 产品、场景与组织 (`N`)
- 经典 AI → Agent 系统
  - references: 经典 AI (`B`) / Agent 系统 (`K`)
- 经典 AI → 决策与强化学习 / 机器人与具身智能
  - references: 经典 AI (`B`) / 决策与强化学习 (`E/E6. 决策与强化学习`) / 机器人与具身智能 (`E/E7. 机器人与具身智能`)
- 机器学习 → 模型适配、后训练与对齐 / 评测、安全与治理
  - references: 机器学习 (`C`) / 模型适配、后训练与对齐 (`H`) / 评测、安全与治理 (`M`)
- 深度学习与基础模型 → 模态、任务域与智能形态 / LLM 核心机制 / 模型适配、后训练与对齐 / 运行时与基础设施
  - references: 深度学习与基础模型 (`D`) / 模态、任务域与智能形态 (`E`) / LLM 核心机制 (`G`) / 模型适配、后训练与对齐 (`H`) / 运行时与基础设施 (`L`)

### 2. 构成关系
- LLM 核心机制 = LLM 核心模型层
  - references: LLM 核心机制 (`G`)
- 检索、记忆与外部知识 = 外部知识层
  - references: 检索、记忆与外部知识 (`I`)
- AI 应用工程 = AI 应用工程层
  - references: AI 应用工程 (`J`)
- Agent 系统 = 模型 + 工具 + 状态/记忆 + 编排 + 护栏
  - references: Agent 系统 (`K`)
- RAG = LLM 核心机制 + 检索、记忆与外部知识
  - references: LLM 核心机制 (`G`) / 检索、记忆与外部知识 (`I`)
- Agent = LLM 核心机制 + AI 应用工程 + 检索、记忆与外部知识 + 评测、安全与治理 + 运行时与基础设施
  - references: LLM 核心机制 (`G`) / AI 应用工程 (`J`) / 检索、记忆与外部知识 (`I`) / 评测、安全与治理 (`M`) / 运行时与基础设施 (`L`)

### 3. 互补关系
- 模型适配、后训练与对齐 与 检索、记忆与外部知识 互补
  - note: 微调解决“行为与风格问题”
  - note: RAG 解决“知识更新与外部信息问题”
  - references: 模型适配、后训练与对齐 (`H`) / 检索、记忆与外部知识 (`I`)
- AI 应用工程 与 Agent 系统 互补
  - note: 应用工程负责稳定软件能力
  - note: Agent 系统负责多步自治与工具编排
  - references: AI 应用工程 (`J`) / Agent 系统 (`K`)
- 经典 AI 与 LLM 核心机制/Agent 系统 互补
  - note: 经典规划/搜索/推理给现代 Agent 提供结构化骨架
  - references: 经典 AI (`B`) / LLM 核心机制 (`G`) / Agent 系统 (`K`)

### 4. 替代 / 取舍关系
- Prompting ↔ Fine-tuning
  - note: 前者轻量、快
  - note: 后者更稳定、更深度
- Long context ↔ Retrieval
  - note: 长上下文可减少检索步骤
  - note: 检索可减少上下文成本
- 单 Agent ↔ 多 Agent
  - note: 单 Agent 简单
  - note: 多 Agent 适合复杂分工
- 大模型 ↔ 小模型 + 蒸馏/微调
  - note: 大模型强
  - note: 小模型更便宜、更易部署

### 5. 反馈闭环关系
- 用户场景 → 产品、场景与组织
  - references: 产品、场景与组织 (`N`)
- 产品、场景与组织 → AI 应用工程 / Agent 系统 / 模型适配、后训练与对齐 / 检索、记忆与外部知识 / 运行时与基础设施 选型
  - references: 产品、场景与组织 (`N`) / AI 应用工程 (`J`) / Agent 系统 (`K`) / 模型适配、后训练与对齐 (`H`) / 检索、记忆与外部知识 (`I`) / 运行时与基础设施 (`L`)
- 运行日志 / traces → 数据层（横切层） / 评测、安全与治理
  - references: 数据层（横切层） (`F`) / 评测、安全与治理 (`M`)
- 评测、安全与治理 → 模型适配、后训练与对齐 / 检索、记忆与外部知识 / AI 应用工程 / Agent 系统 调整
  - references: 评测、安全与治理 (`M`) / 模型适配、后训练与对齐 (`H`) / 检索、记忆与外部知识 (`I`) / AI 应用工程 (`J`) / Agent 系统 (`K`)
- 调整后的系统再回到 运行时与基础设施 / 产品、场景与组织
  - references: 运行时与基础设施 (`L`) / 产品、场景与组织 (`N`)
- 形成：产品需求 → 实现 → 评测 → 改进 → 重部署 闭环

### 6. 数据流关系
- 预训练数据 → 深度学习与基础模型/LLM 核心机制
  - references: 深度学习与基础模型 (`D`) / LLM 核心机制 (`G`)
- SFT 数据 → 模型适配、后训练与对齐
  - references: 模型适配、后训练与对齐 (`H`)
- 偏好 / 奖励数据 → 模型适配、后训练与对齐
  - references: 模型适配、后训练与对齐 (`H`)
- 知识库数据 → 检索、记忆与外部知识
  - references: 检索、记忆与外部知识 (`I`)
- Tool traces → Agent 系统/评测、安全与治理
  - references: Agent 系统 (`K`) / 评测、安全与治理 (`M`)
- Eval datasets → 评测、安全与治理
  - references: 评测、安全与治理 (`M`)
- 用户交互日志 → 数据层（横切层）/产品、场景与组织/评测、安全与治理
  - references: 数据层（横切层） (`F`) / 产品、场景与组织 (`N`) / 评测、安全与治理 (`M`)

### 7. 记忆关系
- 参数记忆 = 模型权重中的知识
- 非参数记忆 = 检索库 / 向量库 / 文档库
- 会话记忆 = 当前对话状态
- 长期记忆 = 从历史中提炼出的稳定用户/任务信息
- Agent 记忆 = 会话记忆 + 任务记忆 + 外部长期记忆

### 8. 协议与接口关系
- Function calling：应用内部定义工具接口
- MCP：跨系统标准化连接 tools / resources / prompts
- OpenAI-compatible API：运行时兼容层
- Schema / JSON：结构化输出与工具输入输出的约束层

### 9. 安全边界关系
- 输入边界：输入 guardrails / moderation
- 上下文边界：不要把不可信内容提升到高权限系统上下文
- 工具边界：least privilege / approval / sandbox
- 输出边界：schema / filtering / redaction
- 审计边界：trace / log / approval records

### 10. 最核心的几条“总关系”
- AI ⊃ 机器学习 ⊃ 深度学习 ⊃ 基础模型 ⊃ LLM / 多模态模型
- Agent 不是模型类别，而是系统类别
- RAG 不是训练方法，而是知识增强方法
- MCP 不是 Agent 框架，而是外部能力连接协议
- Eval / Safety / Data 不是附属模块，而是横穿全图的公共轴

## Detail 存储
- storage: sharded
- indexFile: `data/detail-index.json`
- shardDir: `data/details`
- generator: `scripts/build-detail-workspace.mjs`
