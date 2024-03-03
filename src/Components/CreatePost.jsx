import React, { useContext, useRef } from 'react'
import { PostList } from '../Store/Post-List-Store';


function CreatePost() {
    const{addPost}=useContext(PostList)
    const userIdElement=useRef();
    const postTitleElement=useRef();
    const postBodyElement=useRef();
    const reactionsElement=useRef();
    const tagsElement=useRef();

    const handelSubmit=(e)=>{
        e.preventDefault();
        const userId=userIdElement.current.value;
        const postTitle= postTitleElement.current.value;
        const postBody=postBodyElement.current.value;
        const reactions=reactionsElement.current.value;
        const tags=tagsElement.current.value.split(' ');

        userIdElement.current.value="";
        postTitleElement.current.value="";
        postBodyElement.current.value="";
        reactionsElement.current.value="";
        tagsElement.current.value="";

        addPost(userId, postTitle, postBody, reactions,tags)
    }
    return (
        <form className='form-container ' onSubmit={handelSubmit}>
            <div className="mb-3 ">
                <label htmlFor="userId" className="form-label">Enter your User Id here</label>
                <input id="userId" type="text" ref={userIdElement} className="form-control" placeholder='Your User Id'  />
            </div>
            <div className="mb-3 ">
                <label htmlFor="title" className="form-label">Post Titel</label>
                <input id="title" type="text" ref={postTitleElement}className="form-control" placeholder='How are you felling today'  />
            </div>
            <div className="mb-3 ">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea id='body' type="text" ref={postBodyElement}className="form-control" placeholder='tell us more about it' rows='4' />
            </div>
            <div className="mb-3 ">
                <label htmlFor="reactions" className="form-label">Number of reactions</label>
                <input id='reactions' type="text" ref={reactionsElement}className="form-control" placeholder='How many people reacted to this post'  />
            </div>
            <div className="mb-3 ">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input id='tags' type="text" ref={tagsElement}className="form-control" placeholder='Please enter your tags using space'  />
            </div>
            
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    )
}

export default CreatePost
