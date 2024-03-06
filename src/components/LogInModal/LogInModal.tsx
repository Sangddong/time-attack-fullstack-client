"use client";
import API, { coreClient } from "@/api/index.api";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "../Modal";

export default function LogInModal() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync } = useMutation({ mutationFn: API.auth.logIn });
  const { logIn } = useAuth();

  // const handleClickLogIn = async () => {
  //   if (!email) {
  //     alert("이메일을 입력해주세요.");
  //     return;
  //   }
  //   if (!password) {
  //     alert("비밀번호를 입력해주세요.");
  //     return;
  //   }
  //   try {
  //     const { accessToken } = await mutateAsync({ email, password });
  //     logIn(accessToken);
  //     coreClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  //     dispatch(setModal(null));
  //   } catch (error) {
  //     alert("로그인 실패: " + error.message);
  //   }
  // };

  return (
    <Modal title="로그인하기">
      <label>이메일</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border"
        type="email" // 이메일 입력을 위한 타입 지정
        placeholder="이메일"
      />
      <label>비밀번호</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border"
        type="password" // 비밀번호 입력 필드 보안 강화
        placeholder="비밀번호"
      />

      {/* <button onClick={handleClickLogIn}>로그인하기</button> */}
    </Modal>
  );
}
