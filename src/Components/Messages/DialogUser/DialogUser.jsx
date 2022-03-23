import { NavLink } from "react-router-dom";
import classes from "./DialogUser.module.css";

const DialogUser = (props) => {
  let path = "/messages/" + props.id;

  return (
    <div className={classes.dialog_item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};


export default DialogUser;
