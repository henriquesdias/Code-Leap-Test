import request from "../request.tsx/fetchData";

export default async function getPosts() {
  const URL = "https://dev.codeleap.co.uk/careers/";
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
