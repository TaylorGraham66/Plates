
let currentFoodIndex = 1;
const totalFoods = 3;
let loggedIn = false;




// Function to remove a liked card (existing)
function removeLike(postId) {
    // Your existing code for removing a liked card...
}




// Function for the login button
function login() {
    window.location.href = "login.html";
}


// Function for the search button
function search() {
  const query = document.getElementById("searchInput").value;
  if (query.toLowerCase() === "berlin, germany") {
    window.location.href = "merrygoround.html"; // Redirect to the new page
  } else {
    alert("Please wait for more places to be added");
  }
}


function updateCarousel() {
    // Assuming you're using a library like Bootstrap or Owl Carousel,
    // you may need to call a method to refresh or reinitialize the carousel.
    // For example:
    $('.your-carousel-class').trigger('refresh'); // Replace with actual carousel refresh method
}



function toggleText(cardIndex) {
    const hiddenTexts = document.querySelectorAll('.hidden-text');
    const button = document.querySelector(`.buttonColor[onclick="toggleText(${cardIndex})"]`);
    const hiddenText = hiddenTexts[cardIndex - 1];

    // Toggle the current card's text
    hiddenText.classList.toggle('show');
    hiddenText.style.maxHeight = hiddenText.classList.contains('show') ? '100px' : '0';

    // Update button text
    button.textContent = hiddenText.classList.contains('show') ? 'Show Less' : 'Show More';
}

function nextFood() {
    const foodCards = document.querySelectorAll('.food-card');
    foodCards[currentFoodIndex - 1].classList.remove('active');

    currentFoodIndex = (currentFoodIndex % foodCards.length) + 1; // Loop back to the first card
    foodCards[currentFoodIndex - 1].classList.add('active');

    // Reset all hidden texts and button text when switching cards
    resetTextStates();
}

// Function to display the previous food item
function prevFood() {
    const foodCards = document.querySelectorAll('.food-card');
    foodCards[currentFoodIndex - 1].classList.remove("active");
    
    currentFoodIndex = (currentFoodIndex - 2 + totalFoods) % totalFoods + 1; // Wrap around using modulus
    foodCards[currentFoodIndex - 1].classList.add("active");

    // Reset all hidden texts and button text when switching cards
    resetTextStates();
}

function resetTextStates() {
    const hiddenTexts = document.querySelectorAll('.hidden-text');
    const buttons = document.querySelectorAll('.buttonColor');

    hiddenTexts.forEach(text => {
        text.classList.remove('show');
        text.style.maxHeight = '0'; // Reset height
    });

    buttons.forEach(button => {
        button.textContent = 'show more...'; // Reset button text
    });
}


// Function to handle keydown events
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextFood(); // Move to the next food option
    } else if (event.key === 'ArrowLeft') {
        prevFood(); // Move to the previous food option
    }
});



function showReviews(title) {
    const reviewsBox = document.getElementById('reviewsBox');
    const reviewsTitle = reviewsBox.querySelector('h3');
    reviewsTitle.textContent = title; // Set the title of the reviews box
    reviewsBox.classList.remove('hidden'); // Show the reviews box
}

function closeReviews() {
    const reviewsBox = document.getElementById('reviewsBox');
    reviewsBox.classList.add('hidden'); // Hide the reviews box
}

// Optional: If you want to ensure it closes when clicking anywhere outside of it
window.onclick = function(event) {
    const reviewsBox = document.getElementById('reviewsBox');
    if (event.target === reviewsBox) {
        closeReviews();
    }
}

const distanceSlider = document.getElementById('distanceSlider');
const sliderValueDisplay = document.getElementById('sliderValue');



 

// Initialize Firebase

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBif_Hfb_lzXzgEsCXcSJ_EusHM_YgQZQc",
    authDomain: "plates-96005.firebaseapp.com",
    projectId: "plates-96005",
    storageBucket: "plates-96005.appspot.com",
    messagingSenderId: "259993904222",
    appId: "1:259993904222:web:59b08eca98aea6bb7080cf",
    measurementId: "G-ZWRHZTZX7G"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn')
const signOutBtn = document.getElementById('signOutBtn')

const userDetails = document.getElementById('userDetails')


signInBtn.onclick = () => signInWithPopup(auth, provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        console.log("user: ", user);
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p></p>`; // Corrected line
    } else {
        // not signed in 
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';  
    }
});


function home() {
    window.location.href = "index.html";
}


// Moath adding lines of code








let likedCards = JSON.parse(localStorage.getItem('likedCards')) || [];

// Function to handle likes
function hitLike(postId) {
    // Check if the card is already liked
    if (!likedCards.includes(postId)) {
        likedCards.push(postId);
        localStorage.setItem('likedCards', JSON.stringify(likedCards));
        alert(`You liked card ${postId}`);
    } else {
        alert(`You already liked card ${postId}`);
    }
}



function goToLikes() {
    const likesBox = document.getElementById("likesBox");
    likesBox.classList.remove("hide");
    likesBox.classList.add("show");
}

function closeLikes() {
    const likesBox = document.getElementById("likesBox");
    likesBox.classList.remove("show");
    likesBox.classList.add("hide");
}


function toggleColor() {
    const button = document.querySelector('.overlay-text',);
    button.classList.toggle('red'); // Toggle the 'red' class
}


