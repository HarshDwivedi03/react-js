import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  let [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  function inpchange(e) {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  }
 let navigator=useNavigate()
  function finalsubmit(e) {
    e.preventDefault();
    localStorage.setItem("userdata", JSON.stringify(formdata));
    console.log(formdata);
  }

  return (
    <>
      {/* {fromdata}
      <input type="text" placeholder="Enter your name" onChange={inpchange} /> */}

      <form action="" onSubmit={finalsubmit}>
        <label htmlFor="">Username</label>
        <input type="text" name="username" onChange={inpchange} /> <br />
        <label htmlFor="">Email</label>
        <input type="text" name="email" onChange={inpchange} /> <br />
        <label htmlFor="">Password</label>
        <input type="text" name="password" onChange={inpchange} /> <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;