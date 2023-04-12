import request from "../request.tsx/fetchData";

export default async function getPosts(offset: number) {
  const URL = `https://dev.codeleap.co.uk/careers/?offset=${offset}`;
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
