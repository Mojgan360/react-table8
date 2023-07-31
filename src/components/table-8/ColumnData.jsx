import React, { useState, useMemo } from "react";
import mData from "../../makedata.json";
import BasicTable from "./BasicTable";
import SortTable from "./SortTable";
import ResizeSortTable from "./ResizeSortTable";

const ColumnData = () => {
  const [Data, setData] = React.useState(mData);
  var FieldTypes = [
    { value: "text", label: "text" },
    { value: "picklist", label: "picklist" },
    { value: "date", label: "date" },
    { value: "userlist", label: "userlist" },
    { value: "checkbox", label: "checkbox" },
  ];

  const Columns = useMemo(() => {
    return [
      {
        header: "ID",
        accessorKey: "id",
        footer: "ID",
      },
      {
        header: "First Name",
        accessorKey: "first_name",
        footer: "ID",
      },
      {
        header: "Last Name",
        accessorKey: "last_name",
        footer: "Last Name",
      },
      {
        header: "Email",
        accessorKey: "email",
        footer: "Email",
        size: 100,
      },
      {
        header: "Gender",
        accessorKey: "gender",
        footer: "Gender",
        Cell: () => <Select options={FieldTypes} />,
      },
      {
        header: "ipddress",
        accessorKey: "ip_address",
        footer: "ipaddress",
      },
    ];
  }, []);
  return (
    <div>
      {/* <ResizeSortTable columns={Columns} data={Data} />
      <SortTable columns={Columns} data={Data} />
      <BasicTable columns={Columns} data={Data} /> */}
    </div>
  );
};

export default ColumnData;
