document.getElementById("hello").innerHTML = 'hello'
function alerts  () {
alert("hello")
}

const button = document.getElementById("changeColorBtn");
const colors = [
  '#FFCDD2',
  '#EF9A9A',
  '#E57373',
  '#EF5350',
  '#F44336',
  '#E53935',
  '#D32F2F',
  '#C62828',
  '#B71C1C',
  '#FF8A80',
  '#FF5252',
  '#FF1744',
  '#D50000',
  '#E91E63',
  '#FCE4EC',
  '#F8BBD0',
  '#F48FB1',
  '#F06292',
  '#EC407A',
  '#E91E63',
  '#D81B60',
  '#C2185B',
  '#AD1457',
  '#880E4F',
  '#FF80AB',
  '#FF4081',
  '#F50057',
  '#C51162',
  '#9C27B0',
  '#F3E5F5',
  '#E1BEE7',
  '#CE93D8',
  '#BA68C8',
  '#AB47BC',
  '#9C27B0',
  '#8E24AA',
  '#7B1FA2',
  '#6A1B9A',
  '#4A148C',
  '#EA80FC',
  '#E040FB',
  '#D500F9',
  '#AA00FF',
  '#673AB7',
  '#EDE7F6',
  '#D1C4E9',
  '#B39DDB',
  '#9575CD',
  '#7E57C2',
  '#673AB7',
  '#5E35B1',
  '#512DA8',
  '#4527A0',
  '#311B92',
  '#B388FF',
  '#7C4DFF',
  '#651FFF',
  '#6200EA',
  '#3F51B5',
  '#E8EAF6',
  '#C5CAE9',
  '#9FA8DA',
  '#7986CB',
  '#5C6BC0',
  '#3F51B5',
  '#3949AB',
  '#303F9F',
  '#283593',
  '#1A237E',
  '#8C9EFF',
  '#536DFE',
  '#3D5AFE',
  '#304FFE',
  '#2196F3',
  '#E3F2FD',
  '#BBDEFB',
  '#90CAF9',
  '#64B5F6',
  '#42A5F5',
  '#2196F3',
  '#1E88E5',
  '#1976D2',
  '#1565C0',
  '#0D47A1',
  '#82B1FF',
  '#448AFF',
  '#2979FF',
  '#2962FF',
  '#03A9F4',
  '#E1F5FE',
  '#B3E5FC',
  '#81D4FA',
  '#4FC3F7',
  '#29B6F6',
  '#03A9F4',
  '#039BE5',
  '#0288D1',
  '#0277BD',
  '#01579B',
  '#80D8FF',
  '#40C4FF',
  '#00B0FF',
  '#0091EA',
  '#00BCD4',
  '#E0F7FA',
  '#B2EBF2',
  '#80DEEA',
  '#4DD0E1',
  '#26C6DA',
  '#00BCD4',
  '#00ACC1',
  '#0097A7',
  '#00838F',
  '#006064',
  '#84FFFF',
  '#18FFFF',
  '#00E5FF',
  '#00B8D4',
  '#009688',
  '#E0F2F1',
  '#B2DFDB',
  '#80CBC4',
  '#4DB6AC',
  '#26A69A',
  '#009688',
  '#00897B',
  '#00796B',
  '#00695C',
  '#004D40',
  '#A7FFEB',
  '#64FFDA',
  '#1DE9B6',
  '#00BFA5',
  '#4CAF50',
  '#E8F5E9',
  '#C8E6C9',
  '#A5D6A7',
  '#81C784',
  '#66BB6A',
  '#4CAF50',
  '#43A047',
  '#388E3C',
  '#2E7D32',
  '#1B5E20',
  '#B9F6CA',
  '#69F0AE',
  '#00E676',
  '#00C853',
  '#8BC34A',
  '#F1F8E9',
  '#DCEDC8',
  '#C5E1A5',
  '#AED581',
  '#9CCC65',
  '#8BC34A',
  '#7CB342',
  '#689F38',
  '#558B2F',
  '#33691E',
  '#CCFF90',
  '#B2FF59',
  '#76FF03',
  '#64DD17',
  '#CDDC39',
  '#F9FBE7',
  '#F0F4C3',
  '#E6EE9C',
  '#DCE775',
  '#D4E157',
  '#CDDC39',
  '#C0CA33',
  '#AFB42B',
  '#9E9D24',
  '#827717',
  '#F4FF81',
  '#EEFF41',
  '#C6FF00',
  '#AEEA00',
  '#FFEB3B',
  '#FFFDE7',
  '#FFF9C4',
  '#FFF59D',
  '#FFF176',
  '#FFEE58',
  '#FFEB3B',
  '#FDD835',
  '#FBC02D',
  '#F9A825',
  '#F57F17',
  '#FFFF8D',
  '#FFFF00',
  '#FFEA00',
  '#FFD600',
  '#FFC107',
  '#FFF8E1',
  '#FFECB3',
  '#FFE082',
  '#FFD54F',
  '#FFCA28',
  '#FFC107',
  '#FFB300',
  '#FFA000',
  '#FF8F00',
  '#FF6F00',
  '#FFE57F',
  '#FFD740',
  '#FFC400',
  '#FFAB00',
  '#FF9800',
  '#FFF3E0',
  '#FFE0B2',
  '#FFCC80',
  '#FFB74D',
  '#FFA726',
  '#FF9800',
  '#FB8C00',
  '#F57C00',
  '#EF6C00',
  '#E65100',
  '#FFD180',
  '#FFAB40',
  '#FF9100',
  '#FF6D00',
  '#FF5722',
  '#FBE9E7',
  '#FFCCBC',
  '#FFAB91',
  '#FF8A65',
  '#FF7043',
  '#FF5722',
  '#F4511E',
  '#E64A19',
  '#D84315',
  '#BF360C',
  '#FF9E80',
  '#FF6E40',
  '#FF3D00',
  '#DD2C00',
  '#795548',
  '#EFEBE9',
  '#D7CCC8',
  '#BCAAA4',
  '#A1887F',
  '#8D6E63',
  '#795548',
  '#6D4C41',
  '#5D4037',
  '#4E342E',
  '#3E2723',
  '#9E9E9E',
  '#FAFAFA',
  '#F5F5F5',
  '#EEEEEE',
  '#E0E0E0',
  '#BDBDBD',
  '#9E9E9E',
  '#757575',
  '#616161',
  '#424242',
  '#212121',
  '#607D8B',
  '#ECEFF1',
  '#CFD8DC',
  '#B0BEC5',
  '#90A4AE',
  '#78909C',
  '#607D8B',
  '#546E7A',
  '#455A64',
  '#37474F',
  '#263238',
  '#000000',
  '#FFFFFF',
    ];

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

