(() => {
    abstract class Mutant {

        constructor(
            public name: string,
            public realName: string
        ) {}

    }

    class Xmen extends Mutant {
        saveWorld() {
            return 'World is safe!';
        }
    }

    class Villain extends Mutant {
        conquerWorld() {
            return 'World conquered!';
        }
    }

    const wolverine: Mutant = new Xmen('Wolverine', 'Logan');
    const magnet: Mutant = new Villain('Magnet', 'Magnus');

    const printName = (character: Mutant) => {
        console.log(character.realName);
    }

    // printName(wolverine);

})()