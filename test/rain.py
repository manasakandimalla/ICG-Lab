import pygame
import random
pygame.init()

white = (255,255,255)
blue = (0,0,255)
(width, height) = (400, 300)

screen = pygame.display.set_mode((width, height))
pygame.display.set_caption('Rain')
screen.fill(white)

Drop = []

for i in range(100):
	x = random.randint(0,400)
	y = random.randint(0,300)
	Drop.append([x,y])

clock = pygame.time.Clock()

running = True

while running:
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			running = False

	for i in Drop:
		pygame.draw.circle(screen,white,i,1)
		i[1] += 1
		pygame.draw.circle(screen,blue,i,1)


		if (i[1] > 300):
			i[1] = random.randint(0,300)
			i[0] = random.randint(0,400)

	pygame.display.flip()
	clock.tick(100)

pygame.quit()


