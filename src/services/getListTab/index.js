import { httpClient } from '@/helper/index';

export async function getListWaiForItTab({ tab, group }) {
  const reqParam = {
    tab: tab,
    group: group,
    code: 'ABCE0123456789',
  };

  try {
    return await httpClient.get('tab-list.html', reqParam);
  } catch (err) {
    return err;
  }
}

export async function getListReturnTab({ tab }) {
  const reqParam = {
    tab: tab,
    id: 1,
    code: 'ABCE0123456789',
  };

  try {
    return await httpClient.get('tab-list.html', reqParam);
  } catch (err) {
    return err;
  }
}
