import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title,remove }) => {
    if (!posts || posts.length === 0) {
        return <h2 style={{ textAlign: "center" }}>No posts available</h2>;
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            {posts.map((post, index) => (
                <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            ))}
        </div>
    );
};

export default PostList;
