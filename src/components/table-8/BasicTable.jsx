import React, { useState, useMemo } from "react";
import "../../App.css";
import {
  getCoreRowModel,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
const BasicTable = ({ columns, data }) => {
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      //  Filter: SearchColumn,
      // minWidth: 30,
      // width: 150,
      // maxWidth: 100,
    }),
    []
  );
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

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

  // const {getCoreRowModel,flexRender} = useReactTable({
  //     columns,data
  // })
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
    // <div>
    //   BasicTable
    //   <input value={filtering} onChange={(e) => setFiltering(e.target.value)} />
    //   <button className="btn btn-primary">Click me</button>
    //   <table className="table table-striped">
    //     <thead>
    //       {table.getHeaderGroups().map((headerGroup) => (
    //         <tr key={headerGroup.id}>
    //           {headerGroup.headers.map((header) => (
    //             <th
    //               key={header.id}
    //               onClick={header.column.getToggleSortingHandler()}
    //             >
    //               {header.isPlaceholder ? null : (
    //                 <div>
    //                   {flexRender(
    //                     header.column.columnDef.header,
    //                     header.getContext()
    //                   )}
    //                   {{ asc: ">", desc: "<" }[header.column.getIsSorted()] ??
    //                     null}
    //                 </div>
    //               )}
    //               {header.column.getCanResize() && (
    //                 <div
    //                   onMouseDown={header.getResizeHandler()}
    //                   onTouchStart={header.getResizeHandler()}
    //                   className={`resizer ${
    //                     header.column.getIsResizing() ? "isResizing" : ""
    //                   }`}
    //                 ></div>
    //               )}
    //             </th>
    //           ))}
    //         </tr>
    //       ))}
    //     </thead>
    //     <tbody>
    //       {table.getRowModel().rows.map((row) => (
    //         <tr key={row.id}>
    //           {row.getVisibleCells().map((cell) => (
    //             <td key={cell.id} style={{ width: cell.column.getSize() }}>
    //               {flexRender(cell.column.columnDef.cell, cell.getContext())}
    //             </td>
    //           ))}
    //         </tr>
    //       ))}
    //     </tbody>
    //     <tfoot>
    //       {table.getFooterGroups().map((footerGroup) => (
    //         <tr key={footerGroup.id}>
    //           {footerGroup.headers.map((header) => (
    //             <th key={header.id}>
    //               {header.isPlaceholder
    //                 ? null
    //                 : flexRender(
    //                     header.column.columnDef.footer,
    //                     header.getContext()
    //                   )}
    //             </th>
    //           ))}
    //         </tr>
    //       ))}
    //     </tfoot>
    //   </table>
    // </div>
  );
};

export default BasicTable;
