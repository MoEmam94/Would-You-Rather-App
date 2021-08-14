export const GET_USERS = 'GET_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

//Gets all the users
export function getUsers(users) {
    return {
        type: GET_USERS,
        users,
    }
}

//Adds User's question action
export function addUserQuestion (user, qid) {
    return {
      type: ADD_USER_QUESTION,
      user,
      qid,
    }
  }

//Saves User's answer action
export function saveUserAnswer (user, qid, answer) {
    return {
      type: SAVE_USER_ANSWER,
      user,
      qid,
      answer
    }
  }