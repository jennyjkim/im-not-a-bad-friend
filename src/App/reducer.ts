import { fromJS } from 'immutable';
import { actionTypes } from './actions/location';
import ROUTE_NAMES from './constants/routeNames';

const initialState = fromJS({
    routeName: ROUTE_NAMES.HOME,
    routeParams: {},
});

function appReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_LOCATION: {
            return state.set('routeName', action.payload.routeName)
        }

        default:
            return state
    }
}

export default appReducer;