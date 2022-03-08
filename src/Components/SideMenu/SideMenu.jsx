import { NavLink } from "react-router-dom";
import classes from "./SideMenu.module.css";

const SideMenu = () => {
  return (
    <section className={classes.nav}>
      <ul className={classes.menu}>
        <li className={classes.menu_li}>
          <NavLink
            to="/content"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#00FFFF",
                  }
                : { color: "#fff" }
            }
          >
            Profile
          </NavLink>
        </li>

        <li className={classes.menu_li}>
          <NavLink
            to="/messages"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#00FFFF",
                  }
                : { color: "#fff" }
            }
          >
            Messages
          </NavLink>
        </li>

        <li className={classes.menu_li}>
          <NavLink
            to="/news"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#00FFFF",
                  }
                : { color: "#fff" }
            }
          >
            News
          </NavLink>
        </li>

        <li className={`${classes.menu_li} ${classes.music}`}>
          <NavLink
            to="/music"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#00FFFF",
                  }
                : { color: "#fff" }
            }
          >
            Music
          </NavLink>
        </li>

        <li className={classes.menu_li}>
          <NavLink
            to="/settings"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#00FFFF",
                  }
                : { color: "#fff" }
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default SideMenu;
