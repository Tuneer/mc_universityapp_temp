import Link from "next/link";
import { ReactElement, useEffect, Suspense, useState } from "react";
import BlankLayout from "../../src/layouts/blank/BlankLayout";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
// components
import PageContainer from "../../src/components/container/PageContainer";
import { useRouter } from "next/router";
import { Flip, ToastContainer, toast } from "react-toastify";
import {
  createTheme,
  ThemeProvider,
  styled,
  useTheme,
  Theme,
  CSSObject,
} from "@mui/material/styles";

import Header from "../../src/layouts/full/header/Header";

//new imports
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import dynamic from "next/dynamic";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import { type } from "os";
import Loading from "../../src/components/shared/Loading";
import Skeleton from "@mui/material/Skeleton";
import CssBaseline from "@mui/material/CssBaseline";
//Icons
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";

const settings = ["Profile", "Logout"];

//dynamic component
const IncomeTaxBeforeAfter = dynamic(
  () => import("../../src/components/admin/IncomeTaxBeforeAfter")
);
const Country = dynamic(() => import("../../src/components/admin/Country"));
const Province = dynamic(() => import("../../src/components/admin/Province"));
const Cities = dynamic(() => import("../../src/components/admin/Cities"));
const PopulationType = dynamic(
  () => import("../../src/components/admin/PopulationType")
);
const DevelopmentHousing = dynamic(
  () => import("../../src/components/admin/DevelopmentHousing")
);

