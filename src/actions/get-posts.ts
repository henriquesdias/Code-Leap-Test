import request from "../request.tsx/fetchData";

export default async function getPosts(offset: number) {
  const URL = `${import.meta.env.VITE_BASE_URL}?offset=${offset}`;
  try {
    const response = await request.get(URL);
    if (!response.ok) {
      throw new Error("Error");
    }
    return response.json();
  } catch (error) {
    throw new Error("Error");
  }
}
