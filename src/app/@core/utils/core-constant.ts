import {environment} from '../../../environments/environment';

export const CoreConstant = {

  API_ENDPOINT: environment.apiUrl,
  API_SECURED_ENDPOINT: environment.apiUrl + '/api',

  APP_ROUTES: {
    DASHBOARD: '/console',
  }
};
