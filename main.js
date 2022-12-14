"use strict"


let object =
{
    a: 10,
    b: 20,
    c: 30,
    d: 40,
}

object[Symbol.iterator] = function () {
    this.a = 0
    return {
        current: this.a,
        last: this.d,

        next: function () {
            if (this.current < this.last) {
                return {
                    done: false,
                    value: this.current += 10
                }
            } else {
                return {
                    done: true,
                    value: undefined
                }
            }
        }
    }
}

for (let values of object) {
    console.log(values)
}



let object1 = {
    name: 'Stanley',
    Job: 'Web dev',
    age: 28,
}
let arr = Object.entries(object1)

for (let map of arr) {
    map = new Map(arr)
    let newArr = Object.fromEntries(map)
    newArr.name = "Viktor"
    console.log(newArr)
    
}
