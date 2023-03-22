import React from "react";
import TableC from "../../components/TableC/Index";
import { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import ReactToPrint from "react-to-print";
const Home = () => {
  const componentRef = useRef("");
  const tableRef = useRef(null);
  return (
    <>
      <ReactToPrint
        trigger={() => (
          <button className="print-table float-end button2">
            Print this out!
          </button>
        )}
        content={() => componentRef.current}
      />
      <DownloadTableExcel
        filename="users table"
        sheet="users"
        currentTableRef={componentRef.current}
      >
        <button className="float-end button1"> Export excel </button>
      </DownloadTableExcel>
      <div ref={componentRef}>
        <TableC />
      </div>
    </>
  );
};

export default Home;
