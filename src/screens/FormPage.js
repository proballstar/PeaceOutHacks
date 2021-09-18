import React from "react";
import Forms from "./Forms/Forms";

export default function WorkContainer() {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");

  return (
    <div>
      <Forms title="Title" type="text" value={title} change={setTitle} />
      <Forms title="Description" type="text" value={desc} change={setDesc} />
    </div>
  );
}
