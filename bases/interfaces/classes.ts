(() => {
    interface Xmen {
        name: string;
        realName: string;
        mutantPower: (id:string) => string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {

        constructor(
            public name:string,
            public realName: string,
            public age: number
        ) {}
        mutantPower(id: string): string {
            return "";
        }

    }

})()