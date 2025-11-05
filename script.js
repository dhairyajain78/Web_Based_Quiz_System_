// =================================================================
// 1. GLOBAL CONSTANTS & STORAGE UTILITIES
// =================================================================
const USERS_KEY = 'quiz_users';
const QUIZZES_KEY = 'quiz_quizzes';
const RESULTS_KEY = 'quiz_results';
const REVIEWS_KEY = 'quiz_reviews'; 
const PLATFORM_REVIEWS_KEY = 'platform_reviews'; // NEW KEY

/** Retrieves data from localStorage, or returns an empty array. */
function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

/** Saves data to localStorage. */
function setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getUsers() { return getData(USERS_KEY); }
function setUsers(users) { setData(USERS_KEY, users); }

function getQuizzes() { return getData(QUIZZES_KEY); }
function setQuizzes(quizzes) { setData(QUIZZES_KEY, quizzes); }

function getResults() { return getData(RESULTS_KEY); }
function setResults(results) { setData(RESULTS_KEY, results); }

function getReviews() { return getData(REVIEWS_KEY); }
function setReviews(reviews) { setData(REVIEWS_KEY, reviews); }

function getPlatformReviews() { return getData(PLATFORM_REVIEWS_KEY); } 
function setPlatformReviews(reviews) { setData(PLATFORM_REVIEWS_KEY, reviews); } 

const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

