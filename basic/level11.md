**第 11 关：不是所有“可微”激活都一样好训**

* 关卡目标

  * 背景故事（对应当年的问题）

    * 问题：你已经看到，sigmoid/tanh 网络即使用了更合适的初始化，深层里还是很容易因为饱和而让前面层几乎收不到梯度。2010 年 Nair 与 Hinton 提出 **Rectified Linear Units**；2011 年 Glorot、Bordes、Bengio 进一步研究了深层 **rectifier networks**。今天工程里常把这个激活写成 **ReLU(x)=max(0,x)**。([U of T Computer Science][1])
    * 卡点：sigmoid/tanh 在 |z| 很大时导数会很小；即使反向传播公式没错，前面层的梯度也会被一层层小导数乘没。([Proceedings of Machine Learning Research][2])
    * 提出的解法：把隐藏层换成 **rectifier**。在正半轴上，ReLU 的局部导数是 1，不会像 sigmoid 那样越激活越“钝”。([PyTorch Docs][3])
    * 后来叫什么：后来工程里最常见的名字就是 **ReLU**。([PyTorch Docs][3])
    * 经验判断：这一关先只隔离一个点——**正半轴上，ReLU 的梯度为什么更容易传回前面层**。负半轴“死掉”的问题，先放在常见坑里。

* 任务清单（可运行）

  1. 做两条**两层隐藏层的标量链**，输出层用**线性输出**，这样就不会把问题又混成“输出层 sigmoid 饱和”。
  2. 两条链都固定：

     ```python
     x = 1.0
     y = 0.0
     w1 = 8.0
     w2 = 8.0
     ```
  3. 为了让两条链的最终输出都大约在 `0.1` 左右，输出层权重分别固定成：

     ```python
     # sigmoid-hidden 链
     w3_sigmoid = 0.1

     # relu-hidden 链
     w3_relu = 0.1 / 64   # = 0.0015625
     ```
  4. 打印这几个量：

     * `z1, h1, local_grad1`
     * `z2, h2, local_grad2`
     * `y_hat, L`
     * `grad_w1`
  5. 你只需要补反向传播那几行。

  直接从这个骨架改：

  ```python
  import math

  def sigmoid(z):
      return 1 / (1 + math.exp(-z))

  def relu(z):
      return z if z > 0 else 0.0

  def run(act_name):
      x = 1.0
      y = 0.0
      w1 = 8.0
      w2 = 8.0

      if act_name == "sigmoid":
          act = sigmoid
          def dact(z, a):
              return a * (1 - a)
          w3 = 0.1
      elif act_name == "relu":
          act = relu
          def dact(z, a):
              return 1.0 if z > 0 else 0.0
          w3 = 0.1 / 64
      else:
          raise ValueError(act_name)

      # forward
      z1 = w1 * x
      h1 = act(z1)

      z2 = w2 * h1
      h2 = act(z2)

      y_hat = w3 * h2
      L = 0.5 * (y - y_hat) ** 2

      # backward
      delta3 = ...
      local_grad2 = ...
      delta2 = ...
      local_grad1 = ...
      delta1 = ...

      grad_w1 = ...

      print("\n", act_name, sep="")
      print("z1 =", z1, "h1 =", h1, "local_grad1 =", local_grad1)
      print("z2 =", z2, "h2 =", h2, "local_grad2 =", local_grad2)
      print("y_hat =", y_hat, "L =", L)
      print("grad_w1 =", grad_w1)

  run("sigmoid")
  run("relu")
  ```

  只给一个提示：

  ```python
  delta3 = y_hat - y
  ```

* 验收标准（如何判断我过关）

  1. `sigmoid` 这条链你应当看到大致：

     ```python
     h1 ≈ 0.999665
     local_grad1 ≈ 0.000335
     h2 ≈ 0.999664
     local_grad2 ≈ 0.000336
     y_hat ≈ 0.099966
     L ≈ 0.004997
     grad_w1 ≈ 9.0e-09
     ```
  2. `relu` 这条链你应当看到大致：

     ```python
     h1 = 8.0
     local_grad1 = 1.0
     h2 = 64.0
     local_grad2 = 1.0
     y_hat = 0.1
     L = 0.005
     grad_w1 = 0.00125
     ```
  3. 关键现象必须同时成立：

     * 两条链的 `y_hat` 和 `L` 很接近
     * 但 `grad_w1` 差很多，ReLU 明显更大
  4. 你再补一句自己的话：

     * **为什么在这个实验里，明明两条链最终输出差不多，ReLU 却能把更强的学习信号传回第一层？**

* 常见坑（按优先级）

  1. 把输出层又写成 sigmoid。
     这关故意用线性输出，只隔离“隐藏层激活函数”的差别。
  2. `ReLU` 的导数写成永远 `1`。
     这里只在 `z > 0` 时是 `1`，否则是 `0`。([PyTorch Docs][3])
  3. 觉得这关说明 “ReLU 永远更好”。
     不对。这关只证明：**在正半轴上，它不像 sigmoid 那样容易饱和**。
  4. 看到 ReLU 梯度更大，就忽略它在负半轴可能“死掉”。
     这是它的新副作用，我们后面再补。

* 过关后我应该“真正理解”的一句话

  * **ReLU 解决的不是“可不可以求导”，而是“在激活已经很大的正区间里，梯度别像 sigmoid 那样迅速衰减”。**

把你的代码和两组输出贴上来，再用一句话回答验收里的那个问题。

[1]: https://www.cs.toronto.edu/~hinton/absps/reluICML.pdf?utm_source=chatgpt.com "Rectified Linear Units Improve Restricted Boltzmann ..."
[2]: https://proceedings.mlr.press/v15/glorot11a/glorot11a.pdf?utm_source=chatgpt.com "Deep Sparse Rectifier Neural Networks"
[3]: https://docs.pytorch.org/docs/stable/generated/torch.nn.ReLU.html?utm_source=chatgpt.com "ReLU — PyTorch 2.10 documentation"
