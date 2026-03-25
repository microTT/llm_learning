**第 7 关：把“一条链”压缩成“每个神经元一个 delta”**

* 关卡目标

  * 背景故事（对应当年的问题）

    * 问题：上一关你已经能对 **一个隐藏层权重**手工展开链式法则。但真实网络里有很多权重，不能每个都单独重新乘一遍。
    * 卡点：如果每条权重都各自展开链式法则，会重复计算很多中间项；而 1986 年 PDP 章节也明确说，**generalized delta rule** 依赖可微的 semilinear activation，线性阈值单元不满足这个条件。([Gwern][1])
    * 提出的解法：先给**每个神经元**定义一个局部误差信号 `delta`，然后所有“流入这个神经元”的权重梯度，都统一写成
      `梯度 = delta × 这条边的输入`。Rumelhart、Hinton、Williams 1986 在 Nature 摘要里把这套过程写成 back-propagation，并强调隐藏单元会学出任务相关特征。([Nature][2])
    * 后来叫什么：这个局部量常记作 **delta / error signal**；整套方法当时写作 **generalized delta rule**，更常见的名字是 **backpropagation**。([Nature][2])
    * 已确认事实：上面关于 backprop、hidden units、generalized delta rule 和阈值单元不可微的说法，来自 1986 年 Nature 摘要和 PDP 原始章节。([Nature][2])
    * 经验判断：这一步先只做**1 条样本 + 1 次更新**，比直接写整网训练循环更稳。

* 任务清单（可运行）

  1. 这关只做 **1 条样本**：

     ```python
     x1, x2 = 1, 0
     y = 1
     ```
  2. 用下面这组固定参数，别改：

     ```python
     w11, w12, b1 = 4, 4, -2
     w21, w22, b2 = 4, 4, -6
     v1, v2, c = 6, -6, -3
     lr = 1.0
     ```
  3. 前向计算：

     ```python
     z1 = w11*x1 + w12*x2 + b1
     h1 = sigmoid(z1)

     z2 = w21*x1 + w22*x2 + b2
     h2 = sigmoid(z2)

     zy = v1*h1 + v2*h2 + c
     y_hat = sigmoid(zy)

     L = 0.5 * (y - y_hat) ** 2
     ```
  4. 反向计算，只补这 3 个 `delta`：

     ```python
     delta_y = ...
     delta_h1 = ...
     delta_h2 = ...
     ```
  5. 再由 `delta` 写出全部 9 个梯度：

     ```python
     grad_v1 = ...
     grad_v2 = ...
     grad_c  = ...

     grad_w11 = ...
     grad_w12 = ...
     grad_b1  = ...

     grad_w21 = ...
     grad_w22 = ...
     grad_b2  = ...
     ```
  6. 做 **1 次**梯度下降更新：

     ```python
     w11 -= lr * grad_w11
     ...
     c   -= lr * grad_c
     ```
  7. 用更新后的参数，再前向一次，打印：

     * `y_hat_old, L_old`
     * `delta_y, delta_h1, delta_h2`
     * 9 个梯度
     * `y_hat_new, L_new`

  代码骨架：

  ```python
  import math

  def sigmoid(z):
      return 1 / (1 + math.exp(-z))

  x1, x2 = 1, 0
  y = 1

  w11, w12, b1 = 4, 4, -2
  w21, w22, b2 = 4, 4, -6
  v1, v2, c = 6, -6, -3
  lr = 1.0

  # forward
  z1 = w11 * x1 + w12 * x2 + b1
  h1 = sigmoid(z1)

  z2 = w21 * x1 + w22 * x2 + b2
  h2 = sigmoid(z2)

  zy = v1 * h1 + v2 * h2 + c
  y_hat = sigmoid(zy)
  L = 0.5 * (y - y_hat) ** 2

  # backward
  delta_y = ...
  delta_h1 = ...
  delta_h2 = ...

  grad_v1 = ...
  grad_v2 = ...
  grad_c  = ...

  grad_w11 = ...
  grad_w12 = ...
  grad_b1  = ...

  grad_w21 = ...
  grad_w22 = ...
  grad_b2  = ...

  # update
  w11_new = w11 - lr * grad_w11
  w12_new = w12 - lr * grad_w12
  b1_new  = b1  - lr * grad_b1

  w21_new = w21 - lr * grad_w21
  w22_new = w22 - lr * grad_w22
  b2_new  = b2  - lr * grad_b2

  v1_new = v1 - lr * grad_v1
  v2_new = v2 - lr * grad_v2
  c_new  = c  - lr * grad_c

  # forward again
  z1_new = w11_new * x1 + w12_new * x2 + b1_new
  h1_new = sigmoid(z1_new)

  z2_new = w21_new * x1 + w22_new * x2 + b2_new
  h2_new = sigmoid(z2_new)

  zy_new = v1_new * h1_new + v2_new * h2_new + c_new
  y_hat_new = sigmoid(zy_new)
  L_new = 0.5 * (y - y_hat_new) ** 2

  print("y_hat_old =", y_hat, "L_old =", L)
  print("delta_y =", delta_y, "delta_h1 =", delta_h1, "delta_h2 =", delta_h2)

  print("grad_v1 =", grad_v1, "grad_v2 =", grad_v2, "grad_c =", grad_c)
  print("grad_w11 =", grad_w11, "grad_w12 =", grad_w12, "grad_b1 =", grad_b1)
  print("grad_w21 =", grad_w21, "grad_w22 =", grad_w22, "grad_b2 =", grad_b2)

  print("y_hat_new =", y_hat_new, "L_new =", L_new)
  ```

  只给两个提示：

  ```python
  delta_y = dL/dzy
  ```

  ```python
  某个神经元所有“入边”的梯度，都共用同一个 delta
  ```

