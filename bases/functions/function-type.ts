(() => {
    const addNumber = (a:number, b:number):number => a + b;
    const greet = (name:string):string => `Hello ${name}`;
    const saveTheWorld = ():string => `The world is safe!`;

    let myFunction: (name:string) => string;

    console.log(addNumber(1,2));

    myFunction = greet;
    console.log(myFunction('Hermes'));

})()