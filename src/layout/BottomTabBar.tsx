import styled from "styled-components";
import { FaHome, FaSearch, FaPlusCircle, FaBell, FaUser } from "react-icons/fa";

function BottomTabBar() {
  return (
    <Wrapper>
      <TabButton>
        <FaHome />
      </TabButton>
      <TabButton>
        <FaSearch />
      </TabButton>
      <TabButton>
        <FaPlusCircle />
      </TabButton>
      <TabButton>
        <FaBell />
      </TabButton>
      <TabButton>
        <FaUser />
      </TabButton>
    </Wrapper>
  );
}

export default BottomTabBar;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 56px;
  border-top: 1px solid #ddd;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  @media (min-width: 700px) {
    display: none;
  }
`;

const TabButton = styled.button`
  background: none;
  border: none;
  color: #222;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
