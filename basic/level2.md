**第 2 关：让参数从错误里自己长出来**

* 关卡目标

  * 背景故事（对应当年的问题）

    * 问题：上一关你是**人手挑参数**，让一个阈值单元实现 AND / OR。
    * 卡点：这种做法只适合玩具例子；一旦样本变多、输入维度变高，参数不可能一直靠人猜。
    * 提出的解法：如果某个样本分错了，就把权重和门槛往“这次更容易分对”的方向推一点；重复扫训练样本，直到一整轮都不再犯错。Rosenblatt 1958 的 perceptron 论文明确把系统和 **trial-and-error learning**、**positive / negative reinforcement** 关联起来；后来教材里把这类更新过程整理成今天常见的 **perceptron learning rule**。
    * 后来叫什么：这一步后来叫 **Perceptron（感知机）**，更新过程常叫 **perceptron learning rule**。
      已确认事实：1958 年的论文标题就是 *The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain*。
      不完全一手确认：把上一关的 threshold 统一改写成今天常见的 bias 记法，Stanford NLP 教材的 historical notes 把它归到 Widrow & Hoff 1960；这轮我引用的是这份二手历史梳理，不是直接读了 Widrow & Hoff 原文。要做一手验证，去查 Widrow & Hoff 1960。
    * 经验判断：为了让你最容易看懂“错分样本如何推着直线移动”，这一关直接用 `b`，你只要记住：`b = -theta`。

* 任务清单（可运行）

  1. **只训练 AND**，先不要碰 OR，也不要打乱样本顺序。
  2. 用下面这个判定函数：

     ```python
     y_hat = 1 if w1*x1 + w2*x2 + b >= 0 else 0
     ```
  3. 初始值固定成：

     ```python
     w1 = 0
     w2 = 0
     b = 0
     lr = 1
     ```
  4. 对每个样本，计算：

     ```python
     err = y - y_hat
     ```
  5. 然后更新：

     ```python
     w1 += lr * err * x1
     w2 += lr * err * x2
     b  += lr * err
     ```
  6. 每个 epoch 打印一次：

     * `epoch`
     * `w1, w2, b`
     * `mistakes`
  7. 训练结束后，打印 AND 的 4 个输入的预测结果。

  直接从这个骨架填空：

  ```python
  data_and = [
      ((0, 0), 0),
      ((0, 1), 0),
      ((1, 0), 0),
      ((1, 1), 1),
  ]

  def predict(x1, x2, w1, w2, b):
      score = w1 * x1 + w2 * x2 + b
      return 1 if score >= 0 else 0

  def train_perceptron(data, epochs=10, lr=1):
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

              # TODO: 补上更新
              w1 = ...
              w2 = ...
              b = ...

          print(f"epoch={epoch}, w1={w1}, w2={w2}, b={b}, mistakes={mistakes}")

          if mistakes == 0:
              break

      return w1, w2, b

  w1, w2, b = train_perceptron(data_and)

  print("\nFinal truth table:")
  for (x1, x2), y in data_and:
      y_hat = predict(x1, x2, w1, w2, b)
      score = w1 * x1 + w2 * x2 + b
      print((x1, x2), "target=", y, "pred=", y_hat, "score=", score)
  ```

* 验收标准（如何判断我过关）

  1. 最终真值表必须是：

     * `(0, 0) -> 0`
     * `(0, 1) -> 0`
     * `(1, 0) -> 0`
     * `(1, 1) -> 1`
  2. 日志里必须出现至少一次：

     ```python
     mistakes = 0
     ```

     这表示整整一轮都没有再分错。
  3. 你要再补一句自己的话回答：

     * **为什么 `b` 也必须更新？**
  4. 你提交给我的内容只要这三样：

     * 代码
     * epoch 日志
     * final truth table

* 常见坑（按优先级）

  1. **忘了更新 `b`**
     这会让直线只能“转”，很难“平移”；而你上一关已经理解过，平移是核心。
  2. **把 `err` 写反**
     应该是 `y - y_hat`，不是 `y_hat - y`。
  3. **更新时忘了乘输入**
     正确是 `w += err * x`，不是只写 `w += err`。
  4. **在每个样本或每个 epoch 里把权重重置回 0**
     那就等于根本没学到。
  5. **把“最后一个样本分对了”误当成收敛**
     真正的收敛标准是：**整整一轮 mistakes = 0**。
  6. **把最终权重当成唯一答案**
     不对。不同初始化、不同样本顺序，可能学到不同参数，但只要 4 个点都分对，就是可接受解。

* 过关后我应该“真正理解”的一句话
  **感知机的第一步魔法不是变深，而是让“错分样本”推动决策边界移动，从而让参数开始由数据决定。**

把你的代码、epoch 日志、final truth table 贴上来；在你说“过关”前，我不会跳到下一关。
