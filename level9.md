下一关：**为什么参数不能一模一样地开始**

* 关卡目标

  * 背景故事（对应当年的问题）

    * 问题：现在你已经会用 backprop 训练两层网络了，但参数该从哪里开始？如果两个隐藏单元一开始完全一样，会不会一直学成同一个东西？
    * 卡点：会。Goodfellow、Bengio、Courville 在《Deep Learning》第 8 章里写得很直接：如果两个隐藏单元激活函数相同、接收相同输入、初始参数也相同，那么对确定性的模型、损失和学习算法，它们会一直收到相同更新；也就是说，不打破对称，这两个单元就等价于“白白重复”了。
    * 提出的解法：初始化时**打破对称**，让不同单元一开始就不一样；最常见做法是随机初始化。书里明确说，已知最确定的一条初始化原则就是“need to break symmetry”，随机初始化的一个核心动机就是让不同单元去计算不同函数。
    * 后来叫什么：这一步后来通常就叫 **symmetry breaking / random initialization**。再往后，Glorot 和 Bengio 2010 又进一步讨论了**不只是要随机，还要尺度合适**，并提出了新的初始化方案来加快收敛；“尺度为什么也重要”是下一关。
    * 已确认事实：上面“必须打破对称”和“相同单元会被相同更新”来自《Deep Learning》第 8 章；“2010 年提出新初始化方案以更快收敛”来自 Glorot & Bengio 2010。
    * 经验判断：这一关先不要学新公式，只要亲手看到“**同起点 → 同梯度 → 同功能**”这条链就够了。

* 任务清单（可运行）

  1. 直接复用你上一关的 `sigmoid / forward / total_loss / sample_grads`。
  2. 新增两个初始化：

     ```python
     params_same  = [0.5, 0.5, 0.0,  0.5, 0.5, 0.0,  0.5,  0.5, 0.0]
     params_break = [0.5, 0.5, 0.0,  0.5, 0.5, 0.0,  0.5, -0.5, 0.0]
     ```
  3. 写一个 `batch_grad(params)`：把 4 个 XOR 样本的梯度加起来。
  4. **先不训练**，先分别打印两个初始化下的 batch 梯度，只打印这 6 个：

     * `grad_w11, grad_w12, grad_b1`
     * `grad_w21, grad_w22, grad_b2`
  5. 再写一个 `train_batch(params, lr=1.0, epochs=1000)`。
  6. 对 `params_same` 和 `params_break` 各训练一次，打印：

     * `final_loss`
     * `w11, w12, b1`
     * `w21, w22, b2`
     * 4 个样本的最终 `y_hat`

  骨架直接给你：

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

      return [
          delta1 * x1,
          delta1 * x2,
          delta1,
          delta2 * x1,
          delta2 * x2,
          delta2,
          delta_y * h1,
          delta_y * h2,
          delta_y,
      ]

  def batch_grad(params):
      grad_sum = [0.0] * 9
      for (x1, x2), y in data_xor:
          g = sample_grads(params, x1, x2, y)
          grad_sum = [a + b for a, b in zip(grad_sum, g)]
      return grad_sum

  def train_batch(params, lr=1.0, epochs=1000):
      params = params[:]
      for _ in range(epochs):
          g = batch_grad(params)
          params = [a - lr * b for a, b in zip(params, g)]
      return params

  params_same  = [0.5, 0.5, 0.0,  0.5, 0.5, 0.0,  0.5,  0.5, 0.0]
  params_break = [0.5, 0.5, 0.0,  0.5, 0.5, 0.0,  0.5, -0.5, 0.0]

  for name, params in [("same", params_same), ("break", params_break)]:
      g = batch_grad(params)
      print(f"\n{name} init batch grads:")
      print("grad_w11, grad_w12, grad_b1 =", g[0], g[1], g[2])
      print("grad_w21, grad_w22, grad_b2 =", g[3], g[4], g[5])

      trained = train_batch(params, lr=1.0, epochs=1000)
      print(f"{name} final_loss =", total_loss(trained))
      print("unit1 =", trained[0], trained[1], trained[2])
      print("unit2 =", trained[3], trained[4], trained[5])

      print("final outputs:")
      for (x1, x2), y in data_xor:
          _, _, _, _, _, y_hat = forward(trained, x1, x2)
          print((x1, x2), "target=", y, "y_hat=", y_hat)
  ```

* 验收标准（如何判断我过关）

  1. 在 `same` 初始化下，第一步 batch 梯度必须满足：

     ```python
     grad_w11 == grad_w21
     grad_w12 == grad_w22
     grad_b1  == grad_b2
     ```
  2. 在 `same` 训练完后，两个隐藏单元参数仍应保持相同，且最终 loss 会卡在大约：

     ```python
     0.34
     ```

     最终 `y_hat` 大致会像这样：

     ```python
     (0,0) -> 0.08
     (0,1) -> 0.66
     (1,0) -> 0.66
     (1,1) -> 0.67
     ```

     也就是**学不会 XOR**。
  3. 在 `break` 初始化下，第一步两个隐藏单元的 batch 梯度不再相同。
  4. 在 `break` 训练完后，loss 应大幅下降到大约：

     ```python
     0.005
     ```

     最终 `y_hat` 大致会像这样：

     ```python
     (0,0) -> 0.05
     (0,1) -> 0.95
     (1,0) -> 0.95
     (1,1) -> 0.05
     ```
  5. 你再补一句自己的话：

     * **为什么 `same` 里两个隐藏单元会一直学成一样，而 `break` 里不会？**

* 常见坑（按优先级）

  1. **把上一关的“每个样本立刻更新”写回来**
     这关要复用上一关的 batch 训练。
  2. **把 `params_break` 改了**
     先别改，我是故意给你一个可复现实验。
  3. **只看 final loss，不看第一步梯度**
     这关最值钱的是先看到“同起点 → 同梯度”。
  4. **把“两个隐藏单元参数一样”只理解成入边一样**
     这里我们用整套初值来打破/不打破对称。
  5. **因为 `same` 也在下降，就以为它没问题**
     这关不是问“loss 会不会降一点”，而是问“两个单元是否一直重复同一种功能”。

* 过关后我应该“真正理解”的一句话

  * **多层网络不是“单元越多越强”；如果初始化不打破对称，多个隐藏单元会被 backprop 推着学成同一个东西，等于白加。**

把你的代码、两组 first-step batch 梯度、两组 final loss、最终 4 个 `y_hat`，以及那一句解释贴上来。
