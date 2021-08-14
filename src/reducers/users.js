import { GET_USERS, ADD_USER_QUESTION, SAVE_USER_ANSWER } from "../actions/usres"

export default function users (state = {}, action) {
  switch(action.type) {
    case GET_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_USER_QUESTION:
      return {
              ...state,
              [action.user] : {
                ...state[action.user],
                answers : {
                  ...state[action.user].answers,
                  [action.qid] : action.answer
                }
              }
            }
    case SAVE_USER_ANSWER:
      return {
              ...state,
              [action.user] : {
                ...state[action.user],
                questions: [...state[action.user].questions, action.qid]
              }
            }
    default :
      return state
  }
} 