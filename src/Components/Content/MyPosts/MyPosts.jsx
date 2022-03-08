import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  let arrPosts = [
    { id: 1, post: "Today was a great day" },
    { id: 2, post: "Hi" },
    { id: 3, post: "How are u doing" },
    { id: 4, post: "Make my home work" },
    { id: 5, post: "Today was a great day" },
  ];

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
        <Post message={arrPosts[0].post} />
        <Post message={arrPosts[1].post} />
        <Post message={arrPosts[2].post} />
        <Post message={arrPosts[3].post} />
        <Post message={arrPosts[4].post} />
      </div>
    </div>
  );
};

export default MyPosts;