// Initialize with 12 specific quiz subjects, each containing 10 questions.
if (getQuizzes().length === 0) {
    setQuizzes([
        { 
            id: Date.now() + 1, 
            title: "C", 
            questions: [
                { q: "Q1. What is a pointer?", options: ["Variable", "Memory Address", "Function"], answer: "Memory Address" },
                { q: "Q2. Which function is used to dynamically allocate memory in C?", options: ["malloc()", "allocate()", "new()"], answer: "malloc()" },
                { q: "Q3. Which of these is a valid C data type?", options: ["string", "bool", "long double"], answer: "long double" },
                { q: "Q4. What is the purpose of the 'break' statement?", options: ["Exit the program", "Exit a loop or switch", "Skip the next iteration"], answer: "Exit a loop or switch" },
                { q: "Q5. What does 'scanf()' return on successful execution?", options: ["The number of items successfully read", "The input value", "0"], answer: "The number of items successfully read" },
                { q: "Q6. In C, array indices start from which number?", options: ["1", "0", "2"], answer: "0" },
                { q: "Q7. What is the size of an int (typically) in a 32-bit system?", options: ["1 byte", "2 bytes", "4 bytes"], answer: "4 bytes" },
                { q: "Q8. The 'main' function is:", options: ["Optional", "Mandatory", "Used only for libraries"], answer: "Mandatory" },
                { q: "Q9. Which operator is used to get the address of a variable?", options: ["*", "&", "#"], answer: "&" },
                { q: "Q10. C language was developed by:", options: ["Bjarne Stroustrup", "Dennis Ritchie", "Guido van Rossum"], answer: "Dennis Ritchie" }
            ] 
        },
        { 
            id: Date.now() + 2, 
            title: "C++", 
            questions: [
                { q: "Q1. What is an object?", options: ["Variable", "Instance of a class", "Keyword"], answer: "Instance of a class" },
                { q: "Q2. Which header is used for input/output operations?", options: ["iostream", "stdio.h", "math.h"], answer: "iostream" },
                { q: "Q3. The 'new' operator is used for:", options: ["Conditional logic", "Dynamic memory allocation", "File creation"], answer: "Dynamic memory allocation" },
                { q: "Q4. What is a friend function in C++?", options: ["A function that belongs to all classes", "A non-member function that can access private members", "A function used for social networking"], answer: "A non-member function that can access private members" },
                { q: "Q5. C++ supports which type of polymorphism?", options: ["Run-time only", "Compile-time only", "Both Compile-time and Run-time"], answer: "Both Compile-time and Run-time" },
                { q: "Q6. What is encapsulation?", options: ["Hiding data", "Binding data and functions into a single unit", "Creating multiple methods with the same name"], answer: "Binding data and functions into a single unit" },
                { q: "Q7. Which destructor is automatically called when the object is destroyed?", options: ["Explicit", "Virtual", "Implicit"], answer: "Implicit" },
                { q: "Q8. The keyword 'this' refers to:", options: ["The current class", "The current object", "The base class"], answer: "The current object" },
                { q: "Q9. What is an abstract class?", options: ["A class with only abstract methods", "A class that cannot be instantiated", "A class used for file handling"], answer: "A class that cannot be instantiated" },
                { q: "Q10. Which access specifier allows access to derived classes?", options: ["private", "public", "protected"], answer: "protected" }
            ] 
        },
        { 
            id: Date.now() + 3, 
            title: "Python", 
            questions: [
                { q: "Q1. What is a tuple?", options: ["Mutable list", "Immutable list", "Dictionary"], answer: "Immutable list" },
                { q: "Q2. Which command is used to start the Python interactive shell?", options: ["run python", "python", "py shell"], answer: "python" },
                { q: "Q3. Which data structure is ordered and mutable?", options: ["Tuple", "Set", "List"], answer: "List" },
                { q: "Q4. Which keyword is used to define a function?", options: ["func", "define", "def"], answer: "def" },
                { q: "Q5. Python is an example of what type of language?", options: ["Compiled", "Interpreted", "Assembly"], answer: "Interpreted" },
                { q: "Q6. What is the output of 'print(2 ** 3)'?", options: ["6", "8", "9"], answer: "8" },
                { q: "Q7. What is slicing in Python?", options: ["Cutting strings", "Extracting a section of a sequence", "Removing elements"], answer: "Extracting a section of a sequence" },
                { q: "Q8. Which module is used for random number generation?", options: ["math", "sys", "random"], answer: "random" },
                { q: "Q9. What is a dictionary's primary characteristic?", options: ["Ordered elements", "Key-Value pairs", "Mutable sequence"], answer: "Key-Value pairs" },
                { q: "Q10. What is the purpose of the 'pass' statement?", options: ["To skip a function", "A null operation (a placeholder)", "To terminate a loop"], answer: "A null operation (a placeholder)" }
            ] 
        },
        { 
            id: Date.now() + 4, 
            title: "Java", 
            questions: [
                { q: "Q1. What is the JVM?", options: ["Java Virtual Machine", "Java Very Modern", "Join Video Meeting"], answer: "Java Virtual Machine" },
                { q: "Q2. Which is the superclass of all classes in Java?", options: ["Main", "System", "Object"], answer: "Object" },
                { q: "Q3. Which keyword prevents method overriding?", options: ["static", "final", "abstract"], answer: "final" },
                { q: "Q4. How do you declare an array in Java?", options: ["array name[]", "type[] name", "arr(type)"], answer: "type[] name" },
                { q: "Q5. Which concept allows a class to inherit properties from another class?", options: ["Encapsulation", "Inheritance", "Abstraction"], answer: "Inheritance" },
                { q: "Q6. Java is compiled into which format?", options: ["Machine Code", "Bytecode", "Source Code"], answer: "Bytecode" },
                { q: "Q7. What is the default value of a local variable in Java?", options: ["0", "null", "Undefined (must be initialized)"], answer: "Undefined (must be initialized)" },
                { q: "Q8. What does the 'static' keyword imply for a method?", options: ["The method cannot be overridden", "The method belongs to the class, not an object", "The method runs faster"], answer: "The method belongs to the class, not an object" },
                { q: "Q9. Which exception is mandatory to handle (checked exception)?", options: ["NullPointerException", "IOException", "ArrayIndexOutOfBoundsException"], answer: "IOException" },
                { q: "Q10. Which access modifier restricts access within the package and to subclasses?", options: ["private", "default", "protected"], answer: "protected" }
            ] 
        },
        { 
            id: Date.now() + 5, 
            title: "OOPs", 
            questions: [
                { q: "Q1. What is Polymorphism?", options: ["Many forms", "Inheritance", "Data hiding"], answer: "Many forms" },
                { q: "Q2. The property of 'hiding' internal details and showing only essential information is:", options: ["Inheritance", "Abstraction", "Encapsulation"], answer: "Abstraction" },
                { q: "Q3. Which pillar of OOP is 'Method Overloading' an example of?", options: ["Inheritance", "Polymorphism (Compile-time)", "Encapsulation"], answer: "Polymorphism (Compile-time)" },
                { q: "Q4. A template used to create objects is called a:", options: ["Function", "Class", "Module"], answer: "Class" },
                { q: "Q5. Which mechanism allows for code reusability?", options: ["Abstraction", "Inheritance", "Polymorphism"], answer: "Inheritance" },
                { q: "Q6. When an object of one class contains an object of another class, this is called:", options: ["Composition (Has-a relationship)", "Inheritance (Is-a relationship)", "Association"], answer: "Composition (Has-a relationship)" },
                { q: "Q7. Overriding a method is an example of:", options: ["Compile-time polymorphism", "Run-time polymorphism", "Data abstraction"], answer: "Run-time polymorphism" },
                { q: "Q8. Data and the methods that operate on that data are bound together in a single unit using:", options: ["Inheritance", "Encapsulation", "Abstraction"], answer: "Encapsulation" },
                { q: "Q9. Which is NOT a principle of OOP?", options: ["Encapsulation", "Decomposition", "Inheritance"], answer: "Decomposition" },
                { q: "Q10. An abstract method is one without a:", options: ["Name", "Return type", "Body (implementation)"], answer: "Body (implementation)" }
            ] 
        },
        { 
            id: Date.now() + 6, 
            title: "DSA", 
            questions: [
                { q: "Q1. What is a Stack?", options: ["FIFO structure", "LIFO structure", "Random access"], answer: "LIFO structure" },
                { q: "Q2. Which data structure is suitable for breadth-first search (BFS)?", options: ["Stack", "Queue", "Linked List"], answer: "Queue" },
                { q: "Q3. The time complexity for accessing an element in an array is typically:", options: ["O(n)", "O(log n)", "O(1)"], answer: "O(1)" },
                { q: "Q4. Which sorting algorithm has the worst-case complexity of O(n²)?", options: ["Merge Sort", "Quick Sort (Worst Case)", "Heap Sort"], answer: "Quick Sort (Worst Case)" },
                { q: "Q5. A collection of nodes connected by edges is called a:", options: ["Tree", "Graph", "Heap"], answer: "Graph" },
                { q: "Q6. Binary Search requires the data to be:", options: ["Unsorted", "Sorted", "Randomly arranged"], answer: "Sorted" },
                { q: "Q7. In a min-heap, the smallest element is always at the:", options: ["Last node", "Root node", "Leaf node"], answer: "Root node" },
                { q: "Q8. Which memory allocation technique is typically used for Stacks and Queues?", options: ["Static memory allocation", "Dynamic memory allocation", "Both static and dynamic"], answer: "Both static and dynamic" },
                { q: "Q9. What is a doubly linked list?", options: ["A list with two pointers to the head and tail", "A list where each node has pointers to the next and previous node", "A list that links back to the head"], answer: "A list where each node has pointers to the next and previous node" },
                { q: "Q10. What is the complexity of inserting a node at the beginning of a singly linked list?", options: ["O(n)", "O(log n)", "O(1)"], answer: "O(1)" }
            ] 
        },
        { 
            id: Date.now() + 7, 
            title: "SQL", 
            questions: [
                { q: "Q1. Which command retrieves data?", options: ["INSERT", "UPDATE", "SELECT"], answer: "SELECT" },
                { q: "Q2. Which clause is used to filter records?", options: ["FILTER", "WHERE", "HAVING"], answer: "WHERE" },
                { q: "Q3. Which constraint ensures all values in a column are different?", options: ["NOT NULL", "PRIMARY KEY", "UNIQUE"], answer: "UNIQUE" },
                { q: "Q4. Which SQL command is a DDL command?", options: ["SELECT", "INSERT", "CREATE"], answer: "CREATE" },
                { q: "Q5. What does the acronym SQL stand for?", options: ["Sequential Query Language", "Structured Query Language", "Standard Question Language"], answer: "Structured Query Language" },
                { q: "Q6. Which JOIN returns records that have matching values in both tables?", options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN"], answer: "INNER JOIN" },
                { q: "Q7. The 'GROUP BY' clause is used to:", options: ["Sort the results", "Combine rows with same values into a summary row", "Delete duplicate rows"], answer: "Combine rows with same values into a summary row" },
                { q: "Q8. Which command is used to delete all rows from a table without deleting the table itself?", options: ["DROP TABLE", "DELETE FROM", "TRUNCATE TABLE"], answer: "TRUNCATE TABLE" },
                { q: "Q9. What is a primary key?", options: ["A column that accepts NULL values", "A unique identifier for each record in a table", "A foreign key"], answer: "A unique identifier for each record in a table" },
                { q: "Q10. Which aggregate function returns the total number of rows?", options: ["SUM()", "AVG()", "COUNT()"], answer: "COUNT()" }
            ] 
        },
        { 
            id: Date.now() + 8, 
            title: "HTML", 
            questions: [
                { q: "Q1. What is the purpose of the <body> tag?", options: ["Header content", "Visible page content", "Metadata"], answer: "Visible page content" },
                { q: "Q2. Which tag is used to define an image?", options: ["<pic>", "<img>", "<image>"], answer: "<img>" },
                { q: "Q3. Which element is used to define a link?", options: ["<a>", "<link>", "<hyper>"], answer: "<a>" },
                { q: "Q4. What does HTML stand for?", options: ["Hyper Tool Markup Language", "Hyper Text Markup Language", "Home Text Markup Language"], answer: "Hyper Text Markup Language" },
                { q: "Q5. Which tag defines an ordered list?", options: ["<ul>", "<ol>", "<list>"], answer: "<ol>" },
                { q: "Q6. Which is the correct closing tag for a paragraph?", options: ["</p>", "</paragraph>", "<end-p>"], answer: "</p>" },
                { q: "Q7. Which attribute is used to specify a unique ID for an HTML element?", options: ["class", "name", "id"], answer: "id" },
                { q: "Q8. The <head> element contains:", options: ["The main content of the document", "Metadata about the HTML document", "Visible headings"], answer: "Metadata about the HTML document" },
                { q: "Q9. Which HTML5 element is used to specify a footer for a document or section?", options: ["<bottom>", "<footer>", "<foot>"], answer: "<footer>" },
                { q: "Q10. The correct way to comment out code in HTML is:", options: ["// comment", "/* comment */", ""], answer: "" }
            ] 
        },
        { 
            id: Date.now() + 9, 
            title: "CSS", 
            questions: [
                { q: "Q1. What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Syntax"], answer: "Cascading Style Sheets" },
                { q: "Q2. Which property is used to change the background color?", options: ["color", "bgcolor", "background-color"], answer: "background-color" },
                { q: "Q3. Which selector targets all elements?", options: ["#all", "*", "element"], answer: "*" },
                { q: "Q4. Which property is used to control the spacing between element content and its border?", options: ["margin", "padding", "spacing"], answer: "padding" },
                { q: "Q5. The default value of the 'position' property is:", options: ["relative", "absolute", "static"], answer: "static" },
                { q: "Q6. How do you select an element with the class 'header'?", options: ["#header", ".header", "header"], answer: ".header" },
                { q: "Q7. Which measurement unit is relative to the font-size of the element?", options: ["px", "em", "cm"], answer: "em" },
                { q: "Q8. What is the correct CSS syntax for making all <h1> elements red?", options: ["h1 {color: red;}", "h1: color=red", "<h1 color='red'>"], answer: "h1 {color: red;}" },
                { q: "Q9. The order of precedence for CSS is (highest first):", options: ["External, Internal, Inline", "Inline, Internal, External", "External, Inline, Internal"], answer: "Inline, Internal, External" },
                { q: "Q10. The 'box-sizing: border-box;' property includes padding and border in which dimension?", options: ["width/height", "margin", "padding only"], answer: "width/height" }
            ] 
        },
        { 
            id: Date.now() + 10, 
            title: "Physics", 
            questions: [
                { q: "Q1. What is Newton's first law?", options: ["Law of Inertia", "F=ma", "Action-reaction"], answer: "Law of Inertia" },
                { q: "Q2. The unit of electric current is:", options: ["Volt", "Ohm", "Ampere"], answer: "Ampere" },
                { q: "Q3. The measure of the hotness or coldness of a body is:", options: ["Energy", "Temperature", "Heat"], answer: "Temperature" },
                { q: "Q4. Which force holds the nucleus of an atom together?", options: ["Gravitational force", "Weak nuclear force", "Strong nuclear force"], answer: "Strong nuclear force" },
                { q: "Q5. What is the speed of light in a vacuum (approximately)?", options: ["3 x 10⁸ m/s", "3 x 10⁶ m/s", "3 x 10⁹ m/s"], answer: "3 x 10⁸ m/s" },
                { q: "Q6. Sound travels fastest through which medium?", options: ["Gas", "Liquid", "Solid"], answer: "Solid" },
                { q: "Q7. Kinetic energy is the energy possessed by a body due to its:", options: ["Position", "Motion", "Composition"], answer: "Motion" },
                { q: "Q8. What phenomenon causes a rainbow?", options: ["Reflection", "Refraction and Dispersion", "Absorption"], answer: "Refraction and Dispersion" },
                { q: "Q9. The S.I. unit of pressure is:", options: ["Joule", "Pascal", "Newton"], answer: "Pascal" },
                { q: "Q10. According to Ohm's Law, V = ?", options: ["I/R", "R/I", "I * R"], answer: "I * R" }
            ] 
        },
        { 
            id: Date.now() + 11, 
            title: "Chemistry", 
            questions: [
                { q: "Q1. What is H2O?", options: ["Oxygen", "Hydrogen Peroxide", "Water"], answer: "Water" },
                { q: "Q2. Which element is essential for respiration?", options: ["Nitrogen", "Carbon", "Oxygen"], answer: "Oxygen" },
                { q: "Q3. The substance that speeds up a chemical reaction without being consumed is a:", options: ["Inhibitor", "Catalyst", "Solvent"], answer: "Catalyst" },
                { q: "Q4. The atomic number of an element is determined by the number of:", options: ["Neutrons", "Protons", "Electrons"], answer: "Protons" },
                { q: "Q5. The pH value of pure water is:", options: ["0", "7", "14"], answer: "7" },
                { q: "Q6. What is the chemical symbol for Gold?", options: ["Gd", "Ag", "Au"], answer: "Au" },
                { q: "Q7. Which type of bonding involves the transfer of electrons?", options: ["Covalent", "Ionic", "Metallic"], answer: "Ionic" },
                { q: "Q8. An acid is a substance that produces what ions in water?", options: ["OH⁻", "H⁺", "Na⁺"], answer: "H⁺" },
                { q: "Q9. The rusting of iron is an example of:", options: ["Combustion", "Oxidation", "Reduction"], answer: "Oxidation" },
                { q: "Q10. The Law of Conservation of Mass states that mass is:", options: ["Created and destroyed", "Transformed", "Neither created nor destroyed"], answer: "Neither created nor destroyed" }
            ] 
        },
        { 
            id: Date.now() + 12, 
            title: "Biology", 
            questions: [
                { q: "Q1. What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria"], answer: "Mitochondria" },
                { q: "Q2. What pigment gives plants their green color?", options: ["Carotene", "Melanin", "Chlorophyll"], answer: "Chlorophyll" },
                { q: "Q3. Which process converts light energy into chemical energy in plants?", options: ["Respiration", "Photosynthesis", "Transpiration"], answer: "Photosynthesis" },
                { q: "Q4. DNA stands for:", options: ["Deoxyribonucleic Acid", "Dynamic Nucleic Acid", "Dioxyribosomal Acid"], answer: "Deoxyribonucleic Acid" },
                { q: "Q5. What is the largest organ in the human body?", options: ["Heart", "Brain", "Skin"], answer: "Skin" },
                { q: "Q6. Which blood group is considered the universal donor?", options: ["A", "AB", "O"], answer: "O" },
                { q: "Q7. The basic unit of heredity is the:", options: ["Cell", "Gene", "Protein"], answer: "Gene" },
                { q: "Q8. What is osmosis?", options: ["Movement of solutes", "Movement of water across a semipermeable membrane", "Cell division"], answer: "Movement of water across a semipermeable membrane" },
                { q: "Q9. Which organ produces insulin?", options: ["Liver", "Pancreas", "Kidney"], answer: "Pancreas" },
                { q: "Q10. Fungi are classified as:", options: ["Producers", "Consumers", "Decomposers"], answer: "Decomposers" }
            ] 
        }
    ]);
}


