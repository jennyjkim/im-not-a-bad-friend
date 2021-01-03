export const actionTypes = {
    UPDATE_LOCATION: 'UPDATE_LOCATION',
}
export const updateLocation = ({ routeName }) => ({
    type: actionTypes.UPDATE_LOCATION,
    payload: { routeName },
})