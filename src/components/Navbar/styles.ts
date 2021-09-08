import { makeStyles } from '@material-ui/core/styles';
import colors from '../../style/colors';

const styles = makeStyles({
  navbar: {
    width: '100%',
    backgroundColor: colors.darkBlue,
    padding: '20px',
    position: 'fixed',
    top: '0',
  },
  logo: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  },
});

export default styles;
