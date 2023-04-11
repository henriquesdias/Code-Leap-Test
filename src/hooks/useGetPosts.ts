import { useState, useEffect } from "react";

import getPosts from "../actions/get-posts";
import { PostType } from "../protocols";

export default function useGetPosts() {
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getPosts()
      .catch((res) => {
        setIsLoading(false);
        setError(res);
      })
      .then((res) => {
        setIsLoading(false);
        setPosts(res.results);
      });
  }, []);

  return { setPosts, posts, isLoading, error };
}
