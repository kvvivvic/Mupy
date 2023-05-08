import React, { ChangeEvent, useState } from "react";
import Editor from "../components/Editor/Editor";

const PostWrite = () => {
  const [title, setTitle] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <div>
      <label htmlFor="title">제목</label>
      <input type="text" name="title" id="title" className="border border-b-black mb-2" value={title} onChange={handleChange} />
      <Editor />
    </div>
  );
};

export default PostWrite;
