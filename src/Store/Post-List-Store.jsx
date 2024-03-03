import { createContext, useReducer } from "react";

export const PostList=createContext({
    postList : [],
    addPost : ()=>{},
    deltePost : ()=>{},
});

const postListReducer = (currPostList, action)=>{
    let newPostList=currPostList;
    if(action.type==='DELETE_POST'){
        newPostList= currPostList.filter(post=>post.id !== action.payload.postId)
    }
    else if(action.type==="ADD_POST"){
        newPostList=[action.payload, ...currPostList]
           
    }
    return newPostList;
}

const PostListProvider = ({children}) =>{

    const[postList, dispatchPostList]=useReducer( postListReducer, DEFAULT_POST_LIST)

    const addPost = (userId, postTitle, postBody, reactions,tags) => {
      
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags,
            }
        })
    };



    const deletePost = (postId) => {
        dispatchPostList({
            type : "DELETE_POST",
            payload: {
                postId,
            },
        });
    }

    return <PostList.Provider value={{
        postList, addPost, deletePost
    }}>
        {children}
    </PostList.Provider>
};

const DEFAULT_POST_LIST = [{
    id:1,
    title:'Going to Mumbai',
    body:'Hi friends i am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.',
    reactions:24,
    userId: 'user1',
    tags:['vacations', 'Mumbai','enjoying']
},
{
    id:2,
    title:'Manali trip is on',
    body:'Hey guys welcome to my blog on manali, a heavy snowfall is there. stay tuned for further updates',
    reactions:67,
    userId: 'user11',
    tags:['vacations', 'Manali','enjoying','snowfall']
}]

export default PostListProvider;