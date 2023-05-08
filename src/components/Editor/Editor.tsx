import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const [value, setValue] = useState<string>("");
  return <ReactQuill theme="snow" value={value} onChange={setValue} className="w-96 h-96" />;
};

export default Editor;
