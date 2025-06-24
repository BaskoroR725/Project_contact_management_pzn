export interface CreateAddressPayload {
  street: string;
  city: string;
  province: string;
  country: string;
  postal_code: string;
}

export interface UpdateAddressPayload extends CreateAddressPayload {
  addressId: number;
}

export const addressCreate = async (
  token: string,
  id: number,
  { street, city, province, country, postal_code }: CreateAddressPayload,
) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      street,
      city,
      province,
      country,
      postal_code,
    }),
  });
};

export const addressList = async (token: string, id: number) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  });
};

export const addressDetail = async (token: string, id: number, addressId: string) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses/${addressId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  });
};

export const addressUpdate = async (
  token: string,
  id: number,
  { addressId, street, city, province, country, postal_code }: UpdateAddressPayload,
) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses/${addressId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      street,
      city,
      province,
      country,
      postal_code,
    }),
  });
};
