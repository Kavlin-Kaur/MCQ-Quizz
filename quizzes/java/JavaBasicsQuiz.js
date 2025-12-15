// Problem Statement: A simple MCQ quiz for Java basics
// Time Complexity: O(N) for checking answers
// Space Complexity: O(N) for storing questions

const javaQuiz = [
    {
        question: "Which of these is a valid keyword in Java?",
        options: ["function", "class", "def", "var"],
        answer: "class"
    },
    {
        question: "What is the default value of an int variable in Java?",
        options: ["0", "null", "undefined", "1"],
        answer: "0"
    },
    {
        question: "Which method is the entry point of a Java program?",
        options: ["main()", "start()", "init()", "run()"],
        answer: "main()"
    },
    {
        question: "Which operator is used to compare objects in Java?",
        options: ["==", "equals()", "compare()", "==="],
        answer: "equals()"
    },
    {
        question: "Which keyword is used to inherit a class in Java?",
        options: ["implements", "inherits", "extends", "super"],
        answer: "extends"
    }
];

// Example: log all questions
javaQuiz.forEach((q, index) => {
    console.log(`Q${index + 1}: ${q.question}`);
    q.options.forEach((opt, i) => console.log(`  ${i + 1}. ${opt}`));
});
