import { initRoutes } from './navigation/init.js';
import { Navigation } from 'react-native-navigation';
import { ROUTE_APP_ROOT } from './navigation/routes.js';

export class AppRoot {
  constructor() {
    // Register defined routes
    initRoutes();

    // App launch with configurations defined
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          component: {
            name: ROUTE_APP_ROOT
          }
        }
      });
    });
  }
}