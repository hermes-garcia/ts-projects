import {genericFunction, genericFunctionArrow} from "../generics/generics";
import {Hero, Villain} from "../interfaces";

/*
printObject(123)
printObject(new Date())
printObject( {a:1, b:2, c:3} )
*/

/*
console.log(genericFunctionArrow(3.1453).toFixed(2));
console.log(genericFunctionArrow(new Date()).getSeconds());
console.log(genericFunctionArrow('hello world').length);
*/

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wilson',
    dangerLevel: 130
}
console.log(genericFunctionArrow<Hero|Villain>(deadpool));

