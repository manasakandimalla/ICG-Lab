# Name - Manasa Kandimalla ; Roll no. - CED15I009
#Question : Use any language - Paint the whole screen with one color.Change the color once in 3 seconds.

import pygame as pg
import random

if __name__ == '__main__':
	running = True
	pg.init()
	screen = pg.display.set_mode((600,400))
	screen_rect = screen.get_rect()
	pg.display.set_caption('ICG_Lab_exam-Question(2)')
	clock = pg.time.Clock()
	timer = 0
	bg = (random.randint(0,255), random.randint(0,255), random.randint(0,255))

	while running:
		screen.fill(bg)
		for event in pg.event.get():
			if event.type == pg.QUIT:
				running = False
			
		if pg.time.get_ticks()-timer > 3000:
			timer = pg.time.get_ticks()
			bg = (random.randint(0,255), random.randint(0,255), random.randint(0,255))
		pg.display.update()
		clock.tick(60)

# Thank you