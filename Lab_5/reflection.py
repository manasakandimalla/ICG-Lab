import matplotlib.pyplot as plt
import math


def reflection(x,y):
	plt.plot(x,y,marker = 'o')
	plt.plot(-x,y,marker='o')
	plt.plot(x,-y,marker='o')

print "enter the co-ordinates of point :"
x0 = input()
y0 = input()

reflection(x0,y0)
plt.axis([-10,10,-10,10])
plt.show()

