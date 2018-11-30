import matplotlib.pyplot as plt
import math


def scale(x,y,sx,sy):
	plt.plot(x,y,marker = 'o')
	plt.plot(x*sx,y*sy,marker='o')


print "enter the co-ordinates of point :"
x0 = input()
y0 = input()
print "enter the scaling factor with respect to x and y axis respectively :"
sx = input()
sy = input()

scale(x0,y0,sx,sy)
plt.axis([-10,10,-10,10])
plt.show()

