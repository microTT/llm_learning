import numpy as np


def init_weights(mode, width=100, depth=5, seed=7):
    rng = np.random.default_rng(seed)
    Ws = []

    for _ in range(depth):
        fan_in = fan_out = width

        if mode == "standard":
            limit = np.sqrt(1 / fan_in)  # TODO 1
        elif mode == "glorot":
            limit = np.sqrt(6 / (fan_in + fan_out))  # TODO 2
        else:
            raise ValueError(mode)

        W = rng.uniform(-limit, limit, size=(fan_in, fan_out))
        Ws.append(W)

    return rng, Ws


def probe(mode, width=100, depth=5, batch=256, seed=7):
    rng, Ws = init_weights(mode, width, depth, seed)

    X = rng.standard_normal((batch, width))

    Zs = []
    As = [X]
    A = X

    # forward
    for W in Ws:
        Z = A @ W
        A = np.tanh(Z)
        Zs.append(Z)
        As.append(A)

    # 伪造一个顶层反向信号，只看传播尺度
    dA = rng.standard_normal(As[-1].shape)

    dZ_stds = []
    for i in reversed(range(depth)):
        dZ = dA * (1 - As[i + 1] ** 2)  # TODO 3: tanh 的局部导数
        dZ_stds.append(dZ.std())
        dA = dZ @ Ws[i].T

    dZ_stds = dZ_stds[::-1]
    z_stds = [z.std() for z in Zs]

    print(f"\n{mode}")
    print("z_std =", [round(v, 4) for v in z_stds])
    print("dZ_std =", [round(v, 4) for v in dZ_stds])
    print("ratio(layer1/layer5) =", round(dZ_stds[0] / dZ_stds[-1], 4))


probe("standard")
probe("glorot")


# 「为什么这关里，glorot 比“随便随机一下”更像是在给深层网络留活路？」
# 因为glorot按照 fan_in 和 fan_out 来初始化权重，尽量让每一层的方差保持一致，从而避免梯度消失或梯度爆炸
