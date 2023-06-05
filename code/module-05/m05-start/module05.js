/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */
/*  EXERCISE 1 */
var BuildArray = /** @class */ (function () {
    // TODO Define the constructor
    function BuildArray(items, sortOrder) {
        // TODO Define the methods
        // TODO Define the methods.
        this.sortDescending = function (a, b) {
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
        this.sortAscending = function (a, b) {
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
    Object.defineProperty(BuildArray.prototype, "items", {
        // TODO Define the accessors
        get: function () {
            return this.items;
        },
        set: function (items) {
            this._items = items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildArray.prototype, "sortOrder", {
        get: function () {
            return this.sortOrder;
        },
        set: function (sortOrder) {
            this._sortOrder = sortOrder;
        },
        enumerable: false,
        configurable: true
    });
    BuildArray.prototype.buildArray = function () {
        var randomNumbers = [];
        var nextNumber;
        for (var counter = 0; counter < this.items; counter++) {
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
    };
    return BuildArray;
}());
/*  TODO: Instantiate the BuildArray objects. */
// let testArray1 = buildArray(12, "ascending");
// let testArray2 = buildArray(8, "descending");
var testArray1 = new BuildArray(12, "ascending");
var testArray2 = new BuildArray(8, "descending");
console.log(testArray1);
console.log(testArray2);
