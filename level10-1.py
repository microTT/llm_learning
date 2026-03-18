import math


def sigmoid(z):
    return 1 / (1 + math.exp(-z))


def run(ws, x=1.0, y=0.0):
    w1, w2, w3 = ws

    # forward
    z1 = w1 * x
    h1 = sigmoid(z1)

    z2 = w2 * h1
    h2 = sigmoid(z2)

    z3 = w3 * h2
    y_hat = sigmoid(z3)

    L = 0.5 * (y - y_hat) ** 2

    # backward
    delta3 = (y_hat - y) * y_hat * (1 - y_hat)
    delta2 = delta3 * w3 * h2 * (1 - h2)
    delta1 = delta2 * w2 * h1 * (1 - h1)

    grad_w3 = delta3 * h2
    grad_w2 = delta2 * h1
    grad_w1 = delta1 * x

    print("ws =", ws)
    print("z =", round(z1, 4), round(z2, 4), round(z3, 4))
    print("h =", round(h1, 4), round(h2, 4), round(y_hat, 4))
    print("delta =", delta1, delta2, delta3)
    print("grad =", grad_w1, grad_w2, grad_w3)
    print("L =", L)
    print()


run([1.0, 1.0, 1.0])
run([8.0, 8.0, 8.0])
