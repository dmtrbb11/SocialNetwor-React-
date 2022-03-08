import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <div className={classes.add_post_info}>
        <h1 className={classes.h1_myPosts}>My posts</h1>

        <textarea
          width="100px"
          height="100px"
          className={classes.textarea_post}
          placeholder="Your post"
        ></textarea>

        <button className={classes.postAdd_btn}>Add</button>
      </div>

      <div className={classes.posts}>
        <Post message="Hello gamburger" />
        <Post message="I love chickenburger" />
        <Post message="I love chickenburger" />
        <Post message="I love chickenburger" />
        <Post message="I love chickenburger" />
        <Post message="I love chickenburger" />
        <Post message="I love chickenburger" />
      </div>
    </div>
  );
};

export default MyPosts;
