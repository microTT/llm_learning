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
