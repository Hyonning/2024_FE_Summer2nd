import React from "react";
import { Link } from "react-router-dom";
import { dummy_data } from "../data/dummy_data";
import PostCard from "../components/PostCard";
import HomeHeader from "../components/HomeHeader";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "1000px",
      }}
    >
      <HomeHeader />
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        {dummy_data.map((item) => (
          <div key={item.postID}>
            <Link
              to={`/post/${item.postID}`}
              key={item.postID}
              style={{ textDecoration: "none" }}
            >
              <PostCard
                title={item.title}
                content={item.content}
                thumbnail={item.thumbnail}
                createdAt={item.createdAt}
                writer={item.writer}
                like={item.like}
                picture={item.picture}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
