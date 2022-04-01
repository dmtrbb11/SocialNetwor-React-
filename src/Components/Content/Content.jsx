import classes from "./Content.module.css";
import MyPosts from "./MyPosts/MyPosts";
import AccInfo from "./AccInfo/AccInfo";

const Content = (props) => {
  return (
    <div>
      <AccInfo />
      <MyPosts
        posts={props.posts}
        addPost={props.addPost}
        updateTextArea={props.updateTextArea}
      />
    </div>
  );
};

export default Content;
