import React, { useState, useEffect } from "react";

export const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  // component가 mount될 때, updateTitle을 부른다
  // 그리고 title이 업데이트 되면 updateTitle을 다시 부르겠다는 뜻이다
  useEffect(updateTitle, [title]);
  return setTitle;
};
