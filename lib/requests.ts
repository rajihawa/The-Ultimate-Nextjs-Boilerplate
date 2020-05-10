export interface LoginData {
  name: string;
  password: string;
}

export const loginRequest = async (data: LoginData) =>
  fetch(process.env.backend + "/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data }),
    credentials: "include",
    method: "post",
  }).then((data) => data.json());

export const signout = () =>
  fetch(process.env.backend + "/auth/signout", {
    credentials: "include",
  }).then((result) => result.json());
