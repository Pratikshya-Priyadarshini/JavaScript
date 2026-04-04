open browser and write this in console.
- console.log(window) -> window is a complex OBJECT.
- console.log(window.document) = console.dir(document) = console.log(document)

                                      -> 1. title -> text node
                           -> 1. Head -> 2. meta -> attribute
Window -> Document -> HTML                                       
                           -> 2. Body -> div -> 1. h1 -> 1. attribute
                                                      -> 2. text node
                                             -> 2. p -> text node





open a page in wikipedia 
(ex- Brendan Eich)

document.getElementById('firstHeading')
<h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​…​</h1>​
document.getElementById('firstHeading').innerHTML = "Pratikshya Priyadarshini";
'Pratikshya Priyadarshini'
document.getElementById('firstHeading').innerHTML = "<h1>Pratikshya Priyadarshini</h1>";
'<h1>Pratikshya Priyadarshini</h1>'




document.getElementById('ttile')
null
document.getElementById('title')
<h1 id=​"title" class=​"heading">​Dom leaning ​</h1>​
document.getElementById('title').id
'title'
document.getElementById('title').className
'heading'
document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').setAttribute('class','test')
undefined
document.getElementById('title').setAttribute('class')
VM348:1 Uncaught TypeError: Failed to execute 'setAttribute' on 'Element': 2 arguments required, but only 1 present.
    at <anonymous>:1:34
(anonymous) @ VM348:1Understand this error
document.getElementById('title').getAttribute('class')
'test'
const title = document.getElementById('title')
undefined
title.innerText = "Pratikshya Priyadarshini"
'Pratikshya Priyadarshini'
title.style.backgroundColor 
''
title.style.backgroundColor = 'Green'
'Green'
title.style.padding = 10px
VM905:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
title.style.padding = .10px'
VM911:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
title.style.padding = '10px'
'10px'
title
<h1 id=​"title" class=​"test" style=​"background-color:​ green;​ padding:​ 10px;​">​Pratikshya Priyadarshini​</h1>​

title.textContent
'Dom leaning Test text '
title.innerHTML
'Dom leaning <span style="display: none;">Test text</span> '
title.innerText
'Dom leaning'


document.querySelector('li')
<li>​::marker​"1"</li>​
document.querySelector('li').style.color = 'green'
'green'
document.querySelector('li').style.backgroundColor = 'green'
'green'
document.querySelector('li').style.Color = 'red'
'red'
document.querySelector('li').style.color = 'red'
'red'
document.querySelectorAll('ul')
NodeList [ul]0: ullength: 1[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
document.querySelectorAll('li')
NodeList(4) [li, li, li, li]0: li1: li2: li3: lilength: 4[[Prototype]]: NodeList
const arr = [1,2,3,4]
undefined
arr
(4) [1, 2, 3, 4]0: 11: 22: 33: 4length: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
const node = doc
VM2327:1 Uncaught ReferenceError: doc is not defined
    at <anonymous>:1:14
(anonymous) @ VM2327:1Understand this error
const node = document.querySelectorAll('li')
undefined
node[0].style.color = 'green'
'green'
node.style.color = 'green'
VM2502:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:18



    node.forEach((l) => { 
    l.style.backgroundColor = 'green'
})



document.getElementsByClassName('list')
HTMLCollection(4) [li.list, li.list, li.list, li.list]
const list = document.getElementsByClassName('list')
undefined
list 
HTMLCollection(4) [li.list, li.list, li.list, li.list]0: li.list1: li.list2: li.list3: li.listlength: 4[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object
Array.from(list)
(4) [li.list, li.list, li.list, li.list]0: li.list1: li.list2: li.list3: li.listlength: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
const myconvertedARR = Array.from(list)
undefined
myconvertedARR
(4) [li.list, li.list, li.list, li.list]
myconvertedARR.forEach((li) => {
    li.style.color = "orange'
})
VM3145:2 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
myconvertedARR.forEach((li) => {
    li.style.color = "orange"
})
undefined