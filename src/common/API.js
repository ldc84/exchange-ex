import { Comm } from './Modules';

const errorChx = (res) => {
  if(res.status !== 'ok' || !res.hasOwnProperty('data')) {
    throw new Error(res);
  }
}

export const getCoinList = (params) =>
  Comm('/v2/beta/common/currencies')(params).then((response) => {
    errorChx (response);
    return response.data;
  });