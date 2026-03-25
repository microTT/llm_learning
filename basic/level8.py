import math

data_xor = [
    ((0, 0), 0),
    ((0, 1), 1),
    ((1, 0), 1),
    ((1, 1), 0),
]


def sigmoid(z):
    return 1 / (1 + math.exp(-z))


def forward(params, x1, x2):
    w11, w12, b1, w21, w22, b2, v1, v2, c = params

    z1 = w11 * x1 + w12 * x2 + b1
    h1 = sigmoid(z1)

    z2 = w21 * x1 + w22 * x2 + b2
    h2 = sigmoid(z2)

    zy = v1 * h1 + v2 * h2 + c
    y_hat = sigmoid(zy)

    return z1, h1, z2, h2, zy, y_hat


def total_loss(params):
    total = 0.0
    for (x1, x2), y in data_xor:
        _, _, _, _, _, y_hat = forward(params, x1, x2)
        total += 0.5 * (y - y_hat) ** 2
    return total


def sample_grads(params, x1, x2, y):
    w11, w12, b1, w21, w22, b2, v1, v2, c = params
    z1, h1, z2, h2, zy, y_hat = forward(params, x1, x2)

    delta_y = (y_hat - y) * y_hat * (1 - y_hat)
    delta1 = delta_y * v1 * h1 * (1 - h1)
    delta2 = delta_y * v2 * h2 * (1 - h2)

    grad_v1 = delta_y * h1
    grad_v2 = delta_y * h2
    grad_c = delta_y

    grad_w11 = delta1 * x1
    grad_w12 = delta1 * x2
    grad_b1 = delta1

    grad_w21 = delta2 * x1
    grad_w22 = delta2 * x2
    grad_b2 = delta2

    # TODO: 返回 9 个梯度，顺序和 params 一样
    return [
        grad_w11,
        grad_w12,
        grad_b1,
        grad_w21,
        grad_w22,
        grad_b2,
        grad_v1,
        grad_v2,
        grad_c,
    ]


params = [3.5, 3.5, -1.8, 3.5, 3.5, -5.5, 5.5, -5.5, -2.8]
lr = 1.0
epochs = 200

for epoch in range(1, epochs + 1):
    grad_sum = [0.0] * 9

    for (x1, x2), y in data_xor:
        g = sample_grads(params, x1, x2, y)
        grad_sum = [a + b for a, b in zip(grad_sum, g)]

    # TODO: 统一更新一次
    params = [a - lr * b for a, b in zip(params, grad_sum)]

    if epoch in {1, 10, 50, 100, 200}:
        print(f"epoch={epoch}, total_loss={total_loss(params)}")

print("\nFinal outputs:")
for (x1, x2), y in data_xor:
    _, _, _, _, _, y_hat = forward(params, x1, x2)
    print((x1, x2), "target=", y, "y_hat=", y_hat)
