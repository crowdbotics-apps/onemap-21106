import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth1129244Reducer from '../features/EmailAuth1129244/redux/reducers';
import EmailAuth2127461Reducer from '../features/EmailAuth2127461/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth1129244: EmailAuth1129244Reducer,
EmailAuth2127461: EmailAuth2127461Reducer,

});