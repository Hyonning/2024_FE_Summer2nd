import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { dummy_data } from "../data/dummy_data";

const PageWrapper = styled.div`
  width: 1100px;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

const Header = styled.header`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Icons = styled.div`
  display: flex;
  cursor: pointer;
  width: 50px; /* 아이콘의 크기를 조정합니다 */
  height: 50px;
  margin-left: 650px;
  flex-direction: row;
  padding: 15px;
  font-weight: bold;

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

const UserMenu = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding: 10px;
  background-color: #a259ff; /* 배경색 */
  color: white; /* 텍스트 색상 */
  border-radius: 50%; /* 원형으로 만들기 위해 50% 사용 */
  width: 20px; /* 원의 크기 */
  height: 20px; /* 원의 크기 */
  font-weight: bold; /* 텍스트를 굵게 */
  font-size: 10px; /* 텍스트 크기 */
  margin-left: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15); /* 약간의 그림자 추가 */
`;

const Button = styled.button`
  display: flex;
  padding-right: 10px;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 50px;
  padding: 5px 10px;
  color: black;
  font-weight: bold;
  margin-left: 5px;
  cursor: pointer;
`;

const PostContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #888;
  margin-bottom: 20px;
`;

const Author = styled.div`
  font-size: 14px;
  color: black;
  font-weight: bold;
`;

const Date = styled.div`
  font-size: 14px;
  margin-right: 30px;
  margin-right: 500px;
`;

const Menu = styled.div`
  font-size: 14px;
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.span`
  background-color: #f2f0f0;
  color: #33d133;
  font-weight: bold;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 14px;
`;

const PostContent = styled.div`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const InteractionPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 10px;
  top: 150px;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LikeIcon = styled.div`
  font-size: 24px;
`;

const LikeCount = styled.div`
  font-size: 14px;
`;

const ShareButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShareIcon = styled.div`
  font-size: 24px;
`;

function PostDetailPage() {
  const { postID } = useParams();
  const post = dummy_data.find((item) => item.postID === Number(postID));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <PageWrapper>
      <Header>
        <Logo>shim.log</Logo>
        <Icons>
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
        </Icons>
        <UserMenu>
          <Button>새 글 작성</Button>
          <UserName>서현</UserName>
        </UserMenu>
      </Header>
      <PostContainer>
        <Title>{post.title}</Title>
        <PostInfo>
          <Author>서현</Author>
          <Date>{post.createdAt}</Date>
          <Menu>통계 수정 삭제</Menu>
        </PostInfo>
        <Tags>
          <Tag>React</Tag>
          <Tag>TanStack</Tag>
          <Tag>작성중</Tag>
        </Tags>
        <PostContent>
          <h2>TanStack</h2>
          <p>
            웹에서 서버 상태 가져오기, 캐싱, 동기화 및 업데이트를 매우 쉽게
            도와줌
          </p>
          <h2>React Query</h2>
          <p>
            React Application에서 서버 상태를 불러오고, 캐싱하고, 지속적으로
            동기화하고 업데이트하는 작업을 도와주는 라이브러리 useInfiniteQuery
            등 무한 스크롤을 구현할 수도 있음
          </p>
        </PostContent>
      </PostContainer>
    </PageWrapper>
  );
}

export default PostDetailPage;
