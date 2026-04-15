/**
 * VOGUEMAN E-COMMERCE MAIN SCRIPT
 * Handles all carousel sliders and interactive elements
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Vogueman Script Loaded Successfully!");
});

/**
 * Universal Slide Function
 * @param {string} trackId - The ID of the carousel track (e.g., 'tshirt-track')
 * @param {number} direction - 1 for Next, -1 for Previous
 */
function slide(trackId, direction) {
    const track = document.getElementById(trackId);
    
    // Safety check: Agar track na mile toh error na aaye
    if (!track) {
        console.error(`Track with ID "${trackId}" not found.`);
        return;
    }

    const card = track.querySelector('.product-card');
    if (!card) return;

    // Card ki width aur gap calculate karna (Responsive)
    const cardWidth = card.offsetWidth + 20; 
    
    // Current position nikalna
    const style = window.getComputedStyle(track);
    const matrix = new WebKitCSSMatrix(style.transform);
    const currentTransform = matrix.m41; // Horizontal X-axis value

    // Scroll limits set karna
    const wrapperWidth = track.parentElement.offsetWidth;
    const maxScroll = -(track.scrollWidth - wrapperWidth);
    
    // Nayi position set karna
    let newTransform = currentTransform - (direction * cardWidth);
    
    // Boundary Checks: Shuru ya khatam par rukna
    if (newTransform > 0) {
        newTransform = 0;
    } else if (newTransform <= maxScroll) {
        newTransform = maxScroll;
    }

    // CSS Transition apply karna
    track.style.transform = `translateX(${newTransform}px)`;
}

// Future feature: Agar aap chahain toh yahan 'Add to Cart' 
// ya 'Newsletter' ki logic bhi add kar sakte hain.

