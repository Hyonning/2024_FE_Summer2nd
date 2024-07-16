import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 350px;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: transform 0.3s;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.01);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
  border-radius: 10px 10px 0 0;
`;

const Content = styled.div`
  padding: 16px;
  height: 180px; /* Fixed height for the content */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 18px;
  margin: 0 0 12px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Text = styled.div`
  font-size: 14px;
  margin: 0 0 16px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CreatedAt = styled.div`
  font-size: 12px;
  color: #777;
  margin-bottom: 12px;
  border-top: 1px solid #bdbdbd;
  padding-top: 12px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Writer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  font-family: Arial, sans-serif;
`;

const Picture = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  font-family: "Courier New", Courier, monospace;
  &::before {
    content: "";
    display: inline-block;
    margin-right: 4px;
    width: 24px;
    height: 24px;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Im0xMiAyMS4zNWwtMS40NS0xLjMyQzUuNCAxNS4zNiAyIDEyLjI3IDIgOC41QzIgNS40MSA0LjQyIDMgNy41IDNjMS43NCAwIDMuNDEuODEgNC41IDIuMDhDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgM0MxOS41OCAzIDIyIDUuNDEgMjIgOC41YzAgMy43Ny0zLjQgNi44Ni04LjU1IDExLjUzIi8+Cjwvc3ZnPg==")
      no-repeat;
  }
`;

function PostCard({
  title,
  content,
  thumbnail,
  createdAt,
  writer,
  like,
  picture,
}) {
  return (
    <Card>
      <Thumbnail src={thumbnail} alt="Thumbnail" />
      <Content>
        <Title>{title}</Title>
        <Text>{content}</Text>
        <CreatedAt>{createdAt}</CreatedAt>
        <Footer>
          <Writer>
            <Picture src={picture} alt="Writer's Picture" />
            {writer}
          </Writer>
          <Like>{like}</Like>
        </Footer>
      </Content>
    </Card>
  );
}

export default PostCard;
