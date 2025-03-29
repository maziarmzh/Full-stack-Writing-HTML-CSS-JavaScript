// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle Navigation Menu
    const navToggle = document.createElement('button');
    navToggle.innerHTML = '&#9776;'; // Hamburger icon
    navToggle.style.position = 'absolute';
    navToggle.style.top = '10px';
    navToggle.style.right = '10px';
    navToggle.style.backgroundColor = '#333';
    navToggle.style.color = '#fff';
    navToggle.style.border = 'none';
    navToggle.style.borderRadius = '5px';
    navToggle.style.padding = '10px';
    navToggle.style.cursor = 'pointer';
    navToggle.style.display = 'none'; // Initially hidden

    const nav = document.querySelector('nav');
    document.body.insertBefore(navToggle, nav);

    navToggle.addEventListener('click', toggleMenu);

    function toggleMenu() {
        const navList = document.querySelector('nav ul');
        if (navList.style.display === 'block') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'block';
        }
    }

    // Smooth Scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Responsive Navigation
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('nav ul').style.display = 'none';
            navToggle.style.display = 'block';
        } else {
            document.querySelector('nav ul').style.display = 'flex';
            navToggle.style.display = 'none';
        }
    });

    // Initial check for responsive navigation
    if (window.innerWidth <= 768) {
        document.querySelector('nav ul').style.display = 'none';
        navToggle.style.display = 'block';
    }

    // Lightbox for Project Images
    const projectImages = document.querySelectorAll('#projects article figure img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.display = 'none';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = '1000';

    const lightboxImage = document.createElement('img');
    lightboxImage.style.maxWidth = '90%';
    lightboxImage.style.maxHeight = '90%';
    lightbox.appendChild(lightboxImage);

    document.body.appendChild(lightbox);

    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImage.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Form Validation
    const form = document.querySelector('#contact form');
    const nameInput = document.querySelector('#contact input[name="name"]');
    const emailInput = document.querySelector('#contact input[name="email"]');
    const messageInput = document.querySelector('#contact textarea[name="message"]');
    const submitButton = document.querySelector('#contact button');

    form.addEventListener('submit', (e) => {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            alert('Name is required.');
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            alert('Email is required.');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            alert('Message is required.');
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        } else {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Real-time form validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    function validateName() {
        if (nameInput.value.trim() === '') {
            nameInput.style.borderColor = 'red';
        } else {
            nameInput.style.borderColor = '#ddd';
        }
    }

    function validateEmail() {
        if (emailInput.value.trim() === '' || !/\S+@\S+\.\S+/.test(emailInput.value)) {
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.borderColor = '#ddd';
        }
    }

    function validateMessage() {
        if (messageInput.value.trim() === '') {
            messageInput.style.borderColor = 'red';
        } else {
            messageInput.style.borderColor = '#ddd';
        }
    }
});