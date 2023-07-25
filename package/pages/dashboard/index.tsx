import Link from "next/link";
import { ReactElement, useEffect, Suspense, useState } from "react";
import BlankLayout from "../../src/layouts/blank/BlankLayout";

// components
import PageContainer from "../../src/components/container/PageContainer";
import Logo from "../../src/layouts/full/shared/logo/Logo";
import { useRouter } from "next/router";
import CustomTextField from "../../src/components/forms/theme-elements/CustomTextField";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardCard from "../../src/components/shared/DashboardCard";
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

const pages = ["Aviral", "Scott", "About"];
const settings = ["Profile", "Logout"];

//dynamic component
const DynamicHeader = dynamic(
  () => import("../../src/components/dashboard/SalesOverview")
);
const DynamicHeader2 = dynamic(
  () => import("../../src/components/dashboard/YearlyBreakup")
);

const Dashboard = () => {
  const router = useRouter();
  const [items, setItems] = useState({
    userid: "",
    firstname: "",
    lastname: "",
  });

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log("handleOpenNavMenu " + event.currentTarget);
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log("handleOpenUserMenu " + event.currentTarget);
    console.log(event.currentTarget.tagName);
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log("handleCloseNavMenu " + event.currentTarget.title);
    if (event.currentTarget.title === pages[0]) {
      setDynComp(<div>{loadDynamicComponent()}</div>);
    } else if (event.currentTarget.title === pages[1]) {
      setDynComp(<div>{loadDynamicComponent2()}</div>);
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    console.log("handleCloseUserMenu ");
    setAnchorElUser(null);
  };

  const loginUser = async () => {
    let txt = localStorage.getItem("user");
    const user = JSON.parse("" + txt);
    console.log("userLocal: " + txt);

    let txttoken = localStorage.getItem("token");
    const token = JSON.parse("" + txttoken);
    console.log("TOKEN: " + token);

    if (user == null) {
      router.push("authentication/login");
    } else {
      //user found in session
      setItems(user);
      console.log("name: " + user.firstname + " " + user.lastname);
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
          console.log(res.user);
          console.log(res.token);
        } else {
          toast.error("Response Error..");
        }
      }
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

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  //   const DynamicHeader = dynamic(() => import('../../src/components/dashboard/SalesOverview'), {
  //     loading: () => <p>Loading...</p>,
  //   });

  const [dynComp, setDynComp] = useState(<div />);

  const loadDynamicComponent = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicHeader />
      </Suspense>
    );
  };

  const loadDynamicComponent2 = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicHeader2 />
      </Suspense>
    );
  };

  useEffect(() => {
    console.log("DASHBOARD ");
    loginUser();
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is the dashboard">
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

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    title={page}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* for large devices */}
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Chec
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  title={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Profile sectiona and logout */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                  <Avatar
                    {...stringAvatar(
                      "" + items.firstname + " " + items.lastname
                    )}
                  />
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

      {dynComp}
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
