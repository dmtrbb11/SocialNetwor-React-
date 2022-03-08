import { NavLink } from "react-router-dom";
import classes from "./Messages.module.css";

const DialogItem = (props) => {
  let path = "/messages/" + props.id;

  return (
    <div className={classes.dialog_item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};


const MessageHeader = (props) => {

  return (
    <div className={classes.message_header}>
      <p>{props.name}</p>
      <p>{props.status}</p>
    </div>
  );
};


const UserMessage = (props) => {
  return <div className={classes.message_item}>{props.textMessage}</div>;
};

const Messages = () => {
  return (
    <div className={classes.message_wrapper}>
      <div className={classes.dialogs_list}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Anton" id="2" />
        <DialogItem name="Egor" id="3" />
        <DialogItem name="Misha" id="4" />
        <DialogItem name="Vlad" id="5" />
        <DialogItem name="Ibragim" id="6" />
        <DialogItem name="Rita" id="7" />
      </div>
      <div className={classes.messages_list}>
        <MessageHeader status="online" name="Dima" />
        <UserMessage textMessage="Hi, how are u?" />
        <UserMessage textMessage="Hi, how are u?" />
        <UserMessage textMessage="Hi, how are u?" />
        <UserMessage textMessage="Hi, how are u?" />
        <UserMessage textMessage="Hi, how are u?" />
      </div>
    </div>
  );
};

export default Messages;
