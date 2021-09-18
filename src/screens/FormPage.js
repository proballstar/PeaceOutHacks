import React from "react";
import Forms from "./Forms/Forms";
import { Paper, Button } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";

export default function WorkContainer() {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [address, setAddress] = React.useState("");

  return (
    <Paper className="w-2/3 p-2 m-2">
      <p className="text-4xl font-bold m-3">Post an Event or Violation</p>
      <Forms title="Title" type="text" value={title} change={setTitle} />
      <Forms title="Description" type="text" value={desc} change={setDesc} />
      <button className=" outline-none p-2 border-2 border-green-800 font-semibold text-green-800 rounded-lg m-2 outline-none">
        Submit
      </button>
    </Paper>
  );
}
