import React from "react";
import styled from "styled-components";

function RightPanel() {
  return (
    <Wrapper>
      <Section>
        <SectionTitle>팔로우 제안</SectionTitle>
        <UserList>
          <UserItem>
            <Avatar />
            <UserInfo>
              <Username>user_01</Username>
              <FollowButton>팔로우</FollowButton>
            </UserInfo>
          </UserItem>
          <UserItem>
            <Avatar />
            <UserInfo>
              <Username>user_02</Username>
              <FollowButton>팔로우</FollowButton>
            </UserInfo>
          </UserItem>
        </UserList>
      </Section>
    </Wrapper>
  );
}

export default RightPanel;

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 1060px) {
    display: block;
    padding: 20px;
    width: 300px;
    position: sticky;
    top: 56px; /* TopNav height */
    height: calc(100vh - 56px);
    overflow-y: auto;
    background-color: #fafafa;
    border-left: 1px solid #eee;
  }
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const UserItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-left: 12px;
`;

const Username = styled.span`
  font-weight: 500;
`;

const FollowButton = styled.button`
  background-color: #0095f6;
  color: #fff;
  border: none;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #007fd1;
  }
`;
