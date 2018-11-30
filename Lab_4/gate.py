import pygame

pygame.init()

white = (255,255,255)
black = (0,0,0)
V = (128,0,255)
I = (75,0,130)
B = (0,0,205)
G = (0,128,0)
Y = (255,255,0)
O = (255,165,0)
R = (255,0,0)

(width,height) = (400,265)

screen = pygame.display.set_mode((width, height))
pygame.display.set_caption('Gate')
screen.fill(black)

pygame.draw.line(screen,white,(25,225),(375,225),2)
pygame.draw.line(screen,white,(25,75),(375,75),2)
pygame.draw.line(screen,white,(25,225),(25,35),2)
pygame.draw.line(screen,white,(375,35),(375,225),2)
pygame.draw.line(screen,white,(25,35),(375,35),2)
pygame.draw.line(screen,white,(165,225),(165,75),2)
pygame.draw.line(screen,white,(235,225),(235,75),2)

pygame.draw.line(screen,white,(50,150),(90,150),2)
pygame.draw.line(screen,white,(50,150),(50,75),2)
pygame.draw.line(screen,white,(90,150),(90,225),2)
pygame.draw.line(screen,white,(80,150),(80,75),2)
pygame.draw.line(screen,white,(90,225),(30,300),2)
pygame.draw.line(screen,white,(90,225),(110,210),2)
pygame.draw.line(screen,white,(90,200),(110,185),2)
pygame.draw.line(screen,white,(110,210),(110,185),2)
pygame.draw.line(screen,white,(90,185),(110,185),2)

pygame.draw.line(screen,white,(310,150),(350,150),2)
pygame.draw.line(screen,white,(350,150),(350,75),2)
pygame.draw.line(screen,white,(310,150),(310,225),2)
pygame.draw.line(screen,white,(320,150),(320,75),2)
pygame.draw.line(screen,white,(310,225),(370,300),2)
pygame.draw.line(screen,white,(310,225),(290,210),2)
pygame.draw.line(screen,white,(310,200),(290,185),2)
pygame.draw.line(screen,white,(290,210),(290,185),2)
pygame.draw.line(screen,white,(310,185),(290,185),2)

pygame.draw.line(screen,white,(90,165),(165,165),1)
pygame.draw.line(screen,white,(90,170),(165,170),1)
pygame.draw.line(screen,white,(90,175),(165,175),1)
pygame.draw.line(screen,white,(90,180),(165,180),1)
pygame.draw.line(screen,white,(90,185),(165,185),1)
pygame.draw.line(screen,white,(90,190),(165,190),1)
pygame.draw.line(screen,white,(90,195),(165,195),1)
pygame.draw.line(screen,white,(90,200),(165,200),1)
pygame.draw.line(screen,white,(90,205),(165,205),1)
pygame.draw.line(screen,white,(90,210),(165,210),1)
pygame.draw.line(screen,white,(90,215),(165,215),1)

pygame.draw.line(screen,white,(310,165),(235,165),1)
pygame.draw.line(screen,white,(310,170),(235,170),1)
pygame.draw.line(screen,white,(310,175),(235,175),1)
pygame.draw.line(screen,white,(310,180),(235,180),1)
pygame.draw.line(screen,white,(310,185),(235,185),1)
pygame.draw.line(screen,white,(310,190),(235,190),1)
pygame.draw.line(screen,white,(310,195),(235,195),1)
pygame.draw.line(screen,white,(310,200),(235,200),1)
pygame.draw.line(screen,white,(310,205),(235,205),1)
pygame.draw.line(screen,white,(310,210),(235,210),1)
pygame.draw.line(screen,white,(310,215),(235,215),1)

pygame.draw.line(screen,white,(192,65),(192,45),1)
pygame.draw.line(screen,white,(178,65),(178,45),1)
pygame.draw.line(screen,white,(163,65),(163,45),1)
pygame.draw.line(screen,white,(208,65),(208,45),1)
pygame.draw.line(screen,white,(202,45),(214,45),1)
pygame.draw.line(screen,white,(220,65),(220,45),1)

pygame.draw.line(screen,white,(220,45),(225,50),1)
pygame.draw.line(screen,white,(225,50),(227,55),1)
pygame.draw.line(screen,white,(227,55),(225,60),1)
pygame.draw.line(screen,white,(225,60),(220,65),1)

pygame.draw.line(screen,white,(237,65),(237,45),1)
pygame.draw.line(screen,white,(249,65),(249,45),1)
pygame.draw.line(screen,white,(243,50),(237,45),1)
pygame.draw.line(screen,white,(243,50),(249,45),1)

pygame.draw.circle(screen,white,(200,275),25,2)

running = True

while running:
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			running = False
	pygame.display.flip()

pygame.quit()