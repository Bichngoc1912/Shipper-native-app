import { httpClient } from '@/helper/index';

export async function getListStreetName(tab, group, code) {
  const reqParam = {
    tab: tab,
    code: code ?? 'ABCDEF123456789',
  };

  try {
    return await httpClient.get('group.html', reqParam);
  } catch (err) {
    return err;
  }
}
