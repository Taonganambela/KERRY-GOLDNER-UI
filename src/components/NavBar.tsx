import { Avatar, Button } from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';

export const NavBar = () => {
  return (
    <div className="p-3">
      <div className="bg-black h-32 w- rounded-xl mt-2">
        <div className="text-left top-10  mr-2 mt-2 p-4">
          <Avatar
            src="src\assets\pic.jpg"
            alt="My image"
            sx={{ width: 96, height: 96 }}
          />
        </div>

        <div className="mb-2 ml-28 mt-5 absolute top-4">
          <div className="inline-block">
            <h1 className="text-white font-semibold ml-4 mr-4">Kerry Goldner</h1>
          </div>

          <div className="inline-block">
            
            <Button variant="contained" color="warning" className="rounded-full">
              <StarRateIcon sx={{color:'black', hieght:16, width:16}}/>
              Pro user
            </Button>
          </div>
        </div>

        <div className="ml-28 inset-x-4 top-24 absolute">
          <Button
            variant="outlined"
            className="rounded-full"
            sx={{ color: "white" }}
          >
            #Mystrey
          </Button>{" "}
          <Button
            variant="outlined"
            className="rounded-full"
            sx={{ color: "white"}}
          >
            #Romance
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
