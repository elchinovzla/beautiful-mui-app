import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Theme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { BeautifulTheme } from "../../Theme/BeautifulTheme";
import ContactDataGrid from "../DataGrid/ContactDataGrid";
import ContactForm from "../Form/ContactForm";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactTable from "../Table/ContactTable";

const drawerWidth = 240;
const transitionDuration = 1000;

const themedStyles = (theme: Theme, responsiveDrawerWidth: number | string) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: responsiveDrawerWidth,
      "& .MuiBackdrop-root": {
        display: "none",
      },
    },
    drawerPaper: {
      width: responsiveDrawerWidth,
      backgroundColor: "rgba(120,120,120,0.2)",
    },
    content: {
      marginLeft: 0,
      marginTop: 20,
      padding: 3,
      maxWidth: 720,
      minWidth: 375,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: transitionDuration,
      }),
    },
    menuIcon: {
      marginRight: 2,
    },
    contentShift: {
      marginLeft: responsiveDrawerWidth,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: transitionDuration,
      }),
    },
  };
};

export default function NavDrawer() {
  const routes = [
    { text: "Input form", route: "/form" },
    { text: "Contact card grid", route: "/grid" },
    { text: "Contact table", route: "/table" },
    { text: "Contact data grid", route: "/datagrid" },
  ];
  const theme = useTheme();
  const greaterThan375 = useMediaQuery("(min-width: 376px)");
  const [open, setOpen] = useState(greaterThan375);
  const responsiveDrawerWidth = greaterThan375 ? drawerWidth : "100%";
  const customStyle = themedStyles(theme, responsiveDrawerWidth);

  useEffect(() => {
    setOpen(greaterThan375);
  }, [greaterThan375]);

  return (
    <BrowserRouter>
      <div>
        <AppBar position="fixed" sx={customStyle.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setOpen(!open)}
              sx={{
                ...customStyle.menuIcon,
                display: greaterThan375 ? "none" : "",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Advanced Material UI Styling
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          disableEnforceFocus
          variant="temporary"
          open={open}
          sx={customStyle.drawer}
          PaperProps={{
            sx: customStyle.drawerPaper,
            elevation: 9,
          }}
          transitionDuration={{
            enter: transitionDuration,
            exit: transitionDuration,
          }}
        >
          <Toolbar />
          <List>
            {routes.map((nav, index) => (
              <ListItem
                sx={{
                  borderBottom: "1px solid black",
                  borderBottomColor: "primary.main",
                }}
                key={nav.text}
              >
                <Link to={nav.route}>{nav.text}</Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          style={{
            ...customStyle.content,
            ...(open ? customStyle.contentShift : {}),
          }}
        >
          <Toolbar />
          <ThemeProvider theme={BeautifulTheme}>
            <Routes>
              <Route path={"/"} element={<ContactForm />} />
              <Route path={"/form"} element={<ContactForm />} />
              <Route path={"/grid"} element={<ContactCardGrid />} />
              <Route path={"/table"} element={<ContactTable />} />
              <Route path={"/datagrid"} element={<ContactDataGrid />} />
            </Routes>
          </ThemeProvider>
        </main>
      </div>
    </BrowserRouter>
  );
}
