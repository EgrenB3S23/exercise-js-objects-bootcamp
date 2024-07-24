/* 1 - Bibblan */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */
/* 1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är `title`, `author`, `numPages`. */
console.log("Uppgift 1 - Bibblan");
// console.log("Uppgift 1.1");
let book = {
	title: "The Keeper of the Isis Light",
	author: "Monica Hughes",
	numPages: 136,
};
console.log(book);

let books = [];

books.push(book);
console.log(books);
let bookToAdd = {};
bookToAdd = {
	title: "The Guardian of Isis",
	author: "Monica Hughes",
	numPages: 140,
};
books.push(bookToAdd);

bookToAdd = {
	title: "The Isis Pedlar",
	author: "Monica Hughes",
	numPages: 121,
};
books.push(bookToAdd);

console.log(books);

console.log(findObjInArr(books, "title", "The Isis Pedlar")); // (hit)
console.log(findObjInArr(books, "title", "Titanic")); // (miss)

function findObjInArr(arr, prop, propVal) {
	//aka findBookInBooks
	for (const obj of books) {
		if (obj[prop] === propVal) {
			return obj;
		}
	}
	return null;
}

/* 2 - Letter Frequency */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */
/* 1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är `title`, `author`, `numPages`. */
console.log("Uppgift 2 - Letter Frequency");

// letter frequency:
/*
exempel på objekt:

letterfrequency("hello") = 
{
"e": 1,
"H": 1,
"l": 2,
"o": 1
}
*/
