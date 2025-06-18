import styled from "styled-components";
import { FaThreads, FaPlus, FaRegHeart, FaInstagram } from "react-icons/fa6";
import { MdOutlinePushPin } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { IoHome, IoSearch, IoPersonOutline } from "react-icons/io5";

const Layout = styled.div`
  display: flex;
  background-color: #fafafa;
`;

const Sidebar = styled.div`
  width: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  @media (max-width: 699px) {
    display: none;
  }
  position: fixed;
  left: 0;
  height: 100%;
`;

const ThreadsIcon = styled(FaThreads)`
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px 0;

  svg {
    color: #4a4a4a;
    cursor: pointer;
  }
`;

const MainWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 100px;
  padding: 0 68px;

  @media (max-width: 1023px) {
    gap: 24px;
  }

  @media (max-width: 699px) {
    justify-content: center;
    padding: 0;
  }
`;

const FeedContainer = styled.main`
  padding-bottom: 24px;

  @media (max-width: 699px) {
    padding: 0 12px;
  }
`;

const Title = styled.span`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #fafafa;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 699px) {
    display: none;
  }
`;

const TitleIcon = styled.div`
  text-align: center;
  position: sticky;
  top: 0px;
  z-index: 1000;
  background-color: #fafafa;

  @media (min-width: 700px) {
    display: none;
  }
`;

const RightPanel = styled.aside`
  min-width: 377px;
  padding: 24px;
  margin-top: 90px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 12px;
  height: fit-content;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 45px;
  @media (max-width: 1059px) {
    display: none;
  }
`;

const RightPanelTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 6px;
`;

const RightPanelText = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

const InstagramText = styled.span``;

const InstagramLoginContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  background-color: #ffffff;
  color: #000000;
  padding: 25px 30px;
  border: none;
  border-radius: 23px;
  font-weight: 600;
  width: 88%;
  cursor: pointer;
`;

const AltLoginText = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 12px;
  text-align: center;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1060px) {
    display: none;
  }
`;

const LoginButton = styled.button`
  padding: 8px 13px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  white-space: nowrap;
  position: sticky;
  top: 10px;
`;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Sidebar>
        <ThreadsIcon size={35} />
        <MenuWrapper>
          <IoHome size={28} />
          <IoSearch size={28} />
          <FaPlus size={28} />
          <FaRegHeart size={28} />
          <IoPersonOutline size={28} />
        </MenuWrapper>
        <MenuWrapper>
          <MdOutlinePushPin size={24} />
          <CiMenuKebab size={24} />
        </MenuWrapper>
      </Sidebar>

      <MainWrapper>
        <FeedContainer>
          <Title>홈</Title>
          <TitleIcon>
            <FaThreads size={35} />
          </TitleIcon>
          {children}
        </FeedContainer>
        <LoginButtonContainer>
          <LoginButton>로그인</LoginButton>
        </LoginButtonContainer>

        <RightPanel>
          <RightPanelTitle>Threads에 로그인 또는 가입하기</RightPanelTitle>
          <RightPanelText>사람들의 이야기를 확인하고 대화에 참여해보세요.</RightPanelText>
          <InstagramLoginContainer>
            <FaInstagram size={30} />
            <InstagramText>Instagram으로 계속</InstagramText>
          </InstagramLoginContainer>
          <AltLoginText>사용자 이름으로 로그인</AltLoginText>
        </RightPanel>
      </MainWrapper>
    </Layout>
  );
}
