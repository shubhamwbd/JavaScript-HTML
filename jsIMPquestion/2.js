
let readingList = [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      alreadyRead: true
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      alreadyRead: false
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      alreadyRead: true
    },
    {
      title: "1984",
      author: "George Orwell",
      alreadyRead: false
    }
  ];
  
 
  for (let book of readingList) {
    let bookString = `"${book.title}" by ${book.author}`;
    if (book.alreadyRead) {
      console.log(`You already read ${bookString}.`);
    } else {
      console.log(`You still need to read ${bookString}.`);
    }
  }