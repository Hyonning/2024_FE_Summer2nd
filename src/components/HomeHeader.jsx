import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 1100px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  cursor: pointer;
  width: 30px; /* 아이콘의 크기를 조정합니다 */
  height: 30px;
  margin-left: 20px;
  padding: 5px;

  svg {
    width: 100%;
    height: 100%;
    fill: #000;
  }

  &:hover {
    svg {
      fill: #010101;
    }
  }
`;

const LoginButton = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-left: 20px;
  padding: 10px 20px; /* 버튼 크기를 조정합니다 */
  font-size: 16px;
  border: none;
  border-radius: 20px;
  background-color: #000;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

function HomeHeader() {
  return (
    <Header>
      <Logo>velog</Logo>
      <Icons>
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M16 3a2 2 0 0 0-2 2c0 .086.02.168.031.25C10.574 6.133 8 9.273 8 13v9c0 .566-.434 1-1 1H6v2h7.188A2.95 2.95 0 0 0 13 26c0 1.645 1.355 3 3 3s3-1.355 3-3a2.95 2.95 0 0 0-.188-1H26v-2h-1c-.566 0-1-.434-1-1v-8.719c0-3.758-2.512-7.11-6.031-8.031c.011-.082.031-.164.031-.25a2 2 0 0 0-2-2m-.438 4c.145-.012.29 0 .438 0h.188C19.453 7.098 22 9.96 22 13.281V22c0 .352.074.684.188 1H9.813A2.95 2.95 0 0 0 10 22v-9a6.005 6.005 0 0 1 5.563-6zM16 25c.563 0 1 .438 1 1c0 .563-.438 1-1 1c-.563 0-1-.438-1-1c0-.563.438-1 1-1"
            />
          </svg>
        </Icon>
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1S492.1 112 412 112s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6M570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4"
            />
          </svg>
        </Icon>
        <LoginButton>로그인</LoginButton>
      </Icons>
    </Header>
  );
}

export default HomeHeader;
