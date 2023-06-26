(() => {
    class Apocalypse {

        static instance: Apocalypse;

        private constructor(
            public name: string
        ) {}

        static callApocalypse():Apocalypse {
            if ( !Apocalypse.instance ) {
                Apocalypse.instance = new Apocalypse("I'm the only Apocalypse")
            }
            return Apocalypse.instance;
        }

    }


    const apocalypse1: Apocalypse = Apocalypse.callApocalypse();
    const apocalypse2: Apocalypse = Apocalypse.callApocalypse();
    const apocalypse3: Apocalypse = Apocalypse.callApocalypse();

    console.log(apocalypse1);
    console.log(apocalypse2);
    console.log(apocalypse3);


})()