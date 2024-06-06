// import React from 'react';
// import { DataGrid, Column } from 'devextreme-react/data-grid';
// import 'devextreme/dist/css/dx.light.css';

// function TableComponent({ items }) {
//   return (
//     <DataGrid
//       dataSource={items}
//       showBorders={true}
//     >
//       <Column dataField="id" caption="ID" />
//       <Column dataField="name" caption="Name" />
//     </DataGrid>
//   );
// }

// export default TableComponent;

// src/TableComponent.js
import React from 'react';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';

function TableComponent({ items }) {
  return (
    <DataGrid
      dataSource={items}
      showBorders={true}
    >
      <Column dataField="id" caption="ID" />
      <Column dataField="name" caption="Name" />
      <Column dataField="address" caption="Address" />
      <Column dataField="city" caption="City" />
      <Column dataField="state" caption="State" />
      <Column dataField="zip" caption="Zip Code" />
      <Column dataField="phone" caption="Phone" />
      <Column dataField="fax" caption="Fax" />
    </DataGrid>
  );
}

export default TableComponent;

