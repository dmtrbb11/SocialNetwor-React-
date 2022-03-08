import classes from "./AccInfo.module.css";

const AccInfo = (props) => {
  return (
    <div>
      <div className={classes.content_bac}></div>
      <div className={classes.acc_info}>
        <div className={classes.ava}>
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            alt=""
            className={classes.ava_img}
          />
        </div>

        <div className={classes.acc_info_p}>
          <p className={classes.acc_name}>Dmitriy</p>
          <p className={classes.acc_birth}>28.02.2001</p>
          <p className={classes.acc_city}>Samara</p>
          <p className={classes.acc_education}>Samgtu</p>
          <p className={classes.acc_site}>www/dfdfsfd/dfsdfs</p>
        </div>
      </div>
    </div>
  );
};

export default AccInfo;
