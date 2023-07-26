import { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [checkbox, setCheckBox] = useState(false);

  const postData = () => {
    axios.post(`https://64a39e18c3b509573b565313.mockapi.io/crud-creation`, {
      firstName,
      lastName,
      checkbox,
      email,
    });
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(checkbox);
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckBox(e.target.value)}
          />
        </Form.Field>
        <NavLink to="/formdata">
          <Button type="submit" onClick={postData}>
          Submit
          </Button>
        </NavLink>
      </Form>
    </div>
  );
}
