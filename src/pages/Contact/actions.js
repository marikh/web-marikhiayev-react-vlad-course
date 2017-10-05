export const actionTypes = {
    CONTACT_FIELD_CHANGED: 'CONTACT_FIELD_CHANGED',
    CONTACT_FORM_SUBMITTED: 'CONTACT_FORM_SUBMITTED',
    SUBMITTING: 'SUBMITTING',
    FAILED_SUBMITTING: 'FAILED_SUBMITTING',
    UNLOAD_CONTACT_FORM: 'UNLOAD_CONTACT_FORM',
}

export const updateFieldAction = (changedFieldName, newValue) => ({
    type: actionTypes.CONTACT_FIELD_CHANGED,
    changedFieldName: changedFieldName,
    newValue: newValue
})

export const submittingAction = () => ({
    type: actionTypes.SUBMITTING,
})

export const contactFormSubmittedAction = () => ({
    type: actionTypes.CONTACT_FORM_SUBMITTED,
})

export const failedSubmitAction = () => ({
    type: actionTypes.FAILED_SUBMITTING,
})

export const submitAction = () => (dispatch, getState) => {
    dispatch(submittingAction());
    dispatch(contactFormSubmittedAction());
    alert("Sent");
}

export const unloadContactForm = () => ({
    type: actionTypes.UNLOAD_CONTACT_FORM,
})