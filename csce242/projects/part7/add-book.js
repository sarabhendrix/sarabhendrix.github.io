document.getElementById("add-book").onsubmit = (e) => {
    e.preventDefault();
    document.getElementById("submit-message").classList.remove("hidden");
    const form = e.target;

    const title = form.elements["title"].value;
    const genre = form.elements["genre"].value;
    const desc = form.elements["description"].value;
    const rating = parseFloat(form.elements["avg-rating"].value); 
    
    console.log(title);
    console.log(genre);
    console.log(desc);
    console.log(rating);
}