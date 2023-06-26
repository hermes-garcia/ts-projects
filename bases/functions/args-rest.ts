(() => {
    const fullName = (firstName:string, ...rest: string[]):string => {
        return `${firstName} ${rest.join(' ')}`;
    }

    const superman= fullName('Clark', 'Joseph', 'Kent');

    console.log(superman);


})()