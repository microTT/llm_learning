# AI 知识图谱（full detail Markdown 导出）

> 该文件由 `data/graph.json`、`data/detail-index.json` 和 `data/details/*.json` 自动导出，请不要手动编辑。
> graph source: `data/graph.json`
> detail index: `data/detail-index.json`
> generatedAt: 2026-04-21

## 元信息
- graph version: 4
- graph updatedAt: 2026-04-20
- detail index updatedAt: 2026-04-20
- domains: 14
- modules: 100
- concepts: 775
- detail nodes: 889
- shard count: 138

## 阶段总览
### 01 基础底座
先把经典 AI、机器学习、深度学习和底层能力串成一条主线。
- stageId: `foundation`
- color: `#96b6df`
- domains: A. 基础理论与计算机底座 / B. 经典 AI / C. 机器学习 / D. 深度学习与基础模型

### 02 任务域与数据
然后再把语言、视觉、语音、视频、多模态以及数据横切层挂上去。
- stageId: `modalities`
- color: `#88aad4`
- domains: E. 模态、任务域与智能形态 / F. 数据层（横切层）

### 03 大模型系统
这一段把 LLM 本体、后训练、对齐、检索和外部知识连接起来。
- stageId: `llm-system`
- color: `#799dc8`
- domains: G. LLM 核心机制 / H. 模型适配、后训练与对齐 / I. 检索、记忆与外部知识

### 04 应用与 Agent
应用工程负责稳定性，Agent 系统负责多步自治、状态和工具编排。
- stageId: `application`
- color: `#6d90ba`
- domains: J. AI 应用工程 / K. Agent 系统

### 05 运行、治理与产品
最后把运行时、基础设施、评测、安全和产品组织闭环补完整。
- stageId: `production`
- color: `#5f82ac`
- domains: L. 运行时与基础设施 / M. 评测、安全与治理 / N. 产品、场景与组织


## 全量节点详情

## A. 基础理论与计算机底座

- pathKey: `A`
- node type: `domain`
- stage: 01 基础底座
- graph summary: 这一层是整张图的公共地基；HF 的 LLM 课程、Google 的 ML 基础课程、PyTorch 基础教程都把“编程、数据、建模、优化、训练流程”放在前置位置。
- relation notes:
  - 基础理论与计算机底座 是 机器学习、深度学习与基础模型、AI 应用工程、Agent 系统、运行时与基础设施、评测、安全与治理 的前置层。
  - 数学基础主要流向：机器学习、深度学习、优化、评测。
  - 计算机基础主要流向：应用工程、Agent 编排、部署与基础设施。
  - 实验方法主要流向：训练、评测、调优、产品迭代。
- detail source: `data/details/domain-A.json`
- status: completed
- definition: “基础理论与计算机底座”是 AI 学习图谱中承接后续所有模型、系统与应用主题的底层 domain。它关注三类能力的统一：用数学语言描述问题与目标，用计算机系统与软件工程手段实现和运行方案，用实验与研究方法验证结论是否可靠。学这个 domain 的目的，不是把公式、代码和实验分别记住，而是形成一条可闭环的工作路径：能把问题形式化、能把方案实现出来、能用可重复的方法判断方案是否真的有效。
- importance: 这个 domain 决定后续学习是否稳固。缺少这里的底座时，常见现象是：能调用框架却不理解损失函数和优化在做什么；能训练模型却定位不了数值、并发、数据或工程问题；能复现论文表面结果却无法判断改动是否真实带来收益。打好这部分基础后，学习者会更容易建立统一视角：把模型看成可计算对象，把实验看成受约束的证据生成过程，把工程系统看成让理论在现实硬件与软件约束下稳定运行的载体。
- minimum demo: 完成一个最小闭环练习：自己生成一份小型二维分类数据，用 Python 实现数据处理、训练/验证划分、一个简单线性模型或小型 MLP、损失与指标计算、训练日志记录，并固定随机种子做两组对照实验（例如改学习率或改特征）。要求最后能回答四个问题：模型为什么会更新、结果为什么会变化、变化是否可信、失败时该从数学设定、代码实现还是实验设计哪一层排查。
- hardware budget: 入门阶段不需要专门 GPU。1 台普通笔记本即可完成本 domain 的大多数最小实验：CPU、8GB~16GB 内存、可运行 Python 与常见科学计算库即可。只有当实验扩大到较深网络、大规模数据或并行训练时，才需要进一步考虑独立显卡、更高内存和更完整的工程环境。
- examples:
  - 用矩阵与梯度描述一个线性分类器的训练过程
  - 分析一次 loss 下降但验证集指标不升的实验记录
  - 定位由浮点精度、随机种子或数据切分导致的结果波动
  - 把一个“模型没效果”的问题拆成数据、实现、优化和评测四层排查
  - 比较同步/异步处理方式对吞吐、延迟和正确性的影响
- pitfalls:
  - 把会调用框架当成理解原理，导致无法解释训练行为
  - 只看单次跑分，不看方差、对照和可重复性
  - 忽略数值稳定性与精度问题，把实现误差误判为算法改进
  - 只追求更复杂模型，忽视数据表示、基线和实验设计
  - 把工程问题和理论问题混在一起，排查时没有分层
  - 没有版本、日志和固定随机性，导致结果不可复核
- core metrics:
  - 是否能把问题形式化为输入、输出、目标函数与约束
  - 是否能独立实现并解释一个最小训练与评测闭环
  - 实验结果的可重复性
  - 对照实验与消融实验的解释力
  - 定位错误时的分层排查效率
  - 实现正确性、运行稳定性与资源开销
- toolchain:
  - Python
  - NumPy
  - Jupyter Notebook
  - Git
  - pytest
  - 日志与可视化工具
  - 基础命令行环境
- failure signs:
  - 看到公式、代码和实验结果之间无法建立对应关系
  - 训练结果变化无法解释，只能反复试参数
  - 同一实验多次运行结论不稳定，却不知道噪声来源
  - 出现 NaN、梯度爆炸、死锁、数据泄漏等问题时无从定位
  - 无法设计可信 baseline，也说不清改动是否真正有效
  - 读完论文或教程后只能复述结论，不能做最小复现
- next:
  - A/A1. 数学基础
  - A/A2. 计算机基础
  - A/A3. 实验与研究方法

### A1. 数学基础

- pathKey: `A/A1. 数学基础`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-A.json`
- status: draft
- definition: 数学基础为后续建模、训练、评测和优化提供统一语言，包括线性代数、概率统计、微积分与优化、信息论和数值计算。
- importance: 没有这层，很多模型行为只能靠经验解释，难以真正理解为何有效或为何失效。
- minimum demo: 把一个最小线性分类或神经网络训练过程中的向量、梯度、损失和统计指标逐层对应起来。
- prerequisites:
  - A
- core metrics:
  - 概念可解释性
  - 公式到实现的映射能力
- next:
  - A/A1. 数学基础/线性代数
  - A/A1. 数学基础/概率统计
  - A/A1. 数学基础/微积分与优化
  - A/A1. 数学基础/信息论
  - A/A1. 数学基础/数值计算

#### 线性代数

- pathKey: `A/A1. 数学基础/线性代数`
- node type: `concept-group`
- detail source: `data/details/domain-A.json`
- status: draft
- definition: 线性代数提供向量、矩阵和线性变换视角，是理解 embedding、attention 和参数更新的底层语言。
- importance: 几乎所有现代模型都在向量空间中工作，线性代数是最基础的表达工具。
- minimum demo: 把一次前向或 attention 计算拆成矩阵乘法与相似度操作来看。
- prerequisites:
  - A/A1. 数学基础
- core metrics:
  - 向量空间直觉
  - 矩阵运算熟悉度
- next:
  - A/A1. 数学基础/线性代数/向量、矩阵、张量
  - A/A1. 数学基础/线性代数/线性变换
  - A/A1. 数学基础/线性代数/内积、范数、相似度
  - A/A1. 数学基础/线性代数/分解、特征值/特征向量

##### 向量、矩阵、张量

- pathKey: `A/A1. 数学基础/线性代数/向量、矩阵、张量`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-rtnu4j-1.json`
- status: draft
- definition: 向量是按顺序组织的一组数，矩阵是二维数表与线性映射的常用表示，张量是在工程语义下带有 shape 与轴含义的多维数组。在线性代数与深度学习中，它们是参数、激活、梯度、embedding 与 attention 中间结果的基础载体；理解维度、shape、转置、广播、乘法与存储布局，比单独记公式更关键。
- importance: 几乎所有 AI 模型实现都围绕向量、矩阵、张量展开：embedding 是向量，线性层权重是矩阵，batch×seq×hidden 的激活是张量。很多工程错误并不是公式错，而是 shape、轴顺序、dtype、device 或广播规则错；因此这是从数学进入模型实现的第一层底座。
- minimum demo: 用 NumPy 或 PyTorch 创建一个向量 x∈R^4、一个矩阵 W∈R^{3×4}、一个张量 T∈R^{2×3×4}，依次验证点积、矩阵乘、批量矩阵乘、转置、reshape 与广播，并在每一步打印 shape、dtype、device 和元素数。再故意交换两个轴或写错一个 batch 维，观察代码是否能运行但语义已经错误。
- hardware budget: CPU 即可；普通笔记本 8GB 内存足够完成 1e3~1e4 级元素的最小实验。只有在想直观看到 GPU device、混合精度或大批量张量乘法行为时，才需要入门级 GPU；不需要训练模型。
- examples:
  - token embedding 是向量
  - 线性层权重 W∈R^{d_out×d_in} 是矩阵
  - 一批句向量组成 batch×hidden 的矩阵
  - 图像可表示为 H×W×C 张量
  - attention score 常是 batch×head×seq×seq 的张量
- pitfalls:
  - 把 shape 只当数字，不看每个轴的语义
  - 行向量、列向量与一维数组混用
  - 把 reshape、view、transpose 当成等价操作
  - 忽略广播规则导致静默错误
  - 把深度学习里的 tensor 与严格数学张量完全等同
- core metrics:
  - shape/axis 检查通过率
  - 元素数与内存占用
  - 数值范围（min/max/mean/std）
  - 稀疏度
  - 批量乘法 FLOPs 估算
- toolchain:
  - NumPy
  - PyTorch
  - einops
  - Jupyter
  - Matplotlib
- failure signs:
  - matmul shape mismatch 频繁出现
  - 代码能跑但结果因广播或轴错位而明显异常
  - reshape 或 transpose 后指标突然恶化
  - CPU/GPU 或 dtype 不一致导致报错或精度异常
  - 张量大小增长失控并很快 OOM
- next:
  - A/A1. 数学基础/线性代数/线性变换
  - A/A1. 数学基础/线性代数/内积、范数、相似度
  - A/A1. 数学基础/线性代数/分解、特征值/特征向量

##### 线性变换

- pathKey: `A/A1. 数学基础/线性代数/线性变换`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-rtnu4j-1.json`
- status: draft
- definition: 线性变换是保持向量加法和数乘的映射，即 T(ax+by)=aT(x)+bT(y)。在线性代数里它可在选定基下写成矩阵；在线性模型、MLP 的线性层、投影、旋转、缩放、卷积展开、注意力中的 Q/K/V 投影里，都能看到它的影子。
- importance: 理解线性变换，才能把“参数如何作用于输入”从纯记忆矩阵乘法，提升到 rank、可逆性、零空间、列空间、基变换与信息保留/丢失的层面。这直接影响对降维、特征提取、可分性、表达能力和数值稳定性的理解。
- minimum demo: 取一个 2×2 矩阵 A，对二维平面上的一组网格点做变换，画出变换前后的点集；随后验证 A(x+y)=Ax+Ay 与 A(cx)=cAx。再加上偏置 b 形成 y=Ax+b，观察它已是仿射变换而非纯线性变换；最后比较满秩矩阵与秩亏矩阵对面积、可逆性和信息压缩的影响。
- hardware budget: CPU 即可；2D/3D 可视化和小矩阵实验在普通笔记本上就能完成。最小实验只需几十到几百个点，不依赖 GPU。
- examples:
  - 线性层 y=Wx
  - 把 embedding 投影到 Q/K/V 空间
  - 2D 旋转、缩放、剪切都可写成矩阵
  - PCA 中把数据投影到低维子空间
  - 卷积在局部展开后可视为矩阵乘
- pitfalls:
  - 把 y=Wx+b 误当纯线性变换
  - 只会按公式乘，不理解列空间、零空间和秩
  - 忽略矩阵表示依赖所选基
  - 把逐元素非线性操作也叫线性
  - 默认可逆，没先检查秩或行列式
- prerequisites:
  - A/A1. 数学基础/线性代数/向量、矩阵、张量
- core metrics:
  - 线性性残差 ||T(ax+by)-(aT(x)+bT(y))||
  - rank / nullity
  - determinant 与是否可逆
  - condition number
  - 输出维度变化
- toolchain:
  - NumPy
  - PyTorch
  - SciPy
  - Matplotlib
  - Jupyter
- failure signs:
  - T(x+y) 与 T(x)+T(y) 明显不一致
  - 矩阵本应可逆却经常求逆失败
  - rank 意外下降导致信息塌缩
  - 小输入扰动引起过大输出变化
  - 同一变换在不同实现下 shape 或结果不一致
- next:
  - A/A1. 数学基础/线性代数/内积、范数、相似度
  - A/A1. 数学基础/线性代数/分解、特征值/特征向量
  - A/A1. 数学基础/微积分与优化/导数、偏导、链式法则

##### 内积、范数、相似度

- pathKey: `A/A1. 数学基础/线性代数/内积、范数、相似度`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-rtnu4j-1.json`
- status: draft
- definition: 内积为两个向量定义“对齐程度”，范数刻画向量大小，距离与相似度通常由它们派生；例如 L2 范数由内积诱导，cosine similarity 是归一化后的点积。它们决定了检索、聚类、对比学习、正则化、梯度尺度与近邻搜索里“近”和“远”的含义。
- importance: 在 AI 系统里，很多关键判断都依赖度量：embedding 检索用 cosine 或 dot product，正则化关注参数范数，优化过程依赖梯度范数，注意力用缩放点积。不会区分内积、范数、距离和相似度，就容易把“数值大”误判为“语义近”。
- minimum demo: 准备一小批二维或高维向量，分别计算 dot product、L1/L2 范数、欧氏距离与 cosine similarity。先在未归一化向量上做 top-k 检索，再在 L2 归一化后重复一次，对比最近邻是否变化；再加入一个模长很大但方向接近的异常向量，观察 dot、L2 与 cosine 的差异。
- hardware budget: CPU 即可；普通笔记本就能完成上万向量以内的最小实验。需要注意 pairwise similarity 是 O(n^2) 的，样本数上去后主要受内存而不是算力限制。
- examples:
  - 语义检索常用 cosine similarity
  - L2 norm 用于 weight decay 或梯度裁剪
  - 缩放点积注意力使用 QK^T / sqrt(d)
  - 对 embedding 做 normalize 后再建索引
  - 对比学习常比较样本间距离或相似度
- pitfalls:
  - 把大 dot product 直接当成高语义相似度
  - 在零向量或近零向量上直接算 cosine
  - 把 L2 与 L2^2、距离与相似度混用
  - 比较未对齐或不同尺度空间中的向量
  - 忽略高维距离集中现象
- prerequisites:
  - A/A1. 数学基础/线性代数/向量、矩阵、张量
- core metrics:
  - 范数分布
  - cosine similarity 分布
  - 归一化前后 top-k 重合率
  - 零向量占比
  - pairwise 计算的时间/内存开销
- toolchain:
  - NumPy
  - PyTorch
  - scikit-learn
  - Faiss
  - Jupyter
- failure signs:
  - 相似度几乎完全被向量模长主导
  - top-k 检索对是否归一化极度敏感且无法解释
  - 出现大量零向量或近零向量
  - 相似度分布高度挤压，样本彼此都很像或都不像
  - pairwise similarity 一算就 OOM 或极慢
- next:
  - A/A1. 数学基础/线性代数/分解、特征值/特征向量
  - A/A1. 数学基础/概率统计/期望、方差、协方差
  - A/A1. 数学基础/微积分与优化/学习率、收敛、稳定性

##### 分解、特征值/特征向量

- pathKey: `A/A1. 数学基础/线性代数/分解、特征值/特征向量`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-rtnu4j-1.json`
- status: draft
- definition: 矩阵分解把复杂矩阵写成更容易分析或计算的因子，如 LU、QR、SVD、特征值分解。特征值/特征向量描述线性变换在某些特殊方向上的缩放与旋转行为；对称矩阵的特征向量可取为正交基，这使降维、谱分析、稳定性分析和低秩近似更可操作。
- importance: 很多看似复杂的问题，先分解再求解会更清楚：SVD 支撑低秩压缩与主方向分析，特征分解支撑 PCA 与谱方法，QR/LU 支撑线性方程求解。对 AI 学习者来说，这一组概念是把线性代数真正转化为模型分析工具的关键台阶。
- minimum demo: 构造一个对称矩阵 C，对其做特征分解并验证 C v≈λv；再构造一个长方矩阵 A，对其做 SVD，用前 k 个奇异值做低秩重构，记录 k=1,5,10 等取值时的重构误差与存储量变化。最后比较一个条件良好的矩阵与一个近奇异矩阵，观察分解结果对扰动的敏感程度。
- hardware budget: CPU 即可；几十到几百维矩阵就能完成最小实验，普通笔记本 16GB 内存足够。不要把大稠密矩阵的 full SVD 当作入门实验，因为它很快会受 O(n^3) 时间和 O(n^2) 内存限制。
- examples:
  - PCA 用协方差矩阵的特征分解
  - SVD 用于低秩压缩和主方向提取
  - QR 分解常用于最小二乘求解
  - 幂迭代可近似求主特征向量
  - 谱方法会利用矩阵的特征结构分析系统
- pitfalls:
  - 把 SVD 与特征值分解混为一谈
  - 默认任何矩阵都能正交对角化
  - 忽略特征向量符号和尺度的不唯一性
  - 只盯最大特征值，不看谱间隙与条件数
  - 对大矩阵直接做 full 分解而不考虑近似或稀疏方法
- prerequisites:
  - A/A1. 数学基础/线性代数/向量、矩阵、张量
  - A/A1. 数学基础/线性代数/线性变换
  - A/A1. 数学基础/线性代数/内积、范数、相似度
- core metrics:
  - 重构误差 ||A-A_hat||
  - 特征残差 ||Av-λv||
  - 正交性误差
  - 奇异值衰减或解释方差
  - condition number
- toolchain:
  - NumPy.linalg
  - SciPy.linalg
  - SciPy.sparse.linalg
  - PyTorch.linalg
  - scikit-learn
- failure signs:
  - A_hat 与 A 的重构误差异常大
  - 得到复数特征值却误判为实现错误，实际矩阵假设不满足
  - 微小扰动就让特征向量方向大幅变化
  - full decomposition 耗时过长或内存爆炸
  - 不同库或精度下 rank、主方向和谱差异过大
- next:
  - A/A1. 数学基础/数值计算/数值稳定性
  - A/A1. 数学基础/数值计算/近似计算
  - A/A1. 数学基础/概率统计/期望、方差、协方差

#### 概率统计

- pathKey: `A/A1. 数学基础/概率统计`
- node type: `concept-group`
- detail source: `data/details/domain-A.json`
- status: draft
- definition: 概率统计为 AI 提供处理不确定性和样本噪声的语言：它既描述数据从何而来，也描述我们对参数、预测和评测结论有多确定。学这部分的重点不是会背分布名称，而是能把随机性、抽样误差、估计偏差和校准问题放到同一视角里理解。
- importance: 没有概率视角，很多现象会被误判成“模型不稳定”或“实验波动太大”。实际上，数据分布漂移、样本方差、类别不平衡和置信度失真，往往都要靠概率统计来解释。
- minimum demo: 固定同一训练配置，换多个随机种子重复实验，比较均值、方差、置信区间和校准表现，再判断两个方案差异是否真的值得相信。
- prerequisites:
  - A/A1. 数学基础
- core metrics:
  - 随机性理解
  - 统计判读能力
- next:
  - A/A1. 数学基础/概率统计/随机变量、分布、采样
  - A/A1. 数学基础/概率统计/期望、方差、协方差
  - A/A1. 数学基础/概率统计/条件概率、贝叶斯
  - A/A1. 数学基础/概率统计/估计、校准、置信

##### 随机变量、分布、采样

- pathKey: `A/A1. 数学基础/概率统计/随机变量、分布、采样`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-tlt9p1-1.json`
- status: complete
- definition: 随机变量把不确定结果映射为可计算的数值；分布描述这些取值出现的概率规律；采样是在已知或假设分布下生成样本，用有限观测近似总体。离散分布、连续分布、经验分布、独立同分布、重采样与训练/验证抽样，是机器学习里最常见的工作语境。
- importance: 很多 AI 问题都在处理“不确定性如何表示”和“有限样本如何代表总体”。数据集切分、负样本构造、batch 采样、生成式模型出样、蒙特卡洛估计、A/B 实验抽样，本质都依赖随机变量、分布和采样的直觉。没有这层基础，容易把一次观测当作规律，把采样偏差当作模型能力。
- minimum demo: 用 Python 生成一个已知分布的数据集，例如二项分布或高斯分布。分别画出真实分布与不同样本量下的经验直方图，比较样本均值、样本方差随样本数增加的收敛情况。再实现一次训练集/验证集随机切分与分层抽样，对比类别比例是否稳定。
- hardware budget: CPU 即可。1 台普通笔记本、NumPy/Pandas/Matplotlib 即可完成；数据量在万级以内就能看清经验分布与采样波动。
- examples:
  - 用 softmax 输出形成离散分布，再按温度采样生成下一个 token。
  - 在分类任务中做分层抽样，保证训练集和验证集的类别比例接近总体。
  - 用 bootstrap 重采样估计指标波动范围。
  - 在推荐系统中按曝光分布采样负例，而不是均匀随机负采样。
- pitfalls:
  - 把样本频率当成总体真值，忽略小样本高波动。
  - 只做随机切分，不检查类别、时间或用户层面的分布漂移。
  - 默认样本独立同分布，但实际数据存在时间相关、用户相关或重复样本。
  - 把“采样结果差”误判为“模型差”，没有固定随机种子或重复实验。
  - 只关注均值，不看尾部、偏态和长尾样本的覆盖。
- prerequisites:
  - A/A1. 数学基础/线性代数/向量、矩阵、张量
- core metrics:
  - 样本量
  - 经验分布与目标分布偏差
  - 类别占比/分层比例
  - 采样方差
  - 有效样本数
  - 重复实验结果波动
- toolchain:
  - Python
  - NumPy
  - SciPy
  - Pandas
  - Matplotlib
  - Jupyter Notebook
- failure signs:
  - 不同随机种子下结果波动很大。
  - 训练集和验证集的类别比例或特征分布明显不一致。
  - 增大样本量后统计量仍不稳定，提示采样或数据流程有问题。
  - 线下分布与线上请求分布不一致，导致上线后性能骤降。
- next:
  - A/A1. 数学基础/概率统计/期望、方差、协方差
  - A/A1. 数学基础/概率统计/条件概率、贝叶斯
  - A/A3. 实验与研究方法/对照实验

##### 期望、方差、协方差

- pathKey: `A/A1. 数学基础/概率统计/期望、方差、协方差`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-tlt9p1-1.json`
- status: complete
- definition: 期望描述随机变量的平均行为，是长期平均或加权平均的抽象；方差描述围绕期望的波动强弱；协方差描述两个变量如何共同变化，正值表示同向变化，负值表示反向变化，接近零表示线性共变弱。它们共同构成“位置—波动—相关”的基本统计语言。
- importance: 训练损失的期望、梯度估计的方差、特征之间的协方差、误差项是否相关，直接影响模型训练是否稳定、估计是否高效、特征工程是否冗余。在深度学习里，batch 噪声、初始化尺度、归一化和优化器效果，背后都与方差控制有关。
- minimum demo: 构造两组随机变量：一组独立，一组线性相关。计算它们的样本均值、样本方差和协方差，并画散点图。再用 mini-batch SGD 训练一个简单线性回归，比较小 batch 与大 batch 下梯度估计波动，观察损失曲线的平滑程度差异。
- hardware budget: CPU 即可。普通笔记本足够；线性回归或小型神经网络在几万条样本上即可演示梯度方差与相关性的影响。
- examples:
  - 交叉熵训练时，优化目标是样本损失的经验期望。
  - batch size 过小会让梯度方差更大，训练曲线抖动更明显。
  - 特征高度协方差可能意味着信息冗余或多重共线性。
  - PCA 本质上在分析协方差结构。
- pitfalls:
  - 把协方差接近 0 误解为完全独立。
  - 只看平均性能，不看方差，忽略系统稳定性。
  - 混淆总体方差与样本方差，不理解自由度修正。
  - 把尺度不同的变量直接比较协方差，导致解释失真。
  - 在存在异常值时仍用均值和方差做唯一描述，忽略稳健统计量。
- prerequisites:
  - A/A1. 数学基础/概率统计/随机变量、分布、采样
  - A/A1. 数学基础/线性代数/向量、矩阵、张量
- core metrics:
  - 样本均值
  - 样本方差/标准差
  - 协方差矩阵
  - 相关系数
  - 梯度方差
  - 多次运行指标均值±标准差
- toolchain:
  - Python
  - NumPy
  - Pandas
  - Matplotlib
  - PyTorch
- failure signs:
  - 训练结果平均值尚可，但不同 run 的波动很大。
  - 特征间强相关导致参数不稳定或解释困难。
  - batch 太小时训练噪声过大，loss 大幅振荡。
  - 只报告单次最好结果，无法复现实验均值和方差。
- next:
  - A/A1. 数学基础/概率统计/条件概率、贝叶斯
  - A/A1. 数学基础/概率统计/估计、校准、置信
  - A/A1. 数学基础/线性代数/分解、特征值/特征向量
  - A/A3. 实验与研究方法/指标设计

##### 条件概率、贝叶斯

- pathKey: `A/A1. 数学基础/概率统计/条件概率、贝叶斯`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-tlt9p1-1.json`
- status: complete
- definition: 条件概率描述“在已知某些信息后，事件发生概率如何更新”；贝叶斯公式把先验、似然与后验联系起来，给出观察到证据后对假设的更新规则。它不是只属于贝叶斯学派的公式，而是机器学习里处理证据融合、分类决策、不确定推断的通用语言。
- importance: 现实数据通常不是无条件出现的：点击率依赖曝光条件，疾病概率依赖症状与群体基线，模型输出概率依赖输入上下文。理解条件概率，才能正确解释 precision/recall、混淆矩阵、朴素贝叶斯、检索排序中的后验重排，以及各种“看到信号后更新判断”的系统。
- minimum demo: 构造一个二分类数据集，给定类别先验和每个特征在类别下的条件分布，实现朴素贝叶斯分类器。比较只看边缘概率与使用条件概率时的分类差异。再做一个 base rate 演示：设定低基率事件和非完美检测器，计算阳性结果下事件真实发生的后验概率。
- hardware budget: CPU 即可。几千到几万条样本就足够演示先验、似然、后验之间的变化；无需 GPU。
- examples:
  - 垃圾邮件过滤中，看到某些词后更新“这是垃圾邮件”的后验概率。
  - 医学检测中，阳性结果的解释必须结合疾病基率。
  - 检索系统中，可把相关性分数视作某种条件概率近似。
  - 语言模型下一个 token 概率本质上是给定上下文条件下的分布。
- pitfalls:
  - 忽略 base rate，只盯着检测器准确率或模型分数。
  - 把 P(A|B) 和 P(B|A) 混为一谈。
  - 把模型输出分数直接当后验真概率，不做校准。
  - 在条件独立明显不成立时生硬套用朴素贝叶斯。
  - 把先验当主观偏见而非可显式建模的信息来源。
- prerequisites:
  - A/A1. 数学基础/概率统计/随机变量、分布、采样
  - A/A1. 数学基础/概率统计/期望、方差、协方差
- core metrics:
  - 先验概率
  - 似然
  - 后验概率
  - 条件熵
  - 混淆矩阵
  - precision
  - recall
  - false positive rate
- toolchain:
  - Python
  - NumPy
  - SciPy
  - scikit-learn
  - Pandas
- failure signs:
  - 高准确率检测器在低基率场景下仍产生大量误报。
  - 模型分数看似高，但后验解释完全错误。
  - 线上流量分布变化后，基于旧先验的决策迅速失效。
  - 团队在分析指标时频繁混淆条件方向。
- next:
  - A/A1. 数学基础/概率统计/估计、校准、置信
  - A/A1. 数学基础/信息论/熵
  - A/A1. 数学基础/信息论/互信息
  - A/A3. 实验与研究方法/误差分析

##### 估计、校准、置信

- pathKey: `A/A1. 数学基础/概率统计/估计、校准、置信`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-tlt9p1-1.json`
- status: complete
- definition: 估计是用有限样本推断总体参数或模型性能；校准关注模型给出的概率分数是否与真实频率一致；置信通常指用区间或统计程序表达估计的不确定性，例如置信区间、标准误和覆盖率。三者共同回答：我们测到的数值有多可靠、概率输出能否被解释、结论的不确定范围有多大。
- importance: AI 系统不只需要给出一个点预测，还要知道这个数值是否可信。离线评测中的均值差异是否显著、线上 A/B 结果是否稳定、分类器的 0.9 分数是否真有约 90% 正确率、回归区间能否覆盖真实值，这些都属于估计、校准与置信问题。忽略它们，会把偶然波动当改进，把不可解释分数当可靠决策依据。
- minimum demo: 训练一个二分类模型，输出概率分数。先计算准确率、log loss 与 Brier score，再画 reliability diagram 和 ECE。随后对测试集做 bootstrap，给准确率和 AUC 估计 95% 区间，比较单次点估计与区间估计的差异。最后用 Platt scaling 或 isotonic regression 做一次校准前后对比。
- hardware budget: CPU 即可。scikit-learn 级别模型在普通笔记本即可完成；bootstrap 重复数在数百次内就能看到区间和校准变化。
- examples:
  - 天气预报说降雨概率 70%，校准良好时，长期看类似条件下约 70% 的天会下雨。
  - 二分类模型 A 比模型 B 准确率高 0.4%，但置信区间重叠很大，不能贸然下结论。
  - 风险模型用于阈值决策时，分数未校准会直接放大业务误判。
  - 大语言模型的 token 概率、拒答分数或 reward score 若未经校准，通常不适合直接当风险概率使用。
- pitfalls:
  - 把高准确率等同于概率校准好。
  - 只报点估计，不报波动范围或重复实验结果。
  - 在样本极不平衡时只看 accuracy，忽视概率质量。
  - 把置信区间误解为“参数有 95% 概率在区间内”的贝叶斯式表述。
  - 先在测试集上调校准器，再在同一测试集上报告效果，造成信息泄漏。
- prerequisites:
  - A/A1. 数学基础/概率统计/随机变量、分布、采样
  - A/A1. 数学基础/概率统计/期望、方差、协方差
  - A/A1. 数学基础/概率统计/条件概率、贝叶斯
  - A/A3. 实验与研究方法/指标设计
- core metrics:
  - 偏差
  - 方差
  - 标准误
  - 置信区间宽度
  - 覆盖率
  - Brier score
  - log loss
  - ECE
  - MCE
  - AUC
- toolchain:
  - Python
  - NumPy
  - SciPy
  - scikit-learn
  - statsmodels
  - Matplotlib
- failure signs:
  - 概率分数排序还行，但 reliability diagram 明显偏离对角线。
  - 不同测试切分下指标上下跳动，区间很宽。
  - 线上阈值策略对分数极敏感，说明分数不可直接解释。
  - 少量样本上的微小改进被过度解读为稳定收益。
- next:
  - A/A3. 实验与研究方法/指标设计
  - A/A3. 实验与研究方法/对照实验
  - A/A3. 实验与研究方法/误差分析
  - A/A3. 实验与研究方法/可重复性
  - A/A1. 数学基础/信息论/交叉熵

#### 微积分与优化

- pathKey: `A/A1. 数学基础/微积分与优化`
- node type: `concept-group`
- detail source: `data/details/domain-A.json`
- status: draft
- definition: 微积分与优化描述损失如何随参数变化，以及训练算法如何沿着局部斜率信息移动。它让我们把“模型在学什么”落到可计算的梯度、学习率、曲率和更新轨迹上，而不是只看 loss 曲线表面起伏。
- importance: 不理解梯度传播、优化器行为和收敛条件时，训练过程就会退化成盲目调参。很多现象例如梯度爆炸、学习率过大震荡、局部平坦区停滞，都需要这层来解释。
- minimum demo: 对一个简单损失函数分别使用不同学习率和优化器，观察更新轨迹、震荡、收敛速度以及梯度范数如何变化。
- prerequisites:
  - A/A1. 数学基础
- core metrics:
  - 梯度直觉
  - 收敛判断能力
- next:
  - A/A1. 数学基础/微积分与优化/导数、偏导、链式法则
  - A/A1. 数学基础/微积分与优化/梯度下降
  - A/A1. 数学基础/微积分与优化/SGD、Adam 类优化器
  - A/A1. 数学基础/微积分与优化/学习率、收敛、稳定性

##### 导数、偏导、链式法则

- pathKey: `A/A1. 数学基础/微积分与优化/导数、偏导、链式法则`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-10viihr-1.json`
- status: completed
- definition: 导数描述单变量函数在某点附近的瞬时变化率；偏导描述多变量函数对某一个变量的局部变化率；链式法则给出复合函数求导规则。在机器学习里，模型通常是由线性变换、激活函数、归一化和损失函数层层复合而成，反向传播本质上就是把链式法则系统化地应用到计算图上，逐层把损失对参数的导数传回去。
- importance: 这是理解训练过程的最小数学入口。不会导数与链式法则，就很难真正理解梯度、反向传播、参数更新、自动求导为什么有效，也难以定位梯度爆炸、梯度消失、数值不稳定等训练问题。对于工程学习者，它的价值不在手推复杂证明，而在于能把“损失为什么会对某个权重敏感”说清楚。
- minimum demo: 选一个最小例子：y=wx+b，损失取 L=(y-t)^2。先手工求出 dL/dw、dL/db，再把模型换成 y=sigmoid(wx+b)，继续用链式法则展开 dL/dw。然后用 Python 或 PyTorch 自动求导核对手算结果，确认每一层局部导数相乘后得到的总梯度与 autograd 一致。
- hardware budget: CPU 即可。纸笔加 Python/PyTorch 解释器就能完成；不需要 GPU，也不需要大数据。
- examples:
  - 对线性回归 L=(wx+b-t)^2 手推 w、b 的梯度。
  - 对两层感知机 z1=W1x，a1=relu(z1)，y=W2a1，L=交叉熵，理解梯度如何从损失回传到 W1。
  - 用 sigmoid 或 tanh 展示深层链式相乘时梯度变小的现象。
  - 比较手工有限差分梯度与自动求导结果，验证求导实现是否正确。
- pitfalls:
  - 把导数、偏导、梯度混为一谈，不区分标量对标量和标量对向量的情形。
  - 只背公式，不理解“局部敏感度乘起来”这一层级结构。
  - 忽略张量形状与广播，导致梯度维度理解错误。
  - 把不可导点看成训练无法进行，忽略 ReLU 在工程上可用次梯度或分段定义处理。
  - 把链式法则记成机械乘法，不结合计算图看依赖关系。
- prerequisites:
  - A/A1. 数学基础/线性代数/向量、矩阵、张量
  - A/A1. 数学基础/线性代数/线性变换
- core metrics:
  - 能否从复合函数结构正确写出局部导数与总导数。
  - 手算梯度与自动求导结果是否一致。
  - 有限差分梯度检查误差是否足够小。
  - 是否能正确解释每个参数梯度的形状与物理含义。
- toolchain:
  - Python
  - NumPy
  - PyTorch autograd
  - Jupyter Notebook
- failure signs:
  - 无法从简单损失函数写出参数梯度。
  - 看到反向传播公式只能记忆，无法解释每一项来源。
  - 梯度 shape 经常写错或广播错。
  - 数值梯度与解析梯度长期对不上却不知道排查哪里。
- next:
  - A/A1. 数学基础/微积分与优化/梯度下降
  - A/A1. 数学基础/微积分与优化/SGD、Adam 类优化器
  - A/A1. 数学基础/微积分与优化/学习率、收敛、稳定性
  - A/A1. 数学基础/数值计算/数值稳定性

##### 梯度下降

- pathKey: `A/A1. 数学基础/微积分与优化/梯度下降`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-10viihr-1.json`
- status: completed
- definition: 梯度下降是一类基于一阶导数的迭代优化方法。核心思想是在当前参数位置计算目标函数对参数的梯度，然后沿负梯度方向走一小步，使目标函数在局部近似下下降。标准形式可写成 θ←θ-η∇L(θ)，其中 η 是学习率。在线性回归、逻辑回归、神经网络训练中，它是最基础的参数更新框架。
- importance: 它把“求导”变成了“训练”。理解梯度下降后，才能把损失面、更新方向、步长、收敛速度、震荡、发散等现象串起来。很多更复杂的优化器，本质上都是在梯度下降框架上加入采样、动量、自适应缩放或正则化。
- minimum demo: 用二维二次函数 f(x,y)=x^2+4y^2 做实验，从不同初始点出发，设置多个学习率，观察参数轨迹和损失变化。然后再用线性回归数据集做一次完整训练，对比闭式解与梯度下降得到的参数，记录每轮 loss 是否下降以及最终误差。
- hardware budget: CPU 即可。二维函数可视化和小规模回归实验在笔记本电脑上数秒内完成；不需要 GPU。
- examples:
  - 在二次函数上画出等高线和更新轨迹，直观看到负梯度方向。
  - 在标准化前后的线性回归数据上训练，比较收敛速度差异。
  - 用 batch gradient descent 训练逻辑回归，观察 loss 单调下降的近似趋势。
  - 在病态条件数的目标函数上展示梯度下降呈之字形震荡。
- pitfalls:
  - 把梯度方向和下降方向搞反，误写成加号更新。
  - 学习率过大导致 loss 震荡或直接发散。
  - 忽略特征尺度差异，导致某些方向收敛很慢。
  - 只看训练轮数，不看每步实际下降量。
  - 误以为梯度下降一定能找到全局最优，忽略非凸目标。
- prerequisites:
  - A/A1. 数学基础/微积分与优化/导数、偏导、链式法则
  - A/A1. 数学基础/线性代数/向量、矩阵、张量
  - A/A1. 数学基础/线性代数/内积、范数、相似度
- core metrics:
  - loss 是否随迭代整体下降。
  - 梯度范数是否逐步减小。
  - 到达目标误差所需的迭代步数。
  - 不同初始点与学习率下的收敛稳定性。
- toolchain:
  - Python
  - NumPy
  - Matplotlib
  - PyTorch 或 JAX（可选）
- failure signs:
  - loss 连续上升或剧烈震荡。
  - 参数更新后出现 NaN 或 Inf。
  - 长时间几乎不下降，说明步长太小或条件数差。
  - 不同随机初始化结果差异过大且无法解释。
- next:
  - A/A1. 数学基础/微积分与优化/SGD、Adam 类优化器
  - A/A1. 数学基础/微积分与优化/学习率、收敛、稳定性
  - A/A1. 数学基础/数值计算/数值稳定性
  - A/A3. 实验与研究方法/指标设计

##### SGD、Adam 类优化器

- pathKey: `A/A1. 数学基础/微积分与优化/SGD、Adam 类优化器`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-10viihr-1.json`
- status: completed
- definition: SGD、Momentum、RMSProp、Adam 等都是基于梯度下降的实用优化器。SGD 用小批量样本的随机梯度近似全量梯度，降低每步计算成本并引入噪声；Momentum 在更新中累积历史方向，减小震荡；Adam 同时跟踪一阶矩和二阶矩，对不同参数做自适应步长缩放，因此在深度学习中常作为默认起点。
- importance: 真实训练很少使用纯全量梯度下降。数据量大、目标非凸、梯度噪声高时，优化器选择会直接影响收敛速度、显存占用、最终泛化和调参难度。理解不同优化器的偏好场景，有助于解释为什么同一个模型在不同任务上训练体验差异很大。
- minimum demo: 在同一小型分类任务上固定模型与数据，只更换优化器：SGD、SGD+Momentum、Adam。使用相同训练轮数，记录 train loss、val loss、梯度范数和最终精度，比较前期收敛速度、后期稳定性以及对学习率的敏感程度。可进一步测试 AdamW 与 Adam 在权重衰减上的差异。
- hardware budget: CPU 可完成小型 MLP 或逻辑回归对比；若想在稍大的图像或文本任务上观察更明显差异，单张消费级 GPU 更高效，但不是必要条件。
- examples:
  - 用小批量 SGD 训练线性分类器，观察每步 loss 带噪声但整体下降。
  - 在狭长谷底型目标函数上对比 SGD 与 Momentum 的更新轨迹。
  - 在深层网络上用 Adam 快速得到可训练基线。
  - 比较 Adam 与 AdamW，观察权重衰减实现方式不同带来的泛化差异。
- pitfalls:
  - 把 Adam 当成任何任务的最优默认，而不做验证。
  - 只比较训练集下降速度，不看验证集表现。
  - 忽略 batch size 对梯度噪声和优化器行为的影响。
  - 对 Adam 的 beta、epsilon、weight decay 完全不理解，只机械套用默认值。
  - 把优化器问题和模型、数据、归一化问题混在一起排查。
- prerequisites:
  - A/A1. 数学基础/微积分与优化/梯度下降
  - A/A1. 数学基础/概率统计/期望、方差、协方差
  - A/A1. 数学基础/数值计算/数值稳定性
- core metrics:
  - 单位时间内的损失下降速度。
  - 达到目标验证指标所需 epoch 或 step。
  - 最终验证集性能与泛化差距。
  - 对学习率和 batch size 改动的敏感度。
  - 显存与优化器状态开销。
- toolchain:
  - PyTorch optim
  - Weights & Biases 或 TensorBoard
  - Matplotlib
  - Jupyter Notebook
- failure signs:
  - 训练初期很快下降但验证指标停滞或变差。
  - 更换优化器后需要极端学习率才能工作。
  - 优化器状态占用过大导致显存压力异常。
  - 后期 loss 抖动明显、难以收敛到稳定区域。
- next:
  - A/A1. 数学基础/微积分与优化/学习率、收敛、稳定性
  - A/A1. 数学基础/数值计算/数值稳定性
  - A/A3. 实验与研究方法/对照实验
  - A/A3. 实验与研究方法/Baseline

##### 学习率、收敛、稳定性

- pathKey: `A/A1. 数学基础/微积分与优化/学习率、收敛、稳定性`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-10viihr-1.json`
- status: completed
- definition: 学习率控制每次参数更新的步长；收敛描述优化过程是否逐步逼近稳定解或较优解；稳定性关注训练过程中数值和动力学是否可控，例如 loss 不爆炸、梯度不过大不过小、参数更新不失真。它们共同决定训练是否能持续向好，而不是偶然下降几步。
- importance: 很多训练失败并不是模型结构错了，而是优化过程没有被稳定控制。学习率过大可能直接发散，过小则训练极慢；收敛判断不清会让人误把早期下降当作成功；稳定性问题会放大为 NaN、梯度爆炸、验证集剧烈波动、复现实验失败。理解这一层，才能把调参从试错变成有依据的诊断。
- minimum demo: 在同一模型上做学习率扫描，例如 1e-5、1e-4、1e-3、1e-2。记录训练/验证 loss 曲线、梯度范数、参数范数和是否出现 NaN。然后加入 warmup、学习率衰减或梯度裁剪，再比较稳定性是否改善。可额外固定随机种子重复多次，观察结果方差。
- hardware budget: CPU 可做小模型和学习率扫描；若要在中型神经网络上复现实验，单张 GPU 更合适。关键不是算力规模，而是能系统记录多组对照结果。
- examples:
  - 对 MLP 做 learning rate range test，找到可训练区间。
  - 使用 cosine decay 或 step decay 比较后期收敛速度。
  - 加入 gradient clipping 解决 RNN 或深层网络中的梯度爆炸。
  - 固定架构与数据，只修改 batch size 和学习率，观察线性缩放是否近似成立。
- pitfalls:
  - 只盯最终指标，不看整个训练曲线。
  - 把短期 loss 抖动误判为失败，或把偶然下降误判为收敛。
  - 没有区分优化不稳定与数值不稳定，例如学习率过大和浮点溢出混在一起。
  - 调学习率时同时改了多个变量，导致无法归因。
  - 忽略随机种子、数据顺序和 batch size 对稳定性的影响。
- prerequisites:
  - A/A1. 数学基础/微积分与优化/梯度下降
  - A/A1. 数学基础/微积分与优化/SGD、Adam 类优化器
  - A/A1. 数学基础/数值计算/浮点精度
  - A/A1. 数学基础/数值计算/数值稳定性
- core metrics:
  - 训练 loss 与验证 loss 曲线形态。
  - 梯度范数与参数范数是否处于合理范围。
  - 是否出现 NaN、Inf、梯度爆炸或梯度消失。
  - 达到目标指标所需 step/epoch。
  - 多次重复实验的结果方差与可复现性。
- toolchain:
  - PyTorch scheduler
  - TensorBoard 或 Weights & Biases
  - 梯度裁剪工具
  - 实验记录表或 Notebook
- failure signs:
  - loss 在若干步后突然爆炸。
  - 梯度长期接近 0，模型几乎不学习。
  - 不同随机种子结果差异极大。
  - 验证指标剧烈波动，无法稳定复现。
  - 训练正常但一启用混合精度或更大 batch 就失稳。
- next:
  - A/A1. 数学基础/数值计算/浮点精度
  - A/A1. 数学基础/数值计算/数值稳定性
  - A/A3. 实验与研究方法/对照实验
  - A/A3. 实验与研究方法/可重复性
  - A/A3. 实验与研究方法/误差分析

#### 信息论

- pathKey: `A/A1. 数学基础/信息论`
- node type: `concept-group`
- detail source: `data/details/domain-A.json`
- status: draft
- definition: 信息论提供衡量不确定性、压缩效率和分布差异的一组统一量纲。它不仅解释熵、交叉熵、KL 散度这些训练中常见概念，也帮助理解为什么语言建模本质上是在持续压缩下一 token 的不确定性。
- importance: 很多损失函数、表示学习目标和生成质量讨论，本质都可以还原成“减少多少不确定性”或“两个分布差多远”。这让不同任务之间有了可比较的解释框架。
- minimum demo: 把分类交叉熵、语言建模 negative log-likelihood 和 KL regularization 放到同一套“分布差异与不确定性”框架里解释，再看它们分别惩罚了什么。
- prerequisites:
  - A/A1. 数学基础/概率统计
- core metrics:
  - 损失函数理解
  - 分布差异判断
- next:
  - A/A1. 数学基础/信息论/熵
  - A/A1. 数学基础/信息论/交叉熵
  - A/A1. 数学基础/信息论/KL 散度
  - A/A1. 数学基础/信息论/互信息

##### 熵

- pathKey: `A/A1. 数学基础/信息论/熵`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-1bdc2yo-1.json`
- status: complete
- definition: 对离散随机变量 X 的分布 p，香农熵 H(X) = -∑ p(x) log p(x)，表示平均不确定性，也等价于最优编码下的平均码长下界。对数底为 2 时单位是 bit，为 e 时单位是 nat；工程上通常先从离散情形理解。
- importance: 熵是信息论的起点，连接了不确定性、压缩、信息增益、模型输出分布的尖锐度等核心直觉。在机器学习里，它常被用来理解标签分布是否均衡、模型是否过于犹豫或过于确定，以及后续的交叉熵、KL 散度、互信息等概念。
- minimum demo: 计算公平硬币、偏置硬币、K 类均匀分布的熵，并画出 Bernoulli(p) 的 H(p) 曲线；再对一个小分类数据集统计标签分布，验证分布越均匀，标签熵越高。这个实验能直接建立“熵衡量平均不确定性”的直觉。
- hardware budget: CPU 即可；用 Python、NumPy 或表格工具都能完成。1 核、内存小于 1GB 即可，无需 GPU。
- examples:
  - 公平硬币的熵为 1 bit，而极偏硬币的熵更低
  - 分类数据集中各类样本越均匀，标签熵越高
  - 语言模型在某个位置输出越分散，token 熵越高，说明下一步越不确定
  - 决策树按信息增益选划分，本质上比较条件熵下降
- pitfalls:
  - 把熵当成单个样本的损失，而不是总体分布的不确定性
  - 忽略对数底不同导致单位不同，直接横向比较数值
  - 把离散熵与连续情形下的微分熵混为一谈
  - 以为熵越高一定越好，忽略任务目标与数据语义
  - 样本太少时直接用经验分布估计熵，结果偏差很大
- prerequisites:
  - A/A1. 数学基础/概率统计/随机变量、分布、采样
  - A/A1. 数学基础/概率统计/期望、方差、协方差
- core metrics:
  - 熵 H(X)
  - 条件熵 H(Y|X)
  - 归一化熵 H(X)/log K
  - 信息增益 IG = H(Y) - H(Y|X)
- toolchain:
  - Python
  - NumPy
  - pandas
  - matplotlib
- failure signs:
  - 概率里出现 0 且代码直接取 log，导致 -inf 或 NaN
  - 经验分布只改动少量样本，熵估计却大幅抖动，通常是样本太少
  - 更换对数底后数值变化，却被误认为系统行为变了
  - 把单个样本的 surprisal 和总体熵混为一谈
- next:
  - A/A1. 数学基础/信息论/交叉熵
  - A/A1. 数学基础/信息论/KL 散度
  - A/A1. 数学基础/信息论/互信息

##### 交叉熵

- pathKey: `A/A1. 数学基础/信息论/交叉熵`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-1bdc2yo-1.json`
- status: complete
- definition: 对于真实分布 p 和模型分布 q，交叉熵 H(p,q) = -∑ p(x) log q(x)，表示数据来自 p 时却按 q 去编码的平均代价。在 one-hot 监督分类里，它退化为正确类别的 -log q(y_true)。
- importance: 交叉熵是分类、检索重排、下一 token 预测等任务里最常见的训练目标之一。它不仅关心是否预测正确，还关心模型给正确答案分了多少概率；并且因为 H(p,q) = H(p) + D_KL(p||q)，在真实分布固定时，最小化交叉熵等价于让模型分布逼近真实分布。
- minimum demo: 构造一个 3 类分类例子，比较 q = [0.7, 0.2, 0.1]、[0.4, 0.3, 0.3]、[0.01, 0.98, 0.01] 在不同真实标签下的交叉熵；再用 sklearn 训练一个逻辑回归，观察准确率接近时，交叉熵仍能区分模型置信度质量。
- hardware budget: CPU 即可；逻辑回归或一个很小的 softmax 分类器就能复现实验。1 到 2 核、内存小于 1GB，无需 GPU。
- examples:
  - 图像分类里对 softmax 输出与 one-hot 标签计算交叉熵
  - 语言模型把下一个 token 的负对数概率作为训练损失
  - 标签平滑会把 one-hot 标签改成软标签，再计算交叉熵
  - 知识蒸馏里常比较教师分布与学生分布的交叉熵或等价 KL 项
- pitfalls:
  - 把已经 softmax 过的概率再传给期望 logits 的 API，或反过来
  - 没有做数值稳定处理，出现 log(0) 或 softmax 溢出
  - 多标签任务误用 softmax 交叉熵，而不是按标签独立建模
  - 序列任务没有正确忽略 padding 或 mask，导致 loss 偏大
  - 只看准确率不看交叉熵，忽略了概率质量和校准问题
- prerequisites:
  - A/A1. 数学基础/信息论/熵
  - A/A1. 数学基础/概率统计/随机变量、分布、采样
  - A/A1. 数学基础/微积分与优化/导数、偏导、链式法则
  - A/A1. 数学基础/数值计算/数值稳定性
- core metrics:
  - 平均交叉熵
  - 负对数似然 NLL
  - Perplexity（语言建模中由平均交叉熵换算）
  - ECE / Brier score（评估概率质量时配合使用）
- toolchain:
  - PyTorch
  - TensorFlow / JAX
  - scikit-learn（逻辑回归、softmax baseline）
  - TensorBoard / Weights & Biases
- failure signs:
  - 训练一开始 loss 就变成 NaN 或 inf，常见于数值不稳定
  - 准确率上升但交叉熵长期不降，说明置信度或校准存在问题
  - 训练 loss 很低、验证 loss 很高，常见于过拟合或标签噪声
  - 不同 batch 的 loss 波动异常大，常见于 mask、label 或 reduction 写错
- next:
  - A/A1. 数学基础/信息论/KL 散度
  - A/A1. 数学基础/微积分与优化/SGD、Adam 类优化器
  - A/A1. 数学基础/微积分与优化/学习率、收敛、稳定性

##### KL 散度

- pathKey: `A/A1. 数学基础/信息论/KL 散度`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-1bdc2yo-1.json`
- status: complete
- definition: KL 散度 D_KL(p||q) = ∑ p(x) log(p(x)/q(x))，表示用 q 近似 p 时额外付出的编码代价或信息损失。它总是非负，且只有在两者几乎处处相同时为 0，但它不对称，因此不是严格意义上的距离。
- importance: KL 散度是比较两个分布差异的标准工具，贯穿变分推断、蒸馏、策略约束、分布漂移分析等场景。它把熵与交叉熵连在一起，也提醒工程上必须明确“谁逼近谁”，因为方向不同会带来不同优化行为。
- minimum demo: 固定 Bernoulli 分布 p = 0.8，让 q 从 0.05 扫到 0.95，分别计算 D_KL(p||q) 与 D_KL(q||p) 并画曲线；再验证 H(p,q) - H(p) = D_KL(p||q)，直观看到不对称性以及支撑集不匹配时的发散。
- hardware budget: CPU 即可；NumPy 或 SciPy 的小脚本就能完成。1 核、内存小于 1GB，无需 GPU。
- examples:
  - 知识蒸馏里让学生输出分布逼近教师输出分布
  - 变分自编码器中用 KL 约束近似后验接近先验
  - 强化学习里用 KL 控制新旧策略不要偏移过大
  - 分布漂移分析中比较训练期与线上预测分布的变化
- pitfalls:
  - 把 KL 当成对称距离使用，忽略方向性
  - 当 q(x) = 0 且 p(x) > 0 时仍直接计算，导致发散
  - 混淆 forward KL 与 reverse KL，得到与预期相反的模式偏好
  - 离散直方图未做平滑就计算 KL，结果极不稳定
  - 在不同对数底、不同归一化方式下直接比较数值
- prerequisites:
  - A/A1. 数学基础/信息论/熵
  - A/A1. 数学基础/信息论/交叉熵
  - A/A1. 数学基础/概率统计/随机变量、分布、采样
- core metrics:
  - D_KL(p||q)
  - D_KL(q||p)
  - Cross-Entropy - Entropy
  - Jensen-Shannon divergence（对称化参考）
- toolchain:
  - NumPy / SciPy
  - PyTorch distributions
  - TensorFlow Probability
  - matplotlib
- failure signs:
  - KL 突然变成 inf 或 NaN，通常是支撑集不匹配或数值下溢
  - 交换 p 和 q 后结果变化很大，但实现里没有意识到方向性问题
  - 采样估计的 KL 曲线剧烈抖动，说明方差过大或样本不足
  - 理论上应接近的两个分布得到很大 KL，常见于归一化或 log 底错误
- next:
  - A/A1. 数学基础/信息论/互信息
  - A/A1. 数学基础/概率统计/估计、校准、置信
  - A/A1. 数学基础/数值计算/数值稳定性

##### 互信息

- pathKey: `A/A1. 数学基础/信息论/互信息`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-1bdc2yo-1.json`
- status: complete
- definition: 互信息 I(X;Y) 衡量知道 X 后 Y 的不确定性减少了多少，可写成 I(X;Y) = H(Y) - H(Y|X) = H(X) + H(Y) - H(X,Y) = D_KL(p(x,y)||p(x)p(y))。它非负，且当且仅当 X 与 Y 独立时为 0。
- importance: 互信息能刻画比线性相关更一般的统计依赖，因此常用于特征选择、表征学习、多模态对齐、决策树划分和通信容量分析。在机器学习里，它提供了“表示里到底保留了多少与目标相关信息”的统一视角。
- minimum demo: 生成三组数据：独立、线性相关、XOR 相关；分别计算 Pearson 相关和互信息，观察 XOR 场景下相关系数接近 0 但互信息仍显著，从而建立“互信息能捕捉非线性依赖”的直觉。可先用离散分箱或 sklearn 的现成估计器做 toy 实验。
- hardware budget: CPU 即可；低维 toy 数据与 sklearn 估计在笔记本上秒级完成。只有高维神经互信息估计实验才通常需要 GPU。
- examples:
  - 特征选择时优先保留与标签互信息更高的特征
  - 决策树的信息增益可理解为划分特征与标签的互信息
  - 多模态对齐中希望图像表示与文本表示共享更高互信息
  - 通信中的信道容量是对输入分布最大化后的互信息
- pitfalls:
  - 把互信息当成相关系数或因果关系的替代品
  - 有限样本下直接估计互信息，偏差和方差都很大
  - 连续变量互信息对分箱、核宽度、近邻数等估计超参数很敏感
  - 高维特征上直接做互信息估计，结果常常接近噪声
  - 不同估计器得到的 MI 数值直接横向比较，容易误判
- prerequisites:
  - A/A1. 数学基础/信息论/熵
  - A/A1. 数学基础/信息论/KL 散度
  - A/A1. 数学基础/概率统计/随机变量、分布、采样
  - A/A1. 数学基础/概率统计/条件概率、贝叶斯
- core metrics:
  - 互信息 I(X;Y)
  - 条件熵 H(Y|X)
  - 信息增益
  - 归一化互信息 NMI
- toolchain:
  - scikit-learn（mutual_info_classif、mutual_info_regression、normalized_mutual_info_score）
  - NumPy
  - pandas
  - matplotlib
- failure signs:
  - 理论上独立的变量却估计出很高互信息，常见于估计器过拟合或分箱设置不当
  - 仅改动分箱数或近邻参数，MI 就大幅跳变，说明估计不稳
  - 高维表示直接估计 MI 几乎全是噪声，难以复现实验结论
  - 把高互信息误解为因果关系，导致后续决策错误
- next:
  - A/A1. 数学基础/概率统计/估计、校准、置信
  - A/A3. 实验与研究方法/指标设计
  - A/A3. 实验与研究方法/误差分析

#### 数值计算

- pathKey: `A/A1. 数学基础/数值计算`
- node type: `concept-group`
- detail source: `data/details/domain-A.json`
- status: draft
- definition: 数值计算关注有限精度下的真实计算行为，例如浮点误差、数值稳定性、近似和并行计算带来的偏差。
- importance: 很多训练或推理 bug 并不是理论错，而是数值实现出了问题。
- minimum demo: 构造一个会因精度或缩放不当而不稳定的小例子，观察数值处理方式如何改变结果。
- prerequisites:
  - A/A1. 数学基础
- core metrics:
  - 数值稳定性判断
  - 精度与性能权衡
- next:
  - A/A1. 数学基础/数值计算/浮点精度
  - A/A1. 数学基础/数值计算/数值稳定性
  - A/A1. 数学基础/数值计算/近似计算
  - A/A1. 数学基础/数值计算/并行计算直觉

##### 浮点精度

- pathKey: `A/A1. 数学基础/数值计算/浮点精度`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-1jnhqme-1.json`
- status: complete
- definition: 浮点精度是计算机用有限位数表示实数时带来的范围与分辨率约束。实数会被舍入到有限可表示集合中，因此同一个数学表达式在 fp64、fp32、fp16、bfloat16 下可能得到不同结果，且误差会在累加、缩放、求指数等操作中传播。
- importance: AI 系统几乎所有张量运算都受浮点表示影响。它直接决定训练与推理的内存占用、吞吐、是否容易溢出或下溢，以及混合精度训练能否稳定工作。很多“模型不收敛”或“结果不一致”问题，根因并不在模型结构，而在数值表示。
- minimum demo: 用 NumPy 或 PyTorch 分别在 float64、float32、float16 或 bfloat16 上计算 0.1 的表示误差、表达式 (1e8 + 1) - 1e8，以及对 1e-3 重复累加十万次；比较输出、相对误差和是否出现 0、inf、NaN。
- hardware budget: 普通笔记本 CPU 即可完成，内存 1GB 内足够；若想进一步观察混合精度训练中的真实行为，可选单张消费级 GPU，但不是必须。
- examples:
  - float32 中 0.1 不能被精确表示
  - 低精度下 1e8 + 1 - 1e8 可能得到 0 而不是 1
  - fp16 中很小的梯度可能直接下溢为 0
  - bfloat16 保留更大数值范围，但有效精度明显低于 float32
- pitfalls:
  - 把浮点数当成实数做严格相等比较
  - 以为低精度只会稍微不准一点，不会改变训练行为
  - 混淆数值范围和有效精度，忽略 overflow 与 underflow 和舍入误差是不同问题
  - 只检查单步误差，不检查长链路累积误差
- prerequisites:
  - A/A1. 数学基础/线性代数/向量、矩阵、张量
  - A/A1. 数学基础/线性代数/内积、范数、相似度
- core metrics:
  - 最大绝对误差
  - 最大相对误差
  - ULP 误差
  - 溢出或下溢发生率
  - 吞吐与显存占用
- toolchain:
  - Python
  - NumPy
  - PyTorch
  - Jupyter Notebook
- failure signs:
  - 结果频繁出现 NaN 或 Inf
  - 低精度下累加后数值长时间不变化
  - 同一表达式仅因运算顺序变化就出现明显偏差
  - 从 float32 切到 fp16 或 bfloat16 后训练行为明显异常
- next:
  - A/A1. 数学基础/数值计算/数值稳定性
  - A/A1. 数学基础/数值计算/近似计算
  - A/A1. 数学基础/数值计算/并行计算直觉

##### 数值稳定性

- pathKey: `A/A1. 数学基础/数值计算/数值稳定性`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-1jnhqme-1.json`
- status: complete
- definition: 数值稳定性描述算法在存在舍入误差和输入微扰时，输出误差是否会被控制。它关注的是实现过程会不会放大小误差，因此数学上等价的两种写法，数值行为可能完全不同。
- importance: 在 softmax、交叉熵、方差、线性求解和反向传播中，稳定实现往往比公式本身更关键。稳定性差会导致 NaN、Inf、负方差、梯度爆炸或消失，以及看似随机的不收敛。
- minimum demo: 分别实现 naive softmax 与先减 max 的 stable softmax，以及单遍方差 E[x^2]-E[x]^2 与 Welford 算法；在量级很大的输入上比较是否出现 inf、负值和相对误差失控。
- hardware budget: 普通笔记本 CPU 足够，秒级可完成；无需 GPU。
- examples:
  - softmax 前先减去最大值
  - 用 logsumexp 计算对数归一化项
  - 用 Welford 或双遍法计算方差
  - 解线性方程时优先直接求解或 QR/SVD，而不是显式求逆
- pitfalls:
  - 把稳定性和收敛速度混为一谈
  - 只看数学等价，不看计算顺序是否放大误差
  - 遇到 NaN 只调学习率，不检查公式实现与缩放方式
  - 在病态问题上盲目显式求逆
- prerequisites:
  - A/A1. 数学基础/数值计算/浮点精度
  - A/A1. 数学基础/线性代数/内积、范数、相似度
  - A/A1. 数学基础/概率统计/期望、方差、协方差
- core metrics:
  - 前向误差
  - 后向误差
  - 相对误差
  - 条件数或误差放大倍数
  - NaN/Inf 比例
- toolchain:
  - Python
  - NumPy
  - SciPy
  - PyTorch
- failure signs:
  - 数学上等价的两种写法输出差很多
  - 轻微输入扰动导致结果大幅波动
  - 概率、方差或 loss 出现不合理负值、NaN、Inf
  - 显式求逆版本明显比直接求解版本更不可靠
- next:
  - A/A1. 数学基础/数值计算/近似计算
  - A/A1. 数学基础/数值计算/并行计算直觉
  - A/A1. 数学基础/微积分与优化/学习率、收敛、稳定性

##### 近似计算

- pathKey: `A/A1. 数学基础/数值计算/近似计算`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-1jnhqme-1.json`
- status: complete
- definition: 近似计算是在可接受误差范围内，用更便宜的算法替代精确计算，以换取更低的时间、空间或能耗。关键不是算得不准，而是先定义误差预算，再验证近似带来的收益是否值得。
- importance: 现代 AI 的规模常让精确算法在延迟、显存和成本上不可接受。低秩近似、采样、迭代截断、函数近似等方法能让系统可部署、可扩展，但必须与任务指标和误差分析一起看。
- minimum demo: 对一个中等规模矩阵做精确重建与 rank-k 低秩近似，比较重建相对误差、矩阵乘法耗时和峰值内存；再画出 k 变化时误差与速度的 trade-off 曲线。
- hardware budget: 普通笔记本 CPU 即可完成，建议 2GB 以上内存；无需 GPU。
- examples:
  - 用低秩分解近似大矩阵
  - 用随机采样估计总体统计量或积分
  - 用迭代法在达到容忍误差后提前停止
  - 用多项式或查表近似昂贵函数
- pitfalls:
  - 只比较速度，不设明确误差预算
  - 平均误差看起来可接受，却忽略少数 corner case 的灾难性失真
  - 把训练阶段可接受的近似直接搬到高精度评测或财务场景
  - 忽略近似误差、随机误差和浮点误差会同时叠加
- prerequisites:
  - A/A1. 数学基础/数值计算/浮点精度
  - A/A1. 数学基础/数值计算/数值稳定性
  - A/A1. 数学基础/线性代数/分解、特征值/特征向量
  - A/A1. 数学基础/概率统计/随机变量、分布、采样
- core metrics:
  - 相对误差或最大误差
  - 任务指标下降幅度
  - 吞吐或延迟改善
  - 峰值内存下降幅度
  - 迭代次数或提前停止比例
- toolchain:
  - Python
  - NumPy
  - SciPy
  - scikit-learn
  - PyTorch
- failure signs:
  - 速度变快但任务指标明显不可接受
  - 在长尾样本或极端输入上误差暴涨
  - 不同随机种子下结果波动很大
  - 阈值轻微变化就导致质量或性能突变
- next:
  - A/A1. 数学基础/数值计算/并行计算直觉
  - A/A3. 实验与研究方法/指标设计
  - A/A3. 实验与研究方法/误差分析

##### 并行计算直觉

- pathKey: `A/A1. 数学基础/数值计算/并行计算直觉`
- node type: `concept`
- detail source: `data/details/leaves-A-A1-1jnhqme-1.json`
- status: complete
- definition: 并行计算直觉是理解更多核、更多卡、更多机器为什么不一定带来线性加速。实际性能取决于任务划分、同步与通信成本、内存带宽、访存局部性和任务粒度；并行 reduction 还会改变运算顺序，带来微小但真实的数值差异。
- importance: AI 训练与推理高度依赖向量化、GPU 和分布式执行。没有并行直觉，就很难判断 batch size、kernel 粒度、all-reduce、流水线和数据布局是否真的提升了吞吐，还是只是增加了等待与通信。
- minimum demo: 比较 Python for 循环、NumPy 向量化和多进程分块求和的耗时；再比较串行 sum 与分块或并行 sum 的结果差异，观察加速比并非线性，而且 reduction 顺序变化会引入细小数值偏差。
- hardware budget: 普通笔记本 CPU 足以完成入门实验；若有单张 GPU，可进一步观察 batch size、kernel 启动开销与吞吐的关系，但不是必须。
- examples:
  - 矩阵乘法通常比逐元素小算子更容易吃满并行硬件
  - sum、mean、norm 等 reduction 常是同步点和瓶颈
  - 小张量很多时，kernel 启动开销可能盖过真实计算
  - 多卡训练中的 all-reduce 会限制扩展效率
- pitfalls:
  - 认为算力翻倍就一定速度翻倍
  - 只看 FLOPs，不看内存带宽、通信和同步开销
  - 把并行后的微小数值差异误判为实现错误
  - 忽略任务粒度过小会让并行化得不偿失
- prerequisites:
  - A/A1. 数学基础/线性代数/向量、矩阵、张量
  - A/A1. 数学基础/数值计算/浮点精度
  - A/A1. 数学基础/数值计算/数值稳定性
  - A/A2. 计算机基础/操作系统与并发/进程、线程、协程
- core metrics:
  - 加速比
  - 并行效率
  - 吞吐
  - 端到端延迟
  - 通信/计算比
  - 数值一致性偏差
- toolchain:
  - Python
  - NumPy
  - PyTorch
  - multiprocessing
  - PyTorch Profiler
- failure signs:
  - 增加线程或设备后几乎不加速，甚至更慢
  - 利用率不高但等待、同步或通信时间很长
  - batch size 增大后吞吐不升反降
  - 并行 reduction 后结果与串行结果的偏差持续放大
- next:
  - A/A2. 计算机基础/操作系统与并发/并发、异步、锁、队列
  - A/A3. 实验与研究方法/可重复性
  - A/A3. 实验与研究方法/指标设计

### A2. 计算机基础

- pathKey: `A/A2. 计算机基础`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-A.json`
- status: draft
- definition: 计算机基础把数学设想变成可运行系统，涵盖编程语言、数据结构与算法、操作系统与并发、网络与协议、数据系统和软件工程。
- importance: 没有这层，很多 AI 原型能跑，但很难扩展、调试、部署和维护。
- minimum demo: 做一个最小 AI 原型并把输入、状态、网络调用、数据存储和日志都明确下来。
- prerequisites:
  - A
- core metrics:
  - 实现稳定性
  - 调试效率
  - 系统扩展性
- next:
  - A/A2. 计算机基础/编程语言
  - A/A2. 计算机基础/数据结构与算法
  - A/A2. 计算机基础/操作系统与并发
  - A/A2. 计算机基础/网络与协议
  - A/A2. 计算机基础/数据系统
  - A/A2. 计算机基础/软件工程

#### 编程语言

- pathKey: `A/A2. 计算机基础/编程语言`
- node type: `concept-group`
- detail source: `data/details/domain-A.json`
- status: draft
- definition: 编程语言决定你如何表达模型、工具和系统逻辑，不同语言在开发效率、生态和性能上各有侧重。
- importance: 语言本身不是目标，但会直接影响你能多快落地和排查问题。
- minimum demo: 用 Python 写最小实验，用 JavaScript/TypeScript 写交互层，理解不同语言在 AI 系统中的角色。
- prerequisites:
  - A/A2. 计算机基础
- core metrics:
  - 开发效率
  - 生态适配度
- next:
  - A/A2. 计算机基础/编程语言/Python
  - A/A2. 计算机基础/编程语言/JavaScript / TypeScript
  - A/A2. 计算机基础/编程语言/C / C++ / Rust / Swift（偏系统或高性能方向）

##### Python

- pathKey: `A/A2. 计算机基础/编程语言/Python`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-o85a37-1.json`
- status: complete
- definition: Python 是动态类型、解释执行的通用语言，强调可读性、开发效率和丰富生态。它常作为脚本语言、服务端语言和数据/AI 工作流的胶水层，通过扩展库把数值计算、网络、系统调用和工程自动化连接起来。
- importance: 在 AI 与数据工程里，Python 往往不是最底层、却是最高频的集成层：实验脚本、数据处理、训练/推理编排、评测、后端 API 和自动化都常以它为入口。掌握 Python 的关键不只是会写语法，而是会管理环境、依赖、类型、性能和可观测性。
- minimum demo: 创建虚拟环境并安装依赖，写一个最小 CLI 或服务：读取本地 JSON/CSV，调用一个 HTTP API，做参数校验、异常处理和日志记录；再补 2 个 pytest 用例，确认在新环境中能一键复现。
- hardware budget: 普通笔记本即可：2-4 核 CPU、8GB 内存、无需 GPU；重点是能稳定创建虚拟环境、安装依赖、运行测试和做少量 profiling。
- examples:
  - 数据清洗、批处理、ETL 与实验脚本
  - 后端服务、任务编排、消息消费与自动化工具
  - AI 工作流中的特征处理、评测脚本、推理胶水层
  - 命令行工具、监控与运维脚本
- pitfalls:
  - 把 Python 当成“随手脚本”而不做环境隔离，导致本地、CI、线上依赖不一致
  - 误以为 GIL 等于不能并发，或者反过来对 CPU 密集任务滥用线程
  - 忽略类型标注与接口边界，项目变大后重构成本陡增
  - 把默认可变参数、深浅拷贝、可变对象共享用错
  - 数据处理时不关注向量化或流式处理，导致性能和内存失控
  - 异常被吞掉，只留下 print，缺少结构化日志与排障线索
- prerequisites:
  - A/A2. 计算机基础/数据结构与算法/数组、链表、树、图、堆、哈希
  - A/A2. 计算机基础/操作系统与并发/进程、线程、协程
  - A/A2. 计算机基础/网络与协议/HTTP
  - A/A2. 计算机基础/软件工程/包管理
- core metrics:
  - 环境重建成功率（新机器或 CI 一次安装成功）
  - 单元测试通过率与关键路径覆盖
  - 脚本或服务的启动时间
  - 关键 I/O 任务的吞吐与 p95 延迟
  - 内存峰值与异常退出率
  - 静态检查告警数
- toolchain:
  - CPython
  - venv / pip / uv
  - pytest
  - ruff / black
  - mypy / pyright
  - Jupyter / IPython
  - profiling（cProfile / py-spy）
- failure signs:
  - 新同事或 CI 无法在 10 分钟内跑通环境
  - 同一脚本在不同机器结果不一致
  - I/O 或数据处理稍一放大就出现明显卡顿或内存暴涨
  - 异常定位主要靠打印和手工复现
  - 依赖冲突频繁，升级一个包牵出大面积破坏
- next:
  - A/A2. 计算机基础/软件工程/测试
  - A/A2. 计算机基础/软件工程/日志
  - A/A2. 计算机基础/数据系统/SQL
  - A/A2. 计算机基础/操作系统与并发/并发、异步、锁、队列
  - A/A3. 实验与研究方法/可重复性

##### JavaScript / TypeScript

- pathKey: `A/A2. 计算机基础/编程语言/JavaScript / TypeScript`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-o85a37-1.json`
- status: complete
- definition: JavaScript 是浏览器与 Node.js 运行时的主语言，天然适合事件驱动、异步 I/O 和 Web 交互。TypeScript 在其上增加静态类型与工具支持，目标不是替代运行时校验，而是让大型前后端代码库更可维护。
- importance: 如果系统要经过浏览器、BFF、Node 服务、Serverless 或 Edge，JavaScript/TypeScript 基本就是默认选项。对 AI 应用工程来说，它决定了前端交互、流式输出、接口契约、开发体验和跨端复用的上限。
- minimum demo: 用 TypeScript 做一个最小全栈 demo：浏览器页面通过 fetch 调 Node 服务，服务做参数校验、异步 I/O 和错误处理；补 2 个测试，确认类型错误在编译期暴露、脏数据在运行期被拦截。
- hardware budget: 普通笔记本即可：2-4 核 CPU、8GB 内存、无需 GPU；需要能完成依赖安装、类型检查、热更新、测试和一次正式构建。
- examples:
  - 浏览器端单页应用与管理后台
  - Node.js 服务、BFF、Serverless 或 Edge 函数
  - 实时协作或流式界面（WebSocket / SSE）
  - CLI、构建工具、代码生成与自动化脚本
- pitfalls:
  - 把 TypeScript 当成运行时保障，忽略外部输入校验
  - 过多使用 `any` 或类型断言，失去类型系统价值
  - 搞混浏览器、Node、Edge 运行时的 API 边界
  - ESM / CommonJS、打包器、转译目标配置互相冲突
  - 异步流程缺少取消、超时与错误传播，产生未处理 Promise
  - 对象/数组浅拷贝与闭包捕获不清，导致状态错乱
- prerequisites:
  - A/A2. 计算机基础/数据结构与算法/数组、链表、树、图、堆、哈希
  - A/A2. 计算机基础/操作系统与并发/并发、异步、锁、队列
  - A/A2. 计算机基础/网络与协议/HTTP
  - A/A2. 计算机基础/网络与协议/API 设计
- core metrics:
  - 类型检查错误数与 `any` 占比
  - 未处理 Promise 拒绝数
  - 关键接口或页面的 p95 延迟
  - 构建时间与产物体积
  - 测试通过率与关键交互覆盖
  - 运行时 schema 校验失败率
- toolchain:
  - Node.js
  - npm / pnpm / yarn
  - TypeScript 编译器（tsc）
  - ESLint / Prettier
  - Vitest / Jest
  - Vite / Webpack
  - 运行时 schema 校验工具（如 zod / ajv）
- failure signs:
  - 类型系统存在但线上仍频繁出现字段缺失或类型不符
  - 构建、运行、测试在本地和 CI 结果不一致
  - 页面或服务一遇到异步异常就沉默失败
  - 依赖升级经常打断构建链路
  - 模块系统、打包配置、运行时目标经常需要临时修补
- next:
  - A/A2. 计算机基础/网络与协议/WebSocket
  - A/A2. 计算机基础/网络与协议/RPC / JSON-RPC
  - A/A2. 计算机基础/软件工程/测试
  - A/A2. 计算机基础/软件工程/CI/CD
  - A/A2. 计算机基础/软件工程/监控

##### C / C++ / Rust / Swift（偏系统或高性能方向）

- pathKey: `A/A2. 计算机基础/编程语言/C / C++ / Rust / Swift（偏系统或高性能方向）`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-o85a37-1.json`
- status: complete
- definition: C / C++ / Rust / Swift 这一组语言共同覆盖“更接近机器、更强调性能与资源控制”的工程场景，但取舍不同：C 接近硬件与 ABI，C++ 强调零开销抽象，Rust 用所有权系统换取更强内存安全，Swift 在 Apple 生态中兼顾性能与现代语言设计。
- importance: 当 Python 或 JavaScript 负责产品和编排层时，这组语言常承担运行时、推理引擎、数据库、网络库、客户端 SDK 和高性能扩展的核心实现。学习它们的价值不只是写得更快，而是理解延迟、吞吐、内存、安全边界和跨语言接口是怎样被做实的。
- minimum demo: 任选一种语言做一个命令行程序：顺序读取大文件并统计行数或词频，输出总耗时、吞吐和峰值内存；再补 1 个 benchmark 与 2 个边界条件测试，比较 Debug 与 Release 的行为差异。
- hardware budget: 普通笔记本即可：建议 4 核 CPU、8-16GB 内存、无需 GPU；需要能跑编译器、调试器、sanitizer 和基准测试，最好有类 Unix 环境。
- examples:
  - C：嵌入式、操作系统接口、驱动或高性能网络库
  - C++：游戏引擎、数据库、图形/多媒体、低延迟服务
  - Rust：CLI、代理、存储组件、安全要求高的系统服务
  - Swift：iOS/macOS 本地模块、性能敏感客户端与 SDK
  - 通过 FFI 为 Python 或 JavaScript 提供高性能扩展
- pitfalls:
  - 过早优化，先写出复杂代码却没有基准证明瓶颈
  - 忽略内存生命周期、别名、线程安全，留下泄漏、悬垂指针或数据竞争
  - 只在 Debug 版验证，Release 优化后才暴露未定义行为
  - FFI、序列化或网络边界没有明确 ABI、字节序或对齐约束
  - 把 unsafe 或裸指针当捷径，缺少最小化封装与测试
  - 跨平台构建、编译器版本、标准库差异没有进入 CI
- prerequisites:
  - A/A2. 计算机基础/数据结构与算法/数组、链表、树、图、堆、哈希
  - A/A2. 计算机基础/数据结构与算法/搜索、排序、图算法
  - A/A2. 计算机基础/操作系统与并发/进程、线程、协程
  - A/A2. 计算机基础/操作系统与并发/并发、异步、锁、队列
- core metrics:
  - 吞吐与 p95/p99 延迟
  - 峰值内存、分配次数与泄漏情况
  - 二进制体积与启动时间
  - 崩溃率、数据竞争或未定义行为告警数
  - 基准测试方差与可重复性
  - 编译时间与增量构建效率
- toolchain:
  - gcc / clang
  - cmake / make / ninja
  - cargo
  - swift build / Xcode
  - gdb / lldb
  - sanitizer / valgrind / perf
  - benchmark 工具（criterion / Google Benchmark / XCTest）
- failure signs:
  - 只在高负载或 Release 模式下随机崩溃
  - 性能优化后吞吐提升不明显，但复杂度明显上升
  - 内存长期增长、泄漏或尾延迟抖动明显
  - 并发压测时出现死锁、数据竞争或结果不稳定
  - 跨平台编译、部署或 ABI 兼容问题频繁
- next:
  - A/A2. 计算机基础/网络与协议/RPC / JSON-RPC
  - A/A2. 计算机基础/数据系统/缓存
  - A/A2. 计算机基础/数据系统/消息队列
  - A/A2. 计算机基础/软件工程/测试
  - A/A2. 计算机基础/软件工程/CI/CD

#### 数据结构与算法

- pathKey: `A/A2. 计算机基础/数据结构与算法`
- node type: `concept-group`
- detail source: `data/details/domain-A.json`
- status: draft
- definition: 数据结构与算法决定状态如何表示、检索如何加速、队列如何调度，以及核心逻辑如何在资源约束下运行。
- importance: 很多 AI 系统性能问题最终都会落回到算法复杂度和数据结构选择。
- minimum demo: 比较不同数据结构和基本图/搜索算法在同类任务上的性能与复杂度差异。
- prerequisites:
  - A/A2. 计算机基础
- core metrics:
  - 复杂度意识
  - 数据结构选型能力
- next:
  - A/A2. 计算机基础/数据结构与算法/数组、链表、树、图、堆、哈希
  - A/A2. 计算机基础/数据结构与算法/搜索、排序、图算法

##### 数组、链表、树、图、堆、哈希

- pathKey: `A/A2. 计算机基础/数据结构与算法/数组、链表、树、图、堆、哈希`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-nxbfzm-1.json`
- status: complete
- definition: 数组、链表、树、图、堆、哈希是最常用的一组基础数据结构，用来组织数据、约束访问方式，并决定插入、删除、查找、遍历等操作的时间与空间复杂度。数组强调连续存储和随机访问；链表强调局部插入删除；树表达层次关系；图表达一般关系网络；堆高效维护最值；哈希通过键映射支持近似 O(1) 查找。这些结构不是孤立概念，而是工程里索引、缓存、调度、搜索、数据库与编译器等系统实现的共同底座。
- importance: 理解这组数据结构的价值，不在于背定义，而在于能根据访问模式、更新频率、内存布局和复杂度约束做结构选型。很多工程性能问题本质上不是“代码写慢了”，而是“数据结构选错了”。掌握它们可以帮助学习者正确分析复杂度、读懂标准库容器、理解索引与缓存设计，并为后续搜索、排序、图算法以及系统设计打下统一语言。
- minimum demo: 用一种熟悉的语言分别实现或调用标准库版本的动态数组、单链表、二叉树遍历、邻接表图、最小堆、哈希表，构造同一批数据，对比查找、插入、删除、遍历在不同数据规模下的耗时与内存占用。最小可验证目标是：能解释为什么相同业务操作在不同结构上会呈现不同复杂度与常数开销。
- hardware budget: 普通笔记本即可。单机 CPU 环境、几百 MB 内存足够完成从 10^3 到 10^6 规模的基础实验；不需要 GPU，也不需要分布式环境。
- examples:
  - 用数组实现批量顺序扫描与随机下标访问
  - 用链表实现频繁头尾插入的队列或 LRU 链结构的一部分
  - 用树表示文件目录、语法树、组织层级
  - 用图表示社交关系、依赖关系、路网
  - 用堆维护任务调度中的最高优先级元素
  - 用哈希表实现去重、计数器、缓存键查找
- pitfalls:
  - 只记平均复杂度，忽略最坏情况与常数因子
  - 把链表想成“插入总是快”，却忽略定位节点本身的成本
  - 只会画树，不理解递归遍历与迭代遍历的等价关系
  - 把图只看成二维表，忽略邻接矩阵与邻接表的空间差异
  - 把哈希表当成绝对 O(1)，忽略冲突、扩容与负载因子
  - 忽略数组连续内存带来的缓存友好性
- prerequisites:
  - A/A2. 计算机基础/编程语言/Python
  - A/A2. 计算机基础/编程语言/JavaScript / TypeScript
  - A/A2. 计算机基础/编程语言/C / C++ / Rust / Swift（偏系统或高性能方向）
- core metrics:
  - 查找时间复杂度
  - 插入时间复杂度
  - 删除时间复杂度
  - 遍历时间复杂度
  - 空间复杂度
  - 缓存局部性
  - 扩容或重哈希成本
  - 在目标负载下的实际吞吐与延迟
- toolchain:
  - Python list/dict/heapq
  - C++ STL vector/list/unordered_map/priority_queue
  - JavaScript Array/Map/Set
  - 可视化复杂度对比的简单 benchmark 脚本
  - 性能分析器与内存分析工具
- failure signs:
  - 无法根据操作模式解释为什么选数组而不是链表
  - 只会背 O 记号，无法说明实际工程中的常数开销
  - 遇到树和图遍历时容易陷入无限递归或漏访问节点
  - 实现哈希表或使用字典时不了解冲突与扩容
  - 把堆误认为有序数组，无法说明堆顶以外元素的性质
- next:
  - A/A2. 计算机基础/数据结构与算法/搜索、排序、图算法
  - A/A2. 计算机基础/数据系统/SQL
  - A/A2. 计算机基础/数据系统/NoSQL
  - A/A2. 计算机基础/数据系统/缓存

##### 搜索、排序、图算法

- pathKey: `A/A2. 计算机基础/数据结构与算法/搜索、排序、图算法`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-nxbfzm-1.json`
- status: complete
- definition: 搜索、排序、图算法是一组围绕“如何在给定数据结构上高效求解问题”的基础算法。搜索解决元素定位与状态空间探索，典型包括线性搜索、二分搜索、深度优先搜索、广度优先搜索；排序解决重排问题，典型包括快速排序、归并排序、堆排序；图算法解决最短路、连通性、拓扑关系与生成树等问题。它们的核心不是背模板，而是理解输入结构、约束条件、复杂度边界与可证明正确性。
- importance: 这组算法是从“会用数据结构”走向“会用计算方法解决问题”的关键台阶。工程里大量问题都可抽象为查找、排序或图上的遍历与优化，例如日志检索、任务依赖调度、推荐路径分析、网络路由、编译依赖解析。掌握这些算法可以建立复杂度分析、正确性推理与性能权衡能力，也能显著提升读代码、写系统和做技术面试时的表达清晰度。
- minimum demo: 分别完成三个最小实验：一是对有序数组实现二分搜索，并与线性搜索比较；二是对同一批随机与近乎有序数据比较快速排序、归并排序、堆排序的时间与稳定性差异；三是对一个小型有向图实现 BFS、DFS 与 Dijkstra 或拓扑排序，并输出访问顺序或最短路径结果。最小可验证目标是：能根据输入特点解释为什么某种算法更合适。
- hardware budget: 普通笔记本即可。单机 CPU 环境足够完成从 10^4 到 10^6 级别的搜索和排序实验，以及千到万级节点的图遍历实验；通常不需要 GPU。若做更大规模图实验，内存需求会明显上升，但入门验证不需要高配机器。
- examples:
  - 在有序数组上用二分搜索做配置项查找
  - 对日志、排行榜、候选集做排序或 Top-K 预处理
  - 用 BFS 求无权图最短步数
  - 用 DFS 做连通分量、环检测或回溯搜索
  - 用 Dijkstra 求带非负权图最短路
  - 用拓扑排序安排任务依赖执行顺序
- pitfalls:
  - 把二分搜索写错边界条件，导致死循环或漏掉目标
  - 只记住平均复杂度，不关注排序稳定性与最坏情况
  - 把 BFS 和 DFS 都当成“遍历一下”，说不清适用场景
  - 在图算法中混淆节点数与边数对复杂度的影响
  - 在带权图上误用 BFS 代替最短路算法
  - 忽略图存储方式对算法复杂度与内存占用的影响
- prerequisites:
  - A/A2. 计算机基础/数据结构与算法/数组、链表、树、图、堆、哈希
  - A/A2. 计算机基础/编程语言/Python
  - A/A2. 计算机基础/编程语言/C / C++ / Rust / Swift（偏系统或高性能方向）
- core metrics:
  - 时间复杂度
  - 空间复杂度
  - 最坏情况复杂度
  - 平均情况复杂度
  - 排序稳定性
  - 搜索命中延迟
  - 图遍历覆盖率
  - 最短路径正确性
- toolchain:
  - Python bisect/sort/heapq/collections.deque
  - C++ STL sort/stable_sort/priority_queue/queue
  - networkx 或自定义邻接表实现
  - benchmark 脚本
  - 单元测试框架用于边界条件验证
- failure signs:
  - 二分搜索边界经常写错
  - 不能解释快速排序、归并排序、堆排序的取舍
  - 图题只能套模板，换一种输入表示就不会做
  - 无法从需求抽象出是搜索问题、排序问题还是图问题
  - 只会给出代码，无法说明正确性与复杂度
- next:
  - A/A2. 计算机基础/操作系统与并发
  - A/A2. 计算机基础/数据系统/SQL
  - A/A2. 计算机基础/数据系统/缓存
  - A/A2. 计算机基础/软件工程/测试

#### 操作系统与并发

- pathKey: `A/A2. 计算机基础/操作系统与并发`
- node type: `concept-group`
- detail source: `data/details/domain-A.json`
- status: draft
- definition: 操作系统与并发帮助理解任务如何被调度、隔离和抢占，以及进程、线程、协程、锁和队列怎样共同决定训练作业、推理服务和工具调用链路的真实运行行为。
- importance: 很多 AI 系统问题表面上像模型慢或工具不稳，根因其实是资源争用、阻塞、死锁、背压或调度不当。没有这层，很难把性能问题和模型问题分开。
- minimum demo: 做一个包含并发请求和异步工具调用的最小服务，比较线程池、协程和队列长度变化对吞吐、尾延迟和失败率的影响。
- prerequisites:
  - A/A2. 计算机基础
- core metrics:
  - 并发正确性
  - 资源利用率
- next:
  - A/A2. 计算机基础/操作系统与并发/进程、线程、协程
  - A/A2. 计算机基础/操作系统与并发/并发、异步、锁、队列

##### 进程、线程、协程

- pathKey: `A/A2. 计算机基础/操作系统与并发/进程、线程、协程`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-dj90eh-1.json`
- status: complete
- definition: 进程、线程、协程是三种常见的执行与调度单位。进程是资源隔离的基本单位，拥有独立地址空间、文件句柄和系统资源；线程是进程内的执行流，多个线程共享同一进程的大部分资源，但有各自的栈与寄存器状态；协程通常是用户态的轻量执行单元，由语言运行时或框架协作式调度，切换成本低，适合高并发 I/O 场景。三者的核心区别在于资源隔离粒度、调度方式、切换成本与适用负载类型。
- importance: 这是理解操作系统并发模型的入口概念。工程中一旦需要解释“为什么这个服务占用这么多内存”“为什么线程开多了反而变慢”“为什么异步框架能支撑大量连接”，本质都会回到进程、线程、协程的边界与代价。对 AI 工程学习者来说，这些概念直接影响数据处理流水线、模型服务、爬虫、批处理、在线推理以及多 worker 训练程序的设计选择。
- minimum demo: 做一个最小对比实验：1）启动两个进程分别打印 PID，并观察它们互不共享内存；2）在同一进程里启动多个线程累加同一计数器，观察共享状态与竞态；3）用协程同时发起大量 sleep 或网络请求，观察单线程下高并发等待的效果。记录三种方式的创建数量、执行时间、内存占用和切换开销差异。
- hardware budget: 普通笔记本即可。4 核 CPU、8GB 内存足够完成进程/线程/协程的本地实验；若要观察更明显的调度与上下文切换差异，8 核以上 CPU 更方便，但不是必需。
- examples:
  - 用多进程把数据预处理和模型推理隔离，避免单个任务崩溃拖垮整个服务。
  - 用线程池处理日志落盘、文件上传、RPC 请求等 I/O 密集型任务。
  - 用协程在单线程中管理大量网络连接，例如爬虫、聊天服务、异步 API 聚合。
  - 在 Python 中用 multiprocessing 绕开 GIL 做 CPU 密集型并行。
  - 在模型服务中用多个 worker 进程隔离显存/内存与请求生命周期。
- pitfalls:
  - 把并发和并行混为一谈：并发强调任务交错推进，并行强调同时执行。
  - 认为线程一定比进程轻，所以任何场景都该优先用线程。
  - 忽略共享内存带来的竞态、死锁与可见性问题。
  - 把协程当成自动提速工具；对纯 CPU 密集任务，协程通常没有优势。
  - 在 Python 里误以为多线程能线性加速 CPU 计算，而忽略 GIL 影响。
  - 以为协程之间天然安全，实际上共享对象仍可能出现逻辑竞态。
- prerequisites:
  - A/A2. 计算机基础/编程语言
  - A/A2. 计算机基础/编程语言/Python
  - A/A2. 计算机基础/数据结构与算法
- core metrics:
  - 进程/线程/协程创建耗时
  - 上下文切换开销
  - 单任务内存占用
  - 吞吐量（tasks/s）
  - 平均延迟与尾延迟
  - CPU 利用率
  - 并发连接数或同时挂起任务数
- toolchain:
  - Python multiprocessing
  - Python threading
  - Python asyncio
  - ps/top/htop
  - time
  - strace（可选）
  - perf（可选）
- failure signs:
  - 线程数升高但吞吐没有提升，反而上下文切换增多。
  - 单机内存快速膨胀，说明进程复制或 worker 数量不合理。
  - 程序偶发卡死、结果不稳定，提示共享状态竞态。
  - 异步程序表面并发很多，但事件循环被阻塞导致整体变慢。
  - 服务崩溃只影响一个请求却拖垮全部任务，说明隔离边界选错。
- next:
  - A/A2. 计算机基础/操作系统与并发/并发、异步、锁、队列
  - A/A2. 计算机基础/网络与协议/HTTP
  - A/A2. 计算机基础/数据系统/消息队列

##### 并发、异步、锁、队列

- pathKey: `A/A2. 计算机基础/操作系统与并发/并发、异步、锁、队列`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-dj90eh-1.json`
- status: complete
- definition: 并发是系统在一个时间段内处理多个任务的能力，不要求它们物理上同时执行；异步是一种调用与协调方式，发起操作后不阻塞当前流程，结果稍后通过回调、future、promise 或 await 取回；锁是保护共享资源一致性的同步原语，用来约束同一时刻可进入临界区的执行单元；队列是按一定顺序缓存和传递任务或数据的结构，可用于线程间、协程间、进程间乃至服务间解耦。它们共同构成并发程序的基础控制面：如何启动任务、如何等待结果、如何保护共享状态、如何传递工作。
- importance: 这组概念决定系统能否在负载上升时保持正确性与可扩展性。实际工程里，性能问题往往不是“算得慢”，而是任务调度混乱、锁竞争严重、共享状态失控、生产消费失衡。AI 系统中的数据采集、特征处理、向量检索、推理请求编排、日志与监控上报，都离不开并发控制和队列化设计。理解这些概念能帮助你判断什么时候该加锁，什么时候该改成消息传递，什么时候应该用异步 I/O 而不是盲目加线程。
- minimum demo: 做一个生产者-消费者实验：先用一个共享列表在多线程下传递任务，故意不加锁，观察数据错乱；再改用线程安全队列，比较正确性和吞吐。接着写一个异步版本，用 asyncio 并发处理多个 I/O 任务，再加入 Semaphore 控制并发度。最后分别记录锁等待时间、队列长度、吞吐量、失败率和尾延迟，体会并发控制手段的差别。
- hardware budget: 普通笔记本即可。4 核 CPU、8GB 内存足以演示锁竞争、队列堆积和异步 I/O；如果希望更明显地看到竞争与排队效应，更多核心数会更直观，但不是必需。
- examples:
  - 用互斥锁保护共享计数器或缓存字典。
  - 用读写锁或无锁读多写少策略保护配置快照。
  - 用线程安全队列连接抓取线程和解析线程。
  - 用 asyncio + await 同时处理大量网络请求。
  - 用消息队列把高峰写入流量削峰填谷，异步交给后端 worker。
  - 用有界队列限制生产速度，避免消费者跟不上导致内存失控。
- pitfalls:
  - 在 I/O 密集场景盲目加线程，而不是先考虑异步或连接复用。
  - 锁粒度过大，导致大量任务串行化。
  - 只看平均延迟，不看锁等待和尾延迟。
  - 多个锁交叉获取，埋下死锁风险。
  - 无界队列看似方便，实际容易在高峰时把内存吃满。
  - 异步函数里混入阻塞调用，导致整个事件循环卡住。
  - 以为用了队列就没有背压问题，忽略生产和消费速率失衡。
- prerequisites:
  - A/A2. 计算机基础/操作系统与并发/进程、线程、协程
  - A/A2. 计算机基础/数据结构与算法
  - A/A2. 计算机基础/数据结构与算法/数组、链表、树、图、堆、哈希
  - A/A2. 计算机基础/编程语言
- core metrics:
  - 吞吐量（requests/s 或 jobs/s）
  - 平均延迟与 P95/P99 延迟
  - 锁等待时间
  - 锁竞争次数
  - 队列长度与积压深度
  - 任务失败率/超时率
  - 事件循环阻塞时间
  - 消费者处理速率
- toolchain:
  - Python asyncio
  - Python queue
  - threading.Lock/RLock/Semaphore
  - concurrent.futures
  - Redis List/Stream（队列场景，可选）
  - RabbitMQ/Kafka（服务间队列，可选）
  - 日志与监控
- failure signs:
  - CPU 不高但请求大量超时，常见于锁竞争或队列堵塞。
  - 队列长度持续上涨且不回落，说明消费能力不足或下游阻塞。
  - 系统偶发卡死，线程 dump 显示互相等待锁。
  - 异步服务吞吐骤降，排查发现事件循环被阻塞函数占住。
  - 平均性能看似正常，但 P99 延迟很差，提示局部竞争严重。
  - 消息处理重复、丢失或顺序错乱，说明并发控制和幂等设计不足。
- next:
  - A/A2. 计算机基础/网络与协议/HTTP
  - A/A2. 计算机基础/网络与协议/WebSocket
  - A/A2. 计算机基础/数据系统/消息队列
  - A/A2. 计算机基础/软件工程/日志
  - A/A2. 计算机基础/软件工程/监控

#### 网络与协议

- pathKey: `A/A2. 计算机基础/网络与协议`
- node type: `concept-group`
- detail source: `data/details/domain-A.json`
- status: draft
- definition: 网络与协议刻画模型 API、流式输出、实时连接和服务间通信如何被组织与约束。
- importance: 现代 AI 系统高度依赖远程调用与实时交互，这层基础直接影响接口稳定性和时延。
- minimum demo: 实现一个最小 HTTP 或 WebSocket 服务，并观察请求、流式和错误处理行为。
- prerequisites:
  - A/A2. 计算机基础
- core metrics:
  - 协议理解
  - 接口稳定性
- next:
  - A/A2. 计算机基础/网络与协议/HTTP
  - A/A2. 计算机基础/网络与协议/WebSocket
  - A/A2. 计算机基础/网络与协议/RPC / JSON-RPC
  - A/A2. 计算机基础/网络与协议/API 设计

##### HTTP

- pathKey: `A/A2. 计算机基础/网络与协议/HTTP`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-9xsmib-1.json`
- status: completed
- definition: HTTP（HyperText Transfer Protocol）是 Web 中最常用的应用层请求-响应协议。客户端通过方法、URL、头部和可选消息体向服务端发起请求，服务端返回状态码、头部和响应体。它本质上是无状态协议，但可借助 Cookie、Session、Token、缓存控制与代理体系构建有状态体验。现代 HTTP 还包含持久连接、多路复用、压缩、内容协商、缓存验证与 HTTPS 安全传输等机制。
- importance: HTTP 是几乎所有 Web API、浏览器访问、服务间对外接口和 AI 应用前后端交互的基础协议。理解 HTTP，才能正确设计接口、定位延迟与缓存问题、处理鉴权与跨域、读懂网关和负载均衡日志，并区分哪些问题属于业务逻辑，哪些其实是协议语义或传输层配置问题。
- minimum demo: 用任意语言启动一个最小 HTTP 服务，至少实现 GET /health 和 POST /echo 两个接口；再用 curl 或浏览器开发者工具观察请求行、状态码、Content-Type、缓存头、认证头与响应体差异。进一步增加一个 304 缓存验证或一个 Bearer Token 鉴权接口，就能覆盖 HTTP 的核心实践。
- hardware budget: 单机 CPU 即可，本地笔记本或开发容器足够。最小实验对算力几乎没有要求，重点在网络可达性、端口监听和抓包/日志观察能力。
- examples:
  - 浏览器访问网页并加载 HTML、CSS、JS、图片等静态资源
  - 前端调用 REST API 获取模型推理结果或用户数据
  - curl -X POST 提交 JSON 请求体到后端服务
  - CDN 根据 Cache-Control、ETag、Last-Modified 复用缓存
  - 反向代理或网关在 HTTP 层做路由、限流、鉴权与日志记录
- pitfalls:
  - 把 HTTP 当成有连接状态协议，错误依赖服务端内存会话
  - 混淆 401、403、404、429、500 等状态码语义
  - 忽略幂等性，导致重试把写操作执行多次
  - 不设置超时、重试和连接池，产生尾延迟或资源耗尽
  - 错误使用缓存头，导致脏数据或无法命中缓存
  - 把业务错误全部塞进 200 响应，破坏调用方的错误处理
  - 忽略 CORS、Content-Type、压缩与大包上传限制
- prerequisites:
  - A/A2. 计算机基础/编程语言/Python
  - A/A2. 计算机基础/编程语言/JavaScript / TypeScript
  - A/A2. 计算机基础/网络与协议
- core metrics:
  - 状态码分布
  - P50/P95/P99 延迟
  - 吞吐量 QPS/RPS
  - 错误率
  - 连接复用率
  - 缓存命中率
  - 请求/响应体大小
- toolchain:
  - curl
  - 浏览器开发者工具 Network 面板
  - Postman / Insomnia
  - FastAPI / Flask / Express
  - Nginx
  - 日志与抓包工具
- failure signs:
  - 大量 4xx/5xx 且原因不清
  - 偶发超时、重试风暴或连接泄漏
  - 缓存完全不命中或命中后数据过期错误
  - 接口返回结构不稳定，客户端频繁兼容失败
  - 同一写请求重试后出现重复写入
  - 网关日志、应用日志与客户端观察到的状态不一致
- next:
  - A/A2. 计算机基础/网络与协议/WebSocket
  - A/A2. 计算机基础/网络与协议/API 设计
  - A/A2. 计算机基础/数据系统/缓存
  - A/A2. 计算机基础/软件工程/日志
  - A/A2. 计算机基础/软件工程/监控

##### WebSocket

- pathKey: `A/A2. 计算机基础/网络与协议/WebSocket`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-9xsmib-1.json`
- status: completed
- definition: WebSocket 是一种在单个 TCP 连接上实现全双工、长连接消息传输的协议。它通常先通过 HTTP Upgrade 握手建立连接，随后客户端与服务端都可以主动推送消息，避免传统 HTTP 轮询带来的额外开销。它适合低延迟、频繁双向通信的场景，但消息语义、重连、心跳、顺序与背压通常需要应用层自己设计。
- importance: 当系统需要服务端主动推送、实时状态同步、低延迟交互或高频事件流时，WebSocket 往往比短轮询和普通 HTTP 更自然。AI 产品中的流式回复、协作编辑、在线对战、实时监控面板和长时会话代理，都经常依赖类似 WebSocket 的长连接能力。
- minimum demo: 实现一个最小聊天室或实时推送服务：客户端连接后发送 ping，服务端定期回 pong 并广播消息；前端显示在线状态和最近消息。再模拟断网重连、心跳超时和服务端广播，就能看清长连接的核心问题。
- hardware budget: 单机 CPU 即可。最小实验可在本地浏览器加一个轻量级 WebSocket 服务器完成；若要模拟多连接与广播，可用普通开发机压测几百到几千连接。
- examples:
  - 聊天系统中的实时消息收发
  - LLM 前端接收逐 token 或分段流式输出
  - 多人协作白板或文档同步
  - 交易面板、监控面板、在线游戏状态推送
  - 浏览器与后端之间维持订阅式事件通道
- pitfalls:
  - 建立了长连接却没有心跳与断线重连机制
  - 忽略背压与消息堆积，导致内存上涨和延迟失控
  - 把广播、订阅、鉴权、重放都混在一个简单消息格式里
  - 多实例部署时未处理连接粘性或跨节点广播
  - 误以为 WebSocket 自带可靠业务语义，忽略消息幂等与 ACK
  - 只在连接建立时鉴权，不处理 token 过期和权限变更
  - 前端页面切换后连接未关闭，造成幽灵连接
- prerequisites:
  - A/A2. 计算机基础/网络与协议/HTTP
  - A/A2. 计算机基础/操作系统与并发/并发、异步、锁、队列
  - A/A2. 计算机基础/编程语言/JavaScript / TypeScript
- core metrics:
  - 连接数
  - 活跃连接数
  - 消息发送/接收速率
  - 端到端消息延迟
  - 重连成功率
  - 心跳超时率
  - 广播扇出耗时
  - 单连接内存占用
- toolchain:
  - 浏览器 WebSocket API
  - Node.js ws / Socket.IO
  - Python websockets / FastAPI
  - Nginx 反向代理
  - Redis Pub/Sub 用于跨实例广播
  - 监控与日志工具
- failure signs:
  - 在线人数不高但服务内存持续上涨
  - 客户端频繁掉线或假在线
  - 消息乱序、重复、丢失且无法追踪
  - 多实例下只有部分用户收到广播
  - 网络抖动后连接无法自动恢复
  - 服务端广播时 CPU 飙高或尾延迟明显增大
- next:
  - A/A2. 计算机基础/网络与协议/API 设计
  - A/A2. 计算机基础/数据系统/消息队列
  - A/A2. 计算机基础/软件工程/日志
  - A/A2. 计算机基础/软件工程/监控

##### RPC / JSON-RPC

- pathKey: `A/A2. 计算机基础/网络与协议/RPC / JSON-RPC`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-9xsmib-1.json`
- status: completed
- definition: RPC（Remote Procedure Call）是一类把远程服务调用抽象成“像本地函数一样调用”的通信范式，核心关注接口定义、序列化、传输、超时、重试和服务发现。JSON-RPC 是 RPC 的一种轻量协议约定，通常使用 JSON 编码请求与响应，通过方法名、参数、id 和错误对象描述调用过程，常跑在 HTTP 或 WebSocket 之上。RPC 强调调用模型与契约，而不只是 URL 资源语义。
- importance: 很多内部服务调用并不以浏览器资源访问为中心，而是以“调用某个能力”为中心，这时 RPC 比面向资源的接口更贴近系统结构。理解 RPC / JSON-RPC，有助于读懂微服务、推理服务、工具调用、插件协议和服务编排系统中的接口设计，并正确处理版本兼容、错误传播和链路观测。
- minimum demo: 实现一个最小 JSON-RPC 服务，提供 add(a,b) 和 getModelInfo() 两个方法。客户端发送 method、params、id，服务端返回 result 或 error；再补一个超时和无效方法错误处理，就能理解 RPC 的最小闭环。
- hardware budget: 单机 CPU 即可。JSON-RPC 的最小实验只需本地进程或本地网络环境，不依赖 GPU。
- examples:
  - 前端或桌面应用通过 JSON-RPC 调用后台能力
  - 编辑器插件宿主与扩展之间用 JSON-RPC 交换命令
  - 微服务间通过 RPC 框架暴露强类型接口
  - 模型网关把推理、嵌入、重排等能力包装成统一远程调用
  - Agent 工具调用层把外部能力抽象成方法调用
- pitfalls:
  - 把 RPC 当成本地函数调用，忽略网络失败、超时和序列化成本
  - 接口粒度过细，导致一次业务操作触发多次远程往返
  - 没有请求 id 或错误对象约定，难以排查问题
  - 随意变更参数结构，破坏向后兼容
  - 重试策略不区分幂等与非幂等方法
  - 日志只记方法名不记调用链上下文，导致观测断裂
  - 把所有异常都包装成模糊字符串，调用方无法自动处理
- prerequisites:
  - A/A2. 计算机基础/网络与协议/HTTP
  - A/A2. 计算机基础/编程语言/Python
  - A/A2. 计算机基础/编程语言/JavaScript / TypeScript
  - A/A2. 计算机基础/软件工程/日志
- core metrics:
  - 调用成功率
  - 方法级延迟
  - 超时率
  - 重试率
  - 序列化/反序列化耗时
  - 错误码分布
  - 每次调用的网络往返次数
- toolchain:
  - JSON-RPC 2.0 约定
  - HTTP / WebSocket 传输层
  - FastAPI / Express 等服务框架
  - OpenRPC 或自定义接口文档
  - 日志与 tracing 工具
- failure signs:
  - 调用方像调本地函数一样堆叠远程调用，整体延迟急剧上升
  - 参数或返回结构变更后老客户端大面积失败
  - 错误码设计混乱，调用方只能靠字符串匹配处理异常
  - 网络偶发抖动就引发重试风暴
  - 链路里只能看到 HTTP 200，看不到具体 RPC 方法失败
  - 方法边界不清，产生大量 chatty calls
- next:
  - A/A2. 计算机基础/网络与协议/API 设计
  - A/A2. 计算机基础/数据系统/消息队列
  - A/A2. 计算机基础/软件工程/日志
  - A/A2. 计算机基础/软件工程/监控

##### API 设计

- pathKey: `A/A2. 计算机基础/网络与协议/API 设计`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-9xsmib-1.json`
- status: completed
- definition: API 设计是把系统能力以稳定、可理解、可演进的接口形式暴露给调用方的工程实践。它不只包括路径、方法和字段命名，还包括资源或方法建模、参数与返回结构、错误语义、版本策略、鉴权方式、幂等性、分页过滤、限流、可观测性和文档契约。好的 API 设计追求清晰边界、一致语义、低耦合和可长期维护。
- importance: API 是团队、服务、前后端、合作方乃至 Agent 工具生态之间的契约。设计得好，集成成本低、演进风险小、监控与排障容易；设计得差，则会在命名、兼容性、错误处理、性能和安全上持续付出隐性成本。AI 应用中，模型调用接口、检索接口、工具调用接口和工作流节点输入输出，本质上都依赖 API 设计质量。
- minimum demo: 为一个待办事项或文档问答服务设计最小 API：定义创建、查询、更新、删除或执行问答的请求与响应；写清鉴权、分页、错误码、幂等键、版本策略和示例。然后让一个前端或脚本按文档接入，检查是否能在不读源码的前提下成功完成集成。
- hardware budget: API 设计本身几乎不消耗算力，单机开发环境即可。真正成本在于联调、测试、文档维护和兼容性验证。
- examples:
  - REST 风格的 /users、/documents、/jobs 资源接口
  - 推理服务的 /chat/completions 或 /embeddings 能力接口
  - 内部服务的 createTask、getStatus、cancelJob RPC 接口
  - 支持 cursor 分页、过滤、排序和字段选择的数据查询接口
  - 对外开放平台中带限流、鉴权和版本号的开放 API
- pitfalls:
  - 命名和语义不一致，同类接口风格各异
  - 没有区分同步结果、异步任务和流式返回的模型
  - 缺少版本策略，发布后只能硬改客户端
  - 错误对象不稳定，调用方难以自动重试或提示用户
  - 分页、过滤、排序规则含糊，导致查询结果不可预期
  - 忽略幂等性与重试语义，写操作容易重复执行
  - 没有明确鉴权与权限边界，埋下安全隐患
  - 文档与实现脱节，示例不可运行
- prerequisites:
  - A/A2. 计算机基础/网络与协议/HTTP
  - A/A2. 计算机基础/网络与协议/RPC / JSON-RPC
  - A/A2. 计算机基础/数据结构与算法/数组、链表、树、图、堆、哈希
  - A/A2. 计算机基础/软件工程/测试
- core metrics:
  - 首次接入成功率
  - 接口稳定性与兼容性
  - 错误率与错误码可解释性
  - 文档覆盖率
  - 平均集成时间
  - 尾延迟
  - 限流命中率
  - 回滚与版本迁移成本
- toolchain:
  - OpenAPI / Swagger
  - Postman / Insomnia
  - JSON Schema / TypeScript types / Pydantic
  - 契约测试
  - API 网关
  - 日志与监控系统
- failure signs:
  - 新调用方反复提问字段含义或接口顺序
  - 同一业务能力出现多个互相冲突的接口风格
  - 版本升级后旧客户端频繁报错
  - 线上大量 400/422 但服务端无法快速定位原因
  - 文档示例无法直接运行
  - 为了兼容历史设计不断加特例，接口越来越难懂
- next:
  - A/A2. 计算机基础/软件工程/测试
  - A/A2. 计算机基础/软件工程/日志
  - A/A2. 计算机基础/软件工程/监控
  - A/A2. 计算机基础/软件工程/密钥与权限管理
  - A/A2. 计算机基础/数据系统/缓存

#### 数据系统

- pathKey: `A/A2. 计算机基础/数据系统`
- node type: `concept-group`
- detail source: `data/details/domain-A.json`
- status: draft
- definition: 数据系统负责保存状态、文档、缓存、队列和向量索引，是 AI 应用和 agent 的基础承载层。
- importance: 没有合适的数据系统，检索、会话状态和任务执行都很难稳定落地。
- minimum demo: 把一个 AI 原型接入 SQL、缓存或对象存储中的一种，观察行为差异。
- prerequisites:
  - A/A2. 计算机基础
- core metrics:
  - 查询延迟
  - 状态一致性
- next:
  - A/A2. 计算机基础/数据系统/SQL
  - A/A2. 计算机基础/数据系统/NoSQL
  - A/A2. 计算机基础/数据系统/缓存
  - A/A2. 计算机基础/数据系统/消息队列
  - A/A2. 计算机基础/数据系统/对象存储
  - A/A2. 计算机基础/数据系统/向量存储

##### SQL

- pathKey: `A/A2. 计算机基础/数据系统/SQL`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-15um9jp-1.json`
- status: complete
- definition: SQL 在这里指以关系模型为核心、通过声明式查询语言操作的数据库体系。数据通常以表、行、列、索引、约束和事务组织，擅长表达多表关联、聚合、强一致更新和可审计的数据流程。
- importance: 几乎所有业务系统都会遇到结构化数据、事务和报表需求。理解 SQL 不只是会写 SELECT，而是理解关系建模、索引、执行计划、事务隔离和约束，这些能力决定系统在正确性与性能上的下限。
- minimum demo: 用 SQLite 或 PostgreSQL 建 3 张表（用户、订单、订单项），写出建表约束、插入、JOIN、GROUP BY、索引，并对比加索引前后的查询时间；再做一次事务演示，验证一组更新要么全部成功、要么全部回滚。
- hardware budget: 本地笔记本即可。SQLite 几乎零成本；PostgreSQL 用 Docker 单机 1 核 CPU、1-2GB 内存就能完成入门实验，重点不是硬件而是看懂执行计划与索引效果。
- examples:
  - 订单、支付、库存等强事务业务
  - 用户、角色、权限等结构化主数据
  - 财务对账、运营报表、数据导出
  - 需要 JOIN、聚合、唯一约束和外键的数据模型
- pitfalls:
  - 把 SQL 学成语法记忆，不理解关系建模与范式/反范式取舍
  - 只会写查询，不看执行计划，导致全表扫描和错误索引
  - 忽视事务隔离与锁，出现脏读、幻读或死锁
  - 把所有场景都塞进关系库，导致大对象、海量时序或高维检索场景不合适
- prerequisites:
  - A/A2. 计算机基础/数据结构与算法/数组、链表、树、图、堆、哈希
  - A/A2. 计算机基础/操作系统与并发/并发、异步、锁、队列
- core metrics:
  - 查询延迟（P50/P95/P99）
  - 吞吐量（QPS/TPS）
  - 索引命中率与扫描行数
  - 锁等待时间与死锁次数
  - 慢查询数与事务回滚率
- toolchain:
  - SQLite
  - PostgreSQL
  - MySQL
  - psql / mysql client
  - EXPLAIN / EXPLAIN ANALYZE
  - DBeaver / DataGrip
- failure signs:
  - 简单查询在数据量上来后明显变慢
  - 业务经常依赖应用层去保证唯一性和一致性
  - 慢查询、锁等待、死锁频繁出现
  - 表结构难以演进，JOIN 和索引策略失控
- next:
  - A/A2. 计算机基础/数据系统/NoSQL
  - A/A2. 计算机基础/数据系统/缓存
  - A/A2. 计算机基础/数据系统/消息队列

##### NoSQL

- pathKey: `A/A2. 计算机基础/数据系统/NoSQL`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-15um9jp-1.json`
- status: complete
- definition: NoSQL 是一组不以传统关系模型为中心的数据系统总称，常见形态包括键值、文档、宽列和图数据库。它们通常以更灵活的 schema、水平扩展、特定访问模式优化和高可用复制为卖点，但会在事务能力、跨实体 JOIN、通用查询能力上做取舍。
- importance: 理解 NoSQL 的价值不在于“比 SQL 新”，而在于学会按访问模式选存储：当数据天然是文档、键值、时间序列、图关系或需要大规模分片时，NoSQL 往往能用更简单的物理模型换更好的吞吐、可扩展性或开发效率。
- minimum demo: 选一个文档库或键值库做实验：设计用户画像或商品详情数据，分别完成写入、按主键读取、按二级条件查询/聚合，并对比同一数据用关系表建模时的表结构复杂度、查询方式和扩展成本。
- hardware budget: 单机 Docker 即可完成入门。MongoDB、Redis、Neo4j 等都可在 1-2 核 CPU、2-4GB 内存范围内体验核心能力；分片和副本集只需概念理解，不必一开始就做多机集群。
- examples:
  - MongoDB 存商品、内容或用户画像文档
  - Redis 作为键值与轻量数据结构存储
  - Cassandra/HBase 处理大规模宽表与时序写入
  - Neo4j 处理社交关系、推荐路径、知识图谱边关系
- pitfalls:
  - 把 NoSQL 理解成“不要 schema”或“天然更快”
  - 没有从访问模式出发建模，导致二级查询和聚合代价很高
  - 忽视一致性、副本延迟与分区容错语义
  - 把需要复杂事务和强约束的业务硬搬到 NoSQL
- prerequisites:
  - A/A2. 计算机基础/数据结构与算法/数组、链表、树、图、堆、哈希
  - A/A2. 计算机基础/数据系统/SQL
- core metrics:
  - 读写延迟（P95/P99）
  - 吞吐量与热点分布
  - 副本延迟与复制积压
  - 分片均衡度与热点 key/partition 数
  - 查询命中率或扫描量
  - 可用性与错误率
- toolchain:
  - MongoDB
  - Redis
  - Cassandra
  - HBase
  - Neo4j
  - mongosh
  - Redis CLI
- failure signs:
  - 数据模型频繁返工，访问路径无法稳定下来
  - 热点 key 或热点分片拖垮整体吞吐
  - 业务开始手写大量跨实体 join 或事务补偿
  - 查询只能靠全量扫描或应用层拼装
- next:
  - A/A2. 计算机基础/数据系统/缓存
  - A/A2. 计算机基础/数据系统/消息队列
  - A/A2. 计算机基础/数据系统/对象存储

##### 缓存

- pathKey: `A/A2. 计算机基础/数据系统/缓存`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-15um9jp-1.json`
- status: complete
- definition: 缓存是在原始数据源之前或之上的高速副本层，用空间换时间，通过更低延迟和更少上游访问来提升系统性能。它可以存在于进程内、单机内存、分布式内存、CDN 或数据库前，核心问题不是“能不能缓存”，而是命中率、失效策略、一致性与击穿保护。
- importance: 很多系统瓶颈并不是计算本身，而是重复读取同一批热数据。缓存往往是最便宜的性能手段之一，但也是最容易把系统做脏、做旧、做不一致的地方；理解缓存意味着理解访问局部性、过期策略、更新时机和回源保护。
- minimum demo: 做一个最小 API：第一次请求从 SQL 或文件读取并写入 Redis/本地 LRU，后续命中缓存；记录命中率与延迟变化。再手动模拟缓存过期、击穿和脏数据，比较 cache-aside、write-through 或设置 TTL 的效果。
- hardware budget: 本地笔记本即可。进程内 LRU 几乎零成本；Redis 单机 Docker 1 核 CPU、512MB-1GB 内存足够完成入门实验。缓存学习重点是访问模式与一致性策略，不是高端硬件。
- examples:
  - 热点商品详情和用户资料缓存
  - 接口响应缓存与页面片段缓存
  - 会话、令牌、限流计数器
  - 向量检索结果或 embedding 计算结果缓存
- pitfalls:
  - 以为加了缓存一定更快，但命中率太低反而增加复杂度
  - 没有防击穿、雪崩、穿透策略，热点失效时把数据库打垮
  - 忘记定义更新与失效规则，出现脏读和长期陈旧数据
  - 把缓存当数据库长期存真相数据，丢失后无法恢复
- prerequisites:
  - A/A2. 计算机基础/操作系统与并发/并发、异步、锁、队列
  - A/A2. 计算机基础/数据系统/SQL
- core metrics:
  - 命中率与回源率
  - 缓存读写延迟（P95/P99）
  - 上游数据库负载变化
  - 过期、淘汰次数与内存占用
  - 击穿、穿透、雪崩事件数
  - 陈旧数据比例
- toolchain:
  - Redis
  - Memcached
  - 本地 LRU/LFU cache
  - CDN
  - Spring Cache / Django cache
  - Redis Insight
- failure signs:
  - 命中率长期偏低且维护成本高
  - 一到热点过期就出现流量尖峰和回源风暴
  - 缓存中的数据经常过旧或与数据库不一致
  - 内存淘汰频繁，业务性能不稳定
- next:
  - A/A2. 计算机基础/数据系统/消息队列
  - A/A2. 计算机基础/软件工程/日志
  - A/A2. 计算机基础/软件工程/监控

##### 消息队列

- pathKey: `A/A2. 计算机基础/数据系统/消息队列`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-15um9jp-1.json`
- status: complete
- definition: 消息队列是用于在生产者与消费者之间异步传递事件或任务的中间层，常提供持久化、顺序、重试、消费组、回放、死信队列等能力。它本质上是在时间上解耦系统，让写入方先提交事实或任务，再由一个或多个消费者异步处理。
- importance: 当系统需要削峰填谷、异步解耦、广播事件、重试补偿或流式处理时，消息队列几乎是基础设施级组件。学会消息队列的关键不是会发消息，而是理解至少一次、至多一次语义、幂等、顺序、积压、回放和失败恢复。
- minimum demo: 用 Kafka、RabbitMQ 或 Redis Streams 做一个下单后异步发货/通知的 demo：生产者写入消息，消费者处理并记录结果；故意让消费者失败一次，验证重试、幂等去重和死信队列是否工作，再观察积压和消费延迟。
- hardware budget: 单机 Docker 就能完成核心实验。RabbitMQ 或 Redis Streams 1-2GB 内存足够；Kafka 更适合稍大内存环境，但本地 2 核 CPU、4GB 内存也能体验主题、分区、消费者组等概念。
- examples:
  - 下单后异步发送短信、邮件、推送
  - 日志、埋点、事件流收集
  - 任务分发与后台作业处理
  - 微服务间事件驱动同步
  - 流式 ETL 与实时计算输入
- pitfalls:
  - 把消息队列当数据库，消息体越积越大且难以检索
  - 默认相信“恰好一次”而不做幂等设计
  - 忽视消息顺序范围，以为跨分区或跨消费者天然有序
  - 没有死信队列、重试上限和可观测性，失败后难定位
  - 消息粒度过大或过小，导致吞吐、延迟和成本都失衡
- prerequisites:
  - A/A2. 计算机基础/操作系统与并发/进程、线程、协程
  - A/A2. 计算机基础/操作系统与并发/并发、异步、锁、队列
  - A/A2. 计算机基础/网络与协议/API 设计
- core metrics:
  - 消息吞吐量
  - 端到端处理延迟
  - 消费者 lag / backlog
  - 重试率与死信队列数量
  - 重复消费率与幂等失败数
  - 可用性与丢消息事件数
- toolchain:
  - Kafka
  - RabbitMQ
  - Pulsar
  - Redis Streams
  - Amazon SQS
  - Kafka UI / Burrow
  - RabbitMQ Management
- failure signs:
  - 消费者 lag 持续增长且无法回落
  - 重复消费导致业务多扣款、多发货或多通知
  - 消息一失败就卡死，没有清晰的重试与死信路径
  - 系统之间耦合仍然很重，只是把同步调用换成了异步堵塞
- next:
  - A/A2. 计算机基础/软件工程/日志
  - A/A2. 计算机基础/软件工程/监控
  - A/A2. 计算机基础/数据系统/对象存储

##### 对象存储

- pathKey: `A/A2. 计算机基础/数据系统/对象存储`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-15um9jp-1.json`
- status: complete
- definition: 对象存储是一种通过 bucket/key 管理非结构化数据的存储系统，数据以对象形式保存，每个对象通常包含内容、元数据和唯一键，通过 HTTP API 访问。它强调海量容量、高持久性、低运维和与计算分离，而不是像本地文件系统那样提供低延迟随机修改。
- importance: 图片、视频、日志归档、训练数据、模型权重、备份等都更适合放在对象存储而不是关系库或本地磁盘。理解对象存储能帮助你把“元数据”和“大文件内容”分层管理，也能理解现代数据湖、模型仓库和静态资源分发为何以 S3 风格接口为事实标准。
- minimum demo: 用 MinIO 或 S3 兼容服务创建 bucket，上传若干图片、JSON、模型文件；为对象设置元数据和生命周期规则，生成一个预签名 URL 下载；再设计一张 SQL 表只保存对象 key、大小、etag 和业务元数据，体验“文件放对象存储，索引放数据库”的组合方式。
- hardware budget: 本地单机即可。MinIO 单容器 1 核 CPU、1GB 内存就能完成入门实验；学习重点是 API、权限、生命周期、版本控制和成本模型，不是高性能硬件。
- examples:
  - 图片、音视频、PDF 等静态文件存储
  - 训练数据集与特征文件归档
  - 模型 checkpoint、LoRA 权重、向量索引快照
  - 日志归档、备份与数据湖底座
- pitfalls:
  - 把对象存储当 POSIX 文件系统直接频繁小块改写
  - 大量极小文件导致请求开销和元数据管理成本过高
  - 只管上传不管权限、生命周期和版本控制
  - 把对象内容和业务索引混在一起，后续检索与治理困难
- prerequisites:
  - A/A2. 计算机基础/网络与协议/HTTP
  - A/A2. 计算机基础/网络与协议/API 设计
  - A/A2. 计算机基础/软件工程/密钥与权限管理
- core metrics:
  - PUT/GET/HEAD 延迟
  - 吞吐量与并发请求数
  - 请求错误率
  - 存储容量与单位成本
  - 下载或外网流出成本
  - 对象数量与平均对象大小
- toolchain:
  - Amazon S3
  - MinIO
  - 阿里云 OSS / 腾讯云 COS / Google Cloud Storage
  - aws cli / mc / rclone
  - 预签名 URL
  - 生命周期与版本控制策略
- failure signs:
  - 大量读写请求花在小文件和频繁 list 上
  - 403/404 频发，权限与路径管理混乱
  - 对象越来越多但没人知道哪些该归档、删除或降冷
  - 应用强依赖本地文件语义，迁移到对象存储后性能和正确性都出问题
- next:
  - A/A2. 计算机基础/数据系统/向量存储
  - A/A2. 计算机基础/软件工程/密钥与权限管理
  - A/A2. 计算机基础/软件工程/监控

##### 向量存储

- pathKey: `A/A2. 计算机基础/数据系统/向量存储`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-15um9jp-1.json`
- status: complete
- definition: 向量存储是为高维向量的相似度检索设计的数据系统，通常同时提供 embedding 存储、近邻索引（如 IVF、HNSW、PQ）、top-k 检索和元数据过滤。它关注的问题不是精确匹配，而是在大规模候选集合中快速找到“语义上相近”的内容。
- importance: 在 RAG、语义搜索、推荐、去重、图像检索等场景里，效果很大程度取决于“能否又快又准地召回相似样本”。理解向量存储可以帮助你把模型输出的 embedding 真正落到系统工程中，并理解召回率、延迟、过滤、更新和成本之间的取舍。
- minimum demo: 选 1000-10000 条文本，先用一个 embedding 模型生成向量，再用 Faiss、pgvector 或 Milvus 建索引；对同一批查询比较精确检索与 ANN 检索的 top-k 结果、延迟和 recall，并加入一列业务元数据做过滤，观察检索质量变化。
- hardware budget: 小规模实验在 CPU 上即可完成，笔记本 4 核 CPU、8-16GB 内存足够。若要自己生成大量 embedding 或体验百万级向量、批量索引构建，可选更大内存或 GPU，但入门重点仍是相似度、索引结构与评估方法。
- examples:
  - RAG 中文档块召回
  - 电商或内容推荐中的相似商品召回
  - 图像或音频相似检索
  - 重复内容检测与聚类前召回
  - 用户或物品 embedding 检索
- pitfalls:
  - 只关注向量库，不验证 embedding 模型是否适配任务
  - 混淆 cosine、dot product、L2 距离，归一化策略错误
  - 只看延迟不看 recall，ANN 很快但召回质量不足
  - 忽视元数据过滤、重排和索引更新成本
  - 把向量存储当成完整知识系统，原文、权限和版本管理缺失
- prerequisites:
  - A/A1. 数学基础/线性代数/向量、矩阵、张量
  - A/A1. 数学基础/线性代数/内积、范数、相似度
  - A/A2. 计算机基础/数据结构与算法/搜索、排序、图算法
- core metrics:
  - 召回率（Recall@k）
  - 检索延迟（P95/P99）
  - 索引构建与更新时间
  - 内存或磁盘占用
  - 过滤后有效召回率
  - 查询成本与吞吐量
- toolchain:
  - Faiss
  - pgvector
  - Milvus
  - Qdrant
  - Weaviate
  - HNSW / IVF / PQ 索引
  - embedding 模型服务
- failure signs:
  - 看起来检索很快，但实际 top-k 与任务无关
  - 索引更新后结果漂移明显且难解释
  - 内存占用失控，成本随向量规模线性恶化
  - 缺少原文关联、版本与权限过滤，线上无法直接使用
- next:
  - A/A3. 实验与研究方法/指标设计
  - A/A3. 实验与研究方法/误差分析
  - A/A2. 计算机基础/软件工程/监控

#### 软件工程

- pathKey: `A/A2. 计算机基础/软件工程`
- node type: `concept-group`
- detail source: `data/details/domain-A.json`
- status: draft
- definition: 软件工程提供版本管理、测试、CI/CD、日志、监控和权限管理等机制，让 AI 系统可维护、可发布、可回滚。
- importance: AI 项目一旦进入团队协作和线上环境，没有软件工程纪律就难以长期稳定演进。
- minimum demo: 为一个最小项目接上 Git、测试和日志，再通过简单 CI 跑一次自动检查。
- prerequisites:
  - A/A2. 计算机基础
- core metrics:
  - 可维护性
  - 发布稳定性
- next:
  - A/A2. 计算机基础/软件工程/Git
  - A/A2. 计算机基础/软件工程/包管理
  - A/A2. 计算机基础/软件工程/测试
  - A/A2. 计算机基础/软件工程/CI/CD
  - A/A2. 计算机基础/软件工程/日志
  - A/A2. 计算机基础/软件工程/监控
  - A/A2. 计算机基础/软件工程/密钥与权限管理

##### Git

- pathKey: `A/A2. 计算机基础/软件工程/Git`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-7kqd6c-1.json`
- status: complete
- definition: Git 是分布式版本控制系统，用来记录代码、配置与文档的变更历史，并支持分支、合并、回滚和协作审阅。对工程学习者来说，重点不是死记命令，而是理解 commit、branch、merge、rebase、tag 这些对象如何支撑可追溯开发。
- importance: 现代软件交付流程几乎都围绕 Git 展开：代码审阅、发布标签、缺陷回溯、实验复现、CI 触发都依赖它。不会 Git，团队协作很快会退化为文件互传、覆盖式修改和不可回滚的线上变更。
- minimum demo: 建立一个双分支仓库：主分支上做一次功能提交，分支上故意修改同一行制造冲突，完成 merge 或 rebase，打一个 v0.1 tag，再用 revert 回滚一个坏提交，并能用 git log --graph 解释整段历史。
- hardware budget: 一台普通开发机即可，2 核 CPU、4–8 GB 内存足够；无需 GPU；若要体验远程协作，额外需要一个 Git 托管服务账号或本地 bare repo。
- examples:
  - 功能分支 + Pull Request 审阅
  - 线上 hotfix 后用 tag 标记发布版本
  - 用 git bisect 定位某次回归提交
  - 对大模型权重或数据样本使用 Git LFS 管理大文件
- pitfalls:
  - 把大量无关改动塞进一个巨型 commit
  - 在共享分支上随意 force-push
  - 分不清 reset、revert、rebase 的语义差异
  - 把生成文件、密钥或大二进制直接提交进仓库
  - 没有 release tag，导致版本与代码无法对齐
- prerequisites:
  - A/A2. 计算机基础/编程语言
  - A/A2. 计算机基础/操作系统与并发
- core metrics:
  - 平均 PR 规模（变更行数）
  - 合并冲突率
  - 回滚平均耗时
  - 发布可追溯率（发布可定位到 tag/commit）
- toolchain:
  - git CLI
  - GitHub / GitLab
  - pre-commit
  - Git LFS
  - lazygit 等可视化终端工具
- failure signs:
  - 主分支经常被直接修改且没有审阅记录
  - 出现问题后无法快速定位到对应 commit
  - 多人协作仍靠文件互传或压缩包合并
  - 仓库历史中混入了密钥或大文件
  - 团队成员说不清当前线上版本对应哪个提交
- next:
  - A/A2. 计算机基础/软件工程/包管理
  - A/A2. 计算机基础/软件工程/测试
  - A/A2. 计算机基础/软件工程/CI/CD
  - A/A3. 实验与研究方法/版本管理

##### 包管理

- pathKey: `A/A2. 计算机基础/软件工程/包管理`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-7kqd6c-1.json`
- status: complete
- definition: 包管理是对第三方依赖、版本约束、锁定文件、安装来源与构建产物进行管理的实践。它关心的不只是“能装上”，而是“任何人、任何环境都能按相同依赖图复现出来”。
- importance: 现代项目很少纯手写，依赖既是生产力来源，也是常见的不稳定来源。没有包管理，项目很容易出现 works on my machine、依赖冲突、供应链漏洞和无法回滚的升级事故。
- minimum demo: 选 Python 或 JavaScript 建一个小项目：新增 2 个依赖，生成 lockfile，在全新虚拟环境中重装并运行测试；然后只升级一个补丁版本，比较依赖树变化并验证行为不变。
- hardware budget: 普通开发机即可；2–4 核 CPU、4–8 GB 内存通常足够；无需 GPU；若涉及编译型依赖或容器构建，预留 10–20 GB 磁盘缓存会更顺手。
- examples:
  - 为 Web 服务固定 FastAPI / Pydantic 版本并生成锁定文件
  - 在前端或 Node 项目中使用 npm / pnpm workspace 管理多包仓库
  - 区分运行时依赖与开发依赖，减小生产镜像体积
  - 通过私有包源分发团队内部 SDK
- pitfalls:
  - 只写顶层依赖范围，不保留 lockfile
  - 把系统环境和项目虚拟环境混在一起
  - 习惯性安装 latest，升级后也不跑回归验证
  - 把 venv、node_modules 或缓存目录提交到仓库
  - 忽略许可证、漏洞和依赖来源审查
- prerequisites:
  - A/A2. 计算机基础/编程语言
  - A/A2. 计算机基础/软件工程/Git
- core metrics:
  - lockfile 覆盖率
  - 新环境复现成功率
  - 依赖升级 lead time
  - 漏洞修复时长
  - 安装/构建缓存命中率
- toolchain:
  - pip / uv / Poetry
  - pip-tools
  - npm / pnpm / yarn
  - conda / mamba
  - Docker 构建缓存
- failure signs:
  - 新机器或新容器经常无法一次性装好依赖
  - 本地能跑、CI 不能跑，或 CI 能跑、本地不能跑
  - 同一项目在不同同事机器上出现不同依赖树
  - 一次小升级引入大量隐式破坏且难以回滚
  - 安装时间持续膨胀却没人知道原因
- next:
  - A/A2. 计算机基础/软件工程/测试
  - A/A2. 计算机基础/软件工程/CI/CD
  - A/A3. 实验与研究方法/可重复性

##### 测试

- pathKey: `A/A2. 计算机基础/软件工程/测试`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-7kqd6c-1.json`
- status: complete
- definition: 测试是用可执行的检查来验证代码、接口、配置或数据流程是否满足预期，包括单元测试、集成测试、端到端测试、回归测试和冒烟测试。它的目标不是“证明没有 bug”，而是在变更发生时尽早发现高成本错误。
- importance: 测试把经验和假设固化成可重复运行的验证资产，是持续迭代的安全网。没有测试，重构会变慢，回归 bug 难以及时发现，CI 也失去阻断低质量变更的能力。
- minimum demo: 为一个纯函数和一个 HTTP 接口各写一组测试：覆盖正常路径、边界条件和错误输入，再故意引入一个 bug，看测试能否稳定失败；最后接入覆盖率统计，但不要以 100% 覆盖率为目标。
- hardware budget: 普通开发机即可；2–4 核 CPU、4–8 GB 内存足够；无需 GPU；若要跑浏览器端到端测试或多服务集成测试，8 GB 内存会更舒适。
- examples:
  - 为解析器、特征处理函数或提示模板后处理逻辑写单元测试
  - 为 HTTP API 写契约测试与集成测试
  - 为数据预处理流程保留回归测试样本
  - 为模型服务写启动后健康检查与冒烟测试
- pitfalls:
  - 把覆盖率数字误当成质量本身
  - 测试实现细节而不是外部行为
  - 大量依赖真实外部系统，导致测试脆弱且缓慢
  - 出现 flaky test 后长期放任不修
  - 只有 happy path，没有边界条件和错误路径
- prerequisites:
  - A/A2. 计算机基础/编程语言
  - A/A2. 计算机基础/软件工程/Git
  - A/A2. 计算机基础/软件工程/包管理
- core metrics:
  - 测试通过率
  - flaky rate
  - 测试套件平均时长
  - 关键路径覆盖率
  - 缺陷逃逸率（线上才发现的问题比例）
- toolchain:
  - pytest / unittest
  - Jest / Vitest
  - Playwright / Cypress
  - coverage.py / Istanbul
  - mock / stub 工具
- failure signs:
  - 线上回归 bug 很多，但 CI 长期全绿
  - 开发者经常跳过测试后直接合并
  - 测试结果不稳定，同一提交时好时坏
  - 测试套件过慢，无法作为合并门禁
  - 一改代码就有大量与业务无关的测试一起坏掉
- next:
  - A/A2. 计算机基础/软件工程/CI/CD
  - A/A2. 计算机基础/软件工程/日志
  - A/A2. 计算机基础/软件工程/监控
  - A/A3. 实验与研究方法/指标设计
  - A/A3. 实验与研究方法/可重复性

##### CI/CD

- pathKey: `A/A2. 计算机基础/软件工程/CI/CD`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-7kqd6c-1.json`
- status: complete
- definition: CI/CD 是把代码提交后的构建、测试、制品生成、发布和部署流程自动化。CI 强调持续集成与快速反馈，CD 强调持续交付或持续部署，使变更可以稳定、频繁、可回滚地到达目标环境。
- importance: 当团队和代码规模扩大后，靠人工执行发布步骤几乎必然产生环境漂移和遗漏。CI/CD 把流程显式化、可审计化，并把质量门禁前移到提交和合并阶段。
- minimum demo: 在任意托管平台上配置一条最小流水线：push 后自动安装依赖、运行测试、构建镜像或包；再制造一次测试失败和一次构建失败，确认流水线会阻断合并或发布；最后补一个 staging 部署或手工回滚步骤。
- hardware budget: 本地最小 demo 可在普通开发机完成；若接入云 CI，通常只需少量 runner 配额、镜像仓库与网络；4 核 CPU、8 GB 内存的开发机已足够理解核心流程，无需 GPU。
- examples:
  - 对每个 Pull Request 自动执行 lint、测试和制品构建
  - 把服务构建成容器镜像并推送到镜像仓库
  - 合并到主分支后自动部署到 staging
  - 定时任务自动做依赖升级和安全扫描
- pitfalls:
  - 把 CI 当成远程 shell，脚本无法复用也不可维护
  - 把构建、测试、部署耦合成一个巨型任务，失败后难定位
  - 把密钥直接写死在 pipeline 配置里
  - 没有缓存与并行，导致反馈周期过长
  - 只有发布自动化，没有回滚、审批或环境隔离策略
- prerequisites:
  - A/A2. 计算机基础/软件工程/Git
  - A/A2. 计算机基础/软件工程/包管理
  - A/A2. 计算机基础/软件工程/测试
- core metrics:
  - pipeline 成功率
  - 中位构建/测试时长
  - lead time for changes
  - 部署频率
  - 失败部署率
  - 平均恢复时间（MTTR）
- toolchain:
  - GitHub Actions
  - GitLab CI
  - Jenkins
  - Docker
  - Argo CD / GitOps 工具
- failure signs:
  - 发布仍依赖某个熟练同事手工操作
  - 同一提交在不同环境构建结果不一致
  - 流水线经常因为基础设施问题而不是代码问题变红
  - 排队和执行时间太长，开发者不愿等结果
  - 无法把一次部署精确追溯到 commit、镜像和配置版本
- next:
  - A/A2. 计算机基础/软件工程/日志
  - A/A2. 计算机基础/软件工程/监控
  - A/A2. 计算机基础/软件工程/密钥与权限管理
  - A/A3. 实验与研究方法/可重复性

##### 日志

- pathKey: `A/A2. 计算机基础/软件工程/日志`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-7kqd6c-1.json`
- status: complete
- definition: 日志是系统在运行时输出的事件记录，用来回答“发生了什么、何时发生、与哪个请求或任务相关”。工程上更强调结构化日志、上下文字段、日志级别和与指标、追踪的关联，而不是简单 print。
- importance: 日志是排障的一线证据，尤其适合分析单次异常、边界条件和低频错误。没有设计过的日志，线上问题通常只能靠猜；日志设计得差，还会带来噪音、存储成本和敏感信息泄漏。
- minimum demo: 写一个小服务，统一输出 JSON 日志，包含时间、级别、message、request_id、task_id、异常栈；构造一次 500 错误和一次重试场景，再用 grep 或日志系统把同一请求的完整链路串起来。
- hardware budget: 普通开发机即可；2–4 核 CPU、4–8 GB 内存足够；无需 GPU；若用 Loki、OpenSearch 或 ELK 做本地聚合，8 GB 内存会更舒适。
- examples:
  - HTTP 请求日志中附带 request_id / trace_id
  - 模型推理服务记录耗时、模型版本和状态码，而不是直接落敏感原文
  - 重试、熔断和降级过程输出明确阶段日志
  - 权限变更、登录失败等行为记录审计日志
- pitfalls:
  - 全是非结构化文本，后续无法按字段检索
  - 把密钥、口令、用户隐私直接写入日志
  - 所有事件都打成 error，造成告警噪音
  - 没有 request_id，跨服务问题无法串联
  - 时间戳、时区和日志来源不统一
- prerequisites:
  - A/A2. 计算机基础/编程语言
  - A/A2. 计算机基础/操作系统与并发
  - A/A2. 计算机基础/网络与协议/HTTP
- core metrics:
  - 结构化日志覆盖率
  - 日志采集到可检索的延迟
  - 日志噪音比（重复/无效日志占比）
  - 平均问题定位时长
  - 敏感字段脱敏失败率
- toolchain:
  - Python logging / structlog
  - Pino / Winston
  - Fluent Bit / Filebeat
  - Loki / OpenSearch / Elasticsearch
  - grep / jq
- failure signs:
  - 同一次事故需要 SSH 到多台机器逐台看日志
  - 无法按 request_id、用户或任务维度过滤日志
  - 日志量暴涨但真正有用的信息很少
  - 日志中出现明文密钥、口令或隐私字段
  - 开发者看到日志后仍不知道下一步该查什么
- next:
  - A/A2. 计算机基础/软件工程/监控
  - A/A2. 计算机基础/软件工程/密钥与权限管理
  - A/A3. 实验与研究方法/误差分析

##### 监控

- pathKey: `A/A2. 计算机基础/软件工程/监控`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-7kqd6c-1.json`
- status: complete
- definition: 监控是持续采集和展示系统健康状态的机制，核心是把关键行为转成时间序列指标、仪表盘和告警规则。它与日志不同：日志适合看单个事件，监控更适合回答“系统整体是否在变差、是否需要立刻处理”。
- importance: 系统上线后，能否第一时间发现延迟升高、错误率上升、资源耗尽、队列堆积，决定了故障影响范围。没有监控，团队往往只能在用户投诉后才知道服务已经异常。
- minimum demo: 为一个本地 Web 服务暴露 /metrics，采集请求数、错误数、延迟直方图和进程资源指标；再故意制造慢请求和 500 错误，在 Grafana 看曲线变化，并配置一个基于错误率或 p95 延迟的告警。
- hardware budget: 本地使用 Docker 运行 Prometheus、Grafana 和一个示例服务时，建议 4 核 CPU、8–16 GB 内存；无需 GPU；若只做概念体验，单机也足够。
- examples:
  - API 的 QPS、错误率、p95/p99 延迟仪表盘
  - 消息队列积压、任务失败重试次数告警
  - 模型推理超时率和资源使用情况监控
  - 基于 SLO burn rate 的值班告警
- pitfalls:
  - 只看主机 CPU、内存，不看业务关键指标
  - 标签维度失控，导致高基数问题和成本爆炸
  - 告警阈值拍脑袋设置，噪音很多
  - 没有 SLI/SLO，团队不知道什么才算真正异常
  - 有图表但没有 owner、runbook 和处理流程
- prerequisites:
  - A/A2. 计算机基础/软件工程/日志
  - A/A2. 计算机基础/网络与协议/HTTP
  - A/A2. 计算机基础/操作系统与并发
- core metrics:
  - 可用性 / SLI
  - p50 / p95 / p99 延迟
  - 错误率
  - 饱和度（CPU、内存、队列长度等）
  - 告警准确率
  - 平均发现时间（MTTA）与平均恢复时间（MTTR）
- toolchain:
  - Prometheus
  - Grafana
  - Alertmanager
  - OpenTelemetry
  - node_exporter / cAdvisor / 其他 exporter
- failure signs:
  - 用户先报障，团队才知道系统出问题
  - 故障发生时仪表盘看起来仍然一片绿色
  - 告警太多而被静音，真正事故也没人响应
  - 历史趋势缺失，无法判断问题是突发还是长期退化
  - 一加指标维度就导致存储和查询成本暴涨
- next:
  - A/A2. 计算机基础/软件工程/CI/CD
  - A/A3. 实验与研究方法/指标设计
  - A/A3. 实验与研究方法/误差分析

##### 密钥与权限管理

- pathKey: `A/A2. 计算机基础/软件工程/密钥与权限管理`
- node type: `concept`
- detail source: `data/details/leaves-A-A2-7kqd6c-1.json`
- status: complete
- definition: 密钥与权限管理是对 API key、数据库口令、访问令牌、证书和角色权限进行存储、分发、轮换、最小授权和审计的工程实践。它不仅关心“能不能访问”，还关心“谁可以在什么范围、什么时段、以什么方式访问”。
- importance: 多数工程事故不是算法问题，而是凭据泄漏、权限过大、长期静态密钥和共享账号导致的。把密钥与权限管理做好，才能让 CI/CD、日志和生产系统在自动化的同时保持可控。
- minimum demo: 做一个最小服务：把数据库口令或第三方 API key 放入环境变量或本地 secret store，不写进仓库；给服务一个只读权限的测试账号；然后完成一次密钥轮换，验证服务在新旧凭据切换后仍可运行，并检查日志中没有泄漏密钥。
- hardware budget: 普通开发机即可；2 核 CPU、4–8 GB 内存足够；无需 GPU；若想体验集中式 secret manager，可额外用 Docker 运行 Vault 等本地服务。
- examples:
  - 在 GitHub Actions 中通过加密 secret 注入发布凭据
  - 给服务账号分配只读数据库权限而不是管理员权限
  - 定期轮换 webhook 签名密钥或第三方 API token
  - 用 SOPS 加密配置文件，只在部署时解密
- pitfalls:
  - 把 .env、token 或证书直接提交进仓库
  - 全团队共用一个 root 或 admin 账号
  - 在脚本、Notebook 或聊天记录里硬编码密钥
  - 服务账号权限远大于实际需要
  - 没有轮换、过期和审计机制
- prerequisites:
  - A/A2. 计算机基础/软件工程/Git
  - A/A2. 计算机基础/网络与协议/HTTP
  - A/A2. 计算机基础/操作系统与并发
- core metrics:
  - 密钥轮换达标率
  - 长期静态凭据数量
  - 最小权限覆盖率
  - 权限变更审计完整率
  - 凭据相关事故数量
- toolchain:
  - dotenv
  - HashiCorp Vault
  - 1Password / Bitwarden
  - 云 Secret Manager
  - SOPS / age
  - GitHub Actions Secrets
- failure signs:
  - 凭据出现在 Git 历史、日志或聊天记录中
  - 多个系统默认使用 admin / root 凭据
  - 一个 token 被整个团队长期共享
  - 凭据过期后才第一次发现没人知道如何轮换
  - 没人能回答某个权限是谁、何时、为什么加上的
- next:
  - A/A2. 计算机基础/软件工程/CI/CD
  - A/A2. 计算机基础/软件工程/日志
  - A/A2. 计算机基础/软件工程/监控
  - A/A2. 计算机基础/网络与协议/API 设计

### A3. 实验与研究方法

- pathKey: `A/A3. 实验与研究方法`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-A.json`
- status: draft
- definition: 实验与研究方法把一个想法变成可验证证据链，覆盖问题定义、baseline、指标、对照、消融、误差分析、可重复性和版本管理。
- importance: 没有实验方法，AI 学习和系统改进就会退化成拍脑袋试错，无法稳定复现和积累。
- minimum demo: 围绕一个最小任务写清问题、baseline 和指标，再做一次对照或消融实验，并保留可复现记录。
- prerequisites:
  - A
- core metrics:
  - 实验可复现性
  - 归因清晰度
- next:
  - A/A3. 实验与研究方法/问题定义
  - A/A3. 实验与研究方法/Baseline
  - A/A3. 实验与研究方法/指标设计
  - A/A3. 实验与研究方法/对照实验
  - A/A3. 实验与研究方法/消融实验
  - A/A3. 实验与研究方法/误差分析
  - A/A3. 实验与研究方法/可重复性
  - A/A3. 实验与研究方法/版本管理

#### 问题定义

- pathKey: `A/A3. 实验与研究方法/问题定义`
- node type: `concept-group`
- detail source: `data/details/leaves-A-A3-x6szvt-1.json`
- status: complete
- definition: 问题定义是把一个想法转成可验证实验的第一步：明确任务对象、输入输出、约束条件、数据范围、成功标准与比较对象。好的问题定义通常能写成一句可判真假的研究问题或假设，例如“在相同数据和预算下，方法 X 是否能把召回率提升 3 个点，同时把延迟控制在 100ms 内”。
- importance: 问题一旦定义含糊，后续 baseline、指标、对照和误差分析都会失焦。很多“模型有效”其实只是换了数据、换了口径或遗漏了约束。先把问题定义收紧，才能避免做出无法比较、无法落地、无法复现的实验。
- minimum demo: 任选一个小任务，例如垃圾邮件分类、FAQ 检索或摘要生成，写一页任务卡：目标用户是谁、输入输出是什么、训练/测试数据来自哪里、允许使用哪些外部信息、主要指标和达标门槛是什么、要和哪个 baseline 比。然后拿 3 到 5 个容易产生歧义的样本，检查这份定义是否足以判定对错。
- hardware budget: 问题定义本身几乎不需要算力；最小演示只需文档和少量样本检查。若顺手做一个玩具验证，CPU 即可，或 1 张入门级 GPU。重点不是训练规模，而是边界是否写清。
- examples:
  - 二分类任务：预测用户是否会点击，约束是推理延迟小于 50ms。
  - RAG 任务：给定企业知识库回答客服问题，禁止使用测试集时间点之后新增的文档。
  - 摘要任务：生成 100 字以内中文摘要，同时要求事实覆盖率高于当前线上方案。
- pitfalls:
  - 把研究问题写成愿景口号，而不是可判定命题。
  - 目标函数和最终使用场景不一致。
  - 没有规定数据切分和可用外部信息，导致信息泄漏。
  - 成功标准只写“更好”，没有量化阈值。
  - 忽略成本、时延、内存等部署约束。
- core metrics:
  - 任务可判定性
  - 输入输出边界清晰度
  - 数据与场景匹配度
  - 成功标准量化程度
  - 约束覆盖率
- toolchain:
  - 实验设计文档
  - 样本审阅表
  - Jupyter Notebook
  - 标注指南
  - Git
- failure signs:
  - 不同成员对同一条样本给出不同判定。
  - 同一个实验在不同数据口径下结论相反。
  - 结果看起来提升了，但无法回答“到底解决了什么问题”。
  - 上线时才发现时延或成本根本不满足约束。
- next:
  - A/A3. 实验与研究方法/Baseline
  - A/A3. 实验与研究方法/指标设计
  - A/A3. 实验与研究方法/对照实验

#### Baseline

- pathKey: `A/A3. 实验与研究方法/Baseline`
- node type: `concept-group`
- detail source: `data/details/leaves-A-A3-x6szvt-1.json`
- status: complete
- definition: Baseline 是新方法必须战胜的参考系。它可以是最简单的启发式、经典机器学习方法、现有生产方案，或与论文复现口径一致的强基线。好的 baseline 与目标任务、数据切分、训练预算和评测口径保持一致。
- importance: 没有 baseline，提升幅度就没有意义；只有弱 baseline，结论会被高估；baseline 口径不一致，则比较失真。研究里最常见的误判之一，就是把工程实现差异误写成方法优势。
- minimum demo: 在同一份数据切分上，至少实现两个 baseline：一个极简基线，例如多数类、BM25 或模板规则；一个合理强基线，例如 TF-IDF+Logistic 回归、公开可复现模型或当前线上版本。记录它们的训练预算、超参数和推理成本。
- hardware budget: 多数 baseline 可以在 CPU 上完成；若要跑一个小型深度学习强基线，1 张消费级 GPU 通常足够。关键是口径一致，而不是堆更大的模型。
- examples:
  - 分类任务中的多数类预测和 TF-IDF+Logistic 回归。
  - 检索任务中的 BM25 与 embedding 检索。
  - 生成任务中的模板生成、零样本提示和当前线上模型。
  - 多模态任务中的冻结 backbone 加线性分类头。
- pitfalls:
  - 故意选择过弱 baseline 以放大提升。
  - baseline 与新方法使用了不同数据清洗或不同切分。
  - baseline 没有调参，而新方法进行了大量调参。
  - 只比较精度，不比较成本和时延。
  - 引用论文结果而不复现其关键设置。
- prerequisites:
  - A/A3. 实验与研究方法/问题定义
  - A/A3. 实验与研究方法/指标设计
- core metrics:
  - 相对 baseline 的提升幅度
  - 训练与推理成本
  - 多次运行方差
  - 实现复杂度
  - 与线上方案的一致性
- toolchain:
  - scikit-learn
  - PyTorch
  - Transformers
  - pandas
  - Weights & Biases
  - MLflow
- failure signs:
  - 简单 baseline 已经接近上限，而新方法几乎没有稳定提升。
  - 不同 baseline 之间口径不一致。
  - 基线结果无法复现到文档中的数字。
  - baseline 比新方法更便宜更稳，却没有被正视。
- next:
  - A/A3. 实验与研究方法/对照实验
  - A/A3. 实验与研究方法/消融实验
  - A/A3. 实验与研究方法/误差分析

#### 指标设计

- pathKey: `A/A3. 实验与研究方法/指标设计`
- node type: `concept-group`
- detail source: `data/details/leaves-A-A3-x6szvt-1.json`
- status: complete
- definition: 指标设计是把“好不好”转成可计算、可比较、可复核的度量体系。通常要区分主指标、辅助指标和约束指标，并明确汇总方式、统计区间、阈值、切片维度与人工评审规则。
- importance: 如果指标和真实目标脱节，模型就会学会优化代理信号而不是业务目标。好的指标体系既能驱动模型选择，也能暴露副作用，例如延迟上涨、长尾退化或校准变差。
- minimum demo: 为一个小任务设计 1 个主指标、2 个辅助指标和 1 个约束指标。例如检索任务用 Recall@k 作为主指标、MRR 作为辅助指标、P95 延迟作为约束指标。再按至少两个切片，例如新旧用户、短长文本，产出结果表并核对汇总口径。
- hardware budget: 指标计算通常比训练便宜，CPU 即可完成大部分最小实验；若要批量跑神经模型输出，再配 1 张小 GPU。时间更多花在口径校验和切片汇总，而不是算力。
- examples:
  - 分类：Accuracy、F1、AUC、ECE。
  - 检索：Recall@k、MRR、nDCG、延迟。
  - 生成：ROUGE 或 BLEU 与人工事实性评审结合。
  - 线上系统：转化率、点击率、故障率与成本联合看。
- pitfalls:
  - 只看单一平均值，不做分组切片。
  - 离线指标好，但与线上目标弱相关。
  - 主指标和约束指标冲突时没有优先级。
  - 汇总口径含混，例如 micro 和 macro 混用。
  - 人工评审标准不一致，导致噪声很大。
- prerequisites:
  - A/A3. 实验与研究方法/问题定义
  - A/A1. 数学基础/概率统计/期望、方差、协方差
  - A/A1. 数学基础/概率统计/估计、校准、置信
- core metrics:
  - 主指标与真实目标的相关性
  - 统计稳定性
  - 切片覆盖率
  - 约束指标达标率
  - 人工评审一致性
- toolchain:
  - scikit-learn metrics
  - pandas
  - NumPy
  - Jupyter Notebook
  - 统计检验脚本
  - 标注平台
- failure signs:
  - 模型选择完全依赖单一指标且结果经常反转。
  - 不同人复算同一指标得到不同数字。
  - 线上体验变差而离线指标仍然上升。
  - 长尾样本明显退化但平均分数看不出来。
- next:
  - A/A3. 实验与研究方法/Baseline
  - A/A3. 实验与研究方法/对照实验
  - A/A3. 实验与研究方法/误差分析

#### 对照实验

- pathKey: `A/A3. 实验与研究方法/对照实验`
- node type: `concept-group`
- detail source: `data/details/leaves-A-A3-x6szvt-1.json`
- status: complete
- definition: 对照实验通过尽量只改变一个变量，验证性能变化到底来自哪一项因素。它要求统一数据、预处理、训练预算、随机种子策略和评测脚本，只让被研究变量发生变化。
- importance: 对照实验是把“相关”逼近“因果”的基本手段。没有控制变量，很容易把硬件差异、数据泄漏、超参数调优或代码 bug 误判成方法改进。
- minimum demo: 选定一个模型改动点，例如是否加入数据增强、是否更换损失函数。构造两组实验：除该因素外其余配置完全一致；每组至少跑 3 个随机种子，并记录均值、方差和成本变化。
- hardware budget: 最小对照实验可以在小数据集上完成，CPU 或 1 张消费级 GPU 即可。若需要多随机种子，算力需求会按重复次数线性上升。
- examples:
  - 同一模型下比较“有无数据增强”。
  - 同一检索系统下比较“是否使用重排器”。
  - 同一提示模板下比较“是否加入思维链示例”。
  - 同一训练脚本下比较交叉熵与 focal loss。
- pitfalls:
  - 一次改了多个变量，无法归因。
  - 随机种子只跑一次，结论被偶然性主导。
  - 隐藏口径变化，例如 tokenizer 或清洗脚本不同。
  - 只报告最好的一次运行，而不是均值和方差。
  - 先看结果再改假设，导致实验设计追着结论跑。
- prerequisites:
  - A/A3. 实验与研究方法/问题定义
  - A/A3. 实验与研究方法/Baseline
  - A/A3. 实验与研究方法/指标设计
  - A/A1. 数学基础/概率统计/估计、校准、置信
- core metrics:
  - 单变量控制程度
  - 重复运行方差
  - 效应量
  - 统计显著性
  - 成本变化
- toolchain:
  - Hydra
  - Weights & Biases Sweeps
  - MLflow
  - PyTorch Lightning
  - pytest
  - Git
- failure signs:
  - 每次改动都伴随大量未记录配置变化。
  - 不同机器跑出完全不同结论。
  - 最佳结果无法通过重复实验复现。
  - 团队成员无法回答“结论到底来自哪个变量”。
- next:
  - A/A3. 实验与研究方法/消融实验
  - A/A3. 实验与研究方法/误差分析
  - A/A3. 实验与研究方法/可重复性

#### 消融实验

- pathKey: `A/A3. 实验与研究方法/消融实验`
- node type: `concept-group`
- detail source: `data/details/leaves-A-A3-x6szvt-1.json`
- status: complete
- definition: 消融实验是在一个完整方法上系统地移除、替换或冻结某个组件，观察性能与成本如何变化，从而回答“哪些部分真的有贡献、贡献大小如何、组件之间是否有交互”。
- importance: 很多复杂系统的收益并非来自全部设计，而是少数关键部件。做消融可以去掉无效复杂度，避免把工程堆料写成方法创新，也能帮助后续产品化裁剪。
- minimum demo: 以一个包含 3 个组件的系统为例，例如“检索、重排、生成”。分别去掉每个组件，再测试一个两两组合，比较主指标、时延和成本的变化，最后给出组件收益排序。
- hardware budget: 若基线系统已能跑通，消融通常只是在其上重复训练或推理。最小示例 1 张 GPU 足够；如果只做推理级消融，CPU 也可完成。重点是实验矩阵设计，而不是大规模算力。
- examples:
  - 去掉位置编码或注意力头，看性能变化。
  - RAG 系统中比较“仅检索”“检索加重排”“检索加重排加生成”。
  - 微调方案中比较“只调 LoRA”“LoRA 加数据增强”“LoRA 加数据增强加重排序”。
  - 推荐系统中逐步移除用户画像、序列特征、图特征。
- pitfalls:
  - 只做单项删除，不检查组件交互。
  - 删除组件后没有重新调参，导致不公平比较。
  - 只比较精度，不比较复杂度下降是否值得。
  - 实验矩阵过大但没有优先级，算力被浪费。
  - 把对照实验和消融实验混为一谈。
- prerequisites:
  - A/A3. 实验与研究方法/Baseline
  - A/A3. 实验与研究方法/指标设计
  - A/A3. 实验与研究方法/对照实验
- core metrics:
  - 单组件贡献值
  - 交互项影响
  - 性能与成本比
  - 移除后的退化幅度
  - 简化后稳定性
- toolchain:
  - Hydra
  - Weights & Biases
  - MLflow
  - pandas
  - PyTorch
  - 实验矩阵表
- failure signs:
  - 组件很多，但没有一个能证明自己带来稳定收益。
  - 去掉复杂模块后效果几乎不变甚至更好。
  - 消融结论随随机种子剧烈波动。
  - 团队无法说清方法里哪一部分最值得保留。
- next:
  - A/A3. 实验与研究方法/误差分析
  - A/A3. 实验与研究方法/可重复性
  - A/A3. 实验与研究方法/版本管理

#### 误差分析

- pathKey: `A/A3. 实验与研究方法/误差分析`
- node type: `concept-group`
- detail source: `data/details/leaves-A-A3-x6szvt-1.json`
- status: complete
- definition: 误差分析是在拿到总体分数之后，进一步回答“错在哪里、为什么错、错得是否集中、能不能修复”。它通常结合样本切片、错误类型标注、混淆矩阵、置信度或校准分析与案例阅读。
- importance: 平均指标只能告诉你结果，不会告诉你修复方向。误差分析能把“再调一轮参数”转成更具体的动作，例如补数据、改标注、换模型结构、加规则兜底，或重写评测集。
- minimum demo: 从验证集抽取 50 到 100 个错误样本，按错误原因做人工分桶，例如“长尾实体”“多跳推理失败”“标注歧义”“检索未命中”。统计各桶占比，并针对最大的 1 到 2 个桶提出可执行修复假设。
- hardware budget: 最小误差分析几乎只需要已有模型输出和人工审阅，CPU 即可。若要重新跑模型生成更多案例，1 张小 GPU 足够。真正耗时的是标注和归因，而不是训练。
- examples:
  - 分类任务中查看混淆矩阵，发现相近类大量混淆。
  - RAG 中区分“检索没找对”和“生成没用好证据”。
  - 生成任务中把错误分成事实错误、遗漏、冗长和格式不合规。
  - 推荐任务中按新用户和老用户、头部和长尾内容做切片。
- pitfalls:
  - 只看几个印象深的 bad case，不做系统分桶。
  - 把标签噪声误当模型缺陷。
  - 错误桶定义过细，统计不稳定。
  - 没有把错误类型映射回可执行的修复动作。
  - 只做离线误差分析，不结合线上日志。
- prerequisites:
  - A/A3. 实验与研究方法/指标设计
  - A/A3. 实验与研究方法/对照实验
  - A/A2. 计算机基础/软件工程/日志
- core metrics:
  - 错误类型覆盖率
  - 主要错误桶占比
  - 长尾切片退化幅度
  - 校准误差
  - 可修复错误比例
- toolchain:
  - pandas
  - Jupyter Notebook
  - 标注平台
  - 混淆矩阵与切片报表
  - 日志系统
  - Weights & Biases Tables
- failure signs:
  - 总体分数卡住，却不知道下一步该改哪里。
  - 每轮修复都在随机试错。
  - 错误样本反复出现但没有被归类追踪。
  - 长尾或关键用户群持续出问题却被平均分掩盖。
- next:
  - A/A3. 实验与研究方法/可重复性
  - A/A3. 实验与研究方法/版本管理

#### 可重复性

- pathKey: `A/A3. 实验与研究方法/可重复性`
- node type: `concept-group`
- detail source: `data/details/leaves-A-A3-x6szvt-1.json`
- status: complete
- definition: 可重复性指他人在相同代码、数据、配置和环境下，能够得到足够接近的结果；自己在一段时间后也能重跑成功。它要求固定随机性来源、记录依赖版本、保存配置与数据快照，并明确结果允许波动的范围。
- importance: 没有可重复性，实验结论就不能沉淀为团队知识。很多研究失败不是想法错，而是代码、环境、数据、种子和脚本没有被完整记录，导致结果无法确认、无法扩展、无法交接。
- minimum demo: 选一个已有实验，冻结代码 commit、配置文件、依赖版本、随机种子和数据切分；在另一台机器或隔一周后重新运行，检查主指标是否落在预设容差内，并把重跑步骤写成 README。
- hardware budget: 可重复性建设主要消耗工程时间，不强依赖算力。最小演示可在 CPU 或 1 张小 GPU 上完成；关键是环境封装、数据版本和实验记录齐全。
- examples:
  - 用 requirements.txt、Conda lock 或 Poetry 固定依赖版本。
  - 保存训练配置与随机种子，能一键重跑同一实验。
  - 在 CI 中跑一个小样本 smoke test，验证管线没有失效。
  - 对复现实验给出可接受波动区间，例如 F1 在一个很小容差内。
- pitfalls:
  - 只保存模型结果，不保存数据切分和配置。
  - 随机种子写了，但数据加载顺序或底层非确定性没有控制。
  - 环境依赖浮动，几周后已经无法安装。
  - 文档缺失，只有作者本人知道如何运行。
  - 把一次偶然好结果当成可重复结论。
- prerequisites:
  - A/A2. 计算机基础/软件工程/Git
  - A/A2. 计算机基础/软件工程/包管理
  - A/A2. 计算机基础/软件工程/测试
  - A/A3. 实验与研究方法/版本管理
- core metrics:
  - 重跑成功率
  - 结果波动范围
  - 环境还原时间
  - 配置完整率
  - 数据快照可用率
- toolchain:
  - Git
  - Docker
  - Conda 或 Poetry
  - DVC
  - MLflow
  - Weights & Biases
  - CI/CD
- failure signs:
  - 同一实验在不同机器上差异巨大。
  - 代码能跑，但得不到文档里的结果。
  - 核心依赖升级后无法回到旧结论。
  - 换一个成员就没人能把实验重现出来。
- next:
  - A/A2. 计算机基础/软件工程/CI/CD
  - A/A2. 计算机基础/软件工程/监控

#### 版本管理

- pathKey: `A/A3. 实验与研究方法/版本管理`
- node type: `concept-group`
- detail source: `data/details/leaves-A-A3-x6szvt-1.json`
- status: complete
- definition: 版本管理是把代码、数据、模型、配置和实验结果建立可追溯对应关系，使你能回答“这个结果对应哪次提交、哪份数据、哪套超参数、哪版模型”。它不仅是 Git 提交历史，还包括数据和模型制品的版本化。
- importance: 没有版本管理，实验结果无法审计、回滚和复用。随着多人协作和长周期迭代增加，版本混乱会直接导致错误结论、线上事故以及无法对齐的评测口径。
- minimum demo: 用 Git 管代码，用 DVC 或统一对象存储目录规范管理数据和模型，用 MLflow 或 W&B 记录实验 run。为一次实验写下 commit id、数据版本、配置文件路径、模型 checkpoint 和结果表，并验证能从结果反查到全部输入。
- hardware budget: 版本管理几乎不依赖 GPU；本地 CPU 加远程存储即可完成最小实践。真正需要投入的是存储空间、命名规范和自动化记录。
- examples:
  - 用 Git tag 标记一个可发布实验版本。
  - 用 DVC 管理训练集快照与模型 checkpoint。
  - 用 MLflow 或 W&B 记录 run 与 commit id 绑定。
  - 让线上模型版本与离线评测报告双向可追踪。
- pitfalls:
  - 只有代码有版本，数据和模型没有版本。
  - 实验命名随意，后期无法检索。
  - 手工拷贝 checkpoint，缺少来源记录。
  - 线上版本与离线评测版本对不上。
  - 多人同时改配置但没有合并规范。
- prerequisites:
  - A/A2. 计算机基础/软件工程/Git
  - A/A2. 计算机基础/软件工程/包管理
  - A/A2. 计算机基础/数据系统/对象存储
- core metrics:
  - 结果追溯完整率
  - 代码、数据、模型版本对齐度
  - 回滚耗时
  - run 记录覆盖率
  - 制品可恢复率
- toolchain:
  - Git
  - DVC
  - Git LFS
  - MLflow
  - Weights & Biases
  - 对象存储
  - CI/CD
- failure signs:
  - 知道一个好结果，但找不到对应代码和数据。
  - 同名模型文件来自不同实验，无法区分。
  - 回滚旧版本需要人工猜测。
  - 实验记录散落在聊天、表格和本地目录里。
- next:
  - A/A3. 实验与研究方法/可重复性
  - A/A2. 计算机基础/软件工程/CI/CD

## B. 经典 AI

- pathKey: `B`
- node type: `domain`
- stage: 01 基础底座
- graph summary: 经典 AI 不是“过时知识”，而是今天很多 Agent / RL / Robotics / Planning 系统的上游。AIMA 的经典主线包括：搜索、约束满足、知识表示、推理、规划、不确定性推理、决策、多智能体、机器学习、强化学习、NLP、机器人、CV、伦理与安全。
- relation notes:
  - 搜索/约束满足与组合问题/规划 是 Agent 系统 层 Agent 编排的理论祖先。
  - 知识表示/推理 与 检索、记忆与外部知识 层检索、知识库、KG-RAG 强连接。
  - 不确定性与概率推理/决策与多智能体 与 机器学习 层机器学习、强化学习、评测、安全与治理 层风险决策相连。
  - 经典 AI 层很多内容在现代系统里不再单独主导模型，但会以“约束、规则、图、规划器、验证器”的形式复现。
- detail source: `data/details/domain-B.json`
- status: complete
- definition: 经典 AI 是以显式状态、符号表示、规则、约束与搜索为核心的一组方法，用可解释的结构描述世界、目标与动作，并通过推理、规划、概率模型或博弈分析产生可验证的决策。它把智能拆成表示、搜索、推理、规划与决策等可分析部件，更关注问题如何被建模、解如何被系统地求出，以及系统为何会成功或失败，与主要依赖大规模数据和参数拟合的现代统计学习形成互补。
- importance: 它是理解智能系统怎么看世界、如何选动作、怎样证明方案可行的基础域。在需要可解释性、硬约束满足、长链规划、组合优化、故障诊断、可验证性或低数据决策的场景里，经典 AI 往往比纯黑盒方法更稳健。即使在 LLM 时代，搜索、规划、知识表示、verifier、KG-RAG、工具选择和多智能体编排仍大量继承经典 AI 的思想。
- minimum demo: 做一个小型离散世界即可，例如 5x5 网格导航或课程排班。先显式定义状态、动作、目标或约束，再分别用 A* 或回溯加约束传播求解；如果再前进一步，可加入几条规则或简单概率来处理不确定性。验收重点不是界面，而是你能说明表示方式、搜索或推理过程、解为何成立，以及当约束变化时系统如何失败或修正。
- hardware budget: 入门几乎只需 CPU：普通笔记本、8GB 内存就足以覆盖大多数教学与中小规模实验，搜索、SAT / SMT、知识图谱原型、经典规划和简单贝叶斯网络通常都不需要 GPU。真正的成本主要来自问题规模和建模质量，而不是显卡；当状态空间、约束密度或图规模上升时，内存与求解时间会迅速成为瓶颈。
- examples:
  - 地图导航与路径规划
  - 数独、排班、课程表与资源调度
  - 规则驱动的配置、诊断与专家系统
  - 知识库问答与基于逻辑的事实推断
  - 机器人任务规划与多步执行
  - 故障诊断、过滤与预测中的贝叶斯网络或隐马尔可夫模型
  - 棋类博弈、对抗搜索与 Monte Carlo Tree Search
  - LLM 外挂 search / planner / verifier 的混合系统
- pitfalls:
  - 把问题建模成错误的状态、动作或约束，后续算法再强也无效
  - 只关注求解器名字，不关注表示方式、启发式和代价函数设计
  - 在开放世界、高噪声、语义模糊任务上强行使用纯符号流程
  - 忽视组合爆炸，以为玩具样例可跑通就能直接扩到真实规模
  - 规则库或知识库缺少维护机制，导致冲突、漂移和覆盖盲区
  - 把可解释误当成易维护，低估知识工程的人力成本
- core metrics:
  - 目标达成率 / 约束满足率
  - 完备性
  - 最优性或总代价质量
  - 求解时间 / 扩展节点数
  - 内存占用
  - 规模扩展性
  - 知识库或规则库维护成本
- toolchain:
  - Python
  - networkx
  - OR-Tools
  - PySAT / Z3
  - pgmpy
  - Fast Downward / pyperplan
  - Neo4j / RDFLib / Protégé
- failure signs:
  - 问题规模稍微放大就出现指数级爆炸，求解时间和内存不可控
  - 启发式、代价函数或约束定义与真实目标不一致，产出形式正确但业务错误的解
  - 知识规则互相冲突，或覆盖率太低，系统只能回答少数手工路径
  - 规划结果经常无法执行，前置条件、动作模型或环境假设明显失真
  - 面对噪声、观测缺失或分布变化时性能骤降
  - 系统过度依赖人工知识维护，新增场景成本高于收益
- next:
  - B/B1. 智能体观
  - B/B2. 搜索
  - B/B3. 约束满足与组合问题
  - B/B4. 知识表示
  - B/B5. 推理
  - B/B6. 规划
  - B/B7. 不确定性与概率推理
  - B/B8. 决策与多智能体
  - B/B9. 经典 AI 与现代 AI 的连接点

### B1. 智能体观

- pathKey: `B/B1. 智能体观`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-B.json`
- status: draft
- definition: 智能体观把问题统一看成“主体在环境中感知、决策并行动”的过程。它先不关心算法细节，而是先明确环境、状态、动作、目标、效用和策略这些基本构件，为后续搜索、规划和决策建立统一问题语言。
- importance: 这是经典 AI 的总入口。只要这层没想清楚，后面无论做搜索、规划还是概率决策，都会缺少边界和语义基础；而在现代 Agent 系统里，这套框架依然直接对应 state、tool、goal、policy 和 loop 设计。
- minimum demo: 做一个最小 GridWorld 或流程自动化环境，显式写清状态、动作、目标和环境转移规则，再用几条固定策略跑出差异，观察问题定义如何决定后续方法选择。
- hardware budget: 普通笔记本即可；CPU 运行足够；无需 GPU。
- examples:
  - 网格导航智能体
  - 带工具调用的任务执行体
  - 库存或调度决策体
  - 机器人在环境中的感知—动作闭环
- pitfalls:
  - 环境、状态和观测混在一起
  - 目标和效用没有区分
  - 策略被写成硬编码流程，却误当成通用智能
- prerequisites:
  - A/A2. 计算机基础/数据结构与算法
- core metrics:
  - 问题定义清晰度
  - 动作可执行性
  - 状态表示完整度
  - 目标达成率
- toolchain:
  - Python
  - Gymnasium
  - 状态可视化
  - 日志
- failure signs:
  - 后续算法选型完全依赖拍脑袋
  - 同一个系统里不同人对状态和目标理解不一致
  - 一进执行阶段就发现动作定义不完整
- next:
  - B/B1. 智能体观/环境（Environment）
  - B/B1. 智能体观/状态（State）
  - B/B1. 智能体观/动作（Action）
  - B/B8. 决策与多智能体/MDP

#### 环境（Environment）

- pathKey: `B/B1. 智能体观/环境（Environment）`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B1-1fdfy2l-1.json`
- status: done
- definition: 环境是智能体之外、能够产生感知并受到动作影响的外部世界及其规则集合。它不仅包括对象和约束，也包括状态转移、可观测性、随机性、动态性以及奖励或代价的来源。
- importance: 环境定义了问题边界：什么可被看到、什么可被控制、什么会变化、成功如何判断。环境假设一旦错了，后续的状态建模、动作设计、规划与决策都会失真；经典 AI 中常见的完全或部分可观测、确定或随机、静态或动态等区分，本质上都是环境建模。
- minimum demo: 做一个 5x5 GridWorld：包含墙、目标、陷阱和 4 个移动动作，并显式写出转移规则与观测接口。先不用学习算法，只跑几条固定动作序列，验证相同条件下环境响应是否一致、随机因素是否按预期出现。
- hardware budget: 普通笔记本即可；CPU 运行，8GB 内存足够；无需 GPU。
- examples:
  - 完全可观测、离散的棋盘环境
  - 部分可观测、动态的移动机器人迷宫
  - 含随机需求和时间窗的配送环境
  - 包含其他智能体的博弈环境
- pitfalls:
  - 把环境默认成静态且完全可观测
  - 没有写清状态转移、随机性和约束来源
  - 把环境真实状态与智能体内部状态混为一谈
  - 模拟环境过于理想化，和真实部署脱节
- prerequisites:
  - B/B1. 智能体观
- core metrics:
  - 环境建模覆盖率
  - 转移规则一致性
  - 可观测变量覆盖率
  - 模拟与真实偏差
  - 任务可复现性
- toolchain:
  - Python
  - Gymnasium 或 MiniGrid
  - NetworkX
  - Jupyter Notebook
  - 日志与简单可视化
- failure signs:
  - 同一动作在相同条件下结果无法解释
  - 观测字段定义频繁变化
  - 动作对环境没有稳定影响
  - 模拟结果与设定规则不一致
- next:
  - B/B1. 智能体观/状态（State）
  - B/B1. 智能体观/动作（Action）
  - B/B8. 决策与多智能体/MDP
  - B/B8. 决策与多智能体/POMDP

#### 状态（State）

- pathKey: `B/B1. 智能体观/状态（State）`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B1-1fdfy2l-1.json`
- status: done
- definition: 状态是智能体在某一时刻用于决策的世界描述。它可以是完整环境状态，也可以是基于观测和记忆形成的内部表示；在部分可观测问题里，还要区分观测、隐状态与信念状态。
- importance: 状态表示决定了问题能否被有效求解。状态过弱会让不同情境看起来一样，导致决策冲突；状态过强会让搜索、规划或学习空间爆炸。很多经典 AI 问题的难点，本质上都是状态表示与马尔可夫性的难点。
- minimum demo: 在 GridWorld 中分别实现两种表示：完整状态 x、y、是否拿到钥匙、门是否打开，以及只包含局部视野的观测。比较两种表示下同一策略是否会出现决策冲突，从而直观看到状态与观测的区别。
- hardware budget: 普通笔记本即可；CPU 运行，8GB 内存足够；无需 GPU。
- examples:
  - 棋类中的完整局面
  - 机器人定位中的位置、朝向和地图占据
  - 对话系统的槽位填充结果与历史摘要
  - 库存调度中的库存、订单和机器负载
- pitfalls:
  - 把观测直接当成完整状态
  - 状态缺少关键变量，导致非马尔可夫
  - 状态过细造成维度爆炸
  - 把未来信息泄漏进当前状态
- prerequisites:
  - B/B1. 智能体观/环境（Environment）
- core metrics:
  - 马尔可夫性近似程度
  - 状态维度
  - 状态别名率
  - 状态更新延迟
  - 决策所需变量覆盖率
- toolchain:
  - Python dataclass
  - NumPy
  - Gymnasium spaces
  - Pandas 日志分析
  - 状态可视化
- failure signs:
  - 同一状态标签下最优动作经常冲突
  - 状态更新后出现不可能组合
  - 一换随机种子或场景就失效
  - 规划或搜索空间迅速爆炸
- next:
  - B/B1. 智能体观/动作（Action）
  - B/B1. 智能体观/策略（Policy）
  - B/B8. 决策与多智能体/MDP
  - B/B8. 决策与多智能体/POMDP

#### 动作（Action）

- pathKey: `B/B1. 智能体观/动作（Action）`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B1-1fdfy2l-1.json`
- status: done
- definition: 动作是智能体可选择的干预方式，用来改变环境、内部记忆或与外部系统交互。动作可以是原子动作，如向左移动，也可以是宏动作或工具调用，如导航到目标点或执行数据库查询。
- importance: 动作空间决定了智能体真正能做什么，也直接决定搜索分支因子、控制粒度和系统可执行性。状态和目标再清晰，如果动作设计不合理，问题依然可能不可解、代价过高或难以恢复。
- minimum demo: 给 GridWorld 定义上、下、左、右和拾取五个动作，并为每个动作写清前置条件、状态变化和步长代价。再额外实现一个宏动作，比较原子动作与宏动作在计划长度和失败恢复上的差异。
- hardware budget: 普通笔记本即可；CPU 运行，8GB 内存足够；无需 GPU。
- examples:
  - 网格世界中的上下左右移动
  - 机器人抓取、放置、旋转
  - 调用搜索、数据库或计算工具
  - 等待、取消或回退
- pitfalls:
  - 动作没有前置条件与后效定义
  - 动作空间过大但缺少分层
  - 忽略动作成本与执行时延
  - 动作名义可用但实际无法执行
- prerequisites:
  - B/B1. 智能体观/环境（Environment）
  - B/B1. 智能体观/状态（State）
- core metrics:
  - 可执行动作占比
  - 平均动作成本
  - 分支因子
  - 动作成功率
  - 非法动作率
- toolchain:
  - Gymnasium action space
  - PDDL action schema
  - Python 枚举或 dataclass
  - 执行日志
  - 单元测试
- failure signs:
  - 大量动作被判非法或无效
  - 动作后果不可预测
  - 动作成本未进入决策过程
  - 宏动作一失败就无法恢复
- next:
  - B/B1. 智能体观/目标（Goal）
  - B/B1. 智能体观/策略（Policy）
  - B/B2. 搜索
  - B/B6. 规划/Goal-based planning

#### 目标（Goal）

- pathKey: `B/B1. 智能体观/目标（Goal）`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B1-1fdfy2l-1.json`
- status: done
- definition: 目标是智能体希望达到的期望条件，通常表现为一个可判定的终止状态或约束集合。它强调是否达到，而不是不同结果之间的细粒度偏好排序。
- importance: 目标把泛泛的行为问题变成可验证的任务问题，是经典规划与搜索的起点。没有明确目标，就无法判断何时停止、什么算成功，也难以比较不同方案是否值得执行。
- minimum demo: 在 GridWorld 中定义目标为拿到钥匙后到达出口，并把目标检查写成可执行谓词。用同一环境分别测试可达目标、不可达目标和冲突目标，观察计划器或规则系统的行为变化。
- hardware budget: 普通笔记本即可；CPU 运行，8GB 内存足够；无需 GPU。
- examples:
  - 到达终点并保持资源约束满足
  - 把所有箱子搬到指定位置
  - 满足排班中的人手与时段约束
  - 在预算内完成配送任务
- pitfalls:
  - 目标表述模糊，无法程序化检查
  - 目标彼此冲突却未显式处理
  - 把代理指标误当真实目标
  - 未判断目标是否可达
- prerequisites:
  - B/B1. 智能体观/状态（State）
  - B/B1. 智能体观/动作（Action）
- core metrics:
  - 目标达成率
  - 到达目标时间
  - 约束违反次数
  - 计划长度
  - 扰动下成功率
- toolchain:
  - PDDL goal specification
  - 断言与终止条件检查
  - pytest
  - 计划结果可视化
  - 日志分析
- failure signs:
  - 代理持续执行却没有明确终止
  - 实现了代理指标却没完成真实任务
  - 目标本身不可达
  - 子目标之间相互冲突
- next:
  - B/B1. 智能体观/效用（Utility）
  - B/B6. 规划/Goal-based planning
  - B/B6. 规划/Symbolic planning
  - B/B6. 规划/Plan verification

#### 效用（Utility）

- pathKey: `B/B1. 智能体观/效用（Utility）`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B1-1fdfy2l-1.json`
- status: done
- definition: 效用是对结果或轨迹偏好的数值化表达，用来比较多个可行结果谁更值得选择。与目标常见的满足或不满足不同，效用允许把收益、成本、风险、时间等因素放到同一决策框架中权衡。
- importance: 一旦任务存在多目标取舍或不确定性，只有目标往往不够，必须引入效用来比较更好与更差。它是决策理论、MDP 和很多现代策略学习方法的共同基础，也是把经典 AI 从可达性问题推进到偏好优化问题的关键。
- minimum demo: 给 GridWorld 设定到达目标加 10、每走一步减 1、掉入陷阱减 20 的效用函数。比较最短路径、最安全路径和折中路径，理解效用如何改变最优决策。
- hardware budget: 普通笔记本即可；CPU 运行，8GB 内存足够；无需 GPU。
- examples:
  - 更快到达但更耗能的导航取舍
  - 推荐系统中收益、延迟与风险的平衡
  - 机器人速度与碰撞风险的权衡
  - 客服系统满意度与人工成本的折中
- pitfalls:
  - 把效用和即时奖励完全等同
  - 不同项量纲不一致却直接相加
  - 只优化短期收益忽略长期后果
  - 权重设定导致不合理激励
- prerequisites:
  - B/B1. 智能体观/状态（State）
  - B/B1. 智能体观/动作（Action）
  - B/B1. 智能体观/目标（Goal）
- core metrics:
  - 期望效用
  - 后悔值
  - 风险暴露
  - 多目标权重敏感度
  - 长期与短期收益一致性
- toolchain:
  - Python
  - NumPy
  - Notebook 做权重分析
  - 模拟器
  - 结果可视化
- failure signs:
  - 出现明显投机取巧行为
  - 轻微权重调整就导致策略翻转
  - 短期收益持续压过长期目标
  - 不同目标之间无法比较或解释
- next:
  - B/B1. 智能体观/策略（Policy）
  - B/B8. 决策与多智能体/决策理论
  - B/B8. 决策与多智能体/MDP
  - B/B7. 不确定性与概率推理/在不确定条件下推理

#### 策略（Policy）

- pathKey: `B/B1. 智能体观/策略（Policy）`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B1-1fdfy2l-1.json`
- status: done
- definition: 策略是从状态、观测或历史到动作的映射规则。它可以是确定性的规则表、条件分支、搜索过程中隐式生成的决策器，也可以是概率形式的选择机制。
- importance: 策略把表示层和执行层连接起来，是智能体行为最直接的载体。无论是规则系统、规划执行器还是强化学习控制器，都可以统一看作某种策略；理解策略有助于把经典 AI 与现代 AI 放在同一个框架里比较。
- minimum demo: 先为 GridWorld 写一个 if-else 反射策略或查表策略，再在不同起点上反复执行。记录策略在正常、噪声和障碍变化条件下的成功率，观察策略与环境假设之间的耦合。
- hardware budget: 普通笔记本即可；CPU 运行，8GB 内存足够；无需 GPU。
- examples:
  - 温控器超过阈值就启动制冷
  - 棋类开局库给出的条件动作
  - 仓储机器人按当前位置选择最近拣货点
  - 工具代理根据任务类型选搜索或数据库查询
- pitfalls:
  - 策略只在设计场景里有效
  - 对部分可观测环境没有记忆机制
  - 规则之间冲突，导致动作震荡
  - 没有安全回退或异常处理
- prerequisites:
  - B/B1. 智能体观/状态（State）
  - B/B1. 智能体观/动作（Action）
  - B/B1. 智能体观/目标（Goal）
  - B/B1. 智能体观/效用（Utility）
- core metrics:
  - 成功率
  - 累计效用或回报
  - 鲁棒性
  - 决策延迟
  - 状态覆盖率
- toolchain:
  - 规则引擎或 if-else baseline
  - 策略表
  - Gymnasium
  - NumPy
  - 评估脚本
- failure signs:
  - 反复在几种动作间震荡
  - 对小扰动极度敏感
  - 离开设计场景后迅速崩溃
  - 没有回退动作导致单点失败
- next:
  - B/B8. 决策与多智能体/MDP
  - B/B8. 决策与多智能体/POMDP
  - B/B6. 规划/Multi-step planning
  - B/B9. 经典 AI 与现代 AI 的连接点/决策 → RL / tool selection / policy learning

#### 感知—决策—行动闭环

- pathKey: `B/B1. 智能体观/感知—决策—行动闭环`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B1-1fdfy2l-1.json`
- status: done
- definition: 感知—决策—行动闭环是智能体持续运行的基本过程：接收观测，更新对世界的表示，依据目标或效用做决策，执行动作，再根据反馈进入下一轮。它强调智能体不是一次性推断，而是在反馈中不断修正行为。
- importance: 闭环视角把智能体从静态函数提升为带反馈的控制系统。很多真实问题之所以难，不在单次决策，而在持续观测、时延、噪声、异常恢复和重规划；这也是智能体系统工程与单轮模型调用的根本区别。
- minimum demo: 在一个带随机障碍的 GridWorld 中实现完整循环：读观测、更新状态、调用策略、执行动作、记录反馈。加入观测噪声或环境扰动后，观察是否需要重规划，以及系统能否从失败动作中恢复。
- hardware budget: 普通笔记本即可；CPU 运行，8GB 内存足够；无需 GPU。
- examples:
  - 扫地机器人碰到障碍后重新规划
  - 自动驾驶持续感知车道和行人并修正控制
  - 游戏代理根据对手动作实时更新决策
  - 浏览器代理依据页面反馈继续下一步操作
- pitfalls:
  - 把问题当成一次性推断，不做持续反馈
  - 感知更新和执行不同步
  - 没有记录闭环日志，无法定位问题
  - 遇到异常后无法重试或降级
- prerequisites:
  - B/B1. 智能体观/环境（Environment）
  - B/B1. 智能体观/状态（State）
  - B/B1. 智能体观/动作（Action）
  - B/B1. 智能体观/目标（Goal）
  - B/B1. 智能体观/效用（Utility）
  - B/B1. 智能体观/策略（Policy）
- core metrics:
  - 端到端闭环延迟
  - 重规划频率
  - 累计效用
  - 扰动后的恢复率
  - 观测到行动的成功率
- toolchain:
  - 环境模拟器
  - 状态估计器
  - 策略执行器或规划器
  - 事件日志
  - 可视化仪表板
- failure signs:
  - 传感到动作的延迟过大
  - 持续重复已失败动作
  - 状态估计长期滞后
  - 异常后不能恢复到安全状态
  - 没有闭环日志导致问题不可定位
- next:
  - B/B2. 搜索
  - B/B6. 规划/Multi-step planning
  - B/B8. 决策与多智能体/MDP
  - B/B8. 决策与多智能体/POMDP
  - B/B9. 经典 AI 与现代 AI 的连接点/规划 → Agent task decomposition
  - B/B9. 经典 AI 与现代 AI 的连接点/决策 → RL / tool selection / policy learning

### B2. 搜索

- pathKey: `B/B2. 搜索`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-B.json`
- status: draft
- definition: 搜索把问题表示成状态空间上的遍历过程：从初始状态出发，沿动作边扩展候选状态，直到找到满足目标条件的解。它可以按深度、代价、启发式、局部改进或对抗博弈的方式组织扩展顺序，本质上是在有限计算预算下决定先看哪条路。
- importance: 搜索是经典 AI 最核心的计算框架之一。规划、博弈、组合优化、工具调用树、LLM tree search 和 verifier 流程，本质上都在回答同一个问题：面对大量候选分支时，如何用问题结构、启发式或剪枝策略把求解预算集中到最有希望的路径上。
- minimum demo: 先实现一个统一的图搜索壳子：状态、动作、目标判定、open/closed 集和路径回溯。再在同一个网格或迷宫问题上切换 BFS、Uniform Cost Search、Greedy、A*、Hill Climbing 和 Minimax，比较扩展节点数、路径质量和失败模式，建立“搜索顺序决定性能”的直觉。
- hardware budget: CPU 即可；普通笔记本足够覆盖教学规模和中小图实验。真正的瓶颈通常不是算力，而是状态空间大小、分支因子、启发式质量和内存中 open/closed 集的增长速度。
- examples:
  - 地图导航和最短路径
  - 棋类博弈中的对抗搜索
  - 机器人任务图上的动作序列查找
  - LLM 推理树上的候选轨迹扩展与筛选
- pitfalls:
  - 只记算法名，不明确状态、动作、代价和目标定义
  - 忽视分支因子和重复状态去重，导致组合爆炸
  - 启发式设计与真实目标不一致，搜索被严重误导
  - 把局部搜索、图搜索和对抗搜索混在一起理解
- prerequisites:
  - B/B1. 智能体观/状态（State）
  - B/B1. 智能体观/动作（Action）
  - B/B1. 智能体观/目标（Goal）
- core metrics:
  - 扩展节点数
  - 分支因子
  - 解的总代价或质量
  - 运行时间
  - 峰值内存占用
- toolchain:
  - 优先队列与队列/栈
  - 状态哈希与 closed set
  - NetworkX 或自定义图结构
  - 可视化脚本
  - 基准问题集
- failure signs:
  - 问题规模稍放大就无法收敛
  - 找到解但质量明显劣于基线
  - 重复扩展大量等价状态
  - 不同搜索策略间对比不出行为差异，说明实验壳子搭得不对
- next:
  - B/B2. 搜索/无信息搜索
  - B/B2. 搜索/启发式搜索
  - B/B2. 搜索/局部搜索
  - B/B2. 搜索/对抗搜索
  - B/B6. 规划/Plan search

#### 无信息搜索

- pathKey: `B/B2. 搜索/无信息搜索`
- node type: `concept-group`
- detail source: `data/details/domain-B.json`
- status: draft
- definition: 无信息搜索不使用问题特定启发知识，只依赖状态扩展规则和队列策略来遍历状态空间，例如 BFS、DFS 和 UCS。
- importance: 它是理解完备性、最优性、时间/空间开销和搜索顺序影响的共同基线。
- minimum demo: 在同一个迷宫或图上比较 BFS、DFS 和 UCS，观察它们找到的解与资源消耗差异。
- prerequisites:
  - B/B2. 搜索
- core metrics:
  - 扩展节点数
  - 运行时间
  - 内存占用
- next:
  - B/B2. 搜索/无信息搜索/BFS
  - B/B2. 搜索/无信息搜索/DFS
  - B/B2. 搜索/无信息搜索/Uniform Cost Search

##### BFS

- pathKey: `B/B2. 搜索/无信息搜索/BFS`
- node type: `concept`
- detail source: `data/details/leaves-B-B2-1qivgcz-1.json`
- status: completed
- definition: 广度优先搜索（BFS）按搜索树的层次从浅到深扩展节点，通常用 FIFO 队列维护 frontier。对无权图或所有动作代价相同的状态空间，BFS 返回最少步数的解；在图搜索里通常配合 visited 集避免重复状态。
- importance: 它是无信息搜索最重要的基线：最容易看清 frontier 管理、完备性、最优性与内存开销之间的关系。很多“最少跳数/最少步数”问题都可直接建模为 BFS，也常被用来校验更复杂搜索算法的正确性。
- minimum demo: 用一个无权迷宫或无权图做起点到目标的路径搜索：实现 queue + visited 的 BFS，输出扩展顺序、路径长度、扩展节点数和 frontier 峰值；再与 DFS 在同一张图上对比最先找到的解和资源消耗。
- hardware budget: 普通笔记本 CPU 即可。教学级实验的瓶颈通常不是算力而是内存：frontier 和 visited 会随层宽快速增长；几十到几万个节点的实验在单机上通常足够。
- examples:
  - 无权迷宫中的最短步数路径
  - 社交图中的最少好友跳数
  - 网页或状态图的按层遍历
  - 棋盘类状态空间里寻找最浅解
- pitfalls:
  - 把 BFS 用在边权不同的图上还期待得到最低总代价
  - 只在出队时才去重，导致同一状态被重复入队很多次
  - 直接在队列元素里保存完整路径，造成不必要的内存膨胀
  - 把 tree search 和 graph search 混用，忽略重复状态
- prerequisites:
  - B/B1. 智能体观/状态（State）
  - B/B1. 智能体观/动作（Action）
  - B/B1. 智能体观/目标（Goal）
  - B/B2. 搜索/无信息搜索
- core metrics:
  - 扩展节点数
  - frontier 峰值大小
  - 路径长度 / 解深度
  - 运行时间
  - 内存占用
  - 在单位代价条件下是否保持最优
- toolchain:
  - Python
  - collections.deque
  - set / dict 记录 visited 与 parent
  - networkx（可视化图与路径）
- failure signs:
  - 返回的路径不是最少步数
  - 同一状态频繁重复入队，队列异常膨胀
  - 扩展顺序不再按层推进
  - 小图能跑通，但宽图很快就内存吃紧
- next:
  - B/B2. 搜索/无信息搜索/DFS
  - B/B2. 搜索/无信息搜索/Uniform Cost Search
  - B/B2. 搜索/启发式搜索/A*

##### DFS

- pathKey: `B/B2. 搜索/无信息搜索/DFS`
- node type: `concept`
- detail source: `data/details/leaves-B-B2-1qivgcz-1.json`
- status: completed
- definition: 深度优先搜索（DFS）总是优先沿当前路径继续向下扩展，走不通再回溯，通常用 LIFO 栈或递归实现。它往往能较快碰到某个深层解，但不保证找到最浅解或最低代价解；在有环或无限深空间中若不做限制，可能长期不返回。
- importance: DFS 展示了搜索顺序对结果的巨大影响，也是回溯搜索、递归遍历、很多组合枚举与博弈树遍历的基础。相对 BFS，它常用更少的显式 frontier 内存，因此是理解“时间—空间折中”的关键参照。
- minimum demo: 在带死胡同的迷宫或有环图上分别实现递归版和显式栈版 DFS，记录访问顺序、回溯次数、最大栈深度以及第一次找到解的深度；再和 BFS 比较它们找到的是否是同一个解。
- hardware budget: 普通笔记本 CPU 即可。显式内存通常较省，但递归实现会受调用栈限制；当搜索深度很大或图有环而去重不足时，程序更容易因为栈溢出或长时间空转而失败。
- examples:
  - 迷宫中的一条可行路径搜索
  - 文件系统或树结构的递归遍历
  - 组合问题中的回溯枚举骨架
  - 博弈树中的深度式展开
- pitfalls:
  - 在有环图上不做 visited 或深度限制，导致无限循环
  - 把第一次找到的解误当成最优解
  - 递归过深触发栈溢出
  - 忽略邻接顺序，导致结果对输入顺序极度敏感
- prerequisites:
  - B/B1. 智能体观/状态（State）
  - B/B1. 智能体观/动作（Action）
  - B/B1. 智能体观/目标（Goal）
  - B/B2. 搜索/无信息搜索
- core metrics:
  - 扩展节点数
  - 最大搜索深度 / 最大栈深度
  - 回溯次数
  - 首次找到解的时间
  - 运行时间
  - 内存占用
- toolchain:
  - Python
  - list / collections.deque 作为栈
  - 递归函数与显式栈两种实现
  - set / dict 记录 visited 与 parent
- failure signs:
  - 在有环图上长时间不结束
  - 递归深度异常增长并触发栈溢出
  - 路径回溯逻辑错误，返回路径断裂或含重复段
  - 找到的解明显比已知浅层解更差，却仍被当成最优
- next:
  - B/B3. 约束满足与组合问题/回溯搜索
  - B/B2. 搜索/对抗搜索/Minimax
  - B/B2. 搜索/对抗搜索/Alpha-Beta Pruning

##### Uniform Cost Search

- pathKey: `B/B2. 搜索/无信息搜索/Uniform Cost Search`
- node type: `concept`
- detail source: `data/details/leaves-B-B2-1qivgcz-1.json`
- status: completed
- definition: Uniform Cost Search（UCS，一致代价搜索）总是优先扩展当前累计路径代价 g(n) 最小的 frontier 节点，通常用最小堆维护优先队列。它把 BFS 从“最少步数”推广到“最低总代价”：当边代价非负且以最小代价弹出节点时，UCS 能找到到目标的最低成本路径。
- importance: UCS 是理解“深度最浅”和“总代价最低”不是一回事的关键节点，也是 A* 的直接前身。它把搜索问题与最短路径、规划代价、资源消耗等工程目标连接起来，是从基础搜索过渡到启发式搜索的核心桥梁。
- minimum demo: 构造一个加权图：一条路径步数更少但代价更高，另一条路径步数更多但代价更低。分别运行 BFS 和 UCS 到同一目标，记录弹出顺序、最终路径成本、扩展节点数和优先队列峰值，直观看到两者返回结果的差异。
- hardware budget: 普通笔记本 CPU 即可。中小规模实验的开销主要来自优先队列操作、best-cost 表和 frontier；相比 BFS，算力差异通常不大，但如果更优路径频繁更新，堆中会出现较多过期条目。
- examples:
  - 路网中的最低通行成本路径
  - 带地形代价的网格最短路
  - 动作代价不同的规划问题
  - 网络路由中按链路成本选路的简化模型
- pitfalls:
  - 在目标第一次入队时就停止，而不是在它以当前最小代价出队时停止
  - 没有维护 best-cost，导致更优路径无法替换更差路径
  - 把 UCS 用到负边权场景
  - 把“步数更少”误当成“总代价更低”
- prerequisites:
  - B/B1. 智能体观/状态（State）
  - B/B1. 智能体观/动作（Action）
  - B/B1. 智能体观/目标（Goal）
  - B/B2. 搜索/无信息搜索
  - B/B2. 搜索/无信息搜索/BFS
- core metrics:
  - 最终路径总代价
  - 扩展节点数
  - 优先队列操作次数
  - frontier 峰值大小
  - 运行时间
  - 在非负代价条件下是否保持最优
- toolchain:
  - Python
  - heapq
  - dict 记录 best_cost 与 parent
  - networkx（构造加权图并验证路径成本）
- failure signs:
  - 返回的路径步数少但总代价更高
  - 堆中出现大量重复旧条目，运行时间异常变差
  - 明明存在更便宜路径却没有被更新
  - 在含负代价边的图上行为异常或结果不可信
- next:
  - B/B2. 搜索/启发式搜索/Greedy
  - B/B2. 搜索/启发式搜索/A*
  - B/B6. 规划/Plan search

#### 启发式搜索

- pathKey: `B/B2. 搜索/启发式搜索`
- node type: `concept-group`
- detail source: `data/details/domain-B.json`
- status: draft
- definition: 启发式搜索利用对目标距离或代价的估计来优先扩展更有希望的状态，从而减少盲目遍历。
- importance: 它把问题知识引入搜索顺序，是从基础遍历走向高效求解的关键一步。
- minimum demo: 在同一张图上比较 Greedy 和 A* 与 BFS/UCS 的差异，观察启发式对扩展顺序的影响。
- prerequisites:
  - B/B2. 搜索/无信息搜索/Uniform Cost Search
- core metrics:
  - 启发式有效分支因子
  - 路径质量
  - 扩展节点数
- next:
  - B/B2. 搜索/启发式搜索/Greedy
  - B/B2. 搜索/启发式搜索/A*

##### Greedy

- pathKey: `B/B2. 搜索/启发式搜索/Greedy`
- node type: `concept`
- detail source: `data/details/leaves-B-B2-1lsha2y-1.json`
- status: completed
- definition: Greedy（贪心最佳优先搜索）在图搜索中每一步都优先展开当前启发式估计 h(n) 最小的节点，只关心“看起来离目标最近”的状态，而不累计已经付出的路径代价 g(n)。它依赖启发函数快速逼近目标，常能很快找到一条可行路径，但通常不保证最优，在某些图上也可能因为启发误导而走很多弯路。
- importance: Greedy 是理解启发式搜索最直观的起点：它把“搜索顺序”从盲搜的层次或累计代价，改成由问题知识驱动的优先级。工程上它适合先求一个可用解、做大规模状态空间的快速粗搜、或作为更复杂搜索的 warm start。掌握 Greedy 后，再学习 A* 就更容易理解为什么只看 h(n) 会快但不稳，而把 g(n)+h(n) 结合起来会更可靠。
- minimum demo: 用一个带坐标的网格地图做最小实验：起点在左上，终点在右下，允许上下左右移动，部分格子设为障碍。定义 h(n) 为曼哈顿距离，开放列表按 h(n) 排序。分别运行 BFS、Greedy、A*，记录扩展节点数、找到路径长度、是否绕远。再把障碍改成会诱导“看起来更近但其实被墙挡住”的形状，观察 Greedy 如何被误导。
- hardware budget: CPU 即可。几十到几百个节点的教学示例在本地笔记本或浏览器里都能完成；内存需求通常只有开放/关闭列表的数量级。即使扩展到几万状态，只要状态表示简单，普通开发机也足够。
- examples:
  - 网格寻路中按曼哈顿距离优先扩展最靠近目标的格子
  - 导航或机器人任务里先快速求一条可行路线，再交给后续方法精修
  - 拼图、迷宫等状态空间问题中用启发值做粗搜索
  - 在大图上先做 Greedy 生成初始解或候选路径集合
- pitfalls:
  - 把 Greedy 误认为“有启发式就最优”；Greedy 通常不保证最优
  - 只按 h(n) 排序，忽略已走代价 g(n)，容易出现明显绕路
  - 启发函数尺度不合理时会让搜索顺序极不稳定
  - 不维护 closed set 时，图搜索里可能反复访问相同状态
  - 在有局部陷阱或障碍墙的图上，Greedy 容易被‘看起来更近’的方向误导
- prerequisites:
  - B/B1. 智能体观/状态（State）
  - B/B1. 智能体观/动作（Action）
  - B/B1. 智能体观/目标（Goal）
  - B/B2. 搜索/无信息搜索/BFS
  - B/B2. 搜索/无信息搜索/Uniform Cost Search
- core metrics:
  - 是否找到可行解
  - 扩展节点数
  - 峰值 open/closed 集大小
  - 路径总代价
  - 运行时间
  - 启发函数计算开销
- toolchain:
  - 优先队列（min-heap）
  - 状态哈希与去重集合
  - 网格/图可视化脚本
  - 用于对比的 BFS 与 A* 基线实现
- failure signs:
  - 扩展节点数比 BFS 还多，说明启发式几乎不起作用或强烈误导
  - 很快找到路径，但路径长度明显劣于 Uniform Cost Search 或 A*
  - open 列表频繁出现几乎相同状态，说明去重策略不足
  - 遇到障碍布局后搜索长时间在目标附近徘徊却难以穿过关键通道
- next:
  - B/B2. 搜索/启发式搜索/A*
  - B/B2. 搜索/局部搜索/Hill Climbing
  - B/B6. 规划/Plan search
  - B/B9. 经典 AI 与现代 AI 的连接点/搜索 → 推理模型 / tree search / verifier

##### A*

- pathKey: `B/B2. 搜索/启发式搜索/A*`
- node type: `concept`
- detail source: `data/details/leaves-B-B2-1lsha2y-1.json`
- status: completed
- definition: A* 是把实际已付代价 g(n) 与启发式估计 h(n) 结合起来的启发式图搜索算法，按 f(n)=g(n)+h(n) 的最小值优先展开节点。直观上，它同时考虑“已经走了多远”和“估计还剩多远”。当 h(n) 对真实剩余代价是可采纳的（不高估）时，A* 在树搜索中能保证找到最优解；在图搜索中若 h(n) 还满足一致性，配合合适的 closed set / 重新打开策略，也能稳定得到最优路径。
- importance: A* 是经典 AI 中最核心的启发式搜索之一，因为它把问题知识以可验证的方式引入最短路搜索，兼顾效率与最优性。它常被视为 Uniform Cost Search 向“知识驱动搜索”的自然升级，也是理解 admissible / consistent heuristic、启发式设计、最优路径规划、符号规划搜索等主题的关键桥梁。很多后续方法本质上都是在 A* 的评估函数、状态表示或剪枝策略上做变体。
- minimum demo: 继续使用带障碍的网格地图，边代价统一为 1。实现 A*：open 按 f=g+h 排序，gScore 记录到每个状态的当前最优代价，parent 用于回溯路径，h 用曼哈顿距离。先在无障碍、再在复杂障碍地图上运行，并与 BFS、Uniform Cost Search、Greedy 对比：验证 A* 通常比 BFS 扩展更少节点，比 Greedy 路径更稳且常保持最优。然后故意把 h 放大到超过真实代价，观察最优性何时被破坏。
- hardware budget: CPU 即可。教学规模下几乎没有硬件门槛，普通笔记本足以完成网格、迷宫、拼图等实验。主要资源消耗来自 open/closed 集和 gScore 存储；状态空间变大时内存通常先于算力成为瓶颈。
- examples:
  - 游戏地图中的最短路径规划
  - 机器人在离散栅格或拓扑图上的全局路径搜索
  - 拼图、魔方简化版等状态空间问题中的最优解搜索
  - 符号规划或任务规划里把状态转移图交给启发式最优搜索
- pitfalls:
  - 把启发式写得过强但不可采纳，会牺牲最优性
  - 只维护 visited 而不维护更优 g 值，可能错过更短路径
  - 误以为 A* 一定比所有方法都快；弱启发式下它会退化得接近 Uniform Cost Search
  - 未区分树搜索与图搜索语义，导致 closed set / reopen 处理错误
  - 启发函数计算本身过贵，可能抵消减少扩展带来的收益
- prerequisites:
  - B/B1. 智能体观/状态（State）
  - B/B1. 智能体观/动作（Action）
  - B/B1. 智能体观/目标（Goal）
  - B/B2. 搜索/无信息搜索/Uniform Cost Search
  - B/B2. 搜索/启发式搜索/Greedy
- core metrics:
  - 是否保持最优解
  - 扩展节点数
  - 路径总代价
  - 运行时间
  - 峰值内存占用
  - 启发式误差或有效分支因子
- toolchain:
  - 优先队列（按 f 值出队）
  - gScore / cameFrom 映射
  - closed set 与必要时的 reopen 逻辑
  - 可采纳或一致启发式设计
  - 用于对照的 Uniform Cost Search 与 Greedy 实现
- failure signs:
  - 找到的路径比 Uniform Cost Search 更差，通常说明启发式或实现破坏了最优性
  - 同一状态多次以更差代价进入 open，说明去重或 gScore 更新有问题
  - open 集持续爆炸接近盲搜，说明启发式太弱
  - 在一致启发式场景下仍频繁需要 reopen，通常表示实现细节存在错误
  - 小图测试都无法复现实验结论，说明 f/g/h 计算或 parent 回溯逻辑有 bug
- next:
  - B/B2. 搜索/局部搜索/Hill Climbing
  - B/B3. 约束满足与组合问题/回溯搜索
  - B/B6. 规划/Plan search
  - B/B9. 经典 AI 与现代 AI 的连接点/搜索 → 推理模型 / tree search / verifier

#### 局部搜索

- pathKey: `B/B2. 搜索/局部搜索`
- node type: `concept-group`
- detail source: `data/details/domain-B.json`
- status: draft
- definition: 局部搜索直接在候选解空间里做邻域改良，不显式维护整棵搜索树，常用于近似优化和大规模组合问题。
- importance: 它展示了不依赖完整路径搜索也能得到实用解的另一条主线。
- minimum demo: 用 N-Queens 或排班问题比较 Hill Climbing 与 Simulated Annealing 的行为差异。
- prerequisites:
  - B/B2. 搜索
- core metrics:
  - 目标函数改进幅度
  - 局部最优停滞率
- next:
  - B/B2. 搜索/局部搜索/Hill Climbing
  - B/B2. 搜索/局部搜索/Simulated Annealing

##### Hill Climbing

- pathKey: `B/B2. 搜索/局部搜索/Hill Climbing`
- node type: `concept`
- detail source: `data/details/leaves-B-B2-whkeud-1.json`
- status: draft
- definition: Hill Climbing（爬山法）是一类只关注当前邻域改进的局部搜索方法。它从一个候选解出发，反复选择使目标函数更优的邻居并移动过去，直到找不到更优邻居为止，因此不显式维护完整搜索树，也不保证全局最优。
- importance: 它揭示了“并不是所有搜索都要维护路径和 open list”，很多优化问题只需要在解空间里逐步改良即可。Hill Climbing 是理解局部最优、平台区、随机重启和元启发式的基础，也适合作为大型组合优化问题的快速近似起点。
- minimum demo: 选一个 N-Queens 或简单排班问题，定义冲突数为目标函数。先随机生成一个解，再每步只尝试单变量微调并选择最优邻居，记录目标值随迭代下降的曲线，观察卡在局部最优或平台区时的行为。
- hardware budget: CPU 即可；普通笔记本足够。局部搜索单步成本通常较低，适合快速迭代大量实验。
- examples:
  - N-Queens 冲突最小化
  - 排班和资源分配中的局部交换优化
  - 特征选择或超参数搜索的近邻改进
  - Prompt / program repair 中的微调式搜索
- pitfalls:
  - 把第一次卡住误当成全局最优
  - 邻域定义过窄，根本走不出差解
  - 目标函数过于噪声化，邻域比较不稳定
  - 没有随机重启，结果高度依赖初始点
- prerequisites:
  - B/B2. 搜索
  - B/B1. 智能体观/效用（Utility）
  - B/B3. 约束满足与组合问题/调度、排班、组合优化
- core metrics:
  - 目标函数下降幅度
  - 达到局部最优所需步数
  - 随机重启成功率
  - 邻域评估成本
  - 最终解质量
- toolchain:
  - 候选解表示
  - 邻域生成器
  - 目标函数实现
  - 随机重启机制
  - 优化过程曲线可视化
- failure signs:
  - 几步内就停在明显差解
  - 不同初始点结果差异极大
  - 平台区徘徊时间很长
  - 邻域评估成本高到失去局部搜索优势
- next:
  - B/B2. 搜索/局部搜索/Simulated Annealing
  - B/B3. 约束满足与组合问题/调度、排班、组合优化
  - B/B8. 决策与多智能体/决策理论
  - B/B9. 经典 AI 与现代 AI 的连接点/决策 → RL / tool selection / policy learning

##### Simulated Annealing

- pathKey: `B/B2. 搜索/局部搜索/Simulated Annealing`
- node type: `concept`
- detail source: `data/details/leaves-B-B2-whkeud-1.json`
- status: draft
- definition: Simulated Annealing（模拟退火）是在 Hill Climbing 基础上引入“以一定概率接受更差解”的局部搜索方法。接受劣解的概率随温度逐渐下降，因此算法早期更愿意探索、后期更偏向收敛，从而有机会跳出局部最优。
- importance: 它是局部搜索迈向元启发式优化的重要一步，核心思想是用受控随机性换取更好的全局搜索能力。掌握它后，更容易理解探索-利用权衡、退火调度、随机优化和现代 black-box optimization 的直觉。
- minimum demo: 延续 N-Queens 或排班实验，保留同样的邻域与目标函数，把纯贪心更新改成按温度概率接受更差邻居。比较不同退火曲线下的最终解质量和收敛速度，观察它如何跨越 Hill Climbing 卡住的局部最优。
- hardware budget: CPU 即可；普通笔记本足够。因为需要更多随机尝试，计算量通常略高于单纯爬山法，但仍远低于大规模全局穷举。
- examples:
  - 旅行商或排班中的近似优化
  - 芯片布局、工艺参数等组合空间搜索
  - 含大量局部最优的离散设计问题
  - 需要在早期保留探索随机性的程序修复或 prompt 搜索
- pitfalls:
  - 退火太快，几乎退化成 Hill Climbing
  - 退火太慢，计算成本过高
  - 温度和接受概率公式与目标尺度不匹配
  - 误把随机跳跃当成鲁棒性保证
- prerequisites:
  - B/B2. 搜索/局部搜索/Hill Climbing
  - A/A1. 数学基础/概率统计/随机变量、分布、采样
  - B/B1. 智能体观/效用（Utility）
- core metrics:
  - 最终解质量
  - 接受劣解比例
  - 温度下降曲线
  - 运行时间
  - 多次运行的稳定性
- toolchain:
  - 随机数生成器
  - 退火调度函数
  - 邻域生成器
  - 目标函数实现
  - 多次重复实验统计
- failure signs:
  - 早期完全不接受差解或后期还在大幅随机跳
  - 多次运行方差极大且没有明显优于爬山法
  - 温度参数轻微变化就导致行为完全失控
  - 运行时间明显上升但解质量没有改善
- next:
  - B/B3. 约束满足与组合问题/调度、排班、组合优化
  - B/B8. 决策与多智能体/决策理论
  - B/B9. 经典 AI 与现代 AI 的连接点/决策 → RL / tool selection / policy learning

#### 对抗搜索

- pathKey: `B/B2. 搜索/对抗搜索`
- node type: `concept-group`
- detail source: `data/details/domain-B.json`
- status: draft
- definition: 对抗搜索考虑环境中存在会主动反制的对手，因此不再只找一条好路径，而要在最坏对手行为下选稳健动作。
- importance: 它把搜索从单主体问题扩展到博弈与竞争场景，是博弈树和 verifier 视角的重要基础。
- minimum demo: 在井字棋或取石子游戏上实现 Minimax，并比较 Alpha-Beta 与 MCTS 的差异。
- prerequisites:
  - B/B2. 搜索
  - B/B8. 决策与多智能体/博弈论直觉
- core metrics:
  - 胜率
  - 展开节点数
  - 搜索深度
- next:
  - B/B2. 搜索/对抗搜索/Minimax
  - B/B2. 搜索/对抗搜索/Alpha-Beta Pruning
  - B/B2. 搜索/对抗搜索/Monte Carlo Tree Search

##### Minimax

- pathKey: `B/B2. 搜索/对抗搜索/Minimax`
- node type: `concept`
- detail source: `data/details/leaves-B-B2-doqzvx-1.json`
- status: draft
- definition: Minimax 是零和、轮流行动博弈中的基础对抗搜索方法。它假设我方总想最大化收益、对手总想最小化收益，于是沿博弈树向下展开局面，并从叶子开始回传价值：MAX 层取最大，MIN 层取最小，最终得到在最坏情况下仍最优的动作。
- importance: 它把“对手不是环境噪声，而是主动反制者”这个思想形式化了，是理解博弈树、对抗规划、值回传和稳健决策的起点。后续的 Alpha-Beta、MCTS，乃至很多 LLM self-play、tree search 与 verifier 机制，都能看成在 Minimax 框架上的加速、近似或扩展。
- minimum demo: 实现一个井字棋或小型取石子游戏。显式定义终局收益、轮次和合法动作，再用递归写 Minimax，输出每个根动作的回传价值，验证系统会选择保证不输或尽量赢的着法。
- hardware budget: CPU 即可；普通笔记本足够。教学规模游戏树通常在秒级内可跑完，瓶颈主要来自分支因子和搜索深度。
- examples:
  - 井字棋的完备求解
  - 小型棋类或回合制游戏的对抗决策
  - 安全攻防或资源争夺的简化博弈模型
  - 把 verifier 看成反方评审者的搜索式推理实验
- pitfalls:
  - 把非零和或同时行动问题硬套成标准 Minimax
  - 叶节点评估函数过于粗糙，导致中途截断时质量很差
  - 未正确区分 MAX/MIN 轮次
  - 搜索深度稍一增加就组合爆炸
- prerequisites:
  - B/B2. 搜索
  - B/B1. 智能体观/效用（Utility）
  - B/B8. 决策与多智能体/博弈论直觉
- core metrics:
  - 搜索深度
  - 展开节点数
  - 平均分支因子
  - 终局正确率
  - 截断评估误差
- toolchain:
  - 递归搜索框架
  - 局面生成器
  - 终局评估函数
  - 缓存或 transposition table
  - 博弈树可视化
- failure signs:
  - 明明有必胜或保平着法却选错
  - 搜索结果对同一局面不稳定
  - 深度增加后运行时间爆炸
  - 中途截断后动作质量断崖下降
- next:
  - B/B2. 搜索/对抗搜索/Alpha-Beta Pruning
  - B/B2. 搜索/对抗搜索/Monte Carlo Tree Search
  - B/B8. 决策与多智能体/博弈论直觉
  - B/B9. 经典 AI 与现代 AI 的连接点/搜索 → 推理模型 / tree search / verifier

##### Alpha-Beta Pruning

- pathKey: `B/B2. 搜索/对抗搜索/Alpha-Beta Pruning`
- node type: `concept`
- detail source: `data/details/leaves-B-B2-doqzvx-1.json`
- status: draft
- definition: Alpha-Beta Pruning 是 Minimax 的等价加速方法。它在搜索过程中维护当前已知的下界 alpha 和上界 beta；一旦发现某个分支不可能优于已有选择，就提前剪掉，不再继续展开，从而在不改变最终最优决策的前提下减少搜索量。
- importance: 它证明了对抗搜索性能不只取决于算法定义，还取决于剪枝与动作排序。Alpha-Beta 是经典博弈程序真正可用起来的关键一步，也是理解 branch-and-bound、搜索预算管理和“顺序影响效率”的代表性案例。
- minimum demo: 在已有井字棋或小型棋类 Minimax 代码上加入 alpha 和 beta 参数，记录剪枝前后的展开节点数。再对比随机动作排序与“优先尝试更强动作”排序，观察排序质量如何显著影响剪枝效果。
- hardware budget: CPU 即可；普通笔记本足够。和 Minimax 相比不需要额外硬件，但能在相同预算下支持更深搜索。
- examples:
  - 国际象棋或黑白棋程序中的基本剪枝
  - 小型博弈环境中在相同时间预算下搜索更深层次
  - 把候选推理步骤先按置信度排序后做树搜索裁剪
  - 任何具有上界/下界的 branch-and-bound 风格搜索
- pitfalls:
  - alpha/beta 更新位置写错，导致错误剪枝
  - 以为加了 Alpha-Beta 就一定快，忽视动作排序质量
  - 剪枝逻辑与 transposition table 结合不当
  - 把近似评估误差当成剪枝逻辑问题
- prerequisites:
  - B/B2. 搜索/对抗搜索/Minimax
  - B/B2. 搜索
  - A/A2. 计算机基础/数据结构与算法
- core metrics:
  - 剪枝率
  - 展开节点数下降比例
  - 在固定预算下可达搜索深度
  - 动作排序收益
  - 最终决策是否与 Minimax 一致
- toolchain:
  - Minimax 基线实现
  - 节点计数器
  - 动作排序启发式
  - 可选 transposition table
  - profiling
- failure signs:
  - 结果与原始 Minimax 不一致
  - 节点数几乎没下降，说明排序过差或实现有误
  - 深度一加就出现莫名错误局面值
  - 不同遍历顺序下程序行为异常波动
- next:
  - B/B2. 搜索/对抗搜索/Monte Carlo Tree Search
  - B/B6. 规划/Plan search
  - B/B8. 决策与多智能体/博弈论直觉
  - B/B9. 经典 AI 与现代 AI 的连接点/搜索 → 推理模型 / tree search / verifier

##### Monte Carlo Tree Search

- pathKey: `B/B2. 搜索/对抗搜索/Monte Carlo Tree Search`
- node type: `concept`
- detail source: `data/details/leaves-B-B2-doqzvx-1.json`
- status: draft
- definition: Monte Carlo Tree Search（MCTS）是一类用采样近似大规模博弈树或决策树价值的搜索方法。它通常循环执行选择、扩展、模拟、回传四步，用 UCT 等策略在探索新分支和利用高价值分支之间平衡，因此不必像 Minimax 那样穷举整棵树。
- importance: 当动作空间大、深度深或评估函数难以精确写出时，MCTS 往往比固定深度 Minimax 更实用。它是 AlphaGo 类系统、规划式 RL 和很多 LLM tree search 原型的直接祖先，也帮助把经典搜索过渡到统计采样与学习辅助搜索。
- minimum demo: 做一个可枚举动作但树较大的小游戏或随机决策环境，实现 MCTS 主循环与 UCT 选择公式。先不给任何策略网络，只用随机 rollout，观察访问次数最多或平均回报最高的根动作如何逐步稳定。
- hardware budget: CPU 即可开始；普通笔记本足够做教学实验。预算主要取决于 rollout 次数和每次模拟成本；当模拟器昂贵或要接模型评估时，时间开销会迅速上升。
- examples:
  - 围棋、Hex 等大分支博弈
  - 复杂规划问题中的采样树搜索
  - 代码生成或数学推理中的候选轨迹采样与回传
  - 结合 value model 的决策树评估
- pitfalls:
  - rollout 质量太差，导致回报信号噪声极大
  - 把访问次数最多和平均回报最高的动作混用却没说明策略
  - UCT 常数调得不合适，探索/利用严重失衡
  - 树结构缓存与状态去重不足，重复模拟过多
- prerequisites:
  - B/B2. 搜索/对抗搜索/Minimax
  - B/B2. 搜索/对抗搜索/Alpha-Beta Pruning
  - A/A1. 数学基础/概率统计/随机变量、分布、采样
- core metrics:
  - rollout 次数
  - 每个根动作访问次数
  - 平均回报与方差
  - 在固定预算下的胜率
  - 单次模拟成本
- toolchain:
  - 树节点数据结构
  - 随机或启发式 rollout 策略
  - UCT 公式实现
  - 访问计数与回报统计
  - 可选策略/价值模型接口
- failure signs:
  - 增加 rollout 次数后动作选择仍高度随机
  - 搜索预算大部分花在明显无价值分支
  - 根动作访问分布异常集中或完全平均
  - 模拟器噪声大到回传值几乎不可用
- next:
  - B/B8. 决策与多智能体/MDP
  - B/B8. 决策与多智能体/Multi-agent decision making
  - B/B9. 经典 AI 与现代 AI 的连接点/搜索 → 推理模型 / tree search / verifier
  - J/J4. 会话与状态/Context compaction

### B3. 约束满足与组合问题

- pathKey: `B/B3. 约束满足与组合问题`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-B.json`
- status: draft
- definition: 约束满足与组合问题关注的不是在状态图里一路走到目标，而是在大量变量赋值或组合候选中，找到一组同时满足约束的可行解，必要时再进一步优化目标函数。它强调变量、取值域、约束结构、传播和剪枝，而不一定依赖显式路径。
- importance: 很多真实世界任务并不天然长成路径规划，而是长成排班、排课、资源分配、工序安排、布尔可满足性或组合优化。CSP、SAT / SMT、回溯和约束传播提供了一套可解释、可验证的求解框架，也是现代规划、调度、编译验证和部分神经符号系统的重要基础。
- minimum demo: 做一个小型课程排班器：变量是课程时段和教室，域是可选时间和房间，约束包括教师不可冲突、教室容量、课程先后依赖。先用朴素回溯，再加入 MRV、forward checking 或 arc consistency，比较回溯次数和求解时间。
- hardware budget: CPU 即可；普通笔记本足够覆盖教学规模问题。规模继续上涨时，瓶颈主要来自约束密度、域大小和求解器的内存/时间复杂度；是否需要更强机器取决于问题规模，而不是图形硬件。
- examples:
  - 课程表与排班
  - 车辆路径与资源分配中的离散部分
  - 电路验证、程序分析中的 SAT / SMT
  - 生产调度和工序优化
- pitfalls:
  - 没有把业务问题拆成变量、域和约束，直接硬编码规则
  - 只会暴力回溯，不利用传播和启发式
  - 把可行性问题和优化问题混为一谈
  - 忽视约束冲突解释与不可满足诊断
- prerequisites:
  - B/B1. 智能体观/状态（State）
  - B/B2. 搜索
  - A/A2. 计算机基础/数据结构与算法
- core metrics:
  - 约束满足率
  - 回溯次数
  - 传播削减的域大小
  - 求解时间
  - 最优目标值
- toolchain:
  - OR-Tools
  - PySAT
  - Z3
  - Python
  - 约束可视化或日志分析
- failure signs:
  - 回溯树指数爆炸且没有传播效果
  - 求解器经常返回 unsat 但无法解释原因
  - 一加业务规则就需要大量手工改代码
  - 可行解存在，但模型长期找不到
- next:
  - B/B3. 约束满足与组合问题/CSP
  - B/B3. 约束满足与组合问题/SAT / SMT
  - B/B3. 约束满足与组合问题/回溯搜索
  - B/B3. 约束满足与组合问题/约束传播
  - B/B6. 规划/Symbolic planning

#### CSP

- pathKey: `B/B3. 约束满足与组合问题/CSP`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B3-1h1bnr4-1.json`
- status: draft
- definition: CSP（Constraint Satisfaction Problem）把问题形式化为变量集合、每个变量的取值域，以及限制变量组合可取值的约束集合。目标通常不是优化某条路径，而是找到一组变量赋值，使所有约束同时成立。
- importance: CSP 是约束建模的核心抽象，排班、拼图、地图着色、资源分配等问题都能统一落到这里。理解 CSP 后，回溯、传播、启发式选点以及 SAT / SMT 与规划之间的关系都会变得清晰。
- minimum demo: 做一个地图着色或课程排班例子，明确列出变量、域和约束，再实现一个简单求解器或调用 OR-Tools 求一个可行解。重点不是工具，而是你能把业务问题拆解成标准 CSP 结构。
- hardware budget: CPU 即可；普通笔记本足够。中小规模 CSP 原型在几百毫秒到几秒内就能完成。
- examples:
  - 地图着色
  - 数独求解
  - 课程排班
  - 会议室与设备资源分配
- pitfalls:
  - 变量和约束粒度定义错误，导致模型难解或表达不足
  - 约束只写在代码逻辑里，没有显式建模
  - 一开始就混入过多优化目标，掩盖可行性问题
  - 对称解太多却没有做任何破坏对称处理
- prerequisites:
  - B/B3. 约束满足与组合问题/变量、域、约束
  - B/B2. 搜索
- core metrics:
  - 可行解是否存在
  - 求解时间
  - 回溯次数
  - 剩余域收缩程度
  - 约束违反数
- toolchain:
  - OR-Tools CP-SAT
  - python-constraint
  - 自定义回溯求解器
  - 日志分析
- failure signs:
  - 模型稍增大就不可解
  - 约束冲突频繁但定位困难
  - 求解器返回的可行解不符合业务常识
  - 变量和域定义经常来回改动
- next:
  - B/B3. 约束满足与组合问题/回溯搜索
  - B/B3. 约束满足与组合问题/约束传播
  - B/B3. 约束满足与组合问题/SAT / SMT

#### SAT / SMT

- pathKey: `B/B3. 约束满足与组合问题/SAT / SMT`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B3-1h1bnr4-1.json`
- status: draft
- definition: SAT 关注布尔公式是否存在满足赋值；SMT 在 SAT 之上再结合整数、实数、数组、位向量等理论约束，使可满足性判断能表达更丰富的程序与系统性质。它们把很多离散约束问题转成标准求解问题。
- importance: SAT / SMT 是现代约束求解与形式验证的重要基础，在程序分析、硬件验证、配置检查、计划验证和部分神经符号系统中都极其重要。理解它能帮助把“业务约束”连接到强大的工业求解器能力上。
- minimum demo: 先用几个布尔变量写一个小型逻辑约束问题，如课程不可冲突、至少选择一项，再用 PySAT 或 Z3 求解。然后加一个整数约束，体会 SMT 相比 SAT 的表达扩展。
- hardware budget: CPU 即可；普通笔记本足够入门实验。复杂公式和大规模实例才会显著推高时间与内存成本。
- examples:
  - 硬件电路一致性检查
  - 软件路径可达性与断言验证
  - 配置冲突检测
  - 符号规划和排班建模的底层求解
- pitfalls:
  - 公式编码错误，求解器给出正确但无意义的结果
  - 把高层业务语义压成难以维护的低层布尔公式
  - 误以为 unsat 就等于需求有问题，而不是模型有问题
  - 没有利用求解器返回的模型或 unsat core 做诊断
- prerequisites:
  - B/B3. 约束满足与组合问题/CSP
  - B/B5. 推理/演绎推理
  - A/A2. 计算机基础/数据结构与算法
- core metrics:
  - sat/unsat 判定时间
  - 子句数量
  - 理论约束数量
  - 求解器回溯次数
  - 冲突解释质量
- toolchain:
  - PySAT
  - Z3
  - SMT-LIB
  - 约束编码脚本
  - 模型与 unsat core 分析
- failure signs:
  - 公式稍复杂就求解极慢
  - 编码后的变量语义难以回溯
  - 求解结果无法映射回业务实体
  - 对 sat 和 unsat 的解释都很困难
- next:
  - B/B5. 推理/演绎推理
  - B/B6. 规划/Plan verification
  - B/B6. 规划/Symbolic planning

#### 变量、域、约束

- pathKey: `B/B3. 约束满足与组合问题/变量、域、约束`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B3-1h1bnr4-1.json`
- status: draft
- definition: 变量是需要决定的对象，域是每个变量允许取的候选值集合，约束定义哪些变量组合是允许的。它们共同构成了约束问题的最小建模单元，是把业务问题翻译成 CSP、SAT / SMT 或调度求解器输入的第一步。
- importance: 很多约束求解失败并不是算法太弱，而是变量、域、约束建模不清。只要这三件事拆得准，很多问题自然就进入可求解状态；拆得差，再强的求解器也只能在错误模型上浪费时间。
- minimum demo: 以课程排班为例，先列出课程时段、教室、教师三个变量族，再分别定义域和约束。只做建模，不写算法，先让别人或未来的你能从模型结构看懂问题。
- hardware budget: 几乎无硬件门槛；纸笔、表格或普通笔记本即可。
- examples:
  - 课程 -> 可选时段与教室
  - 护士 -> 可选班次
  - 芯片模块 -> 可能位置
  - 布尔命题 -> true/false
- pitfalls:
  - 变量定义过粗导致表达力不足
  - 域过大且没做先验裁剪
  - 把隐含约束漏掉
  - 约束写成过程代码而不是显式关系
- prerequisites:
  - B/B1. 智能体观/状态（State）
  - A/A2. 计算机基础/数据结构与算法
- core metrics:
  - 变量数量
  - 平均域大小
  - 约束密度
  - 二元/全局约束占比
  - 建模可读性
- toolchain:
  - 表格或 YAML 建模
  - OR-Tools
  - Z3
  - 建模文档
- failure signs:
  - 业务一变动模型就得重写
  - 求解器输入和业务实体对不上
  - 约束冲突经常来源不明
  - 模型读不出来真实问题结构
- next:
  - B/B3. 约束满足与组合问题/CSP
  - B/B3. 约束满足与组合问题/约束传播
  - B/B3. 约束满足与组合问题/回溯搜索

#### 回溯搜索

- pathKey: `B/B3. 约束满足与组合问题/回溯搜索`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B3-1h1bnr4-1.json`
- status: draft
- definition: 回溯搜索是在变量逐步赋值的过程中，一旦发现当前部分解违反约束，就撤销最近决策并尝试其他候选值。它是 CSP 最基础、最直接的求解框架，也是许多更复杂求解器的骨架。
- importance: 回溯搜索提供了“先试、发现冲突、再退回”的通用求解逻辑。理解它之后，MRV、LCV、forward checking、arc consistency 等技巧为什么有效就有了明确抓手。
- minimum demo: 写一个数独或地图着色回溯求解器，先用最朴素的变量顺序和取值顺序跑通，再加入启发式比较搜索树大小。
- hardware budget: CPU 即可；普通笔记本足够。朴素回溯在小问题上完全可用。
- examples:
  - 数独求解
  - 课程排班的递归赋值
  - 组合拼图或着色问题
  - 简单 SAT 的 DPLL 风格搜索骨架
- pitfalls:
  - 没有及早剪枝，导致无意义地走深
  - 变量选择顺序固定且很差
  - 状态回滚写错，污染后续分支
  - 把优化目标混进可行性搜索主循环
- prerequisites:
  - B/B3. 约束满足与组合问题/CSP
  - B/B2. 搜索
- core metrics:
  - 回溯次数
  - 搜索树深度
  - 平均分支因子
  - 找到首个可行解时间
  - 剪枝命中率
- toolchain:
  - 递归或显式栈实现
  - 变量选择启发式
  - 冲突检测函数
  - 日志与搜索树可视化
- failure signs:
  - 很小实例都跑得非常慢
  - 换个输入顺序性能差异极大
  - 回滚后状态残留
  - 几乎所有时间都花在重复无效分支
- next:
  - B/B3. 约束满足与组合问题/约束传播
  - B/B2. 搜索/启发式搜索/A*
  - B/B6. 规划/Plan search

#### 约束传播

- pathKey: `B/B3. 约束满足与组合问题/约束传播`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B3-1h1bnr4-1.json`
- status: draft
- definition: 约束传播是在搜索过程中利用局部约束关系提前删除不可能的取值，从而缩小变量域、提早暴露冲突。常见形式包括 forward checking、arc consistency 和各种全局约束传播。
- importance: 传播是让回溯搜索从暴力枚举升级为“带推理的搜索”的关键。很多 CSP 性能提升并不来自更聪明的回溯框架，而来自传播把大量无效分支在进入深层搜索前就剪掉了。
- minimum demo: 在数独或排班回溯器里加上 forward checking：每次赋值后更新相邻变量可选值，若某个域为空则立即回溯。再进一步实现一个简单 arc consistency，比较回溯次数下降幅度。
- hardware budget: CPU 即可；普通笔记本足够。传播会增加单步开销，但通常能显著降低总体搜索成本。
- examples:
  - 数独中行列宫的候选值删除
  - 排班中教师被占用时直接删除时段
  - 路径规划中的不满足前置条件动作提前剪掉
  - SAT 求解中的 unit propagation 类思想
- pitfalls:
  - 传播实现复杂但收益很小，说明约束结构不适合
  - 域更新和回滚机制写错
  - 传播过重导致单步成本反而拖垮整体性能
  - 把传播当成完整求解，忽略仍需要搜索
- prerequisites:
  - B/B3. 约束满足与组合问题/CSP
  - B/B3. 约束满足与组合问题/回溯搜索
- core metrics:
  - 域缩减比例
  - 提前发现冲突次数
  - 回溯次数下降比例
  - 单步传播成本
  - 总求解时间
- toolchain:
  - 域数据结构
  - 邻接约束图
  - 回滚栈
  - forward checking / AC-3 实现
- failure signs:
  - 传播后域状态经常不一致
  - 单步成本高于减少的搜索收益
  - 回滚后候选域不能恢复
  - 传播命中率极低
- next:
  - B/B3. 约束满足与组合问题/调度、排班、组合优化
  - B/B6. 规划/Symbolic planning
  - B/B6. 规划/Plan verification

#### 调度、排班、组合优化

- pathKey: `B/B3. 约束满足与组合问题/调度、排班、组合优化`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B3-1h1bnr4-1.json`
- status: draft
- definition: 调度、排班、组合优化是约束求解在真实业务中的典型落地形态：不仅要找可行解，还要在资源、时间、成本、优先级等多重约束下找到更优方案。它们通常把 CSP 可行性与优化目标结合起来。
- importance: 这是经典 AI 直接进入工业应用的一条主干线。生产调度、物流路由、班表、广告投放、云资源分配等问题，都属于“结构清晰但组合巨大”的任务，也是 LLM 很难单独解决、却很适合与优化器协同的场景。
- minimum demo: 做一个 10 人一周排班器：约束包括每班最少人数、每人最大班次数、夜班后休息等，目标是尽量均衡工作量。先找到可行解，再加入一个简单目标函数比较多个方案。
- hardware budget: CPU 即可做中小规模原型；普通笔记本足够。真实工业规模可能需要更长求解时间、更细调参或分解式求解。
- examples:
  - 医院护士排班
  - 工厂作业调度
  - 课程表与会议安排
  - 配送路由与车辆分配
- pitfalls:
  - 业务规则持续叠加但模型缺少分层
  - 只有硬约束，没有合理优化目标
  - 把人类偏好或公平性遗漏在模型外
  - 求解可行但不可执行，说明约束不完整
- prerequisites:
  - B/B3. 约束满足与组合问题/CSP
  - B/B3. 约束满足与组合问题/约束传播
  - B/B2. 搜索/局部搜索/Hill Climbing
- core metrics:
  - 约束满足率
  - 目标函数值
  - 求解时间
  - 方案公平性或均衡度
  - 扰动后重排成本
- toolchain:
  - OR-Tools CP-SAT
  - MILP 求解器
  - 局部搜索或元启发式
  - 场景模拟与报表
- failure signs:
  - 业务方不断手工修补求解结果
  - 加一条规则就导致求解崩溃
  - 最优值提升却用户满意度下降
  - 一有临时变化就需要从头重排
- next:
  - B/B2. 搜索/局部搜索/Simulated Annealing
  - B/B6. 规划/Task planning
  - N/N3. 决策变量/质量要求
  - N/N3. 决策变量/成本预算

### B4. 知识表示

- pathKey: `B/B4. 知识表示`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-B.json`
- status: draft
- definition: 知识表示研究如何把世界中的对象、关系、属性、规则和约束编码成机器可操作、可推理、可维护的结构。它回答的不是“怎么搜索”，而是“到底要用什么形式把知识放进去，才能让系统知道自己在推什么”。
- importance: 表示方式决定了后续推理、检索、规划和知识维护的上限。命题逻辑、一阶逻辑、规则、本体、图谱和符号结构并不是互斥选项，而是一组不同抽象粒度的知识承载方式；今天的 KG-RAG、ontology-guided systems、verifier 和规则混合 Agent，仍然直接继承这条主线。
- minimum demo: 选一个小领域，例如课程管理或故障诊断。分别用三元组、规则和简单 schema 组织同一组知识，再实现一个最小查询或推理过程，比如根据先修课关系判断选课可行性，或根据症状规则输出诊断候选。
- hardware budget: CPU 即可；普通笔记本足够做原型。多数表示实验的成本不在算力，而在知识建模、数据清洗和一致性维护。
- examples:
  - 专家系统中的 if-then 规则
  - 本体约束下的企业知识库
  - 知识图谱驱动的关系查询与补全
  - RAG 系统中的 schema-aware retrieval
- pitfalls:
  - 只关注存储格式，不关注推理和维护需求
  - 图谱和本体混为一谈
  - 知识条目缺少统一实体/关系规范
  - 表示层建得很复杂，但没有实际可执行查询或推理链路
- prerequisites:
  - B/B1. 智能体观/状态（State）
  - B/B3. 约束满足与组合问题/变量、域、约束
- core metrics:
  - 表示覆盖率
  - 一致性
  - 可查询性
  - 可推理性
  - 维护成本
- toolchain:
  - Neo4j
  - RDFLib
  - Protégé
  - 规则引擎
  - Schema / ontology 文档
- failure signs:
  - 同一事实在不同结构里语义不一致
  - 实体、关系命名频繁漂移
  - 知识更新需要大量人工修表
  - 能存知识但做不了稳定查询或推理
- next:
  - B/B4. 知识表示/命题逻辑
  - B/B4. 知识表示/一阶逻辑
  - B/B4. 知识表示/规则系统
  - B/B4. 知识表示/知识图谱
  - B/B9. 经典 AI 与现代 AI 的连接点/知识表示 → KG-RAG / ontology-guided systems

#### 命题逻辑

- pathKey: `B/B4. 知识表示/命题逻辑`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B4-1ixr0on-1.json`
- status: draft
- definition: 命题逻辑用真假命题及其与、或、非、蕴含等连接词来表示知识，不显式表示对象内部结构。它适合处理离散真假关系和规则组合，是形式推理和 SAT 建模的最小逻辑底座。
- importance: 它提供了最清晰的可判定逻辑系统之一，也是理解演绎推理、可满足性、规则冲突和布尔约束编码的入口。很多复杂求解问题在底层都会先被降到命题逻辑或其变体上。
- minimum demo: 把一个门禁或课程冲突问题写成若干布尔命题和逻辑公式，再手动或用小脚本求可满足赋值，验证哪些组合是允许的。
- hardware budget: 几乎无门槛；纸笔或普通笔记本即可。
- examples:
  - 如果课程 A 和课程 B 冲突，则不能同时选
  - 若登录成功则已通过认证
  - SAT 子句中的布尔变量关系
- pitfalls:
  - 把需要对象和量词的问题硬压成命题逻辑
  - 命题粒度过粗，导致表达力不够
  - 公式可读性太差，难以维护
  - 逻辑正确但与业务语义脱节
- prerequisites:
  - B/B4. 知识表示
  - A/A1. 数学基础/概率统计/条件概率、贝叶斯
- core metrics:
  - 公式规模
  - 可满足性判定时间
  - 约束覆盖率
  - 可解释性
- toolchain:
  - 布尔表达式库
  - PySAT
  - 真值表脚本
- failure signs:
  - 公式数量一多就难以维护
  - 业务变动后大量公式要重写
  - 逻辑冲突很难定位
- next:
  - B/B4. 知识表示/一阶逻辑
  - B/B5. 推理/演绎推理
  - B/B3. 约束满足与组合问题/SAT / SMT

#### 一阶逻辑

- pathKey: `B/B4. 知识表示/一阶逻辑`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B4-1ixr0on-1.json`
- status: draft
- definition: 一阶逻辑在命题逻辑之上加入对象、谓词、函数和量词，可以表达“所有”“存在”“某对象满足某关系”等结构化事实。它比命题逻辑更有表达力，适合描述对象世界中的普遍规则。
- importance: 一阶逻辑是连接知识表示和形式推理的关键桥梁。只要系统需要表达对象间关系、继承结构、规则泛化或数据库风格查询，命题逻辑就往往不够，而一阶逻辑提供了更自然的抽象层。
- minimum demo: 写一个小型课程域：`Prereq(x, y)`、`Course(x)`、`Teacher(t, c)` 等谓词，再用量词表示“所有课程若有先修课，则需先完成”。随后给几个具体事实，手工验证结论是否成立。
- hardware budget: CPU 即可；普通笔记本足够。成本主要在表达与推理复杂度，而非硬件。
- examples:
  - 所有必修课都需要老师负责
  - 存在一门课程是另一门课的先修课
  - 医学诊断中对象-属性-关系建模
- pitfalls:
  - 量词作用域写错
  - 把闭世界假设默认带入开放世界知识库
  - 谓词设计不规范，导致表达混乱
  - 忽视推理复杂度
- prerequisites:
  - B/B4. 知识表示/命题逻辑
  - B/B4. 知识表示/符号表示
- core metrics:
  - 表达覆盖率
  - 推理时间
  - 谓词规范度
  - 规则复用性
- toolchain:
  - 逻辑建模脚本
  - Prolog
  - 定理证明器
  - 知识建模文档
- failure signs:
  - 同一事实有多种互不兼容表达
  - 量词和对象边界经常搞混
  - 推理一复杂就难以调试
- next:
  - B/B4. 知识表示/规则系统
  - B/B5. 推理/定理证明
  - B/B5. 推理/演绎推理

#### 规则系统

- pathKey: `B/B4. 知识表示/规则系统`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B4-1ixr0on-1.json`
- status: draft
- definition: 规则系统用显式的 if-then 规则、事实库和匹配机制表示知识，并根据条件是否满足触发动作或推出新事实。它强调局部、可解释、可手工维护的知识块。
- importance: 规则系统是专家系统时代最典型的知识表示与推理组合形式，今天在风控、流程控制、告警治理、工具权限和 hybrid agent guardrail 中依然常见。它帮助系统在不依赖大模型参数学习的情况下稳定执行明确策略。
- minimum demo: 做一个简单故障诊断或审批规则引擎：输入若干事实，按规则推导告警等级或处理动作，并输出触发链路。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 风控白名单/黑名单规则
  - 专家系统诊断规则
  - 工具调用前的权限与安全校验
  - 流程自动化里的条件分支
- pitfalls:
  - 规则互相冲突但没有优先级管理
  - 规则数量增长后维护困难
  - 例外情况不断叠加，形成脆弱规则网
  - 只存规则不记录命中证据链
- prerequisites:
  - B/B4. 知识表示/命题逻辑
  - B/B4. 知识表示/一阶逻辑
- core metrics:
  - 规则命中率
  - 冲突规则数量
  - 误触发率
  - 规则维护成本
- toolchain:
  - Drools 或自定义规则引擎
  - 日志链路
  - 规则测试集
- failure signs:
  - 新增规则频繁破坏旧规则
  - 命中逻辑无法解释
  - 规则覆盖不到真实异常分支
- next:
  - B/B5. 推理/规则推理
  - B/B4. 知识表示/本体（Ontology）
  - B/B9. 经典 AI 与现代 AI 的连接点/知识表示 → KG-RAG / ontology-guided systems

#### 本体（Ontology）

- pathKey: `B/B4. 知识表示/本体（Ontology）`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B4-1ixr0on-1.json`
- status: draft
- definition: 本体是对某个领域中概念、属性、关系和层级约束的显式规范，用来定义“这个领域里有哪些类型、它们如何关联、哪些推断是被允许的”。它强调语义一致性和共享词汇表。
- importance: 当知识不只是存储，还要跨团队、跨系统共享语义时，本体就变得关键。它为知识图谱、schema 约束、ontology-guided retrieval 和可审计推理提供统一语义边界，避免“同名不同义”或“同义不同名”。
- minimum demo: 为课程管理或设备资产管理建立一个小型 ontology：定义 `Course`、`Teacher`、`Room` 等类及其关系，再用 Protégé 或 RDFLib 表达，并检查基本层级和约束是否自洽。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 企业资产与权限 ontology
  - 医学术语本体
  - 知识图谱 schema 设计
  - KG-RAG 的实体类型和关系约束
- pitfalls:
  - 把数据库表结构误当 ontology
  - 类和实例边界不清
  - ontology 过大过细，维护成本失控
  - 没有和真实查询、检索、推理流程打通
- prerequisites:
  - B/B4. 知识表示/一阶逻辑
  - B/B4. 知识表示/符号表示
- core metrics:
  - 语义一致性
  - 概念复用率
  - schema 约束覆盖率
  - 维护成本
- toolchain:
  - Protégé
  - OWL/RDF
  - RDFLib
  - schema 评审文档
- failure signs:
  - 同一实体类型在多处重复定义
  - 关系命名频繁歧义
  - 图谱落地时大量人工映射
- next:
  - B/B4. 知识表示/知识图谱
  - B/B4. 知识表示/语义网络
  - B/B9. 经典 AI 与现代 AI 的连接点/知识表示 → KG-RAG / ontology-guided systems

#### 知识图谱

- pathKey: `B/B4. 知识表示/知识图谱`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B4-1ixr0on-1.json`
- status: draft
- definition: 知识图谱用实体、关系和属性的图结构组织知识，通常以三元组或属性图形式存储，使系统能够沿关系边做查询、聚合、路径发现和结构化知识增强。
- importance: 知识图谱把知识表示从“孤立规则或表”推进到“可连通的关系网络”，非常适合做多跳查询、实体链接、上下文增强和解释型检索。今天很多 KG-RAG、企业知识中台和 recommendation reasoning 都建立在这层能力上。
- minimum demo: 用 Neo4j 或 RDFLib 建一个小型课程图谱：课程、老师、教室、先修关系，支持至少两类查询，例如“某课程的所有先修链条”和“某老师相关课程网络”。
- hardware budget: CPU 即可；普通笔记本足够做原型。图规模变大后主要瓶颈在存储、索引和查询延迟。
- examples:
  - 企业组织与权限关系图
  - 学术论文引用图
  - 商品-品牌-类目-属性知识图谱
  - KG-RAG 的结构化外部知识层
- pitfalls:
  - 实体去重和关系规范做不好，图会迅速脏化
  - 只建图不做查询场景设计
  - 图谱更新链路不稳定，知识长期过期
  - 把图数据库当成万能检索替代品
- prerequisites:
  - B/B4. 知识表示/本体（Ontology）
  - B/B4. 知识表示/语义网络
- core metrics:
  - 实体覆盖率
  - 关系完整度
  - 图更新延迟
  - 查询命中率
  - 多跳检索质量
- toolchain:
  - Neo4j
  - RDF store
  - 实体对齐/清洗脚本
  - Graph query language
- failure signs:
  - 图中同一实体大量重复
  - 查询结果依赖手工记忆而非 schema
  - 图谱构建后长期不更新
  - 多跳查询质量很差
- next:
  - B/B9. 经典 AI 与现代 AI 的连接点/知识表示 → KG-RAG / ontology-guided systems
  - I/I1. 表示与检索基础/Hybrid retrieval
  - I/I3. RAG 管线/Retrieval

#### 语义网络

- pathKey: `B/B4. 知识表示/语义网络`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B4-1ixr0on-1.json`
- status: draft
- definition: 语义网络用图节点和边表达概念及其关系，是知识图谱和更正式本体系统的直观前身。它通常强调“概念之间如何联结”，例如 is-a、part-of、related-to 等语义关系。
- importance: 它帮助建立“知识是网络而不是平面列表”的直觉，也是后来图谱、关系推理和联想式检索的重要前置概念。很多图式思维和路径解释都可以先从语义网络入门。
- minimum demo: 画一个小型语义网络，比如课程、技能、工具之间的关系网，并实现一个简单的邻居或多跳路径查询，感受语义连接如何支持解释。
- hardware budget: 几乎无门槛；纸笔、Mermaid 或普通笔记本即可。
- examples:
  - 动物分类与属性关系图
  - 技能树和课程依赖网络
  - 工具能力与任务适配关系
- pitfalls:
  - 边语义不统一
  - 图结构漂亮但查询意义弱
  - 缺少 schema 约束导致关系滥用
- prerequisites:
  - B/B4. 知识表示/符号表示
- core metrics:
  - 关系清晰度
  - 节点/边一致性
  - 路径可解释性
- toolchain:
  - Graph drawing tools
  - Neo4j
  - NetworkX
- failure signs:
  - 边类型越来越多但没人说得清差别
  - 不同建图人画出的网络无法对齐
  - 图只能展示，不能服务实际任务
- next:
  - B/B4. 知识表示/知识图谱
  - B/B4. 知识表示/本体（Ontology）

#### 符号表示

- pathKey: `B/B4. 知识表示/符号表示`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B4-1ixr0on-1.json`
- status: draft
- definition: 符号表示是用离散、显式、可命名的符号结构来描述世界，而不是直接用连续向量隐式编码。它可以是逻辑公式、规则、图结构、schema、类型体系或可组合的结构对象。
- importance: 它是经典 AI 的共同底色：只有先把知识变成可引用、可组合、可检查的符号，后续的逻辑推理、规则触发、规划验证和图谱查询才有稳定基础。即便现代系统大量依赖向量表示，很多可审计、可控的系统环节仍需要符号层兜底。
- minimum demo: 把同一组事实分别表示成自然语言段落和结构化符号对象，比较谁更容易被程序查询、校验和复用。重点是感受“显式结构”带来的操作性。
- hardware budget: 无特殊要求；普通笔记本即可。
- examples:
  - 课程依赖关系的结构化 schema
  - 规则引擎中的条件和动作模板
  - 知识图谱中的实体与关系类型
- pitfalls:
  - 把所有知识都强制符号化，忽视模糊语义
  - 符号层设计过度，维护成本过高
  - 符号命名不统一，导致引用失真
- prerequisites:
  - B/B4. 知识表示
- core metrics:
  - 可引用性
  - 结构一致性
  - 可组合性
  - 维护成本
- toolchain:
  - Schema 文档
  - 类型系统
  - 规则或逻辑建模工具
- failure signs:
  - 知识不能被稳定引用
  - 相同概念在不同模块名字不一致
  - 结构一改就牵连大量下游
- next:
  - B/B4. 知识表示/命题逻辑
  - B/B4. 知识表示/一阶逻辑
  - B/B4. 知识表示/语义网络

### B5. 推理

- pathKey: `B/B5. 推理`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-B.json`
- status: draft
- definition: 推理关注的是：在已有事实、规则、逻辑结构或知识库之上，如何导出新的结论、解释现象或判断某个命题是否成立。它不是简单检索已有答案，而是沿着表示结构做可检查的结论推进。
- importance: 表示只是把知识放进去，推理才是把知识真正用起来。经典 AI 中的演绎、归纳、溯因、定理证明和规则推理，构成了今天 verifier、critic、规则 guardrail、知识增强 QA 和部分神经符号系统的直接前身。
- minimum demo: 选一个小知识域，例如课程管理或故障诊断。先录入一组事实和规则，再分别实现一个演绎式判断和一个溯因式解释，例如判断某学生是否满足选课条件，以及根据观测症状推出最可能故障原因。
- hardware budget: CPU 即可；普通笔记本足够。成本主要由知识规模、推理深度和是否需要搜索式证明决定。
- examples:
  - 规则引擎中的条件触发与结论输出
  - 知识库问答里的事实链路拼接
  - 形式化验证中的定理证明或可满足性判定
  - LLM 系统中的 verifier / critic / rule checker
- pitfalls:
  - 把检索、推理和生成混成一层，不知道结论从哪里来
  - 表示层不规范，导致推理链路不稳定
  - 只追求可解释，不考虑推理成本和规模扩展
  - 归纳、溯因和演绎概念混用
- prerequisites:
  - B/B4. 知识表示
  - B/B3. 约束满足与组合问题/SAT / SMT
- core metrics:
  - 结论正确率
  - 推理链长度
  - 证明或匹配时间
  - 规则冲突率
  - 可解释性
- toolchain:
  - 规则引擎
  - Prolog 或逻辑工具
  - SAT/SMT 求解器
  - 知识库查询接口
  - trace 日志
- failure signs:
  - 同样输入在不同顺序下推出不同结论
  - 推理链很长但没有实际增益
  - 规则或事实轻微变化就大面积失效
  - 结论正确但无法解释来源
- next:
  - B/B5. 推理/演绎推理
  - B/B5. 推理/规则推理
  - B/B5. 推理/基于知识的问答
  - B/B6. 规划/Plan verification

#### 演绎推理

- pathKey: `B/B5. 推理/演绎推理`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B5-17kf6mb-1.json`
- status: draft
- definition: 演绎推理是从一般规则和已知事实出发，推出在逻辑上必然成立的结论。只要前提为真且推理规则有效，结论就在体系内必然为真。
- importance: 它是最经典、最可验证的推理形式，适合规则执行、权限判断、计划校验和形式化检查。很多现代系统里的 verifier、policy checker 和 deterministic guardrail，本质上都在做演绎式判断。
- minimum demo: 定义一组课程先修规则和学生修课事实，写出“若完成 A 且完成 B，则可选 C”这类规则，然后自动判断某学生是否满足选课条件。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 权限系统中的访问判定
  - 先修课资格判断
  - 流程节点是否满足前置条件
  - 规则引擎中的必然结论推导
- pitfalls:
  - 把不确定结论也硬当成演绎结果
  - 前提事实库本身不可靠
  - 规则冲突未处理
  - 闭世界/开世界假设不清
- prerequisites:
  - B/B4. 知识表示/命题逻辑
  - B/B4. 知识表示/一阶逻辑
- core metrics:
  - 结论正确率
  - 证明链长度
  - 规则命中率
  - 冲突检测数
- toolchain:
  - 规则引擎
  - Prolog
  - 逻辑测试样例
- failure signs:
  - 同一事实集推不出稳定结果
  - 规则一多就互相覆盖或冲突
  - 解释链无法回放
- next:
  - B/B5. 推理/定理证明
  - B/B5. 推理/规则推理
  - B/B6. 规划/Plan verification

#### 归纳推理

- pathKey: `B/B5. 推理/归纳推理`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B5-17kf6mb-1.json`
- status: draft
- definition: 归纳推理是从多个具体观察中总结一般规律或模式，它给出的结论通常不是必然真，而是“基于已有样本较可信”。这类推理天然带有统计性和可被新证据推翻的性质。
- importance: 它是机器学习和经验规则总结的思想前身，也帮助理解为什么仅靠知识库无法覆盖所有场景，需要从数据或历史案例中抽取一般模式。
- minimum demo: 给一组历史告警与根因样本，手工总结或写脚本归纳出若干常见规则，再用新样本验证归纳规则的泛化效果。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 从历史排班冲突中总结高风险模式
  - 从故障案例归纳常见根因
  - 从用户行为样本归纳偏好规则
- pitfalls:
  - 样本太少却总结强规律
  - 把相关性误当因果
  - 忽视分布变化
  - 归纳规则缺少验证集
- prerequisites:
  - C/C1. 问题设定/泛化
  - A/A1. 数学基础/概率统计
- core metrics:
  - 归纳规则命中率
  - 泛化误差
  - 覆盖率
  - 新样本稳定性
- toolchain:
  - Pandas
  - 统计分析脚本
  - 简单分类/聚类工具
- failure signs:
  - 换一批样本规则就变形
  - 规则覆盖率低
  - 新环境下表现大幅下降
- next:
  - C/C2. 学习范式/监督学习
  - B/B5. 推理/溯因推理
  - H/H3. 偏好优化与对齐/Reward modeling

#### 溯因推理

- pathKey: `B/B5. 推理/溯因推理`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B5-17kf6mb-1.json`
- status: draft
- definition: 溯因推理是从观测结果反推最可能原因的推理形式，关注“什么解释最合理”，而不是“什么必然成立”。它常用于诊断、假设生成和不完整信息场景。
- importance: 很多真实系统拿到的是症状、日志和异常，而不是完整事实链；这时溯因比纯演绎更贴近实际。故障诊断、医学解释、LLM self-debug 和 root-cause analysis 都有明显溯因结构。
- minimum demo: 列出几种故障模式及其可观测症状，再给一组观测，输出最可能的根因候选，并解释为什么不是其他候选。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 服务异常日志的根因分析
  - 设备故障诊断
  - 医学症状到病因的推测
  - LLM 输出错误时的 self-debug 假设生成
- pitfalls:
  - 把最可能原因当成唯一真因
  - 候选假设集不完整
  - 缺少证据权重排序
  - 无法区分解释力和概率
- prerequisites:
  - B/B5. 推理/演绎推理
  - B/B7. 不确定性与概率推理/贝叶斯网络
- core metrics:
  - top-k 根因命中率
  - 解释覆盖率
  - 候选排序质量
  - 排除错误假设效率
- toolchain:
  - 规则库
  - 贝叶斯网络
  - 诊断日志与案例库
- failure signs:
  - 总是给出过于宽泛的原因
  - top-1 命中率很低
  - 解释链无法区分强弱证据
- next:
  - B/B7. 不确定性与概率推理/贝叶斯网络
  - B/B5. 推理/基于知识的问答
  - K/K4. 多 Agent 模式/Reviewer / critic / verifier

#### 定理证明

- pathKey: `B/B5. 推理/定理证明`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B5-17kf6mb-1.json`
- status: draft
- definition: 定理证明通过形式化规则和证明步骤，判断某个命题是否能从公理和前提中推出。它强调严格证明过程而非经验判断，是形式逻辑和可验证 AI 的核心工具。
- importance: 它代表了最强约束的推理方式：不仅给结论，还给出可复核的证明结构。今天的形式验证、程序正确性证明、proof assistant，以及部分数学推理 verifier，都与此直接相连。
- minimum demo: 选一个简单命题逻辑公式或课程规则命题，用自然演绎或脚本证明它能否从给定前提出发推出，并保留证明步骤。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 程序性质证明
  - 数学命题的形式证明
  - 安全策略一致性验证
- pitfalls:
  - 形式化不严谨导致证明对象和真实问题不一致
  - 证明成功但业务语义错了
  - 证明空间爆炸
- prerequisites:
  - B/B4. 知识表示/一阶逻辑
  - B/B5. 推理/演绎推理
- core metrics:
  - 证明成功率
  - 证明长度
  - 自动化程度
  - 验证时间
- toolchain:
  - Lean / Coq / Isabelle
  - SAT/SMT
  - 证明日志
- failure signs:
  - 证明结果和直观结论长期不一致
  - 形式化成本远高于收益
  - 稍复杂问题就完全不可扩展
- next:
  - B/B6. 规划/Plan verification
  - M/M3. Agent 级评测/Outcome checks

#### 规则推理

- pathKey: `B/B5. 推理/规则推理`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B5-17kf6mb-1.json`
- status: draft
- definition: 规则推理是在规则系统上执行前向或后向推理，通过命中条件、触发规则和生成新事实来得到结论。它是专家系统和业务规则引擎里最常见的推理方式。
- importance: 它把抽象逻辑变成可落地的工程机制，适合那些规则明确、希望强约束控制、需要审计的任务。现代 hybrid agent 中的 guardrail、tool gating 和 policy enforcement 也常用规则推理兜底。
- minimum demo: 做一个简单审批或风控规则集，输入若干事实后输出触发的规则链和最终动作。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 风控命中策略
  - 审批流程分流
  - Agent 工具调用前的规则检查
- pitfalls:
  - 规则冲突没有优先级
  - 前向推理和后向推理场景选错
  - 规则覆盖越来越碎片化
- prerequisites:
  - B/B4. 知识表示/规则系统
  - B/B5. 推理/演绎推理
- core metrics:
  - 规则命中率
  - 误触发率
  - 平均推理时延
  - 解释完整度
- toolchain:
  - 规则引擎
  - 命中日志
  - 规则测试样例
- failure signs:
  - 规则新增后老链路行为漂移
  - 命中结果无法解释
  - 需要大量人工兜底
- next:
  - B/B5. 推理/基于知识的问答
  - J/J3. 工具调用/Tool routing
  - K/K8. 人在回路/Approval before side effects

#### 基于知识的问答

- pathKey: `B/B5. 推理/基于知识的问答`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B5-17kf6mb-1.json`
- status: draft
- definition: 基于知识的问答是利用显式知识库、规则或图谱来回答问题，而不是仅依赖参数记忆。系统通常需要完成问题解析、知识检索、推理拼接和答案生成。
- importance: 它是知识表示、检索和推理在应用层的直接汇合点，也是现代 RAG、KG-RAG 和企业知识助手的重要前身。掌握它能帮助区分“查到了什么”“推出来什么”“最后怎么表述”。
- minimum demo: 针对一个小型课程或资产知识库，实现自然语言问题到结构化查询的映射，并返回带来源解释的答案。
- hardware budget: CPU 即可；普通笔记本足够做结构化 QA 原型。
- examples:
  - 课程依赖与资格问答
  - 设备资产与权限查询
  - 企业知识库里的结构化 QA
- pitfalls:
  - 把检索命中当成最终答案
  - 没有来源链路和证据对齐
  - 问题解析过于脆弱
  - 知识库更新后问答行为不一致
- prerequisites:
  - B/B4. 知识表示/知识图谱
  - B/B5. 推理/规则推理
- core metrics:
  - 答案正确率
  - 证据命中率
  - 解释完整度
  - 响应时间
- toolchain:
  - 图查询或规则查询接口
  - 问题解析器
  - 知识库
  - 结果解释模板
- failure signs:
  - 答得像对但证据链不闭合
  - 知识一更新答案就漂移
  - 复杂多跳问题经常答非所问
- next:
  - I/I3. RAG 管线/Retrieval
  - I/I3. RAG 管线/Citation / provenance
  - B/B9. 经典 AI 与现代 AI 的连接点/知识表示 → KG-RAG / ontology-guided systems

### B6. 规划

- pathKey: `B/B6. 规划`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-B.json`
- status: draft
- definition: 规划关注如何从当前状态出发，构造一串动作或子任务，使系统在满足约束的前提下到达目标状态。它强调目标、动作模型、前置条件、执行效果和计划可验证性，是把“会推理”变成“会行动”的关键层。
- importance: 搜索回答先看哪条路径，规划回答应该执行哪串动作。经典规划思想今天仍然广泛存在于任务分解、tool sequence 设计、multi-step agent、workflow skeleton 和计划校验之中；很多现代 Agent 系统本质上就是把规划层和语言模型拼接起来。
- minimum demo: 做一个带钥匙、门和终点的离散世界。先定义动作前置条件与效果，再实现一个能输出动作序列的简单 planner，并增加计划检查器，验证计划中的每一步都真的可执行。
- hardware budget: CPU 即可；普通笔记本足够。规模一旦增大，瓶颈主要在状态空间、动作模型复杂度和计划搜索深度。
- examples:
  - 机器人搬运任务的动作序列生成
  - 工具调用链的多步 task decomposition
  - 业务流程自动化中的任务排程
  - LLM agent 的 plan-then-act 骨架
- pitfalls:
  - 动作模型不完整，计划看起来合理但无法执行
  - 只有目标没有中间约束，导致计划不可落地
  - 把任务分解和实际执行前置条件混为一谈
  - 没有做计划校验与重规划
- prerequisites:
  - B/B2. 搜索
  - B/B5. 推理
  - B/B1. 智能体观/目标（Goal）
  - B/B1. 智能体观/动作（Action）
- core metrics:
  - 计划成功率
  - 计划长度
  - 重规划频率
  - 计划执行偏差
  - 搜索开销
- toolchain:
  - PDDL
  - Fast Downward 或 pyperplan
  - 状态转移模拟器
  - 计划校验脚本
  - 执行日志
- failure signs:
  - 计划经常在第一二步就失败
  - 动作序列很长但包含冗余步骤
  - 环境一变就需要彻底重做
  - 生成计划和执行计划是两套不一致语义
- next:
  - B/B6. 规划/Goal-based planning
  - B/B6. 规划/Task planning
  - B/B6. 规划/Plan search
  - K/K3. 单 Agent 模式/Plan-then-act

#### Goal-based planning

- pathKey: `B/B6. 规划/Goal-based planning`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B6-fdy3gi-1.json`
- status: draft
- definition: Goal-based planning 以显式目标状态为起点，围绕“如何从当前状态达到目标”来构造动作序列。它强调目标条件、动作前置条件和状态转移，而不一定先做复杂任务分解。
- importance: 这是规划最基本的切入点，适合目标清晰、动作模型相对稳定的问题。很多机器人路径规划、流程自动化和 plan-then-act agent 都从这里起步。
- minimum demo: 在钥匙-门-终点世界里定义目标为到达出口，动作包括拿钥匙、开门、移动，输出一条满足目标的动作链。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 导航到指定位置
  - 完成一组明确前置条件的工作流
  - 从当前系统状态恢复到健康状态
- pitfalls:
  - 目标定义太宽或太窄
  - 动作效果描述不准确
  - 忽视执行过程中的环境变化
- prerequisites:
  - B/B1. 智能体观/目标（Goal）
  - B/B1. 智能体观/动作（Action）
  - B/B2. 搜索
- core metrics:
  - 目标达成率
  - 计划长度
  - 计划生成时间
  - 执行成功率
- toolchain:
  - 状态转移模拟器
  - planner
  - 可视化脚本
- failure signs:
  - 目标能描述但行动链经常断
  - 生成计划过度冗长
  - 环境轻微变化就失败
- next:
  - B/B6. 规划/Plan search
  - B/B6. 规划/Plan verification
  - K/K3. 单 Agent 模式/Plan-then-act

#### Task planning

- pathKey: `B/B6. 规划/Task planning`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B6-fdy3gi-1.json`
- status: draft
- definition: Task planning 更强调把高层任务拆成可执行子任务，再为每个子任务安排动作或工具。它通常比纯 goal-based planning 更接近真实工作流和 Agent 编排。
- importance: 一旦任务不再只是到达某个状态，而是包含多个阶段、子目标和角色协同，任务规划就成为核心。现代 agent task decomposition、workflow automation 和 manager-worker 结构都与此直接相关。
- minimum demo: 给一个“整理会议资料并发送摘要”的目标，先拆成检索资料、提炼摘要、生成邮件、发送确认等子任务，再为每步定义输入输出和执行条件。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - Agent 多步任务拆解
  - 流程自动化中的任务编排
  - 机器人任务序列安排
- pitfalls:
  - 任务拆得过细，编排成本太高
  - 任务边界模糊，责任不清
  - 分解后无法映射到真实动作或工具
- prerequisites:
  - B/B6. 规划/Goal-based planning
  - B/B5. 推理/演绎推理
- core metrics:
  - 子任务完成率
  - 分解深度
  - 跨步依赖错误数
  - 总执行时间
- toolchain:
  - 任务图
  - 工作流编排器
  - 状态机
  - 日志
- failure signs:
  - 子任务顺序经常错乱
  - 每步都能做，但整体任务做不完
  - 重试和恢复路径缺失
- next:
  - B/B6. 规划/Multi-step planning
  - K/K4. 多 Agent 模式/Manager / worker
  - K/K5. 图式编排/Conditional branches

#### Symbolic planning

- pathKey: `B/B6. 规划/Symbolic planning`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B6-fdy3gi-1.json`
- status: draft
- definition: Symbolic planning 用显式符号状态、动作 schema、前置条件和效果来构造计划，通常依赖 PDDL 这类形式化表示。它强调语义清晰、可验证和可搜索。
- importance: 它是经典规划最标准的工程表达方式，也是把世界模型、动作模型和求解器清晰解耦的关键。很多 hybrid agent 系统虽然表面上由 LLM 驱动，底层仍会借鉴符号规划的动作约束与计划校验思想。
- minimum demo: 用 PDDL 定义一个小型搬运任务域和问题实例，调用 planner 生成计划，再检查每步前置条件和状态变化。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 机器人搬运和装配
  - 离散流程规划
  - 复杂操作流程的可执行建模
- pitfalls:
  - 动作 schema 设计与真实执行脱节
  - 域建模过重，维护困难
  - 环境动态变化无法及时吸收
- prerequisites:
  - B/B4. 知识表示/符号表示
  - B/B6. 规划/Goal-based planning
  - B/B3. 约束满足与组合问题/变量、域、约束
- core metrics:
  - planner 成功率
  - 计划最优性或成本
  - 动作模型覆盖率
  - 可执行一致性
- toolchain:
  - PDDL
  - Fast Downward
  - pyperplan
  - 状态模拟器
- failure signs:
  - planner 频繁找不到明明存在的计划
  - 计划生成成功但执行失败
  - 动作 schema 维护越来越脆
- next:
  - B/B6. 规划/Plan search
  - B/B6. 规划/Plan verification
  - B/B9. 经典 AI 与现代 AI 的连接点/规划 → Agent task decomposition

#### Plan search

- pathKey: `B/B6. 规划/Plan search`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B6-fdy3gi-1.json`
- status: draft
- definition: Plan search 是把规划问题显式转成搜索问题，在候选动作序列、部分计划或状态空间上寻找最优或可行计划。它把规划和搜索直接接上，是很多 planner 的核心内核。
- importance: 它解释了为什么搜索技巧能直接提升规划效果，也让 A*、启发式和剪枝自然进入规划场景。现代 tree search agent 在本质上也常常是在做某种 plan search。
- minimum demo: 在小型 PDDL 或网格任务上，把每个状态和合法动作显式展开，并用 A* 或 Uniform Cost Search 找到计划，比较不同启发式下的搜索开销。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - A* 规划
  - 部分计划搜索
  - 动作序列 tree search
- pitfalls:
  - 状态表示过大导致搜索爆炸
  - 启发式设计和真实目标脱节
  - 把搜索路径当成可执行计划，缺少验证
- prerequisites:
  - B/B2. 搜索/启发式搜索/A*
  - B/B6. 规划/Goal-based planning
- core metrics:
  - 扩展节点数
  - 计划代价
  - 求解时间
  - 启发式有效性
- toolchain:
  - planner
  - 优先队列
  - 启发式函数
  - profile 工具
- failure signs:
  - 状态空间快速爆炸
  - 找到计划但代价很差
  - 启发式几乎不起作用
- next:
  - B/B6. 规划/Multi-step planning
  - B/B6. 规划/Plan verification
  - B/B9. 经典 AI 与现代 AI 的连接点/搜索 → 推理模型 / tree search / verifier

#### Multi-step planning

- pathKey: `B/B6. 规划/Multi-step planning`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B6-fdy3gi-1.json`
- status: draft
- definition: Multi-step planning 强调跨多个阶段、工具或子目标维持一致的计划结构，不只是找到一步可行动作，而是让整个长链条在上下文、约束和状态演进上自洽。
- importance: 现代 Agent 系统之所以难，往往就难在多步计划的稳定性。它把经典规划问题直接映射到今天的长任务执行、tool sequence、上下文压缩和重规划场景。
- minimum demo: 选一个 4 到 6 步的办公任务，例如收集信息、生成摘要、起草邮件、审查、发送，要求每步产出都能作为下一步输入，并在中间插入一个失败重试分支。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 多工具工作流
  - 复杂业务审批流程
  - 长链路 agent 执行
- pitfalls:
  - 每步局部最优，整体失败
  - 中间状态丢失或被污染
  - 没有重规划和恢复点
- prerequisites:
  - B/B6. 规划/Task planning
  - J/J4. 会话与状态/Context compaction
  - K/K5. 图式编排/Checkpoints
- core metrics:
  - 端到端成功率
  - 中途失败率
  - 重规划次数
  - 上下文丢失率
- toolchain:
  - 工作流编排器
  - 状态存储
  - checkpoint
  - trace
- failure signs:
  - 中间一步失败就整条链路报废
  - 长流程中经常忘前文
  - 恢复后状态不一致
- next:
  - K/K3. 单 Agent 模式/Plan-then-act
  - K/K5. 图式编排/Checkpoints
  - K/K9. Agent 观测与控制/Tracing

#### Plan verification

- pathKey: `B/B6. 规划/Plan verification`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B6-fdy3gi-1.json`
- status: draft
- definition: Plan verification 是在计划生成后检查每一步是否满足前置条件、是否真的能产生预期效果，以及整个计划是否达到目标。它相当于给 planner 或 agent 增加一个独立的审查层。
- importance: 没有验证的计划只是候选文本。计划验证是从“看起来对”到“真的可执行”的关键步骤，也是现代 verifier、critic、execution guard 和安全审计的重要结构前身。
- minimum demo: 为一个已生成的动作序列写检查器：逐步模拟执行，每一步都验证前置条件和效果，并在失败处给出具体原因和修复建议。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 机器人动作序列校验
  - 工作流执行前 dry-run
  - Agent tool plan 的静态检查
- pitfalls:
  - 只检查语法，不检查语义可执行性
  - 验证器和执行器使用两套不同模型
  - 发现错误但没有反馈到重规划
- prerequisites:
  - B/B6. 规划/Goal-based planning
  - B/B5. 推理/演绎推理
  - B/B5. 推理/定理证明
- core metrics:
  - 计划通过率
  - 验证时间
  - 发现错误的召回率
  - 误报率
- toolchain:
  - 模拟器
  - 规则检查器
  - 验证日志
  - dry-run 框架
- failure signs:
  - 验证通过但执行仍大量失败
  - 验证器经常误报或漏报
  - 错误位置无法准确定位
- next:
  - B/B9. 经典 AI 与现代 AI 的连接点/搜索 → 推理模型 / tree search / verifier
  - K/K3. 单 Agent 模式/Verification loop
  - M/M2. 应用级评测/Tool execution success

### B7. 不确定性与概率推理

- pathKey: `B/B7. 不确定性与概率推理`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-B.json`
- status: draft
- definition: 不确定性与概率推理关注的是：当世界不是完全可观测、规则并非必然成立、观测带噪声或结果带随机性时，系统如何表示信念、更新概率并在不确定条件下做判断。它把经典 AI 从“确定真值世界”推进到“概率世界”。
- importance: 现实问题很少完全确定。感知噪声、缺失观测、未来随机性、对手策略变化都会让纯逻辑推理不够用；贝叶斯网络、HMM、概率图模型和概率程序提供了结构化的不确定性处理框架，也是现代生成模型、贝叶斯决策和 RL 思维的重要前置层。
- minimum demo: 做一个简单的故障诊断或天气推断例子：先定义几个原因节点和观测节点，再根据观测更新某个根因的后验概率。重点是让系统输出“最可能”“概率多少”“为什么随着证据变化而变化”。
- hardware budget: CPU 即可；普通笔记本足够做小型概率图实验。成本主要来自推断复杂度和图结构规模，而不是硬件加速。
- examples:
  - 故障诊断中的根因后验概率更新
  - 语音识别和序列标注里的时序概率模型
  - 机器人定位中的隐状态估计
  - 基于不完整证据的医疗辅助判断
- pitfalls:
  - 把概率值当成拍脑袋打分，没有可解释的结构来源
  - 条件独立假设写错，导致图模型含义失真
  - 明明是时序问题却用静态模型硬套
  - 观测更新和决策环节没有打通
- prerequisites:
  - A/A1. 数学基础/概率统计
  - B/B1. 智能体观/状态（State）
  - B/B5. 推理/溯因推理
- core metrics:
  - 后验校准度
  - 推断时间
  - 概率一致性
  - 缺失观测下的鲁棒性
- toolchain:
  - pgmpy
  - PyMC
  - NumPy
  - 案例模拟脚本
- failure signs:
  - 新证据加入后后验几乎不变或乱跳
  - 概率解释和业务直觉长期冲突
  - 稍微增大图规模推断就失控
  - 决策仍旧只看单点规则，不看不确定性
- next:
  - B/B7. 不确定性与概率推理/贝叶斯网络
  - B/B7. 不确定性与概率推理/隐马尔可夫模型
  - B/B8. 决策与多智能体/MDP
  - C/C2. 学习范式/强化学习

#### 贝叶斯网络

- pathKey: `B/B7. 不确定性与概率推理/贝叶斯网络`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B7-1vkyk5u-1.json`
- status: draft
- definition: 贝叶斯网络用有向无环图表示随机变量之间的条件依赖关系，并通过条件概率表表达局部因果或相关结构。它适合在观测不完整时，根据新证据更新后验信念。
- importance: 它是结构化概率推理最经典的工具之一，把“概率”从一堆数字提升为“有图结构的知识系统”。在诊断、根因分析、信念更新和解释型推断里都非常有价值。
- minimum demo: 构建一个小型故障诊断网络：根因节点影响若干日志或症状节点。给定部分观测后，用库或手算更新根因概率，比较有无某条证据时的后验变化。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 设备故障诊断
  - 医学症状到病因推断
  - 风险评估中的因果关系图
- pitfalls:
  - 边的方向只是凭直觉画，缺乏语义依据
  - 条件独立假设不成立
  - 条件概率表难以获取或估计不稳
- prerequisites:
  - A/A1. 数学基础/概率统计/条件概率、贝叶斯
  - B/B5. 推理/溯因推理
- core metrics:
  - 后验校准度
  - 推断延迟
  - 概率表覆盖度
  - 证据敏感性
- toolchain:
  - pgmpy
  - PyMC
  - 图可视化
- failure signs:
  - 新增证据后后验几乎不更新
  - 模型对少量噪声过于敏感
  - 条件概率表维护成本很高
- next:
  - B/B7. 不确定性与概率推理/概率图模型
  - B/B8. 决策与多智能体/POMDP
  - C/C3. 经典模型家族/朴素贝叶斯

#### 隐马尔可夫模型

- pathKey: `B/B7. 不确定性与概率推理/隐马尔可夫模型`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B7-1vkyk5u-1.json`
- status: draft
- definition: 隐马尔可夫模型（HMM）用隐状态和观测序列来描述时序随机过程：系统真实状态不可直接见，但会产生可观测信号，且当前隐状态只依赖前一时刻。
- importance: 它是理解时序概率推理、序列标注和隐藏状态估计的经典入口，也是很多现代序列模型出现前的基础框架。只要任务涉及“看不见的状态随时间演化”，HMM 都能提供非常清晰的建模直觉。
- minimum demo: 做一个天气-穿衣观测或词性标注例子，定义转移概率和发射概率，然后执行前向/维特比推断，得到最可能的隐状态序列。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 词性标注
  - 设备运行状态识别
  - 语音识别早期声学建模
  - 用户行为阶段识别
- pitfalls:
  - 隐状态定义太粗或太细
  - 马尔可夫假设和独立性假设不成立
  - 观测模型过于理想化
- prerequisites:
  - B/B7. 不确定性与概率推理/贝叶斯网络
  - A/A1. 数学基础/概率统计/随机变量、分布、采样
- core metrics:
  - 状态识别准确率
  - 序列对数似然
  - 转移稳定性
  - 解码时间
- toolchain:
  - hmmlearn
  - NumPy
  - 序列标注数据集
- failure signs:
  - 隐状态难以解释
  - 长序列上性能快速衰减
  - 观测噪声稍大就失效
- next:
  - B/B7. 不确定性与概率推理/时序概率模型
  - E/E3. 音频 / 语音/自动语音识别（ASR）

#### 时序概率模型

- pathKey: `B/B7. 不确定性与概率推理/时序概率模型`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B7-1vkyk5u-1.json`
- status: draft
- definition: 时序概率模型关注随机过程随时间演进时的状态转移、观测生成和未来预测，可以是 HMM、动态贝叶斯网络或更一般的序列概率结构。
- importance: 一旦问题进入时间维度，静态概率模型往往不够。时序概率模型帮助系统在历史、当前观测和未来不确定性之间建立统一更新机制。
- minimum demo: 用一个简单库存或设备监控序列，建立随时间更新的状态概率模型，并比较只看当前观测与看历史序列时的预测差异。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 用户流失风险随时间变化
  - 设备健康状态追踪
  - 交通流量预测的结构化先验
- pitfalls:
  - 时间粒度定义不合理
  - 把非平稳过程当成平稳过程
  - 历史依赖被过度简化
- prerequisites:
  - B/B7. 不确定性与概率推理/隐马尔可夫模型
  - A/A1. 数学基础/概率统计
- core metrics:
  - 预测误差
  - 状态转移稳定性
  - 时序一致性
  - 更新延迟
- toolchain:
  - NumPy
  - pgmpy
  - 时序模拟数据
- failure signs:
  - 模型对时间窗变化极敏感
  - 预测长期漂移明显
  - 状态更新逻辑与真实过程不符
- next:
  - B/B7. 不确定性与概率推理/在不确定条件下推理
  - B/B8. 决策与多智能体/MDP

#### 概率图模型

- pathKey: `B/B7. 不确定性与概率推理/概率图模型`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B7-1vkyk5u-1.json`
- status: draft
- definition: 概率图模型用图结构统一表示随机变量之间的依赖关系，包括有向图的贝叶斯网络和无向图的马尔可夫随机场等。它强调结构化表示与高效推断。
- importance: 它提供了一个比单一模型更广的视角：很多概率推理问题其实都可以看成图上的分解与消息传递问题。理解它有助于把经典概率推断和现代图神经网络、结构化生成模型联系起来。
- minimum demo: 用一个小图结构分别表达几个变量的依赖关系，比较完全联合分布表示和图分解表示在参数数量与推断复杂度上的差异。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 贝叶斯网络
  - 条件随机场
  - 结构化预测问题
- pitfalls:
  - 只记模型名，不理解图分解意义
  - 图结构和真实依赖关系不一致
  - 推断算法选择不当
- prerequisites:
  - B/B7. 不确定性与概率推理/贝叶斯网络
  - E/E8. 扩展领域/图学习
- core metrics:
  - 参数压缩率
  - 推断速度
  - 结构可解释性
- toolchain:
  - pgmpy
  - 结构化推断库
  - 图可视化
- failure signs:
  - 图结构越复杂越难解释
  - 推断复杂度快速爆炸
  - 参数估计不稳定
- next:
  - D/D2. 架构家族/Graph Neural Networks
  - B/B7. 不确定性与概率推理/概率程序

#### 概率程序

- pathKey: `B/B7. 不确定性与概率推理/概率程序`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B7-1vkyk5u-1.json`
- status: draft
- definition: 概率程序把随机变量、采样过程和条件观测直接写成程序，让建模者用代码描述生成过程，再由推断系统估计后验。它比固定模板图模型更灵活。
- importance: 它把建模自由度进一步放大，使复杂生成过程也能以统一方式表达。对理解“模型即程序”“推断即执行受约束的随机程序”很有帮助。
- minimum demo: 用一个小型概率程序表示抛硬币偏置或设备故障生成过程，再根据观测样本估计隐藏参数。
- hardware budget: CPU 即可；普通笔记本足够。复杂模型会拉长推断时间。
- examples:
  - 生成式贝叶斯建模
  - 层次化参数估计
  - 灵活的因果/随机过程表达
- pitfalls:
  - 模型过于自由导致推断极慢
  - 程序结构复杂而难以解释
  - 采样和条件逻辑写错
- prerequisites:
  - B/B7. 不确定性与概率推理/概率图模型
  - A/A2. 计算机基础/编程语言
- core metrics:
  - 推断收敛速度
  - 样本效率
  - 后验稳定性
- toolchain:
  - PyMC
  - Pyro
  - Jupyter Notebook
- failure signs:
  - 采样不收敛
  - 结果对初值或随机种子过于敏感
  - 模型稍改就无法推断
- next:
  - D/D5. 生成范式/条件生成
  - C/C2. 学习范式/强化学习

#### 在不确定条件下推理

- pathKey: `B/B7. 不确定性与概率推理/在不确定条件下推理`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B7-1vkyk5u-1.json`
- status: draft
- definition: 在不确定条件下推理强调的不是某个具体模型，而是面对缺失信息、噪声观测和多种可能解释时，如何维持信念分布、比较假设并做稳健判断。
- importance: 这是把概率模型真正用到决策和执行中的接口层。很多系统失败并不是没有模型，而是不会把不确定性显式纳入推理与行动闭环。
- minimum demo: 给定不完整日志和多个候选根因，输出每个候选的概率或可信度，并在新增证据后更新排序。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 不完整检索证据下的回答判断
  - 含噪传感器的机器人定位
  - 日志缺失时的故障判断
- pitfalls:
  - 最后仍然只输出单点结论
  - 把不确定性表达成模糊语气而不是结构化信念
  - 证据更新机制缺失
- prerequisites:
  - B/B7. 不确定性与概率推理/贝叶斯网络
  - B/B7. 不确定性与概率推理/时序概率模型
- core metrics:
  - 校准度
  - top-k 命中率
  - 证据更新稳定性
- toolchain:
  - 概率模型
  - 案例库
  - 证据更新脚本
- failure signs:
  - 新增证据不改变结论
  - 置信度和真实正确率长期偏离
  - 系统不会表达不确定
- next:
  - B/B8. 决策与多智能体/决策理论
  - B/B8. 决策与多智能体/POMDP
  - M/M1. 模型级评测/稳定性

### B8. 决策与多智能体

- pathKey: `B/B8. 决策与多智能体`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-B.json`
- status: draft
- definition: 决策与多智能体关注的是：当系统需要在收益、成本、风险和长期回报之间做取舍，或多个主体之间相互协作、竞争、博弈时，如何构造可分析的决策框架。它把搜索和推理进一步连接到策略选择与交互系统。
- importance: 很多现代系统不只是“求一个答案”，而是要在不确定环境中持续选动作、权衡长期收益，并考虑其他主体的反应。MDP、POMDP、决策理论和多智能体框架，是 RL、tool selection、agent orchestration 和 workflow policy 的理论祖先。
- minimum demo: 做一个简单仓储或客服路由环境：每步可选择不同动作，不同动作带来即时收益、成本和未来状态变化。先定义状态转移和奖励，再比较短视贪心与长期策略的差异。
- hardware budget: CPU 即可；普通笔记本足够覆盖教学规模决策环境。成本更多取决于状态空间、策略评估方式和仿真回合数。
- examples:
  - 库存控制和资源调度
  - 推荐或路由系统的长期收益优化
  - 多机器人协作
  - Manager-worker 型 agent 编排
- pitfalls:
  - 只看即时收益，不看长期回报
  - 把不完全可观测问题错当完全可观测
  - 多个主体共享环境却用单体决策框架硬套
  - 奖励设计与真实目标不一致
- prerequisites:
  - B/B1. 智能体观/效用（Utility）
  - B/B7. 不确定性与概率推理
  - B/B2. 搜索/对抗搜索/Minimax
- core metrics:
  - 期望回报
  - 策略稳定性
  - 长期收益/短期收益一致性
  - 协作效率
  - 冲突代价
- toolchain:
  - Gymnasium
  - 仿真环境
  - 策略评估脚本
  - 对局或多主体日志
- failure signs:
  - 系统短期指标好看但长期收益变差
  - 策略对扰动很敏感
  - 多主体场景频繁互相干扰
  - 奖励一改行为就严重漂移
- next:
  - B/B8. 决策与多智能体/MDP
  - B/B8. 决策与多智能体/POMDP
  - B/B8. 决策与多智能体/Multi-agent decision making
  - B/B9. 经典 AI 与现代 AI 的连接点/决策 → RL / tool selection / policy learning

#### 决策理论

- pathKey: `B/B8. 决策与多智能体/决策理论`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B8-v0zar-1.json`
- status: draft
- definition: 决策理论研究在存在收益、代价、风险和不确定性的情况下，主体如何比较不同动作并选择更优方案。它用效用、期望、风险偏好和信息价值等概念组织行动选择。
- importance: 它是把搜索和推理推进到“应该怎么做”的基础语言。无论是经典规划、RL、tool selection 还是业务策略优化，都离不开决策理论中的偏好建模和长期收益权衡。
- minimum demo: 列出两个以上行动方案，给定各自收益、成本和失败概率，计算期望效用并比较不同风险偏好下的最优选择是否变化。
- hardware budget: 几乎无门槛；纸笔或普通笔记本即可。
- examples:
  - 是否调用高风险高收益工具
  - 库存补货决策
  - 客服路由到人工还是自动系统
- pitfalls:
  - 把所有目标压成单一分数却不解释权重
  - 忽略长期后果
  - 效用函数和真实业务目标脱节
- prerequisites:
  - B/B1. 智能体观/效用（Utility）
  - B/B7. 不确定性与概率推理/在不确定条件下推理
- core metrics:
  - 期望效用
  - 风险暴露
  - 后悔值
  - 长期收益
- toolchain:
  - Notebook
  - 仿真器
  - 效用分析表
- failure signs:
  - 策略总在追短期局部最优
  - 风险项被系统性低估
  - 权重一调就行为剧烈变化
- next:
  - B/B8. 决策与多智能体/MDP
  - B/B8. 决策与多智能体/POMDP
  - C/C2. 学习范式/强化学习

#### MDP

- pathKey: `B/B8. 决策与多智能体/MDP`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B8-v0zar-1.json`
- status: draft
- definition: MDP（Markov Decision Process）用状态、动作、转移概率和奖励函数描述完全可观测的序贯决策问题。它假设当前状态已经包含做决策所需的全部信息，因此未来只依赖当前状态和动作。
- importance: 它是现代强化学习最标准的理论基座，也是把经典决策理论形式化成可计算问题的核心框架。很多 agent 环境如果能被建成近似 MDP，后续策略优化和价值评估就有了清晰抓手。
- minimum demo: 做一个小型 gridworld 或库存控制环境，定义状态、动作、奖励和转移，再比较随机策略和简单贪心策略的累计回报。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 库存控制
  - 离散导航
  - 广告投放或推荐中的序贯选择
- pitfalls:
  - 状态并不马尔可夫却硬按 MDP 处理
  - 奖励设计和真实目标不一致
  - 把模拟器当真实环境而不验证偏差
- prerequisites:
  - B/B1. 智能体观/状态（State）
  - B/B1. 智能体观/动作（Action）
  - B/B8. 决策与多智能体/决策理论
- core metrics:
  - 累计回报
  - 策略收敛性
  - 状态覆盖率
  - 奖励稀疏度
- toolchain:
  - Gymnasium
  - 策略评估脚本
  - 仿真环境
- failure signs:
  - 状态看似充分但策略仍高度不稳
  - 长期回报无法提升
  - 奖励被投机取巧
- next:
  - C/C2. 学习范式/强化学习
  - B/B8. 决策与多智能体/POMDP
  - B/B9. 经典 AI 与现代 AI 的连接点/决策 → RL / tool selection / policy learning

#### POMDP

- pathKey: `B/B8. 决策与多智能体/POMDP`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B8-v0zar-1.json`
- status: draft
- definition: POMDP（Partially Observable MDP）处理的是部分可观测的序贯决策问题：主体看不到完整状态，只能基于观测和历史维护信念状态，再选择动作。
- importance: 现实中很多 agent、机器人和交互系统都更像 POMDP 而不是 MDP。它帮助系统正视“我并不知道真实世界全貌”这一事实，也是把会话记忆、belief state 和长期决策接起来的关键框架。
- minimum demo: 在一个只能看到局部视野的 gridworld 中，让主体根据历史观测估计当前位置或环境状态，再选择动作，比较有无记忆时的表现差异。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 对话系统中的隐式用户意图推断
  - 机器人局部视野导航
  - 不完整日志下的运维决策
- pitfalls:
  - 把观测直接当状态
  - belief state 没有显式维护
  - 环境部分可观测性被忽略
- prerequisites:
  - B/B7. 不确定性与概率推理/在不确定条件下推理
  - B/B8. 决策与多智能体/MDP
  - J/J4. 会话与状态/Session memory
- core metrics:
  - belief 更新质量
  - 部分可观测场景成功率
  - 记忆利用率
  - 累计回报
- toolchain:
  - 仿真环境
  - belief state 更新脚本
  - 日志
- failure signs:
  - 系统忘记关键历史信息
  - 局部观测下动作高度随机
  - 一旦遮挡或缺信息就失效
- next:
  - K/K6. Agent 记忆/Session memory
  - K/K6. Agent 记忆/Task memory
  - B/B9. 经典 AI 与现代 AI 的连接点/决策 → RL / tool selection / policy learning

#### Multi-agent decision making

- pathKey: `B/B8. 决策与多智能体/Multi-agent decision making`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B8-v0zar-1.json`
- status: draft
- definition: Multi-agent decision making 关注多个主体在共享环境中同时或交替做决策时的策略设计、信息分配和协调机制。每个主体的动作都会改变其他主体的最佳选择。
- importance: 一旦系统从单一智能体扩展为 manager-worker、specialists、协作机器人或对手博弈，多主体决策就变成核心问题。它是多 agent orchestration、任务分工和协作/竞争设计的经典底座。
- minimum demo: 做一个双主体资源分配或协作搬运环境，分别测试集中式控制和分散式决策，观察信息共享和目标设计对整体结果的影响。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - manager-worker agent 协作
  - 多机器人协同
  - 多角色业务流程编排
- pitfalls:
  - 主体之间目标函数不一致
  - 共享状态和通信协议设计不清
  - 局部最优导致整体失败
- prerequisites:
  - B/B8. 决策与多智能体/MDP
  - B/B8. 决策与多智能体/协作与竞争
  - K/K4. 多 Agent 模式/Manager / worker
- core metrics:
  - 整体回报
  - 协同效率
  - 冲突率
  - 通信开销
- toolchain:
  - 多主体模拟器
  - 协作日志
  - trace 分析
- failure signs:
  - 主体相互阻塞
  - 角色切分后效果反而下降
  - 协作完全依赖手工规则
- next:
  - K/K4. 多 Agent 模式/Manager / worker
  - K/K4. 多 Agent 模式/Router / specialists
  - B/B9. 经典 AI 与现代 AI 的连接点/多智能体 → multi-agent orchestration

#### 博弈论直觉

- pathKey: `B/B8. 决策与多智能体/博弈论直觉`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B8-v0zar-1.json`
- status: draft
- definition: 博弈论直觉关注的是当多个主体都在为自身目标做优化时，策略之间如何相互影响，何时会合作、何时会竞争、何时会形成稳定均衡或陷入冲突。
- importance: 它帮助从“对手只是环境的一部分”升级到“对手也在思考”。理解博弈论直觉后，Minimax、协作与竞争、多 agent routing 以及策略稳定性分析都会更有抓手。
- minimum demo: 用囚徒困境或简单竞价例子，比较一次性决策和重复博弈下策略行为的差异，观察合作和背叛如何出现。
- hardware budget: 几乎无门槛；纸笔或普通笔记本即可。
- examples:
  - 囚徒困境
  - 竞价与资源争夺
  - 多 agent 角色竞争
- pitfalls:
  - 把博弈论当成公式记忆，不联系真实策略互动
  - 忽视信息不对称和重复互动
  - 把零和和非零和问题混成一类
- prerequisites:
  - B/B2. 搜索/对抗搜索/Minimax
  - B/B8. 决策与多智能体/决策理论
- core metrics:
  - 均衡稳定性
  - 合作收益
  - 竞争代价
- toolchain:
  - 简单对局脚本
  - 收益矩阵分析
- failure signs:
  - 策略解释只停留在表面现象
  - 换一个 payoff 结构就完全失去直觉
- next:
  - B/B8. 决策与多智能体/协作与竞争
  - B/B9. 经典 AI 与现代 AI 的连接点/多智能体 → multi-agent orchestration

#### 协作与竞争

- pathKey: `B/B8. 决策与多智能体/协作与竞争`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B8-v0zar-1.json`
- status: draft
- definition: 协作与竞争描述多个主体之间既可能共享部分目标，又可能在资源、时机或信息上相互冲突的关系结构。系统需要设计协调机制、激励或边界，避免整体失效。
- importance: 真实系统几乎都不是纯协作或纯竞争。无论是多机器人、多 agent，还是组织内多个流程角色，都会处在协作与竞争并存的状态；这也是多主体系统设计最容易被低估的部分。
- minimum demo: 在一个共享资源环境中，让两个主体既要完成各自任务，又要避免互相抢占资源，比较无协调和有协调机制时的差异。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 多 agent 共用工具或上下文窗口
  - 多机器人共享通道
  - 组织内多个审批角色的目标冲突
- pitfalls:
  - 默认大家目标一致
  - 没有冲突解决机制
  - 通信协议过于脆弱
- prerequisites:
  - B/B8. 决策与多智能体/Multi-agent decision making
  - B/B8. 决策与多智能体/博弈论直觉
- core metrics:
  - 冲突率
  - 协作成功率
  - 资源利用率
  - 恢复成本
- toolchain:
  - 多主体日志
  - 协调策略脚本
  - trace 可视化
- failure signs:
  - 主体间反复互相覆盖或阻塞
  - 一旦资源紧张整体性能断崖下降
  - 协调成本超过收益
- next:
  - K/K4. 多 Agent 模式/Handoff
  - K/K4. 多 Agent 模式/Debate / voting
  - B/B9. 经典 AI 与现代 AI 的连接点/多智能体 → multi-agent orchestration

### B9. 经典 AI 与现代 AI 的连接点

- pathKey: `B/B9. 经典 AI 与现代 AI 的连接点`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-B.json`
- status: draft
- definition: 这一模块不是新的经典方法，而是把前面的搜索、规划、知识表示、推理和决策，与今天的大模型、RAG、Agent、RL 和多智能体系统一一对接。它回答的是“经典 AI 没有消失，而是以什么形态嵌进现代系统里”。
- importance: 如果没有这层映射，图谱会被误读成“经典 AI 一套、现代 AI 一套”。实际上很多现代系统只是把统计学习能力叠加在经典搜索、规划、图式表示和决策骨架上；把这些连接点讲清楚，后续学习 `I/J/K` 域时会更容易抓住主线。
- minimum demo: 挑一个现代系统，例如 KG-RAG 或 plan-then-act agent，把内部组件一一映射回经典 AI 术语：哪里是知识表示，哪里是搜索，哪里是计划校验，哪里是决策策略。
- hardware budget: 无额外硬件要求；主要是概念映射和系统分析工作。
- examples:
  - LLM tree search 中的经典搜索影子
  - plan-then-act agent 中的规划骨架
  - KG-RAG 中的知识表示和图查询层
  - 多 agent 编排中的多主体决策与博弈直觉
- pitfalls:
  - 把现代系统完全看成端到端黑盒
  - 只会类比，不会指出真实结构映射
  - 把 terminology 对齐成表面相似而非机制相似
- prerequisites:
  - B/B2. 搜索
  - B/B4. 知识表示
  - B/B6. 规划
  - B/B8. 决策与多智能体
- core metrics:
  - 概念映射准确性
  - 系统分解清晰度
  - 跨域迁移解释力
- toolchain:
  - 系统架构图
  - 案例分析文档
  - trace / workflow 分解
- failure signs:
  - 只能说像，不知道像在哪里
  - 现代系统问题出现时找不到经典根因
  - 跨域学习时每个模块都像孤立知识点
- next:
  - I/I3. RAG 管线
  - J/J3. 工具调用
  - K/K3. 单 Agent 模式
  - K/K4. 多 Agent 模式

#### 搜索 → 推理模型 / tree search / verifier

- pathKey: `B/B9. 经典 AI 与现代 AI 的连接点/搜索 → 推理模型 / tree search / verifier`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B9-1ijt0lh-1.json`
- status: draft
- definition: 现代推理模型、tree search 和 verifier 流程，本质上常把经典搜索思想重新包装为“候选推理轨迹扩展 + 评分/剪枝 + 结果验证”。搜索不再只在棋盘或网格上发生，也在答案空间和工具调用树上发生。
- importance: 这条连接点说明：今天很多看似“生成式”的系统，内部仍然需要显式搜索与裁剪来提升正确率和稳健性。理解这一点，能更好地看懂 self-consistency、tree-of-thought、verifier-guided generation 等方法。
- minimum demo: 对同一问题生成多个候选解答，再用打分器或规则检查器筛掉明显错误答案，比较单样本生成和搜索式生成的差异。
- hardware budget: CPU 即可做小实验；若接大模型评估，成本主要在 API 或推理次数。
- examples:
  - tree-of-thought
  - 代码生成中的候选采样加单测筛选
  - 数学推理里的 verifier-guided decoding
- pitfalls:
  - 候选很多但没有有效评分器
  - 搜索宽度增加却不带来质量提升
  - verifier 和目标函数不一致
- prerequisites:
  - B/B2. 搜索/启发式搜索/A*
  - B/B6. 规划/Plan verification
  - K/K3. 单 Agent 模式/Verification loop
- core metrics:
  - pass@k
  - 搜索开销
  - 验证命中率
  - 最终正确率提升
- toolchain:
  - 候选生成器
  - grader/verifier
  - trace 记录
- failure signs:
  - 搜索成本大幅上升但收益很小
  - 筛选器误杀正确答案
  - 候选多样性不足
- next:
  - K/K3. 单 Agent 模式/Verification loop
  - M/M3. Agent 级评测/Outcome checks

#### 规划 → Agent task decomposition

- pathKey: `B/B9. 经典 AI 与现代 AI 的连接点/规划 → Agent task decomposition`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B9-1ijt0lh-1.json`
- status: draft
- definition: 经典规划里的目标分解、前置条件检查和计划生成，在现代 agent 中通常表现为 task decomposition、step planning 和 workflow skeleton。区别只是计划执行的动作从物理动作变成了工具、消息或代码操作。
- importance: 这条映射能帮助把 agent 的多步任务拆解看成规划问题，而不是神秘的“模型自己想出来了”。一旦这样理解，计划校验、重规划、失败恢复和状态管理就都有了经典抓手。
- minimum demo: 把一个 agent 任务拆成几个明确子任务，并为每步写清输入、输出、前置条件和失败恢复策略，模拟一次计划生成和执行。
- hardware budget: 无额外要求；普通笔记本即可。
- examples:
  - plan-then-act agent
  - workflow automation
  - 工具链式任务分解
- pitfalls:
  - 任务分解和执行状态脱节
  - planner 只输出文本，没有结构化计划
  - 重规划链路缺失
- prerequisites:
  - B/B6. 规划/Task planning
  - K/K3. 单 Agent 模式/Plan-then-act
  - K/K5. 图式编排/Conditional branches
- core metrics:
  - 任务完成率
  - 重规划次数
  - 步骤正确率
  - 失败恢复成功率
- toolchain:
  - workflow graph
  - planner
  - trace
- failure signs:
  - 拆解步骤看起来对但实际无法执行
  - 中途失败后没有回退路径
  - 计划文本无法被程序消费
- next:
  - K/K3. 单 Agent 模式/Plan-then-act
  - K/K5. 图式编排/Conditional branches
  - K/K5. 图式编排/Checkpoints

#### 知识表示 → KG-RAG / ontology-guided systems

- pathKey: `B/B9. 经典 AI 与现代 AI 的连接点/知识表示 → KG-RAG / ontology-guided systems`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B9-1ijt0lh-1.json`
- status: draft
- definition: 经典知识表示在现代系统中最直接的延续，就是 KG-RAG、ontology-guided retrieval 和 schema-aware reasoning。语言模型不再只读原文块，还会借助实体、关系、类型和约束来做检索与回答。
- importance: 这说明知识表示并不是被 embedding 替代了，而是转成了结构化外部知识层。只要任务需要多跳关系、强类型约束或可解释来源，经典表示方法就会重新出现。
- minimum demo: 把一个小型知识库同时做成文档块和图结构，比较普通 RAG 与带实体关系约束的检索在多跳问题上的差异。
- hardware budget: CPU 即可做原型；若接大模型生成，成本主要在推理调用。
- examples:
  - 企业知识图谱增强问答
  - ontology-guided search
  - 带 schema 的外部知识调用
- pitfalls:
  - 图谱或 ontology 设计得很重，但检索链路没真正使用
  - 结构层和文档层长期不一致
  - 实体链接质量差
- prerequisites:
  - B/B4. 知识表示/知识图谱
  - I/I1. 表示与检索基础/Hybrid retrieval
  - I/I3. RAG 管线/Retrieval
- core metrics:
  - 多跳问答正确率
  - 实体链接准确率
  - 结构化检索命中率
  - 引用真实性
- toolchain:
  - Neo4j
  - RAG pipeline
  - entity linking
- failure signs:
  - 图谱引入后却没有任何质量提升
  - 多跳问题仍答非所问
  - 结构和文本证据互相打架
- next:
  - I/I3. RAG 管线/Retrieval
  - I/I3. RAG 管线/Citation / provenance
  - K/K10. Agent 形态分支/Knowledge agent

#### 决策 → RL / tool selection / policy learning

- pathKey: `B/B9. 经典 AI 与现代 AI 的连接点/决策 → RL / tool selection / policy learning`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B9-1ijt0lh-1.json`
- status: draft
- definition: 经典决策理论和 MDP 框架在现代系统中的直接映射，是强化学习、策略学习、工具选择和长期回报优化。系统不只是“会做”，还要学会在不同环境里逐步学会“什么时候做什么更划算”。
- importance: 这条连接点解释了为什么 tool routing、policy optimization 和 RLHF / RL 并不只是训练技巧，而是在延续经典决策问题：定义状态、动作、奖励和长期目标，并优化策略。
- minimum demo: 给一个多工具任务定义奖励：正确、成本低、延迟低的动作得分更高。比较固定规则工具路由和简单策略学习路由的表现。
- hardware budget: CPU 即可做小型仿真；若进入真正策略训练，计算成本会明显上升。
- examples:
  - tool selection
  - workflow routing
  - 在线策略优化
  - RLHF / RFT 的策略更新直觉
- pitfalls:
  - 奖励设计投机取巧
  - 策略只优化代理指标
  - 训练环境与真实环境差异过大
- prerequisites:
  - B/B8. 决策与多智能体/MDP
  - C/C2. 学习范式/强化学习
  - J/J3. 工具调用/Tool routing
- core metrics:
  - 长期回报
  - 路由正确率
  - 工具调用成本
  - 策略稳定性
- toolchain:
  - 仿真环境
  - 策略日志
  - route evaluator
- failure signs:
  - 策略在离线评测好、线上差
  - 奖励一改就行为塌陷
  - 工具选择缺少一致性
- next:
  - C/C2. 学习范式/强化学习
  - H/H3. 偏好优化与对齐/RLHF
  - J/J3. 工具调用/Tool routing

#### 多智能体 → multi-agent orchestration

- pathKey: `B/B9. 经典 AI 与现代 AI 的连接点/多智能体 → multi-agent orchestration`
- node type: `concept-group`
- detail source: `data/details/leaves-B-B9-1ijt0lh-1.json`
- status: draft
- definition: 经典多主体决策与博弈框架在现代系统中的延续，就是多 agent orchestration：多个角色化模型在共享状态、工具和目标下协作或竞争，通过 handoff、manager-worker、router-specialist 等模式完成复杂任务。
- importance: 这条连接点把传统多智能体理论直接映射到今天的 multi-agent architecture。理解这一点，能避免把多 agent 系统只看成“多开几个模型实例”，而能从角色、通信、协作与冲突角度设计系统。
- minimum demo: 搭一个最小 manager-worker 流程：manager 负责任务分解，worker 负责执行，reviewer 负责检查。记录角色之间的消息、状态和交接，观察哪里出现信息丢失和协调成本。
- hardware budget: 无额外要求；真正成本主要在多次模型调用和编排开销。
- examples:
  - manager-worker
  - router-specialist
  - reviewer-verifier
  - subgraph orchestration
- pitfalls:
  - 角色切分不清导致重复劳动
  - handoff 过程丢关键信息
  - 多 agent 只是增加成本，没有质量提升
- prerequisites:
  - B/B8. 决策与多智能体/Multi-agent decision making
  - K/K4. 多 Agent 模式/Manager / worker
  - K/K4. 多 Agent 模式/Handoff
- core metrics:
  - 整体完成率
  - handoff 正确率
  - 协同成本
  - 质量提升幅度
- toolchain:
  - orchestrator
  - trace graph
  - role-specific prompts
- failure signs:
  - 多个 agent 反复改写同一任务
  - handoff 后状态残缺
  - 协同成本远高于单 agent
- next:
  - K/K4. 多 Agent 模式/Manager / worker
  - K/K4. 多 Agent 模式/Handoff
  - K/K10. Agent 形态分支/Multi-agent organization

## C. 机器学习

- pathKey: `C`
- node type: `domain`
- stage: 01 基础底座
- graph summary: Google 的 ML 基础课程把核心问题组织为回归、分类、特征、损失、泛化、指标等；这层是理解预训练、SFT、偏好优化、评测集、泛化与分布漂移的通用语言。
- relation notes:
  - 机器学习 是 深度学习与基础模型、LLM 核心机制、模型适配、后训练与对齐、评测、安全与治理 的直接前置层。
  - 机器学习 的“泛化、分布、指标、反馈”概念，贯穿 LLM、Agent、评测和产品层。
  - 机器学习 与 经典 AI 的关系：经典 AI 更偏符号决策与推理；机器学习 更偏数据驱动学习；现代 AI 多数系统是二者混合。
- detail source: `data/details/domain-C.json`
- status: complete
- definition: 机器学习关注的是：让系统从数据中学习可泛化的规律，并把这种规律用于预测、排序、决策、检索或表示构建。它的基本工作流通常包括问题定义、数据与标签设计、训练/验证/测试切分、模型拟合、离线评估、上线监控与迭代。对工程学习者来说，机器学习不是“选一个模型跑起来”这么简单，而是一套围绕数据分布、目标函数、泛化能力与评估闭环展开的方法论。它既涵盖监督、无监督、自监督、迁移、在线等学习范式，也涵盖线性模型、树模型、核方法、表示学习等经典模型家族，并与现代大模型的预训练、监督微调、偏好优化和评测体系形成连续谱。
- importance: 机器学习是从规则驱动系统走向数据驱动系统的关键过渡层。它一方面提供了理解现代 AI 的共通语言：特征、标签、损失、泛化、偏差-方差、分布漂移、校准、离线指标与线上反馈；另一方面也是很多工业系统的基础能力层，即使在大模型时代，推荐、广告、风控、搜索排序、质量预测、异常检测、容量预估等问题仍大量依赖机器学习范式。掌握机器学习的价值不只在于会训练几个经典模型，更在于建立“问题设定—数据—目标—评估—部署—监控”这一整条工程链路的判断力，并能理解大模型训练和后训练流程与传统机器学习之间的对应关系。
- minimum demo: 做一个端到端的最小实验即可覆盖本域核心：选一个结构化数据集，明确是分类、回归或排序任务；完成训练集/验证集/测试集切分；训练一个线性/逻辑回归或树模型作为基线；报告至少一个主指标和一个辅助指标；检查是否存在过拟合、类别不平衡或数据泄漏；再做一轮简单改进（如特征处理、正则化、阈值调整、重采样或模型替换），比较改进前后结果。这个最小实验的目标不是追求 SOTA，而是让学习者真正经历一次“定义问题—建立基线—发现失败模式—修正—复评”的闭环。
- hardware budget: 入门阶段通常不需要 GPU。大多数经典机器学习实验在一台普通笔记本电脑上即可完成：CPU、8GB~16GB 内存、常规 Python 环境足以覆盖表格数据上的分类、回归、聚类和基础评估。只有在数据规模显著增大、需要大规模特征处理、分布式训练，或转向深度学习/大模型相关流程时，才会对 GPU、更多内存和更复杂的训练基础设施提出要求。
- examples:
  - 垃圾邮件分类
  - 用户流失预测
  - 房价回归预测
  - CTR/转化率预估
  - 搜索与推荐排序
  - 客户分群与聚类
  - 异常检测与风控评分
  - 时间序列的基础预测任务
- pitfalls:
  - 把机器学习问题误写成技术问题，没先定义业务目标、约束和评价标准
  - 只看单一离线指标，忽略类不平衡、阈值选择、校准和业务成本
  - 训练/验证/测试切分不当，导致数据泄漏或评估过于乐观
  - 把模型复杂度当成主要提升手段，忽略数据质量和特征表达
  - 离线效果提升但线上无收益，未检查分布漂移和反馈回路
  - 把相关性误当因果，把历史标签机制当成真实目标
  - 忽视基线模型，导致无法判断复杂方案是否真的有增益
  - 评估集过小或反复调参到测试集，导致结论不稳
- core metrics:
  - 泛化误差
  - 训练集/验证集/测试集表现差异
  - Accuracy
  - Precision / Recall / F1
  - AUC
  - MSE / MAE
  - Ranking metrics
  - Calibration
  - 延迟、吞吐、成本等部署指标
- toolchain:
  - Python
  - NumPy
  - pandas
  - scikit-learn
  - XGBoost / LightGBM / CatBoost
  - Jupyter
  - matplotlib / seaborn
  - MLflow / Weights & Biases
  - 特征处理与数据校验工具
- failure signs:
  - 训练指标很好但验证/测试显著变差
  - 上线后指标快速衰减，且样本分布与训练期不一致
  - 模型输出分数可排序但概率不可用，校准很差
  - 不同切分方式结果波动很大，说明数据量或评估设计有问题
  - 复杂模型不如简单基线，说明问题设定或特征表达存在缺陷
  - 线上关键人群表现异常，暴露类别不平衡或切片评估缺失
  - 依赖人工规则兜底过多，说明模型未真正学到稳定模式
- next:
  - C/C1. 问题设定
  - C/C2. 学习范式
  - C/C3. 经典模型家族
  - C/C4. 共性问题
  - C/C5. 指标体系
  - C/C6. 与大模型的对应关系

### C1. 问题设定

- pathKey: `C/C1. 问题设定`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-C.json`
- status: draft
- definition: 问题设定决定了机器学习任务到底在学什么、用什么数据学、如何评价学得好不好。它把业务问题翻译成特征、标签、目标函数、数据切分和评估边界，是任何模型训练前最关键的一步。
- importance: 很多 ML 项目的成败不取决于模型，而取决于问题有没有被正确写出来。只要标签错、切分错、目标错或分布假设错，后续训练再复杂都只是在放大前面的误设。
- minimum demo: 选一个简单分类或回归任务，先明确特征、标签、目标函数、训练/验证/测试切分，再用一个最小 baseline 模型跑通，观察问题设定如何影响指标解释。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 垃圾邮件分类
  - 房价预测
  - CTR 预估
  - 用户流失判断
- pitfalls:
  - 业务目标与学习目标错位
  - 测试集被反复调参污染
  - 数据泄漏未识别
  - 把离线样本分布当成线上真实分布
- prerequisites:
  - A/A1. 数学基础/概率统计
  - A/A2. 计算机基础/数据结构与算法
- core metrics:
  - 标签质量
  - 切分稳定性
  - 泛化误差
  - 线上线下分布差异
- toolchain:
  - pandas
  - scikit-learn
  - 数据分析 Notebook
  - 切分和校验脚本
- failure signs:
  - 模型上线后表现和离线相差很大
  - 不同切分方式结果剧烈波动
  - 团队对任务定义本身说法不一致
- next:
  - C/C1. 问题设定/特征（Features）
  - C/C1. 问题设定/标签（Labels）
  - C/C1. 问题设定/目标函数
  - C/C2. 学习范式

#### 特征（Features）

- pathKey: `C/C1. 问题设定/特征（Features）`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C1-u0974r-1.json`
- status: draft
- definition: 特征是模型可见的输入表示，决定系统能从原始数据里看到什么信息。它可以是原始字段、变换后的统计量、嵌入向量或结构化组合结果。
- importance: 特征表达决定了模型可学习的上限。即使在深度学习时代，输入表示、归一化、字段组织和上下文拼装依然直接影响训练稳定性和泛化。
- minimum demo: 从一个表格任务中挑几列原始字段，尝试加入一个简单衍生特征，对比模型效果变化。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 用户年龄、历史点击次数
  - 文本 TF-IDF 或 embedding
  - 时间窗口统计特征
- pitfalls:
  - 把未来信息做成特征形成泄漏
  - 尺度和缺失值处理混乱
  - 特征数量堆很多但语义不清
- prerequisites:
  - A/A2. 计算机基础/数据系统
  - F/F4. 数据质量/正确性
- core metrics:
  - 特征覆盖率
  - 特征重要性
  - 缺失率
  - 稳定性
- toolchain:
  - pandas
  - feature store
  - 统计分析脚本
- failure signs:
  - 线上特征分布和离线明显不一致
  - 模型高度依赖少数脆弱特征
  - 新增特征后评测不升反降
- next:
  - C/C4. 共性问题/特征工程
  - I/I1. 表示与检索基础/Embeddings

#### 标签（Labels）

- pathKey: `C/C1. 问题设定/标签（Labels）`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C1-u0974r-1.json`
- status: draft
- definition: 标签是监督信号，用来告诉模型什么结果算对、什么结果算错。标签可以是离散类别、连续数值、排序偏好或更复杂的结构化目标。
- importance: 标签质量往往决定模型上限。标签定义有偏、噪声大、滞后严重或和业务目标不一致时，模型只能学到错误目标。
- minimum demo: 检查一个分类任务的数据集，抽样核对标签质量，确认标签语义、边界条件和噪声来源。
- hardware budget: CPU 即可。
- examples:
  - 是否流失
  - 房价数值
  - 相关性等级
  - 偏好对比
- pitfalls:
  - 把代理标签当真实目标
  - 标签生成规则变化却没有版本化
  - 标注噪声被忽视
- prerequisites:
  - C/C1. 问题设定
  - F/F4. 数据质量/正确性
- core metrics:
  - 标签一致性
  - 噪声率
  - 覆盖率
  - 延迟
- toolchain:
  - 标注平台
  - 抽样审查
  - 一致性分析
- failure signs:
  - 同一条样本在不同版本标签不一致
  - 模型学到奇怪捷径
  - 人工复核和模型目标长期冲突
- next:
  - C/C2. 学习范式/监督学习
  - H/H2. 监督式后训练/SFT

#### 目标函数

- pathKey: `C/C1. 问题设定/目标函数`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C1-u0974r-1.json`
- status: draft
- definition: 目标函数定义模型训练时究竟在优化什么，通常以损失函数或期望收益形式出现。它是业务目标、模型输出和训练信号之间的桥梁。
- importance: 目标函数写错，模型就会稳定地优化错误东西。很多看起来像模型问题的失败，本质上都是训练目标和业务目标脱节。
- minimum demo: 对同一个二分类任务分别尝试交叉熵和带类别权重的交叉熵，观察在类不平衡下指标差异。
- hardware budget: CPU 即可。
- examples:
  - 交叉熵
  - MSE
  - pairwise ranking loss
  - 带成本权重的损失
- pitfalls:
  - 损失函数和评测指标不匹配
  - 忽视类别不平衡或业务代价
  - 只看优化目标，不看上线目标
- prerequisites:
  - A/A1. 数学基础/信息论/交叉熵
  - A/A1. 数学基础/微积分与优化/梯度下降
- core metrics:
  - 训练损失
  - 验证损失
  - 业务指标一致性
  - 收敛稳定性
- toolchain:
  - PyTorch / scikit-learn
  - 训练曲线
  - ablation
- failure signs:
  - loss 降了但业务指标不升
  - 训练很稳但模型行为明显不对
  - 轻微调权重就行为剧变
- next:
  - C/C5. 指标体系
  - H/H3. 偏好优化与对齐/Reward modeling

#### 训练集 / 验证集 / 测试集

- pathKey: `C/C1. 问题设定/训练集 / 验证集 / 测试集`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C1-u0974r-1.json`
- status: draft
- definition: 训练集用于拟合参数，验证集用于选模型和调参，测试集用于最终评估。三者的边界是否清晰，直接决定评估结论是否可信。
- importance: 切分是避免自欺欺人的第一道防线。没有严格切分，模型可能只是记住了样本而不是学会了规律。
- minimum demo: 对一个公开数据集做稳定切分，并严格保证测试集只在最后使用一次；记录验证和测试差异。
- hardware budget: CPU 即可。
- examples:
  - 随机切分
  - 时间切分
  - 按用户或实体分组切分
- pitfalls:
  - 测试集被反复调参污染
  - 时间序列任务仍用随机切分
  - 同一实体同时出现在训练和测试
- prerequisites:
  - C/C1. 问题设定/标签（Labels）
  - C/C1. 问题设定/泛化
- core metrics:
  - train/val/test gap
  - 切分泄漏率
  - 结果波动
- toolchain:
  - scikit-learn splitters
  - 数据切分脚本
  - 版本管理
- failure signs:
  - 线上效果远低于测试集
  - 不同随机种子结果剧烈波动
  - 测试集分数异常高
- next:
  - C/C1. 问题设定/IID 假设
  - C/C1. 问题设定/分布漂移
  - M/M4. 在线评测/Canary / regression set

#### IID 假设

- pathKey: `C/C1. 问题设定/IID 假设`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C1-u0974r-1.json`
- status: draft
- definition: IID 假设指样本独立同分布，是许多机器学习理论和训练评估方法默认依赖的前提。现实中它往往只是近似成立，而不是天然成立。
- importance: 理解 IID 假设能帮助判断什么时候离线评估是可靠的，什么时候会因为时间、实体、环境或反馈回路而失真。
- minimum demo: 比较同一任务在随机切分和时间切分下的结果差异，体会 IID 近似何时失效。
- hardware budget: CPU 即可。
- examples:
  - 随机抽样训练测试
  - 广告点击日志的时间漂移
  - 用户级相关样本
- pitfalls:
  - 默认所有数据都 IID
  - 忽略样本之间的强相关性
  - 把反馈回路数据继续当独立样本
- prerequisites:
  - C/C1. 问题设定/训练集 / 验证集 / 测试集
- core metrics:
  - 切分稳定性
  - 跨时间泛化差
  - 样本相关性
- toolchain:
  - 统计检验
  - 切片分析
  - 时间窗口评估
- failure signs:
  - 离线结果特别好，线上一塌糊涂
  - 换一个切分方式结果完全不同
- next:
  - C/C1. 问题设定/分布漂移
  - C/C1. 问题设定/泛化

#### 分布漂移

- pathKey: `C/C1. 问题设定/分布漂移`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C1-u0974r-1.json`
- status: draft
- definition: 分布漂移是指训练时看到的数据分布和部署时遇到的数据分布发生变化，导致模型原有规律不再稳定适用。
- importance: 它是机器学习系统上线后最常见的真实世界问题之一，也是为什么模型监控、在线评测和重训练机制必须存在。
- minimum demo: 把训练集和一段后续时间的数据做特征分布对比，再观察模型指标是否同步衰减。
- hardware budget: CPU 即可。
- examples:
  - 促销期用户行为变化
  - 模型上线改变用户反馈行为
  - 传感器硬件升级后数据分布变化
- pitfalls:
  - 发现分数下降才想到监控漂移
  - 只监控输入分布，不监控标签分布和反馈回路
  - 漂移发生后没有回滚或再训练策略
- prerequisites:
  - C/C1. 问题设定/IID 假设
  - F/F4. 数据质量/分布匹配
- core metrics:
  - PSI / KS 等漂移指标
  - 线上线下 gap
  - 重训练频率
- toolchain:
  - 监控报表
  - 漂移检测脚本
  - 在线评测
- failure signs:
  - 模型性能悄悄长期下降
  - 用户分群指标失衡
  - 新样本大量落在旧分布边界外
- next:
  - C/C1. 问题设定/泛化
  - M/M4. 在线评测/Real-user failure mining
  - M/M4. 在线评测/Canary / regression set

#### 泛化

- pathKey: `C/C1. 问题设定/泛化`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C1-u0974r-1.json`
- status: draft
- definition: 泛化指模型在未见样本上仍能保持有效表现，而不是只记住训练数据。它是机器学习真正“学到规律”而非“记住答案”的核心判断标准。
- importance: 没有泛化，训练流程就没有业务价值。理解泛化也能直接连接到过拟合、偏差方差、分布漂移和大模型评测中的稳定性问题。
- minimum demo: 比较训练集和测试集表现，并故意增大模型复杂度或减少样本量，观察泛化何时崩溃。
- hardware budget: CPU 即可。
- examples:
  - 测试集表现稳定
  - 切片评估下对不同用户群都有效
  - 新时间段样本上仍然可用
- pitfalls:
  - 只盯住训练集分数
  - 把测试集调成训练过程一部分
  - 忽略少数重要切片的泛化失败
- prerequisites:
  - C/C1. 问题设定/训练集 / 验证集 / 测试集
  - C/C1. 问题设定/IID 假设
- core metrics:
  - train-test gap
  - 切片稳定性
  - 跨分布表现
- toolchain:
  - 评测脚本
  - 切片报表
  - 误差分析
- failure signs:
  - 训练分数极高，测试一般
  - 换一批样本就失效
  - 少数关键切片明显崩
- next:
  - C/C4. 共性问题/过拟合 / 欠拟合
  - C/C4. 共性问题/偏差 / 方差
  - M/M1. 模型级评测/稳定性

### C2. 学习范式

- pathKey: `C/C2. 学习范式`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-C.json`
- status: draft
- definition: 学习范式描述的是系统从什么监督信号里学习、以什么方式吸收经验。监督、无监督、自监督、半监督、迁移、在线、主动、元学习和强化学习，分别对应不同数据条件、反馈类型和训练目标。
- importance: 理解学习范式，才能判断一个任务应该怎么收集数据、怎么组织训练、怎么设评估口径。现代大模型里的预训练、SFT、偏好优化和 RL，也都能映射回这里的范式变化。
- minimum demo: 用同一批数据分别做一个监督学习和一个无监督学习小实验，再比较目标函数、标签需求、评估方式和最终用途上的差异。
- hardware budget: CPU 即可完成入门实验；普通笔记本足够。
- examples:
  - 有标签分类训练
  - 无标签聚类分析
  - 自监督表示学习
  - 在线更新模型
- pitfalls:
  - 只按热门程度选范式，不按数据条件和任务目标选
  - 混淆自监督和无监督
  - 把迁移学习和微调混成一个概念
- prerequisites:
  - C/C1. 问题设定
  - A/A1. 数学基础/微积分与优化
- core metrics:
  - 样本效率
  - 监督信号成本
  - 泛化能力
  - 训练稳定性
- toolchain:
  - scikit-learn
  - PyTorch
  - 评测脚本
  - 实验管理工具
- failure signs:
  - 训练跑通了但无法解释为什么选这种范式
  - 监督信号成本极高却没有对应收益
  - 换数据条件后范式就失效
- next:
  - C/C2. 学习范式/监督学习
  - C/C2. 学习范式/无监督学习
  - C/C2. 学习范式/自监督学习
  - C/C2. 学习范式/强化学习

#### 监督学习

- pathKey: `C/C2. 学习范式/监督学习`
- node type: `concept-group`
- detail source: `data/details/domain-C.json`
- status: draft
- definition: 监督学习使用带标签样本学习从输入到目标输出的映射，是最常见也最成熟的机器学习范式。回归、分类和排序都属于监督学习的不同任务形态。
- importance: 它是很多工业 ML 系统的默认起点，也是理解损失函数、泛化、样本效率和评测设计的基础。后续的大模型 SFT，本质上也是一种更复杂的数据和目标定义下的监督学习。
- minimum demo: 选一个分类或回归数据集，建立 baseline 模型，完成训练、验证和测试，并比较至少两个指标。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 垃圾邮件分类
  - 房价回归
  - 搜索排序
- pitfalls:
  - 标签机制本身有偏差
  - 类别不平衡被忽略
  - 评价指标和业务目标不一致
- prerequisites:
  - C/C1. 问题设定/标签（Labels）
  - C/C1. 问题设定/目标函数
- core metrics:
  - Accuracy / F1 / AUC
  - MSE / MAE
  - Ranking metrics
  - 泛化误差
- toolchain:
  - scikit-learn
  - XGBoost
  - 评测脚本
- failure signs:
  - 训练集高、测试集低
  - 不同切片表现极不均衡
  - 上线后指标塌陷
- next:
  - C/C2. 学习范式/监督学习/回归
  - C/C2. 学习范式/监督学习/分类
  - C/C2. 学习范式/监督学习/排序
  - H/H2. 监督式后训练/SFT

##### 回归

- pathKey: `C/C2. 学习范式/监督学习/回归`
- node type: `concept`
- detail source: `data/details/leaves-C-C2-ebitfr-1.json`
- status: draft
- definition: 回归学习连续数值目标，例如价格、时长、概率分数或需求量。
- importance: 它是最基础的监督学习任务之一，也是理解损失函数、误差分布和数值预测可靠性的入口。
- minimum demo: 用一个房价或销量数据集训练线性回归 baseline，并报告 MAE/MSE。
- hardware budget: CPU 即可。
- examples:
  - 房价预测
  - 销量预测
  - 延迟估计
- pitfalls:
  - 异常值主导训练
  - 输出分布偏斜却仍用简单假设
- prerequisites:
  - C/C2. 学习范式/监督学习
  - C/C1. 问题设定/目标函数
- core metrics:
  - MAE
  - MSE
  - R^2
- toolchain:
  - scikit-learn
  - XGBoost
- failure signs:
  - 平均误差不高但关键区间严重失真
  - 预测范围明显不合理
- next:
  - C/C3. 经典模型家族/线性回归 / 逻辑回归

##### 分类

- pathKey: `C/C2. 学习范式/监督学习/分类`
- node type: `concept`
- detail source: `data/details/leaves-C-C2-ebitfr-1.json`
- status: draft
- definition: 分类学习离散标签预测，例如是/否、多类别归属或多标签判断。
- importance: 它是工业 ML 最常见的任务之一，也是理解 Precision/Recall/F1、校准和阈值选择的关键入口。
- minimum demo: 做一个二分类 baseline，比较 Accuracy 和 F1 在类不平衡场景下的差异。
- hardware budget: CPU 即可。
- examples:
  - 垃圾邮件分类
  - 流失预测
  - 审核通过/拒绝
- pitfalls:
  - 只看 Accuracy 忽略类不平衡
  - 阈值固定不调
  - 概率分数未校准
- prerequisites:
  - C/C2. 学习范式/监督学习
  - C/C5. 指标体系
- core metrics:
  - Accuracy
  - Precision
  - Recall
  - F1
  - AUC
- toolchain:
  - scikit-learn
  - 评测报表
- failure signs:
  - 总体 accuracy 高，但关键类表现很差
  - 上线阈值一变表现大幅波动
- next:
  - C/C3. 经典模型家族/线性回归 / 逻辑回归
  - C/C3. 经典模型家族/决策树

##### 排序

- pathKey: `C/C2. 学习范式/监督学习/排序`
- node type: `concept`
- detail source: `data/details/leaves-C-C2-ebitfr-1.json`
- status: draft
- definition: 排序任务学习的是候选项相对优先级，而不是单个样本独立标签，常见于搜索、推荐和广告系统。
- importance: 很多实际业务的目标不是“分类对不对”，而是“哪个结果排在前面更好”。理解排序能帮助从单样本预测转向列表级优化。
- minimum demo: 为一个简单检索或推荐任务构造相关性标签，比较 pointwise 和 pairwise 排序 baseline。
- hardware budget: CPU 即可。
- examples:
  - 搜索结果排序
  - 推荐候选重排
  - 广告竞价排序
- pitfalls:
  - 用分类思路硬做排序
  - 指标和用户体验脱节
  - 只优化离线排序分数
- prerequisites:
  - C/C2. 学习范式/监督学习
  - C/C5. 指标体系
- core metrics:
  - NDCG
  - MAP
  - MRR
  - CTR uplift
- toolchain:
  - LightGBM ranker
  - XGBoost ranker
  - ranking eval
- failure signs:
  - 离线 NDCG 提升但线上点击不涨
  - 长尾候选始终被压制
- next:
  - C/C3. 经典模型家族/GBDT
  - I/I1. 表示与检索基础/Reranking

#### 无监督学习

- pathKey: `C/C2. 学习范式/无监督学习`
- node type: `concept-group`
- detail source: `data/details/domain-C.json`
- status: draft
- definition: 无监督学习在没有显式标签的情况下，从数据分布中发现结构、簇、低维表示或异常模式。它更关注数据本身的组织方式，而不是直接拟合标签。
- importance: 当标签稀缺、成本高或问题仍在探索期时，无监督学习是非常重要的起点。它也常作为后续表示学习、异常检测、数据理解和特征工程的准备层。
- minimum demo: 用一批无标签用户或商品数据做聚类或降维，观察不同群组和主成分是否具有业务可解释性。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 用户分群
  - 主题发现
  - 异常检测前的数据结构探索
- pitfalls:
  - 把聚类结果直接当真实类别
  - 过度解释降维坐标
  - 忽视预处理和尺度影响
- prerequisites:
  - C/C1. 问题设定/特征（Features）
  - C/C1. 问题设定/泛化
- core metrics:
  - 簇内紧致度
  - 簇间分离度
  - 表示稳定性
  - 异常分数质量
- toolchain:
  - scikit-learn
  - PCA / UMAP / t-SNE
  - 可视化工具
- failure signs:
  - 结果只对调参敏感，没有稳定结构
  - 业务上完全无法解释
  - 数据预处理一变就完全重排
- next:
  - C/C2. 学习范式/无监督学习/聚类
  - C/C2. 学习范式/无监督学习/降维
  - C/C2. 学习范式/无监督学习/密度估计
  - C/C2. 学习范式/自监督学习

##### 聚类

- pathKey: `C/C2. 学习范式/无监督学习/聚类`
- node type: `concept`
- detail source: `data/details/leaves-C-C2-69pqzl-1.json`
- status: draft
- definition: 聚类根据样本相似性把数据自动分组，不依赖人工标签。它常用于探索数据结构、发现群体或构造下游特征。
- importance: 聚类是无监督学习最常见的入口，也经常作为推荐、用户分群、异常发现和数据理解的第一步。
- minimum demo: 对一批二维或表格数据运行 K-Means，再观察分群结果是否具有业务意义。
- hardware budget: CPU 即可。
- examples:
  - 用户分群
  - 商品簇发现
- pitfalls:
  - 把聚类结果误当真实标签
  - 对预处理和距离度量不敏感
- prerequisites:
  - C/C2. 学习范式/无监督学习
- core metrics:
  - 轮廓系数
  - 簇稳定性
  - 业务可解释性
- toolchain:
  - scikit-learn
  - 可视化
- failure signs:
  - 不同随机种子簇形态差异很大
  - 结果完全不可解释
- next:
  - C/C3. 经典模型家族/聚类模型

##### 降维

- pathKey: `C/C2. 学习范式/无监督学习/降维`
- node type: `concept`
- detail source: `data/details/leaves-C-C2-69pqzl-1.json`
- status: draft
- definition: 降维把高维表示压缩到更低维空间，同时尽量保留主要结构或信息。它常用于可视化、压缩、去噪和特征构建。
- importance: 高维数据往往难以直接理解和训练，降维能帮助观察结构、减少冗余并改善下游任务。
- minimum demo: 对一个高维数据集做 PCA 或 UMAP，并观察低维可视化后的簇结构。
- hardware budget: CPU 即可。
- examples:
  - PCA
  - UMAP
  - t-SNE
- pitfalls:
  - 把可视化坐标当真实语义空间
  - 忽视方法对局部/全局结构的偏置
- prerequisites:
  - C/C2. 学习范式/无监督学习
- core metrics:
  - 方差保留率
  - 下游任务性能变化
  - 可视化可分性
- toolchain:
  - scikit-learn
  - UMAP
- failure signs:
  - 低维结果看起来漂亮但无业务意义
  - 不同参数下结构完全不同
- next:
  - C/C4. 共性问题/特征工程

##### 密度估计

- pathKey: `C/C2. 学习范式/无监督学习/密度估计`
- node type: `concept`
- detail source: `data/details/leaves-C-C2-69pqzl-1.json`
- status: draft
- definition: 密度估计尝试学习数据分布本身，用来评估某些样本有多常见、哪些样本是异常点，或为生成与采样任务提供基础。
- importance: 它连接无监督学习、异常检测和生成模型，是理解“模型不只会分类，也会学分布”的基础。
- minimum demo: 对简单一维或二维数据做核密度估计，观察高密度区域和离群点。
- hardware budget: CPU 即可。
- examples:
  - 异常检测
  - 简单生成建模
- pitfalls:
  - 带宽或模型假设选得不合理
  - 高维下估计效果快速变差
- prerequisites:
  - A/A1. 数学基础/概率统计/随机变量、分布、采样
- core metrics:
  - 对数似然
  - 异常检测效果
  - 分布拟合误差
- toolchain:
  - scikit-learn
  - 统计分析脚本
- failure signs:
  - 对噪声特别敏感
  - 高维下完全失效
- next:
  - D/D5. 生成范式/条件生成

#### 自监督学习

- pathKey: `C/C2. 学习范式/自监督学习`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C2-1jxkik4-1.json`
- status: draft
- definition: 自监督学习通过从数据本身构造训练目标，让模型在无人工标签情况下学习表示，例如预测被遮住的部分、对比不同视角或恢复上下文。
- importance: 它是现代预训练的核心思想，也解释了为什么大模型能在没有人工标签的海量数据上学到通用表示。
- minimum demo: 做一个简单 masked token 或对比学习实验，观察预训练表示对下游任务的帮助。
- hardware budget: CPU 可做小实验；规模大时需要更多算力。
- examples:
  - masked language modeling
  - 对比学习
  - 自回归预训练
- pitfalls:
  - 预训练目标和下游任务差距太大
  - 数据量不足还期待大幅收益
  - 只看预训练 loss 不看下游迁移效果
- prerequisites:
  - C/C1. 问题设定/特征（Features）
  - D/D3. 训练范式/预训练
- core metrics:
  - 下游迁移增益
  - 表示质量
  - 样本效率
- toolchain:
  - PyTorch
  - 对比学习框架
  - 表示评测
- failure signs:
  - 预训练很久，下游几乎没提升
  - 不同任务迁移表现极不稳定
- next:
  - D/D3. 训练范式/预训练
  - C/C3. 经典模型家族/矩阵分解 / 表示学习

#### 半监督学习

- pathKey: `C/C2. 学习范式/半监督学习`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C2-1jxkik4-1.json`
- status: draft
- definition: 半监督学习结合少量有标签数据和大量无标签数据训练模型，希望在标注成本可控的情况下提升性能。
- importance: 当标签昂贵但无标签数据很多时，它是现实可行的折中方案，也是从传统监督学习过渡到大规模预训练的一条中间路线。
- minimum demo: 固定少量标签样本，用伪标签或一致性正则方法引入无标签数据，比较纯监督 baseline。
- hardware budget: CPU 即可做小实验。
- examples:
  - 文本分类中的伪标签
  - 图像分类中的一致性训练
- pitfalls:
  - 伪标签错误被不断放大
  - 无标签数据分布和有标签数据不一致
- prerequisites:
  - C/C2. 学习范式/监督学习
  - C/C2. 学习范式/无监督学习
- core metrics:
  - 相对监督 baseline 的提升
  - 伪标签精度
  - 样本效率
- toolchain:
  - scikit-learn
  - PyTorch
  - 伪标签脚本
- failure signs:
  - 加无标签后反而更差
  - 模型越来越自信但越来越错
- next:
  - C/C2. 学习范式/自监督学习
  - D/D3. 训练范式/自训练 / 伪标签

#### 迁移学习

- pathKey: `C/C2. 学习范式/迁移学习`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C2-1jxkik4-1.json`
- status: draft
- definition: 迁移学习把一个任务或领域学到的表示、参数或结构迁移到另一个相关任务上，以减少目标任务的数据需求和训练成本。
- importance: 它解释了为什么预训练 + 微调能成为现代 AI 的主流，也帮助理解领域适配、表示复用和参数高效调整。
- minimum demo: 用一个已训练模型在相近任务上微调，与从头训练对比样本效率和收敛速度。
- hardware budget: CPU 即可做经典模型迁移；深度模型微调视规模而定。
- examples:
  - 图像模型迁移到新分类任务
  - 领域文本分类迁移
  - 预训练 embedding 迁移
- pitfalls:
  - 源任务和目标任务差异太大
  - 负迁移
  - 冻结层策略不合理
- prerequisites:
  - C/C2. 学习范式/监督学习
  - D/D3. 训练范式/微调
- core metrics:
  - 样本效率
  - 收敛速度
  - 目标任务提升
- toolchain:
  - PyTorch
  - 预训练模型
  - 微调脚本
- failure signs:
  - 迁移后比从头训练更差
  - 领域变化稍大就失效
- next:
  - D/D3. 训练范式/微调
  - H/H4. 参数高效适配/LoRA

#### 在线学习

- pathKey: `C/C2. 学习范式/在线学习`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C2-1jxkik4-1.json`
- status: draft
- definition: 在线学习让模型随新数据持续更新，而不是只在离线批处理训练后部署。它强调流式数据、增量更新和快速适应变化。
- importance: 当环境和分布持续变化时，在线学习是降低漂移影响的重要方式，也直接连接到推荐、广告、风控和交互系统的持续优化。
- minimum demo: 用按时间到来的样本流逐批更新一个简单模型，比较一次性离线训练和持续更新的差异。
- hardware budget: CPU 即可。
- examples:
  - 点击率模型增量更新
  - 实时异常检测
- pitfalls:
  - 反馈延迟导致错误学习
  - 在线更新引入不稳定性
  - 没有回滚机制
- prerequisites:
  - C/C1. 问题设定/分布漂移
  - F/F3. 数据工程/流式处理
- core metrics:
  - 适应速度
  - 稳定性
  - 回滚成功率
- toolchain:
  - 流式特征管线
  - 增量训练脚本
  - 监控
- failure signs:
  - 模型线上频繁震荡
  - 新数据一来整体性能变差
- next:
  - M/M4. 在线评测/Canary / regression set
  - M/M4. 在线评测/Real-user failure mining

#### 主动学习

- pathKey: `C/C2. 学习范式/主动学习`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C2-1jxkik4-1.json`
- status: draft
- definition: 主动学习让模型主动挑选最值得标注的样本，以最小标注成本获取最大信息增益。
- importance: 当标注昂贵时，它比盲目扩充数据更经济，也能帮助把有限人工预算集中到最难、最不确定或最有代表性的样本上。
- minimum demo: 在一个分类任务里，每轮选择不确定性最高的样本做标注，再比较随机抽样和主动学习的样本效率。
- hardware budget: CPU 即可。
- examples:
  - 人工审核队列挑样
  - 医学影像少样本标注
- pitfalls:
  - 只挑难例导致分布偏斜
  - 不确定性估计本身不可靠
- prerequisites:
  - C/C2. 学习范式/监督学习
  - C/C1. 问题设定/标签（Labels）
- core metrics:
  - 单位标注成本收益
  - 样本效率
  - 不确定性估计质量
- toolchain:
  - 标注平台
  - uncertainty sampling 脚本
- failure signs:
  - 标注了很多却没明显提升
  - 挑样越来越偏向少数怪样本
- next:
  - M/M4. 在线评测/Human feedback
  - H/H2. 监督式后训练/Task-specific tuning

#### 元学习

- pathKey: `C/C2. 学习范式/元学习`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C2-1jxkik4-1.json`
- status: draft
- definition: 元学习关注的是“如何更快地学会新任务”，通过在多任务分布上训练，让模型具备快速适应能力。
- importance: 它是少样本学习、快速个性化和跨任务迁移的重要理论入口，也帮助理解现代模型为何追求更强的任务适配能力。
- minimum demo: 在若干相似小任务上训练一个可快速适应的新任务初始化，再观察适应步数和样本需求。
- hardware budget: CPU 可做简化实验；深度元学习通常更吃算力。
- examples:
  - 少样本分类
  - 快速个性化模型适配
- pitfalls:
  - 任务分布定义含糊
  - 元训练很强但元测试不稳定
- prerequisites:
  - C/C2. 学习范式/迁移学习
  - C/C1. 问题设定/泛化
- core metrics:
  - 适应步数
  - 少样本性能
  - 跨任务稳定性
- toolchain:
  - PyTorch
  - few-shot benchmark
- failure signs:
  - 新任务适应还是很慢
  - 元训练收益无法复现
- next:
  - C/C2. 学习范式/迁移学习
  - K/K10. Agent 形态分支/Research agent

#### 强化学习

- pathKey: `C/C2. 学习范式/强化学习`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C2-1jxkik4-1.json`
- status: draft
- definition: 强化学习通过环境交互、奖励反馈和长期回报优化来学习策略，而不是直接依赖静态标签。主体需要在探索和利用之间权衡。
- importance: 它是经典决策框架进入现代学习系统的关键通道，也是 tool selection、policy learning、RLHF 和在线交互优化的重要基础。
- minimum demo: 在一个小型 Gym 环境中训练或评估简单策略，比较不同奖励设计下的行为差异。
- hardware budget: CPU 足够做小环境实验；大规模训练成本更高。
- examples:
  - gridworld
  - 推荐长期回报优化
  - 机器人控制
- pitfalls:
  - 奖励设计错误
  - 探索不足或过度探索
  - 模拟环境和真实环境差异大
- prerequisites:
  - B/B8. 决策与多智能体/MDP
  - B/B8. 决策与多智能体/决策理论
- core metrics:
  - 累计回报
  - 样本效率
  - 策略稳定性
  - 安全性
- toolchain:
  - Gymnasium
  - RL 库
  - 回报曲线
- failure signs:
  - 策略投机取巧
  - 训练高度不稳定
  - 离线好、在线差
- next:
  - H/H3. 偏好优化与对齐/RLHF
  - B/B9. 经典 AI 与现代 AI 的连接点/决策 → RL / tool selection / policy learning

### C3. 经典模型家族

- pathKey: `C/C3. 经典模型家族`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-C.json`
- status: draft
- definition: 经典模型家族是机器学习里最常见的一批“可解释、可控、数据效率较高”的模型，包括线性模型、树模型、集成方法、核方法、概率模型、聚类与矩阵分解等。它们覆盖了监督和无监督任务中的大量标准场景。
- importance: 这些模型仍然是工业实践的强基线。即使在深度学习和大模型时代，表格数据、低样本任务、可解释需求和资源受限环境里，经典模型往往更稳、更便宜、更容易诊断。
- minimum demo: 用同一数据集分别训练逻辑回归、决策树和 GBDT，比对离线指标、特征需求、可解释性和上线复杂度。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 逻辑回归做 CTR 预估
  - 树模型做风控评分
  - 矩阵分解做推荐召回
  - KMeans 做用户分群
- pitfalls:
  - 脱离数据类型和样本规模谈模型优劣
  - 没有强基线就直接上复杂方案
  - 把模型优点理解成普遍规律
- prerequisites:
  - C/C1. 问题设定
  - C/C2. 学习范式/监督学习
  - C/C2. 学习范式/无监督学习
- core metrics:
  - 离线主指标
  - 训练/推理成本
  - 可解释性
  - 对特征质量的敏感度
- toolchain:
  - scikit-learn
  - XGBoost / LightGBM / CatBoost
  - 特征分析脚本
- failure signs:
  - 复杂模型没有超过简单基线
  - 模型选择依据只剩“大家都在用”
  - 换一批数据后表现完全反转
- next:
  - C/C3. 经典模型家族/线性回归 / 逻辑回归
  - C/C3. 经典模型家族/决策树
  - C/C3. 经典模型家族/GBDT
  - C/C4. 共性问题

#### 线性回归 / 逻辑回归

- pathKey: `C/C3. 经典模型家族/线性回归 / 逻辑回归`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C3-z9hu17-1.json`
- status: draft
- definition: 线性回归和逻辑回归都假设输入特征与目标之间存在较简单的线性关系。线性回归用于连续值预测，逻辑回归用于二分类或多分类的概率建模，是最经典的强基线模型之一。
- importance: 它们训练快、解释性强、对数据量要求不高，常被用作第一个 baseline。很多复杂方案如果连逻辑回归都赢不了，通常说明问题设定或特征工程本身有问题。
- minimum demo: 在一个分类任务上跑逻辑回归，在一个回归任务上跑线性回归，比较系数、误差和正则化前后的变化。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 房价预测
  - CTR 预估 baseline
  - 信用风险二分类
- pitfalls:
  - 忽视特征缩放与共线性
  - 把概率输出当成天然已校准
  - 在线性不可分任务上强行套用
- prerequisites:
  - C/C1. 问题设定/目标函数
  - A/A1. 数学基础/线性代数/向量、矩阵、张量
  - A/A1. 数学基础/微积分与优化/梯度下降
- core metrics:
  - MSE / MAE
  - Accuracy / AUC
  - 系数稳定性
  - 校准质量
- toolchain:
  - scikit-learn
  - statsmodels
  - 特征标准化工具
- failure signs:
  - 加入少量特征后系数剧烈震荡
  - 训练和测试都表现一般
  - 概率分数排序尚可但阈值表现差
- next:
  - C/C5. 指标体系/MSE / MAE
  - C/C5. 指标体系/Precision / Recall / F1
  - C/C4. 共性问题/特征工程

#### 决策树

- pathKey: `C/C3. 经典模型家族/决策树`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C3-z9hu17-1.json`
- status: draft
- definition: 决策树通过按特征进行一系列条件划分，把样本递归切分到更纯的叶子节点上。它天然支持非线性边界，也比较容易解释。
- importance: 决策树是理解树模型、集成学习和特征交互的起点。它帮助学习者看到：模型不仅是在“拟合函数”，也在“组织规则和切分空间”。
- minimum demo: 训练一个浅树和一个深树，对比训练/测试性能以及生成的规则路径。
- hardware budget: CPU 即可。
- examples:
  - 审批规则辅助建模
  - 风控和用户流失判断
  - 简单可解释分类器
- pitfalls:
  - 树太深导致过拟合
  - 把某条路径规则误当成因果
  - 对数据微小扰动过于敏感
- prerequisites:
  - C/C2. 学习范式/监督学习
  - C/C1. 问题设定/特征（Features）
- core metrics:
  - Accuracy / F1 / AUC
  - 树深度
  - 叶子纯度
  - 特征重要性
- toolchain:
  - scikit-learn
  - 树可视化工具
- failure signs:
  - 训练集几乎满分但测试集明显变差
  - 模型规则对少量噪声极敏感
- next:
  - C/C3. 经典模型家族/随机森林
  - C/C3. 经典模型家族/GBDT
  - C/C4. 共性问题/过拟合 / 欠拟合

#### 随机森林

- pathKey: `C/C3. 经典模型家族/随机森林`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C3-z9hu17-1.json`
- status: draft
- definition: 随机森林通过对多个决策树做 bootstrap 采样和随机特征子集训练，再把它们的结果做平均或投票，从而降低单棵树的方差。
- importance: 它是“bagging 思路”最经典的实现，通常比单棵树更稳健，是很多表格任务里成本低、效果稳的 baseline。
- minimum demo: 在同一数据集上比较单棵决策树和随机森林，看测试集稳定性、方差和特征重要性差异。
- hardware budget: CPU 即可；树多时耗时会上升。
- examples:
  - 表格二分类 baseline
  - 异常检测特征筛选辅助
- pitfalls:
  - 树数量很多但收益已边际递减
  - 误以为随机森林天然可解释
  - 类别极不平衡时直接用默认阈值
- prerequisites:
  - C/C3. 经典模型家族/决策树
  - C/C4. 共性问题/过拟合 / 欠拟合
- core metrics:
  - AUC / F1
  - OOB error
  - 稳定性
  - 推理延迟
- toolchain:
  - scikit-learn
  - 特征重要性分析
- failure signs:
  - 模型体积和延迟显著上升但效果没增益
  - 重要性排序与业务直觉严重背离且不稳定
- next:
  - C/C3. 经典模型家族/GBDT
  - C/C5. 指标体系/AUC
  - C/C4. 共性问题/可解释性

#### GBDT

- pathKey: `C/C3. 经典模型家族/GBDT`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C3-z9hu17-1.json`
- status: draft
- definition: GBDT 通过逐步拟合前一轮残差的方式，把多个弱学习器按 boosting 思路串起来，常用于表格数据上的高性能监督学习。
- importance: 在工业表格任务中，GBDT 长期是最强的通用基线之一。理解它，能帮助学习者建立“加法模型、残差学习、偏差下降”的直觉。
- minimum demo: 用 XGBoost 或 LightGBM 在一个表格二分类任务上训练 baseline，并比较学习率、树深和迭代轮数变化。
- hardware budget: CPU 足够，多线程可加速；大数据时对内存更敏感。
- examples:
  - 广告点击率预估
  - 信贷评分
  - 搜索排序特征学习
- pitfalls:
  - 学习率、树深、轮数一起拉高导致严重过拟合
  - 把缺失值处理和类别编码当成默认无风险
  - 线上特征漂移时不做回归集监控
- prerequisites:
  - C/C3. 经典模型家族/决策树
  - A/A1. 数学基础/微积分与优化/学习率、收敛、稳定性
- core metrics:
  - AUC
  - Ranking metrics
  - 训练时间
  - 特征重要性
- toolchain:
  - XGBoost
  - LightGBM
  - CatBoost
- failure signs:
  - 训练集提升很快但验证集不再提升
  - 线上轻微漂移就引发明显回归
- next:
  - C/C5. 指标体系/AUC
  - C/C5. 指标体系/Ranking metrics
  - M/M4. 在线评测/Canary / regression set

#### SVM / 核方法

- pathKey: `C/C3. 经典模型家族/SVM / 核方法`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C3-z9hu17-1.json`
- status: draft
- definition: SVM 通过最大化分类间隔寻找决策边界；核方法则通过隐式映射把原本线性不可分的问题转到更高维空间中处理。
- importance: 它们是理解“间隔、正则化、核技巧”这些经典思想的核心入口，也体现了在深度学习之前，人们如何用数学结构处理非线性模式。
- minimum demo: 在一个中小规模分类数据集上比较线性 SVM 和 RBF kernel SVM 的边界差异与训练成本。
- hardware budget: CPU 即可；样本量大时成本会上升。
- examples:
  - 文本分类
  - 小样本图像分类
  - 异常边界划分
- pitfalls:
  - 在大样本任务上忽略训练成本
  - 核参数和正则项调得过细导致过拟合
  - 对概率输出过度信任
- prerequisites:
  - A/A1. 数学基础/线性代数/内积、范数、相似度
  - C/C2. 学习范式/监督学习
- core metrics:
  - 间隔表现
  - Accuracy / F1
  - 训练时间
  - 支持向量数量
- toolchain:
  - scikit-learn
  - 核参数搜索
- failure signs:
  - 训练时间随样本量急剧恶化
  - 模型只对特定参数点有效
- next:
  - C/C4. 共性问题/特征工程
  - C/C5. 指标体系/Precision / Recall / F1

#### 朴素贝叶斯

- pathKey: `C/C3. 经典模型家族/朴素贝叶斯`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C3-z9hu17-1.json`
- status: draft
- definition: 朴素贝叶斯假设特征在给定类别条件下相互独立，并利用贝叶斯规则快速估计类别后验概率。虽然假设很强，但在某些场景下仍非常高效。
- importance: 它是概率建模和判别式方法对照的好例子，也能帮助理解为什么“假设并不完全真实”不代表模型一定没用。
- minimum demo: 在一个文本分类任务上比较朴素贝叶斯与逻辑回归的训练成本和结果差异。
- hardware budget: CPU 即可。
- examples:
  - 垃圾邮件分类
  - 轻量文本分类
- pitfalls:
  - 把独立性假设当成真实生成机制
  - 对强相关特征场景期望过高
- prerequisites:
  - A/A1. 数学基础/概率统计/条件概率、贝叶斯
  - C/C2. 学习范式/监督学习
- core metrics:
  - Accuracy / F1
  - 训练速度
  - 后验概率稳定性
- toolchain:
  - scikit-learn
  - 文本向量化工具
- failure signs:
  - 特征相关性一强就明显掉点
  - 概率输出与实际频率偏差很大
- next:
  - B/B7. 不确定性与概率推理/贝叶斯网络
  - C/C4. 共性问题/校准

#### 聚类模型

- pathKey: `C/C3. 经典模型家族/聚类模型`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C3-z9hu17-1.json`
- status: draft
- definition: 聚类模型尝试在无标签数据中发现自然分组，例如按距离、密度或层次结构把样本组织成若干簇。
- importance: 它是无监督学习里最常见的模型家族之一，常用于用户分群、异常探索和表示空间的粗结构理解。
- minimum demo: 对一批无标签样本使用 KMeans 或层次聚类，观察分组结果是否稳定且具备业务可解释性。
- hardware budget: CPU 即可。
- examples:
  - 用户分群
  - 商品画像探索
  - 日志模式发现
- pitfalls:
  - 把簇编号直接当真类别
  - 不做尺度统一就直接计算距离
  - 只看二维可视化就下结论
- prerequisites:
  - C/C2. 学习范式/无监督学习/聚类
  - C/C1. 问题设定/特征（Features）
- core metrics:
  - 簇内紧致度
  - 簇间分离度
  - 结果稳定性
- toolchain:
  - scikit-learn
  - PCA / UMAP
  - 可视化工具
- failure signs:
  - 换随机种子结果大幅变化
  - 聚类结果完全无法解释
- next:
  - C/C2. 学习范式/无监督学习/降维
  - C/C4. 共性问题/可解释性

#### 矩阵分解 / 表示学习

- pathKey: `C/C3. 经典模型家族/矩阵分解 / 表示学习`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C3-z9hu17-1.json`
- status: draft
- definition: 矩阵分解和表示学习关注的是把原始对象映射到更低维、更有结构的表示空间中，使相似性、偏好或语义关系更容易被建模。
- importance: 这是从经典推荐系统到现代 embedding 表示学习的一条连续脉络。理解它，有助于把传统 ML 的潜因子思想连接到今天的嵌入、检索和预训练表示。
- minimum demo: 在一个简单推荐或共现矩阵上做矩阵分解，观察低维表示如何重建原始关系并支持相似度检索。
- hardware budget: CPU 即可；规模大时对内存更敏感。
- examples:
  - 协同过滤推荐
  - 潜因子建模
  - embedding 表示构建
- pitfalls:
  - 只把低维向量当黑盒特征
  - 忽视冷启动和稀疏性问题
  - 把相似度当成等价语义
- prerequisites:
  - A/A1. 数学基础/线性代数/分解、特征值/特征向量
  - C/C2. 学习范式/自监督学习
- core metrics:
  - 重建误差
  - 召回质量
  - 相似度一致性
- toolchain:
  - implicit / surprise
  - NumPy
  - 向量相似度检索
- failure signs:
  - 冷启动样本表现很差
  - 向量空间里出现大量伪相似
- next:
  - I/I1. 表示与检索基础/Embeddings
  - I/I1. 表示与检索基础/Dense retrieval
  - D/D3. 训练范式/预训练

### C4. 共性问题

- pathKey: `C/C4. 共性问题`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-C.json`
- status: draft
- definition: 共性问题描述的是无论你选哪类机器学习模型，几乎都会反复遇到的一组系统性风险：过拟合、偏差-方差权衡、类别不平衡、特征工程、数据泄漏、校准、鲁棒性和可解释性。
- importance: 它们决定了模型是否能从“离线看起来不错”走到“线上可靠可用”。很多项目不是败在模型不够强，而是败在这些基础问题处理得不严谨。
- minimum demo: 在一个分类任务里，故意制造过拟合、类别不平衡和数据泄漏，再分别修正它们，观察指标解释如何变化。
- hardware budget: CPU 即可；普通笔记本足够。
- examples:
  - 训练集很高、测试集很差
  - 少数类召回几乎为零
  - 离线 AUC 很高但线上收益一般
- pitfalls:
  - 把所有问题都归因到模型结构
  - 只看平均指标，不看切片和概率质量
  - 等到上线后才发现泄漏与漂移
- prerequisites:
  - C/C1. 问题设定
  - C/C3. 经典模型家族
  - C/C5. 指标体系
- core metrics:
  - 泛化差距
  - 切片稳定性
  - 概率校准质量
  - 线上回归风险
- toolchain:
  - 错误分析 Notebook
  - 特征审计脚本
  - slice evaluation
  - 监控与回归集
- failure signs:
  - 指标提升但线上体验不稳定
  - 某些关键人群持续失败
  - 团队无法解释模型为什么这样判断
- next:
  - C/C4. 共性问题/过拟合 / 欠拟合
  - C/C4. 共性问题/数据泄漏
  - C/C4. 共性问题/校准
  - M/M4. 在线评测/Canary / regression set

#### 过拟合 / 欠拟合

- pathKey: `C/C4. 共性问题/过拟合 / 欠拟合`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C4-kbwrk-1.json`
- status: draft
- definition: 过拟合表示模型把训练数据里的偶然噪声也学进去了，导致测试表现变差；欠拟合则表示模型容量或训练过程不足，连训练集规律都没学好。
- importance: 这是最基础也最常见的训练诊断概念。很多调参动作，本质上都是在控制模型复杂度、训练强度和数据量之间的平衡。
- minimum demo: 用同一数据集分别训练一个过浅模型和一个过深模型，对比训练/验证误差曲线。
- hardware budget: CPU 即可。
- examples:
  - 深树训练集满分但测试集掉点
  - 线性模型在强非线性任务上整体表现都一般
- pitfalls:
  - 把所有性能差都归咎于过拟合
  - 只盯一个验证切分得出结论
  - 把训练更久视为必然更好
- prerequisites:
  - C/C1. 问题设定/泛化
  - C/C3. 经典模型家族/决策树
- core metrics:
  - 训练/验证差距
  - 学习曲线
  - 模型复杂度
- toolchain:
  - 训练曲线可视化
  - 交叉验证
- failure signs:
  - 训练集和验证集差距不断扩大
  - 模型加复杂后泛化持续下降
- next:
  - C/C4. 共性问题/偏差 / 方差
  - D/D3. 训练范式/Curriculum / staged training

#### 偏差 / 方差

- pathKey: `C/C4. 共性问题/偏差 / 方差`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C4-kbwrk-1.json`
- status: draft
- definition: 偏差描述模型因为假设过强而系统性偏离真实规律；方差描述模型对训练样本扰动过于敏感。两者共同决定了泛化误差的主要来源。
- importance: 偏差-方差视角提供了一个比“模型大或小”更本质的诊断框架，能帮助理解为什么加特征、加数据、加正则或换模型会产生不同效果。
- minimum demo: 比较线性模型和复杂树模型在小样本任务上的表现，观察一个偏差高、一个方差高的典型现象。
- hardware budget: CPU 即可。
- examples:
  - 简单模型学不到关系
  - 复杂模型结果高度依赖训练集抽样
- pitfalls:
  - 把偏差和方差当成抽象口号，不映射回可操作手段
  - 忽视数据噪声和标签机制对偏差的影响
- prerequisites:
  - C/C4. 共性问题/过拟合 / 欠拟合
  - A/A1. 数学基础/概率统计/期望、方差、协方差
- core metrics:
  - 交叉验证方差
  - 学习曲线
  - 切分稳定性
- toolchain:
  - 交叉验证
  - 误差分解分析
- failure signs:
  - 换个随机种子结论就变
  - 调复杂度时表现呈明显 U 型
- next:
  - C/C4. 共性问题/过拟合 / 欠拟合
  - C/C4. 共性问题/特征工程

#### 类别不平衡

- pathKey: `C/C4. 共性问题/类别不平衡`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C4-kbwrk-1.json`
- status: draft
- definition: 类别不平衡指少数类样本远少于多数类，导致模型即使整体准确率看起来不错，也可能完全学不会关键少数类。
- importance: 很多工业高价值问题都天然不平衡，例如欺诈、故障、流失和高价值转化。若不单独处理，模型常会优化到“平均上看起来不错、关键场景上完全失效”。
- minimum demo: 在一个不平衡分类数据集上，对比默认训练、重采样和阈值调整后的 Precision / Recall / F1 变化。
- hardware budget: CPU 即可。
- examples:
  - 欺诈识别
  - 医疗异常检测
  - 高价值用户召回
- pitfalls:
  - 只看 Accuracy
  - 重采样后不重新审视校准和阈值
  - 忽略不同错误类型的业务代价
- prerequisites:
  - C/C2. 学习范式/监督学习/分类
  - C/C5. 指标体系/Precision / Recall / F1
- core metrics:
  - Recall
  - Precision
  - F1
  - Cost-sensitive metrics
- toolchain:
  - 重采样工具
  - 阈值分析
  - 混淆矩阵
- failure signs:
  - Accuracy 很高但少数类几乎全错
  - 线上关键告警样本持续漏判
- next:
  - C/C5. 指标体系/Precision / Recall / F1
  - C/C5. 指标体系/Cost-sensitive metrics

#### 特征工程

- pathKey: `C/C4. 共性问题/特征工程`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C4-kbwrk-1.json`
- status: draft
- definition: 特征工程是把原始数据转成更适合模型学习的表示，包括清洗、编码、归一化、交叉构造、统计聚合和领域特征设计。
- importance: 在经典机器学习中，特征质量往往比模型选择更重要。即使在大模型时代，检索、排序、风控和时序任务里，特征工程仍然决定了很多系统的上限。
- minimum demo: 从原始表格数据出发，做类别编码、数值标准化和几个交叉特征，对比处理前后的 baseline 表现。
- hardware budget: CPU 即可。
- examples:
  - CTR 统计特征
  - 时间窗口聚合特征
  - one-hot / target encoding
- pitfalls:
  - 用未来信息构造特征
  - 线上线下特征定义不一致
  - 过度堆特征导致维护失控
- prerequisites:
  - C/C1. 问题设定/特征（Features）
  - C/C3. 经典模型家族/线性回归 / 逻辑回归
- core metrics:
  - 增益贡献
  - 稳定性
  - 线上线下一致性
- toolchain:
  - pandas
  - feature pipeline
  - 特征审计脚本
- failure signs:
  - 离线提升明显但线上复现不了
  - 删掉几个脆弱特征后模型大幅回退
- next:
  - I/I1. 表示与检索基础/Embeddings
  - F/F3. 数据工程/流式处理
  - C/C4. 共性问题/数据泄漏

#### 数据泄漏

- pathKey: `C/C4. 共性问题/数据泄漏`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C4-kbwrk-1.json`
- status: draft
- definition: 数据泄漏指训练阶段意外拿到了本不该可见的目标相关信息，例如未来信息、测试集信息或与标签同义的代理字段，导致评估结果虚高。
- importance: 它是最危险的离线幻觉来源之一。模型可能在实验里表现惊艳，但一上线就崩，因为真正线上根本拿不到那些泄漏信号。
- minimum demo: 故意把未来窗口统计特征加入模型，再移除它，比较离线结果变化并解释为什么这不是有效提升。
- hardware budget: CPU 即可。
- examples:
  - 未来统计特征
  - 标签衍生字段混入训练
  - 切分前先做全量标准化
- pitfalls:
  - 只查代码，不查数据生成链路
  - 把稳定高指标当成模型很强
  - 训练/验证/测试切分顺序不严格
- prerequisites:
  - C/C1. 问题设定/训练集 / 验证集 / 测试集
  - C/C1. 问题设定/目标函数
- core metrics:
  - 切分后指标落差
  - 线上线下差距
  - 回归集稳定性
- toolchain:
  - 数据 lineage 检查
  - 切分审计脚本
  - 回归测试集
- failure signs:
  - 离线异常好但线上几乎没收益
  - 某些字段一去掉整体性能断崖下跌
- next:
  - C/C4. 共性问题/过拟合 / 欠拟合
  - M/M4. 在线评测/Canary / regression set

#### 校准

- pathKey: `C/C4. 共性问题/校准`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C4-kbwrk-1.json`
- status: draft
- definition: 校准关注的是模型输出概率与真实发生频率是否一致。一个可排序的模型不一定是概率可靠的模型。
- importance: 在阈值决策、风险评分、资源分配和不确定性判断里，校准往往比单纯排序指标更重要。概率不准会直接导致策略错误。
- minimum demo: 在一个二分类模型上画 reliability diagram，比较校准前后概率分桶与真实命中率。
- hardware budget: CPU 即可。
- examples:
  - 风险评分
  - 告警阈值决策
  - 推荐置信度解释
- pitfalls:
  - AUC 高就默认概率可用
  - 只在训练分布上看校准，不看漂移后变化
- prerequisites:
  - A/A1. 数学基础/概率统计/估计、校准、置信
  - C/C5. 指标体系/Calibration
- core metrics:
  - ECE
  - Brier score
  - Calibration curve
- toolchain:
  - 校准曲线工具
  - Platt scaling / isotonic regression
- failure signs:
  - 同样 0.8 分在不同切片代表完全不同风险
  - 阈值策略一上线就明显偏保守或偏激进
- next:
  - C/C5. 指标体系/Calibration
  - M/M4. 在线评测/Business KPIs

#### 鲁棒性

- pathKey: `C/C4. 共性问题/鲁棒性`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C4-kbwrk-1.json`
- status: draft
- definition: 鲁棒性描述模型在噪声、扰动、分布变化、缺失特征或异常输入下保持稳定表现的能力。
- importance: 真实系统不会一直面对干净、静态的数据分布。鲁棒性决定了模型是否能承受环境变化而不频繁失控。
- minimum demo: 给验证集注入噪声、缺失值或轻微分布漂移，比较模型性能变化和失败样本类型。
- hardware budget: CPU 即可。
- examples:
  - 线上输入缺字段
  - 用户行为模式变化
  - 数据采集口径变化
- pitfalls:
  - 只在静态测试集上做一次性评估
  - 把单点成功当成系统稳定
- prerequisites:
  - C/C1. 问题设定/分布漂移
  - C/C1. 问题设定/IID 假设
- core metrics:
  - 漂移前后性能差
  - 切片最差表现
  - 恢复速度
- toolchain:
  - slice evaluation
  - 漂移监控
  - 回归集
- failure signs:
  - 一旦输入分布略变性能就断崖
  - 某些边缘场景持续无人发现
- next:
  - M/M4. 在线评测/Real-user failure mining
  - M/M4. 在线评测/Canary / regression set

#### 可解释性

- pathKey: `C/C4. 共性问题/可解释性`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C4-kbwrk-1.json`
- status: draft
- definition: 可解释性关注的是模型为什么做出某个预测，以及人是否能理解这种决策依据。它既包括全局解释，也包括单样本解释。
- importance: 在风控、医疗、推荐调优和内部协作里，可解释性不仅是合规或信任问题，也是高效错误分析和特征迭代的重要抓手。
- minimum demo: 对一个树模型和一个 GBDT 模型分别做特征重要性和单样本贡献分析，比较它们的可解释边界。
- hardware budget: CPU 即可。
- examples:
  - 审核模型的特征贡献
  - 错误案例解释
  - 业务方复盘某次误判
- pitfalls:
  - 把可解释性工具输出当成因果解释
  - 只做全局重要性，不看具体失败样本
- prerequisites:
  - C/C3. 经典模型家族/决策树
  - C/C3. 经典模型家族/GBDT
- core metrics:
  - 解释稳定性
  - 人工可用性
  - 错误分析效率
- toolchain:
  - SHAP
  - 特征重要性分析
  - 错误样本复盘
- failure signs:
  - 团队无法回答模型为什么错
  - 解释结果换一批样本就完全变形
- next:
  - M/M4. 在线评测/Human feedback
  - C/C4. 共性问题/特征工程

### C5. 指标体系

- pathKey: `C/C5. 指标体系`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-C.json`
- status: draft
- definition: 指标体系回答的是：模型到底算不算“好”。不同任务需要不同指标来衡量分类正确性、排序质量、回归误差、概率可靠性以及业务成本。
- importance: 没有正确指标，模型优化方向就会跑偏。机器学习里大量误判都来自“把容易算的指标当成真正重要的指标”，而不是模型本身不会学。
- minimum demo: 在同一个分类任务上同时报告 Accuracy、Precision / Recall / F1、AUC 和 Calibration，比较它们为什么会给出不同判断。
- hardware budget: CPU 即可。
- examples:
  - 分类任务看 F1 而不是只看 Accuracy
  - 排序任务看 NDCG
  - 风险评分任务看校准
- pitfalls:
  - 把单一指标当成总目标
  - 忽略切片与业务成本
  - 离线指标和线上目标脱节
- prerequisites:
  - C/C1. 问题设定/目标函数
  - C/C2. 学习范式/监督学习
  - C/C4. 共性问题
- core metrics:
  - Accuracy
  - F1
  - AUC
  - MSE / MAE
  - Ranking metrics
  - Calibration
- toolchain:
  - scikit-learn metrics
  - 混淆矩阵
  - reliability diagram
- failure signs:
  - 离线一个指标很好但线上价值很低
  - 团队对同一模型结论完全相反
  - 阈值一改，结果解释就失真
- next:
  - C/C5. 指标体系/Precision / Recall / F1
  - C/C5. 指标体系/AUC
  - C/C5. 指标体系/Calibration
  - M/M4. 在线评测/Business KPIs

#### Accuracy

- pathKey: `C/C5. 指标体系/Accuracy`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C5-14frcqx-1.json`
- status: draft
- definition: Accuracy 衡量的是预测正确样本占全部样本的比例，是分类任务里最直观的指标。
- importance: 它简单、好懂、易沟通，但只适合类别相对均衡且错误代价近似时使用。只要样本分布失衡，Accuracy 往往会产生误导。
- minimum demo: 在一个高度不平衡分类任务上同时报告 Accuracy 和 Recall，观察为什么“高 Accuracy”仍可能意味着模型几乎没用。
- hardware budget: CPU 即可。
- examples:
  - 平衡分类任务的快速 baseline
  - 作为辅助指标观察整体正确率
- pitfalls:
  - 在类别不平衡任务上单独使用
  - 忽略阈值变化对 Accuracy 的影响
- prerequisites:
  - C/C2. 学习范式/监督学习/分类
- core metrics:
  - 正确率
  - 混淆矩阵
- toolchain:
  - scikit-learn metrics
- failure signs:
  - Accuracy 很高但关键少数类几乎全错
- next:
  - C/C5. 指标体系/Precision / Recall / F1
  - C/C4. 共性问题/类别不平衡

#### Precision / Recall / F1

- pathKey: `C/C5. 指标体系/Precision / Recall / F1`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C5-14frcqx-1.json`
- status: draft
- definition: Precision 衡量预测为正的样本里有多少是真的，Recall 衡量真实为正的样本里有多少被找回，F1 则在两者之间做平衡。
- importance: 它们是类别不平衡场景下最常用的一组指标，能把“漏判”和“误报”的代价拆开讨论。
- minimum demo: 固定一个二分类模型，调不同阈值，画出 Precision-Recall 的此消彼长，并观察 F1 在什么位置达到折中。
- hardware budget: CPU 即可。
- examples:
  - 欺诈识别看 Recall
  - 高成本审核看 Precision
  - 综合对比看 F1
- pitfalls:
  - 不知道阈值对应哪个业务动作
  - 只报 F1 不报 Precision 和 Recall
- prerequisites:
  - C/C2. 学习范式/监督学习/分类
  - C/C4. 共性问题/类别不平衡
- core metrics:
  - Precision
  - Recall
  - F1
  - PR curve
- toolchain:
  - 混淆矩阵
  - 阈值扫描
- failure signs:
  - 离线 F1 还行，但线上误报或漏报成本不可接受
- next:
  - C/C5. 指标体系/Cost-sensitive metrics
  - M/M4. 在线评测/Business KPIs

#### AUC

- pathKey: `C/C5. 指标体系/AUC`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C5-14frcqx-1.json`
- status: draft
- definition: AUC 衡量模型把正样本排在负样本前面的能力，反映的是整体排序能力而不是某个固定阈值下的表现。
- importance: 当你更关心排序质量、阈值仍会调整，或者类别不平衡较明显时，AUC 往往比 Accuracy 更稳。
- minimum demo: 在同一模型上比较不同阈值下 Accuracy 的变化和 AUC 的稳定性，理解排序指标和决策指标的区别。
- hardware budget: CPU 即可。
- examples:
  - CTR 预估
  - 风险评分排序
  - 召回前排序
- pitfalls:
  - AUC 高就默认业务一定好
  - 忽视实际阈值和校准
- prerequisites:
  - C/C2. 学习范式/监督学习/分类
- core metrics:
  - ROC-AUC
  - PR-AUC
- toolchain:
  - ROC / PR curve
- failure signs:
  - AUC 很高但一落到业务阈值上就不好用
- next:
  - C/C5. 指标体系/Calibration
  - C/C3. 经典模型家族/GBDT

#### MSE / MAE

- pathKey: `C/C5. 指标体系/MSE / MAE`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C5-14frcqx-1.json`
- status: draft
- definition: MSE 和 MAE 是回归任务里最常见的误差指标。MSE 会更惩罚大误差，MAE 则对异常值相对更稳。
- importance: 它们帮助学习者理解“误差函数不只是评估工具，也是优化偏好的选择”。同样一个回归模型，选不同指标会影响你对好坏的判断。
- minimum demo: 在带有少量异常值的回归数据集上同时报告 MSE 和 MAE，观察两者对异常样本的敏感度差异。
- hardware budget: CPU 即可。
- examples:
  - 房价预测
  - 需求量预估
  - 时序数值回归
- pitfalls:
  - 只报一个误差指标不看分布
  - 不知道异常值对 MSE 的放大作用
- prerequisites:
  - C/C2. 学习范式/监督学习/回归
- core metrics:
  - MSE
  - RMSE
  - MAE
- toolchain:
  - 残差分析
  - 误差分桶
- failure signs:
  - 平均误差还行，但少数大误差样本非常糟
- next:
  - C/C3. 经典模型家族/线性回归 / 逻辑回归
  - C/C4. 共性问题/鲁棒性

#### Ranking metrics

- pathKey: `C/C5. 指标体系/Ranking metrics`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C5-14frcqx-1.json`
- status: draft
- definition: Ranking metrics 用来衡量排序结果是否把更相关、更重要的项目排在前面，常见如 NDCG、MAP、MRR 等。
- importance: 推荐、搜索和召回重排场景的目标不是单点分类正确，而是列表前部的整体质量，因此必须用排序指标而不是普通分类指标。
- minimum demo: 对一个搜索或推荐样例集合计算 NDCG@K，比较前几位顺序变化对指标的影响。
- hardware budget: CPU 即可。
- examples:
  - 搜索结果排序
  - 推荐列表重排
  - 召回候选排序
- pitfalls:
  - 用 Accuracy 评价排序任务
  - 不显式指定 cutoff@K
  - 忽视位置权重
- prerequisites:
  - C/C2. 学习范式/监督学习/排序
- core metrics:
  - NDCG
  - MRR
  - MAP
- toolchain:
  - 排序评测脚本
  - top-k 分析
- failure signs:
  - 整体相关率不错，但列表头部体验很差
- next:
  - C/C3. 经典模型家族/GBDT
  - M/M4. 在线评测/Task completion

#### Calibration

- pathKey: `C/C5. 指标体系/Calibration`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C5-14frcqx-1.json`
- status: draft
- definition: Calibration 指模型输出的分数或概率与真实发生频率的一致程度，例如输出 0.8 的样本是否真的大约 80% 为正。
- importance: 它把“可排序”进一步提升为“可决策”。在阈值、资源分配、告警和风险管理中，校准直接影响策略是否合理。
- minimum demo: 画 reliability diagram，并在校准前后比较分桶置信度与真实命中率。
- hardware budget: CPU 即可。
- examples:
  - 风险告警阈值设置
  - 置信度输出解释
- pitfalls:
  - 把 AUC 当成概率质量指标
  - 只在静态离线集看校准
- prerequisites:
  - A/A1. 数学基础/概率统计/估计、校准、置信
  - C/C4. 共性问题/校准
- core metrics:
  - ECE
  - Brier score
  - reliability diagram
- toolchain:
  - Platt scaling
  - isotonic regression
- failure signs:
  - 同一置信度在不同场景下对应完全不同真实风险
- next:
  - C/C4. 共性问题/校准
  - M/M4. 在线评测/Business KPIs

#### Cost-sensitive metrics

- pathKey: `C/C5. 指标体系/Cost-sensitive metrics`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C5-14frcqx-1.json`
- status: draft
- definition: Cost-sensitive metrics 把不同错误类型的业务代价显式纳入评估，例如漏报比误报更贵，或不同人群的错误代价不同。
- importance: 很多真实系统里，模型目标不是“平均正确”，而是“总成本最低”。当代价不对称时，只看通用指标会严重误导决策。
- minimum demo: 为同一模型设置不同的误报/漏报成本矩阵，观察最优阈值如何改变。
- hardware budget: CPU 即可。
- examples:
  - 欺诈漏判代价高于误报
  - 客服分流中的不同工单成本
- pitfalls:
  - 业务代价只是口头上提到，评估里却没体现
  - 把所有切片强行套同一个阈值
- prerequisites:
  - C/C5. 指标体系/Precision / Recall / F1
  - C/C4. 共性问题/类别不平衡
- core metrics:
  - expected cost
  - cost curve
  - 阈值收益
- toolchain:
  - 阈值扫描
  - 成本矩阵分析
- failure signs:
  - 模型平均指标好，但业务总损失仍然很高
- next:
  - M/M4. 在线评测/Business KPIs
  - C/C4. 共性问题/类别不平衡

### C6. 与大模型的对应关系

- pathKey: `C/C6. 与大模型的对应关系`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-C.json`
- status: draft
- definition: 这一模块把传统机器学习语言映射到大模型训练与应用实践中：预训练对应大规模自监督学习，SFT 对应监督学习，偏好优化与 RLHF 对应奖励/反馈驱动的后训练，而 evals 则是更贴近生成式系统的测试扩展。
- importance: 如果不建立这层映射，学习者会把“大模型”当成完全新的世界；但一旦映射清楚，就能看懂大模型训练并不是推翻 ML，而是把数据、目标、反馈和评测扩展到了更大规模与更复杂输出空间。
- minimum demo: 把一个经典分类任务和一个 LLM 后训练任务并排写出来，比较它们的数据形态、目标函数、反馈信号和评测方式。
- hardware budget: 理解层面不需要额外算力；真正训练大模型则远高于传统 ML。
- examples:
  - 预训练 ≈ 自监督表示学习
  - SFT ≈ 监督学习
  - RLHF / DPO ≈ 奖励或偏好驱动优化
  - Evals ≈ 任务级测试体系
- pitfalls:
  - 把大模型术语和 ML 术语完全割裂
  - 只按训练阶段名字理解，不看反馈信号本质
  - 把生成式评测简化成单一离线分数
- prerequisites:
  - C/C2. 学习范式
  - C/C5. 指标体系
  - D/D3. 训练范式
- core metrics:
  - 数据监督信号类型
  - 样本效率
  - 对齐效果
  - 任务级评测结果
- toolchain:
  - 训练数据配方
  - 偏好数据
  - 评测集
  - 在线反馈
- failure signs:
  - 会背术语但说不清对应关系
  - 把后训练当成和传统监督学习毫无关系
  - 评测只剩 benchmark 分数
- next:
  - C/C6. 与大模型的对应关系/预训练 ≈ 大规模自监督学习
  - C/C6. 与大模型的对应关系/SFT ≈ 监督学习
  - C/C6. 与大模型的对应关系/DPO / GRPO / RFT / RLHF ≈ 反馈/奖励驱动的后训练
  - C/C6. 与大模型的对应关系/Evals ≈ 面向生成式系统的扩展测试体系

#### 预训练 ≈ 大规模自监督学习

- pathKey: `C/C6. 与大模型的对应关系/预训练 ≈ 大规模自监督学习`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C6-14bwjym-1.json`
- status: draft
- definition: 大模型预训练本质上是在海量无标签或弱标签数据上，通过自回归、mask 或对比式目标学习通用表示与条件生成能力，因此可以看作自监督学习在超大规模语料和参数空间中的延伸。
- importance: 这条映射能把“预训练”从神秘黑盒拉回到熟悉的 ML 语言里：它并不是脱离机器学习的新物种，而是监督信号来自数据本身、规模更大、目标更通用的学习范式。
- minimum demo: 把一个小型 masked language modeling 或 next-token prediction 任务和传统自监督表示学习并排比较，观察它们都在“从数据自身构造目标”。
- hardware budget: 理解层面不需要额外算力；真正做大规模预训练需要远高于传统 ML 的资源。
- examples:
  - next-token prediction
  - masked language modeling
  - 多模态对齐式预训练
- pitfalls:
  - 把预训练理解成单纯记忆语料
  - 忽视 token 预测背后的表示学习属性
- prerequisites:
  - C/C2. 学习范式/自监督学习
  - D/D3. 训练范式/预训练
- core metrics:
  - 样本规模
  - 迁移能力
  - 下游泛化增益
- toolchain:
  - 预训练语料
  - tokenizer
  - 大规模训练基础设施
- failure signs:
  - 只会复述“预训练很重要”，却说不清监督信号从哪来
- next:
  - D/D3. 训练范式/预训练
  - C/C2. 学习范式/自监督学习

#### SFT ≈ 监督学习

- pathKey: `C/C6. 与大模型的对应关系/SFT ≈ 监督学习`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C6-14bwjym-1.json`
- status: draft
- definition: SFT（监督微调）用人工构造或筛选的输入-输出样本对继续训练模型，本质上就是在更复杂输出空间上的监督学习。
- importance: 这条映射能解释为什么很多传统 ML 直觉在 SFT 阶段仍成立：数据质量、标签一致性、切分策略、过拟合和目标偏差依旧是核心问题。
- minimum demo: 把分类任务的监督学习样本和指令-回答形式的 SFT 样本并排写出，比较两者都依赖显式目标输出。
- hardware budget: 小规模 SFT 可较低成本完成；大模型微调仍显著高于传统 ML。
- examples:
  - 指令跟随微调
  - 领域问答微调
  - tool calling 微调
- pitfalls:
  - 把 SFT 当成和监督学习完全不同的东西
  - 只看训练 loss，不看任务级表现和泛化
- prerequisites:
  - C/C2. 学习范式/监督学习
  - H/H2. 监督式后训练/SFT
- core metrics:
  - 任务通过率
  - 泛化能力
  - 格式遵循度
- toolchain:
  - 标注样本
  - SFT 数据配方
  - 任务评测集
- failure signs:
  - 训练集示例记住了，但换表达就不会做
  - 格式对了但任务没完成
- next:
  - H/H2. 监督式后训练/SFT
  - C/C2. 学习范式/监督学习

#### DPO / GRPO / RFT / RLHF ≈ 反馈/奖励驱动的后训练

- pathKey: `C/C6. 与大模型的对应关系/DPO / GRPO / RFT / RLHF ≈ 反馈/奖励驱动的后训练`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C6-14bwjym-1.json`
- status: draft
- definition: DPO、GRPO、RFT 和 RLHF 这类方法共同点在于：模型不再只从“标准答案”学习，而是从偏好、奖励或过程反馈中学习更符合目标的行为。
- importance: 它把强化学习、奖励建模和偏好学习这些 ML 传统概念引入了大模型后训练，使“输出好不好”不再只由静态标签决定，而由更复杂的反馈信号驱动。
- minimum demo: 对比一条 SFT 样本和一条偏好对比样本，说明一个在学“正确答案”，另一个在学“哪种回答更好”。
- hardware budget: 理解层面成本不高；真实后训练实验仍需较强训练资源和评测支持。
- examples:
  - DPO 用偏好对直接更新策略
  - RLHF 用奖励模型驱动优化
  - RFT 用过程或任务反馈做改进
- pitfalls:
  - 把所有偏好优化都当成 RLHF
  - 不区分奖励来源、反馈粒度和在线/离线差异
- prerequisites:
  - C/C2. 学习范式/强化学习
  - H/H3. 偏好优化与对齐/DPO
  - H/H3. 偏好优化与对齐/RLHF
- core metrics:
  - 偏好胜率
  - 奖励提升
  - 任务完成率
  - 副作用控制
- toolchain:
  - 偏好数据
  - 奖励模型
  - 在线或离线反馈
- failure signs:
  - 胜率提升了，但真实任务更差
  - 奖励被投机利用
- next:
  - H/H3. 偏好优化与对齐/DPO
  - H/H3. 偏好优化与对齐/GRPO
  - H/H3. 偏好优化与对齐/RFT
  - H/H3. 偏好优化与对齐/RLHF

#### Evals ≈ 面向生成式系统的扩展测试体系

- pathKey: `C/C6. 与大模型的对应关系/Evals ≈ 面向生成式系统的扩展测试体系`
- node type: `concept-group`
- detail source: `data/details/leaves-C-C6-14bwjym-1.json`
- status: draft
- definition: 大模型 evals 可以看作传统测试与离线评测体系在生成式任务上的扩展：不仅要看答案对不对，还要看格式遵循、工具调用、引用真实性、任务完成度和失败恢复。
- importance: 这条映射帮助学习者理解：生成式系统的评测并不是“放弃指标”，而是把传统 ML 的离线评估、切片分析和线上验证扩展到了更复杂的任务输出。
- minimum demo: 把一个分类测试集和一个 LLM agent 评测集并列，比较前者只核对标签，后者还要核对 schema、引用和工具成功率。
- hardware budget: 理解层面不需要额外硬件；运行大规模 agent evals 取决于调用成本和工具环境。
- examples:
  - 最终答案正确性
  - Schema adherence
  - 引用真实性
  - 任务完成率
- pitfalls:
  - 把 benchmark 分数当最终结论
  - 只做静态离线 eval，不做真实任务和在线反馈
- prerequisites:
  - C/C5. 指标体系
  - M/M2. 应用级评测/最终答案正确性
  - M/M4. 在线评测/A/B tests
- core metrics:
  - task success
  - tool success
  - schema adherence
  - 业务指标
- toolchain:
  - 离线评测集
  - 应用级评测框架
  - 在线实验
- failure signs:
  - 离线分数不错，但真实用户任务失败率高
  - 单项指标好看，却掩盖了系统级失败
- next:
  - M/M2. 应用级评测/最终答案正确性
  - M/M2. 应用级评测/Schema adherence
  - M/M2. 应用级评测/Tool execution success
  - M/M4. 在线评测/A/B tests

## D. 深度学习与基础模型

- pathKey: `D`
- node type: `domain`
- stage: 01 基础底座
- graph summary: PyTorch 教程把数据、模型、优化、训练作为完整工作流；HF 的课程与文档则把 Transformer、Diffusion、CV、Audio、多模态等统一到基础模型生态里。
- relation notes:
  - 深度学习与基础模型 是 模态、任务域与智能形态、LLM 核心机制、模型适配、后训练与对齐、运行时与基础设施 的模型底层。
  - “基础模型”是 深度学习与基础模型 层产物；“LLM / VLM / Voice model”是 深度学习与基础模型 层下的特化家族。
  - 深度学习与基础模型 与 机器学习 的关系：机器学习 提供学习原理；深度学习与基础模型 提供现代可扩展实现。
- detail source: `data/details/domain-D.json`
- status: completed
- definition: 深度学习与基础模型关注用可微分参数化函数从数据中学习表示、预测与生成。它以神经网络为基本计算单元，通过前向传播得到输出、通过反向传播和优化器更新参数，并在更大规模的数据、算力与训练时长支持下形成从任务模型到基础模型的连续谱。这个 domain 覆盖网络基础、主流架构、训练范式、基础模型类型、生成方式以及规模化因素，核心问题是：模型怎样表示信息、怎样被训练出来、怎样随着规模扩展而获得更强能力。
- importance: 这是现代 AI 工程的主干层。无论是视觉、语音、文本还是多模态系统，当前主流能力几乎都建立在深度学习之上；而基础模型进一步把“为单一任务训练模型”推进为“先学通用表征，再通过提示、微调或工具使用适配具体任务”。理解这一层，才能看懂为什么 Transformer、扩散模型、预训练、微调、上下文长度、数据规模和系统优化会共同决定模型效果、成本与可部署性。对工程学习者来说，这个 domain 的价值不只是记住术语，而是建立一条从小模型实验到大模型系统判断的统一视角。
- minimum demo: 用一个现成框架完成一次端到端最小闭环：选择一个小数据集，搭建一个简单神经网络或调用一个小型预训练模型，完成训练/验证或推理；记录 loss、核心任务指标、显存占用与训练时间；再只改变一个关键因素（如模型深度、学习率、数据量、是否使用预训练）观察效果变化。这个最小实验能帮助学习者把“架构—训练—指标—资源”四件事连起来，而不是把深度学习只当成公式或 API。
- hardware budget: 入门理解和最小实验通常只需要消费级 CPU 或单张入门 GPU；复现实用训练流程通常需要单张中高端 GPU 与稳定的数据/日志环境；涉及较大预训练、长上下文或多模态联合训练时，成本会迅速转向多 GPU、分布式训练与更强的数据吞吐系统。学习阶段的重点不是盲目追求大规模，而是在可承担预算内建立对显存、吞吐、收敛速度、模型效果与部署成本之间权衡的直觉。
- examples:
  - 用 MLP 或 CNN 在小型图像数据集上完成分类，观察训练集与验证集指标变化。
  - 用 RNN/LSTM/GRU 或 Transformer 做基础序列建模，比较长依赖处理能力与训练效率。
  - 在预训练文本模型上做微调，比较从头训练与迁移学习的样本效率差异。
  - 用扩散模型或自回归模型完成一个最小生成任务，感受生成质量、速度与控制性的权衡。
  - 在相同任务上只改变数据规模、参数规模或上下文长度，观察性能与资源消耗如何联动。
- pitfalls:
  - 把深度学习理解成固定架构清单，忽略表示学习、优化和规模化之间的关系。
  - 只看训练 loss，不看验证指标、推理质量、延迟和资源成本。
  - 把“模型更大”误当成“效果一定更好”，忽略数据质量、训练配方和系统瓶颈。
  - 把预训练模型当黑盒 API，无法判断什么时候该微调、蒸馏、冻结或更换架构。
  - 最小实验缺乏对照组，导致无法定位问题来自数据、优化器、架构还是实现细节。
  - 忽略数值稳定性、归一化、正则化和 checkpoint 管理，导致训练过程不可复现。
- core metrics:
  - training loss
  - validation loss
  - accuracy / F1 / recall 等任务指标
  - perplexity 或 token-level likelihood
  - 生成质量指标（如 BLEU/ROUGE/FID，按任务选取）
  - 吞吐量（samples/s 或 tokens/s）
  - 显存占用
  - 训练时长
  - 推理延迟
  - 收敛稳定性
- toolchain:
  - PyTorch
  - JAX
  - TensorFlow
  - CUDA / ROCm
  - Weights & Biases 或 TensorBoard
  - Hugging Face Transformers / Diffusers
  - DeepSpeed / FSDP / Megatron-LM
  - 数据加载与预处理工具
  - checkpoint 与实验配置管理工具
- failure signs:
  - 训练 loss 不下降或剧烈震荡，说明优化、数据或实现存在基础问题。
  - 训练指标持续变好但验证指标停滞或变差，出现明显过拟合。
  - 显存频繁爆掉、吞吐异常低或 checkpoint 不稳定，说明系统配置不匹配当前规模。
  - 换少量随机种子或批次顺序结果差异很大，说明训练稳定性不足。
  - 生成结果模式坍缩、重复、幻觉严重或对条件控制不敏感，说明模型或训练范式与任务不匹配。
  - 模型效果提升小于资源开销增长，说明规模化收益已变差或瓶颈不在参数量。
- next:
  - D/D1. 神经网络基础
  - D/D2. 架构家族
  - D/D3. 训练范式
  - D/D4. 基础模型类型
  - D/D5. 生成范式
  - D/D6. 规模化要素

### D1. 神经网络基础

- pathKey: `D/D1. 神经网络基础`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-D.json`
- status: draft
- definition: 神经网络基础关注的是一个可微分模型如何表示数据、如何前向计算、如何通过梯度更新参数，以及如何在训练过程中保持稳定、可复现和可恢复。这里的关键词包括张量、参数、前向/反向传播、autograd、激活函数、归一化、正则化、优化器和 checkpoint。
- importance: 这是所有深度学习实践的公共底座。只要这层没有真正理解，后面看到 CNN、Transformer、扩散模型或大模型训练配方时，都会沦为背 API 和背术语。
- minimum demo: 用 PyTorch 写一个两层 MLP，手动打印张量形状、参数数量、前向输出、loss、梯度和 checkpoint 保存/恢复过程。
- hardware budget: CPU 即可完成最小实验。
- examples:
  - 手写一个最小 MLP
  - 观察反向传播后的梯度
  - 保存并恢复训练状态
- pitfalls:
  - 把 autograd 当魔法，不理解计算图和梯度流
  - loss 下降就默认一切正常
  - 忽视数值稳定性和 checkpoint 管理
- prerequisites:
  - A/A1. 数学基础/线性代数
  - A/A1. 数学基础/微积分与优化
- core metrics:
  - loss
  - 梯度稳定性
  - 训练吞吐
  - 恢复成功率
- toolchain:
  - PyTorch
  - TensorBoard / W&B
  - checkpoint 管理
- failure signs:
  - loss 不降或 NaN
  - 梯度爆炸/消失
  - 训练中断后无法恢复
- next:
  - D/D1. 神经网络基础/张量
  - D/D1. 神经网络基础/反向传播
  - D/D1. 神经网络基础/Optimizer
  - D/D2. 架构家族

#### 张量

- pathKey: `D/D1. 神经网络基础/张量`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D1-v803ad-1.json`
- status: draft
- definition: 张量是深度学习中表示标量、向量、矩阵和更高维数组的统一数据结构，也是神经网络输入、参数、中间激活和梯度的基本载体。
- importance: 不理解张量的形状、维度和广播规则，后面几乎所有模型实现都会频繁出错。很多 bug 本质上不是模型问题，而是张量语义没对齐。
- minimum demo: 在 PyTorch 里创建几个不同形状的张量，做 reshape、transpose、matmul 和 broadcasting，观察输出形状变化。
- hardware budget: CPU 即可。
- examples:
  - batch x seq x hidden
  - 图像张量 NCHW
  - 参数矩阵和梯度张量
- pitfalls:
  - 把 shape 对上当成语义正确
  - 忽略 batch 维、时间维和通道维差异
- prerequisites:
  - A/A1. 数学基础/线性代数/向量、矩阵、张量
- core metrics:
  - shape 正确性
  - 内存占用
- toolchain:
  - PyTorch tensor ops
- failure signs:
  - shape mismatch
  - silent broadcasting 造成隐蔽错误
- next:
  - D/D1. 神经网络基础/参数
  - D/D1. 神经网络基础/前向传播

#### 参数

- pathKey: `D/D1. 神经网络基础/参数`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D1-v803ad-1.json`
- status: draft
- definition: 参数是模型在训练过程中被优化更新的权重和偏置，用来决定输入经过网络后会产生什么映射关系。
- importance: 参数规模、初始化方式和更新策略决定了模型容量、训练稳定性和部署成本，是连接架构与训练的关键接口。
- minimum demo: 打印一个小 MLP 的参数名称、形状和总参数量，观察训练前后参数如何变化。
- hardware budget: CPU 即可。
- examples:
  - 线性层权重
  - 卷积核
  - LayerNorm 参数
- pitfalls:
  - 只看总参数量，不看参数分布和实际可训练部分
  - 冻结与解冻策略不清晰
- prerequisites:
  - D/D1. 神经网络基础/张量
- core metrics:
  - 参数量
  - 可训练参数比例
- toolchain:
  - model summary
  - parameter inspection
- failure signs:
  - 参数没更新但训练还在跑
  - 参数量暴涨带来显存和延迟问题
- next:
  - D/D1. 神经网络基础/Optimizer
  - D/D1. 神经网络基础/Checkpoint

#### 前向传播

- pathKey: `D/D1. 神经网络基础/前向传播`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D1-v803ad-1.json`
- status: draft
- definition: 前向传播是输入按照既定计算图依次经过各层、产生中间激活并最终得到 logits 或预测结果的过程，本质上是在定义模型到底执行了什么映射。
- importance: 训练时很多问题在 backward 之前就已经注定了，比如 shape 接错、激活塌陷、数值爆炸或 train/eval 行为不一致。能读懂前向路径，才知道模型为什么会输出这种结果。
- minimum demo: 对一个两层 MLP 或最小 Transformer block 挂 forward hook，逐层记录输入输出 shape、均值、方差和最大值，确认每一层都在做预期中的事。
- hardware budget: CPU 即可。
- examples:
  - embedding -> attention -> logits
  - 卷积 -> 激活 -> pooling
- pitfalls:
  - 只关心最终输出，不观察中间激活异常
  - 把层顺序和 shape 对上就当逻辑正确，忽略 train/eval 分支或 mask 条件
- prerequisites:
  - D/D1. 神经网络基础/张量
  - D/D1. 神经网络基础/激活函数
- core metrics:
  - 输出 shape
  - 激活分布
  - 数值稳定性
- toolchain:
  - forward hooks
  - activation logging
- failure signs:
  - 激活全为 0、全接近常数或异常爆大
  - 中间层 shape 虽然能跑通，但语义维度已经错位
- next:
  - D/D1. 神经网络基础/反向传播
  - D/D2. 架构家族/MLP

#### 反向传播

- pathKey: `D/D1. 神经网络基础/反向传播`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D1-v803ad-1.json`
- status: draft
- definition: 反向传播利用链式法则把损失对输出的敏感度逐层传播回参数，从而得到参数梯度。
- importance: 它是深度学习可训练的核心机制。理解反向传播，才能真正理解为什么参数会朝某个方向更新，为什么会出现梯度爆炸或消失。
- minimum demo: 对一个简单计算图手推梯度，再和框架自动求导结果比对。
- hardware budget: CPU 即可。
- examples:
  - loss.backward()
  - 链式法则传播梯度
- pitfalls:
  - 只会调用 backward，不知道梯度从哪来
  - 梯度累积与清零机制混淆
- prerequisites:
  - D/D1. 神经网络基础/前向传播
  - A/A1. 数学基础/微积分与优化/导数、偏导、链式法则
- core metrics:
  - 梯度范数
  - 梯度稳定性
- toolchain:
  - grad inspection
  - gradient clipping
- failure signs:
  - 梯度为 0 或 NaN
  - 训练早期极不稳定
- next:
  - D/D1. 神经网络基础/Autograd
  - D/D1. 神经网络基础/Optimizer

#### Autograd

- pathKey: `D/D1. 神经网络基础/Autograd`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D1-v803ad-1.json`
- status: draft
- definition: Autograd 是框架自动构建计算图并自动求导的机制，让研究者不必手写大部分梯度表达式。
- importance: 它大幅降低了实验成本，但也容易让人忽视计算图生命周期、in-place 操作、副图断开和 no_grad 等关键细节。
- minimum demo: 写一个小模型，在开启和关闭 autograd 的情况下比较梯度和显存行为。
- hardware budget: CPU 即可。
- examples:
  - requires_grad
  - detach
  - torch.no_grad
- pitfalls:
  - 误用 detach 导致梯度断掉
  - in-place 操作破坏计算图
- prerequisites:
  - D/D1. 神经网络基础/反向传播
- core metrics:
  - 梯度存在性
  - 计算图正确性
- toolchain:
  - autograd profiler
  - debug hooks
- failure signs:
  - loss.backward 后梯度全空
  - 莫名其妙的 in-place error
- next:
  - D/D1. 神经网络基础/Optimizer
  - D/D1. 神经网络基础/Checkpoint

#### 激活函数

- pathKey: `D/D1. 神经网络基础/激活函数`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D1-v803ad-1.json`
- status: draft
- definition: 激活函数为网络引入非线性，使多层网络能够表示比线性模型更复杂的函数关系。
- importance: 没有非线性，多层网络会退化成单层线性变换。激活函数的选择也会影响梯度流、稀疏性和训练稳定性。
- minimum demo: 对比 ReLU、GELU 和 Sigmoid 在同一小网络上的训练曲线和激活分布。
- hardware budget: CPU 即可。
- examples:
  - ReLU
  - GELU
  - Sigmoid
  - Tanh
- pitfalls:
  - 死 ReLU
  - 饱和激活导致梯度消失
- prerequisites:
  - D/D1. 神经网络基础/前向传播
- core metrics:
  - 激活分布
  - 梯度通过率
- toolchain:
  - activation histogram
- failure signs:
  - 大面积神经元失活
  - 训练极慢且梯度发散
- next:
  - D/D2. 架构家族/MLP
  - D/D2. 架构家族/Transformer

#### Normalization

- pathKey: `D/D1. 神经网络基础/Normalization`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D1-v803ad-1.json`
- status: draft
- definition: Normalization 通过对激活或表示做标准化，帮助稳定训练、改善梯度流和提高收敛速度。常见形式包括 BatchNorm、LayerNorm、RMSNorm 等。
- importance: 它是很多深网络可训练的关键配方之一。尤其在 Transformer 中，归一化位置和形式会直接影响训练稳定性。
- minimum demo: 比较有无 normalization 的小网络训练曲线和梯度稳定性。
- hardware budget: CPU 即可。
- examples:
  - BatchNorm
  - LayerNorm
  - RMSNorm
- pitfalls:
  - 不了解 batch 统计与推理阶段差异
  - 归一化位置随意调整导致训练变差
- prerequisites:
  - D/D1. 神经网络基础/激活函数
  - D/D1. 神经网络基础/前向传播
- core metrics:
  - 训练稳定性
  - 收敛速度
- toolchain:
  - norm layer inspection
- failure signs:
  - 加深网络后训练突然不稳定
  - train/eval 切换后表现差异异常大
- next:
  - D/D2. 架构家族/Transformer
  - D/D1. 神经网络基础/Optimizer

#### Regularization

- pathKey: `D/D1. 神经网络基础/Regularization`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D1-v803ad-1.json`
- status: draft
- definition: Regularization 是限制模型过度记忆训练数据的一组手段，包括权重衰减、dropout、数据增强、早停等。
- importance: 它直接连接到泛化问题，是控制过拟合的重要工具箱。深度模型往往容量极大，没有正则手段很容易只记住训练集。
- minimum demo: 对同一个模型分别加入 dropout 或 weight decay，比较训练/验证差距变化。
- hardware budget: CPU 即可。
- examples:
  - weight decay
  - dropout
  - early stopping
- pitfalls:
  - 把所有泛化问题都寄希望于正则项
  - 正则过强导致严重欠拟合
- prerequisites:
  - C/C4. 共性问题/过拟合 / 欠拟合
  - D/D1. 神经网络基础/参数
- core metrics:
  - 训练/验证 gap
  - 泛化表现
- toolchain:
  - weight decay config
  - dropout ablation
- failure signs:
  - 训练集升得很快，验证集不动
  - 加正则后整体都学不动
- next:
  - D/D3. 训练范式/从头训练
  - C/C4. 共性问题/过拟合 / 欠拟合

#### Optimizer

- pathKey: `D/D1. 神经网络基础/Optimizer`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D1-v803ad-1.json`
- status: draft
- definition: Optimizer 根据参数梯度决定每一步如何更新参数。常见优化器包括 SGD、Adam 及其变体。
- importance: 优化器决定训练速度、稳定性和最终收敛点。相同架构和数据下，不同优化器和学习率配方可能带来完全不同的结果。
- minimum demo: 在同一个小模型上比较 SGD 和 Adam 的收敛曲线与最终验证表现。
- hardware budget: CPU 即可。
- examples:
  - SGD
  - AdamW
- pitfalls:
  - 只换优化器不调学习率
  - 把优化器当万能改进按钮
- prerequisites:
  - D/D1. 神经网络基础/反向传播
  - A/A1. 数学基础/微积分与优化/SGD、Adam 类优化器
- core metrics:
  - 收敛速度
  - 训练稳定性
- toolchain:
  - optimizer config
  - lr scheduler
- failure signs:
  - loss 大幅震荡
  - 换 seed 后收敛结果差异很大
- next:
  - D/D3. 训练范式/从头训练
  - D/D3. 训练范式/微调

#### Checkpoint

- pathKey: `D/D1. 神经网络基础/Checkpoint`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D1-v803ad-1.json`
- status: draft
- definition: Checkpoint 是对模型参数、优化器状态和训练进度的持久化保存，用于恢复训练、回滚版本和做离线评测。
- importance: 训练稳定不只是 loss 稳定，还包括中断后能恢复、实验结果可复现。checkpoint 是工程化训练的基本设施。
- minimum demo: 训练一个小模型到一半保存 checkpoint，然后中断并恢复，验证恢复后 loss 轨迹基本连续。
- hardware budget: CPU 即可。
- examples:
  - best checkpoint
  - latest checkpoint
  - EMA checkpoint
- pitfalls:
  - 只存模型参数，不存优化器状态
  - best / latest 语义混乱
- prerequisites:
  - D/D1. 神经网络基础/参数
  - D/D1. 神经网络基础/Optimizer
- core metrics:
  - 恢复成功率
  - 实验可复现性
- toolchain:
  - checkpoint manager
  - artifact storage
- failure signs:
  - 恢复后 loss 曲线断裂
  - 最佳模型无法回放
- next:
  - D/D3. 训练范式/从头训练
  - D/D3. 训练范式/微调

### D2. 架构家族

- pathKey: `D/D2. 架构家族`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-D.json`
- status: draft
- definition: 架构家族关注的是神经网络如何组织计算结构以适配不同数据形态与任务：MLP 适合一般表征映射，CNN 强于局部感受野，RNN/SSM 擅长序列状态更新，Transformer 擅长长程依赖和并行训练，Diffusion 擅长高质量生成，MoE 擅长扩展参数容量，GNN 擅长图结构建模。
- importance: 理解架构家族不是为了死记硬背模型名，而是为了知道：面对图像、语言、音频、图结构或生成任务时，为什么某一类结构更自然、更高效或更容易扩展。
- minimum demo: 选一个简单任务，用 MLP、CNN 或 Transformer 中至少两种结构跑对照实验，比较参数量、训练速度和效果差异。
- hardware budget: CPU 可做最小实验；较复杂结构更适合单 GPU。
- examples:
  - CNN 做图像分类
  - Transformer 做语言建模
  - Diffusion 做图像生成
- pitfalls:
  - 把架构流行度当成选择理由
  - 忽略输入结构和任务约束
  - 只看论文名字不看计算特性
- prerequisites:
  - D/D1. 神经网络基础
  - C/C2. 学习范式
- core metrics:
  - 任务指标
  - 参数量
  - 吞吐
  - 显存占用
- toolchain:
  - PyTorch
  - Transformers
  - Diffusers
- failure signs:
  - 换了更复杂架构但收益极低
  - 模型结构和数据形态天然不匹配
- next:
  - D/D2. 架构家族/MLP
  - D/D2. 架构家族/CNN
  - D/D2. 架构家族/Transformer
  - D/D5. 生成范式

#### MLP

- pathKey: `D/D2. 架构家族/MLP`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D2-nhaalt-1.json`
- status: draft
- definition: MLP 由若干线性变换和非线性激活交替堆叠而成，是最基础的前馈神经网络，也是很多复杂架构内部 feed-forward 子层的原型。
- importance: 理解 MLP 的关键不在于它“简单”，而在于它暴露了神经网络最基本的容量来源、过拟合方式和特征混合机制。很多大模型 block 里最吃参数的部分，本质上仍然是 MLP。
- minimum demo: 用两层 MLP 做一个小型表格分类或 MNIST 分类，同时记录训练/验证曲线，观察隐藏层宽度变化如何影响拟合能力和过拟合。
- hardware budget: CPU 即可。
- examples:
  - 表格数据分类
  - 作为大模型中的 feed-forward 子层
- pitfalls:
  - 直接拿 MLP 处理强结构化空间或长时序关系
  - 忽视输入特征尺度、离散特征编码和隐藏层宽度选择
- prerequisites:
  - D/D1. 神经网络基础/激活函数
  - D/D1. 神经网络基础/参数
- core metrics:
  - 任务指标
  - 参数量
  - 收敛速度
- toolchain:
  - PyTorch
- failure signs:
  - 训练集能快速记住，但验证集泛化很差
  - 对空间或时序结构任务表现明显不足
- next:
  - D/D2. 架构家族/CNN
  - D/D2. 架构家族/Transformer

#### CNN

- pathKey: `D/D2. 架构家族/CNN`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D2-nhaalt-1.json`
- status: draft
- definition: CNN 通过卷积核和局部感受野建模局部空间结构，擅长处理图像、频谱和局部模式显著的数据。
- importance: 它长期是视觉任务的主力架构，也帮助理解参数共享、平移不变性和层级特征抽取。
- minimum demo: 用一个小 CNN 在图像分类任务上训练，并可视化卷积特征图。
- hardware budget: CPU 可做最小实验；GPU 更流畅。
- examples:
  - 图像分类
  - OCR / 文档理解
  - 语音频谱建模
- pitfalls:
  - 卷积核尺寸和 stride 设计随意
  - 把 CNN 的局部优势误套到长程依赖任务
- prerequisites:
  - D/D1. 神经网络基础/张量
  - D/D1. 神经网络基础/前向传播
- core metrics:
  - Accuracy
  - 吞吐
  - 特征图尺寸
- toolchain:
  - PyTorch
  - vision dataloaders
- failure signs:
  - 特征图尺寸一路错下去
  - 局部模式能学到，但全局关系抓不住
- next:
  - E/E2. 视觉（CV）/图像分类
  - E/E2. 视觉（CV）/OCR / 文档理解

#### RNN / LSTM / GRU

- pathKey: `D/D2. 架构家族/RNN / LSTM / GRU`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D2-nhaalt-1.json`
- status: draft
- definition: RNN 系列通过显式隐藏状态递推处理序列数据，LSTM / GRU 则用门控机制缓解长序列梯度问题。
- importance: 它们是理解序列建模历史的重要一环，也能帮助学习者对比为什么 Transformer 后来会成为主流。
- minimum demo: 在一个简单字符级或时间序列任务上比较 vanilla RNN 和 LSTM 的训练稳定性。
- hardware budget: CPU 即可。
- examples:
  - 时间序列预测
  - 早期机器翻译
  - 语音序列建模
- pitfalls:
  - 长序列训练不稳定
  - 并行效率低
- prerequisites:
  - D/D1. 神经网络基础/前向传播
  - D/D1. 神经网络基础/反向传播
- core metrics:
  - 序列损失
  - 长依赖保持能力
  - 训练吞吐
- toolchain:
  - PyTorch RNN modules
- failure signs:
  - 序列一长效果就断崖
  - 训练速度远慢于并行架构
- next:
  - D/D2. 架构家族/Transformer
  - E/E3. 音频 / 语音/自动语音识别（ASR）

#### Transformer

- pathKey: `D/D2. 架构家族/Transformer`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D2-nhaalt-1.json`
- status: draft
- definition: Transformer 依赖注意力机制和并行前馈结构建模长程依赖，已成为语言、多模态和大量生成任务的主力架构。
- importance: 它几乎定义了当前基础模型时代。理解 Transformer，是理解 LLM、VLM、长上下文、工具调用和多模态统一建模的关键入口。
- minimum demo: 阅读一个最小 Transformer block 实现，并跟踪 attention、MLP、residual 和 normalization 的数据流。
- hardware budget: CPU 可做理解与极小实验；实用训练通常需要 GPU。
- examples:
  - LLM
  - Vision Transformer
  - 多模态 Transformer
- pitfalls:
  - 只背 attention，不理解 block 级计算结构
  - 忽略上下文长度与计算成本的平方关系
- prerequisites:
  - D/D1. 神经网络基础/Normalization
  - D/D1. 神经网络基础/前向传播
- core metrics:
  - tokens/s
  - 上下文长度
  - 任务指标
- toolchain:
  - Transformers
  - flash attention 类优化
- failure signs:
  - 长上下文成本过高
  - 训练稳定性依赖大量配方细节
- next:
  - E/E1. 语言（NLP / LLM）/LLM：通用语言能力模型
  - D/D5. 生成范式/自回归生成
  - D/D6. 规模化要素/上下文长度

#### Diffusion models

- pathKey: `D/D2. 架构家族/Diffusion models`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D2-nhaalt-1.json`
- status: draft
- definition: 扩散模型通过逐步加噪和逐步去噪学习数据分布，擅长高质量生成，尤其在图像领域表现突出。
- importance: 它代表了与自回归不同的一条主流生成路线，也解释了为什么现代图像生成系统会围绕噪声预测、采样步数和条件控制组织。
- minimum demo: 跑通一个最小 diffusion 推理示例，观察采样步数与生成质量/速度的权衡。
- hardware budget: GPU 更合适；CPU 仅适合理解级实验。
- examples:
  - 文生图
  - 图像编辑
  - 超分辨率
- pitfalls:
  - 忽视采样成本
  - 把扩散模型当成所有生成任务的默认答案
- prerequisites:
  - D/D1. 神经网络基础/Optimizer
  - D/D5. 生成范式/扩散生成
- core metrics:
  - 生成质量
  - 采样速度
  - 条件一致性
- toolchain:
  - Diffusers
- failure signs:
  - 生成质量好但速度慢到不可用
  - 条件控制不稳定
- next:
  - E/E2. 视觉（CV）/图像生成
  - D/D5. 生成范式/扩散生成

#### Mixture of Experts

- pathKey: `D/D2. 架构家族/Mixture of Experts`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D2-nhaalt-1.json`
- status: draft
- definition: MoE 通过只激活部分专家子网络来扩展总参数量，使模型在保持相对可控计算成本的同时拥有更大容量。
- importance: 它是规模化大模型的重要路线之一，体现了“参数规模”和“实际每 token 计算量”可以分离的工程思想。
- minimum demo: 阅读一个 top-k routing 的最小示例，理解 token 如何被路由到不同专家。
- hardware budget: 理解层面不高；真实训练和推理需要较强系统支持。
- examples:
  - 稀疏激活语言模型
  - 大规模多专家推理
- pitfalls:
  - 路由不均导致专家失衡
  - 系统复杂度大幅上升
- prerequisites:
  - D/D2. 架构家族/Transformer
  - D/D6. 规模化要素/参数规模
- core metrics:
  - activated params
  - 专家负载均衡
  - 吞吐
- toolchain:
  - 分布式训练
  - router monitoring
- failure signs:
  - 少数专家过载，大部分专家闲置
  - 系统成本高于收益
- next:
  - D/D6. 规模化要素/参数规模
  - D/D6. 规模化要素/系统优化

#### State Space Models

- pathKey: `D/D2. 架构家族/State Space Models`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D2-nhaalt-1.json`
- status: draft
- definition: State Space Models 用结构化状态更新来处理长序列，试图在保持长依赖建模能力的同时改善传统注意力的计算成本问题。
- importance: 它代表了后 Transformer 时代对更高效长序列建模的探索，也是理解“并非所有序列建模都必须是 attention”的重要案例。
- minimum demo: 比较一个 SSM 类模型和 Transformer 在长序列上的吞吐与内存行为。
- hardware budget: GPU 更合适；理解层面可只读实现。
- examples:
  - 长文本建模
  - 音频序列处理
  - 长上下文时序任务
- pitfalls:
  - 把论文优势直接等同于真实系统优势
  - 忽视生态成熟度
- prerequisites:
  - D/D2. 架构家族/RNN / LSTM / GRU
  - D/D6. 规模化要素/上下文长度
- core metrics:
  - 长序列吞吐
  - 内存占用
  - 任务指标
- toolchain:
  - 长序列 benchmark
- failure signs:
  - 理论复杂度好看，但实际工程收益不明显
- next:
  - D/D6. 规模化要素/上下文长度
  - E/E3. 音频 / 语音/音频分类

#### Graph Neural Networks

- pathKey: `D/D2. 架构家族/Graph Neural Networks`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D2-nhaalt-1.json`
- status: draft
- definition: GNN 在图结构上做消息传递与聚合，用来建模节点、边和图级别的关系模式。
- importance: 它是把深度学习推广到非欧几里得结构数据的重要方向，也能帮助连接图结构知识表示、推荐图和关系建模。
- minimum demo: 在一个小型节点分类任务上跑图卷积或图注意力模型，观察邻域聚合如何影响表示。
- hardware budget: CPU 可做小图实验。
- examples:
  - 节点分类
  - 关系预测
  - 图推荐
- pitfalls:
  - 图构建本身不合理
  - 过度平滑导致节点表示趋同
- prerequisites:
  - D/D1. 神经网络基础/张量
  - B/B4. 知识表示/知识图谱
- core metrics:
  - 节点/边任务指标
  - 图结构覆盖度
- toolchain:
  - PyG / DGL
- failure signs:
  - 图一变性能就显著波动
  - 邻居越多反而信息越糊
- next:
  - B/B4. 知识表示/知识图谱
  - E/E1. 语言（NLP / LLM）/信息抽取

### D3. 训练范式

- pathKey: `D/D3. 训练范式`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-D.json`
- status: draft
- definition: 训练范式关注的是模型用什么数据起点、以什么目标和流程学习能力，以及训练后如何继续适配任务。它包括从头训练、预训练、微调、多任务训练、迁移学习、蒸馏、自训练/伪标签和 staged training 等路线。
- importance: 同一个架构因为训练范式不同，最后能表现出的能力可能完全不同。理解训练范式，才能解释为什么有的模型适合通用能力积累，有的更适合任务迁移，有的更适合低成本部署。
- minimum demo: 选一个小模型，分别做一次从头训练和一次基于预训练权重的微调，对比样本效率和收敛速度。
- hardware budget: CPU 可做最小实验；预训练和较大微调通常需要 GPU。
- examples:
  - BERT 预训练后做任务微调
  - vision backbone 迁移到检测任务
  - 教师模型蒸馏到小模型
- pitfalls:
  - 不区分从头训练和迁移学习成本
  - 把微调当成唯一适配方式
  - 只看训练 loss，不看迁移与上线收益
- prerequisites:
  - D/D1. 神经网络基础/Optimizer
  - C/C2. 学习范式
- core metrics:
  - 样本效率
  - 收敛速度
  - 迁移增益
  - 部署成本
- toolchain:
  - training scripts
  - checkpoint loading
  - eval set
- failure signs:
  - 训练跑了很久但迁移收益很小
  - 从头训练和微调的策略边界模糊
- next:
  - D/D3. 训练范式/预训练
  - D/D3. 训练范式/微调
  - D/D3. 训练范式/蒸馏
  - H/H2. 监督式后训练

#### 从头训练

- pathKey: `D/D3. 训练范式/从头训练`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D3-12hzr8h-1.json`
- status: draft
- definition: 从头训练指模型参数从随机初始化开始，仅依赖当前任务数据和训练目标学习能力，不继承外部预训练权重。
- importance: 它能提供最干净的任务适配过程，也最能暴露数据、目标和优化本身的问题；但在大规模场景下通常成本最高、样本效率最低。
- minimum demo: 在一个小数据集上从随机初始化训练一个分类模型，并与使用预训练 backbone 的版本对比。
- hardware budget: CPU 或单 GPU 可做小实验；大模型从头训练成本极高。
- examples:
  - 小型 CNN 从头训练
  - 特定任务的专用小模型
- pitfalls:
  - 数据量不够却坚持从头训练
  - 把从头训练当成更“纯粹”就一定更好
- prerequisites:
  - D/D1. 神经网络基础/参数
  - D/D1. 神经网络基础/Optimizer
- core metrics:
  - 样本效率
  - 收敛速度
  - 资源成本
- toolchain:
  - training loop
  - checkpointing
- failure signs:
  - 训练了很久仍明显弱于微调方案
- next:
  - D/D3. 训练范式/预训练
  - D/D3. 训练范式/微调

#### 预训练

- pathKey: `D/D3. 训练范式/预训练`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D3-12hzr8h-1.json`
- status: draft
- definition: 预训练是在大规模通用数据上先学习基础表示和通用能力，再把这些能力迁移到更多下游任务上。
- importance: 这是基础模型时代最关键的范式之一，它把“先学通用能力，再做适配”变成了默认路径。
- minimum demo: 对比预训练词向量/语言模型与随机初始化模型在下游任务上的样本效率差异。
- hardware budget: 小型预训练实验可在单 GPU 上理解；真实大规模预训练成本极高。
- examples:
  - 语言模型预训练
  - 视觉 backbone 预训练
  - 多模态对齐预训练
- pitfalls:
  - 只看预训练 loss，不看迁移效果
  - 预训练数据和目标与实际应用脱节
- prerequisites:
  - C/C2. 学习范式/自监督学习
  - D/D6. 规模化要素/数据规模
- core metrics:
  - 迁移增益
  - 样本效率
  - 训练成本
- toolchain:
  - 大规模语料/数据集
  - distributed training
- failure signs:
  - 预训练投入很大，但下游增益不稳定
- next:
  - C/C6. 与大模型的对应关系/预训练 ≈ 大规模自监督学习
  - D/D3. 训练范式/微调
  - D/D4. 基础模型类型/文本基础模型

#### 微调

- pathKey: `D/D3. 训练范式/微调`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D3-12hzr8h-1.json`
- status: draft
- definition: 微调是在已有预训练模型权重基础上，使用更小规模、目标更明确的数据继续训练，使模型更适配特定任务、领域或风格。
- importance: 它是现实工程里最常见的适配手段之一，在成本、样本效率和效果之间通常比从头训练更优。
- minimum demo: 拿一个预训练文本或视觉模型做少量任务样本微调，并与零样本/从头训练做对比。
- hardware budget: 单 GPU 常可完成小规模微调。
- examples:
  - 领域问答微调
  - 视觉分类微调
  - 工具调用微调
- pitfalls:
  - 微调数据质量差却期望大提升
  - 忘记控制灾难性遗忘
- prerequisites:
  - D/D3. 训练范式/预训练
  - H/H2. 监督式后训练/SFT
- core metrics:
  - 任务增益
  - 样本效率
  - 遗忘程度
- toolchain:
  - finetuning scripts
  - eval set
- failure signs:
  - 目标任务提升了，但通用能力明显塌陷
- next:
  - H/H2. 监督式后训练/Domain fine-tuning
  - H/H4. 参数高效适配/LoRA
  - D/D3. 训练范式/蒸馏

#### 多任务训练

- pathKey: `D/D3. 训练范式/多任务训练`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D3-12hzr8h-1.json`
- status: draft
- definition: 多任务训练让模型同时在多个相关任务或目标上学习，以获得更强的共享表示和更好的泛化能力。
- importance: 它能提高表示复用和任务迁移能力，也是很多通用基础模型在训练时的重要思想来源。
- minimum demo: 用一个共享 backbone 在两个相近任务上联合训练，对比单任务训练的差异。
- hardware budget: CPU/GPU 视任务规模而定。
- examples:
  - 共享编码器做分类 + 抽取
  - 多目标预训练
- pitfalls:
  - 任务冲突导致互相拖累
  - 不同任务数据规模不平衡
- prerequisites:
  - C/C2. 学习范式
  - D/D3. 训练范式/预训练
- core metrics:
  - 各任务指标
  - 任务间迁移增益
- toolchain:
  - multi-task dataloaders
- failure signs:
  - 联合训练后多数任务都比单训差
- next:
  - D/D3. 训练范式/迁移学习
  - D/D4. 基础模型类型/多模态基础模型

#### 迁移学习

- pathKey: `D/D3. 训练范式/迁移学习`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D3-12hzr8h-1.json`
- status: draft
- definition: 迁移学习把某一任务或领域中学到的参数、表示或结构迁移到另一个相关任务上，以降低目标任务的数据与训练成本。
- importance: 它是预训练-微调链条的理论与实践基础，也帮助解释为什么 foundation model 能成为通用底座。
- minimum demo: 用一个在源任务上训练好的 backbone 迁移到目标任务，对比冻结与全量微调差异。
- hardware budget: 单 GPU 足够做小规模实验。
- examples:
  - ImageNet backbone 迁移
  - 文本 encoder 迁移
- pitfalls:
  - 源域与目标域差太大导致负迁移
  - 冻结策略不合理
- prerequisites:
  - C/C2. 学习范式/迁移学习
  - D/D3. 训练范式/预训练
- core metrics:
  - 迁移增益
  - 样本效率
- toolchain:
  - pretrained checkpoints
- failure signs:
  - 迁移后比从头训练还差
- next:
  - D/D3. 训练范式/微调
  - H/H4. 参数高效适配/Adapter

#### 蒸馏

- pathKey: `D/D3. 训练范式/蒸馏`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D3-12hzr8h-1.json`
- status: draft
- definition: 蒸馏通过让小模型模仿大模型的输出、隐藏表示或行为，把大模型部分能力压缩到更小、更快的模型中。
- importance: 它是把高性能模型转成可部署系统的关键手段之一，尤其适合延迟、成本和设备资源受限的场景。
- minimum demo: 训练一个教师模型和一个学生模型，用软标签蒸馏对比直接训练学生模型的效果。
- hardware budget: CPU/GPU 视模型大小而定。
- examples:
  - 大模型蒸馏到小模型
  - 视觉 backbone 蒸馏
- pitfalls:
  - 教师模型本身有偏差
  - 只追求压缩不看任务保真度
- prerequisites:
  - D/D3. 训练范式/微调
  - H/H5. 压缩与效率优化/Distillation
- core metrics:
  - 性能保留率
  - 速度提升
  - 模型尺寸
- toolchain:
  - teacher-student training
- failure signs:
  - 学生模型快了但能力断崖
- next:
  - H/H5. 压缩与效率优化/Distillation
  - D/D4. 基础模型类型/文本基础模型

#### 自训练 / 伪标签

- pathKey: `D/D3. 训练范式/自训练 / 伪标签`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D3-12hzr8h-1.json`
- status: draft
- definition: 自训练和伪标签是先用现有模型给无标签样本打预测，再把高置信或经筛选后的预测样本回灌成新的监督数据，从而扩大有效训练集。
- importance: 它常见于标签昂贵但原始数据很多的场景，也常被拿来扩展后训练样本；真正难点不是“能不能生成伪标签”，而是如何控制错误标签不要把模型带偏。
- minimum demo: 先用少量标注样本训练一个基线模型，再给未标注池生成伪标签，只保留高置信样本回灌训练，并对比回灌前后的验证集变化与错误传播情况。
- hardware budget: CPU 可做最小实验；若未标注池很大，推理打标成本会成为主要开销。
- examples:
  - 图像半监督
  - 文本伪标签扩充
- pitfalls:
  - 错误伪标签被不断放大
  - 对分布外样本过度自信
  - 只看新增样本数量，不看筛选阈值和人工 spot check
- prerequisites:
  - C/C2. 学习范式/半监督学习
  - C/C2. 学习范式/主动学习
- core metrics:
  - 伪标签精度
  - 样本效率
  - 回灌后验证集增益
- toolchain:
  - pseudo-label pipeline
- failure signs:
  - 加了大量伪标签后模型更差
  - 训练集指标上涨但真实验证集退化
- next:
  - C/C2. 学习范式/半监督学习
  - H/H2. 监督式后训练/Task-specific tuning

#### Curriculum / staged training

- pathKey: `D/D3. 训练范式/Curriculum / staged training`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D3-12hzr8h-1.json`
- status: draft
- definition: Curriculum 或 staged training 指按难度、阶段或目标逐步组织训练流程，而不是一次性把所有数据和目标混在一起训练。
- importance: 它常用于提升训练稳定性、加快收敛或让模型先学基础再学复杂行为，在大模型后训练和复杂多阶段任务里尤其常见。
- minimum demo: 对同一个任务比较一次性混合训练与分阶段训练的收敛曲线。
- hardware budget: CPU/GPU 视模型规模而定。
- examples:
  - 先基础能力后工具调用
  - 先短上下文后长上下文训练
- pitfalls:
  - 阶段切换依据不清晰
  - 前一阶段目标和后一阶段相互冲突
- prerequisites:
  - D/D3. 训练范式/从头训练
  - C/C4. 共性问题/过拟合 / 欠拟合
- core metrics:
  - 收敛稳定性
  - 阶段增益
- toolchain:
  - staged config
  - curriculum scheduler
- failure signs:
  - 阶段越多越复杂，但收益不清楚
- next:
  - D/D3. 训练范式/预训练
  - D/D3. 训练范式/微调

### D4. 基础模型类型

- pathKey: `D/D4. 基础模型类型`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-D.json`
- status: draft
- definition: 基础模型类型描述的是大规模预训练后形成的通用能力底座按模态和世界交互方式如何分类，包括文本、视觉、语音/音频、视频、多模态以及更前沿的具身/世界模型。
- importance: 理解基础模型类型，才能知道不同能力边界是怎样从数据模态和训练目标里长出来的，也能帮助判断系统该接哪类模型而不是泛泛地说“接个大模型”。
- minimum demo: 选几个公开模型，对比文本、视觉和多模态基础模型的输入输出接口、训练语料和典型任务。
- hardware budget: 理解层面不高；真实部署取决于模态和模型规模。
- examples:
  - 文本 LLM
  - 视觉 foundation model
  - 多模态理解与生成模型
- pitfalls:
  - 按产品包装而不是按模态能力理解模型
  - 把所有基础模型都当作文本模型的变体
- prerequisites:
  - D/D2. 架构家族
  - D/D3. 训练范式/预训练
- core metrics:
  - 模态覆盖
  - 任务迁移能力
  - 部署成本
- toolchain:
  - model cards
  - inference runtimes
- failure signs:
  - 模型接口能跑，但任务模态和训练偏置根本不匹配
- next:
  - D/D4. 基础模型类型/文本基础模型
  - D/D4. 基础模型类型/视觉基础模型
  - D/D4. 基础模型类型/多模态基础模型
  - E/E1. 语言（NLP / LLM）

#### 文本基础模型

- pathKey: `D/D4. 基础模型类型/文本基础模型`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D4-qer4ta-1.json`
- status: draft
- definition: 文本基础模型是在海量文本语料上预训练形成的通用语言能力底座，通常以 Transformer 自回归或编码器/解码器结构实现。
- importance: 它们是 LLM 应用的直接基础，也推动了问答、对话、代码、检索增强生成等大量系统能力。
- minimum demo: 比较一个 base LLM 和一个经过任务微调的模型在问答或分类任务上的差异。
- hardware budget: 推理可从本地小模型到云 API；训练通常成本较高。
- examples:
  - 通用 LLM
  - 代码模型
  - 领域语言模型
- pitfalls:
  - 把所有文本模型都视为对话模型
  - 不区分基础模型和经过对齐的助手模型
- prerequisites:
  - D/D2. 架构家族/Transformer
  - D/D3. 训练范式/预训练
- core metrics:
  - 语言能力
  - 推理能力
  - 上下文长度
- toolchain:
  - Transformers
  - vLLM / API runtimes
- failure signs:
  - 模型能续写但不擅长任务遵循
- next:
  - E/E1. 语言（NLP / LLM）/LLM：通用语言能力模型
  - J/J1. 模型接口层/Chat / responses

#### 视觉基础模型

- pathKey: `D/D4. 基础模型类型/视觉基础模型`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D4-qer4ta-1.json`
- status: draft
- definition: 视觉基础模型是在大规模图像或视觉-文本数据上训练得到的通用视觉表示或生成底座，可迁移到分类、检测、分割和生成任务。
- importance: 它让视觉任务从“每个任务单独训一个模型”逐步转向“通用 backbone + 任务适配”。
- minimum demo: 对比一个通用视觉 backbone 在分类与分割任务上的迁移表现。
- hardware budget: 推理可单 GPU；训练成本随分辨率和数据规模上升。
- examples:
  - ViT backbone
  - CLIP-style visual encoder
  - 图像生成 backbone
- pitfalls:
  - 只看单一视觉 benchmark
  - 忽略分辨率和预处理约束
- prerequisites:
  - D/D2. 架构家族/CNN
  - D/D2. 架构家族/Transformer
- core metrics:
  - 图像任务迁移能力
  - 分辨率成本
- toolchain:
  - vision frameworks
- failure signs:
  - 迁移到下游视觉任务时收益不稳定
- next:
  - E/E2. 视觉（CV）/图像分类
  - E/E2. 视觉（CV）/图像生成

#### 语音 / 音频基础模型

- pathKey: `D/D4. 基础模型类型/语音 / 音频基础模型`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D4-qer4ta-1.json`
- status: draft
- definition: 语音/音频基础模型在海量语音、音频或语音-文本对数据上学习通用音频表示，可迁移到识别、说话人、翻译和生成任务。
- importance: 它把音频建模从任务特定系统推进到更统一的表示底座，也支撑了端到端 ASR、TTS 和语音到语音系统。
- minimum demo: 比较同一个语音 backbone 在 ASR 和音频分类任务上的迁移能力。
- hardware budget: 中等 GPU 更适合实用实验。
- examples:
  - ASR foundation model
  - 音频 encoder
  - TTS backbone
- pitfalls:
  - 忽视采样率、时长和语种分布
  - 把语音与一般音频任务混为一谈
- prerequisites:
  - D/D2. 架构家族/RNN / LSTM / GRU
  - D/D2. 架构家族/Transformer
- core metrics:
  - WER / CER
  - 语音生成自然度
  - 迁移能力
- toolchain:
  - speech frameworks
- failure signs:
  - 跨语种或长音频性能骤降
- next:
  - E/E3. 音频 / 语音/自动语音识别（ASR）
  - E/E3. 音频 / 语音/文本转语音（TTS）

#### 视频基础模型

- pathKey: `D/D4. 基础模型类型/视频基础模型`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D4-qer4ta-1.json`
- status: draft
- definition: 视频基础模型在时空连续信号上学习通用表示或生成能力，关注画面、动作和时间演化。
- importance: 视频把视觉从静态图像推进到时序世界，是理解时空建模和未来视频生成系统的重要入口。
- minimum demo: 阅读一个视频模型的输入组织方式，理解帧、时间窗和时空注意力如何组合。
- hardware budget: 通常比图像更高，因时空维度带来显著成本。
- examples:
  - 视频理解模型
  - 视频生成模型
- pitfalls:
  - 低估视频数据与训练成本
  - 把逐帧图像模型简单拼接当成视频模型
- prerequisites:
  - D/D2. 架构家族/Transformer
  - D/D6. 规模化要素/训练算力
- core metrics:
  - 时空一致性
  - 生成连贯性
  - 训练成本
- toolchain:
  - video datasets
  - spatiotemporal models
- failure signs:
  - 短片段可用，长时序完全不稳定
- next:
  - D/D5. 生成范式/扩散生成
  - D/D6. 规模化要素/训练算力

#### 多模态基础模型

- pathKey: `D/D4. 基础模型类型/多模态基础模型`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D4-qer4ta-1.json`
- status: draft
- definition: 多模态基础模型把文本、图像、音频、视频等不同模态映射到共享或可对齐的表示空间中，支持跨模态理解、生成和交互。
- importance: 它是现代 AI 系统从单模态走向统一智能接口的核心方向，也直接支撑了 VLM、语音助手和 agent with perception。
- minimum demo: 比较一个纯文本模型和一个视觉语言模型的输入输出接口与任务覆盖差异。
- hardware budget: 通常高于单模态模型，因输入更复杂。
- examples:
  - VLM
  - 语音到文本多模态交互
  - 图文检索和问答
- pitfalls:
  - 以为多模态只是把多个模型拼起来
  - 忽略不同模态数据质量差异
- prerequisites:
  - D/D2. 架构家族/Transformer
  - D/D3. 训练范式/多任务训练
- core metrics:
  - 跨模态对齐质量
  - 任务覆盖面
  - 系统复杂度
- toolchain:
  - multi-modal training stack
- failure signs:
  - 单模态都正常，但跨模态时明显失真
- next:
  - E/E5. 多模态
  - K/K2. 执行形态/Hybrid system

#### 具身/世界模型（更偏前沿与系统）

- pathKey: `D/D4. 基础模型类型/具身/世界模型（更偏前沿与系统）`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D4-qer4ta-1.json`
- status: draft
- definition: 具身/世界模型尝试学习环境动力学、行动结果和长期交互结构，以支持机器人、模拟代理和更强的环境理解。
- importance: 它代表了从“预测文本/图像”走向“预测世界与行动后果”的方向，是前沿系统能力的重要探索路径。
- minimum demo: 从概念上比较文本基础模型和世界模型在输入、反馈和目标上的差异。
- hardware budget: 通常很高，尤其涉及仿真和真实交互数据时。
- examples:
  - robotics policy models
  - world model planners
- pitfalls:
  - 把前沿概念当成已成熟工程范式
  - 忽略仿真与现实差距
- prerequisites:
  - C/C2. 学习范式/强化学习
  - D/D4. 基础模型类型/多模态基础模型
- core metrics:
  - 任务完成率
  - 规划一致性
  - 交互稳定性
- toolchain:
  - simulators
  - robotics stacks
- failure signs:
  - 离线世界建模很好，真实环境却失效
- next:
  - K/K10. Agent 形态分支/Research agent
  - E/E7. 机器人与具身智能

### D5. 生成范式

- pathKey: `D/D5. 生成范式`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-D.json`
- status: draft
- definition: 生成范式关注模型是如何一步步构造输出的。主流路线包括自回归生成、编码—解码生成、扩散生成，以及在这些主干上叠加条件与控制机制。
- importance: 生成范式决定了模型的输出方式、速度、可控性和适配任务。理解它，才能解释为什么语言模型常用自回归，而图像系统常用扩散，为什么有些系统更快，有些系统更可控。
- minimum demo: 比较一个自回归文本生成示例和一个扩散图像生成示例，观察输出过程、速度和控制接口的差异。
- hardware budget: CPU 可做文本最小实验；图像扩散更适合 GPU。
- examples:
  - LLM 逐 token 生成
  - seq2seq 翻译
  - 文生图扩散采样
- pitfalls:
  - 把生成范式和具体模型名字混为一谈
  - 只看质量，不看生成速度和控制能力
- prerequisites:
  - D/D2. 架构家族/Transformer
  - D/D2. 架构家族/Diffusion models
- core metrics:
  - 生成质量
  - 延迟
  - 控制一致性
- toolchain:
  - sampling configs
  - generation APIs
- failure signs:
  - 输出质量可接受但延迟或可控性完全不达标
- next:
  - D/D5. 生成范式/自回归生成
  - D/D5. 生成范式/扩散生成
  - D/D5. 生成范式/控制生成

#### 自回归生成

- pathKey: `D/D5. 生成范式/自回归生成`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D5-dk1vqo-1.json`
- status: draft
- definition: 自回归生成按顺序逐步预测下一个 token、像素块或离散单元，每一步都基于已经生成的上下文。
- importance: 它是当前 LLM 的主流生成机制，直接决定了上下文依赖方式、采样策略和推理延迟。
- minimum demo: 在一个小文本模型上观察 next-token prediction 和逐 token 采样过程。
- hardware budget: CPU 即可理解；实用推理更依赖 GPU 和 serving 优化。
- examples:
  - LLM 回复生成
  - 代码补全
- pitfalls:
  - 采样设置不当导致重复或发散
  - 逐 token 推理带来高延迟
- prerequisites:
  - D/D2. 架构家族/Transformer
  - G/G1. 语言建模基础
- core metrics:
  - perplexity
  - 生成延迟
  - 任务完成率
- toolchain:
  - sampling params
  - KV cache
- failure signs:
  - 高重复、跑偏、尾部发散
- next:
  - E/E1. 语言（NLP / LLM）/LLM：通用语言能力模型
  - L/L3. 推理优化/KV cache

#### 编码—解码生成

- pathKey: `D/D5. 生成范式/编码—解码生成`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D5-dk1vqo-1.json`
- status: draft
- definition: 编码—解码生成先把输入编码成中间表示，再由解码器基于该表示生成输出，常用于有明确输入到输出映射的任务。
- importance: 它是翻译、摘要、语音转文本等条件生成任务的经典范式，也帮助理解为什么有的模型天然面向 seq2seq。
- minimum demo: 观察一个翻译模型如何把源句编码，再逐步解码目标句。
- hardware budget: CPU/GPU 视模型大小而定。
- examples:
  - 机器翻译
  - 摘要
  - 语音识别
- pitfalls:
  - 把它和通用自回归模型简单等同
  - 忽略输入压缩造成的信息瓶颈
- prerequisites:
  - D/D2. 架构家族/Transformer
  - E/E1. 语言（NLP / LLM）/翻译
- core metrics:
  - seq2seq 质量
  - 条件一致性
- toolchain:
  - encoder-decoder architectures
- failure signs:
  - 输入覆盖不全，生成遗漏关键信息
- next:
  - E/E1. 语言（NLP / LLM）/摘要
  - E/E3. 音频 / 语音/自动语音识别（ASR）

#### 扩散生成

- pathKey: `D/D5. 生成范式/扩散生成`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D5-dk1vqo-1.json`
- status: draft
- definition: 扩散生成通过学习从噪声逐步还原样本的逆过程来建模数据分布，核心计算对象通常是噪声、速度或残差预测，并依赖多步采样生成结果。
- importance: 它在图像、视频和部分音频生成中代表了一条与自回归不同的主路线，优势往往在生成质量和条件控制，代价则是采样链路更长、在线交互成本更高。
- minimum demo: 固定同一 prompt 和随机种子，比较不同采样步数、sampler 和 guidance scale 下的生成质量、速度和条件一致性。
- hardware budget: GPU 更合适。
- examples:
  - 文生图
  - 图像编辑
  - 视频生成
- pitfalls:
  - 忽视采样开销
  - 把扩散路线误认为所有生成任务通用
  - 只看单张效果，不看批量吞吐和交互式延迟
- prerequisites:
  - D/D2. 架构家族/Diffusion models
  - D/D4. 基础模型类型/视觉基础模型
- core metrics:
  - 质量
  - 采样速度
  - 稳定性
  - 条件一致性
- toolchain:
  - Diffusers
- failure signs:
  - 速度慢到不适合交互式使用
  - prompt 写得很明确，但条件控制仍经常漂移
- next:
  - E/E2. 视觉（CV）/图像生成
  - E/E2. 视觉（CV）/图像编辑

#### 条件生成

- pathKey: `D/D5. 生成范式/条件生成`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D5-dk1vqo-1.json`
- status: draft
- definition: 条件生成指模型根据给定条件信号生成输出，条件可以是文本、标签、图像、音频或结构化控制变量。
- importance: 它把“通用生成”变成“可按需求生成”，是实际产品化最常见的生成组织方式之一。
- minimum demo: 比较无条件生成与文本条件生成的输出差异，观察条件对结果的约束程度。
- hardware budget: 视具体模型而定。
- examples:
  - text-to-image
  - image captioning
  - conditional speech generation
- pitfalls:
  - 条件信号弱导致输出漂移
  - 误把条件存在当成控制稳定
- prerequisites:
  - D/D5. 生成范式/自回归生成
  - D/D5. 生成范式/扩散生成
- core metrics:
  - 条件一致性
  - 任务完成率
- toolchain:
  - prompting
  - conditioning interfaces
- failure signs:
  - 条件写得很清楚，输出却经常跑偏
- next:
  - D/D5. 生成范式/控制生成
  - J/J1. 模型接口层/Prompt composition

#### 控制生成

- pathKey: `D/D5. 生成范式/控制生成`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D5-dk1vqo-1.json`
- status: draft
- definition: 控制生成强调对输出结构、内容、风格、步骤或工具行为施加更细粒度约束，而不仅仅给一个宽泛条件。
- importance: 很多工程系统真正需要的不是“能生成”，而是“按约束生成”。控制生成直接连接到结构化输出、工具调用和 agent planning。
- minimum demo: 比较自由文本生成与 schema/函数调用约束下生成的差异。
- hardware budget: 视系统复杂度而定。
- examples:
  - schema constrained decoding
  - tool calling
  - 可控图像编辑
- pitfalls:
  - 控制接口很多，但鲁棒性不足
  - 只做格式控制，不保证语义正确
- prerequisites:
  - D/D5. 生成范式/条件生成
  - J/J1. 模型接口层/Input / output contracts
- core metrics:
  - schema adherence
  - tool success
  - 约束满足率
- toolchain:
  - structured decoding
  - tool contracts
- failure signs:
  - 格式对了但语义错
  - 工具调用频繁失败
- next:
  - M/M2. 应用级评测/Schema adherence
  - M/M2. 应用级评测/Tool execution success
  - K/K2. 执行形态/Agent/动态决定工具

### D6. 规模化要素

- pathKey: `D/D6. 规模化要素`
- node type: `module`
- stage: 01 基础底座
- detail source: `data/details/domain-D.json`
- status: draft
- definition: 规模化要素描述的是模型能力、成本和系统复杂度如何随着数据规模、参数规模、训练算力、上下文长度、训练时长和系统优化一起变化。
- importance: 大模型时代的很多现象都不能只用“架构更强”解释，真正起决定作用的是规模化配方和系统工程。理解这层，才能正确评估收益、成本和边界条件。
- minimum demo: 比较同一架构在不同数据量、参数量或上下文长度下的效果与资源消耗曲线，建立最基本的 scaling 直觉。
- hardware budget: 理解层面不需要额外预算；真实实验常受 GPU、显存和系统吞吐限制。
- examples:
  - 更长上下文带来更高显存成本
  - 参数变大但需要更强 serving 优化
  - 数据规模提升改善泛化
- pitfalls:
  - 只增加参数不增加数据或系统能力
  - 忽视 serving 阶段的瓶颈
  - 把规模化收益当成无限线性增长
- prerequisites:
  - D/D1. 神经网络基础
  - D/D2. 架构家族/Transformer
- core metrics:
  - tokens/s
  - 显存占用
  - 训练时长
  - 推理延迟
- toolchain:
  - distributed training
  - serving runtimes
  - profilers
- failure signs:
  - 能力增长低于资源增长
  - 训练或推理的系统瓶颈压过模型本身收益
- next:
  - D/D6. 规模化要素/参数规模
  - D/D6. 规模化要素/上下文长度
  - D/D6. 规模化要素/系统优化
  - L/L3. 推理优化

#### 数据规模

- pathKey: `D/D6. 规模化要素/数据规模`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D6-10lrct2-1.json`
- status: draft
- definition: 数据规模不只是样本条数，更包括 token 总量、任务覆盖、长尾场景、多样性和去重后的有效信息量，是决定模型最终能学到多少世界模式的核心变量。
- importance: 很多“模型不够大”的判断其实是数据不够广、不够干净或不够匹配目标分布。只盯参数规模而忽略有效数据规模，通常会错判瓶颈。
- minimum demo: 在同一模型和配方下做数据量递增实验，分别记录训练 loss、验证集增益、重复率变化和新增数据带来的边际收益拐点。
- hardware budget: 小实验成本低；大规模数据带来存储和吞吐压力。
- examples:
  - 更多语料改善语言泛化
  - 更多图像类别改善视觉迁移
- pitfalls:
  - 只追求量，忽略数据质量和重复率
  - 数据增长但分布没扩展
- prerequisites:
  - C/C1. 问题设定/训练集 / 验证集 / 测试集
  - D/D3. 训练范式/预训练
- core metrics:
  - 数据量
  - 多样性
  - 重复率
- toolchain:
  - data pipelines
- failure signs:
  - 数据变多但能力几乎不长
  - 样本量翻倍，新增增益却主要被重复数据吃掉
- next:
  - D/D6. 规模化要素/参数规模
  - D/D6. 规模化要素/训练算力

#### 参数规模

- pathKey: `D/D6. 规模化要素/参数规模`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D6-10lrct2-1.json`
- status: draft
- definition: 参数规模是模型中可学习权重的总量，决定了可容纳的表示容量、记忆能力和计算图大小，但它只是规模化中的一个轴，不等于真实可用能力。
- importance: 参数变大通常会改善上限，但只有在数据、优化、上下文和 serving 能一起支撑时才会兑现。很多项目的问题不是模型太小，而是大模型带来的时延、显存和单位任务成本已经超出业务承受范围。
- minimum demo: 比较两个不同参数规模模型在同一评测集上的准确率、首 token 延迟、显存占用和单位任务成本，而不是只比较一个离线分数。
- hardware budget: 参数增大通常直接推高显存和服务成本。
- examples:
  - 7B vs 70B LLM
  - 小 CNN vs 大 ViT
- pitfalls:
  - 只增参数不增数据
  - 忽视 serving 成本
  - 把总参数量直接等同于每 token 实际计算量
- prerequisites:
  - D/D1. 神经网络基础/参数
  - D/D6. 规模化要素/数据规模
- core metrics:
  - params
  - 显存占用
  - 推理延迟
- toolchain:
  - model summaries
  - profilers
- failure signs:
  - 能力小涨，成本暴涨
  - 离线分数更好，但上线后吞吐和可用性显著变差
- next:
  - D/D2. 架构家族/Mixture of Experts
  - H/H5. 压缩与效率优化/Quantization

#### 训练算力

- pathKey: `D/D6. 规模化要素/训练算力`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D6-10lrct2-1.json`
- status: draft
- definition: 训练算力包括 GPU/TPU 资源、并行方式和实际训练吞吐，是决定大模型训练可行性与周期的硬约束。
- importance: 很多训练路线不是理论上不可行，而是算力和系统不允许。理解训练算力，才能正确判断计划是否现实。
- minimum demo: 记录一次小训练实验的 samples/s、显存和总时长，形成最基础的资源-效果直觉。
- hardware budget: 本概念本身就在讨论预算与资源。
- examples:
  - 单卡训练
  - 多卡分布式训练
  - 云训练集群
- pitfalls:
  - 只看 GPU 数量，不看吞吐瓶颈
  - 数据和通信拖慢整体训练
- prerequisites:
  - D/D1. 神经网络基础/Optimizer
  - D/D6. 规模化要素/系统优化
- core metrics:
  - throughput
  - GPU 利用率
  - 训练总时长
- toolchain:
  - distributed training stacks
  - profilers
- failure signs:
  - GPU 很多但利用率很低
- next:
  - D/D6. 规模化要素/系统优化
  - L/L3. 推理优化/Throughput / latency tuning

#### 上下文长度

- pathKey: `D/D6. 规模化要素/上下文长度`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D6-10lrct2-1.json`
- status: draft
- definition: 上下文长度指模型单次能处理的输入上下文窗口大小，直接影响长文本、长对话和复杂工具上下文处理能力。
- importance: 长上下文是大模型应用的重要能力，但它也会显著提高显存占用、推理延迟和系统复杂度。
- minimum demo: 比较同一模型在短上下文和长上下文任务下的效果与 latency 变化。
- hardware budget: 更长上下文通常需要更多显存和更强推理优化。
- examples:
  - 长文档问答
  - 长对话历史
  - RAG context packing
- pitfalls:
  - 把长上下文当成无限外部记忆
  - 忽视前面 token 对后面 token 成本的累积影响
- prerequisites:
  - G/G3. 上下文与记忆/上下文记忆（prompt context）
  - I/I3. RAG 管线/Context packing
- core metrics:
  - max context
  - latency
  - memory usage
- toolchain:
  - KV cache
  - context management
- failure signs:
  - 长上下文下又慢又不一定更准
- next:
  - L/L3. 推理优化/Context length management
  - L/L3. 推理优化/KV cache

#### 训练时长

- pathKey: `D/D6. 规模化要素/训练时长`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D6-10lrct2-1.json`
- status: draft
- definition: 训练时长是模型从启动训练到达到目标质量所需的 wall-clock 时间，它由数据规模、算力、吞吐、稳定性和中断恢复效率共同决定。
- importance: 训练时长决定团队多快能完成一轮有效迭代。一个理论上更优但需要数周才能验证的方案，在现实里可能比一周能闭环两次的方案更差。
- minimum demo: 对同一任务比较两种 batch size 或学习率配方，不只看最终分数，还记录 time-to-first-signal、time-to-target-quality 和中断恢复损失。
- hardware budget: 和算力预算直接相关。
- examples:
  - 预训练几周/几月
  - 小规模微调几小时
- pitfalls:
  - 只看最终结果，不看达到结果所需时间
  - 没有 early stop 或回滚策略
  - 把不稳定重启、数据准备等待时间排除在真实周期之外
- prerequisites:
  - D/D6. 规模化要素/训练算力
  - D/D1. 神经网络基础/Checkpoint
- core metrics:
  - time-to-quality
  - wall clock time
  - time-to-first-signal
- toolchain:
  - experiment tracking
- failure signs:
  - 训练计划拖得太长，无法支撑实际迭代
  - 每次试错都要等太久，团队开始凭感觉而不是凭实验决策
- next:
  - D/D6. 规模化要素/系统优化
  - M/M1. 模型级评测/延迟/成本

#### 系统优化

- pathKey: `D/D6. 规模化要素/系统优化`
- node type: `concept-group`
- detail source: `data/details/leaves-D-D6-10lrct2-1.json`
- status: draft
- definition: 系统优化指围绕训练和推理的并行、缓存、内核优化、批处理、内存管理和运行时工程手段，用来提高吞吐、降低延迟和减少资源浪费。
- importance: 在大模型系统里，很多性能提升并不来自模型本体，而来自系统优化。没有这层，规模化能力往往落不到产品现实。
- minimum demo: 比较开启和不开启一种推理优化（如 KV cache 或 continuous batching）时的吞吐和延迟差异。
- hardware budget: 通常为了更有效地利用既有硬件，而不是直接增加硬件。
- examples:
  - KV cache
  - continuous batching
  - paged attention
  - 量化推理
- pitfalls:
  - 只做模型优化，不做系统 profiling
  - 局部优化带来整体复杂度爆炸
- prerequisites:
  - D/D6. 规模化要素/训练算力
  - D/D6. 规模化要素/上下文长度
- core metrics:
  - throughput
  - latency
  - memory efficiency
- toolchain:
  - vLLM
  - profilers
  - runtime tuning
- failure signs:
  - GPU 很贵，但实际服务吞吐和延迟都很差
- next:
  - L/L2. 服务运行时/vLLM
  - L/L3. 推理优化/PagedAttention
  - L/L3. 推理优化/Continuous batching
  - L/L3. 推理优化/Quantized inference

## E. 模态、任务域与智能形态

- pathKey: `E`
- node type: `domain`
- stage: 02 任务域与数据
- graph summary: HF Learn 把 LLM、Agents、MCP、Deep RL、CV、Audio、Diffusion、Robotics、3D、Games 并列为学习分支；Transformers 文档覆盖 text、vision、audio、video、multimodal；AIMA 也把 NLP、Robotics、CV 放在 AI 应用主干中。
- display note: 把模态、多模态、决策、具身与扩展能力拆开阅读，避免混在同一层。
- relation notes:
  - 模态、任务域与智能形态 是“任务域”分支，不是新的基础原理层。
  - 深度学习与基础模型 层基础模型在 模态、任务域与智能形态 层变成具体模态家族。
  - LLM 核心机制 层 LLM 核心主要属于 语言（NLP / LLM），但会向 多模态 多模态扩展。
  - 决策与强化学习/机器人与具身智能 与 经典 AI 层经典决策、机器学习 层强化学习、Agent 系统 层 Agent 系统强连接。
- detail source: `data/details/domain-E.json`
- status: draft
- definition: 该 domain 关注 AI 系统面向不同输入/输出模态、任务结构与行动形态时的共性与差异。它回答三个工程问题：系统在处理什么类型的信号（文本、图像、语音、视频、结构化环境状态等），目标任务是什么（理解、生成、检索、控制、交互决策等），以及智能体以什么形式工作（单模态模型、多模态系统、交互式决策体、具身体）。学习这个 domain 的核心，不是死记任务名录，而是建立一种统一视角：任何 AI 应用都可以拆成表示对象、任务目标、输入输出接口、反馈回路与评测方式，再据此选择模型、数据、训练方式与部署形态。
- importance: 很多工程问题并不是“选哪个模型”这么简单，而是先要判断问题属于哪种模态、任务域和智能形态。相同的基础模型能力，在不同模态下会对应完全不同的数据结构、标注方式、延迟约束、错误成本与评测口径；从纯离线识别到在线决策、从文本助手到机器人闭环，系统复杂度会显著上升。这个 domain 因而承担知识图谱里的“应用问题分类层”角色：它把前面的模型与学习机制映射到后面的应用工程、Agent、运行时与产品场景，帮助学习者把抽象能力转成可落地的问题建模与系统设计。
- minimum demo: 选择一个具体现实任务，先用五步做问题建模：1）写清输入模态与输出模态；2）定义任务类型是理解、生成、检索、预测、决策还是闭环控制；3）给出最小可用数据样本与标注方式；4）确定一组离线指标与一组真实使用指标；5）实现一个最小原型并记录失败样例。只要能把同一任务分别用“模态—任务—反馈”三层描述清楚，并能说明为什么它不属于其他相邻任务，就算完成了这个 domain 的最小实验。
- hardware budget: 入门阶段通常不需要昂贵硬件。多数任务可先基于现成 API、开源模型推理、少量样本数据和单机环境完成问题建模与基线验证；文本、OCR、基础视觉检索、语音识别、简单视频抽帧理解通常可在 CPU 或单张消费级 GPU 上做原型。真正增加预算的往往不是“模态名义上更复杂”，而是上下文长度、实时性要求、分辨率、序列长度、在线交互频率、是否需要多传感器同步、是否要进行训练或闭环控制。
- examples:
  - 把客服问答建模为文本理解与生成，而不是泛化地称为“AI 对话”
  - 把票据处理拆成 OCR / 文档理解 + 结构化解析，而不是只看成图像分类
  - 把会议纪要系统拆成 ASR + 摘要 + 检索，而不是单一语音任务
  - 把自动驾驶或机械臂任务视为感知—决策—控制闭环，而不是单步分类问题
  - 把图文问答、屏幕理解、语音助手看成多模态交互系统，而不是多个单模态模块简单相加
- pitfalls:
  - 只按数据形式命名问题，忽略真实任务目标与反馈机制
  - 把离线识别任务和在线决策任务混为一谈，导致评测与架构错误
  - 认为多模态一定优于单模态，没有验证额外模态是否真正提供信息增益
  - 只关注模型精度，不关注延迟、成本、鲁棒性与人机交互体验
  - 把具身智能问题简化成视觉问题，忽略控制、约束和环境反馈
  - 任务切分过粗，导致数据集、指标和错误分析都无法落地
- prerequisites:
  - C
  - D
  - G
- core metrics:
  - 任务完成率
  - 准确率 / F1 / 召回率
  - 生成质量与可用性
  - 检索命中率 / 排序质量
  - 端到端延迟
  - 单位样本成本 / 单次调用成本
  - 鲁棒性与跨场景泛化
  - 交互回合效率
  - 在线收益或控制成功率
  - 安全性与失败恢复能力
- toolchain:
  - Python
  - Jupyter / Notebook
  - PyTorch
  - Transformers
  - OpenCV
  - FFmpeg
  - Whisper 或其他语音工具链
  - 向量检索与评测脚本
  - 仿真环境或机器人中间件（在闭环任务中）
  - 标注、可视化与错误分析工具
- failure signs:
  - 无法明确说清输入输出模态与任务边界
  - 同一个系统的指标彼此矛盾，说明任务定义不清
  - 原型可运行，但无法解释为什么某些错误发生
  - 模型效果看似不错，但一到真实场景就因延迟、噪声或流程耦合而失效
  - 多模块串联后没有统一的端到端成功标准
  - 上线前只做了单点精度测试，没有覆盖真实交互或闭环反馈
- next:
  - E/E1. 语言（NLP / LLM）
  - E/E2. 视觉（CV）
  - E/E3. 音频 / 语音
  - E/E4. 视频
  - E/E5. 多模态
  - E/E6. 决策与强化学习
  - E/E7. 机器人与具身智能
  - E/E8. 扩展领域

### E1. 语言（NLP / LLM）

- pathKey: `E/E1. 语言（NLP / LLM）`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-E.json`
- status: draft
- definition: 语言分支覆盖从传统 NLP 任务到现代 LLM 系统的完整连续谱，包括分类、抽取、翻译、摘要、问答、对话、检索、代码理解与结构化解析等任务，以及支撑这些任务的通用语言能力模型。
- importance: 它是当前 AI 应用最成熟、最广泛的一支。很多产品表面上看是“聊天”或“问答”，本质上仍可分解回这些基础任务和它们的组合。
- minimum demo: 选一个具体任务，例如问答或摘要，先做传统任务视角的定义，再把它映射到 LLM 调用、结构化输出和评测流程上。
- hardware budget: 从云 API 到本地小模型都可起步；训练和微调成本取决于模型大小与数据规模。
- examples:
  - 文本分类
  - 知识抽取
  - RAG 问答
  - Copilot 对话
  - 代码生成
- pitfalls:
  - 把所有语言问题都抽象成“聊天”
  - 只会调 prompt，不会回到任务定义和评测
  - 忽视结构化输出、检索和工具层的系统约束
- prerequisites:
  - D/D4. 基础模型类型/文本基础模型
  - J/J1. 模型接口层
  - C/C5. 指标体系
- core metrics:
  - task success
  - 语言能力
  - 引用真实性
  - 结构化输出正确率
  - 延迟/成本
- toolchain:
  - LLM runtimes / APIs
  - prompt templates
  - eval sets
  - retrieval stack
- failure signs:
  - 系统能说很多，但具体任务长期不稳定
  - 离线 demo 成功，真实问题一来就失去边界
- next:
  - E/E1. 语言（NLP / LLM）/问答
  - E/E1. 语言（NLP / LLM）/对话
  - E/E1. 语言（NLP / LLM）/结构化解析
  - E/E1. 语言（NLP / LLM）/LLM：通用语言能力模型

#### 文本分类

- pathKey: `E/E1. 语言（NLP / LLM）/文本分类`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E1-47l69n-1.json`
- status: draft
- definition: 文本分类把输入文本映射到一个或多个预定义标签上，是最基础的语言理解任务之一。
- importance: 它是很多复杂系统的最小基线任务，也能帮助学习者快速建立“标签设计—数据切分—指标—部署”的完整闭环。
- minimum demo: 做一个情感分析或工单路由分类任务，同时尝试传统模型和 LLM 分类提示。
- hardware budget: CPU 可做经典模型；调用 API 或小模型即可做 LLM 版本。
- examples:
  - 情感分析
  - 工单分类
  - 内容审核标签
- pitfalls:
  - 标签体系本身混乱
  - 只看 Accuracy 忽视长尾类别
- prerequisites:
  - C/C2. 学习范式/监督学习/分类
  - C/C5. 指标体系/Accuracy
- core metrics:
  - Accuracy
  - F1
  - 类别召回
- toolchain:
  - scikit-learn
  - LLM classification prompts
- failure signs:
  - 总体指标还行，但关键类别长期误判
- next:
  - E/E1. 语言（NLP / LLM）/结构化解析
  - N/N1. 场景类型/文档处理

#### 信息抽取

- pathKey: `E/E1. 语言（NLP / LLM）/信息抽取`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E1-47l69n-1.json`
- status: draft
- definition: 信息抽取把自由文本中的实体、关系、事件或字段提取成结构化表示，是文本进入知识库、工作流和数据库的重要桥梁。
- importance: 它把“能看懂文本”推进到“能把文本转成可操作数据”，因此在企业系统和 agent 工作流里极其常见。
- minimum demo: 从合同、工单或公告文本中抽取实体与关键字段，输出结构化 JSON 并做简单验证。
- hardware budget: CPU/LLM API 均可起步。
- examples:
  - 合同字段抽取
  - 会议纪要行动项抽取
  - 事件关系抽取
- pitfalls:
  - 抽出来了但 schema 不稳定
  - 没有明确 span 或字段定义
- prerequisites:
  - J/J2. 结构化输出/JSON Schema
  - E/E1. 语言（NLP / LLM）/命名实体识别
- core metrics:
  - field F1
  - schema adherence
  - error recovery
- toolchain:
  - schema validators
  - IE prompts
  - span labeling tools
- failure signs:
  - 表面上能抽，字段命名和边界经常漂移
- next:
  - J/J2. 结构化输出/Validation
  - I/I2. 知识库构建/Metadata schema

#### 命名实体识别

- pathKey: `E/E1. 语言（NLP / LLM）/命名实体识别`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E1-47l69n-1.json`
- status: draft
- definition: 命名实体识别是从文本中找出人名、地名、组织、时间等实体边界与类型的任务，是信息抽取的基础组件之一。
- importance: 它帮助学习者理解从 token 级标签到结构化知识的最小过渡，也是很多 IE 系统的上游步骤。
- minimum demo: 在一批标注文本上做 NER，并对错误样例分析实体边界和类别混淆。
- hardware budget: CPU 或小模型即可。
- examples:
  - 人名地名识别
  - 简历字段抽取前处理
- pitfalls:
  - 实体边界定义不一致
  - 长尾实体和嵌套实体处理差
- prerequisites:
  - E/E1. 语言（NLP / LLM）/信息抽取
- core metrics:
  - entity F1
  - boundary accuracy
- toolchain:
  - sequence labeling models
  - span extraction
- failure signs:
  - 类别大致对，但边界持续不稳
- next:
  - E/E1. 语言（NLP / LLM）/信息抽取
  - B/B4. 知识表示/知识图谱

#### 翻译

- pathKey: `E/E1. 语言（NLP / LLM）/翻译`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E1-47l69n-1.json`
- status: draft
- definition: 翻译把一种语言中的内容映射到另一种语言，同时尽量保持语义、风格和关键信息。
- importance: 它是经典 seq2seq 任务，也是评估条件生成和跨语言迁移的典型场景。
- minimum demo: 选一组中英句子，比较专用翻译模型和通用 LLM 在保真度与流畅度上的差异。
- hardware budget: API 或单模型推理即可。
- examples:
  - 通用文本翻译
  - 术语敏感的专业翻译
- pitfalls:
  - 只看流畅，不看术语一致性
  - 忽视领域词汇和格式约束
- prerequisites:
  - D/D5. 生成范式/编码—解码生成
  - G/G5. 能力面/翻译
- core metrics:
  - BLEU/COMET 类指标
  - 术语一致性
  - 人工可用性
- toolchain:
  - seq2seq models
  - translation memory
- failure signs:
  - 句子顺了，但关键术语和事实变了
- next:
  - E/E1. 语言（NLP / LLM）/摘要
  - N/N1. 场景类型/助手 / Copilot

#### 摘要

- pathKey: `E/E1. 语言（NLP / LLM）/摘要`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E1-47l69n-1.json`
- status: draft
- definition: 摘要把长文本压缩成更短但仍保留关键信息的表达，可分为抽取式和生成式。
- importance: 它是长上下文处理和信息压缩的典型任务，也是很多办公、知识管理和 agent 预处理流程的常见能力。
- minimum demo: 对同一篇长文同时做 extractive 和 abstractive 摘要，比较信息保真和长度控制。
- hardware budget: API 或小模型即可起步。
- examples:
  - 会议纪要摘要
  - 长文精简
  - 多轮对话摘要
- pitfalls:
  - 摘要太顺但信息缺失
  - 幻觉补充原文不存在的结论
- prerequisites:
  - D/D5. 生成范式/编码—解码生成
  - G/G5. 能力面/摘要
- core metrics:
  - 信息覆盖
  - 压缩率
  - 事实一致性
- toolchain:
  - summarization prompts
  - eval sets
- failure signs:
  - 摘要越来越短，但真正有用的信息也丢了
- next:
  - I/I3. RAG 管线/Context packing
  - N/N1. 场景类型/文档处理

#### 问答

- pathKey: `E/E1. 语言（NLP / LLM）/问答`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E1-47l69n-1.json`
- status: draft
- definition: 问答任务要求系统根据问题给出针对性回答，可基于参数记忆、上下文、检索结果或工具执行结果完成。
- importance: 它几乎是语言系统里最常见的产品形态之一，也是从模型能力走向应用系统设计的核心入口。
- minimum demo: 实现一个最小问答系统：问题输入、检索或上下文拼接、回答生成、引用校验。
- hardware budget: API 或小模型即可起步；加入检索和工具后系统成本上升。
- examples:
  - FAQ 问答
  - RAG 问答
  - 文档问答
- pitfalls:
  - 不区分闭卷问答和开卷问答
  - 答得像样但没有证据链
- prerequisites:
  - I/I3. RAG 管线/Retrieval
  - M/M2. 应用级评测/引用真实性
- core metrics:
  - 最终答案正确性
  - 引用真实性
  - 任务完成率
- toolchain:
  - RAG stack
  - citation checks
- failure signs:
  - 回答流畅但频繁幻觉或乱引
- next:
  - I/I3. RAG 管线/Generation
  - N/N1. 场景类型/问答 / 检索
  - E/E1. 语言（NLP / LLM）/对话

#### 对话

- pathKey: `E/E1. 语言（NLP / LLM）/对话`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E1-47l69n-2.json`
- status: draft
- definition: 对话任务要求系统在多轮交互中维持上下文、目标和语气一致性，同时处理澄清、追问、纠错和任务推进。
- importance: 它是助手产品最直观的界面，但真正的难点不在“会说话”，而在多轮状态管理、工具调用与失败恢复。
- minimum demo: 实现一个多轮对话原型，记录会话记忆、上下文拼接和用户追问后的回答质量变化。
- hardware budget: API 或本地小模型即可起步。
- examples:
  - 客服助手
  - Copilot
  - 多轮问答
- pitfalls:
  - 把所有对话历史都无脑拼进上下文
  - 角色设定和任务边界不明确
- prerequisites:
  - G/G3. 上下文与记忆/会话记忆（session memory）
  - J/J1. 模型接口层/System / user / tool messages
- core metrics:
  - 多轮任务完成率
  - 用户满意度
  - 上下文一致性
- toolchain:
  - chat runtime
  - memory management
- failure signs:
  - 一轮正常，三轮以后明显失忆或跑偏
- next:
  - J/J1. 模型接口层/Context assembly
  - N/N1. 场景类型/助手 / Copilot

#### 检索

- pathKey: `E/E1. 语言（NLP / LLM）/检索`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E1-47l69n-2.json`
- status: draft
- definition: 检索任务关注如何从外部知识源中找回与用户问题最相关的信息，再供下游阅读、回答或决策使用。
- importance: 它是 RAG 和知识型系统的关键中间层，把参数记忆和外部记忆连接起来。
- minimum demo: 搭一个最小检索流程：embedding / 索引 / query / rerank / top-k 返回。
- hardware budget: CPU 足够做基础索引；规模大时更关注存储和吞吐。
- examples:
  - FAQ 检索
  - 文档检索
  - 代码库检索
- pitfalls:
  - 只做向量检索，不做 rerank 和权限控制
  - 命中率和最终问答质量割裂
- prerequisites:
  - I/I1. 表示与检索基础/Dense retrieval
  - I/I3. RAG 管线/Retrieval
- core metrics:
  - Recall@k
  - NDCG
  - 最终任务增益
- toolchain:
  - vector store
  - reranker
  - query rewrite
- failure signs:
  - 看起来检到了很多，但真正有用文档经常不在 top-k
- next:
  - I/I1. 表示与检索基础/Reranking
  - I/I3. RAG 管线/Rerank
  - N/N1. 场景类型/问答 / 检索

#### 代码生成与理解

- pathKey: `E/E1. 语言（NLP / LLM）/代码生成与理解`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E1-47l69n-2.json`
- status: draft
- definition: 代码生成与理解任务要求模型阅读、解释、补全、重构或生成代码，同时保持语义正确和工程可执行性。
- importance: 它是 LLM 最具生产力的一类应用之一，也天然暴露出结构约束、上下文管理、工具执行和评测难题。
- minimum demo: 给一个小仓库片段，要求模型解释函数、补一个单元测试或修一个小 bug，并验证结果。
- hardware budget: API 或本地代码模型均可起步。
- examples:
  - 代码补全
  - 测试生成
  - 重构建议
  - bug 修复
- pitfalls:
  - 只看输出像不像代码，不验证是否能运行
  - 忽视仓库上下文和依赖约束
- prerequisites:
  - J/J1. 模型接口层/Context assembly
  - M/M2. 应用级评测/Tool execution success
- core metrics:
  - 通过率
  - 可执行性
  - 回归率
- toolchain:
  - repo context
  - tests
  - code execution
- failure signs:
  - 生成代码看起来像对的，但一跑就坏
- next:
  - N/N1. 场景类型/编码
  - M/M2. 应用级评测/Tool execution success

#### 结构化解析

- pathKey: `E/E1. 语言（NLP / LLM）/结构化解析`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E1-47l69n-2.json`
- status: draft
- definition: 结构化解析把自然语言或半结构化内容转成 JSON、schema 对象、字段列表或可执行参数，是语言系统进入工具和工作流的关键接口。
- importance: 很多 agent 和自动化系统失败，不是语言模型不会理解，而是它无法稳定地产生可被程序消费的结果。
- minimum demo: 设计一个 JSON Schema，让模型把用户意图解析成结构化参数，再做严格验证和错误恢复。
- hardware budget: API 或本地小模型即可。
- examples:
  - 工单字段解析
  - 函数调用参数生成
  - 表单自动填写前解析
- pitfalls:
  - 只靠 prompt 约束格式，不做 schema 校验
  - 把 JSON 能 parse 当成语义正确
- prerequisites:
  - J/J2. 结构化输出/JSON Schema
  - J/J2. 结构化输出/Validation
- core metrics:
  - schema adherence
  - field accuracy
  - error recovery rate
- toolchain:
  - JSON Schema
  - typed outputs
  - validators
- failure signs:
  - 格式稳定了，但字段含义仍然经常错
- next:
  - J/J2. 结构化输出/Typed outputs
  - M/M2. 应用级评测/Schema adherence

#### LLM：通用语言能力模型

- pathKey: `E/E1. 语言（NLP / LLM）/LLM：通用语言能力模型`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E1-47l69n-2.json`
- status: draft
- definition: 通用语言能力模型是经过大规模预训练与后训练形成的文本基础模型，能够在同一模型中统一承载理解、生成、推理、工具调用和多任务迁移。
- importance: 它是当前语言系统的大一统底座，很多具体 NLP 任务都可以退化成对它的提示、检索、微调或工具约束问题。
- minimum demo: 拿一个通用 LLM，同步尝试分类、摘要、问答和结构化输出四类任务，观察同一模型如何跨任务复用。
- hardware budget: API 最低门槛；本地推理取决于模型规模和量化方案。
- examples:
  - 通用助手模型
  - 代码 LLM
  - 长上下文知识助手
- pitfalls:
  - 把它当成无所不能的黑盒
  - 忽视系统级约束仍然需要检索、工具和评测
- prerequisites:
  - D/D4. 基础模型类型/文本基础模型
  - C/C6. 与大模型的对应关系/SFT ≈ 监督学习
- core metrics:
  - 语言能力
  - 推理能力
  - 结构化输出正确率
  - 延迟/成本
- toolchain:
  - LLM runtime / API
  - prompting
  - eval harness
- failure signs:
  - 看似全能，但具体任务一落地就缺检索、工具或约束
- next:
  - J/J1. 模型接口层/Prompt composition
  - M/M1. 模型级评测/语言能力
  - N/N1. 场景类型/助手 / Copilot

### E2. 视觉（CV）

- pathKey: `E/E2. 视觉（CV）`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-E.json`
- status: draft
- definition: 视觉分支覆盖从图像感知、结构理解到生成、编辑和检索的完整链路，是非语言 AI 里最成熟、最容易工程化的一条主线。它既包含经典任务如分类、检测、分割、OCR，也包含现代生成式和检索式视觉系统，核心始终是把像素输入变成对下游任务有用的结构化表示或可控输出。
- importance: 如果这张图谱要叫“AI 全图”，视觉不能只停留在任务清单；它也需要和语言分支一样，把任务、模型、数据、评测和部署串成闭环。很多现实系统看起来是“用 VLM 看图”，但真正决定效果的，常常仍是视觉数据质量、版面结构、边界检测、局部区域定位和检索链路是否可靠。
- minimum demo: 做一条最小视觉工作流：准备图像数据，跑一个分类、检测或 OCR 基线，记录离线指标，再把模型接成可调用服务，并通过几条真实样本分析它究竟败在数据、模型、后处理还是部署。
- hardware budget: 图像级任务单卡 GPU 就能起步；生成、检索和较大视觉基础模型会更吃显存和存储。真正影响成本的常常是分辨率、批量推理吞吐、索引规模和是否需要交互式编辑，而不只是模型参数量。
- prerequisites:
  - D/D4. 基础模型类型/视觉基础模型
  - F/F2. 数据形态/图像
  - L/L2. 服务运行时
- core metrics:
  - task accuracy
  - latency
  - dataset coverage
  - deployment stability
- toolchain:
  - PyTorch
  - Transformers / timm
  - OpenCV
  - serving runtime
- failure signs:
  - 离线指标看起来正常，但线上图像分布一变就明显退化
  - 只关注模型结构，忽略标注质量、后处理和部署延迟
- next:
  - E/E2. 视觉（CV）/OCR / 文档理解
  - E/E2. 视觉（CV）/图像生成
  - E/E2. 视觉（CV）/视觉检索
  - E/E5. 多模态

#### 图像分类

- pathKey: `E/E2. 视觉（CV）/图像分类`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E2-cg22vt-1.json`
- status: draft
- definition: 图像分类回答的是“这张图属于哪个类”，是视觉任务里最基础也最适合搭建第一条数据—模型—评测—部署闭环的入口。
- importance: 它是理解视觉数据集、标签体系、训练范式和线上监控最便宜的切入点，也是很多更复杂任务的上游基线和 sanity check。
- minimum demo: 用一个小型图像数据集训练分类模型，输出 top-1 / top-5 指标，并部署成批量预测脚本或简单 API，再对长尾类别和拍摄条件变化做误差分析。
- hardware budget: 单卡 GPU 足够完成原型；很多小模型甚至可以在 CPU 或边缘设备上部署。
- prerequisites:
  - E/E2. 视觉（CV）
  - F/F2. 数据形态/图像
  - C/C5. 指标体系/Accuracy
- core metrics:
  - top-1 accuracy
  - top-5 accuracy
  - calibration
  - latency
- toolchain:
  - timm
  - PyTorch
  - image augmentation
  - serving benchmark
- failure signs:
  - 验证集准确率高，但换拍摄条件或设备后迅速失效
  - 类别不平衡导致总体准确率好看、关键类却持续漏判
- next:
  - E/E2. 视觉（CV）/目标检测
  - M/M1. 模型级评测
  - L/L7. 生产运行指标

#### 目标检测

- pathKey: `E/E2. 视觉（CV）/目标检测`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E2-cg22vt-1.json`
- status: draft
- definition: 目标检测不仅要判断类别，还要给出目标的位置，是从“看懂整张图”走向“定位局部对象”的关键步骤。
- importance: 很多真实视觉应用关心的不是整图标签，而是具体物体在哪里、数量多少、后续是否要触发动作或告警。
- minimum demo: 在一个带 bounding box 标注的数据集上训练检测模型，输出 mAP 与可视化结果，再做一次简单阈值/后处理调优并分析误检来源。
- hardware budget: 训练和部署通常需要单卡到多卡 GPU；实时场景更关注吞吐与延迟。
- prerequisites:
  - E/E2. 视觉（CV）
  - F/F2. 数据形态/图像
  - C/C5. 指标体系/Precision / Recall / F1
- core metrics:
  - mAP
  - AP50/AP75
  - false positives
  - latency
- toolchain:
  - YOLO / DETR
  - OpenCV
  - annotation tools
  - inference runtime
- failure signs:
  - 框位置接近但类别经常错
  - 小目标、遮挡和长尾类别表现明显恶化
- next:
  - E/E2. 视觉（CV）/跟踪
  - E/E2. 视觉（CV）/分割
  - M/M2. 应用级评测

#### 分割

- pathKey: `E/E2. 视觉（CV）/分割`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E2-cg22vt-1.json`
- status: draft
- definition: 分割把像素级区域分出来，比检测更细，适合文档版面、医疗、工业质检和交互式编辑等场景。
- importance: 它体现了视觉系统从“知道物体在哪”进一步走向“知道区域边界和结构”的能力，也是编辑、文档和医疗场景里常见的中间层。
- minimum demo: 跑一个语义或实例分割模型，比较 IoU / Dice，并把 mask 可视化叠到原图上，检查边界误差集中在哪里。
- hardware budget: 单卡 GPU 可做原型；高分辨率或交互式场景会额外吃显存和吞吐。
- prerequisites:
  - E/E2. 视觉（CV）
  - F/F2. 数据形态/图像
  - E/E2. 视觉（CV）/目标检测
- core metrics:
  - IoU
  - Dice
  - boundary quality
  - latency
- toolchain:
  - SAM / segmentation models
  - OpenCV
  - mask visualization
- failure signs:
  - 主体区域大致正确，但边界细节严重破损
  - 复杂背景或细粒度结构下 mask 快速崩掉
- next:
  - E/E2. 视觉（CV）/图像编辑
  - M/M1. 模型级评测
  - L/L7. 生产运行指标

#### OCR / 文档理解

- pathKey: `E/E2. 视觉（CV）/OCR / 文档理解`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E2-cg22vt-1.json`
- status: draft
- definition: OCR / 文档理解不仅识别文字，还要理解布局、表格、键值关系和页面结构，是视觉进入企业文档流的典型入口。
- importance: 它直接连到检索、知识库构建、结构化抽取和办公自动化，是视觉分支里最容易和 LLM、RAG、Agent 结合的一条路线。
- minimum demo: 选一批票据或 PDF 页面，做 OCR + 字段抽取，输出文字、版面块和结构化 JSON，并检查版面错误如何传导到字段抽取。
- hardware budget: CPU 可做基础 OCR；复杂版面理解和大批量处理更适合 GPU 或云服务。
- prerequisites:
  - E/E2. 视觉（CV）
  - F/F2. 数据形态/图像
  - J/J2. 结构化输出
- core metrics:
  - CER / WER
  - field extraction F1
  - layout accuracy
  - throughput
- toolchain:
  - OCR engine
  - document parser
  - layout model
  - schema validator
- failure signs:
  - 文字能识别出来，但字段对不齐或表格结构错位
  - 扫描件、旋转页和低质图片下表现断崖式下滑
- next:
  - I/I2. 知识库构建
  - J/J2. 结构化输出
  - E/E5. 多模态

#### 姿态估计

- pathKey: `E/E2. 视觉（CV）/姿态估计`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E2-cg22vt-1.json`
- status: draft
- definition: 姿态估计把人体或物体关键点结构化出来，是行为理解、动作分析和交互系统的重要中间表示。
- importance: 它让视觉系统从“看到对象”升级到“理解对象如何运动”，对体育、AR、机器人和视频理解都很关键。
- minimum demo: 对一段人体动作视频做关键点检测与可视化，再统计关键点误差、抖动和动作分类效果。
- hardware budget: 单卡 GPU 足够做原型；实时多路视频会更吃吞吐。
- prerequisites:
  - E/E2. 视觉（CV）
  - F/F2. 数据形态/图像
  - E/E4. 视频
- core metrics:
  - PCK
  - keypoint mAP
  - temporal stability
  - latency
- toolchain:
  - pose estimation models
  - OpenCV
  - video processing
- failure signs:
  - 静态帧看着还行，但连续视频关键点抖动明显
  - 遮挡、侧身和多人场景下关键点经常错位
- next:
  - E/E4. 视频/动作识别
  - E/E7. 机器人与具身智能/感知

#### 跟踪

- pathKey: `E/E2. 视觉（CV）/跟踪`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E2-cg22vt-1.json`
- status: draft
- definition: 跟踪关注同一对象在连续帧里如何保持身份一致，是视频和具身系统里把单帧感知转成连续状态的关键步骤。
- importance: 没有稳定跟踪，检测结果就无法可靠地进入计数、告警、导航或行为分析。
- minimum demo: 对一段监控或运动视频跑检测+跟踪，观察轨迹、遮挡恢复和 ID 切换情况。
- hardware budget: 实时多目标跟踪更看重视频吞吐和内存带宽。
- prerequisites:
  - E/E2. 视觉（CV）/目标检测
  - E/E4. 视频
  - F/F2. 数据形态/视频
- core metrics:
  - MOTA
  - IDF1
  - ID switches
  - latency
- toolchain:
  - tracking-by-detection pipeline
  - OpenCV
  - video benchmark
- failure signs:
  - 目标一遮挡或交叉就频繁换 ID
  - 检测性能尚可，但连续轨迹质量很差
- next:
  - E/E4. 视频/动作识别
  - E/E7. 机器人与具身智能/导航
  - L/L7. 生产运行指标

#### 图像生成

- pathKey: `E/E2. 视觉（CV）/图像生成`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E2-cg22vt-1.json`
- status: draft
- definition: 图像生成把文本、条件图像或结构控制信号转换成新图像，是扩散模型最典型的应用任务之一。
- importance: 它让视觉分支不再只做识别，也进入内容生成、创意工具和可控编辑，是现代多模态产品的重要能力层。
- minimum demo: 跑一次 text-to-image 或 image-to-image 生成，并记录提示词、seed、采样步数和输出结果，再分析 prompt adherence 和局部结构失败模式。
- hardware budget: 生成任务比识别更吃 GPU 显存和推理时间，本地通常需要中高端 GPU 或量化/蒸馏路线。
- prerequisites:
  - E/E2. 视觉（CV）
  - D/D5. 生成范式/扩散生成
  - F/F2. 数据形态/图像
- core metrics:
  - prompt adherence
  - image quality
  - diversity
  - latency / cost
- toolchain:
  - Diffusers
  - ControlNet / adapters
  - image UI
- failure signs:
  - 图像好看但和提示词不对齐
  - 局部结构、手部文字或细节区域反复崩坏
- next:
  - E/E2. 视觉（CV）/图像编辑
  - E/E5. 多模态/视觉语言模型（VLM）
  - L/L1. 模型访问方式/本地推理

#### 图像编辑

- pathKey: `E/E2. 视觉（CV）/图像编辑`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E2-cg22vt-1.json`
- status: draft
- definition: 图像编辑强调对已有图像做局部或全局可控修改，例如修图、换背景、局部生成、结构保持和 instruction-based editing。
- importance: 它比纯生成更接近真实工作流，因为用户往往不是要“从零出图”，而是要修改已有素材。
- minimum demo: 完成一次局部编辑：先做选区或遮罩，再按指令修改，并比较编辑区域与未编辑区域的一致性和主体保持度。
- hardware budget: 与图像生成类似，核心瓶颈仍是显存和推理时长。
- prerequisites:
  - E/E2. 视觉（CV）/图像生成
  - E/E2. 视觉（CV）/分割
  - J/J2. 结构化输出
- core metrics:
  - edit locality
  - identity preservation
  - instruction fidelity
  - latency
- toolchain:
  - inpainting / editing models
  - segmentation masks
  - image diff / QA
- failure signs:
  - 目标区域改了，但无关区域也被破坏
  - 人物或产品主体身份保持不住
- next:
  - E/E5. 多模态
  - M/M2. 应用级评测
  - J/J9. 应用形态

#### 视觉检索

- pathKey: `E/E2. 视觉（CV）/视觉检索`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E2-cg22vt-1.json`
- status: draft
- definition: 视觉检索关心的是按图搜图、图文互搜或从大规模图库里找到语义最相关的候选内容。
- importance: 它把视觉能力和检索系统直接接起来，是多模态搜索、商品识别、图库管理和 RAG 扩展的重要节点。
- minimum demo: 用 embedding 建一个小型图像库，完成 text-to-image 或 image-to-image 检索，并评估 recall@k 与 rerank 后效果。
- hardware budget: 小规模原型 CPU 即可；大规模图库主要吃索引、存储和向量检索成本。
- prerequisites:
  - E/E2. 视觉（CV）
  - F/F2. 数据形态/图像
  - I/I1. 表示与检索基础
- core metrics:
  - recall@k
  - precision@k
  - embedding quality
  - latency
- toolchain:
  - embedding model
  - vector store
  - reranker
- failure signs:
  - 相似风格能召回，但真实语义对齐很差
  - 库一变大，召回质量和延迟同时恶化
- next:
  - I/I3. RAG 管线
  - E/E5. 多模态/图文
  - L/L5. 系统基础设施

### E3. 音频 / 语音

- pathKey: `E/E3. 音频 / 语音`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-E.json`
- status: draft
- definition: 音频 / 语音分支覆盖从“听懂声音”到“生成声音”再到“实时语音交互”的完整链路，包括 ASR、说话人建模、音频分类、语音翻译、TTS、语音到语音和音乐/音频生成。它的关键不只是单点模型精度，而是整条流式链路在延迟、稳定性、噪声鲁棒性和人机体验上的综合表现。
- importance: 语音系统天然把模型能力和系统工程绑在一起。很多文本系统只需离线正确，而语音系统往往还要处理实时采集、分段、打断、回声、设备差异和播放同步问题，所以它是检验“模型能不能进入真实交互系统”的非常典型的一层。
- minimum demo: 搭一条最小语音工作流：采集一段语音，完成 ASR 或 TTS；再把它接入一个简单流式界面，记录端到端延迟、质量和失败样例。最好同时比较离线结果和实时结果，观察系统级误差是如何出现的。
- hardware budget: 短语音离线实验可在 CPU 上完成；一旦进入流式、多轮、多人或高质量生成场景，通常就更依赖单 GPU、稳定的实时 runtime 或云 API。预算压力往往不在模型大小本身，而在并发、时长、音频 I/O 和低延迟约束。
- prerequisites:
  - D/D4. 基础模型类型/语音 / 音频基础模型
  - F/F2. 数据形态/音频
  - J/J5. 流式与实时
- core metrics:
  - WER / CER
  - MOS / naturalness
  - end-to-end latency
  - noise robustness
  - streaming stability
  - barge-in success
- toolchain:
  - ASR / TTS / speech models
  - streaming runtime
  - audio preprocessing
  - capture / playback tools
  - session state management
- failure signs:
  - 离线文件效果不错，但实时通话一接上就延迟过高或结果抖动
  - 遇到噪声、口音、长时语音或设备切换时质量迅速恶化
  - 文本状态、音频播放和中断控制不同步，导致用户体验很差
- next:
  - E/E3. 音频 / 语音/自动语音识别（ASR）
  - E/E3. 音频 / 语音/文本转语音（TTS）
  - E/E3. 音频 / 语音/语音到语音
  - J/J5. 流式与实时/Voice interaction
  - E/E5. 多模态

#### 自动语音识别（ASR）

- pathKey: `E/E3. 音频 / 语音/自动语音识别（ASR）`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E3-ghjia-1.json`
- status: draft
- definition: ASR 把连续语音转成文本，是语音产品和语音 Agent 的第一入口。
- importance: 很多后续能力都建立在转写质量之上；如果 ASR 不稳定，翻译、问答、语音助手都会连锁退化。
- minimum demo: 对一批短语音做离线和流式转写，对比 WER、延迟、稳定性和 partial rewrite 现象。
- hardware budget: 短语音实验 CPU 也能做；流式或高并发场景更适合 GPU 或托管服务。
- prerequisites:
  - E/E3. 音频 / 语音
  - F/F2. 数据形态/音频
  - J/J5. 流式与实时
- core metrics:
  - WER / CER
  - streaming latency
  - stability
  - noise robustness
- toolchain:
  - ASR model
  - audio chunking
  - streaming websocket
- failure signs:
  - 静音、口音或背景噪声一出现就大段漂移
  - 流式结果反复重写，UI 看起来抖动严重
- next:
  - E/E3. 音频 / 语音/语音翻译
  - J/J5. 流式与实时/Voice interaction
  - M/M2. 应用级评测

#### 说话人识别

- pathKey: `E/E3. 音频 / 语音/说话人识别`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E3-ghjia-1.json`
- status: draft
- definition: 说话人识别关心的是“谁在说话”，通常分为 speaker identification、verification 和 diarization 三类问题。
- importance: 会议、客服、播客和安全场景都需要把语义内容和说话人身份对齐，否则后续摘要、审计和责任归因都不可靠。
- minimum demo: 对一段多人音频做 diarization 或 speaker verification，并核对说话人切换点、串话和身份匹配率。
- hardware budget: 单卡 GPU 或 CPU 可做原型，主要取决于音频长度与并发。
- prerequisites:
  - E/E3. 音频 / 语音
  - F/F2. 数据形态/音频
  - M/M2. 应用级评测
- core metrics:
  - DER
  - EER
  - speaker accuracy
  - latency
- toolchain:
  - speaker embedding model
  - diarization pipeline
  - audio segmentation
- failure signs:
  - 同一说话人被切成多段不同身份
  - 背景音乐或串话一多就频繁误认
- next:
  - E/E3. 音频 / 语音/自动语音识别（ASR）
  - M/M4. 在线评测/Real-user failure mining

#### 音频分类

- pathKey: `E/E3. 音频 / 语音/音频分类`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E3-ghjia-1.json`
- status: draft
- definition: 音频分类把一段声音归到环境音、事件或类别上，例如警报、乐器、情绪或设备状态。
- importance: 它把语音之外的大量非语言音频纳入 AI 可处理范围，是工业、内容审核和环境感知的重要入口。
- minimum demo: 训练一个小型音频分类器，比较不同采样率、特征表示和类别不平衡处理对结果的影响，并查看混淆矩阵。
- hardware budget: 单卡 GPU 足够；很多场景可直接做边缘部署。
- prerequisites:
  - E/E3. 音频 / 语音
  - F/F2. 数据形态/音频
  - C/C5. 指标体系/Precision / Recall / F1
- core metrics:
  - F1
  - AUC
  - confusion matrix
  - latency
- toolchain:
  - audio feature extraction
  - classification model
  - augmentation
- failure signs:
  - 实验室环境效果好，一上真实噪声数据就掉点
  - 相近类别之间混淆严重却没有针对性误差分析
- next:
  - E/E7. 机器人与具身智能/感知
  - L/L1. 模型访问方式/浏览器 / Edge 推理

#### 语音翻译

- pathKey: `E/E3. 音频 / 语音/语音翻译`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E3-ghjia-1.json`
- status: draft
- definition: 语音翻译把说话内容跨语言迁移，可能经过 ASR→MT→TTS，也可能由端到端语音模型直接完成。
- importance: 它把语音链路从“能听懂”升级成“能跨语言交流”，对实时会议、客服和国际化产品很关键。
- minimum demo: 完成一条最小语音翻译链路，比较级联方案和端到端方案的延迟、保真度和专有名词保持能力。
- hardware budget: 通常需要云 API 或中高端 GPU 才能把质量和延迟同时压住。
- prerequisites:
  - E/E3. 音频 / 语音/自动语音识别（ASR）
  - E/E3. 音频 / 语音/文本转语音（TTS）
  - E/E3. 音频 / 语音
- core metrics:
  - translation adequacy
  - latency
  - speaker/style preservation
  - WER cascade impact
- toolchain:
  - ASR
  - translation model
  - TTS / speech output
- failure signs:
  - 文本翻译看着对，但语音链路整体延迟不可用
  - 专有名词、数字和口语表达在跨语言链路里持续丢失
- next:
  - E/E3. 音频 / 语音/语音到语音
  - J/J5. 流式与实时/Voice interaction

#### 文本转语音（TTS）

- pathKey: `E/E3. 音频 / 语音/文本转语音（TTS）`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E3-ghjia-1.json`
- status: draft
- definition: TTS 把文本转成语音，重点不仅是读出来，还包括自然度、韵律、情绪和可控性。
- importance: 它决定语音产品最后一公里的体验，很多系统并不需要很强的对话能力，但非常需要稳定、可控、听感自然的输出。
- minimum demo: 把一组不同风格文本合成为语音，比较多说话人、语速、停顿和情绪控制效果。
- hardware budget: CPU 可做低吞吐原型；实时高质量合成更适合 GPU 或专用服务。
- prerequisites:
  - E/E3. 音频 / 语音
  - F/F2. 数据形态/音频
  - J/J5. 流式与实时/Voice interaction
- core metrics:
  - MOS
  - pronunciation accuracy
  - streaming latency
  - speaker consistency
- toolchain:
  - TTS model
  - audio playback
  - text normalization
- failure signs:
  - 字都读对了，但韵律机械、停顿奇怪
  - 长文本里出现明显吞字、重复或情绪漂移
- next:
  - E/E3. 音频 / 语音/语音到语音
  - J/J5. 流式与实时/Voice interaction

#### 语音到语音

- pathKey: `E/E3. 音频 / 语音/语音到语音`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E3-ghjia-1.json`
- status: draft
- definition: 语音到语音把输入语音直接转成输出语音，核心难点是同时保持语义正确、交互低延迟和说话风格控制。
- importance: 这是实时语音 Agent、翻译耳机和电话助手里最接近“自然对话”的能力层。
- minimum demo: 做一轮端到端语音回路，支持说话中断和继续，并记录总轮次延迟、barge-in 成功率和状态恢复情况。
- hardware budget: 对实时链路要求高，通常更依赖云服务或稳定的 GPU 推理栈。
- prerequisites:
  - E/E3. 音频 / 语音/自动语音识别（ASR）
  - E/E3. 音频 / 语音/文本转语音（TTS）
  - J/J5. 流式与实时/Voice interaction
- core metrics:
  - end-to-end latency
  - semantic fidelity
  - barge-in success
  - voice consistency
- toolchain:
  - realtime speech pipeline
  - audio buffering
  - session state
- failure signs:
  - 语义基本对，但打断、重说和上下文恢复一团乱
  - 一旦网络抖动，音频播放和文本状态明显错位
- next:
  - J/J5. 流式与实时/Voice interaction
  - J/J9. 应用形态/Voice assistant

#### 音乐/音频生成

- pathKey: `E/E3. 音频 / 语音/音乐/音频生成`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E3-ghjia-1.json`
- status: draft
- definition: 音乐/音频生成关心的是在时间维度上生成有结构、有风格、可控长度的音频内容，不只局限于语音。
- importance: 它把音频分支从语音助手扩展到创作工具、配乐、SFX 和内容生成，是多模态生成的重要一角。
- minimum demo: 给定风格或文本条件生成一段短音乐 / 音频片段，并评估时长一致性、风格符合度和音频伪影。
- hardware budget: 生成音频通常比做分类/ASR 更吃 GPU 时间和存储。
- prerequisites:
  - E/E3. 音频 / 语音
  - F/F2. 数据形态/音频
  - D/D5. 生成范式
- core metrics:
  - coherence
  - style adherence
  - duration consistency
  - artifact rate
- toolchain:
  - audio generation model
  - conditioning pipeline
  - audio QA
- failure signs:
  - 开头像样，几十秒后结构明显塌掉
  - 有连续爆音、重复片段或风格漂移
- next:
  - E/E5. 多模态/音文
  - M/M2. 应用级评测

### E4. 视频

- pathKey: `E/E4. 视频`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-E.json`
- status: draft
- definition: 视频分支是在视觉感知基础上引入时间维度和长序列上下文，关注系统如何理解事件演化、检索关键片段、压缩长视频内容、回答带时间线的问题，以及在生成场景里维持跨帧一致性。它不是“图像任务的简单加长版”，而是把时序建模、片段选择、视频 I/O、上下文预算和评测方式都推向更复杂的一层。
- importance: 视频是最容易暴露系统复杂度的模态之一。相同的基础感知模型，一旦进入长视频、复杂动作、镜头切换和时间定位问题，就会同时面临存储、编码、检索、引用、延迟和可解释性压力。很多看似“模型不够强”的问题，其实来自抽帧策略不合理、长序列上下文不够、检索不到关键片段或评测没有覆盖时间维度。
- minimum demo: 做一条最小视频工作流：对几段短视频完成抽帧或 clip 切分，跑一个视频理解或视频摘要基线，再让系统回答几个必须依赖时间顺序的问题。记录端到端延迟、片段召回、答案是否真正对齐到具体时间点，并比较“只看少量关键帧”和“保留更多时序上下文”两种方案的差异。
- hardware budget: 视频任务通常比图像任务更吃 GPU、存储和带宽，真正成本往往来自长视频解码、特征缓存、向量索引和生成时的跨帧一致性维护，而不只是模型参数本身。短视频理解原型可在单机或云 API 上起步，但长视频问答、批量检索和视频生成会很快推高显存、I/O 和推理费用。
- prerequisites:
  - D/D4. 基础模型类型/视频基础模型
  - F/F2. 数据形态/视频
  - L/L2. 服务运行时
- core metrics:
  - temporal quality
  - latency
  - context coverage
  - storage / throughput
- toolchain:
  - video processing
  - video model
  - frame sampling
  - serving / storage
- failure signs:
  - 单帧效果好，但一进入长视频或复杂动作就明显失真
  - 视频 I/O 和特征缓存成本被低估，系统很快变慢
- next:
  - E/E4. 视频/视频理解
  - E/E4. 视频/视频生成
  - E/E5. 多模态

#### 视频理解

- pathKey: `E/E4. 视频/视频理解`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E4-1lm921b-1.json`
- status: draft
- definition: 视频理解关注模型能否在时间维度上理解事件、状态变化、镜头切换和因果顺序，而不是只基于单帧内容做静态描述。
- importance: 它是视频摘要、问答、监控分析和行为识别的上游能力。没有稳定的视频理解，后续的摘要、检索、告警和问答都只是在不可靠的片段判断上堆功能。
- minimum demo: 对一段短视频做事件理解或时间定位，比较稀疏抽帧、clip 编码和更长上下文输入三种方案在事件顺序判断上的差异。
- hardware budget: 视频编码、长序列输入和片段缓存都较吃显存、存储和带宽。
- prerequisites:
  - E/E4. 视频
  - F/F2. 数据形态/视频
  - E/E2. 视觉（CV）
- core metrics:
  - event accuracy
  - temporal grounding
  - long-video coverage
  - latency
- toolchain:
  - video encoder
  - frame sampling
  - temporal benchmark
- failure signs:
  - 模型能描述画面，但说不清前后顺序和动作关系
  - 长视频中只抓住开头和结尾，中间关键片段被忽略
- next:
  - E/E4. 视频/视频摘要
  - E/E4. 视频/视频问答
  - M/M2. 应用级评测

#### 视频检索

- pathKey: `E/E4. 视频/视频检索`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E4-1lm921b-1.json`
- status: draft
- definition: 视频检索要在大规模视频库里按文本、图像或片段语义找到最相关内容，同时保留 clip 级或时间段级定位能力。
- importance: 它把视频理解和检索系统结合起来，是内容平台、监控回放、企业视频知识库和安全审计的重要基础能力。
- minimum demo: 对一个小型视频库建立 embedding 索引，完成 text-to-video 检索，并返回命中的时间片段和简短证据说明。
- hardware budget: 大规模视频检索主要吃编码、特征缓存、索引和存储成本。
- prerequisites:
  - E/E4. 视频
  - I/I1. 表示与检索基础
  - F/F2. 数据形态/视频
- core metrics:
  - recall@k
  - temporal hit rate
  - index cost
  - latency
- toolchain:
  - video embedding model
  - vector store
  - clip extraction
- failure signs:
  - 能找到相似画面，但时间段定位不准
  - 视频一长，检索成本和误召同时飙升
- next:
  - I/I3. RAG 管线
  - E/E4. 视频/视频问答
  - L/L5. 系统基础设施

#### 视频摘要

- pathKey: `E/E4. 视频/视频摘要`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E4-1lm921b-1.json`
- status: draft
- definition: 视频摘要要把长视频压缩成关键事件、关键帧或可读说明，核心是在压缩率和信息保真之间取得平衡，并最好保留时间引用。
- importance: 它是把视频内容转成可消费信息的关键桥梁，也常是视频问答、复盘、审核和知识化系统的第一步。
- minimum demo: 对长视频生成关键事件摘要，并要求输出时间点、对应片段或关键帧引用，避免变成无依据的自由发挥。
- hardware budget: 主要受长视频解码和时序建模成本影响。
- prerequisites:
  - E/E4. 视频/视频理解
  - F/F2. 数据形态/视频
  - J/J2. 结构化输出
- core metrics:
  - summary faithfulness
  - compression ratio
  - coverage
  - citation quality
- toolchain:
  - video understanding model
  - captioning / summarization
  - time span extraction
- failure signs:
  - 摘要流畅但漏掉关键事件
  - 时序顺序错乱，导致回顾结论错误
- next:
  - E/E4. 视频/视频问答
  - I/I3. RAG 管线/Citation span alignment
  - M/M2. 应用级评测

#### 动作识别

- pathKey: `E/E4. 视频/动作识别`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E4-1lm921b-1.json`
- status: draft
- definition: 动作识别关心视频里发生了什么动作、动作持续多长时间以及动作之间如何切换，是连接视频理解、姿态估计和行为分析的核心任务。
- importance: 它对体育分析、监控告警、机器人模仿和人机交互都很关键，因为很多应用真正关心的是“发生了什么动作”，而不是“画面里有什么东西”。
- minimum demo: 在动作数据集上训练识别模型，并分析细粒度动作、相似动作和背景诱导带来的混淆。
- hardware budget: 训练通常需要 GPU；长视频和高帧率会进一步抬高成本。
- prerequisites:
  - E/E4. 视频
  - E/E2. 视觉（CV）/姿态估计
  - F/F2. 数据形态/视频
- core metrics:
  - top-1 accuracy
  - F1
  - temporal localization
  - latency
- toolchain:
  - video action model
  - pose / temporal features
  - clip sampling
- failure signs:
  - 动作类别相近时大量混淆
  - 模型更像在识别场景而不是识别动作
- next:
  - E/E7. 机器人与具身智能/技能学习
  - E/E4. 视频/视频理解

#### 视频问答

- pathKey: `E/E4. 视频/视频问答`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E4-1lm921b-1.json`
- status: draft
- definition: 视频问答要求系统既理解视频内容，又能把用户问题与时间片段、事件关系和视觉证据对齐，避免退化成只看单帧的猜测。
- importance: 它是视频检索、摘要、多模态推理和应用工程交叉最紧的一类任务，因为它把“看懂”“找得到”“说得对”三个要求绑在一起。
- minimum demo: 让系统回答一组带时间线的问题，并输出支持答案的片段、关键帧或文字证据，再检查答案是否真的可回指。
- hardware budget: 视频+语言联合推理更吃显存、上下文预算和检索链路成本。
- prerequisites:
  - E/E4. 视频/视频理解
  - E/E5. 多模态/视觉语言模型（VLM）
  - J/J1. 模型接口层
- core metrics:
  - answer accuracy
  - groundedness
  - temporal evidence quality
  - latency
- toolchain:
  - video-language model
  - retrieval / grounding
  - trace logging
- failure signs:
  - 回答看似合理，但和视频证据对不上
  - 问题稍复杂就退化成单帧猜测
- next:
  - E/E5. 多模态/多模态推理
  - M/M2. 应用级评测
  - I/I3. RAG 管线

#### 视频生成

- pathKey: `E/E4. 视频/视频生成`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E4-1lm921b-1.json`
- status: draft
- definition: 视频生成要同时保证单帧质量、主体身份稳定、运动合理和跨帧一致性，是比图像生成更难的一类生成任务。
- importance: 它把生成分支正式推进到时间维度，真实挑战不只是画面是否好看，而是动作、镜头、主体和背景是否能在数秒甚至更长时间内保持逻辑一致。
- minimum demo: 生成一个短视频片段，记录 prompt、时长、帧率和风格控制，并检查时序一致性、闪烁和身份漂移。
- hardware budget: 视频生成是最吃 GPU 时间、显存和存储带宽的任务之一。
- prerequisites:
  - E/E4. 视频
  - D/D5. 生成范式/扩散生成
  - E/E2. 视觉（CV）/图像生成
- core metrics:
  - prompt adherence
  - temporal consistency
  - flicker rate
  - latency / cost
- toolchain:
  - video generation model
  - conditioning / prompt control
  - video QA
- failure signs:
  - 单帧静态质量不错，但运动过程闪烁明显
  - 主体身份、背景或镜头逻辑在数秒内崩掉
- next:
  - E/E5. 多模态/Omni / any-to-any 系统
  - M/M2. 应用级评测
  - L/L1. 模型访问方式/本地推理

### E5. 多模态

- pathKey: `E/E5. 多模态`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-E.json`
- status: draft
- definition: 多模态分支讨论的是：不同模态如何共享表示、如何在同一任务里互相提供证据、如何共同进入推理和工具调用流程，以及系统如何把图像、文本、音频、视频等输入输出组织成统一交互界面。它关注的不只是“把多个模态拼在一起”，而是模态之间的对齐、引用、冲突处理和状态同步。
- importance: 它是语言、视觉、语音、视频分支真正汇合的地方，也是产品形态最容易发生跃迁的一层。很多用户需求并不是纯文本或纯图像问题，而是“看图回答”“听录音整理结论”“看视频做判断”“语音输入后再看屏幕内容调工具”。这些能力是否可靠，取决于多模态系统能否把不同来源的证据真正组合起来，而不是只在语言层做表面包装。
- minimum demo: 做一个图文或音文最小任务：用统一模型同时消费视觉/音频输入和文本问题，输出结构化结果，并记录答案是否真的受到了非文本模态约束。再为同一任务设计几道“只看文本答不对、必须联合多模态才能答对”的样例，检查系统是否真的在做跨模态推理。
- hardware budget: 多模态基础模型通常比单模态模型更吃显存、上下文和 I/O。真正拉高成本的常常不是单次模型调用，而是图像编码、音频流处理、视频抽帧、会话状态同步和多轮工具调用叠加后的整体系统费用。
- prerequisites:
  - D/D4. 基础模型类型/多模态基础模型
  - F/F2. 数据形态/多模态对
  - E/E2. 视觉（CV）
  - E/E3. 音频 / 语音
  - E/E4. 视频
- core metrics:
  - cross-modal alignment
  - reasoning quality
  - latency
  - groundedness
- toolchain:
  - VLM / multimodal model
  - preprocessing for each modality
  - trace / eval harness
- failure signs:
  - 模型单模态能力都不错，但一跨模态就严重幻觉
  - 输入链路复杂后上下文拼接和引用质量迅速变差
- next:
  - E/E5. 多模态/视觉语言模型（VLM）
  - E/E5. 多模态/多模态推理
  - E/E5. 多模态/多模态 Agent

#### 图文

- pathKey: `E/E5. 多模态/图文`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E5-1g671ab-1.json`
- status: draft
- definition: 图文任务是最经典的多模态配对问题，核心是让图像和文本在同一语义空间里对齐，并支持描述、检索、问答和 grounded 生成。
- importance: 它是 VLM、视觉检索、图像问答和内容审核等大量任务的基础数据形态，也是多模态系统最先成熟的一层。
- minimum demo: 完成一个图文检索或图像描述任务，并检查图片与文本之间的对齐质量，以及描述是否真的由图像证据支撑。
- hardware budget: 单卡 GPU 足够做多数原型。
- prerequisites:
  - E/E5. 多模态
  - F/F2. 数据形态/多模态对
  - E/E2. 视觉（CV）/视觉检索
- core metrics:
  - alignment accuracy
  - recall@k
  - caption quality
  - groundedness
- toolchain:
  - contrastive model
  - captioning model
  - vector store
- failure signs:
  - 图像描述流畅，但关键信息被胡编
  - 图文检索只学到风格相似，没学到语义相似
- next:
  - E/E5. 多模态/视觉语言模型（VLM）
  - I/I3. RAG 管线

#### 音文

- pathKey: `E/E5. 多模态/音文`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E5-1g671ab-1.json`
- status: draft
- definition: 音文任务关注音频内容如何与文本表示对齐，典型场景包括语音问答、音频检索、播客摘要、事件检测和音乐检索。
- importance: 它让语音/音频不再只依赖转写结果，而能直接进入跨模态表示、检索和下游推理系统。
- minimum demo: 做一个 text-to-audio 或 audio-to-text 检索实验，观察模型是否真的理解音频语义、说话事件或环境声音，而不是只记住表面模式。
- hardware budget: 单卡 GPU 即可；大规模检索更吃索引与存储。
- prerequisites:
  - E/E5. 多模态
  - F/F2. 数据形态/多模态对
  - E/E3. 音频 / 语音/自动语音识别（ASR）
- core metrics:
  - recall@k
  - semantic alignment
  - latency
  - noise robustness
- toolchain:
  - audio-text embedding model
  - vector retrieval
  - audio preprocessing
- failure signs:
  - 文本能匹配到相似风格，但语义不准
  - 背景噪声一高，检索和对齐质量快速下降
- next:
  - E/E3. 音频 / 语音
  - E/E5. 多模态/Omni / any-to-any 系统

#### 视频文

- pathKey: `E/E5. 多模态/视频文`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E5-1g671ab-1.json`
- status: draft
- definition: 视频文任务把视频片段和文本问题、描述或检索目标绑定起来，是视频理解走向语言接口的重要桥梁。
- importance: 它是视频问答、视频摘要、视频检索和视频知识库系统的核心数据形态，因为系统最终都需要把时间片段映射回语言接口。
- minimum demo: 做一个视频描述或视频问答基线，并输出时间片段证据，检查语言答案是否真的来自视频中的具体时段。
- hardware budget: 通常比图文更吃显存和上下文。
- prerequisites:
  - E/E5. 多模态
  - F/F2. 数据形态/多模态对
  - E/E4. 视频/视频理解
- core metrics:
  - answer / caption quality
  - temporal grounding
  - latency
  - context coverage
- toolchain:
  - video-language model
  - clip sampling
  - time span evaluation
- failure signs:
  - 回答看似自然，但时间线和视频证据对不上
  - 长视频里只靠局部帧猜答案
- next:
  - E/E4. 视频/视频问答
  - E/E5. 多模态/多模态推理

#### 视觉语言模型（VLM）

- pathKey: `E/E5. 多模态/视觉语言模型（VLM）`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E5-1g671ab-1.json`
- status: draft
- definition: VLM 是把视觉输入和语言输出统一到一个模型接口里的代表性家族，重点在于理解、描述、问答、结构化抽取和 grounded generation。
- importance: 它是多模态产品最常用的入口，因为它把视觉理解能力直接接到了语言接口、结构化输出和工具调用接口上。
- minimum demo: 选一个 VLM，完成图像问答、描述和结构化抽取三个小任务，并比较 groundedness 与 hallucination 差异。
- hardware budget: 中高端 GPU 或云 API 更常见；上下文和图像输入会同时抬高成本。
- prerequisites:
  - E/E5. 多模态
  - D/D4. 基础模型类型/多模态基础模型
  - J/J1. 模型接口层
- core metrics:
  - grounded answer accuracy
  - hallucination rate
  - schema adherence
  - latency
- toolchain:
  - VLM API / model
  - image preprocessing
  - structured output validator
- failure signs:
  - 语言表达很自然，但视觉证据支撑不足
  - 图像一复杂或图文关系一绕就开始胡编
- next:
  - E/E5. 多模态/多模态推理
  - E/E5. 多模态/多模态 Agent
  - J/J3. 工具调用

#### Omni / any-to-any 系统

- pathKey: `E/E5. 多模态/Omni / any-to-any 系统`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E5-1g671ab-1.json`
- status: draft
- definition: Omni / any-to-any 系统尝试让文本、图像、音频、视频等多种输入输出在同一运行时里流动，而不是简单拼接多个独立模型。
- importance: 它代表的是系统级统一而不只是模型级统一，会直接影响交互设计、状态管理、实时性和工具编排方式。
- minimum demo: 做一个支持图像+语音输入、文本+语音输出的最小原型，观察状态同步、打断恢复和跨模态切换延迟。
- hardware budget: 通常更依赖云端或高性能推理栈，因为要同时承担多模态 I/O 和实时性。
- prerequisites:
  - E/E5. 多模态
  - J/J5. 流式与实时
  - E/E3. 音频 / 语音/语音到语音
- core metrics:
  - cross-modal latency
  - state consistency
  - mode switch accuracy
  - UX smoothness
- toolchain:
  - omni / realtime runtime
  - session state
  - multimodal I/O adapters
- failure signs:
  - 单模态都能跑，模态切换时状态却经常丢失
  - 实时交互里音频、文本和视觉反馈彼此不同步
- next:
  - E/E5. 多模态/多模态 Agent
  - J/J5. 流式与实时/Voice interaction

#### 多模态推理

- pathKey: `E/E5. 多模态/多模态推理`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E5-1g671ab-1.json`
- status: draft
- definition: 多模态推理关心的不只是“看到多个输入”，而是系统如何在跨模态证据之间做比较、归纳、校验、冲突处理和最终决策。
- importance: 很多真实任务的难点不在单一模态识别，而在跨模态证据如何互相约束，从而降低幻觉、误判和片面结论。
- minimum demo: 设计一个必须联合图像+文本或视频+文本才能答对的问题集，再分析模型是否真的显式利用了多个模态的证据。
- hardware budget: 更吃上下文与推理成本，而不只是单纯显存。
- prerequisites:
  - E/E5. 多模态/视觉语言模型（VLM）
  - G/G8. 推理模型与模型路由
  - M/M3. Agent 级评测
- core metrics:
  - reasoning accuracy
  - groundedness
  - cross-modal consistency
  - trace quality
- toolchain:
  - multimodal model
  - trace logging
  - grader rubric
- failure signs:
  - 只用了其中一个模态就开始下结论
  - 跨模态证据冲突时没有显式暴露不确定性
- next:
  - E/E5. 多模态/多模态 Agent
  - M/M3. Agent 级评测/Trace schema

#### 多模态 Agent

- pathKey: `E/E5. 多模态/多模态 Agent`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E5-1g671ab-1.json`
- status: draft
- definition: 多模态 Agent 让系统不仅能看、听、说，还能基于多模态证据调用工具、规划步骤、维护状态并完成任务。
- importance: 这是多模态能力真正进入自主系统的节点，也是非语言分支和 Agent 分支汇合最彻底的地方，因为问题从“看懂”升级成了“看懂之后还能正确行动”。
- minimum demo: 做一个能读图、听语音、调用工具并返回结构化结果的多模态 agent 原型，并记录 trace 观察证据如何影响工具决策。
- hardware budget: 通常依赖更强的云推理或高性能本地/混合栈。
- prerequisites:
  - E/E5. 多模态/多模态推理
  - K/K1. Agent 的最小构成
  - K/K7. 工具与外部连接/Sandbox workspace
- core metrics:
  - task completion rate
  - grounded tool use
  - latency
  - approval correctness
- toolchain:
  - multimodal model
  - tool runtime
  - trace store
  - artifact checks
- failure signs:
  - 模型能理解模态输入，但一进工具链就失去对证据的约束
  - 多模态上下文过长时状态和引用频繁错位
- next:
  - K/K10. Agent 形态分支
  - M/M3. Agent 级评测
  - J/J9. 应用形态

### E6. 决策与强化学习

- pathKey: `E/E6. 决策与强化学习`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-E.json`
- status: draft
- definition: 这一分支关注系统如何在交互、反馈和长期目标下学习决策，而不是只做一次性预测。它把“选哪个标签”升级成“在状态里选什么动作、如何根据结果持续改进策略、如何在探索和风险之间做平衡”，因此天然带有时间维度、反馈闭环和在线优化属性。
- importance: 它是游戏、推荐、广告、机器人、具身智能和部分推理 / Agent 优化的重要理论与工程入口。很多系统一旦从离线判断走到连续交互，就会面临 reward 设计、策略漂移、线上风险和样本效率问题，这些都属于这层的核心。
- minimum demo: 在一个小型环境里跑策略学习，记录 reward、探索策略和训练曲线，再额外比较离线评测结果与在线交互表现。重点不是把分数跑高，而是看清：系统到底在优化什么、为什么会学偏、以及 reward 与真实目标之间哪里出现偏差。
- hardware budget: 模拟环境和长时间训练会持续消耗 CPU / GPU 资源；真正更贵的常常是高质量 simulator、长时间在线试错和回滚成本，而不是单次训练本身。
- prerequisites:
  - B/B8. 决策与多智能体
  - C/C2. 学习范式/强化学习
  - F/F2. 数据形态/交互轨迹
- core metrics:
  - episode return
  - sample efficiency
  - stability
  - online safety
- toolchain:
  - RL framework
  - simulator
  - experiment tracking
- failure signs:
  - reward 曲线好看，但策略一上线就崩
  - 系统把奖励函数漏洞学得很快，却没学会真正目标
- next:
  - E/E6. 决策与强化学习/策略学习
  - E/E6. 决策与强化学习/奖励设计
  - E/E7. 机器人与具身智能

#### 策略学习

- pathKey: `E/E6. 决策与强化学习/策略学习`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E6-1s31gcf-1.json`
- status: draft
- definition: 策略学习关心的是在状态下选什么动作，核心对象是 policy 而不是单次分类器或静态打分器。
- importance: 它决定系统会不会在连续决策里形成稳定行为，是 RL 分支的中心节点，也是从“预测”走向“行动”的关键跃迁。
- minimum demo: 在一个简单环境里训练策略，记录 episode return、策略熵和训练过程中的探索行为，再分析策略为何学到当前动作偏好。
- hardware budget: 许多小环境 CPU 即可，复杂环境和大模型策略需要 GPU。
- prerequisites:
  - E/E6. 决策与强化学习
  - B/B8. 决策与多智能体/MDP
  - C/C2. 学习范式/强化学习
- core metrics:
  - episode return
  - sample efficiency
  - stability
  - policy entropy
- toolchain:
  - RL algorithm
  - simulator
  - logging / replay
- failure signs:
  - 训练曲线强烈震荡，策略无法稳定收敛
  - 换随机种子后表现差异极大
- next:
  - E/E6. 决策与强化学习/值函数
  - E/E6. 决策与强化学习/探索/利用

#### 值函数

- pathKey: `E/E6. 决策与强化学习/值函数`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E6-1s31gcf-1.json`
- status: draft
- definition: 值函数估计某个状态或状态—动作对未来能拿到多少回报，是很多 RL 方法评估长期收益的核心组件。
- importance: 它让系统不只看眼前奖励，而开始估计长期后果，是规划、bootstrapping 和策略改进之间的关键桥梁。
- minimum demo: 对一个小环境学习 state value 或 Q value，并可视化不同状态下的估计差异与误差传播。
- hardware budget: 小规模环境成本可控；高维状态空间更吃算力和数据。
- prerequisites:
  - E/E6. 决策与强化学习
  - B/B8. 决策与多智能体/MDP
  - E/E6. 决策与强化学习/策略学习
- core metrics:
  - value error
  - bootstrapping stability
  - policy improvement gain
- toolchain:
  - value-based RL
  - simulator
  - training curves
- failure signs:
  - value estimate 快速发散
  - policy 看似提升，实际长期回报反而下降
- next:
  - E/E6. 决策与强化学习/在线交互决策
  - B/B8. 决策与多智能体/POMDP

#### 奖励设计

- pathKey: `E/E6. 决策与强化学习/奖励设计`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E6-1s31gcf-1.json`
- status: draft
- definition: 奖励设计决定系统到底在被优化什么，是 RL 里最容易把“看起来有效”做成“实际偏航”的地方。
- importance: 很多 RL 失败根本不是模型不会学，而是奖励函数写错了、目标代理不完整，或只覆盖了局部目标而忽略安全与长期效果。
- minimum demo: 给同一环境设计两版 reward，观察策略学到的行为差异，并专门分析 reward hacking 和 unintended shortcut。
- hardware budget: 主要成本来自仿真、反复实验和线上验证，而不只是 GPU。
- prerequisites:
  - E/E6. 决策与强化学习
  - B/B8. 决策与多智能体/决策理论
  - M/M5. 安全控制
- core metrics:
  - reward alignment
  - reward hacking rate
  - behavior quality
  - safety violations
- toolchain:
  - simulator
  - reward logging
  - failure taxonomy
- failure signs:
  - 模型在指标上更好，但行为明显偏离真实目标
  - 系统开始利用 reward 漏洞而不是完成任务
- next:
  - E/E6. 决策与强化学习/在线交互决策
  - M/M4. 在线评测/Real-user failure mining

#### 探索/利用

- pathKey: `E/E6. 决策与强化学习/探索/利用`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E6-1s31gcf-1.json`
- status: draft
- definition: 探索/利用权衡讨论的是系统何时继续尝试新动作，何时利用当前看起来最优的策略，以及这种权衡会如何影响风险与学习效率。
- importance: 它直接决定学习速度、样本效率和线上风险，也是 RL 与产品策略经常冲突的地方，因为真实系统不可能无限制试错。
- minimum demo: 对比不同探索策略在同一环境下的收敛速度、最终表现和累计 regret。
- hardware budget: 计算成本往往不是最大问题，试错成本和风险控制更关键。
- prerequisites:
  - E/E6. 决策与强化学习
  - E/E6. 决策与强化学习/策略学习
  - E/E6. 决策与强化学习/奖励设计
- core metrics:
  - exploration coverage
  - sample efficiency
  - regret
  - safety incidents
- toolchain:
  - RL training loop
  - offline replay
  - experiment tracker
- failure signs:
  - 探索不够导致很早收敛到坏策略
  - 探索过强导致线上风险或训练极不稳定
- next:
  - E/E6. 决策与强化学习/在线交互决策
  - M/M5. 安全控制

#### 在线交互决策

- pathKey: `E/E6. 决策与强化学习/在线交互决策`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E6-1s31gcf-1.json`
- status: draft
- definition: 在线交互决策强调系统在真实反馈回路里持续更新，而不是只在静态数据集上离线训练。
- importance: 一旦进入线上，延迟、风险、策略漂移、人类反馈和回滚机制都会成为系统本身的一部分，算法选择不再能脱离产品和安全边界。
- minimum demo: 用一个带在线反馈的仿真或 A/B 环境，比较离线最优策略和在线适应策略的差异，并观察回滚与保护机制什么时候被触发。
- hardware budget: 线上成本和风险管理通常比单纯训练算力更关键。
- prerequisites:
  - E/E6. 决策与强化学习
  - E/E6. 决策与强化学习/探索/利用
  - M/M4. 在线评测
- core metrics:
  - online reward
  - regret
  - rollback frequency
  - latency
- toolchain:
  - online serving
  - feedback logging
  - canary / rollback
- failure signs:
  - 离线指标漂亮，但线上 reward 持续走低
  - 策略更新太快，系统出现明显震荡或不可解释行为
- next:
  - M/M4. 在线评测/Canary / regression set
  - M/M4. 在线评测/Real-user failure mining
  - N/N6. 持续改进闭环

#### 模拟环境学习

- pathKey: `E/E6. 决策与强化学习/模拟环境学习`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E6-1s31gcf-1.json`
- status: draft
- definition: 模拟环境学习通过 simulator 或 world model 在低风险环境里试错，是 RL 和机器人系统降低真实交互成本的常见方式。
- importance: 没有 simulator，很多 RL/机器人任务根本无法高频迭代；但 simulator 做得不好又会带来显著 sim-to-real 偏差。
- minimum demo: 在 simulator 中训练一个策略，再比较它和真实环境或验证环境里的行为差异，特别关注策略是否依赖了仿真中的伪规律。
- hardware budget: 会持续消耗 CPU/GPU 和存储；环境越复杂，成本越接近训练模型本身。
- prerequisites:
  - E/E6. 决策与强化学习
  - F/F2. 数据形态/交互轨迹
  - D/D4. 基础模型类型/具身/世界模型（更偏前沿与系统）
- core metrics:
  - sample efficiency
  - sim-to-real gap
  - training stability
  - compute cost
- toolchain:
  - simulator
  - world model / env wrappers
  - experiment tracking
- failure signs:
  - 仿真里学得很好，落到真实环境却明显失效
  - 环境建模过于简化，学到的策略对真实噪声极脆弱
- next:
  - E/E7. 机器人与具身智能
  - E/E6. 决策与强化学习/策略学习

### E7. 机器人与具身智能

- pathKey: `E/E7. 机器人与具身智能`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-E.json`
- status: draft
- definition: 机器人与具身智能把感知、状态估计、规划、控制和技能学习放进物理世界，是 AI 从“只在信息空间做决策”走向“在现实世界行动”的分支。这里的关键不只是模型会不会看图或输出文本，而是系统能否在传感器噪声、执行误差、环境变化和物理约束下持续完成任务。
- importance: 它天然要求把任务、模型、数据、评测和部署一起做，因为错误不再只是答案错，而会直接变成碰撞、跌落、误抓、路径失败和真实成本。也是在这一层，AI 工程问题最明显地从“模型对不对”转向“闭环稳不稳、可不可以安全落地”。
- minimum demo: 用仿真或简化机器人任务打通一条感知→规划→动作闭环，并记录每一步观测、决策和失败原因。最好把单模块指标和端到端任务成功率并列展示，因为具身系统最容易出现“每个模块都还行，串起来却不行”的情况。
- hardware budget: 计算只是其中一部分，真实硬件、仿真、传感器、控制频率要求和安全测试成本通常更高。很多项目最终受限的不是 GPU，而是硬件调试周期、可用数据和安全边界。 
- prerequisites:
  - E/E6. 决策与强化学习
  - D/D4. 基础模型类型/具身/世界模型（更偏前沿与系统）
  - F/F2. 数据形态/交互轨迹
- core metrics:
  - task success rate
  - safety
  - latency
  - sim-to-real gap
- toolchain:
  - simulator / robotics stack
  - perception models
  - planner / controller
  - telemetry
- failure signs:
  - 单模块都能跑，但一串起来闭环就不稳定
  - 仿真成功率高，真实执行成功率却明显偏低
- next:
  - E/E7. 机器人与具身智能/感知—规划—动作闭环
  - E/E7. 机器人与具身智能/技能学习
  - M/M5. 安全控制

#### 感知

- pathKey: `E/E7. 机器人与具身智能/感知`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E7-19wcvsm-1.json`
- status: draft
- definition: 机器人感知把相机、深度、激光、IMU 等多源输入转成可供决策使用的状态表示，是物理闭环系统的入口层。
- importance: 没有稳定感知，后续定位、规划和控制都建立在错误世界模型上；而具身系统里这种误差会迅速放大成动作风险。
- minimum demo: 在仿真或真实传感器数据上做物体识别或状态估计，并把结果输入后续规划模块，检查感知误差如何传导到决策端。
- hardware budget: 实时传感器处理更看重 I/O、延迟和边缘计算能力。
- prerequisites:
  - E/E7. 机器人与具身智能
  - E/E2. 视觉（CV）
  - F/F2. 数据形态/交互轨迹
- core metrics:
  - perception accuracy
  - latency
  - sensor robustness
  - state quality
- toolchain:
  - sensor stack
  - CV models
  - telemetry / visualization
- failure signs:
  - 静态感知看着正常，一进入动态场景就抖动明显
  - 不同传感器之间时间同步和坐标对齐不稳定
- next:
  - E/E7. 机器人与具身智能/定位
  - E/E7. 机器人与具身智能/建图

#### 定位

- pathKey: `E/E7. 机器人与具身智能/定位`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E7-19wcvsm-1.json`
- status: draft
- definition: 定位回答的是“我现在在哪”，是导航、建图和闭环控制的基础状态变量，也是空间决策能否成立的先决条件。
- importance: 定位漂了，机器人就可能走对策略却去错地方；在真实系统里，这类错误通常比单点识别错误更难恢复。
- minimum demo: 在一个仿真地图里做定位估计，并比较带噪声和不带噪声时的误差变化与重定位表现。
- hardware budget: 边缘计算即可，但要求稳定实时性和传感器同步。
- prerequisites:
  - E/E7. 机器人与具身智能/感知
  - E/E7. 机器人与具身智能
  - B/B8. 决策与多智能体/POMDP
- core metrics:
  - localization error
  - drift
  - relocalization success
  - latency
- toolchain:
  - robotics localization stack
  - sensor fusion
  - simulator
- failure signs:
  - 短路径正常，长路径累计误差快速发散
  - 环境变化或遮挡后无法重新定位
- next:
  - E/E7. 机器人与具身智能/建图
  - E/E7. 机器人与具身智能/导航

#### 建图

- pathKey: `E/E7. 机器人与具身智能/建图`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E7-19wcvsm-1.json`
- status: draft
- definition: 建图把环境结构整理成可搜索、可定位、可规划的表示，是机器人理解空间的重要中间层。
- importance: 没有地图或空间表征，导航和长期任务很难稳定执行；即使是 end-to-end 系统，也往往隐含了某种空间状态建模。
- minimum demo: 在仿真环境里累积传感器观测并生成地图，再用这个地图做路径搜索和闭环检测。
- hardware budget: 更吃持续感知、存储和实时处理能力。
- prerequisites:
  - E/E7. 机器人与具身智能/定位
  - E/E7. 机器人与具身智能/感知
  - B/B2. 搜索
- core metrics:
  - map quality
  - coverage
  - loop closure quality
  - memory cost
- toolchain:
  - mapping / SLAM stack
  - simulator
  - visualization tools
- failure signs:
  - 地图局部看起来对，但全局结构扭曲
  - 回到同一区域时无法稳定闭环
- next:
  - E/E7. 机器人与具身智能/导航
  - E/E7. 机器人与具身智能/感知—规划—动作闭环

#### 操作

- pathKey: `E/E7. 机器人与具身智能/操作`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E7-19wcvsm-1.json`
- status: draft
- definition: 操作任务关注机器人如何与对象发生接触并完成抓取、放置、装配等动作，是具身任务里最难的一类问题之一。
- importance: 它把感知、状态估计、技能、控制和安全要求都拉到同一场景里，是评估具身智能成熟度的关键任务。
- minimum demo: 在仿真里完成一个抓取或搬运任务，记录成功率、碰撞、恢复行为和失败原因归属。
- hardware budget: 仿真和真实机械臂测试都昂贵，真实部署的硬件成本和安全成本很高。
- prerequisites:
  - E/E7. 机器人与具身智能
  - E/E7. 机器人与具身智能/感知
  - E/E7. 机器人与具身智能/控制
- core metrics:
  - task success rate
  - grasp success
  - collision rate
  - recovery rate
- toolchain:
  - robot simulator
  - manipulation policy
  - controller
- failure signs:
  - 识别到目标了，但末端执行器总到不了正确位置
  - 轻微扰动就导致整条操作链失败
- next:
  - E/E7. 机器人与具身智能/技能学习
  - E/E7. 机器人与具身智能/感知—规划—动作闭环

#### 导航

- pathKey: `E/E7. 机器人与具身智能/导航`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E7-19wcvsm-1.json`
- status: draft
- definition: 导航要求系统在空间里安全、有效地到达目标位置，是机器人系统里最典型的闭环任务。
- importance: 它把感知、定位、建图、规划和控制全部绑定到一起，是具身系统最容易暴露系统性缺陷的任务之一。
- minimum demo: 在仿真环境里完成一次从起点到目标点的导航，并统计路径长度、碰撞、到达率和恢复行为。
- hardware budget: 实时控制和感知对边缘算力与传感器稳定性要求高。
- prerequisites:
  - E/E7. 机器人与具身智能/定位
  - E/E7. 机器人与具身智能/建图
  - B/B6. 规划
- core metrics:
  - success rate
  - path efficiency
  - collision rate
  - latency
- toolchain:
  - navigation stack
  - planner
  - controller
  - simulator
- failure signs:
  - 路径能规划出来，但执行阶段频繁碰撞或迷路
  - 局部避障正常，长期任务却经常回不到全局目标
- next:
  - E/E7. 机器人与具身智能/感知—规划—动作闭环
  - E/E7. 机器人与具身智能/控制

#### 控制

- pathKey: `E/E7. 机器人与具身智能/控制`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E7-19wcvsm-1.json`
- status: draft
- definition: 控制负责把高层目标和规划结果变成底层执行信号，是机器人真正产生稳定动作的最后一层。
- importance: 规划再好，如果控制层不稳，现实世界里还是会抖、偏、撞、过冲或延迟失控。
- minimum demo: 在仿真里让机器人跟踪给定轨迹或姿态目标，并分析误差、超调与稳定性。
- hardware budget: 对实时性要求极高，常常比大模型算力更受限于控制频率和系统延迟。
- prerequisites:
  - E/E7. 机器人与具身智能
  - E/E7. 机器人与具身智能/导航
  - E/E7. 机器人与具身智能/操作
- core metrics:
  - tracking error
  - overshoot
  - stability
  - control frequency
- toolchain:
  - controller
  - telemetry
  - simulator
- failure signs:
  - 指令正确但执行明显振荡或超调
  - 环境稍有扰动就无法维持稳定控制
- next:
  - E/E7. 机器人与具身智能/感知—规划—动作闭环
  - M/M5. 安全控制

#### 技能学习

- pathKey: `E/E7. 机器人与具身智能/技能学习`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E7-19wcvsm-1.json`
- status: draft
- definition: 技能学习关心机器人如何把可复用动作模式学成稳定技能，而不是每次都从零开始规划或直接从端到端策略重新学起。
- importance: 它是把低层动作和高层任务连接起来的关键层，也决定机器人能否逐步积累能力，而不是每次重新适应。
- minimum demo: 通过模仿学习或 RL 学出一个可复用技能，再测试它在新初始状态、不同物体或不同姿态下的泛化。
- hardware budget: 持续试错和轨迹数据会拉高计算与标注成本。
- prerequisites:
  - E/E7. 机器人与具身智能
  - E/E6. 决策与强化学习/策略学习
  - F/F2. 数据形态/交互轨迹
- core metrics:
  - skill success rate
  - generalization
  - sample efficiency
  - reusability
- toolchain:
  - imitation / RL pipeline
  - simulator
  - trajectory dataset
- failure signs:
  - 技能在训练起点表现好，换姿态或物体就完全失效
  - 学到的是脆弱动作片段，而不是稳定技能
- next:
  - E/E7. 机器人与具身智能/操作
  - E/E7. 机器人与具身智能/感知—规划—动作闭环

#### 感知—规划—动作闭环

- pathKey: `E/E7. 机器人与具身智能/感知—规划—动作闭环`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E7-19wcvsm-1.json`
- status: draft
- definition: 这是具身系统最重要的系统级概念：感知更新世界状态，规划生成动作意图，执行再回到新的观测，形成持续闭环。
- importance: 单个模块性能好并不代表闭环系统能工作；闭环稳定性、恢复能力和失败可归因性才是真正决定机器人能否落地的标准。
- minimum demo: 把感知、规划、控制串成一条完整闭环，在仿真里跑多轮任务并分析失败点属于哪一层，以及系统能否自动恢复。
- hardware budget: 系统级闭环实验会同时消耗仿真、控制和观测资源，真实硬件调试成本更高。
- prerequisites:
  - E/E7. 机器人与具身智能/感知
  - E/E7. 机器人与具身智能/导航
  - E/E7. 机器人与具身智能/控制
- core metrics:
  - end-to-end success rate
  - recovery rate
  - latency budget
  - failure attribution
- toolchain:
  - robotics stack
  - trace logging
  - simulator
  - safety checks
- failure signs:
  - 各模块单测都过，但闭环执行频繁死锁或发散
  - 出了问题后无法快速定位是感知、规划还是控制环节
- next:
  - M/M3. Agent 级评测/Trace schema
  - M/M5. 安全控制
  - N/N6. 持续改进闭环

### E8. 扩展领域

- pathKey: `E/E8. 扩展领域`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-E.json`
- status: draft
- definition: 扩展领域承接那些不完全属于传统 NLP / CV / 语音 / 视频主线，但在产业和研究中高度重要的 AI 方向，例如 3D ML、游戏 AI、推荐系统、时间序列、图学习和 Scientific AI。它们往往有更强的结构约束、时序约束、领域规律或在线决策属性，因此不能简单套用通用助手范式来理解。
- importance: 这些方向提醒我们：AI 全图不等于 LLM 外加几个模态，很多行业价值来自结构数据、时序问题、交互决策、图关系和科学建模。它们也提醒学习者不要被“统一接口”迷惑，因为很多场景的关键不是 prompt，而是问题建模、数据结构、评测方式和上线边界。
- minimum demo: 针对一个扩展领域选最小任务，分别明确任务、模型、数据、指标和部署方式，而不是只背术语名字。最好额外说明：为什么这个问题不能直接退化为纯文本问答或纯图像识别，从而把领域特性显式保留下来。
- hardware budget: 更依赖领域数据和系统设计，算力需求高度依任务而异。有的方向主要受在线系统和反馈约束限制，有的方向主要受仿真和 HPC 成本限制，不能一概而论。
- prerequisites:
  - D/D2. 架构家族
  - F/F2. 数据形态
  - M/M1. 模型级评测
- core metrics:
  - task-specific quality
  - data fit
  - deployment cost
  - generalization
- toolchain:
  - domain-specific models
  - eval harness
  - serving / batch pipeline
- failure signs:
  - 拿通用大模型直接套，结果既不准也不经济
  - 领域问题明明吃结构数据或时序信息，却被错误地当成纯文本任务
- next:
  - E/E8. 扩展领域/3D ML
  - E/E8. 扩展领域/推荐系统
  - E/E8. 扩展领域/科学计算 / Scientific AI

#### 3D ML

- pathKey: `E/E8. 扩展领域/3D ML`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E8-19bc3vr-1.json`
- status: draft
- definition: 3D ML 关注点云、网格、体素和多视角表示，核心是空间结构理解、重建与生成。
- importance: 它是机器人、AR/VR、数字孪生和空间内容生成的重要基础，不是 2D 视觉任务的简单延伸，因为空间关系和视角变化本身就是任务的一部分。
- minimum demo: 做一个点云分类或 3D 重建基线，比较点云、体素和多视角表示方式的效果与成本差异。
- hardware budget: 3D 表示普遍较吃显存和内存。
- prerequisites:
  - E/E8. 扩展领域
  - E/E2. 视觉（CV）
  - F/F2. 数据形态/图结构
- core metrics:
  - reconstruction quality
  - classification accuracy
  - memory cost
  - inference speed
- toolchain:
  - 3D deep learning library
  - point cloud / mesh processing
  - visualizer
- failure signs:
  - 2D 视角看着正常，换角度后结构明显不一致
  - 输入分辨率一高，内存和计算成本迅速失控
- next:
  - E/E7. 机器人与具身智能
  - D/D2. 架构家族/Graph Neural Networks

#### 游戏 AI

- pathKey: `E/E8. 扩展领域/游戏 AI`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E8-19bc3vr-1.json`
- status: draft
- definition: 游戏 AI 研究的是在复杂规则和仿真环境里进行决策、规划、对抗和行为生成，是长期决策与多智能体交互的经典实验场。
- importance: 它既是 RL、规划、多智能体和世界模型的实验场，也是验证长期决策系统、模拟环境学习和策略泛化的重要平台。
- minimum demo: 在一个简单游戏环境里训练或设计 AI 对手，并分析策略演化、地图迁移和失败模式。
- hardware budget: 主要吃大量仿真与训练时间。
- prerequisites:
  - E/E8. 扩展领域
  - E/E6. 决策与强化学习
  - B/B8. 决策与多智能体
- core metrics:
  - win rate
  - sample efficiency
  - policy robustness
  - latency
- toolchain:
  - game simulator
  - RL / planning
  - replay analysis
- failure signs:
  - 模型学会 exploit 环境漏洞而不是学会策略
  - 换对手或地图后性能大幅下滑
- next:
  - E/E6. 决策与强化学习/模拟环境学习
  - B/B2. 搜索

#### 推荐系统

- pathKey: `E/E8. 扩展领域/推荐系统`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E8-19bc3vr-1.json`
- status: draft
- definition: 推荐系统关心的是在用户、内容和上下文之间做长期价值最大化，而不只是一次性匹配或单次点击优化。
- importance: 它是典型的线上决策系统，长期目标、反馈闭环、探索 / 利用和离线 / 在线偏差都非常明显。
- minimum demo: 做一个简单排序或召回+重排原型，并分别观察离线 ranking 指标、A/B 测试结果和长期反馈差异。
- hardware budget: 更依赖在线系统、特征存储和 A/B 基础设施，而不是单点大算力。
- prerequisites:
  - E/E8. 扩展领域
  - E/E6. 决策与强化学习/在线交互决策
  - F/F2. 数据形态/交互轨迹
- core metrics:
  - CTR / CVR
  - ranking metrics
  - long-term value
  - latency
- toolchain:
  - retrieval + ranking pipeline
  - feature store
  - A/B testing
- failure signs:
  - 离线排序分高，线上业务指标却没有提升
  - 系统过度追短期点击，长期体验明显变差
- next:
  - M/M4. 在线评测
  - N/N3. 决策变量
  - N/N6. 持续改进闭环

#### 时间序列

- pathKey: `E/E8. 扩展领域/时间序列`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E8-19bc3vr-1.json`
- status: draft
- definition: 时间序列任务关注随时间变化的数据预测、检测、分解和决策，核心是趋势、周期、异常、滞后关系和回测口径。
- importance: 它在金融、运维、供应链、IoT 和业务预测里非常常见，而且常常不适合被粗暴地当成纯文本问题，因为时间切分和未来信息泄漏会直接改变问题本身。
- minimum demo: 做一个预测或异常检测基线，并比较滚动窗口、季节性特征和不同时间切分方式对结果的影响。
- hardware budget: 多数场景算力不是瓶颈，数据切分和回测设计更关键。
- prerequisites:
  - E/E8. 扩展领域
  - F/F2. 数据形态/时间序列
  - C/C5. 指标体系/MSE / MAE
- core metrics:
  - MSE / MAE
  - forecast horizon quality
  - anomaly precision
  - stability
- toolchain:
  - time-series model
  - feature engineering
  - backtesting
- failure signs:
  - 历史回测很好，但一到未来窗口就显著失效
  - 数据泄漏导致指标虚高
- next:
  - F/F2. 数据形态/时间序列
  - M/M1. 模型级评测

#### 图学习

- pathKey: `E/E8. 扩展领域/图学习`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E8-19bc3vr-1.json`
- status: draft
- definition: 图学习关注节点、边和图结构如何参与表示学习与推理，是结构化关系问题的重要解法。
- importance: 很多关系网络、知识图谱、分子和推荐问题都天然是图，不应被强行压扁成普通表格或文本；图结构是否真正带来收益，需要单独验证。
- minimum demo: 用一个图数据集做节点分类或链路预测，并比较引入图结构前后的效果和扩展成本。
- hardware budget: 大图训练会吃显存和内存，采样策略很关键。
- prerequisites:
  - E/E8. 扩展领域
  - F/F2. 数据形态/图结构
  - D/D2. 架构家族/Graph Neural Networks
- core metrics:
  - node classification accuracy
  - link prediction quality
  - scalability
  - memory cost
- toolchain:
  - graph library
  - GNN model
  - graph sampler
- failure signs:
  - 图结构复杂度一上来，训练和采样开销迅速爆炸
  - 去掉图结构后效果差不多，说明图建模价值没被验证
- next:
  - B/B4. 知识表示/知识图谱
  - I/I4. RAG 形态/KG-RAG

#### 科学计算 / Scientific AI

- pathKey: `E/E8. 扩展领域/科学计算 / Scientific AI`
- node type: `concept-group`
- detail source: `data/details/leaves-E-E8-19bc3vr-1.json`
- status: draft
- definition: Scientific AI 把 AI 用到物理、化学、生物、材料、气象等科学问题中，目标通常不是生成好看答案，而是满足领域规律、守恒约束与可验证条件。
- importance: 它代表 AI 和科学建模的结合，成功标准往往是可解释、可验证、守恒或模拟准确，而不是通用 benchmark 分数。
- minimum demo: 在一个科学数据集上做预测或仿真替代模型，并把领域约束、外推能力和计算效率纳入评测。
- hardware budget: 需求跨度很大，从单机实验到大规模 HPC 都可能出现。
- prerequisites:
  - E/E8. 扩展领域
  - F/F2. 数据形态/时间序列
  - M/M1. 模型级评测
- core metrics:
  - domain accuracy
  - constraint satisfaction
  - generalization
  - compute efficiency
- toolchain:
  - scientific datasets
  - domain simulator
  - constraint-aware eval
- failure signs:
  - 普通机器学习指标不错，但领域规律完全不满足
  - 模型在训练分布附近有效，一到外推条件就失真严重
- next:
  - M/M1. 模型级评测
  - N/N3. 决策变量

## F. 数据层（横切层）

- pathKey: `F`
- node type: `domain`
- stage: 02 任务域与数据
- graph summary: HF Datasets 把数据访问、处理、共享、流式加载、跨模态支持作为基础设施；OpenAI 的 eval/agent-eval 又把 datasets、traces、eval runs 连成闭环。
- relation notes:
  - 数据层（横切层） 横穿 深度学习与基础模型、LLM 核心机制、模型适配、后训练与对齐、检索、记忆与外部知识、Agent 系统、评测、安全与治理、产品、场景与组织。
  - 同样叫“数据”，但训练数据、知识库数据、用户会话数据、评测数据、trace 数据是不同节点。
  - 数据层（横切层） 是整张图里最容易被混淆、但最应该单独画出的横切层。
- detail source: `data/details/domain-F.json`
- status: completed
- definition: 数据层（横切层）关注 AI 系统里“数据是什么、如何组织、如何加工、如何验证、如何治理，以及它最终如何影响模型与系统行为”。它不是单一训练集概念，而是贯穿预训练、后训练、评测、检索增强、Agent 轨迹、线上反馈闭环的一整套数据资产与工程体系。这个层的核心任务，是把原始内容、交互记录与标注结果，转化为可训练、可评测、可追踪、可合规复用的数据单元，并让数据分布、质量与用途保持一致。
- importance: 很多 AI 系统问题表面上像模型问题，实质上常是数据问题：能力上限受预训练覆盖限制，风格稳定性受 SFT 数据约束，对齐方向受偏好与奖励数据牵引，RAG 效果受知识库文档质量影响，Agent 行为受工具调用轨迹和反馈回路塑形。理解数据层，能帮助工程学习者把“收集数据—加工数据—控制质量—约束风险—服务训练与推理”看成一个闭环，而不是把数据只当作训练前的一次性输入。
- minimum demo: 做一个小型问答或工具调用数据集流水线即可体验数据层全貌：选定一个窄任务，收集几十到几百条原始样本，完成去重、清洗、schema 统一与 train/validation/test 切分，再人工抽检覆盖度、正确性与一致性，最后分别用于简单 SFT、离线评测或 RAG 检索。即使模型与代码都很简单，只要对比“未治理原始数据”和“经过工程处理后的数据”在训练稳定性、评测结果或检索命中率上的差异，就能直观看到数据层的价值。
- hardware budget: 学习数据层本身通常不依赖昂贵算力。多数入门实验可在本地电脑或单机云实例完成，重点成本更多来自存储、清洗处理、标注审核与版本管理，而不是 GPU。只有在大规模预训练语料处理、海量去重、多模态转码或后训练批量构建时，才需要把预算扩展到分布式计算、对象存储和数据处理集群。
- examples:
  - 为 SFT 构建统一 JSONL 数据格式，并做 train/validation/test 切分
  - 把知识库文档清洗、切块、去重后供 RAG 建索引
  - 从工具调用日志中提取成功/失败轨迹，形成 Agent traces
  - 对偏好数据做人审校验，过滤标签冲突和低置信样本
  - 对线上用户反馈做脱敏与权限控制后，再进入分析或训练回路
- pitfalls:
  - 把数据量误当作数据质量，忽视覆盖度、正确性和分布匹配
  - 训练集、验证集、测试集切分不严，导致污染与泄漏
  - 不同来源 schema 不一致，后续训练与评测口径混乱
  - 只关心离线清洗，不维护版本、血缘和可追溯性
  - 忽视 license、隐私、PII 与保留策略，导致治理风险
  - 将合成数据直接混入主数据而不做分层验证，放大偏差或伪模式
- core metrics:
  - 覆盖度
  - 正确性
  - 一致性
  - 多样性
  - 噪声率
  - 分布匹配度
  - 时效性
  - 去重率
  - 标注一致率
  - 污染/泄漏率
  - 可追溯性
  - 合规通过率
- toolchain:
  - 对象存储 / 数据湖
  - SQL / Spark / DuckDB / Pandas
  - 清洗与去重脚本
  - 数据标注平台
  - 数据版本管理
  - 数据卡 / model card 对齐文档
  - 向量库与切块工具
  - 离线评测与抽样审核工具
- failure signs:
  - 同一任务在训练、评测、线上表现口径不一致
  - 模型学到格式噪声、拒答漂移或工具调用模式异常
  - 验证集指标异常乐观，线上复现失败
  - RAG 命中率低但问题并不在检索器，而在文档质量与切块策略
  - 偏好或奖励数据引入了明显的风格偏置与对齐副作用
  - 无法回答数据从哪里来、经过哪些处理、是否可合法复用
- next:
  - F/F1. 数据类型
  - F/F2. 数据形态
  - F/F3. 数据工程
  - F/F4. 数据质量
  - F/F5. 数据治理
  - F/F6. 数据在系统中的角色
  - F/F7. 后训练数据构建

### F1. 数据类型

- pathKey: `F/F1. 数据类型`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-F.json`
- status: draft
- definition: 数据类型回答的是“这批数据在系统里扮演什么角色”，例如它是用于预训练、SFT、偏好对齐、工具调用优化、RAG，还是用来做评测与反馈回路。它强调的是用途和信号来源，而不是文件格式。
- importance: 同样一条文本数据，放进预训练语料、SFT 数据或 eval set，意义完全不同。只有先分清数据类型，后续的数据工程、治理和评测口径才不会混乱。
- minimum demo: 把同一业务场景涉及的数据按用途分成预训练、任务微调、评测、知识库和用户反馈五类，并说明每类如何进入系统。
- hardware budget: 更多依赖数据组织与标注成本，而不是 GPU。
- prerequisites:
  - D/D3. 训练范式
  - M/M1. 模型级评测
- core metrics:
  - type coverage
  - signal quality
  - reuse clarity
- toolchain:
  - data catalog
  - dataset registry
  - schema docs
- failure signs:
  - 同一批数据被同时拿去训练、评测和知识库而没有边界
  - 团队说不清某批数据到底是拿来训练什么的
- next:
  - F/F1. 数据类型/预训练语料
  - F/F1. 数据类型/指令微调数据
  - F/F1. 数据类型/Eval datasets

#### 预训练语料

- pathKey: `F/F1. 数据类型/预训练语料`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F1-1rxhcct-1.json`
- status: draft
- definition: 预训练语料是用于学习通用表示和基础能力的大规模原始数据集合，通常强调覆盖面、多样性和规模，而不是单条样本的精确任务标签。
- importance: 它决定基础模型的能力上限和知识覆盖面，是很多后续能力的底层来源。
- minimum demo: 比较同一模型在小语料和更大、更杂语料上的迁移表现差异。
- hardware budget: 主要花在存储、处理和长时间训练上。
- prerequisites:
  - D/D3. 训练范式/预训练
  - D/D6. 规模化要素/数据规模
- core metrics:
  - coverage
  - diversity
  - dedup ratio
- next:
  - F/F4. 数据质量/覆盖度
  - F/F3. 数据工程/去重

#### 指令微调数据

- pathKey: `F/F1. 数据类型/指令微调数据`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F1-1rxhcct-1.json`
- status: draft
- definition: 指令微调数据是把输入、期望输出和交互格式显式写出来的数据，用来让模型学会任务风格、输出格式和基本遵循能力。
- importance: 它通常比预训练数据更小，但对助手行为和任务稳定性影响很大。
- minimum demo: 收集几十条指令-回答样本，比较是否加入格式约束对输出稳定性的影响。
- hardware budget: 更多是标注和审核成本。
- prerequisites:
  - H/H2. 监督式后训练/SFT
  - D/D3. 训练范式/微调
- core metrics:
  - instruction coverage
  - format consistency
- next:
  - F/F7. 后训练数据构建/Instruction crafting
  - F/F6. 数据在系统中的角色/SFT 数据 → 决定任务风格与稳定性

#### 偏好数据

- pathKey: `F/F1. 数据类型/偏好数据`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F1-1rxhcct-1.json`
- status: draft
- definition: 偏好数据用来表达“哪个回答更好”，通常是成对比较或排序结果，而不是单一标准答案。
- importance: 它把监督信号从“正确答案”扩展到“更符合偏好的行为”，是 DPO、RLHF 等后训练路线的关键输入。
- minimum demo: 为同一个问题构造两个回答并标注偏好，观察偏好信号和标准答案信号的不同。
- hardware budget: 标注一致性和审核成本通常高于普通 SFT。
- prerequisites:
  - H/H3. 偏好优化与对齐/DPO
  - H/H3. 偏好优化与对齐/RLHF
- core metrics:
  - agreement rate
  - preference coverage
- next:
  - F/F7. 后训练数据构建/Preference data
  - F/F6. 数据在系统中的角色/偏好/奖励数据 → 决定对齐方向

#### 奖励数据

- pathKey: `F/F1. 数据类型/奖励数据`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F1-1rxhcct-1.json`
- status: draft
- definition: 奖励数据用于训练 reward model 或 verifier，帮助系统把复杂目标映射成可优化分数。
- importance: 它让模型能从更细粒度的评价信号里学习，但同时也更容易引入奖励黑客和偏置。
- minimum demo: 设计一个小 rubric，把回答映射成分数并比较不同打分者的一致性。
- hardware budget: 更多消耗在设计 rubric 和人工审核。
- prerequisites:
  - H/H3. 偏好优化与对齐/Reward modeling
  - H/H3. 偏好优化与对齐/RFT
- core metrics:
  - scorer agreement
  - reward fidelity
- next:
  - F/F7. 后训练数据构建/Reward / verifier data
  - F/F4. 数据质量/正确性

#### 工具调用数据

- pathKey: `F/F1. 数据类型/工具调用数据`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F1-1rxhcct-1.json`
- status: draft
- definition: 工具调用数据记录模型在什么上下文下应该调用什么工具、传什么参数、如何处理结果，是函数调用和 agent 工具链优化的直接训练信号。
- importance: 它决定模型是只会“说”还是能稳定地“做”，对 agent 系统的可用性影响很大。
- minimum demo: 收集一小批函数调用样本，检查工具选择、参数填充和错误恢复是否一致。
- hardware budget: 成本主要在构造高质量示例和验证执行结果。
- prerequisites:
  - J/J3. 工具调用/Function calling
  - H/H2. 监督式后训练/Tool / function-calling fine-tuning
- core metrics:
  - tool selection accuracy
  - argument validity
- next:
  - F/F6. 数据在系统中的角色/工具 traces → 决定 Agent 行为优化
  - M/M3. Agent 级评测/Tool selection correctness

#### Agent traces

- pathKey: `F/F1. 数据类型/Agent traces`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F1-1rxhcct-1.json`
- status: draft
- definition: Agent traces 是任务执行过程中的步骤、工具、观察、产物和决策记录，用来分析 agent 为什么成功或失败。
- importance: 它是 agent 训练和评测区别于普通聊天数据的关键资产，因为很多系统错误只会出现在过程里，而不是最终答案里。
- minimum demo: 把一次 agent 执行完整记录成 trace，并标注关键决策点和失败原因。
- hardware budget: 更多消耗在存储、分析和标注。
- prerequisites:
  - M/M3. Agent 级评测/Trace schema
  - K/K7. 工具与外部连接/Sandbox workspace
- core metrics:
  - trace completeness
  - process observability
- next:
  - M/M3. Agent 级评测/Trace grading
  - F/F4. 数据质量/一致性

#### Eval datasets

- pathKey: `F/F1. 数据类型/Eval datasets`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F1-1rxhcct-1.json`
- status: draft
- definition: Eval datasets 是专门为离线评测、回归测试和版本比较保留的数据集合，目标不是喂给模型学习，而是稳定暴露能力变化和失效边界。
- importance: 没有独立且口径稳定的 eval set，很多“提升”都可能只是训练记忆、prompt 变化或评估口径漂移。它是团队能否持续做对比决策的基准尺。
- minimum demo: 为一个任务显式划出 train、dev、eval 三套数据，记录来源、冻结日期、污染检查方式和每次版本评测结果。
- hardware budget: 成本主要在构建、维护和污染检查。
- prerequisites:
  - M/M1. 模型级评测
  - M/M2. 应用级评测
- core metrics:
  - reproducibility
  - contamination rate
  - version-to-version comparability
- next:
  - F/F7. 后训练数据构建/Train / validation / test split
  - F/F6. 数据在系统中的角色/Eval datasets → 决定可重复评测

#### 知识库文档

- pathKey: `F/F1. 数据类型/知识库文档`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F1-1rxhcct-1.json`
- status: draft
- definition: 知识库文档是供 RAG、检索或企业知识系统消费的原始内容资产，可能来自网页、PDF、Office、代码库或内部文档。
- importance: 它直接决定检索系统能不能找到高质量事实，也决定引用和 groundedness 的上限。
- minimum demo: 选一批文档做清洗、切块和索引，然后对同一问题比较改造前后的检索命中效果。
- hardware budget: 成本主要在 parsing、索引和存储。
- prerequisites:
  - I/I2. 知识库构建/数据接入
  - I/I2. 知识库构建/Chunking strategy
- core metrics:
  - retrieval hit rate
  - document freshness
- next:
  - F/F6. 数据在系统中的角色/知识库文档 → 决定 RAG 质量
  - I/I2. 知识库构建/Vector store

#### 用户行为日志

- pathKey: `F/F1. 数据类型/用户行为日志`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F1-1rxhcct-1.json`
- status: draft
- definition: 用户行为日志记录真实使用过程中的点击、接受、放弃、纠错和业务结果，是闭环优化和在线评测的重要数据来源。
- importance: 它能把离线假设和真实世界使用联系起来，但同时也最容易引入隐私、偏差和反馈回路问题。
- minimum demo: 为一个简单助手记录接受率、重试率和任务完成率，并做按场景切片分析。
- hardware budget: 成本集中在埋点、存储和治理。
- prerequisites:
  - M/M4. 在线评测/Business KPIs
  - F/F5. 数据治理/隐私
- core metrics:
  - acceptance rate
  - task completion
  - retention / conversion
- next:
  - M/M4. 在线评测/Acceptance rate
  - F/F5. 数据治理/PII

#### 合成数据

- pathKey: `F/F1. 数据类型/合成数据`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F1-1rxhcct-1.json`
- status: draft
- definition: 合成数据是通过规则、模拟器或模型生成的训练/评测样本，用来补足稀缺、昂贵或危险场景的数据覆盖。
- importance: 它可以显著提升覆盖率和效率，但如果不分层验证，很容易把伪模式、偏差和错误监督信号带进系统。
- minimum demo: 生成一批合成样本与真实样本混合训练，并单独评估它对真实分布的影响。
- hardware budget: 取决于生成方式；规则生成便宜，模型生成更贵。
- prerequisites:
  - F/F3. 数据工程/合成生成
  - F/F4. 数据质量/分布匹配
- core metrics:
  - coverage gain
  - real-world transfer
- next:
  - F/F3. 数据工程/数据增广
  - F/F4. 数据质量/正确性

### F2. 数据形态

- pathKey: `F/F2. 数据形态`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-F.json`
- status: draft
- definition: 数据形态描述的是样本在物理或逻辑上长什么样，例如文本、图像、音频、视频、schema 化 JSON、图结构、代码或交互轨迹。它强调的是表示形式和处理方式。
- importance: 很多模型和工程错误，并不是数据类型错了，而是数据形态没搞清楚。比如同样是知识库文档，可以是纯文本、PDF、表格、代码仓库或多模态配对，它们的解析和评测方法完全不同。
- minimum demo: 拿一个真实任务，把它涉及的数据样本分别归到具体形态，并写出每种形态需要的解析、切分和验证方式。
- hardware budget: 取决于形态复杂度；文本最低，视频和多模态更高。
- prerequisites:
  - F/F1. 数据类型
  - E
- core metrics:
  - shape validity
  - parser success
  - storage / throughput
- toolchain:
  - parsers
  - feature extractors
  - schema validators
- failure signs:
  - 同一种处理流程硬套到所有数据上
  - 数据 parse 得出来，但语义已经丢了
- next:
  - F/F2. 数据形态/文本
  - F/F2. 数据形态/JSON / schema data
  - F/F2. 数据形态/交互轨迹

#### 文本

- pathKey: `F/F2. 数据形态/文本`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F2-1rx2c1j-1.json`
- status: draft
- definition: 文本是最常见的数据形态，既可以是原始自然语言，也可以是半结构化内容、prompt、日志和文档块。
- importance: 很多系统最终都会退回到文本表示，因此文本形态处理质量直接影响训练、检索和推理效果。
- minimum demo: 对同一批文本做清洗、切分和 token 统计，观察不同处理方式对下游的影响。
- prerequisites:
  - E/E1. 语言（NLP / LLM）
  - I/I2. 知识库构建/Parser types/Text / Markdown
- core metrics:
  - token length
  - parse success
- next:
  - F/F3. 数据工程/切分
  - G/G1. 语言建模基础/Tokenization pipeline

#### 图像

- pathKey: `F/F2. 数据形态/图像`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F2-1rx2c1j-1.json`
- status: draft
- definition: 图像形态包含像素、分辨率、颜色空间和布局结构，常用于分类、检测、OCR、生成和检索。
- importance: 图像不是“文件能打开就行”，其分辨率、压缩和标注形式都会直接影响视觉模型表现。
- minimum demo: 对一批图像做尺寸、通道和标注格式检查，比较预处理前后的训练稳定性。
- prerequisites:
  - E/E2. 视觉（CV）
  - D/D4. 基础模型类型/视觉基础模型
- core metrics:
  - resolution distribution
  - annotation coverage
- next:
  - F/F3. 数据工程/清洗
  - E/E2. 视觉（CV）/图像分类

#### 音频

- pathKey: `F/F2. 数据形态/音频`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F2-1rx2c1j-1.json`
- status: draft
- definition: 音频形态不仅包含波形文件本身，还包含采样率、声道、位深、时长、静音区间、背景噪声和切片边界等会直接影响模型输入语义的属性。
- importance: 音频问题常常不是“模型不会”，而是前处理把时序信息切坏了。采样率、静音切分和转写对齐稍有不一致，ASR、TTS 和音频分类都会明显退化。
- minimum demo: 抽一批音频统一到同一采样率后，再比较不同静音切分和归一化策略对转写错误率或分类准确率的影响。
- prerequisites:
  - E/E3. 音频 / 语音
  - D/D4. 基础模型类型/语音 / 音频基础模型
- core metrics:
  - sample rate consistency
  - duration coverage
  - transcript alignment quality
- next:
  - F/F3. 数据工程/清洗
  - J/J6. 多模态应用/Audio input/output

#### 视频

- pathKey: `F/F2. 数据形态/视频`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F2-1rx2c1j-1.json`
- status: draft
- definition: 视频形态是在图像基础上叠加时间轴、镜头切换、帧率、压缩编码和多粒度标注后的复合数据形态，真正处理对象往往是 clip 而不是单帧。
- importance: 视频难点通常不在单帧识别，而在如何在有限计算预算里保住关键时序信息。抽帧、切 clip 和时间标注一旦做错，模型会在看起来“样本很多”的情况下持续丢上下文。
- minimum demo: 对同一批视频分别做均匀抽帧、关键帧抽样和按事件切 clip，比较三种策略在同一视频理解任务上的覆盖与效果差异。
- prerequisites:
  - E/E4. 视频
  - D/D4. 基础模型类型/视频基础模型
- core metrics:
  - frame coverage
  - clip length
  - storage cost
  - temporal label alignment
- next:
  - F/F3. 数据工程/切分
  - E/E4. 视频/视频理解

#### 多模态对

- pathKey: `F/F2. 数据形态/多模态对`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F2-1rx2c1j-1.json`
- status: draft
- definition: 多模态对是把文本、图像、音频、视频等不同模态按语义或时间关系绑定在一起的数据单元，例如图文对、音文对、视频文对。
- importance: 多模态系统能不能学到真正的对齐，首先取决于这种配对是否正确和有代表性。
- minimum demo: 抽样检查一批图文或视频文对，确认它们是否真的在语义和时间上对应。
- prerequisites:
  - E/E5. 多模态
  - D/D4. 基础模型类型/多模态基础模型
- core metrics:
  - alignment quality
  - pair completeness
- next:
  - F/F4. 数据质量/一致性
  - E/E5. 多模态/图文

#### JSON / schema data

- pathKey: `F/F2. 数据形态/JSON / schema data`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F2-1rx2c1j-1.json`
- status: draft
- definition: JSON / schema data 是已经被结构化表达的数据形态，强调字段、类型、嵌套关系和约束，而不是自然语言表述。
- importance: 它是程序可消费输出和高可靠系统接口的核心形态，也是很多训练和评测样本的最终落地形式。
- minimum demo: 给一批结构化样本做 schema 校验，统计字段缺失和类型不匹配情况。
- prerequisites:
  - J/J2. 结构化输出/JSON Schema
  - E/E1. 语言（NLP / LLM）/结构化解析
- core metrics:
  - schema validity
  - field completeness
- next:
  - F/F3. 数据工程/过滤
  - J/J2. 结构化输出/Validation

#### 图结构

- pathKey: `F/F2. 数据形态/图结构`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F2-1rx2c1j-1.json`
- status: draft
- definition: 图结构数据由节点、边及其属性组成，适合表达依赖、知识关系、交互网络和流程拓扑，其核心价值在于把“对象之间的连接方式”显式化。
- importance: 它和表格、文本不同，真正重要的不只是节点属性，而是边的语义、方向和稀疏拓扑。很多推荐、知识图谱和工作流问题，若被拍平为普通样本，会丢掉最关键的关系信号。
- minimum demo: 把一批实体关系或调用依赖转成图结构，检查孤立节点、反向边缺失和关键属性是否完整，再对照原始关系源做 spot check。
- prerequisites:
  - B/B4. 知识表示/知识图谱
  - D/D2. 架构家族/Graph Neural Networks
- core metrics:
  - edge coverage
  - graph consistency
  - orphan node rate
- next:
  - E/E8. 扩展领域/推荐系统
  - F/F4. 数据质量/一致性

#### 时间序列

- pathKey: `F/F2. 数据形态/时间序列`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F2-1rx2c1j-1.json`
- status: draft
- definition: 时间序列数据由按时间排序的观测值、事件或状态组成，除了值本身，还要保留时间间隔、窗口边界、缺失段和目标发生顺序等语义。
- importance: 很多预测、监控和控制问题的本质不是静态样本分类，而是对演化规律和异常拐点建模。时间索引一旦错位，模型可能在离线看起来很准，线上却完全失效。
- minimum demo: 对一段时间序列做滑窗切分、未来标签构造和按时间分桶的 train/test 划分，重点检查是否引入未来信息泄漏。
- prerequisites:
  - B/B7. 不确定性与概率推理/时序概率模型
  - E/E6. 决策与强化学习
- core metrics:
  - window validity
  - leakage rate
  - timestamp consistency
- next:
  - F/F3. 数据工程/切分
  - C/C1. 问题设定/分布漂移

#### 代码

- pathKey: `F/F2. 数据形态/代码`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F2-1rx2c1j-1.json`
- status: draft
- definition: 代码数据既是文本，又带有语法树、依赖关系、执行语义和仓库上下文，因此不能按普通自然语言完全等价处理。
- importance: 代码理解和生成的质量强依赖仓库结构、文件边界和执行反馈，而不是只有 token 相似性。
- minimum demo: 对一个小仓库统计文件类型、函数边界和依赖关系，比较纯文本切分和代码感知切分的差异。
- prerequisites:
  - E/E1. 语言（NLP / LLM）/代码生成与理解
  - I/I2. 知识库构建/Parser types/Code / repository parsers
- core metrics:
  - parse success
  - context completeness
- next:
  - F/F3. 数据工程/切分
  - N/N1. 场景类型/编码

#### 交互轨迹

- pathKey: `F/F2. 数据形态/交互轨迹`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F2-1rx2c1j-1.json`
- status: draft
- definition: 交互轨迹是按时间记录的多轮观察、动作、工具调用和结果序列，常见于 agent、RL 和真实产品交互日志。
- importance: 它和单样本数据不同，价值在于过程和反馈，而不是单条输入输出对。
- minimum demo: 把一次任务执行过程整理成 step-by-step trace，并标注每步的输入、动作和结果。
- prerequisites:
  - M/M3. Agent 级评测/Trace schema
  - K/K7. 工具与外部连接/Sandbox workspace
- core metrics:
  - trace completeness
  - step consistency
- next:
  - F/F1. 数据类型/Agent traces
  - E/E6. 决策与强化学习

### F3. 数据工程

- pathKey: `F/F3. 数据工程`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-F.json`
- status: draft
- definition: 数据工程关注如何把原始内容、日志和人工标注，转成可训练、可检索、可评测、可复现的数据资产。它覆盖采集、清洗、去重、过滤、切分、标注、版本管理以及在线流式处理等流程，是把“有数据”变成“可安全复用的数据”的执行层。
- importance: 很多团队知道要做训练或 RAG，但真正出问题的地方常在数据工程：schema 不统一、清洗不稳定、train/test 切分混乱、标注口径漂移、版本不可追溯。没有这层，模型和评测结果都很难复现，也很难解释为什么一次有效、下次失效。
- minimum demo: 做一条小型数据流水线：从两个来源采集原始文本或工具日志，统一 schema，完成清洗、去重、过滤和切分，再抽样标注并记录版本号。最后把同一份数据分别用于 SFT、离线评测或 RAG 建库，对比“无工程处理”和“有工程处理”两种结果差异。
- hardware budget: 大多数学习实验可在本地或单机云实例完成，重点成本在存储、数据处理时间、人审标注和版本管理，而不是 GPU。只有大规模预训练语料、多模态转码或高吞吐在线处理时，才会显著依赖分布式计算资源。
- prerequisites:
  - F/F1. 数据类型
  - F/F2. 数据形态
  - C/C1. 问题设定/训练集 / 验证集 / 测试集
- core metrics:
  - pipeline success rate
  - parse success rate
  - dedup ratio
  - label throughput
  - freshness lag
  - reproducibility
- toolchain:
  - ETL / ELT pipelines
  - schema validation
  - batch / stream processing
  - annotation tools
  - dataset registry
  - object storage
- failure signs:
  - 相同数据源每次处理结果都不一样
  - 训练、评测、知识库三套数据口径互相冲突
  - 出了问题却说不清是哪一版数据导致的
  - 数据看似很多，但实际有效样本很少或高度重复
- next:
  - F/F3. 数据工程/采集
  - F/F3. 数据工程/清洗
  - F/F3. 数据工程/去重
  - F/F3. 数据工程/过滤
  - F/F3. 数据工程/切分
  - F/F3. 数据工程/标注
  - F/F3. 数据工程/版本管理
  - F/F3. 数据工程/数据增广
  - F/F3. 数据工程/合成生成
  - F/F3. 数据工程/流式处理

#### 采集

- pathKey: `F/F3. 数据工程/采集`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F3-1lw3nc9-1.json`
- status: draft
- definition: 采集是把网页、日志、文档、数据库、代码库或外部 API 里的原始内容拉进数据系统，并记录来源、时间、权限和上下文的第一步。
- importance: 如果采集阶段没有把来源和边界记录清楚，后面就很难追责、去重、过滤或做合规治理。
- minimum demo: 从两个不同来源接入一批问答文本或工具日志，并保留 source、timestamp、owner、license 等基础元数据。
- hardware budget: 通常是 IO、带宽和存储成本，不是 GPU 成本。
- prerequisites:
  - F/F1. 数据类型
  - F/F2. 数据形态
  - I/I2. 知识库构建/数据接入
- core metrics:
  - ingestion success rate
  - source coverage
  - metadata completeness
- next:
  - F/F3. 数据工程/清洗
  - F/F3. 数据工程/版本管理
  - F/F5. 数据治理/License

#### 清洗

- pathKey: `F/F3. 数据工程/清洗`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F3-1lw3nc9-1.json`
- status: draft
- definition: 清洗是把乱码、重复模板、无效字段、异常格式和不稳定结构整理成统一、可处理的数据表示。
- importance: 很多模型问题不是因为样本太少，而是输入里充满广告、模板噪声、断裂编码或结构错乱，导致训练和检索都学到错误模式。
- minimum demo: 对一批原始网页或日志做去 HTML 噪声、字段对齐、编码修复和 schema 规范化，然后比较处理前后的可解析率。
- hardware budget: 主要是 CPU 和存储开销。
- prerequisites:
  - F/F3. 数据工程/采集
  - F/F2. 数据形态/文本
- core metrics:
  - parse success rate
  - schema validity
  - clean retention ratio
- next:
  - F/F3. 数据工程/去重
  - F/F3. 数据工程/过滤
  - I/I2. 知识库构建/Chunking strategy

#### 去重

- pathKey: `F/F3. 数据工程/去重`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F3-1lw3nc9-1.json`
- status: draft
- definition: 去重用于移除完全重复或近重复样本，避免模型把高频模板误当成强信号，也避免评测被训练内容污染。
- importance: 重复率过高会抬高训练成本、降低有效覆盖，还会让验证集看起来异常乐观。
- minimum demo: 对一批文本或代码样本做 exact hash 和 near-duplicate 检查，对比去重前后的样本规模和主题分布。
- hardware budget: 中小规模可本地完成；大规模语料需要更多内存和分布式处理。
- prerequisites:
  - F/F3. 数据工程/清洗
  - F/F1. 数据类型/预训练语料
- core metrics:
  - dedup ratio
  - near-duplicate rate
- next:
  - F/F4. 数据质量/多样性
  - F/F7. 后训练数据构建/Contamination / leakage checks

#### 过滤

- pathKey: `F/F3. 数据工程/过滤`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F3-1lw3nc9-1.json`
- status: draft
- definition: 过滤是用规则、模型或人工审核把无关、低质、违规或高风险样本从候选数据里剔除，保留对目标任务真正有价值的部分。
- importance: 过滤决定系统最终吃进去的信号质量；如果标准不清，模型会同时学到垃圾样本和违规模式。
- minimum demo: 定义一组简单过滤规则，移除空样本、超短样本、PII 样本和明显错误调用记录，再比较过滤前后的抽样质量。
- hardware budget: 成本集中在规则维护和人审，不依赖昂贵算力。
- prerequisites:
  - F/F3. 数据工程/清洗
  - F/F5. 数据治理/隐私
  - F/F5. 数据治理/PII
- core metrics:
  - filter precision
  - filter recall
  - risk removal rate
- next:
  - F/F4. 数据质量/正确性
  - F/F4. 数据质量/噪声控制

#### 切分

- pathKey: `F/F3. 数据工程/切分`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F3-1lw3nc9-1.json`
- status: draft
- definition: 切分是按训练、验证、测试或线上回放等用途划分数据边界，防止不同阶段的数据相互污染并维持稳定评测口径。
- importance: 没有严格切分，就无法判断提升究竟来自真实泛化，还是来自记忆和泄漏。
- minimum demo: 把一个小数据集拆成 train/validation/test，并额外检查是否存在重复用户、重复题目或同源样本跨集合出现。
- hardware budget: 几乎没有额外硬件成本。
- prerequisites:
  - C/C1. 问题设定/训练集 / 验证集 / 测试集
  - F/F1. 数据类型/Eval datasets
- core metrics:
  - split purity
  - class balance
  - leakage rate
- next:
  - F/F7. 后训练数据构建/Train / validation / test split
  - F/F7. 后训练数据构建/Contamination / leakage checks
  - C/C4. 共性问题/数据泄漏

#### 标注

- pathKey: `F/F3. 数据工程/标注`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F3-1lw3nc9-1.json`
- status: draft
- definition: 标注是给样本附上类别、答案、偏好、评分、工具调用结果或过程标签，把原始内容变成可监督学习和可评测的结构化信号。
- importance: 同一批原始数据是否能用于 SFT、偏好优化或 verifier 训练，关键就在标注口径和质量是否可靠。
- minimum demo: 选一小批样本，分别做分类标签、偏好对比或 rubric 打分，并记录标注说明和冲突样本。
- hardware budget: 主要消耗在人力、审核和一致性管理上。
- prerequisites:
  - C/C2. 学习范式/监督学习
  - H/H2. 监督式后训练/SFT
  - H/H3. 偏好优化与对齐/Reward modeling
- core metrics:
  - label agreement
  - label coverage
  - adjudication rate
- next:
  - F/F7. 后训练数据构建/Instruction crafting
  - F/F7. 后训练数据构建/Preference data
  - F/F7. 后训练数据构建/Reward / verifier data

#### 版本管理

- pathKey: `F/F3. 数据工程/版本管理`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F3-1lw3nc9-1.json`
- status: draft
- definition: 版本管理要求每一批数据都能被唯一标识、回放和追踪，包含来源、处理步骤、过滤条件和切分方式。
- importance: 没有版本管理，训练结果、评测结果和线上异常都很难追溯到具体是哪一版数据造成的。
- minimum demo: 给一次数据处理产物打版本号，记录输入源、处理脚本版本、过滤规则和导出时间。
- hardware budget: 主要是存储和元数据管理成本。
- prerequisites:
  - F/F3. 数据工程/采集
  - F/F3. 数据工程/切分
- core metrics:
  - reproducibility
  - version trace completeness
- next:
  - F/F5. 数据治理/数据卡 / model card 对齐
  - F/F5. 数据治理/审计
  - M/M7. 隐私与合规/Audit logs

#### 数据增广

- pathKey: `F/F3. 数据工程/数据增广`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F3-1lw3nc9-1.json`
- status: draft
- definition: 数据增广是在不改变核心任务语义的前提下，对样本做改写、变换、重采样或组合，以扩大覆盖和提升稳健性。
- importance: 在真实样本不足或分布过窄时，增广可以提升覆盖，但如果约束不严，也会制造虚假模式。
- minimum demo: 对一个分类或指令任务生成几种等价改写，并比较是否提升长尾场景表现。
- hardware budget: 规则式增广便宜，模型式增广会增加推理成本。
- prerequisites:
  - F/F3. 数据工程/标注
  - F/F4. 数据质量/覆盖度
- core metrics:
  - coverage gain
  - semantic preservation
- next:
  - F/F4. 数据质量/多样性
  - F/F3. 数据工程/合成生成

#### 合成生成

- pathKey: `F/F3. 数据工程/合成生成`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F3-1lw3nc9-1.json`
- status: draft
- definition: 合成生成是通过规则、模拟器或模型构造新的训练或评测样本，用来补足昂贵、稀缺或危险场景的数据覆盖。
- importance: 它能快速扩充数据，但最大风险是生成出来的模式与真实世界脱节，导致模型学会“考试技巧”而不是实际能力。
- minimum demo: 用规则或模型生成一批样本，与真实样本混合后训练，再单独评估其对真实分布任务的迁移效果。
- hardware budget: 取决于生成方式；模型生成的成本明显高于规则生成。
- prerequisites:
  - F/F1. 数据类型/合成数据
  - F/F3. 数据工程/数据增广
- core metrics:
  - generation yield
  - real-world transfer
  - quality pass rate
- next:
  - F/F4. 数据质量/分布匹配
  - F/F4. 数据质量/正确性

#### 流式处理

- pathKey: `F/F3. 数据工程/流式处理`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F3-1lw3nc9-1.json`
- status: draft
- definition: 流式处理是对持续到来的日志、反馈、工具调用结果和线上事件做实时或准实时加工，让数据更快进入监控、分析和闭环优化流程。
- importance: 离线批处理适合构建基础资产，但线上系统的反馈、异常和知识更新常常要求更快的数据响应链路。
- minimum demo: 为一个简单应用记录用户接受率和工具调用结果，并以小时级更新统计看板。
- hardware budget: 更依赖稳定的消息和计算基础设施，而不是单次算力峰值。
- prerequisites:
  - F/F1. 数据类型/用户行为日志
  - F/F2. 数据形态/交互轨迹
  - M/M4. 在线评测/Acceptance rate
- core metrics:
  - event lag
  - processing throughput
  - drop rate
- next:
  - M/M4. 在线评测/Business KPIs
  - M/M4. 在线评测/A/B tests
  - F/F5. 数据治理/隐私

### F4. 数据质量

- pathKey: `F/F4. 数据质量`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-F.json`
- status: draft
- definition: 数据质量回答的是“这批数据是否真的适合当前用途”，它不只关心有没有脏数据，更关心覆盖度、正确性、一致性、多样性、噪声、分布匹配、偏差与时效性这些维度是否和训练、评测或线上目标相匹配。
- importance: 同一份数据，对预训练、SFT、RAG、评测和线上反馈的质量要求不同。只有把质量拆成可检查的维度，团队才能定位问题究竟来自样本错误、标签漂移、分布偏移、老旧知识还是场景覆盖不足，而不是笼统地说“数据不太行”。
- minimum demo: 为一个小数据集建立质量检查表：抽样检查事实正确性，统计类别或场景覆盖，评估重复率和噪声率，确认 train/validation/test 是否泄漏，并在一轮训练或评测后回看哪些质量问题真正影响结果。
- hardware budget: 大多是人工抽样、规则检查、统计分析和小规模模型辅助筛查成本；真正昂贵的是长期持续维护质量闭环，而不是单次运行检查脚本。
- prerequisites:
  - F/F3. 数据工程
  - C/C4. 共性问题/数据泄漏
  - M/M1. 模型级评测
- core metrics:
  - coverage
  - correctness
  - consistency
  - diversity
  - noise rate
  - distribution match
  - fairness gaps
  - freshness
- toolchain:
  - sampling review
  - rule validators
  - agreement checks
  - distribution dashboards
  - contamination checks
- failure signs:
  - 离线指标不错，线上效果却明显不稳
  - 同任务在不同评测集上表现差异异常大
  - 模型学到格式噪声或过拟合某些套路
  - 新知识更新后系统仍反复回答旧版本内容
- next:
  - F/F4. 数据质量/覆盖度
  - F/F4. 数据质量/正确性
  - F/F4. 数据质量/一致性
  - F/F4. 数据质量/多样性
  - F/F4. 数据质量/噪声控制
  - F/F4. 数据质量/分布匹配
  - F/F4. 数据质量/偏差与公平性
  - F/F4. 数据质量/时效性

#### 覆盖度

- pathKey: `F/F4. 数据质量/覆盖度`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F4-alxjoh-1.json`
- status: draft
- definition: 覆盖度衡量数据是否真正覆盖了任务、场景、语言、用户群体、工具分支或长尾异常，而不是只覆盖最常见样本。
- importance: 覆盖不足会让模型在线上显得“看起来会，遇到边角就不会”，这是很多能力上限问题的真实来源。
- minimum demo: 列出任务维度和场景维度，检查每一类在数据集中是否都有足够代表样本。
- hardware budget: 主要是统计分析和人工审查成本。
- prerequisites:
  - F/F1. 数据类型/预训练语料
  - F/F1. 数据类型/Eval datasets
- core metrics:
  - scenario coverage
  - class coverage
  - long-tail coverage
- next:
  - F/F6. 数据在系统中的角色/预训练数据 → 决定基础能力上限
  - F/F3. 数据工程/数据增广

#### 正确性

- pathKey: `F/F4. 数据质量/正确性`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F4-alxjoh-1.json`
- status: draft
- definition: 正确性关注样本内容、标签、答案、工具参数或引用事实是否真的对，不只是格式看起来合理。
- importance: 错误数据会把模型直接推向错误方向，尤其在偏好优化、工具调用和 verifier 训练里，错误监督信号的破坏性很高。
- minimum demo: 从数据集中随机抽样，人工核对事实、标签和执行结果，统计真正的错误比例。
- hardware budget: 主要是人工审核和辅助校验成本。
- prerequisites:
  - F/F3. 数据工程/过滤
  - M/M2. 应用级评测/最终答案正确性
- core metrics:
  - label accuracy
  - fact error rate
  - tool result validity
- next:
  - F/F7. 后训练数据构建/Reward / verifier data
  - H/H3. 偏好优化与对齐/Reward modeling

#### 一致性

- pathKey: `F/F4. 数据质量/一致性`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F4-alxjoh-1.json`
- status: draft
- definition: 一致性指相同规则、相似样本和不同标注者之间是否遵循同一套口径，避免同类样本被给出冲突答案或冲突标签。
- importance: 一致性差会让模型学到互相矛盾的监督信号，也会让评测结果难以解释。
- minimum demo: 让两位标注者独立标一批样本，比较冲突率，并检查同类工具调用或偏好样本是否遵循统一标准。
- hardware budget: 主要是复标和仲裁成本。
- prerequisites:
  - F/F3. 数据工程/标注
  - F/F1. 数据类型/Agent traces
- core metrics:
  - agreement rate
  - schema consistency
  - format consistency
- next:
  - M/M3. Agent 级评测/Trace grading
  - F/F1. 数据类型/偏好数据

#### 多样性

- pathKey: `F/F4. 数据质量/多样性`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F4-alxjoh-1.json`
- status: draft
- definition: 多样性衡量样本是否来自足够丰富的表达方式、任务模式、输入长度、用户风格和错误分布，而不是高度同质化。
- importance: 没有多样性，模型往往只会学到模板化解法，在真实输入稍有变化时就退化。
- minimum demo: 对样本按来源、风格、长度和场景分桶，检查是否过度集中在少数模板里。
- hardware budget: 主要是统计和抽样成本。
- prerequisites:
  - F/F3. 数据工程/去重
  - F/F3. 数据工程/数据增广
- core metrics:
  - source diversity
  - style diversity
  - template concentration
- next:
  - F/F1. 数据类型/预训练语料
  - F/F4. 数据质量/覆盖度

#### 噪声控制

- pathKey: `F/F4. 数据质量/噪声控制`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F4-alxjoh-1.json`
- status: draft
- definition: 噪声控制关注如何识别和限制低质样本、无关样本、错标样本、格式污染和执行失败记录的比例。
- importance: 少量高质量数据通常比大量噪声数据更有用；噪声会稀释有效信号，还会引入难以察觉的训练偏差。
- minimum demo: 抽样标记一批样本中的无效、错标和低质比例，并基于规则或模型做一轮噪声过滤前后对比。
- hardware budget: 主要消耗在抽样检查和过滤规则维护上。
- prerequisites:
  - F/F3. 数据工程/清洗
  - F/F3. 数据工程/过滤
- core metrics:
  - noise rate
  - low-quality removal rate
- next:
  - F/F3. 数据工程/过滤
  - F/F4. 数据质量/正确性

#### 分布匹配

- pathKey: `F/F4. 数据质量/分布匹配`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F4-alxjoh-1.json`
- status: draft
- definition: 分布匹配关注训练、验证、测试、线上流量和目标任务之间的样本分布是否一致，避免用不代表真实世界的数据做出错误结论。
- importance: 很多离线指标和线上效果脱节，本质就是训练或评测数据分布和真实使用分布不匹配。
- minimum demo: 比较训练集、评测集和线上日志在问题类型、长度、用户群体和成功率上的分布差异。
- hardware budget: 主要是统计和监控分析成本。
- prerequisites:
  - F/F3. 数据工程/切分
  - F/F1. 数据类型/用户行为日志
- core metrics:
  - distribution drift
  - train-serving skew
  - segment gap
- next:
  - F/F7. 后训练数据构建/Train / validation / test split
  - F/F7. 后训练数据构建/Contamination / leakage checks
  - M/M4. 在线评测/Business KPIs

#### 偏差与公平性

- pathKey: `F/F4. 数据质量/偏差与公平性`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F4-alxjoh-1.json`
- status: draft
- definition: 偏差与公平性关注数据是否系统性偏向某些群体、来源、语言、地区或价值取向，以及这种偏差是否会在模型行为里被放大。
- importance: 很多所谓模型偏见，其根源并不只在算法，而是在训练和评测数据对不同群体覆盖不足或标签标准本身不公平。
- minimum demo: 按用户群体、语言或场景切片比较模型或数据质量指标，查看是否存在稳定差异。
- hardware budget: 主要是切片分析、人审和治理成本。
- prerequisites:
  - F/F4. 数据质量/覆盖度
  - C/C4. 共性问题/偏差 / 方差
- core metrics:
  - segment disparity
  - fairness gap
  - representation balance
- next:
  - M/M8. 对抗测试与审计/Red teaming
  - F/F5. 数据治理/审计

#### 时效性

- pathKey: `F/F4. 数据质量/时效性`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F4-alxjoh-1.json`
- status: draft
- definition: 时效性衡量数据是否足够新、是否能及时反映知识变化、产品变化和用户行为变化，避免系统长期依赖过期样本。
- importance: 对文档问答、工具调用、业务规则和线上反馈来说，旧数据往往不是“有点过时”，而是直接误导系统。
- minimum demo: 为知识库或日志数据记录更新时间，检查回答错误是否集中在最近变更过但尚未同步的数据上。
- hardware budget: 主要是更新管线和监控成本。
- prerequisites:
  - F/F3. 数据工程/流式处理
  - F/F1. 数据类型/知识库文档
- core metrics:
  - freshness lag
  - stale data rate
- next:
  - F/F6. 数据在系统中的角色/知识库文档 → 决定 RAG 质量
  - M/M4. 在线评测/A/B tests

### F5. 数据治理

- pathKey: `F/F5. 数据治理`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-F.json`
- status: draft
- definition: 数据治理回答的是“这些数据能不能用、谁能用、能保留多久、如何审计与追责”，它把工程和质量之外的权限、合规、保留、透明性要求嵌入数据生命周期。
- importance: 数据工程保证能处理，数据质量保证够好，数据治理保证这件事在法律、组织和安全边界上站得住。没有治理，哪怕模型效果再好，也可能因为 license、隐私、权限或审计问题无法长期上线。
- minimum demo: 给一批训练或知识库数据加上 source、license、是否含 PII、保留期限、访问角色和审计记录字段，并定义最小访问与导出流程。
- hardware budget: 硬件不是重点，重点成本在流程设计、权限系统、审计保留和合规审核。
- prerequisites:
  - F/F3. 数据工程/版本管理
  - M/M7. 隐私与合规
  - J/J8. 安全与权限
- core metrics:
  - audit coverage
  - PII leak rate
  - access violation count
  - retention compliance
- toolchain:
  - access control
  - audit logs
  - dataset policy docs
  - retention workflows
- failure signs:
  - 团队说不清某批数据是否有使用权
  - 训练、评测和导出流程共享同一套高权限访问
  - 数据删不掉、查不清、导出无痕迹
  - 线上反馈直接进入训练回路但没有隐私筛查
- next:
  - F/F5. 数据治理/License
  - F/F5. 数据治理/隐私
  - F/F5. 数据治理/PII
  - F/F5. 数据治理/数据保留
  - F/F5. 数据治理/权限
  - F/F5. 数据治理/数据卡 / model card 对齐
  - F/F5. 数据治理/审计

#### License

- pathKey: `F/F5. 数据治理/License`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F5-1dxq4c2-1.json`
- status: draft
- definition: License 约束数据是否可以采集、存储、训练、再分发或商用，是数据可用性的第一道法律边界。
- importance: 如果 license 不清楚，后续训练和产品上线都存在根本风险；很多数据工程问题最终会回到“这批数据到底能不能用”。
- minimum demo: 为一批采集到的文档补齐 source 和 license 字段，并把未知 license 的样本单独隔离。
- hardware budget: 几乎没有硬件成本，重点在人工梳理和流程约束。
- prerequisites:
  - F/F3. 数据工程/采集
  - I/I2. 知识库构建/数据接入
- core metrics:
  - license coverage
  - unknown license rate
- next:
  - F/F5. 数据治理/数据卡 / model card 对齐
  - M/M7. 隐私与合规/Regulatory compliance

#### 隐私

- pathKey: `F/F5. 数据治理/隐私`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F5-1dxq4c2-1.json`
- status: draft
- definition: 隐私关注数据处理过程中是否遵循最小必要、目的限制和合法使用原则，避免把真实用户信息无限制地带入训练、评测和分析流程。
- importance: 隐私治理不是附属合规文书，而是决定线上反馈、日志和知识资产能否安全进入 AI 系统闭环的前提。
- minimum demo: 为用户日志加上脱敏、目的说明和访问边界，确保进入分析或训练前先经过筛查。
- hardware budget: 重点是流程和审核成本。
- prerequisites:
  - F/F1. 数据类型/用户行为日志
  - M/M7. 隐私与合规/PII handling
- core metrics:
  - privacy incident count
  - de-identification coverage
- next:
  - F/F5. 数据治理/PII
  - M/M7. 隐私与合规/Governance policies

#### PII

- pathKey: `F/F5. 数据治理/PII`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F5-1dxq4c2-1.json`
- status: draft
- definition: PII 指能直接或间接识别个人身份的信息，如姓名、手机号、邮箱、证件号、精确地址或与其他字段联结后可识别个人的组合信息。
- importance: PII 是最常见、最容易被忽略的数据风险源。它不仅影响合规，还会直接决定训练集、日志和知识库是否能被复用。
- minimum demo: 对一批用户反馈或工单文本做 PII 检测，统计命中类型并决定删除、掩码或隔离策略。
- hardware budget: 多是检测和审核成本。
- prerequisites:
  - F/F5. 数据治理/隐私
  - M/M7. 隐私与合规/PII handling
- core metrics:
  - PII detection recall
  - PII residue rate
- next:
  - F/F3. 数据工程/过滤
  - M/M7. 隐私与合规/Audit logs

#### 数据保留

- pathKey: `F/F5. 数据治理/数据保留`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F5-1dxq4c2-1.json`
- status: draft
- definition: 数据保留定义不同类型数据要保留多久、何时归档、何时删除以及删除后是否仍保留最小审计证据，核心是在可追溯和最小暴露面之间做约束。
- importance: 没有保留策略，日志、trace、缓存和训练产物会无限堆积，既扩大泄露面，也让团队根本说不清哪些数据还应该存在。很多隐私和合规问题并不是“收集错了”，而是“留太久了”。
- minimum demo: 为训练集、用户日志、agent trace 和审计记录分别定义保留周期、归档介质和删除责任人，并实际验证一批过期样本能被清理或转冷存。
- hardware budget: 会影响存储和归档成本，但本质是治理问题。
- prerequisites:
  - F/F3. 数据工程/版本管理
  - M/M7. 隐私与合规/Data retention
- core metrics:
  - retention compliance
  - expired data backlog
  - deletion verification rate
- next:
  - F/F5. 数据治理/审计
  - M/M7. 隐私与合规/Data retention

#### 权限

- pathKey: `F/F5. 数据治理/权限`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F5-1dxq4c2-1.json`
- status: draft
- definition: 权限控制谁可以读、写、导出、标注、删除或发布数据，是防止高风险样本被随意访问和传播的组织边界。
- importance: 训练、评测、知识库和线上日志往往共享基础设施，如果权限边界不清，最容易发生越权访问和敏感数据外泄。
- minimum demo: 把原始日志、脱敏数据、训练导出数据分成不同访问层级，并为每类数据定义最小权限角色。
- hardware budget: 主要是系统和流程成本。
- prerequisites:
  - A/A2. 计算机基础/软件工程/密钥与权限管理
  - J/J8. 安全与权限/Permission scopes
  - M/M7. 隐私与合规/Access control
- core metrics:
  - access violation count
  - least-privilege coverage
- next:
  - J/J8. 安全与权限/Sensitive action approval
  - F/F5. 数据治理/审计

#### 数据卡 / model card 对齐

- pathKey: `F/F5. 数据治理/数据卡 / model card 对齐`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F5-1dxq4c2-1.json`
- status: draft
- definition: 数据卡 / model card 对齐是把数据来源、用途、限制、风险和版本信息系统化记录，并和模型说明文档保持一致，帮助团队知道模型到底吃过什么、没吃过什么。
- importance: 很多组织内知识丢失，不是因为数据不存在，而是因为没人写清楚数据和模型之间的映射关系。
- minimum demo: 为一批 SFT 或 RAG 数据写一页数据卡，说明来源、用途、限制、保留和已知风险，并在模型说明里引用它。
- hardware budget: 几乎没有硬件成本。
- prerequisites:
  - F/F3. 数据工程/版本管理
  - F/F1. 数据类型
- core metrics:
  - documentation completeness
  - traceability coverage
- next:
  - F/F5. 数据治理/审计
  - M/M7. 隐私与合规/Governance policies

#### 审计

- pathKey: `F/F5. 数据治理/审计`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F5-1dxq4c2-1.json`
- status: draft
- definition: 审计要求关键数据操作可追踪、可回放、可解释，包括谁接入了数据、谁导出了数据、谁修改了规则、谁批准了高风险动作。
- importance: 没有审计，很多治理措施都只是纸面规则；出了事故无法复盘，也无法证明组织实际执行过什么。
- minimum demo: 为数据导出、权限变更和删除动作保留日志，并能按数据版本或操作人回查。
- hardware budget: 主要是日志存储和检索成本。
- prerequisites:
  - F/F3. 数据工程/版本管理
  - M/M7. 隐私与合规/Audit logs
  - N/N3. 决策变量/是否需要可审计流程
- core metrics:
  - audit log completeness
  - incident traceability
- next:
  - M/M8. 对抗测试与审计/Incident review
  - M/M8. 对抗测试与审计/Postmortem

### F6. 数据在系统中的角色

- pathKey: `F/F6. 数据在系统中的角色`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-F.json`
- status: draft
- definition: 数据在系统中的角色描述的是不同类型的数据如何塑造模型和系统行为：有些决定基础能力上限，有些决定输出风格，有些决定对齐方向，有些决定 Agent 行为、RAG 质量和评测可信度。
- importance: 很多讨论把数据笼统地说成“训练数据”，但真正做系统时，预训练语料、SFT 数据、偏好数据、工具 traces、eval set 和知识库文档承担的是完全不同的职责。把角色分清，才能知道该补哪类数据，而不是盲目继续堆量。
- minimum demo: 为一个实际系统列一张表，分别写出预训练数据、SFT 数据、偏好数据、工具 traces、评测集和知识库文档对结果的具体影响，并标注当前瓶颈主要在哪一类。
- hardware budget: 更多影响后续训练、推理和评测预算分配，而不是单独消耗硬件。
- prerequisites:
  - F/F1. 数据类型
  - H/H2. 监督式后训练/SFT
  - M/M1. 模型级评测
- core metrics:
  - capability gain attribution
  - behavior stability
  - evaluation reliability
- toolchain:
  - dataset registry
  - eval dashboards
  - experiment attribution notes
- failure signs:
  - 出现问题时只会说“数据不够”，但说不清是哪类数据不够
  - 把知识库文档、训练集和评测集混成一个大池子
  - 优化了错误的数据角色，导致系统收益很小
- next:
  - F/F6. 数据在系统中的角色/预训练数据 → 决定基础能力上限
  - F/F6. 数据在系统中的角色/SFT 数据 → 决定任务风格与稳定性
  - F/F6. 数据在系统中的角色/偏好/奖励数据 → 决定对齐方向
  - F/F6. 数据在系统中的角色/工具 traces → 决定 Agent 行为优化
  - F/F6. 数据在系统中的角色/Eval datasets → 决定可重复评测
  - F/F6. 数据在系统中的角色/知识库文档 → 决定 RAG 质量

#### 预训练数据 → 决定基础能力上限

- pathKey: `F/F6. 数据在系统中的角色/预训练数据 → 决定基础能力上限`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F6-f342b5-1.json`
- status: draft
- definition: 预训练数据主要影响模型的通用表示、知识覆盖和基础语言/视觉/多模态能力，是能力上限最底层的来源。
- importance: 如果基础能力上限不够，后续再用少量后训练数据也很难补出真正稳定的通才能力。
- minimum demo: 比较不同规模或不同覆盖面的预训练语料对迁移任务的影响。
- hardware budget: 真正放大成本的是预训练本身。
- prerequisites:
  - F/F1. 数据类型/预训练语料
  - D/D3. 训练范式/预训练
- core metrics:
  - knowledge coverage
  - transfer quality
- next:
  - D/D6. 规模化要素/数据规模
  - F/F4. 数据质量/覆盖度

#### SFT 数据 → 决定任务风格与稳定性

- pathKey: `F/F6. 数据在系统中的角色/SFT 数据 → 决定任务风格与稳定性`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F6-f342b5-1.json`
- status: draft
- definition: SFT 数据主要塑造助手的任务适配能力、输出格式、语气风格和常见流程的稳定执行方式。
- importance: 很多“模型听不懂需求”或“输出格式不稳定”的问题，根源不在预训练，而在 SFT 数据覆盖和口径不够稳。
- minimum demo: 对同一基础模型分别使用不同风格的 SFT 样本微调，比较回答风格和格式一致性。
- hardware budget: 中小规模即可见到明显效果。
- prerequisites:
  - F/F1. 数据类型/指令微调数据
  - H/H2. 监督式后训练/SFT
- core metrics:
  - format consistency
  - instruction following
- next:
  - F/F7. 后训练数据构建/Instruction crafting
  - F/F4. 数据质量/一致性

#### 偏好/奖励数据 → 决定对齐方向

- pathKey: `F/F6. 数据在系统中的角色/偏好/奖励数据 → 决定对齐方向`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F6-f342b5-1.json`
- status: draft
- definition: 偏好和奖励数据决定系统把什么行为视为更好、更安全或更符合目标，它们塑造的是方向，而不是单一标准答案。
- importance: 同样一个基础模型，因为偏好和奖励信号不同，最终会形成完全不同的助手风格和风险偏置。
- minimum demo: 为同一批回答给出不同偏好排序标准，观察训练后的行为取向差异。
- hardware budget: 成本主要在标注和审核，而不是训练本身。
- prerequisites:
  - F/F1. 数据类型/偏好数据
  - F/F1. 数据类型/奖励数据
  - H/H3. 偏好优化与对齐/DPO
- core metrics:
  - alignment gain
  - reward fidelity
- next:
  - H/H3. 偏好优化与对齐/RLHF
  - F/F4. 数据质量/正确性

#### 工具 traces → 决定 Agent 行为优化

- pathKey: `F/F6. 数据在系统中的角色/工具 traces → 决定 Agent 行为优化`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F6-f342b5-1.json`
- status: draft
- definition: 工具 traces 记录的是系统如何选工具、如何传参、如何读回结果以及在哪一步失败，它们决定 agent 类系统能否从过程上持续优化，而不只是优化最终文本输出。
- importance: Agent 系统很多问题只会出现在中间步骤里，没有 trace，团队就只能看到“失败了”，却看不到失败发生在哪一跳。
- minimum demo: 对一次工具调用任务保留完整 trace，并用它分析选择错误、参数错误和恢复策略不足。
- hardware budget: 主要是存储和分析成本。
- prerequisites:
  - F/F1. 数据类型/工具调用数据
  - F/F1. 数据类型/Agent traces
  - J/J3. 工具调用/Tool execution
- core metrics:
  - tool success rate
  - trace completeness
  - recovery success rate
- next:
  - M/M3. Agent 级评测/Trace grading
  - J/J3. 工具调用/Tool retries / fallback

#### Eval datasets → 决定可重复评测

- pathKey: `F/F6. 数据在系统中的角色/Eval datasets → 决定可重复评测`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F6-f342b5-1.json`
- status: draft
- definition: Eval datasets 的作用不是让模型变强，而是让团队能稳定复现问题、比较版本并对优化结果建立可信判断。
- importance: 没有独立评测集，团队会不断被训练口径、抽样偏差和记忆污染误导，无法知道系统究竟有没有真实进步。
- minimum demo: 把一套固定评测集接入每轮模型或应用发布，比较结果是否可重复、是否能发现回归。
- hardware budget: 更多是维护和运行评测的成本。
- prerequisites:
  - F/F1. 数据类型/Eval datasets
  - M/M1. 模型级评测
  - M/M2. 应用级评测
- core metrics:
  - reproducibility
  - regression detection rate
- next:
  - F/F7. 后训练数据构建/Contamination / leakage checks
  - F/F3. 数据工程/切分

#### 知识库文档 → 决定 RAG 质量

- pathKey: `F/F6. 数据在系统中的角色/知识库文档 → 决定 RAG 质量`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F6-f342b5-1.json`
- status: draft
- definition: 知识库文档在 RAG 系统里承担的是外部事实来源角色，它们决定系统能否找到、引用并组合出最新、可追溯的答案。
- importance: RAG 质量不只取决于检索器和模型，底层文档是否新、是否干净、是否切得合理，往往决定最终 groundedness 上限。
- minimum demo: 对同一组问题分别使用未经清洗和经过去重切块的知识库文档做 RAG，对比命中率和答案可引用性。
- hardware budget: 主要花在 parsing、索引和更新管线。
- prerequisites:
  - F/F1. 数据类型/知识库文档
  - I/I2. 知识库构建/Chunking strategy
  - I/I3. RAG 管线/Context packing
- core metrics:
  - retrieval hit rate
  - citation usefulness
  - freshness lag
- next:
  - I/I2. 知识库构建/Vector store
  - F/F4. 数据质量/时效性

### F7. 后训练数据构建

- pathKey: `F/F7. 后训练数据构建`
- node type: `module`
- stage: 02 任务域与数据
- detail source: `data/details/domain-F.json`
- status: draft
- definition: 后训练数据构建关注的是：为了做 SFT、偏好优化、RFT 或 verifier 训练，数据应该如何切分、编写、组织、多轮化、加权、过滤和评分。它不是训练算法本身，而是把原始样本变成可直接用于后训练的样本结构。
- importance: 很多后训练效果差，不是算法选错，而是数据构建方式出了问题：指令写得含糊、多轮上下文不真实、偏好数据质量不稳、污染检查缺失、grader rubric 不一致。把这层做扎实，后训练方法之间的比较才有意义。
- minimum demo: 选一个窄任务，构建一套小型后训练数据集：先做 train/validation/test split，再写指令模板，加入少量多轮样本，决定哪些 token 需要参与损失，补上一批偏好或 rubric 评分数据，最后检查污染与泄漏。
- hardware budget: 主要成本在人审、数据设计和重复迭代，而不是算力；真正高算力消耗发生在训练阶段，不在数据构建阶段。
- prerequisites:
  - F/F1. 数据类型/指令微调数据
  - F/F1. 数据类型/偏好数据
  - F/F1. 数据类型/奖励数据
  - H/H2. 监督式后训练/SFT
- core metrics:
  - template clarity
  - label reliability
  - leakage rate
  - grader agreement
- toolchain:
  - dataset templates
  - annotation workflows
  - contamination checks
  - grader rubrics
- failure signs:
  - 训练收敛了，但风格和任务行为仍然混乱
  - 偏好优化收益不稳定，甚至引入副作用
  - 验证集看起来很好，线上或外部评测却复现不了
  - 团队说不清一条样本里哪些 token 在被学习、哪些只是上下文
- next:
  - F/F7. 后训练数据构建/Train / validation / test split
  - F/F7. 后训练数据构建/Instruction crafting
  - F/F7. 后训练数据构建/Multi-turn examples
  - F/F7. 后训练数据构建/Weight masking
  - F/F7. 后训练数据构建/Preference data
  - F/F7. 后训练数据构建/Reward / verifier data
  - F/F7. 后训练数据构建/Contamination / leakage checks
  - F/F7. 后训练数据构建/Rubric-based graders for RFT

#### Train / validation / test split

- pathKey: `F/F7. 后训练数据构建/Train / validation / test split`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F7-t9zgbv-1.json`
- status: draft
- definition: 后训练里的 split 不只是随机切分，而是要确保任务、场景、用户和模板在 train、validation、test 之间边界清楚，避免模板和答案泄漏。
- importance: 如果切分不严，后训练实验的提升很可能只是记住了验证集模式，而不是学会了任务。
- minimum demo: 对一批 SFT 样本按任务和来源切分，而不是单纯随机切分，再检查模板和答案是否跨集合复现。
- hardware budget: 几乎没有额外硬件成本。
- prerequisites:
  - C/C1. 问题设定/训练集 / 验证集 / 测试集
  - F/F3. 数据工程/切分
- core metrics:
  - split purity
  - template leakage rate
- next:
  - F/F7. 后训练数据构建/Contamination / leakage checks
  - F/F6. 数据在系统中的角色/Eval datasets → 决定可重复评测

#### Instruction crafting

- pathKey: `F/F7. 后训练数据构建/Instruction crafting`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F7-t9zgbv-1.json`
- status: draft
- definition: Instruction crafting 是把任务目标、约束、输入字段、上下文和期望输出写成模型容易学习的样本模板，而不是把原始文档直接喂给模型。
- importance: 同样的原始内容，因为指令模板写法不同，模型会学到完全不同的风格、边界和稳定性。
- minimum demo: 为同一任务写两种不同风格的 instruction 模板，比较模型输出格式和遵循程度。
- hardware budget: 主要是数据设计和试错成本。
- prerequisites:
  - F/F1. 数据类型/指令微调数据
  - H/H2. 监督式后训练/SFT
- core metrics:
  - template clarity
  - instruction adherence
- next:
  - F/F7. 后训练数据构建/Multi-turn examples
  - F/F6. 数据在系统中的角色/SFT 数据 → 决定任务风格与稳定性

#### Multi-turn examples

- pathKey: `F/F7. 后训练数据构建/Multi-turn examples`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F7-t9zgbv-1.json`
- status: draft
- definition: Multi-turn examples 把单轮问答扩展成多轮对话、澄清、追问、工具往返或上下文延续，让模型学会在过程里保持状态和边界。
- importance: 很多真实助手任务不是一次输入一次输出，多轮样本决定模型是否会澄清、是否能承接历史以及是否会在长流程中漂移。
- minimum demo: 把单轮样本改写成包含澄清问题和后续跟进的两到三轮对话，观察模型在上下文延续上的变化。
- hardware budget: 主要是编写和审核成本。
- prerequisites:
  - F/F7. 后训练数据构建/Instruction crafting
  - F/F2. 数据形态/交互轨迹
- core metrics:
  - dialogue coherence
  - state carryover quality
- next:
  - F/F1. 数据类型/Agent traces
  - J/J3. 工具调用/Tool result injection

#### Weight masking

- pathKey: `F/F7. 后训练数据构建/Weight masking`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F7-t9zgbv-1.json`
- status: draft
- definition: Weight masking 指在训练样本里只让一部分 token 参与损失，例如只学习 assistant 回复，不学习 system、user 或某些上下文字段。
- importance: 如果不区分哪些 token 应该学习，模型可能把上下文噪声、示例前缀甚至标注说明也当作目标行为记住。
- minimum demo: 比较“全部 token 都参与损失”和“只对回答部分计算损失”两种设置的训练行为差异。
- hardware budget: 几乎没有额外硬件成本，但会影响训练效果。
- prerequisites:
  - F/F7. 后训练数据构建/Instruction crafting
  - H/H2. 监督式后训练/SFT
- core metrics:
  - target token ratio
  - format leakage rate
- next:
  - F/F4. 数据质量/一致性
  - F/F6. 数据在系统中的角色/SFT 数据 → 决定任务风格与稳定性

#### Preference data

- pathKey: `F/F7. 后训练数据构建/Preference data`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F7-t9zgbv-1.json`
- status: draft
- definition: 这里的 preference data 特指已构造成对或可排序的后训练样本，明确表达哪个回答更好以及为什么更好。
- importance: 偏好优化不依赖单一标准答案，关键在于比较信号是否稳定、是否覆盖真实冲突场景。
- minimum demo: 针对同一问题准备两到三个候选回答，并用统一标准给出偏好顺序。
- hardware budget: 主要是标注和审核成本。
- prerequisites:
  - F/F1. 数据类型/偏好数据
  - H/H3. 偏好优化与对齐/DPO
- core metrics:
  - pair quality
  - preference agreement
- next:
  - H/H3. 偏好优化与对齐/Online DPO
  - F/F4. 数据质量/正确性

#### Reward / verifier data

- pathKey: `F/F7. 后训练数据构建/Reward / verifier data`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F7-t9zgbv-1.json`
- status: draft
- definition: Reward / verifier data 是为 reward model、grader 或 verifier 准备的评分样本，强调打分标准、评分维度和可复核性。
- importance: 一旦 reward 或 verifier 数据质量不稳，系统会学会优化错误目标，甚至出现明显的奖励黑客行为。
- minimum demo: 为一批回答按 rubric 打分，并比较不同评分者或不同 verifier 之间的一致性。
- hardware budget: 主要在审核和打分流程。
- prerequisites:
  - F/F1. 数据类型/奖励数据
  - H/H3. 偏好优化与对齐/Reward modeling
  - B/B9. 经典 AI 与现代 AI 的连接点/搜索 → 推理模型 / tree search / verifier
- core metrics:
  - grader agreement
  - reward fidelity
- next:
  - H/H3. 偏好优化与对齐/RFT
  - F/F7. 后训练数据构建/Rubric-based graders for RFT

#### Contamination / leakage checks

- pathKey: `F/F7. 后训练数据构建/Contamination / leakage checks`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F7-t9zgbv-1.json`
- status: draft
- definition: 污染与泄漏检查用于确认训练样本没有把验证集、测试集、基准题或线上回归集的信息提前带进训练过程。
- importance: 这是后训练实验可信度的底线；如果污染没控制住，后面的所有指标都失去解释力。
- minimum demo: 对训练样本和评测样本做重复、近重复和模板重复检查，并单独标记高风险样本。
- hardware budget: 主要是检索和比对计算成本。
- prerequisites:
  - F/F7. 后训练数据构建/Train / validation / test split
  - C/C4. 共性问题/数据泄漏
- core metrics:
  - contamination rate
  - duplicate overlap
- next:
  - M/M1. 模型级评测
  - F/F6. 数据在系统中的角色/Eval datasets → 决定可重复评测

#### Rubric-based graders for RFT

- pathKey: `F/F7. 后训练数据构建/Rubric-based graders for RFT`
- node type: `concept-group`
- detail source: `data/details/leaves-F-F7-t9zgbv-1.json`
- status: draft
- definition: Rubric-based graders for RFT 是把“好答案”的标准拆成可判分维度，让模型或人工 grader 按 rubric 对样本打分，再把分数用于 RFT 或 verifier 流程。
- importance: 没有明确 rubric，RFT 往往会退化成模糊偏好信号；rubric 足够清楚时，系统才能围绕具体目标做优化。
- minimum demo: 为一个任务写出 3 到 5 个评分维度，例如正确性、完整性、格式和安全性，并用它给样本打分。
- hardware budget: 主要是 rubric 设计和抽检成本。
- prerequisites:
  - F/F7. 后训练数据构建/Reward / verifier data
  - H/H3. 偏好优化与对齐/RFT
- core metrics:
  - rubric clarity
  - grader agreement
  - score stability
- next:
  - M/M2. 应用级评测/最终答案正确性
  - H/H3. 偏好优化与对齐/GRPO

## G. LLM 核心机制

- pathKey: `G`
- node type: `domain`
- stage: 03 大模型系统
- graph summary: HF 的 LLM 课程把 LLM 学习路径组织为 Transformers、fine-tuning、datasets、tokenizers、reasoning models；HF Tokenizers 文档把 tokenizer 视为完整管线；OpenAI 在 agent 构建里又把模型选择、推理能力、状态与工具结合放在核心位置。
- relation notes:
  - LLM 核心机制 是 模型适配、后训练与对齐、检索、记忆与外部知识、AI 应用工程、Agent 系统 的核心模型层。
  - LLM 核心机制 与 数据层（横切层） 的关系：tokenizer、语料、上下文窗口、任务分布共同决定 LLM 能力边界。
  - LLM 核心机制 与 检索、记忆与外部知识 的关系：LLM 负责生成与决策，检索、记忆与外部知识 层负责给它提供外部知识。
  - LLM 核心机制 与 Agent 系统 的关系：Agent 不是替代 LLM，而是用 LLM 作为认知引擎。
  - 推理模型与模型路由 负责回答“什么问题该交给 reasoning model、什么问题该交给通用 GPT、什么时候要做模型路由”。
- detail source: `data/details/domain-G.json`
- status: completed
- definition: LLM 核心机制关注的是：文本如何被切成 token 并映射为向量，模型如何在 Transformer 前向计算中用注意力与前馈层把上下文压成下一 token 的概率分布，以及系统如何通过解码策略、上下文窗口、外部记忆与模型路由，把一次次前向计算组织成可用的对话、生成、工具调用与推理过程。它回答的是“模型为什么会这样输出”，而不只是“模型大概能做什么”。
- importance: 这是理解质量、成本、时延、稳定性之间权衡的基础层。很多工程问题——幻觉、长上下文退化、格式不稳、工具误用、推理模型过慢或过贵——都不是应用层的偶然现象，而是由 token 表示、注意力计算、记忆边界、解码设置和路由策略共同决定。掌握本域后，才能把 prompt、RAG、工具、评测和部署优化连成闭环，而不是只靠经验试错。
- minimum demo: 准备 10～20 条小样本任务，覆盖事实问答、信息抽取和结构化输出。对同一模型做四组对照：1）greedy 与 sampling；2）短上下文与长上下文；3）无外部资料与加入一段可靠资料；4）自由生成与结构化生成。记录输入/输出 token、首 token 延迟、总时延、格式成功率、正确率或幻觉率，并复盘失败究竟来自模型知识、上下文、解码还是路由选择。
- hardware budget: 学习本域不需要训练级硬件。走云 API 几乎没有本地算力门槛；若做本地最小实验，1B～3B 小模型配合 CPU + 8～16GB 内存已足够覆盖 tokenizer、采样、上下文和结构化输出实验。若想更流畅地体验 7B～8B 量化推理，通常需要约 16GB 以上内存或一张中端显卡；长上下文、多轮对话和 KV cache 会明显增加显存或内存占用。
- examples:
  - 同一道抽取题在 greedy 下稳定，但把 temperature 调高后开始出现字段缺失，说明解码策略会直接影响可用性。
  - 加入一段可靠背景资料后回答变准，移除该段后又回到过期知识，说明参数记忆与上下文记忆是两套来源。
  - 上下文从几千 token 增到数万 token 后，答案更慢且更容易漏约束，体现长上下文对注意力与质量的压力。
  - 要求输出 JSON 时，结构化生成通常比自由生成后再用正则修补更稳，说明生成约束本身是机制的一部分。
  - 同一长对话里后续轮次明显更快，而前缀失效后时延跳升，常见原因就是 KV cache 是否被有效复用。
- pitfalls:
  - 把“模型会回答”误解成“模型真正理解且始终可靠”。
  - 把参数记忆、上下文记忆、会话记忆和外部记忆混为一谈。
  - 只看单次 demo 效果，不做温度、上下文长度和任务分布上的对照实验。
  - 忽视 token 成本、KV cache 和长上下文带来的时延与显存开销。
  - 把推理模型当作所有任务的默认选择，忽略简单任务的过度计算。
  - 把幻觉完全归咎于 prompt，而不检查检索质量、结构约束和解码设置。
- core metrics:
  - 任务正确率 / grounded accuracy
  - 幻觉率 / unsupported claim rate
  - 格式有效率 / schema adherence
  - 首 token 延迟（TTFT）
  - 总时延与吞吐（tokens/s）
  - 输入/输出 token 与单次调用成本
  - 长上下文下的质量衰减
  - 多次采样一致性 / 输出方差
  - 工具调用成功率 / 路由命中率
- toolchain:
  - Tokenizer / chat template 可视化工具
  - 模型 API Playground（对比 temperature、top-p、stop、structured output）
  - Transformers / Ollama / vLLM 等本地推理工具
  - Notebook、脚本或 eval harness 用于批量对照实验
  - 日志与 tracing 工具（记录 token、latency、tool calls、失败样本）
- failure signs:
  - 轻微改 prompt 或采样参数就出现大幅波动，说明行为边界不清。
  - 上下文一长就遗漏前文约束、引用错位或自相矛盾。
  - 输出重复、早停、截断，或无法稳定满足结构化格式。
  - 调用外部工具后答案反而变差，说明路由、工具选择或结果整合存在问题。
  - 时延和成本显著上升，但质量收益很小，说明模型、解码或路由配置不匹配任务。
  - 同类任务在不同输入分布上表现断崖式下降，说明对训练分布或模板过拟合。
- next:
  - G/G1. 语言建模基础
  - G/G2. Transformer 机制
  - G/G3. 上下文与记忆
  - G/G4. 生成与解码
  - G/G5. 能力面
  - G/G6. 局限面
  - G/G7. 模型类型细分
  - G/G8. 推理模型与模型路由

### G1. 语言建模基础

- pathKey: `G/G1. 语言建模基础`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-G.json`
- status: draft
- definition: 语言建模基础解释了文本如何被表示成 token 和向量、位置信息如何被编码，以及模型如何把下一 token 预测组织成完整语言生成过程。
- importance: 这是理解 tokenizer、上下文成本、结构化输出稳定性和长上下文边界的共同入口。
- minimum demo: 对同一段文本依次观察 token 化、embedding、位置编码和 next-token 预测输出，建立从字符串到概率分布的直觉。
- prerequisites:
  - A/A1. 数学基础/线性代数
  - A/A1. 数学基础/概率统计
- core metrics:
  - token efficiency
  - next-token accuracy
  - round-trip fidelity
- next:
  - G/G1. 语言建模基础/Token
  - G/G1. 语言建模基础/Vocabulary
  - G/G1. 语言建模基础/Embedding
  - G/G1. 语言建模基础/Positional information
  - G/G1. 语言建模基础/Next-token prediction
  - G/G1. 语言建模基础/Tokenization pipeline
  - G/G1. 语言建模基础/Token efficiency

#### Token

- pathKey: `G/G1. 语言建模基础/Token`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G1-qqrpxv-1.json`
- status: draft
- definition: Token 是模型处理文本时的基本离散单位，可以对应字符片段、词片段、符号或特殊控制标记。
- importance: 理解 token 才能理解上下文长度、成本和模型真正看到的输入是什么。
- minimum demo: 把一段文本 token 化并逐个查看 token 与原文本片段的对应关系。
- prerequisites:
  - G/G1. 语言建模基础/Tokenization pipeline
- core metrics:
  - tokens per input
  - token boundary stability
- next:
  - G/G1. 语言建模基础/Vocabulary
  - G/G1. 语言建模基础/Embedding

#### Vocabulary

- pathKey: `G/G1. 语言建模基础/Vocabulary`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G1-qqrpxv-1.json`
- status: draft
- definition: Vocabulary 是 tokenizer 可识别 token 的全集，决定哪些片段能被高效表示、哪些会被拆得很碎。
- importance: 词表设计直接影响多语言效率、代码表示成本和结构化文本的稳定性。
- minimum demo: 查看一个 tokenizer 的词表并比较同一文本在不同词表下的 token 长度差异。
- prerequisites:
  - G/G1. 语言建模基础/Token
- core metrics:
  - coverage
  - token efficiency
- next:
  - G/G1. 语言建模基础/Token efficiency
  - G/G1. 语言建模基础/Embedding

#### Tokenization pipeline

- pathKey: `G/G1. 语言建模基础/Tokenization pipeline`
- node type: `concept-group`
- detail source: `data/details/domain-G.json`
- status: draft
- definition: Tokenizer 不是单个算法名，而是一条把原始文本转换成 token ids 的完整流水线：规范化、切分、建模、后处理和解码都在这里发生。
- importance: 这一层直接决定多语言 token 效率、代码长度成本、chat template 行为和结构化输出边界。如果 tokenizer 理解不清，后面的上下文长度、成本和模型路由都会悬空。
- minimum demo: 用 Hugging Face Tokenizers 或 tiktoken 对同一段中英混合文本分别做 encode / decode，比较 token 长度、special tokens 和 round-trip 行为。
- hardware budget: CPU 即可完成学习和实验，不需要专门 GPU。
- examples:
  - 同一段中文在不同 tokenizer 下可能产生完全不同的 token 长度和费用。
  - chat template 会把 system / user / assistant role 转成 special tokens，从而影响模型看到的真实上下文。
- pitfalls:
  - 把 tokenizer 简化成“分词器”会漏掉 normalization、post-processing 和 decoding 的关键影响。
  - 只比较上下文窗口大小而不比较 token efficiency，往往会误判真实可容纳的信息量。
- prerequisites:
  - G/G1. 语言建模基础/Token
  - G/G1. 语言建模基础/Vocabulary
  - G/G1. 语言建模基础/Embedding
  - G/G3. 上下文与记忆
- core metrics:
  - token length
  - round-trip fidelity
  - special token correctness
  - multilingual token efficiency
- toolchain:
  - Hugging Face Tokenizers
  - tiktoken
  - Transformers tokenizer configs
- failure signs:
  - decode 后文本丢字符或异常插入 special tokens
  - 代码、JSON、多语言文本的 token 长度异常膨胀
- next:
  - G/G1. 语言建模基础/Tokenization pipeline/Normalization
  - G/G1. 语言建模基础/Token efficiency
  - G/G3. 上下文与记忆

##### Normalization

- pathKey: `G/G1. 语言建模基础/Tokenization pipeline/Normalization`
- node type: `concept`
- detail source: `data/details/leaves-G-G1-1k8i7pf-1.json`
- status: draft
- definition: Normalization 会先把原始文本统一成 tokenizer 期待的标准形式，例如 Unicode 规范化、大小写折叠或空白清理。
- importance: 它决定语义等价字符串是否会被稳定映射成相似 token 序列，也是多语言、OCR、代码拷贝文本中最容易被忽略的误差源。
- minimum demo: 对包含全角/半角、变音符号和不同空白字符的文本做 normalization 前后对比，再观察 token ids 的变化。
- hardware budget: CPU 即可。
- prerequisites:
  - G/G1. 语言建模基础/Tokenization pipeline
- core metrics:
  - normalized text stability
  - token count delta
  - round-trip loss
- toolchain:
  - HF tokenizers normalizers
  - Unicode normalization helpers
- failure signs:
  - 视觉相同的文本被编码成差异极大的 token 序列
  - 多语言或 OCR 数据出现高比例 OOV / 长 token 序列
- next:
  - G/G1. 语言建模基础/Tokenization pipeline

##### Pre-tokenization

- pathKey: `G/G1. 语言建模基础/Tokenization pipeline/Pre-tokenization`
- node type: `concept`
- detail source: `data/details/leaves-G-G1-1k8i7pf-1.json`
- status: draft
- definition: Pre-tokenization 会先按空白、标点或规则把原文本切成较粗粒度片段，为后续子词模型处理做准备。
- importance: 它影响词边界、代码符号处理和多语言文本的切分稳定性。
- minimum demo: 对一段含自然语言、代码和标点的文本查看 pre-tokenization 前后的片段变化。
- prerequisites:
  - G/G1. 语言建模基础/Tokenization pipeline/Normalization
- core metrics:
  - boundary stability
  - segment count
- next:
  - G/G1. 语言建模基础/Tokenization pipeline/Model（BPE / WordPiece / Unigram）

##### Model（BPE / WordPiece / Unigram）

- pathKey: `G/G1. 语言建模基础/Tokenization pipeline/Model（BPE / WordPiece / Unigram）`
- node type: `concept`
- detail source: `data/details/leaves-G-G1-1k8i7pf-1.json`
- status: draft
- definition: 这一层定义具体如何把片段进一步映射成子词 token，例如 BPE、WordPiece 或 Unigram。
- importance: 不同子词模型会影响词表大小、token 长度和对长尾词的表示方式。
- minimum demo: 用几种常见子词算法比较同一文本的切分差异和 token 数。
- prerequisites:
  - G/G1. 语言建模基础/Vocabulary
  - G/G1. 语言建模基础/Tokenization pipeline/Pre-tokenization
- core metrics:
  - token count
  - oov handling
- next:
  - G/G1. 语言建模基础/Tokenization pipeline/Post-processing
  - G/G1. 语言建模基础/Token efficiency

##### Post-processing

- pathKey: `G/G1. 语言建模基础/Tokenization pipeline/Post-processing`
- node type: `concept`
- detail source: `data/details/leaves-G-G1-1k8i7pf-1.json`
- status: draft
- definition: Post-processing 在子词切分后插入 special tokens、拼接 role 信息或补充边界标记，形成模型真正接收的 token 序列。
- importance: 它直接影响 chat template、工具消息和结构化输出的稳定性。
- minimum demo: 检查同一对话在 post-processing 前后 special tokens 的插入位置和顺序。
- prerequisites:
  - G/G1. 语言建模基础/Tokenization pipeline/Model（BPE / WordPiece / Unigram）
  - G/G1. 语言建模基础/Tokenization pipeline/Special tokens / chat templates
- core metrics:
  - special token correctness
  - sequence validity
- next:
  - G/G1. 语言建模基础/Tokenization pipeline/Decoding
  - J/J1. 模型接口层/System / user / tool messages

##### Decoding

- pathKey: `G/G1. 语言建模基础/Tokenization pipeline/Decoding`
- node type: `concept`
- detail source: `data/details/leaves-G-G1-1k8i7pf-1.json`
- status: draft
- definition: Decoding 把 token 序列还原为可读文本，并决定空格、拼接和特殊标记如何被处理。
- importance: 很多看似奇怪的输出问题，实际发生在 decode 这一层，而不是模型本身。
- minimum demo: 对几段包含特殊符号或多语言文本的 token 序列做 decode，观察 round-trip 是否稳定。
- prerequisites:
  - G/G1. 语言建模基础/Tokenization pipeline/Post-processing
- core metrics:
  - round-trip fidelity
  - decode stability
- next:
  - G/G4. 生成与解码/Greedy
  - G/G4. 生成与解码/Sampling

##### Special tokens / chat templates

- pathKey: `G/G1. 语言建模基础/Tokenization pipeline/Special tokens / chat templates`
- node type: `concept`
- detail source: `data/details/leaves-G-G1-1k8i7pf-1.json`
- status: draft
- definition: Special tokens / chat templates 决定 role、分隔符、系统提示和对话历史最终如何落到模型真实可见的 token 序列里。
- importance: 很多“模型突然不听话”并不是 prompt 本身的问题，而是 chat template、role token 或结束标记处理不一致导致的上下文错位。
- minimum demo: 对同一段 system/user 对话分别用不同 chat template 渲染，比较最终 token 序列、special token 插入位置和输出差异。
- hardware budget: CPU 即可。
- prerequisites:
  - G/G1. 语言建模基础/Tokenization pipeline
  - G/G1. 语言建模基础/Tokenization pipeline/Normalization
  - J/J2. 结构化输出
- core metrics:
  - template fidelity
  - role token correctness
  - stop token correctness
- toolchain:
  - Transformers tokenizer chat templates
  - tiktoken
  - prompt inspection scripts
- failure signs:
  - 模型把 system 指令当成普通文本回显
  - tool/result 消息顺序一复杂就出现明显格式漂移
- next:
  - J/J1. 模型接口层
  - J/J2. 结构化输出
  - J/J3. 工具调用

#### Embedding

- pathKey: `G/G1. 语言建模基础/Embedding`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G1-qqrpxv-1.json`
- status: draft
- definition: Embedding 把离散 token id 映射成连续向量，使模型可以在向量空间里学习语义和模式。
- importance: 它是从符号输入过渡到可计算表示的第一步，也是语义相近 token 能共享统计规律的基础。
- minimum demo: 取几个 token 的 embedding，观察它们作为向量进入后续 attention 计算前的形式。
- prerequisites:
  - G/G1. 语言建模基础/Token
  - A/A1. 数学基础/线性代数/向量、矩阵、张量
- core metrics:
  - representation quality
  - embedding dimension
- next:
  - G/G1. 语言建模基础/Positional information
  - I/I1. 表示与检索基础/Embeddings

#### Positional information

- pathKey: `G/G1. 语言建模基础/Positional information`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G1-qqrpxv-1.json`
- status: draft
- definition: Positional information 为 token 注入顺序信息，避免模型只看到一个无序 token 集合。
- importance: 没有位置信息，序列结构、代码顺序和长上下文关系都难以表达。
- minimum demo: 比较打乱顺序前后加入位置信息的差异，理解模型为何能区分先后关系。
- prerequisites:
  - G/G1. 语言建模基础/Embedding
  - G/G2. Transformer 机制/Self-attention
- core metrics:
  - order sensitivity
  - long-context robustness
- next:
  - G/G2. Transformer 机制
  - G/G1. 语言建模基础/Next-token prediction

#### Next-token prediction

- pathKey: `G/G1. 语言建模基础/Next-token prediction`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G1-qqrpxv-1.json`
- status: draft
- definition: Next-token prediction 指模型在给定前文后预测下一个最可能 token 的训练与推理目标。
- importance: 这是大多数 LLM 的统一训练目标，也是各种语言、代码和结构化生成能力的共同基础。
- minimum demo: 给定一段前文，查看模型输出的候选下一 token 分布，并比较不同上下文下的变化。
- prerequisites:
  - G/G1. 语言建模基础/Embedding
  - G/G1. 语言建模基础/Positional information
- core metrics:
  - next-token accuracy
  - perplexity
- next:
  - G/G4. 生成与解码
  - G/G1. 语言建模基础/Token efficiency

#### Token efficiency

- pathKey: `G/G1. 语言建模基础/Token efficiency`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G1-qqrpxv-1.json`
- status: draft
- definition: Token efficiency 关注的是同样的信息量在不同 tokenizer、语言和数据形态下会消耗多少 token，以及这会如何影响成本、上下文窗口和延迟。
- importance: 只看“支持 128k 上下文”没有意义，真正决定能装下多少业务信息的是 token efficiency，尤其是中文、代码、表格和 JSON。
- minimum demo: 拿一段中文、一段代码和一段 JSON，分别统计它们在不同 tokenizer 下的 token 长度，并估算成本和可容纳上下文差异。
- hardware budget: CPU 即可。
- prerequisites:
  - G/G1. 语言建模基础/Tokenization pipeline
  - G/G1. 语言建模基础/Embedding
  - G/G3. 上下文与记忆
- core metrics:
  - tokens per character
  - tokens per line of code
  - context waste ratio
  - cost per task
- toolchain:
  - tiktoken
  - HF tokenizers
  - cost / context estimators
- failure signs:
  - 看似不长的文档一进模型就爆 context
  - 多语言或结构化数据的 token 成本明显高于预期
- next:
  - G/G3. 上下文与记忆
  - J/J4. 会话与状态
  - L/L7. 生产运行指标

### G2. Transformer 机制

- pathKey: `G/G2. Transformer 机制`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-G.json`
- status: draft
- definition: Transformer 是大模型最核心的序列建模骨架，它通过自注意力把“当前 token 应该读取哪些上下文”变成了可学习的权重分配问题。
- importance: 它同时解决了并行训练、长程依赖建模和规模扩展三个关键问题，因此几乎是今天 LLM 与多数 VLM 的共同底座。
- minimum demo: 在 PyTorch 或 notebook 中手写一个单层 self-attention，输入 3~5 个 token embedding，打印 attention weights 和输出向量。
- hardware budget: 理解机制用 CPU/小 GPU 即可；真正做较大模型实验至少需要消费级 GPU 或高内存 Apple silicon。
- examples:
  - Self-attention 决定每个 token 在生成时最关注哪些历史 token。
  - KV cache 会把已经算过的注意力键值缓存起来，从而降低长对话推理成本。
- pitfalls:
  - 把 Transformer 等同于“只有注意力”是不准确的，前馈层、残差和归一化同样决定了训练稳定性。
  - 上下文窗口变长不等于上下文利用一定更好，长上下文退化和检索策略仍然是独立问题。
- prerequisites:
  - A/A1. 数学基础/线性代数
  - A/A1. 数学基础/微积分与优化/导数、偏导、链式法则
  - G/G1. 语言建模基础/Tokenization pipeline
- core metrics:
  - training stability
  - context utilization
  - latency
  - KV cache hit ratio
- toolchain:
  - PyTorch
  - Transformers
  - attention visualization
- failure signs:
  - 长上下文任务准确率明显掉头
  - decode latency 随上下文增长过快
  - 注意力权重异常集中或塌缩
- next:
  - G/G3. 上下文与记忆
  - G/G4. 生成与解码
  - L/L3. 推理优化

#### Self-attention

- pathKey: `G/G2. Transformer 机制/Self-attention`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G2-cnz1t5-1.json`
- status: draft
- definition: Self-attention 让每个 token 在当前层里对其它 token 分配权重，从而决定“当前表示应该读取哪些上下文”。
- importance: 它是 Transformer 能建模长程依赖的关键，也是 LLM 能在上下文里做条件化生成的基础。
- minimum demo: 对几个 token embedding 手写一次 QK^T softmax，再观察 attention weights 如何变化。
- hardware budget: 机制学习用 CPU 即可；长序列实验更吃显存和内存。
- prerequisites:
  - A/A1. 数学基础/线性代数
  - G/G1. 语言建模基础/Embedding
  - G/G1. 语言建模基础/Positional information
- core metrics:
  - attention concentration
  - context utilization
  - compute cost
- next:
  - G/G2. Transformer 机制/Multi-head attention
  - G/G2. Transformer 机制/长上下文处理

#### Multi-head attention

- pathKey: `G/G2. Transformer 机制/Multi-head attention`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G2-cnz1t5-1.json`
- status: draft
- definition: Multi-head attention 把注意力拆成多个头，让模型能并行关注不同类型的上下文关系，而不是只学一种全局权重模式。
- importance: 它提升了表示丰富度，使模型能同时处理语法、局部模式、长程依赖和不同特征子空间。
- minimum demo: 观察不同 attention head 在同一输入上的权重模式是否分工不同。
- hardware budget: 头数增加会提高计算和缓存开销。
- prerequisites:
  - G/G2. Transformer 机制/Self-attention
- core metrics:
  - head diversity
  - representation richness
  - compute overhead
- next:
  - G/G2. Transformer 机制/Feed-forward blocks
  - G/G2. Transformer 机制/KV cache

#### Feed-forward blocks

- pathKey: `G/G2. Transformer 机制/Feed-forward blocks`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G2-cnz1t5-1.json`
- status: draft
- definition: Feed-forward blocks 在每个 token 上做独立的非线性变换，为模型提供注意力之外的特征混合和表示容量。
- importance: 如果只有注意力没有前馈层，模型很难形成足够强的逐 token 表示能力。前馈层是“读取上下文之后如何变换表示”的主力。
- minimum demo: 比较一个带 FFN 和一个不带 FFN 的极小 Transformer block 输出差异。
- hardware budget: FFN 通常占据大量参数和计算量。
- prerequisites:
  - G/G2. Transformer 机制/Self-attention
  - A/A1. 数学基础/微积分与优化/导数、偏导、链式法则
- core metrics:
  - model capacity
  - training stability
  - compute share
- next:
  - G/G2. Transformer 机制/Residual / normalization
  - D/D6. 规模化要素/参数规模

#### Residual / normalization

- pathKey: `G/G2. Transformer 机制/Residual / normalization`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G2-cnz1t5-1.json`
- status: draft
- definition: Residual connection 和 normalization 负责让深层网络的信号更稳定地传播，减少训练发散和表示塌缩。
- importance: 没有这层，Transformer 很难在深层和大规模设置下稳定训练，也会更难在推理时保持数值行为稳定。
- minimum demo: 比较有无 residual 或 norm 的小网络在训练曲线和输出稳定性上的差异。
- hardware budget: 本身开销不高，但对能否训稳有决定性影响。
- prerequisites:
  - G/G2. Transformer 机制/Feed-forward blocks
- core metrics:
  - loss stability
  - gradient behavior
  - numerical stability
- next:
  - D/D1. 神经网络基础/Normalization
  - G/G2. Transformer 机制/长上下文处理

#### 长上下文处理

- pathKey: `G/G2. Transformer 机制/长上下文处理`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G2-cnz1t5-1.json`
- status: draft
- definition: 长上下文处理关心的是当输入 token 数急剧增长时，模型如何继续有效利用上下文，而不是只把窗口机械放大。
- importance: 上下文变长后，不仅注意力计算会更贵，模型对远距离信息的利用也会下降，因此长上下文质量和长上下文容量不是一回事。
- minimum demo: 把同一任务的上下文长度从短到长逐步增加，观察正确率、时延和约束遗忘的变化。
- hardware budget: 是长对话和长文档成本上升的主要来源之一。
- prerequisites:
  - G/G2. Transformer 机制/Self-attention
  - G/G3. 上下文与记忆/上下文记忆（prompt context）
- core metrics:
  - long-context accuracy
  - latency growth
  - context dilution
- next:
  - L/L3. 推理优化/Context length management
  - I/I3. RAG 管线/Context packing

#### KV cache

- pathKey: `G/G2. Transformer 机制/KV cache`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G2-cnz1t5-1.json`
- status: draft
- definition: KV cache 会在自回归生成时缓存已算过 token 的 key/value，避免每一步都重复计算整段前缀。
- importance: 它是大多数 LLM 在线推理可接受的关键优化之一，直接影响首 token 后的吞吐、时延和多轮会话表现。
- minimum demo: 对比开启和关闭 cache 时的 decode latency 与 tokens/s。
- hardware budget: 会显著占用显存或内存，但通常能换来更好的推理效率。
- prerequisites:
  - G/G2. Transformer 机制/Multi-head attention
  - L/L3. 推理优化/KV cache
- core metrics:
  - decode latency
  - cache memory usage
  - tokens per second
- next:
  - L/L3. 推理优化/Prefix cache
  - L/L3. 推理优化/KV offload

### G3. 上下文与记忆

- pathKey: `G/G3. 上下文与记忆`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-G.json`
- status: draft
- definition: 上下文与记忆关注模型到底“把什么记在参数里、把什么放在当前 prompt 里、把什么挂在会话状态里、又把什么交给外部检索和工具系统”。它讨论的不是一个单独的数据结构，而是多层记忆边界如何共同决定回答质量、成本和稳定性。
- importance: 很多关于“模型记不住”“长对话失忆”“RAG 为什么有时有效有时无效”的问题，本质都属于这一层。只有把参数记忆、上下文记忆、会话记忆和外部记忆区分开，才能知道应该补训练、补上下文、补状态管理，还是补检索与工具。
- minimum demo: 挑一组问题，分别做四种实验：1）只靠模型直接回答；2）把相关信息塞进 prompt；3）做多轮对话并保留会话状态；4）通过检索或工具拿外部信息。比较正确率、token 成本、时延和稳定性，从而看清不同记忆层的边界。
- hardware budget: 理解机制本身不需要训练级硬件。真正增加成本的是长上下文 token 消耗、会话状态存储、RAG 检索链路和工具调用次数，而不是某个“记忆模块”本身的计算。
- prerequisites:
  - G/G1. 语言建模基础/Token efficiency
  - G/G2. Transformer 机制
  - I/I3. RAG 管线
- core metrics:
  - context hit rate
  - memory recall quality
  - token cost
  - latency
  - staleness / freshness
  - conversation coherence
- toolchain:
  - prompt inspection
  - session store
  - RAG stack
  - trace logging
- failure signs:
  - 模型单轮能答，多轮一长就丢关键约束
  - 把大量资料塞进上下文后变慢且更不准
  - 外部检索明明命中了，但答案没有用到检索内容
  - 不同会话之间用户偏好和任务状态混在一起
- next:
  - G/G3. 上下文与记忆/参数记忆（weights）
  - G/G3. 上下文与记忆/上下文记忆（prompt context）
  - G/G3. 上下文与记忆/会话记忆（session memory）
  - G/G3. 上下文与记忆/外部记忆（RAG / tools / stores）

#### 参数记忆（weights）

- pathKey: `G/G3. 上下文与记忆/参数记忆（weights）`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G3-1uc1gcf-1.json`
- status: draft
- definition: 参数记忆指模型在训练过程中写进权重里的统计规律、知识和行为偏好，它不是某次会话专属状态，而是模型的长期内化部分。
- importance: 它决定模型无需外部资料时的基础能力上限，但也天然有过时、不可精确编辑和难以解释的问题。
- minimum demo: 比较模型直接回答与引用最新外部资料后的差异，观察参数记忆与最新事实的边界。
- hardware budget: 本身不增加推理链路复杂度，但要更新它通常需要再训练或后训练。
- prerequisites:
  - D/D3. 训练范式/预训练
  - F/F6. 数据在系统中的角色/预训练数据 → 决定基础能力上限
- core metrics:
  - base knowledge coverage
  - staleness
  - editing cost
- next:
  - G/G3. 上下文与记忆/上下文记忆（prompt context）
  - F/F1. 数据类型/知识库文档

#### 上下文记忆（prompt context）

- pathKey: `G/G3. 上下文与记忆/上下文记忆（prompt context）`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G3-1uc1gcf-1.json`
- status: draft
- definition: 上下文记忆指当前请求里显式提供给模型的 token 序列，包括问题、指令、检索资料、历史片段和工具结果。
- importance: 它是最直接、最可控、最容易试验的记忆层，但也最受 token 窗口、排序和上下文污染影响。
- minimum demo: 给同一问题分别提供短上下文、长上下文和带噪音上下文，比较答案质量和格式稳定性。
- hardware budget: token 越多，成本和时延越高。
- prerequisites:
  - G/G1. 语言建模基础/Token efficiency
  - G/G2. Transformer 机制/长上下文处理
- core metrics:
  - context hit rate
  - token cost
  - constraint retention
- next:
  - I/I3. RAG 管线/Context packing
  - J/J4. 会话与状态

#### 会话记忆（session memory）

- pathKey: `G/G3. 上下文与记忆/会话记忆（session memory）`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G3-1uc1gcf-1.json`
- status: draft
- definition: 会话记忆指某个用户或会话内累积起来的状态，例如历史轮次、临时约束、偏好和任务进展，它通常由应用层维护而不是完全由模型自动保存。
- importance: 没有会话记忆，多轮系统很容易每轮都像第一次见到用户；但会话记忆管理不当，又会造成越界继承、状态污染和 token 浪费。
- minimum demo: 构造一个三轮任务，让系统在第二、三轮显式引用前文约束，再测试截断历史或压缩状态后的效果变化。
- hardware budget: 主要消耗在存储、注入和上下文管理，而不是模型本体。
- prerequisites:
  - G/G3. 上下文与记忆/上下文记忆（prompt context）
  - K/K6. Agent 记忆/Session memory
- core metrics:
  - conversation coherence
  - state carryover
  - context budget usage
- next:
  - J/J4. 会话与状态
  - K/K6. Agent 记忆/Memory injection / compaction

#### 外部记忆（RAG / tools / stores）

- pathKey: `G/G3. 上下文与记忆/外部记忆（RAG / tools / stores）`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G3-1uc1gcf-1.json`
- status: draft
- definition: 外部记忆指模型通过检索、数据库、工具或持久化存储获得的外部信息，它不在参数里，也不一定全部放进当前 prompt，而是按需接入。
- importance: 这是让系统获得最新知识、精确事实和长期状态的主要手段，也是把大模型接到真实业务世界的关键接口。
- minimum demo: 让系统先尝试直接回答，再走检索或工具调用回答，比较正确率、时延和引用质量。
- hardware budget: 增加的是检索、工具和状态存储链路成本，而不是单次前向计算成本。
- prerequisites:
  - I/I3. RAG 管线
  - K/K7. 工具与外部连接
  - J/J3. 工具调用/Function calling
- core metrics:
  - retrieval usefulness
  - tool success rate
  - freshness
  - end-to-end latency
- next:
  - I/I4. RAG 形态/Agentic RAG
  - K/K7. 工具与外部连接/File search / web search / code tools

### G4. 生成与解码

- pathKey: `G/G4. 生成与解码`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-G.json`
- status: draft
- definition: 生成与解码关注的是：模型给出了下一 token 的概率分布后，系统到底如何从中选 token、何时停止、如何约束输出格式，以及这些选择会如何改变质量、稳定性、多样性和成本。
- importance: 很多人把大模型输出当作“模型自然生成的结果”，但实际可用性很大程度取决于解码设置。相同模型在 greedy、sampling、structured generation 下可能表现得像三个完全不同的系统。
- minimum demo: 对同一组问题分别用 greedy、temperature sampling、top-p sampling 和结构化生成跑一轮，记录正确率、格式成功率、输出方差、首 token 延迟和总时延，比较不同解码策略的权衡。
- hardware budget: 解码实验本身硬件要求不高，但会直接影响 token 数、重试率和推理时延，因此会在 API 成本和服务吞吐上放大差异。
- prerequisites:
  - G/G1. 语言建模基础/Next-token prediction
  - G/G2. Transformer 机制
  - J/J2. 结构化输出
- core metrics:
  - format success rate
  - answer variance
  - latency
  - token cost
  - hallucination rate
- toolchain:
  - API sampling controls
  - structured output validators
  - trace / retry logs
- failure signs:
  - 同一输入反复重试输出差异极大
  - 一调高 temperature 就开始漏字段或乱格式
  - stop 条件设置不当导致截断、重复或输出过长
  - 结构化输出看似成功，但字段值经常语义错误
- next:
  - G/G4. 生成与解码/Greedy
  - G/G4. 生成与解码/Sampling
  - G/G4. 生成与解码/Structured generation
  - J/J2. 结构化输出

#### Greedy

- pathKey: `G/G4. 生成与解码/Greedy`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G4-1vmlrux-1.json`
- status: draft
- definition: Greedy decoding 每一步都选当前概率最高的 token，是最确定、最稳定、也最保守的解码方式。
- importance: 它常用于抽取、分类、结构化输出等稳定性优先的任务，也是理解其它采样策略的基线。
- minimum demo: 对同一任务分别用 greedy 和 sampling 跑多次，比较输出方差和格式稳定性。
- hardware budget: 不会显著增加额外计算，但可能因为保守而牺牲质量多样性。
- prerequisites:
  - G/G1. 语言建模基础/Next-token prediction
- core metrics:
  - determinism
  - format stability
  - quality ceiling
- next:
  - G/G4. 生成与解码/Sampling
  - G/G4. 生成与解码/Structured generation

#### Sampling

- pathKey: `G/G4. 生成与解码/Sampling`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G4-1vmlrux-1.json`
- status: draft
- definition: Sampling 会按概率分布抽样，而不是总选最大值，从而引入多样性和探索空间。
- importance: 它适合创意生成、开放式写作和需要多候选方案的场景，但也更容易放大幻觉和格式漂移。
- minimum demo: 固定输入，多次 sampling，观察答案多样性与错误率如何一起变化。
- hardware budget: 计算开销接近 greedy，但会增加重试与评审成本。
- prerequisites:
  - G/G4. 生成与解码/Greedy
  - G/G4. 生成与解码/Temperature
- core metrics:
  - output variance
  - diversity
  - error rate
- next:
  - G/G4. 生成与解码/Top-k
  - G/G4. 生成与解码/Top-p

#### Temperature

- pathKey: `G/G4. 生成与解码/Temperature`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G4-1vmlrux-1.json`
- status: draft
- definition: Temperature 通过重新缩放 logits 来控制概率分布的尖锐程度，温度越高，输出越发散；温度越低，输出越保守。
- importance: 它是最常被直接调的解码旋钮之一，对输出稳定性、创意性和错误率都有显著影响。
- minimum demo: 把同一输入在 0、0.2、0.7、1.0 等温度下各跑几次，观察方差和格式错误率。
- hardware budget: 本身几乎没有额外硬件成本。
- prerequisites:
  - G/G4. 生成与解码/Sampling
- core metrics:
  - variance
  - hallucination rate
  - format break rate
- next:
  - G/G4. 生成与解码/Top-k
  - G/G4. 生成与解码/Top-p

#### Top-k

- pathKey: `G/G4. 生成与解码/Top-k`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G4-1vmlrux-1.json`
- status: draft
- definition: Top-k sampling 会先只保留概率最高的 k 个 token，再在其中抽样，从而限制极低概率 token 被选中。
- importance: 它能在保留一定多样性的同时限制输出发散，是对 sampling 的一种约束手段。
- minimum demo: 保持温度不变，比较不同 k 值下的输出质量、重复和错误模式。
- hardware budget: 开销很小，更多影响输出行为而不是计算量。
- prerequisites:
  - G/G4. 生成与解码/Sampling
- core metrics:
  - candidate truncation
  - diversity
  - error control
- next:
  - G/G4. 生成与解码/Top-p
  - M/M1. 模型级评测/稳定性

#### Top-p

- pathKey: `G/G4. 生成与解码/Top-p`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G4-1vmlrux-1.json`
- status: draft
- definition: Top-p（nucleus sampling）会保留累计概率达到阈值 p 的最小 token 集合，再在其中抽样，因此比固定 k 更能自适应不同分布形状。
- importance: 它是开放式生成里常见的默认选择之一，能在保证一定多样性的同时减少低概率噪声。
- minimum demo: 比较固定 top-k 和不同 top-p 设置在开放问答与创意生成中的差异。
- hardware budget: 本身不显著增加硬件成本。
- prerequisites:
  - G/G4. 生成与解码/Sampling
- core metrics:
  - adaptive candidate size
  - diversity
  - coherence
- next:
  - G/G4. 生成与解码/Stop conditions
  - M/M1. 模型级评测/稳定性

#### Stop conditions

- pathKey: `G/G4. 生成与解码/Stop conditions`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G4-1vmlrux-1.json`
- status: draft
- definition: Stop conditions 决定生成何时终止，例如遇到 stop token、达到最大长度、检测到结构结束或触发工具边界。
- importance: 它直接影响截断、重复、过长输出和多轮协议是否稳定，是很多产品级 bug 的根源。
- minimum demo: 对同一结构化任务分别设置不同 stop 条件，比较截断、冗余和格式完整率。
- hardware budget: 本身成本低，但会影响总 token 数和重试成本。
- prerequisites:
  - G/G4. 生成与解码/Greedy
  - J/J2. 结构化输出/Validation
- core metrics:
  - truncate rate
  - over-generation rate
  - retry rate
- next:
  - J/J3. 工具调用/Tool execution
  - J/J2. 结构化输出/Error recovery

#### Structured generation

- pathKey: `G/G4. 生成与解码/Structured generation`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G4-1vmlrux-1.json`
- status: draft
- definition: Structured generation 通过 JSON mode、schema、typed outputs 或 constrained decoding 把生成空间限制在预期结构内。
- importance: 它是把“能说”变成“能稳定产出可消费结果”的关键机制，对工具调用、抽取、工作流编排都很重要。
- minimum demo: 让模型输出同一份 JSON，比较自由生成后再解析与直接结构化生成的成功率差异。
- hardware budget: 本身不会大幅增加单次推理硬件成本，但会减少重试和后处理浪费。
- prerequisites:
  - J/J2. 结构化输出/JSON mode
  - J/J2. 结构化输出/JSON Schema
  - J/J3. 工具调用/Tool schema design
- core metrics:
  - schema adherence
  - parse success rate
  - retry rate
- next:
  - J/J2. 结构化输出/Typed outputs
  - J/J3. 工具调用/Function calling

### G5. 能力面

- pathKey: `G/G5. 能力面`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-G.json`
- status: draft
- definition: 能力面讨论的是大模型作为统一序列预测器，在不同任务结构下会表现出哪些稳定能力，例如续写、指令跟随、摘要、翻译、提取、代码生成、多步推理和多模态理解。它强调的不是任务清单本身，而是这些能力背后分别依赖参数记忆、上下文利用、解码设置、工具接入还是外部知识。
- importance: 如果不把“能力”拆开看，团队很容易用一个模糊结论概括整个模型，例如“模型很强”或“模型不稳定”。但真实系统里，不同能力的边界、成本和失败模式完全不同：有的更像模式补全，有的更依赖结构约束，有的高度依赖工具和外部知识，有的则受到解码和测试时计算强烈影响。
- minimum demo: 选 8 到 10 个小任务，分别覆盖续写、摘要、提取、结构化输出、工具选择和多步推理。对同一模型在固定 prompt 下做批量对照，记录正确率、输出方差、token 成本和失败类型，观察哪些能力稳定来自模型本体，哪些必须依赖外部系统辅助。
- hardware budget: 理解能力边界本身不需要大硬件。多数对照实验通过云 API 或本地小模型即可完成；真正增加成本的是多轮采样、长上下文、多模态输入和需要 verifier / tool 的任务。
- prerequisites:
  - G/G2. Transformer 机制
  - G/G3. 上下文与记忆
  - G/G4. 生成与解码
- core metrics:
  - task success rate
  - output stability
  - schema adherence
  - groundedness
  - latency / cost
- toolchain:
  - eval harness
  - prompt suite
  - structured output checks
  - trace logging
- failure signs:
  - 同一模型在不同任务上强弱极不均衡，却被当成单一能力讨论
  - 把工具、检索和模型本体贡献混在一起评估
  - 只看少数漂亮 demo，忽略批量稳定性和方差
- next:
  - G/G5. 能力面/指令跟随
  - G/G5. 能力面/提取
  - G/G5. 能力面/多步推理
  - M/M1. 模型级评测

#### 续写

- pathKey: `G/G5. 能力面/续写`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G5-qxfgw1-1.json`
- status: draft
- definition: 续写是下一 token 预测最直接的外显能力，模型根据已有前缀延续语气、结构和内容模式。
- importance: 它是很多生成能力的底层原型，也是理解“模型会顺着模式走”这一事实的最简单入口。
- minimum demo: 给同一前缀写几种不同长度和风格，观察模型如何顺势延续和何时开始跑偏。
- prerequisites:
  - G/G1. 语言建模基础/Next-token prediction
  - G/G4. 生成与解码/Greedy
- core metrics:
  - coherence
  - local consistency
  - drift rate
- next:
  - G/G5. 能力面/摘要
  - G/G6. 局限面/受数据分布影响

#### 指令跟随

- pathKey: `G/G5. 能力面/指令跟随`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G5-qxfgw1-1.json`
- status: draft
- definition: 指令跟随指模型把用户约束、格式要求和任务目标转成输出行为，而不是只做自由续写。
- importance: 这是助手类系统最关键的能力之一，也是 SFT 和结构化生成最常想提升的一层。
- minimum demo: 设计一组有明确格式、长度和禁令约束的任务，测模型是否真的遵守。
- prerequisites:
  - F/F6. 数据在系统中的角色/SFT 数据 → 决定任务风格与稳定性
  - G/G4. 生成与解码/Structured generation
- core metrics:
  - instruction adherence
  - constraint retention
  - format success
- next:
  - H/H2. 监督式后训练/SFT
  - J/J2. 结构化输出

#### 摘要

- pathKey: `G/G5. 能力面/摘要`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G5-qxfgw1-1.json`
- status: draft
- definition: 摘要不是单纯缩短文本，而是在保留任务目标所需关键信息、结构和证据关系的前提下做信息压缩。好的摘要要知道什么能删、什么不能删，以及何时必须保留上下文限定词。
- importance: 它是会话记忆、知识压缩、长文处理和多轮 agent 汇报的基础能力，也最容易暴露模型在信息取舍上的偏差：要么漏掉关键条件，要么用看似顺滑的话补出不存在的结论。
- minimum demo: 给同一段长文本分别做面向决策、面向检索和面向会话续接的三种摘要，比较信息保真、遗漏点和是否引入额外推断。
- prerequisites:
  - G/G3. 上下文与记忆/上下文记忆（prompt context）
  - G/G4. 生成与解码/Sampling
- core metrics:
  - faithfulness
  - coverage
  - compression ratio
- next:
  - E/E1. 语言（NLP / LLM）/摘要
  - G/G6. 局限面/幻觉

#### 翻译

- pathKey: `G/G5. 能力面/翻译`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G5-qxfgw1-1.json`
- status: draft
- definition: 翻译能力的难点不只是把词换成另一种语言，而是在跨语言迁移时保持事实、语气、术语、格式和文化语境边界。对模型来说，这同时考验词元表示、多语言对齐和约束遵守。
- importance: 翻译是检验多语言能力是否“可用”而非“会一点”的典型任务。专有名词、数字、法律或技术术语以及格式约束一旦漂移，系统在真实业务里就会很快失去可信度。
- minimum demo: 准备包含专有名词、数字、表格字段和语气要求的双向翻译样例，检查是否既传达原意，又保住术语、格式和禁改字段。
- prerequisites:
  - G/G1. 语言建模基础/Tokenization pipeline
  - G/G4. 生成与解码/Greedy
- core metrics:
  - adequacy
  - fluency
  - entity preservation
- next:
  - E/E1. 语言（NLP / LLM）/翻译
  - E/E3. 音频 / 语音/语音翻译

#### 归纳

- pathKey: `G/G5. 能力面/归纳`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G5-qxfgw1-1.json`
- status: draft
- definition: 归纳能力是从多条样例、日志或案例中抽出稳定模式、共性原因和高层规则，同时不把少量偶然现象误当成规律。它比单次摘要更强调跨样本比较和抽象层提升。
- importance: 很多分析、复盘、质检和运营任务真正需要的不是逐条复述，而是找出 recurring pattern、异常群和可执行结论。归纳做不好，系统就会给出听起来完整但没有判别力的总结。
- minimum demo: 给模型一组包含主流模式和少数异常的案例，让它总结共性、列出例外，并解释为什么这些例外不能被粗暴并入主结论。
- prerequisites:
  - G/G3. 上下文与记忆/上下文记忆（prompt context）
  - G/G5. 能力面/摘要
- core metrics:
  - pattern recall
  - abstraction quality
  - exception handling
- next:
  - B/B5. 推理/归纳推理
  - G/G6. 局限面/受数据分布影响

#### 提取

- pathKey: `G/G5. 能力面/提取`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G5-qxfgw1-1.json`
- status: draft
- definition: 提取能力要求模型从非结构化内容中抽出字段、实体、关系或结论，并尽量保持边界和格式稳定。
- importance: 这是大模型进入工作流和业务系统最常见的能力之一，因为系统最终更需要结构化结果而不是自然语言解释。
- minimum demo: 对一批文本或文档要求输出固定 schema，统计 parse 成功率和字段正确率。
- prerequisites:
  - G/G4. 生成与解码/Structured generation
  - J/J2. 结构化输出/JSON Schema
- core metrics:
  - field accuracy
  - schema adherence
  - parse success
- next:
  - E/E1. 语言（NLP / LLM）/结构化解析
  - E/E2. 视觉（CV）/OCR / 文档理解

#### 工具选择

- pathKey: `G/G5. 能力面/工具选择`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G5-qxfgw1-1.json`
- status: draft
- definition: 工具选择能力关注的是“是否要调用、该调用哪一个、需要带什么上下文、什么时候应该放弃调用”。它本质上是决策问题，而不是把函数名填进 schema 就算完成。
- importance: 很多 Agent 失败并不是工具本身不能用，而是模型在不该调用时乱调、该调时漏调，或者选对了工具却给错输入上下文。这直接决定系统成本、速度和副作用风险。
- minimum demo: 构造一组混合任务，其中一部分应直接回答、一部分应检索、一部分应执行写操作，检查模型能否区分调用必要性、工具类型和参数上下文。
- prerequisites:
  - J/J3. 工具调用/Function calling
  - G/G4. 生成与解码/Structured generation
- core metrics:
  - tool selection accuracy
  - false tool call rate
  - abstain quality
- next:
  - J/J3. 工具调用/Tool routing
  - G/G6. 局限面/工具误用

#### 多步推理

- pathKey: `G/G5. 能力面/多步推理`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G5-qxfgw1-1.json`
- status: draft
- definition: 多步推理指模型在多个中间步骤之间维持一致约束，逐步得到更复杂结论，而不是靠单步模式匹配碰巧答对。
- importance: 这是 reasoning model、planner/verifier 系统和复杂任务编排最常强调的能力层。
- minimum demo: 设计几道必须经过中间步骤才能答对的题，对比普通模式补全和显式推理设置的差异。
- prerequisites:
  - G/G4. 生成与解码/Sampling
  - M/M1. 模型级评测/推理能力
- core metrics:
  - step consistency
  - final accuracy
  - test-time compute cost
- next:
  - G/G7. 模型类型细分/推理强化模型
  - G/G8. 推理模型与模型路由

#### 代码生成

- pathKey: `G/G5. 能力面/代码生成`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G5-qxfgw1-1.json`
- status: draft
- definition: 代码生成能力指模型根据说明、上下文和接口约束生成可运行或可编辑的代码片段、补丁和脚本。
- importance: 它同时依赖语言建模、结构化约束、长上下文和工具整合，是检验模型工程可用性的高价值场景。
- minimum demo: 让模型针对一个明确接口生成小函数，并实际运行测试或静态检查。
- prerequisites:
  - G/G3. 上下文与记忆/外部记忆（RAG / tools / stores）
  - J/J3. 工具调用/Function calling
- core metrics:
  - compile / run success
  - spec adherence
  - edit locality
- next:
  - E/E1. 语言（NLP / LLM）/代码生成与理解
  - K/K7. 工具与外部连接/File search / web search / code tools

#### 多模态理解

- pathKey: `G/G5. 能力面/多模态理解`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G5-qxfgw1-1.json`
- status: draft
- definition: 多模态理解指模型把图像、音频、视频等非文本信号和文本问题联合起来做判断，而不是只看其中一个模态。
- importance: 这是 VLM 和 omni 系统进入真实任务的基础，因为很多问题必须依赖跨模态证据才能答对。
- minimum demo: 构造必须联合图像+文本或音频+文本才能答对的样本，检查模型是否真正用到了非文本证据。
- prerequisites:
  - E/E5. 多模态/视觉语言模型（VLM）
  - M/M1. 模型级评测/多模态能力
- core metrics:
  - groundedness
  - cross-modal consistency
  - answer accuracy
- next:
  - E/E5. 多模态/多模态推理
  - G/G6. 局限面/受提示与检索质量影响

### G6. 局限面

- pathKey: `G/G6. 局限面`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-G.json`
- status: draft
- definition: 局限面讨论的是大模型当前为何会在某些情况下系统性失真，例如幻觉、过期知识、长上下文退化、工具误用，以及对 prompt、检索质量和训练分布的高度敏感。它不是“坏例子集合”，而是对失败边界的结构化认识。
- importance: 如果只补能力，不补局限，工程上就会持续把失败归因给偶然 prompt 或单次 bad case，无法形成可靠改进路径。真正的产品系统，需要知道哪些问题应该用后训练解决，哪些要靠 RAG、工具、路由、结构约束或 guardrails 兜底。
- minimum demo: 为同一组任务构造几类典型失败条件：知识过期、上下文超长、检索噪声、错误工具结果和分布外样本。分别观察模型输出怎么退化，再把失败映射到最可能的修复层。
- hardware budget: 局限分析本身不吃大硬件，更多成本在设计失败样本、批量复现和建立诊断链路。
- prerequisites:
  - G/G3. 上下文与记忆
  - G/G4. 生成与解码
  - M/M1. 模型级评测
- core metrics:
  - hallucination rate
  - staleness rate
  - tool misuse rate
  - long-context drop
  - distribution shift gap
- toolchain:
  - failure set
  - retrieval ablations
  - tool traces
  - eval dashboards
- failure signs:
  - 系统有失败，但无法归类和复现
  - 上线后频繁出现分布外输入崩溃或错误自信输出
  - 把所有问题都归咎为提示词没写好
- next:
  - G/G6. 局限面/幻觉
  - G/G6. 局限面/长上下文退化
  - G/G6. 局限面/工具误用
  - M/M8. 对抗测试与审计

#### 幻觉

- pathKey: `G/G6. 局限面/幻觉`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G6-15f1gji-1.json`
- status: draft
- definition: 幻觉不是泛指“答错了”，而是模型在证据不足、上下文冲突或本应拒答时，仍生成看似连贯且语气自信的内容。它往往伴随来源伪造、细节补全和不恰当确定性表达。
- importance: 它危险的地方在于错误往往不显眼：用户看到的是流畅答案，而不是明显报错。对搜索、问答、抽取和 agent 系统来说，这比简单失败更难被发现和控制。
- minimum demo: 给模型提供缺失关键证据、相互矛盾片段和诱导性问题，比较它是否会明确暴露不确定性、请求更多信息，还是直接编出确定答案。
- prerequisites:
  - G/G3. 上下文与记忆/外部记忆（RAG / tools / stores）
  - M/M1. 模型级评测/安全性
- core metrics:
  - unsupported claim rate
  - citation error rate
  - overconfidence
- next:
  - I/I3. RAG 管线/Citation / provenance
  - M/M8. 对抗测试与审计/Red teaming

#### 过期知识

- pathKey: `G/G6. 局限面/过期知识`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G6-15f1gji-1.json`
- status: draft
- definition: 过期知识指模型把训练时学到的世界状态当成仍然成立的事实，但这些事实在现实中已经更新。问题不只是“知道得少”，而是模型往往不知道自己已经过时。
- importance: 这就是为什么很多产品必须接检索、数据库和在线工具：不是为了给模型“更多知识”，而是为了让答案绑定当前世界状态和可核查来源。
- minimum demo: 选择一组近一年内发生变更的事实问题，分别比较纯参数回答、带 RAG 回答和带在线工具回答，观察新鲜度与自知不确定性的差异。
- prerequisites:
  - G/G3. 上下文与记忆/参数记忆（weights）
  - F/F1. 数据类型/知识库文档
- core metrics:
  - staleness rate
  - freshness gain from retrieval
- next:
  - I/I3. RAG 管线/Retrieval
  - F/F6. 数据在系统中的角色/知识库文档 → 决定 RAG 质量

#### 长上下文退化

- pathKey: `G/G6. 局限面/长上下文退化`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G6-15f1gji-1.json`
- status: draft
- definition: 长上下文退化指随着输入长度增长，模型虽然还能“装下”上下文，但对远距离信息的利用质量下降，容易漏约束、漏证据或被噪声稀释。
- importance: 它提醒我们上下文窗口和上下文利用不是一回事，不能把“支持更长上下文”直接等同于“更会用上下文”。
- minimum demo: 逐步增加上下文长度并插入干扰信息，测试模型对关键约束的保留能力。
- prerequisites:
  - G/G2. Transformer 机制/长上下文处理
  - L/L3. 推理优化/Context length management
- core metrics:
  - long-context accuracy drop
  - constraint loss rate
  - latency growth
- next:
  - I/I3. RAG 管线/Context packing
  - M/M1. 模型级评测/稳定性

#### 工具误用

- pathKey: `G/G6. 局限面/工具误用`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G6-15f1gji-1.json`
- status: draft
- definition: 工具误用包括选错工具、传错参数、误解工具返回值，或在不该调工具时也触发调用。
- importance: 它是 Agent 类系统里非常常见的系统性失败，不是单纯的语言错误，而是行动层错误。
- minimum demo: 准备一组需要和不需要工具的任务，分析模型错路由、错参数和错整合的比例。
- prerequisites:
  - G/G5. 能力面/工具选择
  - J/J3. 工具调用/Tool execution
- core metrics:
  - tool misuse rate
  - argument error rate
  - false invocation rate
- next:
  - J/J3. 工具调用/Tool retries / fallback
  - M/M3. Agent 级评测/Tool selection correctness

#### 受提示与检索质量影响

- pathKey: `G/G6. 局限面/受提示与检索质量影响`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G6-15f1gji-1.json`
- status: draft
- definition: 模型输出高度受 prompt 表达方式、上下文排序和检索结果质量影响，说明很多“能力”其实建立在输入质量之上。
- importance: 这决定了为什么应用工程、RAG 质量和结构约束经常比单次换模型更有效。
- minimum demo: 对同一问题改变 prompt 写法、检索召回和上下文排序，比较结果波动。
- prerequisites:
  - I/I3. RAG 管线/Rerank
  - G/G3. 上下文与记忆/上下文记忆（prompt context）
- core metrics:
  - prompt sensitivity
  - retrieval sensitivity
  - variance
- next:
  - I/I3. RAG 管线/Query rewrite
  - M/M1. 模型级评测/稳定性

#### 受数据分布影响

- pathKey: `G/G6. 局限面/受数据分布影响`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G6-15f1gji-1.json`
- status: draft
- definition: 模型能力高度依赖训练和后训练见过的数据分布，分布一变，原本稳定的行为可能迅速退化。
- importance: 这说明很多“能力边界”其实是分布边界，不能把 benchmark 上的表现直接外推到真实业务场景。
- minimum demo: 对同一任务准备 in-distribution 和 out-of-distribution 两组样本，比较性能断崖位置。
- prerequisites:
  - F/F4. 数据质量/分布匹配
  - M/M1. 模型级评测/语言能力
- core metrics:
  - OOD gap
  - distribution shift drop
  - generalization
- next:
  - F/F4. 数据质量/分布匹配
  - N/N6. 持续改进闭环/新 evals

### G7. 模型类型细分

- pathKey: `G/G7. 模型类型细分`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-G.json`
- status: draft
- definition: 模型类型细分讨论的是：同样都叫“大模型”，但它们面向的优化目标、输入模态、推理预算和部署场景其实差异很大。通用对话模型、推理强化模型、代码模型、多模态模型、小模型和专项模型并不是简单的“强弱排序”，而是不同任务边界下的不同工程选择。
- importance: 如果不先把模型类型分清，团队很容易把所有问题都丢给一个默认模型，结果同时吃到成本高、延迟慢、质量不稳和部署不匹配这几种问题。理解这一层后，才能谈模型路由、planner/executor 拆分、端侧部署和专项模型补位。
- minimum demo: 选一组覆盖问答、代码补全、图文理解、结构化提取和低延迟分类的小任务，分别用通用模型、推理模型、代码模型和小模型跑一遍，记录正确率、时延、成本和输出稳定性。对比后总结：哪些任务适合默认走通用模型，哪些必须切推理或专项模型，哪些更适合让小模型前置过滤。
- hardware budget: 学习这一层不需要训练级硬件，但不同模型类型会明显改变推理资源需求。通用 API 足够做大多数对照实验；如果想体验本地部署差异，小模型 / 量化模型可以在 CPU 或轻量 GPU 上跑，而多模态和长上下文模型会更快触及显存、带宽和吞吐瓶颈。
- examples:
  - 同一批客服问答，通用对话模型已经够用，但一上推理模型只会增加时延和费用。
  - 修复代码仓库里的局部 bug 时，代码模型通常比通用聊天模型更擅长遵守接口和 edit locality。
  - 图像问答任务必须交给多模态模型，纯文本模型即使语言能力强也拿不到视觉证据。
  - 移动端离线分类或语音唤醒场景，更重要的是体积、延迟和功耗，而不是最强通用能力。
  - 专项抽取或审核任务中，窄领域模型常常比通用模型更稳定、更便宜。
- pitfalls:
  - 把模型类型理解成排行榜，而不是任务边界和资源约束下的取舍。
  - 把推理模型当成默认主力，忽略简单任务对低成本高吞吐的需求。
  - 只看 benchmark 分数，不看模态、时延、上下文长度和工具需求是否匹配真实场景。
  - 在需要高稳定结构化输出的任务里，盲目依赖通用对话模型而不考虑专项模型或约束生成。
  - 把小模型只当成“弱模型”，忽略它们在边缘部署、预过滤和路由前置中的价值。
- prerequisites:
  - G/G5. 能力面
  - G/G6. 局限面
  - E/E5. 多模态/视觉语言模型（VLM）
  - L/L3. 推理优化/Quantized inference
- core metrics:
  - task success rate by model type
  - latency / throughput
  - cost per request
  - memory footprint
  - stability / variance
  - deployment fit
- toolchain:
  - multi-model eval harness
  - latency / cost dashboards
  - local inference runners
  - routing and fallback middleware
- failure signs:
  - 同类任务在不同模型之间反复手工切换，但没有稳定选择规则。
  - 高成本模型承担了大量低复杂度请求，吞吐和预算持续吃紧。
  - 图像、代码和结构化任务都走同一模型，却在关键场景上频繁失误。
  - 部署目标是边缘或私有环境，却选了资源完全不匹配的模型族。
- next:
  - G/G7. 模型类型细分/通用对话模型
  - G/G7. 模型类型细分/推理强化模型
  - G/G7. 模型类型细分/代码模型
  - G/G7. 模型类型细分/多模态模型
  - G/G7. 模型类型细分/小模型 / 边缘模型
  - G/G7. 模型类型细分/专项模型
  - G/G8. 推理模型与模型路由

#### 通用对话模型

- pathKey: `G/G7. 模型类型细分/通用对话模型`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G7-1u6vno1-1.json`
- status: draft
- definition: 通用对话模型是默认面向广泛自然语言交互优化的 instruction-tuned 模型，擅长问答、摘要、翻译、提取、基础工具调用和日常协作类任务。
- importance: 它通常是系统的基线主力，因为能力覆盖广、接口成熟、成本和时延相对可控。没有明确理由时，大多数请求都应该先评估它是否已经足够。
- minimum demo: 准备 15～20 条覆盖问答、摘要、JSON 输出和简单工具调用的请求，测它在默认配置下的正确率、格式成功率和时延，作为后续是否升级推理模型或专项模型的基线。
- prerequisites:
  - G/G5. 能力面/指令跟随
  - J/J1. 模型接口层/Chat / responses
- core metrics:
  - instruction adherence
  - response quality
  - format success rate
  - cost per request
- next:
  - G/G8. 推理模型与模型路由/Reasoning models vs GPT models
  - J/J1. 模型接口层/Prompt composition

#### 推理强化模型

- pathKey: `G/G7. 模型类型细分/推理强化模型`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G7-1u6vno1-1.json`
- status: draft
- definition: 推理强化模型是在训练目标、采样策略或测试时计算上更强调多步推理和复杂问题求解的模型类型，通常比通用对话模型更愿意消耗额外步骤换取复杂任务成功率。
- importance: 它们适合规划、数学、复杂代码修复和多约束决策，但代价往往是更高时延、更高 token 消耗和更苛刻的路由要求。
- minimum demo: 选一组需要多步推理的问题，对比通用对话模型和推理强化模型的最终正确率、推理成本和端到端时延，判断哪些任务真的值得升级。
- prerequisites:
  - G/G5. 能力面/多步推理
  - G/G8. 推理模型与模型路由/Test-time compute / reasoning effort
- core metrics:
  - reasoning accuracy
  - latency
  - token usage
  - upgrade win rate
- next:
  - G/G8. 推理模型与模型路由/Planner / executor split
  - G/G8. 推理模型与模型路由/什么时候不要用 reasoning model

#### 代码模型

- pathKey: `G/G7. 模型类型细分/代码模型`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G7-1u6vno1-1.json`
- status: draft
- definition: 代码模型是对编程语言、仓库上下文、补全、编辑和测试反馈有更强适配的模型类型，通常更关注语法正确性、接口约束和 edit locality。
- importance: 在代码补全、补丁生成、重构建议和测试修复等场景里，代码模型往往比纯通用对话模型更稳定，因为它们更熟悉源码分布和工具链约束。
- minimum demo: 给一个有明确接口和测试的小项目，分别让通用模型和代码模型生成补丁并跑测试，比较 compile / test success 和改动范围。
- prerequisites:
  - G/G5. 能力面/代码生成
  - E/E1. 语言（NLP / LLM）/代码生成与理解
- core metrics:
  - compile success
  - test pass rate
  - edit locality
  - spec adherence
- next:
  - J/J3. 工具调用/Tool execution
  - G/G8. 推理模型与模型路由/Model routing policy

#### 多模态模型

- pathKey: `G/G7. 模型类型细分/多模态模型`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G7-1u6vno1-1.json`
- status: draft
- definition: 多模态模型把图像、音频、视频等非文本输入与文本推理能力联合起来，使模型能够基于跨模态证据回答、提取或规划。
- importance: 只要任务依赖视觉、语音或视频证据，纯文本模型就天然缺少关键信号；多模态模型因此是图文问答、语音交互和视频理解系统的必要基础。
- minimum demo: 准备一组必须依赖图像或音频证据才能答对的问题，对比纯文本流程和多模态模型流程，检查 groundedness 和最终正确率。
- prerequisites:
  - G/G5. 能力面/多模态理解
  - E/E5. 多模态/视觉语言模型（VLM）
- core metrics:
  - grounded accuracy
  - cross-modal consistency
  - latency
  - modality coverage
- next:
  - E/E5. 多模态/多模态推理
  - G/G8. 推理模型与模型路由/Model routing policy

#### 小模型 / 边缘模型

- pathKey: `G/G7. 模型类型细分/小模型 / 边缘模型`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G7-1u6vno1-1.json`
- status: draft
- definition: 小模型 / 边缘模型强调的是较低参数规模、量化部署、较小内存占用和更低推理时延，目标通常是端侧运行、成本敏感场景或前置过滤任务。
- importance: 它们不一定追求最强通用能力，但在隐私、离线可用性、吞吐和成本上常有明显优势，是路由体系和边缘部署中的关键一层。
- minimum demo: 用一组短文本分类、提取或前置筛选任务，对比小模型与大模型的吞吐、首 token 延迟、内存占用和最低可接受准确率。
- prerequisites:
  - G/G1. 语言建模基础/Token efficiency
  - L/L3. 推理优化/Quantized inference
- core metrics:
  - memory footprint
  - TTFT
  - throughput
  - quality floor
- next:
  - G/G8. 推理模型与模型路由/什么时候不要用 reasoning model
  - L/L3. 推理优化/Throughput / latency tuning

#### 专项模型

- pathKey: `G/G7. 模型类型细分/专项模型`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G7-1u6vno1-1.json`
- status: draft
- definition: 专项模型是针对特定领域、模态或任务目标优化的模型，例如审核、抽取、OCR、客服分类、医疗编码或金融风控模型。它们常以牺牲通用性换取窄任务上的稳定性和性价比。
- importance: 当任务目标清晰、风险高、数据分布相对稳定时，专项模型往往比“万能模型”更便宜、更可控，也更容易达成合规和 SLA 要求。
- minimum demo: 找一个窄任务，例如固定 schema 抽取或审核分类，对比通用模型和专项模型的准确率、误报漏报、稳定性和单位成本。
- prerequisites:
  - F/F6. 数据在系统中的角色/SFT 数据 → 决定任务风格与稳定性
  - H/H2. 监督式后训练/Task-specific tuning
- core metrics:
  - domain accuracy
  - stability
  - calibration
  - maintenance cost
- next:
  - J/J3. 工具调用/Tool routing
  - G/G8. 推理模型与模型路由/Model routing policy

### G8. 推理模型与模型路由

- pathKey: `G/G8. 推理模型与模型路由`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-G.json`
- status: draft
- definition: 推理模型与模型路由讨论的不是“哪个模型最强”，而是如何把通用对话模型、推理强化模型、planner、executor、verifier 和小模型组合成一条可控的执行链。它关注的是：哪些任务应该走更深的 test-time compute，哪些任务应该直接用便宜模型完成，以及系统如何在正确率、延迟、成本和风险之间做实时取舍。
- importance: 真实系统里，复杂度判断、规划、执行、验证和最终呈现常常由不同组件完成。如果没有路由策略，团队通常会退化成两个极端：要么所有请求都进高成本推理模型，要么为了省钱把复杂任务也硬塞给通用模型，结果不是浪费预算，就是稳定性和正确率持续失控。
- minimum demo: 做一条三段式对照链路：1）所有请求都走通用对话模型；2）复杂任务先走 planner 再交 executor；3）高风险输出先过 verifier。准备一组简单问答、结构化提取和多步规划任务，记录路由命中率、端到端时延、每次请求成本、最终成功率和 verifier 拦截率。
- hardware budget: 云 API 足够完成绝大多数实验；本地实验可以用小模型模拟 router、planner 或 verifier，但真正的瓶颈通常不是显卡，而是多模型串联后增加的调用次数、上下文拼接成本和 tracing / retry 开销。
- examples:
  - 复杂任务先由推理模型拆解计划，再让便宜模型按计划执行每一步工具调用。
  - 敏感审批场景里，生成模型先产出草案，再由 verifier 检查证据和政策一致性。
  - 普通 FAQ 和提取类请求直接走通用模型，只有检测到复杂规划需求时才升级到 reasoning model。
  - 高吞吐系统里先让小模型做预分类，再把少量难样本转发到大模型。
- pitfalls:
  - 把 reasoning model 当作所有任务的默认入口，通常只会浪费 test-time compute。
  - 只看最终成功率，不记录 planner、executor、verifier 各自的失败模式。
  - 把路由写成一次性硬编码规则，任务分布一变就整体失效。
  - 没有给 verifier 明确证据和判定标准，导致它只是另一层不稳定生成。
- prerequisites:
  - G/G7. 模型类型细分
  - J/J3. 工具调用/Tool routing
  - M/M3. Agent 级评测/Routing quality
- core metrics:
  - route accuracy
  - end-to-end latency
  - cost per task
  - planner success rate
  - verifier precision / recall
  - fallback rate
- toolchain:
  - Responses / chat APIs
  - routing middleware
  - trace logging
  - eval harness
  - policy and fallback rules
- failure signs:
  - 简单任务也总被送进高成本 reasoning 模型
  - planner 输出看似合理，但 executor 成功率持续偏低
  - verifier 经常拦错或放过明显错误，说明判定标准失真
  - 路由命中率和成本长期漂移，但系统没有被及时校准
- next:
  - G/G8. 推理模型与模型路由/Reasoning models vs GPT models
  - G/G8. 推理模型与模型路由/Planner / executor split
  - G/G8. 推理模型与模型路由/Verifier / judge
  - G/G8. 推理模型与模型路由/Test-time compute / reasoning effort
  - G/G8. 推理模型与模型路由/Model routing policy
  - G/G8. 推理模型与模型路由/什么时候不要用 reasoning model
  - K/K2. 执行形态/Hybrid system
  - K/K5. 图式编排/Conditional branches
  - M/M3. Agent 级评测/Routing quality

#### Reasoning models vs GPT models

- pathKey: `G/G8. 推理模型与模型路由/Reasoning models vs GPT models`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G8-h762r2-1.json`
- status: draft
- definition: 这一对比关注的是：通用 GPT 类模型更偏广覆盖、低摩擦和高吞吐，而 reasoning model 更偏复杂任务上的额外测试时计算与过程控制。两者不是替代关系，而是默认层和升级层的关系。
- importance: 很多系统失控的根源就是没有先分清“默认走谁、什么条件下升级”。如果把 reasoning model 当默认主力，成本和时延会迅速膨胀；如果复杂任务也不升级，最终正确率又会掉得很厉害。
- minimum demo: 设计一组简单任务和一组复杂任务，同时跑通用模型与 reasoning model，统计升级收益、额外成本和平均延迟，找出真正值得升级的任务边界。
- prerequisites:
  - G/G7. 模型类型细分/通用对话模型
  - G/G7. 模型类型细分/推理强化模型
- core metrics:
  - upgrade win rate
  - latency delta
  - cost delta
  - quality delta
- next:
  - G/G8. 推理模型与模型路由/Test-time compute / reasoning effort
  - G/G8. 推理模型与模型路由/什么时候不要用 reasoning model

#### Planner / executor split

- pathKey: `G/G8. 推理模型与模型路由/Planner / executor split`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G8-h762r2-1.json`
- status: draft
- definition: Planner / executor split 指的是把“规划任务步骤”和“执行具体动作”拆给不同模型或不同阶段处理：planner 负责分解目标、选择策略，executor 负责调用工具、读写状态和产出结果。
- importance: 这种拆分通常能把高成本推理集中在少数关键步骤，把批量执行交给便宜模型或工具，从而兼顾质量与效率。
- minimum demo: 准备一组多步任务，做两条链路：一条由单模型从头做到底，另一条先由 planner 生成 plan，再由 executor 逐步执行并回填状态，比较成功率和成本。
- prerequisites:
  - G/G8. 推理模型与模型路由/Reasoning models vs GPT models
  - K/K2. 执行形态/Hybrid system
- core metrics:
  - plan quality
  - execution success rate
  - recovery rate
  - cost per completed workflow
- next:
  - J/J3. 工具调用/Tool routing
  - K/K5. 图式编排/Conditional branches

#### Verifier / judge

- pathKey: `G/G8. 推理模型与模型路由/Verifier / judge`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G8-h762r2-1.json`
- status: draft
- definition: Verifier / judge 是独立于生成器的检查层，用来判断答案、计划、工具结果或结构化输出是否满足给定证据、规则和目标，而不是盲信单次生成结果。
- importance: 只靠一个生成模型同时“生成+自证”通常不够稳。引入 verifier 后，系统可以把高风险场景里的错误拦截、重试或升级，而不是把每次输出都直接交给用户。
- minimum demo: 对一组结构化输出或高风险回答，先让模型直接输出，再让 verifier 判断是否通过。统计 verifier 的拦截命中率、误杀率和整体正确率变化。
- prerequisites:
  - G/G8. 推理模型与模型路由/Planner / executor split
  - M/M3. Agent 级评测/Outcome checks
- core metrics:
  - precision
  - recall
  - false reject rate
  - post-verification accuracy
- next:
  - M/M3. Agent 级评测/Trace grading
  - M/M3. Agent 级评测/Policy compliance

#### Test-time compute / reasoning effort

- pathKey: `G/G8. 推理模型与模型路由/Test-time compute / reasoning effort`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G8-h762r2-1.json`
- status: draft
- definition: Test-time compute / reasoning effort 指的是在推理阶段动态分配更多步骤、更多 token、更强模型或更多候选分支，以提升复杂任务成功率的策略。
- importance: 它解释了为什么同一个基础模型在不同设置下会表现出完全不同的复杂任务能力，也决定了推理强化模型和值得升级的任务边界。
- minimum demo: 对同一批复杂任务，在低、中、高 reasoning effort 下分别运行，记录正确率、时延、token 消耗和边际收益，看额外计算何时开始不划算。
- prerequisites:
  - G/G5. 能力面/多步推理
  - G/G4. 生成与解码/Sampling
- core metrics:
  - accuracy gain
  - latency
  - token growth
  - marginal utility
- next:
  - G/G7. 模型类型细分/推理强化模型
  - G/G8. 推理模型与模型路由/Model routing policy

#### Model routing policy

- pathKey: `G/G8. 推理模型与模型路由/Model routing policy`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G8-h762r2-1.json`
- status: draft
- definition: Model routing policy 是把任务特征、模态、风险等级、时延预算和成本约束转成“该选哪个模型、是否升级、是否需要 verifier 或 fallback”的决策规则。
- importance: 没有路由策略，多模型系统只会退化成手工经验和隐性成本。好的路由策略能把高成本能力集中在真正需要的请求上，并让系统在预算和 SLA 下保持稳定。
- minimum demo: 先做一个简单规则路由器：按任务复杂度、是否需要多模态、是否要求结构化输出来选模型。再用日志复盘路由误判，并逐步补规则或训练分类器。
- prerequisites:
  - G/G7. 模型类型细分/多模态模型
  - J/J3. 工具调用/Tool routing
  - G/G8. 推理模型与模型路由/Test-time compute / reasoning effort
- core metrics:
  - routing quality
  - fallback rate
  - SLA hit rate
  - cost efficiency
- next:
  - K/K5. 图式编排/Conditional branches
  - M/M3. Agent 级评测/Routing quality

#### 什么时候不要用 reasoning model

- pathKey: `G/G8. 推理模型与模型路由/什么时候不要用 reasoning model`
- node type: `concept-group`
- detail source: `data/details/leaves-G-G8-h762r2-1.json`
- status: draft
- definition: 这条节点强调的是边界意识：并不是所有任务都值得上 reasoning model。提取、分类、固定格式输出、低时延高吞吐请求和大量重复性工作，往往更适合通用模型、小模型或专项模型。
- importance: 很多团队会高估 reasoning model 的适用面，结果把预算花在没有必要的地方，还让系统整体响应变慢。知道什么时候不用，和知道什么时候该用同样重要。
- minimum demo: 挑一组简单提取、FAQ、短文本分类和固定 schema 输出任务，用 reasoning model 与通用模型对比，统计准确率差异是否足以覆盖延迟和成本上涨。
- prerequisites:
  - G/G8. 推理模型与模型路由/Reasoning models vs GPT models
  - G/G7. 模型类型细分/小模型 / 边缘模型
- core metrics:
  - over-upgrade rate
  - avoidable cost
  - latency savings
  - quality parity rate
- next:
  - G/G7. 模型类型细分/通用对话模型
  - G/G7. 模型类型细分/专项模型

## H. 模型适配、后训练与对齐

- pathKey: `H`
- node type: `domain`
- stage: 03 大模型系统
- graph summary: PEFT 把“只调整少量参数”的适配方法系统化；TRL 覆盖 SFT、DPO、GRPO 等后训练方法；OpenAI 的 SFT、fine-tuning、RFT、model optimization 则把“行为定制、偏好优化、蒸馏、评测驱动优化”连成一条后训练链。
- relation notes:
  - Prompt ≠ Fine-tuning
  - PEFT ⊂ Fine-tuning
  - QLoRA = 量化 + LoRA 训练路径
  - Distillation ≠ Quantization
  - 模型适配、后训练与对齐 与 评测、安全与治理 强连接：后训练必须靠评测收敛，而不是只看主观感觉。
- detail source: `data/details/domain-H.json`
- status: complete
- definition: 本 domain 研究如何在预训练之后，或在不重做预训练的前提下，把基础模型改造成符合目标场景的系统行为：通过推理时控制、监督式后训练、偏好优化、参数高效适配、压缩与配套数据工程，让模型在任务完成、格式服从、工具使用、安全边界、速度成本等维度上朝目标方向移动。它关注的核心不是“模型会不会继续预测 token”，而是“模型能否以可部署、可评测、可维护的方式稳定地产生目标行为”。
- importance: 真实项目里，产品差异往往不来自重新训练一个更大的底座，而来自后训练与适配是否做对。相同基座模型在数据、目标函数、推理约束和部署方式不同的情况下，可能表现出完全不同的稳定性、可靠性和成本结构。理解这个 domain，能帮助你判断该先改 prompt、先补数据、先做 LoRA / SFT、先做偏好优化，还是先解决量化与评测回归，从而把“模型能力”转成“系统能力”。
- minimum demo: 选一个现成基座模型和一个小任务（如结构化抽取、客服分类、工具调用或 SQL 生成），在同一评测集上做三组对照：① 仅用 system prompt / few-shot；② 加少量监督式适配（如 LoRA）；③ 在固定任务上加入偏好或规则约束。统一记录正确率、格式有效率、工具调用成功率、拒答/越权率、延迟、token 成本和回归案例。这个最小实验能把“控制”“适配”“对齐”“效率”之间的边界与代价讲清楚。
- hardware budget: 入门阶段，提示控制、离线评测、量化推理和小样本验证可从 API、CPU 或单张消费级 GPU 开始。小到中等规模的 LoRA / QLoRA 常见于 1–4 张 GPU；更大规模 SFT、在线偏好优化或 RL 型流程通常需要多卡训练、稳定的数据/评测流水线和可重复的推理环境。对这个 domain 来说，硬件不是唯一门槛，高质量数据、可靠标注、回归评测和上线观测能力往往同样昂贵。
- examples:
  - 仅靠 system prompt + schema 约束，让模型稳定输出 JSON 工单或 API 参数
  - 用少量高质量样本做 LoRA，使通用模型适应法律、医疗、客服等特定领域术语与语气
  - 对工具调用轨迹做监督式后训练，提高函数选择和参数填充正确率
  - 利用偏好数据优化回答风格，减少冗长、攻击性、越权或明显不受欢迎的回答
  - 在部署前做量化或蒸馏，用更低显存和更高吞吐承接同类任务
  - 对同一业务任务同时比较 prompt-only、SFT/LoRA、偏好优化三种路线的收益与回归
- pitfalls:
  - 把问题简单归因于“模型不够强”，忽视任务定义、数据质量和评测口径
  - 没有 prompt-only 基线，导致本可不改权重的问题被过度微调
  - 训练集、验证集、测试集分离不严，出现污染、泄漏或评测集过拟合
  - 只盯训练损失，不看格式服从、工具成功率、稳定性和安全回归
  - 偏好优化过强，得到更圆滑却更空泛、更阿谀或更冗长的回答
  - 领域适配后不做通用能力回归检查，导致目标域外表现明显退化
  - 量化或蒸馏后只看吞吐和显存，不看长上下文、代码与工具调用退化
- core metrics:
  - 任务完成率 / 业务目标达成率
  - 离线正确率：EM、F1、pass@k、win rate 等
  - 格式遵循率：JSON / schema 有效率、字段完整率
  - 工具调用质量：工具选择正确率、参数正确率、端到端成功率
  - 对齐质量：偏好胜率、人评满意度、违规率、误拒率
  - 稳定性：温度扰动下方差、重复请求一致性、多轮对话退化
  - 效率：首 token 延迟、吞吐、显存占用、单位请求成本
  - 回归：目标域提升与通用能力下降的差值
- toolchain:
  - 数据处理：清洗、去重、切分、去污染检查
  - 标注与偏好收集：人工标注、rubric、grader / verifier
  - 训练框架：Transformers / PEFT / TRL
  - 高效训练与量化：bitsandbytes、FSDP / DeepSpeed
  - 训练封装：Axolotl、LLaMA-Factory、Unsloth 等
  - 推理与服务：vLLM、TGI、SGLang 等
  - 评测与观测：离线基准、回归集、在线 A/B、日志分析
- failure signs:
  - 离线分数上升，但真实用户任务成功率没有提升
  - JSON 更规范了，但答案信息量明显下降或经常空字段
  - 模型更爱调用工具了，但端到端成功率反而下降
  - 安全拒答变多，同时正常请求的误拒率也明显升高
  - 目标域表现提高，但通用问答、长文推理或代码能力明显回退
  - 量化后显存变小、吞吐变高，但长上下文和复杂输入失真
  - 不同温度、不同批次或不同 prompt 模板下结果波动很大
- next:
  - H/H6. 行为优化维度
  - H/H1. 不改权重的控制
  - H/H7. 后训练数据构建
  - H/H2. 监督式后训练
  - H/H4. 参数高效适配
  - H/H3. 偏好优化与对齐
  - H/H5. 压缩与效率优化

### H1. 不改权重的控制

- pathKey: `H/H1. 不改权重的控制`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-H.json`
- status: draft
- definition: 不改权重的控制指的是在不重新训练模型参数的前提下，仅通过 prompt 设计、system prompt、few-shot、模板、结构约束和工具 schema 来塑造输出行为。它解决的是“先用推理时控制把模型用对”，而不是“先训练再看效果”。
- importance: 这是后训练之前最应该先跑通的一层。很多问题其实不需要立刻做 SFT 或 LoRA，只要把上下文组织、角色指令、结构化输出和工具接口约束清楚，系统就能立刻获得稳定性提升，而且迭代速度远高于改权重。
- minimum demo: 针对一个固定任务，做四组对照：1）裸 prompt；2）加入 system prompt；3）加入 few-shot；4）加入结构化输出或工具 schema。统一记录正确率、格式成功率、工具调用成功率和输出波动，判断问题到底是控制不足还是需要训练。
- hardware budget: 这一路线几乎不需要训练硬件，主要成本是提示设计、样例构造、批量评测和日志回放。绝大多数实验通过云 API、本地推理或 notebook 即可完成。
- examples:
  - 用 system prompt 明确角色、边界和输出原则，而不是每个 user prompt 都重复说明。
  - 用少量高质量 few-shot 样例把模型拉到目标格式和目标任务分布上。
  - 用 JSON Schema 或 typed output 减少结构化结果的解析失败。
  - 用工具 schema 明确参数名、约束和字段语义，降低函数调用错误率。
- pitfalls:
  - 没有 prompt-only 基线，就直接进入权重适配。
  - 把 system prompt、few-shot 和模板规则堆得过长，反而挤压有效上下文。
  - 把结构化输出当成“永远正确”，却不做 validation 和 recovery。
  - 工具 schema 只描述名称，不描述参数约束、单位、边界和异常返回。
- prerequisites:
  - G/G3. 上下文与记忆/上下文记忆（prompt context）
  - J/J2. 结构化输出
  - J/J3. 工具调用
- core metrics:
  - instruction adherence
  - format success rate
  - tool call accuracy
  - variance across retries
- toolchain:
  - prompt playground
  - prompt templates
  - schema validators
  - trace logging
- failure signs:
  - 轻微改 prompt 就导致结果大幅波动。
  - 输出格式偶尔成功但整体不可解析。
  - 工具经常被选错、参数经常填错，但系统没有明确 schema 约束。
  - system prompt 越写越长，却不知道哪一段真正有效。
- next:
  - H/H1. 不改权重的控制/Prompt engineering
  - H/H1. 不改权重的控制/System prompt
  - H/H1. 不改权重的控制/Few-shot / in-context learning
  - H/H1. 不改权重的控制/Prompt templates
  - H/H1. 不改权重的控制/Structured outputs
  - H/H1. 不改权重的控制/Tool schemas
  - H/H2. 监督式后训练

#### Prompt engineering

- pathKey: `H/H1. 不改权重的控制/Prompt engineering`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H1-h83ff8-1.json`
- status: draft
- definition: Prompt engineering 是围绕任务目标、上下文组织和约束表达来设计输入，使模型在不改权重的情况下更稳定地产生目标行为。
- importance: 它通常是最便宜、最快速的行为优化手段，也是判断是否需要进入 SFT 或 LoRA 之前的必经基线。
- minimum demo: 为同一任务设计两到三版 prompt，对比正确率、输出稳定性和 token 成本，确认哪部分提示真正带来收益。
- prerequisites:
  - G/G5. 能力面/指令跟随
  - J/J1. 模型接口层/Prompt composition
- core metrics:
  - task success rate
  - variance
  - prompt length
  - cost
- next:
  - H/H1. 不改权重的控制/Prompt templates
  - H/H2. 监督式后训练/SFT

#### System prompt

- pathKey: `H/H1. 不改权重的控制/System prompt`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H1-h83ff8-1.json`
- status: draft
- definition: System prompt 用来定义模型的长期角色、边界、优先级和默认行为，是多轮会话和统一产品行为的高层约束层。
- importance: 它能把跨请求共享的规则稳定前置，减少用户输入对底层策略的扰动，也是安全边界和输出风格控制的重要入口。
- minimum demo: 让同一组用户请求分别在有和没有 system prompt 的条件下执行，比较越权率、格式成功率和行为一致性。
- prerequisites:
  - J/J1. 模型接口层/System / user / tool messages
  - H/H1. 不改权重的控制/Prompt engineering
- core metrics:
  - behavior consistency
  - policy adherence
  - override resistance
- next:
  - H/H1. 不改权重的控制/Few-shot / in-context learning
  - H/H1. 不改权重的控制/Structured outputs

#### Few-shot / in-context learning

- pathKey: `H/H1. 不改权重的控制/Few-shot / in-context learning`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H1-h83ff8-1.json`
- status: draft
- definition: Few-shot / in-context learning 通过在上下文里提供少量示例，让模型临时适应目标分布、格式或决策边界，而不修改参数。
- importance: 它常常能在零训练成本下显著提高格式稳定性和任务对齐度，尤其适合样本稀少、任务变化快的场景。
- minimum demo: 准备 0-shot、1-shot、3-shot 三组设置，对同一任务批量评测，观察性能提升何时开始被上下文成本抵消。
- prerequisites:
  - G/G3. 上下文与记忆/上下文记忆（prompt context）
  - H/H1. 不改权重的控制/System prompt
- core metrics:
  - few-shot lift
  - context cost
  - format retention
- next:
  - H/H1. 不改权重的控制/Prompt templates
  - H/H2. 监督式后训练/Task-specific tuning

#### Prompt templates

- pathKey: `H/H1. 不改权重的控制/Prompt templates`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H1-h83ff8-1.json`
- status: draft
- definition: Prompt templates 是把常用上下文槽位、规则段落和示例结构固化成可复用模板，减少临时拼接和人为遗漏。
- importance: 模板化是把 prompt engineering 从一次性技巧变成工程资产的关键步骤，也是批量评测和线上稳定交付的前提。
- minimum demo: 把一组常见请求改造成模板渲染输入，比较模板化前后的复用效率、错误率和线上可观测性。
- prerequisites:
  - H/H1. 不改权重的控制/Prompt engineering
  - J/J1. 模型接口层/Prompt composition
- core metrics:
  - template reuse rate
  - authoring error rate
  - consistency
- next:
  - H/H1. 不改权重的控制/Structured outputs
  - H/H1. 不改权重的控制/Tool schemas

#### Structured outputs

- pathKey: `H/H1. 不改权重的控制/Structured outputs`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H1-h83ff8-1.json`
- status: draft
- definition: Structured outputs 指通过 JSON mode、JSON Schema 或 typed outputs 等方式，让模型输出满足预期结构而不是自由文本。
- importance: 它是把模型结果可靠接进程序和工作流的关键控制层。没有结构约束，很多“看起来能用”的 demo 一进入真实系统就会被解析失败拖垮。
- minimum demo: 对同一批抽取任务分别使用自由生成与 schema 约束输出，统计 parse 成功率、字段完整率和重试次数。
- prerequisites:
  - J/J2. 结构化输出/JSON Schema
  - H/H1. 不改权重的控制/Prompt templates
- core metrics:
  - parse success rate
  - schema adherence
  - retry rate
- next:
  - J/J2. 结构化输出/Validation
  - H/H1. 不改权重的控制/Tool schemas

#### Tool schemas

- pathKey: `H/H1. 不改权重的控制/Tool schemas`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H1-h83ff8-1.json`
- status: draft
- definition: Tool schemas 用明确的函数签名、参数类型、字段说明和约束，把工具调用从模糊自然语言接口变成可验证的结构化接口。
- importance: 模型是否会调用工具，不只取决于 function calling 能力，还强烈取决于 schema 是否清晰、边界是否明确、异常是否有约定。
- minimum demo: 对同一工具设计一版宽松 schema 和一版严格 schema，比较参数填充正确率、错误调用率和 fallback 次数。
- prerequisites:
  - J/J3. 工具调用/Tool schema design
  - H/H1. 不改权重的控制/Structured outputs
- core metrics:
  - argument accuracy
  - tool call success rate
  - fallback rate
- next:
  - J/J3. 工具调用/Tool routing
  - H/H2. 监督式后训练/Tool / function-calling fine-tuning

### H2. 监督式后训练

- pathKey: `H/H2. 监督式后训练`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-H.json`
- status: draft
- definition: 监督式后训练是在预训练完成后，用明确的输入—输出样本继续优化模型参数，使模型在任务风格、格式、领域知识、工具调用或特定能力上更稳定地朝目标行为收敛。它通常是最直接、最常见的改权重方法。
- importance: 当 prompt-only 控制已经逼近上限，或者系统需要把某类行为稳定沉淀成默认习惯时，SFT 和相关监督式适配通常是第一选择。它决定了模型在真实业务任务上的“默认姿势”，也是后续偏好优化、参数高效适配和评测回归的核心枢纽。
- minimum demo: 选一个结构化抽取、客服分类或工具调用任务，先做 prompt-only 基线，再用少量高质量样本做一次监督式适配，对比离线正确率、格式成功率、工具成功率、目标域收益和通用能力回归。
- hardware budget: 小规模 SFT 或 LoRA 往往从单卡或少量多卡就能起步，但真正决定效果的往往不是 GPU 数量，而是样本质量、切分方式、eval 设计和回归集是否足够扎实。
- examples:
  - 用 SFT 把通用模型稳定拉到某个固定 JSON 工单格式。
  - 用领域微调让模型更熟悉医疗、法律、金融等专门术语和表达习惯。
  - 对工具调用轨迹做监督式训练，提升函数选择和参数填充正确率。
  - 对视觉任务做微调，让模型更好理解企业内部图像或文档版式。
- pitfalls:
  - 数据量不大但分布很偏，导致目标域提升同时通用能力明显回退。
  - 只看训练损失，不看结构化输出正确率、工具成功率和线上任务达成率。
  - 训练、验证、测试没有严格分开，离线效果被污染高估。
  - 把所有问题都交给 SFT，忽略本可通过 prompt 或 schema 解决的控制问题。
- prerequisites:
  - F/F7. 后训练数据构建
  - H/H1. 不改权重的控制
  - M/M1. 模型级评测
- core metrics:
  - offline accuracy
  - target-domain lift
  - format success rate
  - regression delta
- toolchain:
  - Transformers / TRL
  - PEFT / LoRA stacks
  - training datasets
  - offline eval harness
- failure signs:
  - 训练集指标很好，但验证集和线上任务没有同步提升。
  - 目标任务变准了，但其他任务明显退化。
  - 工具调用更频繁了，但端到端成功率没有提升。
  - 不同 checkpoint 差异很大，却没有稳定评测支撑选型。
- next:
  - H/H2. 监督式后训练/SFT
  - H/H2. 监督式后训练/Domain fine-tuning
  - H/H2. 监督式后训练/Style fine-tuning
  - H/H2. 监督式后训练/Tool / function-calling fine-tuning
  - H/H2. 监督式后训练/Vision fine-tuning
  - H/H2. 监督式后训练/Task-specific tuning
  - H/H4. 参数高效适配
  - H/H6. 行为优化维度

#### SFT

- pathKey: `H/H2. 监督式后训练/SFT`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H2-1m21ex1-1.json`
- status: draft
- definition: SFT（supervised fine-tuning）是用明确的输入—输出配对样本直接继续训练模型，让它更稳定地学会目标任务格式、风格和默认行为。
- importance: 它通常是最直接的改权重方式，也是把 prompt-only 中难以稳定控制的行为沉淀进参数里的第一步。
- minimum demo: 针对一个固定任务构造几十到几百条高质量样本，做一次小规模 SFT / LoRA，并与 prompt-only 基线比较目标任务收益和通用回归。
- prerequisites:
  - F/F6. 数据在系统中的角色/SFT 数据 → 决定任务风格与稳定性
  - H/H1. 不改权重的控制/Prompt engineering
- core metrics:
  - offline accuracy
  - format success rate
  - target-task lift
  - regression delta
- next:
  - H/H2. 监督式后训练/Domain fine-tuning
  - H/H2. 监督式后训练/Style fine-tuning

#### Domain fine-tuning

- pathKey: `H/H2. 监督式后训练/Domain fine-tuning`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H2-1m21ex1-1.json`
- status: draft
- definition: Domain fine-tuning 是让模型更适应某个领域的术语、文档结构、任务边界和常见推理模式，例如医疗、法律、金融、制造或内部知识体系。
- importance: 通用模型在专业领域里经常不是“完全不会”，而是术语理解不稳、证据引用不准、边界意识不够。领域微调可以把这些默认行为拉回到目标分布上。
- minimum demo: 对一个专业领域任务，分别做 prompt-only 和 domain fine-tuning，对比领域专有名词理解、事实准确率和通用任务退化。
- prerequisites:
  - H/H2. 监督式后训练/SFT
  - F/F7. 后训练数据构建/Train / validation / test split
- core metrics:
  - domain accuracy
  - term fidelity
  - general regression
- next:
  - H/H6. 行为优化维度/更适应特定领域
  - H/H2. 监督式后训练/Task-specific tuning

#### Style fine-tuning

- pathKey: `H/H2. 监督式后训练/Style fine-tuning`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H2-1m21ex1-1.json`
- status: draft
- definition: Style fine-tuning 关注的是回答语气、篇幅、礼貌程度、企业话术或文案风格的一致性，而不是任务知识本身。
- importance: 在客服、品牌、内容生产和企业助手场景里，风格一致性本身就是可交付质量的一部分；如果只靠 prompt 控制，往往会在长对话和复杂任务下慢慢漂移。
- minimum demo: 准备一组同任务不同风格要求的样本，比较 prompt-only 与 style fine-tuning 在风格一致性和事实保真上的差异。
- prerequisites:
  - H/H2. 监督式后训练/SFT
  - F/F7. 后训练数据构建/Instruction crafting
- core metrics:
  - style consistency
  - tone adherence
  - content fidelity
- next:
  - H/H6. 行为优化维度/更短/更长
  - H/H6. 行为优化维度/更稳定

#### Tool / function-calling fine-tuning

- pathKey: `H/H2. 监督式后训练/Tool / function-calling fine-tuning`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H2-1m21ex1-1.json`
- status: draft
- definition: Tool / function-calling fine-tuning 是通过带工具轨迹或函数调用标注的数据，让模型更稳定地学会何时调用工具、如何填参数、如何处理返回结果。
- importance: 很多 Agent 失败根源并不是模型不会回答，而是不会正确调工具。把工具行为写进监督数据，通常比只靠 schema 和 prompt 更稳。
- minimum demo: 准备一组带正确工具选择和参数填写的样本，对比 fine-tuning 前后在工具选择正确率、参数正确率和端到端成功率上的变化。
- prerequisites:
  - J/J3. 工具调用/Function calling
  - H/H2. 监督式后训练/SFT
- core metrics:
  - tool selection accuracy
  - argument accuracy
  - end-to-end tool success
- next:
  - J/J3. 工具调用/Tool execution
  - H/H6. 行为优化维度/更会调用工具

#### Vision fine-tuning

- pathKey: `H/H2. 监督式后训练/Vision fine-tuning`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H2-1m21ex1-1.json`
- status: draft
- definition: Vision fine-tuning 是针对图像、文档、图文问答或视觉指令等任务做监督式适配，让模型更好理解目标视觉分布和标注要求。
- importance: 多模态模型虽然有通用视觉能力，但面对企业内部图像、特定版式、质检图片或复杂文档结构时，往往仍需要定向适配。
- minimum demo: 针对一个图像分类、OCR 文档理解或图文问答任务，比较 prompt-only 与 vision fine-tuning 后的 grounded accuracy 和误判模式。
- prerequisites:
  - E/E5. 多模态/视觉语言模型（VLM）
  - M/M1. 模型级评测/多模态能力
- core metrics:
  - grounded accuracy
  - visual robustness
  - hallucination rate
- next:
  - H/H2. 监督式后训练/Task-specific tuning
  - G/G7. 模型类型细分/多模态模型

#### Task-specific tuning

- pathKey: `H/H2. 监督式后训练/Task-specific tuning`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H2-1m21ex1-1.json`
- status: draft
- definition: Task-specific tuning 是围绕某个窄任务目标做监督式适配，例如固定 schema 抽取、审核分类、SQL 生成、代码修复或特定工作流中的单一步骤。
- importance: 它通常是最容易带来可度量收益的微调路线，因为任务边界清晰、指标明确、样本构造也更可控。
- minimum demo: 选一个窄任务做小规模 tuning，并与 domain/style tuning 对比，看哪个方案在目标指标、通用回归和维护成本之间更划算。
- prerequisites:
  - H/H2. 监督式后训练/Domain fine-tuning
  - F/F7. 后训练数据构建/Instruction crafting
- core metrics:
  - task accuracy
  - error type distribution
  - maintenance cost
- next:
  - H/H6. 行为优化维度/更准确
  - H/H6. 行为优化维度/更结构化

### H3. 偏好优化与对齐

- pathKey: `H/H3. 偏好优化与对齐`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-H.json`
- status: draft
- definition: 偏好优化与对齐关注的不是让模型“知道更多”，而是让模型在多个可接受答案之间，更稳定地偏向符合人类偏好、政策边界、产品风格和风险要求的那一类输出。它通常建立在 SFT 之后，通过偏好对、奖励模型、在线反馈或规则约束，把“什么答案更好”进一步写进训练目标。
- importance: 很多系统问题并不是模型不会答，而是答得太长、太冒进、太油滑、太会迎合、太容易越权，或者在多解任务里总选错优化方向。理解这一层后，才能判断某个问题该靠 prompt、该靠监督数据、还是该靠偏好优化与 verifier / policy 体系来收敛。
- minimum demo: 选一组存在明显风格、风险或多解差异的任务，例如拒答边界、摘要长短、客服语气或高风险建议。分别比较 SFT 基线、DPO / 偏好优化后模型和带 verifier 的推理链路，记录 win rate、违规率、误拒率、冗长度和用户偏好命中率。
- hardware budget: 小规模偏好优化可以从单机多卡或少量多卡起步，但真正昂贵的部分往往不是算力本身，而是偏好数据采集、标注一致性、在线反馈与离线回归评测。若做 RLHF 或在线策略优化，实验与观测成本会进一步上升。
- examples:
  - 同一个问题都能答对，但偏好优化后模型更倾向于简洁、稳妥且带边界提示的答案。
  - 对安全场景做 policy alignment 后，模型更少直接给出高风险操作步骤。
  - 在客服或品牌文案中，模型回答的语气、长度和措辞更接近产品要求，而不是自由发挥。
  - 高风险输出先过 verifier 或 judge，能拦截一部分表面流畅但违反规则的回答。
- pitfalls:
  - 把偏好优化误当成“任何问题都能继续提分”的通用补药。
  - 偏好数据标准不稳定，导致模型学到的是标注噪声和审美漂移。
  - 只看 win rate，不看安全性、误拒率、信息量和事实保真。
  - 为了让模型更安全而过度收缩，最后正常请求也频繁误拒或空话化。
- prerequisites:
  - H/H2. 监督式后训练
  - F/F6. 数据在系统中的角色/偏好/奖励数据 → 决定对齐方向
  - F/F7. 后训练数据构建/Preference data
  - F/F7. 后训练数据构建/Reward / verifier data
- core metrics:
  - win rate
  - policy compliance
  - refusal / overrefusal rate
  - verbosity
  - hallucination / risk rate
- toolchain:
  - preference labeling
  - reward / verifier pipelines
  - TRL / alignment training stacks
  - offline eval and online A/B
- failure signs:
  - win rate 上升，但事实错误或空泛回答明显增多。
  - 模型更爱拒答了，但业务成功率下降。
  - 不同批次偏好数据训练出的模型风格和边界漂移很大。
  - 高风险场景看似更安全，实际上只是更会说漂亮话。
- next:
  - H/H3. 偏好优化与对齐/Reward modeling
  - H/H3. 偏好优化与对齐/DPO
  - H/H3. 偏好优化与对齐/Online DPO
  - H/H3. 偏好优化与对齐/GRPO
  - H/H3. 偏好优化与对齐/RLHF
  - H/H3. 偏好优化与对齐/RFT
  - H/H3. 偏好优化与对齐/Policy / constitutional alignment
  - H/H6. 行为优化维度

#### Reward modeling

- pathKey: `H/H3. 偏好优化与对齐/Reward modeling`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H3-cov35w-1.json`
- status: draft
- definition: Reward modeling 是用人类偏好或评分数据训练一个独立评分器，让系统学会对候选回答打分，表示“哪个更好、风险更低、风格更符合要求”。
- importance: 它是许多偏好优化与 RLHF 路线的核心中间层，因为没有稳定评分器，就很难把主观偏好转成可训练信号。
- minimum demo: 准备一批偏好对或分级样本，训练一个简单 reward model，并检查它对明显优劣样本的排序一致性。
- prerequisites:
  - F/F7. 后训练数据构建/Reward / verifier data
  - H/H3. 偏好优化与对齐/DPO
- core metrics:
  - ranking accuracy
  - calibration
  - agreement with human preference
- next:
  - H/H3. 偏好优化与对齐/RLHF
  - H/H3. 偏好优化与对齐/Policy / constitutional alignment

#### DPO

- pathKey: `H/H3. 偏好优化与对齐/DPO`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H3-cov35w-1.json`
- status: draft
- definition: DPO（Direct Preference Optimization）直接利用偏好对优化策略模型，不显式单独训练 reward model，也不走完整 RL 流程。
- importance: 它通常比 RLHF 更简单、更稳定，因而成为很多偏好优化项目的入门路线和工业常用基线。
- minimum demo: 准备一小批 chosen / rejected 样本，用 DPO 训练一个小模型或 adapter，并与 SFT 基线比较风格、边界和 win rate。
- prerequisites:
  - H/H2. 监督式后训练/SFT
  - F/F7. 后训练数据构建/Preference data
- core metrics:
  - win rate
  - training stability
  - policy compliance
- next:
  - H/H3. 偏好优化与对齐/Online DPO
  - H/H3. 偏好优化与对齐/Policy / constitutional alignment

#### Online DPO

- pathKey: `H/H3. 偏好优化与对齐/Online DPO`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H3-cov35w-1.json`
- status: draft
- definition: Online DPO 把偏好优化从离线固定偏好数据扩展到在线采样与更新，使策略在训练过程中不断根据当前模型生成的候选进行偏好学习。
- importance: 它能更贴近当前模型分布，减少只在旧数据上优化带来的失真，但同时也更容易引入反馈回路和训练不稳定。
- minimum demo: 在一个小任务上先做离线 DPO，再加入一轮在线采样偏好更新，比较收益是否足以覆盖额外复杂度。
- prerequisites:
  - H/H3. 偏好优化与对齐/DPO
  - M/M1. 模型级评测/稳定性
- core metrics:
  - online win rate gain
  - distribution shift robustness
  - training variance
- next:
  - H/H3. 偏好优化与对齐/GRPO
  - H/H3. 偏好优化与对齐/RLHF

#### GRPO

- pathKey: `H/H3. 偏好优化与对齐/GRPO`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H3-cov35w-1.json`
- status: draft
- definition: GRPO 可以理解为一类围绕群组相对表现进行优化的策略方法，重点不是绝对分数，而是同批候选之间的相对优劣比较与更新。
- importance: 它适合那些“相对更好”比“绝对正确”更容易判定的任务，也常出现在推理和过程优化的实验路线里。
- minimum demo: 对同一问题采样多份候选回答，用相对排序或 group-based 评分比较不同候选，再观察策略更新后的表现变化。
- prerequisites:
  - H/H3. 偏好优化与对齐/Online DPO
  - F/F7. 后训练数据构建/Rubric-based graders for RFT
- core metrics:
  - group ranking quality
  - policy improvement rate
  - sampling cost
- next:
  - H/H3. 偏好优化与对齐/RFT
  - M/M1. 模型级评测/推理能力

#### RLHF

- pathKey: `H/H3. 偏好优化与对齐/RLHF`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H3-cov35w-1.json`
- status: draft
- definition: RLHF（Reinforcement Learning from Human Feedback）是把人类偏好或奖励信号接进强化学习流程，让策略模型在与 reward 或 feedback 交互中继续优化。
- importance: 它是偏好优化的经典路径，适合需要更强策略塑形和复杂目标权衡的场景，但实现、观测和稳定性要求都更高。
- minimum demo: 在一个受控小任务上复盘 SFT → reward / preference → RLHF 的完整链路，并比较是否真的优于更轻量的 DPO 基线。
- prerequisites:
  - H/H3. 偏好优化与对齐/Reward modeling
  - H/H3. 偏好优化与对齐/DPO
- core metrics:
  - win rate
  - reward hacking risk
  - training stability
  - cost
- next:
  - H/H3. 偏好优化与对齐/Policy / constitutional alignment
  - M/M1. 模型级评测/安全性

#### RFT

- pathKey: `H/H3. 偏好优化与对齐/RFT`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H3-cov35w-1.json`
- status: draft
- definition: RFT 更强调围绕任务结果、过程打分或 rubric grader 来优化模型，使模型在特定目标上学会更可评测的行为，而不只是泛化风格偏好。
- importance: 它常用于有明确 outcome / process rubric 的场景，例如代码、数学、复杂工具链路或有 verifier 的任务。
- minimum demo: 构造带 rubric grader 的小任务，对比普通偏好优化和面向 rubric 的 RFT 路线在目标指标上的差异。
- prerequisites:
  - F/F7. 后训练数据构建/Rubric-based graders for RFT
  - M/M3. Agent 级评测/Grader rubric
- core metrics:
  - grader score
  - task success rate
  - process correctness
- next:
  - M/M3. Agent 级评测/Process checks
  - M/M3. Agent 级评测/Outcome checks

#### Policy / constitutional alignment

- pathKey: `H/H3. 偏好优化与对齐/Policy / constitutional alignment`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H3-cov35w-1.json`
- status: draft
- definition: Policy / constitutional alignment 是用显式规则、政策原则或宪法式约束，把模型行为往可接受边界内拉，而不仅仅依赖隐式偏好样本。
- importance: 当系统需要稳定遵守安全、合规和产品原则时，显式规则体系通常比模糊偏好更可审计，也更适合作为 verifier 和拒答边界的依据。
- minimum demo: 为一组高风险任务写出明确规则或 rubric，比较纯偏好优化和带政策约束流程在违规率、误拒率和可解释性上的差异。
- prerequisites:
  - H/H3. 偏好优化与对齐/DPO
  - M/M3. Agent 级评测/Policy compliance
- core metrics:
  - policy compliance
  - overrefusal rate
  - explainability
- next:
  - M/M1. 模型级评测/安全性
  - M/M3. Agent 级评测/Policy compliance

### H4. 参数高效适配

- pathKey: `H/H4. 参数高效适配`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-H.json`
- status: draft
- definition: 参数高效适配（PEFT）关注的是：不全量更新底座模型参数，而是只训练少量附加参数、低秩矩阵或轻量模块，用更低显存、更低训练成本把模型拉向目标行为。
- importance: 在真实工程里，PEFT 往往是最有性价比的改权重路线。它允许团队快速迭代多个领域版本、保留底座兼容性、降低训练资源门槛，也更适合在已有基模之上做局部能力沉淀。
- minimum demo: 选一个窄任务，同时做 prompt-only 基线和一次小规模 LoRA / QLoRA 适配，对比目标任务增益、训练资源消耗、部署复杂度和回归情况，判断是否值得从控制层升级到参数适配。
- hardware budget: PEFT 的主要价值就在于显著降低训练门槛。LoRA 往往能在较少显存下完成有效适配；QLoRA 进一步通过量化降低底座占用，但也会带来精度与工程复杂度权衡。相比全量微调，PEFT 更适合快速试错和多版本共存。
- examples:
  - 用 LoRA 快速做一个法律问答版本，而不必全量重训整个底座。
  - 用 QLoRA 在受限显存环境下完成中等规模 SFT 实验。
  - 为不同业务线维护多套 adapter，在同一底座模型上按需切换。
  - 对工具调用或结构化抽取任务做轻量适配，快速观察收益是否显著。
- pitfalls:
  - 只看到显存省了，却忽略了适配效果上限和部署切换成本。
  - 把所有任务都默认走 LoRA，而不先确认 prompt-only 是否已经足够。
  - QLoRA 节省了资源，但没有认真检查量化带来的精度退化。
  - 同时堆很多 adapter，却没有清楚的版本管理和回归评测。
- prerequisites:
  - H/H2. 监督式后训练
  - L/L3. 推理优化/Quantized inference
  - M/M1. 模型级评测/延迟/成本
- core metrics:
  - target-task lift
  - GPU memory usage
  - training time
  - deployment complexity
  - regression delta
- toolchain:
  - PEFT / LoRA libraries
  - quantized training stacks
  - checkpoint / adapter management
  - offline eval harness
- failure signs:
  - 训练资源省了，但目标任务几乎没提升。
  - adapter 一多就不知道线上到底挂的是哪个版本。
  - 量化训练后离线分数还能看，线上复杂输入却明显退化。
  - 适配收益很窄，但维护成本持续上升。
- next:
  - H/H4. 参数高效适配/Adapter
  - H/H4. 参数高效适配/LoRA
  - H/H4. 参数高效适配/QLoRA
  - H/H4. 参数高效适配/其他 PEFT 变体
  - H/H5. 压缩与效率优化

#### Adapter

- pathKey: `H/H4. 参数高效适配/Adapter`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H4-1mhd2v5-1.json`
- status: draft
- definition: Adapter 是在原模型层间插入小型可训练模块，只更新这些附加模块而冻结大部分底座参数的适配方式。
- importance: 它代表了最早一类经典 PEFT 思路：保留底座稳定性，同时用少量额外参数承接任务差异，适合多任务共存和版本切换。
- minimum demo: 对一个小任务做一次 adapter 适配，与 prompt-only 基线比较目标任务提升和推理部署复杂度。
- prerequisites:
  - H/H2. 监督式后训练/SFT
  - H/H4. 参数高效适配/LoRA
- core metrics:
  - parameter count
  - task lift
  - deployment overhead
- next:
  - H/H4. 参数高效适配/其他 PEFT 变体
  - H/H5. 压缩与效率优化/Smaller specialized models

#### LoRA

- pathKey: `H/H4. 参数高效适配/LoRA`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H4-1mhd2v5-1.json`
- status: draft
- definition: LoRA（Low-Rank Adaptation）通过给部分权重更新添加低秩分解，只训练少量低秩矩阵来近似参数调整，是目前最常见的 PEFT 路线之一。
- importance: 它在训练成本、效果和生态支持之间有很好的平衡，常作为团队从 prompt-only 走向参数适配的第一选择。
- minimum demo: 用 LoRA 对一个结构化抽取或领域问答任务做一次小规模适配，并与 prompt-only 以及全量微调预期成本做比较。
- prerequisites:
  - H/H2. 监督式后训练/SFT
  - M/M1. 模型级评测/延迟/成本
- core metrics:
  - memory usage
  - training time
  - target-task lift
  - regression delta
- next:
  - H/H4. 参数高效适配/QLoRA
  - H/H6. 行为优化维度/更便宜 / 更快

#### QLoRA

- pathKey: `H/H4. 参数高效适配/QLoRA`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H4-1mhd2v5-1.json`
- status: draft
- definition: QLoRA 是在量化底座模型的基础上做 LoRA 适配，以更低显存完成监督式训练或实验，是资源受限条件下很常见的 PEFT 方案。
- importance: 它显著降低了实验门槛，让中等规模模型也能在有限资源下完成有效适配，但需要同时处理量化精度与训练稳定性的权衡。
- minimum demo: 在同一任务上分别跑 LoRA 与 QLoRA，对比显存占用、训练时间、目标任务效果和复杂输入退化。
- prerequisites:
  - H/H4. 参数高效适配/LoRA
  - L/L3. 推理优化/Quantized inference
- core metrics:
  - GPU memory usage
  - quality retention
  - training stability
  - cost
- next:
  - H/H5. 压缩与效率优化/Quantization
  - H/H6. 行为优化维度/更便宜 / 更快

#### 其他 PEFT 变体

- pathKey: `H/H4. 参数高效适配/其他 PEFT 变体`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H4-1mhd2v5-1.json`
- status: draft
- definition: 其他 PEFT 变体包括不同的 adapter 结构、前缀 / prompt tuning、rank 设计和模块选择策略，目标是在不同资源与任务条件下寻找更合适的轻量适配方式。
- importance: LoRA 不是唯一答案。不同任务、不同模态和不同部署环境下，其他 PEFT 方案可能在效果、切换成本或工程复杂度上更合适。
- minimum demo: 挑一个 LoRA 效果一般的任务，尝试另一种 PEFT 变体并和 LoRA 做小规模对照，判断是否值得额外工程投入。
- prerequisites:
  - H/H4. 参数高效适配/Adapter
  - H/H4. 参数高效适配/LoRA
- core metrics:
  - adapter efficiency
  - task fit
  - engineering complexity
- next:
  - H/H5. 压缩与效率优化
  - H/H6. 行为优化维度/更适应特定领域

### H5. 压缩与效率优化

- pathKey: `H/H5. 压缩与效率优化`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-H.json`
- status: draft
- definition: 压缩与效率优化关注的是：在尽量不牺牲关键能力的前提下，把模型做得更小、更快、更省显存、更便宜，或者让它更适合特定部署环境。它既包括推理侧的量化和蒸馏，也包括训练阶段为压缩做准备的路线。
- importance: 模型能不能上线，往往不取决于它能不能答对所有题，而取决于它是否能在成本、时延、显存和吞吐预算内稳定工作。理解这层后，才能知道是该继续堆大模型，还是该通过量化、蒸馏、剪枝或专项小模型把系统做成可持续形态。
- minimum demo: 选一个已有任务基线，分别做未压缩模型、量化模型和更小专项模型的对照，记录正确率、TTFT、吞吐、显存占用和单位请求成本。再看收益是否足以覆盖质量退化。
- hardware budget: 这一层既可以作为“降低训练门槛”的方法，也可以作为“降低推理门槛”的方法。小规模量化和蒸馏实验从单机就能起步，但真正评估上线价值时，需要结合并发、长上下文、批处理和多模型路由的整体成本来看。
- examples:
  - 把 7B 级模型量化后部署到资源受限环境里承接 FAQ 和提取请求。
  - 用大模型做 teacher，把特定任务知识蒸馏到小模型上，提高性价比。
  - 对固定工作流引入专项小模型前置筛选，只把少量难样本送到大模型。
  - 通过量化感知训练减少部署后精度掉头。
- pitfalls:
  - 只看显存和吞吐，不看复杂输入、长上下文和工具调用是否明显退化。
  - 把压缩当成纯推理问题，忽略训练数据和目标函数是否支持压缩后保真。
  - 以为更小一定更便宜，却没把路由、fallback 和维护成本算进去。
  - 用单一 benchmark 判断压缩收益，忽略真实业务分布。
- prerequisites:
  - H/H4. 参数高效适配
  - L/L3. 推理优化
  - M/M1. 模型级评测/延迟/成本
- core metrics:
  - memory footprint
  - throughput
  - TTFT
  - quality retention
  - cost per request
- toolchain:
  - quantization stacks
  - distillation pipelines
  - offline eval harness
  - serving benchmarks
- failure signs:
  - 离线指标还能看，但线上长输入和复杂任务明显失真。
  - 压缩后吞吐上来了，但 fallback 到大模型的比例也同步上升。
  - 不同量化设置差异很大，却没有系统回归评测。
  - 专项小模型越来越多，但没有明确边界和维护策略。
- next:
  - H/H5. 压缩与效率优化/Quantization
  - H/H5. 压缩与效率优化/Distillation
  - H/H5. 压缩与效率优化/Pruning
  - H/H5. 压缩与效率优化/Smaller specialized models
  - H/H5. 压缩与效率优化/Quantization-aware training（部分方法）
  - H/H6. 行为优化维度/更便宜 / 更快

#### Quantization

- pathKey: `H/H5. 压缩与效率优化/Quantization`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H5-1c40oby-1.json`
- status: draft
- definition: Quantization 通过降低权重、激活或 KV cache 的数值精度，换取更小显存占用和更高推理效率，是最常见的部署压缩手段之一。
- importance: 它往往是模型上线前首先考虑的效率优化，因为改动相对直接，收益又很容易体现在显存和吞吐上。
- minimum demo: 对同一模型分别用全精度和量化配置跑相同任务，记录显存、TTFT、吞吐和质量退化。
- prerequisites:
  - L/L3. 推理优化/Quantized inference
  - M/M1. 模型级评测/延迟/成本
- core metrics:
  - memory usage
  - throughput
  - quality retention
- next:
  - H/H5. 压缩与效率优化/Quantization-aware training（部分方法）
  - H/H6. 行为优化维度/更便宜 / 更快

#### Distillation

- pathKey: `H/H5. 压缩与效率优化/Distillation`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H5-1c40oby-1.json`
- status: draft
- definition: Distillation 用更强或更大模型作为 teacher，把目标任务上的行为、分布或中间知识迁移给更小 student 模型。
- importance: 它适合把高成本能力转成更便宜的可部署版本，尤其在任务边界明确时常比单纯量化更有潜力保留效果。
- minimum demo: 选一个任务，用大模型生成教师信号，训练小模型或专项模型后比较成本、速度和任务成功率。
- prerequisites:
  - H/H5. 压缩与效率优化/Quantization
  - H/H2. 监督式后训练/Task-specific tuning
- core metrics:
  - student accuracy
  - speedup
  - teacher-student gap
- next:
  - H/H5. 压缩与效率优化/Smaller specialized models
  - H/H6. 行为优化维度/更准确

#### Pruning

- pathKey: `H/H5. 压缩与效率优化/Pruning`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H5-1c40oby-1.json`
- status: draft
- definition: Pruning 通过删除不重要的参数、通道、头或结构单元来压缩模型，希望在保留主要能力的同时降低计算和存储开销。
- importance: 它提供了另一条“减法式”压缩路线，但真实收益常常受硬件、内核实现和结构稀疏支持程度制约。
- minimum demo: 在小模型上尝试一次简单 pruning，并对比理论参数减少与实际延迟收益是否一致。
- prerequisites:
  - H/H5. 压缩与效率优化/Quantization
  - M/M1. 模型级评测/稳定性
- core metrics:
  - parameter reduction
  - actual latency gain
  - quality loss
- next:
  - H/H5. 压缩与效率优化/Smaller specialized models
  - H/H6. 行为优化维度/更便宜 / 更快

#### Smaller specialized models

- pathKey: `H/H5. 压缩与效率优化/Smaller specialized models`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H5-1c40oby-1.json`
- status: draft
- definition: Smaller specialized models 指的是不执着于保留一个大而全的模型，而是针对固定任务、固定领域或固定工作流训练和部署更小、更专注的模型。
- importance: 当任务边界明确时，小而专的模型往往比压缩通用大模型更容易得到可控收益，也更适合作为路由体系中的前置层。
- minimum demo: 挑一个窄任务，把通用大模型和小专项模型做端到端对比，观察是否能以更低成本达到可接受质量。
- prerequisites:
  - H/H4. 参数高效适配/其他 PEFT 变体
  - H/H5. 压缩与效率优化/Distillation
- core metrics:
  - task fit
  - cost efficiency
  - maintenance overhead
- next:
  - G/G7. 模型类型细分/专项模型
  - H/H6. 行为优化维度/更适应特定领域

#### Quantization-aware training（部分方法）

- pathKey: `H/H5. 压缩与效率优化/Quantization-aware training（部分方法）`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H5-1c40oby-1.json`
- status: draft
- definition: Quantization-aware training 指在训练或适配阶段就把量化误差纳入考虑，让模型更早适应低精度表示，从而降低部署后精度掉头。
- importance: 它适合那些后量化退化明显、但又必须在低资源环境部署的场景，是把训练和部署目标提前对齐的一类方法。
- minimum demo: 对比后量化和量化感知训练两条路线在同一任务上的质量保留和工程复杂度差异。
- prerequisites:
  - H/H5. 压缩与效率优化/Quantization
  - H/H4. 参数高效适配/QLoRA
- core metrics:
  - quality retention
  - training overhead
  - deployment robustness
- next:
  - L/L3. 推理优化/Quantized inference
  - H/H6. 行为优化维度/更便宜 / 更快

### H6. 行为优化维度

- pathKey: `H/H6. 行为优化维度`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-H.json`
- status: draft
- definition: 行为优化维度回答的是：当我们说“把模型调好一点”时，到底是在优化什么。不同项目追求的往往不是同一个目标，有的想更准确，有的想更稳定，有的想更短更结构化，有的更在乎工具调用、领域适配或成本时延。
- importance: 如果不先把优化目标显式化，后训练和评测就会变成混乱的多目标拉扯：一个版本变得更安全了，却更空；更结构化了，却信息量下降；更便宜了，却目标任务成功率断崖式下降。理解这层，是把训练路线、数据构建和评测口径对齐的前提。
- minimum demo: 把一个任务拆成多个可度量目标，例如正确率、稳定性、格式成功率、工具成功率、长度和时延。对同一模型的不同版本打分，观察不同优化路线分别在哪些维度上得分更高、在哪些维度上产生回归。
- hardware budget: 这一层主要消耗的是评测、标注和回归成本，而不是额外训练算力。真正困难的是定义目标、设计口径和持续观测，而不是把某个训练脚本跑起来。
- examples:
  - 客服系统更在乎语气稳定、篇幅合适和误拒率，而不是极限推理能力。
  - 结构化抽取任务更在乎字段正确率和 parse success，而不是文风。
  - 工具型 Agent 更在乎工具选择、参数正确率和工作流完成率。
  - 边缘部署场景更在乎时延、显存和成本，而不是通用能力榜单。
- pitfalls:
  - 同时想要所有目标都提升，却不愿承认目标之间存在权衡。
  - 只看单一指标，例如 win rate 或训练损失，而忽略整体行为面貌。
  - 没有把目标映射到具体 eval，导致训练做了但无法判断是否变好。
  - 版本切换后只关注平均值，不看错误类型是否发生结构性变化。
- prerequisites:
  - M/M1. 模型级评测
  - M/M3. Agent 级评测
  - H/H7. 后训练数据构建
- core metrics:
  - accuracy
  - stability
  - format success
  - tool success
  - latency / cost
  - domain lift
- toolchain:
  - eval dashboards
  - rubric graders
  - trace analytics
  - A/B testing
- failure signs:
  - 不同团队口中的“更好”指向完全不同，却共享同一训练版本。
  - 离线评测说变好了，线上用户感知却变差。
  - 版本回归时只能看到总分下降，无法定位具体目标维度。
  - 训练和部署团队关注的指标体系彼此脱节。
- next:
  - H/H6. 行为优化维度/更准确
  - H/H6. 行为优化维度/更稳定
  - H/H6. 行为优化维度/更短/更长
  - H/H6. 行为优化维度/更结构化
  - H/H6. 行为优化维度/更会调用工具
  - H/H6. 行为优化维度/更适应特定领域
  - H/H6. 行为优化维度/更便宜 / 更快
  - M/M1. 模型级评测
  - M/M3. Agent 级评测

#### 更准确

- pathKey: `H/H6. 行为优化维度/更准确`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H6-18dbbbu-1.json`
- status: draft
- definition: 更准确意味着模型在目标任务上更少犯事实错误、逻辑错误或字段错误，是最直接但也最容易和其他目标发生冲突的优化维度。
- importance: 如果任务本身有明确正确答案，准确率通常就是第一优先级；但它不能脱离稳定性、结构化程度和成本单独看。
- minimum demo: 建立一组高质量标注集，对不同版本模型做离线正确率和错误类型分布对比。
- prerequisites:
  - M/M1. 模型级评测/语言能力
  - H/H2. 监督式后训练/Task-specific tuning
- core metrics:
  - accuracy
  - F1 / EM
  - error type distribution
- next:
  - H/H6. 行为优化维度/更稳定
  - H/H6. 行为优化维度/更结构化

#### 更稳定

- pathKey: `H/H6. 行为优化维度/更稳定`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H6-18dbbbu-1.json`
- status: draft
- definition: 更稳定指的是模型在轻微 prompt 扰动、重试、多轮对话或批次变化下仍保持相近行为，而不是偶尔惊艳、偶尔崩溃。
- importance: 工程上，稳定性往往和平均准确率同样重要，因为不稳定系统很难接入工作流、很难调试，也很难建立运营预期。
- minimum demo: 对同一批请求做多次重试和轻微模板扰动，统计输出方差、格式成功率和工具成功率波动。
- prerequisites:
  - M/M1. 模型级评测/稳定性
  - H/H1. 不改权重的控制/Prompt templates
- core metrics:
  - variance
  - consistency
  - retry success delta
- next:
  - H/H6. 行为优化维度/更短/更长
  - H/H6. 行为优化维度/更会调用工具

#### 更短/更长

- pathKey: `H/H6. 行为优化维度/更短/更长`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H6-18dbbbu-1.json`
- status: draft
- definition: 更短/更长关注的是输出长度、解释深度和冗余度是否符合目标任务，而不是越长越好或越短越好。
- importance: 长度控制直接影响用户体验、token 成本和信息密度；很多看似“更安全”或“更详细”的版本，其实只是更冗长。
- minimum demo: 对同一任务建立短答和长答两种 rubric，比较不同版本的长度分布、任务完成率和用户偏好。
- prerequisites:
  - H/H2. 监督式后训练/Style fine-tuning
  - M/M1. 模型级评测/延迟/成本
- core metrics:
  - response length
  - verbosity
  - information density
- next:
  - H/H6. 行为优化维度/更结构化
  - H/H6. 行为优化维度/更便宜 / 更快

#### 更结构化

- pathKey: `H/H6. 行为优化维度/更结构化`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H6-18dbbbu-1.json`
- status: draft
- definition: 更结构化指的是模型更稳定地产生符合 schema、字段约束和程序消费预期的输出，而不是自由文本里夹杂半结构化片段。
- importance: 一旦结果要接进程序、表单或工作流，结构化质量往往比文采重要得多，也是很多业务系统最先追求的行为面。
- minimum demo: 用固定 schema 的抽取任务评测不同版本模型的 parse success、字段完整率和 recovery 次数。
- prerequisites:
  - J/J2. 结构化输出/Validation
  - H/H1. 不改权重的控制/Structured outputs
- core metrics:
  - parse success rate
  - schema adherence
  - field completeness
- next:
  - E/E1. 语言（NLP / LLM）/结构化解析
  - H/H6. 行为优化维度/更会调用工具

#### 更会调用工具

- pathKey: `H/H6. 行为优化维度/更会调用工具`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H6-18dbbbu-1.json`
- status: draft
- definition: 更会调用工具意味着模型更懂得什么时候该调工具、调哪个工具、如何填参数、如何消费结果，并把工具执行纳入任务闭环。
- importance: 很多 Agent 任务的真实成功率主要由工具行为决定，而不是自然语言表述本身，因此这往往是应用层最关键的优化维度之一。
- minimum demo: 对一组需要和不需要工具的任务，评估工具选择、参数正确率和端到端成功率在不同版本之间的变化。
- prerequisites:
  - J/J3. 工具调用/Tool routing
  - H/H2. 监督式后训练/Tool / function-calling fine-tuning
- core metrics:
  - tool selection accuracy
  - argument accuracy
  - workflow completion rate
- next:
  - M/M3. Agent 级评测/Tool selection correctness
  - M/M3. Agent 级评测/Workflow completion rate

#### 更适应特定领域

- pathKey: `H/H6. 行为优化维度/更适应特定领域`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H6-18dbbbu-1.json`
- status: draft
- definition: 更适应特定领域指模型在某个专业场景中更熟悉术语、任务边界、文档结构和成功标准，而不是只会通用聊天。
- importance: 很多业务价值来自领域适配而不是通用能力继续提升；但这类优化也最容易引入分布偏移和通用回归。
- minimum demo: 准备领域内和领域外两组评测，对比不同版本在领域提升与通用退化之间的平衡。
- prerequisites:
  - H/H2. 监督式后训练/Domain fine-tuning
  - G/G7. 模型类型细分/专项模型
- core metrics:
  - domain lift
  - general regression
  - term fidelity
- next:
  - H/H5. 压缩与效率优化/Smaller specialized models
  - H/H6. 行为优化维度/更准确

#### 更便宜 / 更快

- pathKey: `H/H6. 行为优化维度/更便宜 / 更快`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H6-18dbbbu-1.json`
- status: draft
- definition: 更便宜 / 更快强调的是在满足最低质量要求下，把单位请求成本、首 token 延迟、吞吐和资源占用压到可接受范围内。
- importance: 这是系统能否大规模上线的决定因素之一。很多“更强”的改动如果同时让成本和时延失控，最终就不会成为可持续方案。
- minimum demo: 对多个模型版本记录 TTFT、吞吐、成本和成功率，画出质量与成本的 trade-off 曲线，而不是只看单点分数。
- prerequisites:
  - H/H5. 压缩与效率优化/Quantization
  - L/L3. 推理优化/Throughput / latency tuning
- core metrics:
  - TTFT
  - throughput
  - cost per request
  - quality floor
- next:
  - H/H5. 压缩与效率优化
  - M/M1. 模型级评测/延迟/成本

### H7. 后训练数据构建

- pathKey: `H/H7. 后训练数据构建`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-H.json`
- status: draft
- definition: 后训练数据构建关注的是：如何把任务目标、标注标准、偏好信息、grader 规则和评测口径组织成可训练、可验证、可复现的数据体系。它讨论的不是“有没有数据”，而是“数据是否真的能稳定驱动目标行为”，包括 instruction 样本、偏好对、reward / verifier 数据、过程轨迹和严格隔离的评测集。
- importance: 在后训练里，数据经常比算法名本身更决定上限。很多看似是模型或训练框架的问题，最后都能追溯到样本 schema 混乱、train/eval 泄漏、rubric 不清、偏好标准漂移或多轮轨迹质量不足。把这层打牢，后面的 SFT、偏好优化、RFT 和 agent 评测才有可信基础。
- minimum demo: 围绕一个小任务同时准备 4 类数据：1）SFT 指令样本；2）偏好对或 reward / verifier 标注；3）独立验证集与测试集；4）能自动打分的 rubric 或 grader。统一记录样本来源、切分规则、去污染检查和标注说明，然后在同一模型上比较 prompt-only、SFT 和偏好优化的收益差异。
- hardware budget: 这层的主要成本通常不是 GPU，而是数据设计、标注质量、去污染检查和回归评测。即使只做小规模实验，也应优先保证数据体系完整，而不是先追求更大训练规模。
- examples:
  - 为结构化抽取任务分别准备 instruction 样本、schema 验证规则和独立评测集。
  - 把同一任务拆成单轮示例和多轮对话示例，观察模型在会话状态上的差异。
  - 为偏好优化单独准备 chosen / rejected 样本，而不是把 SFT 样本直接复用成偏好对。
  - 为 RFT 构造 rubric-based grader，让过程质量和最终结果都能被打分。
- pitfalls:
  - 训练集、验证集、测试集或线上回归集之间存在隐性重叠。
  - 同一数据集里混入多种不兼容 schema，导致训练目标模糊。
  - 偏好数据、reward 数据和 verifier 标准彼此冲突。
  - 多轮样本只有表面轮次，没有真实状态依赖或工具轨迹。
  - 只关注样本数量，不关注标注一致性和任务覆盖。
- prerequisites:
  - F/F7. 后训练数据构建
  - H/H2. 监督式后训练
  - H/H3. 偏好优化与对齐
- core metrics:
  - label consistency
  - train/eval leakage rate
  - rubric agreement
  - task success delta
  - coverage of failure modes
- toolchain:
  - Datasets
  - annotation / labeling tools
  - eval harness
  - data lineage / provenance tracking
  - grader pipelines
- failure signs:
  - 训练后线上效果和离线 eval 差异极大
  - 偏好数据与 verifier 标准彼此冲突
  - 同一模型在不同批次数据上学到完全不同的风格和边界
  - 高分样本很多，但真实失败模式没有被覆盖
- next:
  - H/H7. 后训练数据构建/Train / validation / test split
  - H/H7. 后训练数据构建/Instruction crafting
  - H/H7. 后训练数据构建/Multi-turn examples
  - H/H7. 后训练数据构建/Weight masking
  - H/H7. 后训练数据构建/Preference / reward / verifier data
  - H/H7. 后训练数据构建/Contamination / leakage checks
  - H/H7. 后训练数据构建/Rubric-based graders for RFT
  - M/M1. 模型级评测
  - M/M3. Agent 级评测

#### Train / validation / test split

- pathKey: `H/H7. 后训练数据构建/Train / validation / test split`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H7-f3nuqn-1.json`
- status: draft
- definition: Train / validation / test split 指的是把训练、调参、最终评测严格拆开，避免模型或流程在开发阶段偷偷“看过答案”。
- importance: 没有干净切分，后训练实验几乎所有好结果都可能被高估，因为你不知道模型是在泛化，还是在记住评测分布。
- minimum demo: 为一个小任务明确写下切分规则、去重规则和时间切分边界，并在每次训练前后固定复用同一验证集与测试集。
- prerequisites:
  - F/F7. 后训练数据构建/Train / validation / test split
  - M/M1. 模型级评测/稳定性
- core metrics:
  - leakage rate
  - duplication rate
  - generalization gap
- next:
  - H/H7. 后训练数据构建/Contamination / leakage checks
  - H/H2. 监督式后训练/SFT

#### Instruction crafting

- pathKey: `H/H7. 后训练数据构建/Instruction crafting`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H7-f3nuqn-1.json`
- status: draft
- definition: Instruction crafting 是把任务目标、输入槽位、输出要求和边界条件写成清晰、一致、可训练的 instruction 样本，而不是把原始业务文本直接扔给训练。
- importance: 很多 SFT 成败的关键不在模型，而在 instruction 是否把真正的任务目标表达清楚；如果 instruction 含糊，模型会学到噪声而不是能力。
- minimum demo: 选一批原始样本，分别做粗糙 instruction 和精心设计 instruction 的版本，再对比训练后在格式和任务完成上的差异。
- prerequisites:
  - F/F7. 后训练数据构建/Instruction crafting
  - H/H2. 监督式后训练/SFT
- core metrics:
  - instruction consistency
  - schema clarity
  - task completion delta
- next:
  - H/H2. 监督式后训练/SFT
  - H/H6. 行为优化维度/更结构化

#### Multi-turn examples

- pathKey: `H/H7. 后训练数据构建/Multi-turn examples`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H7-f3nuqn-1.json`
- status: draft
- definition: Multi-turn examples 是把多轮对话中的状态延续、澄清、纠错、工具回填和角色切换等行为显式写进训练样本，而不是只训练单轮问答。
- importance: 如果目标系统本质上是多轮协作或 Agent 工作流，单轮样本通常无法覆盖真实状态转移，模型会在会话中快速失稳。
- minimum demo: 针对一个会话式任务各自构造单轮样本和多轮样本，对比模型在澄清、追问和状态保持上的差异。
- prerequisites:
  - F/F7. 后训练数据构建/Multi-turn examples
  - G/G3. 上下文与记忆/会话记忆（session memory）
- core metrics:
  - dialog coherence
  - state retention
  - handoff correctness
- next:
  - M/M3. Agent 级评测/Handoff correctness
  - H/H2. 监督式后训练/Tool / function-calling fine-tuning

#### Weight masking

- pathKey: `H/H7. 后训练数据构建/Weight masking`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H7-f3nuqn-1.json`
- status: draft
- definition: Weight masking 关注训练时哪些 token 或字段该计入损失、哪些只作为上下文条件存在，以避免模型被错误地奖励去复述无关输入或模板壳子。
- importance: 如果损失掩码设计不当，模型可能学会抄输入、过拟合固定模板，或者在多轮与工具轨迹里把不该学的部分也学进去。
- minimum demo: 在一个带模板外壳的任务上，对比不同 loss mask 策略训练出的模型，检查是否出现机械复述或格式僵化。
- prerequisites:
  - F/F7. 后训练数据构建/Weight masking
  - H/H2. 监督式后训练/SFT
- core metrics:
  - loss focus quality
  - template overfit rate
  - target token accuracy
- next:
  - H/H2. 监督式后训练/Style fine-tuning
  - H/H2. 监督式后训练/Tool / function-calling fine-tuning

#### Preference / reward / verifier data

- pathKey: `H/H7. 后训练数据构建/Preference / reward / verifier data`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H7-f3nuqn-1.json`
- status: draft
- definition: Preference / reward / verifier data 指的是为偏好优化、奖励建模和验证器构建的专门数据，包括 chosen / rejected 样本、分级评分、规则判定和过程检查信号。
- importance: 这类数据不只是“更多标注”，而是决定偏好优化方向、reward 质量和 verifier 能否可信工作的基础层。
- minimum demo: 为一个任务同时准备少量 preference pairs 和 verifier 标注，比较两者能否对同类错误给出一致判断。
- prerequisites:
  - F/F7. 后训练数据构建/Preference data
  - F/F7. 后训练数据构建/Reward / verifier data
  - H/H3. 偏好优化与对齐
- core metrics:
  - label agreement
  - ranking consistency
  - verifier precision / recall
- next:
  - H/H3. 偏好优化与对齐/Reward modeling
  - H/H3. 偏好优化与对齐/DPO
  - M/M3. Agent 级评测/Outcome checks

#### Contamination / leakage checks

- pathKey: `H/H7. 后训练数据构建/Contamination / leakage checks`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H7-f3nuqn-1.json`
- status: draft
- definition: Contamination / leakage checks 是用去重、近重复检测、时间边界和来源审计等方式，确认训练数据没有污染评测集，也没有把未来信息偷偷带进实验。
- importance: 没有这一步，很多漂亮分数都可能只是数据污染；在代码、文档、公开 benchmark 和企业内网知识任务里，这个风险尤其高。
- minimum demo: 对训练集和评测集做精确去重与近重复检索，并记录发现的重合样本比例和处理规则。
- prerequisites:
  - F/F7. 后训练数据构建/Contamination / leakage checks
  - H/H7. 后训练数据构建/Train / validation / test split
- core metrics:
  - exact duplicate rate
  - near-duplicate rate
  - post-cleaning score delta
- next:
  - M/M1. 模型级评测/语言能力
  - M/M1. 模型级评测/推理能力

#### Rubric-based graders for RFT

- pathKey: `H/H7. 后训练数据构建/Rubric-based graders for RFT`
- node type: `concept-group`
- detail source: `data/details/leaves-H-H7-f3nuqn-1.json`
- status: draft
- definition: Rubric-based graders for RFT 是把任务成功标准写成显式 rubric，再由 grader 或 verifier 对结果、过程或工件打分，用于 RFT 或过程优化。
- importance: 当任务不是单一正确答案，而是需要检查过程质量、工具选择或多维成功标准时，rubric grader 往往是把训练与评测闭环打通的关键。
- minimum demo: 给一个多步任务写出 3～5 条可执行 rubric，用 grader 批量打分，检查 grader 与人工评判的一致性。
- prerequisites:
  - F/F7. 后训练数据构建/Rubric-based graders for RFT
  - M/M3. Agent 级评测/Grader rubric
- core metrics:
  - grader-human agreement
  - rubric coverage
  - process sensitivity
- next:
  - H/H3. 偏好优化与对齐/RFT
  - M/M3. Agent 级评测/Trace grading

## I. 检索、记忆与外部知识

- pathKey: `I`
- node type: `domain`
- stage: 03 大模型系统
- graph summary: OpenAI 的 embeddings、file search、tools 文档与 HF 的 RAG 文档共同说明：RAG 的本质是把参数记忆与外部非参数记忆接起来；file search 又把 chunking、embeddings、vector+keyword retrieval 做成工程链路。
- relation notes:
  - RAG = LLM + external memory，不是训练方法。
  - RAG 与 模型适配、后训练与对齐 层微调是互补关系，不是天然替代关系。
  - 检索、记忆与外部知识 与 Agent 系统 连接时会出现 agentic RAG：模型先决定“要不要检索、检索什么、何时停止检索”。
  - 检索、记忆与外部知识 与 数据层（横切层） 关系最紧：知识库数据质量直接决定回答质量。
- detail source: `data/details/domain-I.json`
- status: completed
- definition: 检索、记忆与外部知识关注如何让模型在参数之外稳定使用外部信息：把文档、网页、代码、数据库、用户状态与历史交互转成可检索、可更新、可授权访问的知识层，再通过检索、重排、上下文组装与引用把这些信息接入生成过程。这个 domain 讨论的不只是 RAG 本身，还包括表示与检索方法、知识库构建、在线与离线更新、不同记忆类型的分工，以及系统在召回、精准、时效、权限和可追溯性上的工程约束。
- importance: 大模型的参数记忆难以实时更新，也无法天然满足企业知识接入、个性化记忆、权限隔离和出处追踪等需求；因此外部知识层是把通用模型变成可用系统的关键接口。这个 domain 决定一个 AI 系统能否回答最新问题、利用私有数据、长期记住用户与任务状态，并在成本、延迟与可信度之间取得平衡。对工程实践而言，它通常直接影响回答是否有依据、是否越权、是否过期，以及系统能否随着知识变化持续维护。
- minimum demo: 做一个最小可验证系统：准备一小组文档，完成解析、切分、元数据标注和索引；对同一批问题分别测试纯生成与检索增强生成；记录召回结果、最终答案是否引用到正确片段、知识更新后能否重新命中最新内容，以及不同用户是否只能看到各自允许访问的数据。只要这个 demo 能展示“外部知识接入后答案更准、可解释、可更新、受权限约束”，就已经覆盖了本 domain 的核心价值。
- hardware budget: 学习和原型阶段通常不需要高端训练集群。使用一台普通开发机或云端小规模服务即可完成文档解析、向量化、索引、检索和评测；成本主要来自 embedding、存储、查询延迟和重排调用，而不是参数训练。真正需要预算规划的是知识库规模增长后的索引构建、刷新频率、在线查询并发、长上下文窗口费用以及权限过滤带来的额外开销。
- examples:
  - 企业助手从产品文档、工单和内部 Wiki 中检索依据后再回答问题。
  - 代码助手在仓库与文档中检索相关文件、接口说明和历史决策记录。
  - 客服系统结合会话记忆与用户长期记忆，补充用户偏好、订单状态和最近问题。
  - 研究助理先检索多篇资料并保留出处，再生成带引用的综述。
  - 办公 Copilot 从邮件、日历、文档和知识库中做权限内检索与汇总。
- pitfalls:
  - 把 RAG 等同于“向量库 + prompt”，忽略了解析、切分、元数据、重排和引用对效果的决定性影响。
  - 只看最终回答流畅度，不测检索命中与证据质量，导致问题来源不清。
  - 知识更新链路不完整，新增、删除、权限变化和过期数据无法及时反映到索引。
  - 混淆不同记忆层，把短期会话状态、长期用户偏好和共享知识库放在同一机制中处理。
  - 未做权限边界控制，导致模型跨用户、跨项目或跨文档越权检索。
  - 上下文堆得过多却缺少筛选与压缩，造成成本上升且答案反而更差。
- core metrics:
  - 召回率
  - 精准率
  - 命中证据的相关性与覆盖度
  - 引用可信度
  - 知识时效性与刷新延迟
  - 权限过滤正确率
  - 端到端答案正确率
  - 查询延迟与单位查询成本
- toolchain:
  - Embedding model
  - Vector store
  - Keyword index
  - Hybrid retrieval
  - Reranker
  - Parser / loader
  - Chunking pipeline
  - Metadata schema
  - Access control / ACL filtering
  - Evaluation set and retrieval tracing
- failure signs:
  - 系统能回答但给不出可核验出处，或引用片段与结论不匹配。
  - 知识库明明已更新，回答仍反复使用旧信息。
  - 检索结果看似相关，但关键事实总在 top-k 之外。
  - 不同用户问同一问题时出现越权内容泄露。
  - 加入更多上下文后答案并未改善，反而更慢、更贵、更混乱。
  - 系统对多跳问题、改写问题或长文档问题明显失效。
- next:
  - I/I1. 表示与检索基础
  - I/I2. 知识库构建
  - I/I3. RAG 管线
  - I/I4. RAG 形态
  - I/I5. 记忆类型
  - I/I6. 关键质量点

### I1. 表示与检索基础

- pathKey: `I/I1. 表示与检索基础`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-I.json`
- status: draft
- definition: 表示与检索基础讨论的是：外部知识如何被编码成可匹配的表示，以及查询和文档如何在检索阶段相遇。它涵盖 embedding、稠密检索、稀疏检索、混合检索、相似度搜索和 reranking 这些基础部件，是后面所有 RAG 和记忆系统的“底层物理”。
- importance: 如果这一层不清楚，团队就很容易把所有问题都归因到向量库或 embedding 模型上。实际上，召回失败可能来自表示空间、查询表达、稀疏信号缺失、重排策略不足，或者相似度度量本身选得不对。理解这一层，才能解释为什么“看起来相关”的文档没有被召回，或者为什么 top-k 很高但最终答案仍然不准。
- minimum demo: 准备一组短文档和一组查询，分别测试 dense、sparse 和 hybrid 三条检索链路，再加入 reranker。记录 recall@k、MRR、延迟和最终答案 groundedness，比较不同检索基础件对结果的影响。
- hardware budget: 学习和原型阶段通常不需要高端硬件。大部分成本来自 embedding 生成、索引存储和 rerank 调用，而不是 GPU 训练。随着知识库变大，向量存储、缓存和查询延迟会成为主要工程约束。
- examples:
  - 术语相同但语义不相似的查询往往更依赖 sparse 信号。
  - 用户自然语言问法和文档写法差异较大时，dense retrieval 通常比纯关键词匹配更稳。
  - 多义词和长尾术语场景下，hybrid retrieval 经常比单路检索更可靠。
  - top-k 候选很多但最终上下文仍然杂乱时，reranking 往往比继续增大 k 更有效。
- pitfalls:
  - 把 embedding 维度或模型名当作检索质量的唯一决定因素。
  - 只看向量召回，不评估稀疏信号、重排和延迟成本。
  - 把 similarity search 当成最终答案，而不是候选筛选的一步。
  - 在术语密集、关键词强约束任务里完全放弃 sparse retrieval。
- prerequisites:
  - G/G1. 语言建模基础/Embedding
  - I/I2. 知识库构建
  - I/I3. RAG 管线
- core metrics:
  - recall@k
  - MRR / nDCG
  - latency
  - candidate relevance
  - cost per query
- toolchain:
  - embedding model
  - vector index
  - keyword index
  - reranker
  - retrieval eval set
- failure signs:
  - 相关文档总在 top-k 外，但系统不知道问题出在查询、表示还是索引。
  - 召回很多看似相关文档，真正关键证据却被噪声淹没。
  - 检索质量一变好，延迟和成本立刻失控，说明基础件组合不合理。
- next:
  - I/I1. 表示与检索基础/Embeddings
  - I/I1. 表示与检索基础/Dense retrieval
  - I/I1. 表示与检索基础/Sparse retrieval
  - I/I1. 表示与检索基础/Hybrid retrieval
  - I/I1. 表示与检索基础/Similarity search
  - I/I1. 表示与检索基础/Reranking
  - I/I3. RAG 管线

#### Embeddings

- pathKey: `I/I1. 表示与检索基础/Embeddings`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I1-1f2rb9f-1.json`
- status: draft
- definition: Embeddings 是把查询和文档片段映射到向量空间的表示方法，使语义相近的内容在空间中更靠近，从而支持稠密检索和相似度搜索。
- importance: 它决定 dense retrieval 能否跨措辞差异找到相关内容，是现代 RAG 的核心底座之一。
- minimum demo: 取几组同义问法和不同主题文本，比较它们在 embedding 空间中的相似度排序是否符合直觉。
- prerequisites:
  - G/G1. 语言建模基础/Embedding
  - I/I1. 表示与检索基础/Similarity search
- core metrics:
  - semantic recall
  - clustering quality
  - latency / cost
- next:
  - I/I1. 表示与检索基础/Dense retrieval
  - I/I2. 知识库构建/Vector store

#### Dense retrieval

- pathKey: `I/I1. 表示与检索基础/Dense retrieval`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I1-1f2rb9f-1.json`
- status: draft
- definition: Dense retrieval 用 embedding 向量表示查询和文档，再按向量相似度召回候选，是面向语义匹配的主流检索方式。
- importance: 它在改写问法、长尾描述和语义相关场景中通常优于纯关键词检索，但也更依赖表示质量和索引实现。
- minimum demo: 用同一批查询分别跑 dense 和 sparse 检索，比较对措辞变化、同义表达和长尾问题的召回差异。
- prerequisites:
  - I/I1. 表示与检索基础/Embeddings
  - I/I1. 表示与检索基础/Similarity search
- core metrics:
  - recall@k
  - MRR
  - semantic robustness
- next:
  - I/I1. 表示与检索基础/Hybrid retrieval
  - I/I3. RAG 管线/Retrieval

#### Sparse retrieval

- pathKey: `I/I1. 表示与检索基础/Sparse retrieval`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I1-1f2rb9f-1.json`
- status: draft
- definition: Sparse retrieval 主要依赖关键词、倒排索引和词项权重匹配，在术语精确、符号密集或命名实体敏感的场景里往往很强。
- importance: 很多企业知识库、代码库和专业文档任务里，关键词信号仍然是高质量召回的重要组成部分，不能被 dense retrieval 完全替代。
- minimum demo: 选一组带专有名词、错误码或 API 名称的查询，对比 dense 与 sparse 的召回表现。
- prerequisites:
  - I/I2. 知识库构建/Keyword index
  - I/I1. 表示与检索基础/Hybrid retrieval
- core metrics:
  - exact-term recall
  - keyword precision
  - latency
- next:
  - I/I1. 表示与检索基础/Hybrid retrieval
  - I/I3. RAG 管线/Retrieval

#### Hybrid retrieval

- pathKey: `I/I1. 表示与检索基础/Hybrid retrieval`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I1-1f2rb9f-1.json`
- status: draft
- definition: Hybrid retrieval 把 dense 与 sparse 两路信号结合起来，尝试同时覆盖语义相关性和关键词精确命中。
- importance: 它经常是实际系统里更稳的默认方案，因为能减少单一路检索在长尾术语或语义偏移上的盲区。
- minimum demo: 对同一批查询用 dense、sparse、hybrid 三种方式召回，比较整体 recall、噪声比例和候选多样性。
- prerequisites:
  - I/I1. 表示与检索基础/Dense retrieval
  - I/I1. 表示与检索基础/Sparse retrieval
- core metrics:
  - combined recall
  - candidate diversity
  - cost / latency trade-off
- next:
  - I/I1. 表示与检索基础/Reranking
  - I/I3. RAG 管线/Retrieval

#### Similarity search

- pathKey: `I/I1. 表示与检索基础/Similarity search`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I1-1f2rb9f-1.json`
- status: draft
- definition: Similarity search 是在向量空间中快速找到与查询最相近候选的基础操作，通常是 dense retrieval 的底层执行机制。
- importance: 它本身不是完整检索质量的全部，但会直接影响召回速度、近似误差和大规模索引的可用性。
- minimum demo: 在同一批向量上比较精确搜索与近似搜索的速度和结果差异，观察近似误差是否影响 top-k 命中。
- prerequisites:
  - I/I1. 表示与检索基础/Embeddings
  - I/I2. 知识库构建/Indexing
- core metrics:
  - search latency
  - approximation error
  - top-k stability
- next:
  - I/I1. 表示与检索基础/Dense retrieval
  - I/I2. 知识库构建/Vector store

#### Reranking

- pathKey: `I/I1. 表示与检索基础/Reranking`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I1-1f2rb9f-1.json`
- status: draft
- definition: Reranking 是在初步召回后，对候选文档再做一次更精细的相关性排序，以提升 top-k 质量和上下文密度。
- importance: 它经常比继续盲目扩大召回数更有效，因为真正的问题通常不是“没召回”，而是好候选没排到前面。
- minimum demo: 固定初步召回集合，比较有无 rerank 时最终喂给模型的 top-k 对答案 groundedness 的影响。
- prerequisites:
  - I/I1. 表示与检索基础/Hybrid retrieval
  - I/I3. RAG 管线/Rerank
- core metrics:
  - nDCG
  - top-k relevance
  - grounded answer rate
- next:
  - I/I3. RAG 管线/Rerank
  - I/I6. 关键质量点/精准率

### I2. 知识库构建

- pathKey: `I/I2. 知识库构建`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-I.json`
- status: draft
- definition: 知识库构建关注的是：原始资料如何被接入、解析、切分、打标签、索引和持续更新，最终变成一个可检索、可授权、可删除、可刷新、可追踪的知识层。它不是单一的“入库动作”，而是一条持续运行的数据工程链路。
- importance: 很多 RAG 问题本质上不是模型问题，而是知识库构建问题。解析失败、chunk 边界错误、元数据缺失、索引策略不匹配和更新链路不完整，都会直接表现成“模型答错了”或“检索不到”。
- minimum demo: 拿一小批文档，完成接入、解析、chunk、metadata、索引和更新删除测试。要求系统能回答基于新文档的问题，并且在文档删除或权限变化后不再命中过期或越权内容。
- hardware budget: 主要消耗在存储、索引构建、增量刷新和文档解析，而不是大规模训练。随着规模上升，数据管道和索引维护成本会比单次查询成本更关键。
- examples:
  - 把 PDF、Markdown、网页和代码仓库统一接入到同一知识层。
  - 为每个 chunk 保留来源路径、标题层级、更新时间和权限标签。
  - 文档更新后只增量刷新受影响的索引，而不是每次全量重建。
  - 删除文档后，旧 chunk 和旧引用能被及时清理。
- pitfalls:
  - 把向量化当成知识库构建的全部，忽略 parser、metadata 和更新链路。
  - 只支持新增，不支持 refresh / re-index / delete。
  - 文档结构丢失，导致引用无法定位到真实章节和来源。
  - 索引方案和实际查询类型不匹配，导致召回看似齐全但结果不稳定。
- prerequisites:
  - I/I1. 表示与检索基础
  - F/F3. 数据工程
  - F/F5. 数据治理
- core metrics:
  - parse success rate
  - index freshness
  - metadata completeness
  - delete / refresh correctness
- toolchain:
  - parsers and loaders
  - chunking pipeline
  - metadata schema
  - vector and keyword indexes
  - refresh jobs
- failure signs:
  - 新增文档迟迟不生效，删除文档却长期还在被引用。
  - 来源定位和章节边界经常错位。
  - 不同文档类型接入后表现差异极大，说明 parser 层不稳定。
- next:
  - I/I2. 知识库构建/数据接入
  - I/I2. 知识库构建/Parser types
  - I/I2. 知识库构建/Chunking strategy
  - I/I2. 知识库构建/Metadata schema
  - I/I2. 知识库构建/Indexing
  - I/I2. 知识库构建/Vector store
  - I/I2. 知识库构建/Keyword index
  - I/I2. 知识库构建/Update / refresh / re-index / delete
  - I/I3. RAG 管线

#### 数据接入

- pathKey: `I/I2. 知识库构建/数据接入`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I2-jwznuy-1.json`
- status: draft
- definition: 数据接入是把原始资料源持续、可追踪地导入知识库的第一步，涵盖抓取、同步、权限映射、去重和来源登记。
- importance: 如果接入层不稳定，后面的 parser、索引和 RAG 管线再好也只能建立在脏数据和断裂更新之上。
- minimum demo: 接入一组本地文件和一个网页源，记录来源 ID、更新时间和删除状态，并验证后续刷新链路能正确识别变更。
- prerequisites:
  - I/I2. 知识库构建
  - I/I2. 知识库构建/Update / refresh / re-index / delete
- core metrics:
  - ingestion success rate
  - source freshness
  - duplicate rate
- next:
  - I/I2. 知识库构建/Parser types
  - I/I2. 知识库构建/Metadata schema

#### Parser types

- pathKey: `I/I2. 知识库构建/Parser types`
- node type: `concept-group`
- detail source: `data/details/domain-I.json`
- status: draft
- definition: Parser types 讨论的是不同资料形态该如何被解析成统一而可检索的文本与结构信息，包括纯文本、Markdown、PDF / Office、HTML 页面以及代码仓库。不同 parser 决定了结构保留程度、噪声水平和后续 chunking 的上限。
- importance: 如果 parser 类型选错或实现粗糙，再好的 embedding 和 reranker 也救不回来。因为模型接触到的不是“原始知识”，而是 parser 输出后的近似表示。
- minimum demo: 对同一组不同来源文档分别做解析，检查标题、表格、代码块、链接和页码等结构是否被保留，并比较对最终引用定位的影响。
- hardware budget: 主要是 CPU、内存和解析耗时问题；复杂 PDF 和大仓库解析时，稳定性和吞吐比 GPU 更关键。
- prerequisites:
  - I/I2. 知识库构建/数据接入
  - I/I2. 知识库构建/Chunking strategy
- core metrics:
  - parse fidelity
  - structure preservation
  - noise rate
  - throughput
- toolchain:
  - document parsers
  - HTML cleaners
  - code parsers
  - OCR / layout tools
- failure signs:
  - 表格、标题层级、代码块和链接在解析后全部被打散。
  - 同一文档不同 parser 输出差异极大，说明知识层不稳定。
- next:
  - I/I2. 知识库构建/Parser types/Text / Markdown
  - I/I2. 知识库构建/Parser types/PDF / Office
  - I/I2. 知识库构建/Parser types/HTML / web content
  - I/I2. 知识库构建/Parser types/Code / repository parsers
  - I/I2. 知识库构建/Chunking strategy

##### Text / Markdown

- pathKey: `I/I2. 知识库构建/Parser types/Text / Markdown`
- node type: `concept`
- detail source: `data/details/leaves-I-I2-1w5ocmp-1.json`
- status: draft
- definition: Text / Markdown parser 处理结构相对清晰的纯文本和 Markdown 文档，重点是保留标题层级、列表、代码块和链接等轻量结构。
- importance: 这类文档通常是知识库里最容易做好的资料来源，也是很多系统的质量基线。
- minimum demo: 解析同一份 Markdown，检查标题、列表、代码块和链接是否都能在 chunk 中被稳定保留。
- prerequisites:
  - I/I2. 知识库构建/Parser types
  - I/I2. 知识库构建/Chunking strategy
- core metrics:
  - structure preservation
  - noise rate
- next:
  - I/I2. 知识库构建/Metadata schema
  - I/I2. 知识库构建/Chunking strategy

##### PDF / Office

- pathKey: `I/I2. 知识库构建/Parser types/PDF / Office`
- node type: `concept`
- detail source: `data/details/leaves-I-I2-1w5ocmp-1.json`
- status: draft
- definition: PDF / Office parser 要处理页码、表格、版式、页眉页脚、扫描件和布局噪声，是企业知识接入里最常见也最容易失真的一类解析任务。
- importance: 如果 PDF / Office 解析不好，RAG 系统会看似“有文档”，但其实读到的是错乱文本，最终引用和答案都会漂移。
- minimum demo: 选一份带表格和多级标题的 PDF 或 Office 文档，检查解析后是否保留页码、章节和表格语义。
- prerequisites:
  - I/I2. 知识库构建/Parser types
  - I/I2. 知识库构建/Metadata schema
- core metrics:
  - layout fidelity
  - OCR / parse accuracy
  - table preservation
- next:
  - I/I2. 知识库构建/Chunking strategy
  - I/I3. RAG 管线/Citation span alignment

##### HTML / web content

- pathKey: `I/I2. 知识库构建/Parser types/HTML / web content`
- node type: `concept`
- detail source: `data/details/leaves-I-I2-1w5ocmp-1.json`
- status: draft
- definition: HTML / web content parser 需要从页面中剥离导航、广告、脚本和样式噪声，同时保留正文、标题、链接与内容层次。
- importance: 网页内容更新频繁且噪声多，是很多在线知识源的主要难点；如果清洗不好，检索会被模板噪声主导。
- minimum demo: 抓取一个真实网页，比较原始 HTML 与清洗后正文在 chunk 质量和检索效果上的差异。
- prerequisites:
  - I/I2. 知识库构建/Parser types
  - I/I2. 知识库构建/Update / refresh / re-index / delete
- core metrics:
  - content-to-noise ratio
  - refresh correctness
  - link preservation
- next:
  - I/I2. 知识库构建/数据接入
  - I/I2. 知识库构建/Metadata schema

##### Code / repository parsers

- pathKey: `I/I2. 知识库构建/Parser types/Code / repository parsers`
- node type: `concept`
- detail source: `data/details/leaves-I-I2-1w5ocmp-1.json`
- status: draft
- definition: Code / repository parsers 面向源码、目录结构、接口注释和仓库元信息，目标是保留代码边界、语言结构和路径上下文，而不是把源码当普通文本乱切。
- importance: 代码知识库对 chunk 边界和 metadata 依赖极强，parser 做不好时，检索和引用会在文件、函数和符号层面集体失真。
- minimum demo: 选一个小仓库做解析，检查函数、类、文件路径和 README 之间的结构是否能在知识层里被追踪。
- prerequisites:
  - I/I2. 知识库构建/Parser types
  - I/I2. 知识库构建/Metadata schema
- core metrics:
  - symbol preservation
  - path fidelity
  - code chunk coherence
- next:
  - I/I2. 知识库构建/Chunking strategy
  - I/I3. RAG 管线/Context packing

#### Chunking strategy

- pathKey: `I/I2. 知识库构建/Chunking strategy`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I2-jwznuy-1.json`
- status: draft
- definition: Chunking strategy 决定一份文档如何被切成可索引、可检索、可引用的最小单元，它直接影响召回质量与引用对齐。
- importance: 很多 RAG 问题并不是 embedding 模型不够强，而是 chunk 边界、overlap、标题继承和 metadata schema 没设计好。
- minimum demo: 用同一批文档分别跑固定长度 chunk、语义 chunk 和标题分层 chunk，比较召回与引用质量。
- hardware budget: CPU 即可；规模大时主要受索引和存储资源约束。
- examples:
  - 固定长度 chunk 简单易控，但容易切断上下文边界。
  - 按标题或章节切分更利于引用定位，但要避免超长 chunk。
  - 代码仓库通常需要按函数、类或文件结构切分，而不是纯字符长度。
- pitfalls:
  - chunk 太小导致证据被拆散，太大又把噪声一起塞进上下文。
  - 只设置 overlap，不考虑标题继承和 metadata 对齐。
  - 不同 parser 输出混用同一切分规则，造成质量极不均匀。
- prerequisites:
  - I/I2. 知识库构建
  - I/I1. 表示与检索基础/Embeddings
  - I/I2. 知识库构建/Metadata schema
- core metrics:
  - retrieval recall
  - citation alignment
  - context waste ratio
  - index size
- toolchain:
  - document parser
  - chunking pipeline
  - vector store
- failure signs:
  - 模型总能召回相关文档，但引用段落对不上答案
  - 上下文里出现大量不相关残片或重复内容
- next:
  - I/I3. RAG 管线
  - I/I2. 知识库构建/Metadata schema

#### Metadata schema

- pathKey: `I/I2. 知识库构建/Metadata schema`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I2-jwznuy-1.json`
- status: draft
- definition: Metadata schema 决定每个 chunk 除正文外还带什么结构化上下文，例如来源、标题层级、时间戳、权限域、语言、文件路径和业务标签。
- importance: 没有稳定 metadata，permission-aware retrieval、citation alignment、增量更新和失败排查都会非常脆弱。
- minimum demo: 给同一批 chunk 补上来源路径、标题层级、更新时间和权限标签，再比较检索、过滤和引用定位效果。
- hardware budget: CPU 即可，主要消耗在索引与存储。
- examples:
  - 为每个 chunk 保留文档 ID、章节标题、更新时间和 ACL 范围。
  - 代码知识库保留仓库、文件路径、语言和符号类型。
  - 网页知识库保留 URL、抓取时间和正文清洗版本。
- pitfalls:
  - schema 只保留正文，不保留来源和权限，导致后续所有环节都不可追踪。
  - metadata 命名和类型不稳定，过滤逻辑越写越脆。
  - 删除和刷新链路没有稳定主键，导致旧 chunk 长期残留。
- prerequisites:
  - I/I2. 知识库构建
  - I/I2. 知识库构建/Chunking strategy
  - I/I2. 知识库构建/Vector store
- core metrics:
  - metadata completeness
  - filter hit rate
  - citation localization accuracy
  - re-index correctness
- toolchain:
  - parser pipeline
  - vector store metadata filters
  - schema validators
- failure signs:
  - 检索结果内容相关但无法定位原文来源
  - 更新或删除文档后旧 chunk 长时间残留在线上
- next:
  - I/I3. RAG 管线/Permission-aware retrieval
  - I/I3. RAG 管线/Citation span alignment

#### Indexing

- pathKey: `I/I2. 知识库构建/Indexing`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I2-jwznuy-1.json`
- status: draft
- definition: Indexing 是把 chunk 和 metadata 组织成可高效查询的数据结构，包括向量索引、关键词倒排和混合检索所需的多路索引。
- importance: 同样的数据和表示，不同索引策略会直接改变查询延迟、近似误差和更新复杂度。
- minimum demo: 对一批 chunk 建立向量和关键词索引，比较建索引时间、查询延迟和 top-k 结果稳定性。
- prerequisites:
  - I/I2. 知识库构建/Vector store
  - I/I2. 知识库构建/Keyword index
- core metrics:
  - index build time
  - query latency
  - update complexity
- next:
  - I/I1. 表示与检索基础/Similarity search
  - I/I3. RAG 管线/Retrieval

#### Vector store

- pathKey: `I/I2. 知识库构建/Vector store`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I2-jwznuy-1.json`
- status: draft
- definition: Vector store 是承载 embedding 向量、metadata 和相似度搜索的存储与查询层，通常负责 dense retrieval 的在线执行。
- importance: 它不仅是“存向量的地方”，还决定过滤能力、近似搜索策略、刷新机制和多租户隔离方式。
- minimum demo: 把一批 chunk 写入向量库，验证相似度搜索、metadata 过滤、增删改和批量更新是否都符合预期。
- prerequisites:
  - I/I1. 表示与检索基础/Embeddings
  - I/I2. 知识库构建/Metadata schema
- core metrics:
  - search latency
  - filter correctness
  - update freshness
- next:
  - I/I1. 表示与检索基础/Dense retrieval
  - I/I3. RAG 管线/Retrieval

#### Keyword index

- pathKey: `I/I2. 知识库构建/Keyword index`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I2-jwznuy-1.json`
- status: draft
- definition: Keyword index 是基于词项、倒排表和匹配权重的索引层，用于支持 sparse retrieval 和精确术语检索。
- importance: 在错误码、函数名、产品名、法规条款和命名实体密集的场景里，它往往是 dense retrieval 的必要补充。
- minimum demo: 对一组包含精确术语的查询，比较只有向量索引和增加关键词索引后的召回差异。
- prerequisites:
  - I/I1. 表示与检索基础/Sparse retrieval
  - I/I2. 知识库构建/Indexing
- core metrics:
  - term recall
  - precision
  - index size
- next:
  - I/I1. 表示与检索基础/Hybrid retrieval
  - I/I3. RAG 管线/Retrieval

#### Update / refresh / re-index / delete

- pathKey: `I/I2. 知识库构建/Update / refresh / re-index / delete`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I2-jwznuy-1.json`
- status: draft
- definition: Update / refresh / re-index / delete 关注知识库生命周期管理：新增内容如何生效、旧内容如何刷新、索引何时重建、删除和权限变化如何及时反映。
- importance: 知识层的可信度很大程度上取决于更新链路是否完整。没有这一层，RAG 很容易一直回答过期或已删除的信息。
- minimum demo: 对同一文档做新增、修改、删除和权限变更，验证知识库和检索结果能在预期时间内正确反映变化。
- prerequisites:
  - I/I2. 知识库构建/数据接入
  - I/I2. 知识库构建/Indexing
- core metrics:
  - refresh latency
  - delete correctness
  - stale hit rate
- next:
  - I/I6. 关键质量点/过期知识
  - I/I3. RAG 管线/Post-processing

### I3. RAG 管线

- pathKey: `I/I3. RAG 管线`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-I.json`
- status: draft
- definition: RAG 管线的本质是把“理解查询、检索候选、重排筛选、压缩上下文、生成答案、给出引用”串成一条可观测的数据流，让模型在回答前先读取外部知识。它不是单一的 retrieve + generate，而是一系列可拆分、可优化、可审计的环节。
- importance: 很多团队会把 RAG 简化成‘加个向量库’，但真实系统成败主要取决于查询理解、权限过滤、上下文打包、引用对齐和后处理。只有把管线拆开，才能知道错误到底来自检索、重排、上下文组装还是生成阶段。
- minimum demo: 做一条最小但可观测的 RAG：query understanding → retrieval → rerank → context packing → generation → citation / provenance。要求日志里至少能看到候选文档、重排后 top-k、最终喂给模型的片段和答案对应的引用 span。
- hardware budget: 小规模原型可用云 API + 托管向量库；本地实验 CPU 即可，量大时主要压力在索引、缓存、重排和长上下文费用，而不是训练硬件。
- examples:
  - 企业问答助手先检索内部文档，再把召回内容压缩进 prompt，并返回出处。
  - 代码助手先检索仓库文件和设计文档，再生成补丁方案并注明相关文件路径。
  - 权限敏感场景中，先按 ACL 过滤候选，再重排和生成答案。
- pitfalls:
  - 只做向量召回而不做 rerank，往往会把噪声文档带进上下文。
  - 知识库数据更新频率、权限控制和 chunk 质量，都会直接决定最终回答质量。
  - 检索日志不透明，导致答错时无法定位是哪一环失效。
  - 上下文 packing 只按长度拼接，不按任务目标和证据密度筛选。
- prerequisites:
  - I/I1. 表示与检索基础/Embeddings
  - I/I2. 知识库构建/Chunking strategy
  - I/I2. 知识库构建/Metadata schema
- core metrics:
  - retrieval recall@k
  - citation precision
  - answer groundedness
  - latency / cost
  - permission correctness
- toolchain:
  - embeddings
  - vector store
  - reranker
  - trace logging
  - context packer
  - citation validators
- failure signs:
  - 召回正常但答案脱离证据生成。
  - 权限过滤后结果突然为空而系统没有降级策略。
  - 引用看似存在，但 span 和最终结论对不上。
  - 多跳问题需要两段证据时，系统总在单跳就停住。
- next:
  - I/I3. RAG 管线/Query understanding
  - I/I3. RAG 管线/Query rewrite
  - I/I3. RAG 管线/Retrieval
  - I/I3. RAG 管线/Permission-aware retrieval
  - I/I3. RAG 管线/Rerank
  - I/I3. RAG 管线/Context packing
  - I/I3. RAG 管线/Citation span alignment
  - I/I3. RAG 管线/Generation
  - I/I3. RAG 管线/Citation / provenance
  - I/I3. RAG 管线/Post-processing
  - I/I4. RAG 形态
  - K/K7. 工具与外部连接

#### Query understanding

- pathKey: `I/I3. RAG 管线/Query understanding`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I3-6k04nt-1.json`
- status: draft
- definition: Query understanding 是在检索前先判断用户真正想问什么、缺了什么上下文、意图属于哪类知识源，以及是否需要权限或任务状态参与检索。
- importance: 很多检索失败并不是库里没知识，而是系统根本没有正确理解查询类型和检索目标。
- minimum demo: 对一组含缩写、歧义词和上下文依赖的问题，先做意图归类，再比较是否提升后续检索命中。
- prerequisites:
  - I/I3. RAG 管线
  - I/I3. RAG 管线/Query rewrite
- core metrics:
  - intent classification accuracy
  - retrieval success lift
- next:
  - I/I3. RAG 管线/Query rewrite
  - I/I3. RAG 管线/Retrieval

#### Query rewrite

- pathKey: `I/I3. RAG 管线/Query rewrite`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I3-6k04nt-1.json`
- status: draft
- definition: Query rewrite 是把用户原始问法改写成更适合检索系统的检索查询，例如补充同义词、显式实体、时间范围或拆分多跳问题。
- importance: 用户问题经常是自然语言、口语化或上下文依赖的，直接拿去搜往往不如改写后的查询稳定。
- minimum demo: 对一批口语化问题先直接检索，再加一轮 query rewrite，比较 recall@k 的变化。
- prerequisites:
  - I/I3. RAG 管线/Query understanding
  - I/I4. RAG 形态/Query rewriting RAG
- core metrics:
  - rewrite gain
  - query drift rate
- next:
  - I/I3. RAG 管线/Retrieval
  - I/I4. RAG 形态/Query rewriting RAG

#### Retrieval

- pathKey: `I/I3. RAG 管线/Retrieval`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I3-6k04nt-1.json`
- status: draft
- definition: Retrieval 是从知识库中召回候选证据的阶段，通常结合 dense、sparse 或 hybrid 检索，负责把可能相关的片段交给后续重排和生成。
- importance: 它是 RAG 成功的第一道门槛：没召回到正确证据，后面的生成再强也只能在错误上下文里工作。
- minimum demo: 固定一组问题和 gold 证据，测试不同 k、不同检索路由和不同索引组合的 recall@k。
- prerequisites:
  - I/I1. 表示与检索基础/Dense retrieval
  - I/I1. 表示与检索基础/Hybrid retrieval
- core metrics:
  - recall@k
  - latency
  - candidate diversity
- next:
  - I/I3. RAG 管线/Rerank
  - I/I6. 关键质量点/召回率

#### Permission-aware retrieval

- pathKey: `I/I3. RAG 管线/Permission-aware retrieval`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I3-6k04nt-1.json`
- status: draft
- definition: Permission-aware retrieval 指检索阶段就按用户、租户、项目或文档权限过滤候选结果，而不是先检索再在回答阶段“希望模型别看到”。
- importance: RAG 一旦接入企业文档，权限边界就是第一性约束；如果这一步做错，回答质量问题会直接升级成安全事故。
- minimum demo: 为同一知识库构造两组不同权限用户，确保两人检索同一问题时召回集合不同且引用来源不越权。
- hardware budget: 与硬件关系不大，重点在权限模型和索引设计。
- examples:
  - 同一问题对不同团队用户返回不同候选集合。
  - 搜索结果列表和引用片段也必须一起经过权限过滤。
  - 权限收紧后，旧索引中的 chunk 不能继续被召回。
- pitfalls:
  - 只在最终答案阶段做权限控制，检索日志和引用片段却已经泄露内容。
  - 权限过滤做得太晚，导致 rerank 和 context packing 已经看过越权内容。
  - 过滤后 recall 降低，但系统没有 fallback 或提示策略。
- prerequisites:
  - I/I2. 知识库构建/Metadata schema
  - I/I3. RAG 管线
  - J/J8. 安全与权限
- core metrics:
  - unauthorized recall rate
  - authorized recall rate
  - filter latency
  - citation permission correctness
- toolchain:
  - vector store filters
  - ACL / permission service
  - audit logs
- failure signs:
  - 答案没直接泄露，但 citation 或 chunk preview 泄露了受限内容
  - 权限过滤后 recall 断崖式下降，系统却没有降级路径
- next:
  - J/J8. 安全与权限
  - M/M5. 安全控制
  - M/M7. 隐私与合规

#### Rerank

- pathKey: `I/I3. RAG 管线/Rerank`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I3-6k04nt-1.json`
- status: draft
- definition: Rerank 是在初步召回后重新排序候选证据，把最适合当前查询和生成目标的片段放到前面。
- importance: 它经常决定最终喂给模型的上下文是否足够干净，因为 top-k 的前几条质量通常比扩大候选数更关键。
- minimum demo: 固定召回候选，对比有无 rerank 时 top-k 证据质量和最终答案 groundedness。
- prerequisites:
  - I/I1. 表示与检索基础/Reranking
  - I/I3. RAG 管线/Retrieval
- core metrics:
  - nDCG
  - top-k quality
  - grounded answer rate
- next:
  - I/I3. RAG 管线/Context packing
  - I/I6. 关键质量点/精准率

#### Context packing

- pathKey: `I/I3. RAG 管线/Context packing`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I3-6k04nt-1.json`
- status: draft
- definition: Context packing 是把有限的上下文预算分配给最有价值的证据片段，控制顺序、去重、压缩和结构，以提升生成阶段的证据密度。
- importance: 召回到好文档并不够，真正送进模型的上下文如何裁剪和排序，往往直接决定答案是否 grounded。
- minimum demo: 对同一组 top-k 候选试验不同 packing 策略，比较答案正确率、引用质量和 token 成本。
- prerequisites:
  - I/I3. RAG 管线/Rerank
  - I/I2. 知识库构建/Chunking strategy
- core metrics:
  - context utilization
  - token waste ratio
  - answer groundedness
- next:
  - I/I3. RAG 管线/Generation
  - I/I6. 关键质量点/Chunk 质量

#### Citation span alignment

- pathKey: `I/I3. RAG 管线/Citation span alignment`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I3-6k04nt-1.json`
- status: draft
- definition: Citation span alignment 是把答案中的具体结论或句子对齐到支持它的原文 span，而不是只给一个模糊文档级来源。
- importance: 没有 span 级对齐，引用很容易变成“看起来有出处”，但用户无法核验哪句话到底来自哪里。
- minimum demo: 对一批带引用答案，检查每个关键结论是否都能回指到正确 chunk 和正确 span。
- prerequisites:
  - I/I2. 知识库构建/Metadata schema
  - I/I3. RAG 管线/Context packing
- core metrics:
  - span alignment accuracy
  - citation precision
- next:
  - I/I3. RAG 管线/Citation / provenance
  - I/I6. 关键质量点/可追溯性

#### Generation

- pathKey: `I/I3. RAG 管线/Generation`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I3-6k04nt-1.json`
- status: draft
- definition: Generation 是在给定检索证据和上下文打包结果后，生成最终答案的阶段，要求模型尽量以证据为锚而不是自由发挥。
- importance: RAG 的最终价值体现仍然在答案阶段；如果生成器不能正确消费证据，前面的检索质量就无法转化成最终收益。
- minimum demo: 对同一批证据集测试自由生成与带引用约束生成，比较 groundedness 和幻觉率。
- prerequisites:
  - I/I3. RAG 管线/Context packing
  - G/G4. 生成与解码/Structured generation
- core metrics:
  - groundedness
  - answer accuracy
  - hallucination rate
- next:
  - I/I3. RAG 管线/Citation / provenance
  - I/I3. RAG 管线/Post-processing

#### Citation / provenance

- pathKey: `I/I3. RAG 管线/Citation / provenance`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I3-6k04nt-1.json`
- status: draft
- definition: Citation / provenance 关注如何把答案和外部知识来源绑定起来，让用户知道信息来自哪个文档、哪个章节、哪个时间点和哪个权限上下文。
- importance: 这决定了系统是否真正可核验、可追责、可审计，而不是只给用户一个“模型说的”。
- minimum demo: 要求每条答案都返回来源 ID、文档位置和更新时间，并抽样检查引用可信度。
- prerequisites:
  - I/I3. RAG 管线/Citation span alignment
  - I/I2. 知识库构建/Metadata schema
- core metrics:
  - citation coverage
  - citation trustworthiness
  - auditability
- next:
  - I/I6. 关键质量点/引用可信度
  - I/I6. 关键质量点/可追溯性

#### Post-processing

- pathKey: `I/I3. RAG 管线/Post-processing`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I3-6k04nt-1.json`
- status: draft
- definition: Post-processing 是在生成后做结构清洗、引用校验、去重、敏感信息检查和失败恢复，把模型输出变成真正可交付结果。
- importance: 很多 RAG 系统并不是在检索或生成阶段崩，而是在最后一公里因为格式、引用或权限校验缺失而失去可用性。
- minimum demo: 为答案加入 parse、citation、policy 和 fallback 检查，比较有无后处理时的最终可交付率。
- prerequisites:
  - I/I3. RAG 管线/Generation
  - J/J2. 结构化输出/Error recovery
- core metrics:
  - delivery success rate
  - citation validation pass rate
  - recovery rate
- next:
  - I/I6. 关键质量点
  - J/J2. 结构化输出/Validation

### I4. RAG 形态

- pathKey: `I/I4. RAG 形态`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-I.json`
- status: draft
- definition: RAG 形态讨论的是不同检索增强系统如何组织查询改写、单跳或多跳检索、工具调用、知识图谱和长上下文协同。它回答的不是“要不要做 RAG”，而是“该用哪种 RAG 形态承载当前问题结构和约束”。
- importance: 很多系统做不好 RAG，不是因为缺少某个单点技术，而是因为选错了形态。单跳问答、跨文档推理、工具驱动检索、图谱约束和长上下文混合方案面对的是不同的问题分布和成本结构。
- minimum demo: 围绕同一批问题，分别用 basic、query rewriting、multi-hop 和 agentic 四种方案做对照，记录正确率、延迟、工具调用次数和引用质量，观察哪种形态真正匹配你的问题分布。
- hardware budget: 原型阶段主要增加的是查询轮数、重排成本、工具调用次数和上下文费用，而不是训练硬件。随着形态更复杂，系统延迟和可观测性成本通常比模型本身更先成为瓶颈。
- examples:
  - FAQ 和文档定位任务通常只需要 basic RAG。
  - 跨两个文档才能答对的问题更适合 multi-hop 或 query rewriting RAG。
  - 需要动态决定用搜索、数据库还是代码检索时，agentic RAG 更合适。
  - 当文档本身很长时，long-context 与 retrieval 混合往往比单纯扩大 top-k 更有效。
- pitfalls:
  - 把所有任务都套进同一条 basic RAG 流水线。
  - 为了追求复杂度而引入 agentic RAG，却没有提升真实任务成功率。
  - 多跳任务只做单次召回，导致关键中间证据永远缺失。
  - 长上下文和检索同时叠加，但没有控制成本和噪声。
- prerequisites:
  - I/I3. RAG 管线
  - I/I1. 表示与检索基础
  - K/K7. 工具与外部连接
- core metrics:
  - task success rate
  - hop coverage
  - latency
  - cost
  - citation quality
- toolchain:
  - retrieval router
  - query rewrite
  - graph / KG backends
  - agent orchestration
- failure signs:
  - 单跳任务还能答，多跳和跨源任务集体失效。
  - 形态越复杂，日志越多，但答案质量没有明显改善。
  - 长上下文混合后成本明显上升，却没有提升 groundedness。
- next:
  - I/I4. RAG 形态/Basic RAG
  - I/I4. RAG 形态/Multi-hop RAG
  - I/I4. RAG 形态/Query rewriting RAG
  - I/I4. RAG 形态/Agentic RAG
  - I/I4. RAG 形态/KG-RAG
  - I/I4. RAG 形态/Long-context + retrieval hybrid

#### Basic RAG

- pathKey: `I/I4. RAG 形态/Basic RAG`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I4-wc8dyp-1.json`
- status: draft
- definition: Basic RAG 是最直接的检索增强流程：一次查询、一次召回、一次重排 / 打包、一次生成，适合单跳证据就能回答的问题。
- importance: 它是大多数 RAG 系统的起点，也是衡量更复杂形态是否真正有收益的基线。
- minimum demo: 对一组 FAQ 或文档问答任务建立 basic RAG 基线，记录 recall、引用质量和成本。
- prerequisites:
  - I/I3. RAG 管线/Retrieval
  - I/I3. RAG 管线/Generation
- core metrics:
  - grounded answer rate
  - latency
  - cost
- next:
  - I/I4. RAG 形态/Multi-hop RAG
  - I/I4. RAG 形态/Query rewriting RAG

#### Multi-hop RAG

- pathKey: `I/I4. RAG 形态/Multi-hop RAG`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I4-wc8dyp-1.json`
- status: draft
- definition: Multi-hop RAG 面向需要跨多个片段、多个文档或多个中间结论才能答对的问题，通常会做多轮检索或逐步扩展证据链。
- importance: 很多真实问题不是单跳命中就结束，尤其在研究、代码和企业知识场景中，关键事实经常散落在不同来源。
- minimum demo: 找一组明确需要两段以上证据的问题，对比 basic RAG 和 multi-hop RAG 的最终正确率。
- prerequisites:
  - I/I3. RAG 管线/Query rewrite
  - I/I3. RAG 管线/Retrieval
- core metrics:
  - hop coverage
  - final accuracy
  - latency growth
- next:
  - I/I4. RAG 形态/Agentic RAG
  - I/I6. 关键质量点/召回率

#### Query rewriting RAG

- pathKey: `I/I4. RAG 形态/Query rewriting RAG`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I4-wc8dyp-1.json`
- status: draft
- definition: Query rewriting RAG 通过先改写查询、补全实体或拆解问题，再进入检索管线，以提高对口语化、歧义或分布偏移问题的召回效果。
- importance: 当用户问法和知识库写法差异较大时，query rewrite 往往比换 embedding 模型更快见效。
- minimum demo: 对一组口语化问题分别做直接检索和改写后检索，比较 recall@k 和最终 groundedness。
- prerequisites:
  - I/I3. RAG 管线/Query rewrite
  - I/I3. RAG 管线/Query understanding
- core metrics:
  - rewrite gain
  - query drift rate
- next:
  - I/I4. RAG 形态/Basic RAG
  - I/I4. RAG 形态/Multi-hop RAG

#### Agentic RAG

- pathKey: `I/I4. RAG 形态/Agentic RAG`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I4-wc8dyp-1.json`
- status: draft
- definition: Agentic RAG 把检索当成可规划、可循环、可调用多种外部工具的一部分，而不是固定的一次性检索步骤。
- importance: 它适合知识源多样、需要动态决策或需要把检索与其他工具混合编排的复杂任务，但也显著增加时延、可观测性和失败模式复杂度。
- minimum demo: 对一组需要动态选择知识源的问题，对比固定 RAG 管线和 agentic RAG 的成功率与成本。
- prerequisites:
  - I/I3. RAG 管线
  - K/K7. 工具与外部连接
- core metrics:
  - workflow completion rate
  - tool selection correctness
  - cost / latency
- next:
  - K/K7. 工具与外部连接/File search / web search / code tools
  - K/K8. 人在回路/HITL checkpoints

#### KG-RAG

- pathKey: `I/I4. RAG 形态/KG-RAG`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I4-wc8dyp-1.json`
- status: draft
- definition: KG-RAG 利用知识图谱或显式实体关系结构辅助检索和推理，适合关系约束强、实体链长或路径可解释性要求高的任务。
- importance: 当问题不是单纯文档相似度，而是实体关系和路径约束时，图谱结构往往比纯向量召回更有优势。
- minimum demo: 选一组实体关系问答，比较纯文档 RAG 和引入图谱检索后的正确率与解释性。
- prerequisites:
  - I/I4. RAG 形态/Multi-hop RAG
  - B/B4. 知识表示/知识图谱
- core metrics:
  - path correctness
  - entity grounding
  - explainability
- next:
  - I/I6. 关键质量点/可追溯性
  - I/I4. RAG 形态/Long-context + retrieval hybrid

#### Long-context + retrieval hybrid

- pathKey: `I/I4. RAG 形态/Long-context + retrieval hybrid`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I4-wc8dyp-1.json`
- status: draft
- definition: Long-context + retrieval hybrid 结合大上下文窗口和检索系统：先用检索缩小证据范围，再利用长上下文整合更多相关材料，而不是二选一。
- importance: 随着上下文窗口变长，很多系统会误以为不再需要检索；实际更常见的正确做法是两者配合，以控制噪声和成本。
- minimum demo: 对长文档问题分别测试纯长上下文、纯检索和混合方案，比较 groundedness、延迟和 token 成本。
- prerequisites:
  - I/I3. RAG 管线/Context packing
  - G/G3. 上下文与记忆/上下文记忆（prompt context）
- core metrics:
  - context utilization
  - groundedness
  - token cost
- next:
  - I/I6. 关键质量点/Chunk 质量
  - I/I6. 关键质量点/过期知识

### I5. 记忆类型

- pathKey: `I/I5. 记忆类型`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-I.json`
- status: draft
- definition: 记忆类型关注的是：系统到底把什么信息放在参数里、什么放在共享知识库里、什么挂在会话态里、什么沉淀成用户或任务长期状态。它强调不同记忆层的职责边界，而不是把所有“记住信息”的事情都塞进同一机制。
- importance: 很多所谓‘模型记不住’的问题，本质上是记忆分层设计错误。把短期会话状态、长期用户偏好和公共知识库混在一起，会同时带来成本、权限和可维护性问题。
- minimum demo: 为一个对话系统明确区分参数知识、共享知识库、会话状态、用户长期偏好和任务工作记忆，并在日志里标注每条信息来自哪一层，观察系统在多轮和跨会话中的行为变化。
- hardware budget: 记忆类型本身不是训练问题，主要成本来自状态存储、检索延迟、权限隔离和记忆压缩策略。随着会话和用户规模增大，存储与治理成本会迅速上升。
- examples:
  - 产品文档应放在共享知识库，而不是硬塞进 system prompt。
  - 一次工单处理过程里的临时结论属于任务记忆，不应永久写入用户偏好。
  - 用户语言偏好和常用格式适合长期记忆，但必须受权限和删除策略约束。
  - 多轮工具调用中的中间结果适合放在 episodic 或任务级记忆里。
- pitfalls:
  - 把任何“未来可能有用”的信息都长期保存下来。
  - 共享知识和个体记忆没有边界，导致跨用户污染。
  - 任务状态没有压缩策略，会话一长就既贵又乱。
  - 把参数记忆当成可以实时更新的知识层。
- prerequisites:
  - G/G3. 上下文与记忆
  - I/I3. RAG 管线
  - K/K6. Agent 记忆
- core metrics:
  - memory hit quality
  - staleness
  - permission correctness
  - cross-session coherence
- toolchain:
  - session store
  - user profile store
  - task memory store
  - memory compaction / injection
- failure signs:
  - 用户偏好、会话状态和共享知识互相污染。
  - 系统跨会话记住了不该长期保存的信息。
  - 会话越长越慢，且关键状态越来越难被准确注入。
- next:
  - I/I5. 记忆类型/参数记忆
  - I/I5. 记忆类型/非参数知识库
  - I/I5. 记忆类型/会话记忆
  - I/I5. 记忆类型/用户长期记忆
  - I/I5. 记忆类型/任务记忆
  - I/I5. 记忆类型/Episodic memory
  - I/I5. 记忆类型/Semantic memory
  - K/K6. Agent 记忆

#### 参数记忆

- pathKey: `I/I5. 记忆类型/参数记忆`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I5-170c52t-1.json`
- status: draft
- definition: 参数记忆指模型训练后固化在权重里的知识和行为倾向，更新慢、覆盖广，但不适合实时改动和精细权限控制。
- importance: 它解释了为什么模型能直接回答很多常识问题，但也解释了为什么它会过期、难以审计、难以按用户隔离。
- minimum demo: 对同一问题分别测试无外部知识和有外部知识两种条件，区分模型是在靠参数记忆作答还是在用检索证据。
- prerequisites:
  - G/G3. 上下文与记忆/参数记忆（weights）
  - I/I5. 记忆类型/非参数知识库
- core metrics:
  - knowledge freshness gap
  - coverage breadth
- next:
  - I/I5. 记忆类型/非参数知识库
  - I/I6. 关键质量点/过期知识

#### 非参数知识库

- pathKey: `I/I5. 记忆类型/非参数知识库`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I5-170c52t-1.json`
- status: draft
- definition: 非参数知识库是存放在外部文档、索引、数据库和向量库里的可更新知识层，与参数记忆相对，强调可刷新、可追踪和可授权访问。
- importance: 它是 RAG 和企业知识系统的核心，让模型能在不重训的情况下接入最新、私有和可控的知识。
- minimum demo: 把一条新知识只写入外部知识库，不改模型，验证系统是否能在刷新后正确回答该问题。
- prerequisites:
  - I/I2. 知识库构建
  - I/I3. RAG 管线/Retrieval
- core metrics:
  - freshness
  - citation quality
  - access control correctness
- next:
  - I/I5. 记忆类型/用户长期记忆
  - I/I6. 关键质量点/可追溯性

#### 会话记忆

- pathKey: `I/I5. 记忆类型/会话记忆`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I5-170c52t-1.json`
- status: draft
- definition: 会话记忆保存当前对话中的上下文、约束、已确认事实和最近交互状态，通常生命周期短、范围局部。
- importance: 它决定模型在多轮交互中能否保持连贯和减少重复确认，也是很多助手系统最基础的记忆层。
- minimum demo: 设计一个多轮任务，让系统在中途引用前文约束和确认结果，检查会话状态是否被正确保留和注入。
- prerequisites:
  - G/G3. 上下文与记忆/会话记忆（session memory）
  - K/K6. Agent 记忆/Session memory
- core metrics:
  - dialog coherence
  - state retention
  - context length cost
- next:
  - I/I5. 记忆类型/任务记忆
  - I/I5. 记忆类型/Episodic memory

#### 用户长期记忆

- pathKey: `I/I5. 记忆类型/用户长期记忆`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I5-170c52t-1.json`
- status: draft
- definition: 用户长期记忆保存跨会话的稳定偏好、常用格式、角色信息或个性化配置，强调长期可复用但必须受权限和删除策略约束。
- importance: 它能显著减少重复配置和上下文浪费，但如果边界不清，也最容易演变成隐私和越权问题。
- minimum demo: 让系统跨会话记住用户偏好格式，同时验证用户可以修改、删除，且不同用户之间不会互相污染。
- prerequisites:
  - I/I5. 记忆类型/会话记忆
  - K/K6. Agent 记忆/User memory
- core metrics:
  - personalization lift
  - memory precision
  - deletion correctness
- next:
  - I/I6. 关键质量点/授权与权限边界
  - M/M7. 隐私与合规/Data retention

#### 任务记忆

- pathKey: `I/I5. 记忆类型/任务记忆`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I5-170c52t-1.json`
- status: draft
- definition: 任务记忆保存某个工作流或任务实例中的中间结论、当前步骤、工具结果和待办状态，通常随任务生命周期存在。
- importance: 在 Agent 和多步骤流程中，没有任务记忆就很难做断点恢复、跨步骤一致性和复杂工具链协作。
- minimum demo: 构造一个多步骤任务，让系统在中断后恢复执行，检查中间状态是否被正确保留和继续消费。
- prerequisites:
  - K/K6. Agent 记忆/Task memory
  - I/I5. 记忆类型/会话记忆
- core metrics:
  - workflow continuity
  - recovery success rate
  - state consistency
- next:
  - I/I5. 记忆类型/Episodic memory
  - M/M3. Agent 级评测/Workflow completion rate

#### Episodic memory

- pathKey: `I/I5. 记忆类型/Episodic memory`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I5-170c52t-1.json`
- status: draft
- definition: Episodic memory 记录一次次具体经历、交互和事件轨迹，适合保存“发生过什么”，而不是抽象出的长期知识。
- importance: 它适合做复盘、经验回放和任务历史参考，但如果无限堆积，也会迅速带来噪声和存储成本问题。
- minimum demo: 记录若干次任务执行轨迹，让系统在新任务中引用最相似的历史案例，观察是否真的带来帮助。
- prerequisites:
  - K/K6. Agent 记忆/Episodic memory
  - I/I5. 记忆类型/任务记忆
- core metrics:
  - episode retrieval quality
  - reuse value
  - noise growth
- next:
  - I/I5. 记忆类型/Semantic memory
  - K/K6. Agent 记忆/Memory injection / compaction

#### Semantic memory

- pathKey: `I/I5. 记忆类型/Semantic memory`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I5-170c52t-1.json`
- status: draft
- definition: Semantic memory 更关注从多次经历中抽象出的稳定知识、规则和关系，而不是保留每次事件的完整细节。
- importance: 它有助于把 episodic 轨迹提炼成长期可复用知识，减少原始事件堆积带来的噪声和成本。
- minimum demo: 从一组 episodic 记录中抽取稳定结论，再用这些结论辅助后续任务，比较是否比直接回放原始历史更高效。
- prerequisites:
  - K/K6. Agent 记忆/Semantic memory
  - I/I5. 记忆类型/Episodic memory
- core metrics:
  - abstraction quality
  - reuse efficiency
  - freshness
- next:
  - I/I5. 记忆类型/非参数知识库
  - I/I6. 关键质量点/可追溯性

### I6. 关键质量点

- pathKey: `I/I6. 关键质量点`
- node type: `module`
- stage: 03 大模型系统
- detail source: `data/details/domain-I.json`
- status: draft
- definition: 关键质量点把 RAG 和记忆系统里真正决定可用性的指标显式化：召回率、精准率、chunk 质量、时效性、权限边界、可追溯性和引用可信度。它不是新模块，而是整个 `I` 域的验收面。
- importance: 没有这些质量点，系统就会停留在‘看起来能答’的 demo 阶段。真正上线时，用户和业务更关心的是是否找对证据、是否越权、是否过期、是否能追溯，而不是回答是否流畅。
- minimum demo: 为一组带 gold evidence 的问题同时标注召回、引用、权限和时效结果，区分出“没检到”“检到了但排错了”“给了出处但对不上”“答案引用了过期资料”等不同失败类型。
- hardware budget: 这一层几乎不吃训练算力，主要消耗在高质量评测集、标注、审计日志和持续回归上。
- examples:
  - 召回率高但精准率低，意味着系统找到了很多相关文档，却把噪声也一起带进来了。
  - 引用存在但 span 不准，会让用户误以为系统有证据，实际无法核验。
  - 知识更新后仍命中旧内容，说明 freshness 和 delete 链路失效。
  - 同一问题不同用户得到不同结果是好事，前提是这真的是权限边界生效，而不是随机波动。
- pitfalls:
  - 只看最终回答质量，不看证据层质量。
  - 把权限问题混进一般召回问题，导致诊断方向错误。
  - 引用有无被当成质量指标，却不检查引用是否真的支撑结论。
  - 离线评测不覆盖过期知识和权限场景。
- prerequisites:
  - I/I1. 表示与检索基础
  - I/I2. 知识库构建
  - I/I3. RAG 管线
  - M/M1. 模型级评测
  - M/M3. Agent 级评测
- core metrics:
  - recall
  - precision
  - freshness
  - permission correctness
  - citation trustworthiness
  - traceability
- toolchain:
  - retrieval eval set
  - evidence labels
  - audit logs
  - citation validators
- failure signs:
  - 系统经常答对表面问题，但证据层检查一团糟。
  - 一旦涉及权限和时效，质量立刻断崖式下降。
  - 答错时无法区分是检索、重排、引用还是生成阶段出了问题。
- next:
  - I/I6. 关键质量点/召回率
  - I/I6. 关键质量点/精准率
  - I/I6. 关键质量点/Chunk 质量
  - I/I6. 关键质量点/过期知识
  - I/I6. 关键质量点/授权与权限边界
  - I/I6. 关键质量点/可追溯性
  - I/I6. 关键质量点/引用可信度

#### 召回率

- pathKey: `I/I6. 关键质量点/召回率`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I6-yh7i5b-1.json`
- status: draft
- definition: 召回率关心系统是否把真正相关的证据找进候选集合，哪怕它还没排在最前面。
- importance: 如果 gold evidence 根本没被召回，后面的 rerank、packing 和 generation 都无从发挥。
- minimum demo: 为一组问题标注 gold evidence，计算 recall@k，并区分完全没召回和召回到了但排位过低两类错误。
- prerequisites:
  - I/I3. RAG 管线/Retrieval
  - I/I1. 表示与检索基础/Dense retrieval
- core metrics:
  - recall@k
  - miss rate
- next:
  - I/I6. 关键质量点/精准率
  - I/I4. RAG 形态/Multi-hop RAG

#### 精准率

- pathKey: `I/I6. 关键质量点/精准率`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I6-yh7i5b-1.json`
- status: draft
- definition: 精准率关心召回到的候选里有多少是真正相关且值得进入上下文的，而不是把大量噪声一起带进来。
- importance: 精准率低时，模型虽然“看到了很多”，但上下文会被无关片段稀释，最终 groundedness 反而下降。
- minimum demo: 对 top-k 候选逐条做相关性标注，比较有无 rerank 时的 precision@k 和最终答案质量。
- prerequisites:
  - I/I3. RAG 管线/Rerank
  - I/I1. 表示与检索基础/Reranking
- core metrics:
  - precision@k
  - noise ratio
- next:
  - I/I6. 关键质量点/Chunk 质量
  - I/I3. RAG 管线/Context packing

#### Chunk 质量

- pathKey: `I/I6. 关键质量点/Chunk 质量`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I6-yh7i5b-1.json`
- status: draft
- definition: Chunk 质量指被检索单元是否在信息边界、上下文完整性、标题继承和可引用性上足够好，能被模型正确消费。
- importance: 很多 RAG 表现问题最后都能追溯到 chunk 本身：证据被切碎、噪声被混入、章节关系丢失，都会让模型即使召回到相关文档也答不好。
- minimum demo: 对同一批文档试不同 chunk 策略，并抽样检查引用定位、回答质量和 token 浪费情况。
- prerequisites:
  - I/I2. 知识库构建/Chunking strategy
  - I/I3. RAG 管线/Context packing
- core metrics:
  - citation alignment
  - context waste ratio
  - chunk coherence
- next:
  - I/I6. 关键质量点/精准率
  - I/I3. RAG 管线/Citation span alignment

#### 过期知识

- pathKey: `I/I6. 关键质量点/过期知识`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I6-yh7i5b-1.json`
- status: draft
- definition: 过期知识指知识库、缓存或记忆层中的内容已经落后于真实世界，但系统仍然继续引用它来回答问题。
- importance: 这会直接破坏用户对系统的信任，也是外部知识层必须比参数记忆更强的一点：可更新、可删除、可刷新。
- minimum demo: 人为更新一条关键事实，再测系统在 refresh 前后是否能正确切换到新证据，并停止引用旧内容。
- prerequisites:
  - I/I2. 知识库构建/Update / refresh / re-index / delete
  - I/I5. 记忆类型/参数记忆
- core metrics:
  - stale hit rate
  - refresh latency
- next:
  - I/I6. 关键质量点/可追溯性
  - I/I5. 记忆类型/非参数知识库

#### 授权与权限边界

- pathKey: `I/I6. 关键质量点/授权与权限边界`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I6-yh7i5b-1.json`
- status: draft
- definition: 授权与权限边界衡量系统是否只在允许的范围内检索、展示和记忆内容，包括候选、引用、缓存和长期记忆层。
- importance: 这是企业级 RAG 最不可妥协的指标之一；一旦做错，质量问题会立刻升级成安全与合规问题。
- minimum demo: 为同一知识库准备多种权限用户，检查候选、引用和最终答案是否都遵守边界。
- prerequisites:
  - I/I3. RAG 管线/Permission-aware retrieval
  - J/J8. 安全与权限/Permission scopes
- core metrics:
  - unauthorized recall rate
  - authorized answer rate
- next:
  - M/M5. 安全控制/Least privilege
  - M/M7. 隐私与合规/Access control

#### 可追溯性

- pathKey: `I/I6. 关键质量点/可追溯性`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I6-yh7i5b-1.json`
- status: draft
- definition: 可追溯性指系统能否解释答案来自哪些来源、经过哪些检索与重排步骤、在什么时间和权限上下文下生成。
- importance: 没有可追溯性，答错时无法定位责任环节；答对时也很难让用户信任和复核。
- minimum demo: 要求系统返回文档来源、chunk ID、重排顺序和生成引用，并在日志中保留完整 trace。
- prerequisites:
  - I/I3. RAG 管线/Citation / provenance
  - M/M3. Agent 级评测/Trace schema
- core metrics:
  - trace completeness
  - source recoverability
- next:
  - I/I6. 关键质量点/引用可信度
  - M/M3. Agent 级评测/Trace grading

#### 引用可信度

- pathKey: `I/I6. 关键质量点/引用可信度`
- node type: `concept-group`
- detail source: `data/details/leaves-I-I6-yh7i5b-1.json`
- status: draft
- definition: 引用可信度衡量的是：系统给出的引用是否真的支撑答案中的结论，而不是只附带一个看似相关的来源装饰。
- importance: 引用存在本身不等于可信。只有当证据内容、span 对齐和结论支持关系都成立时，引用才真正有价值。
- minimum demo: 抽样检查带引用答案，判定每条关键结论是否都能被其引用片段直接支持。
- prerequisites:
  - I/I3. RAG 管线/Citation span alignment
  - I/I3. RAG 管线/Citation / provenance
- core metrics:
  - citation precision
  - support rate
  - misleading citation rate
- next:
  - M/M1. 模型级评测/结构化输出正确率
  - I/I6. 关键质量点/可追溯性

## J. AI 应用工程

- pathKey: `J`
- node type: `domain`
- stage: 04 应用与 Agent
- graph summary: OpenAI 把结构化输出、函数调用、工具、会话状态、流式响应、上下文管理等组织成应用层的核心能力；这层是“模型能力”向“可维护软件系统”转化的地方。
- relation notes:
  - AI 应用工程 是“单个 AI 功能/应用”的工程层；Agent 系统 是“多步自主系统”的工程层。
  - AI 应用工程 可不进入 Agent 系统：很多优秀 AI 产品只是强应用工程，不一定需要 Agent。
  - AI 应用工程 需要同时连接 LLM 核心机制、检索、记忆与外部知识、运行时与基础设施、评测、安全与治理、产品、场景与组织 四层，才能从 demo 变成产品。
- detail source: `data/details/domain-J.json`
- status: complete
- definition: AI 应用工程关注把模型能力稳定接到真实产品与业务流程中：围绕输入输出契约、结构化结果、工具调用、会话状态、流式交互、多模态接口、可靠性、安全边界与应用形态，设计一条可开发、可观测、可回退、可迭代的应用执行链。它不研究模型内部参数如何训练，而研究如何把现有模型封装成可上线、可维护、可评估的系统能力。
- importance: 很多 AI 项目的成败不取决于模型本身，而取决于应用层工程是否把不确定的模型行为收敛成可控的软件接口。这个 domain 是从“能调用模型”走向“能交付产品”的分水岭：它决定系统是否能返回稳定格式、正确使用工具、管理上下文、在实时场景中提供良好体验，并在异常、权限和成本约束下持续运行。对工程学习者来说，掌握这一层比单纯会写 prompt 更接近真实生产环境。
- minimum demo: 做一个最小可用的 AI 助手：前端支持流式输出，后端封装统一模型接口；要求模型能返回结构化 JSON、在需要时调用一个受控工具、保存单轮以上会话状态，并记录超时、重试、失败原因和 token 消耗。验收标准不是“回答看起来聪明”，而是“接口稳定、异常可恢复、权限边界清楚、关键路径可观测”。
- hardware budget: 学习与原型阶段通常不需要自有 GPU，使用托管模型 API、一台普通开发机和基础日志存储即可完成。预算重点往往不在算力，而在 API 调用费用、向量/缓存/对象存储、消息与实时连接、监控告警和用于回放调试的工程基础设施。进入生产后，真正需要精算的是延迟、并发、重试放大、上下文长度和多模态输入带来的综合成本。
- examples:
  - 聊天助手把用户请求转成结构化任务并调用内部工具完成查询或创建操作。
  - 文档助手读取文件内容、抽取字段、生成带 schema 的结果并返回前端表单。
  - 编码助手在 IDE 中流式输出建议，同时根据权限调用检索、测试或执行工具。
  - 工作流助手在多轮会话中保留状态，分阶段确认高风险动作后再执行。
  - 语音或多模态助手把音频、图像、文本与工具调用组合成统一交互链路。
- pitfalls:
  - 把应用工程误解为“写 prompt”，忽略输入输出契约、异常恢复和状态管理。
  - 直接相信模型自然语言输出，缺少结构化约束、验证和错误恢复。
  - 工具调用没有权限边界或人工确认，导致越权、误操作或不可审计。
  - 上下文不断累积但不压缩，造成成本失控、延迟上升和指令漂移。
  - 只看主观体验，不记录延迟、成功率、schema 合法率和工具失败率。
  - 把实时流式体验建立在不可靠后端之上，导致前端频繁中断或状态错乱。
- core metrics:
  - 端到端成功率
  - 首 token 延迟与总延迟
  - 结构化输出合法率
  - 工具调用成功率
  - 重试后恢复率
  - 会话状态一致性
  - 权限拦截与审批通过率
  - 单位请求成本
  - 流式中断率
  - 用户任务完成率
- toolchain:
  - LLM API SDK / gateway
  - JSON Schema 或 typed model 校验库
  - 工具调用与任务编排框架
  - 会话状态存储与缓存
  - 流式传输通道（SSE / WebSocket）
  - 日志、追踪与指标监控
  - 权限控制、密钥管理与审计组件
  - 多模态文件与媒体处理组件
  - 回放、评测与失败样本集
- failure signs:
  - 同类请求输出格式经常变化，前后端需要大量特判。
  - 工具调用链偶发成功、偶发失败，且失败原因无法定位。
  - 多轮会话中模型忘记约束、重复提问或引用过期状态。
  - 流式界面看似顺畅，但后端超时、取消和断连无法正确处理。
  - 敏感操作没有显式确认、作用域隔离或审计记录。
  - 成本和延迟随上下文长度快速恶化，且没有预算与压缩策略。
  - 线上问题只能靠人工复现，缺少请求级日志、trace 和回放数据。
- next:
  - J/J1. 模型接口层
  - J/J2. 结构化输出
  - J/J3. 工具调用
  - J/J4. 会话与状态
  - J/J5. 流式与实时
  - J/J6. 多模态应用
  - J/J7. 工程可靠性
  - J/J8. 安全与权限
  - J/J9. 应用形态

### J1. 模型接口层

- pathKey: `J/J1. 模型接口层`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-J.json`
- status: draft
- definition: 模型接口层关注应用到底如何把用户请求转成对模型的稳定调用契约：走 chat 还是 responses、怎样组织 prompt、system / user / tool message 如何分工、上下文如何装配、输入输出约束如何被程序消费。它不是“调 API”的细节，而是应用层和模型层之间的正式边界。
- importance: 很多 AI 应用一开始能跑，后面却越来越脆，根源就是模型接口层没有被当成产品接口来设计。没有清晰的 message 结构、上下文装配规则和输入输出契约，后面的结构化输出、工具调用、状态管理和可靠性控制都会变成补丁式工程。
- minimum demo: 实现一个最小后端封装：统一接收业务请求，转换成明确的 message 数组和输入契约；支持 chat / responses 一种稳定接口；记录输入 token、系统提示、工具配置和输出结果。验收标准不是答案是否聪明，而是不同调用路径都能走同一套封装和日志。
- hardware budget: 这一层几乎不消耗额外训练算力，主要成本来自 API 调用、日志、缓存和协议演进维护。真正要预算的是上下文长度、重试和流式连接，而不是“接口层代码”本身。
- examples:
  - 把产品请求统一转成 system / user / tool messages，而不是每个页面自己拼 prompt。
  - 对复杂任务使用 responses 风格统一承载工具、流式和结构化输出。
  - 在模型接口层就定义输入字段、输出 schema 和错误类型，供前后端共用。
  - 把上下文组装逻辑集中到一处，避免不同入口产生不同历史拼接方式。
- pitfalls:
  - 每个调用点都直接拼 prompt，导致行为越来越分裂。
  - system prompt、上下文和工具配置散落在前后端多个地方，问题难以定位。
  - 没有统一输入输出契约，后续只能靠字符串特判接模型输出。
  - 把不同模型能力差异暴露给业务层，导致调用方不断堆条件分支。
- prerequisites:
  - G/G8. 推理模型与模型路由
  - J/J2. 结构化输出
  - J/J3. 工具调用
- core metrics:
  - API success rate
  - schema adherence
  - latency
  - token usage
  - error recovery rate
- toolchain:
  - LLM SDK / gateway
  - message builders
  - schema validators
  - request tracing
- failure signs:
  - 同类请求在不同入口上表现差异明显。
  - 模型升级或切换接口后，调用方大面积联动修改。
  - 线上问题无法还原出系统提示、上下文和工具配置。
  - 前后端都在各自拼 prompt，导致最终输入不可追踪。
- next:
  - J/J1. 模型接口层/Chat / responses
  - J/J1. 模型接口层/Prompt composition
  - J/J1. 模型接口层/System / user / tool messages
  - J/J1. 模型接口层/Context assembly
  - J/J1. 模型接口层/Input / output contracts
  - J/J2. 结构化输出
  - J/J3. 工具调用

#### Chat / responses

- pathKey: `J/J1. 模型接口层/Chat / responses`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J1-1m8dl11-1.json`
- status: draft
- definition: Chat / responses 指应用层选择怎样的模型调用接口来承载文本、多模态、工具、结构化输出和流式事件。它既是 SDK 选择问题，也是能力编排边界问题。
- importance: 接口层选型会直接影响后续能否统一支持工具调用、流式事件和结构化输出；如果入口选错，后面很多能力只能靠补丁拼上去。
- minimum demo: 把同一业务请求分别走两种接口封装，比较事件模型、日志字段、结构化输出支持和工具调用一致性。
- prerequisites:
  - J/J1. 模型接口层
  - J/J3. 工具调用/Function calling
- core metrics:
  - API surface stability
  - tooling support
  - latency
- next:
  - J/J1. 模型接口层/Prompt composition
  - J/J5. 流式与实时

#### Prompt composition

- pathKey: `J/J1. 模型接口层/Prompt composition`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J1-1m8dl11-1.json`
- status: draft
- definition: Prompt composition 是把任务目标、系统规则、上下文片段、示例和工具说明组合成最终可发送输入的过程。
- importance: 如果组合逻辑分散在多个业务入口里，应用行为会越来越不可预测；集中治理 prompt composition 是接口层稳定的关键。
- minimum demo: 把一个复杂请求拆成 system、history、retrieved context、tool spec 和 user input 五个片段，明确它们的拼接顺序与优先级。
- prerequisites:
  - H/H1. 不改权重的控制/Prompt templates
  - J/J1. 模型接口层/System / user / tool messages
- core metrics:
  - composition consistency
  - token efficiency
- next:
  - J/J1. 模型接口层/Context assembly
  - J/J2. 结构化输出/JSON Schema

#### System / user / tool messages

- pathKey: `J/J1. 模型接口层/System / user / tool messages`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J1-1m8dl11-1.json`
- status: draft
- definition: System / user / tool messages 是把不同来源的意图和状态分层表达出来：系统规则定义边界，用户消息表达目标，工具消息承载外部执行结果。
- importance: 如果这些角色不分层，模型会把工具输出、用户意图和系统政策混在一起理解，导致行为漂移和诊断困难。
- minimum demo: 对同一任务分别用单段 prompt 和分层 message 表达，比较多轮工具调用时的稳定性和可追踪性。
- prerequisites:
  - J/J1. 模型接口层/Prompt composition
  - J/J3. 工具调用/Tool result injection
- core metrics:
  - role separation clarity
  - debuggability
  - policy retention
- next:
  - J/J1. 模型接口层/Context assembly
  - J/J3. 工具调用

#### Context assembly

- pathKey: `J/J1. 模型接口层/Context assembly`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J1-1m8dl11-1.json`
- status: draft
- definition: Context assembly 是在发送请求前，把会话历史、检索证据、任务状态、用户偏好和系统提示按预算与优先级装配成最终上下文。
- importance: 它是应用层里最容易失控的一环：历史越堆越长、证据越加越杂，最终不仅更贵，还更容易把真正关键约束冲淡。
- minimum demo: 为同一请求做两种上下文组装策略，对比 token 预算、关键约束保留率和最终答案质量。
- prerequisites:
  - J/J1. 模型接口层/Prompt composition
  - J/J4. 会话与状态/Token budgeting
- core metrics:
  - context utilization
  - token cost
  - constraint retention
- next:
  - J/J4. 会话与状态/Context compaction
  - I/I3. RAG 管线/Context packing

#### Input / output contracts

- pathKey: `J/J1. 模型接口层/Input / output contracts`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J1-1m8dl11-1.json`
- status: draft
- definition: Input / output contracts 是把模型调用前后的字段、类型、错误语义和结果形态显式定义成程序契约，而不是靠自然语言约定。
- importance: 没有契约，模型输出再聪明也很难安全接进软件系统；有了契约，才能把结构化输出、校验和错误恢复纳入正常工程流程。
- minimum demo: 为一个模型能力定义明确输入对象、输出 schema 和错误类型，然后在服务层统一校验与回传。
- prerequisites:
  - J/J2. 结构化输出
  - J/J1. 模型接口层/Chat / responses
- core metrics:
  - schema adherence
  - parse success rate
  - error classification quality
- next:
  - J/J2. 结构化输出/Validation
  - J/J7. 工程可靠性/Error classes

### J2. 结构化输出

- pathKey: `J/J2. 结构化输出`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-J.json`
- status: draft
- definition: 结构化输出关注的是如何让模型稳定地产生程序可消费的结果，而不是只给一段“看起来像对的”自然语言。它涵盖 JSON mode、JSON Schema、typed outputs、解析、校验和错误恢复这些环节，目标是把模型输出变成明确的数据契约。
- importance: 一旦模型结果要进入数据库、工作流、表单、API 或工具链，结构化输出就比文采重要得多。很多 AI 应用从 demo 到生产的分水岭，不在于模型是否更聪明，而在于输出是否足够稳定、可解析、可校验、可恢复。
- minimum demo: 选一个固定 schema 的抽取或表单生成任务，分别测试自由文本输出、JSON mode 和 JSON Schema 约束输出。记录 parse success、字段完整率、语义正确率、重试次数和恢复成功率，比较三者差异。
- hardware budget: 这层几乎不增加训练硬件开销，主要成本来自重试、校验、解析和失败恢复逻辑。真正要控制的是无效输出带来的放大成本，而不是模型算力本身。
- examples:
  - 从文档中抽取固定字段并写入数据库。
  - 根据用户意图生成符合类型约束的工具调用参数。
  - 把客服对话总结成工单对象，而不是一段长描述。
  - 把多步分析结果拆成结论、证据、风险等级和建议动作四个字段。
- pitfalls:
  - 把“能输出 JSON”误当成“字段内容一定正确”。
  - 只做 Parsing，不做语义级 Validation 和错误分类。
  - 输出失败时没有恢复路径，只能把坏 JSON 直接丢给调用方。
  - schema 频繁变更，却没有统一契约和版本管理。
- prerequisites:
  - H/H1. 不改权重的控制/Structured outputs
  - H/H6. 行为优化维度/更结构化
  - J/J1. 模型接口层/Input / output contracts
- core metrics:
  - parse success rate
  - schema adherence
  - field completeness
  - semantic validity
  - recovery success rate
- toolchain:
  - JSON mode / typed output APIs
  - schema validators
  - parsers
  - retry and fallback handlers
- failure signs:
  - JSON 形式上合法，但关键字段经常缺失或类型错误。
  - 小改 prompt 就导致字段名、嵌套层级或枚举值漂移。
  - 坏输出无法被归类，只能统一重试或直接报错。
  - 前端和后端各自维护一份 schema，最终长期不一致。
- next:
  - J/J2. 结构化输出/JSON mode
  - J/J2. 结构化输出/JSON Schema
  - J/J2. 结构化输出/Typed outputs
  - J/J2. 结构化输出/Validation
  - J/J2. 结构化输出/Parsing
  - J/J2. 结构化输出/Error recovery
  - J/J3. 工具调用

#### JSON mode

- pathKey: `J/J2. 结构化输出/JSON mode`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J2-1ilpa5e-1.json`
- status: draft
- definition: JSON mode 是要求模型输出合法 JSON 结构的最基础约束方式，重点在保证结果形式上可被解析。
- importance: 它通常是从自由文本走向结构化输出的第一步，能显著降低纯文本混杂导致的解析失败。
- minimum demo: 对同一抽取任务分别用自由文本和 JSON mode 输出，比较 parse success 和字段漂移。
- prerequisites:
  - J/J2. 结构化输出
  - J/J1. 模型接口层/Chat / responses
- core metrics:
  - parse success rate
  - format stability
- next:
  - J/J2. 结构化输出/JSON Schema
  - J/J2. 结构化输出/Parsing

#### JSON Schema

- pathKey: `J/J2. 结构化输出/JSON Schema`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J2-1ilpa5e-1.json`
- status: draft
- definition: JSON Schema 用显式字段、类型、枚举和嵌套约束来限定模型输出，不只要求它是 JSON，还要求它符合目标结构。
- importance: 这能把“看起来像 JSON”的结果提升成“形式上满足契约”的结果，是工具调用和业务系统接入的关键一步。
- minimum demo: 为一个对象定义 schema，比较无 schema 和有 schema 约束时的字段完整率与类型错误率。
- prerequisites:
  - J/J2. 结构化输出/JSON mode
  - J/J1. 模型接口层/Input / output contracts
- core metrics:
  - schema adherence
  - field completeness
  - type correctness
- next:
  - J/J2. 结构化输出/Typed outputs
  - J/J2. 结构化输出/Validation

#### Typed outputs

- pathKey: `J/J2. 结构化输出/Typed outputs`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J2-1ilpa5e-1.json`
- status: draft
- definition: Typed outputs 是把模型输出直接映射到应用层的类型系统或数据模型中，例如后端 DTO、前端类型或数据类，而不仅仅停留在原始 JSON 文本。
- importance: 它把结构化输出和应用代码打通，能减少前后端重复定义、解析漂移和手写字段映射错误。
- minimum demo: 把模型输出直接绑定到一个显式类型对象，比较手动 JSON 解析和 typed output 绑定的错误率。
- prerequisites:
  - J/J2. 结构化输出/JSON Schema
  - J/J1. 模型接口层/Input / output contracts
- core metrics:
  - binding success rate
  - contract drift rate
- next:
  - J/J2. 结构化输出/Validation
  - J/J7. 工程可靠性/Error classes

#### Validation

- pathKey: `J/J2. 结构化输出/Validation`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J2-1ilpa5e-1.json`
- status: draft
- definition: Validation 是在 Parsing 之后检查结构和语义是否同时满足业务要求，包括字段范围、跨字段关系、必填规则和外部约束。
- importance: 很多输出在形式上完全合法，但业务上根本不可用。没有 validation，系统只是把坏数据更稳定地写进去了。
- minimum demo: 为一个固定 schema 定义语义校验规则，统计形式合法但语义不合法的比例。
- prerequisites:
  - J/J2. 结构化输出/JSON Schema
  - J/J2. 结构化输出/Parsing
- core metrics:
  - semantic validity rate
  - validation failure taxonomy
- next:
  - J/J2. 结构化输出/Error recovery
  - J/J3. 工具调用/Tool schema design

#### Parsing

- pathKey: `J/J2. 结构化输出/Parsing`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J2-1ilpa5e-1.json`
- status: draft
- definition: Parsing 是把模型返回的原始字符串或事件流转成应用层对象的过程，负责处理 JSON 解析、字段抽取和基础错误分流。
- importance: 它是结构化输出进入软件系统的入口。如果解析层设计粗糙，后面再好的 schema 和 validation 都没法稳定工作。
- minimum demo: 对一批真实输出样本做解析，分类统计常见错误：截断、额外文本、字段缺失、类型不匹配和嵌套错误。
- prerequisites:
  - J/J2. 结构化输出/JSON mode
  - J/J2. 结构化输出/Typed outputs
- core metrics:
  - parse success rate
  - parse error classes
- next:
  - J/J2. 结构化输出/Validation
  - J/J2. 结构化输出/Error recovery

#### Error recovery

- pathKey: `J/J2. 结构化输出/Error recovery`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J2-1ilpa5e-1.json`
- status: draft
- definition: Error recovery 指结构化输出失败后如何重试、修复、降级或人工兜底，而不是简单返回一条解析异常。
- importance: 生产系统里结构化输出不可能永远成功，恢复路径决定了失败是可控的小抖动，还是直接变成用户可见事故。
- minimum demo: 为解析失败和 validation 失败分别设计重试、修复和降级策略，统计恢复后的可交付率。
- prerequisites:
  - J/J2. 结构化输出/Validation
  - J/J7. 工程可靠性/Retry
- core metrics:
  - recovery success rate
  - fallback rate
  - user-visible failure rate
- next:
  - J/J7. 工程可靠性/Fallback
  - J/J7. 工程可靠性/Error classes

### J3. 工具调用

- pathKey: `J/J3. 工具调用`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-J.json`
- status: draft
- definition: 工具调用关注的是：模型什么时候该调用外部工具、如何表达工具意图、如何传递参数、怎样执行、怎样把结果回灌给模型，以及失败后如何重试或降级。它把模型从“只会说”推进到“能做事”，但代价是系统边界、权限和失败模式都会显著增加。
- importance: 很多 AI 应用真正的价值不在生成一段答案，而在于查询系统、读文件、搜索资料、写工单、执行代码或调用业务 API。工具调用因此是应用工程从内容生成走向任务闭环的关键层。如果这里设计不清，系统很容易出现选错工具、参数错误、结果注入混乱、越权执行和不可恢复失败。
- minimum demo: 实现一个最小工具链：模型根据请求选择是否调用一个只读工具和一个带副作用工具；工具 schema 明确参数和返回值；执行层记录调用、失败和耗时；高风险调用前要求人工确认。验收标准是工具选择正确、参数可校验、结果能被模型消费、失败可回退。
- hardware budget: 这一层主要增加的是 API、网络、工具执行和回放日志成本，而不是训练算力。真正需要预算的是超时、重试放大、副作用保护和人工审批链路，而不是模型本身。
- examples:
  - 模型根据用户问题调用内部搜索或数据库查询工具，而不是凭记忆回答。
  - 编码助手先调代码检索和测试工具，再生成修复建议。
  - 工作流助手在真正创建工单前先展示参数草案并等待审批。
  - 多步任务里，模型根据前一步工具结果决定下一步该调用哪个工具。
- pitfalls:
  - 把工具调用当成“模型自然会做的事”，不设计明确 schema 和失败路径。
  - 只关注能不能调通，不关注何时不该调用工具。
  - 执行层和模型层共同拼参数，最终责任边界不清。
  - 工具结果直接原样注入模型，导致噪声、泄密或 prompt injection 问题。
  - 失败后只会无限重试，没有 fallback 或人工兜底。
- prerequisites:
  - J/J1. 模型接口层
  - J/J2. 结构化输出
  - K/K7. 工具与外部连接
- core metrics:
  - tool selection accuracy
  - argument correctness
  - tool success rate
  - workflow completion rate
  - fallback rate
- toolchain:
  - function calling APIs
  - tool schema registry
  - execution sandbox / adapters
  - audit logs
  - approval gates
- failure signs:
  - 模型在不需要工具时频繁误调。
  - 调用成功率看似不低，但端到端任务完成率很差。
  - 工具返回结果后，模型依然重复调用或忽略结果。
  - 副作用工具没有审批和隔离边界，线上风险持续累积。
- next:
  - J/J3. 工具调用/Function calling
  - J/J3. 工具调用/Tool schema design
  - J/J3. 工具调用/Tool routing
  - J/J3. 工具调用/Tool execution
  - J/J3. 工具调用/Tool result injection
  - J/J3. 工具调用/Tool retries / fallback
  - J/J7. 工程可靠性
  - J/J8. 安全与权限

#### Function calling

- pathKey: `J/J3. 工具调用/Function calling`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J3-rtwvkk-1.json`
- status: draft
- definition: Function calling 是让模型以结构化方式表达“我想调用哪个工具、带什么参数”，而不是把工具意图埋在自然语言里。
- importance: 它是模型和执行层之间最基础的协议层，决定工具意图能否被稳定识别和消费。
- minimum demo: 让模型在需要和不需要工具的请求上分别输出函数调用意图，统计调用触发和参数结构是否稳定。
- prerequisites:
  - J/J2. 结构化输出/JSON Schema
  - J/J3. 工具调用/Tool schema design
- core metrics:
  - call trigger accuracy
  - argument format stability
- next:
  - J/J3. 工具调用/Tool routing
  - J/J3. 工具调用/Tool execution

#### Tool schema design

- pathKey: `J/J3. 工具调用/Tool schema design`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J3-rtwvkk-1.json`
- status: draft
- definition: Tool schema design 是把工具名称、参数、约束、默认值、枚举、错误语义和副作用边界定义清楚，让模型和执行层共享同一契约。
- importance: 很多工具调用失败不是模型不会调，而是 schema 含糊、字段歧义或约束缺失，导致参数质量天生不稳。
- minimum demo: 为同一工具设计一版宽松 schema 和一版严格 schema，比较参数正确率和失败类型分布。
- prerequisites:
  - H/H1. 不改权重的控制/Tool schemas
  - J/J2. 结构化输出/Validation
- core metrics:
  - argument accuracy
  - validation failure rate
- next:
  - J/J3. 工具调用/Function calling
  - J/J3. 工具调用/Tool result injection

#### Tool routing

- pathKey: `J/J3. 工具调用/Tool routing`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J3-rtwvkk-1.json`
- status: draft
- definition: Tool routing 关注的是何时该调工具、该调哪个工具、是否需要多工具链，以及何时应该直接回答或升级到人工确认。
- importance: 这是工具调用最容易出错也最有价值的一层，因为很多失败根本不是执行报错，而是路由决策从一开始就错了。
- minimum demo: 准备一组需要工具、无需工具和需人工审批的任务，统计路由正确率和误调率。
- prerequisites:
  - G/G8. 推理模型与模型路由/Model routing policy
  - J/J3. 工具调用/Function calling
- core metrics:
  - tool selection accuracy
  - false call rate
  - escalation correctness
- next:
  - J/J3. 工具调用/Tool execution
  - K/K8. 人在回路/Approval before side effects

#### Tool execution

- pathKey: `J/J3. 工具调用/Tool execution`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J3-rtwvkk-1.json`
- status: draft
- definition: Tool execution 是把模型产出的工具调用意图真正映射到可执行代码、外部 API 或系统动作上，并处理超时、异常、副作用和审计。
- importance: 这一步决定应用是停留在“建议工具调用”，还是能安全完成真实操作；同时它也是副作用风险和可靠性风险最集中的环节。
- minimum demo: 实现一个只读工具和一个带副作用工具，分别测试执行成功、超时、失败和审批拦截路径。
- prerequisites:
  - J/J3. 工具调用/Tool routing
  - J/J8. 安全与权限/Sensitive action approval
- core metrics:
  - execution success rate
  - timeout rate
  - side-effect safety
- next:
  - J/J3. 工具调用/Tool result injection
  - J/J7. 工程可靠性/Timeout

#### Tool result injection

- pathKey: `J/J3. 工具调用/Tool result injection`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J3-rtwvkk-1.json`
- status: draft
- definition: Tool result injection 是把工具返回结果以适当粒度和角色重新注入模型上下文，让模型能正确消费结果而不被噪声淹没。
- importance: 很多工具链路明明执行成功，最终任务却失败，原因就在于结果注入方式错误，模型没有真正用上工具结果。
- minimum demo: 对同一工具结果分别做原样注入、摘要注入和结构化注入，比较后续步骤质量和 token 成本。
- prerequisites:
  - J/J1. 模型接口层/System / user / tool messages
  - J/J3. 工具调用/Tool execution
- core metrics:
  - result consumption quality
  - token overhead
  - noise ratio
- next:
  - J/J1. 模型接口层/Context assembly
  - J/J3. 工具调用/Tool retries / fallback

#### Tool retries / fallback

- pathKey: `J/J3. 工具调用/Tool retries / fallback`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J3-rtwvkk-1.json`
- status: draft
- definition: Tool retries / fallback 处理工具调用失败后的恢复策略，包括重试、换工具、降级到只读路径、返回部分结果或升级到人工。
- importance: 生产环境里工具失败是常态，不是例外。没有这层，任何一个外部系统抖动都能直接击穿整个 AI 工作流。
- minimum demo: 人为制造超时、空结果和服务错误，分别验证重试、fallback 和人工兜底路径是否按预期触发。
- prerequisites:
  - J/J3. 工具调用/Tool execution
  - J/J7. 工程可靠性/Fallback
- core metrics:
  - recovery success rate
  - retry amplification
  - user-visible failure rate
- next:
  - J/J7. 工程可靠性/Retry
  - J/J7. 工程可靠性/Fallback

### J4. 会话与状态

- pathKey: `J/J4. 会话与状态`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-J.json`
- status: draft
- definition: 会话与状态关注应用在多轮交互中到底保存什么、保存在哪里、何时压缩、何时回放，以及哪些状态该由客户端管理、哪些该由服务端持有。它讨论的是交互连续性和资源边界，而不是泛化意义上的“记忆”。
- importance: 很多 AI 应用一开始是单轮可用，多轮就迅速失控，问题通常不在模型，而在状态层：历史越堆越长、上下文越来越脏、客户端和服务端各存一份、会话恢复和断点续接逻辑又彼此不一致。把会话与状态层设计清楚，是后续流式、工具调用、长会话和多端同步的前提。
- minimum demo: 实现一个最小多轮助手：同一会话可连续追问；服务端保存会话状态；客户端可在刷新后恢复；历史过长时做压缩；每次请求记录 token 预算与裁剪结果。验收标准是跨轮约束不丢、重复信息不过度增长、刷新和恢复后行为一致。
- hardware budget: 这一层不增加训练算力，但会显著影响 token 成本、缓存命中率、存储占用和请求延迟。真正要精算的是状态持久化、上下文长度、回放开销和多端同步成本。
- examples:
  - 聊天助手在用户连续追问时保留当前主题、已确认信息和待办状态。
  - 工单助手在刷新页面后能恢复上一次编辑进度和工具执行结果。
  - 长会话中把旧历史压缩成摘要或结构化状态，再继续后续对话。
  - 移动端只回放必要历史，而服务端维护完整会话和审计记录。
- pitfalls:
  - 把所有历史原样塞回模型，导致成本和噪声同时失控。
  - 客户端和服务端各自管理状态，最终恢复逻辑长期不一致。
  - 会话状态和长期用户记忆混在一起，删除和权限边界变得模糊。
  - Prompt caching 和上下文压缩没有配合，缓存命中率很低却照样持续付费。
- prerequisites:
  - J/J1. 模型接口层/Context assembly
  - I/I5. 记忆类型
  - K/K6. Agent 记忆
- core metrics:
  - cross-turn consistency
  - token cost per session
  - resume success rate
  - cache hit rate
  - state drift rate
- toolchain:
  - session store
  - context compaction logic
  - prompt cache
  - request tracing
- failure signs:
  - 用户一多轮追问，系统就忘记先前约束或重复确认信息。
  - 刷新页面后会话恢复结果和原会话不一致。
  - 历史越长越慢、越贵，但有效信息占比越来越低。
  - 状态删除后仍能从缓存或回放中看到旧信息。
- next:
  - J/J4. 会话与状态/Conversation state
  - J/J4. 会话与状态/Session memory
  - J/J4. 会话与状态/Server-managed state
  - J/J4. 会话与状态/Client-managed replay
  - J/J4. 会话与状态/Context compaction
  - J/J4. 会话与状态/Prompt caching
  - J/J4. 会话与状态/Token budgeting
  - J/J5. 流式与实时

#### Conversation state

- pathKey: `J/J4. 会话与状态/Conversation state`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J4-1hf74xi-1.json`
- status: draft
- definition: Conversation state 是一次对话在当前时刻的最小工作状态，包括主题、已确认约束、最近工具结果和未完成动作，而不是整段历史文本的简单累积。
- importance: 如果没有显式会话状态，系统只能靠整段历史猜测当前上下文，随着轮次增加会越来越慢、越来越不稳定。
- minimum demo: 为一个多轮任务显式维护当前主题和已确认参数，比较有无显式 state 时的跨轮一致性。
- prerequisites:
  - J/J1. 模型接口层/Context assembly
  - J/J4. 会话与状态/Session memory
- core metrics:
  - state retention
  - cross-turn consistency
- next:
  - J/J4. 会话与状态/Server-managed state
  - J/J4. 会话与状态/Context compaction

#### Session memory

- pathKey: `J/J4. 会话与状态/Session memory`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J4-1hf74xi-1.json`
- status: draft
- definition: Session memory 是围绕当前会话生命周期保存的信息层，通常只在一次会话或短时间窗口内有效，不应自动升级成长期用户记忆。
- importance: 它能支撑连续对话和工具链路，但边界不清时很容易和长期记忆、任务记忆混淆，带来隐私和治理问题。
- minimum demo: 让系统在一次会话内记住用户偏好格式，但结束会话后不再默认继承这些设置。
- prerequisites:
  - I/I5. 记忆类型/会话记忆
  - K/K6. Agent 记忆/Session memory
- core metrics:
  - session recall quality
  - cleanup correctness
- next:
  - J/J4. 会话与状态/Conversation state
  - J/J4. 会话与状态/Server-managed state

#### Server-managed state

- pathKey: `J/J4. 会话与状态/Server-managed state`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J4-1hf74xi-1.json`
- status: draft
- definition: Server-managed state 指由服务端统一保存会话、工具执行结果、状态版本和恢复点，而不是把全部历史交给客户端自行回放。
- importance: 服务端统一持有状态更利于审计、权限控制、恢复和多端同步，是复杂 AI 应用常见的主路径。
- minimum demo: 实现一个服务端会话存储，验证用户刷新页面或换端后仍能恢复一致状态。
- prerequisites:
  - J/J4. 会话与状态/Conversation state
  - J/J7. 工程可靠性/Idempotency
- core metrics:
  - resume success rate
  - state version consistency
- next:
  - J/J4. 会话与状态/Client-managed replay
  - J/J5. 流式与实时/WebSocket / realtime

#### Client-managed replay

- pathKey: `J/J4. 会话与状态/Client-managed replay`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J4-1hf74xi-1.json`
- status: draft
- definition: Client-managed replay 是由客户端保留必要历史或事件流，在重新连接时把关键上下文回放给后端或模型，以快速恢复交互。
- importance: 它适合轻量场景和离线缓存，但如果和服务端状态模型不一致，很容易造成重复消息、顺序错乱和恢复偏差。
- minimum demo: 让客户端在断线后用本地事件流回放当前会话，比较与服务端权威状态恢复的差异。
- prerequisites:
  - J/J4. 会话与状态/Server-managed state
  - J/J5. 流式与实时/Incremental UI updates
- core metrics:
  - replay correctness
  - duplication rate
- next:
  - J/J4. 会话与状态/Prompt caching
  - J/J7. 工程可靠性/Retry

#### Context compaction

- pathKey: `J/J4. 会话与状态/Context compaction`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J4-1hf74xi-1.json`
- status: draft
- definition: Context compaction 是把长会话中的旧历史压缩成摘要、结构化状态或关键事实集合，减少 token 开销同时尽量保留约束和决策痕迹。
- importance: 没有压缩，长会话会同时拖垮成本、延迟和质量；压缩做得差，又会丢掉关键约束和工具结果。
- minimum demo: 对一段长会话分别使用原样回放和压缩后回放，比较 token 成本与关键约束保留情况。
- prerequisites:
  - J/J4. 会话与状态/Conversation state
  - K/K6. Agent 记忆/Memory injection / compaction
- core metrics:
  - token reduction
  - constraint retention
  - summary drift rate
- next:
  - J/J4. 会话与状态/Token budgeting
  - J/J4. 会话与状态/Prompt caching

#### Prompt caching

- pathKey: `J/J4. 会话与状态/Prompt caching`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J4-1hf74xi-1.json`
- status: draft
- definition: Prompt caching 利用前缀稳定、历史复用或服务端缓存，把重复上下文的构建和推理成本降下来，尤其适用于多轮和模板化场景。
- importance: 在会话持续时间长、系统提示和上下文前缀相对稳定时，缓存命中率会直接决定单位请求成本和首 token 延迟。
- minimum demo: 对一组多轮请求测试有无 prompt caching 的成本和延迟差异，并检查缓存失效条件是否合理。
- prerequisites:
  - J/J4. 会话与状态/Context compaction
  - J/J4. 会话与状态/Token budgeting
- core metrics:
  - cache hit rate
  - TTFT improvement
  - stale cache rate
- next:
  - J/J5. 流式与实时/Streaming text
  - J/J7. 工程可靠性/Observability hooks

#### Token budgeting

- pathKey: `J/J4. 会话与状态/Token budgeting`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J4-1hf74xi-1.json`
- status: draft
- definition: Token budgeting 是在每次请求前明确分配 system、history、retrieved context、tool results 和 output 的 token 预算，避免上下文无限膨胀。
- importance: 这是控制成本和质量的直接杠杆；没有预算，长会话最后往往变成“什么都塞一点，但什么都不够好”。
- minimum demo: 为一个固定应用设定上下文预算表，记录不同部分的实际 token 占比和裁剪策略对结果的影响。
- prerequisites:
  - J/J4. 会话与状态/Context compaction
  - J/J1. 模型接口层/Context assembly
- core metrics:
  - token allocation accuracy
  - cost per turn
  - truncation impact
- next:
  - J/J4. 会话与状态/Prompt caching
  - J/J5. 流式与实时

### J5. 流式与实时

- pathKey: `J/J5. 流式与实时`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-J.json`
- status: draft
- definition: 流式与实时关注应用如何把模型输出从“等整段结果回来”改造成持续、低延迟、可中断、可同步的交互过程。它涵盖文本流式输出、工具事件流、WebSocket / realtime 通道、语音交互和增量 UI 更新，核心目标是让用户感知到系统正在连续工作，而不是卡在一个黑盒请求里。
- importance: 很多 AI 应用的体验差异，并不来自模型答案本身，而来自交互链路是否实时、是否可打断、是否能在部分结果出现时立刻反馈。做好这一层，能显著提升等待体验、可控性和任务透明度；做不好，则会出现流式断裂、状态错乱、工具结果延迟和 UI 与后端不同步的问题。
- minimum demo: 实现一个最小流式助手：文本 token 逐步输出；工具调用过程能实时显示状态；前端支持增量更新和取消；后端记录流式开始、结束、断开和重连。验收标准不是“有流式输出”，而是中断、重试、工具事件和 UI 状态都能保持一致。
- hardware budget: 这一层主要增加的是连接管理、事件缓冲、音频流处理和前后端同步成本，而不是训练算力。真正需要预算的是长连接并发、客户端回放、重连策略和实时多模态链路的延迟控制。
- examples:
  - 聊天助手边生成边显示文本，而不是整段完成后一次性渲染。
  - 工具调用链路中实时展示“正在检索”“正在执行”“已拿到结果”等阶段状态。
  - 语音助手允许用户在播报过程中打断并立即切换话轮。
  - 文档助手在大任务过程中逐步刷新提取进度和部分结果，而不是只显示加载中。
- pitfalls:
  - 只有文本在流式，工具执行和状态变化却完全黑盒。
  - 前端一边增量渲染，后端一边重试重放，结果状态错乱。
  - 实时链路没有取消和断线恢复，用户一中断就必须从头再来。
  - 为了追求低延迟牺牲一致性，导致最终 UI 和真实执行结果不一致。
- prerequisites:
  - J/J4. 会话与状态
  - J/J1. 模型接口层
  - J/J7. 工程可靠性
- core metrics:
  - time to first token
  - stream interruption rate
  - tool event latency
  - cancel / resume success rate
  - UX consistency
- toolchain:
  - SSE / WebSocket / realtime transport
  - streaming event protocol
  - incremental renderer
  - audio streaming stack
  - trace and replay logs
- failure signs:
  - 首 token 很快，但最终结果和中间状态频繁不一致。
  - 工具调用完成了，前端却长时间停留在旧状态。
  - 断线重连后会话继续，但 UI 或音频流完全错位。
  - 语音打断和文本流取消经常把状态机打坏。
- next:
  - J/J5. 流式与实时/Streaming text
  - J/J5. 流式与实时/Streaming tool events
  - J/J5. 流式与实时/WebSocket / realtime
  - J/J5. 流式与实时/Voice interaction
  - J/J5. 流式与实时/Incremental UI updates
  - J/J9. 应用形态

#### Streaming text

- pathKey: `J/J5. 流式与实时/Streaming text`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J5-10w4rph-1.json`
- status: draft
- definition: Streaming text 是把模型生成的文本 token 或片段按增量方式持续发送给前端，而不是等整个回答完成后一次性返回。
- importance: 它是最直接的感知优化手段，能显著降低等待焦虑，并为取消、插入状态提示和增量 UI 打下基础。
- minimum demo: 对同一请求分别做整段返回和流式返回，记录首 token 延迟、用户感知等待和中断后的恢复行为。
- prerequisites:
  - J/J5. 流式与实时
  - J/J5. 流式与实时/Incremental UI updates
- core metrics:
  - time to first token
  - stream interruption rate
- next:
  - J/J5. 流式与实时/Streaming tool events
  - J/J5. 流式与实时/WebSocket / realtime

#### Streaming tool events

- pathKey: `J/J5. 流式与实时/Streaming tool events`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J5-10w4rph-1.json`
- status: draft
- definition: Streaming tool events 是把工具调用过程中的计划、开始、进度、完成和失败事件实时暴露给前端或上层系统，而不是只在最终结果里隐式体现。
- importance: 这能把 Agent 和工具链路从黑盒变成可观察流程，用户和开发者都能更早知道系统在做什么、卡在哪里。
- minimum demo: 让一个带工具调用的请求实时发送 `started / running / completed / failed` 事件，并检查 UI 状态是否同步。
- prerequisites:
  - J/J3. 工具调用/Tool execution
  - J/J5. 流式与实时/Streaming text
- core metrics:
  - event delivery latency
  - state sync accuracy
- next:
  - J/J5. 流式与实时/Incremental UI updates
  - J/J7. 工程可靠性/Observability hooks

#### WebSocket / realtime

- pathKey: `J/J5. 流式与实时/WebSocket / realtime`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J5-10w4rph-1.json`
- status: draft
- definition: WebSocket / realtime 指用双向长连接承载文本、音频、工具事件和控制信号，以支持低延迟、可打断和多事件并发的实时交互。
- importance: 当交互不再是简单请求-响应，而是持续会话、语音和事件流时，realtime 通道往往比单向文本流更合适。
- minimum demo: 建立一个支持文本流、取消和工具事件回传的 WebSocket 通道，测试断线重连和会话恢复。
- prerequisites:
  - J/J5. 流式与实时/Streaming text
  - J/J4. 会话与状态/Server-managed state
- core metrics:
  - round-trip latency
  - reconnect success rate
  - state continuity
- next:
  - J/J5. 流式与实时/Voice interaction
  - J/J7. 工程可靠性/Timeout

#### Voice interaction

- pathKey: `J/J5. 流式与实时/Voice interaction`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J5-10w4rph-1.json`
- status: draft
- definition: Voice interaction 不是简单的 ASR + TTS 拼接，而是把语音输入、实时转写、打断、回声控制和响应节奏整合成一条低延迟交互链。
- importance: 它直接决定语音产品是否像“对话”而不是“点按录音再等结果”，也是实时 agent 体验的门槛能力。
- minimum demo: 做一条最小语音回路：麦克风输入、实时转写、模型响应和语音播报，并支持用户在播报中途打断。
- hardware budget: 本地调试主要依赖稳定麦克风、耳机和浏览器/客户端音频栈；核心瓶颈通常是实时链路延迟而不是显存。
- examples:
  - 用户说到一半停顿，系统能先开始低延迟反馈而不必等整段结束。
  - 播报中途用户插话后，系统能正确取消旧回复并切换到新轮次。
  - 语音和文本界面共享同一会话状态，而不是各自维护一份。
- pitfalls:
  - 把语音当成普通文本输入输出，忽略打断、节奏和回声控制。
  - 转写、推理和播报各自延迟都不高，但串起来后整体体验仍然卡顿。
  - 语音链路和文本链路状态不同步，用户一打断就错位。
- prerequisites:
  - J/J5. 流式与实时/WebSocket / realtime
  - J/J6. 多模态应用/Audio input/output
  - J/J5. 流式与实时/Incremental UI updates
- core metrics:
  - speech-to-first-token latency
  - barge-in success rate
  - transcription stability
  - audio glitch rate
- toolchain:
  - realtime API / websocket runtime
  - microphone capture
  - streaming ASR/TTS
  - audio playback controls
- failure signs:
  - 用户一打断就把状态弄乱，导致上下文错位
  - 延迟看起来不高，但语音播报节奏和 UI 反馈明显不同步
- next:
  - J/J9. 应用形态/Voice assistant
  - E/E3. 音频 / 语音
  - M/M2. 应用级评测

#### Incremental UI updates

- pathKey: `J/J5. 流式与实时/Incremental UI updates`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J5-10w4rph-1.json`
- status: draft
- definition: Incremental UI updates 是把流式文本、工具事件、部分结构化结果和错误状态逐步映射到界面，而不是每次都全量重绘或只在结束时更新。
- importance: 前端是否能正确消费流式事件，决定了流式体验是顺滑、可信，还是闪烁、跳变、状态错乱。
- minimum demo: 让前端分别接收文本片段、工具状态和最终结果，检查增量渲染、取消和失败回退是否一致。
- prerequisites:
  - J/J5. 流式与实时/Streaming text
  - J/J5. 流式与实时/Streaming tool events
- core metrics:
  - UI consistency
  - render latency
  - cancel correctness
- next:
  - J/J5. 流式与实时/Voice interaction
  - M/M2. 应用级评测/UX consistency

### J6. 多模态应用

- pathKey: `J/J6. 多模态应用`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-J.json`
- status: draft
- definition: 多模态应用关注的是产品层如何接收、组织和消费图像、音频、文件等非纯文本输入，以及如何把这些模态与文本、工具和状态管理组合成统一交互链路。它讨论的不是模型底层是否具备视觉或语音能力，而是应用接口、上传流程、消息结构、回显方式和失败恢复如何围绕多模态重新设计。
- importance: 一旦输入不再只是文本，应用层复杂度会明显上升：文件上传、格式校验、转码、预处理、权限、大小限制、异步处理和前端预览都会进入主路径。如果这层设计不到位，模型能力再强，产品也会卡在“用户不会传”“系统收不到”“结果无法展示”这些工程问题上。
- minimum demo: 实现一个最小多模态助手：支持图像上传、音频输入和文件输入；后端统一把这些输入转成明确的模型请求结构；前端能展示处理状态和部分结果；错误能区分为格式不支持、内容不可解析和模型推理失败。验收标准是输入路径稳定、状态透明、输出可回显，而不是只要模型偶尔答对就算完成。
- hardware budget: 这一层主要增加的是文件存储、转码、上传带宽、预处理和多模态推理费用，而不是训练算力。真正需要预算的是媒体大小限制、异步处理队列、流式音频链路和多模态请求的延迟放大。
- examples:
  - 用户上传截图后，系统做 OCR / 版面理解并返回结构化字段。
  - 语音助手在说话同时持续转写，并把识别结果和模型回应同步展示。
  - 文档助手接收 PDF 或表格文件，先抽取内容，再让模型生成摘要或工单。
  - 同一个界面中混合图像、文本和工具结果，逐步拼出最终任务答案。
- pitfalls:
  - 把多模态输入当成纯文本附件，忽略格式、大小和预处理差异。
  - 前端上传成功但后端没有稳定的媒体生命周期管理，导致引用失效或重复上传。
  - 音频、图片和文件各走一套消息协议，后续状态和日志完全无法统一。
  - 只关注模型能否看懂内容，不关注用户如何预览、纠错和重传。
- prerequisites:
  - J/J1. 模型接口层
  - J/J5. 流式与实时
  - E/E5. 多模态
- core metrics:
  - upload success rate
  - media processing latency
  - multimodal task success rate
  - preview / replay correctness
  - cost per multimodal request
- toolchain:
  - file upload pipeline
  - media preprocessing / transcoding
  - multimodal model APIs
  - preview and annotation UI
  - asset storage and lifecycle management
- failure signs:
  - 用户上传成功但模型端经常拿不到可用内容。
  - 音频、图像和文件请求在日志里难以统一追踪。
  - 多模态输入一大就明显超时或失败，但系统没有分片和降级路径。
  - 同一请求的预览内容、模型看到的内容和最终结果彼此不一致。
- next:
  - J/J6. 多模态应用/Image input
  - J/J6. 多模态应用/Audio input/output
  - J/J6. 多模态应用/File input
  - J/J6. 多模态应用/Mixed-modal interfaces
  - J/J9. 应用形态

#### Image input

- pathKey: `J/J6. 多模态应用/Image input`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J6-1u8d26o-1.json`
- status: draft
- definition: Image input 指应用如何接收截图、照片、图表、UI 截图和文档图片，并把它们稳定转成模型可消费的视觉输入。
- importance: 很多多模态体验从上传图片开始就失败了：尺寸、格式、方向、压缩和预览链路没处理好，后面的视觉能力根本发挥不出来。
- minimum demo: 实现一条图片上传链路，支持预览、压缩和错误提示，并验证模型能稳定消费同一张图片。
- prerequisites:
  - E/E2. 视觉（CV）/OCR / 文档理解
  - E/E5. 多模态/视觉语言模型（VLM）
- core metrics:
  - image upload success rate
  - processing latency
  - visual task success rate
- next:
  - J/J6. 多模态应用/Mixed-modal interfaces
  - J/J9. 应用形态/Document assistant

#### Audio input/output

- pathKey: `J/J6. 多模态应用/Audio input/output`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J6-1u8d26o-1.json`
- status: draft
- definition: Audio input/output 关注应用如何接收语音、播放语音、处理音频文件和控制音频状态，而不仅仅是模型是否支持 ASR 或 TTS。
- importance: 音频链路天然更实时、更易受设备和网络影响，应用层必须处理麦克风权限、转码、播放控制和打断恢复。
- minimum demo: 实现一条录音上传和语音播报链路，验证麦克风权限、转写、播报和中断都能稳定工作。
- prerequisites:
  - E/E3. 音频 / 语音/自动语音识别（ASR）
  - E/E3. 音频 / 语音/文本转语音（TTS）
  - J/J5. 流式与实时/Voice interaction
- core metrics:
  - speech round-trip latency
  - audio glitch rate
  - barge-in success rate
- next:
  - J/J6. 多模态应用/Mixed-modal interfaces
  - J/J9. 应用形态/Voice assistant

#### File input

- pathKey: `J/J6. 多模态应用/File input`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J6-1u8d26o-1.json`
- status: draft
- definition: File input 指应用如何接收 PDF、表格、文档、代码包等文件，并把内容抽取、权限、生命周期和模型调用串成稳定链路。
- importance: 文件类输入往往是业务价值最高的一类多模态入口，但它同时引入文件解析、存储、权限和异步处理复杂度。
- minimum demo: 实现文件上传、摘要提取和失败提示流程，验证大文件、坏文件和权限不足时的处理路径。
- prerequisites:
  - I/I2. 知识库构建/Parser types/PDF / Office
  - J/J6. 多模态应用/Image input
- core metrics:
  - file parse success rate
  - ingestion latency
  - file-linked task success rate
- next:
  - J/J6. 多模态应用/Mixed-modal interfaces
  - J/J9. 应用形态/Document assistant

#### Mixed-modal interfaces

- pathKey: `J/J6. 多模态应用/Mixed-modal interfaces`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J6-1u8d26o-1.json`
- status: draft
- definition: Mixed-modal interfaces 是把图像、音频、文件和文本统一组织在同一个交互界面和消息协议里，让用户能围绕同一任务连续操作。
- importance: 真正的多模态应用很少只处理单一模态；难点在于界面、消息结构和状态管理要能承载多种输入同时存在。
- minimum demo: 实现一个既能上传图片又能追问文本、还能回显工具结果的界面，检查不同模态是否共享同一会话状态。
- prerequisites:
  - J/J6. 多模态应用/Image input
  - J/J6. 多模态应用/Audio input/output
  - J/J6. 多模态应用/File input
- core metrics:
  - cross-modal continuity
  - UI consistency
  - session coherence
- next:
  - J/J9. 应用形态/Chat app
  - J/J9. 应用形态/Workflow assistant

### J7. 工程可靠性

- pathKey: `J/J7. 工程可靠性`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-J.json`
- status: draft
- definition: 工程可靠性关注的不是模型本身有多强，而是应用在超时、抖动、重试、部分失败和依赖异常下是否还能稳定服务。它涵盖重试、超时、幂等、降级、熔断、错误分类和可观测性这些常规后端能力，但在 AI 应用里会因为长链路、工具调用和不确定输出而更加复杂。
- importance: 很多 AI 应用线上问题并不是“模型答错了”，而是请求偶发超时、工具服务抖动、流式断开后状态错乱、重试导致重复副作用，或者失败无法被正确分类和恢复。没有这一层，应用越复杂、工具越多、流式链路越长，整体可用性就越差。
- minimum demo: 为一个带工具调用和流式输出的最小助手加上超时、重试、错误分类和 fallback；人为制造模型超时、工具失败和网络断连，观察系统是否能恢复、降级并留下完整 trace。验收标准是失败可归类、可恢复、可观测，而不是“偶尔成功”。
- hardware budget: 这一层主要消耗在超时控制、重试放大、日志、监控和缓存，而不是训练算力。真正要预算的是失败路径的放大成本，例如重复调用、并发堆积和长连接断线恢复。
- examples:
  - 模型超时后自动降级到更小模型或更短上下文。
  - 工具调用失败时先重试只读操作，再回退到人工确认或部分结果。
  - 流式输出中途断开后，前端和后端都能识别为可恢复错误而不是重复执行。
  - 对副作用请求使用幂等键，避免重试造成重复创建工单或重复扣费。
- pitfalls:
  - 把所有失败都统一重试，结果把系统推向雪崩。
  - 没有区分可重试错误和不可重试错误，导致恢复策略混乱。
  - 只做主路径埋点，失败路径完全不可见。
  - 幂等性没设计好，重试一多就出现重复副作用。
- prerequisites:
  - J/J3. 工具调用
  - J/J5. 流式与实时
  - M/M2. 应用级评测
- core metrics:
  - success rate
  - timeout rate
  - recovery success rate
  - fallback rate
  - duplicate side-effect rate
- toolchain:
  - retry / timeout middleware
  - circuit breaker
  - idempotency store
  - trace / metrics / logs
- failure signs:
  - 同一类错误有时重试、有时报错，没有稳定策略。
  - 工具或模型服务一抖动，整个应用延迟和失败率立刻连锁上升。
  - 事故后无法定位是模型、工具、网络还是前端流式链路出了问题。
  - 用户侧频繁出现重复执行、空白状态或半完成结果。
- next:
  - J/J7. 工程可靠性/Retry
  - J/J7. 工程可靠性/Timeout
  - J/J7. 工程可靠性/Idempotency
  - J/J7. 工程可靠性/Fallback
  - J/J7. 工程可靠性/Circuit breaking
  - J/J7. 工程可靠性/Error classes
  - J/J7. 工程可靠性/Observability hooks
  - J/J8. 安全与权限

#### Retry

- pathKey: `J/J7. 工程可靠性/Retry`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J7-1fvflk5-1.json`
- status: draft
- definition: Retry 是在请求、工具或下游依赖临时失败时重新尝试，以提高成功率，但前提是错误类型和副作用边界适合重试。
- importance: AI 应用的下游经常包含模型 API、搜索、数据库和文件系统，短时抖动很常见；合理重试能显著提升可用性，不合理重试会把系统推向放大故障。
- minimum demo: 对可重试和不可重试错误分别做故障注入，比较固定重试和分类重试策略的成功率与放大成本。
- prerequisites:
  - J/J3. 工具调用/Tool retries / fallback
  - J/J7. 工程可靠性/Error classes
- core metrics:
  - retry success rate
  - retry amplification
  - duplicate side-effect rate
- next:
  - J/J7. 工程可靠性/Timeout
  - J/J7. 工程可靠性/Idempotency

#### Timeout

- pathKey: `J/J7. 工程可靠性/Timeout`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J7-1fvflk5-1.json`
- status: draft
- definition: Timeout 是给模型调用、工具执行和流式连接设定明确的时间边界，避免请求无限挂起并拖垮整体资源。
- importance: AI 链路常比传统 API 更长、更不确定，没有超时边界时，一个慢请求就可能占住连接、会话状态和前端等待窗口。
- minimum demo: 为模型请求和工具执行分别设置超时，观察超时后是否能正确取消、回收资源并触发恢复路径。
- prerequisites:
  - J/J5. 流式与实时/WebSocket / realtime
  - J/J7. 工程可靠性/Fallback
- core metrics:
  - timeout rate
  - resource cleanup success
  - user-visible timeout rate
- next:
  - J/J7. 工程可靠性/Retry
  - J/J7. 工程可靠性/Circuit breaking

#### Idempotency

- pathKey: `J/J7. 工程可靠性/Idempotency`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J7-1fvflk5-1.json`
- status: draft
- definition: Idempotency 确保同一个副作用请求即使被重试、回放或断线重连，也不会被执行多次或产生不一致结果。
- importance: 一旦 AI 应用能创建工单、发消息、写数据库或触发外部动作，幂等性就是重试和恢复能否安全落地的前提。
- minimum demo: 为一个带副作用工具增加幂等键，模拟网络抖动和重复提交，确认系统只执行一次。
- prerequisites:
  - J/J3. 工具调用/Tool execution
  - J/J7. 工程可靠性/Retry
- core metrics:
  - duplicate prevention rate
  - idempotency collision rate
- next:
  - J/J8. 安全与权限/Sensitive action approval
  - J/J7. 工程可靠性/Fallback

#### Fallback

- pathKey: `J/J7. 工程可靠性/Fallback`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J7-1fvflk5-1.json`
- status: draft
- definition: Fallback 是主路径失败时的降级方案，例如换小模型、缩短上下文、跳过某个工具、返回部分结果或升级到人工处理。
- importance: 没有 fallback，任何一个依赖故障都会直接变成用户可见失败；有了 fallback，系统至少能退到较低能力但仍可交付的状态。
- minimum demo: 让模型、工具和流式链路分别失败一次，验证降级路径是否都能触发，并比较恢复后的任务完成率。
- prerequisites:
  - J/J3. 工具调用/Tool retries / fallback
  - J/J7. 工程可靠性/Error classes
- core metrics:
  - fallback rate
  - recovery success rate
  - degraded task success
- next:
  - J/J7. 工程可靠性/Circuit breaking
  - M/M2. 应用级评测/Failure recovery

#### Circuit breaking

- pathKey: `J/J7. 工程可靠性/Circuit breaking`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J7-1fvflk5-1.json`
- status: draft
- definition: Circuit breaking 是在下游依赖持续异常时主动熔断一段时间，避免无限继续调用并把故障扩大到整个系统。
- importance: AI 应用链路长、依赖多，一旦模型服务或工具服务抖动，没有熔断就很容易把线程、连接和重试队列一起拖垮。
- minimum demo: 人为让某个工具持续失败，观察熔断前后的请求延迟、错误率和资源占用变化。
- prerequisites:
  - J/J7. 工程可靠性/Timeout
  - J/J7. 工程可靠性/Fallback
- core metrics:
  - trip frequency
  - recovery latency
  - error containment
- next:
  - J/J7. 工程可靠性/Observability hooks
  - J/J8. 安全与权限/Isolation boundaries

#### Error classes

- pathKey: `J/J7. 工程可靠性/Error classes`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J7-1fvflk5-1.json`
- status: draft
- definition: Error classes 是把模型、工具、网络、解析、权限和用户输入等失败场景分类，确保不同错误能走不同恢复和观测路径。
- importance: 如果错误分类不清，重试、fallback、告警和人工介入都会混成一团，最后系统只剩‘请求失败’一个模糊状态。
- minimum demo: 给同一条链路里的模型超时、JSON 解析失败、权限拒绝和工具 500 分别打上错误类，检查恢复策略是否分流正确。
- prerequisites:
  - J/J2. 结构化输出/Error recovery
  - J/J3. 工具调用/Tool execution
- core metrics:
  - classification coverage
  - misrouted recovery rate
- next:
  - J/J7. 工程可靠性/Retry
  - J/J7. 工程可靠性/Observability hooks

#### Observability hooks

- pathKey: `J/J7. 工程可靠性/Observability hooks`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J7-1fvflk5-1.json`
- status: draft
- definition: Observability hooks 是为请求、会话、工具、流式事件和失败路径加上统一 trace、日志和指标钩子，让系统能被回放、定位和评估。
- importance: 没有可观测性，AI 应用的很多问题都只能靠人工复现猜测；一旦接入多轮状态、工具和流式链路，这会迅速变得不可维护。
- minimum demo: 为一次请求记录模型输入摘要、工具事件、错误类型、token 成本和最终结果，并验证能按 request ID 回放。
- prerequisites:
  - J/J5. 流式与实时/Streaming tool events
  - J/J7. 工程可靠性/Error classes
- core metrics:
  - trace completeness
  - debug turnaround time
  - event loss rate
- next:
  - M/M2. 应用级评测/Failure recovery
  - M/M2. 应用级评测/UX consistency

### J8. 安全与权限

- pathKey: `J/J8. 安全与权限`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-J.json`
- status: draft
- definition: 安全与权限关注 AI 应用在真实环境中如何做身份识别、凭据管理、权限范围控制、敏感动作审批和运行隔离。它不是给模型“补一句不要乱来”，而是把安全边界真正落到身份、令牌、工具权限、会话隔离和审计流程上。
- importance: AI 应用一旦接入私有知识、外部工具或副作用操作，安全与权限就不是附加项，而是主链路。如果这层设计不清，系统就会从“偶尔答错”升级成“越权读取、误执行或泄露敏感信息”的事故源。
- minimum demo: 做一个最小受控助手：要求登录后才能使用；不同用户有不同工具 scope；敏感工具调用必须审批；密钥只在服务端可见；所有调用都能被审计。验收标准不是“能不能跑通”，而是越权时能被稳定拦截、敏感操作能被暂停、审计日志能追到人和动作。
- hardware budget: 这一层几乎不增加训练算力，主要成本来自鉴权、密钥管理、审批、隔离和审计基础设施。真正要预算的是身份系统接入、日志保留和高风险动作的人工 review 开销。
- examples:
  - 不同租户只能访问各自知识库和工具范围。
  - 创建工单、发送邮件、执行 shell 等副作用动作前必须弹出审批。
  - 模型运行时拿到的是短期工具令牌，而不是长期主密钥。
  - 浏览器、工作区和文件系统操作在隔离边界内执行并留痕。
- pitfalls:
  - 把权限控制只做在 UI 层，后端工具层仍然全权限开放。
  - 把长期密钥直接暴露给模型或客户端。
  - 敏感动作和只读动作走同一条无审批路径。
  - 日志只有“调用失败”，没有记录谁发起、调了什么、作用到哪里。
- prerequisites:
  - J/J3. 工具调用
  - J/J7. 工程可靠性
  - M/M5. 安全控制
  - M/M7. 隐私与合规
- core metrics:
  - unauthorized action rate
  - approval correctness
  - secret exposure incidents
  - audit coverage
  - isolation breach rate
- toolchain:
  - auth / identity provider
  - secret manager
  - approval workflow
  - sandbox / tenancy isolation
  - audit log pipeline
- failure signs:
  - 模型能看到或间接推断出不该看到的凭据和内部状态。
  - 副作用动作没有清晰审批痕迹或执行责任人。
  - 不同用户或会话之间出现上下文、文件或工具结果串扰。
  - 越权失败只能从业务事故里看出来，系统内没有明确拦截记录。
- next:
  - J/J8. 安全与权限/Auth
  - J/J8. 安全与权限/Secret management
  - J/J8. 安全与权限/Permission scopes
  - J/J8. 安全与权限/Sensitive action approval
  - J/J8. 安全与权限/Isolation boundaries
  - J/J9. 应用形态

#### Auth

- pathKey: `J/J8. 安全与权限/Auth`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J8-18pvnpw-1.json`
- status: draft
- definition: Auth 负责识别当前请求是谁发起的、属于哪个租户和会话，并把身份信息稳定传递给模型调用、工具执行和审计链路。
- importance: 没有身份，就谈不上权限、审批和审计；AI 应用里任何后续安全控制都建立在 auth 可靠的前提上。
- minimum demo: 让两个不同用户访问同一应用，验证会话、知识访问和工具调用都能按身份区分。
- prerequisites:
  - J/J8. 安全与权限
  - J/J8. 安全与权限/Permission scopes
- core metrics:
  - auth success rate
  - identity propagation correctness
- next:
  - J/J8. 安全与权限/Permission scopes
  - J/J8. 安全与权限/Isolation boundaries

#### Secret management

- pathKey: `J/J8. 安全与权限/Secret management`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J8-18pvnpw-1.json`
- status: draft
- definition: Secret management 关注模型、工具和后端依赖使用的密钥、令牌和凭据如何安全存储、注入、轮换和回收，而不是把这些敏感信息散落在代码或上下文里。
- importance: 一旦应用接工具和外部系统，凭据泄露就会直接变成横向事故；而 AI 应用又特别容易因为调试、日志和 prompt 拼接把秘密带出来。
- minimum demo: 让工具调用通过服务端短期令牌完成，并验证日志、客户端和模型上下文都看不到长期密钥。
- prerequisites:
  - J/J8. 安全与权限/Auth
  - J/J8. 安全与权限/Isolation boundaries
- core metrics:
  - secret exposure incidents
  - rotation success rate
- next:
  - J/J8. 安全与权限/Sensitive action approval
  - M/M7. 隐私与合规/Audit logs

#### Permission scopes

- pathKey: `J/J8. 安全与权限/Permission scopes`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J8-18pvnpw-1.json`
- status: draft
- definition: Permission scopes 把用户和工具权限细分到可执行操作、资源范围和租户边界，而不是简单用‘能不能访问应用’来粗暴控制。
- importance: AI 应用最常见的安全错误不是完全无权限，而是 scope 太大：本来只该读某个项目，却能读整个系统；本来只该查，不该写，却直接获得副作用权限。
- minimum demo: 为同一工具定义 read-only 和 write 两种 scope，验证不同用户只能触发各自允许的动作。
- prerequisites:
  - J/J8. 安全与权限/Auth
  - J/J3. 工具调用/Tool routing
- core metrics:
  - scope enforcement rate
  - unauthorized action rate
- next:
  - J/J8. 安全与权限/Sensitive action approval
  - M/M5. 安全控制/Least privilege

#### Sensitive action approval

- pathKey: `J/J8. 安全与权限/Sensitive action approval`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J8-18pvnpw-1.json`
- status: draft
- definition: Sensitive action approval 是在执行发消息、改数据、跑命令、付费或其他高风险动作前，把模型建议转换成人可审阅、可批准、可拒绝的步骤。
- importance: 它是把模型能力接入真实副作用世界时最关键的保险丝之一，尤其适用于工具自动化和 agent 场景。
- minimum demo: 为一个带副作用工具加入审批节点，验证模型能先生成草案，再在用户批准后执行。
- prerequisites:
  - J/J8. 安全与权限/Permission scopes
  - K/K8. 人在回路/Approval before side effects
- core metrics:
  - approval correctness
  - blocked risky action rate
- next:
  - J/J7. 工程可靠性/Idempotency
  - J/J9. 应用形态/Workflow assistant

#### Isolation boundaries

- pathKey: `J/J8. 安全与权限/Isolation boundaries`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J8-18pvnpw-1.json`
- status: draft
- definition: Isolation boundaries 关注会话、租户、文件、工具执行环境和工作区之间如何隔离，防止状态串扰、越权访问和副作用扩散。
- importance: AI 应用常常同时持有上下文、文件、缓存和工具句柄，没有隔离边界时，一个错误会很快跨用户、跨任务扩散。
- minimum demo: 准备两个不同租户或工作区，验证它们的文件、工具调用和缓存互不可见，且日志能分域追踪。
- prerequisites:
  - J/J8. 安全与权限/Auth
  - K/K7. 工具与外部连接/Sandbox workspace
- core metrics:
  - cross-tenant leak rate
  - sandbox escape rate
- next:
  - M/M5. 安全控制/Sandboxing
  - M/M7. 隐私与合规/Access control

### J9. 应用形态

- pathKey: `J/J9. 应用形态`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-J.json`
- status: draft
- definition: 应用形态关注的是：相同的模型与工具能力，在不同产品形态中应该如何组合成可用界面、交互节奏、权限路径和结果交付方式。`Chat app`、`Copilot`、`Search / QA`、`Document assistant`、`Coding assistant`、`Workflow assistant`、`Voice assistant` 不是不同模型，而是不同产品编排方式。
- importance: 很多团队把“AI 应用”说得很泛，但真实落地时，不同形态的成功标准完全不同。Search / QA 更看重引用和可靠性，Copilot 更强调嵌入现有工作流，Workflow assistant 更看重副作用控制，Voice assistant 则首先受限于实时链路和 UX 一致性。
- minimum demo: 围绕同一套模型能力，分别做一个最小 chat app、search / QA 和 workflow assistant 原型，比较它们在输入组织、状态管理、结果展示和安全边界上的差异。这样能快速识别“同一能力在不同产品形态下该怎么包装”。
- hardware budget: 这一层不主要受训练硬件限制，更受界面形态、接入系统、交互时延和观测成本约束。真正的预算差异往往来自文件处理、工具链深度、长连接和人工 review，而不是模型尺寸本身。
- examples:
  - 聊天应用强调连续对话和低门槛输入。
  - Copilot 强调在 IDE、表格或编辑器中与现有工作流并行协作。
  - Search / QA 强调证据和出处，而不是开放式生成。
  - Workflow assistant 强调结构化输入、审批和副作用控制。
  - Voice assistant 强调低延迟打断、音频回放和多端同步。
- pitfalls:
  - 把一个 demo UI 套到所有场景上，导致交互方式和成功标准错位。
  - 把 Coding assistant 或 Workflow assistant 当成普通聊天页，忽略工具、审批和 trace。
  - Search / QA 没有引用与证据展示，最后退化成纯聊天。
  - Voice assistant 只复用文本聊天栈，忽略实时状态和音频链路。
- prerequisites:
  - J/J5. 流式与实时
  - J/J6. 多模态应用
  - J/J8. 安全与权限
- core metrics:
  - task completion rate
  - UX consistency
  - human override rate
  - time to useful output
  - form-factor fit
- toolchain:
  - chat UI
  - embedded copilots
  - workflow forms
  - voice / realtime clients
  - trace and approval surfaces
- failure signs:
  - 同一能力在不同页面里呈现方式完全不一致。
  - 产品形态看起来多样，但都绕回同一种聊天交互。
  - 用户能看到模型答案，却无法在对应场景中真正完成任务。
  - 高风险形态没有额外审批和恢复设计。
- next:
  - J/J9. 应用形态/Chat app
  - J/J9. 应用形态/Copilot
  - J/J9. 应用形态/Search / QA
  - J/J9. 应用形态/Document assistant
  - J/J9. 应用形态/Coding assistant
  - J/J9. 应用形态/Workflow assistant
  - J/J9. 应用形态/Voice assistant
  - K/K1. Agent 的最小构成

#### Chat app

- pathKey: `J/J9. 应用形态/Chat app`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J9-1854q0c-1.json`
- status: draft
- definition: Chat app 是最直接的 AI 产品形态：以对话为主入口，强调连续追问、低门槛输入和即时反馈。
- importance: 它通常是能力验证和用户教育的起点，但也最容易把所有需求都硬塞进聊天框里，导致场景边界模糊。
- minimum demo: 做一个支持多轮对话、流式输出和基础工具调用的聊天页，验证连续追问和状态恢复。
- prerequisites:
  - J/J5. 流式与实时/Streaming text
  - J/J4. 会话与状态/Conversation state
- core metrics:
  - time to useful response
  - cross-turn consistency
- next:
  - J/J9. 应用形态/Copilot
  - J/J9. 应用形态/Voice assistant

#### Copilot

- pathKey: `J/J9. 应用形态/Copilot`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J9-1854q0c-1.json`
- status: draft
- definition: Copilot 是嵌入现有工作界面中的助手形态，重点不是独立聊天，而是在编辑器、表格、文档或业务系统里即时协作。
- importance: 它通常比独立聊天更贴近真实任务流，因为用户不必切场景，但也要求更高的上下文感知和安全控制。
- minimum demo: 把模型能力嵌入一个已有界面，支持读取当前上下文、给建议并可一键接受或拒绝。
- prerequisites:
  - J/J1. 模型接口层/Context assembly
  - J/J6. 多模态应用/Mixed-modal interfaces
- core metrics:
  - inline acceptance rate
  - workflow interruption cost
- next:
  - J/J9. 应用形态/Coding assistant
  - J/J9. 应用形态/Document assistant

#### Search / QA

- pathKey: `J/J9. 应用形态/Search / QA`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J9-1854q0c-1.json`
- status: draft
- definition: Search / QA 形态强调基于外部知识给出可追溯答案，重点是检索、引用、证据展示和可信度，而不是自由生成。
- importance: 这是企业知识问答和资料助手最常见的落地方式，成功标准通常是正确命中和证据透明，而不是对话感。
- minimum demo: 做一个带引用的问答页，要求问题、答案和证据片段同时展示，并可跳回原文。
- prerequisites:
  - I/I3. RAG 管线
  - I/I6. 关键质量点/引用可信度
- core metrics:
  - answer correctness
  - citation trustworthiness
- next:
  - J/J9. 应用形态/Document assistant
  - J/J9. 应用形态/Workflow assistant

#### Document assistant

- pathKey: `J/J9. 应用形态/Document assistant`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J9-1854q0c-1.json`
- status: draft
- definition: Document assistant 围绕文档上传、解析、摘要、抽取、比对和问答等任务组织交互，通常需要同时处理文件输入、结构化输出和引用。
- importance: 这类形态业务价值高，但对文件生命周期、解析质量和多模态预览要求也更高，不适合只用纯聊天视图承载。
- minimum demo: 实现一个文档助手，支持上传文件、显示解析状态、抽取结构化字段并给出可跳转出处。
- prerequisites:
  - J/J6. 多模态应用/File input
  - I/I2. 知识库构建/Parser types/PDF / Office
- core metrics:
  - file task success rate
  - extraction precision
  - citation usability
- next:
  - J/J9. 应用形态/Search / QA
  - J/J9. 应用形态/Copilot

#### Coding assistant

- pathKey: `J/J9. 应用形态/Coding assistant`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J9-1854q0c-1.json`
- status: draft
- definition: Coding assistant 的关键不只是“能写代码”，而是能在文件系统、命令执行、评测回路和人工审批之间稳定工作。
- importance: 这是当前最容易验证 agent 能力上限的应用形态之一，因为任务、工具、产物和验收标准都相对清晰。
- minimum demo: 让 assistant 在一个受控仓库里完成“读文件 → 改代码 → 跑验证 → 输出结果”的闭环，并记录完整 trace。
- hardware budget: 开发机即可启动原型；更关键的是稳定的工作区隔离、测试环境和产物展示能力。
- examples:
  - 读取仓库、修改代码、运行测试，再把 diff 和验证结果展示给用户。
  - 先生成修复计划，再进入受控工作区执行，并在危险操作前暂停审批。
  - 把上下文限定在当前文件、相关符号和最近报错，而不是整个仓库全量注入。
- pitfalls:
  - 只看最终 patch 是否通过，而不看 trace、tool usage 和恢复能力，会误判系统成熟度。
  - 没有工作区隔离、审批边界和失败回滚，coding assistant 很快就会从效率工具变成风险源。
  - 把 IDE Copilot 和全自动 coding agent 混成同一种交互形态，导致权限和期望错位。
- prerequisites:
  - J/J3. 工具调用
  - K/K1. Agent 的最小构成
  - K/K7. 工具与外部连接/Sandbox workspace
- core metrics:
  - task completion rate
  - patch acceptance rate
  - tool success rate
  - human override rate
- toolchain:
  - workspace sandbox
  - shell / test runner
  - diff viewer
  - trace store
- failure signs:
  - 能提出方案，但改完代码后没有稳定验证结果
  - 审批回来后丢失工作区状态或覆盖用户现有改动
- next:
  - K/K7. 工具与外部连接/Sandbox workspace
  - M/M3. Agent 级评测/Trace schema
  - M/M3. Agent 级评测/Grader rubric

#### Workflow assistant

- pathKey: `J/J9. 应用形态/Workflow assistant`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J9-1854q0c-1.json`
- status: draft
- definition: Workflow assistant 面向多步骤业务流程，强调结构化输入、状态推进、审批节点和副作用执行，而不是开放式对话本身。
- importance: 一旦 AI 开始影响真实业务系统，工作流形态往往比聊天形态更贴近落地，因为责任边界、状态机和审批链都能被显式表达。
- minimum demo: 实现一个带表单、审批和执行结果回填的 workflow assistant，验证任务在多步状态之间稳定推进。
- prerequisites:
  - J/J3. 工具调用
  - J/J8. 安全与权限/Sensitive action approval
- core metrics:
  - workflow completion rate
  - approval correctness
  - failure recovery
- next:
  - J/J9. 应用形态/Search / QA
  - K/K1. Agent 的最小构成

#### Voice assistant

- pathKey: `J/J9. 应用形态/Voice assistant`
- node type: `concept-group`
- detail source: `data/details/leaves-J-J9-1854q0c-1.json`
- status: draft
- definition: Voice assistant 以语音为主入口，强调低延迟打断、回声控制、音频状态同步和听说一体化，而不是简单把聊天文本读出来。
- importance: 它对实时链路和 UX 一致性的要求最高，能直接暴露出系统是否真正支持实时交互，而不是只会流式文本。
- minimum demo: 构建一个支持实时转写、语音播报和中途打断的最小语音助手，并检查文本和音频状态是否同步。
- prerequisites:
  - J/J5. 流式与实时/Voice interaction
  - J/J6. 多模态应用/Audio input/output
- core metrics:
  - speech round-trip latency
  - barge-in success rate
  - UX consistency
- next:
  - M/M2. 应用级评测/UX consistency
  - J/J9. 应用形态/Chat app

## K. Agent 系统

- pathKey: `K`
- node type: `domain`
- stage: 04 应用与 Agent
- graph summary: OpenAI 把 agent 的核心原语定义为 models、tools、state/memory、orchestration；LangGraph 区分了固定路径的 workflow 与动态路径的 agent；MCP 则把外部数据/工具/工作流连接标准化为 resources / prompts / tools。
- relation notes:
  - Agent = LLM 核心机制 层模型 + AI 应用工程 层应用工程 + 检索、记忆与外部知识 层知识 + 运行时与基础设施 层运行时 + 评测、安全与治理 层控制。
  - Workflow ≠ Agent
  - MCP ≠ Agent
  - Multi-agent ≠ 更强模型
  - Agent 系统 与 经典 AI 层经典 AI 强连接：规划、搜索、决策、图式编排在这里重新出现。
- detail source: `data/details/domain-K.json`
- status: complete
- definition: Agent 系统是把模型放进可持续执行的闭环里：接收目标后，不只生成一次性文本，而是结合指令、工具、状态/记忆、编排与控制机制，分步观察环境、做局部决策、调用外部能力、在必要时写回外部世界，并在过程中保留可追踪的执行记录。与固定 workflow 的区别不在于是否调用工具，而在于系统能否基于上下文动态决定下一步、工具选择、是否交接、是否重试以及何时请求人工介入。
- importance: 这是把 LLM 从“回答器”变成“任务执行器”的关键层。很多真实任务都要求检索、推理、调用 API、运行代码、处理文件、跨步骤记忆与副作用控制；单轮生成往往只能给建议，Agent 系统才能把这些动作编成可运行流程。同时，Agent 也会放大成本、时延、错误传播和安全风险，因此这一域关注的不只是能力上限，还包括边界、观测、回放、审批和恢复能力。
- minimum demo: 做一个最小可验证的 agent 闭环：给模型 2 到 3 个工具（例如检索、计算、文件读写），让它围绕单个任务执行“读目标 → 生成下一步 → 调工具 → 读结果 → 决定继续/结束”的循环；要求输出结构化 step log、最终答案、tool 调用记录，并对任何外部写操作设置显式 approval。验收标准不是“像不像 agent”，而是它能否在 3 到 6 步内稳定完成一类开放任务，并在工具失败、证据不足或越权动作时停下来而不是胡乱继续。
- hardware budget: 学习和原型阶段通常不需要训练 GPU。用一套可调用工具的托管模型 API、普通开发机或轻量 sandbox、基础存储和日志即可跑通；成本主要来自推理 token、工具调用、检索/存储和观测，而不是训练。进入生产后，预算重点会转向并发、队列、超时控制、审计留痕和人工复核，而不是单纯加大模型规模。
- examples:
  - 研究型 agent：自主检索网页与文档，汇总证据并给出带引用的结论
  - 编码 agent：读仓库、修改文件、运行测试、根据报错重试并提交候选补丁
  - 工作流自动化 agent：读取工单或邮件，调用内部 API 更新系统，并在关键写操作前请求审批
  - 多 agent 协作：路由器拆任务给不同专长 agent，再由 reviewer 做交叉校验
  - 电脑操作 agent：在浏览器或桌面环境中执行点击、填写、抓取和回传
- pitfalls:
  - 把任何带工具调用的流程都叫 agent，忽略了动态决策与闭环控制
  - 让模型直接拥有高风险写权限，没有 approval、限权和回滚策略
  - 没有明确终止条件，导致空转、重复调用和成本失控
  - 记忆设计过早过重，把噪声、过期信息和错误总结长期注入上下文
  - 盲目拆成多 agent，结果协调成本高于收益，问题反而更难定位
  - 只看最终答案，不记录 step log、tool 结果和 handoff，出了问题无法复盘
  - 把 agent 成功归因于提示词，而忽略工具质量、状态设计和运行时约束
- core metrics:
  - 任务完成率 / task success rate
  - 单任务平均步数与有效步占比
  - 工具调用成功率与重试率
  - 端到端时延与每任务成本
  - 人工介入率 / approval rate / escalation rate
  - 副作用正确率、回滚率与越权拦截率
  - 长任务中的上下文稳定性与记忆命中质量
- toolchain:
  - 模型 API 或推理服务
  - 编排层（loop runtime / workflow / graph）
  - 工具调用接口（function calling / MCP / connectors）
  - 状态与记忆存储
  - sandbox、代码执行或浏览器/系统操作环境
  - 日志、追踪、评测与审计组件
  - 权限、审批和 guardrail 机制
- failure signs:
  - agent 在没有新增证据的情况下重复同一类步骤
  - step log 里看起来很忙，但对任务状态没有实质推进
  - 工具结果已经给出反例，最终答案仍沿用原先假设
  - 一遇到工具报错就崩溃，或者无限重试同一失败动作
  - 多 agent handoff 后上下文丢失、责任不清、结果互相矛盾
  - 副作用发生后缺少审计记录、审批痕迹或恢复路径
  - 成本和时延快速上升，但完成率没有同步提升
- next:
  - K/K1. Agent 的最小构成
  - K/K2. 执行形态
  - K/K3. 单 Agent 模式
  - K/K4. 多 Agent 模式
  - K/K5. 图式编排
  - K/K6. Agent 记忆
  - K/K7. 工具与外部连接
  - K/K8. 人在回路
  - K/K9. Agent 观测与控制
  - K/K10. Agent 形态分支

### K1. Agent 的最小构成

- pathKey: `K/K1. Agent 的最小构成`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-K.json`
- status: draft
- definition: 一个最小可工作的 Agent 系统至少需要模型、指令、工具、状态/记忆和编排，还需要 guardrails 与 human review 来控制副作用。
- importance: 这组原语把“能对话的模型”提升成“能完成多步任务的系统”，也是后续拆分单 Agent / 多 Agent / 图式编排的统一抽象。
- minimum demo: 做一个最小 coding agent：读取文件、执行 shell、保存状态，并在危险操作前请求审批。
- hardware budget: 本地原型可从单机开始；复杂任务更依赖稳定运行时而不是更大显存。
- examples:
  - 编码 Agent 会读取代码、调用 shell、执行测试、记录状态，并在危险动作前请求审批。
  - 研究 Agent 会决定是否检索、调用网页工具并把结果回写到长期记忆。
- pitfalls:
  - 只有工具调用并不等于 Agent，是否存在动态决策与状态流转才是关键差异。
  - 把所有任务都升级为 Agent 往往会让复杂度失控，很多场景其实只需要强应用工程。
- prerequisites:
  - J/J3. 工具调用
  - J/J4. 会话与状态
  - M/M6. Guardrails
- core metrics:
  - workflow completion rate
  - tool success rate
  - human override rate
  - trace completeness
- toolchain:
  - model orchestration runtime
  - tools
  - trace storage
- failure signs:
  - 模型会说步骤，但没有稳定的状态回写和恢复
  - 副作用动作没有审批边界
- next:
  - J/J3. 工具调用
  - K/K2. 执行形态
  - M/M6. Guardrails

#### 模型（Model）

- pathKey: `K/K1. Agent 的最小构成/模型（Model）`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K1-1gv8bo3-1.json`
- status: draft
- definition: 模型是 Agent 的决策核心，负责理解目标、选择下一步、消费工具结果并生成最终产物。
- importance: 没有模型就没有动态决策；同时模型能力边界也决定了 agent 该承担多复杂的规划与验证职责。
- minimum demo: 让同一套工具链分别接普通聊天模型和更强推理模型，比较任务完成率和成本差异。
- prerequisites:
  - G/G8. 推理模型与模型路由
  - K/K1. Agent 的最小构成/指令（Instructions）
- core metrics:
  - task success rate
  - cost per task
- next:
  - K/K2. 执行形态/Agent
  - K/K3. 单 Agent 模式

#### 指令（Instructions）

- pathKey: `K/K1. Agent 的最小构成/指令（Instructions）`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K1-1gv8bo3-1.json`
- status: draft
- definition: 指令定义 agent 的目标、边界、风格、停机条件和优先级，是把模型放进某类任务框架中的高层规则。
- importance: 同一个模型和工具，在不同 instructions 下会表现得像完全不同的 agent；不写清规则，系统很容易空转或越界。
- minimum demo: 为同一任务写两版不同指令，比较是否出现步数膨胀、越权动作和输出风格漂移。
- prerequisites:
  - H/H1. 不改权重的控制/System prompt
  - K/K1. Agent 的最小构成/模型（Model）
- core metrics:
  - policy adherence
  - loop discipline
- next:
  - K/K1. Agent 的最小构成/编排（Orchestration）
  - K/K1. Agent 的最小构成/Guardrails

#### 工具（Tools）

- pathKey: `K/K1. Agent 的最小构成/工具（Tools）`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K1-1gv8bo3-1.json`
- status: draft
- definition: 工具是 Agent 从“只会生成文本”走向“可操作环境”的桥梁。关键不是工具数量，而是 schema、权限边界、错误恢复和观察能力。
- importance: 没有工具 schema、审批边界和回滚/重试策略，Agent 很快就会在真实环境里失控。
- minimum demo: 给一个文件操作工具定义输入输出 schema、权限边界和失败返回，再把它接到最小 agent 上。
- hardware budget: 与硬件关系弱，关键在运行时和权限设计。
- examples:
  - 代码 agent 通过文件读写和 shell 工具与仓库交互。
  - 研究 agent 通过网页检索和文档读取工具扩展证据来源。
- pitfalls:
  - 工具越多不等于越强，往往先把路由和恢复复杂度拉高。
  - 没有清晰 schema 和 side-effect 分类时，模型很难稳定使用工具。
- prerequisites:
  - J/J3. 工具调用
  - M/M5. 安全控制
- core metrics:
  - tool success rate
  - schema adherence
  - approval correctness
- toolchain:
  - JSON schema
  - function calling
  - tool logs
- failure signs:
  - 工具调用参数经常缺字段或类型错误
  - 副作用工具没有审批和审计记录
- next:
  - J/J3. 工具调用
  - K/K7. 工具与外部连接
  - M/M5. 安全控制

#### 状态 / 记忆（State / Memory）

- pathKey: `K/K1. Agent 的最小构成/状态 / 记忆（State / Memory）`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K1-1gv8bo3-1.json`
- status: draft
- definition: 状态 / 记忆负责保存当前任务进度、工具结果、会话上下文和长期可复用信息，使 agent 不必每步都从零开始。
- importance: 没有状态层，agent 很难做多步执行和恢复；状态层过重又会把噪声、过期信息和权限问题一起放大。
- minimum demo: 让 agent 在一次中断后恢复任务，并验证它能继续利用先前结果而不是重新从头开始。
- prerequisites:
  - J/J4. 会话与状态
  - K/K6. Agent 记忆
- core metrics:
  - resume success rate
  - memory hit quality
- next:
  - K/K1. Agent 的最小构成/编排（Orchestration）
  - K/K6. Agent 记忆

#### 编排（Orchestration）

- pathKey: `K/K1. Agent 的最小构成/编排（Orchestration）`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K1-1gv8bo3-1.json`
- status: draft
- definition: 编排决定 agent 如何组织步骤、何时调工具、何时结束、何时进入审批或 handoff，是把原子能力串成任务闭环的运行时骨架。
- importance: 模型和工具只是零件，真正让 agent 变成系统的是编排。没有它，步骤顺序、恢复和终止条件都会混乱。
- minimum demo: 实现一个简单 loop runtime，显式记录 `plan -> act -> observe -> decide next` 的每一步。
- prerequisites:
  - K/K2. 执行形态
  - K/K1. Agent 的最小构成/指令（Instructions）
- core metrics:
  - step efficiency
  - termination correctness
- next:
  - K/K2. 执行形态
  - K/K5. 图式编排

#### Guardrails

- pathKey: `K/K1. Agent 的最小构成/Guardrails`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K1-1gv8bo3-1.json`
- status: draft
- definition: Guardrails 是在输入、输出、工具和策略层面为 agent 设置的硬约束与软约束，用来限制越权、异常和高风险行为。
- importance: agent 一旦具备动态决策和工具执行能力，guardrails 就不再是可选增强，而是运行时的必要边界。
- minimum demo: 为一个带副作用工具的 agent 加入输入、工具和输出三类 guardrails，并验证危险动作会被拦截。
- prerequisites:
  - M/M6. Guardrails
  - J/J8. 安全与权限
- core metrics:
  - guardrail block rate
  - unsafe action prevention
- next:
  - K/K1. Agent 的最小构成/Human review
  - J/J8. 安全与权限/Sensitive action approval

#### Human review

- pathKey: `K/K1. Agent 的最小构成/Human review`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K1-1gv8bo3-1.json`
- status: draft
- definition: Human review 指在关键节点由人审阅计划、参数、产物或副作用建议，把自动执行转成受控执行。
- importance: 在高风险或高不确定性场景里，human review 往往比继续加 prompt 更能稳定降低事故风险。
- minimum demo: 在一个会写数据的 agent 链路里加 review 节点，验证通过、拒绝和修改后三种路径都能继续执行。
- prerequisites:
  - K/K1. Agent 的最小构成/Guardrails
  - K/K8. 人在回路
- core metrics:
  - review acceptance rate
  - human override rate
- next:
  - K/K8. 人在回路
  - J/J8. 安全与权限/Sensitive action approval

### K2. 执行形态

- pathKey: `K/K2. 执行形态`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-K.json`
- status: draft
- definition: 执行形态关注系统把模型放进什么样的控制框架里：完全固定路径的 workflow、能动态决定步骤和工具的 agent，或两者混合的 hybrid system。它回答的不是“能不能调工具”，而是“谁来决定下一步、在哪些地方允许动态性、在哪些地方保持固定骨架”。
- importance: 很多系统并不需要 full agent，也不是纯 workflow 就够。执行形态选错了，通常会在两个极端里摇摆：要么流程太死，遇到变化就失败；要么动态性太强，成本、时延和风险都失控。
- minimum demo: 拿同一类任务分别实现 workflow、agent 和 hybrid 三种执行形态，对比任务完成率、平均步数、延迟和人工介入率。
- hardware budget: 这层的成本主要体现在编排复杂度、调用次数和观测，而不是训练硬件。动态性越高，通常 token、工具调用和调试成本也越高。
- examples:
  - 固定审批流更适合 workflow，而不是让 agent 每步自由决定。
  - 开放式研究任务更适合 agent，因为路径事先难以穷举。
  - 很多实际系统采用 hybrid：主骨架固定，局部节点放给 agent 自主处理。
- pitfalls:
  - 把固定 workflow 错叫成 agent，导致系统设计目标混乱。
  - 为简单任务引入过多动态决策，收益远低于复杂度。
  - 缺少明确终止条件，agent 模式容易空转。
- prerequisites:
  - K/K1. Agent 的最小构成
  - J/J3. 工具调用
  - J/J7. 工程可靠性
- core metrics:
  - task success rate
  - average steps
  - latency
  - cost
  - human intervention rate
- toolchain:
  - workflow runtime
  - agent loop runtime
  - trace logging
  - approval gates
- failure signs:
  - 简单任务路径被动态决策拖得又慢又贵。
  - 开放任务被固定 workflow 卡死在预设分支里。
  - 同类任务在不同执行形态下没有统一评测，难以选型。
- next:
  - K/K2. 执行形态/Workflow
  - K/K2. 执行形态/Agent
  - K/K2. 执行形态/Hybrid system
  - K/K3. 单 Agent 模式
  - K/K4. 多 Agent 模式

#### Workflow

- pathKey: `K/K2. 执行形态/Workflow`
- node type: `concept-group`
- detail source: `data/details/domain-K.json`
- status: draft
- definition: Workflow 以固定路径、显式状态机和规则驱动为主，模型通常只负责填补局部判断或生成内容，而不自由决定整体流程。
- importance: 它最适合要求强审计、强稳定性和明确审批边界的业务流程，是许多生产系统的默认起点。
- minimum demo: 把一个审批或表单处理任务用固定节点和条件分支实现，验证每步输入输出都可预测。
- prerequisites:
  - K/K2. 执行形态
  - K/K5. 图式编排
- core metrics:
  - path determinism
  - recovery success
  - approval correctness
- next:
  - K/K2. 执行形态/Hybrid system
  - K/K5. 图式编排/Conditional branches

##### 固定路径

- pathKey: `K/K2. 执行形态/Workflow/固定路径`
- node type: `concept`
- detail source: `data/details/leaves-K-K2-pqhozi-1.json`
- status: draft
- definition: 固定路径 workflow 把任务拆成预定义步骤、固定顺序和显式状态转换，系统只能在既定骨架内前进，不能临场改写流程结构。它本质上是用工程确定性换执行灵活性。
- importance: 这类形态适合审批、报表、发布、合规等链路，因为组织更看重可预测、可审计和可回放，而不是让模型临场发挥。
- minimum demo: 把一个审批或发布流程写成固定节点序列，定义每一步输入、输出、失败处理和责任边界，再验证任意一次执行都能被完整复盘。
- prerequisites:
  - K/K2. 执行形态/Workflow
  - K/K5. 图式编排/Edges
- core metrics:
  - path determinism
  - approval correctness
- next:
  - K/K2. 执行形态/Workflow/规则驱动
  - K/K2. 执行形态/Hybrid system

##### 规则驱动

- pathKey: `K/K2. 执行形态/Workflow/规则驱动`
- node type: `concept`
- detail source: `data/details/leaves-K-K2-pqhozi-1.json`
- status: draft
- definition: 规则驱动 workflow 允许流程根据显式条件和规则走不同分支，但分支集合本身仍然是预定义和可审计的。
- importance: 它能在保持可控性的同时覆盖更多任务变化，是很多业务自动化系统的现实折中。
- minimum demo: 为同一流程加入几条显式分支规则，比较是否能覆盖常见异常而不引入开放式 agent 复杂度。
- prerequisites:
  - K/K2. 执行形态/Workflow/固定路径
  - K/K5. 图式编排/Conditional branches
- core metrics:
  - branch coverage
  - rule maintenance cost
- next:
  - K/K2. 执行形态/Hybrid system/固定骨架 + 局部 agent 决策
  - J/J9. 应用形态/Workflow assistant

#### Agent

- pathKey: `K/K2. 执行形态/Agent`
- node type: `concept-group`
- detail source: `data/details/domain-K.json`
- status: draft
- definition: Agent 模式允许系统在执行中动态决定下一步、工具选择和终止条件，强调适应开放任务和不完整信息。
- importance: 它能覆盖更复杂任务，但代价是更高的不确定性、成本和失败模式复杂度。
- minimum demo: 给一个开放任务只定义目标和工具，不预先写死路径，观察 agent 在 3 到 6 步内如何推进。
- prerequisites:
  - K/K2. 执行形态
  - K/K3. 单 Agent 模式/ReAct / reason-act loop
- core metrics:
  - adaptive success rate
  - step efficiency
  - looping rate
- next:
  - K/K3. 单 Agent 模式
  - K/K4. 多 Agent 模式

##### 动态决定步骤

- pathKey: `K/K2. 执行形态/Agent/动态决定步骤`
- node type: `concept`
- detail source: `data/details/leaves-K-K2-11mnpfg-1.json`
- status: draft
- definition: 动态决定步骤意味着 agent 不依赖预先写死的完整路径，而是根据当前状态、证据和失败信息选择下一步动作。
- importance: 这是 agent 相比 workflow 最核心的差异之一，也是 agent 能处理开放任务的来源。
- minimum demo: 给 agent 一个开放问题和有限工具，让它根据中间结果调整执行步骤而不是照本宣科。
- prerequisites:
  - K/K2. 执行形态/Agent
  - K/K3. 单 Agent 模式/ReAct / reason-act loop
- core metrics:
  - adaptive step quality
  - looping rate
- next:
  - K/K2. 执行形态/Agent/动态决定工具
  - K/K3. 单 Agent 模式/Plan-then-act

##### 动态决定工具

- pathKey: `K/K2. 执行形态/Agent/动态决定工具`
- node type: `concept`
- detail source: `data/details/leaves-K-K2-11mnpfg-1.json`
- status: draft
- definition: 动态决定工具指 agent 基于当前上下文、任务阶段和证据缺口，临场选择该调用哪种工具，或是否根本不调用工具。
- importance: 它直接决定工具链是否真的为任务服务，而不是被固定路由限制住覆盖面。
- minimum demo: 提供多个工具和一组混合任务，评估 agent 是否能选对工具并在不需要时保持克制。
- prerequisites:
  - K/K2. 执行形态/Agent/动态决定步骤
  - J/J3. 工具调用/Tool routing
- core metrics:
  - tool selection accuracy
  - false call rate
- next:
  - K/K3. 单 Agent 模式/Tool-using agent
  - K/K4. 多 Agent 模式/Agents-as-tools

#### Hybrid system

- pathKey: `K/K2. 执行形态/Hybrid system`
- node type: `concept-group`
- detail source: `data/details/domain-K.json`
- status: draft
- definition: Hybrid system 用固定骨架承载主要流程，把少数高不确定性节点交给 agent 自主决策，平衡稳定性与灵活性。
- importance: 这是实际系统里最常见也最实用的折中方案，特别适合需要审批、状态机和部分开放决策共存的任务。
- minimum demo: 在一个固定工作流里把检索和分析节点换成 agent 决策，比较整体稳定性和覆盖面。
- prerequisites:
  - K/K2. 执行形态/Workflow
  - K/K2. 执行形态/Agent
- core metrics:
  - hybrid task success
  - controlled flexibility
  - cost trade-off
- next:
  - K/K5. 图式编排/Conditional branches
  - J/J9. 应用形态/Workflow assistant

##### 固定骨架 + 局部 agent 决策

- pathKey: `K/K2. 执行形态/Hybrid system/固定骨架 + 局部 agent 决策`
- node type: `concept`
- detail source: `data/details/leaves-K-K2-1i6ffr2-1.json`
- status: draft
- definition: 固定骨架 + 局部 agent 决策指系统大框架和高风险节点保持预定义，而把检索、分析或局部规划这类不确定部分交给 agent 自主完成。
- importance: 它通常是把 agent 能力接进生产系统最稳的一步，因为既保留了审计和审批边界，又获得了局部适应性。
- minimum demo: 在一个固定审批流程里，把中间的检索与分析节点交给 agent 决策，比较与纯 workflow 的覆盖面差异。
- prerequisites:
  - K/K2. 执行形态/Workflow/规则驱动
  - K/K2. 执行形态/Agent/动态决定步骤
- core metrics:
  - controlled flexibility
  - hybrid task success
- next:
  - J/J9. 应用形态/Workflow assistant
  - K/K5. 图式编排/Conditional branches

### K3. 单 Agent 模式

- pathKey: `K/K3. 单 Agent 模式`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-K.json`
- status: draft
- definition: 单 Agent 模式讨论一个 agent 如何在自己的 loop 里完成观察、计划、调用工具、读结果、验证和终止，而不依赖多 agent 分工。
- importance: 这是大多数 agent 系统的第一步，因为单 agent 更容易调试、更容易评测，也更能看清真实瓶颈到底来自模型、工具还是状态设计。
- minimum demo: 实现一个受控单 agent loop，支持检索、工具调用和结果验证，并输出逐步 trace。
- hardware budget: 主要成本在多步推理和工具链，而不是训练硬件。相比多 agent，单 agent 更容易控制 token 和同步成本。
- examples:
  - 单 agent coding loop：读错误、改代码、跑测试、根据结果继续或结束。
  - 单 agent research loop：检索资料、总结证据、检查缺口、继续检索。
- pitfalls:
  - 把所有模式都塞进一个大 prompt，导致决策和状态边界混乱。
  - 单 agent 一旦过度承担规划、执行、审查全部职责，就会变得难调且不稳。
- prerequisites:
  - K/K2. 执行形态/Agent
  - K/K1. Agent 的最小构成
- core metrics:
  - loop completion rate
  - useful step ratio
  - self-correction rate
- toolchain:
  - agent loop runtime
  - tool adapter
  - trace log
- failure signs:
  - agent 经常在同一类步骤中循环。
  - 最后答案看似合理，但 trace 显示关键证据从未出现。
- next:
  - K/K3. 单 Agent 模式/ReAct / reason-act loop
  - K/K3. 单 Agent 模式/Plan-then-act
  - K/K3. 单 Agent 模式/Reflect / retry
  - K/K3. 单 Agent 模式/Tool-using agent
  - K/K3. 单 Agent 模式/Retrieval-first agent
  - K/K3. 单 Agent 模式/Verification loop
  - K/K4. 多 Agent 模式

#### ReAct / reason-act loop

- pathKey: `K/K3. 单 Agent 模式/ReAct / reason-act loop`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K3-mqdcm5-1.json`
- status: draft
- definition: ReAct / reason-act loop 通过交替思考与行动，让 agent 在每一步观察结果后决定下一步，是最经典的单 agent 模式之一。
- importance: 它简单直接，适合快速原型和开放任务，但也最容易因为缺少明确终止条件而循环或发散。
- minimum demo: 让 agent 围绕单一任务做 3 到 6 步 reason-act 循环，并记录每步证据与动作。
- prerequisites:
  - K/K2. 执行形态/Agent/动态决定步骤
  - J/J3. 工具调用/Tool execution
- core metrics:
  - useful step ratio
  - looping rate
- next:
  - K/K3. 单 Agent 模式/Reflect / retry
  - K/K3. 单 Agent 模式/Tool-using agent

#### Plan-then-act

- pathKey: `K/K3. 单 Agent 模式/Plan-then-act`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K3-mqdcm5-1.json`
- status: draft
- definition: Plan-then-act 先产出阶段性计划，再按计划执行步骤，适合任务结构相对清晰且中间可检验的场景。
- importance: 它能减少纯 ReAct 的局部贪心和频繁跳步问题，但如果计划过早冻结，也会降低对环境变化的适应性。
- minimum demo: 对同一任务比较先规划后执行与纯 ReAct 的完成率和步数差异。
- prerequisites:
  - K/K2. 执行形态/Agent/动态决定步骤
  - G/G8. 推理模型与模型路由/Planner / executor split
- core metrics:
  - plan quality
  - execution adherence
- next:
  - K/K3. 单 Agent 模式/Reflect / retry
  - K/K4. 多 Agent 模式/Manager / worker

#### Reflect / retry

- pathKey: `K/K3. 单 Agent 模式/Reflect / retry`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K3-mqdcm5-1.json`
- status: draft
- definition: Reflect / retry 让 agent 在失败、低置信度或验证不通过时复盘前一步并选择重试、改路或结束。
- importance: 没有反思和重试，单 agent 遇到一次工具错误或错误假设就容易直接崩掉；但没有边界的反思又会无限打转。
- minimum demo: 人为制造一次工具失败，观察 agent 是否能反思并走向有效重试而不是重复原动作。
- prerequisites:
  - K/K3. 单 Agent 模式/ReAct / reason-act loop
  - J/J7. 工程可靠性/Retry
- core metrics:
  - self-correction rate
  - retry effectiveness
- next:
  - K/K3. 单 Agent 模式/Verification loop
  - J/J7. 工程可靠性/Fallback

#### Tool-using agent

- pathKey: `K/K3. 单 Agent 模式/Tool-using agent`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K3-mqdcm5-1.json`
- status: draft
- definition: Tool-using agent 把工具调用作为主执行手段，而不是只在少数节点辅助生成，强调环境交互与结果消费能力。
- importance: 这是多数实用 agent 的核心形态，因为没有工具，很多任务根本无法闭环完成。
- minimum demo: 给 agent 两到三个工具，让它围绕一个实际任务多次调用并基于结果推进。
- prerequisites:
  - K/K2. 执行形态/Agent/动态决定工具
  - J/J3. 工具调用
- core metrics:
  - tool success rate
  - task completion rate
- next:
  - K/K3. 单 Agent 模式/Retrieval-first agent
  - K/K7. 工具与外部连接

#### Retrieval-first agent

- pathKey: `K/K3. 单 Agent 模式/Retrieval-first agent`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K3-mqdcm5-1.json`
- status: draft
- definition: Retrieval-first agent 在大多数步骤前优先补齐外部证据，再决定是否继续规划、执行或生成，强调先接地再行动。
- importance: 它能降低幻觉和盲目行动，特别适合研究、问答和文档密集型任务。
- minimum demo: 让 agent 在每个关键决策前先检索证据，比较与直接行动模式的 groundedness 差异。
- prerequisites:
  - I/I3. RAG 管线
  - K/K3. 单 Agent 模式/Tool-using agent
- core metrics:
  - groundedness
  - retrieval hit quality
- next:
  - K/K3. 单 Agent 模式/Verification loop
  - J/J9. 应用形态/Search / QA

#### Verification loop

- pathKey: `K/K3. 单 Agent 模式/Verification loop`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K3-mqdcm5-1.json`
- status: draft
- definition: Verification loop 在单 agent 内部加入独立验证步骤，用来检查当前结论、工具结果或中间产物是否足够可信，再决定继续或结束。
- importance: 很多看起来“很会做事”的 agent 最后失败，不是因为不会执行，而是因为不会验证自己做得到底对不对。
- minimum demo: 让 agent 在给出最终答案前先跑一轮 verifier 或自检步骤，比较错误拦截率。
- prerequisites:
  - K/K3. 单 Agent 模式/Reflect / retry
  - G/G8. 推理模型与模型路由/Verifier / judge
- core metrics:
  - error catch rate
  - verification overhead
- next:
  - K/K4. 多 Agent 模式/Reviewer / critic / verifier
  - M/M3. Agent 级评测/Outcome checks

### K4. 多 Agent 模式

- pathKey: `K/K4. 多 Agent 模式`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-K.json`
- status: draft
- definition: 多 Agent 模式把任务拆给不同职责或专长的 agent 协作完成，例如 manager / worker、router / specialists、reviewer / critic 等模式。
- importance: 它适合职责天然可拆、评审和验证独立、或需要多种专长并行的任务，但会显著增加上下文传递、handoff 和协调成本。
- minimum demo: 做一个两 agent 系统：planner 负责拆任务，worker 负责执行，再比较与单 agent 的完成率和 trace 复杂度。
- hardware budget: 多 agent 往往放大 token、调度和同步成本；即使单个模型不大，整体成本也可能迅速超过单 agent。
- examples:
  - router 把请求分给 coding、research 和 workflow specialists。
  - reviewer 专门检查 worker 产物，决定是否通过或返工。
  - manager 汇总多个子任务结果后生成最终答案。
- pitfalls:
  - 为简单任务过度拆 agent，协调成本高于收益。
  - handoff 格式不清，导致上下文不断丢失和重复。
  - 每个 agent 都在做相似推理，实际没有形成真正分工。
- prerequisites:
  - K/K2. 执行形态/Agent
  - K/K3. 单 Agent 模式
  - M/M3. Agent 级评测
- core metrics:
  - handoff correctness
  - coordination overhead
  - parallel gain
  - review effectiveness
- toolchain:
  - agent router
  - handoff schema
  - review / verifier agents
  - trace graph
- failure signs:
  - 多个 agent 同时忙碌，但任务整体推进很少。
  - handoff 后责任边界模糊，出错无法定位是哪一段造成。
- next:
  - K/K4. 多 Agent 模式/Manager / worker
  - K/K4. 多 Agent 模式/Router / specialists
  - K/K4. 多 Agent 模式/Handoff
  - K/K4. 多 Agent 模式/Agents-as-tools
  - K/K4. 多 Agent 模式/Reviewer / critic / verifier
  - K/K4. 多 Agent 模式/Debate / voting
  - K/K4. 多 Agent 模式/Subgraphs
  - K/K8. 人在回路

#### Manager / worker

- pathKey: `K/K4. 多 Agent 模式/Manager / worker`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K4-1d6ojq7-1.json`
- status: draft
- definition: Manager / worker 用上层 manager 负责拆任务、跟踪进度和整合结果，worker 负责执行具体子任务。
- importance: 它适合任务天然可拆、需要中央协调的场景，但 manager 质量会直接决定整体效率。
- minimum demo: 让 manager 拆两个子任务给 worker，并检查任务分配、回收和汇总是否稳定。
- prerequisites:
  - K/K3. 单 Agent 模式/Plan-then-act
  - K/K4. 多 Agent 模式/Handoff
- core metrics:
  - subtask success rate
  - coordination overhead
- next:
  - K/K4. 多 Agent 模式/Router / specialists
  - K/K4. 多 Agent 模式/Reviewer / critic / verifier

#### Router / specialists

- pathKey: `K/K4. 多 Agent 模式/Router / specialists`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K4-1d6ojq7-1.json`
- status: draft
- definition: Router / specialists 由路由器根据任务类型把请求分给不同专长 agent，例如 coding、research 或 workflow specialists。
- importance: 它能避免一个 agent 什么都做却什么都不精，但前提是路由标准清晰、specialist 真有明确分工。
- minimum demo: 让 router 在三类任务上分发给不同 specialists，并比较与单 agent 的差异。
- prerequisites:
  - G/G8. 推理模型与模型路由/Model routing policy
  - K/K4. 多 Agent 模式/Handoff
- core metrics:
  - routing quality
  - specialist win rate
- next:
  - K/K4. 多 Agent 模式/Agents-as-tools
  - M/M3. Agent 级评测/Routing quality

#### Handoff

- pathKey: `K/K4. 多 Agent 模式/Handoff`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K4-1d6ojq7-1.json`
- status: draft
- definition: Handoff 是多 agent 协作中把任务状态、上下文、责任和预期输出从一个 agent 转移到另一个 agent 的过程。
- importance: 很多多 agent 系统失败不是因为单个 agent 不行，而是 handoff 时上下文丢失、责任模糊或格式不一致。
- minimum demo: 让一个 agent 生成中间状态并 handoff 给另一个 agent，检查接收方是否能无歧义继续执行。
- prerequisites:
  - K/K4. 多 Agent 模式
  - M/M3. Agent 级评测/Handoff correctness
- core metrics:
  - handoff correctness
  - context loss rate
- next:
  - K/K4. 多 Agent 模式/Subgraphs
  - K/K8. 人在回路/Escalation

#### Agents-as-tools

- pathKey: `K/K4. 多 Agent 模式/Agents-as-tools`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K4-1d6ojq7-1.json`
- status: draft
- definition: Agents-as-tools 把某些专长 agent 当成可调用工具，由主 agent 通过标准接口触发，而不是所有 agent 平权协作。
- importance: 这种模式能保留统一控制面，同时复用 specialist 能力，通常比全平权多 agent 更容易管理。
- minimum demo: 把一个 review agent 封装成主 agent 可调用的工具，比较与普通工具调用的差异。
- prerequisites:
  - K/K4. 多 Agent 模式/Router / specialists
  - J/J3. 工具调用/Function calling
- core metrics:
  - sub-agent utility
  - integration simplicity
- next:
  - K/K4. 多 Agent 模式/Reviewer / critic / verifier
  - K/K7. 工具与外部连接/Function tools

#### Reviewer / critic / verifier

- pathKey: `K/K4. 多 Agent 模式/Reviewer / critic / verifier`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K4-1d6ojq7-1.json`
- status: draft
- definition: Reviewer / critic / verifier 由独立 agent 负责审查产物、指出风险或验证结果，避免执行 agent 自己给自己打分。
- importance: 它把‘会做’和‘会检查’分开，特别适合代码、研究和高风险副作用场景。
- minimum demo: 让 worker 产出结果，再由 reviewer 做独立审查，比较是否能拦下明显错误。
- prerequisites:
  - K/K3. 单 Agent 模式/Verification loop
  - M/M3. Agent 级评测/Outcome checks
- core metrics:
  - review catch rate
  - false reject rate
- next:
  - K/K4. 多 Agent 模式/Debate / voting
  - M/M3. Agent 级评测/Trace grading

#### Debate / voting

- pathKey: `K/K4. 多 Agent 模式/Debate / voting`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K4-1d6ojq7-1.json`
- status: draft
- definition: Debate / voting 通过多个 agent 给出不同解或观点，再用投票或裁决机制选择最终结果，强调多样性与互相纠错。
- importance: 它适合高不确定性或高风险任务，但成本和延迟也会显著放大，不能当作默认模式。
- minimum demo: 让两个 agent 对同一问题给出独立答案，再用第三方裁决或投票选择最终结果。
- prerequisites:
  - K/K4. 多 Agent 模式/Reviewer / critic / verifier
  - K/K4. 多 Agent 模式/Handoff
- core metrics:
  - consensus quality
  - cost overhead
- next:
  - K/K4. 多 Agent 模式/Subgraphs
  - M/M3. Agent 级评测/Failure taxonomy

#### Subgraphs

- pathKey: `K/K4. 多 Agent 模式/Subgraphs`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K4-1d6ojq7-1.json`
- status: draft
- definition: Subgraphs 指把多 agent 协作封装成可复用的局部子图或子流程，再嵌入更大执行图中，形成模块化 agent 组织。
- importance: 它有助于复用和治理复杂协作逻辑，是从“多 agent demo”走向“可维护系统”的关键一步。
- minimum demo: 把一个 research-review 两段式协作封装成子图，再嵌入更大的主流程里。
- prerequisites:
  - K/K4. 多 Agent 模式/Handoff
  - K/K5. 图式编排/Nodes
- core metrics:
  - reuse rate
  - composition stability
- next:
  - K/K5. 图式编排
  - K/K9. Agent 观测与控制

### K5. 图式编排

- pathKey: `K/K5. 图式编排`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-K.json`
- status: draft
- definition: 图式编排把 agent 运行时显式表达成图：状态是流经图的上下文，节点承载执行单元，边决定控制流，条件分支、循环、并行、检查点和恢复机制共同构成可维护的执行骨架。
- importance: 一旦任务超过简单 loop，靠隐式 prompt 很难维持长期稳定。图式编排能把复杂 agent 逻辑转成可审计、可调试、可恢复的结构，是从 demo 走向工程化系统的关键一步。
- minimum demo: 把一个带检索、工具调用和审批节点的 agent 流程画成显式图，并支持失败后从某个 checkpoint 恢复继续执行。
- hardware budget: 主要增加状态存储、编排运行时和恢复逻辑成本，而不是模型算力。真正贵的是复杂图里每个节点的推理和工具调用放大。 
- examples:
  - 固定入口节点后，根据条件分支走向不同工具路径。
  - 在关键节点写 checkpoint，失败后从最近检查点恢复。
  - 对互不依赖的子任务做并行执行，再汇总结果。
- pitfalls:
  - 图结构过于细碎，最终每个节点都只是绕一层 prompt。
  - 没有显式状态模型，图再复杂也只是隐式流程图。
  - 并行和循环一上来就用，结果调试和恢复成本爆炸。
- prerequisites:
  - K/K2. 执行形态
  - K/K4. 多 Agent 模式
  - J/J7. 工程可靠性
- core metrics:
  - graph execution success
  - resume success rate
  - parallel efficiency
  - state consistency
- toolchain:
  - graph runtime
  - checkpoint store
  - state machine / serializer
  - trace viewer
- failure signs:
  - 流程图看起来清晰，运行时却无法恢复或回放。
  - 状态在节点之间传递时经常丢字段或错版本。
  - 循环和并行一多，排障复杂度明显高于收益。
- next:
  - K/K5. 图式编排/State
  - K/K5. 图式编排/Nodes
  - K/K5. 图式编排/Edges
  - K/K5. 图式编排/Conditional branches
  - K/K5. 图式编排/Loops
  - K/K5. 图式编排/Parallel execution
  - K/K5. 图式编排/Checkpoints
  - K/K5. 图式编排/Resumability

#### State

- pathKey: `K/K5. 图式编排/State`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K5-15tj062-1.json`
- status: draft
- definition: State 是图式编排中流经节点的统一上下文，承载任务输入、中间结果、控制标记和恢复所需信息。
- importance: 没有显式 state，图上的节点和边就只是伪装成工程化的 prompt 串联。
- minimum demo: 定义一个结构化 state 对象，让不同节点读写同一份状态并可回放。
- prerequisites:
  - J/J4. 会话与状态/Conversation state
  - K/K6. Agent 记忆/Task memory
- core metrics:
  - state consistency
  - serialization correctness
- next:
  - K/K5. 图式编排/Nodes
  - K/K5. 图式编排/Checkpoints

#### Nodes

- pathKey: `K/K5. 图式编排/Nodes`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K5-15tj062-1.json`
- status: draft
- definition: Nodes 是图中的执行单元，可以是模型调用、工具执行、路由判断、审批节点或数据变换节点。
- importance: 节点粒度决定了流程的可复用性和可调试性；过粗难观测，过细则会把图拆得支离破碎。
- minimum demo: 把一个 agent 任务拆成 3 到 5 类明确节点，并检查每种节点的输入输出是否清晰。
- prerequisites:
  - K/K5. 图式编排/State
  - K/K2. 执行形态
- core metrics:
  - node reuse rate
  - debug clarity
- next:
  - K/K5. 图式编排/Edges
  - K/K5. 图式编排/Conditional branches

#### Edges

- pathKey: `K/K5. 图式编排/Edges`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K5-15tj062-1.json`
- status: draft
- definition: Edges 不只是“连线”，而是节点之间传递状态、决定触发条件和声明控制流语义的显式协议。边里承载的信息如果说不清，图执行就会退化成隐藏在代码里的隐式跳转。
- importance: 很多图式系统的问题不是 node 本身坏，而是 handoff 条件、状态字段、异常分支和重试语义定义得太松，导致同一张图在不同输入下表现不一致。
- minimum demo: 为一个简单图逐条写清边的进入条件、退出条件、传递字段和失败去向，再检查不同路径上的状态是否能被一致解释。
- prerequisites:
  - K/K5. 图式编排/Nodes
  - K/K5. 图式编排/State
- core metrics:
  - transition correctness
  - state handoff quality
- next:
  - K/K5. 图式编排/Conditional branches
  - K/K5. 图式编排/Loops

#### Conditional branches

- pathKey: `K/K5. 图式编排/Conditional branches`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K5-15tj062-1.json`
- status: draft
- definition: Conditional branches 根据状态、规则或模型判断选择不同路径，是把固定图转成可适应图的关键机制。
- importance: 它决定系统能否在保持图结构可审计的前提下，对不同输入和失败类型做差异化处理。
- minimum demo: 为同一流程定义成功、失败和需审批三条分支，验证状态分流是否稳定。
- prerequisites:
  - K/K5. 图式编排/Edges
  - K/K2. 执行形态/Workflow/规则驱动
- core metrics:
  - branch precision
  - branch coverage
- next:
  - K/K5. 图式编排/Loops
  - K/K5. 图式编排/Parallel execution

#### Loops

- pathKey: `K/K5. 图式编排/Loops`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K5-15tj062-1.json`
- status: draft
- definition: Loops 允许图在满足条件时重复一段子流程，例如重试、继续检索、再验证或逐步修正。
- importance: 循环让图能覆盖开放任务，但如果没有明确停机条件，也最容易演化成空转和成本失控。
- minimum demo: 实现一个最多三轮的修正循环，并记录每轮是否真正推进了任务状态。
- prerequisites:
  - K/K5. 图式编排/Conditional branches
  - K/K3. 单 Agent 模式/Reflect / retry
- core metrics:
  - loop usefulness
  - max-iteration hit rate
- next:
  - K/K5. 图式编排/Checkpoints
  - J/J7. 工程可靠性/Retry

#### Parallel execution

- pathKey: `K/K5. 图式编排/Parallel execution`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K5-15tj062-1.json`
- status: draft
- definition: Parallel execution 让多个独立节点或子任务同时运行，以减少等待时间或并行探索不同分支。
- importance: 并行是少数既可能显著提速、也可能迅速放大成本和状态复杂度的机制，需要明确独立性边界。
- minimum demo: 把两个互不依赖的检索或分析子任务并行执行，并比较与串行方案的耗时差异。
- prerequisites:
  - K/K5. 图式编排/Conditional branches
  - K/K4. 多 Agent 模式/Subgraphs
- core metrics:
  - parallel speedup
  - merge correctness
  - cost overhead
- next:
  - K/K5. 图式编排/Checkpoints
  - K/K5. 图式编排/Resumability

#### Checkpoints

- pathKey: `K/K5. 图式编排/Checkpoints`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K5-15tj062-1.json`
- status: draft
- definition: Checkpoints 是在关键节点持久化状态快照，使长任务可以从安全位置恢复，而不是每次从头重跑。
- importance: 多步 agent 一旦没有检查点，任何中途失败都可能把成本和人工操作放大数倍。
- minimum demo: 在一个长任务图中设置两个 checkpoint，并验证从中间失败后能从最近快照恢复。
- prerequisites:
  - K/K5. 图式编排/State
  - K/K5. 图式编排/Loops
- core metrics:
  - checkpoint recovery rate
  - recovery latency
- next:
  - K/K5. 图式编排/Resumability
  - J/J4. 会话与状态/Server-managed state

#### Resumability

- pathKey: `K/K5. 图式编排/Resumability`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K5-15tj062-1.json`
- status: draft
- definition: Resumability 指任务在中断、失败、审批暂停或人工接管后，能否利用现有状态与检查点继续推进而不是重新执行。
- importance: 这是长任务 agent 是否真正可用的关键特征之一，也是从 demo 迈向生产系统的分界点。
- minimum demo: 在任务进行到一半时模拟断线或审批暂停，再恢复执行并检查最终状态一致性。
- prerequisites:
  - K/K5. 图式编排/Checkpoints
  - J/J4. 会话与状态/Server-managed state
- core metrics:
  - resume success rate
  - state continuity
- next:
  - K/K9. Agent 观测与控制/Tracing
  - J/J7. 工程可靠性/Idempotency

### K6. Agent 记忆

- pathKey: `K/K6. Agent 记忆`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-K.json`
- status: draft
- definition: Agent 记忆关注执行体如何保存当前会话、任务、历史经历和长期抽象知识，并在合适时机注入给模型。它不是简单的历史拼接，而是围绕任务推进和恢复需求设计的分层状态系统。
- importance: 没有记忆，agent 会在长任务里不断重来；记忆设计不好，又会把噪声、过期信息和隐私问题持续注入每一步。理解这层，是让 agent 稳定跨步骤工作的前提。
- minimum demo: 让 agent 在一次中断后恢复执行，并利用先前工具结果和已确认信息继续推进，而不是重新从头搜索和计划。
- hardware budget: 主要成本在存储、检索和压缩，而不是训练硬件。长任务和多用户场景下，记忆治理成本往往比模型推理更快膨胀。
- examples:
  - 保留当前任务的中间结果，避免每次重算。
  - 把多次执行的 episodic 经验压缩成长期语义记忆。
  - 将用户偏好与任务状态分开保存，避免污染。
- pitfalls:
  - 什么都存，导致噪声和敏感信息长期残留。
  - 会话记忆、用户记忆和任务记忆边界不清。
  - 记忆注入没有预算控制，最后把关键新证据挤出上下文。
- prerequisites:
  - I/I5. 记忆类型
  - J/J4. 会话与状态
  - K/K1. Agent 的最小构成/状态 / 记忆（State / Memory）
- core metrics:
  - memory hit quality
  - resume success rate
  - staleness
  - memory injection efficiency
- toolchain:
  - memory store
  - compaction / summarization
  - state serializer
  - retrieval adapters
- failure signs:
  - 同一任务做了多步，agent 却反复遗忘已确认事实。
  - 记忆越积越多，token 成本和错误率同时上升。
  - 用户长期信息和单次任务状态在回放中互相污染。
- next:
  - K/K6. Agent 记忆/Session memory
  - K/K6. Agent 记忆/Episodic memory
  - K/K6. Agent 记忆/Semantic memory
  - K/K6. Agent 记忆/User memory
  - K/K6. Agent 记忆/Task memory
  - K/K6. Agent 记忆/Long-term distilled memory
  - K/K6. Agent 记忆/Memory injection / compaction

#### Session memory

- pathKey: `K/K6. Agent 记忆/Session memory`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K6-1y0kgxp-1.json`
- status: draft
- definition: Session memory 保存当前交互会话内的短期上下文、用户刚给出的约束和最近一步结果，生命周期通常短于长期用户记忆。
- importance: 它是大多数 agent 能稳定跨几步工作的最低要求，同时也是最容易被无节制历史拼接替代错的部分。
- minimum demo: 让 agent 在一次会话内记住用户刚确认的要求，并在后续步骤中稳定使用。
- prerequisites:
  - I/I5. 记忆类型/会话记忆
  - J/J4. 会话与状态/Session memory
- core metrics:
  - session recall quality
  - cleanup correctness
- next:
  - K/K6. Agent 记忆/Task memory
  - K/K6. Agent 记忆/Memory injection / compaction

#### Episodic memory

- pathKey: `K/K6. Agent 记忆/Episodic memory`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K6-1y0kgxp-1.json`
- status: draft
- definition: Episodic memory 记录一次次具体执行经历、工具结果和中间轨迹，适合保存“发生过什么”。
- importance: 它为复盘、案例检索和失败恢复提供原始材料，但如果无限累积，也会快速变成噪声仓库。
- minimum demo: 保存几次任务执行轨迹，再让 agent 在新任务中检索类似 episode 作为参考。
- prerequisites:
  - I/I5. 记忆类型/Episodic memory
  - K/K9. Agent 观测与控制/Step logs
- core metrics:
  - episode reuse value
  - noise growth
- next:
  - K/K6. Agent 记忆/Semantic memory
  - K/K6. Agent 记忆/Long-term distilled memory

#### Semantic memory

- pathKey: `K/K6. Agent 记忆/Semantic memory`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K6-1y0kgxp-1.json`
- status: draft
- definition: Semantic memory 保存从多次任务中抽象出的稳定知识、规则和关系，而不是具体某次执行细节。
- importance: 它能让 agent 从经历中沉淀通用知识，减少每次都回放原始 episode 的成本。
- minimum demo: 从多次相似任务里提炼出通用规则，并在新任务中优先注入这些规则。
- prerequisites:
  - I/I5. 记忆类型/Semantic memory
  - K/K6. Agent 记忆/Episodic memory
- core metrics:
  - abstraction quality
  - reuse efficiency
- next:
  - K/K6. Agent 记忆/Long-term distilled memory
  - K/K6. Agent 记忆/Memory injection / compaction

#### User memory

- pathKey: `K/K6. Agent 记忆/User memory`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K6-1y0kgxp-1.json`
- status: draft
- definition: User memory 保存跨任务和跨会话的用户偏好、角色、长期约束和个性化信息。
- importance: 它能显著降低重复确认成本，但也最容易引出隐私、删除和跨用户污染问题。
- minimum demo: 让 agent 记住用户偏好的输出格式，并验证其他用户不会继承这些信息。
- prerequisites:
  - I/I5. 记忆类型/用户长期记忆
  - J/J8. 安全与权限/Auth
- core metrics:
  - personalization lift
  - cross-user leak rate
- next:
  - K/K8. 人在回路/Manual correction
  - M/M7. 隐私与合规/Access control

#### Task memory

- pathKey: `K/K6. Agent 记忆/Task memory`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K6-1y0kgxp-1.json`
- status: draft
- definition: Task memory 保存当前任务实例的中间状态、已完成步骤、待执行计划和工具返回结果，是长任务连续推进的核心。
- importance: 没有 task memory，agent 一中断就几乎等于清零；有了它，恢复和人机协作才真正可行。
- minimum demo: 让 agent 在任务执行到一半时暂停，再从 task memory 恢复继续完成。
- prerequisites:
  - I/I5. 记忆类型/任务记忆
  - K/K5. 图式编排/Checkpoints
- core metrics:
  - resume success rate
  - task continuity
- next:
  - K/K5. 图式编排/Resumability
  - K/K6. Agent 记忆/Memory injection / compaction

#### Long-term distilled memory

- pathKey: `K/K6. Agent 记忆/Long-term distilled memory`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K6-1y0kgxp-1.json`
- status: draft
- definition: Long-term distilled memory 是从大量 episodic 或 task memory 中蒸馏出的长期稳定知识，用更低成本支持未来任务。
- importance: 它能防止长期记忆无节制增长，同时把经验转成更适合注入和检索的形态。
- minimum demo: 从一批历史任务里提炼长期经验摘要，并比较其对新任务的帮助是否优于直接回放原始历史。
- prerequisites:
  - K/K6. Agent 记忆/Episodic memory
  - K/K6. Agent 记忆/Semantic memory
- core metrics:
  - distillation quality
  - storage efficiency
- next:
  - K/K6. Agent 记忆/Memory injection / compaction
  - K/K10. Agent 形态分支/Knowledge agent

#### Memory injection / compaction

- pathKey: `K/K6. Agent 记忆/Memory injection / compaction`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K6-1y0kgxp-1.json`
- status: draft
- definition: Memory injection / compaction 处理哪些记忆该在当前步被注入、以什么粒度注入，以及如何在不丢关键信息的前提下压缩上下文。
- importance: 记忆命中本身不够，真正决定效果的是注入质量。注入过多会污染上下文，注入过少又会让记忆失去价值。
- minimum demo: 比较原样注入、摘要注入和结构化注入三种策略对长任务质量和成本的影响。
- prerequisites:
  - J/J4. 会话与状态/Context compaction
  - K/K6. Agent 记忆/Task memory
- core metrics:
  - context efficiency
  - memory hit usefulness
  - token overhead
- next:
  - K/K5. 图式编排/Resumability
  - K/K9. Agent 观测与控制/Tracing

### K7. 工具与外部连接

- pathKey: `K/K7. 工具与外部连接`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-K.json`
- status: draft
- definition: 工具与外部连接定义 agent 如何越过纯文本生成，去读文件、查知识、调用 API、操作系统、连接外部应用，并把这些能力放进统一可控的执行边界里。
- importance: 很多 agent 的真正能力上限不取决于模型本身，而取决于它能接入哪些外部能力、这些能力如何被授权、如何被观测，以及失败后如何恢复。
- minimum demo: 给一个最小 agent 提供 3 类能力：函数工具、只读知识检索和受控工作区执行；要求每次调用都能被记录、审批和回放。
- hardware budget: 学习和原型阶段主要依赖本地开发机、托管模型 API 和少量存储；成本重点在工具执行、网络访问、工作区隔离和审计，而不是训练算力。
- examples:
  - 用 function tools 调后端 API，完成查数据和写数据前的审批闭环。
  - 用 file/web/code 工具让 agent 搜索资料、读代码并把证据回写到上下文。
  - 通过 sandbox workspace 执行命令、产出 artifacts，并在人工 review 后回到同一工作区继续。
- pitfalls:
  - 把工具接通就等于可用，忽略了权限、审批、回放和失败恢复。
  - 让 agent 同时持有过大 scope 的外部权限，出错时影响面会迅速扩大。
  - 没有统一的工具记录和审计，最后只能看到结果，看不到执行路径。
- prerequisites:
  - J/J3. 工具调用
  - J/J8. 安全与权限
  - K/K1. Agent 的最小构成
- core metrics:
  - tool success rate
  - permission correctness
  - workspace recovery success
  - unsafe action block rate
- toolchain:
  - tool adapters
  - MCP client/server stack
  - sandbox workspace
  - connectors
  - trace and audit store
- failure signs:
  - 模型能规划步骤，但一到外部调用就失败或越权。
  - 副作用发生后没有足够的记录来解释是谁、为何、怎么做的。
  - 审批回来后上下文或工作区状态已经丢失。
- next:
  - K/K7. 工具与外部连接/Built-in tools
  - K/K7. 工具与外部连接/Function tools
  - K/K7. 工具与外部连接/File search / web search / code tools
  - K/K7. 工具与外部连接/MCP protocol stack
  - K/K7. 工具与外部连接/MCP servers
  - K/K7. 工具与外部连接/Sandbox workspace
  - K/K7. 工具与外部连接/Connectors
  - K/K7. 工具与外部连接/Computer / shell / browser actions

#### Built-in tools

- pathKey: `K/K7. 工具与外部连接/Built-in tools`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K7-1mb948-1.json`
- status: draft
- definition: Built-in tools 是由模型提供方或运行时直接内建的能力，例如内置搜索、文件处理、代码执行或系统工具接口。
- importance: 它们通常集成成本低、开箱即用，但可控性、可定制度和跨平台一致性往往弱于自定义工具。
- minimum demo: 接入一种内建工具能力，比较它与自定义 function tool 在可用性、可观测性和权限边界上的差异。
- prerequisites:
  - K/K7. 工具与外部连接
  - J/J3. 工具调用/Function calling
- core metrics:
  - tool availability
  - provider lock-in risk
- next:
  - K/K7. 工具与外部连接/Function tools
  - K/K7. 工具与外部连接/File search / web search / code tools

#### Function tools

- pathKey: `K/K7. 工具与外部连接/Function tools`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K7-1mb948-1.json`
- status: draft
- definition: Function tools 是应用方定义 schema、权限和执行逻辑的工具形式，模型只负责选择和产生命令参数。
- importance: 这是当前最通用也最可控的工具接入方式，适合把业务能力、安全边界和审计链路留在应用侧。
- minimum demo: 定义 2 到 3 个 function tools，并验证 schema 约束、参数校验、执行结果注入和失败重试都可观察。
- prerequisites:
  - J/J3. 工具调用/Tool schema design
  - J/J3. 工具调用/Function calling
- core metrics:
  - schema adherence
  - tool execution success
- next:
  - J/J3. 工具调用/Tool execution
  - K/K7. 工具与外部连接/MCP servers/Tools

#### File search / web search / code tools

- pathKey: `K/K7. 工具与外部连接/File search / web search / code tools`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K7-1mb948-1.json`
- status: draft
- definition: 这类工具把高频的外部读取任务抽象成专门接口，例如文件检索、网页检索、代码搜索和代码理解。
- importance: 它们直接决定 agent 获取上下文的效率和质量，是 research agent、knowledge agent 和 coding agent 的常见基础能力。
- minimum demo: 为同一任务接入 file search、web search 或 code search 中的一种，并比较命中质量和上下文噪声。
- prerequisites:
  - I/I3. RAG 管线/Retrieval
  - K/K7. 工具与外部连接
- core metrics:
  - retrieval precision
  - evidence usefulness
- next:
  - J/J9. 应用形态/Search / QA
  - J/J9. 应用形态/Coding assistant

#### MCP protocol stack

- pathKey: `K/K7. 工具与外部连接/MCP protocol stack`
- node type: `concept-group`
- detail source: `data/details/domain-K.json`
- status: draft
- definition: MCP protocol stack 关注 client 和 server 如何在统一协议下声明能力、做授权、选择 transport，并把 resources、prompts、tools 作为可发现对象暴露出来。
- importance: 它把“外部能力接入”从一堆临时约定提升为协议层能力，对跨工具、跨环境和跨组织协作尤其关键。
- minimum demo: 起一个最小 MCP server，暴露 resources 和 tools，再用 client 完成 initialize、capability negotiation、授权和一次调用。
- hardware budget: CPU 即可，重点在协议实现、权限边界和调试工具，而不是算力。
- prerequisites:
  - A/A2. 计算机基础/网络与协议/RPC / JSON-RPC
  - K/K7. 工具与外部连接
  - M/M5. 安全控制
- core metrics:
  - capability negotiation success
  - auth success rate
  - tool call latency
  - transport reliability
- toolchain:
  - MCP SDK / spec
  - JSON-RPC transport
  - server logs
  - protocol inspector
- failure signs:
  - client 能连上 transport，但拿不到能力声明
  - 授权通过后 resources / tools 仍然不可见
  - server 能返回结果，但调用方无法判断能力是否变化
- next:
  - K/K7. 工具与外部连接/MCP protocol stack/Base protocol（JSON-RPC）
  - K/K7. 工具与外部连接/MCP protocol stack/Lifecycle & capability negotiation
  - K/K7. 工具与外部连接/MCP protocol stack/Authorization
  - K/K7. 工具与外部连接/MCP protocol stack/Transports（stdio / HTTP）
  - K/K7. 工具与外部连接/MCP protocol stack/Roots / sampling
  - K/K7. 工具与外部连接/MCP protocol stack/Logging / argument completion

##### Base protocol（JSON-RPC）

- pathKey: `K/K7. 工具与外部连接/MCP protocol stack/Base protocol（JSON-RPC）`
- node type: `concept`
- detail source: `data/details/leaves-K-K7-didu6d-1.json`
- status: draft
- definition: Base protocol（JSON-RPC）是 MCP 的消息传输基座，规定请求、响应、通知和错误对象的基本形态。
- importance: 不理解这层，就很难定位 transport、能力协商和 tool 调用里哪些问题是协议层错误，哪些是业务层错误。
- minimum demo: 抓一段 MCP 初始化与工具调用流量，区分 request、response、notification 和 error 的结构。
- prerequisites:
  - A/A2. 计算机基础/网络与协议/RPC / JSON-RPC
  - K/K7. 工具与外部连接/MCP protocol stack
- core metrics:
  - protocol parse correctness
  - error envelope quality
- next:
  - K/K7. 工具与外部连接/MCP protocol stack/Lifecycle & capability negotiation
  - K/K7. 工具与外部连接/MCP protocol stack/Transports（stdio / HTTP）

##### Lifecycle & capability negotiation

- pathKey: `K/K7. 工具与外部连接/MCP protocol stack/Lifecycle & capability negotiation`
- node type: `concept`
- detail source: `data/details/leaves-K-K7-didu6d-1.json`
- status: draft
- definition: Lifecycle & capability negotiation 决定 client 和 server 在连接建立后如何宣布自己支持的能力、版本和可调用对象，以及何时刷新这些能力。
- importance: 这一步是 MCP 和“裸 JSON-RPC 工具调用”最大的差别之一；没有能力协商，client 无法可靠发现 resources、prompts、tools 与扩展能力。
- minimum demo: 让一个最小 client 连接 server，打印 initialize / capability negotiation 结果，并在能力变更后重新同步一次。
- hardware budget: CPU 即可。
- prerequisites:
  - K/K7. 工具与外部连接/MCP protocol stack
  - K/K7. 工具与外部连接/MCP protocol stack/Base protocol（JSON-RPC）
- core metrics:
  - initialize success rate
  - capability sync correctness
  - reconnect recovery time
- toolchain:
  - MCP SDK
  - JSON-RPC inspector
  - server/client debug logs
- failure signs:
  - transport 正常但 client 永远看不到新加的 tools/resources
  - server 重启后 client 状态没刷新，继续拿旧能力集执行
- next:
  - K/K7. 工具与外部连接/MCP servers
  - K/K7. 工具与外部连接/MCP protocol stack/Authorization

##### Authorization

- pathKey: `K/K7. 工具与外部连接/MCP protocol stack/Authorization`
- node type: `concept`
- detail source: `data/details/leaves-K-K7-didu6d-1.json`
- status: draft
- definition: Authorization 处理 client 连接 server 时的身份、权限、scope 和可见能力边界，不是简单的“能不能连上”。
- importance: MCP 一旦接到真实系统，授权层就决定了资源、提示和工具能否按身份和租户被隔离暴露。
- minimum demo: 准备两个不同 scope 的 client，验证它们对同一 server 可见的 tools/resources 集不同。
- prerequisites:
  - J/J8. 安全与权限/Auth
  - J/J8. 安全与权限/Permission scopes
  - K/K7. 工具与外部连接/MCP protocol stack/Lifecycle & capability negotiation
- core metrics:
  - auth success rate
  - scope enforcement rate
- next:
  - K/K7. 工具与外部连接/MCP servers/Tools
  - K/K7. 工具与外部连接/Connectors

##### Transports（stdio / HTTP）

- pathKey: `K/K7. 工具与外部连接/MCP protocol stack/Transports（stdio / HTTP）`
- node type: `concept`
- detail source: `data/details/leaves-K-K7-didu6d-1.json`
- status: draft
- definition: Transports（stdio / HTTP）定义 MCP 消息如何在进程间或网络间传输，影响部署形态、调试方式和可靠性。
- importance: 很多连接问题其实不是协议对象错，而是 transport 选择与运行环境不匹配。
- minimum demo: 分别用 stdio 和 HTTP 跑通一个最小 server，比较本地集成和远程部署的差异。
- prerequisites:
  - K/K7. 工具与外部连接/MCP protocol stack/Base protocol（JSON-RPC）
- core metrics:
  - transport stability
  - reconnect success rate
- next:
  - K/K7. 工具与外部连接/MCP protocol stack/Logging / argument completion
  - K/K7. 工具与外部连接/MCP protocol stack/Roots / sampling

##### Roots / sampling

- pathKey: `K/K7. 工具与外部连接/MCP protocol stack/Roots / sampling`
- node type: `concept`
- detail source: `data/details/leaves-K-K7-didu6d-1.json`
- status: draft
- definition: Roots / sampling 处理 client 暴露哪些工作区根目录或采样能力给 server，以及 server 如何在这些边界内工作。
- importance: 这层直接关系到 server 能看到什么、能在哪些目录操作，以及是否把运行边界显式化。
- minimum demo: 为一个 MCP server 配置受限 roots，并验证它只能访问允许范围内的文件或上下文。
- prerequisites:
  - K/K7. 工具与外部连接/MCP protocol stack/Lifecycle & capability negotiation
  - K/K7. 工具与外部连接/Sandbox workspace/Workspace filesystem
- core metrics:
  - root boundary correctness
  - sampling usefulness
- next:
  - K/K7. 工具与外部连接/Sandbox workspace
  - M/M5. 安全控制/Sandboxing

##### Logging / argument completion

- pathKey: `K/K7. 工具与外部连接/MCP protocol stack/Logging / argument completion`
- node type: `concept`
- detail source: `data/details/leaves-K-K7-didu6d-1.json`
- status: draft
- definition: Logging / argument completion 关注协议层如何暴露调试信息、执行日志和参数补全能力，帮助 client 更稳定地消费 server。
- importance: 协议接入最难的往往不是‘能不能调’，而是出问题时有没有足够的可观测性和开发体验支持。
- minimum demo: 让 client 读取 server 日志和参数补全信息，并检查这些信息能否帮助定位调用失败。
- prerequisites:
  - J/J7. 工程可靠性/Observability hooks
  - K/K7. 工具与外部连接/MCP protocol stack/Transports（stdio / HTTP）
- core metrics:
  - debuggability
  - argument completion usefulness
- next:
  - K/K9. Agent 观测与控制/Tracing
  - K/K7. 工具与外部连接/MCP servers/Tools

#### MCP servers

- pathKey: `K/K7. 工具与外部连接/MCP servers`
- node type: `concept-group`
- detail source: `data/details/domain-K.json`
- status: draft
- definition: MCP servers 是按协议暴露资源、提示模板和工具的服务端实体，回答的是“外部能力以什么对象模型被发现和调用”。
- importance: 理解 server 层语义，才能把只读上下文、可复用提示和可执行动作分开设计，而不是把所有东西都塞成工具调用。
- minimum demo: 做一个最小 MCP server，同时暴露一个 resource、一个 prompt 和一个 tool，再让 client 区分三者的消费方式。
- hardware budget: 通常是 CPU 和网络 I/O 场景；复杂度主要在对象建模、权限和生命周期，而不是硬件。
- prerequisites:
  - K/K7. 工具与外部连接/MCP protocol stack
  - K/K7. 工具与外部连接
- core metrics:
  - object discovery success
  - capability separation quality
- toolchain:
  - MCP server SDK
  - resource registry
  - prompt templates
  - tool executor
- failure signs:
  - 本应做成 resource 的只读上下文被硬塞成工具调用。
  - prompt、resource、tool 的边界不清，client 侧难以稳定消费。
- next:
  - K/K7. 工具与外部连接/MCP servers/Resources
  - K/K7. 工具与外部连接/MCP servers/Prompts
  - K/K7. 工具与外部连接/MCP servers/Tools

##### Resources

- pathKey: `K/K7. 工具与外部连接/MCP servers/Resources`
- node type: `concept`
- detail source: `data/details/leaves-K-K7-1m4qobb-1.json`
- status: draft
- definition: Resources 是 MCP server 暴露的只读上下文对象，适合承载文件、文档、结构化数据和其他可被模型读取的内容。
- importance: 把只读上下文做成 resources，能让 client 明确地区分“读取知识”和“执行动作”，减少不必要的工具调用。
- minimum demo: 在一个 MCP server 里暴露 1 到 2 个 resources，并让 client 读取内容作为模型上下文输入。
- prerequisites:
  - K/K7. 工具与外部连接/MCP servers
  - K/K7. 工具与外部连接/MCP protocol stack/Lifecycle & capability negotiation
- core metrics:
  - resource readability
  - discovery success
- next:
  - I/I2. 知识库构建
  - K/K10. Agent 形态分支/Knowledge agent

##### Prompts

- pathKey: `K/K7. 工具与外部连接/MCP servers/Prompts`
- node type: `concept`
- detail source: `data/details/leaves-K-K7-1m4qobb-1.json`
- status: draft
- definition: Prompts 是 server 侧发布的可复用提示模板或提示构造能力，用来统一某类任务的输入骨架。
- importance: 它适合沉淀组织级模板，但不能替代应用侧状态管理；否则很容易把动态运行逻辑塞进静态模板。
- minimum demo: 让 MCP server 暴露一个 prompt 模板，client 读取后按当前任务变量填充并执行。
- prerequisites:
  - K/K7. 工具与外部连接/MCP servers
  - J/J1. 模型接口层/Prompt composition
- core metrics:
  - prompt reuse rate
  - template drift
- next:
  - J/J1. 模型接口层/System / user / tool messages
  - K/K7. 工具与外部连接/MCP servers/Tools

##### Tools

- pathKey: `K/K7. 工具与外部连接/MCP servers/Tools`
- node type: `concept`
- detail source: `data/details/leaves-K-K7-1m4qobb-1.json`
- status: draft
- definition: MCP server 里的 tools 是可被 client 调用的执行能力对象，通常带参数 schema、权限边界和返回结果结构。
- importance: 它让工具调用在统一协议下被发现和消费，适合跨应用共享能力，同时保留服务端执行控制。
- minimum demo: 暴露一个带 schema 的 MCP tool，并验证 client 能发现、调用、处理结果和错误。
- prerequisites:
  - K/K7. 工具与外部连接/MCP protocol stack/Authorization
  - J/J3. 工具调用/Tool schema design
- core metrics:
  - tool discoverability
  - protocol-level execution success
- next:
  - K/K7. 工具与外部连接/Function tools
  - K/K7. 工具与外部连接/Connectors

#### Sandbox workspace

- pathKey: `K/K7. 工具与外部连接/Sandbox workspace`
- node type: `concept-group`
- detail source: `data/details/domain-K.json`
- status: draft
- definition: Sandbox workspace 是 Agent 运行时的一等资源：文件系统、命令、包、产物、端口和预览能力都应该有独立边界，而不是散落在若干工具定义里。
- importance: 对 coding agent、computer-use agent、workflow agent 来说，workspace 决定了状态是否可恢复、结果是否可审计、以及审批后能否回到同一上下文继续执行。
- minimum demo: 做一个最小工作区：能写文件、执行命令、产出 artifacts，并在人工审批后恢复到同一目录状态继续运行。
- hardware budget: 主要吃磁盘、内存和运行时隔离成本；coding agent 在本地开发机即可启动。
- prerequisites:
  - K/K1. Agent 的最小构成
  - K/K7. 工具与外部连接/MCP protocol stack
  - M/M5. 安全控制
- core metrics:
  - workspace recovery success
  - artifact integrity
  - sandbox escape incidents
- toolchain:
  - filesystem sandbox
  - shell runtime
  - artifact store
  - preview server
- failure signs:
  - 审批回来后 agent 丢失上下文或找不到之前的文件
  - 命令执行结果和产物没有稳定落盘
  - 工作区隔离不完整，任务之间互相污染
- next:
  - K/K7. 工具与外部连接/Sandbox workspace/Workspace filesystem
  - K/K7. 工具与外部连接/Sandbox workspace/Commands / packages
  - K/K7. 工具与外部连接/Sandbox workspace/Artifacts
  - K/K7. 工具与外部连接/Sandbox workspace/Ports / preview
  - K/K7. 工具与外部连接/Sandbox workspace/Resume same workspace after review

##### Workspace filesystem

- pathKey: `K/K7. 工具与外部连接/Sandbox workspace/Workspace filesystem`
- node type: `concept`
- detail source: `data/details/leaves-K-K7-154n809-1.json`
- status: draft
- definition: Workspace filesystem 是 agent 在受控目录里读写文件、目录和缓存的基础边界，决定状态是否能稳定落盘。
- importance: 没有稳定文件系统边界，coding agent 和文档型 agent 很难做到可恢复、可审计和不互相污染。
- minimum demo: 给 agent 一个独立工作目录，让它读写文件并在下一步仍能从同一目录继续。
- prerequisites:
  - K/K7. 工具与外部连接/Sandbox workspace
  - J/J8. 安全与权限/Isolation boundaries
- core metrics:
  - filesystem isolation quality
  - state persistence success
- next:
  - K/K7. 工具与外部连接/Sandbox workspace/Commands / packages
  - K/K7. 工具与外部连接/Sandbox workspace/Artifacts

##### Commands / packages

- pathKey: `K/K7. 工具与外部连接/Sandbox workspace/Commands / packages`
- node type: `concept`
- detail source: `data/details/leaves-K-K7-154n809-1.json`
- status: draft
- definition: Commands / packages 关注 agent 在工作区中能执行哪些命令、装哪些依赖、这些动作如何被限制和记录。
- importance: 很多能力提升都来自命令执行和依赖安装，但这也是最容易把环境污染、成本失控和越权风险一起放大的地方。
- minimum demo: 允许 agent 执行受限命令，并验证命令历史、退出状态和包安装动作都可追踪。
- prerequisites:
  - K/K7. 工具与外部连接/Sandbox workspace/Workspace filesystem
  - K/K8. 人在回路/Approval before side effects
- core metrics:
  - command success rate
  - environment drift
- next:
  - K/K7. 工具与外部连接/Sandbox workspace/Artifacts
  - K/K7. 工具与外部连接/Computer / shell / browser actions

##### Artifacts

- pathKey: `K/K7. 工具与外部连接/Sandbox workspace/Artifacts`
- node type: `concept`
- detail source: `data/details/leaves-K-K7-154n809-1.json`
- status: draft
- definition: Artifacts 是 agent 运行过程中产出的文件、报告、截图、补丁和其他可交付对象，需要被明确保存和引用。
- importance: 长任务是否真正产生产物、产物是否可查看和可复核，往往比模型对话本身更接近业务价值。
- minimum demo: 让 agent 在一次任务里生成一个 artifacts 列表，并能从 UI 或审计记录中回看这些文件。
- prerequisites:
  - K/K7. 工具与外部连接/Sandbox workspace/Workspace filesystem
  - K/K9. Agent 观测与控制/Tracing
- core metrics:
  - artifact integrity
  - artifact retrieval success
- next:
  - K/K7. 工具与外部连接/Sandbox workspace/Ports / preview
  - K/K9. Agent 观测与控制/Auditability

##### Ports / preview

- pathKey: `K/K7. 工具与外部连接/Sandbox workspace/Ports / preview`
- node type: `concept`
- detail source: `data/details/leaves-K-K7-154n809-1.json`
- status: draft
- definition: Ports / preview 让 agent 能启动本地服务、打开预览地址并把可视结果暴露给人或其他评测组件。
- importance: 很多前端、应用或文档任务只有在预览层面才能真正验收，不能只看文本输出。
- minimum demo: 让 agent 启动一个本地预览端口，并在 trace 里记录访问地址和预览结果。
- prerequisites:
  - K/K7. 工具与外部连接/Sandbox workspace/Artifacts
  - K/K7. 工具与外部连接/Sandbox workspace/Commands / packages
- core metrics:
  - preview availability
  - port stability
- next:
  - J/J9. 应用形态/Coding assistant
  - M/M2. 应用级评测/UX consistency

##### Resume same workspace after review

- pathKey: `K/K7. 工具与外部连接/Sandbox workspace/Resume same workspace after review`
- node type: `concept`
- detail source: `data/details/leaves-K-K7-154n809-1.json`
- status: draft
- definition: 这项能力指任务在人工 review、审批或暂停之后，能回到同一工作区状态继续执行，而不是重新建立环境。
- importance: 它是长任务 agent 真正可用的关键分界点；没有这项能力，人机协作几乎都会退化成重复劳动。
- minimum demo: 让 agent 在 review 前保存工作区状态，review 后恢复并继续完成同一个任务。
- prerequisites:
  - K/K5. 图式编排/Resumability
  - K/K8. 人在回路/HITL checkpoints
  - K/K7. 工具与外部连接/Sandbox workspace/Workspace filesystem
- core metrics:
  - resume success rate
  - workspace continuity
- next:
  - K/K9. Agent 观测与控制/Auditability
  - K/K10. Agent 形态分支/Coding agent

#### Connectors

- pathKey: `K/K7. 工具与外部连接/Connectors`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K7-1mb948-1.json`
- status: draft
- definition: Connectors 把外部应用、数据源和 SaaS 系统包装成可访问能力，使 agent 能在统一权限边界下读写外部世界。
- importance: 很多真实业务价值来自系统连接，而不是模型本身；但 connector 也会把身份、权限和审计问题一起带进来。
- minimum demo: 接一个只读 connector 和一个带副作用 connector，验证身份传播、scope 控制和审批路径。
- prerequisites:
  - J/J8. 安全与权限/Auth
  - J/J8. 安全与权限/Permission scopes
- core metrics:
  - connector auth success
  - scope correctness
- next:
  - K/K7. 工具与外部连接/MCP protocol stack/Authorization
  - K/K10. Agent 形态分支/Workflow automation agent

#### Computer / shell / browser actions

- pathKey: `K/K7. 工具与外部连接/Computer / shell / browser actions`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K7-1mb948-1.json`
- status: draft
- definition: 这类动作让 agent 直接操作 shell、浏览器或桌面环境，拥有最强的环境交互能力，也带来最高的副作用风险。
- importance: 它是 coding agent 和 computer-use agent 的关键底座，但必须和隔离、审批、回放能力一起设计。
- minimum demo: 让 agent 在受控环境里执行读取、点击或命令动作，并记录每次动作及其结果。
- prerequisites:
  - K/K7. 工具与外部连接/Sandbox workspace
  - J/J8. 安全与权限/Isolation boundaries
  - K/K8. 人在回路/Approval before side effects
- core metrics:
  - action success rate
  - unsafe action block rate
- next:
  - K/K10. Agent 形态分支/Coding agent
  - K/K10. Agent 形态分支/Computer-use agent

### K8. 人在回路

- pathKey: `K/K8. 人在回路`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-K.json`
- status: draft
- definition: 人在回路关注人在 agent 系统中以什么粒度、什么时机、什么权限参与执行，包括审批、升级、复核、人工纠偏和中途接管。
- importance: 越接近真实副作用和高风险环境，HITL 就越不是可选增强，而是系统边界的一部分。没有它，agent 的能力越强，风险也越大。
- minimum demo: 在一个有副作用工具的 agent 流程里加入审批、拒绝、修改和人工接管四条路径，并验证状态能够继续推进。
- hardware budget: 主要消耗在人审流程、通知、队列和审计，而不是模型算力。设计不当时，人工介入会迅速成为吞吐瓶颈。
- examples:
  - 执行 shell 或写数据库前先请求审批。
  - 不确定度过高时升级到人工 review 队列。
  - 人工可直接覆盖 agent 产物并让流程继续。
- pitfalls:
  - 把审批做成只读提示，实际不能阻断执行。
  - 人工介入后状态丢失，导致必须从头来。
  - 没有定义什么场景必须升级，结果 review 队列被噪声淹没。
- prerequisites:
  - J/J8. 安全与权限
  - J/J9. 应用形态/Workflow assistant
  - K/K1. Agent 的最小构成/Human review
- core metrics:
  - approval correctness
  - escalation precision
  - manual correction success
  - human latency
- toolchain:
  - approval UI
  - review queue
  - audit log
  - resume / override controls
- failure signs:
  - 需要审批时系统直接执行了。
  - 人工修改后 agent 继续沿用旧状态。
  - review 队列没有优先级和上下文，人工无法高效接手。
- next:
  - K/K8. 人在回路/Approval before side effects
  - K/K8. 人在回路/Escalation
  - K/K8. 人在回路/Review queues
  - K/K8. 人在回路/Human override
  - K/K8. 人在回路/Manual correction
  - K/K8. 人在回路/HITL checkpoints

#### Approval before side effects

- pathKey: `K/K8. 人在回路/Approval before side effects`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K8-170zmnz-1.json`
- status: draft
- definition: Approval before side effects 要求任何会改变外部世界的动作在执行前都先被人批准，而不是事后补日志。
- importance: 这是把 agent 能力安全接入真实系统的第一道硬边界之一。
- minimum demo: 在写数据库或执行命令前加入审批节点，验证拒绝和通过两条路径都能正常继续。
- prerequisites:
  - J/J8. 安全与权限/Sensitive action approval
  - K/K1. Agent 的最小构成/Human review
- core metrics:
  - approval correctness
  - blocked side-effect rate
- next:
  - K/K8. 人在回路/Escalation
  - K/K8. 人在回路/HITL checkpoints

#### Escalation

- pathKey: `K/K8. 人在回路/Escalation`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K8-170zmnz-1.json`
- status: draft
- definition: Escalation 指 agent 在不确定、失败或高风险场景下主动升级给人工，而不是硬撑着继续执行。
- importance: 没有升级路径，agent 只会在自己最不该自主的时候继续自主。
- minimum demo: 构造低置信度或权限不足场景，验证 agent 会进入人工处理通道而不是胡乱输出。
- prerequisites:
  - K/K8. 人在回路/Approval before side effects
  - J/J7. 工程可靠性/Error classes
- core metrics:
  - escalation precision
  - missed escalation rate
- next:
  - K/K8. 人在回路/Review queues
  - K/K8. 人在回路/Human override

#### Review queues

- pathKey: `K/K8. 人在回路/Review queues`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K8-170zmnz-1.json`
- status: draft
- definition: Review queues 是把需人工处理的任务按优先级、风险和状态组织起来，避免人工介入变成散落消息和临时沟通。
- importance: 没有队列，HITL 机制再多也很难在真实团队中稳定运转。
- minimum demo: 把审批和升级请求统一进入 review queue，并验证排序、领取和回填状态。
- prerequisites:
  - K/K8. 人在回路/Escalation
  - M/M2. 应用级评测/Failure recovery
- core metrics:
  - queue turnaround time
  - review completion rate
- next:
  - K/K8. 人在回路/Manual correction
  - K/K8. 人在回路/Human override

#### Human override

- pathKey: `K/K8. 人在回路/Human override`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K8-170zmnz-1.json`
- status: draft
- definition: Human override 指人工可以直接改变 agent 当前决策、状态或输出，并让流程在新状态下继续执行。
- importance: 如果人工只能‘批准或拒绝’，但不能真正覆盖错误状态，许多长任务就无法被平滑救回。
- minimum demo: 让人工修改一条错误计划，再让 agent 从修正后的状态继续执行。
- prerequisites:
  - K/K8. 人在回路/Escalation
  - K/K6. Agent 记忆/Task memory
- core metrics:
  - override success rate
  - state continuity after override
- next:
  - K/K8. 人在回路/Manual correction
  - K/K8. 人在回路/HITL checkpoints

#### Manual correction

- pathKey: `K/K8. 人在回路/Manual correction`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K8-170zmnz-1.json`
- status: draft
- definition: Manual correction 允许人工对中间产物、参数或最终结果做细粒度修正，再把修正结果重新注入系统。
- importance: 很多场景不需要整条链路退回人工，只需要对某个局部结果做精修，这比完全重跑更高效。
- minimum demo: 对一个工具参数草案做人类修正，再验证 agent 是否能使用修正后的版本继续执行。
- prerequisites:
  - K/K8. 人在回路/Human override
  - J/J2. 结构化输出/Validation
- core metrics:
  - correction usefulness
  - rework reduction
- next:
  - K/K8. 人在回路/HITL checkpoints
  - K/K6. Agent 记忆/User memory

#### HITL checkpoints

- pathKey: `K/K8. 人在回路/HITL checkpoints`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K8-170zmnz-1.json`
- status: draft
- definition: HITL checkpoints 是在图式执行中预先定义必须停下来等人的节点，而不是等系统出问题后再临时人工插手。
- importance: 它能把人工介入常态化、结构化，从而在高风险场景中稳定控制节奏和责任边界。
- minimum demo: 在长任务图中设置两个固定人工 checkpoint，验证流程能稳定暂停、恢复和审计。
- prerequisites:
  - K/K5. 图式编排/Checkpoints
  - K/K8. 人在回路/Approval before side effects
- core metrics:
  - checkpoint compliance
  - resume success rate
- next:
  - K/K9. Agent 观测与控制/Auditability
  - J/J9. 应用形态/Workflow assistant

### K9. Agent 观测与控制

- pathKey: `K/K9. Agent 观测与控制`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-K.json`
- status: draft
- definition: Agent 观测与控制关注如何记录并查看 agent 的每一步：trace、step log、工具记录、handoff、guardrail 命中和审计链路，让系统从黑盒变成可回放、可调参、可治理的运行体。
- importance: Agent 如果没有观测面，出了问题就只能靠猜；一旦任务跨多步、多工具或多 agent，这种黑盒性会迅速让系统不可维护。
- minimum demo: 为一次多步 agent 任务记录完整 trace，并能从 request ID 追到每一步、每次工具调用、每次 handoff 和最终结果。
- hardware budget: 这层主要增加日志、trace 存储和可视化成本，而不是推理算力。高并发场景下，trace 体积和保留策略会成为主要治理问题。
- examples:
  - 能回放 agent 每一步做了什么、看到了什么、为什么继续下一步。
  - 工具失败和 guardrail 命中都能在 trace 中被显式看到。
  - 多 agent handoff 的责任链完整留痕。
- pitfalls:
  - 只有最终答案日志，没有过程记录。
  - step log 太粗，无法支持定位和评测；太细，又没有聚合视图。
  - 审计要求和开发调试日志混在一起，既不安全也不好用。
- prerequisites:
  - J/J7. 工程可靠性/Observability hooks
  - M/M3. Agent 级评测
- core metrics:
  - trace completeness
  - debug turnaround time
  - audit coverage
- toolchain:
  - trace store
  - step log viewer
  - audit pipeline
  - metrics and alerts
- failure signs:
  - 同一任务失败两次，但你看不出两次失败是不是同一类原因。
  - handoff、guardrail 和工具事件各记各的，无法统一关联。
- next:
  - K/K9. Agent 观测与控制/Tracing
  - K/K9. Agent 观测与控制/Step logs
  - K/K9. Agent 观测与控制/Tool-call records
  - K/K9. Agent 观测与控制/Handoff records
  - K/K9. Agent 观测与控制/Guardrail results
  - K/K9. Agent 观测与控制/Auditability

#### Tracing

- pathKey: `K/K9. Agent 观测与控制/Tracing`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K9-1en8h9o-1.json`
- status: draft
- definition: Tracing 是把 agent 执行过程表示成可查询、可关联、可回放的结构化轨迹，而不是零散日志。
- importance: 多步 agent 没有 trace，最终只会留下一个答案和一堆猜测，几乎无法定位问题究竟出在模型、工具、路由还是状态。
- minimum demo: 让一次 agent 执行生成统一 trace id，并把每步输入、输出、工具事件和状态变化挂到同一条轨迹上。
- prerequisites:
  - J/J7. 工程可靠性/Observability hooks
  - M/M3. Agent 级评测/Trace schema
- core metrics:
  - trace completeness
  - event correlation quality
- next:
  - K/K9. Agent 观测与控制/Step logs
  - K/K9. Agent 观测与控制/Tool-call records
  - M/M3. Agent 级评测/Trace grading

#### Step logs

- pathKey: `K/K9. Agent 观测与控制/Step logs`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K9-1en8h9o-1.json`
- status: draft
- definition: Step logs 记录 agent 每一步的目标、决策、结果和状态变化，是对高层 trace 的逐步展开。
- importance: 它决定人和评测器能否看清 agent 是否真的推进了任务，而不是只在表面上显得忙碌。
- minimum demo: 让 agent 在 3 到 6 步任务中输出结构化 step log，至少包含 step type、输入、结果和下一步理由。
- prerequisites:
  - K/K9. Agent 观测与控制/Tracing
  - K/K3. 单 Agent 模式/ReAct / reason-act loop
- core metrics:
  - useful step ratio
  - step explainability
- next:
  - K/K9. Agent 观测与控制/Tool-call records
  - K/K9. Agent 观测与控制/Guardrail results

#### Tool-call records

- pathKey: `K/K9. Agent 观测与控制/Tool-call records`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K9-1en8h9o-1.json`
- status: draft
- definition: Tool-call records 记录工具名称、参数、执行结果、失败类型和重试情况，是副作用和外部依赖的核心证据。
- importance: 很多 agent 失败并不是 reasoning 错，而是工具用错、参数错或结果解释错；没有工具记录，这类问题很难被识别。
- minimum demo: 为每次工具调用保存 schema 校验结果、执行耗时、返回摘要和错误分类，并与对应 step 关联。
- prerequisites:
  - J/J3. 工具调用/Tool execution
  - K/K9. Agent 观测与控制/Step logs
- core metrics:
  - tool record completeness
  - tool failure diagnosability
- next:
  - K/K9. Agent 观测与控制/Guardrail results
  - K/K9. Agent 观测与控制/Auditability

#### Handoff records

- pathKey: `K/K9. Agent 观测与控制/Handoff records`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K9-1en8h9o-1.json`
- status: draft
- definition: Handoff records 记录任务在 agent 之间或在人机之间交接时，传递了什么状态、责任和待办。
- importance: 多 agent 系统最常见的问题不是单点能力不够，而是交接信息缺失、重复劳动和责任不清。
- minimum demo: 让一次多 agent 任务在 handoff 时输出接手方、交接摘要、未完成事项和引用的上游证据。
- prerequisites:
  - K/K4. 多 Agent 模式/Handoff
  - K/K9. Agent 观测与控制/Tracing
- core metrics:
  - handoff completeness
  - context continuity
- next:
  - K/K9. Agent 观测与控制/Auditability
  - M/M3. Agent 级评测/Handoff correctness

#### Guardrail results

- pathKey: `K/K9. Agent 观测与控制/Guardrail results`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K9-1en8h9o-1.json`
- status: draft
- definition: Guardrail results 记录输入、输出、工具和策略守护是否命中、为何放行或拦截，以及是否触发人工介入。
- importance: 如果 guardrail 只在系统里静默生效，事后很难知道它究竟在保护系统还是误伤正常任务。
- minimum demo: 对一次执行记录所有 guardrail check 的结果、命中规则、决策和后续处理动作。
- prerequisites:
  - M/M6. Guardrails/Tool guardrails
  - M/M6. Guardrails/Policy guardrails
  - K/K9. Agent 观测与控制/Tool-call records
- core metrics:
  - guardrail hit explainability
  - false block rate
- next:
  - K/K9. Agent 观测与控制/Auditability
  - M/M3. Agent 级评测/Policy compliance

#### Auditability

- pathKey: `K/K9. Agent 观测与控制/Auditability`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K9-1en8h9o-1.json`
- status: draft
- definition: Auditability 指系统是否能在事后重建一次任务的关键决策、工具行为、审批痕迹和最终副作用。
- importance: 一旦 agent 开始操作真实系统，审计能力就不再是可选项，而是上线边界的一部分。
- minimum demo: 随机抽取一次执行，要求仅凭审计材料就能回答谁触发、做了什么、为何放行、影响了什么。
- prerequisites:
  - K/K9. Agent 观测与控制/Handoff records
  - K/K9. Agent 观测与控制/Guardrail results
  - J/J8. 安全与权限/Sensitive action approval
- core metrics:
  - audit reconstruction success
  - policy evidence completeness
- next:
  - M/M3. Agent 级评测/Trace grading
  - M/M3. Agent 级评测/Failure taxonomy

### K10. Agent 形态分支

- pathKey: `K/K10. Agent 形态分支`
- node type: `module`
- stage: 04 应用与 Agent
- detail source: `data/details/domain-K.json`
- status: draft
- definition: Agent 形态分支是把共通的 agent 基础能力映射到不同任务形态上，例如知识、研究、编码、工作流、语音、电脑操作和多 agent 组织。它关注的不是“名字不同”，而是不同形态在工具、状态、评测和风险上的差异。
- importance: 不同 agent 形态共享一套基础件，但成功标准完全不同。把它们混为一谈，会导致错误的评测、错误的权限边界和错误的产品形态设计。
- minimum demo: 用同一套基础 runtime 分别做 knowledge、coding 和 workflow 三类 agent 原型，比较它们在工具、状态和评测侧的差异。
- hardware budget: 形态差异主要放大的是工具成本、交互成本和运行时复杂度，而不是单纯的模型参数规模。比如 voice 和 computer-use 往往先受实时链路和环境控制约束。 
- examples:
  - 知识型 agent 更依赖检索和引用。
  - coding agent 更依赖工作区、测试和 diff 回显。
  - workflow automation agent 更依赖审批、幂等和副作用控制。
  - computer-use agent 更依赖环境感知和动作安全。
- pitfalls:
  - 拿同一套 prompt 和评测去衡量所有 agent 形态。
  - 忽略形态差异导致工具和权限边界错位。
  - 把 research agent、knowledge agent 和 search / QA 混成同一种产品。
- prerequisites:
  - K/K1. Agent 的最小构成
  - J/J9. 应用形态
  - K/K7. 工具与外部连接
- core metrics:
  - task-form fit
  - shape-specific success rate
  - risk alignment
- toolchain:
  - agent runtime
  - shape-specific tools
  - trace and eval harness
- failure signs:
  - 不同形态的 agent 用起来都像同一个聊天机器人。
  - 工具和评测侧没有跟着形态变化而变化。
- next:
  - K/K10. Agent 形态分支/Knowledge agent
  - K/K10. Agent 形态分支/Research agent
  - K/K10. Agent 形态分支/Coding agent
  - K/K10. Agent 形态分支/Workflow automation agent
  - K/K10. Agent 形态分支/Voice agent
  - K/K10. Agent 形态分支/Computer-use agent
  - K/K10. Agent 形态分支/Multi-agent organization

#### Knowledge agent

- pathKey: `K/K10. Agent 形态分支/Knowledge agent`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K10-1yxw20i-1.json`
- status: draft
- definition: Knowledge agent 以检索、知识组织、引用和记忆整合为中心，目标是把外部知识转成稳定可用的上下文。
- importance: 它是很多企业 agent 的基础形态，因为大多数任务首先不是行动，而是找到对的知识并保持来源可信。
- minimum demo: 做一个能检索知识库、聚合证据、输出带引用答案并把结果沉淀进记忆层的最小 knowledge agent。
- prerequisites:
  - I/I3. RAG 管线/Retrieval
  - K/K6. Agent 记忆/Long-term distilled memory
- core metrics:
  - knowledge hit quality
  - citation trustworthiness
- next:
  - J/J9. 应用形态/Search / QA
  - K/K10. Agent 形态分支/Research agent

#### Research agent

- pathKey: `K/K10. Agent 形态分支/Research agent`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K10-1yxw20i-1.json`
- status: draft
- definition: Research agent 面向开放问题探索，会主动拆问题、继续检索、比较来源并在证据不足时保持不确定性。
- importance: 它最能体现 agent 相比单轮问答的价值，因为研究任务往往路径不定、证据分散且需要多轮修正。
- minimum demo: 让 agent 围绕一个开放问题执行“拆问题 → 检索 → 对比来源 → 汇总结论”，并给出证据链。
- prerequisites:
  - I/I3. RAG 管线/Query rewrite
  - K/K3. 单 Agent 模式/Retrieval-first agent
- core metrics:
  - evidence coverage
  - research loop usefulness
- next:
  - J/J9. 应用形态/Search / QA
  - K/K4. 多 Agent 模式/Reviewer / critic / verifier

#### Coding agent

- pathKey: `K/K10. Agent 形态分支/Coding agent`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K10-1yxw20i-1.json`
- status: draft
- definition: Coding agent 把模型放进代码工作区、命令执行、测试验证和补丁生成闭环里，强调可执行产物而不是只给建议。
- importance: 这是当前最容易观察 agent 能力上限和风险边界的形态之一，因为输入、工具和验收标准相对清晰。
- minimum demo: 让 coding agent 在受控仓库中完成读文件、修改代码、运行验证和输出 diff 的最小闭环。
- prerequisites:
  - J/J9. 应用形态/Coding assistant
  - K/K7. 工具与外部连接/Computer / shell / browser actions
  - K/K8. 人在回路/Approval before side effects
- core metrics:
  - patch acceptance rate
  - verification pass rate
  - unsafe action block rate
- next:
  - K/K9. Agent 观测与控制/Tracing
  - M/M3. Agent 级评测/Tool selection correctness

#### Workflow automation agent

- pathKey: `K/K10. Agent 形态分支/Workflow automation agent`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K10-1yxw20i-1.json`
- status: draft
- definition: Workflow automation agent 面向业务系统中的多步状态推进、审批和副作用执行，重点是稳定推进而不是开放探索。
- importance: 很多真实落地都属于这类形态，因为它直接连接工单、表单、消息、审批和后台系统。
- minimum demo: 让 agent 在一个受控业务流程中读取上下文、调用系统接口、等待审批并把结果回填到流程状态。
- prerequisites:
  - J/J9. 应用形态/Workflow assistant
  - J/J8. 安全与权限/Sensitive action approval
- core metrics:
  - workflow completion rate
  - approval correctness
  - side-effect accuracy
- next:
  - K/K2. 执行形态/Hybrid system
  - K/K8. 人在回路/HITL checkpoints

#### Voice agent

- pathKey: `K/K10. Agent 形态分支/Voice agent`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K10-1yxw20i-1.json`
- status: draft
- definition: Voice agent 以语音为主交互通道，把实时 ASR、TTS、打断处理和状态同步放进 agent 闭环中。
- importance: 它暴露的是系统是否真正支持实时、多模态和中途修正，而不是只会流式输出文本。
- minimum demo: 构建一个支持实时听写、语音回应和中途打断的 voice agent，并验证音频与文本状态一致。
- prerequisites:
  - J/J9. 应用形态/Voice assistant
  - E/E3. 音频 / 语音/自动语音识别（ASR）
  - E/E3. 音频 / 语音/文本转语音（TTS）
- core metrics:
  - speech round-trip latency
  - barge-in success rate
- next:
  - J/J5. 流式与实时/Voice interaction
  - J/J6. 多模态应用/Audio input/output

#### Computer-use agent

- pathKey: `K/K10. Agent 形态分支/Computer-use agent`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K10-1yxw20i-1.json`
- status: draft
- definition: Computer-use agent 通过桌面、浏览器或 shell 环境直接执行点击、输入、读取和命令操作，面向强副作用场景。
- importance: 这是连接通用环境自动化的高能力形态，但同时也是权限、审计和恢复要求最高的形态之一。
- minimum demo: 让 agent 在受控浏览器或桌面环境中完成一组可回放操作，并对写操作设置显式审批。
- prerequisites:
  - K/K7. 工具与外部连接/Computer / shell / browser actions
  - J/J8. 安全与权限/Isolation boundaries
  - K/K8. 人在回路/Approval before side effects
- core metrics:
  - action success rate
  - unsafe action block rate
  - recovery success rate
- next:
  - K/K9. Agent 观测与控制/Auditability
  - J/J9. 应用形态/Coding assistant

#### Multi-agent organization

- pathKey: `K/K10. Agent 形态分支/Multi-agent organization`
- node type: `concept-group`
- detail source: `data/details/leaves-K-K10-1yxw20i-1.json`
- status: draft
- definition: Multi-agent organization 把多个角色、子图或专长 agent 组合成整体系统，强调路由、交接、审查和协同。
- importance: 它不是为了‘更像组织’，而是为了在任务拆分、并行和交叉校验中获得单 agent 难以兼顾的覆盖面。
- minimum demo: 实现一个 manager-route-review 的三角色系统，验证任务拆分、handoff 和记分是否可追踪。
- prerequisites:
  - K/K4. 多 Agent 模式/Subgraphs
  - K/K9. Agent 观测与控制/Handoff records
- core metrics:
  - routing quality
  - handoff correctness
  - coordination overhead
- next:
  - M/M3. Agent 级评测/Routing quality
  - M/M3. Agent 级评测/Handoff correctness

## L. 运行时与基础设施

- pathKey: `L`
- node type: `domain`
- stage: 05 运行、治理与产品
- graph summary: vLLM 把离线批推理和 OpenAI-compatible online serving 作为核心能力；Ollama 支持本地模型、tool calling、structured outputs 与 OpenAI compatibility；MLX/MLX-LM 面向 Apple silicon 本地推理和微调；Transformers.js 则代表浏览器/JS 运行时路线；Accelerate、DDP/FSDP 负责训练和大规模执行。
- relation notes:
  - 运行时与基础设施 不是模型本体，而是模型/Agent 的承载层。
  - 模型适配、后训练与对齐 层量化、蒸馏会直接影响 运行时与基础设施 层资源消耗。
  - AI 应用工程/Agent 系统 层的并发、流式、状态管理，最终都落在 运行时与基础设施 层执行。
  - 数据层（横切层）/评测、安全与治理 层的数据与评测，也需要 运行时与基础设施 层的存储、调度、执行能力。
- detail source: `data/details/domain-L.json`
- status: completed
- definition: 运行时与基础设施关注模型从“能用”到“稳定、高效、可扩展地运行”的整条工程链路：如何访问模型、用什么服务运行时承载推理、如何做吞吐与延迟优化、训练作业如何组织、底层存储与缓存如何配合、硬件资源如何约束系统设计，以及上线后用哪些指标判断系统是否健康。它不是单一组件，而是一组把模型能力转化为实际服务能力的约束与方法。
- importance: 很多 AI 系统的瓶颈不在模型本身，而在运行时和基础设施是否匹配目标场景。相同模型在不同运行时、缓存策略、硬件配置和并发控制下，延迟、吞吐、成本、稳定性会出现数量级差异。理解这个 domain，才能在云 API、自托管、本地或混合部署之间做合理取舍，并把“单机 demo”推进到“可观测、可维护、可扩容”的生产系统。
- minimum demo: 完成一个最小闭环即可理解本 domain 的核心：选一种模型访问方式，搭一个可调用的推理服务，记录单请求延迟、并发下吞吐、显存/内存占用、失败率和单位请求成本；然后分别调整上下文长度、并发数、缓存策略或量化方式，比较指标变化。若再补一个最小训练或微调任务，并把产物存入对象存储/制品库，就能看到推理、训练、存储、监控之间的真实耦合。
- hardware budget: 入门可从 CPU 或消费级单 GPU / Apple silicon 本地环境开始，重点观察模型尺寸、上下文长度与内存/显存的关系。做服务化验证时，通常需要至少一台能稳定承载目标模型的机器，并预留存储、缓存和日志监控开销。进入生产后，预算不只看算力，还要计入网络带宽、对象存储、队列、容器编排、冗余实例与可观测性系统的持续成本。
- examples:
  - 把同一个开源模型分别通过云 API、单机本地运行时和自托管服务暴露为统一接口，比较延迟与成本
  - 为长上下文问答服务开启 KV cache、prefix cache 或量化推理，观察首 token 时间和吞吐变化
  - 训练后将 checkpoint 写入对象存储，再由推理服务拉取制品完成上线
  - 为高并发生成服务增加队列、缓存和并发控制，避免 GPU 空转或请求雪崩
  - 在本地笔记本、单 GPU 服务器和多 GPU 集群上运行同一工作负载，比较资源瓶颈位置
- pitfalls:
  - 只看模型效果，不看延迟、吞吐、成本和可用性，导致方案无法落地
  - 把单用户 demo 的配置直接带到生产，没有并发控制、缓存失效策略和容量规划
  - 混淆 RAM、VRAM、磁盘与网络瓶颈，误判系统慢的根因
  - 只优化平均延迟，不关注尾延迟、错误率和高峰期退化
  - 训练、推理、存储和部署链路割裂，导致产物不可复现或上线不稳定
  - 缺少统一观测口径，团队无法判断优化是否真的有效
- prerequisites:
  - J
  - L/L1. 模型访问方式
  - L/L6. 硬件层
- core metrics:
  - Latency
  - Throughput
  - Cost
  - Error rate
  - Availability
  - Token usage
  - GPU utilization
  - Context pressure
- toolchain:
  - 云 API / OpenAI-compatible API
  - vLLM
  - Ollama
  - MLX / MLX-LM
  - Transformers.js
  - PyTorch
  - Accelerate
  - DDP / FSDP
  - SQL / NoSQL
  - Vector DB
  - Object storage
  - Cache
  - Queue
  - Artifact storage
  - Container / deployment layer
- failure signs:
  - 模型能跑但吞吐极低，GPU 利用率长期偏低或抖动很大
  - 一旦并发上升，尾延迟和错误率迅速恶化
  - 显存、内存或磁盘频繁打满，触发 OOM、swap 或 checkpoint 失败
  - 缓存命中率低、失效策略混乱，重复计算严重
  - 上线过程依赖手工复制和临时脚本，制品版本不可追踪
  - 成本随请求量近线性失控，无法通过优化得到可接受单位成本
- next:
  - L/L1. 模型访问方式
  - L/L2. 服务运行时
  - L/L3. 推理优化
  - L/L4. 训练基础设施
  - L/L5. 系统基础设施
  - L/L6. 硬件层
  - L/L7. 生产运行指标

### L1. 模型访问方式

- pathKey: `L/L1. 模型访问方式`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-L.json`
- status: draft
- definition: 模型访问方式回答的是模型能力从哪里来、以什么边界被应用调用：直接走云 API、自托管推理、本地推理、浏览器/边缘推理，或做混合路由。
- importance: 这一步决定了隐私边界、延迟上限、成本结构和工程复杂度。很多技术方案不是模型选错，而是访问方式与场景不匹配。
- minimum demo: 用同一类任务分别接云 API 和本地或自托管模型，对比延迟、成本、可控性和部署复杂度。
- prerequisites:
  - L
  - J/J1. 模型接口层
  - L/L6. 硬件层
- core metrics:
  - latency
  - cost
  - privacy boundary
  - operational complexity
- next:
  - L/L1. 模型访问方式/云 API
  - L/L1. 模型访问方式/自托管推理
  - L/L1. 模型访问方式/本地推理
  - L/L1. 模型访问方式/浏览器 / Edge 推理
  - L/L1. 模型访问方式/混合推理

#### 云 API

- pathKey: `L/L1. 模型访问方式/云 API`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L1-1wuu2j0-1.json`
- status: draft
- definition: 云 API 指通过托管模型服务访问推理能力，应用方主要关心接口、配额、延迟和成本，而不直接管理底层推理集群。
- importance: 这是最快起步、运维负担最低的访问方式，特别适合先验证产品价值和快速迭代。
- minimum demo: 接入一个云模型接口，记录端到端延迟、错误率和单位成功任务成本，并与本地或自托管方案对比。
- prerequisites:
  - L/L1. 模型访问方式
  - J/J1. 模型接口层
- core metrics:
  - p95 latency
  - availability
  - cost per successful task
- next:
  - L/L1. 模型访问方式/混合推理
  - L/L7. 生产运行指标/Cost

#### 自托管推理

- pathKey: `L/L1. 模型访问方式/自托管推理`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L1-1wuu2j0-1.json`
- status: draft
- definition: 自托管推理由团队自己部署模型权重和 serving runtime，掌控模型选择、缓存策略、批处理和网络边界。
- importance: 它提供更强的可控性和成本优化空间，也带来更高的运维、容量规划和安全责任。
- minimum demo: 部署一个自托管推理服务，比较与云 API 在延迟、吞吐、隐私边界和运维复杂度上的差异。
- prerequisites:
  - L/L1. 模型访问方式
  - L/L2. 服务运行时/vLLM
  - L/L6. 硬件层/GPU
- core metrics:
  - throughput
  - GPU utilization
  - operational overhead
- next:
  - L/L2. 服务运行时/vLLM
  - L/L3. 推理优化/Continuous batching

#### 本地推理

- pathKey: `L/L1. 模型访问方式/本地推理`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L1-1wuu2j0-1.json`
- status: draft
- definition: 本地推理指模型权重和推理 runtime 直接运行在开发机或边缘设备上，而不是每次请求都走云 API。
- importance: 它最适合做隐私敏感、低网络依赖、快速迭代的工作流，也特别适合前端工程师先把推理链路、缓存和交互体验跑通。
- minimum demo: 分别在 Apple silicon 和独显机器上启动一个本地模型，记录首 token 延迟、吞吐、内存占用和上下文上限，再和云 API 做对比。
- hardware budget: 36GB 统一内存的 Apple silicon 和 3080 级显卡都足够做本地原型；瓶颈通常出在上下文长度、量化策略和并发，而不是能否“跑起来”。
- examples:
  - 在 Apple silicon 上用 MLX-LM 跑 7B 级模型做代码补全或本地问答。
  - 在 3080 上用 Ollama 或 vLLM 做离线评测、小规模 agent 回放和 prompt 调试。
- pitfalls:
  - 只看参数量而不看量化方式、上下文长度和显存占用，通常会高估本地可跑范围。
  - 把本地推理等同于“完全离线”也不准确，真实系统里常常是本地模型与云 API 混合路由。
- prerequisites:
  - L/L1. 模型访问方式
  - L/L3. 推理优化
  - L/L6. 硬件层/Apple silicon unified memory
- core metrics:
  - first-token latency
  - tokens/sec
  - VRAM / RAM footprint
  - max usable context
- toolchain:
  - Ollama
  - MLX / MLX-LM
  - vLLM
  - local benchmark scripts
- failure signs:
  - 模型能启动但上下文一拉长就频繁 OOM
  - 量化后速度提升不明显，但质量明显下滑
- next:
  - L/L2. 服务运行时/MLX / MLX-LM
  - L/L2. 服务运行时/Ollama
  - L/L3. 推理优化/Quantized inference

#### 浏览器 / Edge 推理

- pathKey: `L/L1. 模型访问方式/浏览器 / Edge 推理`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L1-1wuu2j0-1.json`
- status: draft
- definition: 浏览器 / Edge 推理把模型执行放到 Web 运行时里，通过 WebGPU、WASM 或专门的 edge runtime 直接完成推理，而不是把所有请求都转发到后端。
- importance: 这条路线非常适合前端工程师，因为它把模型能力直接接到 UI、交互和端侧资源管理上，能最快验证“AI 能不能成为产品默认能力”。
- minimum demo: 在一个静态页面里接入浏览器侧模型，完成一次本地推理，并记录模型加载时间、首 token 时间和页面交互是否卡顿。
- hardware budget: 重点不是大显卡，而是用户设备的浏览器支持、显存共享和下载体积预算。
- examples:
  - 用 Transformers.js + WebGPU 在浏览器里跑小模型做摘要、分类或 embedding。
  - 把轻量推理放在 edge worker 上，先做路由、过滤或 fallback，再决定是否调用大模型。
- pitfalls:
  - 只看到 demo 跑通，而忽略模型下载体积、冷启动、浏览器兼容性和端侧内存上限。
  - 把浏览器推理理解成“前端替代后端”，实际上它更常见的角色是补充云模型，而不是完全替代。
- prerequisites:
  - L/L1. 模型访问方式
  - J/J5. 流式与实时
  - L/L2. 服务运行时/Transformers.js
- core metrics:
  - model download size
  - cold start time
  - UI responsiveness
  - device compatibility
- toolchain:
  - Transformers.js
  - WebGPU
  - Web Worker
  - browser performance profiler
- failure signs:
  - 模型加载时阻塞主线程，页面明显掉帧
  - 不同浏览器或显卡环境下结果和速度差异极大
- next:
  - L/L2. 服务运行时/Transformers.js
  - J/J5. 流式与实时/Incremental UI updates
  - J/J9. 应用形态/Coding assistant

#### 混合推理

- pathKey: `L/L1. 模型访问方式/混合推理`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L1-1wuu2j0-1.json`
- status: draft
- definition: 混合推理把多个访问方式组合起来，例如优先本地或边缘、小模型先路由、复杂请求再回退到云 API 或自托管大模型。
- importance: 这通常是现实系统里最实用的折中方案，能同时平衡时延、成本、隐私和质量。
- minimum demo: 实现一个简单路由器，让短任务走本地或边缘，复杂任务走云或自托管模型，并比较整体成本与体验。
- prerequisites:
  - L/L1. 模型访问方式/云 API
  - L/L1. 模型访问方式/本地推理
  - G/G8. 推理模型与模型路由/Model routing policy
- core metrics:
  - routing win rate
  - blended cost
  - fallback success rate
- next:
  - L/L7. 生产运行指标/Latency
  - L/L7. 生产运行指标/Cost

### L2. 服务运行时

- pathKey: `L/L2. 服务运行时`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-L.json`
- status: draft
- definition: 服务运行时是承载模型推理的执行层，例如 vLLM、Ollama、MLX / MLX-LM、Transformers.js 和其他 OpenAI-compatible servers。
- importance: 同样的模型落在不同 runtime 上，吞吐、尾延迟、显存利用率和运维成本会有明显差异。
- minimum demo: 在同一模型上比较两种 runtime 的部署、吞吐和观测能力，并记录适合的使用场景。
- prerequisites:
  - L/L1. 模型访问方式
  - L/L3. 推理优化
- core metrics:
  - throughput
  - p95 latency
  - runtime stability
- next:
  - L/L2. 服务运行时/vLLM
  - L/L2. 服务运行时/Ollama
  - L/L2. 服务运行时/MLX / MLX-LM
  - L/L2. 服务运行时/Transformers.js
  - L/L2. 服务运行时/其他 OpenAI-compatible servers

#### vLLM

- pathKey: `L/L2. 服务运行时/vLLM`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L2-bmuf0w-1.json`
- status: draft
- definition: vLLM 是面向高吞吐 serving 的推理 runtime，擅长通过 PagedAttention、continuous batching 等机制提升 GPU 利用率。
- importance: 它是理解现代开源 serving 栈的关键入口，尤其适合研究长上下文和高并发场景下的推理优化。
- minimum demo: 用 vLLM 起一个兼容 OpenAI 风格接口的服务，测量不同并发与上下文下的延迟和吞吐。
- prerequisites:
  - L/L1. 模型访问方式/自托管推理
  - L/L3. 推理优化/PagedAttention
  - L/L3. 推理优化/Continuous batching
- core metrics:
  - tokens/sec
  - GPU utilization
  - p95 latency
- next:
  - L/L3. 推理优化/PagedAttention
  - L/L3. 推理优化/Continuous batching

#### Ollama

- pathKey: `L/L2. 服务运行时/Ollama`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L2-bmuf0w-1.json`
- status: draft
- definition: Ollama 是面向开发机和轻量部署场景的本地运行时，强调上手快、模型管理简单和统一本地调用体验。
- importance: 它非常适合作为本地原型和小团队开发的第一站，尤其适合前端或应用工程师快速接通本地模型。
- minimum demo: 在本地机器上用 Ollama 跑一个 7B 级模型，比较不同量化和上下文长度下的体验。
- prerequisites:
  - L/L1. 模型访问方式/本地推理
  - L/L6. 硬件层/VRAM / RAM / disk constraints
- core metrics:
  - load time
  - developer setup time
  - memory footprint
- next:
  - L/L1. 模型访问方式/本地推理
  - L/L3. 推理优化/Quantized inference

#### MLX / MLX-LM

- pathKey: `L/L2. 服务运行时/MLX / MLX-LM`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L2-bmuf0w-1.json`
- status: draft
- definition: MLX / MLX-LM 是面向 Apple silicon 的本地推理与微调路线，优势在于统一内存、较低部署门槛和对开发机工作流的贴合。
- importance: 如果主要开发环境是 Mac，MLX 路线几乎是学习本地 LLM 推理、量化和小规模适配的最高 ROI 入口。
- minimum demo: 在 Apple silicon 上加载同一个模型的不同量化版本，比较启动时间、吞吐和回答质量，再尝试一次小规模 LoRA/微调实验。
- hardware budget: 这条路线最吃统一内存容量和模型量化策略；36GB 已经足够做很多 7B~14B 级实验。
- prerequisites:
  - L/L1. 模型访问方式/本地推理
  - L/L6. 硬件层/Apple silicon unified memory
  - L/L3. 推理优化/Quantized inference
- core metrics:
  - load time
  - tokens/sec
  - memory pressure
  - quality drop after quantization
- toolchain:
  - MLX
  - MLX-LM
  - model conversion scripts
  - Apple activity / memory tools
- failure signs:
  - 统一内存迅速被吃满，系统整体变慢
  - 模型能跑但上下文一长就明显退化或吞吐崩掉
- next:
  - L/L1. 模型访问方式/本地推理
  - H/H4. 参数高效适配
  - H/H5. 压缩与效率优化

#### Transformers.js

- pathKey: `L/L2. 服务运行时/Transformers.js`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L2-bmuf0w-1.json`
- status: draft
- definition: Transformers.js 把模型推理带到 JavaScript 运行时，适合浏览器或边缘场景中的轻量模型执行。
- importance: 它让前端栈可以直接验证端侧 AI 交互，不必一开始就把所有能力都压到后端。
- minimum demo: 在浏览器或 edge 环境中加载一个轻量模型，用 Transformers.js 完成一次实际推理。
- prerequisites:
  - L/L1. 模型访问方式/浏览器 / Edge 推理
  - J/J5. 流式与实时/Incremental UI updates
- core metrics:
  - bundle size
  - cold start
  - UI blocking time
- next:
  - L/L1. 模型访问方式/浏览器 / Edge 推理
  - L/L7. 生产运行指标/Latency

#### 其他 OpenAI-compatible servers

- pathKey: `L/L2. 服务运行时/其他 OpenAI-compatible servers`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L2-bmuf0w-1.json`
- status: draft
- definition: 其他 OpenAI-compatible servers 指以统一接口暴露推理能力的服务层，帮助应用在不同后端之间保持较稳定的接入面。
- importance: 统一接口能显著降低应用迁移和混合部署成本，也便于做路由、灰度和 fallback。
- minimum demo: 让应用通过统一接口分别接多个后端，验证切换和回退逻辑是否平滑。
- prerequisites:
  - L/L1. 模型访问方式/云 API
  - L/L1. 模型访问方式/自托管推理
- core metrics:
  - switching cost
  - compatibility coverage
- next:
  - L/L1. 模型访问方式/混合推理
  - J/J1. 模型接口层/Input / output contracts

### L3. 推理优化

- pathKey: `L/L3. 推理优化`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-L.json`
- status: draft
- definition: 推理优化关注在固定模型能力下，如何通过缓存、批处理、量化、编译和并发控制把服务做得更快、更稳、更便宜。
- importance: 生产问题常常不是模型不会答，而是同样答案要花太久、太贵或高并发下顶不住。
- minimum demo: 拿一个 serving 场景，对比开启和关闭 cache、continuous batching 或量化后的延迟与吞吐差异。
- prerequisites:
  - L/L2. 服务运行时
  - G/G2. Transformer 机制/Self-attention
- core metrics:
  - first-token latency
  - throughput
  - GPU utilization
  - cost per token
- next:
  - L/L3. 推理优化/PagedAttention
  - L/L3. 推理优化/Continuous batching
  - L/L3. 推理优化/Chunked prefill
  - L/L3. 推理优化/KV cache
  - L/L3. 推理优化/Prefix cache
  - L/L3. 推理优化/Prefix cache sharing / invalidation
  - L/L3. 推理优化/KV offload
  - L/L3. 推理优化/Speculative decoding
  - L/L3. 推理优化/Quantized inference
  - L/L3. 推理优化/Context length management
  - L/L3. 推理优化/Compiled graphs / kernels
  - L/L3. 推理优化/Concurrency control
  - L/L3. 推理优化/Throughput / latency tuning

#### PagedAttention

- pathKey: `L/L3. 推理优化/PagedAttention`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L3-1hn2gmn-1.json`
- status: draft
- definition: PagedAttention 通过把 KV cache 组织成分页块，减少长上下文推理时的大块连续内存需求，让 serving 更容易在动态 batch 下复用内存。
- importance: 这是现代高并发 serving 从“能跑”走向“能稳定高利用率运行”的关键术语之一，也是理解 vLLM 这类系统的入口。
- minimum demo: 对比普通 KV cache 管理和 paged cache 的显存占用与吞吐差异，至少观察长上下文和动态 batch 场景。
- hardware budget: 需要能跑推理服务的 GPU；消费级 GPU 已能观察趋势，生产调优通常需要更大显存。
- prerequisites:
  - G/G2. Transformer 机制
  - L/L3. 推理优化/KV cache
  - L/L3. 推理优化/Continuous batching
- core metrics:
  - throughput
  - memory fragmentation
  - KV cache utilization
  - p95 latency
- toolchain:
  - vLLM
  - GPU profiler
  - serving benchmark
- failure signs:
  - 动态并发下显存碎片严重
  - batch 一增大就出现明显抖动或 OOM
- next:
  - L/L3. 推理优化/Continuous batching
  - L/L3. 推理优化/KV offload

#### Continuous batching

- pathKey: `L/L3. 推理优化/Continuous batching`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L3-1hn2gmn-1.json`
- status: draft
- definition: Continuous batching 让推理服务不必等整批请求一起结束再接下一批，而是在解码过程中持续把新请求插入可执行队列里。
- importance: 它是现代在线 serving 的核心能力之一，因为真实流量不是整齐批处理；没有 continuous batching，吞吐和尾延迟通常都会明显变差。
- minimum demo: 用在线 serving benchmark 对比 static batch 和 continuous batch，在混合短请求/长请求场景下观察吞吐与 p95 latency。
- hardware budget: 需要可观测 GPU 推理环境；消费级 GPU 足够看趋势，生产优化更依赖稳定并发流量。
- prerequisites:
  - L/L3. 推理优化/PagedAttention
  - L/L3. 推理优化/KV cache
  - L/L3. 推理优化/Concurrency control
- core metrics:
  - throughput
  - queue wait time
  - p95 latency
  - GPU utilization
- toolchain:
  - vLLM
  - serving benchmark
  - GPU metrics dashboard
- failure signs:
  - 短请求总被长请求拖住，排队时间异常长
  - GPU 利用率不低，但用户侧尾延迟仍明显恶化
- next:
  - L/L3. 推理优化/Chunked prefill
  - L/L7. 生产运行指标

#### Chunked prefill

- pathKey: `L/L3. 推理优化/Chunked prefill`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L3-1hn2gmn-1.json`
- status: draft
- definition: Chunked prefill 把长输入的预填充分块执行，降低首段大请求对队列和显存的瞬时压力。
- importance: 它对长上下文和混合流量尤其关键，能减少长请求把短请求全部堵死的情况。
- minimum demo: 在长 prompt 场景下对比开启和关闭 chunked prefill 的首 token 延迟和队列等待时间。
- prerequisites:
  - L/L3. 推理优化/Continuous batching
  - L/L3. 推理优化/Context length management
- core metrics:
  - time to first token
  - queue wait time
- next:
  - L/L3. 推理优化/Throughput / latency tuning
  - L/L7. 生产运行指标/Latency

#### KV cache

- pathKey: `L/L3. 推理优化/KV cache`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L3-1hn2gmn-1.json`
- status: draft
- definition: KV cache 复用 Transformer 解码中已计算的 key/value，避免每个 token 都从头重算历史上下文。
- importance: 这是几乎所有现代 LLM serving 的基本优化项，也是理解显存压力和上下文成本的关键入口。
- minimum demo: 观察在开启和关闭 KV cache 时，同一生成任务的 tokens/sec 和显存占用变化。
- prerequisites:
  - G/G2. Transformer 机制/Self-attention
  - L/L6. 硬件层/VRAM / RAM / disk constraints
- core metrics:
  - tokens/sec
  - cache memory footprint
- next:
  - L/L3. 推理优化/Prefix cache
  - L/L3. 推理优化/KV offload

#### Prefix cache

- pathKey: `L/L3. 推理优化/Prefix cache`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L3-1hn2gmn-1.json`
- status: draft
- definition: Prefix cache 复用多个请求共享前缀的预填充结果，减少重复计算。
- importance: 对系统提示、共享文档前缀或模板化请求很多的场景，它能明显降低计算浪费。
- minimum demo: 让多条请求共享相同前缀，比较 prefix cache 命中前后的首 token 时间。
- prerequisites:
  - L/L3. 推理优化/KV cache
  - J/J1. 模型接口层/System / user / tool messages
- core metrics:
  - prefix cache hit rate
  - prefill time reduction
- next:
  - L/L3. 推理优化/Prefix cache sharing / invalidation
  - L/L7. 生产运行指标/Cost

#### Prefix cache sharing / invalidation

- pathKey: `L/L3. 推理优化/Prefix cache sharing / invalidation`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L3-1hn2gmn-1.json`
- status: draft
- definition: 这一层关注 prefix cache 如何在多请求间共享，以及在提示、权限或上下文变化时如何安全失效。
- importance: 缓存命中很有价值，但错误共享或失效不当会直接引入隐私和正确性问题。
- minimum demo: 测试共享前缀在多租户或多版本提示下的命中与失效策略，检查是否有串扰。
- prerequisites:
  - L/L3. 推理优化/Prefix cache
  - M/M7. 隐私与合规/Access control
- core metrics:
  - cache correctness
  - cross-tenant leak rate
- next:
  - L/L5. 系统基础设施/Cache
  - M/M7. 隐私与合规/Data retention

#### KV offload

- pathKey: `L/L3. 推理优化/KV offload`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L3-1hn2gmn-1.json`
- status: draft
- definition: KV offload 把部分 KV cache 从高价值显存移到较慢层级，例如内存或其他设备，以换取更大上下文或更多并发。
- importance: 它常用于显存受限但仍需支撑长上下文的场景，是容量与速度的直接权衡。
- minimum demo: 在显存受限环境下启用 KV offload，观察可支持上下文长度与延迟退化程度。
- prerequisites:
  - L/L3. 推理优化/KV cache
  - L/L6. 硬件层/VRAM / RAM / disk constraints
- core metrics:
  - max usable context
  - latency penalty
- next:
  - L/L3. 推理优化/Context length management
  - L/L7. 生产运行指标/Context pressure

#### Speculative decoding

- pathKey: `L/L3. 推理优化/Speculative decoding`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L3-1hn2gmn-2.json`
- status: draft
- definition: Speculative decoding 用较小或较快的草稿模型预猜 token，再由目标模型验证，以换取更高生成速度。
- importance: 它是速度优化里最直接的一类方法，但收益依赖草稿模型质量和验证开销平衡。
- minimum demo: 比较有无 speculative decoding 时的生成速度、成本和答案质量变化。
- prerequisites:
  - G/G8. 推理模型与模型路由/Model routing policy
  - L/L3. 推理优化/Throughput / latency tuning
- core metrics:
  - tokens/sec gain
  - acceptance ratio
- next:
  - L/L7. 生产运行指标/Throughput
  - L/L7. 生产运行指标/Cost

#### Quantized inference

- pathKey: `L/L3. 推理优化/Quantized inference`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L3-1hn2gmn-2.json`
- status: draft
- definition: Quantized inference 通过降低权重或激活精度来减少显存占用和推理成本，以换取一定质量损失风险。
- importance: 它是本地推理和受限硬件上最常见的生存手段，也是大规模成本优化的常用工具。
- minimum demo: 对同一模型比较 FP16 和量化版本的速度、显存占用与任务质量。
- prerequisites:
  - H/H5. 压缩与效率优化/Quantization
  - L/L6. 硬件层/VRAM / RAM / disk constraints
- core metrics:
  - memory reduction
  - quality drop
  - tokens/sec gain
- next:
  - L/L1. 模型访问方式/本地推理
  - L/L2. 服务运行时/Ollama

#### Context length management

- pathKey: `L/L3. 推理优化/Context length management`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L3-1hn2gmn-2.json`
- status: draft
- definition: Context length management 处理上下文长度、裁剪、压缩和分段策略，避免长上下文把成本和延迟拖爆。
- importance: 上下文不是越长越好；不管理时，会同时伤害时延、成本和模型有效注意力。
- minimum demo: 比较几种上下文裁剪或压缩策略对质量、成本和稳定性的影响。
- prerequisites:
  - J/J4. 会话与状态/Context compaction
  - L/L3. 推理优化/KV cache
- core metrics:
  - effective context utilization
  - token waste
- next:
  - L/L7. 生产运行指标/Context pressure
  - I/I3. RAG 管线/Context packing

#### Compiled graphs / kernels

- pathKey: `L/L3. 推理优化/Compiled graphs / kernels`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L3-1hn2gmn-2.json`
- status: draft
- definition: Compiled graphs / kernels 通过更底层的图编译和 kernel 优化减少调度开销、提升执行效率。
- importance: 当系统已经做了缓存和批处理优化后，底层 kernel 效率会成为新的瓶颈。
- minimum demo: 比较默认执行与编译优化后的吞吐、延迟和稳定性差异。
- prerequisites:
  - L/L2. 服务运行时
  - L/L6. 硬件层/GPU
- core metrics:
  - kernel efficiency
  - latency reduction
- next:
  - L/L3. 推理优化/Throughput / latency tuning
  - L/L7. 生产运行指标/GPU utilization

#### Concurrency control

- pathKey: `L/L3. 推理优化/Concurrency control`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L3-1hn2gmn-2.json`
- status: draft
- definition: Concurrency control 管理同时进入系统的请求数量、排队策略和资源争抢，防止高峰期退化失控。
- importance: 没有并发控制，再好的 runtime 和缓存也可能在流量波峰时瞬间失效。
- minimum demo: 对服务设置并发上限和队列策略，观察不同负载下的 p95 latency 和错误率变化。
- prerequisites:
  - L/L3. 推理优化/Continuous batching
  - L/L5. 系统基础设施/Queue
- core metrics:
  - queue delay
  - p95 latency
  - error rate under load
- next:
  - L/L7. 生产运行指标/Latency
  - L/L7. 生产运行指标/Error rate

#### Throughput / latency tuning

- pathKey: `L/L3. 推理优化/Throughput / latency tuning`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L3-1hn2gmn-2.json`
- status: draft
- definition: Throughput / latency tuning 是把各类优化策略放到同一目标函数里权衡：服务要更快、更稳还是更省钱。
- importance: 优化不是单点开关，而是持续寻找吞吐、尾延迟、成本和质量之间的平衡点。
- minimum demo: 固定一套负载，对不同 batch、cache、量化和并发配置做对比实验，选出目标场景最优点。
- prerequisites:
  - L/L3. 推理优化/Concurrency control
  - L/L7. 生产运行指标/Latency
  - L/L7. 生产运行指标/Throughput
- core metrics:
  - throughput-latency frontier
  - cost-performance ratio
- next:
  - L/L7. 生产运行指标/Cost
  - L/L7. 生产运行指标/GPU utilization

### L4. 训练基础设施

- pathKey: `L/L4. 训练基础设施`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-L.json`
- status: draft
- definition: 训练基础设施关注训练和微调作业用什么框架、如何分布式运行、如何 checkpoint、如何追踪实验以及如何把训练产物稳定交付给后续系统。
- importance: 没有训练基础设施，后训练、蒸馏和持续改进就很难从一次实验变成可复现流程。
- minimum demo: 搭一个最小训练闭环：运行一次微调任务、保存 checkpoint、记录实验参数并验证可恢复。
- prerequisites:
  - H/H4. 参数高效适配
  - H/H5. 压缩与效率优化
  - L/L6. 硬件层
- core metrics:
  - train throughput
  - checkpoint reliability
  - experiment reproducibility
- next:
  - L/L4. 训练基础设施/PyTorch
  - L/L4. 训练基础设施/Accelerate
  - L/L4. 训练基础设施/DDP
  - L/L4. 训练基础设施/FSDP
  - L/L4. 训练基础设施/Checkpointing
  - L/L4. 训练基础设施/Distributed training
  - L/L4. 训练基础设施/Experiment tracking

#### PyTorch

- pathKey: `L/L4. 训练基础设施/PyTorch`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L4-55lhgl-1.json`
- status: draft
- definition: PyTorch 是当前大多数 LLM 训练、微调和研究原型的默认基础框架，负责张量计算、自动求导和模型定义。
- importance: 理解 PyTorch 是理解训练栈其余组件的前提；很多上层工具本质上都是在它之上做封装。
- minimum demo: 写一个最小训练循环，跑一次前向、反向和优化步骤，并观察显存和吞吐变化。
- prerequisites:
  - D/D1. 神经网络基础
  - L/L6. 硬件层/GPU
- core metrics:
  - train throughput
  - memory footprint
- next:
  - L/L4. 训练基础设施/Accelerate
  - L/L4. 训练基础设施/DDP

#### Accelerate

- pathKey: `L/L4. 训练基础设施/Accelerate`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L4-55lhgl-1.json`
- status: draft
- definition: Accelerate 为训练和推理脚本提供更轻量的多设备和混合精度抽象，降低从单机到多卡的切换成本。
- importance: 它让应用和研究团队能以更低心智负担尝试多设备训练，而不必一开始就深挖分布式细节。
- minimum demo: 把一个单卡训练脚本改成 Accelerate 版本，并比较代码复杂度和可迁移性。
- prerequisites:
  - L/L4. 训练基础设施/PyTorch
  - L/L4. 训练基础设施/Distributed training
- core metrics:
  - setup time
  - multi-device portability
- next:
  - L/L4. 训练基础设施/DDP
  - L/L4. 训练基础设施/FSDP

#### DDP

- pathKey: `L/L4. 训练基础设施/DDP`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L4-55lhgl-1.json`
- status: draft
- definition: DDP（Distributed Data Parallel）通过多进程多卡复制模型、切分 batch 来提升训练吞吐，是经典的数据并行方案。
- importance: 它是分布式训练的基线方案，能帮助团队先理解多卡带来的同步、通信和吞吐收益。
- minimum demo: 在两张卡上运行同一训练脚本，比较单卡与 DDP 的吞吐和同步开销。
- prerequisites:
  - L/L4. 训练基础设施/PyTorch
  - L/L6. 硬件层/Multi-GPU
- core metrics:
  - scale efficiency
  - communication overhead
- next:
  - L/L4. 训练基础设施/FSDP
  - L/L4. 训练基础设施/Distributed training

#### FSDP

- pathKey: `L/L4. 训练基础设施/FSDP`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L4-55lhgl-1.json`
- status: draft
- definition: FSDP（Fully Sharded Data Parallel）通过更细粒度地分片参数、梯度和优化器状态，降低大模型训练的显存压力。
- importance: 当模型规模逼近单卡或简单 DDP 边界时，FSDP 常常是继续扩展训练的关键手段。
- minimum demo: 把一个较大模型从 DDP 切到 FSDP，观察可训练模型规模和显存峰值变化。
- prerequisites:
  - L/L4. 训练基础设施/DDP
  - L/L6. 硬件层/VRAM / RAM / disk constraints
- core metrics:
  - memory savings
  - step time
- next:
  - L/L4. 训练基础设施/Checkpointing
  - L/L4. 训练基础设施/Distributed training

#### Checkpointing

- pathKey: `L/L4. 训练基础设施/Checkpointing`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L4-55lhgl-1.json`
- status: draft
- definition: Checkpointing 负责在训练中周期性保存模型、优化器和训练状态，以支持恢复、回滚和产物交付。
- importance: 没有可靠 checkpoint，长训练作业一旦中断就可能损失大量成本，也无法保证产物可复现。
- minimum demo: 在一次训练中定期保存 checkpoint，再从中断点恢复并验证结果连续性。
- prerequisites:
  - L/L4. 训练基础设施/PyTorch
  - L/L5. 系统基础设施/Object storage
- core metrics:
  - checkpoint success rate
  - resume success rate
- next:
  - L/L5. 系统基础设施/Artifact storage
  - L/L4. 训练基础设施/Experiment tracking

#### Distributed training

- pathKey: `L/L4. 训练基础设施/Distributed training`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L4-55lhgl-1.json`
- status: draft
- definition: Distributed training 是多机多卡训练的总称，关注任务切分、同步策略、失败恢复和网络瓶颈。
- importance: 一旦训练规模上去，分布式效率和稳定性会直接决定是否值得扩容。
- minimum demo: 在多卡环境下跑一个分布式训练任务，记录吞吐提升、同步等待和失败恢复表现。
- prerequisites:
  - L/L4. 训练基础设施/DDP
  - L/L6. 硬件层/Network bandwidth
- core metrics:
  - scaling efficiency
  - network bottleneck
- next:
  - L/L4. 训练基础设施/Experiment tracking
  - L/L7. 生产运行指标/Cost

#### Experiment tracking

- pathKey: `L/L4. 训练基础设施/Experiment tracking`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L4-55lhgl-1.json`
- status: draft
- definition: Experiment tracking 记录训练配置、数据版本、指标、制品和结果对比，使实验可复盘、可对照和可交付。
- importance: 没有实验追踪，训练优化很快就会退化为不可复现的经验堆砌。
- minimum demo: 为几次训练记录超参、数据版本、关键指标和输出 checkpoint，并能回看对比。
- prerequisites:
  - L/L4. 训练基础设施/Checkpointing
  - M/M4. 在线评测/Canary / regression set
- core metrics:
  - reproducibility
  - experiment comparison speed
- next:
  - N/N6. 持续改进闭环/部署新版本
  - L/L5. 系统基础设施/Artifact storage

### L5. 系统基础设施

- pathKey: `L/L5. 系统基础设施`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-L.json`
- status: draft
- definition: 系统基础设施是承载 AI 服务的通用底座，包括数据库、向量库、对象存储、缓存、队列、制品仓库和部署层。
- importance: 很多 AI 系统的不稳定并不在模型层，而在存储、队列和部署链路是否与推理、检索和 agent 行为匹配。
- minimum demo: 把一个最小 AI 应用接上对象存储、缓存和队列，并观察延迟、恢复和并发行为变化。
- prerequisites:
  - I/I2. 知识库构建
  - J/J7. 工程可靠性
  - K/K7. 工具与外部连接/Sandbox workspace
- core metrics:
  - cache hit rate
  - queue delay
  - artifact availability
- next:
  - L/L5. 系统基础设施/SQL / NoSQL
  - L/L5. 系统基础设施/Vector DB
  - L/L5. 系统基础设施/Object storage
  - L/L5. 系统基础设施/Cache
  - L/L5. 系统基础设施/Queue
  - L/L5. 系统基础设施/Artifact storage
  - L/L5. 系统基础设施/Container / deployment layer

#### SQL / NoSQL

- pathKey: `L/L5. 系统基础设施/SQL / NoSQL`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L5-85pyo8-1.json`
- status: draft
- definition: SQL / NoSQL 用于保存结构化业务状态、会话元数据、配置和部分运行时记录，是 AI 系统的基本数据底座。
- importance: 很多应用并不只依赖向量库；真正决定系统状态稳定性的往往是业务数据库和会话存储。
- minimum demo: 为一个 AI 应用设计最小数据表或文档结构，保存会话、任务和工具执行元数据。
- prerequisites:
  - J/J4. 会话与状态
  - K/K5. 图式编排/State
- core metrics:
  - query latency
  - state consistency
- next:
  - L/L5. 系统基础设施/Cache
  - L/L5. 系统基础设施/Queue

#### Vector DB

- pathKey: `L/L5. 系统基础设施/Vector DB`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L5-85pyo8-1.json`
- status: draft
- definition: Vector DB 负责 embedding 检索、近邻搜索和相似性召回，是 RAG 场景常见的底层组件。
- importance: 它直接影响召回速度、过滤能力和多租户隔离，是知识增强系统的关键基础设施。
- minimum demo: 构建一个最小向量索引，比较不同查询和过滤条件下的召回质量与延迟。
- prerequisites:
  - I/I1. 表示与检索基础/Embeddings
  - I/I2. 知识库构建
- core metrics:
  - retrieval latency
  - recall@k
- next:
  - I/I3. RAG 管线/Retrieval
  - L/L5. 系统基础设施/Cache

#### Object storage

- pathKey: `L/L5. 系统基础设施/Object storage`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L5-85pyo8-1.json`
- status: draft
- definition: Object storage 保存训练 checkpoint、原始文件、解析中间产物和大型静态资源，强调低成本与高耐久。
- importance: 很多 AI 资产体积大且不适合放数据库；对象存储是文件和制品链路的核心。
- minimum demo: 把上传文件或训练产物写入对象存储，并验证版本、权限和恢复链路。
- prerequisites:
  - J/J6. 多模态应用/File input
  - L/L4. 训练基础设施/Checkpointing
- core metrics:
  - artifact durability
  - fetch latency
- next:
  - L/L5. 系统基础设施/Artifact storage
  - I/I2. 知识库构建/Parser types/PDF / Office

#### Cache

- pathKey: `L/L5. 系统基础设施/Cache`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L5-85pyo8-1.json`
- status: draft
- definition: Cache 用于减少重复计算和重复读取，例如前缀缓存、embedding 缓存、结果缓存和会话热点数据缓存。
- importance: 缓存是把 AI 系统从‘每次都重新算’推向‘可承受并发与成本’的关键组件。
- minimum demo: 为一个高频请求路径加缓存，并比较命中前后的延迟和成本。
- prerequisites:
  - L/L3. 推理优化/Prefix cache
  - L/L5. 系统基础设施/SQL / NoSQL
- core metrics:
  - cache hit rate
  - cost saved
- next:
  - L/L3. 推理优化/Prefix cache sharing / invalidation
  - L/L7. 生产运行指标/Cost

#### Queue

- pathKey: `L/L5. 系统基础设施/Queue`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L5-85pyo8-1.json`
- status: draft
- definition: Queue 用于吸收突发流量、解耦长任务和后台处理，防止请求直接把推理服务或 agent runtime 打爆。
- importance: 很多长任务、批处理和高峰保护都依赖队列来平衡吞吐与稳定性。
- minimum demo: 把高耗时任务改成入队执行，观察峰值流量下的错误率和端到端时延变化。
- prerequisites:
  - L/L3. 推理优化/Concurrency control
  - J/J7. 工程可靠性/Circuit breaking
- core metrics:
  - queue delay
  - backlog size
- next:
  - K/K5. 图式编排/Parallel execution
  - L/L7. 生产运行指标/Error rate

#### Artifact storage

- pathKey: `L/L5. 系统基础设施/Artifact storage`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L5-85pyo8-1.json`
- status: draft
- definition: Artifact storage 统一保存评测报告、生成文件、训练产物和可部署制品，并提供版本化访问。
- importance: 没有制品存储，训练、评测和发布链路会断开，系统难以复盘和回滚。
- minimum demo: 把评测输出、训练 checkpoint 和应用构建产物统一写入一个可追踪的制品仓。
- prerequisites:
  - L/L5. 系统基础设施/Object storage
  - K/K7. 工具与外部连接/Sandbox workspace/Artifacts
- core metrics:
  - artifact retrieval success
  - version traceability
- next:
  - L/L4. 训练基础设施/Checkpointing
  - N/N6. 持续改进闭环/部署新版本

#### Container / deployment layer

- pathKey: `L/L5. 系统基础设施/Container / deployment layer`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L5-85pyo8-1.json`
- status: draft
- definition: Container / deployment layer 承载服务打包、部署、滚动升级、扩缩容和环境隔离。
- importance: AI 服务要从原型走向生产，部署层决定了能否稳定上线、回滚和做灰度。
- minimum demo: 把一个推理服务容器化并部署到可回滚环境中，验证升级和回退路径。
- prerequisites:
  - L/L5. 系统基础设施/Artifact storage
  - M/M4. 在线评测/Canary / regression set
- core metrics:
  - deploy success rate
  - rollback time
- next:
  - N/N6. 持续改进闭环/部署新版本
  - L/L7. 生产运行指标/Availability

### L6. 硬件层

- pathKey: `L/L6. 硬件层`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-L.json`
- status: draft
- definition: 硬件层描述 CPU、GPU、NPU、统一内存、多卡和网络带宽等资源约束如何直接塑造训练和推理系统设计。
- importance: 模型是否能跑、多大 batch 合理、上下文能开多长、是否适合多机扩展，最终都会落到硬件边界上。
- minimum demo: 在两类不同硬件上运行相同工作负载，比较吞吐、成本和内存压力的差异。
- prerequisites:
  - L
  - L/L3. 推理优化
  - L/L4. 训练基础设施
- core metrics:
  - tokens/sec
  - GPU utilization
  - memory pressure
  - network bottleneck
- next:
  - L/L6. 硬件层/CPU
  - L/L6. 硬件层/GPU
  - L/L6. 硬件层/NPU
  - L/L6. 硬件层/Apple silicon unified memory
  - L/L6. 硬件层/Multi-GPU
  - L/L6. 硬件层/VRAM / RAM / disk constraints
  - L/L6. 硬件层/Network bandwidth

#### CPU

- pathKey: `L/L6. 硬件层/CPU`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L6-188qdvk-1.json`
- status: draft
- definition: CPU 在 AI 系统中承担控制流、数据处理、轻量模型推理和部分后处理工作，不只是 GPU 的配角。
- importance: 很多检索、解析、调度和小模型任务主要吃 CPU；忽略它会误判瓶颈来源。
- minimum demo: 对同一任务分离统计 CPU 侧解析、检索和推理前后处理耗时。
- prerequisites:
  - L/L5. 系统基础设施/Queue
  - L/L7. 生产运行指标/Latency
- core metrics:
  - cpu utilization
  - host-side latency
- next:
  - L/L6. 硬件层/GPU
  - L/L6. 硬件层/VRAM / RAM / disk constraints

#### GPU

- pathKey: `L/L6. 硬件层/GPU`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L6-188qdvk-1.json`
- status: draft
- definition: GPU 是当前大多数大模型训练和高性能推理的主力算力单元，决定了模型尺寸、batch 和吞吐上限。
- importance: 理解 GPU 约束是理解 serving 和训练成本结构的核心。
- minimum demo: 在 GPU 上跑一次推理或训练任务，记录显存占用、吞吐和尾延迟。
- prerequisites:
  - L/L3. 推理优化
  - L/L4. 训练基础设施/PyTorch
- core metrics:
  - tokens/sec
  - gpu utilization
  - vram usage
- next:
  - L/L6. 硬件层/Multi-GPU
  - L/L7. 生产运行指标/GPU utilization

#### NPU

- pathKey: `L/L6. 硬件层/NPU`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L6-188qdvk-1.json`
- status: draft
- definition: NPU 指面向端侧或专用推理场景的神经网络加速单元，常用于移动端、边缘设备和特定硬件平台。
- importance: 随着端侧 AI 增长，NPU 会越来越影响哪些模型能上设备、哪些交互能本地完成。
- minimum demo: 选择一个支持 NPU 的设备，比较同一轻量模型在 CPU 和 NPU 上的速度与功耗。
- prerequisites:
  - L/L1. 模型访问方式/浏览器 / Edge 推理
  - E/E5. 多模态
- core metrics:
  - edge latency
  - power efficiency
- next:
  - L/L1. 模型访问方式/浏览器 / Edge 推理
  - L/L7. 生产运行指标/Cost

#### Apple silicon unified memory

- pathKey: `L/L6. 硬件层/Apple silicon unified memory`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L6-188qdvk-1.json`
- status: draft
- definition: Apple silicon unified memory 让 CPU/GPU 共享统一内存池，改变了本地模型在 Mac 上的容量和调优方式。
- importance: 它是当前本地 LLM 原型开发里最有代表性的硬件路径之一，尤其影响本地推理体验和模型选择。
- minimum demo: 在 Apple silicon 上比较不同模型尺寸和量化版本的统一内存占用与实际体验。
- prerequisites:
  - L/L1. 模型访问方式/本地推理
  - L/L2. 服务运行时/MLX / MLX-LM
- core metrics:
  - memory pressure
  - usable model size
- next:
  - L/L2. 服务运行时/MLX / MLX-LM
  - L/L3. 推理优化/Quantized inference

#### Multi-GPU

- pathKey: `L/L6. 硬件层/Multi-GPU`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L6-188qdvk-1.json`
- status: draft
- definition: Multi-GPU 通过数据并行、张量并行、流水线并行或专家并行把计算分布到多张卡上，用来扩展模型容量、batch 大小或服务吞吐，但同时引入通信和调度复杂度。
- importance: 多卡不是线性加速按钮；一旦进入多卡，通信拓扑、跨卡同步、参数切分和负载均衡都会变成一等公民。很多系统在单卡没问题，上多卡后吞吐提升有限、尾延迟却明显变差。
- minimum demo: 对同一工作负载比较单卡与多卡的 tokens/s、显存占用、扩展效率和跨卡通信等待时间，确认瓶颈到底在算力还是在互联。
- prerequisites:
  - L/L4. 训练基础设施/DDP
  - L/L6. 硬件层/Network bandwidth
- core metrics:
  - scale efficiency
  - communication overhead
  - load imbalance
- next:
  - L/L4. 训练基础设施/FSDP
  - L/L7. 生产运行指标/Throughput

#### VRAM / RAM / disk constraints

- pathKey: `L/L6. 硬件层/VRAM / RAM / disk constraints`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L6-188qdvk-1.json`
- status: draft
- definition: 这一层关注显存、内存和磁盘约束如何共同决定模型能否加载、上下文能开多长以及缓存和 checkpoint 是否可行。
- importance: 很多‘模型慢’或‘模型跑不动’的问题，根本不是算法问题，而是资源层级被打满。
- minimum demo: 记录一次长上下文推理或训练时的 VRAM、RAM 和磁盘占用变化，定位真正瓶颈。
- prerequisites:
  - L/L3. 推理优化/KV cache
  - L/L4. 训练基础设施/Checkpointing
- core metrics:
  - oom rate
  - memory pressure
  - disk spill rate
- next:
  - L/L3. 推理优化/KV offload
  - L/L7. 生产运行指标/Context pressure

#### Network bandwidth

- pathKey: `L/L6. 硬件层/Network bandwidth`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L6-188qdvk-1.json`
- status: draft
- definition: Network bandwidth 影响多机训练、远程存储访问、模型下载和服务间调用，在分布式系统里经常成为隐藏瓶颈。
- importance: 一旦进入多机多卡或重依赖远程存储的场景，网络就可能比 GPU 更先拖垮系统。
- minimum demo: 在分布式训练或远程制品拉取中记录带宽占用和等待时间，检查网络是否成为瓶颈。
- prerequisites:
  - L/L4. 训练基础设施/Distributed training
  - L/L5. 系统基础设施/Object storage
- core metrics:
  - network throughput
  - communication wait time
- next:
  - L/L6. 硬件层/Multi-GPU
  - L/L7. 生产运行指标/Availability

### L7. 生产运行指标

- pathKey: `L/L7. 生产运行指标`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-L.json`
- status: draft
- definition: 生产运行指标是把推理系统的健康状态转成可持续监控和调优的指标体系，例如延迟、吞吐、成本、错误率、可用性、token 使用、GPU 利用率和上下文压力。
- importance: 没有统一指标口径，很多优化和事故都只能凭感觉讨论，无法稳定复盘或做容量规划。
- minimum demo: 为一个推理服务接入延迟、吞吐、错误率和成本看板，并观察配置变更后的指标波动。
- prerequisites:
  - L/L2. 服务运行时
  - L/L3. 推理优化
  - M/M4. 在线评测
- core metrics:
  - latency
  - throughput
  - cost
  - error rate
  - availability
- next:
  - L/L7. 生产运行指标/Latency
  - L/L7. 生产运行指标/Throughput
  - L/L7. 生产运行指标/Cost
  - L/L7. 生产运行指标/Error rate
  - L/L7. 生产运行指标/Availability
  - L/L7. 生产运行指标/Token usage
  - L/L7. 生产运行指标/GPU utilization
  - L/L7. 生产运行指标/Context pressure

#### Latency

- pathKey: `L/L7. 生产运行指标/Latency`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L7-1x3u377-1.json`
- status: draft
- definition: Latency 衡量请求从进入系统到返回结果所需时间，通常要区分首 token、总响应和 p95/p99 尾延迟。
- importance: 用户体验首先感知到的就是延迟，而尾延迟往往比平均值更能暴露系统问题。
- minimum demo: 记录服务的 p50/p95 首 token 和总时延，并对比配置变化后的波动。
- prerequisites:
  - L/L3. 推理优化/Throughput / latency tuning
  - M/M4. 在线评测/Acceptance rate
- core metrics:
  - ttft
  - p95 latency
  - p99 latency
- next:
  - L/L7. 生产运行指标/Throughput
  - L/L7. 生产运行指标/Error rate

#### Throughput

- pathKey: `L/L7. 生产运行指标/Throughput`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L7-1x3u377-1.json`
- status: draft
- definition: Throughput 衡量系统在稳定运行条件下单位时间能处理多少请求、多少 token 或多少成功任务，是容量规划和调度优化的直接结果指标。
- importance: 没有吞吐视角，只盯单请求速度会误判整体承载能力。很多优化能让单请求更快，却让批量服务能力下降；真正上线时吃的是总吞吐，不是 demo 时的一次响应。
- minimum demo: 在固定负载生成器下逐步提升并发，记录 req/s、tokens/s、成功任务数和尾延迟，找出吞吐达到平台期前后的拐点。
- prerequisites:
  - L/L3. 推理优化/Continuous batching
  - L/L6. 硬件层/GPU
- core metrics:
  - req/sec
  - tokens/sec
  - successful tasks/sec
- next:
  - L/L7. 生产运行指标/Cost
  - L/L7. 生产运行指标/GPU utilization

#### Cost

- pathKey: `L/L7. 生产运行指标/Cost`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L7-1x3u377-1.json`
- status: draft
- definition: Cost 衡量模型调用、硬件资源、缓存、存储、人工审核和运维综合后的单位任务成本或单位 token 成本，关注的是系统真实交付一件事要花多少钱。
- importance: 很多方案不是做不到，而是做到的成本不可接受。只看模型 API 单价通常会低估真实成本，因为重试、缓存未命中、失败任务和人工兜底都会把账单抬高。
- minimum demo: 按一次成功任务拆账，分别统计模型调用、检索、缓存、工具执行、人工审批和失败重试成本，形成可复用的 cost per success 模板。
- prerequisites:
  - L/L7. 生产运行指标/Throughput
  - M/M4. 在线评测/Business KPIs
- core metrics:
  - cost per successful task
  - cost per 1k tokens
  - retry waste ratio
- next:
  - L/L7. 生产运行指标/Token usage
  - N/N3. 决策变量/成本预算

#### Error rate

- pathKey: `L/L7. 生产运行指标/Error rate`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L7-1x3u377-1.json`
- status: draft
- definition: Error rate 记录请求失败、超时、OOM、协议不匹配、工具异常和内部降级等错误占比，关键不只是总错误率，还包括不同错误类型的结构。
- importance: 错误率通常会先于用户投诉暴露系统退化，是容量、依赖稳定性和发布质量的第一信号。若只看总数而不拆类型，很难判断是模型、工具、队列还是基础设施在出问题。
- minimum demo: 按错误类型和调用阶段拆分统计失败，观察流量变化、发布切换或外部依赖异常时哪些错误率先飙升。
- prerequisites:
  - J/J7. 工程可靠性/Error classes
  - L/L5. 系统基础设施/Queue
- core metrics:
  - error rate
  - timeout rate
  - oom rate
  - stage-specific failure rate
- next:
  - L/L7. 生产运行指标/Availability
  - M/M8. 对抗测试与审计/Incident review

#### Availability

- pathKey: `L/L7. 生产运行指标/Availability`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L7-1x3u377-1.json`
- status: draft
- definition: Availability 衡量服务在一段时间内是否可访问、是否满足既定 SLA/SLO，以及故障后恢复有多快。
- importance: AI 系统一旦接业务流程，可用性就和模型质量一样重要；偶发不可用会直接破坏信任。
- minimum demo: 记录服务 uptime、故障窗口和恢复时间，并做一次失败演练。
- prerequisites:
  - L/L5. 系统基础设施/Container / deployment layer
  - L/L7. 生产运行指标/Error rate
- core metrics:
  - uptime
  - mttr
- next:
  - M/M4. 在线评测/Canary / regression set
  - N/N6. 持续改进闭环/部署新版本

#### Token usage

- pathKey: `L/L7. 生产运行指标/Token usage`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L7-1x3u377-1.json`
- status: draft
- definition: Token usage 跟踪输入、输出和缓存命中前后的 token 消耗，是成本和上下文管理的直接代理指标。
- importance: 很多隐藏成本都来自无效 token；不看 token 用量，很难优化提示和上下文结构。
- minimum demo: 统计不同场景的输入/输出 token，并比较裁剪、缓存和 RAG 打包策略的影响。
- prerequisites:
  - J/J4. 会话与状态/Token budgeting
  - L/L3. 推理优化/Context length management
- core metrics:
  - input tokens
  - output tokens
  - wasted tokens
- next:
  - L/L7. 生产运行指标/Cost
  - L/L7. 生产运行指标/Context pressure

#### GPU utilization

- pathKey: `L/L7. 生产运行指标/GPU utilization`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L7-1x3u377-1.json`
- status: draft
- definition: GPU utilization 衡量 GPU 是否被持续有效利用，而不是空转、抖动或被等待拖住。
- importance: GPU 利用率直接决定自托管推理和训练的经济性，是很多优化动作的核心反馈信号。
- minimum demo: 在不同 batch 和并发配置下记录 GPU 利用率，并和吞吐、延迟一起对照分析。
- prerequisites:
  - L/L3. 推理优化/Continuous batching
  - L/L6. 硬件层/GPU
- core metrics:
  - gpu utilization
  - idle ratio
- next:
  - L/L3. 推理优化/Throughput / latency tuning
  - L/L7. 生产运行指标/Throughput

#### Context pressure

- pathKey: `L/L7. 生产运行指标/Context pressure`
- node type: `concept-group`
- detail source: `data/details/leaves-L-L7-1x3u377-1.json`
- status: draft
- definition: Context pressure 描述上下文长度、缓存占用和内存压力对性能、成本和质量造成的综合张力。
- importance: 很多系统随着上下文增长会同时出现更慢、更贵和更差的现象，这个指标就是用来盯住这种退化。
- minimum demo: 随上下文长度递增记录时延、内存和质量变化，找出退化拐点。
- prerequisites:
  - L/L3. 推理优化/Context length management
  - L/L6. 硬件层/VRAM / RAM / disk constraints
- core metrics:
  - latency vs context
  - memory pressure
  - quality degradation
- next:
  - I/I3. RAG 管线/Context packing
  - N/N3. 决策变量/延迟要求

## M. 评测、安全与治理

- pathKey: `M`
- node type: `domain`
- stage: 05 运行、治理与产品
- graph summary: OpenAI 的 eval 文档把评测分成 datasets、graders、eval runs；agent-evals 又强调 traces、tool calls、handoffs、guardrails 的工作流级评测；安全文档强调 moderation、adversarial testing、human oversight，以及在 agent 场景下避免把不可信输入直接提升到高权限上下文。
- relation notes:
  - 评测、安全与治理 横跨 LLM 核心机制、模型适配、后训练与对齐、检索、记忆与外部知识、AI 应用工程、Agent 系统、运行时与基础设施、产品、场景与组织。
  - 评测不是上线后的附属物，而是训练、优化、路由、工具设计的反馈入口。
  - 安全不是单点模块，而是输入、上下文、工具、输出、权限、审计的联合系统。
  - Agent 时代的评测对象不只“答案”，还包括“过程”。
- detail source: `data/details/domain-M.json`
- status: completed
- definition: 评测、安全与治理是把 AI 系统从“能跑”推进到“可验证、可控、可审计、可持续运营”的横切域，覆盖离线评测、在线评测、安全控制、Guardrails、隐私合规，以及对抗测试与事后审计。它关注的不只是模型本身能力，还包括应用输出质量、Agent 执行过程、真实用户环境下的行为稳定性，以及在风险、成本、权限和组织流程约束下的整体可靠性。
- importance: 没有这一层，团队通常只能凭主观体验判断系统是否可用，无法稳定发现回归、定位失败原因、约束高风险行为，也无法向业务、法务和安全团队证明系统值得上线。这个 domain 的价值在于把“效果”“风险”“责任边界”转成可测指标、可执行控制和可复盘机制，使模型升级、提示词修改、工具接入和流程调整都能在明确证据下进行。
- minimum demo: 搭建一个最小评测与治理闭环：选一个具体任务，准备一小组离线样本集与评分 rubric；同时定义 3 到 5 个核心线上指标；在调用链上加入基础输入/输出校验、敏感操作审批或限权、日志与审计字段；再做一次针对越狱、提示注入、隐私泄露和工具误调用的对抗测试。最终产物至少包括：评测集、评分脚本或 grader、风险清单、上线门槛、回归报告。
- hardware budget: 学习和建立最小闭环通常不依赖高端算力。多数工作发生在样本整理、评测脚本、日志分析、规则校验和红队测试上，单机或普通开发环境即可完成。主要成本往往来自模型 API 调用、人工标注与复核、线上灰度流量，以及安全与合规流程本身，而不是 GPU 训练预算。
- examples:
  - 为问答应用同时检查最终答案正确性、引用真实性和拒答是否符合策略。
  - 为带工具调用的 Agent 记录 trace，并评估工具选择是否正确、流程是否完整、审批点是否被绕过。
  - 在上线前对 prompt injection、越狱、敏感工具误调用做红队测试，并把失败样例加入安全回归集。
  - 在线上灰度中比较两个版本的任务完成率、用户接受率、人工接管率和单位任务成本。
  - 对包含个人信息的场景增加脱敏、访问控制、保留周期和审计日志检查。
- pitfalls:
  - 只看离线准确率，不看线上接受率、失败恢复和真实用户行为漂移。
  - 把安全当作单点过滤器，而不是贯穿输入、输出、工具、权限和审计的系统工程。
  - 没有统一 failure taxonomy，导致问题重复出现但无法归类和收敛。
  - 只做一次性红队演练，不把失败案例沉淀为可回归的测试集。
  - 上线门槛模糊，模型或提示词升级后缺乏可复用的回归流程。
  - 只关注模型回答内容，不检查工具副作用、权限边界和数据处理链路。
- core metrics:
  - offline pass rate
  - task success rate
  - acceptance rate
  - business KPI lift
  - citation accuracy
  - schema adherence
  - tool execution success
  - workflow completion rate
  - policy compliance rate
  - attack success rate
  - false positive / false negative rate
  - latency
  - cost per successful task
  - incident rate
  - audit coverage
- toolchain:
  - golden set / regression set
  - LLM-as-judge 或规则 grader
  - human review workflow
  - trace logging / observability
  - A/B testing
  - canary release
  - moderation API
  - policy engine
  - schema validator
  - sandbox / permission control
  - red teaming harness
  - audit log pipeline
- failure signs:
  - 版本升级后核心任务指标无明显告警却出现大量用户投诉或人工兜底。
  - 同一类错误反复出现，但日志里没有足够字段支持定位。
  - 安全策略存在明显绕过路径，尤其是在工具调用、检索结果或系统提示被污染时。
  - 离线分数看起来稳定，但线上接受率、完成率或业务指标持续下滑。
  - 无法回答“为什么这个结果被放行/拦截”“谁在什么条件下调用了什么工具”。
  - 涉及敏感数据的流程没有脱敏、留痕、最小权限或保留周期说明。
- next:
  - M/M1. 模型级评测
  - M/M2. 应用级评测
  - M/M3. Agent 级评测
  - M/M4. 在线评测
  - M/M5. 安全控制
  - M/M6. Guardrails
  - M/M7. 隐私与合规
  - M/M8. 对抗测试与审计

### M1. 模型级评测

- pathKey: `M/M1. 模型级评测`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-M.json`
- status: draft
- definition: 模型级评测聚焦基础模型本身的能力与约束，不依赖完整应用或 agent 环境，主要回答“这个模型本体擅长什么、不稳定在哪、成本怎样”。
- importance: 它是模型选型、版本切换和基础回归的第一层。如果这层不清楚，后续应用问题很容易把模型能力缺口、提示词问题和系统问题混在一起。
- minimum demo: 拿同一组固定任务对比 2 到 3 个模型，覆盖语言、推理、结构化输出、安全和延迟成本，并输出统一报告。
- prerequisites:
  - M
  - J/J2. 结构化输出
  - G/G6. 局限面
- core metrics:
  - capability pass rate
  - safety violation rate
  - latency
  - cost
- next:
  - M/M1. 模型级评测/语言能力
  - M/M1. 模型级评测/推理能力
  - M/M1. 模型级评测/多模态能力
  - M/M1. 模型级评测/结构化输出正确率
  - M/M1. 模型级评测/安全性
  - M/M1. 模型级评测/稳定性
  - M/M1. 模型级评测/延迟/成本

#### 语言能力

- pathKey: `M/M1. 模型级评测/语言能力`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M1-1lohovz-1.json`
- status: draft
- definition: 语言能力评测模型在理解、生成、摘要、翻译、改写和信息抽取等语言任务上的基础表现。
- importance: 这是很多应用的底盘，如果语言基础不稳，后续再复杂的系统工程也只能放大缺陷。
- minimum demo: 用同一组固定文本任务评估多个模型的理解、生成和抽取质量，并保留误差样例。
- prerequisites:
  - M/M1. 模型级评测
  - E/E1. 语言（NLP / LLM）
- core metrics:
  - text task accuracy
  - instruction following quality
- next:
  - M/M1. 模型级评测/推理能力
  - M/M2. 应用级评测/最终答案正确性

#### 推理能力

- pathKey: `M/M1. 模型级评测/推理能力`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M1-1lohovz-1.json`
- status: draft
- definition: 推理能力评测模型在多步推导、规则应用、规划、比较和一致性判断上的表现，而不是只看语言流畅度。
- importance: 很多 agent 和高价值应用失败，根源并不在语言生成，而在规划、约束遵守和多步判断。
- minimum demo: 准备一组需要多步思考和明确验证的任务，比较模型是否稳定给出正确中间推导和最终结论。
- prerequisites:
  - M/M1. 模型级评测
  - G/G8. 推理模型与模型路由
- core metrics:
  - reasoning accuracy
  - consistency under reformulation
- next:
  - M/M3. Agent 级评测/Process checks
  - M/M1. 模型级评测/稳定性

#### 多模态能力

- pathKey: `M/M1. 模型级评测/多模态能力`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M1-1lohovz-1.json`
- status: draft
- definition: 多模态能力评测模型在文本之外处理图像、音频、文件或混合输入时的理解与生成能力。
- importance: 一旦应用接触图片、语音或复杂文件，单文本评测就不再足够，会直接漏掉关键失败模式。
- minimum demo: 用一组图像、音频或文件任务测试模型的读取、解释和跨模态回答质量。
- prerequisites:
  - M/M1. 模型级评测
  - E/E5. 多模态
- core metrics:
  - cross-modal accuracy
  - modality robustness
- next:
  - J/J6. 多模态应用
  - M/M2. 应用级评测/UX consistency

#### 结构化输出正确率

- pathKey: `M/M1. 模型级评测/结构化输出正确率`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M1-1lohovz-1.json`
- status: draft
- definition: 结构化输出正确率检查模型是否能稳定产出符合 schema、字段类型和约束的结构化结果。
- importance: 这项能力直接决定模型能否可靠接入工具、工作流和自动化系统。
- minimum demo: 给模型一组需要 JSON 或 typed output 的任务，检查解析、校验和字段完整性。
- prerequisites:
  - J/J2. 结构化输出/JSON Schema
  - J/J2. 结构化输出/Validation
- core metrics:
  - schema pass rate
  - parse success rate
- next:
  - M/M2. 应用级评测/Schema adherence
  - M/M1. 模型级评测/稳定性

#### 安全性

- pathKey: `M/M1. 模型级评测/安全性`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M1-1lohovz-1.json`
- status: draft
- definition: 安全性评测模型在越狱、提示注入、有害内容和敏感任务上的基础风险暴露与拒绝表现。
- importance: 模型安全底盘如果薄弱，应用层再加 guardrail 也只能部分补救，且成本会迅速上升。
- minimum demo: 用一组对抗提示和高风险请求测试模型的拒答、转义和误放行情况。
- prerequisites:
  - M/M5. 安全控制
  - M/M6. Guardrails
- core metrics:
  - attack success rate
  - unsafe completion rate
- next:
  - M/M5. 安全控制/Jailbreak defense
  - M/M6. Guardrails/Policy guardrails

#### 稳定性

- pathKey: `M/M1. 模型级评测/稳定性`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M1-1lohovz-1.json`
- status: draft
- definition: 稳定性评测模型在提示稍变、顺序稍变、采样参数变化时结果是否仍然一致可用。
- importance: 很多系统问题不是平均能力不够，而是输出波动过大，导致产品行为不稳定、难回归和难解释。
- minimum demo: 对同一任务做多次重跑和轻微改写，比较结果波动、失败类别和恢复能力。
- prerequisites:
  - M/M1. 模型级评测/推理能力
  - M/M1. 模型级评测/结构化输出正确率
- core metrics:
  - variance across runs
  - prompt sensitivity
- next:
  - M/M4. 在线评测/Canary / regression set
  - M/M2. 应用级评测/Failure recovery

#### 延迟/成本

- pathKey: `M/M1. 模型级评测/延迟/成本`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M1-1lohovz-1.json`
- status: draft
- definition: 延迟/成本评测模型在不同任务和输出长度下的响应时间、token 消耗和单位任务成本。
- importance: 模型再强，如果成本和时延超出产品预算，也无法成为生产可用选择。
- minimum demo: 对固定任务集记录首 token 延迟、总时延、token 用量和单位成功任务成本。
- prerequisites:
  - M/M1. 模型级评测
  - J/J5. 流式与实时
- core metrics:
  - p50/p95 latency
  - cost per successful task
- next:
  - M/M4. 在线评测/Business KPIs
  - M/M4. 在线评测/A/B tests

### M2. 应用级评测

- pathKey: `M/M2. 应用级评测`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-M.json`
- status: draft
- definition: 应用级评测关注真实产品形态里的结果质量：最终答案对不对、引用真不真、结构化输出是否合法、工具有没有成功执行、用户体验是否一致。
- importance: 同一个模型在不同应用里的表现可能差别极大；只有到应用层，检索、提示、状态、工具和前端交互的组合效果才会显现。
- minimum demo: 选一个具体应用形态，准备一组真实任务样本，分别对答案、引用、schema、工具和恢复路径打分。
- prerequisites:
  - M/M1. 模型级评测
  - J/J9. 应用形态
  - I/I3. RAG 管线
- core metrics:
  - answer correctness
  - citation accuracy
  - schema adherence
  - failure recovery
- next:
  - M/M2. 应用级评测/最终答案正确性
  - M/M2. 应用级评测/引用真实性
  - M/M2. 应用级评测/Schema adherence
  - M/M2. 应用级评测/Tool execution success
  - M/M2. 应用级评测/UX consistency
  - M/M2. 应用级评测/Failure recovery

#### 最终答案正确性

- pathKey: `M/M2. 应用级评测/最终答案正确性`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M2-yco4qk-1.json`
- status: draft
- definition: 最终答案正确性检查用户最终看到的答案是否满足任务目标，而不是只看模型中间推理是否像样。
- importance: 应用最终还是要对用户结果负责；过程再漂亮，只要答案错了，业务价值就没有建立起来。
- minimum demo: 为一个具体应用准备带标准答案或人工判定规则的任务集，直接评估最终输出。
- prerequisites:
  - M/M2. 应用级评测
  - M/M1. 模型级评测/语言能力
- core metrics:
  - final answer accuracy
  - false confident answer rate
- next:
  - M/M2. 应用级评测/引用真实性
  - M/M4. 在线评测/Task completion

#### 引用真实性

- pathKey: `M/M2. 应用级评测/引用真实性`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M2-yco4qk-1.json`
- status: draft
- definition: 引用真实性检查答案引用的来源是否真实存在、是否支持当前结论，以及引用位置是否对得上。
- importance: RAG 和资料类应用一旦引用不真，用户信任会快速崩塌，即使答案表面看起来合理也不够。
- minimum demo: 抽样检查答案中的引用片段、出处链接和原文支撑关系，并标注不一致类型。
- prerequisites:
  - I/I3. RAG 管线/Citation / provenance
  - I/I6. 关键质量点/引用可信度
- core metrics:
  - citation accuracy
  - unsupported claim rate
- next:
  - M/M2. 应用级评测/最终答案正确性
  - M/M4. 在线评测/Human feedback

#### Schema adherence

- pathKey: `M/M2. 应用级评测/Schema adherence`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M2-yco4qk-1.json`
- status: draft
- definition: Schema adherence 评估应用在真实上下文中是否稳定产出满足接口契约的结构化输出。
- importance: 模型级结构化输出通过，不代表在复杂上下文、长历史和工具结果注入后仍然稳定。
- minimum demo: 在真实应用链路中收集结构化输出结果，检查解析、校验和字段语义是否一致。
- prerequisites:
  - J/J2. 结构化输出/Typed outputs
  - J/J2. 结构化输出/Validation
- core metrics:
  - schema pass rate
  - semantic field correctness
- next:
  - M/M2. 应用级评测/Tool execution success
  - M/M1. 模型级评测/结构化输出正确率

#### Tool execution success

- pathKey: `M/M2. 应用级评测/Tool execution success`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M2-yco4qk-1.json`
- status: draft
- definition: Tool execution success 评估应用里工具调用是否被正确触发、成功执行、结果是否被正确吸收并推动任务前进。
- importance: 很多看似是回答错误的问题，根源其实是工具没有执行成功或结果没有被正确处理。
- minimum demo: 记录真实任务里的工具调用，检查触发率、成功率、超时、重试和结果注入质量。
- prerequisites:
  - J/J3. 工具调用/Tool execution
  - J/J3. 工具调用/Tool retries / fallback
- core metrics:
  - tool success rate
  - useful tool call ratio
- next:
  - M/M2. 应用级评测/Failure recovery
  - M/M3. Agent 级评测/Tool selection correctness

#### UX consistency

- pathKey: `M/M2. 应用级评测/UX consistency`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M2-yco4qk-1.json`
- status: draft
- definition: UX consistency 关注应用在流式、语音、多模态和错误场景下，体验是否连贯、可理解且与系统状态一致。
- importance: 很多用户并不会把问题归因到模型，而只会感知‘这个产品不稳定、不可信、体验割裂’。
- minimum demo: 检查正常路径、超时路径和失败路径下的界面、状态提示和结果展示是否一致。
- prerequisites:
  - J/J5. 流式与实时
  - J/J9. 应用形态
- core metrics:
  - UX defect rate
  - state-to-UI consistency
- next:
  - M/M4. 在线评测/Acceptance rate
  - M/M4. 在线评测/Human feedback

#### Failure recovery

- pathKey: `M/M2. 应用级评测/Failure recovery`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M2-yco4qk-1.json`
- status: draft
- definition: Failure recovery 评估应用在工具失败、模型不确定、超时或人工拒绝后，能否优雅恢复而不是直接崩坏。
- importance: 真实系统的关键不只是成功率，还包括失败时是否还能保持边界和用户信任。
- minimum demo: 为几类常见失败注入故障，检查系统是否能重试、回退、解释失败或升级到人工处理。
- prerequisites:
  - J/J7. 工程可靠性/Fallback
  - J/J7. 工程可靠性/Retry
- core metrics:
  - recovery success rate
  - graceful failure rate
- next:
  - M/M4. 在线评测/Real-user failure mining
  - M/M3. Agent 级评测/Workflow completion rate

### M3. Agent 级评测

- pathKey: `M/M3. Agent 级评测`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-M.json`
- status: draft
- definition: Agent 级评测不只看最终答案，还检查过程、工具选择、交接、审批和产物，回答“这个 agent 是不是以正确方式完成了任务”。
- importance: agent 系统的很多失败不会反映在最终文本里，而藏在 trace、routing、tool 使用和副作用控制中；没有这层就无法真正治理 agent。
- minimum demo: 为一个多步 agent 任务定义 trace schema、rubric 和 artifact checker，并分别对结果、过程和审批正确性评分。
- prerequisites:
  - K/K9. Agent 观测与控制
  - K/K4. 多 Agent 模式
  - M/M2. 应用级评测
- core metrics:
  - workflow completion rate
  - tool selection correctness
  - policy compliance
  - approval correctness
- next:
  - M/M3. Agent 级评测/Trace schema
  - M/M3. Agent 级评测/Grader rubric
  - M/M3. Agent 级评测/Outcome checks
  - M/M3. Agent 级评测/Process checks
  - M/M3. Agent 级评测/Artifact checks
  - M/M3. Agent 级评测/Trace grading
  - M/M3. Agent 级评测/Tool selection correctness
  - M/M3. Agent 级评测/Handoff correctness
  - M/M3. Agent 级评测/Routing quality
  - M/M3. Agent 级评测/Policy compliance
  - M/M3. Agent 级评测/Workflow completion rate
  - M/M3. Agent 级评测/Approval correctness
  - M/M3. Agent 级评测/Failure taxonomy

#### Trace schema

- pathKey: `M/M3. Agent 级评测/Trace schema`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M3-kxt1tw-1.json`
- status: draft
- definition: Trace schema 定义一次 agent 执行里必须被记录的单元：step、tool call、artifact、handoff、guardrail、approval、结果状态等。
- importance: 没有统一 trace schema，就无法做 process checks、artifact checks、failure taxonomy 和线上 failure mining；Agent eval 会退化成“只看最后答案”。
- minimum demo: 为一个多步 agent 记录标准 trace JSON，再用 grader 对 step、tool、artifact 和 final outcome 分别打分。
- hardware budget: CPU 即可，重点是观测管线和存储。
- prerequisites:
  - M/M3. Agent 级评测
  - K/K9. Agent 观测与控制
- core metrics:
  - trace completeness
  - grader agreement
  - failure attribution quality
- toolchain:
  - trace store
  - grader pipeline
  - artifact validators
- failure signs:
  - 只能看到最终答案，无法回放中间步骤
  - 同一个失败无法稳定归类到 retrieval / routing / tool / approval 哪一层
- next:
  - M/M3. Agent 级评测/Failure taxonomy
  - M/M4. 在线评测/Real-user failure mining

#### Grader rubric

- pathKey: `M/M3. Agent 级评测/Grader rubric`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M3-kxt1tw-1.json`
- status: draft
- definition: Grader rubric 定义评分器到底在检查什么：成功条件、失败类型、容忍范围、证据来源都要提前明确，而不是让 grader 只凭感觉打分。
- importance: 没有 rubric，trace grader 和 artifact checker 往往只能给出不稳定的主观分数，最后很难驱动优化决策。
- minimum demo: 为一个 coding agent 任务写出明确 rubric，并分别对 final answer、trace 和 artifacts 打分，比较 grader 一致性。
- hardware budget: CPU 即可，成本主要在样本建设、rubric 设计和反复校准。
- prerequisites:
  - M/M3. Agent 级评测
  - M/M3. Agent 级评测/Trace schema
  - M/M1. 模型级评测
- core metrics:
  - grader agreement
  - rubric coverage
  - false pass rate
  - false fail rate
- toolchain:
  - eval harness
  - rubric templates
  - trace / artifact graders
- failure signs:
  - 不同 grader 对同一执行给出相反结论
  - 只要答案看起来像对的，就放过了过程中的明显违规
- next:
  - M/M3. Agent 级评测/Outcome checks
  - M/M3. Agent 级评测/Process checks
  - M/M4. 在线评测/Canary / regression set

#### Outcome checks

- pathKey: `M/M3. Agent 级评测/Outcome checks`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M3-kxt1tw-1.json`
- status: draft
- definition: Outcome checks 只针对任务结果本身做判定，检查最终产出是否达标、是否完成目标、是否满足用户约束。
- importance: 它保证 agent 评测不会丢掉“最终结果是否有用”这个最基本问题。
- minimum demo: 为一个 agent 任务定义最终产出标准，并把正确、部分正确和失败明确区分开。
- prerequisites:
  - M/M3. Agent 级评测/Grader rubric
  - M/M2. 应用级评测/最终答案正确性
- core metrics:
  - outcome pass rate
  - partial success rate
- next:
  - M/M3. Agent 级评测/Process checks
  - M/M3. Agent 级评测/Trace grading

#### Process checks

- pathKey: `M/M3. Agent 级评测/Process checks`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M3-kxt1tw-1.json`
- status: draft
- definition: Process checks 检查 agent 是否按合理流程完成任务，例如是否检索了必要信息、是否验证过结果、是否按策略执行审批。
- importance: 很多最终答案碰巧正确的执行过程其实不可复用，过程检查就是为了识别这种伪成功。
- minimum demo: 为典型任务列出必须出现的关键步骤，再对 trace 逐项检查是否满足。
- prerequisites:
  - M/M3. Agent 级评测/Trace schema
  - K/K3. 单 Agent 模式
- core metrics:
  - required-step coverage
  - shortcut violation rate
- next:
  - M/M3. Agent 级评测/Trace grading
  - M/M3. Agent 级评测/Policy compliance

#### Artifact checks

- pathKey: `M/M3. Agent 级评测/Artifact checks`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M3-kxt1tw-1.json`
- status: draft
- definition: Artifact checks 评估 agent 生成的文件、补丁、截图、报告等产物是否完整、可读、可执行且与任务目标一致。
- importance: 对于 coding、document 或 computer-use agent，产物本身往往比最终一句回答更值得验收。
- minimum demo: 对一次任务的输出 artifacts 做格式、存在性和语义正确性检查。
- prerequisites:
  - M/M3. Agent 级评测/Trace schema
  - K/K7. 工具与外部连接/Sandbox workspace/Artifacts
- core metrics:
  - artifact validity
  - artifact usability
- next:
  - M/M3. Agent 级评测/Trace grading
  - M/M4. 在线评测/Task completion

#### Trace grading

- pathKey: `M/M3. Agent 级评测/Trace grading`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M3-kxt1tw-1.json`
- status: draft
- definition: Trace grading 是对整条执行轨迹做综合评分，把结果、过程、工具、审批和失败类型统一映射成可比较分数。
- importance: 它把分散的检查项整合成可追踪的总体判断，便于比较版本和筛选回归。
- minimum demo: 让 grader 读取一条完整 trace，并输出分项得分、总分和关键失败原因。
- prerequisites:
  - M/M3. Agent 级评测/Outcome checks
  - M/M3. Agent 级评测/Process checks
  - M/M3. Agent 级评测/Artifact checks
- core metrics:
  - grader agreement
  - ranking usefulness
- next:
  - M/M4. 在线评测/Canary / regression set
  - M/M3. Agent 级评测/Failure taxonomy

#### Tool selection correctness

- pathKey: `M/M3. Agent 级评测/Tool selection correctness`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M3-kxt1tw-1.json`
- status: draft
- definition: Tool selection correctness 检查 agent 是否选了对的工具、是否在该用工具时调用了工具，以及是否避免了不必要或危险的调用。
- importance: 工具选错通常会直接带来成本浪费、失败链扩散或副作用风险。
- minimum demo: 为一组需要不同工具的任务标注理想选择，再对 agent 的真实选择做对比评分。
- prerequisites:
  - J/J3. 工具调用/Tool routing
  - K/K9. Agent 观测与控制/Tool-call records
- core metrics:
  - tool precision
  - unnecessary tool call rate
- next:
  - M/M3. Agent 级评测/Routing quality
  - M/M2. 应用级评测/Tool execution success

#### Handoff correctness

- pathKey: `M/M3. Agent 级评测/Handoff correctness`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M3-kxt1tw-2.json`
- status: draft
- definition: Handoff correctness 检查任务在 agent 或人机之间交接时，必要状态、证据和待办是否被完整传递。
- importance: 多 agent 失败很大一部分不是模型不行，而是交接把上下文丢了。
- minimum demo: 抽样多 agent 任务，检查 handoff 前后任务目标、证据和未完成事项是否一致。
- prerequisites:
  - K/K4. 多 Agent 模式/Handoff
  - K/K9. Agent 观测与控制/Handoff records
- core metrics:
  - handoff completeness
  - context loss rate
- next:
  - M/M3. Agent 级评测/Routing quality
  - M/M3. Agent 级评测/Failure taxonomy

#### Routing quality

- pathKey: `M/M3. Agent 级评测/Routing quality`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M3-kxt1tw-2.json`
- status: draft
- definition: Routing quality 评估系统是否把任务送到了合适模型、合适工具或合适专长 agent，而不是随机碰运气。
- importance: 路由一旦错，后面的每一步都可能在错误轨道上高成本运行。
- minimum demo: 为一组需要不同专家或工具的任务检查路由决策是否匹配目标和上下文。
- prerequisites:
  - K/K4. 多 Agent 模式/Router / specialists
  - M/M3. Agent 级评测/Trace schema
- core metrics:
  - routing precision
  - misroute cost
- next:
  - M/M3. Agent 级评测/Tool selection correctness
  - M/M3. Agent 级评测/Failure taxonomy

#### Policy compliance

- pathKey: `M/M3. Agent 级评测/Policy compliance`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M3-kxt1tw-2.json`
- status: draft
- definition: Policy compliance 检查 agent 在真实执行过程中是否遵守权限、审批、安全和内容策略，而不是只看最终文本有没有违规。
- importance: agent 一旦有副作用能力，过程合规往往比回答内容本身更关键。
- minimum demo: 针对带审批和 guardrail 的任务，检查 agent 是否绕过限制、误放行或遗漏校验。
- prerequisites:
  - M/M6. Guardrails/Policy guardrails
  - K/K9. Agent 观测与控制/Guardrail results
- core metrics:
  - policy pass rate
  - bypass rate
- next:
  - M/M3. Agent 级评测/Approval correctness
  - M/M3. Agent 级评测/Failure taxonomy

#### Workflow completion rate

- pathKey: `M/M3. Agent 级评测/Workflow completion rate`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M3-kxt1tw-2.json`
- status: draft
- definition: Workflow completion rate 评估 agent 在多步任务中真正把目标推进到完成状态的比例，而不是停在半路或循环空转。
- importance: 对 agent 来说，完成率比单步正确率更接近业务价值，因为很多失败都出在长路径稳定性。
- minimum demo: 用一组真实多步任务统计完成率、平均步数、失败阶段和中途人工介入情况。
- prerequisites:
  - K/K5. 图式编排/Resumability
  - M/M2. 应用级评测/Failure recovery
- core metrics:
  - workflow completion rate
  - average steps to completion
- next:
  - M/M4. 在线评测/Task completion
  - M/M3. Agent 级评测/Failure taxonomy

#### Approval correctness

- pathKey: `M/M3. Agent 级评测/Approval correctness`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M3-kxt1tw-2.json`
- status: draft
- definition: Approval correctness 检查系统是否在该拦截时拦截、该放行时放行，并且审批上下文足以支持人做判断。
- importance: 审批点如果设计错了，要么形同虚设，要么把人类 review 队列拖垮。
- minimum demo: 抽样带审批任务，检查审批触发时机、展示信息和最终放行决策是否合理。
- prerequisites:
  - K/K8. 人在回路/Approval before side effects
  - J/J8. 安全与权限/Sensitive action approval
- core metrics:
  - approval precision
  - false approval rate
- next:
  - M/M3. Agent 级评测/Policy compliance
  - M/M4. 在线评测/Human feedback

#### Failure taxonomy

- pathKey: `M/M3. Agent 级评测/Failure taxonomy`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M3-kxt1tw-2.json`
- status: draft
- definition: Failure taxonomy 把 agent 失败稳定归类为 retrieval、routing、tool、approval、policy、state、UX 等类型，供修复和回归使用。
- importance: 没有稳定失败分类，团队只能每次从头吵一遍“这到底算模型问题还是系统问题”。
- minimum demo: 给一批失败 trace 打标签，形成统一 taxonomy，并把它接进回归和线上问题归因流程。
- prerequisites:
  - M/M3. Agent 级评测/Trace schema
  - M/M4. 在线评测/Real-user failure mining
- core metrics:
  - failure attribution consistency
  - repeat failure rate
- next:
  - M/M4. 在线评测/Real-user failure mining
  - N/N6. 持续改进闭环

### M4. 在线评测

- pathKey: `M/M4. 在线评测`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-M.json`
- status: draft
- definition: 在线评测关注系统进入真实流量后的表现，包括 A/B、人工反馈、接受率、任务完成率、业务指标、灰度回归和真实失败样本挖掘。
- importance: 离线分数只能说明一部分问题；真实用户行为、上下文噪声和组织流程约束，通常只有在线上才会完整暴露。
- minimum demo: 给一个已上线能力接入接受率、任务完成率和失败回放，并维护一组 canary cases 守住关键回归。
- prerequisites:
  - M/M2. 应用级评测
  - M/M3. Agent 级评测
  - J/J7. 工程可靠性
- core metrics:
  - acceptance rate
  - task completion
  - business lift
  - failure discovery rate
- next:
  - M/M4. 在线评测/A/B tests
  - M/M4. 在线评测/Human feedback
  - M/M4. 在线评测/Acceptance rate
  - M/M4. 在线评测/Task completion
  - M/M4. 在线评测/Business KPIs
  - M/M4. 在线评测/Canary / regression set
  - M/M4. 在线评测/Real-user failure mining

#### A/B tests

- pathKey: `M/M4. 在线评测/A/B tests`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M4-sx3jwy-1.json`
- status: draft
- definition: A/B tests 在真实流量里比较两个版本在接受率、完成率、成本和业务指标上的差异，而不是只看离线样本。
- importance: 很多优化在离线看起来更好，上线后却因为时延、交互或失败恢复变差而拉低整体表现。
- minimum demo: 把一个核心能力按流量切分成 A/B 两组，对比接受率、完成率和单位成功任务成本。
- prerequisites:
  - M/M4. 在线评测
  - M/M1. 模型级评测/延迟/成本
- core metrics:
  - lift
  - statistical confidence
- next:
  - M/M4. 在线评测/Acceptance rate
  - M/M4. 在线评测/Business KPIs

#### Human feedback

- pathKey: `M/M4. 在线评测/Human feedback`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M4-sx3jwy-1.json`
- status: draft
- definition: Human feedback 收集用户或审核人员对结果有用性、正确性和可接受性的直接反馈。
- importance: 在线上很多关键质量信号无法被自动指标完全覆盖，尤其是主观体验和业务适配度。
- minimum demo: 为关键交互加上简单反馈入口，并把反馈与具体 trace 和版本关联起来。
- prerequisites:
  - M/M4. 在线评测
  - K/K9. Agent 观测与控制/Tracing
- core metrics:
  - feedback rate
  - negative feedback concentration
- next:
  - M/M4. 在线评测/Acceptance rate
  - M/M4. 在线评测/Real-user failure mining

#### Acceptance rate

- pathKey: `M/M4. 在线评测/Acceptance rate`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M4-sx3jwy-1.json`
- status: draft
- definition: Acceptance rate 衡量用户或审核者在给出建议、结果或操作草案后，真正接受并继续使用的比例。
- importance: 这是最直接的在线质量信号之一，常常比静态正确率更接近产品价值。
- minimum demo: 统计建议被接受、拒绝、修改后接受的比例，并按场景细分。
- prerequisites:
  - M/M4. 在线评测
  - J/J9. 应用形态/Copilot
- core metrics:
  - acceptance rate
  - edit-before-accept rate
- next:
  - M/M4. 在线评测/Task completion
  - M/M4. 在线评测/Business KPIs

#### Task completion

- pathKey: `M/M4. 在线评测/Task completion`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M4-sx3jwy-1.json`
- status: draft
- definition: Task completion 衡量真实用户任务是否在可接受成本和时延内走到完成状态。
- importance: 对 workflow、agent 和复杂应用来说，完成率往往比单轮回答满意度更重要。
- minimum demo: 给一类典型任务打上开始和完成事件，统计端到端完成率和中途放弃原因。
- prerequisites:
  - M/M3. Agent 级评测/Workflow completion rate
  - M/M2. 应用级评测/最终答案正确性
- core metrics:
  - task completion rate
  - abandonment rate
- next:
  - M/M4. 在线评测/Business KPIs
  - M/M4. 在线评测/Real-user failure mining

#### Business KPIs

- pathKey: `M/M4. 在线评测/Business KPIs`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M4-sx3jwy-1.json`
- status: draft
- definition: Business KPIs 把 AI 系统结果映射到业务目标，例如转化、处理时长、人工成本下降或服务质量提升。
- importance: 如果指标无法落到业务结果，团队很容易陷入只优化模型分数却解释不了价值的循环。
- minimum demo: 为一个上线能力选 1 到 2 个业务指标，建立与模型版本和关键行为指标的关联看板。
- prerequisites:
  - M/M4. 在线评测
  - M/M4. 在线评测/Acceptance rate
- core metrics:
  - business lift
  - cost savings
- next:
  - N/N3. 决策变量/成本预算
  - N/N6. 持续改进闭环

#### Canary / regression set

- pathKey: `M/M4. 在线评测/Canary / regression set`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M4-sx3jwy-1.json`
- status: draft
- definition: Canary / regression set 是一组体量小但高信号的固定任务，用来在模型、提示词、工具或路由策略变更后快速判断有没有明显退化。
- importance: 没有这层小样本守门，团队很容易在追求新能力时把旧能力悄悄打坏，而且往往要上线后才发现。
- minimum demo: 为一个 coding assistant 维护 20~50 条高频高风险任务，每次改模型、prompt 或工具链都自动回归一次。
- hardware budget: CPU 或小规模 API 预算即可，关键是自动化和长期维护。
- prerequisites:
  - M/M1. 模型级评测
  - M/M2. 应用级评测
  - M/M3. Agent 级评测/Grader rubric
- core metrics:
  - regression catch rate
  - run time
  - false alarm rate
  - critical path coverage
- toolchain:
  - eval harness
  - CI / nightly jobs
  - baseline reports
- failure signs:
  - 线上频繁出问题，但回归集几乎从不报警
  - 回归集越来越大却没有关键场景优先级
- next:
  - M/M4. 在线评测/A/B tests
  - M/M4. 在线评测/Real-user failure mining
  - N/N6. 持续改进闭环

#### Real-user failure mining

- pathKey: `M/M4. 在线评测/Real-user failure mining`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M4-sx3jwy-1.json`
- status: draft
- definition: Real-user failure mining 指从真实线上交互、trace、人工反馈和拒绝样本里持续挖掘失败案例，再把它们回流到回归集、rubric 和优化队列。
- importance: Agent 和应用系统的很多关键失败只有在线上才能暴露；如果不做 failure mining，离线 eval 很快就会和真实世界脱节。
- minimum demo: 把线上失败按 retrieval / routing / tool / approval / UX 分类，每周抽样回放，并把高频失败转成 canary case 或数据修复任务。
- hardware budget: 硬件成本低，主要吃观测、标注和闭环流程成本。
- prerequisites:
  - M/M3. Agent 级评测/Trace schema
  - M/M4. 在线评测/Canary / regression set
  - M/M2. 应用级评测
- core metrics:
  - failure discovery rate
  - time to triage
  - repeat failure rate
  - mined-case adoption rate
- toolchain:
  - trace store
  - feedback pipeline
  - issue tracker
  - eval backfill scripts
- failure signs:
  - 团队总在讨论“用户说不好用”，但没有结构化失败样本
  - 相同失败一周又一周重复出现，却没有回流进回归集
- next:
  - M/M3. Agent 级评测/Failure taxonomy
  - M/M4. 在线评测/Canary / regression set
  - N/N6. 持续改进闭环
  - H/H7. 后训练数据构建

### M5. 安全控制

- pathKey: `M/M5. 安全控制`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-M.json`
- status: draft
- definition: 安全控制是面向运行时风险的主动约束层，覆盖内容审查、越狱防护、提示注入防护、敏感工具限制、最小权限、sandbox、审批门和限流。
- importance: 这是把模型与真实副作用世界隔开的第一道工程边界；没有它，系统再聪明也不具备上线条件。
- minimum demo: 给一个带工具和外部数据访问的应用加入 moderation、审批、最小权限和 sandbox 四类控制，并验证它们真的生效。
- prerequisites:
  - J/J8. 安全与权限
  - K/K7. 工具与外部连接
  - M/M1. 模型级评测/安全性
- core metrics:
  - unsafe action block rate
  - attack success rate
  - false positive rate
- next:
  - M/M5. 安全控制/Moderation
  - M/M5. 安全控制/Jailbreak defense
  - M/M5. 安全控制/Prompt injection defense
  - M/M5. 安全控制/Sensitive tool controls
  - M/M5. 安全控制/Least privilege
  - M/M5. 安全控制/Sandboxing
  - M/M5. 安全控制/Approval gates
  - M/M5. 安全控制/Rate limiting

#### Moderation

- pathKey: `M/M5. 安全控制/Moderation`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M5-1xznjc9-1.json`
- status: draft
- definition: Moderation 对输入、检索内容和输出中的有害、违规或高风险内容做分类、打标和拦截，是内容安全链路里最标准化的一层。
- importance: 它适合高频、可枚举、需要统一口径的风险过滤，但不能替代上下文相关的策略判断。真正成熟的系统会把 moderation 当成第一道筛网，而不是唯一安全机制。
- minimum demo: 在输入和输出两端接入 moderation，记录命中类别、拦截动作、人工复核结果和误杀样本，确认规则既挡得住风险也不会误伤正常请求。
- prerequisites:
  - M/M5. 安全控制
  - M/M6. Guardrails/Input guardrails
- core metrics:
  - unsafe content block rate
  - false positive rate
  - review-confirmed precision
- next:
  - M/M6. Guardrails/Input guardrails
  - M/M6. Guardrails/Output guardrails

#### Jailbreak defense

- pathKey: `M/M5. 安全控制/Jailbreak defense`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M5-1xznjc9-1.json`
- status: draft
- definition: Jailbreak defense 针对诱导模型绕过系统规则和安全边界的攻击做检测、降权和阻断。
- importance: 很多安全策略失败不是因为规则不存在，而是因为模型被引导忽略了规则。
- minimum demo: 用一组越狱提示测试系统，验证拦截、拒答和降级策略是否触发。
- prerequisites:
  - M/M1. 模型级评测/安全性
  - M/M5. 安全控制/Moderation
- core metrics:
  - jailbreak success rate
  - refusal robustness
- next:
  - M/M8. 对抗测试与审计/Red teaming
  - M/M6. Guardrails/Policy guardrails

#### Prompt injection defense

- pathKey: `M/M5. 安全控制/Prompt injection defense`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M5-1xznjc9-1.json`
- status: draft
- definition: Prompt injection defense 针对外部文档、网页、工具结果或用户输入中的恶意指令污染做隔离和防御。
- importance: 一旦系统接检索和工具，注入攻击会成为最现实也最隐蔽的风险之一。
- minimum demo: 向检索结果或网页内容中注入恶意指令，检查系统是否把它当数据而不是控制指令执行。
- prerequisites:
  - I/I3. RAG 管线
  - M/M5. 安全控制/Jailbreak defense
- core metrics:
  - injection block rate
  - instruction-data separation quality
- next:
  - M/M6. Guardrails/Input guardrails
  - M/M8. 对抗测试与审计/Attack simulation

#### Sensitive tool controls

- pathKey: `M/M5. 安全控制/Sensitive tool controls`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M5-1xznjc9-1.json`
- status: draft
- definition: Sensitive tool controls 为写操作、付款、发消息、执行命令等高风险工具设定额外限制、审批或白名单。
- importance: 工具一旦有副作用，错误不再只是文本错误，而会直接变成系统层事故。
- minimum demo: 把一个写操作工具标记为敏感工具，要求审批和显式 scope 才能调用。
- prerequisites:
  - J/J8. 安全与权限/Permission scopes
  - K/K7. 工具与外部连接/Connectors
- core metrics:
  - unsafe tool block rate
  - sensitive tool misuse rate
- next:
  - M/M5. 安全控制/Approval gates
  - M/M6. Guardrails/Tool guardrails

#### Least privilege

- pathKey: `M/M5. 安全控制/Least privilege`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M5-1xznjc9-1.json`
- status: draft
- definition: Least privilege 要求模型、工具和执行环境只获得完成任务所需的最小权限，而不是方便起见给全量权限。
- importance: 最小权限是限制事故影响面的核心原则，也是很多合规要求的基础。
- minimum demo: 为同一工具区分只读和写权限，验证 agent 在默认情况下只能拿到只读能力。
- prerequisites:
  - J/J8. 安全与权限/Permission scopes
  - M/M7. 隐私与合规/Access control
- core metrics:
  - scope minimization rate
  - over-privilege incidents
- next:
  - M/M5. 安全控制/Sandboxing
  - M/M5. 安全控制/Sensitive tool controls

#### Sandboxing

- pathKey: `M/M5. 安全控制/Sandboxing`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M5-1xznjc9-1.json`
- status: draft
- definition: Sandboxing 通过隔离文件系统、命令、网络和运行环境，把 agent 副作用控制在可恢复、可审计的边界内。
- importance: 对 coding agent 和 computer-use agent 来说，sandbox 是防止环境污染和越权扩散的关键底座。
- minimum demo: 把 agent 放进受限工作区，验证文件、命令和网络边界都被限制且有日志。
- prerequisites:
  - K/K7. 工具与外部连接/Sandbox workspace
  - J/J8. 安全与权限/Isolation boundaries
- core metrics:
  - sandbox escape rate
  - environment isolation quality
- next:
  - M/M7. 隐私与合规/Access control
  - M/M8. 对抗测试与审计/Attack simulation

#### Approval gates

- pathKey: `M/M5. 安全控制/Approval gates`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M5-1xznjc9-1.json`
- status: draft
- definition: Approval gates 在高风险动作真正执行前插入人工确认或显式授权点，把模型产出的建议、计划或参数与实际副作用执行强制分层。
- importance: 它是控制副作用风险最直接也最实用的保险丝之一，尤其适用于写数据、发消息、付费、执行命令和访问敏感系统。关键不只是“有审批”，而是审批点要放在真正危险的边界上。
- minimum demo: 对一个会改数据或执行命令的动作强制审批，并记录审批前展示的信息是否足以让人判断风险、参数和影响范围。
- prerequisites:
  - K/K8. 人在回路/Approval before side effects
  - J/J8. 安全与权限/Sensitive action approval
- core metrics:
  - approval trigger precision
  - blocked risky action rate
  - unsafe action escape rate
- next:
  - M/M3. Agent 级评测/Approval correctness
  - M/M6. Guardrails/Policy guardrails

#### Rate limiting

- pathKey: `M/M5. 安全控制/Rate limiting`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M5-1xznjc9-1.json`
- status: draft
- definition: Rate limiting 对请求频率、工具调用频率或高风险动作频率设上限，防止攻击放大和失控重试。
- importance: 没有限流时，模型或工具一旦进入异常模式，成本和风险会迅速指数化扩散。
- minimum demo: 为用户请求和敏感工具调用设置限流，观察超限后的降级和告警表现。
- prerequisites:
  - M/M5. 安全控制
  - J/J7. 工程可靠性/Circuit breaking
- core metrics:
  - rate-limit hit rate
  - cost containment effectiveness
- next:
  - M/M4. 在线评测/Business KPIs
  - M/M8. 对抗测试与审计/Attack simulation

### M6. Guardrails

- pathKey: `M/M6. Guardrails`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-M.json`
- status: draft
- definition: Guardrails 是运行时的轻量检查与拦截层，作用在输入、输出、工具、策略、schema 和敏感信息处理上。
- importance: 它不是替代安全控制，而是把高频可自动判断的边界前移到执行链路中，减少明显错误进入后续步骤。
- minimum demo: 给一次调用链加上输入检查、输出检查、工具检查和 schema 校验，并记录每次放行或拦截原因。
- prerequisites:
  - M/M5. 安全控制
  - J/J2. 结构化输出
  - K/K9. Agent 观测与控制
- core metrics:
  - guardrail hit rate
  - false block rate
  - policy pass rate
- next:
  - M/M6. Guardrails/Input guardrails
  - M/M6. Guardrails/Output guardrails
  - M/M6. Guardrails/Tool guardrails
  - M/M6. Guardrails/Policy guardrails
  - M/M6. Guardrails/Schema validation
  - M/M6. Guardrails/Redaction / filtering

#### Input guardrails

- pathKey: `M/M6. Guardrails/Input guardrails`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M6-14yzjle-1.json`
- status: draft
- definition: Input guardrails 在用户输入、检索结果、网页内容或工具返回进入主模型前做分类、清洗、字段裁剪和风险隔离，目标是把危险输入挡在主链路之外。
- importance: 越早发现注入、违规请求和污染内容，后续系统越少承担不必要风险。输入 guardrail 的关键不只是拦截，还包括把指令、数据和元信息拆开，不让模型把外部文本误当控制命令。
- minimum demo: 在输入进入模型前做分类和规则检查，并记录命中原因、被裁剪字段和最终送入模型的干净上下文。
- prerequisites:
  - M/M5. 安全控制/Moderation
  - M/M5. 安全控制/Prompt injection defense
- core metrics:
  - input block rate
  - false block rate
  - instruction-data separation success
- next:
  - M/M6. Guardrails/Policy guardrails
  - M/M6. Guardrails/Redaction / filtering

#### Output guardrails

- pathKey: `M/M6. Guardrails/Output guardrails`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M6-14yzjle-1.json`
- status: draft
- definition: Output guardrails 在模型生成后、结果展示前检查有害内容、违规建议、越权动作或不合规表达。
- importance: 很多风险直到输出形成时才暴露，例如泄露敏感信息、错误引用或违规建议。
- minimum demo: 在输出显示前增加检查层，对命中风险的结果做拒绝、重写或降级处理。
- prerequisites:
  - M/M5. 安全控制/Moderation
  - M/M2. 应用级评测/最终答案正确性
- core metrics:
  - unsafe output catch rate
  - rewrite success rate
- next:
  - M/M2. 应用级评测/UX consistency
  - M/M6. Guardrails/Redaction / filtering

#### Tool guardrails

- pathKey: `M/M6. Guardrails/Tool guardrails`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M6-14yzjle-1.json`
- status: draft
- definition: Tool guardrails 在工具真正执行前检查工具选择、参数格式、权限范围、资源目标和副作用级别，确保模型不会把一句看起来合理的话直接转成危险动作。
- importance: 它是模型输出与真实系统动作之间最后一道自动拦截层。很多系统不是答错，而是调错工具、传错参数或在错误租户上执行，工具 guardrail 的价值就在于把这些错挡在执行前。
- minimum demo: 在工具执行前检查参数是否合法、scope 是否允许、目标资源是否匹配当前上下文，以及是否需要审批或降级到只读模式。
- prerequisites:
  - M/M5. 安全控制/Sensitive tool controls
  - J/J3. 工具调用/Tool execution
- core metrics:
  - tool block precision
  - unsafe tool prevention rate
  - argument validation catch rate
- next:
  - M/M3. Agent 级评测/Policy compliance
  - M/M5. 安全控制/Approval gates

#### Policy guardrails

- pathKey: `M/M6. Guardrails/Policy guardrails`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M6-14yzjle-1.json`
- status: draft
- definition: Policy guardrails 把组织策略、权限规则和业务红线编码成可执行检查，使系统在运行时持续遵守策略。
- importance: 单靠系统提示表达策略并不可靠，运行时策略检查才是实际执行边界。
- minimum demo: 把一组业务禁令和权限规则实现为 guardrail，并检查违规请求会被稳定拦截。
- prerequisites:
  - M/M5. 安全控制/Approval gates
  - J/J8. 安全与权限/Permission scopes
- core metrics:
  - policy pass rate
  - policy bypass rate
- next:
  - M/M3. Agent 级评测/Policy compliance
  - M/M8. 对抗测试与审计/Red teaming

#### Schema validation

- pathKey: `M/M6. Guardrails/Schema validation`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M6-14yzjle-1.json`
- status: draft
- definition: Schema validation 对结构化输出、工具参数和中间状态做格式与约束校验，防止脏数据继续流动。
- importance: 很多系统故障来自一个字段错类型或缺字段，而不是宏观能力缺失。
- minimum demo: 在模型输出和工具调用前后做 schema 校验，并为失败路径定义恢复策略。
- prerequisites:
  - J/J2. 结构化输出/Validation
  - M/M2. 应用级评测/Schema adherence
- core metrics:
  - validation catch rate
  - schema repair rate
- next:
  - M/M2. 应用级评测/Schema adherence
  - M/M2. 应用级评测/Failure recovery

#### Redaction / filtering

- pathKey: `M/M6. Guardrails/Redaction / filtering`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M6-14yzjle-1.json`
- status: draft
- definition: Redaction / filtering 对敏感字段、PII 或不应外露的信息做脱敏、删减或过滤。
- importance: 很多合规问题不在模型会不会生成，而在系统有没有把本不该出现的信息放出来。
- minimum demo: 在日志和用户可见输出中对敏感字段做统一脱敏，并验证原始值不会外泄。
- prerequisites:
  - M/M7. 隐私与合规/PII handling
  - M/M7. 隐私与合规/Audit logs
- core metrics:
  - redaction coverage
  - privacy leak rate
- next:
  - M/M7. 隐私与合规/PII handling
  - M/M7. 隐私与合规/Regulatory compliance

### M7. 隐私与合规

- pathKey: `M/M7. 隐私与合规`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-M.json`
- status: draft
- definition: 隐私与合规关注个人信息、访问边界、留存策略、审计留痕和组织治理要求，确保 AI 系统不仅可用，也符合法规和组织约束。
- importance: 很多 AI 系统的最大风险并不在回答错，而在越权读写、留存过久、泄露敏感信息或缺乏审计证据。
- minimum demo: 为一个涉及用户数据的应用定义 PII 处理、访问控制、保留周期和审计日志，并检查链路是否可追踪。
- prerequisites:
  - J/J8. 安全与权限
  - M/M6. Guardrails
  - K/K9. Agent 观测与控制/Auditability
- core metrics:
  - access violation rate
  - redaction coverage
  - audit coverage
- next:
  - M/M7. 隐私与合规/PII handling
  - M/M7. 隐私与合规/Data retention
  - M/M7. 隐私与合规/Access control
  - M/M7. 隐私与合规/Audit logs
  - M/M7. 隐私与合规/Regulatory compliance
  - M/M7. 隐私与合规/Governance policies

#### PII handling

- pathKey: `M/M7. 隐私与合规/PII handling`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M7-12m82c6-1.json`
- status: draft
- definition: PII handling 定义系统如何识别、分类、脱敏、最小化传播和删除个人可识别信息，覆盖输入、输出、日志、缓存、知识库和训练数据全链路。
- importance: PII 一旦进入提示、日志和产物链路，风险会跨多个组件扩散。真正困难的地方不是识别几个字段，而是确保副本、缓存和导出物都遵守同一处理策略。
- minimum demo: 列出一组常见 PII 字段和高风险组合字段，验证输入、输出、日志和 trace 在默认路径上都按策略处理，且原值不会留在调试产物中。
- prerequisites:
  - M/M7. 隐私与合规
  - M/M6. Guardrails/Redaction / filtering
- core metrics:
  - pii detection coverage
  - privacy leak rate
  - downstream copy suppression rate
- next:
  - M/M7. 隐私与合规/Data retention
  - M/M7. 隐私与合规/Regulatory compliance

#### Data retention

- pathKey: `M/M7. 隐私与合规/Data retention`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M7-12m82c6-1.json`
- status: draft
- definition: Data retention 规定哪些数据保留多久、何时删除、是否可回溯以及是否允许继续训练或分析。
- importance: 没有保留策略时，AI 系统很容易无意中把敏感数据长期留存在日志、缓存和产物里。
- minimum demo: 为对话、trace 和 artifacts 分别定义保留周期，并验证超期后能被删除或归档。
- prerequisites:
  - M/M7. 隐私与合规/PII handling
  - M/M7. 隐私与合规/Audit logs
- core metrics:
  - retention policy coverage
  - deletion success rate
- next:
  - M/M7. 隐私与合规/Regulatory compliance
  - N/N6. 持续改进闭环/数据沉淀

#### Access control

- pathKey: `M/M7. 隐私与合规/Access control`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M7-12m82c6-1.json`
- status: draft
- definition: Access control 确保不同用户、角色、租户和系统组件只能读取或操作自己被允许的数据和能力。
- importance: 很多高风险事故不是内容有害，而是越权访问和跨租户泄露。
- minimum demo: 为同一系统准备两个不同角色，验证它们对知识、工具和工作区的可见范围不同。
- prerequisites:
  - J/J8. 安全与权限/Auth
  - J/J8. 安全与权限/Permission scopes
- core metrics:
  - access violation rate
  - cross-tenant leak rate
- next:
  - M/M5. 安全控制/Least privilege
  - M/M7. 隐私与合规/Audit logs

#### Audit logs

- pathKey: `M/M7. 隐私与合规/Audit logs`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M7-12m82c6-1.json`
- status: draft
- definition: Audit logs 记录谁在什么时候访问了什么数据、调用了什么工具、触发了什么审批或拦截，以及这些动作为什么被放行或拒绝。
- importance: 没有审计日志，很多合规要求、事故追责和越权调查都无法落地。好的审计日志不是越多越好，而是能围绕关键动作形成可查询、可解释、不可轻易篡改的证据链。
- minimum demo: 为关键读写、审批、导出和敏感工具调用写入结构化审计日志，并验证能按用户、租户、工具和时间范围回查完整时间线。
- prerequisites:
  - K/K9. Agent 观测与控制/Auditability
  - M/M7. 隐私与合规/Access control
- core metrics:
  - audit coverage
  - queryability
  - evidence completeness
- next:
  - M/M8. 对抗测试与审计/Incident review
  - M/M7. 隐私与合规/Regulatory compliance

#### Regulatory compliance

- pathKey: `M/M7. 隐私与合规/Regulatory compliance`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M7-12m82c6-1.json`
- status: draft
- definition: Regulatory compliance 把法律、行业和组织要求映射成具体的数据处理、访问控制、审计和披露义务。
- importance: 系统即使功能上可用，如果不能解释其数据处理和控制方式，也可能无法合法上线。
- minimum demo: 选一个具体场景，整理其涉及的数据类型、保留策略、访问边界和审计要求。
- prerequisites:
  - M/M7. 隐私与合规/PII handling
  - M/M7. 隐私与合规/Data retention
  - M/M7. 隐私与合规/Audit logs
- core metrics:
  - compliance control coverage
  - audit evidence completeness
- next:
  - M/M7. 隐私与合规/Governance policies
  - M/M8. 对抗测试与审计/Postmortem

#### Governance policies

- pathKey: `M/M7. 隐私与合规/Governance policies`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M7-12m82c6-1.json`
- status: draft
- definition: Governance policies 把模型使用、权限边界、发布要求、事故处理和角色责任沉淀成组织级制度。
- importance: 没有治理策略，很多控制只能停留在单点工程实践，难以长期维护和跨团队复制。
- minimum demo: 为一个 AI 能力定义所有者、上线门槛、事故升级路径和审计责任人。
- prerequisites:
  - M/M7. 隐私与合规/Regulatory compliance
  - N/N5. 团队与流程
- core metrics:
  - policy adoption rate
  - control ownership clarity
- next:
  - N/N5. 团队与流程
  - N/N6. 持续改进闭环

### M8. 对抗测试与审计

- pathKey: `M/M8. 对抗测试与审计`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-M.json`
- status: draft
- definition: 对抗测试与审计关注在攻击、事故和边界情境下系统会如何失效，并把这些发现转成回归测试、审计材料和改进动作。
- importance: 如果只在正常样本上测系统，很多高风险问题直到事故发生才会真正暴露。
- minimum demo: 对一个带检索和工具调用的系统做一次小型红队演练，并把发现的问题沉淀成安全回归用例和 postmortem。
- prerequisites:
  - M/M5. 安全控制
  - M/M6. Guardrails
  - M/M7. 隐私与合规
- core metrics:
  - attack discovery rate
  - incident recurrence rate
  - postmortem closure rate
- next:
  - M/M8. 对抗测试与审计/Red teaming
  - M/M8. 对抗测试与审计/Attack simulation
  - M/M8. 对抗测试与审计/Safety regression tests
  - M/M8. 对抗测试与审计/Incident review
  - M/M8. 对抗测试与审计/Postmortem

#### Red teaming

- pathKey: `M/M8. 对抗测试与审计/Red teaming`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M8-jnkzm6-1.json`
- status: draft
- definition: Red teaming 是站在攻击者、高风险用户或误用者视角，系统性寻找模型、检索、工具和权限链路中的绕过路径与危险失效模式。
- importance: 很多高风险问题不会在常规评测里出现，只能靠对抗视角主动发现。高价值 red team 不是泛泛地“多试几个坏问题”，而是围绕真实攻击面设计可复现任务和证据链。
- minimum demo: 围绕越狱、注入、敏感工具误用、跨租户访问和数据泄露设计一组红队任务，记录复现路径、影响范围和拦截缺口。
- prerequisites:
  - M/M5. 安全控制/Jailbreak defense
  - M/M6. Guardrails/Policy guardrails
- core metrics:
  - attack discovery rate
  - critical issue density
  - reproducible exploit rate
- next:
  - M/M8. 对抗测试与审计/Attack simulation
  - M/M8. 对抗测试与审计/Safety regression tests

#### Attack simulation

- pathKey: `M/M8. 对抗测试与审计/Attack simulation`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M8-jnkzm6-1.json`
- status: draft
- definition: Attack simulation 把已知攻击路径模板化、脚本化或数据化，在新版本和新配置上持续重放，以验证防护是否依旧有效。
- importance: 它把一次性红队演练转成可重复的安全回归资产。真正的价值不是“模拟很多攻击”，而是让关键攻击路径能在每次版本变化后被稳定重测。
- minimum demo: 为提示注入、越狱、敏感工具误用和跨边界访问各写一个自动化攻击样例，并在配置变化或版本发布前统一重放。
- prerequisites:
  - M/M8. 对抗测试与审计/Red teaming
  - M/M5. 安全控制/Prompt injection defense
- core metrics:
  - attack replay pass rate
  - mitigation durability
  - config-regression sensitivity
- next:
  - M/M8. 对抗测试与审计/Safety regression tests
  - M/M4. 在线评测/Canary / regression set

#### Safety regression tests

- pathKey: `M/M8. 对抗测试与审计/Safety regression tests`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M8-jnkzm6-1.json`
- status: draft
- definition: Safety regression tests 把曾经发现的高风险失败沉淀成稳定回归集，防止修好后再次复发。
- importance: 如果安全失败不回流为回归测试，团队会持续重复踩同一类坑。
- minimum demo: 把历史安全事故和红队发现转成自动化测试，并接入版本回归流程。
- prerequisites:
  - M/M8. 对抗测试与审计/Attack simulation
  - M/M4. 在线评测/Canary / regression set
- core metrics:
  - safety regression catch rate
  - repeat incident rate
- next:
  - M/M4. 在线评测/Canary / regression set
  - N/N6. 持续改进闭环/新 evals

#### Incident review

- pathKey: `M/M8. 对抗测试与审计/Incident review`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M8-jnkzm6-1.json`
- status: draft
- definition: Incident review 在安全事件、严重失败或合规异常发生后，对事实、影响、时间线和控制失效点做复盘。
- importance: 没有事件复盘，系统就只能在事故后恢复运行，而不能真正变得更稳。
- minimum demo: 对一次线上安全或合规事件整理时间线、影响面、根因和修复动作。
- prerequisites:
  - M/M7. 隐私与合规/Audit logs
  - K/K9. Agent 观测与控制/Auditability
- core metrics:
  - time to root cause
  - remediation completeness
- next:
  - M/M8. 对抗测试与审计/Postmortem
  - N/N6. 持续改进闭环

#### Postmortem

- pathKey: `M/M8. 对抗测试与审计/Postmortem`
- node type: `concept-group`
- detail source: `data/details/leaves-M-M8-jnkzm6-1.json`
- status: draft
- definition: Postmortem 是把事故复盘转成可执行改进的文档和行动列表，明确责任、优先级和回归项。
- importance: 只有把复盘结果落成责任人和回归资产，事故经验才不会停留在口头讨论。
- minimum demo: 为一次事故输出 postmortem，包含根因、修复、负责人、完成时限和新增回归项。
- prerequisites:
  - M/M8. 对抗测试与审计/Incident review
  - N/N6. 持续改进闭环
- core metrics:
  - action item closure rate
  - recurrence reduction
- next:
  - N/N6. 持续改进闭环
  - M/M8. 对抗测试与审计/Safety regression tests

## N. 产品、场景与组织

- pathKey: `N`
- node type: `domain`
- stage: 05 运行、治理与产品
- graph summary: OpenAI 的 building agents、model optimization、evaluation best practices 都指向同一个事实：是否需要 RAG、是否需要 fine-tuning、是否需要 Agent、多大模型、多复杂的编排，都应该由任务、成本、风险和评测闭环来决定。
- relation notes:
  - 产品、场景与组织 是整张图的选择器：决定下方哪些层需要被激活。
  - “是否需要 Agent”是 产品、场景与组织 层决策，不是 Agent 系统 层默认答案。
  - “是否需要微调或 RAG”也是 产品、场景与组织 层的产品/成本/风险权衡。
  - 没有 产品、场景与组织 层，下面所有技术节点都会变成无目标堆叠。
- detail source: `data/details/domain-N.json`
- status: complete
- definition: “产品、场景与组织”关注的不是模型本身，而是如何把模型能力装配成可交付、可运营、可持续改进的 AI 产品系统。它研究的问题包括：应该服务什么场景、把自动化做到什么程度、在质量/延迟/成本/风险之间如何取舍、怎样设计让用户信任并能纠错的体验，以及团队如何通过评测、日志和迭代流程把系统不断做稳。这个 domain 是把技术能力翻译成业务价值的接口层。
- importance: 很多 AI 项目失败，不是因为模型完全不可用，而是因为场景选错、自动化级别失衡、体验没有建立信任、组织流程无法闭环。理解这个 domain，可以帮助学习者从“能不能做”转向“做成什么样才值得上线”，并用产品、工程、运营协同的视角判断一个 AI 系统是否适合进入真实业务。它决定了系统边界、上线方式、人工介入点、责任划分和持续改进节奏。
- minimum demo: 选择一个具体工作任务，例如客服问答、文档总结或表格处理，先明确用户是谁、成功标准是什么、错误代价有多高、是否需要最新知识或外部动作。基于这些约束做一个最小可用原型：给出输入、模型输出、引用或依据、人工确认入口、失败兜底方式，并记录关键日志。随后用少量真实样本验证三个问题：用户是否真的愿意用、结果是否达到可接受质量、人工复核成本是否低于原流程。
- hardware budget: 该 domain 本身几乎不受硬件限制，重点在任务设计、流程编排、评测与运营能力。做最小实验时，通常一台普通开发机和可调用的模型/API 就足够；更大的预算主要花在数据、工具接入、日志与评测系统、权限控制和团队协作，而不是单纯堆算力。只有当场景进入高吞吐、低延迟或强私有化部署阶段，硬件预算才会显著影响方案。
- examples:
  - 把内部知识库问答做成带引用和追问能力的支持助手
  - 把销售邮件初稿生成做成“先起草、后人工确认”的工作流
  - 把合同或报告摘要做成可纠错、可追溯的文档处理工具
  - 把数据分析问答做成带 SQL 审核和结果解释的 Copilot
  - 把高风险操作限制为建议模式，把低风险重复任务逐步自动化
- pitfalls:
  - 只看模型能力，不定义业务目标、用户角色和上线边界
  - 在高错误代价场景中过早追求全自动，缺少人工审批与回退
  - 只做 demo，不做日志、评测、失败分类和版本对比
  - 体验上不给依据、置信边界或纠错入口，导致用户不信任
  - 忽略组织准备度，产品、工程、数据、评测与安全职责脱节
  - 把通用 benchmark 当成上线标准，未验证真实任务收益
- prerequisites:
  - J
  - K
  - M
  - N/N1. 场景类型
  - N/N2. 自动化等级
  - N/N3. 决策变量
  - N/N4. 体验设计
  - N/N5. 团队与流程
  - N/N6. 持续改进闭环
- core metrics:
  - 任务完成率
  - 用户采纳率
  - 人工复核率
  - 端到端时延
  - 单次任务成本
  - 错误率与严重错误率
  - 引用/依据可用率
  - 用户满意度
  - 升级人工处理比例
  - 迭代后质量提升幅度
- toolchain:
  - 产品需求文档与任务拆解
  - 提示词与工作流编排工具
  - 知识检索与外部工具接入
  - 日志、trace 与观测平台
  - 离线/在线评测集与回归测试
  - 反馈收集与工单系统
  - 权限、审核与策略控制
  - A/B 测试与版本发布机制
- failure signs:
  - 用户觉得结果偶尔有用，但不愿纳入正式流程
  - 表面准确率不错，但严重错误一旦出现就不可接受
  - 人工审核时间接近甚至高于手工完成时间
  - 上线后无法回答“为什么错、错在哪类样本、下版如何改”
  - 不同团队对成功标准不一致，导致反复返工
  - 系统能演示但不能稳定扩展到更多用户或更多任务
- next:
  - N/N1. 场景类型
  - N/N2. 自动化等级
  - N/N3. 决策变量
  - N/N4. 体验设计
  - N/N5. 团队与流程
  - N/N6. 持续改进闭环

### N1. 场景类型

- pathKey: `N/N1. 场景类型`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-N.json`
- status: draft
- definition: 场景类型回答的是：AI 系统究竟在替用户完成什么任务，是问答、Copilot、编码、数据分析、文档处理、工作流自动化、研究、多模态交互还是机器人/具身任务。
- importance: 场景选型先于模型选型。不同场景的成功标准、风险边界、交互形态和自动化级别都不同。
- minimum demo: 先把一个任务明确归到某类场景，再根据该场景决定是否需要检索、工具、审批和多模态输入。
- prerequisites:
  - N
  - J/J9. 应用形态
- core metrics:
  - task fit
  - user adoption
  - workflow gain
- next:
  - N/N1. 场景类型/问答 / 检索
  - N/N1. 场景类型/助手 / Copilot
  - N/N1. 场景类型/编码
  - N/N1. 场景类型/数据分析
  - N/N1. 场景类型/文档处理
  - N/N1. 场景类型/工作流自动化
  - N/N1. 场景类型/研究
  - N/N1. 场景类型/多模态交互
  - N/N1. 场景类型/机器人 / 具身任务

#### 问答 / 检索

- pathKey: `N/N1. 场景类型/问答 / 检索`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N1-78ntg8-1.json`
- status: draft
- definition: 问答 / 检索场景的核心不是“让模型会回答”，而是把外部知识可靠地找出来、压缩成当前问题需要的证据，并组织成用户能核查的答案。它通常同时包含召回、重排、上下文拼装和答案生成四层，而不是一个简单聊天框。
- importance: 这是企业知识库、搜索助手、客服自助和个人知识管理里最常见的 AI 起点。它的关键不在文笔，而在召回质量、依据可追溯性和用户能否判断这次答案是否值得信。
- minimum demo: 做一个带引用的问答页面，要求系统先检索、再回答，并让用户可以点击引用回到原文片段、看到命中来源以及这次回答的时间范围。
- prerequisites:
  - I/I3. RAG 管线
  - J/J9. 应用形态/Search / QA
- core metrics:
  - answer correctness
  - citation trustworthiness
- next:
  - N/N2. 自动化等级/Draft and review
  - N/N4. 体验设计/引用

#### 助手 / Copilot

- pathKey: `N/N1. 场景类型/助手 / Copilot`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N1-78ntg8-1.json`
- status: draft
- definition: 助手 / Copilot 场景强调把 AI 嵌进用户原本就在使用的界面和任务流里，让系统在当前上下文中给出建议、补全、解释或下一步动作，而不是把任务强行转移到独立聊天窗口。
- importance: 这类形态更贴近真实工作流，因此更容易形成高频使用和高采纳率；但它也更考验上下文读取、交互克制和建议时机，做不好就会变成打断用户的噪声层。
- minimum demo: 在现有编辑器、文档或业务页面里接入一个上下文感知助手，支持读取当前选区或页面状态，生成建议，并允许用户一键采纳、局部修改或直接忽略。
- prerequisites:
  - J/J9. 应用形态/Copilot
  - N/N2. 自动化等级/Draft and review
- core metrics:
  - acceptance rate
  - workflow interruption cost
- next:
  - N/N4. 体验设计/控制权
  - N/N3. 决策变量/质量要求

#### 编码

- pathKey: `N/N1. 场景类型/编码`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N1-78ntg8-1.json`
- status: draft
- definition: 编码场景围绕读代码、改代码、运行命令、验证行为和输出补丁展开，重点不只是生成代码片段，而是能在真实工作区里形成“理解上下文 -> 修改 -> 验证 -> 继续修正”的闭环。
- importance: 这是当前最容易把 agent 能力转成明确产出的高价值场景之一，因为结果可以用 diff、测试、构建和 review 直接检验，同时也最容易暴露权限、回滚和安全边界问题。
- minimum demo: 做一个最小 coding assistant，能读取仓库上下文、生成 patch、运行至少一条验证命令，并把失败信息回注到下一轮修复中。
- prerequisites:
  - J/J9. 应用形态/Coding assistant
  - K/K10. Agent 形态分支/Coding agent
- core metrics:
  - task completion rate
  - patch acceptance rate
- next:
  - N/N2. 自动化等级/Execute with approval
  - N/N3. 决策变量/错误代价

#### 数据分析

- pathKey: `N/N1. 场景类型/数据分析`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N1-78ntg8-1.json`
- status: draft
- definition: 数据分析场景围绕查询、筛选、聚合、解释和结论表达展开，常常要求模型把自然语言问题转成结构化查询、执行计算、再把结果解释成人能消费的分析结论。
- importance: 这类场景最容易从“分析数据”滑向“编数字和编因果”。如果没有查询依据、计算链路和结果约束，模型很快就会给出看似专业但经不起复核的内容。
- minimum demo: 让系统针对一组结构化数据完成提问理解、查询执行、结果解释和图表或表格输出，并附上查询语句或计算依据供用户复核。
- prerequisites:
  - J/J2. 结构化输出
  - J/J3. 工具调用
- core metrics:
  - analysis correctness
  - evidence availability
- next:
  - N/N4. 体验设计/透明度
  - N/N3. 决策变量/是否需要可审计流程

#### 文档处理

- pathKey: `N/N1. 场景类型/文档处理`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N1-78ntg8-1.json`
- status: draft
- definition: 文档处理场景聚焦文件上传、解析、切分、抽取、比对、摘要和问答。它真正的难点不在于“读懂一篇文档”，而在于能否在版式复杂、格式多样和证据分散的情况下稳定提取对任务有用的信息。
- importance: 这是企业落地里极常见且极有价值的场景，因为大量知识和流程都仍以 PDF、Office、合同、报告等文档形态存在；同时它也最依赖解析质量、出处展示和文件级交互设计。
- minimum demo: 实现一个文档助手，支持上传 PDF 或 Office 文件，完成字段抽取、段落级问答或比对，并能把结论回链到对应页码和原文片段。
- prerequisites:
  - J/J9. 应用形态/Document assistant
  - J/J6. 多模态应用/File input
- core metrics:
  - extraction precision
  - document task success rate
- next:
  - N/N4. 体验设计/引用
  - N/N2. 自动化等级/Draft and review

#### 工作流自动化

- pathKey: `N/N1. 场景类型/工作流自动化`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N1-78ntg8-1.json`
- status: draft
- definition: 工作流自动化场景强调多步状态推进、跨系统调用、条件分支和带副作用的执行。它的重点不在输出一段答案，而在能否把一个真实流程从开始稳定推进到结束，并把状态留在正确的系统里。
- importance: 这是很多企业 AI 真正产生 ROI 的地方，因为它直接影响人力成本、流程时效和执行质量；但它也是错误放大最快的地方，因为每一步都可能带来外部副作用和组织风险。
- minimum demo: 做一个带审批、状态回填和失败回退的 workflow assistant，驱动一个真实流程前进，并能在每个关键节点展示当前状态和责任边界。
- prerequisites:
  - J/J9. 应用形态/Workflow assistant
  - K/K10. Agent 形态分支/Workflow automation agent
- core metrics:
  - workflow completion rate
  - approval correctness
- next:
  - N/N2. 自动化等级/Execute with approval
  - N/N3. 决策变量/是否需要外部动作

#### 研究

- pathKey: `N/N1. 场景类型/研究`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N1-78ntg8-1.json`
- status: draft
- definition: 研究场景围绕开放问题探索、证据聚合、观点比较和结论形成展开。它通常没有单一标准答案，更强调系统能否持续提出子问题、补充证据、区分已知与未知，并在最后给出带不确定性说明的结论。
- importance: 这类场景最能体现 agent 在开放任务里的上限，因为它要求系统在较长链路中保持问题分解、检索纪律和证据约束；同时也最容易暴露“看起来像研究、实际上像拼凑”的问题。
- minimum demo: 让系统围绕一个开放问题做多轮检索与比较，产出带来源、争议点和未解决问题的结论，而不是只给一个听起来完整的总结。
- prerequisites:
  - K/K10. Agent 形态分支/Research agent
  - J/J9. 应用形态/Search / QA
- core metrics:
  - evidence coverage
  - grounded conclusion rate
- next:
  - N/N4. 体验设计/透明度
  - N/N3. 决策变量/是否需要最新知识

#### 多模态交互

- pathKey: `N/N1. 场景类型/多模态交互`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N1-78ntg8-1.json`
- status: draft
- definition: 多模态交互场景要求系统同时处理文本、图像、音频、文件或视频等不同输入，并在一个连续任务里把这些模态的信息整合成一致的理解和输出，而不是把每种模态当成彼此割裂的独立接口。
- importance: 它决定产品是否能进入更自然的用户任务流，例如边看图边提问、边听语音边执行操作、边上传文件边追问细节，而不再被单一文本框限制。
- minimum demo: 做一个同时接收文本和文件或音频输入的交互页面，验证系统能跨模态保持上下文一致，并在输出中明确区分每种输入对结论的贡献。
- prerequisites:
  - E/E5. 多模态
  - J/J6. 多模态应用
- core metrics:
  - cross-modal task success
  - ux consistency
- next:
  - N/N4. 体验设计/透明度
  - N/N1. 场景类型/机器人 / 具身任务

#### 机器人 / 具身任务

- pathKey: `N/N1. 场景类型/机器人 / 具身任务`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N1-78ntg8-1.json`
- status: draft
- definition: 机器人 / 具身任务场景要求系统感知环境、形成动作计划、执行动作并根据环境反馈持续修正。与纯信息任务不同，这类系统的输出会直接改变物理世界，因此感知误差、延迟和恢复能力都会被放大。
- importance: 它把 AI 从信息处理推进到真实行动，也把安全、时延、资源约束和失败恢复要求拉到最高。很多在屏幕里还能容忍的错误，一旦进入物理执行就会立刻变成事故风险。
- minimum demo: 在受控环境中让系统完成一个包含感知、规划、动作执行和异常恢复的小任务，并记录每一步的感知依据、动作理由和回退路径。
- prerequisites:
  - E/E7. 机器人与具身智能
  - K/K10. Agent 形态分支/Computer-use agent
- core metrics:
  - task success rate
  - unsafe action rate
- next:
  - N/N2. 自动化等级/Human-supervised autonomy
  - N/N3. 决策变量/安全风险

### N2. 自动化等级

- pathKey: `N/N2. 自动化等级`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-N.json`
- status: draft
- definition: 自动化等级回答的是：系统是只给建议、生成草稿待审、审批后执行、有限自治执行，还是在人工监督下持续自治。
- importance: 自动化不是越高越好，而是要与错误代价、审批要求和用户信任匹配。
- minimum demo: 给同一场景分别设计建议模式和审批后执行模式，对比采纳率、人工负担和风险暴露。
- prerequisites:
  - N/N1. 场景类型
  - K/K8. 人在回路
- core metrics:
  - automation coverage
  - human intervention rate
  - approval load
- next:
  - N/N2. 自动化等级/Suggestion only
  - N/N2. 自动化等级/Draft and review
  - N/N2. 自动化等级/Execute with approval
  - N/N2. 自动化等级/Narrow autonomous execution
  - N/N2. 自动化等级/Human-supervised autonomy

#### Suggestion only

- pathKey: `N/N2. 自动化等级/Suggestion only`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N2-fi1wb8-1.json`
- status: draft
- definition: Suggestion only 表示系统只给建议、解释或备选方案，不直接修改外部状态，也不替用户执行任何有副作用的动作。它的定位不是“能力弱”，而是把 AI 放在决策支持层，而不是执行层。
- importance: 当错误代价高、用户信任尚未建立、数据和流程边界还不稳定时，这是最稳的起点。它能先验证价值，再逐步决定哪些环节值得往更高自动化推进。
- minimum demo: 让系统只输出建议、理由和不确定性说明，不直接发消息、不写系统、不运行命令，并观察用户是否愿意据此做出更快决策。
- prerequisites:
  - N/N1. 场景类型
  - N/N3. 决策变量/错误代价
- core metrics:
  - acceptance rate
  - human edit rate
- next:
  - N/N2. 自动化等级/Draft and review
  - N/N4. 体验设计/控制权

#### Draft and review

- pathKey: `N/N2. 自动化等级/Draft and review`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N2-fi1wb8-1.json`
- status: draft
- definition: Draft and review 让系统先生成草稿、计划或结构化建议，再由人决定是否采纳、修改、合并或丢弃。它把 AI 的价值放在“减少空白起草成本”，而不是让 AI 直接成为最终执行者。
- importance: 这是很多 Copilot、文档助手和业务辅助工具的最佳平衡点，因为它既能显著提升效率，又保留了人工最终把关和责任归属。
- minimum demo: 让系统先生成邮件、文档、SQL 或代码草稿，要求用户能逐段编辑、局部采纳或整体拒绝，然后再进入正式发布或执行流程。
- prerequisites:
  - N/N2. 自动化等级/Suggestion only
  - J/J9. 应用形态/Copilot
- core metrics:
  - draft acceptance rate
  - review time saved
- next:
  - N/N2. 自动化等级/Execute with approval
  - N/N4. 体验设计/可撤销

#### Execute with approval

- pathKey: `N/N2. 自动化等级/Execute with approval`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N2-fi1wb8-1.json`
- status: draft
- definition: Execute with approval 允许系统在获得显式审批后执行外部动作，例如发消息、改数据、调用内部系统或运行命令。审批在这里不是形式化确认，而是风险控制和责任转移节点。
- importance: 它是很多高价值 AI 场景进入生产的关键中间态，因为它既让系统能真正产生副作用，又避免了完全自治带来的不可控风险。
- minimum demo: 为一个有真实副作用的动作加审批门，验证批准后执行、拒绝后不执行、超时后回退，以及整个状态与审计链路都保持完整。
- prerequisites:
  - K/K8. 人在回路/Approval before side effects
  - J/J8. 安全与权限/Sensitive action approval
- core metrics:
  - approval precision
  - blocked risky action rate
- next:
  - N/N2. 自动化等级/Narrow autonomous execution
  - N/N3. 决策变量/是否需要外部动作

#### Narrow autonomous execution

- pathKey: `N/N2. 自动化等级/Narrow autonomous execution`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N2-fi1wb8-1.json`
- status: draft
- definition: Narrow autonomous execution 指系统在边界清晰、影响面小、回滚简单的任务上可以自动执行，而不要求每次都审批。这里的关键不在“自动”，而在“范围足够窄且风险可封装”。
- importance: 它能释放 AI 的真实效率，因为高频低风险任务不再需要人工逐次确认；但如果边界定义不清，这一层最容易从小自治滑向大事故。
- minimum demo: 为一个低风险重复任务设置受限自治执行，明确准入条件、异常升级规则和回滚机制，并观察成功率、升级率和误执行率。
- prerequisites:
  - N/N2. 自动化等级/Execute with approval
  - M/M3. Agent 级评测/Workflow completion rate
- core metrics:
  - autonomous completion rate
  - escalation rate
- next:
  - N/N2. 自动化等级/Human-supervised autonomy
  - N/N3. 决策变量/安全风险

#### Human-supervised autonomy

- pathKey: `N/N2. 自动化等级/Human-supervised autonomy`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N2-fi1wb8-1.json`
- status: draft
- definition: Human-supervised autonomy 允许系统在更长链路中自主推进、拆解任务和调用工具，但整个过程始终保持对人可见、可接管、可中止和可审计。它强调的是“人在环上的持续监督”，不是“最后看一眼结果”。
- importance: 这是长任务 agent 进入生产环境时最现实的终态之一，因为它能兼顾长链路效率和组织治理要求，让系统既能多走几步，又不会失去人类主导权。
- minimum demo: 让一个长任务 agent 自主推进多步流程，并在关键节点提供进度可见性、人工接管、暂停、终止和审批能力，验证这些控制手段能真实改变执行轨迹。
- prerequisites:
  - K/K8. 人在回路/HITL checkpoints
  - K/K9. Agent 观测与控制/Auditability
- core metrics:
  - human override rate
  - long-task completion rate
- next:
  - N/N4. 体验设计/长任务可见性
  - N/N5. 团队与流程/运维 / 平台

### N3. 决策变量

- pathKey: `N/N3. 决策变量`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-N.json`
- status: draft
- definition: 决策变量是产品与工程在方案设计时要共同权衡的输入，包括质量要求、延迟要求、成本预算、错误代价、安全风险、是否需要最新知识、是否需要外部动作以及是否需要可审计流程。
- importance: 很多“方案争论”本质上不是技术对错，而是这些变量没有被显式对齐。
- minimum demo: 在立项前把 8 个变量逐项打分或排序，再据此决定模型、自动化级别和上线边界。
- prerequisites:
  - N/N1. 场景类型
  - L/L7. 生产运行指标
  - M
- core metrics:
  - decision clarity
  - design rework rate
- next:
  - N/N3. 决策变量/质量要求
  - N/N3. 决策变量/延迟要求
  - N/N3. 决策变量/成本预算
  - N/N3. 决策变量/错误代价
  - N/N3. 决策变量/安全风险
  - N/N3. 决策变量/是否需要最新知识
  - N/N3. 决策变量/是否需要外部动作
  - N/N3. 决策变量/是否需要可审计流程

#### 质量要求

- pathKey: `N/N3. 决策变量/质量要求`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N3-485g5n-1.json`
- status: draft
- definition: 质量要求不是一句“尽量准确”，而是把当前场景可接受的正确性、稳定性、引用要求和严重错误上限具体化。它决定系统到底是在追求演示效果，还是在满足正式业务门槛。
- importance: 不先把质量门槛量化，后面的模型选型、工作流复杂度和评测设计就都没有锚点。团队会不断争论“这个结果算不算好”，但谁也说不清标准。
- minimum demo: 为一个场景明确最低正确率、严重错误上限、是否必须给出处，以及哪些错误一旦出现就必须降级或人工接管。
- prerequisites:
  - M/M2. 应用级评测/最终答案正确性
  - M/M2. 应用级评测/引用真实性
- core metrics:
  - quality threshold clarity
  - severe error tolerance
- next:
  - N/N3. 决策变量/错误代价
  - N/N2. 自动化等级/Suggestion only

#### 延迟要求

- pathKey: `N/N3. 决策变量/延迟要求`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N3-485g5n-1.json`
- status: draft
- definition: 延迟要求决定用户愿意等多久、系统能否插入多轮验证，以及是否需要流式、缓存、预计算或轻重模型分层。它本质上是体验约束，也是系统架构约束。
- importance: 很多方案在离线质量上看起来更强，但一旦放到实时交互或高并发环境里就失去可用性。时延预算经常比绝对准确率更早决定产品边界。
- minimum demo: 为同一场景分别设定 1 秒、5 秒和 30 秒三个响应预算，比较可采用的模型、检索、验证和交互策略会怎样变化。
- prerequisites:
  - L/L7. 生产运行指标/Latency
  - J/J5. 流式与实时
- core metrics:
  - target response time
  - latency budget
- next:
  - N/N3. 决策变量/成本预算
  - N/N2. 自动化等级/Draft and review

#### 成本预算

- pathKey: `N/N3. 决策变量/成本预算`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N3-485g5n-1.json`
- status: draft
- definition: 成本预算定义单位任务、单位用户或单位时间内可接受的模型、基础设施和人工成本范围。
- importance: 预算约束决定是否适合上更强模型、更多检索、更重验证或更多人工审核。
- minimum demo: 为一个产品能力算出每次成功任务的可承受成本上限，再反推模型与流程设计。
- prerequisites:
  - L/L7. 生产运行指标/Cost
  - M/M4. 在线评测/Business KPIs
- core metrics:
  - cost budget
  - cost per successful task
- next:
  - N/N3. 决策变量/延迟要求
  - N/N2. 自动化等级/Narrow autonomous execution

#### 错误代价

- pathKey: `N/N3. 决策变量/错误代价`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N3-485g5n-1.json`
- status: draft
- definition: 错误代价衡量一次失败会造成多大业务损失、信任损失、返工成本和合规后果。它关注的不是错误数量本身，而是不同错误类型的后果是否不对称。
- importance: 同样是 5% 错误率，在草稿助手和财务执行系统里的含义完全不同。很多自动化等级与审批边界，最终都由错误后果而不是平均准确率决定。
- minimum demo: 把错误分成无伤大雅、需要返工、造成业务损失和触发合规事故四级，并据此设定不同的上线边界和人工介入点。
- prerequisites:
  - M/M8. 对抗测试与审计/Incident review
  - M/M7. 隐私与合规/Regulatory compliance
- core metrics:
  - severe error cost
  - rework load
- next:
  - N/N2. 自动化等级/Suggestion only
  - N/N3. 决策变量/安全风险

#### 安全风险

- pathKey: `N/N3. 决策变量/安全风险`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N3-485g5n-1.json`
- status: draft
- definition: 安全风险反映系统是否会接触敏感信息、敏感动作或高风险环境，以及潜在攻击面有多大。
- importance: 安全风险越高，越需要 guardrails、审批和更保守的自动化级别。
- minimum demo: 列出系统的敏感数据和敏感动作，再判断需要哪些安全控制和人工门槛。
- prerequisites:
  - M/M5. 安全控制
  - M/M7. 隐私与合规
- core metrics:
  - risk exposure
  - control coverage
- next:
  - N/N2. 自动化等级/Execute with approval
  - N/N3. 决策变量/是否需要可审计流程

#### 是否需要最新知识

- pathKey: `N/N3. 决策变量/是否需要最新知识`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N3-485g5n-1.json`
- status: draft
- definition: 是否需要最新知识，决定任务是可以主要依赖模型参数记忆，还是必须接入检索、数据库、实时 API 或企业内部最新文档。这里的关键不是“模型懂不懂”，而是答案是否必须与当前世界同步。
- importance: 一旦任务需要最新状态，纯对话系统就会天然失去上限。这个变量往往直接决定要不要做 RAG、要不要接工具，以及结果是否必须带出处和时间戳。
- minimum demo: 把一组问题分成“历史稳定知识”“近期变化知识”“必须看实时状态”三类，再为每类选择纯模型、RAG 或在线工具的不同处理路径。
- prerequisites:
  - I/I3. RAG 管线
  - N/N1. 场景类型/问答 / 检索
- core metrics:
  - freshness need
  - staleness tolerance
- next:
  - N/N3. 决策变量/是否需要外部动作
  - N/N1. 场景类型/研究

#### 是否需要外部动作

- pathKey: `N/N3. 决策变量/是否需要外部动作`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N3-485g5n-1.json`
- status: draft
- definition: 这一变量判断系统是否需要真正调用工具、改动外部系统或在世界中执行动作，而不是停在建议层。
- importance: 是否有外部动作，直接改变系统的风险级别、审批机制和基础设施设计。
- minimum demo: 明确任务是否只产出建议，还是必须发消息、写数据库、运行命令或操作界面。
- prerequisites:
  - J/J3. 工具调用
  - K/K7. 工具与外部连接
- core metrics:
  - side-effect necessity
  - action risk
- next:
  - N/N2. 自动化等级/Execute with approval
  - N/N1. 场景类型/工作流自动化

#### 是否需要可审计流程

- pathKey: `N/N3. 决策变量/是否需要可审计流程`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N3-485g5n-1.json`
- status: draft
- definition: 这一变量判断系统是否需要留下足够细的过程记录，以满足追责、复盘、合规或组织治理需求。
- importance: 一旦要求可审计，系统就不能只看最终答案，而必须保留 trace、审批和关键决策记录。
- minimum demo: 明确一个场景是否必须支持事后回放，并检查当前系统能否回答是谁、为何、怎么做的。
- prerequisites:
  - K/K9. Agent 观测与控制/Auditability
  - M/M7. 隐私与合规/Audit logs
- core metrics:
  - audit requirement
  - trace completeness
- next:
  - N/N2. 自动化等级/Human-supervised autonomy
  - N/N4. 体验设计/长任务可见性

### N4. 体验设计

- pathKey: `N/N4. 体验设计`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-N.json`
- status: draft
- definition: 体验设计关注 AI 产品如何建立信任、给出透明度、展示引用、保留用户控制权、支持撤销与纠错，并让长任务过程可见。
- importance: AI 产品的价值不只在结果，还在用户是否敢用、会用、愿意纠正和持续依赖。
- minimum demo: 为一个最小原型加入依据展示、撤销入口和失败说明，观察用户是否更愿意把结果纳入正式流程。
- prerequisites:
  - N/N1. 场景类型
  - J/J9. 应用形态
- core metrics:
  - trust
  - acceptance rate
  - correction rate
- next:
  - N/N4. 体验设计/信任
  - N/N4. 体验设计/透明度
  - N/N4. 体验设计/引用
  - N/N4. 体验设计/控制权
  - N/N4. 体验设计/可撤销
  - N/N4. 体验设计/纠错入口
  - N/N4. 体验设计/长任务可见性

#### 信任

- pathKey: `N/N4. 体验设计/信任`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N4-o1c0ks-1.json`
- status: draft
- definition: 信任不是用户口头上说“看起来不错”，而是用户愿意把结果纳入正式流程，并在关键时刻把 AI 作为可依赖的工作部件。它来自持续稳定的行为，而不是一次惊艳演示。
- importance: 没有信任，系统就只能停留在试用和围观阶段；有了信任，用户才会把更多高价值任务逐步交给 AI。
- minimum demo: 在一个低风险但高频的场景里持续提供有出处、可解释、可纠错的结果，观察用户是否从偶尔尝试转向稳定复用。
- prerequisites:
  - N/N1. 场景类型
  - N/N4. 体验设计/透明度
- core metrics:
  - acceptance rate
  - repeat usage
- next:
  - N/N4. 体验设计/引用
  - N/N4. 体验设计/控制权

#### 透明度

- pathKey: `N/N4. 体验设计/透明度`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N4-o1c0ks-1.json`
- status: draft
- definition: 透明度要求系统把“做了什么、依据是什么、哪里还不确定”适度暴露给用户，而不是只给一个表面完整的结论。它不是把所有内部细节都倒出来，而是让用户拥有足够的理解与判断线索。
- importance: 透明度既是建立信任的手段，也是降低误用成本的手段。对检索型和 agent 型产品来说，黑盒输出一旦出错，用户几乎无法有效纠偏。
- minimum demo: 在结果旁展示关键依据、主要步骤、当前状态和不确定点，让用户能判断这次结果是可直接采纳、需复核还是该放弃。
- prerequisites:
  - K/K9. Agent 观测与控制/Tracing
  - J/J9. 应用形态/Search / QA
- core metrics:
  - evidence visibility
  - user comprehension
- next:
  - N/N4. 体验设计/引用
  - N/N4. 体验设计/长任务可见性

#### 引用

- pathKey: `N/N4. 体验设计/引用`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N4-o1c0ks-1.json`
- status: draft
- definition: 引用是在答案或结果里明确告诉用户依据来自哪里，并支持跳回原文核查。
- importance: 对知识型和文档型任务，引用往往比文案本身更重要，因为它决定结果能否被信任和复用。
- minimum demo: 让用户点击结果中的引用后，能直接回到支撑当前结论的原始片段。
- prerequisites:
  - J/J9. 应用形态/Search / QA
  - M/M2. 应用级评测/引用真实性
- core metrics:
  - citation click-through usefulness
  - citation trustworthiness
- next:
  - N/N4. 体验设计/信任
  - N/N4. 体验设计/纠错入口

#### 控制权

- pathKey: `N/N4. 体验设计/控制权`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N4-o1c0ks-1.json`
- status: draft
- definition: 控制权指用户能否决定系统何时开始、何时暂停、哪些建议被采纳，以及哪些动作必须经过自己确认。它对应的是产品里的主导权分配，而不仅是多放几个按钮。
- importance: 一旦用户感到系统在替自己做决定，哪怕结果偶尔正确，也会快速失去安全感和采纳意愿。控制权设计不好，后续再加更多能力也很难被真正用起来。
- minimum demo: 为关键结果和关键动作提供清晰的接受、编辑、拒绝、暂停和继续入口，并验证这些入口真能改变后续系统行为。
- prerequisites:
  - N/N2. 自动化等级/Draft and review
  - J/J8. 安全与权限/Sensitive action approval
- core metrics:
  - manual override rate
  - user confidence
- next:
  - N/N4. 体验设计/可撤销
  - N/N4. 体验设计/纠错入口

#### 可撤销

- pathKey: `N/N4. 体验设计/可撤销`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N4-o1c0ks-1.json`
- status: draft
- definition: 可撤销要求系统在结果已采纳或动作已执行之后，仍保留回退、补偿或人工修复路径。它关注的不是“别出错”，而是“出错后能不能低成本收回来”。
- importance: 只有当用户知道系统出了问题还能补救，才更愿意接受更高一级的自动化。没有撤销路径，产品就会被迫长期停留在保守模式。
- minimum demo: 对一个有真实副作用的流程设计取消、回滚或补偿机制，并验证状态、日志和用户界面都能与回退结果保持一致。
- prerequisites:
  - J/J7. 工程可靠性/Idempotency
  - K/K8. 人在回路/Human override
- core metrics:
  - rollback success rate
  - recovery latency
- next:
  - N/N4. 体验设计/控制权
  - N/N4. 体验设计/长任务可见性

#### 纠错入口

- pathKey: `N/N4. 体验设计/纠错入口`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N4-o1c0ks-1.json`
- status: draft
- definition: 纠错入口让用户把“哪里错了、缺了什么、应该怎么改”快速反馈给系统，并让这份反馈能进入后续修复和数据沉淀流程。它本质上是把错误变成可利用信号。
- importance: AI 产品几乎不可能一次到位地长期正确，真正有生命力的系统会把用户纠错转成产品改进闭环，而不是把失败静默吞掉。
- minimum demo: 在结果旁提供最小成本的纠错入口，例如一键标错、局部编辑或补充上下文，并把反馈绑定到对应 trace 和版本。
- prerequisites:
  - N/N4. 体验设计/控制权
  - M/M4. 在线评测/Human feedback
- core metrics:
  - correction submission rate
  - correction usefulness
- next:
  - N/N6. 持续改进闭环/用户问题 / 场景
  - N/N6. 持续改进闭环/数据沉淀

#### 长任务可见性

- pathKey: `N/N4. 体验设计/长任务可见性`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N4-o1c0ks-1.json`
- status: draft
- definition: 长任务可见性要求用户能看到系统当前在做什么、做到哪一步、为什么在等待，以及何时需要自己介入。
- importance: 长任务一旦不可见，用户会把等待误解成卡死或胡乱执行，从而失去信任。
- minimum demo: 为多步任务展示进度、关键步骤、等待原因和下一次需要用户介入的时机。
- prerequisites:
  - K/K9. Agent 观测与控制/Tracing
  - K/K8. 人在回路/HITL checkpoints
- core metrics:
  - drop-off rate in long tasks
  - status clarity
- next:
  - N/N2. 自动化等级/Human-supervised autonomy
  - N/N4. 体验设计/透明度

### N5. 团队与流程

- pathKey: `N/N5. 团队与流程`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-N.json`
- status: draft
- definition: 团队与流程回答的是：产品、应用工程、模型工程、数据工程、评测/QA、安全/Policy 和运维/平台如何分工协作，才能让 AI 系统持续上线与改进。
- importance: AI 项目一旦跨模型、数据、工具和安全边界，没有清晰责任分工就会反复返工。
- minimum demo: 为一个具体 AI 能力明确 owner、评测人、上线准入人和事故处理人。
- prerequisites:
  - N
  - M/M7. 隐私与合规/Governance policies
- core metrics:
  - ownership clarity
  - handoff speed
- next:
  - N/N5. 团队与流程/产品经理
  - N/N5. 团队与流程/应用工程师
  - N/N5. 团队与流程/模型工程师
  - N/N5. 团队与流程/数据工程师
  - N/N5. 团队与流程/Eval / QA
  - N/N5. 团队与流程/安全 / Policy
  - N/N5. 团队与流程/运维 / 平台

#### 产品经理

- pathKey: `N/N5. 团队与流程/产品经理`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N5-1anvi4w-1.json`
- status: draft
- definition: 产品经理负责把一个含糊的“加 AI”需求翻译成清晰的场景、目标用户、成功标准、上线边界和优先级排序。对 AI 项目来说，这个角色的关键不是写需求文档，而是把价值、边界和风险前置说清楚。
- importance: AI 项目最容易在目标不清、场景过宽和成功标准含糊时失控。产品角色如果不把任务定义、自动化上限和错误代价先定住，后面的模型和工程都会在错误目标上内耗。
- minimum demo: 为一个 AI 功能写清楚目标用户、具体任务、成功标准、错误代价、自动化上限和不做什么，并据此约束后续实现范围。
- prerequisites:
  - N/N1. 场景类型
  - N/N3. 决策变量
- core metrics:
  - goal clarity
  - scope stability
- next:
  - N/N5. 团队与流程/应用工程师
  - N/N5. 团队与流程/Eval / QA

#### 应用工程师

- pathKey: `N/N5. 团队与流程/应用工程师`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N5-1anvi4w-1.json`
- status: draft
- definition: 应用工程师负责把模型、工具、状态管理、交互设计和基础设施拼成一个真正可运行的产品系统。这个角色关心的不是单点能力，而是用户输入如何进入系统、状态如何流动、错误如何暴露和结果如何被安全消费。
- importance: 很多 AI 价值最后都落在应用工程质量上，而不是模型本身。即便底层模型很强，如果输入装配、状态管理、工具路由、容错和 UI 设计做不好，用户也感知不到真实价值。
- minimum demo: 把一个 AI 场景做成可部署原型，包含输入装配、输出约束、状态流转、日志追踪、失败恢复和用户可见的控制入口，而不只是一个演示页面。
- prerequisites:
  - J
  - L/L5. 系统基础设施
- core metrics:
  - delivery velocity
  - runtime reliability
- next:
  - N/N5. 团队与流程/运维 / 平台
  - N/N5. 团队与流程/Eval / QA

#### 模型工程师

- pathKey: `N/N5. 团队与流程/模型工程师`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N5-1anvi4w-1.json`
- status: draft
- definition: 模型工程师负责模型选型、后训练、模型路由、蒸馏和模型层优化，目标是让底层能力、成本和任务约束真正匹配，而不是默认把所有问题都交给同一个大模型。
- importance: 当问题已经超出 prompt 或工作流层能解决的范围时，模型工程角色决定系统还能不能继续往前走，例如该换模型、做微调、做蒸馏还是改路由策略。
- minimum demo: 比较两个模型或一次后训练前后的任务表现，从质量、时延、成本和稳定性四个维度给出适配建议，而不只看单一 benchmark。
- prerequisites:
  - H
  - L/L4. 训练基础设施
- core metrics:
  - model fit
  - quality lift
- next:
  - N/N6. 持续改进闭环/Fine-tuning / distillation
  - N/N5. 团队与流程/Eval / QA

#### 数据工程师

- pathKey: `N/N5. 团队与流程/数据工程师`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N5-1anvi4w-1.json`
- status: draft
- definition: 数据工程师负责数据接入、清洗、解析、切分、索引和质量保障，让上游资料能被稳定地用于检索、训练、评测和分析。这个角色关心的是数据是否“可用、可追溯、可持续更新”，而不是只把文件搬过来。
- importance: 很多 AI 系统问题根本不是模型不够，而是数据管道不稳、格式不齐、切分不合理或元数据缺失。数据工程不到位，后面的 RAG、训练和评测都会失真。
- minimum demo: 搭建一个从原始文件到可检索或可训练数据的最小 pipeline，包含解析、切分、索引、质量检查和版本记录，而不是只产出一个中间文件。
- prerequisites:
  - F/F3. 数据工程
  - I/I2. 知识库构建
- core metrics:
  - pipeline reliability
  - data freshness
- next:
  - N/N6. 持续改进闭环/数据沉淀
  - N/N5. 团队与流程/Eval / QA

#### Eval / QA

- pathKey: `N/N5. 团队与流程/Eval / QA`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N5-1anvi4w-1.json`
- status: draft
- definition: Eval / QA 负责把产品目标翻译成可测试样本、rubric、回归集、线上监控和失败回流机制，让“系统有没有变好”不再靠主观感觉判断。
- importance: 没有这条角色线，AI 系统很容易每次升级都回到拍脑袋验收。它能把版本演进从“演示效果提升”拉回到“质量是否稳定提升”的工程轨道上。
- minimum demo: 为一个功能维护离线样本集、回归集、线上失败样本回流机制和基础评分 rubric，并验证每次改动后都能稳定复跑。
- prerequisites:
  - M/M2. 应用级评测
  - M/M4. 在线评测
- core metrics:
  - regression catch rate
  - test coverage
- next:
  - N/N6. 持续改进闭环/新 evals
  - N/N6. 持续改进闭环/再评测

#### 安全 / Policy

- pathKey: `N/N5. 团队与流程/安全 / Policy`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N5-1anvi4w-1.json`
- status: draft
- definition: 安全 / Policy 负责定义权限边界、风险分级、策略落地、审计要求和事故处置准入，确保系统接触真实数据和真实动作时仍然处在可治理范围内。
- importance: AI 一旦能访问企业数据、调用工具或执行动作，安全与策略就不再是上线后补丁，而是设计前置条件。少了这条线，系统往往在最该保守的时候过度开放。
- minimum demo: 为一个场景定义敏感数据分类、敏感动作边界、审批要求、拒绝策略和审计字段，并验证这些规则在真实链路里会被执行而不是只写在文档里。
- prerequisites:
  - M/M5. 安全控制
  - M/M7. 隐私与合规
- core metrics:
  - policy coverage
  - security incident rate
- next:
  - N/N6. 持续改进闭环/再评测
  - N/N5. 团队与流程/运维 / 平台

#### 运维 / 平台

- pathKey: `N/N5. 团队与流程/运维 / 平台`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N5-1anvi4w-1.json`
- status: draft
- definition: 运维 / 平台负责部署、观测、扩容、限流、故障恢复和服务稳定性，让 AI 能力从一次性演示变成可长期运营的系统能力。它关注的是系统在真实流量和真实故障下还能不能站住。
- importance: 再好的模型和产品设计，如果没有稳定平台支撑，也无法长期服务真实用户。AI 服务通常还额外带来依赖多、延迟敏感、成本波动和外部接口不稳定等问题，更需要平台角色兜底。
- minimum demo: 为一个 AI 服务接入部署流水线、监控看板、告警、限流和回滚机制，并验证在模型超时、外部依赖失败和版本回滚时服务仍可控。
- prerequisites:
  - L/L5. 系统基础设施/Container / deployment layer
  - L/L7. 生产运行指标/Availability
- core metrics:
  - deploy success rate
  - mttr
- next:
  - N/N6. 持续改进闭环/部署新版本
  - N/N6. 持续改进闭环/日志与 traces

### N6. 持续改进闭环

- pathKey: `N/N6. 持续改进闭环`
- node type: `module`
- stage: 05 运行、治理与产品
- detail source: `data/details/domain-N.json`
- status: draft
- definition: 持续改进闭环描述的是：从用户问题和日志出发，沉淀数据、构建新 eval、改 prompt/tool/routing、做 fine-tuning 或蒸馏、发布新版本，再评测和回看结果。
- importance: 没有闭环，AI 系统只能停留在 demo 阶段；有闭环，系统才会越用越稳、越贴业务。
- minimum demo: 把线上失败样例回流进回归集，再推动一次 prompt 或工具调整并验证指标提升。
- prerequisites:
  - M/M4. 在线评测
  - M/M8. 对抗测试与审计/Postmortem
- core metrics:
  - iteration velocity
  - repeat failure rate
  - regression catch rate
- next:
  - N/N6. 持续改进闭环/用户问题 / 场景
  - N/N6. 持续改进闭环/日志与 traces
  - N/N6. 持续改进闭环/数据沉淀
  - N/N6. 持续改进闭环/新 evals
  - N/N6. 持续改进闭环/Prompt / tool / routing 改进
  - N/N6. 持续改进闭环/Fine-tuning / distillation
  - N/N6. 持续改进闭环/部署新版本
  - N/N6. 持续改进闭环/再评测

#### 用户问题 / 场景

- pathKey: `N/N6. 持续改进闭环/用户问题 / 场景`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N6-10b1dai-1.json`
- status: draft
- definition: 持续改进闭环首先从真实用户问题和场景出发，而不是只盯着模型分数或实验室 benchmark。
- importance: 如果改进不从真实问题开始，系统很容易越做越复杂却不解决真正痛点。
- minimum demo: 收集真实用户最常失败或最常抱怨的场景，并将其整理成明确问题列表。
- prerequisites:
  - M/M4. 在线评测/Human feedback
  - N/N4. 体验设计/纠错入口
- core metrics:
  - problem discovery rate
  - user pain-point coverage
- next:
  - N/N6. 持续改进闭环/日志与 traces
  - N/N6. 持续改进闭环/数据沉淀

#### 日志与 traces

- pathKey: `N/N6. 持续改进闭环/日志与 traces`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N6-10b1dai-1.json`
- status: draft
- definition: 日志与 traces 把线上行为转成可分析证据，帮助定位问题到底出在检索、路由、工具、模型还是体验层。
- importance: 没有观测证据，团队只能重复主观争论，难以形成可执行修复。
- minimum demo: 把线上失败样本与对应 trace、工具记录和版本信息串起来做复盘。
- prerequisites:
  - K/K9. Agent 观测与控制/Tracing
  - M/M4. 在线评测/Real-user failure mining
- core metrics:
  - trace coverage
  - time to triage
- next:
  - N/N6. 持续改进闭环/数据沉淀
  - N/N6. 持续改进闭环/新 evals

#### 数据沉淀

- pathKey: `N/N6. 持续改进闭环/数据沉淀`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N6-10b1dai-1.json`
- status: draft
- definition: 数据沉淀不是简单存日志，而是把真实问题、失败案例、人工修正和高价值交互加工成可复用资产，并明确它们分别服务于评测、检索、训练还是产品分析。
- importance: 没有这一步，线上经验只会停留在个别同学的记忆里，团队会反复踩同样的坑。真正的持续改进，依赖的是可复用数据资产持续增长。
- minimum demo: 把一批真实失败样例整理成带标签、版本、来源和用途说明的数据集，并区分哪些进入 eval、哪些进入知识库、哪些进入训练池。
- prerequisites:
  - F/F7. 后训练数据构建
  - N/N6. 持续改进闭环/日志与 traces
- core metrics:
  - data reuse rate
  - labeled sample growth
- next:
  - N/N6. 持续改进闭环/新 evals
  - N/N6. 持续改进闭环/Fine-tuning / distillation

#### 新 evals

- pathKey: `N/N6. 持续改进闭环/新 evals`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N6-10b1dai-1.json`
- status: draft
- definition: 新 evals 是把刚暴露的问题翻译成以后能重复执行的测试资产，包括样本、rubric、判定器和回归集位置。它的目的不是记录历史，而是防止同类问题再次悄悄出现。
- importance: 只有问题被正式沉淀为 eval，改进才不再依赖个人记忆。否则团队会修一次、忘一次，下个版本又把同样的坑带回来。
- minimum demo: 把最新线上失败样例转成离线样本、评分 rubric 和回归集条目，并验证它能稳定抓住这类问题。
- prerequisites:
  - M/M4. 在线评测/Canary / regression set
  - M/M8. 对抗测试与审计/Safety regression tests
- core metrics:
  - eval growth rate
  - regression catch rate
- next:
  - N/N6. 持续改进闭环/Prompt / tool / routing 改进
  - N/N6. 持续改进闭环/再评测

#### Prompt / tool / routing 改进

- pathKey: `N/N6. 持续改进闭环/Prompt / tool / routing 改进`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N6-10b1dai-1.json`
- status: draft
- definition: Prompt、tool 和 routing 改进是最快的一层系统调优：它通过重写任务表达、调整工具边界、改变调用时机和修正执行骨架来减少失败，而不先动模型权重。
- importance: 大多数应用问题的首选修复方式都在这一层，因为它反馈快、成本低、回滚简单，也更容易定位因果关系。
- minimum demo: 针对一类重复失败，分别尝试改 prompt、改 tool schema 和改 routing 条件，比较哪一层带来的质量提升最大、回归风险最小。
- prerequisites:
  - J/J1. 模型接口层/Prompt composition
  - J/J3. 工具调用/Tool routing
  - M/M3. Agent 级评测/Routing quality
- core metrics:
  - fix turnaround time
  - failure reduction rate
- next:
  - N/N6. 持续改进闭环/部署新版本
  - N/N6. 持续改进闭环/再评测

#### Fine-tuning / distillation

- pathKey: `N/N6. 持续改进闭环/Fine-tuning / distillation`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N6-10b1dai-1.json`
- status: draft
- definition: 当 prompt、路由和工具改进不再够用时，才进入 fine-tuning、RFT 或 distillation 等模型层改造。
- importance: 这一步成本更高，但在重复性强、风格稳定或知识密集任务中可能带来结构性收益。
- minimum demo: 为一类反复失败的场景准备训练数据，比较模型层改造前后的质量与成本。
- prerequisites:
  - H/H4. 参数高效适配
  - H/H5. 压缩与效率优化
  - L/L4. 训练基础设施
- core metrics:
  - quality lift
  - inference cost change
- next:
  - N/N6. 持续改进闭环/部署新版本
  - N/N6. 持续改进闭环/再评测

#### 部署新版本

- pathKey: `N/N6. 持续改进闭环/部署新版本`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N6-10b1dai-1.json`
- status: draft
- definition: 部署新版本把已验证的 prompt、工具、模型或基础设施改动安全地推到真实环境中，并控制风险暴露面。
- importance: 如果没有稳定部署路径，前面的所有改进都很难真正产生业务价值。
- minimum demo: 通过灰度或 canary 部署一个新版本，并持续观察关键指标。
- prerequisites:
  - L/L5. 系统基础设施/Container / deployment layer
  - M/M4. 在线评测/A/B tests
- core metrics:
  - deploy success rate
  - rollback readiness
- next:
  - N/N6. 持续改进闭环/再评测
  - M/M4. 在线评测/Canary / regression set

#### 再评测

- pathKey: `N/N6. 持续改进闭环/再评测`
- node type: `concept-group`
- detail source: `data/details/leaves-N-N6-10b1dai-1.json`
- status: draft
- definition: 再评测要求每次改动后都回到离线、在线和安全三条评测线重跑一遍，确认局部优化没有换来其他地方的退化。它是持续改进闭环里最容易被省略、但代价也最高的一步。
- importance: 没有再评测，团队很容易把“修好了当前问题”误当成“整体变好了”，结果是上线后在别的场景里重新爆雷。
- minimum demo: 在每次上线前后统一跑离线回归、关键线上指标检查和安全回归测试，并对比本次修复带来的局部收益与新引入风险。
- prerequisites:
  - M/M4. 在线评测/Canary / regression set
  - M/M8. 对抗测试与审计/Safety regression tests
- core metrics:
  - regression pass rate
  - post-release incident rate
- next:
  - N/N6. 持续改进闭环/用户问题 / 场景
  - N/N6. 持续改进闭环/新 evals

## 结构关系总表

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
