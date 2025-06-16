import React from "react";
import styled from "styled-components";
import TopNav from "./TopNav";
import BottomTabBar from "./BottomTabBar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <TopNav />
      <Main>
        <SideNavWrapper>{/* <SideNav /> */}</SideNavWrapper>
        <Content>{children}</Content>
        <RightPanelWrapper>{/* <RightPanel /> */}</RightPanelWrapper>
      </Main>
      <BottomTabBar />
    </Wrapper>
  );
}

export default AppLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SideNavWrapper = styled.aside`
  display: none;

  @media (min-width: 700px) {
    display: block;
    width: 240px;
    padding-top: 20px;
  }
`;

const RightPanelWrapper = styled.aside`
  display: none;

  @media (min-width: 1060px) {
    display: block;
    width: 300px;
    padding-top: 20px;
  }
`;

const Content = styled.section`
  flex: 1;
  max-width: 600px;
  padding: 20px;
`;
