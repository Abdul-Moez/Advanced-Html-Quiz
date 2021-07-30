
function quiz() {
    // Main Containers

    let quizContainer = document.getElementById('quiz-container');
    let resultContainer = document.getElementById('result');
    document.getElementById('start').classList.add('hide');
    quizContainer.style.display = 'grid';


    // User Information

    let userName = prompt('Enter Your Name');
    while (userName === '') {
        userName = prompt('Enter Your Name')
    }

    let userId = prompt('Enter Your Student Id ex:=> 1282719')

    while (userId === '') {
        userId = prompt('Enter Your Student ID ex:=> 1282719')
    }

    // =======XX========XX========

    // User Information Containers

    let nameContainer = document.getElementById('name');
    let IdContainer = document.getElementById('stdId');
    let correctAnswersContainer = document.getElementById('correctAnswers');
    let obtMarksContainer = document.getElementById("obtMarks");
    let percentageContainer = document.getElementById('percentage')
    // =======XX========XX========


    // Quiz Variables

    let userMarks = 0;
    let correct = 0;
    const nextQuestion = document.getElementById('next');
    let currentQuestionNumber = document.getElementById('questionNum');
    let question = document.getElementById('question');
    let option1Value = document.getElementById('option1');
    let option1Text = document.getElementById('option1Text')
    let option2Value = document.getElementById('option2');
    let option2Text = document.getElementById('option2Text')
    let option3Value = document.getElementById('option3');
    let option3Text = document.getElementById('option3Text')

    // Numbers of questions

    let questionNumbers = [
        1, 2, 3, 4, 5, 6, 7, 8
    ]

    // Questions

    let questions = [
        "HTML program is saved using ______ extension.",
        "HTML program can be read and rendered by",
        "HTML tags are surrounded by _____ brackets.",
        "Page designed in HTML is called as",
        "Which of the following is not an example of web browser ?",
        "HTML document can contain",
        "We can write HTML code using",
        "URL in HTML stands for"
    ]

    // Available Options

    let options = {
        1: [
            ".html",
            ".htl",
            ".htmnl",
        ],
        2: [
            "Compiler",
            "Server",
            "Web Browser"
        ],
        3: [
            "Angle",
            "Curly",
            "Round"
        ],
        4: [
            "Server Page",
            "Web Page",
            "Media Page"
        ],
        5: [
            "Google Chrome",
            "Google",
            "Opera"
        ],
        6: [
            "Tags",
            "Attributes",
            "All The Above"
        ],
        7: [
            "Microsoft Word",
            "Notepad",
            "All The Above"
        ],
        8: [
            "Uniform Resource Locator",
            "Universal Resource Locator",
            "Uni Resource Locator"
        ]
    }

    // Correct Options

    const correctAnswers = {
        1: [".html"],
        2: ["Web Browser"],
        3: ["Angle"],
        4: ["Web Page"],
        5: ["Google"],
        6: ["All The Above"],
        7: ["All The Above"],
        8: ["Uniform Resource Locator"]
    }

    // Users Choosed Option

    let userChoice = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: []
    }



    let currentQuestion = 1;

    // Assigning values to questions and options

    currentQuestionNumber.innerHTML = questionNumbers[currentQuestion - 1];
    question.innerHTML = questions[currentQuestion - 1];
    option1Value.value = options[currentQuestion][0];
    option1Text.innerHTML = options[currentQuestion][0];
    option2Value.value = options[currentQuestion][1];
    option2Text.innerHTML = options[currentQuestion][1];
    option3Value.value = options[currentQuestion][2];
    option3Text.innerHTML = options[currentQuestion][2];

    // Display next question on CLick

    nextQuestion.addEventListener('click', () => {

        // Checking which option the user have selected
        if (option1Value.checked == true) {
            userChoice[currentQuestion] = option1Value.value;
        } else
            if (option2Value.checked == true) {
                userChoice[currentQuestion] = option2Value.value;
            } else
                if (option3Value.checked == true) {
                    userChoice[currentQuestion] = option3Value.value;
                };
        
    
        //Checking the validity of User's Choice

        if (userChoice[currentQuestion] == correctAnswers[currentQuestion]) {
            userMarks += 2;
            correct++;
        }
        else {
            console.log(currentQuestion + " is Wrong")
        }

        // Changing current question number

        if (currentQuestion < 8) {
            currentQuestion++;
            console.log(currentQuestion);
        }

        // Replace the next button with End Exam button when last question reached

        if (currentQuestion == 8) {
            nextQuestion.setAttribute('id', 'endQuiz');
            var endQuiz = document.getElementById('endQuiz');
            endQuiz.innerHTML = "End Exam";

            // Displaying Result when End exam is clicked

            endQuiz.addEventListener('click', () => {
                resultContainer.style.display = 'grid';
                let percentage = userMarks / 16 * 100;
                quizContainer.style.display = "none";
                

                nameContainer.innerHTML = userName;
                IdContainer.innerHTML = userId;
                obtMarksContainer.innerHTML = userMarks + ' / 16';
                correctAnswersContainer.innerHTML = correct + ' / 8';
                percentageContainer.innerHTML = percentage + '%';
            })
        }



        // Assigning new values for each question

        currentQuestionNumber.innerHTML = questionNumbers[currentQuestion - 1];
        question.innerHTML = questions[currentQuestion - 1];
        option1Value.value = options[currentQuestion][0];
        option1Value.innerHTML = options[currentQuestion[0]]
        option1Text.innerHTML = options[currentQuestion][0];
        option2Value.value = options[currentQuestion][1];
        option2Text.innerHTML = options[currentQuestion][1];
        option3Value.value = options[currentQuestion][2];
        option3Text.innerHTML = options[currentQuestion][2];

    })

    // Fade out the NOTE when close icon is clicked

    document.getElementById('close-icon').addEventListener('click', () => {
        document.querySelector('.note-container').classList.add('fade-out')
    })
}
