import { HYDRATE } from "next-redux-wrapper";
// 리덕스 서버사이드 렌더링을 위해서 HYDRATE 를 넣어줌 (index Reducer)
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  // combineReducers : reducers (index, user, post)를 합쳐주는 역할
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
