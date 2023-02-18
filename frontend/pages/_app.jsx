import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import 'antd/dist/antd.css'
import wrapper from "../store/configureStore";

// _app.js 는 pages 들의 공통 부분
const NodeBird = ({ Component }) => {
  return (
    <>
    {/* <Provider store={store}> 리액트에서는 리덕스를 사용하기 위해서
     Provider로 감싸주는데 Next 에서는 자동으로 감싸주므로 필요없음*/}
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(NodeBird);
