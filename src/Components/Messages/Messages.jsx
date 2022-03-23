import classes from "./Messages.module.css";
import DialogUser from "./DialogUser/DialogUser";
import UserMessage from "./UserMessage/UserMessage";
import react from "react";

const Messages = (props) => {
  let users = props.users.messagePageUsers.map((e, pos) => (
    <DialogUser key={pos} name={e.name} id={e.id} />
  ));

  let messages = props.messages.messagePageUMessages.map((e, pos) => (
    <UserMessage key={pos} textMessage={e.message} />
  ));

  return (
    <div className={classes.message_wrapper}>
      <div className={classes.dialogs_list}>{users}</div>
      <div className={classes.messages_list}>{messages}</div>
    </div>
  );
};

export default Messages;
