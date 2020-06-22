import { generateAdminJwt } from './src/utils';

const jwt = generateAdminJwt();
export default {
  url: 'http://192.168.0.38:8080/v1/graphql',
  outputDir: 'src/graphql',
  headers: { Authorization: `Bearer ${jwt}` },
};
