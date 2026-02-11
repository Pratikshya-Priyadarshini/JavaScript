document.getElementById('title')
<h1 id=​"title" class=​"heading">​DOM learning on Youtube​</h1>​
document.getElementById('title').id
'title'
document.getElementById('title').class
undefined
document.getElementById('title').className
'heading'
document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').setAttribute('class', "test')
VM355:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
document.getElementById('title').setAttribute('class', "test")
undefined
document.getElementById('title').setAttribute('class', "test heading")
undefined
const title = document.getElementById('title')
undefined
title
<h1 id=​"title" class=​"test heading">​DOM learning on Youtube​</h1>​
title.style.backgroundColor = 'green'
'green'
title.textContent
'DOM learning on Youtube'
title.innerHTML
'DOM learning on Youtube'
title.innerText
'DOM learning on Youtube'
title.innerText
'DOM learning on Youtube'



title.textContent
'DOM learning on Youtube\n            test Text\n        '
title.innerText
'DOM learning on Youtube'
title.innerHTML
'DOM learning on Youtube\n            <span style="display : none">test Text</span>\n        '
document.getElementsByClassName('heading')
HTMLCollection [h1#title.heading, title: h1#title.heading]0: h1#title.headingtitle: h1#title.headinglength: 1[[Prototype]]: HTMLCollection
document.querySelector('h1')
<h1 id=​"title" class=​"heading">​…​</h1>​
document.querySelector('#title')
<h1 id=​"title" class=​"heading">​…​</h1>​
document.querySelector('.heading')
<h1 id=​"title" class=​"heading">​…​</h1>​
document.querySelector('#title')
<h1 id=​"title" class=​"heading">​…​</h1>​