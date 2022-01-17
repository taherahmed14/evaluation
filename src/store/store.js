import { createStore, combineReducers } from "redux";
import { reducer as jobsReducer } from "../features/jobs/reducer";
import { reducer as adminLoginReducer } from "../features/AdminLogin/reducer";
import { reducer as userLoginReducer } from "../features/UserLogin/reducer";
import { reducer as applyJobsReducer } from "../features/applyjobs/reducer";

const rootReducer = combineReducers({
    jobsState: jobsReducer,
    adminLoginState: adminLoginReducer,
    userLoginState: userLoginReducer,
    applyJobsState: applyJobsReducer
});

export const store = createStore(rootReducer);