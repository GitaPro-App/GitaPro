import { getXataClient as getBaseClient } from '../xata';

export const getXataClient = () => {
  return getBaseClient({
    apiKey: process.env.XATA_API_KEY
  });
};
