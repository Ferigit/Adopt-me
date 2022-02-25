import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        padding: 5,
    },
    img: {
        borderRadius: 8,
        maxWidth: "50%",
        maxHeight: 200,
    },
    imgBox: {
        display: "flex",
        justifyContent: "flex-start",
        border: "1px solid #eee",
        borderRadius: 8,
        marginBottom: 15,
    },
    loadMore: {
        width: "100%",
        height: 70,
        backgroundColor: "#357a38",
        color: "#fff",
        border: '1px solid #357a38',
        borderRadius: 8,
        cursor: "pointer"
    },
    fetchCatsLoading: {
        textAlign: "center",
        margin: 20,
        fontSize: 20
    },
    catID: {
        padding: 10
    }
});

