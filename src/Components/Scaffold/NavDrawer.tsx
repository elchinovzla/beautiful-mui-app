import React from "react"
import {AppBar, Drawer, List, ListItem, Toolbar, Typography} from '@mui/material'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import ContactForm from "../Form/ContactForm";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactTable from "../Table/ContactTable";
import ContactDataGrid from "../DataGrid/ContactDataGrid";
import {useTheme, Theme} from '@mui/material/styles'

const themedStyles = (theme: Theme) => {
    return {
        appBar:{
            zIndex: theme.zIndex.drawer + 1 
        }
    }
}
const drawerWidth = 240;
const simpleStyles = {
    drawer: {
        width: drawerWidth,
        "& .MuiBackdrop-root":{
            display: "none"
        }
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "rgba(120,120,120,0.2)"
    },
    content: {
        marginLeft: drawerWidth + 20,
        marginTop: 20
    }
}

export default function NavDrawer() {
    const routes = [
        {text: "Input form", route:'/form'}, 
        {text:"Contact card grid", route: '/grid'},
        {text:"Contact table", route:'/table'},
        {text:"Contact data grid", route:'/datagrid'}
    ];
    const theme = useTheme();
    return (
        <BrowserRouter>
        <div>
            <AppBar position="fixed" sx={themedStyles(theme).appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Advanced Material UI Styling
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                disableEnforceFocus
                variant="temporary" 
                open={true}
                sx={simpleStyles.drawer}
                PaperProps={{
                    sx:simpleStyles.drawerPaper,
                    elevation: 9
                }}
                >
                <Toolbar/>
                <List>
                    {routes.map((nav, index)=>(
                        <ListItem key={nav.text}>
                            <Link to={nav.route}>{nav.text}</Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main style={simpleStyles.content}>
                <Toolbar/>
                <Routes>
                    <Route path={"/"} element={<ContactForm/>} />
                    <Route path={"/form"} element={<ContactForm/>}/>
                    <Route path={"/grid"} element={<ContactCardGrid/>}/>
                    <Route path={"/table"} element={<ContactTable/>}/>
                    <Route path={"/datagrid"} element={<ContactDataGrid/>}/>
                </Routes>
            </main>
        </div>
        </BrowserRouter>
    )
}