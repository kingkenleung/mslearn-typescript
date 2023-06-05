"use strict";
/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */
/*  EXERCISE 1 */
class BuildArray {
    // TODO Define the constructor
    constructor(items, sortOrder) {
        // TODO Define the methods
        // TODO Define the methods.
        this.sortDescending = (a, b) => {
            if (a > b) {
                return -1;
            }
            else if (b > a) {
                return 1;
            }
            else {
                return 0;
            }
        };
        this.sortAscending = (a, b) => {
            if (a > b) {
                return 1;
            }
            else if (b > a) {
                return -1;
            }
            else {
                return 0;
            }
        };
        this._items = items;
        this._sortOrder = sortOrder;
    }
    // TODO Define the accessors
    get items() {
        return this.items;
    }
    set items(items) {
        this._items = items;
    }
    get sortOrder() {
        return this.sortOrder;
    }
    set sortOrder(sortOrder) {
        this._sortOrder = sortOrder;
    }
    buildArray() {
        let randomNumbers = [];
        let nextNumber;
        for (let counter = 0; counter < this.items; counter++) {
            nextNumber = Math.ceil(Math.random() * (100 - 1));
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            }
            else {
                counter--;
            }
        }
        if (this._sortOrder === "ascending") {
            return randomNumbers.sort(this.sortAscending);
        }
        else {
            return randomNumbers.sort(this.sortDescending);
        }
    }
}
/*  TODO: Instantiate the BuildArray objects. */
// let testArray1 = buildArray(12, "ascending");
// let testArray2 = buildArray(8, "descending");
let testArray1 = new BuildArray(12, "ascending");
let testArray2 = new BuildArray(8, "descending");
console.log(testArray1);
console.log(testArray2);
