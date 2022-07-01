import {
  useLocation,
} from "react-router-dom";
import { Typography } from "@mui/material";

function Content() {
  const location = useLocation();
  return (
    <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
      Current route: {location.pathname}
    </Typography>
  );
}
