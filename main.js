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
    let entries = Object.entries(this);

    return {
        current: 0,
        next: function () {
            if (entries[this.current] !== entries[entries.length]) {
                return {
                    done: false,
                    value: entries[this.current++]
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


for (let [key, value] of object) {
    const p = document.createElement('p');
    const b = document.createElement('strong');
    const s = document.createElement('span');

    b.innerText = key.toUpperCase() + ': ';
    s.innerText = value;

    p.appendChild(b);
    p.appendChild(s);
    document.body.appendChild(p)
}