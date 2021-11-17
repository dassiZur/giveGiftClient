import { connect } from 'react-redux';
import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import giveGift from './giveGift.png'
import './entry.scss'
import { useHistory } from "react-router-dom";
import{postAllUser} from '../../actions/user';
import axios from "axios"

let nameUser;
let password;



const Entry = () => {
  const history = useHistory();
  const createUser = () => {
    let newUser = { "username": nameUser, "password": password };
    //check in server
    
    history.push('/Try');
    //props.postBusinessOwner(newUser);
   
      axios.post("http://localhost:5000/users/entry", newUser).then(succ => { 
        debugger
        localStorage.setItem('user', JSON.stringify(succ.data[0]));        
          alert(" התווספת בהצלחה!!!")
      }).catch(err => { console.log("ההוספה לא הצליחה"); })
    
  }
  return (<div className="DivAll">
    <div className="div1">
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column>
          <Form>
            <h1 className="hh">טופס כניסה</h1>
            <Form.Input
              icon='user'
              iconPosition='rigth'
              label='שם משתמש'
              placeholder='שם משתמש'
              onChange={(e) => { nameUser = e.target.value }}
            />
            <Form.Input
              icon='lock'
              iconPosition='rigth'
              label='סיסמה '
              placeholder='סיסמה '
              type='password'
              onChange={(e) => { password = e.target.value }}

            />

              <Link to="/NewUser">

                <h4>אין לך חשבון? - הרשמה</h4>
              </Link>
              {/* <Route path="/NewUser">
                <NewUser></NewUser>
              </Route> */}
              <br></br>
            <Button content='כניסה' primary onClick={createUser} />
          </Form>
        </Grid.Column>

      </Grid>
    </div>
    {/* <div className="div2"> <img className="giveGift" src={giveGift}></img> </div>  */}


  </div>

  )




}
export default connect(  postAllUser )(Entry); 









