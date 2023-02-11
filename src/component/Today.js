import React from "react";
import './Today.css'
export default function Today(props) {
  return (
    <>
      <center><h2 style={{ margin: "30px", textShadow: "2px 2px whitesmoke" }}>
        Members list
      </h2></center>
      <div>
        <table>
          <tr>
            <th> Name</th>
            <th> Email</th>
            <th> Number</th>
            <th> Address</th>
          </tr>
        </table>
        {props.list.map((list, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  backgroundColor: "lightgray",
                  
                  borderRadius: "5px",
                  margin: "10px",
                  padding: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <table>
                  <tr>
                    <td>{list.title}</td>
                    <td>{list.email}</td>
                    <td>{list.number}</td>
                    <td>{list.address}</td>
                  </tr>
                </table>
                {/* <h5 style={{ marginLeft: "10px" }}>{list.title}</h5>
                <h5 style={{ marginLeft: "10px" }}>{list.email}</h5>
                <h5 style={{ marginLeft: "10px" }}>{list.number}</h5>
                <h5 style={{ marginLeft: "10px" }}>{list.address}</h5> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
