var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var color = 'blue';
var fullName = 'Keji Shern';
var age = 37;
var sentence = "Hello, my name is " + fullName;
var list = [1, 2, 3];
var x;
x = ['Hello', 10];
console.log(x[0].substr(1));
// console.log(x[1].substr(2))
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// console.log(c)
var colorName = Color[2];
console.log(colorName);
var notSure = 4;
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
// printLabel({label:'11'})
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
var myObj2 = { size: 10, label: 'Size 10 Object' };
printLabel2(myObj2);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ colour: "black", width: 40 });
console.log(mySquare);
var p1 = { x: 10, y: 20 };
var a = [1, 2, 3, 4];
var ro = a;
a = ro;
var mySearch;
mySearch = function (source, subString) {
    return true;
};
var myArray;
myArray = ['bob', 'Fred'];
var myStr = myArray[0];
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    return Dog;
}(Animal));
var Array2;
Array2 = [new Animal];
var Array3;
Array3 = { aa: new Dog() };
