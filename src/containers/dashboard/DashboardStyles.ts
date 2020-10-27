import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2%',
        paddingBottom: 20,
    },
    card: {
        width: '800px',
        minWidth: '320px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        boxShadow: '0px -5px 26px -16px #000000',
        borderRadius: '10px',
    },
    link: {
        textDecoration: 'none',
    },
    btn: {
        color: "#fff"

    }
}));

export default useStyles;
