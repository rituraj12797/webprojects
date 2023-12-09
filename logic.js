var typeData = new Typed(".role", {
    strings: [
        
        
        "Frontend Developer",
        "MERN  developer",
        "quant Enthusiast ",
        "Competitive-Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});
const nameInput = document.getElementById('in1');
const subjectInput = document.getElementById('in2');
const emailInput = document.getElementById('in3');
const messageInput = document.getElementById('in4');
const sendButton = document.getElementById('send-button');

// Function to clear the input values
function clearInputs() {
nameInput.value = '';
subjectInput.value = '';
emailInput.value = '';
messageInput.value = '';
}

// Add an event listener to the button to trigger the clearing of inputs
sendButton.addEventListener('click', () => {
clearInputs();
});


