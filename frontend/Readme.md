[What I Learn]

인라인 스타일을 적용하면 객체{}가 생성되어 리렌더링 현상이 발생한다. {} !== {}
따라서, styled components 를 사용하거나 UseMemo()를 통해 메모이제이션을 하여 최적화시킨다.
리렌더링 될 때 이전 컴포넌트의 virtual DOM 과 지금 컴포넌트의 virtual DOM을 비교해서 달라진 부분만 다시 그려줌

// 리렌더링 최적화
//[1]
// const style = useMemo(() => {
// marginTop: 10;
// }, []);
//[2]
// const ButtonWrapper = styled.div`
//   margin-top: 10px;
// `;

// contextApi 와 리덕스의 사용
// contextApi 는 components 안에서 직접 코드구현을 해줘야 하는데 의도치않은 코드 중복이 발생할 수 있고
// component는 화면을 그려주는 역할만 하는 게 더 적합하며 데이터는 중앙데이터 저장소에서 관리하는 게 좋다.
// contextApi도 밖으로 꺼내 따로 폴더를 만들 수는 있으나 Redux 와 굉장히 비슷해지기 때문에 비동기요청이 많을 경우에 Redux를 사용하는 게 더 좋다고 판단됨.
// 앱이 커지면 데이터도 커지기 때문에 적절히 중앙데이터 저장소도 쪼개주는 작업이 필요한데 리덕스는 reducer로 쪼갤 수 있다.

** 

[How I Fixed Errors]
[1]
Warning: Prop `className` did not match. Server: "ant-input-group-wrapper ant-input-search ant-input-search-with-button sc-kDvujY eojgoH css-dev-only-do-not-override-1hyej8k" Client: "ant-input-group-wrapper ant-input-search ant-input-search-with-button sc-gswNZR cfHpOZ css-dev-only-do-not-override-1hyej8k"

Next.js 에서 styled-components를 사용하면 뜨는 경고다.
서버와 클라이언트의 클래스명이 다른 것인 원인으로 Next.js는 첫 페이지 로드가 SSR로 작동하기 때문에
서버에서 생성된 컴포넌트와 CSR로 클라이언트에서 생성된 컴포넌트의 클래스명이 서로 달라지게 된다.
환경에 따라 달라지는 className을 일관되게 해주는 것이 babel-plugin-styled-components 로 설치 후
.babelrc 파일안에 추가적인 설정을 해주면 된다.

[Fix yet]
[1]
input에 hidden 속성이 적용되지 않아서 style={{ display: none }} 처리로 대체함. 왜 적용이 안될까
