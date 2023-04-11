import request from "../request.tsx/fetchData";
import { NewPostType } from "../protocols";

export default async function createPost(data: NewPostType) {
  const URL = "https://dev.codeleap.co.uk/careers/";
  try {
    const response = await request.post(URL, data);
    if (!response.ok) {
      throw new Error("Error");
    }
    return response.json();
  } catch (error) {
    throw new Error("Error");
  }
}
