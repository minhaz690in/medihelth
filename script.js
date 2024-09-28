// Show welcome screen for 4 seconds, then hide it
setTimeout(() => {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
}, 4000); // Adjust the timing as necessary

document.getElementById("aboutButton").addEventListener("click", function() {
    toggleVisibility('aboutInfo');
});

document.getElementById("bmiButton").addEventListener("click", function() {
    toggleVisibility('bmiSection');
});

document.getElementById("dietButton").addEventListener("click", function() {
    toggleVisibility('dietSection');
});

document.getElementById("lungButton").addEventListener("click", function() {
    toggleVisibility('lungTestSection');
});

function toggleVisibility(sectionId) {
    const sections = ['aboutInfo', 'bmiSection', 'dietSection', 'lungTestSection'];
    sections.forEach(section => {
        document.getElementById(section).classList.add("hidden");
    });
    document.getElementById(sectionId).classList.toggle("hidden");
}

function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100; // converting cm to m
    if (weight && height) {
        const bmi = (weight / (height * height)).toFixed(2);
        let emoji = '';
        let tips = '';

        if (bmi < 18.5) {
            emoji = '🥺'; // Underweight
            tips = "You are underweight. It's important to eat a balanced diet and consult a healthcare provider.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            emoji = '😊'; // Normal weight
            tips = "Great job! Keep maintaining a balanced diet and regular exercise.";
        } else if (bmi >= 25 && bmi < 29.9) {
            emoji = '😐'; // Overweight
            tips = "You are overweight. Consider a balanced diet and regular exercise.";
        } else {
            emoji = '😢'; // Obesity
            tips = "You are in the obesity range. It's important to consult a healthcare provider for a suitable plan.";
        }

        document.getElementById("bmiResult").innerText = `Your BMI is: ${bmi}`;
        document.getElementById("bmiEmoji").innerText = emoji;
        document.getElementById("bmiTips").innerText = tips;
    } else {
        document.getElementById("bmiResult").innerText = "Please enter valid weight and height!";
        document.getElementById("bmiEmoji").innerText = '';
        document.getElementById("bmiTips").innerText = '';
    }
}

function addFood() {
    const foodItem = document.getElementById("foodItem").value;
    const calories = document.getElementById("calories").value;
    if (foodItem && calories) {
        const foodList = document.getElementById("foodList");
        const listItem = document.createElement("li");
        listItem.innerText = `${foodItem} - ${calories} calories`;
        foodList.appendChild(listItem);
        document.getElementById("foodItem").value = '';
        document.getElementById("calories").value = '';
    } else {
        alert("Please enter both food name and calories.");
    }
}

document.getElementById("startLungTest").addEventListener("click", function() {
    document.getElementById("lungGame").classList.remove("hidden");
    document.getElementById("lungInstructions").innerText = "Let's start the lung capacity test! Click 'Inhale' to begin.";
    document.getElementById("inhaleButton").classList.remove("hidden");
    document.getElementById("holdButton").classList.add("hidden");
    document.getElementById("exhaleButton").classList.add("hidden");
});

document.getElementById("inhaleButton").addEventListener("click", function() {
    document.getElementById("lungInstructions").innerText = "Inhale deeply for 5 seconds...";
    setTimeout(() => {
        document.getElementById("inhaleButton").classList.add("hidden");
        document.getElementById("holdButton").classList.remove("hidden");
    }, 5000);
});

document.getElementById("holdButton").addEventListener("click", function() {
    document.getElementById("lungInstructions").innerText = "Hold your breath for 5 seconds...";
    setTimeout(() => {
        document.getElementById("holdButton").classList.add("hidden");
        document.getElementById("exhaleButton").classList.remove("hidden");
    }, 5000);
});

document.getElementById("exhaleButton").addEventListener("click", function() {
    document.getElementById("lungInstructions").innerText = "Exhale slowly...";
    document.getElementById("lungHealthResult").innerText = "Lung capacity check completed!";
    document.getElementById("restartButton").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("lungGame").classList.add("hidden");
    }, 2000);
});

document.getElementById("restartButton").addEventListener("click", function() {
    document.getElementById("lungHealthResult").innerText = '';
    document.getElementById("restartButton").classList.add("hidden");
    document.getElementById("startLungTest").click();
});