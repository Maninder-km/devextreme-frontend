// import React from 'react';
// import PivotGrid, {
//   FieldChooser,
//   Export,
// } from 'devextreme-react/pivot-grid';
// import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
// import { Workbook } from 'exceljs';
// import { saveAs } from 'file-saver-es';
// import { exportPivotGrid } from 'devextreme/excel_exporter';

// const data = [
//   { id: 1, name: "John Doe", phone: "123-456-7890", location: "New York" },
//   { id: 2, name: "Jane Smith", phone: "234-567-8901", location: "Los Angeles" },
//   { id: 3, name: "Sam Brown", phone: "345-678-9012", location: "Chicago" },
//   { id: 4, name: "Sam Brown", phone: "345-568-3670", location: "Canada" },
//   { id: 5, name: "Sam Brown", phone: "455-258-1482", location: "Australia" },
//   { id: 6, name: "Sam Brown", phone: "155-898-8054", location: "New Zealand" },
//   { id: 7, name: "Sam Brown", phone: "785-968-4378", location: "America" },
// ];

// console.log('Data:', data); 

// const dataSource = new PivotGridDataSource({
//   fields: [
//     {
//       caption: 'ID',
//       dataField: 'id',
//       area: 'row',
//     },
//     {
//       caption: 'Name',
//       dataField: 'name',
//       area: 'row',
//     },
//     {
//       caption: 'Phone',
//       dataField: 'phone',
//       area: 'row',
//     },
//     {
//       caption: 'Location',
//       dataField: 'location',
//       area: 'row',
//     }
//   ],
//   store: data,
// });

// const onExporting = (e) => {
//   const workbook = new Workbook();
//   const worksheet = workbook.addWorksheet('Employees');

//   exportPivotGrid({
//     component: e.component,
//     worksheet,
//   }).then(() => {
//     workbook.xlsx.writeBuffer().then((buffer) => {
//       saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'EmployeeData.xlsx');
//     });
//   });
// };

// const EmployeeExport = () => (
//   <div>
//     <h1>Employee Data</h1>
//     <PivotGrid
//       dataSource={dataSource}
//       height={440}
//       showBorders={true}
//       rowHeaderLayout="tree"
//       onExporting={onExporting}
//     >
//       <FieldChooser enabled={false} />
//       <Export enabled={true} />
//     </PivotGrid>
//   </div>
// );

// export default EmployeeExport;



// import React from 'react';
// import PivotGrid, {
//   FieldChooser,
//   Export,
// } from 'devextreme-react/pivot-grid';
// import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
// import { Workbook } from 'exceljs';
// import { saveAs } from 'file-saver-es';
// import { exportPivotGrid } from 'devextreme/excel_exporter';

// const data = [
//   { id: 1, name: "John Doe", phone: "123-456-7890", location: "New York" },
//   { id: 2, name: "Jane Smith", phone: "234-567-8901", location: "Los Angeles" },
//   { id: 3, name: "Sam Brown", phone: "345-678-9012", location: "Chicago" },
//   { id: 4, name: "Sam Brown", phone: "345-568-3670", location: "Canada" },
//   { id: 5, name: "Sam Brown", phone: "455-258-1482", location: "Australia" },
//   { id: 6, name: "Sam Brown", phone: "155-898-8054", location: "New Zealand" },
//   { id: 7, name: "Sam Brown", phone: "785-968-4378", location: "America" },
// ];

// console.log('Data:', data);

// const dataSource = new PivotGridDataSource({
//   fields: [
//     {
//       caption: 'ID',
//       dataField: 'id',
//       area: 'row',
//       areaIndex: 0,
//     },
//     {
//       caption: 'Name',
//       dataField: 'name',
//       area: 'row',
//       areaIndex: 1,
//     },
//     {
//       caption: 'Phone',
//       dataField: 'phone',
//       area: 'row',
//       areaIndex: 2,
//     },
//     {
//       caption: 'Location',
//       dataField: 'location',
//       area: 'row',
//       areaIndex: 3,
//     }
//   ],
//   store: data,
// });

// const onExporting = (e) => {
//   const workbook = new Workbook();
//   const worksheet = workbook.addWorksheet('Employees');

//   exportPivotGrid({
//     component: e.component,
//     worksheet,
//   }).then(() => {
//     workbook.xlsx.writeBuffer().then((buffer) => {
//       saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'EmployeeData.xlsx');
//     });
//   });
// };

// const EmployeeExport = () => (
//   <div>
//     <h1>Employee Data</h1>
//     <PivotGrid
//       dataSource={dataSource}
//       height={440}
//       showBorders={true}
//       onExporting={onExporting}
//     >
//       <FieldChooser enabled={false} />
//       <Export enabled={true} />
//     </PivotGrid>
//   </div>
// );

// export default EmployeeExport;




import React from 'react';
import PivotGrid, {
  FieldChooser,
  Export,
} from 'devextreme-react/pivot-grid';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
import { exportPivotGrid } from 'devextreme/excel_exporter';

const data = [
  { id: 1, name: "John Doe", phone: "123-456-7890", location: "New York" },
  { id: 2, name: "Jane Smith", phone: "234-567-8901", location: "Los Angeles" },
  { id: 3, name: "Sam Brown", phone: "345-678-9012", location: "Chicago" },
  { id: 4, name: "Sam Brown", phone: "345-568-3670", location: "Canada" },
  { id: 5, name: "Sam Brown", phone: "455-258-1482", location: "Australia" },
  { id: 6, name: "Sam Brown", phone: "155-898-8054", location: "New Zealand" },
  { id: 7, name: "Sam Brown", phone: "785-968-4378", location: "America" },
];

const dataSource = new PivotGridDataSource({
  fields: [
    {
      caption: 'ID',
      dataField: 'id',
      area: 'row',
      areaIndex: 0,
    },
    {
      caption: 'Name',
      dataField: 'name',
      area: 'row',
      areaIndex: 1,
    },
    {
      caption: 'Phone',
      dataField: 'phone',
      area: 'row',
      areaIndex: 2,
    },
    {
      caption: 'Location',
      dataField: 'location',
      area: 'row',
      areaIndex: 3,
    },
    {
      dataField: 'id',
      area: 'data',
      summaryType: 'count',
      visible: false, 
    }
  ],
  store: data,
});

const onExporting = (e) => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet('Employees');

  exportPivotGrid({
    component: e.component,
    worksheet,
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'EmployeeData.xlsx');
    });
  });
};

const EmployeeExport = () => (
  <div>
    <h1>Employee Data</h1>
    <PivotGrid
      dataSource={dataSource}
      height={440}
      showBorders={true}
      onExporting={onExporting}
    >
      <FieldChooser enabled={false} />
      <Export enabled={true} />
    </PivotGrid>
  </div>
);

export default EmployeeExport;