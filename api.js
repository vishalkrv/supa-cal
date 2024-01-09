const baseUrl = 'http://localhost:3001';

export const getAllUser = async () => {
  const res = await fetch(`${baseUrl}/users`, { cache: 'no-store' });
  const users = await res.json();
  return users;
}


export const getUser = async (email) => {
  const res = await fetch(`${baseUrl}/users?emailId=${email}`, { cache: 'no-store' });
  const user = await res.json();
  return user;
}