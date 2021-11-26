import { httpClient } from '@/helper/index';

export async function getDetailOrder({ tab, id }) {
  const reqParam = {
    tab: tab,
    id: id,
    code: 'ABCE0123456789',
  };

  try {
    return await httpClient.get('tab-detail.html', reqParam);
  } catch (err) {
    return err;
  }
}
