/*Hearts background*/
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = "12s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 15000);
}

setInterval(createHeart, 100);

/*Fireworks*/
document.getElementById("showMessageBtn").addEventListener("click", function () {
    const button = this;
    const clickText = document.querySelector(".click-btn");
    const message = document.querySelector(".message");
    const nextBtn = document.getElementById("nextBtn");
    const fireworksContainer = document.querySelector(".fireworks-container");
    const delay = 500;

    // Fade out button and text
    button.style.opacity = "0";
    clickText.style.opacity = "0";

    setTimeout(() => {
        button.style.display = "none";
        clickText.style.display = "none";
    }, 500);

    // Show message
    setTimeout(() => {
        message.style.display = "block";

        setTimeout(() => {
            message.style.opacity = "1";
            message.style.transform = "translate(-50%, -50%) translateY(0)";
            triggerFireworks(fireworksContainer);

            // Show the new button after the message slides in
            setTimeout(() => {
                nextBtn.style.opacity = "1";
                nextBtn.style.transform = "translateX(-50%) translateY(0)";
                nextBtn.style.zIndex = "99999";
            }, 1000);
        }, 50);
    }, delay);
});

// Function to create fireworks
function triggerFireworks(container) {
    const message = document.querySelector(".message");
    const rect = message.getBoundingClientRect();
    const messageX = rect.left + rect.width / 2;
    const messageY = rect.top + rect.height / 2;

    for (let i = 0; i < 60; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");

        // Random explosion directions
        const x = (Math.random() - 0.5) * 250;
        const y = (Math.random() - 0.5) * 250;

        firework.style.left = `${messageX}px`;
        firework.style.top = `${messageY}px`;

        firework.style.setProperty("--x", `${x}px`);
        firework.style.setProperty("--y", `${y}px`);

        container.appendChild(firework);

        setTimeout(() => firework.remove(), 1500);
    }
}

document.getElementById("nextBtn").addEventListener("click", function () {
    const nextBtn = this;
    const surpriseImg = document.querySelector(".surprise-img");
    const message = document.querySelector(".message");
    const message1 = document.querySelector(".message1");
    const resetBtn = document.getElementById("resetBtn");
    
    // Start fading out the button and message1
    nextBtn.style.opacity = "0";
    nextBtn.style.transition = "opacity 1s ease-out";
    message1.style.opacity = "0";
    
    // Hide elements after fade completes
    setTimeout(() => {
        nextBtn.style.display = "none";
        message.style.display = "none";
        message1.style.display = "none";
    }, 1000);
    
    setTimeout(() => {
        nextBtn.style.display = "none";
        
        surpriseImg.style.display = "block";
        setTimeout(() => {
            surpriseImg.style.opacity = "1";
            
            // Show reset button after surprise image appears
            setTimeout(() => {
                resetBtn.style.display = "block";
                setTimeout(() => {
                    resetBtn.style.opacity = "1";
                }, 50);
            }, 1000);
            
        }, 50);
    }, 1000);
});

// Add reset button functionality
document.getElementById("resetBtn").addEventListener("click", function() {
    const resetBtn = this;
    const surpriseImg = document.querySelector(".surprise-img");
    const button = document.getElementById("showMessageBtn");
    const clickText = document.querySelector(".click-btn");
    const message = document.querySelector(".message");
    const message1 = document.querySelector(".message1");
    const nextBtn = document.getElementById("nextBtn");
    const fireworksContainer = document.querySelector(".fireworks-container");
    
    // Reset button fade out
    resetBtn.style.opacity = "0";
    
    // First clear any fireworks
    fireworksContainer.innerHTML = "";
    
    // Fade out surprise image
    surpriseImg.style.opacity = "0";
    
    setTimeout(() => {
        // Hide reset button and surprise image
        resetBtn.style.display = "none";
        surpriseImg.style.display = "none";
        
        // Reset message elements
        message.style.opacity = "0";
        message.style.transform = "translate(-50%, -50%) translateY(20px)";
        message.style.display = "none";
        message1.style.opacity = "1";
        message1.style.display = "block";
        
        // Reset next button
        nextBtn.style.opacity = "0";
        nextBtn.style.transform = "translateX(-50%) translateY(20px)";
        nextBtn.style.display = "block";
        
        // Show original button and text
        button.style.display = "flex";
        clickText.style.display = "flex";
        
        setTimeout(() => {
            button.style.opacity = "1";
            clickText.style.opacity = "1";
        }, 50);
    }, 500);
});