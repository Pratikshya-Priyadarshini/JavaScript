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
