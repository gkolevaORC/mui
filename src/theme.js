import { createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

export const theme = createTheme({
    palette:{
        primary:{
            main: "#7436",
            light: "skyblue"
        },
        secondary:{
            main:'#15c630'
        },
        otherColor:{
            main:"#999"
        }
    }
})