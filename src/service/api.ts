import { request } from 'umi';

export async function login(username: string, password: string) {
  const user = await request('/login', {
    params: { username, password },
    method: 'POST',
  });
  return user;
}
