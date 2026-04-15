
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}

function searchFunction(event) {
    event.preventDefault();

    let input = document.getElementById("searchInput").value.toLowerCase();

    if(input.includes("shirt")) {
        window.location.href = "shirts.html";
    }
    else if(input.includes("polo")) {
        window.location.href = "polos.html";
    }
    else if(input.includes("bottom")) {
        window.location.href = "bottoms.html";
    }
    else if(input.includes("tshirt")) {
        window.location.href = "tshirts.html";
    }
    else if(input.includes("fragrance")) {
        window.location.href = "fragrances.html";
    }
    else if(input.includes("Foot Wear")) {
        window.location.href = "shoes.html";
    }
    else {
        alert("Product not found");
    }
}

function addToCart(product) {
    alert(product + " added to cart!");
}