// Visual Items
const changeMode = document.querySelector('.change-mode');
const lightActive = document.querySelector('.light-active');
const sunImage = document.getElementById('sun');
const moonImage = document.getElementById('moon');
const body = document.body;
const clearBtn = document.querySelector('.clear');
const calculateBtn = document.querySelector('.calculate');
const main = document.querySelector('.main');
const bmi = document.querySelector('.bmi');
const calories = document.querySelector('.calories');
const actionBtns = document.querySelector('.action-buttons');
const bmiBtn = document.querySelector('.bmi-btn-c');
const calBtn = document.querySelector('.cal-btn');

// Form Items
const ageInput = document.getElementById('age');
const genderInput = document.querySelector('input[name="gender"]:checked');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const activityInput = document.getElementById('activity');

// Load the saved theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        lightActive.classList.add('dark-active');
        moonImage.classList.add('active-img');
    }
}

// Toggle between light and dark mode
function toggleMode() {
    // Toggle dark mode class on the body
    body.classList.toggle('dark-mode');

    // Toggle between the two "active" states for the circles
    lightActive.classList.toggle('dark-active');
    // Toggle the 'active-img' class between sun and moon images
    sunImage.classList.toggle('active-img');
    moonImage.classList.toggle('active-img');

    // Save the theme preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Clear the fields and return to main page
function clear() {
    main.style.display = 'flex';
    bmi.style.display = 'none';
    calories.style.display = 'none';
    clearBtn.style.display = 'none';
    actionBtns.style.justifyContent = 'end';

    // Clear form inputs:
    ageInput.value = "";
    document.getElementsByName('gender').forEach(radio => {
        if (radio.checked) {
            radio.checked = false;
        }
    });
    heightInput.value = "";
    weightInput.value = "";
    activityInput.selectedIndex = "0";

}

function validate() {
    let radioSelected = false;
    if (ageInput.value == ""){
        alert('Age field is empty, please insert an age!');
        return false;
    }

    document.getElementsByName('gender').forEach(radio => {
        if (radio.checked) {
            radioSelected = true;
        }
    });
    if (!radioSelected){
        alert('Gender not selected, please select a gender!');
        return false;
    }

    if (heightInput.value == ""){
        alert('Height field is empty, please insert a height!');
        return false;
    }

    if (weightInput.value == ""){
        alert('Weight field is empty, please insert a weight!');
        return false;
    }

    if (activityInput.selectedIndex == "0") {
        alert('Activity not selected, please select one option!');
        return false;
    }

    if (!(typeof parseInt(ageInput.value) === 'number') || isNaN(parseInt(ageInput.value))){
        alert('Age has to be a valid whole number!');
        return false;
    }
    if (!(typeof parseInt(heightInput.value) === 'number') || isNaN(parseInt(heightInput.value))){
        alert('Height has to be a valid number!');
        return false;
    }
    if (!(typeof parseInt(weightInput.value) === 'number') || isNaN(parseInt(weightInput.value))){
        alert('Weight has to be a valid number!');
        return false;
    }
    return true;
}

// Calculate the BMI using the fields from form
function calculate() {

    if (validate()){
        main.style.display = 'none';
        bmi.style.display = 'flex';
        calories.style.display = 'none';
        clearBtn.style.display = 'block';
        actionBtns.style.justifyContent = 'space-between';
    }

}

function switchTab(tabType) {
    if (tabType === 'bmi') {
        bmi.style.display = 'flex';
        calories.style.display = 'none';
    } else {
        calories.style.display = 'flex';
        bmi.style.display = 'none';
    }
}


// Add event listener to change the mode on click
clearBtn.addEventListener('click', clear);
changeMode.addEventListener('click', toggleMode);
calculateBtn.addEventListener('click', calculate);
calBtn.addEventListener('click', () => switchTab('calories'));
bmiBtn.addEventListener('click', () => switchTab('bmi'));

main.style.display = 'flex';
bmi.style.display = 'none';
calories.style.display = 'none';
clearBtn.style.display = 'none';
actionBtns.style.justifyContent = 'end';
activityInput.selectedIndex = "0";

// Load the saved theme when the page loads
loadTheme();
