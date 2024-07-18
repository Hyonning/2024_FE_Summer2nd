import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  background-color: #f8f9fa;
  display: flex;
  margin-top: 0.7rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

function App() {
  return <Layout />;
}

export default App;
