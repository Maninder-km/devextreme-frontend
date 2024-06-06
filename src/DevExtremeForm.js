import React, { useEffect, useState } from "react";
import { Form, SimpleItem, Label, ButtonItem } from "devextreme-react/form";
import { useParams, useNavigate } from 'react-router-dom';
import "./DevExtremeForm.css";


export default function DevExtremeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    qualification: "",
  });
  const [error, setError] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setIsUpdate(true);
        try {
          console.log(`Fetching data for id: ${id}`);
          const response = await fetch(`http://localhost:3001/form-data/${id}`);
          console.log(`Response status: ${response.status}`);
          const text = await response.text();
          if (text) {
            const result = JSON.parse(text);
            setFormData(result);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async () => {
    console.log("Form submitted with data:", formData);
    const url = `http://localhost:3001/form-data${isUpdate ? `/${id}` : ''}`;
    const method = isUpdate ? 'PUT' : 'POST';
    navigate(`/table`);

    try {
      const response = await fetch('http://localhost:3001/form-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': true
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (onSubmit) {
        onSubmit(formData);
      }

      setFormData({
        firstname: "",
        lastname: "",
        age: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        qualification: "",
      });
    } catch (error) {
      console.error(error, error);
    }
  };

  const handleChange = (e) => {
    if (e.event) {
      const { name, value } = e.event;
      if (name !== undefined) {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      }
    }
  };

  return (
    <div className="form-container">
      <h2>DevExtreme Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Form formData={formData} onFieldDataChanged={handleChange}>
        <SimpleItem dataField="firstname">
          <Label text="First Name" />
        </SimpleItem>
        <SimpleItem dataField="lastname">
          <Label text="Last Name" />
        </SimpleItem>
        <SimpleItem dataField="age">
          <Label text="Age" />
        </SimpleItem>
        <SimpleItem dataField="phone">
          <Label text="Phone" />
        </SimpleItem>
        <SimpleItem dataField="address">
          <Label text="Address" />
        </SimpleItem>
        <SimpleItem dataField="city">
          <Label text="City" />
        </SimpleItem>
        <SimpleItem dataField="state">
          <Label text="State" />
        </SimpleItem>
        <SimpleItem dataField="qualification">
          <Label text="Qualification" />
        </SimpleItem>

        <ButtonItem
          horizontalAlignment="center"
          buttonOptions={{
            text: isUpdate ? "Update" : "Submit",
            type: "success",
            onClick: handleSubmit,
          }}
        />
      </Form>
    </div>
  );
}

