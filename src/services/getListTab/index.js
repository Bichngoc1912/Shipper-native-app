import { httpClient } from '@/helper/index';

export async function getListWaiForItTab({ tab, group }) {
  const reqParam = {
    tab: tab,
    group: group,
    code: 'L4AUU54OCBL8QKF',
  };

  try {
    return await httpClient.get('tab-list.html', reqParam);
  } catch (err) {
    return err;
  }
}

export async function getListReturnTab({ tab, group }) {
  const reqParam = {
    tab: tab,
    id: 1,
    group: group,
    code: 'L4AUU54OCBL8QKF',
  };

  console.log(reqParam);
  try {
    return await httpClient.get('tab-list.html', reqParam);
  } catch (err) {
    return err;
  }
}
