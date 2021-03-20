import Home from "../Components/Home"
import PageNotFound from "../Components/PageNotFound"
import QuizPage from "../Components/QuizPage"

const routesData = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/quiz/:id",
        component: QuizPage
    },
    {
        path: "*",
        component: PageNotFound
    }
]

const quizMainData = [
    {
        "id": 1,
        "name": "Basic GK Quiz",
        "description": "This quiz will help to polish your unawareness about General Knowledge."
    },
    {
        "id": 2,
        "name": "Sports Quiz",
        "description": "The Sports Quiz consists of different questions from countries and national games and also Olympic games."
    },
    {
        "id": 3,
        "name": "Indian Geography",
        "description": "Indian Geography Online Test contains various questions that are useful for every candidate to face multiple competitive exams."
    }
]

const quizQuestionsDetails = {
    "1": {
        "name": "Basic GK Quiz",
        "description": "This quiz will help to polish your unawareness about General Knowledge.",
        "questions": [
            {
                "id": 1,
                "name": "Which crop is sown on the largest area in India?",
                "options": "Rice,Wheat,Sugarcane,Maize",
                "quiz": 1,
                "points": 1
            },
            {
                "id": 2,
                "name": "Corey Anderson who has hit the fastest ODI century in 36 balls is from?",
                "options": "England,Australia,WI,NZ",
                "quiz": 1,
                "points": 1
            },
            {
                "id": 3,
                "name": "The world smallest country is?",
                "options": "Italy,Canada,Vatican City,Russia",
                "quiz": 1,
                "points": 1
            },
            {
                "id": 4,
                "name": "Novak Djokovic is a famous player associated with the game of?",
                "options": "Hockey,Football,Chess,Lawn Tennis",
                "quiz": 1,
                "points": 1
            },
            {
                "id": 5,
                "name": "Which country below is not one of the members of the UN security council?",
                "options": "Germany,China,Russia,France",
                "quiz": 1,
                "points": 1
            }
        ]
    },
    "2": {
        "name": "Sports Quiz",
        "description": "The Sports Quiz consists of different questions from countries and national games and also Olympic games.",
        "questions": [
            {
                "id": 6,
                "name": "Sultan Azlan Shah Cup is related to which among the following Sports?",
                "options": "Badminton,Hockey,Table Tennis,Golf",
                "quiz": 2,
                "points": 1
            },
            {
                "id": 7,
                "name": "Which is the national sport of Canada?",
                "options": "Ice Hockey,Cricket,Volleyball,Football",
                "quiz": 2,
                "points": 1
            },
            {
                "id": 8,
                "name": "2010 Commonwealth Games held in?",
                "options": "Russia,UK,Australia,India",
                "quiz": 2,
                "points": 1
            },
            {
                "id": 9,
                "name": "The term \"Slam\" is associated with?",
                "options": "Cricket,Tennis,Boxing,Football",
                "quiz": 2,
                "points": 1
            },
            {
                "id": 10,
                "name": "World cup of hockey is held after the gap of __________ years?",
                "options": "1,2,3,4",
                "quiz": 2,
                "points": 1
            }
        ]
    }, 
    "3": {
        "name": "Indian Geography",
        "description": "Indian Geography Online Test contains various questions that are useful for every candidate to face multiple competitive exams.",
        "questions": [
            {
                "id": 11,
                "name": "India is located on which part of Indo-Australian Plate?",
                "options": "Southern,Western,Northern,Eastern",
                "quiz": 3,
                "points": 1
            },
            {
                "id": 12,
                "name": "Which one of the major source of irrigation in India?",
                "options": "Canals,Wells,Other Sources,Tanks",
                "quiz": 3,
                "points": 1
            },
            {
                "id": 13,
                "name": "The Mangroove forests of the Gangetic delta (West Bengal) are called?",
                "options": "Sholas,Sunderbans,Kalibans,Evergreen Forests",
                "quiz": 3,
                "points": 1
            },
            {
                "id": 14,
                "name": "Corbett National Park is in?",
                "options": "Bihar,Assam,Uttarakhand,Madhya Pradesh",
                "quiz": 3,
                "points": 1
            },
            {
                "id": 15,
                "name": "Which city is known as the \"Queen of the Arabian Sea\"?",
                "options": "Vishakhapatnam,Kochi,Kollam,Panaji",
                "quiz": 3,
                "points": 1
            }
        ]
    }
}

const correctAnsForQuizQues = {
    "1": {
        "questions": [
            {
                "ques_id": 1,
                "correct_option": "Rice"
            },
            {
                "ques_id": 2,
                "correct_option": "NZ"
            },
            {
                "ques_id": 3,
                "correct_option": "India"
            },
            {
                "ques_id": 4,
                "correct_option": "Tennis"
            },
            {
                "ques_id": 5,
                "correct_option": "Germany"
            }
        ]
    },
    "2": {
        "questions": [
            {
                "ques_id": 6,
                "correct_option": "Hockey"
            },
            {
                "ques_id": 7,
                "correct_option": "Ice Hockey"
            },
            {
                "ques_id": 8,
                "correct_option": "Vatican City"
            },
            {
                "ques_id": 9,
                "correct_option": "Lawn Tennis"
            },
            {
                "ques_id": 10,
                "correct_option": "4"
            }
        ]
    },
    "3": {
        "questions": [
            {
                "ques_id": 11,
                "correct_option": "Northern"
            },
            {
                "ques_id": 12,
                "correct_option": "Wells"
            },
            {
                "ques_id": 13,
                "correct_option": "Sunderbans"
            },
            {
                "ques_id": 14,
                "correct_option": "Uttarakhand"
            },
            {
                "ques_id": 15,
                "correct_option": "Kochi"
            }
        ]
    }
}

const quizScoreOutputStructure = {
    "questions": [
        {
            "ques_id": 11,
            "correct_option": "Northern",
            "submitted_option": "Southern"
        },
        {
            "ques_id": 12,
            "correct_option": "Wells",
            "submitted_option": "Canals"
        },
        {
            "ques_id": 13,
            "correct_option": "Sunderbans",
            "submitted_option": "Sholas"
        },
        {
            "ques_id": 14,
            "correct_option": "Uttarakhand",
            "submitted_option": "Bihar"
        },
        {
            "ques_id": 15,
            "correct_option": "Kochi",
            "submitted_option": "Vishakhapatnam"
        }
    ],
    "score": 0,
    "total_score": 5
}

export {
    routesData,
    quizMainData,
    quizQuestionsDetails,
    correctAnsForQuizQues,
    quizScoreOutputStructure
}