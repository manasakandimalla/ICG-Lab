import pygame
import math
from pygame.locals import *
SIZE = 400, 300
pygame.init()
pygame.display.set_caption('Dancing idiot')
white = (255,255,255)
screen = pygame.display.set_mode(SIZE)
FPSCLOCK = pygame.time.Clock()
done = False
screen.fill((0, 0, 0))
degree1= 70
degree1 = math.radians(degree1)

degree2 = 270
degree2 = math.radians(degree2)

flag = 0
flag1 = 0
while not done:
    screen.fill(0)
    for e in pygame.event.get():
        if e.type == QUIT or (e.type == KEYDOWN and e.key == K_ESCAPE):
            done = True
            break

    radar1 = (200,120)

    len1 = 50
    len2 = 50
    x0 = radar1[0] + math.cos(math.radians(degree1)) * len1
    y0 = radar1[1] + math.sin(math.radians(degree1)) * len1
    x1 = radar1[0] - math.cos(math.radians(degree1)) * len1
    y1 = radar1[1] + math.sin(math.radians(degree1)) * len1
    x2 = radar1[0] + math.sin(math.radians(degree2)) * len2
    y2 = radar1[1] + math.cos(math.radians(degree2)) * len2
    pygame.draw.line(screen, white , radar1, (x1,y1), 2)
    pygame.draw.line(screen, white , radar1, (x0,y0), 2)
    pygame.draw.circle(screen,white,(200,100),15,2)
    pygame.draw.line(screen,white,(200,115),(200,120),2)
    pygame.draw.line(screen,white,radar1,(x2,y2),2)
    pygame.draw.line(screen,white,(x2,y2),(185,220),2)
    pygame.draw.line(screen,white,(x2,y2),(215,220),2)
    
    pygame.display.flip() 
    if(degree1 > 70 ):  
    	flag = 1   
    if(degree1 < 40 ):
    	flag=0
    if(flag==1):
    	degree1-=3
    else :
    	degree1+=3

    if(degree2 > 10 ):  
    	flag1 = 1   
    if(degree2 < 0 ):
    	flag1=0
    if(flag1==1):
    	degree2-=1.5
    else :
    	degree2+=1.5
    FPSCLOCK.tick(20)