import Link from "next/link";
import { ReactElement, useEffect, Suspense, useState } from "react";
import BlankLayout from "../../src/layouts/blank/BlankLayout";

// components
import PageContainer from "../../src/components/container/PageContainer";
import { useRouter } from "next/router";
import { Flip, ToastContainer, toast } from "react-toastify";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

//new imports
import AppBar from "@mui/material/AppBar";
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
import { type } from "os";

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

type User = {
  userid: string;
  firstname: string;
  lastname: string;
};

const Dashboard = () => {
  const router = useRouter();

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
      <Suspense fallback={<div>Loading...</div>}>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Province />
      </Suspense>
    );
  };

  const loadCitiesComponent = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Cities />
      </Suspense>
    );
  };

  const loadPopulationtypeComponent = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <PopulationType />
      </Suspense>
    );
  };

  useEffect(() => {
    console.log("ADMIN ");
    loginUser();
  }, []);

  return (
    <PageContainer title="Admin" description="this is the admin">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            ></Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
            {/* Profile sectiona and logout */}
            <Box sx={{ flexGrow: 0 }}>
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
                    {items.firstname[0] + items.lastname[0]}
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
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Box
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Country"
                        onClick={() => {
                          setDynComp(<div>{loadCountryComponent()}</div>);
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Province"
                        onClick={() => {
                          setDynComp(<div>{loadProvinceComponent()}</div>);
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Cities/Geography"
                        onClick={() => {
                          setDynComp(<div>{loadCitiesComponent()}</div>);
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Population Type"
                        onClick={() => {
                          setDynComp(
                            <div>{loadPopulationtypeComponent()}</div>
                          );
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Type of House"
                        onClick={() => {
                          setDynComp(<div>{loadDynamicComponent()}</div>);
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Building Type"
                        onClick={() => {
                          setDynComp(<div>{loadDynamicComponent()}</div>);
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Population Type"
                        onClick={() => {
                          setDynComp(<div>{loadDynamicComponent()}</div>);
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Reliability"
                        onClick={() => {
                          setDynComp(<div>{loadDynamicComponent()}</div>);
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Income Before or After Tax"
                        onClick={() => {
                          setDynComp(<div>{loadDynamicComponent()}</div>);
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </Grid>
          <Grid item xs={10}>
            <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
              {dynComp}
              {/* <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
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
