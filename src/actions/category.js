import * as actionTypes from "../ActionTypes";
import axios from "axios";

export const addCategory = (category) => {
  return {
    type: actionTypes.CATEGORY_ADD,
    newCategory: category,
  };
};
export const postCategory = (category) => {
  console.log("hhhhhhhhh");
  return (dispach) => {
    axios
      .post("http://localhost:5000/categories", category)
      .then((succ) => {
        dispach(addCategory(succ.data));
        alert("קטגוריה התווספה בהצלחה!!!");
      })
      .catch((err) => {
        console.log("ההוספה לא הצליחה");
      });
  };
};

export const getAllCategory = (category) => {
  console.log("ww");

  return {
    type: actionTypes.CATEGORY_GET,
    newCategory: category,
  };
};
export const getAllCategoryChild = (category) => {
  console.log("PPPw");

  return {
    type: actionTypes.CHILD_CATEGORIES_GET,
    newCategory: category,
  };
};

// export const getCategoryChild = () => {
//     return (dispatch) => {
//         axios.get(`http://localhost:5000/categories/all`).then((succ) => {
//             debugger;
//             props.getAllCategoryChild(succ.data);
//           });

//         axios
//         .get("http://localhost:5000/categories")
//         .then((succ) => {
//           dispatch(getAllCategory(succ.data));
//         })
//         .catch((err) => console.log("============this is mistake" + err.message));
//     };
//   };

export const getCategory = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/categories")
      .then((succ) => {
        dispatch(getAllCategory(succ.data));
      })
      .catch((err) => console.log("============this is mistake" + err.message));
  };
};
///////////////
export const getAllCategoriesChild = (category) => {
  return {
    type: actionTypes.CATEGORIES_GET,
    newCategory: category,
  };
};
export const getCategoriesChild = () => {
  return (dispatch) => {
    axios
      .getById("http://localhost:5000/categories")
      .then((succ) => {
        dispatch(
          getAllCategoriesChild(succ.data),
          console.log("succ---------------------"),
          console.log(succ.data)
        );
      })
      .catch((err) => console.log("============this is mistake" + err.message));
  };
};
