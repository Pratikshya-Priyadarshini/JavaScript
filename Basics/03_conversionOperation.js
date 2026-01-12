let a = 12345
console.log(typeof a) // number

let b = "1234"
console.log(typeof b) // string
let e = Number(b) 
console.log(typeof e) //number
console.log(e); // 1234


let c = "abcd"
console.log(typeof c) // string
let f = Number(c)     
console.log(typeof f) // number
console.log(f)        // NaN


let d = "ab12"
console.log(typeof d) //string
let g = Number(d)     
console.log(typeof g) //number
console.log(g);       //NaN

let h = null
console.log(typeof h) // object
let i = Number(h)
console.log(typeof i) //Number
console.log(i)        //0


let j = undefined
console.log(typeof j) // undefined
let k = Number(j)
console.log(typeof k) //number
console.log(k)        //NaN

let l = true
console.log(typeof l) // boolean
let m = Number(l)
console.log(typeof m) //number
console.log(m)        //1

let n = false
console.log(typeof n) // boolean
let o = Number(n)
console.log(typeof o) //number
console.log(o)        //0


let p = 1
let u = Boolean(p)
console.log(u);

let q = 0
let v = Boolean(q)
console.log(v);

let r = ""
let w = Boolean(r)
console.log(w);

let s = "Pratikshya"
let x = Boolean(s)
console.log(x);

let t = 12
let y = Boolean(t)
console.log(y);






