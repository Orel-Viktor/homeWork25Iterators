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

for (let values of object){
    console.log(values)
}