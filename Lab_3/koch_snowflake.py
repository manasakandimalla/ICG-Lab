import matplotlib.pyplot as plt
import math

def koch_curve(x,y,l,d,n):
    if(n>0):
        l = float(l/3)
        koch_curve(x,y,l,d,n-1)
        x = x + l*(math.cos(d))
        y = y + l*(math.sin(d))
        d = d + math.pi/3
        koch_curve(x,y,l,d,n-1)
        x = x + l*(math.cos(d))
        y = y + l*(math.sin(d))
        d = d - 2*math.pi/3
        koch_curve(x,y,l,d,n-1)
        x = x + l*(math.cos(d))
        y = y + l*(math.sin(d))
        d = d + math.pi/3
        koch_curve(x,y,l,d,n-1)
    else:
        x0,y0 = [x,x+l*(math.cos(d))],[y,y+l*(math.sin(d))]
        #print x0,y0,math.degrees(d),l
        plt.plot(x0,y0,marker = 'o')
        

print "enter the length of side of the equilateral triangle"
l = input()
print "enter the total number of iterations for which the c-curve should run"
n = input()
koch_curve(0,0,l,math.pi,n)
koch_curve(-l,0,l,math.pi/3,n)
koch_curve(-l/2,l*(math.sin(math.pi/3)),l,-math.pi/3,n)
plt.show()