// =================================================================
// 2. AUTHENTICATION & REDIRECTION
// =================================================================

/** Checks auth status and redirects if necessary */
function checkAuthAndRedirect(requiredRole) {
    const currentPage = window.location.pathname.split('/').pop();

    if (!loggedInUser) {
        if (!['index.html', 'login.html', 'register.html'].includes(currentPage)) {
            window.location.href = 'login.html';
            return false;
        }
    } else if (requiredRole && loggedInUser.role !== requiredRole) {
        alert(`Access Denied. Redirecting to ${loggedInUser.role} dashboard.`);
        window.location.href = `${loggedInUser.role}Dashboard.html`;
        return false;
    }
    return true;
}

// Function to handle Logout
function handleLogout(e) {
    e.preventDefault();
    sessionStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}

// Attach logout functionality to all 'Logout' links
document.querySelectorAll('a[href="login.html"]').forEach(link => {
    if (link.textContent.toLowerCase().includes('logout')) {
        link.href = '#';
        link.addEventListener('click', handleLogout);
    }
});

// Registration Logic (for register.html)
const registerBtn = document.getElementById('register-btn');
if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim().toLowerCase();
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        if (!username || !email || !password) {
            alert('❌ Please fill all fields');
            return;
        }

        let users = getUsers();
        if (users.find(u => u.email === email)) {
            alert('❌ Email already registered');
            return;
        }

        users.push({ id: Date.now(), username, email, password, role });
        setUsers(users);

        alert('✅ Registration successful!');
        window.location.href = 'login.html';
    });
}

