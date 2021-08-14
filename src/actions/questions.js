import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { saveUserAnswer, addUserQuestion } from './usres'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function getQuestions (questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  }
}

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function answerQuestion ({qid, authedUser, answer}) {
  return {
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer,
  }
}

//Asynch Actions

//Answer qustion with optimistic updates
export function handleAnswerQuestion (authedUser, qid, answer) {
    return (dispatch) => {
      dispatch(answerQuestion(authedUser, qid, answer))
      dispatch(saveUserAnswer(authedUser, qid, answer))
      return saveQuestionAnswer({
        authedUser,
        qid,
        answer
        })
            .catch(e => {
                console.warn('Error in handleAnswerQuestion: ', e)
                    dispatch(answerQuestion(authedUser, qid, answer))
                    dispatch(saveUserAnswer(authedUser, qid, answer))
                alert('There was an error Answering the Question! Try again :(')
            })
    }
}


export function handleAddQuestion(author, optionOneText, optionTwoText) {
  const question = {
            author: author,
            optionOneText,
            optionTwoText,
  }
  return (dispatch) => {
        dispatch(showLoading())
        return saveQuestion(question)
          .then((question) => {
            dispatch(addQuestion(question))
            dispatch(addUserQuestion(question.author, question.id))
          })
        .then(() => dispatch(hideLoading()))
    }
}
  
