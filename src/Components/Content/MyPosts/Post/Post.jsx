import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.dot}>

      </div>
      <div className={classes.messages}>
        {props.message}
      </div>
    </div>
  );
};

export default Post;
