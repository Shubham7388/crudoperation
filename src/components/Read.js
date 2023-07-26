import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Read({ setUpdateData }) {
  const [data, setData] = useState([]);
  const [renderapp, setRender] = useState(false);
  const getData = () => {
    axios
      .get("https://64a39e18c3b509573b565313.mockapi.io/crud-creation")
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, [renderapp]);

  const onDelete = (id) => {
    axios
      .delete(`https://64a39e18c3b509573b565313.mockapi.io/crud-creation/` + id)
      .then(() => setRender(!renderapp));
  };

  console.log("hello");

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.length &&
            data.map((ele) => {
              return (
                <Table.Row>
                  <Table.HeaderCell>{ele.firstName}</Table.HeaderCell>
                  <Table.HeaderCell>{ele.lastName}</Table.HeaderCell>
                  <Table.HeaderCell>{ele.email}</Table.HeaderCell>
                  <Table.HeaderCell>
                    {" "}
                    <NavLink to="updateForm">
                      <button
                        onClick={() => {
                          setUpdateData(ele);
                          console.log(ele);
                        }}
                        className="yelloBtn"
                      >
                        Update
                      </button>
                    </NavLink>{" "}
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    <NavLink to={"/formdata"}>
                      <button
                        onClick={() => onDelete(ele.id)}
                        className="redBtn"
                      >
                        Delete
                      </button>
                    </NavLink>
                  </Table.HeaderCell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </div>
  );
}
export default Read;
