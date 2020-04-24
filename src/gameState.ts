const gameState = {
	current: 'init',
	clock: 1,
	tick(): number {
		this.clock++
		console.log(`clock ${this.clock}`)
		return this.clock
	}
}

export default gameState
