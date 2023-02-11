import React, { useRef } from "react";
import styles from "./Todo.module.css";
export default function INBOX(props) {
  const titleRef = useRef("");
  const emailRef = useRef("");
  const numberRef = useRef("");
  const addressRef = useRef("");

  const addHandler = (e) => {
    e.preventDefault();
    if (titleRef.current.value === "") {
      window.alert("Please enter a title");
      return;
    }
    let newObj = {
      title: titleRef.current.value,
      email: emailRef.current.value,

      number: numberRef.current.value,

      address: addressRef.current.value,
    };
    props.append(newObj);


    alert("Member added");
    titleRef.current.value = "";
    emailRef.current.value = "";
    numberRef.current.value = "";
    addressRef.current.value = "";
  };

  return (
    <>
      <center><h1 style={{  margin: "25px", textShadow: "2px 2px whitesmoke"}}>
        Fitness Club Register
      </h1></center>
      <center><div className={styles.container}>
        <form action="">
          <div>
            <input
              style={{
                borderRadius: "5px",
                backgroundColor: "lightgray",
                fontWeight: "600",
                textAlign: "center",
                color: "black",
                padding: "10px",
              }}
              type="text"
              name=""
              id=""
              ref={titleRef}
              placeholder="Enter Name"
            />
            <br />
            <br />
            <input
              style={{
                borderRadius: "5px",
                backgroundColor: "lightgray",
                fontWeight: "600",
                textAlign: "center",
                padding: "10px",
              }}
              type="email"
              ref={emailRef}
              placeholder="Enter Email"
              // defaultValue="2023-02-01"
            />
            <br />
            <br />
            <input
              style={{
                borderRadius: "5px",
                backgroundColor: "lightgray",
                fontWeight: "600",
                textAlign: "center",
                padding: "10px",
              }}
              type="number"
              ref={numberRef}
              placeholder="Enter Number"
              // defaultValue="2023-02-01"
            />
            <br />
            <br />
            <input
              style={{
                borderRadius: "5px",
                backgroundColor: "lightgray",
                fontWeight: "600",
                textAlign: "center",
                padding: "10px",
              }}
              type="email"
              ref={addressRef}
              placeholder="Enter Address"
              // defaultValue="2023-02-01"
            />
            <br />
            <br />
          </div>{" "}
          <button  style={ { cursor:"pointer",  fontWeight:"700", fontSize:"20px",  backgroundColor: "#d5f4e6",padding:"7px",paddingLeft:"25px",paddingRight:"25px",borderRadius:"5px", }} onClick={addHandler}>
            Add Member
          </button>
        </form>
      </div>
      </center>
    </>
  );
}
