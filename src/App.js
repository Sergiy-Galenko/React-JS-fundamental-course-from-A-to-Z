import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import "./components/styles/App.css";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "JavaScript", body: "Description" },
        { id: 2, title: "React", body: "A library for building UI" },
        { id: 3, title: "Node.js", body: "JavaScript runtime" },
    ]);

    const [selectedSort, setSelectSort] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const sortedPost = useMemo(() => {
        if(selectedSort){
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;

    },[selectedSort, posts]);

    const sordedAndSearchedPost = useMemo(() => {
        return  sortedPost.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPost])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const sortPost = (sort) => {
        setSelectSort(sort);
        setPosts(sortedPost);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{ margin: "15px 0" }} />
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholer="Search..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}
                    defautValue="Sorted"
                    option={[
                        { value: "title", name: "By name" },
                        { value: "body", name: "By body" },
                    ]}
                />
            </div>
            <PostList remove={removePost} posts={sordedAndSearchedPost} title="List of Posts"  />
        </div>
    );
}

export default App;
