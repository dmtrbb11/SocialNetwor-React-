import classes from "./Content.module.css";
import MyPosts from "./MyPosts/MyPosts";
import AccInfo from "./AccInfo/AccInfo";

const Content = () => {
  return (
    <div>
      <AccInfo />
      <MyPosts />
    </div>
  );
};

export default Content;
