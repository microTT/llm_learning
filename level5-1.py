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
    # 只让这个权重变化
    h_or = sigmoid(w_or_x1 * x1 + 4 * x2 - 2)

    # 其余先固定
    h_and = sigmoid(4 * x1 + 4 * x2 - 6)
    y_hat = sigmoid(6 * h_or - 6 * h_and - 3)

    return h_or, h_and, y_hat


def total_loss(w_or_x1):
    total = 0.0
    for (x1, x2), y in data_xor:
        h_or, h_and, y_hat = forward(x1, x2, w_or_x1)
        total += 0.5 * (y - y_hat) ** 2
    return total


for candidate in [3.5, 4.0, 4.5]:
    print("w_or_x1 =", candidate, "loss =", total_loss(candidate))

print("\nBase outputs (w_or_x1 = 4.0):")
for (x1, x2), y in data_xor:
    h_or, h_and, y_hat = forward(x1, x2, 4.0)
    print(
        (x1, x2),
        "target=",
        y,
        "h_or=",
        round(h_or, 4),
        "h_and=",
        round(h_and, 4),
        "y_hat=",
        round(y_hat, 4),
    )
