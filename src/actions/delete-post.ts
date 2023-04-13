import request from "../request.tsx/fetchData";

export default async function deletePost(id: number) {
  const URL = `${import.meta.env.VITE_BASE_URL}/${id}/`;
  try {
    const response = await request.deleteData(URL);
    if (!response.ok) {
      throw new Error("Error");
    }
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error");
  }
}