// Login Logic (for login.html)
const loginBtn = document.getElementById('login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const email = document.getElementById('login-email').value.trim().toLowerCase();
        const password = document.getElementById('login-password').value;
        const role = document.getElementById('login-role').value;

        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password && u.role === role);

        if (!user) {
            alert('❌ Invalid credentials or role selection');
            return;
        }

        sessionStorage.setItem('loggedInUser', JSON.stringify(user));

        alert(`Welcome ${user.username}! 🎉`);
        if (role === 'admin') window.location.href = 'adminDashboard.html';
        else window.location.href = 'studentDashboard.html';
    });
}

// =================================================================
// 3. UI UTILITIES (Mobile Nav)
// =================================================================

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// =================================================================
// 4. ADMIN DASHBOARD LOGIC (adminDashboard.html)
// =================================================================

if (document.body.id === 'admin-dashboard') {
    checkAuthAndRedirect('admin');

    const totalUsersEl = document.getElementById('total-users');
    const activeQuizzesEl = document.getElementById('active-quizzes');
    const recentResultsEl = document.getElementById('recent-results');

    if (totalUsersEl && activeQuizzesEl && recentResultsEl) {
        const users = getUsers();
        const quizzes = getQuizzes();
        const results = getResults();
        
        totalUsersEl.textContent = users.length; 
        activeQuizzesEl.textContent = quizzes.length;
        recentResultsEl.textContent = `${results.length} submissions`;
    }
}

// =================================================================
// 5. USER MANAGEMENT LOGIC (userManagement.html)
// =================================================================

