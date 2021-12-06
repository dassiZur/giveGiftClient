import { connect } from 'react-redux';
import React from 'react'
import { Button, Divider, Form, Grid, Segment ,Radio} from 'semantic-ui-react'
import UploadPhotos from '../../functions/UploadPhotos';
import './newUser'
import { postUser } from '../../../actions/user';
// import DropdownExampleRemote from '../../functions/DropdownExampleRemote';
// import giveGift from './giveGift.png'
import './newUser.scss'
import { useHistory } from 'react-router';


const NewUser = (props) => {

    let username;
    let password;
    let email;
    let phone;
    let role;
    const history = useHistory();

    const createUser = () => {
        let newUser = { username, password, email, phone };
        // let newUser = { username, password, email, phone, role };

        props.postUser(newUser).then(()=>history.push('/MyShare'));
        // alert("המשתמש נרשם בהצלחה!")
    }


    return (    <div className="DivAll">
        <div className="mydiv1">
        <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
                <Form>
                    <h1 className="hh">טופס הרשמה</h1>
                    <Form.Input
                        icon='user'
                        iconPosition='rigth'
                        label='שם משתמש'
                        placeholder='שם משתמש'
                        onChange={(e) => { username = e.target.value }}
                    />
                    <Form.Input
                        icon='lock'
                        iconPosition='rigth'
                        label='סיסמה '
                        placeholder='סיסמה '
                        type='password'
                        onChange={(e) => { password = e.target.value }}

                    />
                    <Form.Input
                        icon='envelope'
                        iconPosition='rigth'
                        label='מייל '
                        placeholder='מייל '
                        type='email'
                        onChange={(e) => { email = e.target.value }}

                    />
                    <Form.Input
                        icon='mobile alternate'
                        iconPosition='rigth'
                        label='פלאפון '
                        placeholder='פלאפון '
                        onChange={(e) => { phone = e.target.value }}
                    />
                 
                      <div className="tafkid">תפקיד</div>
                      {/* <Form.Radio id="MANAGER" label="MANAGER" name="role" value="MANAGER"onChange={(e) => { role = e.target.value }}/>  */}
                      <input type="radio" id="USER" name="role" value="USER"onChange={(e) => { role = e.target.value }}/>
                      <label for="USER">USER</label>
                      <input type="radio" id="BUSINESS" name="role" value="BUSINESS"onChange={(e) => { role = e.target.value }}/>
                      <label for="BUSINESS">BUSINESS</label>
                   

                    <UploadPhotos />

                    <Button content='הרשמה' primary onClick={createUser} />
                </Form>
            </Grid.Column>

        </Grid>
        </div>
        {/* <div className="div2">
        <img className="giveGift" src={giveGift}></img>
        </div> */}
    </div>)
}

const myStateToProps = state => {
    return {}
}
export default connect(myStateToProps, { postUser })(NewUser)
