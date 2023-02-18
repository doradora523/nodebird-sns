import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .ant-col:first-child {
    padding-left: 0 !important;
  }
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const menuItems = (Menu.MenuProps = [
  {
    label: <Link href="/">노드버드</Link>,
    key: "nodebird",
  },
  {
    label: <Link href="/profile">프로필</Link>,
    key: "profile",
  },
  {
    label: <SearchInput enterButton />,
    key: "search",
  },
  {
    label: <Link href="/signup">회원가입</Link>,
    key: "signup",
  },
]);

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);

  return (
    <>
      <Global />
      <Menu mode="horizontal" items={menuItems} />
      <Row gutter={8}>
        {/* gutter = 컬럼사이의 간격 */}
        {/* xs=mobile sm=tab md=small desktop  */}
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/doradora523"
            target="_blank"
            rel="noreferer noopener"
          >
            Made by Sukyung
          </a>
        </Col>
      </Row>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