if (document.body.id === 'user-management') {
    checkAuthAndRedirect('admin');
    const userGrid = document.getElementById('user-grid');

    const renderUserList = () => {
        if (!userGrid) return;
        userGrid.innerHTML = '';
        const users = getUsers();

        users.forEach(user => {
            const isSelf = loggedInUser && user.id === loggedInUser.id; 

            const card = document.createElement('div');
            card.className = 'quiz-card';
            card.innerHTML = `
                <h3>${user.username}</h3>
                <p>(${user.email})</p>
                <p>${user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
                ${isSelf 
                    ? '<button class="btn" disabled>Admin (You)</button>'
                    : `<button class="btn btn-danger remove-user" data-id="${user.id}">Remove ❌</button>`
                }
            `;
            userGrid.appendChild(card);
        });

        document.querySelectorAll('.remove-user').forEach(button => {
            button.addEventListener('click', (e) => {
                const userId = parseInt(e.target.dataset.id);
                if (confirm('Are you sure you want to remove this user? This cannot be undone.')) {
                    let users = getUsers().filter(u => u.id !== userId);
                    setUsers(users);
                    renderUserList();
                }
            });
        });
    };
    renderUserList();
}


// =================================================================
// 6. QUIZ MANAGEMENT LOGIC (quizManagement.html) - UPDATED FOR QUESTION EDITING
// =================================================================

if (document.body.id === 'quiz-management') {
    checkAuthAndRedirect('admin');
    const quizGrid = document.getElementById('quiz-grid-container');
    const addQuizBtn = document.getElementById('add-quiz-btn');

    const modalOverlay = document.getElementById('question-management-overlay');
    const modalTitle = document.getElementById('question-modal-title');
    const questionsEditContainer = document.getElementById('questions-edit-container');
    const addQuestionBtn = document.getElementById('add-question-btn');
    const saveQuestionsBtn = document.getElementById('save-questions-btn');
    const cancelQuestionsBtn = document.getElementById('cancel-questions-btn');

    let editingQuiz = null; // Store the quiz currently being edited

    const renderQuestionEditor = () => {
        questionsEditContainer.innerHTML = '';
        if (!editingQuiz) return;

        editingQuiz.questions.forEach((q, qIndex) => {
            // Remove the Qx. prefix for easier editing
            const cleanedQuestionText = q.q.replace(/Q\d+\. /g, '').replace(/^\d+\. /, '').trim();

            const questionElement = document.createElement('div');
            questionElement.className = 'quiz-card';
            questionElement.style.margin = '15px 0';
            questionElement.style.textAlign = 'left';
            questionElement.style.padding = '20px';
            
            // Generate unique IDs for input elements to ensure they are correctly linked
            const optionInputs = q.options.map((option, oIndex) => {
                // Generate a unique ID for the radio button
                const radioId = `q${qIndex}-r${oIndex}`;
                
                return `
                    <div style="display: flex; align-items: center; margin-bottom: 5px;">
                        <input type="radio" id="${radioId}" name="answer-${qIndex}" data-option-index="${oIndex}" ${option === q.answer ? 'checked' : ''} style="margin-right: 10px;">
                        <input type="text" class="option-text" data-radio-id="${radioId}" placeholder="Option ${oIndex + 1}" value="${option}" style="flex-grow: 1; padding: 8px; border-radius: 6px; background: #1F1F1F; color: #E0E0E0; border: 1px solid #333;">
                    </div>
                `;
            }).join('');
            
            questionElement.innerHTML = `
                <h4 style="margin-bottom: 10px; color: #FFC107;">Question ${qIndex + 1}</h4>
                <input type="text" class="question-q" placeholder="Question Text" value="${cleanedQuestionText}" style="width:100%; margin-bottom: 10px; padding: 10px; border-radius: 8px; background: #1F1F1F; color: #E0E0E0; border: 1px solid #333;">
                <p style="margin-top: 15px; font-weight: bold; color: #B0B0B0;">Options (Check the correct one):</p>
                <div class="options-group" data-q-index="${qIndex}">
                    ${optionInputs}
                </div>
                <button class="btn delete-question-btn" data-q-index="${qIndex}" style="background:#dc3545; margin-top: 15px; width: auto;">Delete Question 🗑️</button>
                <hr style="margin-top: 20px; border-color: #333;">
            `;
            questionsEditContainer.appendChild(questionElement);
        });
        
        // Add event listeners for deleting questions
        document.querySelectorAll('.delete-question-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.qIndex);
                if (confirm(`Are you sure you want to delete Question ${index + 1}?`)) {
                    editingQuiz.questions.splice(index, 1);
                    renderQuestionEditor(); // Re-render the list
                }
            });
        });
        
        // **NEW LOGIC:** Dynamically update the radio button's value whenever the text input changes.
        document.querySelectorAll('.option-text').forEach(input => {
            // When an option is checked, we don't rely on the radio's value, but this listener ensures the radio value is irrelevant anyway.
            input.addEventListener('input', (e) => {
                const radioId = e.target.dataset.radioId;
                const radioInput = document.getElementById(radioId);
                // We keep the radio value consistent with the text, though we use the text input's value directly in save logic.
                // This is a safety measure.
                if (radioInput) {
                    radioInput.value = e.target.value.trim();
                }
            });
        });
    };

    const openQuestionModal = (quiz) => {
        editingQuiz = JSON.parse(JSON.stringify(quiz)); // Deep clone for safe editing
        modalTitle.textContent = `Manage Questions for Quiz: ${editingQuiz.title}`;
        renderQuestionEditor();
        modalOverlay.style.display = 'flex';
        // Scroll to top of modal for better experience
        document.querySelector('#question-management-overlay .auth-card').scrollTop = 0;
    };

    const closeQuestionModal = () => {
        modalOverlay.style.display = 'none';
        editingQuiz = null;
        renderQuizList(); // Refresh the main quiz list
    };

    // Event listeners for modal controls
    cancelQuestionsBtn.addEventListener('click', closeQuestionModal);

    addQuestionBtn.addEventListener('click', () => {
        const newQuestion = { 
            q: `New Question ${editingQuiz.questions.length + 1}`, 
            options: ["Option 1", "Option 2", "Option 3"], 
            answer: "Option 1" 
        };
        editingQuiz.questions.push(newQuestion);
        renderQuestionEditor();
    });

    // START OF THE CRUCIAL FIX FOR SAVING
    saveQuestionsBtn.addEventListener('click', () => {
        const questionsToSave = [];
        let valid = true;

        // Iterate through all question cards in the editor
        document.querySelectorAll('.quiz-card').forEach((card, qIndex) => {
            if (!valid) return; // Exit early if a previous validation failed

            // Find the question text input within the current card
            const qText = card.querySelector('.question-q').value.trim();
            // Find all option containers (each contains a radio and a text input)
            const optionContainers = card.querySelectorAll('.options-group > div');
            
            if (!qText) {
                alert(`Question ${qIndex + 1} is missing text.`);
                valid = false;
                return;
            }

            let options = [];
            let answer = null;
            let foundChecked = false;

            // Iterate through each option container (radio + input)
            optionContainers.forEach(container => {
                if (!valid) return;
                
                const radioInput = container.querySelector('input[type="radio"]');
                const textInput = container.querySelector('.option-text');
                const optionText = textInput.value.trim();

                if (!optionText) {
                    alert(`Question ${qIndex + 1} has an empty option.`);
                    valid = false;
                    return;
                }
                options.push(optionText);

                // FIX: If the radio is checked, the answer must be the CURRENT text 
                // from the adjacent input field.
                if (radioInput.checked) {
                    answer = optionText;
                    foundChecked = true;
                }
            });
            
            if (!valid) return; // Stop if any option was empty

            // Validate that an answer was selected if options exist
            if (!foundChecked && options.length > 0) {
                alert(`Please select the correct answer for Question ${qIndex + 1}.`);
                valid = false;
                return;
            }
            
            // Only push valid questions (i.e., those with options)
            if (valid && options.length > 0) {
                questionsToSave.push({
                    q: `${qIndex + 1}. ${qText}`, // Re-add the sequential prefix
                    options: options,
                    answer: answer
                });
            }
        });
        
        if (!valid) {
            return; 
        }

        if (questionsToSave.length === 0) {
             if (!confirm("You are saving a quiz with NO questions. Are you sure? This quiz will not be visible to students.")) {
                return;
            }
        }
        
        // Find the original quiz and update it
        let quizzes = getQuizzes();
        const quizIndex = quizzes.findIndex(q => q.id === editingQuiz.id);
        
        if (quizIndex !== -1) {
            quizzes[quizIndex].questions = questionsToSave;
            setQuizzes(quizzes);
            alert(`✅ Quiz "${quizzes[quizIndex].title}" saved successfully with ${questionsToSave.length} questions!`);
            closeQuestionModal();
        }
    });
    // END OF THE CRUCIAL FIX

    // Main quiz list renderer
    const renderQuizList = () => {
        if (!quizGrid) return;
        quizGrid.innerHTML = '';
        const quizzes = getQuizzes();

        quizzes.forEach(quiz => {
            const card = document.createElement('div');
            card.className = 'quiz-card';
            card.innerHTML = `
                <h3>${quiz.title}</h3>
                <p>${quiz.questions.length} Questions</p>
                <button class="btn edit-title" data-id="${quiz.id}" style="background:#FFC107; margin-bottom: 10px;">Edit Title ✏️</button>
                <button class="btn manage-questions" data-id="${quiz.id}" style="background:#20C997; margin-bottom: 10px;">Manage Questions 📝</button>
                <button class="btn delete-quiz" style="background:#dc3545;" data-id="${quiz.id}">Delete ❌</button>
            `;
            quizGrid.appendChild(card);
        });

        // Event Listeners for Edit Title
        document.querySelectorAll('.edit-title').forEach(button => button.addEventListener('click', (e) => {
            const quizId = parseInt(e.target.dataset.id);
            const quizzes = getQuizzes();
            const quiz = quizzes.find(q => q.id === quizId);

            const newTitle = prompt("Edit the quiz title:", quiz.title);
            if (newTitle && newTitle.trim()) {
                quiz.title = newTitle.trim();
                setQuizzes(quizzes);
                renderQuizList();
                alert(`Title for "${newTitle}" updated!`);
            }
        }));

        // Event Listeners for Manage Questions
        document.querySelectorAll('.manage-questions').forEach(button => button.addEventListener('click', (e) => {
            const quizId = parseInt(e.target.dataset.id);
            const quizzes = getQuizzes();
            const quiz = quizzes.find(q => q.id === quizId);
            if (quiz) {
                openQuestionModal(quiz);
            }
        }));

        // Event Listeners for Delete
        document.querySelectorAll('.delete-quiz').forEach(button => button.addEventListener('click', (e) => {
            const quizId = parseInt(e.target.dataset.id);
            if (confirm('Are you sure you want to delete this quiz?')) {
                let quizzes = getQuizzes().filter(q => q.id !== quizId);
                setQuizzes(quizzes);
                renderQuizList();
                alert('Quiz deleted.');
            }
        }));
    };

    addQuizBtn.addEventListener('click', () => {
        const title = prompt("Enter the title for the new quiz:");
        if (title && title.trim()) {
            const newQuiz = {
                id: Date.now(),
                title: title.trim(),
                questions: [] // Start with an empty array
            };
            const quizzes = getQuizzes();
            quizzes.push(newQuiz);
            setQuizzes(quizzes);
            renderQuizList();
            alert(`Quiz "${title.trim()}" created. Now click "Manage Questions" to add content.`);
        }
    });

    renderQuizList();
}


