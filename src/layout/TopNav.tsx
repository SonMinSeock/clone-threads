import styled from "styled-components";

function TopNav() {
  return (
    <Wrapper>
      <Logo>⌁</Logo>
      <Title>홈</Title>
      <LoginButton>로그인</LoginButton>
    </Wrapper>
  );
}

export default TopNav;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 700px) {
    display: none;
  }
`;

const LoginButton = styled.button`
  font-size: 14px;
  background: transparent;
  border: none;
  color: #0095f6;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
