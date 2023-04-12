async function get(URL: string) {
  return fetch(URL, { method: "GET" });
}
async function post(URL: string, Data: any) {
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

const request = {
  get,
  post,
  deleteData,
};

export default request;
