import fetch from 'node-fetch';
import { generateAdminJwt } from './generateJwt';

type ExecuteData<T> = T & {
  errors?: unknown;
};

export const endpoint = 'http://192.168.99.100:8080/v1/graphql';

// TODO: Make a long standing JWT
export const execute = async <Data = unknown, Vars = unknown>(
  query: string,
  variables: Vars,
  options = { verbose: false },
): Promise<ExecuteData<Data>> | never => {
  const token = generateAdminJwt();
  const fetchResponse = await fetch(endpoint, {
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
  if (options.verbose) {
    console.log('DEBUG:', data);
  }

  if (data.errors) {
    throw new Error(JSON.stringify(data));
  }

  return data.data || data;
};
