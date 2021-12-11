import { httpClient } from '@/helper';

export async function changeStatus({ id, status, code }) {
  const reqParam = {
    id: id,
    status: status,
    code: code,
  };

  console.log('change status reqParam', reqParam);
  try {
    return await httpClient.get('update-status.html', reqParam);
  } catch (err) {
    return err;
  }
}
