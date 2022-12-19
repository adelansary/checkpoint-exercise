const bookTitleInput = document.getElementById("input");
bookTitleInput.setAttribute("id", "book_title");
const saveBookButton = document.getElementById("btn");
saveBookButton.innerHTML = "Save Book";

const bookTitleHeader = document.getElementById("h3");
bookTitleHeader.innerHTML = "Book Title";

let bookTitles = [];

const saveBook = () => {
  const bookTitle = bookTitleInput.value;

  bookTitles.push(bookTitle);

  localStorage.setItem("bookTitles", JSON.stringify(bookTitles));

  bookTitleHeader.innerHTML = bookTitle;

  bookTitleInput.value = "";
};

saveBookButton.addEventListener("click", saveBook);

const savedBookTitles = JSON.parse(localStorage.getItem("bookTitles"));

console.log(savedBookTitles);
