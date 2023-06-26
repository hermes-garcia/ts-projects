(() => {

    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['speed', 'time travel']
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 50,
        powers: ['speed', 'strength'],
        getName(){
            return this.name;
        }
    }
})()