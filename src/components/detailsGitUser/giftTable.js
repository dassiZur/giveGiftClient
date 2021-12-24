import React from "react";

import { Button } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function GiftTable(props) {
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [indexDelete, setIndexDelete] = React.useState(0);

  // Handle the case of delete confirmation where
  // user click yes delete a specific row of id:i

  const handleNo = () => {
    setShowConfirm(false);
  };
  // const handleConfirm = () => {
  //     setShowConfirm(true);
  // };
  const dialog = (i) => {
    setIndexDelete(i);
    setShowConfirm(true);
  };
  const handleRemoveClick = (i) => {
    setShowConfirm(false);

    props.deleteGift(props.arr[indexDelete]._id);
    props.arr.filter((p) => p._id != props.arr[indexDelete]._id);
    props.getGift();
  };

  // Initial states
  //nameGift price category gifPhoto ratedScore ageRange status user remark character

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>תמונה</th>
            <th>שם מתנה</th>
            <th>טווח גיל</th>
            <th>טווח מחיר</th>
            <th>אופי</th>
            <th>קטגוריה </th>
            <th>סטטוס</th>
            <th></th>

            {/* <TableCell>Last Name</TableCell>
                                <TableCell>City</TableCell> */}
          </tr>
        </thead>
        <tbody>
          {props.arr
            ? props.arr.map((row, i) => {
                return (
                  <tr key={i}>
                    {/* <div> */}
                    <td>
                      <img
                        src={"http://localhost:5000/" + row.gifPhoto}
                        className="imgg"
                      />
                    </td>
                    <td style={{ fontSize: "25px" }}>{row.nameGift}</td>
                    <td>
                      {row.ageRange[0]}-{row.ageRange[1]}
                    </td>
                    <td>
                      {row.price[0]}-{row.price[1]}
                    </td>
                    <td>{row.character}</td>
                    <td>{row.nameGift}</td>
                    <td>{row.status}</td>
                    <td>
                      <Button className="mr10" onClick={() => dialog(i)}>
                        <DeleteOutlineIcon />
                      </Button>
                    </td>
                    <td>
                      {showConfirm && (
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
                      )}
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
              })
            : []}
        </tbody>
      </table>
    </div>
  );
}
