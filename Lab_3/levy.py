import matplotlib.pyplot as plt
import math

def c_curve(x,y,l,d,n):
	if(n>0):
		l = l/1.41421356237
		c_curve(x,y,l,d+math.pi/4,n-1)
		x = x + l*(math.cos(d+math.pi/4))
		y = y + l*(math.sin(d+math.pi/4))
		c_curve(x,y,l,d-math.pi/4,n-1)
	else:
		#line(x,y,x+l*(math.cos(d)),y+l*(math.sin(d)));
		x0,y0 = [x,x+l*(math.cos(d))],[y,y+l*(math.sin(d))]
		plt.plot(x0,y0,marker = 'o')
		
print "enter starting x and y co-ordinates"
x1 = input()
y1 = input()
print "enter the length and angle of inclination of line with the x-axis(in degrees)"
l = input()
d = input()
d = math.radians(d)
print "enter the total number of iterations for which the c-curve should run"
n = input()
c_curve(x1,y1,l,d,n)
plt.show()
