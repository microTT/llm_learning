* 关卡目标

  * 背景故事（对应当年的问题）

    * 问题：上一关你已经让单层感知机学会了 AND。自然会追问一句：**那它是不是也能学会所有二值逻辑？**
    * 卡点：你上一关的几何直觉已经足够用了——单层感知机本质上是在平面里找**一条直线**。而 XOR 的四个点是“对角同类”，单条直线分不开。现代教材普遍把这件事表述为：**单个 perceptron 不能表示 XOR，因为 XOR 不是线性可分的**。关于历史脉络，二手资料普遍把这类限制和 Minsky & Papert 1969 年的 *Perceptrons* 联系起来；这轮我没有直接核对原书页码，所以把“1969 年这本书系统化强调了这种限制”视为**已广泛接受的二手历史说法**，你若要一手确认，去读 1969 版 *Perceptrons* 或其扫描版目录/相关章节。([Stanford University][1])
    * 提出的解法：先别急着“补救”。这一关只做一件事：**亲手把单层感知机跑到 XOR 上，让它失败**。历史上真正的下一步是：把多个阈值单元叠起来，让隐藏层先把空间重新切开；后来这条路叫 **multilayer perceptron, MLP**。而更实用的深层训练 revival 则是在 1980 年代随着 backpropagation 普及而出现。([Stanford University][1])
    * 后来叫什么：这道坎后来通常就叫 **XOR 问题**，本质名字叫 **线性不可分（non-linearly separable）**。([Stanford University][1])
    * 经验判断：对你来说，**先看失败日志，再谈证明**，会比一上来讲定义更容易建立“表示能力”直觉。

* 任务清单（可运行）

  1. 直接复用你上一关的代码，**只改数据集**：

  ```python
  data_xor = [
      ((0, 0), 0),
      ((0, 1), 1),
      ((1, 0), 1),
      ((1, 1), 0),
  ]
  ```

  2. 其他先保持不变：

     * `w1 = 0, w2 = 0, b = 0`
     * `lr = 1`
     * `predict` 还是：

       ```python
       return 1 if score >= 0 else 0
       ```
  3. 把训练轮数改成 `epochs=12`。
  4. **不要改更新规则**。
  5. 训练结束后打印：

     * 每轮 `epoch, w1, w2, b, mistakes`
     * 最终 truth table
  6. 再补一行你自己的观察：

     * **哪两点是正类，哪两点是负类？它们在图上是什么关系？**

  你可以直接从这版改：

  ```python
  data_xor = [
      ((0, 0), 0),
      ((0, 1), 1),
      ((1, 0), 1),
      ((1, 1), 0),
  ]

  def predict(x1, x2, w1, w2, b):
      score = w1 * x1 + w2 * x2 + b
      return 1 if score >= 0 else 0

  def train_perceptron(data, epochs=12, lr=1):
      w1 = 0
      w2 = 0
      b = 0

      for epoch in range(1, epochs + 1):
          mistakes = 0

          for (x1, x2), y in data:
              y_hat = predict(x1, x2, w1, w2, b)
              err = y - y_hat

              if err != 0:
                  mistakes += 1
                  w1 += lr * err * x1
                  w2 += lr * err * x2
                  b += lr * err

          print(f"epoch={epoch}, w1={w1}, w2={w2}, b={b}, mistakes={mistakes}")

      return w1, w2, b

  w1, w2, b = train_perceptron(data_xor)

  print("\nFinal truth table:")
  for (x1, x2), y in data_xor:
      y_hat = predict(x1, x2, w1, w2, b)
      score = w1 * x1 + w2 * x2 + b
      print((x1, x2), "target=", y, "pred=", y_hat, "score=", score)
  ```

* 验收标准（如何判断我过关）

  1. 你跑出来的日志里，**12 轮内不应该出现 `mistakes=0`**。
  2. 最终 truth table 里，**至少会有一个样本分错**。
  3. 你能用一句话解释：

     * **这不是“训练得不够久”，而是“单层表示能力不够”**。
  4. 你提交给我的内容只要这四样：

     * 代码
     * 12 轮日志
     * final truth table
     * 你对四个点相对位置的一句话描述

* 常见坑（按优先级）

  1. **其实还在跑 AND，不是 XOR**
     最常见。
  2. **看到训练失败，就以为代码错了**
     这关的目标就是失败。
  3. **以为把 epoch 调到 1000 就能解决**
     对 XOR，单层感知机不是“没训够”，而是“根本没有一条线可用”。([Stanford University][1])
  4. **把“单层感知机学不会 XOR”误听成“神经网络学不会 XOR”**
     错。历史上的下一步正是加隐藏层。([Stanford University][1])
  5. **把“线性不可分”理解成“完全不可分”**
     也错。不是分不开，而是**不能用单条直线分开**。

* 过关后我应该“真正理解”的一句话

  * **XOR 把一个核心事实钉死了：单层感知机的问题不是训练速度，而是表达能力只有“单条线切平面”。**

把你的代码、12 轮日志、final truth table 和那句几何观察贴上来。我先只做审阅和最小纠错，不跳下一关。

[1]: https://web.stanford.edu/~jurafsky/slp3/6.pdf?utm_source=chatgpt.com "Neural Networks"
