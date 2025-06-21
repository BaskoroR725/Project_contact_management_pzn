export interface RegisterPayload {
  username: string;
  password: string;
  name: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export const userRegister = async ({ username, password, name }: RegisterPayload) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      name,
    }),
  });
};

export const userLogin = async ({ username, password}: LoginPayload) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username,
      password, 
    }),
  });
};
