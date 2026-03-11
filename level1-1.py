cases = [(0, 0), (0, 1), (1, 0), (1, 1)]

def mp_unit(x1, x2, w1, w2, theta):
    s = w1 * x1 + w2 * x2
    return 1 if s >= theta else 0

# TODO 1: 选一组参数，让它实现 AND
# TODO 2: 选一组参数，让它实现 OR

print("AND:")
for x1, x2 in cases:
    y = mp_unit(x1, x2, 2, 2, 3)
    print((x1, x2), "->", y)

print("OR:")
for x1, x2 in cases:
    y = mp_unit(x1, x2, 2, 2, 1)
    print((x1, x2), "->", y)