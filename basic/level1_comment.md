.(0,1)      .(1,1)

.(0,0)      .(1,0)

AND (0,0) -> 0
AND (0,1) -> 0
AND (1,0) -> 0
AND (1,1) -> 1

w1 * 0 + w2 * 0 <= theta  
w1 * 0 + w2 * 1 <= theta  
w1 * 1 + w2 * 0 <= theta  
w1 * 1 + w2 * 1 > theta 

w1 * 0 + w2 * 0 + (-theta) <= 0
w1 * 0 + w2 * 1 + (-theta) <= 0
w1 * 1 + w2 * 0 + (-theta) <= 0
w1 * 1 + w2 * 1 + (-theta) > 0

由 瞪眼法 可得

w1  = 2, w2 = 2, theta = 3

OR (0,0) -> 0
OR (0,1) -> 1
OR (1,0) -> 1
OR (1,1) -> 1

w1 * 0 + w2 * 0 + (-theta) <= 0
w1 * 0 + w2 * 1 + (-theta) <= 0
w1 * 1 + w2 * 0 + (-theta) <= 0
w1 * 1 + w2 * 1 + (-theta) > 0

由 瞪眼法 可得

w1  = 2, w2 = 2, theta = 1






