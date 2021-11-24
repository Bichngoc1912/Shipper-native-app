import { httpClient } from '@/helper/index';

export async function getListWaiForItTab() {
  try {
    return await httpClient.get('tab-list.html?tab=CL&code=ABCE0123456789');
  } catch (err) {
    return err;
  }
}
