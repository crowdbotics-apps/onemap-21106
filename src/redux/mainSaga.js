import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth1129244Saga from '../features/EmailAuth1129244/redux/sagas';
import EmailAuth2127461Saga from '../features/EmailAuth2127461/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth1129244Saga,
EmailAuth2127461Saga,
    
  ]);
}