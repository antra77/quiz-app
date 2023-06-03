export const quiz = {
    topic: 'C++',
    level: 'Beginner',
    totalQuestions: 10,
    perQuestionScore: 1,
    questions: [
        {
            question:
            'C++ uses which approach?',
            choices: ['right-left','top-down','left-right','bottom-up'],
            type: 'MCQs',
            correctAnswer: 'bottom-up',
        },
        {
            question:
            'Which of the following data type is supported in C++ but not in C?',
            choices: ['int','bool','double','float'],
            type: 'MCQs',
            correctAnswer: 'bool',   
        },

        {
            question:
            'Identify the correct syntax for declaring arrays in C++.',
            choices: ['array arr[10]','array{10}','int arr[10]','int arr'],
            type: 'MCQs',
            correctAnswer: 'int arr[10]',
        },

        {
            question:
            'Size of wchat_t is.',
            choices: ['2','4','2 or 4','Depends on the number of bits in the system'],
            type: 'MCQs',
            correctAnswer: 'Depends on the number of bits in the system',
        },

        {
            question:
            'Which of the following is “address of operator',
            choices: ['*','&','[]','&&'],
            type: 'MCQs',
            correctAnswer: '&',
        },

        {
            question:
            'Which of the following loops is best when we know the number of iterations?',
            choices: ['While loop','Do-while loop','For loop','All of the above'],
            type: 'MCQs',
            correctAnswer: 'For loop',
        },

        {
            question:
            'Identify the scope resolution operator.',
            choices: [':','::','?','None'],
            type: 'MCQs',
            correctAnswer: '::',
        },

        {
            question:
            'goto can be classified into?',
            choices: ['label','variable','operator','function'],
            type: 'MCQs',
            correctAnswer: 'label',
        },

        {
            question:
            'Identify the correct definition of * operator in pointer',
            choices: ['Address of operator','Value of address operator','Multiplication operator','All of the above'],
            type: 'MCQs',
            correctAnswer: 'Value of address operator',
        },

        {
            question:
            'Choose the correct default return value of function.',
            choices: ['int','void','char','float'],
            type: 'MCQs',
            correctAnswer: 'int',
        },
    ],

}