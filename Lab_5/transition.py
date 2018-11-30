import matplotlib.pyplot as plt
import math


def translation(x,y,h,k):
	plt.plot(x,y,marker = 'o')
	plt.plot(x+h,y+k,marker='o')


print "enter the co-ordinates of point :"
x0 = input()
y0 = input()
print "enter the co-ordinates of the new origin :"
h = input()
k = input()

translation(x0,y0,h,k)
plt.axis([-10,10,-10,10])
plt.show()

