import { IconButton } from "@mui/material";
import  SearchIcon  from "@mui/icons-material/Search"


export default function SearchButton(props) {
    
  return (
      
    <IconButton color="primary" aria-label="Search"   sx={{height: "41px"}}  {...props} >
     <SearchIcon />
    </IconButton>
  
  );
}
