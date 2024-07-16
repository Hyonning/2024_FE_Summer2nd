import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { dummy_data } from "../data/dummy_data";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

const Header = styled.header`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 50px;
  padding: 5px 10px;
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
`;

const Date = styled.div`
  font-size: 14px;
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.span`
  background-color: #e0e0e0;
  border-radius: 10px;
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
        <UserMenu>
          <UserName>서현</UserName>
          <Button>새 글작성</Button>
        </UserMenu>
      </Header>
      <PostContainer>
        <Title>{post.title}</Title>
        <PostInfo>
          <Author>{post.writer}</Author>
          <Date>{post.createdAt}</Date>
          <Tags>
            <Tag>React</Tag>
            <Tag>TanStack</Tag>
            <Tag>작성중</Tag>
          </Tags>
        </PostInfo>
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
      <InteractionPanel>
        <LikeButton>
          <LikeIcon>❤️</LikeIcon>
          <LikeCount>{post.like}</LikeCount>
        </LikeButton>
        <ShareButton>
          <ShareIcon>🔗</ShareIcon>
        </ShareButton>
      </InteractionPanel>
    </PageWrapper>
  );
}

export default PostDetailPage;
