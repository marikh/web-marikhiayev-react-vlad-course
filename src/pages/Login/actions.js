export const actionTypes = {
    LOGIN_FIELD_CHANGED: 'LOGIN_FIELD_CHANGED'
}

export const updateFieldAction = (changedFieldName, newValue) => ({
    type: actionTypes.LOGIN_FIELD_CHANGED,
    changedFieldName: changedFieldName,
    newValue: newValue
})
