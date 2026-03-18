你刚才那句 “差的是 (dh_1/dz_1)” 是对的。继续主线。

* 关卡目标

  * 背景故事（对应当年的问题）

    * 问题：你已经会对 **1 个样本、1 次更新** 手算 backprop，但这还不算真正训练；真正的问题是，怎么让整个小网络在**整份数据**上反复变好。
    * 卡点：如果一直盯着“单个权重、单个样本”，你只是会算，不会训；而且手工指定 OR / AND 风格参数不可能扩展到更大任务。
    * 提出的解法：把 **每个样本的梯度都算出来**，在一个 epoch 里先累加，再统一更新全部参数；这就是用 backprop 做梯度下降训练多层感知机。Rumelhart 等人在 1986 年把 generalized delta rule 表述为最小化总平方误差的梯度下降；MIT 课件也直接写了“每个 epoch 汇总所有样本梯度再应用”的训练方式。 ([Stanford University][1])
    * 后来叫什么：这一步后来就叫 **用 batch gradient descent 训练 MLP**；数据更大时，再常见地改成 **SGD**。 ([Stanford University][1])
    * 经验判断：这关我**不让你从随机初始化开始**，而是从你已经理解的 XOR 近似解出发，只隔离“训练循环”这一个新点。初始化的坑，下一关单独打。

* 任务清单（可运行）

  1. 继续用你上一关完全相同的 `sigmoid / forward / delta` 思路。
  2. 参数固定从这组开始：

     ```python
     w11, w12, b1 = 3.5, 3.5, -1.8
     w21, w22, b2 = 3.5, 3.5, -5.5
     v1, v2, c = 5.5, -5.5, -2.8

     lr = 1.0
     epochs = 200
     ```
  3. 写一个 `sample_grads(params, x1, x2, y)`，返回 9 个梯度。
  4. 每个 epoch：

     * 遍历 4 个 XOR 样本
     * 把 9 个梯度按元素累加
     * **统一更新一次** 9 个参数
  5. 只打印：

     * epoch `1 / 10 / 50 / 100 / 200` 的 `total_loss`
     * 最终 4 个样本的 `y_hat`

  直接从这个骨架补：

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

  def forward(params, x1, x2):
      w11, w12, b1, w21, w22, b2, v1, v2, c = params

      z1 = w11 * x1 + w12 * x2 + b1
      h1 = sigmoid(z1)

      z2 = w21 * x1 + w22 * x2 + b2
      h2 = sigmoid(z2)

      zy = v1 * h1 + v2 * h2 + c
      y_hat = sigmoid(zy)

      return z1, h1, z2, h2, zy, y_hat

  def total_loss(params):
      total = 0.0
      for (x1, x2), y in data_xor:
          _, _, _, _, _, y_hat = forward(params, x1, x2)
          total += 0.5 * (y - y_hat) ** 2
      return total

  def sample_grads(params, x1, x2, y):
      w11, w12, b1, w21, w22, b2, v1, v2, c = params
      z1, h1, z2, h2, zy, y_hat = forward(params, x1, x2)

      delta_y = (y_hat - y) * y_hat * (1 - y_hat)
      delta1 = delta_y * v1 * h1 * (1 - h1)
      delta2 = delta_y * v2 * h2 * (1 - h2)

      # TODO: 返回 9 个梯度，顺序和 params 一样
      return [
          ...,
          ...,
          ...,
          ...,
          ...,
          ...,
          ...,
          ...,
          ...,
      ]

  params = [3.5, 3.5, -1.8, 3.5, 3.5, -5.5, 5.5, -5.5, -2.8]
  lr = 1.0
  epochs = 200

  for epoch in range(1, epochs + 1):
      grad_sum = [0.0] * 9

      for (x1, x2), y in data_xor:
          g = sample_grads(params, x1, x2, y)
          grad_sum = [a + b for a, b in zip(grad_sum, g)]

      # TODO: 统一更新一次
      params = [...]

      if epoch in {1, 10, 50, 100, 200}:
          print(f"epoch={epoch}, total_loss={total_loss(params)}")

  print("\nFinal outputs:")
  for (x1, x2), y in data_xor:
      _, _, _, _, _, y_hat = forward(params, x1, x2)
      print((x1, x2), "target=", y, "y_hat=", y_hat)
  ```

* 验收标准（如何判断我过关）

  1. 这组初始化下，`total_loss` 应该大致接近：

     ```python
     epoch=1   -> 0.0610
     epoch=10  -> 0.0478
     epoch=50  -> 0.0322
     epoch=100 -> 0.0226
     epoch=200 -> 0.0138
     ```
  2. 最终 `y_hat` 应该大致接近：

     ```python
     (0,0) -> 0.09
     (0,1) -> 0.92
     (1,0) -> 0.92
     (1,1) -> 0.08
     ```
  3. 如果你用 `0.5` 做阈值，最终类别要是正确的 XOR。
  4. 你再补一句自己的话：

     * **为什么“把 4 个样本的梯度先加起来，再统一更新一次”可以看作是在朝整份数据更好的方向走？**

* 常见坑（按优先级）

  1. **每看完一个样本就立刻更新参数**
     这不是错，但那叫 SGD；这关验收数值会对不上。
  2. **每个 epoch 忘了把 `grad_sum` 清零**
  3. **`grad_v1 / grad_v2` 误乘成了 `x1 / x2`**
     它们应该乘的是 `h1 / h2`
  4. **`params` 在每个 epoch 开头被重置回初始值**
  5. **更新方向写反**
     还是减号

* 过关后我应该“真正理解”的一句话

  * **backprop 给的是“每个样本怎么推参数”，训练循环把这些局部信号汇总成“整份数据该往哪边走”的一步。**

把你的代码、5 个 loss、最终 4 个 `y_hat` 和那一句解释贴上来。

[1]: https://stanford.edu/~jlmcc/papers/PDP/Volume%201/Chap8_PDP86.pdf?utm_source=chatgpt.com "Learning Internal Representations by Error Propagation"
