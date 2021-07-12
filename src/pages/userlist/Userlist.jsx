import React from "react";
import "./Userlist.css";
import { DataGrid } from "@material-ui/data-grid";
export default function Userlist() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
  ];

  const rows = [
    {
      id: 1,
      username: "Jon Snow",
      avatar:
        "https://thumbs.dreamstime.com/b/beauty-black-skin-woman-african-ethnic-female-face-young-african-american-model-long-afro-hair-lux-model-beauty-black-skin-163819549.jpg",
      email: "jonhon@gmail.com",
      status: "active",
      transaction: "$100.00",
    },
    {
      id: 2,
      username: "Jon Snow",
      avatar:
        "https://thumbs.dreamstime.com/b/beauty-black-skin-woman-african-ethnic-female-face-young-african-american-model-long-afro-hair-lux-model-beauty-black-skin-163819549.jpg",
      email: "jonhon@gmail.com",
      status: "active",
      transaction: "$100.00",
    },
    {
      id: 3,
      username: "Jon Snow",
      avatar:
        "https://thumbs.dreamstime.com/b/beauty-black-skin-woman-african-ethnic-female-face-young-african-american-model-long-afro-hair-lux-model-beauty-black-skin-163819549.jpg",
      email: "jonhon@gmail.com",
      status: "active",
      transaction: "$100.00",
    },
    {
      id: 4,
      username: "Jon Snow",
      avatar:
        "https://thumbs.dreamstime.com/b/beauty-black-skin-woman-african-ethnic-female-face-young-african-american-model-long-afro-hair-lux-model-beauty-black-skin-163819549.jpg",
      email: "jonhon@gmail.com",
      status: "active",
      transaction: "$100.00",
    },
    {
      id: 5,
      username: "Jon Snow",
      avatar:
        "https://thumbs.dreamstime.com/b/beauty-black-skin-woman-african-ethnic-female-face-young-african-american-model-long-afro-hair-lux-model-beauty-black-skin-163819549.jpg",
      email: "jonhon@gmail.com",
      status: "active",
      transaction: "$100.00",
    },
    {
      id: 6,
      username: "Jon Snow",
      avatar:
        "https://thumbs.dreamstime.com/b/beauty-black-skin-woman-african-ethnic-female-face-young-african-american-model-long-afro-hair-lux-model-beauty-black-skin-163819549.jpg",
      email: "jonhon@gmail.com",
      status: "active",
      transaction: "$100.00",
    },
    {
      id: 7,
      username: "Jon Snow",
      avatar:
        "https://thumbs.dreamstime.com/b/beauty-black-skin-woman-african-ethnic-female-face-young-african-american-model-long-afro-hair-lux-model-beauty-black-skin-163819549.jpg",
      email: "jonhon@gmail.com",
      status: "active",
      transaction: "$100.00",
    },
    {
      id: 8,
      username: "Jon Snow",
      avatar:
        "https://thumbs.dreamstime.com/b/beauty-black-skin-woman-african-ethnic-female-face-young-african-american-model-long-afro-hair-lux-model-beauty-black-skin-163819549.jpg",
      email: "jonhon@gmail.com",
      status: "active",
      transaction: "$100.00",
    },
    {
      id: 9,
      username: "Jon Snow",
      avatar:
        "https://thumbs.dreamstime.com/b/beauty-black-skin-woman-african-ethnic-female-face-young-african-american-model-long-afro-hair-lux-model-beauty-black-skin-163819549.jpg",
      email: "jonhon@gmail.com",
      status: "active",
      transaction: "$100.00",
    },
    {
      id: 10,
      username: "Jon Snow",
      avatar:
        "https://thumbs.dreamstime.com/b/beauty-black-skin-woman-african-ethnic-female-face-young-african-american-model-long-afro-hair-lux-model-beauty-black-skin-163819549.jpg",
      email: "jonhon@gmail.com",
      status: "active",
      transaction: "$100.00",
    },
  ];
  return (
    <div className="userlist">
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
