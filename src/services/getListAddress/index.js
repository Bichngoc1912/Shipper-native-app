import { httpClient } from '@/helper/index';

export async function getListStreetName(code) {
  const reqParam = {
    tab: 'CL',
    code: code ?? 'ABCDEF123456789',
  };

  try {
    return await httpClient.post('group.html', reqParam);
  } catch (err) {
    return err;
  }
}

export async function getListStreetNameCG(code) {
  const reqParam = {
    tab: 'CG',
    code: code ?? 'ABCDEF123456789',
  };

  try {
    return await httpClient.get('group.html', reqParam);
  } catch (err) {
    return err;
  }
}

export async function getListStreetNameDG(code) {
  const reqParam = {
    tab: 'DG',
    code: code ?? 'ABCDEF123456789',
  };

  try {
    return await httpClient.get('group.html', reqParam);
  } catch (err) {
    return err;
  }
}

export async function getListStreetNameTL(code) {
  const reqParam = {
    tab: 'TL',
    code: code ?? 'ABCDEF123456789',
  };

  try {
    return await httpClient.get('group.html', reqParam);
  } catch (err) {
    return err;
  }
}
