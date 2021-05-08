let Library = require('./src/Library')
let Book = require('./src/Book')
let Author = require('./src/Author')
let Librarian = require('./src/Librarian')
let Visitor = require('./src/Visitor')


let auth1 = new Author('Михаил Булгаков')
let auth2 = new Author('Виктор Гюго')

let lib1 = new Library('"Центральная библиотека"',[
    new Book('Мастер и Маргарита', auth1),
    new Book('Преступление и наказание', new Author('Федор Михайлович Достоевский')),
    new Book('Собачье сердце', auth1),
    new Book('Отверженные', auth2),
    new Book('Человек который смеется', auth2)
])

let lib2 = new Library('"Городская библиотека"', [
    new Book('Норвежский лес', new Author('Харуки Мураками')),
    new Book('Марсианин', new Author('Энди Вейр')),
    new Book('Облачный атлас', new Author('Дэвид Митчелл'))
])

let librarian1 = new Librarian('Олег', lib1)
let librarian2 = new Librarian('Алексей', lib2)

let visitor1 = new Visitor('Иван')


visitor1.IWantToRead(librarian1, 'Федор Михайлович Достоевский')
visitor1.WhatIRead()
visitor1.IWantToRead(librarian1, 'Михаил Булгаков', 'Мастер и Маргарита')
visitor1.WhatIRead()
visitor1.IWantToRead(librarian1, 'Михаил Булгаков', 'Мастер и аргарита')
visitor1.WhatIRead()
visitor1.IWantToRead(librarian2, 'Дэвид Митчелл')
visitor1.WhatIRead()
visitor1.IWantToRead(librarian2, 'Харуки Мураками', 'Норвежский лес')
visitor1.WhatIRead()
