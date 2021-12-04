import { httpClient } from '@/helper';

export async function changeStatus(id, status, code) {
  const reqParam = {
    id: id,
    status: status,
    code: code,
  };

  try {
    return await httpClient.post('update-status.html', reqParam);
  } catch (err) {
    return err;
  }
}
