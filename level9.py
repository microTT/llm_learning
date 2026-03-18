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

    return [
        delta1 * x1,
        delta1 * x2,
        delta1,
        delta2 * x1,
        delta2 * x2,
        delta2,
        delta_y * h1,
        delta_y * h2,
        delta_y,
    ]


def batch_grad(params):
    grad_sum = [0.0] * 9
    for (x1, x2), y in data_xor:
        g = sample_grads(params, x1, x2, y)
        grad_sum = [a + b for a, b in zip(grad_sum, g)]
    return grad_sum


def train_batch(params, lr=1.0, epochs=1000):
    params = params[:]
    for _ in range(epochs):
        g = batch_grad(params)
        params = [a - lr * b for a, b in zip(params, g)]
    return params


params_same = [0.5, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5, 0.5, 0.0]
params_break = [0.5, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5, -0.5, 0.0]

for name, params in [("same", params_same), ("break", params_break)]:
    g = batch_grad(params)
    print(f"\n{name} init batch grads:")
    print("grad_w11, grad_w12, grad_b1 =", g[0], g[1], g[2])
    print("grad_w21, grad_w22, grad_b2 =", g[3], g[4], g[5])

    trained = train_batch(params, lr=1.0, epochs=1000)
    print(f"{name} final_loss =", total_loss(trained))
    print("unit1 =", trained[0], trained[1], trained[2])
    print("unit2 =", trained[3], trained[4], trained[5])

    print("final outputs:")
    for (x1, x2), y in data_xor:
        _, _, _, _, _, y_hat = forward(trained, x1, x2)
        print((x1, x2), "target=", y, "y_hat=", y_hat)
