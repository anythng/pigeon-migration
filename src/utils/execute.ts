import fetch from 'node-fetch';
import { generateAdminJwt } from './generateJwt';

type ExecuteData<T> = T & {
  errors?: unknown;
};

// TODO: Make a long standing JWT
export const execute = async <Data = unknown, Vars = unknown>(
  query: string,
  variables: Vars,
): Promise<ExecuteData<Data>> => {
  const token = generateAdminJwt();
  const fetchResponse = await fetch('http://192.168.99.100:8080/v1/graphql', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data.data || data;
};
