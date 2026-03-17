你刚才问的“标签”问题，正好落到这一关：**只有最终 `y` 有标签，隐藏层权重没有标签，但仍然能拿到更新方向。**

* 关卡目标

  * 背景故事（对应当年的问题）

    * 问题：隐藏层没有直接标签，怎么知道某个隐藏层权重该增还是该减？
    * 卡点：上一关你是靠试 `3.5 / 4.0 / 4.5` 看 loss 变大还是变小；这对 1 个权重还能干，对几十、几百、几百万个权重就完全不可行。1986 年 Rumelhart、Hinton、Williams 把 **back-propagation** 描述为一种新学习过程：反复调整网络连接权重，使实际输出与目标输出之间的差异变小，并指出隐藏单元会学出任务中的重要特征；MIT 讲义也把多层感知机上的这种做法明确称为 **Error Backpropagation Algorithm**。([Nature][1])
    * 提出的解法：把“最终损失对某个隐藏层权重的影响”拆成一串**局部导数相乘**，从输出层一路传回去。
    * 后来叫什么：**backpropagation（反向传播 / 误差反向传播）**。([Nature][1])
    * 已确认事实：上面两点来自 1986 年原论文摘要和 MIT 课程讲义。([Nature][1])
    * 经验判断：先只对 **1 个隐藏层权重**做“数值梯度 vs 解析梯度”对拍，是最不容易学丢的一步。

* 任务清单（可运行）

  1. 继续用上一关同一套 sigmoid XOR 网络。
  2. 只研究一个权重：`w_or_x1`。
  3. 写两个函数：

     * `numeric_grad(w)`：用有限差分近似梯度
     * `backprop_grad(w)`：用链式法则手算解析梯度
  4. 在 `w = 4.0` 时打印两者。
  5. 用 `lr = 5` 做 **一次** 梯度下降，打印更新前后 loss。

  直接从这个骨架填空：

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
      z_or = w_or_x1 * x1 + 4 * x2 - 2
      h_or = sigmoid(z_or)

      z_and = 4 * x1 + 4 * x2 - 6
      h_and = sigmoid(z_and)

      z_y = 6 * h_or - 6 * h_and - 3
      y_hat = sigmoid(z_y)

      return z_or, h_or, z_and, h_and, z_y, y_hat

  def total_loss(w_or_x1):
      total = 0.0
      for (x1, x2), y in data_xor:
          _, _, _, _, _, y_hat = forward(x1, x2, w_or_x1)
          total += 0.5 * (y - y_hat) ** 2
      return total

  def numeric_grad(w_or_x1, eps=1e-4):
      # TODO: 中心差分
      return ...

  def backprop_grad(w_or_x1):
      total = 0.0

      for (x1, x2), y in data_xor:
          z_or, h_or, z_and, h_and, z_y, y_hat = forward(x1, x2, w_or_x1)

          # TODO: 按链式法则拆开
          dL_dyhat = ...
          dyhat_dzy = ...
          dzy_dhor = ...
          dhor_dzor = ...
          dzor_dw = ...

          sample_grad = dL_dyhat * dyhat_dzy * dzy_dhor * dhor_dzor * dzor_dw
          total += sample_grad

      return total

  w = 4.0

  g_num = numeric_grad(w)
  g_bp = backprop_grad(w)

  print("numeric_grad =", g_num)
  print("backprop_grad =", g_bp)

  lr = 5
  w_new = w - lr * g_bp

  print("w_old =", w, "loss_old =", total_loss(w))
  print("w_new =", w_new, "loss_new =", total_loss(w_new))
  ```

  只给两个提示：

  ```python
  d/dz sigmoid(z) = sigmoid(z) * (1 - sigmoid(z))
  ```

  ```python
  对 0.5 * (y - y_hat)^2 求 y_hat 的导数，符号别写反
  ```

* 验收标准（如何判断我过关）

  1. `numeric_grad(4.0)` 和 `backprop_grad(4.0)` 都应接近：

     ```python
     -0.01536429
     ```
  2. 两者差值应非常小；正常写法下，绝对误差通常会小于：

     ```python
     1e-6
     ```
  3. 做完一次更新后，`loss_new` 必须小于 `loss_old`。
     按这套固定参数和 `lr = 5`，你大致会看到：

     ```python
     loss_old ≈ 0.0379890134
     loss_new ≈ 0.0368822271
     ```
  4. 你再补一句自己的话：

     * **为什么隐藏层权重没有标签，仍然能拿到“该往哪边改”的信号？**

* 常见坑（按优先级）

  1. **`dL_dyhat` 符号写反**
     这里应该得到 `y_hat - y`，不是 `y - y_hat`。
  2. **忘了 sigmoid 的导数**
     不是 1，不是 `z*(1-z)`，而是 `sigmoid(z) * (1 - sigmoid(z))`。
  3. **漏掉 `dzor_dw = x1`**
     这个很容易忘，一忘梯度就全偏了。
  4. **数值梯度分母写错**
     中心差分是：

     ```python
     (L(w + eps) - L(w - eps)) / (2 * eps)
     ```
  5. **更新方向写反**
     梯度下降是：

     ```python
     w_new = w - lr * grad
     ```

     不是加号。
  6. **把这关理解成“把所有权重都训练起来”**
     不是。这关只验证：**反向传播给出的单个隐藏层权重梯度，和数值试探是一致的。**

* 过关后我应该“真正理解”的一句话

  * **反向传播不是魔法，它只是把“最终损失对某个权重的影响”拆成一串局部导数，再沿网络反向乘回来。**

把你的代码、两种梯度的输出、更新前后 loss，以及那一句解释贴上来。

[1]: https://www.nature.com/articles/323533a0 "Learning representations by back-propagating errors | Nature"
