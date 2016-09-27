
let isDone: boolean = false;

let decimal: number = 6;

let hex: number = 0xf00d;

let color: string = 'blue';

let fullName: string = 'Keji Shern'

let age: number = 37

let sentence: string = `Hello, my name is ${fullName}`

let list: number[] = [1, 2, 3]

let x: [string, number]

x = ['Hello', 10]

console.log(x[0].substr(1))

// console.log(x[1].substr(2))

enum Color { Red = 1, Green, Blue }

let c: Color = Color.Green

// console.log(c)

let colorName: string = Color[2];

console.log(colorName)

let notSure: any = 4;


function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label)
}

// printLabel({label:'11'})

let myObj = { size: 10, label: 'Size 10 Object' }

printLabel(myObj)

interface LabelledValue {
    label: string;
}

function printLabel2(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}

let myObj2 = { size: 10, label: 'Size 10 Object' }

printLabel2(myObj2)

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ colour: "black", width: 40 });

console.log(mySquare)


interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 }

let a: number[] = [1, 2, 3, 4]

let ro: ReadonlyArray<number> = a;

a = ro as number[]



interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string) {

    return true
}

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;

myArray = ['bob', 'Fred'];

let myStr: string = myArray[0]


class Animal {
    name:string
}

class Dog extends Animal {
    breed:string;
}

interface NotOkay {
    [x:number]:Animal;
    length:number;
}


let Array2 :NotOkay;

Array2 = [new Animal]

interface NotOkay2 {
    [x:string]:Dog;
}


let Array3 :NotOkay2;

Array3 = {aa:new Dog()}

interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    name: number;      // error, the type of 'name' is not a subtype of the indexer
}




