(() => {
    interface Client {
        name: string;
        age?: number;
        address: Address,
        getFullAddress: (id:string) => string;
    }
    interface Address {
        id: number;
        zip: string;
        city: string;
    }


    const client1: Client = {
        name: 'Hermes',
        age: 28,
        address: {
            id: 123,
            zip: '40880',
            city: 'Mexico city'
        },
        getFullAddress(): string {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Aury',
        age: 25,
        address: {
            id: 456,
            zip: '40882',
            city: 'Queretaro'
        },
        getFullAddress(id: string): string {
            return this.address.city;
        }
    }

    

})()