delta_y = dL/dzy

delta_y = dL/dzy = dL/dy_hat * dy_hat/dzy = (y_hat - y) * y_hat * (1 - y_hat)

delta_h1 = dL/dz1 = dL/dzy * dzy/dh1 * dh1/dz1 = delta_y * v1 * h1 * (1 - h1)

delta_h2 = dL/dz2 = dL/dzy * dzy/dh2 * dh2/dz2 = delta_y * v2 * h2 * (1 - h2)

grad_v1 = delta_y * h1
grad_v2 = delta_y * h2
grad_c = delta_y

grad_w11 = delta_h1 * x1
grad_w12 = delta_h1 * x2
grad_b1 = delta_h1

grad_w21 = delta_h2 * x1
grad_w22 = delta_h2 * x2
grad_b2 = delta_h2
