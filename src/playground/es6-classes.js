console.log("ohai");

class Person {
    constructor(Name = 'Anonymous', Age = 0) {
        this.Name = Name;
        this.Age = Age;
    }
    toString() {
        return `${this.Name} is ${this.Age} years old`;
    }
}

class Student extends Person {
    constructor(Name, Age, Major) {
        super(Name, Age); // must make this call in a subclass
        this.Major = Major;
    }

    hasMajor() {
        return !!this.Major;
    }

    toString() {
        let description = super.toString();
        if (this.hasMajor()) {
            description = description + ' with a major in ' + this.Major;
        }

        return description;
    }
}

const me = new Student("Alex Karpov", 36, "Math");
console.log(me.toString());
const other = new Student();
console.log(other.toString());
