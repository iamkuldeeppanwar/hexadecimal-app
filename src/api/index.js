export const get_User_Data = () => {
  const url = `https://hexadecimalbackendapi.herokuapp.com/getUsers`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      throw error;
    });
};
