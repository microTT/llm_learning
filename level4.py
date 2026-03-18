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
    y = neuron(h_or, h_and, 1, -1, -1)

    return h_or, h_and, y


for x1, x2 in cases:
    h_or, h_and, y = xor_net(x1, x2)
    print((x1, x2), "->", "h_or=", h_or, "h_and=", h_and, "y=", y)
