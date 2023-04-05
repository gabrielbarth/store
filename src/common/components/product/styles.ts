import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: 10,
    margin: 10,
    borderRadius: 4,
    width: 220,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 16,
    marginVertical: 10,
  },
  price: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    backgroundColor: '#2e2e2e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 46,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
});
