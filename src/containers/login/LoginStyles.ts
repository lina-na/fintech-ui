import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '5%'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '20px'
  },
  title: {
    padding: '8px 0 4px 25px',
    display: 'flex',
    width: '100%',
  },
  input: {
    width: '100%',
    marginTop: '16px',
    marginBottom: '8px',
  },
  button: {
    marginTop: '16px',
    width: '100%',
  },
  card: {
    width: '366px',
    minWidth: '320px',
    padding: '20px 0 20px 0',
    backgroundColor: '#FFFFFF',
    position: 'relative',
    boxShadow: '0px -5px 26px -16px #000000',
    borderRadius: '10px',
  },
  helpers: {
    paddingTop: '8px',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
  media: {
    height: '100px',
    objectFit: 'contain'

  },
  link: {
    textDecoration: 'none'
  }
})

export default useStyles;
