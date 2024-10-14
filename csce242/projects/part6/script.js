const toggle = document.getElementById('toggle-menu');
const menu = document.getElementById('nav-items');
const arrow = document.getElementById('arrow');
const getBooks = async() => {
    const url = "https://sarabhendrix.github.io/csce242/projects/part6/books.json";
    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
}
const showBooks = async() => {
    const response = await getBooks();
    const books = response.books;

    books.forEach((book)=>{
        if(document.getElementById("results")){
            document.getElementById("results").append(getBookResultSection(book));
        } else if(document.getElementById("results-larger")){
            document.getElementById("results-larger").append(getBookResultSectionLarger(book));
        }
          
    });
};

const getBookResultSection = (book) => {
    const section = document.createElement("section");
    section.classList.add("mini-book");

    const image = document.createElement("img");
    image.src = `images/${book.imagePath}`;
    section.append(image);

    const name = document.createElement("h5");
    name.innerHTML = book.title;
    section.append(name);

    return section;
}

const getBookResultSectionLarger = (book) => {
    const section = document.createElement("section");
    section.id = "small-book";

    const image = document.createElement("img");
    image.src = `images/${book.imagePath}`;
    section.append(image);

    const name = document.createElement("h5");
    name.innerHTML = book.title;
    section.append(name);

    return section;
}

toggle.addEventListener('click', () => {
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
        arrow.innerHTML = '&#8595;'; 
    } else {
        menu.classList.add('visible');
        arrow.innerHTML = '&#8593;'; 
    }
});

function resetMenuDisplay() {
    if (window.innerWidth >= 760) {
        menu.classList.add('visible'); 
        arrow.innerHTML = ''; 
    } else {
        menu.classList.remove('visible'); 
        arrow.innerHTML = '&#8595;'; 
    }
}

resetMenuDisplay();

window.addEventListener('resize', resetMenuDisplay);
showBooks();