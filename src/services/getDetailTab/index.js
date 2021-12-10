import { httpClient } from '@/helper/index';

export async function getDetailOrder({ tab, id }) {
  const reqParam = {
    tab: tab,
    id: id,
    code: 'L4AUU54OCBL8QKF',
  };

  console.log('L4AUU54OCBL8QKF', reqParam);
  console.log('reqParam', reqParam);
  try {
    return await httpClient.get('tab-detail.html', reqParam);
  } catch (err) {
    return err;
  }
}
