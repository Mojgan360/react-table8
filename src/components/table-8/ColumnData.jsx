import React, { useState, useMemo } from "react";
import mData from "./makedata.json";
import BasicTable from "./BasicTable";
const ColumnData = () => {
  const [Data, setData] = React.useState(mData);
  const data = useMemo(() => {
    Data;
  }, []);
  /** "id": 1,
    "first_name": "Locke",
    "last_name": "Innerstone",
    "email": "linnerstone0@paypal.com",
    "gender": "Male",
    "ip_address": "96.6.249.177" */
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
        footer: "Emai",
      },
      {
        header: "Gender",
        accessorKey: "gender",
        footer: "Gender",
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
      <BasicTable columns={Columns} data={Data} />
    </div>
  );
};

export default ColumnData;
