from PIL import Image
import random

img = Image.new( 'RGB', (300,150), "black")
pixels = img.load()

r , c = 50 , 100 ;
rvalue = [[ 0 for x in range(r)] for y in range(c)];
gvalue = [[ 0 for x in range(r)] for y in range(c)];
bvalue = [[ 0 for x in range(r)] for y in range(c)];

for i in range (100):
	for j in range (50):
		if(i %2 == 0 and j%2 == 0):
			rvalue[i][j] = random.randint(0,255)
			gvalue[i][j] = 0
			bvalue[i][j] = 0 
		if(i %2 == 0 and j%2 == 1):
			gvalue[i][j] = random.randint(0,255)
			rvalue[i][j] = 0
			bvalue[i][j] = 0 
		if(i %2 == 1 and j%2 == 0):
			gvalue[i][j] = random.randint(0,255)
			rvalue[i][j] = 0
			bvalue[i][j] = 0 
		if(i %2 == 1 and j%2 == 1):
			bvalue[i][j] = random.randint(0,255)
			rvalue[i][j] = 0
			gvalue[i][j] = 0 

for i in range(100):    
    for j in range(50):
    	m = 3*i
    	n = 3*j
        pixels[m,n] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m,n+1] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m,n+2] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m+1,n] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m+1,n+1] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m+1,n+2] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m+2,n] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m+2,n+1] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m+2,n+2] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        #print "red -> "; print rvalue[i][j]
        #print "green -> ";print gvalue[i][j]
        #print "blue -> ";print bvalue[i][j]

img.show()

for i in range (1,99):
	for j in range (1,49):
		if(i %2 == 0 and j%2 == 0):
			gvalue[i][j] = (gvalue[i-1][j]+gvalue[i][j-1]+gvalue[i][j+1]+gvalue[i+1][j])/4
			bvalue[i][j] = (bvalue[i-1][j-1]+bvalue[i-1][j+1]+bvalue[i+1][j+1]+bvalue[i+1][j-1])/4;
		if(i %2 == 0 and j%2 == 1):
			gvalue[i][j] = (gvalue[i-1][j-1]+gvalue[i-1][j+1]+gvalue[i+1][j+1]+gvalue[i+1][j-1]+gvalue[i][j])/5;
			rvalue[i][j] = (rvalue[i][j-1]+rvalue[i][j+1])/2;
			bvalue[i][j] = (bvalue[i-1][j]+bvalue[i+1][j])/2;
		if(i %2 == 1 and j%2 == 0):
			gvalue[i][j] = (gvalue[i-1][j-1]+gvalue[i-1][j+1]+gvalue[i+1][j+1]+gvalue[i+1][j-1]+gvalue[i][j])/5;
			rvalue[i][j] = (rvalue[i-1][j]+rvalue[i+1][j])/2;
			bvalue[i][j] = (bvalue[i][j-1]+bvalue[i][j+1])/2 
		if(i %2 == 1 and j%2 == 1):
			rvalue[i][j] = (rvalue[i-1][j-1]+rvalue[i-1][j+1]+rvalue[i+1][j+1]+rvalue[i+1][j-1])/4;
			gvalue[i][j] = (gvalue[i-1][j]+gvalue[i][j-1]+gvalue[i][j+1]+gvalue[i+1][j])/4

for i in range(100):    
    for j in range(50):
    	m = 3*i
    	n = 3*j
        pixels[m,n] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m,n+1] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m,n+2] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m+1,n] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m+1,n+1] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m+1,n+2] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m+2,n] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m+2,n+1] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )
        pixels[m+2,n+2] = (rvalue[i][j] , gvalue[i][j] , bvalue[i][j] )

img.show()