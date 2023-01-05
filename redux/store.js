import { createStore, combineReducers} from 'redux';
import CountReducer from './reducers/countReducer';
import CurrentTabReducer from './reducers/currentTabReducer'; 
import CurrentUserReducer from './reducers/userIDReducer';
import StudentDataReducer from './reducers/studentDataReducer';
import CommunityDataReducer from './reducers/communityDataReducer';
import urlReducer from './reducers/urlReducer';

const rootReducer = combineReducers({
  count1: CountReducer,
  tabName: CurrentTabReducer,
  userID: CurrentUserReducer,
  userData: StudentDataReducer,
  communityData: CommunityDataReducer,
  url: urlReducer,
});
 
export const store = createStore(rootReducer);