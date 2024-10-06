class Bird{
    constructor(breed, size, lifespan, food, habitat, fact, image){
        this.breed = breed;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
        this.image = image;
    }

    get item(){
        const section = document.createElement("section");
        section.classList.add("bird");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.breed;
        section.append(h3);

        section.append(this.picture(this.image));

        section.addEventListener("click", () => this.openModal());

        return section;
    }

    picture(info){
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    paragraph(title, info){
        const p =document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }

    getExpandedSection() {
        const content = document.createElement("div");
        content.classList.add("columns");
        content.classList.add("modal-content"); 

        const firstColumn = document.createElement("div");
        firstColumn.classList.add("column"); // Add class for individual columns
        const breed = document.createElement("h2");
        breed.innerHTML = this.breed;
        const fact = document.createElement("p");
        fact.innerText = this.fact;
        firstColumn.appendChild(breed);
        firstColumn.appendChild(this.paragraph("Size", this.size));
        firstColumn.appendChild(this.paragraph("Lifespan", this.lifespan));
        firstColumn.appendChild(this.paragraph("Diet", this.food));
        firstColumn.appendChild(this.paragraph("Habitat", this.habitat));
        firstColumn.appendChild(this.paragraph("Fun Fact", this.fact));
        
        const secondColumn = document.createElement("div");
        secondColumn.classList.add("column"); // Add class for individual columns
        const img = this.picture(this.image);
        secondColumn.appendChild(img);

        content.append(firstColumn, secondColumn);

        return content;
    }

    openModal() {
        const modalBody = document.getElementById("modal-body");
        modalBody.innerHTML = ""; // Clear previous content
        modalBody.appendChild(this.getExpandedSection());
        document.getElementById("modal").style.display = "block";
    }

}

const closeModal = () => {
    document.getElementById("modal").style.display = "none";
};

// When the user clicks on the close button, close the modal
document.querySelector(".close-button").onclick = closeModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

const birds = [];
birds.push(new Bird("Hummingbird", "2.5 inches", "3-5 years", "Nectar, Sugar Water", "Trees", "They're nicknamed 'Hummers'.", "hummingbird.jpg"));
birds.push(new Bird("Cardinal", "8 inches", "3-5 years", "Seeds, Grains, Fruit", "Thickets", "They get their color from what they eat.", "cardinal.jpeg"));
birds.push(new Bird("Eagle", "35 inches", "20-30 years", "Fish, Mammals", "Cliffs", "The females are larger than the males.", "eagle.jpeg"));
birds.push(new Bird("Parakeet", "7 inches", "5-8 years", "Fruits, Vegetables", "Trees", "They can learn to talk.", "parakeet.jpeg"));
birds.forEach((bird)=>{
    document.getElementById("bird-list").append(bird.item);
});