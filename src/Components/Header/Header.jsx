import classes from "./Header.module.css";


const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <a className={classes.logo}>
          <img
            src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
            alt=""
            className={classes.logo_img}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
