import { QuizQuestion } from "../types/types";
import {store, auth} from "../functions/src/initFirestore";
import fs from "fs";

function add_to_data_base(quiz : QuizQuestion) {
    
    store.collection("quizzes").add(quiz).then(()=> console.log(".")).catch(()=> console.log("failure"))
}



function get_data(){

    const data = fs.readFileSync("./data/mock_questions.json", "utf8")
    const json = JSON.parse(data)

    json.forEach((quiz : any) => {
        let out : QuizQuestion = {

            question: quiz.Question,
            answers: quiz.map((z : any) => {
                if(z=== "Question") return
                return z
            }
            ),
            correctAnswer: 

        }
        
    
    })
}