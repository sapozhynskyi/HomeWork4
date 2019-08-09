function ILList() {
 
 }
 ILList.prototype.init = function (){};
 ILList.prototype.getArray = function (){};
 ILList.prototype.toString = function (){};
 ILList.prototype.size = function (){};
 ILList.prototype.push = function (){};
 ILList.prototype.pop = function (){};
 ILList.prototype.shift = function (){};
 ILList.prototype.unshift = function (){};
 ILList.prototype.slice = function (){};
 ILList.prototype.splice = function (){};
 ILList.prototype.get = function (){};
 ILList.prototype.set = function (){};
 ILList.prototype.sort = function (){};


 
 function AList() {
    
    this._array = [];
    this._length = 0;
    ILList.apply(this.arguments);
 }

 AList.prototype = Object.create(ILList.prototype)
 AList.prototype.constructor = AList;

 AList.prototype.init = function (elements)  {

    if (elements) {

        for (let i = 0; i < elements.length; i++) {
            this._array[i] = elements[i];
            this._length++;
        }

    }

    return this._array;
};

AList.prototype.getArray = function () {
    return this._array;
};

 AList.prototype.toString = function() {
    let str = '"[';

    for (let i = 0; i < this._length; i++) {
        str += `${this._array[i]}`;
        if (i !== this._length - 1) {
            str += ', ';
        }
    }

    str += ']"';

    return str;
};

 AList.prototype.getSize = function () {
    return this._length;
};

AList.prototype.push = function (value) {
    if (value !== undefined) {
        this._array[this._length] = value;
        this._length++;
    }

    return this._length;
};

AList.prototype.pop = function () {
    let element;

    if (this._length !== 0) {
        element = this._array[this._length - 1];
        this._array.length--;
        this._length--;
    }

    return  element;
};

AList.prototype.shift = function () {
    let element = this._array[0];

    if (this._length !== 0) {

        for (let i = 0; i < this._length - 1; i++) {
            this._array[i] = this._array[i + 1];
        }

        this._length--;
        this._array.length--;
    }

    return element;
};

AList.prototype.unshift = function (element) {

    if (element !== undefined) {

        for (let i = this._length; i > 0; i--) {
            this._array[i] = this._array[i - 1];
        }

        this._array[0] = element;
        this._length++;
    }

    return this._length;
};

AList.prototype.slice = function (startIndex, finishIndex) {
    let newArray = [];

    if(!startIndex && startIndex !== 0) {
        return this._array;
    }

    if (!finishIndex && finishIndex !== 0) {

        for (let i = 0; i < this._length - startIndex; i++) {
            newArray[i] = this._array[i + startIndex];
        }

    } else if (startIndex > finishIndex){
        return [];
    } else {

        if (finishIndex > this._length) {
            finishIndex = this._length;
        }

        for (let i = 0, j = startIndex; i < this._length, j < finishIndex; i++, j++) {
            newArray[i] = this._array[j];
        }

    }

    return newArray;
};

// Alist.prototype.splice = function (startIndex, amountDelete, ...insertElem) {

//     let definedStartIndex = 0;
//     let definedAmountDeleted = 0;
//     let definedInsertElem = [];
//     let spliceArray = [];

//     if (!startIndex) {
//         definedStartIndex = 0;
//     } else if (!!Number(startIndex)) {

//         if (startIndex > this.size()) {
//             definedStartIndex = this.size();
//         } else if (startIndex < -this.size()) {
//             definedStartIndex = 0;
//         } else {
//             definedStartIndex = parseInt(startIndex);
//         }

//     } else {
//         return spliceArray;
//     }

//     if (!amountDelete || amountDelete <= 0) {
//         definedAmountDeleted = 0;
//     } else if (!!Number(amountDelete)) {
//         definedAmountDeleted = parseInt(amountDelete);
//     } else {
//         definedAmountDeleted = 0;
//     }

//     if (!insertElem) {
//         definedInsertElem = null;
//     } else {

//         for (let i = 0; i < insertElem.length; i++) {
//             definedInsertElem[i] = insertElem[i];
//         }

//     }

//     spliceArray = this.slice(definedStartIndex,definedStartIndex + definedAmountDeleted);

//     let leftPart = this.slice(0, definedStartIndex);

//     let rightPart = this.slice(definedStartIndex + definedAmountDeleted );

//     array = [...leftPart, ...definedInsertElem, ...rightPart];

//     return spliceArray;
// };

AList.prototype.get = function (index) {
    return this._array[index];
};

