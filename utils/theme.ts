import { createTheme, ThemeProvider } from "@mui/material/styles";

const primary = "#6DB33F";
const secondary = "#324C5B";
const gray = "#93A1AA";

export const theme = createTheme({
    palette: {
        common: {
            primary,
            secondary,
            gray,
        }
    }
});