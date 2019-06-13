import { postContact } from "../lib/api"

export const receiveSuccessContact = () => ({
  type: "RECEIVE_SUCCESS_CONTACT",
})

export const receiveErrorContact = () => ({
  type: "RECEIVE_ERROR_CONTACT",
})

export const fetchContact = data => ({
  type: "FETCH_CONTACT",
  payload: data
})

export const sendContact = values => {
  return dispatch => {

    dispatch(fetchContact(true))
    
    postContact(values)
      .then(res => {
        dispatch(fetchContact(false))
        dispatch(receiveSuccessContact())
      })
      .catch(res => {
        dispatch(fetchContact(false))
        dispatch(receiveErrorContact())
      })
  }
}