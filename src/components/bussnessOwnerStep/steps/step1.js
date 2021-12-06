import { connect } from 'react-redux';
import React from 'react'
import { Button, Divider, Form, Grid, Select } from 'semantic-ui-react'
import { postBusinessOwner } from '../../../actions/businessOwner';
// import NewUser from "../newUser/newUser";
import './step1.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import giveGift from '../../entry/giveGift.png'
// import './entry.scss'
// import '../../entry/entry.scss';
let bussinesOwner = {
  nameBusinessOwner: '',
  phone: '',
  address: '',
  meil: '',
  name: '',
  logo: '',
  area: 'מרכז',
  payments: [],
  photoAdvertising: [],
  categories: [],
};

const Step1 = (props) => {

  const createBussines = () => {

    // let newUser = { username, password, email, phone, role };

    props.postBusinessOwner(bussinesOwner);
    alert("המשתמש נרשם בהצלחה!")
  }
  const op = ['מרכז', 'ירושלים', 'דרום', 'צפון', 'חיפה', 'תל אביב']


  return (<div className="DivAll">
    <div className="div11">
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column>
          <Form>
            <h1 className="lableP">הכנס פרטי עסק</h1>
            <br></br>
            <br></br>

            <Form.Input

              placeholder='שם חנות'
              type="text"
              onChange={(e) => { bussinesOwner.nameBusinessOwner = e.target.value }}
            />
            <br></br>

            <Form.Input
              placeholder='טלפון '
              type='text'
              onChange={(e) => { bussinesOwner.phone = e.target.value }}
            />
            <br></br>
            {/* <Form.Field control={Select}
              placeholder='מרכז'
              options={[{ key: 'af3', value: 'af3', text: 'בב' },{ key: 'af2', value: 'af2', text: 'ים' },{ key: 'af1', value: 'af1', text: 'תא' }]}
              // onChange={(e) => { bussinesOwner.area = e.target.value }}
            /> */}
            <select onChange={(e) => { bussinesOwner.area = e.target.value }}>
              {op.map((item, index) => {
                return (
                  <option value={item} key={index}>{item}</option>
                )
              })}
            </select>
            <br></br>
            <br></br>

            <Form.Input
              placeholder='כתובת'
              type='text'
              onChange={(e) => { bussinesOwner.address = e.target.value }}
            />
            <br></br>

            <Form.Input
              placeholder='דואר אלקטרוני'
              type='text'
              onChange={(e) => { bussinesOwner.meil = e.target.value }}
            />
            <br></br>

            <Form.Input
              placeholder='שם בעל החנות'
              type='text'
              onChange={(e) => { bussinesOwner.name = e.target.value }}
            />
          </Form>
          <br></br>

          <Button content='הרשמה' primary onClick={createBussines} />
        </Grid.Column>


      </Grid>
    </div>
  </div>

  )
}
const myStateToProps = state => {
  return {}
}
export default connect(myStateToProps, { postBusinessOwner })(Step1)