// =================================================================
// 7. STUDENT DASHBOARD LOGIC (studentDashboard.html)
// =================================================================

// Helper function added for reviews (required by Section 7)
function getAverageRating(quizId) {
    const reviews = getReviews();
    const quizReviews = reviews.filter(r => r.quizId === quizId);
    
    if (quizReviews.length === 0) {
        return { average: 'New', count: 0 };
    }
    
    const totalRating = quizReviews.reduce((sum, review) => sum + review.rating, 0);
    const average = (totalRating / quizReviews.length).toFixed(1);
    
    return { average: average, count: quizReviews.length };
}

if (document.body.id === 'student-dashboard') {
    checkAuthAndRedirect('student');
    const quizGrid = document.getElementById('quiz-grid-container');

    const renderAvailableQuizzes = () => {
        if (!quizGrid) return;
        quizGrid.innerHTML = '';
        const quizzes = getQuizzes();

        const availableQuizzes = quizzes.filter(q => q.questions.length > 0);

        if (availableQuizzes.length === 0) {
            quizGrid.innerHTML = '<p style="color:#FFC107; text-align:center; padding-top: 50px;">No quizzes available yet. Check back soon!</p>';
            return;
        }

        availableQuizzes.forEach(quiz => {
            // Calculate and Format Rating
            const ratingData = getAverageRating(quiz.id);
            // Simple logic to show stars
            const filledStars = '⭐'.repeat(Math.round(ratingData.average));
            const emptyStars = '☆'.repeat(5 - Math.round(ratingData.average));
            const ratingDisplay = ratingData.count > 0 
                ? `${filledStars}${emptyStars} (${ratingData.average} / ${ratingData.count} reviews)`
                : `No reviews yet`;
            
            const card = document.createElement('div');
            card.className = 'quiz-card';
            card.innerHTML = `
                <h3>${quiz.title}</h3>
                <p>${quiz.questions.length} Questions</p>
                <p style="font-size: 0.9em; color: #FFC107; margin-bottom: 15px;">${ratingDisplay}</p>
                <a href="quiz.html?id=${quiz.id}" class="btn">Start Quiz 🚀</a>
            `;
            quizGrid.appendChild(card);
        });
    };
    renderAvailableQuizzes();
}


