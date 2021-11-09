import axios from "axios";
// export const selectPost = (post) => {
//     return {
//         type: "POST_SELECT",
//         payload: post
//     }
// }
// export const deletPost = (id) => {
//     return {
//         type: "POST_DELETED",
//         id: id
//     }
// }
// export const deleteAllPosts = (id) => {
//     console.log("iiiiiiiiiiiiiiiid  "+id);
//     return (dispach)=>{
     
//      axios.delete(`http://localhost:3000/post/${id}`).then(succ=>{
//         console.log(succ)
//           dispach(deletPost(succ.data._id))
//           })
//          .catch(ee=>{console.log("ee.showMessage")})  
//     }
// }
// export const showMessage = (value) => {
//     return {
//         type: "POST_MESSAGE",
//         payload: value
//     }
// }
// export const drowPost = (post) => {
//     return {
//         type: "POST_DROW",
//         payload: post
//     }
// }
// export const putAllPosts = (post) => {
//     return (dispach)=>{
//      axios.put(`http://localhost:3000/post/${post._id}`,post).then(succ=>{
//         console.log(succ)
//          dispach(drowPost(succ.data))
//           })
//          .catch(ee=>{console.log("ee.showMessage")})  
//     }
// }
// export const cancelDelete = () => {
//     return {
//         type: "CANCEL_DELETE"
//     }
// }
// export const okDelete = (post) => {
//     return {
//         type: "OK_DELETE",
//         payload: post
//     }
// }
// export const drowSave = (post) => {
//     return {
//         type: "POST_DROWSAVE",
//         drowPost: post
//     }
// }
// export const addPost = (post) => {
//     return {
//         type: "POST_ADDED",
//         newPost: post
//     }
// }
// export const postAllPosts = (post) => {
//     return (dispach)=>{
//      axios.post("http://localhost:3000/post",post).then(succ=>{
//         console.log(succ)
//          dispach(addPost(succ.data))
//           })
//          .catch(ee=>{console.log(ee)})  
//     }
// }
// export const savePosts = (posts) => {
//     return {
//         type:"POSTS_SAVED",
//         payload: posts
//     }
// }
// export const GetAllPosts = (post) => {
//     return (dispach)=>{
//      axios.get("http://localhost:3000/post",post).then(succ=>{
//         console.log(succ.data)
//          dispach(savePosts(succ.data))
//           })
//          .catch(ee=>{console.log("ee.showMessage")})  
//     }
// }

