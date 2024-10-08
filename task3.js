const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 218,

  getSummary: function() {
    return `The book '${this.title}' by ${this.author} has ${this.pages} pages.`;
  }
};

console.log(book.getSummary());
