import * as React from "react";
import { Box, Grid } from "@mui/material"
import ImagePortifolio from "../components/ImagePortifolio";

const drawerWidth = 240;

const Home = () => {
  return (
    
    <Grid container spacing={4} flexGrow={1}  p={3} width={{ sm: `calc(100% - ${drawerWidth}px)` }} marginLeft={{ sm: `${drawerWidth}px` }}>
      <Grid item mt={5} xs="auto">
        <ImagePortifolio />
      </Grid>
      <Grid item mt={5} xs={12} lg={8}>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
        elementum integer enim neque volutpat ac tincidunt. Ornare
        suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
        volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
        Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
        ornare massa eget egestas purus viverra accumsan in. In hendrerit
        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
        aliquam sem et tortor. Habitant morbi tristique senectus et.
        Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
        aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.que nec nam aliquam sem et
        tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
        tristique sollicitudin nibh sit. Ornare aenean euismod elementum
        nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel
        facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis
        orci a
      </Grid>
    </Grid>
  );
};

export default Home;
