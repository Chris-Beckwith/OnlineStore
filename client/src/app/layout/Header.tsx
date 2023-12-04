import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode: boolean;
    changeDarkMode: () => void;
}

export default function Header({darkMode, changeDarkMode}: Props) {
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">
                    ONLINE STORE
                </Typography>
                <Switch checked={darkMode} onChange={changeDarkMode} />
            </Toolbar>
        </AppBar>
    )
}