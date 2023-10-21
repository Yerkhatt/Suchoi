// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const li = document.createElement("li");
        li.innerHTML = taskText + '<button class="delete" onclick="deleteTask(this)">Delete</button><button class="complete" onclick="completeTask(this)">Complete</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Function to delete a task
function deleteTask(button) {
    const taskList = document.getElementById("task-list");
    const li = button.parentElement;
    taskList.removeChild(li);
}

// Function to mark a task as complete
function completeTask(button) {
    const li = button.parentElement;
    li.classList.toggle("completed");
}

// Enter key to add a task
document.getElementById("task").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const successMessage = document.getElementById("success-message");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let valid = true;

    // Validate Name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Invalid email address";
        valid = false;
    }

    // Validate Password
    if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    }

    if (valid) {
        // Form is valid, you can submit it or perform further actions.
        successMessage.textContent = "Form submitted successfully!";
    }
}




function handleButtonClick() {
    // Your button click action here
    alert('Button clicked!');
}

function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
}

function toggleAccordion(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === 'block' ? 'none' : 'block';
}



// alert
function showAlert() {
    window.alert("This is a simple alert!");
}
//toast notification
function showToast() {
    const toast = document.getElementById("toast");
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 3000); // Display for 3 seconds
}

//model diallog
function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}



