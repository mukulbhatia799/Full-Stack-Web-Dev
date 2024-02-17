'use script';

// let obj1 = {
    //     name: 'Mukul',
    //     age: 22,
    //     section: 'D2323',
    //     CGPA: 90.5
    // }    
    
    
// if we have to create more than one object, then we can create a ojbect constructor so that we don't have to write it again and again. we can pass the values when calling constructor and create an object.

// object constructor: - 

function HouseKeeper1 (name, age, section, CGPA) {
    this.name = name;
    this.age = age;
    this.section = section;
    this.CGPA = CGPA;
}

let obj1 = new HouseKeeper1('Mukul', 22, 'D2323', 90.7);
let obj2 = new HouseKeeper1('Nikhil', 23, 'D2325', 95.5);

// console.log(obj1);
// console.log(obj2);



// create a function inside object constructor.

function ObjConstructor(name, workingHrs, Designation, Height) {
    this.name = name;
    this.workingHrs = workingHrs;
    this.Designation = Designation;
    this.Height = Height;
    this.roundCleared = function (result) {
        if(result) alert('You cleared the round.');
        else alert("Sorry, you couldn't clear the round");
    }
}

let obj3 = new ObjConstructor('Mukul', 9, 'Clerk', 5.10);
let obj4 = new ObjConstructor('Nikhil', 9, 'Senior SDE', 6.0);
let obj5 = new ObjConstructor('Fraz', 9, 'Web Developer', 5.11);

console.log(obj3.roundCleared(1));