import matplotlib.pyplot as plt
import math

def drawrect(x,y,w,h):
	x0,y0 = [x,x+w,x+w,x,x],[y,y,y+h,y+h,y]
	plt.plot(x0,y0,marker = 'o')
	
def scalerect(x,y,w,h,s):
	xc = x+w/2.0
	yc = y+h/2.0
	sx = xc - s*w/2.0
	sy = yc - s*h/2.0
	drawrect(sx,sy,w*s,s*h)

print "enter the co-ordinates of bottom-left point :"
x0 = input()
y0 = input()
print "enter the width and height of the rectangle :"
w = input()
h = input()
print "enter the scale factor of the ractangle :"
s = input()

drawrect(x0,y0,w,h)

scalerect(x0,y0,w,h,s)
plt.axis([-10,10,-10,10])
plt.show()

