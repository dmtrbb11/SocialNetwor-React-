import classes from "./UserMessage.module.css";

const UserMessage = (props) => {
  return <div className={classes.message_item}>{props.textMessage}</div>;
};

export default UserMessage;
