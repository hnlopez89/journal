import { LogoutOutlined, MenuOutlined, TurnedInNot } from "@mui/icons-material"
import { AppBar, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const SideBar = ({drawerWidth = 240}) => {
    return (
        <Box component='nav' sx={{width:{sm:drawerWidth}, flexShrink: {sm:0}}}>
            <Drawer variant='permanent' open sx={{display:{xs:'block'}, '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth }}}>
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Hugo
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Enero', 'Febrero'].map(text=> (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={'whatevar'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}