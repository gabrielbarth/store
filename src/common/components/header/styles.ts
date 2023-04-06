import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    backgroundColor: '#2e2e2e',
    padding: 15,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  amountContainer: {
    position: 'absolute',
    padding: 3,
    backgroundColor: 'red',
    right: 0,
    top: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  amount: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
});
