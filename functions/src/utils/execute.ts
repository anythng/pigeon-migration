import fetch from 'node-fetch';
import { generateJwt } from './generateJwt';

// TODO: Make a long standing JWT
export const execute = async <Vars = {}>(query: string, variables: Vars) => {
  const token = generateJwt('-1', 'admin', { expiresIn: '30s' });
  console.log(token);

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
  return data.data;
};