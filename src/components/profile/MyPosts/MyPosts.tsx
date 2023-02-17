import React, {ChangeEvent, useState} from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type PostsPropsType = {
    posts: PostType[]
}

export const MyPosts: React.FC<PostsPropsType> = (props) => {

    let [title, setTitle] = useState('')

    let postsElements = props.posts.map((post) => {
        return (
            <Post key={post.id} message={post.post} likesCount={post.likesCount}/>
        )
    })

    const addPostHandler = () => {
        console.log(title)
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(event.currentTarget.value)
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onChangeHandler} value={title}></textarea>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div>
                New Post
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
};

