import { Button, Checkbox, Form, Select } from 'semantic-ui-react';
import './businessOwner.scss';
import { isModuleDeclaration } from '@babel/types';
import DropdownExampleRemote from '../functions/DropdownExampleRemote';
import UploadPhotos from '../functions/UploadPhotos';
import { connect } from "react-redux";
import { postBusinessOwner } from '../../actions/businessOwner';




const BusinessOwner = (props) => {

  let nameBusinessOwner;
  let phone;
  let address;
  let payments;
  let photoAdvertising;
  let categories;
  const createBusinessOwner = () => {

    let newBusinessOwner = { nameBusinessOwner, phone, address, payments, photoAdvertising, categories };
    props.postBusinessOwner(newBusinessOwner);
  }
  return (<>

    <Form className="form right">
      <Form.Field>
        <label>שם בעל העסק</label>
        <input placeholder='שם בעל העסק' onChange={(e) => { nameBusinessOwner = e.target.value }} />
      </Form.Field>
      <Form.Field>
        <label>מספר טלפון</label>
        <input placeholder='מספר טלפון' onChange={(e) => { phone = e.target.value }} />
        <label>כתובת</label>
        <input placeholder='כתובת' onChange={(e) => { address = e.target.value }} />
      </Form.Field>
      <Form.Field>
        <label>תשלומים</label>
        <input placeholder='תשלומים' onChange={(e) => { payments = e.target.value }} />
      
        <label>להוספת קטגוריה</label>
        <input placeholder='להוספת קטגוריה' />
        {/* <input placeholder='להוספת קטגוריה'  onChange={(e) => { payments = e.target.value }}/> */}
      </Form.Field>
      <DropdownExampleRemote />
      <UploadPhotos />

      <Button type='submit' onClick={createBusinessOwner}>אישור</Button>
    </Form>  </>)

}
const myStateToProps = state => {
  return {}
}
export default connect(myStateToProps, { postBusinessOwner })(BusinessOwner)
