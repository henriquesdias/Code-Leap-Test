import { NewPostType, UpdatePostType } from "../protocols";

async function get(URL: string) {
  return fetch(URL, { method: "GET" });
}
async function post(URL: string, Data: NewPostType) {
  return fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Data),
  });
}
async function deleteData(URL: string) {
  return fetch(URL, {
    method: "DELETE",
  });
}
async function patch(URL: string, Data: UpdatePostType) {
  return fetch(URL, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Data),
  });
}

const request = {
  get,
  post,
  deleteData,
  patch,
};

export default request;
