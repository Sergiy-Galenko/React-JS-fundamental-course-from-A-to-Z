import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import "./components/styles/App.css";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "JavaScript", body: "Description" },
        { id: 2, title: "React", body: "A library for building UI" },
        { id: 3, title: "Node.js", body: "JavaScript runtime" },
    ]);

    const [post, setPost] = useState({ title: "", body: "" });

    const addNewPost = (e) => {
        e.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({ title: "", body: "" });
    };

    return (
        <div className="App">
            <form>
                <MyInput
                    value={post.title}
                    onChange={(e) =>
                        setPost({ ...post, title: e.target.value })
                    }
                    type="text"
                    placeholder="name post"
                />
                <MyInput
                    value={post.body}
                    onChange={(e) => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder="description post"
                />
                <MyButton onClick={addNewPost}>create post</MyButton>
            </form>
            <PostList posts={posts} title="List post 1" />
        </div>
    );
}

export default App;
