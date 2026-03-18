delta3 = dL/dz3 = dL/dy_hat * dy_hat/dz3 = (y_hat - y) * y_hat * (1 - y_hat)
delta2 = dL/dz2 = dL/dz3 * dz3/dh2 * dh2/dz2 = delta3 * w3 * h2 * (1 - h2)
delta1 = dL/dz1 = dL/dz2 * dz2/dh1 * dh1/dz1 = delta2 * w2 * h1 * (1 - h1)

grad_w3 = delta3 * h2
grad_w2 = delta2 * h1
grad_w1 = delta1 * x


「为什么输出已经很错了，第一层梯度还是几乎为 0？」
因为我们接近输出层的那一层的变化已经很小了，通过微分链式反向传播，到所以第一层的变化几乎接近0