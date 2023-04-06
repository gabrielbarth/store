import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '../../routes';

export const useAppNavigator = () => useNavigation<AppNavigatorRoutesProps>();
