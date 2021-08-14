import { GET_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions'


export default function questions (state = {}, action) {
  switch(action.type) {
    case GET_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ANSWER_QUESTION :
      const votes = state[action.qid][action.answer].votes
            return {
                    ...state,
                    [action.qid]: {
                        ...state[action.qid],
                        [action.answer]: {
                            ...state[action.qid][action.answer],
                            votes: votes.concat([action.authedUser])
                        }
                    }
                  }
    case ADD_QUESTION:
            return {
                    ...state,
                    [action.question.id]: action.question
                   }
    default :
      return state
  }
} 