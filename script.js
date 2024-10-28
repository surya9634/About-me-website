const projects = [
    {
        "title": "VidyaMitra – Empowering Education for All✨",
        "description": "Revolutionizing digital learning with the Kivy framework, VidyaMitra makes education engaging, accessible, and fun for students everywhere.",
        "features": [
            "Interactive, engaging platform for students.📚",
            "Accessible across devices for learning anywhere.🌐",
            "Supports multimedia content and interactive quizzes.🎮",
            "Welcomes contributors with ❤️"
        ]
    },
    {
        "title": "GyaanVichakshak – India's First Python-Based Search Engine🔍",
        "description": "Redefining web experiences, GyaanVichakshak integrates personalized search results with ad-blocking and TTS, offering users an immersive browsing experience.",
        "features": [
            "Personalized search results tailored to users.💻",
            "Ad-blocking for a clean, uninterrupted experience.🚫",
            "Text-to-speech (TTS) for accessible browsing.🗣️",
            "Seamless integration with other search engines.🌍"
        ]
    },
    {
        "title": "🚀 Project Title: Pashupatastra — Precision Rocket Fuel Synthesis Guide",
        "description": "Pashupatastra aims to synthesize a high-energy solid propellant using a precisely calculated oxidizing agent (potassium nitrate) and a sucrose-based fuel matrix. This project combines complex stoichiometric principles with high-energy density formulation for small rocket applications. Extreme caution, precision, and strict adherence to procedural details are essential.",
        "features": [
            "Educational Component: Provides comprehensive background information on the chemistry of solid propellants, focusing on the role of oxidizers and fuels.🚀",
            "User-Friendly Interface: Step-by-step instructions for each phase of the synthesis, ensuring clarity and ease of use for beginners."
        ]
    },
    {
        "title": "NyayaSahayak – Simplifying Legal Aid⚖️",
        "description": "Providing AI-powered legal assistance in multiple languages, NyayaSahayak breaks down barriers to accessing legal help through a user-friendly interface.",
        "features": [
            "Multilingual AI-powered legal assistance.🌐",
            "Easy-to-use interface for non-technical users.👥",
            "Fast and reliable legal information access.📜",
            "Privacy-focused with user data protection.🔒"
        ]
    },
    {
        "title": "Surya SmaranSanket – Smart Reminder System⏰",
        "description": "A beautifully intuitive reminder system using multi-threaded alerts and aesthetic notifications for perfect time management.",
        "features": [
            "Multi-threaded alert system for timely reminders.⏱️",
            "Customizable reminder notifications.📲",
            "User-friendly interface with visual appeal.🌈",
            "Efficient and lightweight for quick access.⚡"
        ]
    },
    {
        "title": "Surya JeevanVrittak – Automated Resume Builder📄",
        "description": "Building professional resumes effortlessly, Surya JeevanVrittak takes input data and delivers polished resumes in minutes.",
        "features": [
            "Automated and customizable resume templates.🖋️",
            "Supports various formats and layouts.📑",
            "Quick and easy data input for faster results.⌨️",
            "Professional designs tailored for all industries.🏢"
        ]
    },
    {
        "title": "Surya PatraVartak – Gesture-Based Scrolling System👋",
        "description": "Navigate the web hands-free with a futuristic hand-gesture scrolling system, powered by MediaPipe and OpenCV.",
        "features": [
            "Hands-free scrolling for web navigation.🌐",
            "Powered by MediaPipe and OpenCV for accuracy.🔍",
            "Supports multiple gestures for different actions.🎛️",
            "Smooth and responsive for an effortless experience.✨"
        ]
    },
    {
        "title": "Surya VaatavaranSuchak – Voice-Assisted Weather Reporter🌦️",
        "description": "Offering real-time weather updates with a voice assistant, making daily weather checks more accessible.",
        "features": [
            "Voice-activated for hands-free updates.🎤",
            "Real-time weather reporting and forecasting.🌤️",
            "Localized weather info based on user location.📍",
            "Easy-to-use interface for all age groups.👵👶"
        ]
    },
    {
        "title": "Surya NaariRakshak – Women’s Safety App🚨",
        "description": "Ensuring women’s safety with real-time SOS alerts and location tracking, Surya NaariRakshak provides instant assistance when needed most.",
        "features": [
            "Instant SOS alerts to emergency contacts.📲",
            "Real-time location tracking for safety.🗺️",
            "User-friendly interface with quick-access features.🔒",
            "Privacy-focused with secure data handling.🔐"
        ]
    },
    {
        "title": "NidraRakshak – Drowsiness Detection System😴",
        "description": "Enhancing driver safety by detecting fatigue in real-time through facial landmarks, ensuring a safe journey every time.",
        "features": [
            "Real-time drowsiness detection for safety.🚗",
            "Facial landmark analysis for accuracy.👀",
            "Audio and visual alerts to prevent accidents.📢",
            "Easy integration with vehicle systems.🔌"
        ]
    },
    {
        "title": "Brahmostra – The Developer’s Weapon⚔️",
        "description": "An all-in-one toolkit for developers, automating code generation, file management, and AI integration to streamline workflows.",
        "features": [
            "Code generation for faster development.💻",
            "File management tools for organization.📁",
            "AI integrations for enhanced capabilities.🤖",
            "User-friendly interface for all experience levels.👩‍💻"
        ]
    },
    {
        "title": "Dronacharya – The Ultimate Educational Assistant📘",
        "description": "A holistic guide for students, providing academic support, mentorship, and mental wellness tools, inspired by traditional Indian philosophies.",
        "features": [
            "Academic support with a focus on holistic learning.📚",
            "Personalized mentorship for individual growth.🌱",
            "Mental wellness tools for balanced living.💆",
            "Inspired by traditional philosophies for a unique approach.🕉️"
        ]
    },
    {
        "title": "Surya VaaniMitra – Your Hindi Voice Assistant🗣️",
        "description": "An AI-powered Hindi voice assistant offering seamless interaction across various domains, bringing technology closer to home.",
        "features": [
            "Voice assistant capabilities in Hindi.🇮🇳",
            "Seamless interaction across multiple domains.🌐",
            "Personalized responses tailored to user preferences.💬",
            "Accessible design for users of all ages.👵👶"
        ]
    },
    {
        "title": "TwakRakshak – AI-Powered Skin Cancer Detection🩺",
        "description": "Real-time skin cancer detection using advanced AI models, ensuring health diagnostics are faster and more accurate.",
        "features": [
            "AI-based detection of skin abnormalities.📊",
            "Real-time analysis for quick results.⏱️",
            "User-friendly design for easy use.📱",
            "Supports various skin types for accuracy.💯"
        ]
    },
    {
        "title": "ChitraShodhak – AI Image Editor🖌️",
        "description": "A personal image editing toolkit offering everything from background removal to cartoon effects and pencil sketches.",
        "features": [
            "Background removal for professional editing.🖼️",
            "Cartoon and sketch effects for creative flair.🎨",
            "Easy-to-use interface for all skill levels.🌟",
            "Real-time editing with AI-based enhancements.⚡"
        ]
    },
    {
        "title": "Vaidyanath – Voice-Activated Ayurvedic Medical Assistant🌿",
        "description": "Blending modern and ancient medicine, Vaidyanath provides health advice with a voice-activated Ayurvedic experience.",
        "features": [
            "Voice-activated Ayurvedic health advice.🗣️",
            "Personalized remedies based on user symptoms.🌿",
            "Blend of traditional and modern knowledge.🧘",
            "Accessible in multiple languages for inclusivity.🗣️"
        ]
    },
    {
        "title": "Rudra – The Humanoid Robot🤖",
        "description": "A humanoid robot designed to mimic human actions, from walking to conversing. Rudra is a step toward creating human-like AI-driven robots.",
        "features": [
            "Realistic human-like movements and gestures.👣",
            "Conversational abilities for interaction.💬",
            "AI-driven with advanced sensors.🔍",
            "Aims to bridge human-robot interaction.🧩"
        ]
    }
];

