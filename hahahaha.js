function calculateTotal() {
    const movieSelect = document.getElementById('movie');
    const seatsInput = document.getElementById('seats');
    const discountInput = document.getElementById('discount');
    
    const moviePrice = parseInt(movieSelect.value);
    const numberOfSeats = parseInt(seatsInput.value);
    const discountCode = discountInput.value.trim();

    if (isNaN(moviePrice) || isNaN(numberOfSeats) || numberOfSeats <= 0) {
        alert('Please enter valid movie selection and number of seats.');
        return;
    }

    let totalCost = moviePrice * numberOfSeats;

    // Apply a simple discount for demonstration purposes
    if (discountCode === 'DISCOUNT10') {
        totalCost *= 0.9; // Apply 10% discount
    }

    const totalCostDiv = document.getElementById('totalCost');
    totalCostDiv.textContent = `Total Cost: ${totalCost.toFixed(2)} L.E`;
}
function toggleForm() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}
function login() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    // Here you can add code to handle login logic, such as sending a request to a server
    console.log("Login: Email - " + email + ", Password - " + password);
    // For simplicity, let's assume login is successful and show the booking form
    document.getElementById("bookingForm").style.display = "block";
}
function signup() {
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;
    // Here you can add code to handle signup logic, such as sending a request to a server
    console.log("Signup: Email - " + email + ", Password - " + password);
    // For simplicity, let's assume signup is successful and show the booking form
    document.getElementById("bookingForm").style.display = "block";
}
