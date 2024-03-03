import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { PostList } from "../Store/Post-List-Store";


function Post({ post }) {
  const{deletePost}=useContext(PostList);
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
            <MdDeleteOutline />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-info tags" key={tag}>{tag}</span>
        ))}
        <div className="alert alert-info " role="alert">
          <div className="reactions">
            <div>
              <CiHeart className="like"/>
              {post.reactions}
            </div>
            <FaRegComment className="icon"/>
            <IoMdShareAlt className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
