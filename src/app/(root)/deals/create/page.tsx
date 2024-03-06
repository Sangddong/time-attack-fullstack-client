"use client";
import Page from "@/components/Page";
import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <Page>
      <form
        // onSubmit={handleSubmit}
        className="grid grid-cols-1 place-content-center"
      >
        <h1>판매글 작성하기</h1>
        <div>
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>파일 업로드</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label>내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>위치</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        {/* <button type="submit" onClick={(e) => handleSubmit}>
          제출하기
        </button> */}
      </form>
    </Page>
  );
}