AList.prototype.set = function (index, value) {

    if (index >= 0 && index < this._length && this._length !==0) {
        this._array[index] = value;
    }

};
AList.prototype.sort = function (sortFunction) {

    for (let i = 0; i < this._length; i++) {
        for (let j = 0; j < this._length - i - 1; j++){
            if (sortFunction(this._array[j], this._array[j + 1]) > 0) {
                let temp = this._array[j];
                this._array[j] = this._array[j + 1];
                this._array[j + 1] = temp;
            }
        }
    }

    return this._array;
};

// ------------------------------------------------------------------//

const NodeLlist = function (value) {
    this.value = value;
    this.next = null;
    
};

function Llist(){
    this._root = null;
    this._length = 0;
    

    ILList.apply(this.arguments);
}
Llist.prototype = Object.create(ILList.prototype)
Llist.prototype.constructor = Llist;


Llist.prototype.getArray =  function () {
    let array = [];
    let temp = this._root;

    for (let i = 0; i < this._length; i++) {

        if(temp !== null) {
            array[i] = temp.value;
            temp = temp.next;
        }

    }

    return array;
};

Llist.prototype.init = function (...elements) {
    let array = [];

    if (elements) {

        for (let i = 0; i < elements.length; i++) {
            this.push(elements[i]);
            array[i] = elements[i];
        }

    }

    return array;
};

Llist.prototype.getSize = function()  {
    return this._length;
};

Llist.prototype.toString = function () {
    let string = '"[';
    let temp;

    if (this._root !== null) {
        temp = this._root;
    } else {
        return '"[]"';
    }

    for (let i = 0; i < this._length; i++) {

        if (temp.next !== null && i !== this._length - 1) {
            string += temp.value;
            temp = temp.next;
            string += ', ';
        }

    }

    string += temp.value + ']"';

    return string;
};

Llist.prototype.push = function (element) {

    if (element !== undefined) {
        const node = new NodeLlist(element);

        if (this._root === null) {
            this._root = node;
        } else {
            let tempNode = this._root;

            while (tempNode.next) {
                tempNode = tempNode.next;
            }

            tempNode.next = node;
        }

        this._length++;
    }

    return this._length;
};


Llist.prototype.pop = function () {
    let temp;

    if (this._root !== null){
        temp = this._root;
    } else {
        return undefined;
    }

    let beforeElem = temp;
    let returnTemp;

    for (let i = 0; i < this._length; i++) {

        if (temp.next !== null) {
            beforeElem = temp;
            temp = temp.next;
        } else {
            beforeElem.next = null;
            returnTemp = temp.value;
            this._length--;
        }

    }

    return returnTemp;
};


Llist.prototype.shift = function () {

    if (this._length === 0 ) {
        return undefined;
    } else {
        let temp = this._root;

        this._root = temp.next;
        this._length--;

        return temp.value;
    }

};

Llist.prototype.unshift = function (element) {
    let node;

    if (element) {
        node = new NodeLlist(element);
        node.next = this._root;
        this._root = node;
        this._length++;
    }

    return this._length;
};

// Llist.prototype.slice = function (begin, end){
//     if(!root) {
//         return undefined;
//     }
//     let tempNode = root;
//     if (tempNode.next !== null) {
//         var nextNode = tempNode.next;
//     }
//     let arrList = [];
//     let j = 1,
//         k = 0;

//     if (!root || this.getSize() <= begin || begin < 0 || end < 0 || end < begin) {
//         throw new Error('Invalid argument provided!');
//     } else if (this.getSize() > begin && end === undefined) {
//         if (begin === 0) {
//             for (let i = 0; i < this.getSize(); i++) {
//                 arrList[i] = tempNode.value;
//                 tempNode = tempNode.next;
//             }

//             root = null;
//         } else {
//             while (j < begin) {
//                 tempNode = tempNode.next;
//                 nextNode = tempNode.next;
//                 j++;
//             }

//             for (let i = j + 1; i <= this.getSize(); i++) {
//                 if (nextNode !== null) {
//                     arrList[k] = nextNode.value;
//                     nextNode = nextNode.next;
//                     k++;
//                 }
//             }

//             tempNode.next = null;
//         }

//         return arrList;
//     } else {
//         if (begin === 0) {
//             for (let i = begin; i < end; i++) {
//                 if (tempNode.value) {
//                     arrList[i] = tempNode.value;
//                     tempNode = tempNode.next;
//                     k++;
//                 } else {
//                     arrList[i] = undefined;
//                     k++;
//                 }
//             }

//             root = tempNode;
//         } else {
//             while (j < begin) {
//                 tempNode = tempNode.next;
//                 nextNode = tempNode.next;
//                 j++;
//             }

//             for (let i = j; i < end; i++) {
//                 if (nextNode !== null) {
//                     arrList[k] = nextNode.value;
//                     nextNode = nextNode.next;
//                     k++;
//                 } else {
//                     arrList[k] = undefined;
//                     k++;
//                 }
//             }

