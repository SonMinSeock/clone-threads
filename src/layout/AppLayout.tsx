import React from "react";
import { FaPlus, FaRegHeart, FaInstagram } from "react-icons/fa6";
import { MdOutlinePushPin } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { IoHome, IoSearch, IoPersonOutline } from "react-icons/io5";
import {
  BottomNav,
  FeedContainer,
  Layout,
  MainWrapper,
  MenuWrapper,
  RightPanel,
  Sidebar,
  ThreadsIcon,
  Title,
  TitleIcon,
  TopRightLogin,
  TopRightLoginButton,
} from "./AppLayout.style";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Sidebar>
        <ThreadsIcon size={35} />
        <MenuWrapper>
          <span>
            <IoHome size={28} />
          </span>
          <span>
            <IoSearch size={28} />
          </span>
          <span>
            <FaPlus size={28} />
          </span>
          <span>
            <FaRegHeart size={28} />
          </span>
          <span>
            <IoPersonOutline size={28} />
          </span>
        </MenuWrapper>
        <MenuWrapper>
          <span>
            <MdOutlinePushPin size={24} />
          </span>
          <span>
            <CiMenuKebab size={24} />
          </span>
        </MenuWrapper>
      </Sidebar>

      <MainWrapper>
        <FeedContainer>
          <Title>
            <span>홈</span>
          </Title>
          <TitleIcon>
            <ThreadsIcon size={35} />
          </TitleIcon>
          {children}
        </FeedContainer>

        <RightPanel>
          <h3>Threads에 로그인 또는 가입하기</h3>
          <p>사람들의 이야기를 확인하고 대화에 참여해보세요.</p>
          <div className="ig-login">
            <FaInstagram size={20} /> <span>Instagram으로 계속</span>
          </div>
          <div className="text-login">사용자 이름으로 로그인</div>
        </RightPanel>
      </MainWrapper>

      <TopRightLogin>
        <TopRightLoginButton>로그인</TopRightLoginButton>
      </TopRightLogin>

      <BottomNav>
        <span>
          <IoHome size={28} />
        </span>
        <span>
          <IoSearch size={28} />
        </span>
        <span>
          <FaPlus size={28} />
        </span>
        <span>
          <FaRegHeart size={28} />
        </span>
        <span>
          <IoPersonOutline size={28} />
        </span>
      </BottomNav>
    </Layout>
  );
}
