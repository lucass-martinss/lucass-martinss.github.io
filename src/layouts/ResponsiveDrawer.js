import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import TwitterIcon from "@mui/icons-material/Twitter";
import { AppBar, Box, Stack,} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
 

const drawerWidth = 220;


export function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{justifyContent:"space-evenly"}}>
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
          <ListItemButton to="/buscacep">
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Busca Cep" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />

    <Stack direction="row" justifyContent="space-evenly" sx={{marginTop:"10px"}}>
        <img width={40} alt="logo react" src="/react.svg" />
          
            <img width={40} alt="logo css3" src="/css3.svg"/>
        
            <img width={36} alt="logo javascript" src="/javascript.svg" />
         
            <img width={40} alt="logo html5" src="/html-5.svg" />
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
