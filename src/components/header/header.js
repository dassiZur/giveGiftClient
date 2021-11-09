
// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NewUser from "../newUser/newUser";
// import Entry from "../entry/entry";
// import BusinessOwner from "../businessOwner/businessOwner";
// import SerchByCategory from "../serchByCategory/serchByCategory";
// import About from "../about/about";
// import ExactSerarch from "../exactSerarch/exactSerarch";


// export default function Header() {
//   return (

//     <Router>
//       <div >
//         <Link to="/Entry">
//           <button>כניסה</button>
//         </Link>
//         <Link to="/NewUser">
//           <button >הרשמה</button>
//         </Link>

//         <nav className="nav-wrap">
//           <div className="nav-item">
//             <Link to="/SerchByCategory" >======חיפוש לפי קטגוריה======</Link>
//             <Link to="/About" >אודות========</Link>
//             <Link to="/ExactSerarch" >חיפוש מדויק========</Link>
//             <Link to="/BusinessOwner" >בעלי עסקים לפרסומות========</Link>

//           </div>
//         </nav>
//         <Switch>
//           <Route path="/SerchByCategory">
//             <SerchByCategory></SerchByCategory>
//           </Route>
//           <Route path="/About">
//             <About></About>
//           </Route>
//           <Route path="/Entry">
//             <Entry></Entry>
//           </Route>
//           <Route path="/NewUser">
//             <NewUser></NewUser>
//           </Route>
//           <Route path="/ExactSerarch">
//             <ExactSerarch></ExactSerarch>
//           </Route>
//           <Route path="/BusinessOwner">
//             <BusinessOwner></BusinessOwner>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }















// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NewUser from "../newUser/newUser";
// import User from "../user/user";
// import BusinessOwner from "../businessOwner/businessOwner";
// import SerchByCategory from "../serchByCategory/serchByCategory";
// import About from "../about/about";
// import ExactSerarch from "../exactSerarch/exactSerarch";

// export default function Header() {
//   return (
//     // <Router>
//     //   <div >

//     //     <Link to="/User">
//     //       <button>כניסה</button>
//     //     </Link>
//     //     <Link to="/NewUser">
//     //       <button >הרשמה</button>
//     //     </Link>

//     //     <nav className="nav-wrap">
//     //       <div className="nav-item">
//     //       <Link to="/SerchByCategory" >======חיפוש לפי קטגוריה======</Link>
//     //         <Link to="/About" >אודות========</Link>
//     //         <Link to="/ExactSerarch" >חיפוש מדויק========</Link>
//     //       </div>
//     //     </nav>
//     //     <Switch>
//     //       <Route path="/SerchByCategory">
//     //         <SerchByCategory></SerchByCategory>
//     //       </Route>
//     //       <Route path="/About">
//     //         <About></About>
//     //       </Route>
//     //       <Route path="/User">
//     //         <User></User>
//     //       </Route>
//     //       <Route path="/NewUser">
//     //         <NewUser></NewUser>
//     //       </Route>
//     //       <Route path="/ExactSerarch">
//     //         <ExactSerarch></ExactSerarch>
//     //       </Route>
//     //     </Switch>
//     //   </div>
//     // </Router>

//   );
// }


import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewUser from "../newUser/newUser";
import User from "../user/user";
import BusinessOwner from "../businessOwner/businessOwner";
import SerchByCategory from "../serchByCategory/serchByCategory";
import About from "../about/about";
import ExactSerarch from "../exactSerarch/exactSerarch";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import giveGift from './photoHeader/giveGift.png';
import GreetingCard from "../greetingCard/greetingCard";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const SyleOfBackground = { "backgroundColor": "#81005F", "color": "#FFFFFF","height":"12.5vh"};
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={SyleOfBackground}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="ראשי" {...a11yProps(0)} />
          <Tab label="חיפוש לפי קטגוריה" {...a11yProps(1)} />
          <Tab label="אודות" {...a11yProps(2)} />
          <Tab label="חיפוש מדויק" {...a11yProps(3)} />
          <Tab label="בעלי עסקים לפרסומות" {...a11yProps(4)} />
          <Tab label="כרטיסי ברכה" {...a11yProps(5)} />

        </Tabs>
        {/* <img src={giveGift}></img> */}

      </AppBar>
      <TabPanel value={value} index={0}>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SerchByCategory></SerchByCategory>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <About></About>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <ExactSerarch></ExactSerarch>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <BusinessOwner></BusinessOwner>
      </TabPanel>

      <TabPanel value={value} index={5}>
        <GreetingCard></GreetingCard>
      </TabPanel>
    </div>
  );
}