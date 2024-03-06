"use client";
import axios from "axios";
import React, { ChangeEventHandler } from "react";

function page() {
  const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return alert("파일을 선택해주세요");
    const formData = new FormData();
    formData.append("blabla", file);
    axios.post(
      "https://port-0-time-attack-fullstack-server-dc9c2nltdo836k.sel5.cloudtype.app/",
      formData
    );
  };
  return (
    <div>
      <div>
        <div>이미지 업로드하기</div>
        <input type="file" onChange={handleChange}></input>
      </div>
    </div>
  );
}

export default page;
