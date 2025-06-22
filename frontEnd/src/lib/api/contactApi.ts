export interface CreateContactPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export interface ContactListPayload {
  name?: string;
  email?: string;
  phone?: string;
  page?: number;
}

export const contactCreate = async (
  token: string,
  { first_name, last_name, email, phone }: CreateContactPayload,
) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      phone,
    }),
  });
};

export const contactList = async (
  token: string,
  { name, email, phone, page }: ContactListPayload,
) => {
  const url = new URL(`${import.meta.env.VITE_API_PATH}/contacts`);

  if (name) url.searchParams.append('name', name);
  if (email) url.searchParams.append('email', email);
  if (phone) url.searchParams.append('phone', phone);
  // page adalah number, tapi URLSearchParams.append hanya menerima string
  //URLSearchParams.append hanya menerima nilai string, jadi page harus diubah jadi string dulu
  if (typeof page === 'number') url.searchParams.append('page', page.toString());

  return await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  });
};
