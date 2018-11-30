import pygame

pygame.init()

white = (255,255,255)

V = (128,0,255)
I = (75,0,130)
B = (0,0,205)
G = (0,128,0)
Y = (255,255,0)
O = (255,165,0)
R = (255,0,0)

(width,height) = (400,300)

screen = pygame.display.set_mode((width, height))
pygame.display.set_caption('Rainbow')
screen.fill(white)

pygame.draw.circle(screen,V,(200,150),150)
pygame.draw.circle(screen,I,(200,150),140)
pygame.draw.circle(screen,B,(200,150),130)
pygame.draw.circle(screen,G,(200,150),120)
pygame.draw.circle(screen,Y,(200,150),110)
pygame.draw.circle(screen,O,(200,150),100)
pygame.draw.circle(screen,R,(200,150),90)
pygame.draw.circle(screen,white,(200,150),80)
pygame.draw.rect(screen,white,[0,150,400,150],0)

running = True

while running:
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			running = False
	pygame.display.flip()

pygame.quit()