let currentProject = 0;

function updateProject() {
    const projectContainer = document.getElementById("project-container");
    const { title, description, features } = projects[currentProject];

    // Hide container briefly for smoother transition
    projectContainer.classList.add("hidden");

    setTimeout(() => {
        document.getElementById("project-title").textContent = title;
        document.getElementById("project-description").textContent = description;

        const featureList = document.getElementById("project-features");
        featureList.innerHTML = '';
        features.forEach(feature => {
            const li = document.createElement("li");
            li.textContent = feature;
            featureList.appendChild(li);
        });

        projectContainer.classList.remove("hidden");
    }, 300);
}

document.addEventListener("DOMContentLoaded", updateProject);

function toggleAboutMe() {
    const aboutContent = document.querySelector('.about-content');
    const readMoreButton = document.getElementById('read-more-pdf');

    aboutContent.classList.toggle('visible');
    if (aboutContent.classList.contains('visible')) {
        readMoreButton.classList.remove('hidden'); // Show the 'Read More (PDF)' button
    }
}

function showPDF() {
    const pdfViewer = document.getElementById('pdf-viewer');
    pdfViewer.classList.toggle('hidden'); // Toggle visibility of PDF viewer
}

function updateProject() {
    const projectContainer = document.getElementById("project-container");
    const { title, description, features } = projects[currentProject];

    projectContainer.classList.add("hidden");

    setTimeout(() => {
        document.getElementById("project-title").textContent = title;
        document.getElementById("project-description").textContent = description;

        const featureList = document.getElementById("project-features");
        featureList.innerHTML = '';
        features.forEach(feature => {
            const li = document.createElement("li");
            li.textContent = feature;
            featureList.appendChild(li);
        });

        projectContainer.classList.remove("hidden");
    }, 400);
}

function nextProject() {
    currentProject = (currentProject + 1) % projects.length;
    updateProject();
}

function prevProject() {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    updateProject();
}


// Initialize the first project
document.addEventListener("DOMContentLoaded", updateProject);