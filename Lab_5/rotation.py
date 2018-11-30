import matplotlib.pyplot as plt
import math


def rotate(x,y,a):
	x0,y0 = [0,x],[0,y]
	p = x*math.cos(a) - y*math.sin(a)
	q = x*math.sin(a) + y*math.cos(a)
	x1,y1 = [0,p],[0,q]
	plt.plot(x0,y0,marker = 'o')
	plt.plot(x1,y1,marker='o')

print "enter the co-ordinates of point :"
x0 = input()
y0 = input()
print "enter the angle by which line has to be rotated :"
a = input()
a = math.radians(a)

rotate(x0,y0,a)
plt.axis([-10,10,-10,10])
plt.show()

