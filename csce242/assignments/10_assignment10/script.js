const getIceCream = async() => {
    const url = "https://portiaportia.github.io/json/ice-creams.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showIceCream = async() => {
    const iceCream = await getIceCream();
    
    iceCream.forEach((icecream)=>{
        document.getElementById("gallery").append(getIceCreamSection(icecream));
    });
};

function picture(info) {
    const pic = document.createElement("img");
    pic.src = "https://portiaportia.github.io/json/images/ice-creams/" + info;
    return pic;
};

const getIceCreamSection = (icecream) => {
    const container = document.createElement("div");
    container.className = "container"; // Add the container class

    const img = picture(icecream.image);
    container.append(img);

    const overlay = document.createElement("div");
    overlay.className = "overlay"; // Add overlay class
    container.append(overlay); // Append the overlay to the container

    const h3 = document.createElement("h3");
    h3.innerHTML = icecream.name;
    overlay.append(h3); // Optionally append the title to the overlay

    return container; // Return the container
};

//show all of the ice cream when the page loads
showIceCream();