/* eslint-disable react/jsx-key */
import React from "react";

import "./App.css";

import ColumnData from "./components/table-8/ColumnData";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import MOVIES from "./makedata.json";
const data = [...MOVIES];

import Gener from "./components/table-8/Gener";

const columns = [
  {
    accessorKey: "id",
    id: "id",
    header: "ID ",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
  },

  {
    accessorKey: "name",
    id: "name",
    header: "name",
    cell: (info) => <h6>{info.getValue()}</h6>,
    footer: (props) => props.column.id,
  },

  {
    accessorKey: "genres",
    id: "geners",
    header: "Geners",
    cell: (info) => <Gener value={info.getValue()} />,

    footer: (props) => props.column.id,
  },
  {
    accessorKey: "description",
    id: "description",
    header: "description",
    cell: (info) => info.getValue(),
    accessorFn: (row) => row.description,
    footer: (props) => props.column.id,
  },
];

function App() {
  const table = useReactTable({
    data,
    columns,
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  return (
    <div className="p-2 block max-w-full overflow-x-scroll overflow-y-hidden">
      <div className="h-2" />
      <table className="w-full ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ position: "relative", width: header.getSize() }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {header.column.getCanResize() && (
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className={`resizer ${
                          header.column.getIsResizing() ? "isResizing" : ""
                        }`}
                      ></div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} style={{ width: cell.column.getSize() }}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  );
}

export default App;
