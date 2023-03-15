import React, { useState } from "react";
import "./userList.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { rows } from "../../components/paskooloGraph/dummyData";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const UserList = () => {
  //useState here to take data from rows and rerender
  //in case of update or delete
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },

    { field: "email", headerName: "Email", width: 150 },
    { field: "status", headerName: "Status", width: 70 },
    {
      field: "transaction",
      headerName: "Transaction",
      type: "number",
      width: 60,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
