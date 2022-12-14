"use strict"


let object =
{
    a: 10,
    b: 20,
    c: 30,
    d: 40,
}
object[Symbol.iterator] = function () {
    return {
        current: this.a,
        last: this.d,

        next: function () {
            if (this.current <= this.last) {

                return {
                    done: false,
                    value: this.current +=10
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

for (let keys of object) {
    console.log(keys)
}
