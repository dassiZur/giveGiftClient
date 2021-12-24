import React, { useState, useEffect } from "react";

import "./detailsGiftUser.scss";
import { connect } from "react-redux";
import {
  getGift,
  deleteGift,
  putGift,
  getGiftsTomanager,
} from "../../actions/gift";
import { getAllCategoryChild } from "../../actions/category";
import { Link } from "react-router-dom";
import GiftTable from "./giftTable";
import GiftEditTable from "./giftEditTable";
import axios from "axios";

function DetailsGitUser(props) {
  const statusArray = ["NEW", "APPROVE", "WAITDELETE"];
  const [isUser, setIsUser] = useState(true);
  const [isManager, setIsManager] = useState(false);
  const [managerTables, setManagerTables] = useState();
  const [tables, setTables] = useState("NEW");
  let user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (user) {
      if (user.role == "MANAGER") {
        setIsManager(true);
        props.getGiftsTomanager();

        axios.get(`http://localhost:5000/categories/all`).then((succ) => {
          debugger;
          props.getAllCategoryChild(succ.data);
        });
      }
      props.getGift();
    } else setIsUser(false);
  }, []);

  useEffect(() => {
    isManager && partTables();
  }, [props.allGiftarr]);

  useEffect(() => {
    debugger;
  }, [tables]);

  function partTables() {
    let arra = { NEW: [], APPROVE: [], WAITDELETE: [] };
    props.allGiftarr.forEach((gift) => {
      arra[gift.status].push(gift);
    });
    setManagerTables({ ...arra });
  }

  // function chooseTable(tIndex) {
  //   var i;
  //   var x = [...tables];
  //   for (i = 0; i < x.length; i++) {
  //     x[i] = "none";
  //   }

  //   x[tIndex] = "block";
  //   setTables(x);
  //   // style={{marginRight: spacing + 'em'}}
  // }
  return isUser ? (
    <div style={{ overflowX: "clip" }}>
      {isManager ? (
        <div>
          <div className="tab">
            <button
              className={"tablinks " + (tables == "NEW" ? "active" : "")}
              onClick={() => setTables("NEW")}
            >
              חדש
            </button>
            <button
              className={"tablinks " + (tables == "APPROVE" ? "active" : "")}
              onClick={() => setTables("APPROVE")}
            >
              מאושר
            </button>
            <button
              className={"tablinks " + (tables == "WAITDELETE" ? "active" : "")}
              onClick={() => setTables("WAITDELETE")}
            >
              לא אושר
            </button>
            <button
              className={"tablinks " + (tables == "MyShare" ? "active" : "")}
              onClick={() => setTables("MyShare")}
            >
              השיתופים שלי
            </button>
            {/* <button
              className={
                "tablinks " + (tables == "Add Managers" ? "active" : "")
              }
              onClick={() => setTables("Add Managers")}
            >
              הוספ
            </button> */}
          </div>
          {/* 'NEW', "DELEY", 'APPROVE', 'WAITDELETE' */}
          {managerTables &&
            statusArray.map((sts, i) => {
              return (
                tables == sts && (
                  <div className="tabcontent">
                    {/* <h2>status: {sts}</h2> */}
                    <GiftEditTable
                      deleteGift={props.deleteGift}
                      updateGift={props.putGift}
                      arr={managerTables[sts]}
                      getGift={props.getGiftsTomanager}
                      categoryArr={[
                        ...props.categoryArr,
                        ...props.categoryArrChil,
                      ]}
                    />
                  </div>
                )
              );
            })}

          {tables == "MyShare" && (
            <div className="tabcontent">
              {/* <h2>"MyShare"</h2> */}
              <GiftTable
                deleteGift={props.deleteGift}
                arr={props.arr}
                getGift={props.getGift}
              />
            </div>
          )}
          {tables == "Add Managers" && (
            <div className="tabcontent" style={{ display: tables[4] }}>
              <h2>Add Managers</h2>
            </div>
          )}

          {/* <div className="tabcontent" style={{ display: tables[1] }}>
            <h2>status: "APPROVE"</h2>
            </div>
            
            <div className="tabcontent" style={{ display: tables[2] }}>
            <h2>status: "WAITDELETE"</h2>
          </div> */}
        </div>
      ) : (
        <GiftTable
          deleteGift={props.deleteGift}
          arr={props.arr}
          getGift={props.getGift}
        />
      )}
      {/* 
        props.deleteGift(props.arr[indexDelete]._id);
        props.arr.filter(p => p._id != props.arr[indexDelete]._id);
        props.getGift */}
      {/* manager
                    <div className='cb-char-filter'>
                        <input type="checkbox" id={"cbn"} value={1} onChange={(e) => { }} />
                        <label htmlFor={"cbn"}>status: "NEW"</label>
                    </div>
                    <div className='cb-char-filter'>
                        <input type="checkbox" id={"cbOK"} value={0} onChange={(e) => { }} />
                        <label htmlFor={"cbOK"}>status: "OK"</label>
                    </div>
                    <div className='cb-char-filter'>
                        <input type="checkbox" id={"cbNOT"} value={true} onChange={(e) => { }} />
                        <label htmlFor={"cbNOT"}>status: "NOT_OK"</label>
                    </div>
 */}
    </div>
  ) : (
    <div>
      אינך מחובר
      <Link to="entry">להתחברות</Link>
    </div>
  );
}
const myMapToProps = (state) => {
  return {
    arr: state.giftPart.giftArr,
    categoryArr: state.categoryPart.categoryArr,
    categoryArrChil: state.categoryPart.categoryArrChil,
    allGiftarr: state.giftPart.allGift,
  };
};
export default connect(myMapToProps, {
  getGift,
  deleteGift,
  putGift,
  getGiftsTomanager,
  getAllCategoryChild,
})(DetailsGitUser);

// ____________modal from mail why?________________
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <input></input>
//           <button
//             onClick={() => {
//               handleClose;
//             }}
//           ></button>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