* 验收标准（如何判断我过关）

  1. 前向结果应接近：

     ```python
     z1 = 2
     h1 ≈ 0.8808
     z2 = -2
     h2 ≈ 0.1192
     zy ≈ 1.5696
     y_hat ≈ 0.8277
     L ≈ 0.01484
     ```
  2. 3 个 delta 应接近：

     ```python
     delta_y  ≈ -0.02457
     delta_h1 ≈ -0.01548
     delta_h2 ≈  0.01548
     ```
  3. 你应该会看到：

     ```python
     grad_w12 = 0
     grad_w22 = 0
     ```
  4. 一次更新后，应满足：

     ```python
     y_hat_new > y_hat_old
     L_new < L_old
     ```

     大致会接近：

     ```python
     y_hat_new ≈ 0.83918
     L_new ≈ 0.01293
     ```
  5. 你再补一句自己的话：

     * **为什么有了 `delta_h1` 之后，`w11 / w12 / b1` 三个梯度就能立刻写出来？**

* 常见坑（按优先级）

  1. **把 `delta_y` 写成 `y - y_hat`**
     这里不是，它还要乘输出 sigmoid 的导数。
  2. **`delta_h1` / `delta_h2` 漏掉输出层权重 `v1` / `v2`**
     隐藏层的误差信号要经过输出层往回传。
  3. **把梯度和 delta 混了**
     `delta_h1` 不是 `grad_w11`；
     `grad_w11 = delta_h1 * x1`
  4. **不理解为什么某些梯度是 0**
     这条样本里 `x2 = 0`，所以所有乘 `x2` 的输入边梯度都该是 0。
  5. **更新方向写反**
     是减号，不是加号。

* 过关后我应该“真正理解”的一句话

  * **反向传播真正省掉的，不是数学，而是重复：每个神经元先算一个 delta，再把它复用到所有入边梯度。**

把你的代码、输出，以及那一句解释贴上来。

[1]: https://gwern.net/doc/ai/nn/fully-connected/1986-rumelhart.pdf?utm_source=chatgpt.com "Learning Internal Representations by Error Propagation"
[2]: https://www.nature.com/articles/323533a0 "Learning representations by back-propagating errors | Nature"
