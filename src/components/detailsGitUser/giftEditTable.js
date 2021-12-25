import React from "react";

import { Button } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function GiftEditTable(props) {
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [showConfirmEdit, setShowConfirmEdit] = React.useState(false);
  const [indexDelete, setIndexDelete] = React.useState(0);
  const [itemUpdate, setItemUpdate] = React.useState(0);

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

  const handleEditNo = () => {
    setShowConfirmEdit(false);
  };
  // const handleConfirm = () => {
  //     setShowConfirm(true);
  // };
  const dialogEdit = (i) => {
    setItemUpdate(i);
    setShowConfirmEdit(true);
  };
  const handleEditClick = (i) => {
    setShowConfirmEdit(false);

    props.updateGift(itemUpdate);
    // props.arr.filter((p) => p._id != props.arr[indexDelete]._id);
    props.getGift();
  };
  // Initial states
  //nameGift price category gifPhoto ratedScore ageRange status user remark character
  let c;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>תמונה</th>
            <th>שם מתנה</th>
            {/* <th>הערה</th> */}
            <th>טווח גיל</th>
            <th>טווח מחיר</th>
            <th>אופי</th>
            <th>קטגוריה </th>
            {/* <th>תת קטגוריה </th> */}
            <th>סטטוס</th>
            <th></th>

            {/* <TableCell>Last Name</TableCell>
                                <TableCell>City</TableCell> */}
          </tr>
        </thead>
        <tbody>
          {props.arr
            ? props.arr.map((row, i) => {
                c = props.categoryArr.find((e) => e._id == row.category);
                return (
                  <tr key={i}>
                    {/* <div> */}
                    <td>
                      <Button
                        className="mr10"
                        onClick={() => {
                          dialogEdit(row);
                        }}
                      >
                        <EditOutlinedIcon />
                      </Button>
                    </td>
                    <td>
                      <img
                        src={"http://localhost:5000/" + row.gifPhoto}
                        className="imgg"
                      />
                    </td>
                    <td style={{ fontSize: "25px" }}>{row.nameGift}</td>
                    {/* <td>{row.remark}</td> */}
                    <td>
                      {row.ageRange[0]}-{row.ageRange[1]}
                    </td>
                    <td>
                      {row.price[0]}-{row.price[1]}
                    </td>
                    <td>{row.character}</td>
                    <td>{c && c.nameCategory}</td>
                    <td>{row.status}</td>
                    <td>
                      <Button className="mr10" onClick={() => dialog(i)}>
                        <DeleteOutlineIcon />
                      </Button>
                    </td>
                    <td>
                      {
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
                    <td>
                      {showConfirmEdit && (
                        <Dialog
                          open={showConfirmEdit}
                          onClose={handleEditNo}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                          className="EditPOPUP"
                        >
                          <DialogTitle id="alert-dialog-title">
                            {"ערוך פרטי מתנה"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              סטטוס
                              <br />
                              <select
                                placeholder="בחר סטטוס"
                                value={itemUpdate.status}
                                onChange={(e) => {
                                  setItemUpdate({
                                    ...itemUpdate,
                                    status: e.target.value,
                                  });
                                }}
                              >
                                {["NEW", "APPROVE", "WAITDELETE"].map(
                                  (item) => {
                                    return (
                                      <option value={item} key={item}>
                                        {item}
                                      </option>
                                    );
                                  }
                                )}
                              </select>
                              <br />
                              שם
                              <br />
                              <input
                                value={
                                  itemUpdate.nameGift + "  " + itemUpdate.remark
                                }
                                onChange={(e) =>
                                  setItemUpdate({
                                    ...itemUpdate,
                                    nameGift: e.target.value,
                                  })
                                }
                              />
                              <br />
                              טווח גיל
                              <br />
                              <input
                                value={itemUpdate.ageRange[0]}
                                onChange={(e) =>
                                  setItemUpdate({
                                    ...itemUpdate,
                                    ageRange: [
                                      e.target.value,
                                      itemUpdate.ageRange[1],
                                    ],
                                  })
                                }
                              />
                              <input
                                value={itemUpdate.ageRange[1]}
                                onChange={(e) =>
                                  setItemUpdate({
                                    ...itemUpdate,
                                    ageRange: [
                                      itemUpdate.ageRange[0],
                                      e.target.value,
                                    ],
                                  })
                                }
                              />
                              <br />
                              טווח מחיר
                              <br />
                              <input
                                value={itemUpdate.price[0]}
                                onChange={(e) =>
                                  setItemUpdate({
                                    ...itemUpdate,
                                    price: [
                                      e.target.value,
                                      itemUpdate.price[1],
                                    ],
                                  })
                                }
                              />
                              <input
                                value={itemUpdate.price[1]}
                                onChange={(e) =>
                                  setItemUpdate({
                                    ...itemUpdate,
                                    price: [
                                      itemUpdate.price[0],
                                      e.target.value,
                                    ],
                                  })
                                }
                              />
                              <br />
                              סוג
                              <br />
                              <input
                                value={itemUpdate.character}
                                onChange={(e) =>
                                  setItemUpdate({
                                    ...itemUpdate,
                                    character: e.target.value,
                                  })
                                }
                              />
                              <br />
                              קטגוריה
                              <br />
                              {/* status character */}
                              <select
                                placeholder="בחר קטגוריה"
                                value={itemUpdate.category}
                                onChange={(e) => {
                                  setItemUpdate({
                                    ...itemUpdate,
                                    category: e.target.value,
                                  });
                                }}
                              >
                                {props.categoryArr.map((item) => {
                                  return (
                                    <option value={item._id} key={item._id}>
                                      {item.nameCategory}
                                    </option>
                                  );
                                })}
                              </select>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              onClick={() => handleEditClick(i)}
                              color="primary"
                              autoFocus
                            >
                              עדכן
                            </Button>
                            <Button
                              onClick={handleEditNo}
                              color="primary"
                              autoFocus
                            >
                              בטל
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