//             tempNode.next = nextNode;
//         }

//         return arrList;
//     }
// };

// Llist.prototype.splice = function (begin, count, element) {
//     if (!root) {
//         return undefined;
//     }
//     let tempNode = root;
//     if (tempNode !== null) {
//         var nextNode = tempNode.next;
//     }
//     let arrList = [];
//     let argument = [];
//     let j = 1,
//         k = 0;

//     for (let i = 2, k = 0; i < arguments.length; i++, k++) {
//         argument[k] = arguments[i];
//     }

//     if ((this.getSize() < begin && argument.length === 0) || begin < 0 || count < 0 || (this.getSize() < begin && argument.length > 0)) {
//         throw new Error('Invalid argument provided!');
//     } else if (this.getSize() > begin && count > 0 && argument.length === 0) {
//          if (begin === 0) {
//              for (let i = begin; i < begin + count; i++) {
//                  if (tempNode !== null) {
//                      arrList[i] = tempNode.value;
//                      tempNode = tempNode.next;
//                  } else {
//                      arrList[i] = undefined;
//                      k++;
//                  }
//              }

//              root = tempNode;
//          } else {
//              while (j < begin) {
//                  tempNode = tempNode.next;
//                  nextNode = tempNode.next;
//                  j++;
//              }

//              for (let i = j + 1; i <= begin + count; i++) {
//                  if (nextNode !== null) {
//                      arrList[k] = nextNode.value;
//                      nextNode = nextNode.next;
//                      k++;
//                  } else {
//                      arrList[k] = undefined;
//                      k++;
//                  }
//              }

//              tempNode.next = nextNode;
//          }

//     } else if (this.getSize() > begin && argument.length > 0 && count === 0) {
//         if (begin === 0) {
//             for (let i = argument.length - 1; i >=0; i--) {
//                 this.shift(argument[i]);
//             }
//         } else {
//             while (j < begin) {
//                 tempNode = tempNode.next;
//                 nextNode = tempNode.next;
//                 j++;
//             }

//             for (let i = 0; i < argument.length; i++) {
//                 const temp = new Node(argument[i]);
//                 tempNode.next = temp;
//                 tempNode = tempNode.next;
//                 }
//             }

//         tempNode.next = nextNode;


//     } else if (this.getSize() > begin && argument.length > 0 && count > 0) {
//         if (begin === 0) {
//             for (let i = begin; i < begin + count; i++) {
//                 if (tempNode !== null) {
//                     arrList[i] = tempNode.value;
//                     tempNode = tempNode.next;
//                 } else {
//                     arrList[i] = undefined
//                     k++;
//                 }
//             }

//             root = tempNode;

//             for (let i = argument.length - 1; i >=0; i--) {
//                 this.shift(argument[i]);
//             }
//         } else {
//             while (j < begin) {
//                 tempNode = tempNode.next;
//                 nextNode = tempNode.next;
//                 j++;
//             }

//             for (let i = j + 1; i <= begin + count; i++) {
//                 if (nextNode !== null) {
//                     arrList[k] = nextNode.value;
//                     nextNode = nextNode.next;
//                     k++;
//                 } else {
//                     arrList[k] = undefined;
//                     k++;
//                 }
//             }

//             for (let i = 0; i < argument.length; i++) {
//                 const temp = new Node(argument[i]);
//                 tempNode.next = temp;
//                 tempNode = tempNode.next;
//             }

//             tempNode.next = nextNode;
//         }
//     }
//     return arrList;
// };

    

Llist.prototype.get = function (index) {
    let temp;

    if (this._length !== 0) {
        temp = this._root;
    } else {
        return undefined;
    }

    let curIndex = 0;

    if (index > this._length || index < 0 ) {
        return undefined;
    } else {

        while (curIndex < index && temp !== null) {
            curIndex++;
            temp = temp.next;
        }

    }

    return temp.value;
};

Llist.prototype.set = function (index, value) {
    let temp;

    if (this._length !== 0 && index < this._length && index >= 0) {
        temp = this._root;
    } else {
        return ;
    }

    let curIndex = 0;

    while (curIndex < index && temp.next !== null ) {
        curIndex++;
        temp = temp.next;
    }

    temp.value = value;
};



Llist.prototype.sort = function (sortFunction) {
    let current = this._root;

    for (let i = 0; i < this._length; i++) {

        for (let j = 0; j < this._length - 1; j++) {
            let result = sortFunction(current.value, current.next.value);
            let temp = 0;

            if (result > 0) {
                temp = current.next.value;
                current.next.value = current.value;
                current.value = temp;
            }

            if (current.next) {
                current = current.next;
            } else {
                break;
            }

        }

        current = this._root;
    }

    return this.getArray();
};


//-------------------------------------------------------------------//

