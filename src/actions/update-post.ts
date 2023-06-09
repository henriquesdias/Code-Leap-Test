import request from "../request.tsx/fetchData";
import { UpdatePostType } from "../protocols";

export default async function updatePost(id: number, data: UpdatePostType) {
  const URL = `${import.meta.env.VITE_BASE_URL}${id}/`;
  try {
    const response = await request.patch(URL, data);
    if (!response.ok) {
      throw new Error("Error");
    }
    return response.json();
  } catch (error) {
    throw new Error("Error");
  }
}
