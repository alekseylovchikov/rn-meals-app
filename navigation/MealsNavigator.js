import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import colors from '../constants/colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
  Categories: { screen: CategoriesScreen },
  CategoryMeals: { screen: CategoryMealsScreen },
  MealDetail: MealDetailScreen,
}, {
  defaultNavigationOptions: {
    headerTitle: 'Meal App',
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? '' : colors.primary,
    },
    headerTintColor: Platform.OS === 'ios' ? colors.primary : 'white',
  },
});

export default createAppContainer(MealsNavigator);
