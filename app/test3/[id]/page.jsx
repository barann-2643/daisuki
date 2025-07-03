"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const params = useParams();
  console.log(params);
  const [theme, setTheme] = useState("");
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [user, setUser] = useState(null);

  return (
    <div>
      page
      {params.id}
    </div>
  );
};

export default page;
