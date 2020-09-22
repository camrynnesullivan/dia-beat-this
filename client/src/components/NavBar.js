// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import { useLocation, withRouter } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     [theme.breakpoints.down("xs")]: {
//       flexGrow: 1,
//     },
//   },
//   headerOptions: {
//     display: "flex",
//     flex: 1,
//     justifyContent: "space-evenly",
//   },
//   rightToolbar: {
//     marginLeft: "auto",
//     marginRight: -12,
//   },
// }));

// const NavBar = (props) => {
//   const { history } = props;
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const location = useLocation();

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClick = (menuTitle, pageURL) => {
//     history.push(pageURL);
//     setAnchorEl(null);
//   };

//   const handleLogOut = () => {
//     props.handleLogout();
//     setAnchorEl(null);
//   };

//   const menuItems = [
//     {
//       id: "1",
//       menuTitle: "Home",
//       pageURL: "/",
//     },
//     {
//       id: "2",
//       menuTitle: "Input",
//       pageURL: "/input",
//     },
//     {
//       id: "3",
//       menuTitle: "Progress",
//       pageURL: "/progress",
//     },
//     {
//       id: "4",
//       menuTitle: "Resources",
//       pageURL: "/Resources",
//     },
//     {
//       id: "5",
//       menuTitle: "Journal",
//       pageURL: "/Journal",
//     },
//   ];

//   let headerTitle;

//   switch (location.pathname) {
//     case "/":
//       headerTitle = "Home";
//       break;
//     case "/api":
//       headerTitle = "Entry";
//       console.log(location.pathname);
//       break;
//     default:
//       headerTitle =
//         location.pathname
//           .substring(1, location.pathname.length)
//           .charAt(0)
//           .toUpperCase() + location.pathname.slice(2);

//       break;
//   }

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             {headerTitle}
//           </Typography>
//           <>
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               onClick={handleMenu}
//               className={classes.rightToolbar}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorEl}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={open}
//               onClose={() => setAnchorEl(null)}
//             >
//               {menuItems.map((menuItem) => {
//                 const { menuTitle, pageURL, id } = menuItem;
//                 return (
//                   <MenuItem
//                     key={id}
//                     onClick={() => handleMenuClick(menuTitle, pageURL)}
//                   >
//                     {menuTitle}
//                   </MenuItem>
//                 );
//               })}
//               <MenuItem onClick={() => handleLogOut()}>Log Out</MenuItem>
//             </Menu>
//           </>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

// export default withRouter(NavBar);
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useLocation, withRouter } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginBottom: 20,
  },
}));

function NavBar(props) {
  const location = useLocation();
  let currentPage;
  switch (location.pathname) {
    case "/":
      currentPage = 0;
      break;
    case "/Input":
      currentPage = 1;
      break;
    case "/Progress":
      currentPage = 2;
      break;
    case "/Journal":
      currentPage = 3;
      break;
    default:
      currentPage = 0;

      break;
  }
  const classes = useStyles();
  const [value, setValue] = React.useState(currentPage);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  const { history } = props;
  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab
            onClick={(e) => {
              e.stopPropagation();
              handleMenuClick("/");
            }}
            label="Home"
            icon={<HomeIcon />}
            {...a11yProps(0)}
          />
          <Tab
            onClick={(e) => {
              e.stopPropagation();
              handleMenuClick("/Input");
            }}
            label="Input"
            icon={<FavoriteIcon />}
            {...a11yProps(1)}
          />
          <Tab
            onClick={(e) => {
              e.stopPropagation();
              handleMenuClick("/Progress");
            }}
            label="Progress"
            icon={<PersonPinIcon />}
            {...a11yProps(2)}
          />
          <Tab
            onClick={(e) => {
              e.stopPropagation();
              handleMenuClick("/Journal");
            }}
            label="Journal"
            icon={<HelpIcon />}
            {...a11yProps(3)}
          />
          <Tab
            onClick={(e) => {
              e.stopPropagation();
              props.handleLogout();
            }}
            label="Logout"
            icon={<ShoppingBasket />}
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
export default withRouter(NavBar);
