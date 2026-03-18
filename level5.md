**第 5 关：隐藏层没有“老师”，怎么知道该往哪边改？**

* 关卡目标

  * 背景故事（对应当年的问题）

    * 问题：上一关你已经证明了“两层网络**能表示** XOR”，但参数还是你手工挑的。
    * 卡点：输出层有目标值 `y`，隐藏层没有直接标签。只知道“最后错了”，却不知道隐藏层某个权重该增还是减。
    * 提出的解法：先把“硬阈值开关”换成**平滑、可微**的单元，再定义一个连续损失；这样你就能看见“某个隐藏层权重小动一下，总误差往哪边变”。完整而高效地把这种方向信息传回多层网络，后来叫 **backpropagation**。已确认事实：1986 年 Rumelhart、Hinton、Williams 把 back-propagation 描述为一种反复调整连接权重、最小化实际输出与目标输出差异的新学习过程，并明确写到隐藏单元会学出任务中的重要特征；MIT 课程讲义也把 XOR、多层感知机、非线性激活与 error backpropagation 直接连在一起。 ([Nature][1])
    * 后来叫什么：这一关你先摸到的是 **sigmoid/logistic unit + loss**；下一关才会正式把“高效算出所有权重该怎么改”写成 **backpropagation**。
      不确定点：谁最早固定使用 “sigmoid unit / logistic unit” 这个术语，我这轮不做一手确认；要核对可追 1980 年代前后的教材和论文用词。
    * 经验判断：这一步先做“**只试探一个隐藏层权重**”，比一上来就看链式法则更容易建立直觉。

* 任务清单（可运行）

  1. 先不要训练整个网络。
  2. 把上一关的硬阈值网络，改成 **sigmoid** 版本。
  3. 只让 **一个隐藏层权重** `w_or_x1` 可变，其余参数固定。
  4. 计算 3 个候选值下的 **总损失**：`3.5`, `4.0`, `4.5`。
  5. 打印 base 情况下 4 个样本的 `h_or / h_and / y_hat`。

  直接跑这段：

  ```python
  import math

  data_xor = [
      ((0, 0), 0),
      ((0, 1), 1),
      ((1, 0), 1),
      ((1, 1), 0),
  ]

  def sigmoid(z):
      return 1 / (1 + math.exp(-z))

  def forward(x1, x2, w_or_x1):
      # 只让这个权重变化
      h_or = sigmoid(w_or_x1 * x1 + 4 * x2 - 2)

      # 其余先固定
      h_and = sigmoid(4 * x1 + 4 * x2 - 6)
      y_hat = sigmoid(6 * h_or - 6 * h_and - 3)

      return h_or, h_and, y_hat

  def total_loss(w_or_x1):
      total = 0.0
      for (x1, x2), y in data_xor:
          h_or, h_and, y_hat = forward(x1, x2, w_or_x1)
          total += 0.5 * (y - y_hat) ** 2
      return total

  for candidate in [3.5, 4.0, 4.5]:
      print("w_or_x1 =", candidate, "loss =", total_loss(candidate))

  print("\nBase outputs (w_or_x1 = 4.0):")
  for (x1, x2), y in data_xor:
      h_or, h_and, y_hat = forward(x1, x2, 4.0)
      print(
          (x1, x2),
          "target=", y,
          "h_or=", round(h_or, 4),
          "h_and=", round(h_and, 4),
          "y_hat=", round(y_hat, 4),
      )
  ```

* 验收标准（如何判断我过关）

  1. 你必须打印出 3 个不同的损失值。
  2. 这套代码下，损失应该呈这个趋势：

     * `w_or_x1 = 3.5` 时最大
     * `w_or_x1 = 4.0` 时居中
     * `w_or_x1 = 4.5` 时最小
  3. base 输出里的 `y_hat` 应该大致接近：

     * `(0,0) -> 0.09`
     * `(0,1) -> 0.83`
     * `(1,0) -> 0.83`
     * `(1,1) -> 0.09`
  4. 你再补一句自己的话：

     * **为什么隐藏层虽然没有直接标签，我们仍然能判断这个隐藏层权重往哪边改更好？**

* 常见坑（按优先级）

  1. **还在用硬阈值 `>= 0`，没换成 sigmoid**
     这关的核心就是“从硬开关变成平滑旋钮”。
  2. **改错了权重**
     只改 `w_or_x1`，别动别的参数。
  3. **拿分类对错当信号，不看连续损失**
     这关要看的不是 `0/1` 准不准，而是 `loss` 怎么连续变化。
  4. **把 `y_hat` 当成最终类别**
     这里它先当连续输出看，不急着阈值化。
  5. **忘了 `import math`**
     `math.exp` 会直接报错。

* 过关后我应该“真正理解”的一句话

  * **一旦单元变得平滑，隐藏层权重虽然没有直接标签，也能通过它对最终损失的影响获得连续反馈；这正是 backprop 能成立的前提。**

把你的代码、3 个损失值、base outputs 和那一句解释贴上来。

[1]: https://www.nature.com/articles/323533a0.pdf "Learning representations by back-propagating errors | Nature"
