import math


def sigmoid(z):
    return 1 / (1 + math.exp(-z))


x1, x2 = 1, 0
y = 1

w11, w12, b1 = 4, 4, -2
w21, w22, b2 = 4, 4, -6
v1, v2, c = 6, -6, -3
lr = 1.0

# forward
z1 = w11 * x1 + w12 * x2 + b1
h1 = sigmoid(z1)

z2 = w21 * x1 + w22 * x2 + b2
h2 = sigmoid(z2)

zy = v1 * h1 + v2 * h2 + c
y_hat = sigmoid(zy)
L = 0.5 * (y - y_hat) ** 2

# backward
delta_y = (y_hat - y) * y_hat * (1 - y_hat)

delta_h1 = delta_y * v1 * h1 * (1 - h1)

delta_h2 = delta_y * v2 * h2 * (1 - h2)

grad_v1 = delta_y * h1
grad_v2 = delta_y * h2
grad_c = delta_y


grad_w11 = delta_h1 * x1
grad_w12 = delta_h1 * x2
grad_b1 = delta_h1

grad_w21 = delta_h2 * x1
grad_w22 = delta_h2 * x2
grad_b2 = delta_h2


# update
w11_new = w11 - lr * grad_w11
w12_new = w12 - lr * grad_w12
b1_new = b1 - lr * grad_b1

w21_new = w21 - lr * grad_w21
w22_new = w22 - lr * grad_w22
b2_new = b2 - lr * grad_b2

v1_new = v1 - lr * grad_v1
v2_new = v2 - lr * grad_v2
c_new = c - lr * grad_c

# forward again
z1_new = w11_new * x1 + w12_new * x2 + b1_new
h1_new = sigmoid(z1_new)

z2_new = w21_new * x1 + w22_new * x2 + b2_new
h2_new = sigmoid(z2_new)

zy_new = v1_new * h1_new + v2_new * h2_new + c_new
y_hat_new = sigmoid(zy_new)
L_new = 0.5 * (y - y_hat_new) ** 2

print("y_hat_old =", y_hat, "L_old =", L)
print("delta_y =", delta_y, "delta_h1 =", delta_h1, "delta_h2 =", delta_h2)

print("grad_v1 =", grad_v1, "grad_v2 =", grad_v2, "grad_c =", grad_c)
print("grad_w11 =", grad_w11, "grad_w12 =", grad_w12, "grad_b1 =", grad_b1)
print("grad_w21 =", grad_w21, "grad_w22 =", grad_w22, "grad_b2 =", grad_b2)

print("y_hat_new =", y_hat_new, "L_new =", L_new)
