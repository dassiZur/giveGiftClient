import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import {
    Box, Button, Snackbar, Table,
    TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import './detailsGiftUser.scss'
import { connect } from 'react-redux';
import { getGift, deleteGift } from '../../actions/gift'
import { Link } from "react-router-dom";
// Creating styles
const useStyles = makeStyles({
    root: {
        "& > *": {
            borderBottom: "unset",
        },
    },
    table: {
        minWidth: 650,
    },
    snackbar: {
        bottom: "104px",
    },
});
///////////////////////////////////////////////////
// import axios from "axios"
// axios.get("http://localhost:5000/gifts/getByUser",user)
// .then(succ => { arr=succ     
// }).catch(err => console.log("============this is mistake" + err.message))
//////////////////////////////////////
function DetailsGitUser(props) {
    // Creating style object
    const classes = useStyles();
    const [isUser, setIsUser] = useState(true);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("user")))
            props.getGift()
        else
            setIsUser(false)
    }, []);
    let user = JSON.parse(localStorage.getItem("user"));
    //get from server all gift that user=user._id


    // Defining a state named rows
    // which we can update by calling on setRows function
    // const [rows, setRows] = useState([  
    //     // { id: 1, firstname: "", lastname: "", city: "" },
    //     arr? arr.map((item)=>{
    //         return{
    //         id: item._id, firstname: item.nameGift, lastname: item.remark, city: item.character ,
    //     }}):{ id: 1, firstname: "", lastname: "", city: "" }

    // ]);
    //nameGift price category gifPhoto ratedScore ageRange status user remark character
    // Initial states
    const [open, setOpen] = React.useState(false);
    const [isEdit, setEdit] = React.useState(false);
    const [disable, setDisable] = React.useState(true);
    const [showConfirm, setShowConfirm] = React.useState(false);
    const [indexDelete, setIndexDelete] = React.useState(0);
    // Handle the case of delete confirmation where 
    // user click yes delete a specific row of id:i
    const handleNo = () => {
        setShowConfirm(false);
    };
    const handleConfirm = () => {
        setShowConfirm(true);
    };
    const dialog = (i) => {
        setIndexDelete(i);
        setShowConfirm(true);

    }
    const handleRemoveClick = (i) => {
        debugger;

        setShowConfirm(false);

        props.deleteGift(props.arr[indexDelete]._id);
        props.arr.filter(p => p._id != props.arr[indexDelete]._id);
        props.getGift()
    };
    return (isUser ?
        <table>
            <thead>
                <tr>
                    <th >תמונה</th>
                    <th >שם מתנה</th>
                    <th >הערה</th>
                    <th >טווח גיל</th>
                    <th >טווח מחיר</th>
                    <th >אופי</th>
                    <th >קטגוריה </th>
                    <th >תת קטגוריה </th>
                    <th >סטטוס</th>

                    {/* <TableCell>Last Name</TableCell>
                                <TableCell>City</TableCell> */}
                </tr>
            </thead>
            <tbody>
                {props.arr ?
                    props.arr.map((row, i) => {
                        return (
                            <tr key={i}>

                                {/* <div> */}
                                <td><img src={"http://localhost:5000/" + row.gifPhoto} className="imgg" /></td>
                                <td>{row.nameGift}</td>
                                <td>{row.remark}</td>
                                <td >{row.ageRange[0]}-{row.ageRange[1]}</td>
                                <td >{row.price[0]}-{row.price[1]}</td>
                                <td >{row.character}</td>
                                <td >{row.nameGift}</td>
                                <td >{row.status}</td>
                                <td>
                                    <Button className="mr10" onClick={() => dialog(i)}>
                                        <DeleteOutlineIcon />
                                    </Button>
                                </td>
                                <td>
                                    {showConfirm &&
                                        <Dialog
                                            open={showConfirm}
                                            onClose={handleNo}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">
                                                {"Confirm Delete"}
                                            </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    Are you sure to delete
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button
                                                    onClick={() => handleRemoveClick(i)}
                                                    color="primary"
                                                    autoFocus
                                                >
                                                    Yes
                                                </Button>
                                                <Button
                                                    onClick={handleNo}
                                                    color="primary"
                                                    autoFocus
                                                >
                                                    No
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    }
                                </td>


                                {/* component="th" scope="row" */}
                                {/* <TableCell >
                                                            {row.remark}
                                                        </TableCell>
                                                                                                                                         <TableCell >
                                                            <TableCell >
                                                                {row.ageRange[0]}-{row.ageRange[1]}
                                                            </TableCell>
                                                            <TableCell >                                                                                    <TableCell >
                                                                {row.status}
                                                            </TableCell> */}

                                {/* </div> */}

                            </tr>
                        );
                    }) : []}
            </tbody>
        </table> :
        <div>
            אינך מחובר
            <Link to="entry">להתחברות</Link>
        </div>
    );
}
const myMapToProps = (state) => {
    return {
        arr: state.giftPart.giftArr

    }
}
export default connect(myMapToProps, { getGift, deleteGift })(DetailsGitUser);



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
