
import * as fs from "fs";
// import { store } from "../../functions/src/initFirestore"
import * as types from "../../types/types"
import * as admin from 'firebase-admin'
admin.initializeApp({ projectId: "your-project-id" })

// import fetch from "node-fetch"

const store = admin.firestore()

function populate_firebase(quiz: types.QuizQuestion): void {


    store.collection("quizzes").add(quiz).then(() => console.log("success")).catch((e) => console.log(e.message))

    // fetch("http://localhost:5001/let-s-science/us-central1/api/quiz", {
    //     method: "POST",
    //     body: JSON.stringify(quiz),

    // }).then(() => console.log("success")).catch((e) => console.log(e))

}

function get_data(): types.QuizQuestion[] {

    const data = fs.readFileSync("./data/mock_questions.json", "utf8")
    const json = JSON.parse(data)

    const converted_data = json.map((quiz: any) => {


        const question = quiz.Question

        delete quiz.Question

        const answers = Object.values(quiz)
        quiz.correctAnswer = 0


        let out = {

            question: question,
            answers: answers,
            correctAnswer: quiz.correctAnswer
        }

        return out

    })

    return converted_data

}

export function pupulator() { get_data().forEach((quiz) => populate_firebase(quiz)) }