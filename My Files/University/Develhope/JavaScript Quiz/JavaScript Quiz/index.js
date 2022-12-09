const form = document.querySelector("form");
const bookTitle = document.querySelector("input");

let bookTitles = [];

form.addEventListener('submit', () => {
    bookTitles.push(bookTitle.value);
    
    localStorage.setItem("Book titles", JSON.stringify(bookTitles));
    bookTitle.value = '';

    const h3 = document.createElement('h3');
    h3.innerText(bookTitle.value);
    document.body.appendChild(h3);
});
