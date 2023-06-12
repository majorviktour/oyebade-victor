const ratingE1s = document.querySelectorAll(".rating");
const btnE1s = document.getElementById("btn");

const containerE1 = document.getElementById("container");


let selectedRating = "";


ratingE1s.forEach((ratingE1) => {
    ratingE1.addEventListener("click", (event) => {
        removeActive();
        selectedRating = 
        event.target.innerText || event.target.
        parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")

    });
});

btnE1s.addEventListener ("click", () => {
    if (selectedRating !== "") {
        containerE1.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `

    }
});

function removeActive(){
    ratingE1s.forEach((ratingE1) => {
        ratingE1.classList.remove("active");
    });
};