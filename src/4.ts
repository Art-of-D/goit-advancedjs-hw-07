class Key{
    private signature: number;
    constructor(){
        this.signature = Math.random();
    }

    public get getSignature(): number{
        return this.signature;
    }
}

class Person{
    private key: Key;
    constructor(key: Key){
        this.key = key;
    }

    public getKey(): Key{
        return this.key;
    }
}

abstract class House{
    public door: Boolean;
    protected key: Key;
    protected tenants: Array<Person> = [];

    constructor(key: Key){
        this.key = key;
        this.door = false;
    }

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    public abstract openDoor(key: Key): void
}

class MyHouse extends House{

    public openDoor(key: Key): void {
        if (this.key.getSignature === key.getSignature){
            this.door = true;
        } else {
            this.door = false;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};