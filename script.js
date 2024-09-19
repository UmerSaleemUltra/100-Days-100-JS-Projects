document.getElementById("hello").innerHTML = 'hello'
function alerts  () {
alert("hello")
}

const button = document.getElementById("changeColorBtn");
const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

        button.addEventListener("click", function() {
            // Get a random color from the colors array
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        });

        function validateForm() {
            const name = document.getElementById("name").value;
            const address = document.getElementById("address").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const subject = document.getElementById("subject").value;
            const agree = document.getElementById("agree").checked;
            const nameError = document.getElementById("name-error");
            
            const addressError = document.getElementById(
                "address-error"
            );
            const emailError = document.getElementById(
                "email-error"
            );
            const passwordError = document.getElementById(
                "password-error"
            );
            const subjectError = document.getElementById(
                "subject-error"
            );
            const agreeError = document.getElementById(
                "agree-error"
            );
        
            nameError.textContent = "";
            addressError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";
            subjectError.textContent = "";
            agreeError.textContent = "";
        
            let isValid = true;
        
            if (name === "" || /\d/.test(name)) {
                nameError.textContent =
                    "Please enter your name properly.";
                isValid = false;
            }
        
            if (address === "") {
                addressError.textContent =
                    "Please enter your address.";
                isValid = false;
            }
        
            if (email === "" || !email.includes("@")) {
                emailError.textContent =
                    "Please enter a valid email address.";
                isValid = false;
            }
        
            if (password === "" || password.length < 6) {
                passwordError.textContent =
                    "Please enter a password with at least 6 characters.";
                isValid = false;
            }
        
            if (subject === "") {
                subjectError.textContent =
                    "Please select your course.";
                isValid = false;
            }
        
            if (!agree) {
                agreeError.textContent =
                    "Please agree to the above information.";
                isValid = false;
            }
        
            return isValid;
        }
const d = new Date()        
document.getElementById("date").innerHTML = d

let counter = 0;

function increases () {
counter++;
document.getElementById("increament").innerHTML = counter
}

function decrease () {
    if(counter > 1)
    counter--;
    document.getElementById("increament").innerHTML = counter
    }

    function change()
{
    document.getElementById("myButton1").value="Close Curtain";
}

function addTask() {
    const task = document.getElementById("task").value;
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="this.parentElement.remove()">Delete</button>`;
    document.getElementById("taskList").appendChild(li);
    document.getElementById("task").value = '';
}

function showImage(src) {
    document.getElementById("mainImage").src = src;
}

const color = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Pink", "Cyan", "Magenta", "Lime"];

function showRandomColor() {
    const randomColor = color[Math.floor(Math.random() * color.length)];
    document.getElementById("colorDisplay").innerText = randomColor;
    document.getElementById("colorDisplay").style.backgroundColor = randomColor.toLowerCase();
}

document.getElementById("demos").innerHTML =
Math.floor(Math.random() * 10);