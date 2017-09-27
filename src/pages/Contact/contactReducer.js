import { actionTypes } from './actions'

const INITIAL_STATE = {
  name : "",
  email : "",
  message : "",
  submitContactFailed: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CONTACT_FIELD_CHANGED:
      return {
        ...state,
        [action.changedFieldName]: action.newValue,
        submitContactFailed: false,
      }

    case actionTypes.CONTACT_FORM_SUBMITTED:
      return {
        ...state,
        name : "",
        email : "",
        message : "",
        submitContactFailed: false,
      }

    case actionTypes.FAILED_SUBMITTING:
      return {
        ...state,
        submitContactFailed: true,
      }

    case actionTypes.UNLOAD_CONTACT_FORM:
      return {
        ...state,
        ...INITIAL_STATE
      }

    default:
      return state
  }
};

export const getNameSelector = (state) => {
    return state.contact.name;
}

export const getEmailSelector = (state) => {
    return state.contact.email;
}

export const getMessageSelector = (state) => {
    return state.contact.message;
}

export const getSubmitContactFailedSelector = (state) => {
    return state.contact.submitContactFailed;
}

export const getIsDirtySelector = (state) => {
    return state.contact.name.length > 0 || state.contact.email.length > 0 || state.contact.message.length > 0;
}
