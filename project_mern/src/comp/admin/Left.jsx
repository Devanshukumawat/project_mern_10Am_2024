import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CategoryIcon from '@mui/icons-material/Category';

function Left() {
    return ( 
        <>
              <div className="w-2/6 mt-5">   
              <Link to={"/productadd"}> <Button variant="contained" color="secondary" startIcon={<CategoryIcon/>}> Products</Button></Link> 
            </div>
        </>
     );
}

export default Left;