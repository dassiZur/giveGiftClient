import { connect } from "react-redux";
import { postBusinessOwner } from '../../actions/businessOwner';



const Maneger = () => {
    return ( <h1>ooo</h1> );
}
 
const myStateToProps = state => {
    return {}
  }
  export default connect(myStateToProps, { postBusinessOwner})(Maneger)
  