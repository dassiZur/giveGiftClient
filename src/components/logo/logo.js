import { Link } from 'react-router-dom'
import { Route, BrowserRouter as Router} from 'react-router-dom'
// import giveGift from '../photoLogo/giveGift.png';
import giveGift from './photoLogo/giveGift.png';
import './logo.scss';

const Logo = () => {
    return (<div>
         <img className="photoGiveGift" src={giveGift} ></img>

    </div>)
}
export default Logo;