import { httpClient } from '@/helper/index';

export async function getListWaiForItTab({ tab }) {
  const reqParam = {
    tab: tab,
    code: 'ABCE0123456789',
  };

  try {
    return await httpClient.get('tab-list.html', reqParam);
  } catch (err) {
    return err;
  }
}
