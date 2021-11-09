
// קומפננטה זן מציגה חלק מה פרם בחירת קטגוריה מרשימת הקטגוריות 
import _ from 'lodash'
import React, { Component, useEffect, Fragment } from 'react'
import { Button, Dropdown, Grid, Form } from 'semantic-ui-react'
import { connect } from "react-redux";
import { getCategory } from "../../actions/category";

/////////////// עזרה לא יודעות איך בידיוק לעבור על כל הקטגוריות
 const GetOptions = (arr) => {

  console.log(arr);
  return (formatData(arr.categoryArr));
 }


  class DropdownExampleRemote extends Component {
  state = {
    isFetching: false,
    multiple: true,
    search: true,
    searchQuery: null,
    value: [],
    options: GetOptions(this.props.arr)
  }
  
componentDidMount(){
  
  this.props.getCategory();
}

  handleChange = (e, { value }) => this.setState({ value })
  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })

  render() {
    const { multiple, options, isFetching, search, value } = this.state
    
    return (
      <Grid>
        <Grid.Column width={8}>



          <label>בחירת קטגוריות</label>
          <Dropdown
            fluid
            selection
            multiple={multiple}
            options={options}
            value={value}
            placeholder='בחירת קטגוריות'
            onChange={this.handleChange}
            onSearchChange={this.handleSearchChange}
          />
        </Grid.Column>
      </Grid>
    )
  }
}


// export default DropdownExampleRemote
//   return { arr: state.categoryArr }
// }
// export default connect(myStateToProps, { getCategory })(DropdownExampleRemote)

//  const mapStateToProps = (state) => {
//    return {
//        arr: state.categoryPart.categoryArr
//    }
//  }
//  export default connect(mapStateToProps, { getCategory })(GetOptions); 

// const Category = (props) => {
//   useEffect(() => { props.getCategory()},[]);
//   return (formatData(props.arr));
// }

const formatData = (data) =>{
 let formatData = [];
   for (let index = 0; index < data.length; index++) {
       const elem = data[index];
          formatData[index]={ 
              key: elem._id,
              text:elem.nameCategory,
              value: elem._id
          }
   }
  return formatData;
}
const mapStateToProps = (state) => {
  console.log(state)
    return {   arr: state.categoryPart }     
}
export default connect(mapStateToProps, { getCategory })(DropdownExampleRemote); 
