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
    return (total_loss(w_or_x1 + eps) - total_loss(w_or_x1 - eps)) / (2 * eps)


def backprop_grad(w_or_x1):
    total = 0.0

    for (x1, x2), y in data_xor:
        z_or, h_or, z_and, h_and, z_y, y_hat = forward(x1, x2, w_or_x1)

        # L = 0.5 * (y - y_hat) ** 2

        # TODO: 按链式法则拆开
        dL_dyhat = -(y - y_hat)
        dyhat_dzy = y_hat * (1 - y_hat)
        dzy_dhor = 6
        dhor_dzor = h_or * (1 - h_or)
        dzor_dw = x1

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
