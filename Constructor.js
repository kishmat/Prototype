// Write a constructor for making “book” objects. We will revisit this in the project at the end of this lesson.
// Your book objects should have the book’s title, author, the number of pages and whether or not you have read the book.

function Book(title,author,pages)
{
    this.title =title
    this.author = author
    this.pages = pages
    this.info = function() {
        return `${this.title} by ${this.author} of ${this.pages} pages, is not read yet`
    }
}

const Python = new Book("Programming Python","AuthorX",1329)
console.log(Python.info())