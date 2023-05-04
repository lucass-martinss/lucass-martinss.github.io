import PropTypes from "prop-types";
import * as React from "react";
import GitHubIcon  from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography, Toolbar, ListItemText, ListItemIcon, 
         ListItemButton, ListItem, List, IconButton, AppBar,
         Box, Stack, Link,CssBaseline, Divider, Drawer } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
const drawerWidth = 220;

export function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar className="contato" 
      sx={{ justifyContent: "space-evenly" }}>
        <IconButton
          target="_blank"
          href="https://www.linkedin.com/in/lucasoft/"
          aria-label="linkedin"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          target="_blank"
          href="https://github.com/lucass-martinss"
          aria-label="github"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          target="_blank"
          href="https://twitter.com/lucas_cardosoft"
          aria-label="twitter"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          target="_blank"
          href="mailto:lucasmcworking@gmail.com"
          aria-label="Email"
        >
          <InboxIcon />
        </IconButton>
      </Toolbar>
      <Divider />

      <List>
        <ListItem>
          <ListItemButton to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="About me" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton to="#/busca-cep/">
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Busca Cep" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton to="#/check-list/">
            <ListItemIcon>
             <PlaylistAddCheckIcon/>
            </ListItemIcon>
            <ListItemText primary="checklist" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />

      <Stack
        direction="row"
        justifyContent="space-evenly"
        mt={2}
      >
        <Link target="_blank" href="https://reactjs.org/">
          <img width={40} alt="logo react" src="/react.svg" />
        </Link>
        <Link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <img width={40} alt="logo css3" src="/css3.svg" />
        </Link>
        <Link target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
         <img width={36} alt="logo javascript" src="/javascript.svg" style={{marginTop:"2px"}} />
        </Link>
        <Link target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
          <img width={40} alt="logo html5" src="/html-5.svg" />
        </Link>
      </Stack>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h1">Lucas Cardoso - Web Developer</Typography>
        </Toolbar>
      </AppBar>
      <Box 
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
