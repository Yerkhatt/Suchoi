


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



document.addEventListener("DOMContentLoaded", function () {
    
    
    const linksToMonitor = document.querySelectorAll("a.info");

    // Define data for different link IDs, including image URLs
    const linkData = {
        link_SU30: {
            leftText: "Left Text for Link A",
            imageText: "SU30",
            rightText: "Right Text for Link A",
            imageUrl: "img/Sukhoi-Su-30-warplane-sky.jpg"
        },
        link_SU34: {
            leftText: "Left Text for Link B",
            imageText: "Text Section for Link B",
            rightText: "Right Text for Link B",
            imageUrl: "linkB-image.jpg"
        }
        // Add more data for other links as needed
    };

    var iframe = document.getElementById("externalPage");
    var iframeDocument = iframe.contentDocument; // Access the content of the iframe
    linksToMonitor.forEach((link) => {
        link.addEventListener("click", function (event) {
            const linkId = this.id;

            // Check if the clicked link ID exists in linkData
            if (linkData[linkId]) {
                const data = linkData[linkId];

                // Update the content and image based on the link data
                document.getElementById("leftText").textContent = data.leftText;
                document.getElementById("imageText").innerHTML = `<h3>${data.imageText}</h3><p>Your text goes here.</p>`;
                document.getElementById("rightText").textContent = data.rightText;

                // Change the image source
                document.getElementById("topImage").src = data.imageUrl;
            } else {
                // Handle cases where the link ID is not recognized
                alert("Link ID not recognized");
            }
        });
    });
});


const info_links = document.querySelectorAll('.info');

info_links.forEach(item => {
  item.addEventListener('mouseover', (event) => {
    // highlight the mouseover target
    event.target.style.color = "orange";


  });
});

info_links.forEach(item => {
    item.addEventListener('mouseout', (event) => {
      // highlight the mouseover target
      event.target.style.color = "black";
  

    });
  });



// Get a reference to the button element
var button = document.getElementById("about_us_wiki");

// Add a "mouseover" event listener to change the button's style on hover
button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "#5edd62"; // Change background color on hover
    button.style.color = "#000"; // Change text color on hover
});

// Add a "mouseout" event listener to reset the button's style when the mouse leaves
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "#3498db"; // Reset background color
    button.style.color = "#fff"; // Reset text color
});


document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("about_us_wiki");

    // Function to animate the button on click
    function animateButton() {
        button.style.transform = "scale(1.1)"; // Scale the button up
        setTimeout(function() {
            button.style.transform = "scale(1)"; // Reset the scale
        }, 200); // Delay for 200 milliseconds
    }

    // Add a click event listener to trigger the animation
    button.addEventListener("click", animateButton);
});


const soundBT = document.getElementById('waegewg');
const audio = new Audio('sound/sound.mp3');

soundBT.addEventListener('click', () => {
  audio.play();
  button.style.backgroundColor = 'lightgreen';
});


// Get the modal element and the buttons that open and close it
var modal = document.getElementById('myModal');
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Event listeners for the open and close buttons
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Close the modal if the user clicks outside of it
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Close the modal if the user presses the Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Scroll to top button
var scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Scroll to top function
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


document.addEventListener('DOMContentLoaded', function () {
  showStep(1);
});

function showStep(stepNumber) {
  var formSteps = document.querySelectorAll('.form-step');
  
  formSteps.forEach(function (step) {
    step.classList.remove('active');
  });

  var currentStep = document.querySelector('.form-step[data-step="' + stepNumber + '"]');
  currentStep.classList.add('active');
}

function nextStep(currentStep) {
  var nextStep = currentStep + 1;
  showStep(nextStep);
}

function prevStep(currentStep) {
  var prevStep = currentStep - 1;
  showStep(prevStep);
}