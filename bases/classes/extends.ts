(() => {
    class Avenger {

        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Avenger constructor called');
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }

    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName);
            console.log('Xmen constructor called');
        }

        get fullName() {
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string) {
            if(name.length <= 3) {
                throw new Error('Name must be greater than 3 chars');
            }
            this.name = name;
        }

        public getFullNameFromXmen () {
            console.log(super.getFullName());
        }

    }

    /*const wolverine: Xmen = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine.fullName);

    wolverine.fullName = 'Hermes'
    console.log(wolverine.fullName);*/

})()