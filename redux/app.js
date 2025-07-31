// 초기 state
const initialState = {
  count: 0, // useState
  step: 1,  // useState
  log: [],  // useState
};

// 리듀서 정의
// : reducer는 store.dispatch(action)이 호출될 때, Redux store 내부에서 자동으로 호출됩니다.
//   store는 reducer가 리턴한 새로운 state를 받아서, 자신의 state tree를 업데이트함.
//   그리고 store.subscribe()에 등록된 리스너를 실행
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + state.step,
        log: [...state.log, `+${state.step}`],
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - state.step,
        log: [...state.log, `-${state.step}`],
      };
    case 'SET_STEP':
      return {
        ...state,
        step: action.payload,
        log: [...state.log, `step 변경 → ${action.payload}`],
      };
    case 'RESET':
      return {
        ...initialState,
        log: [...state.log, '초기화'],
      };
    default:
      return state;
  }
}

// 스토어 생성
const store = Redux.createStore(reducer);

// DOM 요소 연결
const countEl = document.getElementById('count');
const logEl = document.getElementById('log');
const stepInput = document.getElementById('step');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// state 변경 시 UI 갱신
// 리스너 등록(() => {}) : store에 "state 변화가 발생했을 때 실행할 함수"
store.subscribe(() => {
  const state = store.getState();
  countEl.innerText = state.count;
  logEl.innerHTML = state.log.map((item) => `<li>${item}</li>`).join('');
  stepInput.value = state.step;
});

// 이벤트 핸들링
incBtn.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

decBtn.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
});

resetBtn.addEventListener('click', () => {
  store.dispatch({ type: 'RESET' });
});

stepInput.addEventListener('input', (e) => {
  store.dispatch({ type: 'SET_STEP', payload: Number(e.target.value) });
});
