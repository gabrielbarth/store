import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,

    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 46,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    padding: 10,
    flexGrow: 1,
  },
});
