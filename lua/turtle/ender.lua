os.loadAPI("api/patrol")

local name = "ExtraUtilities:plant/ender_lilly"
local seed = "ExtraUtilities:plant/ender_lilly"
local metadata = 7

function ender()
	turtle.select(1)
	local item = turtle.getItemDetail()
	if not item or item.name ~= seed then
		print("Must have at least 1 seed.")
		return
	end

	patrol.patrol(11, 2, function() 
		success, data = turtle.inspectDown()
		if not success then return end
		if data.name ~= name then return end
		if data.metadata ~= metadata then return end
		turtle.digDown()
		turtle.placeDown()
	end)
end

ender()

