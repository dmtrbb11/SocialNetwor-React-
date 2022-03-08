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


  let arrUsers = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Anton" },
    { id: 3, name: "Egor" },
    { id: 4, name: "Misha" },
    { id: 5, name: "Vlad" }
  ];

  let arrMessages = [
    { id: 1, message: "Hi, how are u?" },
    { id: 2, message: "Hi, how are u?" },
    { id: 3, message: "Hi, how are u?" },
    { id: 4, message: "Hi, how are u?" },
    { id: 5, message: "Hi, how are u?" },
  ];


  return (
    <div className={classes.message_wrapper}>
      <div className={classes.dialogs_list}>
        <DialogItem name={arrUsers[0].name} id={arrUsers[0].id} />
        <DialogItem name={arrUsers[1].name} id={arrUsers[1].id} />
        <DialogItem name={arrUsers[2].name} id={arrUsers[2].id} />
        <DialogItem name={arrUsers[3].name} id={arrUsers[3].id} />
        <DialogItem name={arrUsers[4].name} id={arrUsers[4].id} />
      </div>
      <div className={classes.messages_list}>
        {/* <MessageHeader status="online" name="Dima" /> */}
        <UserMessage textMessage={arrMessages[0].message} />
        <UserMessage textMessage={arrMessages[1].message} />
        <UserMessage textMessage={arrMessages[2].message} />
        <UserMessage textMessage={arrMessages[3].message} />
        <UserMessage textMessage={arrMessages[4].message} />
      </div>
    </div>
  );
};

export default Messages;
