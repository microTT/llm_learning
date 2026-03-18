下一关：**先不学反向传播，先手工搭一个“两层网络”，亲眼看到 XOR 其实已经能表示。**

* 关卡目标

  * 背景故事（对应当年的问题）

    * 问题：XOR 已经证明了**单层**不够。接下来的自然问题不是“还能不能训练”，而是更基础的：**只要多加一层，表示能力到底有没有变？**
    * 卡点：单层只能在原始输入空间里画一条线；XOR 在原始空间里就是分不开。
    * 提出的解法：先让一层隐藏单元把原输入改写成新的中间表示，再让输出层在这个**新空间**里做线性切分。MIT 的课程讲义把 XOR 明确列为单个 perceptron 解决不了的问题，同时指出 multilayer perceptrons 可以把问题拆成几个线性可分的小问题；同一讲义把更一般的结构写成 two-layer feed-forward network。([MIT OpenCourseWare][1])
    * 后来叫什么：常见教学名词是 **隐藏层**、**two-layer feed-forward network**、**multilayer perceptron (MLP)**。下一步真正的新卡点会变成：隐藏层没有直接标签，怎么学？MIT 的 backprop 讲义就把这件事直接叫 **hidden layer problem**；2024 MIT OCW 课程转录也把 backprop 描述为让 multilayer perceptrons 可以训练、从而解决 XOR 这类非线性可分任务的关键。([MIT OpenCourseWare][2])
    * 不完全确认：术语 “MLP” 最早是哪篇文献先固定下来的，我这轮不做一手确认；要验证就去追早期教材/论文里 “multilayer perceptron” 的首次用法。
    * 经验判断：对你现在最有效的不是先讲链式法则，而是**先亲手拼出一个能做 XOR 的两层网络**。

* 任务清单（可运行）

  1. 复用你上一关的 `b` 写法。
  2. 隐藏层先**直接复用你已经学会的两个门**：

     * `h_or`：实现 OR
     * `h_and`：实现 AND
  3. 只把**输出层**参数留给你自己找。
  4. 打印每个样本的：

     * `h_or`
     * `h_and`
     * 最终 `y`

  代码骨架：

  ```python
  cases = [(0, 0), (0, 1), (1, 0), (1, 1)]

  def score(x1, x2, w1, w2, b):
      return w1 * x1 + w2 * x2 + b

  def neuron(x1, x2, w1, w2, b):
      return 1 if score(x1, x2, w1, w2, b) >= 0 else 0

  def xor_net(x1, x2):
      # 这两个先直接复用前两关结论
      h_or = neuron(x1, x2, 1, 1, -1)
      h_and = neuron(x1, x2, 1, 1, -2)

      # TODO: 只补这里，找一组最小整数参数
      y = neuron(h_or, h_and, ..., ..., ...)

      return h_or, h_and, y

  for x1, x2 in cases:
      h_or, h_and, y = xor_net(x1, x2)
      print((x1, x2), "->", "h_or=", h_or, "h_and=", h_and, "y=", y)
  ```

  只给一个提示：
  **输出层不要再看原始 `(x1, x2)`，只看 `(h_or, h_and)`。你的目标是在隐藏层空间里，只让一个状态输出 1。**

* 验收标准（如何判断我过关）

  1. 最终输出必须是 XOR：

     * `(0,0) -> 0`
     * `(0,1) -> 1`
     * `(1,0) -> 1`
     * `(1,1) -> 0`
  2. 隐藏层输出应当是：

     * `(0,0) -> (0,0)`
     * `(0,1) -> (1,0)`
     * `(1,0) -> (1,0)`
     * `(1,1) -> (1,1)`
  3. 你再补一句自己的话：

     * **为什么到了隐藏层空间后，输出层又能用一条线分了？**
  4. 你提交给我的内容只要这三样：

     * 代码
     * 实际打印结果
     * 你那一句解释

* 常见坑（按优先级）

  1. **又回到原始 `(x1, x2)` 上找输出层参数**
     这关的关键就是：输出层只看隐藏层表示。
  2. **把 `b` 的符号写反**
     `OR` 用的是 `b=-1`，`AND` 用的是 `b=-2`。
  3. **输出层两个权重都设成正数**
     那你很难把 `(1,1)` 压回 0。
  4. **只看最终 `y`，不打印 `h_or/h_and`**
     这样你会看不见“表示变换”到底发生了什么。
  5. **把这一关误解成“训练网络”**
     不是。这关是先证明：**两层已经有这个表达能力**。

* 过关后我应该“真正理解”的一句话

  * **隐藏层的本质不是多一层计算，而是把原空间里分不开的数据，先改写成输出层更容易切分的中间表示。**

把你的代码和输出贴上来。我先只审你最可能错的地方，再给最小修改建议。

[1]: https://ocw.mit.edu/courses/9-40-introduction-to-neural-computation-spring-2018/0993f9f8231dae918e3a6d291b13281f_MIT9_40S18_Lec15.pdf "Lecture 15: Perceptrons and Matrix Operations - 9.40 Introduction to Neural Computation"
[2]: https://ocw.mit.edu/courses/9-641j-introduction-to-neural-networks-spring-2005/5d46d3b6e32a5120fe9893193c31e926_lec20_backprop.pdf "Backpropagation learning"
