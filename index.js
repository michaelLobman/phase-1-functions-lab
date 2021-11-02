function distanceFromHqInBlocks(blocks){
	return Math.abs(42 - blocks)
}

function distanceFromHqInFeet(blocks){
	return Math.abs((42 - blocks)*264)
}

function distanceTravelledInFeet(origin, destination){
	return Math.abs((destination - origin) * 264)
}

function calculatesFarePrice(start, destination){
	const distance = Math.abs(destination - start) * 264;
	if (distance < 400) {
		return 0
	} else if (distance > 400 && distance < 2000) {
		return (distance - 400) * .02
	} else if (distance > 2000 && distance < 2500) {
		return 25
	} else if (distance > 2500) {
		return 'cannot travel that far'
	}
} 