import react from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";



const MyPosts = (props) => {


  let posts = props.posts.postsPage.posts.map((e, pos) => (
    <Post key={pos} message={e.post} />
  ));


  let postTextArea = react.createRef();

  let addPostBtn = () =>{
    props.addPost();
  }


  let textAreaChange = () =>{
    let text = postTextArea.current.value;
    props.updateTextArea(text);
  }

  return (
    <div className={classes.posts}>
      <div className={classes.add_post_info}>
        <h1 className={classes.h1_myPosts}>My posts</h1>
        <textarea
          width="100px"
          height="100px"
          className={classes.textarea_post}
          placeholder="Your post"
          ref={postTextArea}
          onChange={textAreaChange}
        ></textarea>

        <button className={classes.postAdd_btn} onClick={addPostBtn}>
          Add
        </button>
      </div>

      <div className={classes.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
