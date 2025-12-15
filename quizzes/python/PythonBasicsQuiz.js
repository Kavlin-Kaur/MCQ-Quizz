// Problem Statement: A simple MCQ quiz for Python basics
// Time Complexity: O(N) (for checking answers)
// Space Complexity: O(N) (to store questions and answers)

const quiz = [
    {
        question: "What is the output of print(2 ** 3)?",
        options: ["5", "6", "8", "9"],
        answer: "8"
    },
    {
        question: "Which of these is a mutable data type in Python?",
        options: ["tuple", "list", "string", "int"],
        answer: "list"
    },
    {
        question: "What keyword is used to define a function in Python?",
        options: ["func", "def", "function", "define"],
        answer: "def"
    },
    {
        question: "What does len([1,2,3,4]) return?",
        options: ["3", "4", "5", "Error"],
        answer: "4"
    },
    {
        question: "Which of these is used for single-line comments in Python?",
        options: ["//", "#", "/* */", "<!-- -->"],
        answer: "#"
    }
];

// Example of iterating over the quiz
quiz.forEach((q, index) => {
    console.log(`Q${index + 1}: ${q.question}`);
    q.options.forEach((opt, i) => console.log(`  ${i + 1}. ${opt}`));
});
