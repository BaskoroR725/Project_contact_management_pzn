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

export const userLogin = async ({ username, password }: LoginPayload) => {
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

export const userUpdateProfile = async (
  token: string,
  { name }: { name: string },
): Promise<Response> => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/users/current`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      name,
    }),
  });
};

export const userUpdatePassword = async (
  token: string,
  { password }: { password: string },
): Promise<Response> => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/users/current`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      password,
    }),
  });
};

export const userDetail = async (token: string): Promise<Response> => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/users/current`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  });
};
