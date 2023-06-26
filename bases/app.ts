(() => {
  // Create interfaces

  // Create an interface to validate the car (parameter value)
  interface Car {
    turnedOn: boolean;
    maximumSpeed: number;
    speedUp: () => void
  }
  const driveBatmobile = ( car: Car ):void => {
    car.turnedOn = true;
    car.maximumSpeed = 100;
    car.speedUp();
  }

  const batmobile: Car = {
    turnedOn: false,
    maximumSpeed: 0,
    speedUp(){
      console.log("...... gogogo!!!");
    }
  }

  // Create an interface to use the following object using optional properties
  interface Joker {
    laugh?: boolean;
    eat?: boolean;
    cry?: boolean;
  }

  const joker: Joker = {
    laugh: true,
    eat: true,
    cry: false
  }

  const laugh = ( joker: Joker ):void => {
    if( joker.laugh ){
      console.log("HAHAHA");
    }
  }


  // Create an interface for the following function
  interface City {
    (citizens: string[]): number;
  }

  const gothamCity: City = ( citizens:string[] ):number => {
    return citizens.length;
  }

  // Create an interface to force class creation with following properties and methods

  /*
    properties:
      - name
      - age
      - gender
      - civilStatus
      - printBio(): void // console log brief description.
  */
  interface PersonInterface {
    name: string;
    age: number;
    gender: string;
    civilStatus: string;
    printBio: () => void
  }
  class Person implements PersonInterface {
    public name: string;
    public age: number;
    public gender: string;
    public civilStatus: string;

    printBio() {
      console.log('bio');
    }
  }
})()