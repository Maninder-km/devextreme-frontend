

import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';

const DevExtremeTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/form-data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleViewClick = (rowData) => {
    navigate(`/form/${rowData.id}`);
  };

  return (
    <div>
      <h3>Form Data Table</h3>
      <DataGrid
        dataSource={data}
        showBorders={true}
        columnAutoWidth={true}
        allowColumnResizing={true}
      >
        <Column dataField="firstname" caption="First Name" />
        <Column dataField="lastname" caption="Last Name" />
        <Column dataField="age" caption="Age" />
        <Column dataField="phone" caption="Phone" />
        <Column dataField="address" caption="Address" />
        <Column dataField="city" caption="City" />
        <Column dataField="state" caption="State" />
        <Column dataField="qualification" caption="Qualification" />
        <Column
          caption="View"
          cellRender={({ data }) => (
            <button onClick={() => handleViewClick(data)}>View</button>
          )}
        />
      </DataGrid>
    </div>
  );
};

export default DevExtremeTable;
