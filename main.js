// "use strict"


// let object =
// {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
// }

// object[Symbol.iterator] = function () {
//     this.a = 0
//     return {
//         current: this.a,
//         last: this.d,

//         next: function () {
//             if (this.current < this.last) {
//                 return {
//                     done: false,
//                     value: this.current += 10
//                 }
//             } else {
//                 return {
//                     done: true,
//                     value: undefined
//                 }
//             }
//         }
//     }
// }



let object = {
    name: 'Stanley',
    Job: 'Web dev',
    age: 28,
}

object[Symbol.iterator] = function () {
    let keys = Object.keys(this)
    this.i = 0
    return {
        current: this.i,
        next: function () {
            if (keys[this.current] !== keys[keys.length]) {
                return {
                    done: false,
                    value: keys[this.current++]
                }
            } else {
                return {
                    done: true,
                    value: undefined,
                }
            }

        }
    }
}



console.log(object[Symbol.iterator]().next())
console.log(object[Symbol.iterator]().next())
console.log(object[Symbol.iterator]().next())
console.log(object[Symbol.iterator]().next())


// for (let keys of object) {
//     console.log(keys)
// }