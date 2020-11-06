rednet.open("right")

turtle.prototype = {
	forward = turtle.forward,
	back = turtle.back,
	turnLeft = turtle.turnLeft,
	turnRight = turtle.turnRight,
	up = turtle.up,
	down = turtle.down
}

turtle.data = {
	action = "",
	selected = turtle.getSelectedSlot(),
	inventory = {}
}

turtle.pos = {x=0, y=0, z=0}

turtle.forward = function()
	print("forward")
	return turtle.prototype.forward()
end

turtle.back = function()
	print("back")
	return turtle.prototype.back()
end

turtle.turnLeft = function()
	print("left")
	return turtle.prototype.turnLeft()
end

turtle.turnRight = function()
	print("right")
	return turtle.prototype.turnRight()
end

