import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    margin: theme.spacing(25, 0, 25),
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    margin: theme.spacing(5, 0, 3),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '5%'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px'
  },
  card: {
    width: '800px',
    minWidth: '320px',
    padding: '20px 0 20px 0',
    backgroundColor: '#FFFFFF',
    position: 'relative',
    boxShadow: '0px -5px 26px -16px #000000',
    borderRadius: '10px',
  },
  fullName: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  media: {
    height: '100px',
    objectFit: 'contain'
  },
  input: {
    width: '100%',
    marginTop: '5px',
    marginBottom: '15px',
  },
  inputName: {
    width: '48%',
    marginTop: '5px',
    marginBottom: '15px',
  },
  errors: {
    fontSize: '14px',
    color: 'red',
  },
  button: {
    marginTop: '16px',
    width: '100%',
  },
  helpers: {
    fontSize: 14,
  },
  link: {
    textDecoration: 'none'
  }
}));

export default useStyles;
