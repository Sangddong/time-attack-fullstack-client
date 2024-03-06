import Link from "next/link";
import React from "react";

function HeaderMenus() {
  return (
    <div>
      <ul className="flex flex-row">
        <li className="pr-2">
          <Link href="/">구입하기</Link>
        </li>
        <li className="pr-2">
          <Link href="/deals/create">판매하기</Link>
        </li>
        <li className="pr-2">내 판매글</li>
      </ul>
    </div>
  );
}

export default HeaderMenus;
