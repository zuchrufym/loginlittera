import React from 'react'
// import React, {useState} from 'react'
import {Provider} from 'react-redux'
import Register from './Register'
import store from './store'
import './App.css'
import { Row, Col} from 'reactstrap'

const App = () => {

  // let [data, setData]= useState({
  //   email: '',
  //   password:'',

  // });

  // const onChange = e => {
  //   console.log(e.target.name);
  //   setData({...data, [e.target.name]:e.target.value})
  //   // setData({  });

  // }


  // let{email, password}= data;

  // const submitData= () => {
  //   console.log(data);

    
  // }

  return (
    <div className="LogIn">
      <Row>
      Littera
      </Row>
      <div className="CardLittera">
        <Provider store={store}>
          <Register></Register>
        </Provider>
      </div>
      
    </div>
    
  )
}

export default App
