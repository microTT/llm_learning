
链式法则

d f(g(x)) / dx = (d f(y) / dy) * (d g(x) / dx)

sigmoid 导数
sigmoid(z)' = sigmoid(z) * (1 - sigmoid(z))


神经网络
y_hat = f( 6 * g( w_or_x1 * x1 + 4 * x2 - 2 ) - 6 * h( 4 * x1 + 4 * x2 - 6 ) - 3 )

损失函数
L = 0.5 * (y - y_hat)^2

链式求导
dL_dyhat = -(y - y_hat)
dyhat_dzy = y_hat * (1 - y_hat)
dzy_dhor = 6
dhor_dzor = h_or * (1 - h_or)
dzor_dw = x1


中心差分

( f(x+h) - f(x-h) ) / 2h

(total_loss(w_or_x1 + eps) - total_loss(w_or_x1 - eps)) / (2 * eps)