const MBM = dynamic(() => import("../../src/components/admin/MBM"));
const StructureTypeOfBuilding = dynamic(
  () => import("../../src/components/admin/StructureTypeOfBuilding"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Rent = dynamic(() => import("../../src/components/admin/Rent"));

type User = {
  userid: string;
  firstname: string;
  lastname: string;
};

//Drawer
const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Dashboard = () => {
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const [items, setItems] = useState<User>({
    userid: "",
    firstname: "",
    lastname: "",
  });
  const [dynComp, setDynComp] = useState(<div />);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log("handleOpenUserMenu " + event.currentTarget);
    console.log(event.currentTarget.tagName);
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    console.log("handleCloseUserMenu ");
    setAnchorElUser(null);
  };

  const loginUser = async () => {
    let txt = localStorage.getItem("user");
    let txttoken = localStorage.getItem("token");
    //  console.log("userLocal: " + txt);
    if (txt != null && txttoken != null) {
      const user: User = JSON.parse("" + txt);
      //  console.log("userLocal: " + user);
      const token = JSON.parse("" + txttoken);
      //  console.log("TOKEN: " + token);

      if (user == null) {
        router.push("authentication/login");
      } else {
        //user found in session
        setItems(user);
        //  console.log("name: " + user.firstname + " " + user.lastname);
        const userID = user.userid;
        if (userID.length != 0 && token.length != 0) {
        } else {
          const apiUrlEndPoint = "/api/dashboard";
          const response = await fetch(apiUrlEndPoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userID,
              token,
            }),
          });

          if (response.ok) {
            const res = await response.json();
            //  console.log(res.user);
            //  console.log(res.token);
          } else {
            toast.error("Response Error..");
          }
        }
      }
    } else {
      router.push("authentication/login");
    }
  };

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const loadDynamicComponent = () => {
    return (
      <Suspense fallback={<Loading />}>
        <IncomeTaxBeforeAfter />
      </Suspense>
    );
  };

  const loadCountryComponent = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Country />
      </Suspense>
    );
  };

  const loadProvinceComponent = () => {
    return (
      <Suspense fallback={<Loading />}>
        <Province />
      </Suspense>
    );
  };

  const loadCitiesComponent = () => {
    return (
      <Suspense fallback={<Loading />}>
        <Cities />
      </Suspense>
    );
  };

  const loadPopulationtypeComponent = () => {
    return (
      <Suspense fallback={<Loading />}>
        <PopulationType />
      </Suspense>
    );
  };

  const loadDevelopmentHosuingComponent = () => {
    return (
      <Suspense fallback={<Loading />}>
        <DevelopmentHousing />
      </Suspense>
    );
  };

  const loadMBMComponent = () => {
    return (
      <Suspense fallback={<Loading />}>
        <MBM />
      </Suspense>
    );
  };

  const loadStructureTypeOfBuilding = () => {
    return (
      <Suspense fallback={<Loading />}>
        <StructureTypeOfBuilding />
      </Suspense>
    );
  };

  const loadRent = () => {
    return (
      <Suspense fallback={<Loading />}>
        <Rent />
      </Suspense>
    );
  };

  useEffect(() => {
    console.log("ADMIN ");
    loginUser();
    setOpen(true);
    //by default something need to load.
    setDynComp(<div>{loadCountryComponent()}</div>);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* for small devices */}
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Chec
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {/* Profile section and logout */}
          <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <Avatar
                  sx={{
                    bgcolor: stringToColor(
                      items.firstname + " " + items.lastname
                    ),
                  }}
                >
                  {items.firstname.toString().charAt(0) +
                    items.lastname.toString().charAt(0)}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "sans",
              fontWeight: 300,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {" " + items.firstname.toString() + " " + items.lastname.toString()}
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <DoubleArrowRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Country"
                onClick={() => {
                  setDynComp(<div>{loadCountryComponent()}</div>);
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <DoubleArrowRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Province"
                onClick={() => {
                  setDynComp(<div>{loadProvinceComponent()}</div>);
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <DoubleArrowRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Cities/Geography"
                onClick={() => {
                  setDynComp(<div>{loadCitiesComponent()}</div>);
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <DoubleArrowRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Population Type"
                onClick={() => {
                  setDynComp(<div>{loadPopulationtypeComponent()}</div>);
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <DoubleArrowRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Type of House"
                onClick={() => {
                  setDynComp(<div>{loadDynamicComponent()}</div>);
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemIcon>
                <DoubleArrowRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Building Type"
                onClick={() => {
                  setDynComp(<div>{loadDynamicComponent()}</div>);
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
            >
              <ListItemIcon>
                <DoubleArrowRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Development Housing"
                onClick={() => {
                  setDynComp(<div>{loadDevelopmentHosuingComponent()}</div>);
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7)}
            >
              <ListItemIcon>
                <DoubleArrowRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="MBM"
                onClick={() => {
                  setDynComp(<div>{loadMBMComponent()}</div>);
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 8}
              onClick={(event) => handleListItemClick(event, 8)}
            >
              <ListItemIcon>
                <DoubleArrowRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Income Before or After Tax"
                onClick={() => {
                  setDynComp(<div>{loadDynamicComponent()}</div>);
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 9}
              onClick={(event) => handleListItemClick(event, 9)}
            >
              <ListItemIcon>
                <DoubleArrowRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Structure Type of Building"
                onClick={() => {
                  setDynComp(<div>{loadStructureTypeOfBuilding()}</div>);
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 10}
              onClick={(event) => handleListItemClick(event, 10)}
            >
              <ListItemIcon>
                <DoubleArrowRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Rent"
                onClick={() => {
                  setDynComp(<div>{loadRent()}</div>);
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <DrawerHeader />
        {dynComp}
      </Box>
    </Box>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};

// // <DashboardCard title="Shadow">
// <Grid container spacing={2}>
// {[lightTheme, darkTheme].map((theme, index) => (
//   <Grid item xs={6} key={index}>
//     <ThemeProvider theme={theme}>
//       <Box
//         sx={{
//           p: 2,
//           bgcolor: 'background.default',
//           display: 'grid',
//           gridTemplateColumns: { md: '1fr 1fr' },
//           gap: 2,
//         }}
//       >
//         <Item>
//         <div>Name: {items.firstname} {items.lastname}</div>
// <div>UserName: {items.username}</div>
// <div>Email: {items.email}</div>
//         </Item>
//       </Box>
//     </ThemeProvider>
//   </Grid>
// ))}
// </Grid>
// </DashboardCard>
// <Box
// sx={{
// position: 'relative',
// '&:before': {
//   content: '""',
//   background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
//   backgroundSize: '400% 400%',
//   animation: 'gradient 15s ease infinite',
//   position: 'absolute',
//   height: '100%',
//   width: '100%',
//   opacity: '0.3',
// },
// }}
// >

// <Grid container spacing={0} justifyContent="start">

// <BottomNavigation>
// <ul>
// {menuItems.map(({ href, title }) => (
// <li className='m-2' key={title}>
// <a className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer`}>
//     {title}
//   </a>
// </li>
// ))}
// </ul>
// </BottomNavigation>
// </Grid>

// </Box>
//   <Box sx={{ flexGrow: 1 }}>
//         <Grid container>
//           <Grid item xs={2}>
//            <nav aria-label="main mailbox folders">
//               <List>
//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 0}
//                     onClick={(event) => handleListItemClick(event, 0)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Country"
//                       onClick={() => {
//                         setDynComp(<div>{loadCountryComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>
//                 <Divider variant="inset" component="li" />
//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 1}
//                     onClick={(event) => handleListItemClick(event, 1)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Province"
//                       onClick={() => {
//                         setDynComp(<div>{loadProvinceComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 2}
//                     onClick={(event) => handleListItemClick(event, 2)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Cities/Geography"
//                       onClick={() => {
//                         setDynComp(<div>{loadCitiesComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 3}
//                     onClick={(event) => handleListItemClick(event, 3)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Population Type"
//                       onClick={() => {
//                         setDynComp(<div>{loadPopulationtypeComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 4}
//                     onClick={(event) => handleListItemClick(event, 4)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Type of House"
//                       onClick={() => {
//                         setDynComp(<div>{loadDynamicComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 5}
//                     onClick={(event) => handleListItemClick(event, 5)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Building Type"
//                       onClick={() => {
//                         setDynComp(<div>{loadDynamicComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 6}
//                     onClick={(event) => handleListItemClick(event, 6)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Development Housing"
//                       onClick={() => {
//                         setDynComp(
//                           <div>{loadDevelopmentHosuingComponent()}</div>
//                         );
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 7}
//                     onClick={(event) => handleListItemClick(event, 7)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="MBM"
//                       onClick={() => {
//                         setDynComp(<div>{loadMBMComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 8}
//                     onClick={(event) => handleListItemClick(event, 8)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Income Before or After Tax"
//                       onClick={() => {
//                         setDynComp(<div>{loadDynamicComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 9}
//                     onClick={(event) => handleListItemClick(event, 9)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Structure Type of Building"
//                       onClick={() => {
//                         setDynComp(<div>{loadStructureTypeOfBuilding()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>
//               </List>
//             </nav>

//             <Drawer variant="permanent" open={open}>
//               <DrawerHeader>
//                 <IconButton onClick={handleDrawerClose}>
//                   {theme.direction === "rtl" ? (
//                     <ChevronRightIcon />
//                   ) : (
//                     <ChevronLeftIcon />
//                   )}
//                 </IconButton>
//               </DrawerHeader>
//               <Divider />
//               <List>
//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 0}
//                     onClick={(event) => handleListItemClick(event, 0)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Country"
//                       onClick={() => {
//                         setDynComp(<div>{loadCountryComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>
//                 <Divider variant="inset" component="li" />
//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 1}
//                     onClick={(event) => handleListItemClick(event, 1)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Province"
//                       onClick={() => {
//                         setDynComp(<div>{loadProvinceComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 2}
//                     onClick={(event) => handleListItemClick(event, 2)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Cities/Geography"
//                       onClick={() => {
//                         setDynComp(<div>{loadCitiesComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 3}
//                     onClick={(event) => handleListItemClick(event, 3)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Population Type"
//                       onClick={() => {
//                         setDynComp(<div>{loadPopulationtypeComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 4}
//                     onClick={(event) => handleListItemClick(event, 4)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Type of House"
//                       onClick={() => {
//                         setDynComp(<div>{loadDynamicComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 5}
//                     onClick={(event) => handleListItemClick(event, 5)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Building Type"
//                       onClick={() => {
//                         setDynComp(<div>{loadDynamicComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 6}
//                     onClick={(event) => handleListItemClick(event, 6)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Development Housing"
//                       onClick={() => {
//                         setDynComp(
//                           <div>{loadDevelopmentHosuingComponent()}</div>
//                         );
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 7}
//                     onClick={(event) => handleListItemClick(event, 7)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="MBM"
//                       onClick={() => {
//                         setDynComp(<div>{loadMBMComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 8}
//                     onClick={(event) => handleListItemClick(event, 8)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Income Before or After Tax"
//                       onClick={() => {
//                         setDynComp(<div>{loadDynamicComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 9}
//                     onClick={(event) => handleListItemClick(event, 9)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Structure Type of Building"
//                       onClick={() => {
//                         setDynComp(<div>{loadStructureTypeOfBuilding()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>
//               </List>
//             </Drawer>
//           </Grid>
//           <Grid item xs={10}>
//             <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
//               {dynComp}
//             </Box>
//           </Grid>
//         </Grid>
//       </Box> <Box sx={{ flexGrow: 1 }}>
//         <Grid container>
//           <Grid item xs={2}>
//             <nav aria-label="main mailbox folders">
//               <List>
//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 0}
//                     onClick={(event) => handleListItemClick(event, 0)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Country"
//                       onClick={() => {
//                         setDynComp(<div>{loadCountryComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>
//                 <Divider variant="inset" component="li" />
//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 1}
//                     onClick={(event) => handleListItemClick(event, 1)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Province"
//                       onClick={() => {
//                         setDynComp(<div>{loadProvinceComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 2}
//                     onClick={(event) => handleListItemClick(event, 2)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Cities/Geography"
//                       onClick={() => {
//                         setDynComp(<div>{loadCitiesComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 3}
//                     onClick={(event) => handleListItemClick(event, 3)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Population Type"
//                       onClick={() => {
//                         setDynComp(<div>{loadPopulationtypeComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 4}
//                     onClick={(event) => handleListItemClick(event, 4)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Type of House"
//                       onClick={() => {
//                         setDynComp(<div>{loadDynamicComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 5}
//                     onClick={(event) => handleListItemClick(event, 5)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Building Type"
//                       onClick={() => {
//                         setDynComp(<div>{loadDynamicComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 6}
//                     onClick={(event) => handleListItemClick(event, 6)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Development Housing"
//                       onClick={() => {
//                         setDynComp(
//                           <div>{loadDevelopmentHosuingComponent()}</div>
//                         );
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 7}
//                     onClick={(event) => handleListItemClick(event, 7)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="MBM"
//                       onClick={() => {
//                         setDynComp(<div>{loadMBMComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 8}
//                     onClick={(event) => handleListItemClick(event, 8)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Income Before or After Tax"
//                       onClick={() => {
//                         setDynComp(<div>{loadDynamicComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 9}
//                     onClick={(event) => handleListItemClick(event, 9)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Structure Type of Building"
//                       onClick={() => {
//                         setDynComp(<div>{loadStructureTypeOfBuilding()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>
//               </List>
//             </nav> */}

//             {/* <Drawer variant="permanent" open={open}>
//               <DrawerHeader>
//                 <IconButton onClick={handleDrawerClose}>
//                   {theme.direction === "rtl" ? (
//                     <ChevronRightIcon />
//                   ) : (
//                     <ChevronLeftIcon />
//                   )}
//                 </IconButton>
//               </DrawerHeader>
//               <Divider />
//               <List>
//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 0}
//                     onClick={(event) => handleListItemClick(event, 0)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Country"
//                       onClick={() => {
//                         setDynComp(<div>{loadCountryComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>
//                 <Divider variant="inset" component="li" />
//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 1}
//                     onClick={(event) => handleListItemClick(event, 1)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Province"
//                       onClick={() => {
//                         setDynComp(<div>{loadProvinceComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 2}
//                     onClick={(event) => handleListItemClick(event, 2)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Cities/Geography"
//                       onClick={() => {
//                         setDynComp(<div>{loadCitiesComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 3}
//                     onClick={(event) => handleListItemClick(event, 3)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Population Type"
//                       onClick={() => {
//                         setDynComp(<div>{loadPopulationtypeComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 4}
//                     onClick={(event) => handleListItemClick(event, 4)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Type of House"
//                       onClick={() => {
//                         setDynComp(<div>{loadDynamicComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 5}
//                     onClick={(event) => handleListItemClick(event, 5)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Building Type"
//                       onClick={() => {
//                         setDynComp(<div>{loadDynamicComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 6}
//                     onClick={(event) => handleListItemClick(event, 6)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Development Housing"
//                       onClick={() => {
//                         setDynComp(
//                           <div>{loadDevelopmentHosuingComponent()}</div>
//                         );
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 7}
//                     onClick={(event) => handleListItemClick(event, 7)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="MBM"
//                       onClick={() => {
//                         setDynComp(<div>{loadMBMComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 8}
//                     onClick={(event) => handleListItemClick(event, 8)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Income Before or After Tax"
//                       onClick={() => {
//                         setDynComp(<div>{loadDynamicComponent()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                   <ListItemButton
//                     selected={selectedIndex === 9}
//                     onClick={(event) => handleListItemClick(event, 9)}
//                   >
//                     <ListItemIcon>
//                       <DoubleArrowRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                       primary="Structure Type of Building"
//                       onClick={() => {
//                         setDynComp(<div>{loadStructureTypeOfBuilding()}</div>);
//                       }}
//                     />
//                   </ListItemButton>
//                 </ListItem>
//               </List>
//             </Drawer>
//           </Grid>
//           <Grid item xs={10}>
//             <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
//               {dynComp}
//               {/* <Accordion>
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls="panel1a-content"
//                   id="panel1a-header"
//                 >
//                   <Typography>Accordion 1</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails></AccordionDetails>
//               </Accordion>
//  </Grid></Grid>           </Box>
//           </Grid>
//         </Grid>
//       </Box>
// {/* <AppBar position="fixed" open={open}>
//   <Container>
//     <IconButton
//       color="inherit"
//       aria-label="open drawer"
//       onClick={handleDrawerOpen}
//       edge="start"
//       sx={{
//         marginRight: 5,
//         ...(open && { display: "none" }),
//       }}
//     >
//       <MenuIcon />
//     </IconButton>
//     <Toolbar disableGutters>
//       {/* for small devices */}
//       <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//       <Typography
//         variant="h6"
//         noWrap
//         component="a"
//         href="/"
//         sx={{
//           mr: 2,
//           display: { xs: "none", md: "flex" },
//           fontFamily: "monospace",
//           fontWeight: 700,
//           letterSpacing: ".3rem",
//           color: "inherit",
//           textDecoration: "none",
//         }}
//       >
//         Chec
//       </Typography>

//       {/* Profile section and logout */}
//       <Box sx={{ flexGrow: 0 }}>
//         <Tooltip title="Open settings">
//           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//             {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
//             <Avatar
//               sx={{
//                 bgcolor: stringToColor(items.firstname + " " + items.lastname),
//               }}
//             >
//               {items.firstname.toString().charAt(0) +
//                 items.lastname.toString().charAt(0)}
//             </Avatar>
//           </IconButton>
//         </Tooltip>
//         <Menu
//           sx={{ mt: "45px" }}
//           id="menu-appbar"
//           anchorEl={anchorElUser}
//           anchorOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           keepMounted
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           open={Boolean(anchorElUser)}
//           onClose={handleCloseUserMenu}
//         >
//           {settings.map((setting) => (
//             <MenuItem key={setting} onClick={handleCloseUserMenu}>
//               <Typography textAlign="center">{setting}</Typography>
//             </MenuItem>
//           ))}
//         </Menu>
//       </Box>
//     </Toolbar>
//   </Container>
// </AppBar> */}
