local function turn(index, callback)
	local turnF = turtle.turnRight
	if index % 2 == 0 then
		turnF = turtle.turnLeft
	end
	turnF()
	callback()
	turtle.forward()
	turnF()
end

function patrol(forward, right, callback)
	for r=1, right do
		for f=1, forward-1 do
			callback()
			turtle.forward()
		end
		if r ~= right then turn(r, callback) end
	end
	if right % 2 == 1 then
		for i=1, forward-1 do
			turtle.back()
		end
		turtle.turnLeft()
	else
		turtle.turnRight()
	end
	for i=1, right-1 do
		turtle.forward()
	end
	turtle.turnRight()
end

