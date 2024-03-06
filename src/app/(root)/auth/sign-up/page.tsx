"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const data = { email, password };
    const response = await axios.post("/auth/sign-up", data);
    const accessToken = response.data;
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    console.log(accessToken);
  };
  const handleClickLogIn = () => {
    if (!email) alert("이메일을 입력해주세요.");
    else if (!password) alert("비밀번호를 입력해주세요.");
    else if (password !== password2) alert("비밀번호를 확인해주세요");
    else {
      router.replace("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>이메일 주소</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>비밀번호 확인</label>
        <input
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
      </div>
      <button type="submit" onClick={(e) => handleClickLogIn()}>
        회원가입하기
      </button>
    </form>
  );
}

export default SignUp;
