// import Button from "@restart/ui/esm/Button";
// import { Card, Col, Container, Form, Row, Button, Alert } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getData, DeletePost, loginUser } from './Store/Actions'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";
import axios from "axios";
import BlogCreate from "./components/BlogCreate";
function App(props) {
  // const counter = useSelector(state => state)
  // const [cardData, setCartData] = useState([])
  // useEffect(() => {
  //   dispatch(getData()).then(data => setCartData(data.payload.data))
  // }, [])
  // const dispatch = useDispatch()
  const userDataRedux = useSelector((state) => state);
  const dispatch = useDispatch()

  const [email, setEmail] = useState([])
  const [password, setPassword] = useState(null)
  const [checked, setChecked] = useState(false)
  const [error, setError] = useState("")
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   var emailReg = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
  //   var passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])(?=.{6,12}$)/
  //   if (!emailReg.test(email)) {
  //     setError("email is invalid")
  //   }
  //   // else if (!passReg.test(password)) {
  //   //   setError("Password must be between 6 to 12 character , contain at least one character uppercase and one lowercase , contain at least one specaial character and contain at least a number")
  //   // }
  //   else if (!checked) {
  //     setError("Please accept the terms and conditions")
  //   }
  //   else {
  //     setError("")
  //     let data = {
  //       email, password
  //     }
  //     const dataMain = await dispatch(loginUser(data))
  //     console.log(dataMain, "dfjdhjdhj")
  //     if (dataMain.payload) {
  //       setError("Login Successfull")
  //     }



  //   }
  // }'
  useEffect(async () => {
    dispatch(getData()).then((data) => {
      console.log(data.payload, "mmop")
    })
  }, [])
  const token = localStorage.getItem('token')
  const handleSubmit = () => {
    let formData = new FormData();
    // data.append('name', 'Image Upload');
    console.log("emailemailemail", email)
    formData.append('image', email);
    // axios.post('http://localhost:5050/api/v1/createblog', formData, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "content-type": "multipart/form-data",
    //     'x-access-token':token
    //   }
    // }).then(data => console.log(data))
    console.log(token)
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/createblog" element={<BlogCreate />} />
        {/* <Route path="/Facebook" component={Facebook} /> */}
        {/* <Route path="/Freinds" component={Freinds} /> */}
        {/* <Route path="/profile" component={Profile} /> */}
      </Routes>
    </Router>
    //    <div className="App">
    //     <Container >

    //       <Row xs={1} md={2}>

    //         <Form onSubmit={handleSubmit}>
    //           <Form.Group className="mb-3" controlId="formBasicEmail">
    //             <Form.Label>Email address</Form.Label>
    //             <Form.Control onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Enter email" />
    //             <Form.Text className="text-muted">
    //               We'll never share your email with anyone else.
    //             </Form.Text>
    //           </Form.Group>

    //           <Form.Group className="mb-3" controlId="formBasicPassword">
    //             <Form.Label>Password</Form.Label>
    //             <Form.Control type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
    //           </Form.Group>
    //           <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //             <Form.Check type="checkbox" onChange={(e) => { setChecked(e.target.checked) }} label="I agree to terms and conditions" />
    //           </Form.Group>
    //           <Alert show={error} variant="danger">
    //             {error ? error : ""}
    //           </Alert>
    //           <Button variant="primary" type="submit">
    //             Submit
    //           </Button>
    //         </Form>

    //       </Row>

    //     </Container> 
    // <input onChange={(e) => { setEmail(e.target.files[0]) }} type="file" name="file" id="" />
    //     <button onClick={handleSubmit}>Click to uplaod</button>
    //  </div>
  );
}
// const mapStateToProps = (state) => {
//   console.log(state, "state")
//   return state
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getData: () => dispatch(getData())
//   }
// }

// export default connect(mapStateToProps, getData)(App);
export default App
