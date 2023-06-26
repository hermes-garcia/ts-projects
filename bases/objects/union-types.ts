(() => {

    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    }

    let myVar: string | number | Hero = 'string';
    console.log(typeof myVar);

    myVar = 12;
    console.log(typeof myVar);

    myVar = {
        age: 32,
        name: 'Bruce',
        powers: ['none']
    };
    console.log(typeof myVar);

})()