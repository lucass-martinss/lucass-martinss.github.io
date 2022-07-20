import * as React from "react";
import {  Grid, Typography, Link } from "@mui/material"
import ImagePortifolio from "../components/ImagePortifolio";


const drawerWidth = 240;

const Home = () => {
  return (
    
    <Grid justifyContent="center"  container spacing={2} flexGrow={1}  p={3} width={{ sm: `calc(100% - ${drawerWidth}px)` }} marginLeft={{ sm: `${drawerWidth}px` }}>
      <Grid item  xs={8} md={3} lg={2} >
        <Grid>
          <ImagePortifolio />
        </Grid>
      </Grid>
      <Grid item ml={6} xs={12} md={8} lg={9} >
        <Typography >
        Hi! I'm a web developer, I'm 22 years old and I'm passionate about developing websites, seeking the satisfaction of my clients. In 2019, together with my wife, we founded a virtual beachwear brand <Link target="_blank" href="https://vivazbrand.com.br/">Vivaz Brand</Link> where I had the pleasure of leading projects and collaborators, so I had the first contacts with this world of website development optimizing the designers with <strong>CSS</strong> to meet the necessary specificity of the brand. with the help of  CSS libraries  such as <strong>Bootstrap</strong> and <strong>MaterialUI</strong>. <p>since then I have gained a lot of experience in facilitating relationship processes between the commerce and the customer where we must be very careful from the first visit to the return of the customer for the next purchase, thus increasing the number of fans of your products.</p> In projects, I always focus on a design that provides an easy understanding for users to find the services they need, facilitating conversions of products or services displayed on the site.
        <p>I use <strong>react</strong> to develop dynamic and responsive websites where I have some course certificates <Link target="_blank"  href="https://www.linkedin.com/feed/update/urn:li:activity:6937943093170040832/">Bulding an Interface</Link>,  <Link target="_blank"  href="https://www.linkedin.com/feed/update/urn:li:activity:6935836163999948800/">Advanced React</Link>.</p>
        </Typography>
        
      </Grid>
    </Grid>
  );
};

export default Home;
