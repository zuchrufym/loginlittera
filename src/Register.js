import React, {useState} from 'react'

const Register = () => {

    let [data, setData]= useState({
        email: '',
        password:'',
    
      });
    
      const onChange = e => {
        console.log(e.target.name);
        setData({...data, [e.target.name]:e.target.value})
      //   setData({  });
    
      }
    
    
      let{email, password}= data;
    
      const submitData= () => {
        console.log(data);
    
        
      }

    return (
        <div>
          <label className="input">Username</label>
          <br></br>
          <input className="input" onChange={(e) => onChange(e) } name="email" type="email" value={email} ></input>
          <br></br>
          <label className="input">Password </label>
          <br></br>
          <input className="input" onChange={(e) => onChange(e) } name="password" type="password" value={password}></input>
          <br></br>
          <br></br>
          <button onClick={()=> submitData()} className="but">Login</button>
        </div>
    )
}

export default Register
