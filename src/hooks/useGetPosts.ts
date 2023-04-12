import { useState, useEffect, MutableRefObject } from "react";

import getPosts from "../actions/get-posts";
import { PostType } from "../protocols";

export default function useGetPosts(page: MutableRefObject<number>) {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getPosts(page.current)
      .catch((res) => {
        setIsLoading(false);
        setError(res);
      })
      .then((res) => {
        if (page.current === 0) {
          setIsLoading(false);
          setPosts(res.results);
        } else {
          setIsLoading(false);
          setPosts((posts: PostType[]) => [...posts, ...res.results]);
        }
      });
  }, [page.current]);

  return { setPosts, posts, isLoading, error };
}
