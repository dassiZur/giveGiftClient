import _ from 'lodash'
import faker from 'faker'
import React, { Component, useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import { getCategory } from '../../actions/category';

const GetOptions = (props) => {
 //useEffect(() => { props.getCategory() }, [])
  // return (<>{props.arr.forEach(element => {
  //   return [{ key: element.nameCategory, text: element.nameCategory, value: element.nameCategory }]
  // })}</>)
  //return (<>{props.arr.map((item, index) => {
  //  return [{ key: index, text: item.nameCategory, value: item.nameCategory }]
  //})}
  //</>)

  return [{ key: "name", text: "name", value: "name" }
    , { key: "tttt", text: "tttt", value: "tttt" }]
}
//export default GetOptions
  const mapStateToProps = (state) => {
    console.log("lllllllllllllllllllllllll")
      return {
          arr: state.catgeoryPart.categoryArr
      }
    }
    export default connect(mapStateToProps, { getCategory })(GetOptions);
    