import { all, fork } from "redux-saga/effects";
// take 는 1회용이기 때문에 while(true) {} 문으로 감싸준다. 하지만 직관적이지 않으므로 take 대신에 takeEvery를 사용한다.
// takeLatest 는 클릭이 두번되었을 때 두 번 실행되지 않기 위해 마지막 것만 실행되도록 하는 effect 이다. (요청은 취소되지 않고 응답만 취소되므로 서버에는 두개가 저장됨(치명적단점))
// takeLeading 은 첫번째 것만 실행되도록 하는 effect 이다.
// throttle 은 시간제한을 두어 그 시간동안에 한번만 실행되도록 요청하는 것이다. (특수한 경우에 사용, 디도스 공격을 막을 때 좋음)

import userSaga from "./user";
import postSaga from './post'

// function* : generator 는 yield(중단점)가 있는 곳에서 멈춤 
export default function* rootSaga() {
  // all 은 fork 나 call 을 동시에 실행시켜준다.
  yield all([
    // fork !== call
    // fork 는 비동기 함수 호출 , call 은 동기 함수 호출
    fork(userSaga),
    fork(postSaga),
  ]);
}