const NodeDList = function (value) {
    this.value = value;
    this.next = null;
    this.prev = null;

};
function DLlist () {
    
    this._head = null;
    this._length = 0;
    this._tail = null;
    ILList.apply(this.arguments);
}
DLlist.prototype = Object.create(ILList.prototype)
DLlist.prototype.constructor = DLlist;

DLlist.prototype.getArray = function () {
    let array = [];
    let temp = this._head;

    for (let i = 0; i < this._length; i++) {

        if(temp !== null) {
            array[i] = temp.value;
            temp = temp.next;
        }

    }

    return array;
};
DLlist.prototype.init = function (...values) {
    let array = [];

    if (values) {

        for (let i = 0; i < values.length; i++) {
            this.push(values[i]);
            array[i] = values[i];
        }

    }

    return array;
};
DLlist.prototype.getSize = function () {
    return this._length;
};

DLlist.prototype.toString = function () {
    let string = '"[';
    let temp;

    if (this._root !== null) {
        temp = this._head;
    } else {
        return '"[]"';
    }

    for (let i = 0; i < this._length; i++) {

        if (temp.next !== null && i !== this._length - 1) {
            string += temp.value;
            temp = temp.next;
            string += ', ';
        }

    }

    string += temp.value + ']"';

    return string;
};

DLlist.prototype.push = function (element) {

    if (element !== undefined) {
        const node = new NodeDList(element);

        if (this._head === null) {
            this._head = this._tail =  node;
        } else {
            this._tail.next = node;
            node.previous = this._tail;
            this._tail = node;
        }

        this._length++;
    }

    return this._length;
};

DLlist.prototype.pop = function () {
    let lastElement;

    if (this._length !==0 ) {
        lastElement = this._tail.value;
        this._tail.next = null;
        this._tail = this._tail.previous;
        this._length--;
    }

    return lastElement;
};

DLlist.prototype.shift = function () {
    let firstElement;

    if (this._length !== 0) {
        firstElement = this._head.value;
        this._head = this._head.next;
        this._head.previous = null;
        this._length--;
    }

    return firstElement;
};


DLlist.prototype.unshift = function (value)  {
    let node;

    if (value) {
        node = new NodeDList(value);
        node.next = this._head;
        this._head = node;
        this._head.previous = node;
        this._length++;
    }

    return this._length;
};

// DLlist.prototype.slice = function (start, end) {
//     if (start > this.length) {
//         return -1;
//     }

//     let current = this.head;
//     let result = [];
//     let i = 0;
//     while (current) {
//         if (i >= start && i < end) {
//             result[result.length] = current.value;
//         }
//         i++;

//         if (i < end) {
//             current = current.next;
//         } else {
//             break;
//         }
//     }

//     return result;
// };
// DLlist.prototype.splice = (index, count) => {
//     let result = [];
//     let current = this.head;
//     let previous = null;
//     let i = 0;

//     if (index > this.length) {
//         return [];
//     }

//     while (current) {
//         if (index <= i && i < index + count) {
//             if (current == this.head) {
//                 current = current.next;
//                 this.head = current;
//             } else {
//                 previous.next = current.next;
//                 current = current.next;
//             }
//         } else {
//             previous = current;
//             current = current.next;
//         }
//         i++;
//     } for (let i = 0; i < count; i++) {
//         this.length--;
//     }
// };

DLlist.prototype.get = function (index) {

    let temp;

    if (this._length !== 0) {
        temp = this._head;
    } else {
        return undefined;
    }

    let curIndex = 0;

    if (index > this._length || index < 0 ) {
        return undefined;
    } else {

        while (curIndex < index && temp !== null) {
            curIndex++;
            temp = temp.next;
        }

    }

    return temp.value;
};

DLlist.prototype.set = function (index, value) {
    let temp;

    if (this._length !== 0 && index < this._length && index >= 0) {
        temp = this._head;
    } else {
        return ;
    }

    let curIndex = 0;

    while (curIndex < index && temp.next !== null ) {
        curIndex++;
        temp = temp.next;
    }

    temp.value = value;
};

DLlist.prototype.sort = function (sortFunction) {
    let current = this._head;

    for (let i = 0; i < this._length; i++) {

        for (let j = 0; j < this._length - 1; j++) {
            let result = sortFunction(current.value, current.next.value);
            let temp = 0;

            if (result > 0) {
                temp = current.next.value;
                current.next.value = current.value;
                current.value = temp;
            }

            if (current.next) {
                current = current.next;
            } else {
                break;
            }

        }

        current = this._head;
    }

    return this.getArray();
};
//=============sortFunction==============
const sortFunction = function (first, second) {

    if(first > second) {
        return 1;
    } else if (first === second) {
        return 0;
    } else {
        return -1;
    }

};