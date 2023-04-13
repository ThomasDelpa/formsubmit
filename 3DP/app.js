import * as THREE from 'three';

// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Add click event listeners to each navigation link
navLinks.forEach(link => {
	link.addEventListener('click', event => {
		// Prevent the default behavior of the link
		event.preventDefault();

		// Get the ID of the section to scroll to
		const sectionId = link.getAttribute('href');

		// Scroll to the section
		document.querySelector(sectionId).scrollIntoView({
			behavior: 'smooth'
		});
	});
});


// Get form input fields and submit button
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = document.querySelector("section#contact form input[type='submit']");

// Add event listener to submit button
submitButton.addEventListener("click", (event) => {
  // Prevent form from submitting
  event.preventDefault();
  
  // Get form values
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  
 // Send form data to server
 fetch("send-email.php", {
    method: "POST",
    body: JSON.stringify({ name, email, message }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if (response.ok) {
      alert("Your message has been sent!");
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    } else {
      throw new Error("There was a problem sending your message. Please try again later.");
    }
  })
  .catch(error => {
    alert(error.message);
  });

  // Send form data to server
  // Here, you would typically use an AJAX request to send the form data to a server-side script
  // For example, you could use the Fetch API or an XMLHttpRequest object to send the data
  
  // Clear form inputs
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";


  // Create a scene and a camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  // Create a renderer and add it to the webpage
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);
  
  // Load a 3D model
  const loader = new THREE.GLTFLoader();
  loader.load('path/to/model.gltf', function (gltf) {
    // Add the 3D model to the scene
    scene.add(gltf.scene);
  
    // Position the camera to view the 3D model
    camera.position.z = 5;
  });
  
  // Render the scene
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

});
