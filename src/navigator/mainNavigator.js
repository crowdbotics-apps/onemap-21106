import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth1129244Navigator from '../features/EmailAuth1129244/navigator';
import Maps2129243Navigator from '../features/Maps2129243/navigator';
import EmailAuth2127461Navigator from '../features/EmailAuth2127461/navigator';
import Maps1127336Navigator from '../features/Maps1127336/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth1129244: { screen: EmailAuth1129244Navigator },
Maps2129243: { screen: Maps2129243Navigator },
EmailAuth2127461: { screen: EmailAuth2127461Navigator },
Maps1127336: { screen: Maps1127336Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
