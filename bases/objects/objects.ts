(() => {
    let flash: { name: string, age: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['speed', 'time travel']
    }

    flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['speed', 'time travel'],
        getName(){
            return this.name;
        }
    }
})()