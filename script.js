window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    // div added to make sure all of the div pads are selected.
    const visual = document.querySelector('.visual')
    const colors = [
        "red",
        "orange",
        "rgb(212, 212, 22)",
        "rgb(95, 221, 95)",
        "green",
        "rgb(85, 20, 128)",
        "rgb(218, 72, 205)",
        "red"
    ]

    // Getting the sound
    pads.forEach((pads, index) => {
        // index provides the number for each sound.
        pads.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            // allows immediate reset of sound upon click
            sounds[index].play();

            createBubbles(index)
        })
    })
    // Create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div")
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = 'jump 1s ease'
        bubble.addEventListener('animationEnd', function(){
            visual.removeChild(this)
        })
    }
});
// this runs the content when loaded.
