// Comprehensive Interactive Course Data
const courseDatabase = {
    python: {
        title: "🐍 Python Programming Essentials",
        level: "Beginner to Intermediate | Duration: 15 Mins",
        description: "Python is a high-level, easy-to-learn programming language widely used in AI, Data Science, and Web Development.",
        keyTopics: [
            "Variables & Data Types (Integers, Strings, Lists, Dictionaries)",
            "Control Structures (if-else conditions, for loops, while loops)",
            "Functions & Modules (def keyword, parameters, return values)",
            "Object-Oriented Programming (Classes, Objects, Inheritance)",
            "Advanced Concepts (Decorators, Generators, Exception Handling)"
        ],
        codeExample: `# Sample Python Code Example
def greet_student(name, course):
    return f"Welcome {name} to Smart Education {course} Module!"

# Output
print(greet_student("Sowjanya", "Python"))`
    },
    ai: {
        title: "🤖 AI & Computer Vision Foundations",
        level: "Intermediate | Duration: 20 Mins",
        description: "Learn how machines see, analyze images/videos, and count objects in real-time using Artificial Intelligence.",
        keyTopics: [
            "Introduction to Artificial Intelligence & Neural Networks",
            "Computer Vision Basics with OpenCV",
            "Real-Time Object Detection (YOLO Algorithm)",
            "Line Management & Crowd Counting Analytics",
            "Automated Alerting Systems based on Computer Vision"
        ],
        codeExample: `# Conceptual Computer Vision Detection
import cv2

# Load pre-trained model for object/people detection
model = cv2.CascadeClassifier('haarcascade_fullbody.xml')
print("AI Model Loaded Successfully for Queue Monitoring!")`
    },
    webdev: {
        title: "🌐 Modern Web Development (HTML, CSS, JS)",
        level: "Beginner | Duration: 15 Mins",
        description: "Master the building blocks of the Web: HTML for structure, CSS for styling, and JavaScript for interactivity.",
        keyTopics: [
            "HTML5: Semantic Elements, Forms, Media, and Layouts",
            "CSS3: Flexbox, CSS Grid, Media Queries, and Animations",
            "JavaScript: DOM Manipulation, Event Listeners, and Functions",
            "Fetch API & Dynamic Content Loading without page refreshes",
            "Responsive Web Design for Mobile & Desktop Devices"
        ],
        codeExample: `// Dynamic DOM Update Example
document.getElementById("btn").addEventListener("click", () => {
    alert("Smart Education Web Development Module Active!");
});`
    },
    dsa: {
        title: "⚡ Data Structures & Algorithms (DSA)",
        level: "Intermediate | Duration: 25 Mins",
        description: "Data Structures help store and organize data efficiently, while Algorithms provide step-by-step solutions to problems.",
        keyTopics: [
            "Linear Structures: Arrays, Linked Lists, Stacks, and Queues",
            "Non-Linear Structures: Trees, Binary Search Trees, and Graphs",
            "Sorting Algorithms: Bubble Sort, Quick Sort, Merge Sort",
            "Searching Algorithms: Linear Search vs Binary Search",
            "Time & Space Complexity Analysis (Big O Notation)"
        ],
        codeExample: `# Binary Search Concept in Python
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: low = mid + 1
        else: high = mid - 1
    return -1`
    }
};

// Function to load full course content into the webpage
function loadCourse(courseKey, buttonElement) {
    const course = courseDatabase[courseKey];
    const contentArea = document.getElementById('course-content-area');

    // Remove active class from all buttons and add to clicked button
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (buttonElement) {
        buttonElement.classList.add('active');
    }

    if (course) {
        // Build Key Topics List Items
        let topicsHTML = "";
        course.keyTopics.forEach(topic => {
            topicsHTML += `<li>✔ ${topic}</li>`;
        });

        // Inject Full Content dynamically into the Page
        contentArea.innerHTML = `
            <h3>${course.title}</h3>
            <span class="course-meta">${course.level}</span>
            <p>${course.description}</p>
            
            <h4>📌 What You Will Learn in this Module:</h4>
            <ul>${topicsHTML}</ul>

            <h4>💻 Practical Code Snippet:</h4>
            <div class="code-block">${course.codeExample}</div>
        `;
    }
}

// Automatically load Python Course by default on page load
window.onload = function() {
    loadCourse('python', document.querySelector('.tab-btn.active'));
};

// Smart Line AI Queue Simulation Logic
function runQueueSimulation() {
    const peopleCountEl = document.getElementById('people-count');
    const waitTimeEl = document.getElementById('wait-time');
    const queueStatusEl = document.getElementById('queue-status');
    const aiRecEl = document.getElementById('ai-rec');

    let randomCount = Math.floor(Math.random() * 45) + 5; 
    let estimatedTime = Math.ceil(randomCount * 0.5);

    peopleCountEl.innerText = `${randomCount} Students`;
    waitTimeEl.innerText = `${estimatedTime} Mins`;

    if (randomCount > 30) {
        queueStatusEl.innerText = "Heavy Congestion";
        queueStatusEl.style.color = "#f87171";
        aiRecEl.innerText = "Alert: Open Lab Room 2 & Counter B";
        aiRecEl.style.color = "#f87171";
    } else if (randomCount > 15) {
        queueStatusEl.innerText = "Moderate Flow";
        queueStatusEl.style.color = "#fbbf24";
        aiRecEl.innerText = "Optimal Flow: Monitor Entrance";
        aiRecEl.style.color = "#fbbf24";
    } else {
        queueStatusEl.innerText = "Normal / Low";
        queueStatusEl.style.color = "#4ade80";
        aiRecEl.innerText = "Optimal Capacity";
        aiRecEl.style.color = "#38bdf8";
    }
}