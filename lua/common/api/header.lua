function os.getComputerType()
	local ret = {}

	if pocket then
		table.insert(ret, "tablet")
	elseif turtle then
		table.insert(ret, "turtle")
	else
		table.insert(ret, "computer")
	end

	return table.concat(ret, "_")
end

local function firstToUpper(str)
    return (str:gsub("^%l", string.upper))
end

function main()
	term.clear()
	term.setCursorPos(1, 1)
	term.setTextColor(colors.yellow)
	term.write(firstToUpper(os.getComputerType()) .. " #" .. os.getComputerID() .. " [" .. os.getComputerLabel() .. "]")
	term.setCursorPos(1, 2)
end

