function printToConsole( constructor: Function ) {
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false):Function => {
    if (print) {
        return printToConsole;
    }
    return  () => {}
}

const blockPrototype = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function CheckValidPokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if ( id < 1 || id > 800) {
                throw new Error('Pokemon id must be between 1-800')
            }
            return originalMethod(id);
        }
    }
}

function readOnly(isWritable: boolean = true):Function {
    return function (target: any, propertyKey: string) {
        console.log({target, propertyKey});

        const descriptor: PropertyDescriptor = {
            get(): any {
                console.log(this);
                return 'Hermes'
            },
            set(this, val) {
                console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor
    }
}

@blockPrototype
@printToConsoleConditional()
export class Pokemon {
    @readOnly(false)
    public publicApi = 'https://pokeapi.co/'
    constructor(
        public name: string
    ) {}

    @CheckValidPokemonId()
    public savePokemonToDB(id: number) {
        console.log(`Pokemon saved with id ${id}`);
    }
}