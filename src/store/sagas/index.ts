import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { ActionTypeUserReducer, TypesUserReducer, UserChange, UserCreate } from '../../types/redux/user'
import { ActionUserChange } from '../actions/ActionsUser'


export function* sagaWatcher() {
   yield takeEvery(TypesUserReducer.USER_CHANGE, toSeassonUser)
}


function* toSeassonUser(action: UserChange | UserCreate) {
   yield put(ActionUserChange(action.payload))
}