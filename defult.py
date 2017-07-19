import turtle
turtle.shape("turtle")
def create_square(length):
	turtle.forward(40)
	turtle.left(90)
	turtle.forward(40)
	turtle.left(90)
	turtle.forward(40)
	turtle.left(90)
	turtle.forward(40)
	turtle.left(90)
	turtle.left(90)

for i in range (10):
	print i 
	create_square(100)
	turtle.forward(40)
	create_square(100)


turtle.mainloop()