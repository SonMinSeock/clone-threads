import { FaThreads } from "react-icons/fa6";
import styled from "styled-components";

// 전체 앱 레이아웃을 감싸는 최상위 Flex 컨테이너
export const Layout = styled.div`
  display: flex;
  background-color: #fafafa;
`;

// 데스크탑 사이드바 (좌측 고정, 아이콘 메뉴)
export const Sidebar = styled.div`
  width: 64px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  @media (max-width: 699px) {
    display: none; // 모바일에서는 숨김
  }
`;

// 상단 Threads 로고 아이콘
export const ThreadsIcon = styled(FaThreads)`
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1); // 호버 시 약간 확대
  }
`;

// 사이드바 내 메뉴 아이콘 그룹 (상/하단 메뉴 구분용)
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px 0;
  svg {
    color: #4a4a4a;
  }
  span {
    display: inline-flex; /* 아이콘 크기에 맞게 영역 조절 */
    padding: 4px; /* 배경과 아이콘 사이 간격 확보 */
    border-radius: 8px; /* 둥근 모서리 */
  }

  span:hover {
    background-color: rgba(74, 74, 74, 0.1); /* 불투명도 10% 배경색만 적용 */
    cursor: pointer;
  }
`;

// 메인 콘텐츠 영역 전체 래퍼 (피드 + 우측 패널 포함)
export const MainWrapper = styled.div`
  flex: 1;
  margin-left: 64px; // 사이드바 너비만큼 마진
  display: flex;
  justify-content: center;
  gap: 100px;
  padding: 0 20px;
  @media (max-width: 1049px) {
    gap: 24px;
  }
  @media (max-width: 699px) {
    margin-left: 0;
    padding: 0;
  }
`;

// 가운데 피드 콘텐츠 컨테이너
export const FeedContainer = styled.main`
  flex: 1;
  max-width: 600px;
  padding-bottom: 80px; // 하단 내비 공간 확보
  @media (max-width: 699px) {
    padding: 0 12px 80px;
  }
`;

// 데스크탑 상단 '홈' 텍스트 타이틀 (sticky)
export const Title = styled.div`
  position: sticky;
  top: 0;
  background: #fafafa;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 699px) {
    display: none; // 모바일에서는 숨김
  }
  span {
    cursor: pointer;
  }
`;

// 모바일 전용 상단 Threads 로고 아이콘
export const TitleIcon = styled.div`
  position: sticky;
  top: 0;
  background: #fafafa;
  display: none;
  @media (max-width: 699px) {
    display: flex;
    justify-content: center;
    padding: 8px 0;
  }
`;

// 데스크탑 전용 로그인 패널 (우측 사이드)
export const RightPanel = styled.aside`
  width: 280px;
  flex-shrink: 0;
  position: sticky;
  top: 48px;
  align-self: flex-start;
  padding: 24px;
  margin-top: 56px;
  background: #f5f5f5;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  line-height: 1.5;
  @media (max-width: 1059px) {
    display: none; // 데스크탑 이상에서만 표시
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  p {
    text-align: center;
    font-size: 13px;
    color: #555;
  }

  .ig-login {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    padding: 10px 20px;
    background: #fff;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 500;
    border: 1px solid #dbdbdb;
  }

  .text-login {
    font-size: 12px;
    color: #888;
    margin-top: 12px;
    cursor: pointer;
  }
`;

// 인스타그램 로그인 버튼 스타일
export const LoginButton = styled.button`
  padding: 8px 16px;
  background: #000;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  border: none;
  cursor: pointer;
`;

// 모바일 뷰에서 오른쪽 상단 고정 로그인 버튼
export const TopRightLogin = styled.div`
  display: none;
  @media (max-width: 1059px) {
    display: flex;
    position: fixed;
    top: 9px;
    right: 16px;
    z-index: 20;
  }
`;

// 모바일 오른쪽 상단 로그인 버튼 내부 스타일
export const TopRightLoginButton = styled.button`
  padding: 8px 16px;
  background: #000;
  color: #fff;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  border: none;
  cursor: pointer;
`;

// 모바일 하단 내비게이션 바
export const BottomNav = styled.nav`
  display: none;
  @media (max-width: 699px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 56px;
    background: #ffffff;
    border-top: 1px solid #ddd;
    justify-content: space-around;
    align-items: center;
    z-index: 10;

    svg {
      color: #4a4a4a;
    }
    span {
      display: inline-flex; /* 아이콘 크기에 맞게 영역 조절 */
      padding: 4px; /* 배경과 아이콘 사이 간격 확보 */
      border-radius: 8px; /* 둥근 모서리 */
    }

    span:hover {
      background-color: rgba(74, 74, 74, 0.1); /* 불투명도 10% 배경색만 적용 */
      cursor: pointer;
    }
  }
`;
