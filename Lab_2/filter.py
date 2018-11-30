import random

r , c = 10 , 5 ;
rvalue = [[ 0 for x in range(r)] for y in range(c)];
gvalue = [[ 0 for x in range(r)] for y in range(c)];
bvalue = [[ 0 for x in range(r)] for y in range(c)];

for i in range (5):
	for j in range (10):
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

print rvalue
print gvalue
print bvalue

# demosiacing

for i in range (1,4):
	for j in range (1,9):
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

print rvalue
print gvalue
print bvalue


