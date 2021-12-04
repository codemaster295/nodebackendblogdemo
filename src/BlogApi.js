import axios from "axios";


export default axios.create({
    baseURL: "http://localhost:5050/api/v1"
})
// // export default axios.create({
// //     baseURL: "https://fbmmo.herokuapp.com/api/v1"
// // })