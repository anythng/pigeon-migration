import { generateAdminJwt } from './src/utils';

console.log(generateAdminJwt());
export default {
  url: 'http://192.168.0.38:8080/v1/graphql',
  outputDir: 'src/graphql',
  header: 'Authorization: Bearer ' + generateAdminJwt(),
};
