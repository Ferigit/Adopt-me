import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        // height: "100%",
        // height: "calc(100% - 80px)",
        position: "absolute",
        left: 0,
        width: "100%",
        overflow: "hidden",
        paddingBottom: "20px",
    },
    header: {
        textAlign: "center",
        padding: "10px 0px"
    },
    mainContainer: {
        display: "flex",
        height: "100%",
        '@media (max-width: 768px)': {
            flexDirection: "column",
            overflowY: "scroll"
        }
    },
    bodyMain: {
        width: "80%",
        height: "100%",
        overflowY: "scroll",
        '@media (max-width: 768px)': {
            width: '100%'
        }
    },
    bodySidebar: {
        width: "20%",
        height: "100%",
        color: "white",
        padding: "5px",
        '@media (max-width: 768px)': {
            width: '97%'
        }
    },
    sidebarContainer: {
        overflowY: 'scroll',
       
    },
    menuItem: {
        height: 100,
        justifyContent: "center",
        display: "flex",
        backgroundColor: "#eee",
        borderRadius: 10,
        margin: "5px 0px",
        alignItems: "center",
        cursor: "pointer",
        "& a": {
            fontSize: 20,
            color: "black",
        },
        // '@media (max-width: 768px)': {
        //     width: '100%'
        // }
    },
    selectedMenu: {
        backgroundColor: "#2196f3        ",
        "& a": {
            color: "#fff",
        },
    },
});