function randomnumber() {
document.getElementById("demos").innerHTML =
Math.floor(Math.random() * 10);
}

let startTime, interval;
function start() { startTime = Date.now(); interval = setInterval(() => document.getElementById("display").innerText = ((Date.now() - startTime) / 1000).toFixed(1), 100); }
function stop() { clearInterval(interval); }
function reset() { clearInterval(interval); document.getElementById("display").innerText = '0.0'; }

const texts = ["Hello", "World", "Text", "Rotator"];
let index = 0;
function rotateText() {
  document.getElementById("rotator").innerText = texts[index];
  index = (index + 1) % texts.length;
}
setInterval(rotateText, 1000); // Change text every second




document.getElementById('calculateBtn').addEventListener('click', function() {
    const dateInput = document.getElementById('dateInput').value;
    const date = new Date(dateInput);
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    if (!isNaN(date)) {
        const dayOfWeek = daysOfWeek[date.getDay()];
        document.getElementById('result').innerText = `The day of the week is: ${dayOfWeek}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid date.';
    }
});

document.getElementById('setAlarmBtn').addEventListener('click', function() {
    const alarmTime = parseInt(document.getElementById('alarmTime').value);
    
    if (isNaN(alarmTime) || alarmTime <= 0) {
        document.getElementById('status').innerText = 'Please enter a valid time in seconds.';
        return;
    }

    document.getElementById('status').innerText = `Alarm set for ${alarmTime} seconds.`;
    
    setTimeout(() => {
        alert('Time is up!');
        document.getElementById('status').innerText = 'Alarm has gone off!';
    }, alarmTime * 1000);
});


function alertbutton() {
alert("Hello Bro")
}


const quotes = [
    { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
    { quote: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { quote: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.", author: "Unknown" },
    { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { quote: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.", author: "Steve Jobs" }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-text').textContent = quotes[randomIndex].quote;
    document.getElementById('quote-author').textContent = "- " + quotes[randomIndex].author;
}

// Generate an initial quote on page load
generateQuote();

const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');

colorPicker.addEventListener('input', function() {
    const selectedColor = colorPicker.value;
    colorDisplay.style.backgroundColor = selectedColor;
});

const fontSizeRange = document.getElementById('fontSizeRange');
    const text = document.getElementById('text');

    fontSizeRange.addEventListener('input', function() {
        text.style.fontSize = fontSizeRange.value + 'px';
    });

    const textColorPicker = document.getElementById('textColorPicker');
    const colorfulText = document.getElementById('colorfulText');

    textColorPicker.addEventListener('input', function() {
        colorfulText.style.color = textColorPicker.value;
    });


    const passwordInput = document.getElementById('passwordInput');
    const strength = document.getElementById('strength');

    passwordInput.addEventListener('input', function() {
        const value = passwordInput.value;
        let strengthMessage;

        if (value.length > 8 && /[A-Z]/.test(value) && /[0-9]/.test(value)) {
            strengthMessage = 'Strong';
        } else if (value.length > 5) {
            strengthMessage = 'Medium';
        } else {
            strengthMessage = 'Weak';
        }

        strength.innerText = 'Password Strength: ' + strengthMessage;
    });

    const textArea = document.getElementById('textArea');
    const wordCount = document.getElementById('wordCount');

    textArea.addEventListener('input', function() {
        const words = textArea.value.trim().split(/\s+/).filter(word => word.length > 0);
        wordCount.innerText = 'Word Count: ' + words.length;
    });

    let timer;
    let seconds = 0;
    const laps = document.getElementById('laps');
    
    document.getElementById('startBtn').addEventListener('click', function() {
        clearInterval(timer);
        timer = setInterval(function() {
            seconds++;
            document.getElementById('time').innerText = seconds + ' seconds';
        }, 1000);
    });

    document.getElementById('stopBtn').addEventListener('click', function() {
        clearInterval(timer);
    });

    document.getElementById('resetBtn').addEventListener('click', function() {
        clearInterval(timer);
        seconds = 0;
        document.getElementById('time').innerText = '0 seconds';
        laps.innerHTML = '';
    });

    document.getElementById('lapBtn').addEventListener('click', function() {
        const li = document.createElement('li');
        li.innerText = 'Lap: ' + seconds + ' seconds';
        laps.appendChild(li);
    });

    document.getElementById('convertBtn').addEventListener('click', function() {
        const temp = parseFloat(document.getElementById('tempInput').value);
        const unit = document.getElementById('unit').value;
        let result;

        if (unit === 'C') {
            result = (temp * 9/5) + 32;
        } else {
            result = (temp - 32) * 5/9;
        }

        document.getElementById('tempResult').innerText = 'Converted Temperature: ' + result.toFixed(2);
    });

    document.getElementById('calculateBmiBtn').addEventListener('click', function() {
        const weight = parseFloat(document.getElementById('weightInput').value);
        const height = parseFloat(document.getElementById('heightInput').value) / 100;
        const bmi = weight / (height * height);

        document.getElementById('bmiResult').innerText = 'Your BMI: ' + bmi.toFixed(2);
    });

    document.getElementById('calculateAgeBtn').addEventListener('click', function() {
        const birthYear = parseInt(document.getElementById('birthYearInput').value);
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        document.getElementById('ageResult').innerText = 'Your Age: ' + age;
    });

    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    document.getElementById('greetingMessage').innerText = greeting;



    const textInput = document.getElementById('textInput');
    const charLimit = document.getElementById('charLimit');

    textInput.addEventListener('input', function() {
        const remaining = 100 - textInput.value.length;
        charLimit.innerText = 'Characters left: ' + remaining;
    });


    document.getElementById('imageInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            document.getElementById('imagePreview').src = e.target.result;
            document.getElementById('imagePreview').style.display = 'block';
        };
        
        reader.readAsDataURL(file);
    });