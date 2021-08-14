import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
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

export function handleAnswerQuestion (info) {
    return (dispatch) => {
        dispatch(answerQuestion(info))
        return saveQuestionAnswer(info)
            .catch(e => {
                console.warn('Error in handleAnswerQuestion: ', e)
                dispatch(answerQuestion(info))
                alert('There was an error Answering the Question! Try again :(')
            })
    }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText
        })
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }
}

