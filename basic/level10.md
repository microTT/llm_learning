* 关卡目标

  * 背景故事（对应当年的问题）

    * 问题：上一关你已经看到“随机初始化要打破对称”，但**随机**不等于**好训**。已确认事实：Goodfellow 等在《Deep Learning》里明确写到，初始化分布的**尺度**会显著影响优化和泛化；权重过大可能让激活函数进入饱和区，造成梯度完全丢失。Glorot 与 Bengio 2010 也明确指出，logistic sigmoid 对深层随机初始化不合适，因为它会把上层推入 saturation，并提出了一个收敛更快的新初始化方案。
    * 卡点：对 sigmoid 来说，`sigma'(z) = sigma(z) * (1 - sigma(z))`。当 `z` 很大或很小时，导数接近 0；backprop 一层层往回传时，这些小导数会连乘，前面层的梯度会迅速变小。后面通常把这类现象归到 **vanishing gradients** 这个名字下面；我这里不主张“谁最早固定这个术语”的精确年份。
    * 提出的解法：先不是换架构，而是先学会**控制初始化尺度**，让各层别一开始就掉进饱和区；这条路后来在前馈网络里最典型的名字就是 **Xavier / Glorot initialization**。
    * 经验判断：这关先不用矩阵网络，直接用一个 3 层标量 sigmoid 链，就足够把“饱和”和“梯度消失”连起来看清。

* 任务清单（可运行）

  1. 做一个 **3 层标量 sigmoid 链**，没有 bias。
  2. 固定：

     ```python
     x = 1.0
     y = 0.0
     ```
  3. 比较两组权重：

     ```python
     [1.0, 1.0, 1.0]
     [8.0, 8.0, 8.0]
     ```
  4. 打印每组的：

     * `z1, z2, z3`
     * `h1, h2, y_hat`
     * `delta1, delta2, delta3`
     * `grad_w1, grad_w2, grad_w3`
     * `L`
  5. 你只需要补反向传播那几行。

  代码骨架：

  ```python
  import math

  def sigmoid(z):
      return 1 / (1 + math.exp(-z))

  def run(ws, x=1.0, y=0.0):
      w1, w2, w3 = ws

      # forward
      z1 = w1 * x
      h1 = sigmoid(z1)

      z2 = w2 * h1
      h2 = sigmoid(z2)

      z3 = w3 * h2
      y_hat = sigmoid(z3)

      L = 0.5 * (y - y_hat) ** 2

      # backward
      delta3 = ...
      delta2 = ...
      delta1 = ...

      grad_w3 = ...
      grad_w2 = ...
      grad_w1 = ...

      print("ws =", ws)
      print("z =", round(z1, 4), round(z2, 4), round(z3, 4))
      print("h =", round(h1, 4), round(h2, 4), round(y_hat, 4))
      print("delta =", delta1, delta2, delta3)
      print("grad =", grad_w1, grad_w2, grad_w3)
      print("L =", L)
      print()

  run([1.0, 1.0, 1.0])
  run([8.0, 8.0, 8.0])
  ```

  只给一个提示：

  ```python
  grad_w2 = delta2 * h1
  ```

* 验收标准（如何判断我过关）

  1. 对 `ws = [1, 1, 1]`，你大致会看到：

     ```python
     h1 ≈ 0.7311
     h2 ≈ 0.6750
     y_hat ≈ 0.6626
     grad_w1 ≈ 0.00639
     ```
  2. 对 `ws = [8, 8, 8]`，你大致会看到：

     ```python
     h1 ≈ 0.9997
     h2 ≈ 0.9997
     y_hat ≈ 0.9997
     grad_w1 ≈ 2.4e-09
     L ≈ 0.4997
     ```
  3. 关键现象必须同时成立：

     * 大权重时，**loss 很大**
     * 但第一层梯度 `grad_w1` 却**极小**
  4. 你再补一句自己的话：

     * **为什么输出已经很错了，第一层梯度还是几乎为 0？**

* 常见坑（按优先级）

  1. `delta3` 少乘了输出层 sigmoid 的导数。
  2. `grad_w2`、`grad_w3` 误写成乘 `x`；它们应分别乘 `h1`、`h2`。
  3. 看到梯度小，就误以为模型已经学得很好；这关故意让你看到：**loss 很大，梯度仍然能很小**。
  4. 只看 `grad_w3`，不看 `grad_w1`；这关重点是**早层梯度**。

* 过关后我应该“真正理解”的一句话

  * **深层 sigmoid 的难点不只是会不会 backprop，而是学习信号可能在层层饱和里死掉，根本传不到前面。**

把你的代码和两组输出贴上来，再用一句话回答验收里的那个问题。
