import fetch from 'node-fetch';
import { generateAdminJwt } from './generateJwt';

interface GqlError {
  extensions: {
    path: string;
    code: string | number;
  };
  message: string;
}

type ExecuteData<T = unknown> = T & {
  data?: T;
  errors?: GqlError[];
};

export class ExecuteError extends Error {
  errors: GqlError[];

  constructor(errors: GqlError[]) {
    super(JSON.stringify(errors));
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = ExecuteError.name;
    this.errors = errors;
  }
}

let endpoint = 'http://localhost:8080/v1/graphql';
const projectId = process.env.GCLOUD_PROJECT || '';

if (projectId.includes('staging')) {
  endpoint = 'https://staging-ilmcsmiuba-uc.a.run.app/v1/graphql';
}

// TODO: Make a long standing JWT
export const execute = async <Data = { data: unknown }, Vars = unknown>(
  query: string,
  variables: Vars,
  options = { verbose: false },
): Promise<Data> | never => {
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

  const data: ExecuteData<Data> = await fetchResponse.json();
  if (options.verbose) {
    console.log('DEBUG:', data);
  }

  if (data.errors) {
    throw new ExecuteError(data.errors);
  }

  if (!data.data) {
    throw new Error('No Data or Error!!!');
  }

  return data.data;
};
