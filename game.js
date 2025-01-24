function showAlert() {
  alert("This project will be updated in the next update. Stay tuned!");
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

function showSection(sectionId) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.add('hidden'); // Hide all sections
            });
            document.getElementById(sectionId).classList.remove('hidden'); // Show the selected section

            // Manage history stack
            




            currentSection = sectionId; // Update current section
        }

// Function to show loading spinner
function showLoading() {
  document.getElementById('loading').style.display = 'flex';
}

// Function to hide loading spinner
function hideLoading() {
  document.getElementById('loading').style.display = 'none';
}

// Add event listeners to all buttons with the class 'loading-button'
document.querySelectorAll('.loading-button').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action
    showLoading();

    // Simulate a loading process (e.g., a delay before navigating)
    setTimeout(() => {
      hideLoading();
      // Navigate to the URL after the loading spinner is hidden
      window.location.href = this.onclick.toString().match(/'([^']+)'/)[1];
    }, 3000); // Adjust the duration as needed
  });
});
