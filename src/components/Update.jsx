import axios from "axios";
import React, { useState } from "react";

function Update({ updateData = {} }) {
  const [updatedData, setUpdate] = useState(updateData);
  function onChangeHandle(e) {
    const { name, value } = e.target;
    console.log(updatedData);
    setUpdate({ ...updatedData, [name]: value });
  }

  function onUpdate(e) {
    e.preventDefault();
    console.log(updatedData);
    axios.put(
      `https://64a39e18c3b509573b565313.mockapi.io/crud-creation/${updatedData.id}`,
      updatedData
    );
  }
  return (
    <>
      <form action="" className="act">
        <h3 className="uphead">Update Content..</h3>
        {Object.keys(updatedData).length &&
          Object.values(updatedData).map((ele, index) => {
            return (
              <div>
                <label htmlFor=" ">{Object.keys(updatedData)[index]}</label>
                &emsp;{" "}
                <input
                  onChange={onChangeHandle}
                  name={Object.keys(updatedData)[index]}
                  type="text"
                  value={ele}
                />
              </div>
            );
          })}
        <div>
          <button
            className="btn"
            onClick={(e) => {
              onUpdate(e);
            }}
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
}
export default Update;
