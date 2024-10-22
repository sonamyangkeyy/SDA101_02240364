const flower = document.getElementById('flower');

// Function to move the flower with the cursor
document.addEventListener('mousemove', (e) => {
    flower.style.left = $;e.pageX;px;
    flower.style.top = $;e.pageY;px;
    flower.style.opacity = 1; // Show flower when mouse moves
});

// Hide the flower after the cursor stops moving for 1 second
let timeout;
document.addEventListener('mousemove', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        flower.style.opacity = 0;
    }, 1000); // 1 second delay before hiding flower
});