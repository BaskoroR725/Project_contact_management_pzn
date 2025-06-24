export interface CreateAddressPayload {
  street: string;
  city: string;
  province: string;
  country: string;
  postal_code: string;
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
