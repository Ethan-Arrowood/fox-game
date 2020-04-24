import game from './gameState'

const TICK_RATE = 3000

async function init(): Promise<void> {
	console.log('starting game')

	let nextTimeToTick = Date.now()

	function nextAnimationFrame(): void {
		const now = Date.now()

		if (nextTimeToTick <= now) {
			game.tick()
			nextTimeToTick = now + TICK_RATE
		}

		requestAnimationFrame(nextAnimationFrame)
	}

	requestAnimationFrame(nextAnimationFrame)
}

init()
