import * as actionTypes from "../ActionTypes";
import axios from "axios";

export const getAllGift = (gift) => {
  return {
    type: actionTypes.GIFT_GET,
    newGift: gift,
  };
};
export const getAllAllGift = (gift) => {
  return {
    type: actionTypes.ALL_GIFT_GET,
    newGift: gift,
  };
};
export const getGift = () => {
  return (dispatch) => {
    let user = JSON.parse(localStorage.getItem("user"));
    debugger;
    // let id = user._id
    axios
      .get("http://localhost:5000/gifts/getByUser/" + user._id)
      .then((succ) => {
        dispatch(getAllGift(succ.data.reverse()));
      })
      .catch((err) => {
        debugger;
        console.log("============this is mistake" + err.message);
      });
  };
};
export const getGiftsTomanager = () => {
  debugger;
  return (dispatch) => {
    debugger;
    axios
      .get("http://localhost:5000/gifts/")
      .then((succ) => {
        debugger;
        dispatch(getAllAllGift(succ.data));
      })
      .catch((err) => {
        debugger;
        console.log("============this is mistake" + err.message);
      });
  };
};
export const postAllGift = (gift) => {
  return {
    type: actionTypes.GIFT_ADD,
    newGift: gift,
  };
};
export const postGift = (gift) => {
  return (dispach) => {
    axios
      .post("http://localhost:5000/gifts", gift)
      .then((succ) => {
        dispach(postAllGift(succ.data));
        alert("מתנה התווסה בהצלחה!!!");
      })
      .catch((err) => {
        console.log("ההוספה לא הצליחה");
      });
  };
};
export const deleteAllGift = (gift) => {
  return {
    type: actionTypes.GIFT_DELETE,
    deleteGift: gift,
  };
};
export const deleteGift = (gift) => {
  return (dispach) => {
    axios
      .delete("http://localhost:5000/gifts/" + gift)
      .then((succ) => {
        dispach(deleteAllGift(succ.data));
        alert("נמחקה בהצלחה!!!");
      })
      .catch((err) => {
        console.log("המחיקה לא הצליחה");
      });
  };
};
export const putAllGift = (gift) => {
  return {
    type: actionTypes.GIFT_UPDATE,
    putGift: gift,
  };
};
export const putGift = (gift) => {
  return (dispach) => {
    return axios
      .put("http://localhost:5000/gifts/" + gift._id, gift)
      .then((succ) => {
        dispach(putAllGift(succ.data));
        alert("נמחקה בהצלחה!!!");
      })
      .catch((err) => {
        console.log("המחיקה לא הצליחה");
      });
  };
};