// =================================================================
// 8. QUIZ ENGINE LOGIC (quiz.html) - UPDATED FOR ALL-AT-ONCE VIEW
// =================================================================

if (document.body.id === 'quiz-page') {
    checkAuthAndRedirect('student');
    
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = parseInt(urlParams.get('id'));

    const quizForm = document.getElementById('quiz-form');
    const questionsContainer = document.getElementById('questions-container');
    const quizTitleDisplay = document.getElementById('quiz-title-display');
    
    const quizzes = getQuizzes();
    const currentQuizData = quizzes.find(q => q.id === quizId);

    if (!currentQuizData || currentQuizData.questions.length === 0) {
        questionsContainer.innerHTML = '❌ Error: Quiz not found or has no questions.';
        quizTitleDisplay.textContent = 'Subject: Error';
        if (quizForm) quizForm.style.display = 'none';
    } else {
        quizTitleDisplay.textContent = `Subject: ${currentQuizData.title}`;
        let startTime = Date.now();

        const renderQuestions = () => {
            if (!questionsContainer) return;
            questionsContainer.innerHTML = '';
            
            currentQuizData.questions.forEach((question, index) => {
                const qNum = index + 1;
                const questionElement = document.createElement('div');
                questionElement.className = 'question-group';
                questionElement.style.marginBottom = '25px';
                questionElement.innerHTML = `
                    <h4 style="margin-bottom: 10px; color: #20C997;">${question.q}</h4>
                `;
                
                // Create a container for the radio buttons
                const optionsDiv = document.createElement('div');
                optionsDiv.className = 'options-list';
                
                question.options.forEach((optionText, optionIndex) => {
                    const optionId = `q${qNum}-opt${optionIndex}`;
                    const radioGroup = `question-${qNum}`;

                    const label = document.createElement('label');
                    label.style.display = 'block';
                    label.style.padding = '8px 0';
                    label.style.cursor = 'pointer';
                    // Using standard radio input for form submission
                    label.innerHTML = `
                        <input type="radio" 
                               name="${radioGroup}" 
                               value="${optionText}" 
                               required 
                               style="margin-right: 10px;">
                        ${optionText}
                    `;
                    optionsDiv.appendChild(label);
                });

                questionElement.appendChild(optionsDiv);
                questionsContainer.appendChild(questionElement);
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            
            const endTime = Date.now();
            const timeTaken = Math.floor((endTime - startTime) / 1000); 
            let score = 0;
            const totalQuestions = currentQuizData.questions.length;
            
            // Collect user answers and calculate score
            currentQuizData.questions.forEach((question, index) => {
                const radioGroup = `question-${index + 1}`;
                const selectedInput = document.querySelector(`input[name="${radioGroup}"]:checked`);
                
                if (selectedInput) {
                    const userAnswer = selectedInput.value;
                    if (userAnswer === question.answer) {
                        score++;
                    }
                }
            });

            // Save result
            const result = {
                quizId: quizId,
                quizTitle: currentQuizData.title,
                userId: loggedInUser.id,
                username: loggedInUser.username,
                score: score,
                totalQuestions: totalQuestions,
                timeTaken: timeTaken,
                date: new Date().toLocaleDateString(),
                timestamp: Date.now()
            };

            const results = getResults();
            results.push(result);
            setResults(results);

            // Redirect to results page
            window.location.href = `result.html?id=${result.timestamp}`;
        };
        
        if (quizForm) {
            quizForm.addEventListener('submit', handleSubmit);
            renderQuestions();
        }
    }
}


// =================================================================
// 9. RESULT DISPLAY LOGIC (result.html) - Includes Quiz Review Submission
// =================================================================

if (document.body.id === 'result-page') {
    checkAuthAndRedirect('student');

    const urlParams = new URLSearchParams(window.location.search);
    const resultTimestamp = parseInt(urlParams.get('id'));

    const resultCard = document.getElementById('result-card');
    const scoreEl = document.getElementById('score');
    const correctEl = document.getElementById('correct');
    const timeEl = document.getElementById('time');
    const resultTitleEl = document.getElementById('result-title');
    const quizTitleEl = document.getElementById('quiz-title');


    const results = getResults().filter(r => r.userId === loggedInUser.id);
    const latestResult = results.find(r => r.timestamp === resultTimestamp);
    
    // Load Reviews for logic below
    const reviews = getReviews(); 

    if (!latestResult) {
        resultCard.innerHTML = '<h2>Result Not Found 😔</h2><p>This result could not be loaded.</p><a href="studentDashboard.html" class="btn">Go to Dashboard</a>';
    } else {
        const { score, totalQuestions, timeTaken, quizTitle } = latestResult;
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        const percentage = score / totalQuestions;

        quizTitleEl.textContent = quizTitle;
        scoreEl.textContent = `${score}/${totalQuestions}`;
        correctEl.textContent = score;
        timeEl.textContent = `${minutes}m ${seconds}s`;

        if (percentage > 0.7) {
            resultTitleEl.textContent = '🎉 Congratulations! Excellent Score!';
        } else if (percentage > 0.5) {
            resultTitleEl.textContent = '👍 Good Effort! You passed!';
        } else {
            resultTitleEl.textContent = '⚠️ Keep Practicing!';
        }

        // --- Quiz Review Button and Logic ---
        const existingReview = reviews.find(r => r.quizId === latestResult.quizId && r.userId === loggedInUser.id);
        
        const reviewButton = document.createElement('button');
        reviewButton.className = 'btn';
        reviewButton.style.marginTop = '20px';
        reviewButton.style.background = existingReview ? '#20C997' : '#0D6EFD';
        reviewButton.textContent = existingReview 
            ? `⭐ Edit Review (${existingReview.rating} stars)` 
            : '⭐ Leave a Review';
        
        resultCard.appendChild(reviewButton);

        reviewButton.addEventListener('click', () => {
            const currentRating = existingReview ? existingReview.rating : '';
            const ratingPrompt = `Rate this quiz (1 to 5 stars):\n(Current: ${currentRating || 'None'})`;
            const rating = prompt(ratingPrompt, currentRating);
            
            if (rating === null || rating.trim() === '') return; 
            
            const parsedRating = parseInt(rating);

            if (isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {
                alert('❌ Invalid rating. Please enter a whole number between 1 and 5.');
                return;
            }
            
            const currentReviewText = existingReview ? existingReview.reviewText : '';
            const reviewText = prompt('Enter your feedback (optional):', currentReviewText);

            const newReview = {
                quizId: latestResult.quizId,
                userId: loggedInUser.id,
                username: loggedInUser.username,
                rating: parsedRating,
                reviewText: reviewText || '', 
                timestamp: Date.now()
            };

            const existingReviewIndex = reviews.findIndex(r => r.quizId === newReview.quizId && r.userId === newReview.userId);

            if (existingReviewIndex > -1) {
                reviews[existingReviewIndex] = newReview;
            } else {
                reviews.push(newReview);
            }
            
            setReviews(reviews);
            reviewButton.textContent = `✅ Review Submitted! (${parsedRating} stars)`;
            reviewButton.style.background = '#20C997'; 
            
            alert(`Thanks for your feedback on "${latestResult.quizTitle}"!`);
        });
        
        // -----------------------------------------------------------------
    }
}

// =================================================================
// 10. INDEX PAGE LOGIC (index.html) - UPDATED GENERAL FEEDBACK LOGIC
// =================================================================

if (document.body.id === 'index-page') {
    
    const platformReviews = getPlatformReviews();
    const testimonialSection = document.getElementById('testimonials');
    
    // 1. Render Testimonials - UPDATED TO SHOW RATING, AVATAR, AND MORE REVIEWS
    if (testimonialSection) {
        let content = '<h2 style="font-size: 2.5rem; margin-bottom: 40px; color: #E0E0E0;">What Our Users Say 💬</h2><div class="reviews-grid">';
        
        // Show up to 6 recent testimonials
        const displayReviews = platformReviews.slice(0, 6); 
        
        if (displayReviews.length > 0) {
            displayReviews.forEach(review => {
                const userName = review.username || 'Anonymous User';
                
                // Generate star rating display
                const rating = review.rating || 5; 
                const stars = '⭐'.repeat(rating) + '☆'.repeat(5 - rating); 
                
                content += `
                    <div class="feature-card review-card">
                        <div class="review-header">
                            <img src="images/avatar-placeholder.png" alt="${userName} Avatar" class="review-avatar">
                            <div class="review-info">
                                <p style="font-weight: 700; color: #20C997; margin: 0;">${userName}</p>
                                <div style="font-size: 1.1rem; color: #FFC107;">${stars}</div>
                            </div>
                        </div>
                        <p style="font-style: italic; color: #B0B0B0; margin-top: 15px;">"${review.reviewText}"</p>
                    </div>
                `;
            });
        } else {
             // Default placeholder review if none exist
             content += `
                <div class="feature-card review-card" style="flex: 1 1 300px; text-align: left; border-top: 5px solid #20C997;">
                    <div class="review-header">
                        <img src="images/avatar-placeholder.png" alt="QuizMaster Team Avatar" class="review-avatar">
                        <div class="review-info">
                            <p style="font-weight: 700; color: #20C997; margin: 0;">QuizMaster Team</p>
                            <div style="font-size: 1.1rem; color: #FFC107;">⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                    <p style="font-style: italic; color: #B0B0B0; margin-top: 15px;">"QuizMaster is an engaging and effective way to master new topics!"</p>
                </div>
            `;
        }

        content += '</div>'; // close reviews-grid
        testimonialSection.innerHTML = content;

        // 2. Add Submission Button - UPDATED TO COLLECT RATING
        const submitBtn = document.createElement('a');
        submitBtn.href = '#';
        submitBtn.className = 'btn';
        submitBtn.style.cssText = 'background: #FFC107; margin-top: 30px; display: inline-block;';
        submitBtn.textContent = 'Write a Testimonial ✨';
        
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // --- NEW RATING PROMPT ---
            const ratingInput = prompt('Please rate the QuizMaster platform (1 to 5 stars):');
            const rating = parseInt(ratingInput);

            if (isNaN(rating) || rating < 1 || rating > 5) {
                if (ratingInput !== null) {
                    alert('❌ Invalid rating. Please enter a whole number between 1 and 5.');
                }
                return;
            }
            // -------------------------

            const reviewText = prompt('Please enter your feedback (e.g., "Great app!"):');
            
            if (reviewText && reviewText.trim()) {
                // Get username if logged in, otherwise prompt for a name
                const username = loggedInUser 
                    ? loggedInUser.username 
                    : prompt('Enter your name (optional, leave blank for Anonymous):');
                
                const newReview = {
                    username: username ? username.trim() : 'Anonymous',
                    reviewText: reviewText.trim(),
                    rating: rating, // SAVE THE NEW RATING
                    timestamp: Date.now()
                };
                
                let reviews = getPlatformReviews();
                reviews.unshift(newReview); // Add to the start
                setPlatformReviews(reviews);
                
                alert('Thank you for your valuable feedback! It will appear on the page shortly.');
                window.location.reload(); // Reload to show the new review
            }
        });
        
        testimonialSection.appendChild(submitBtn);
    }
}