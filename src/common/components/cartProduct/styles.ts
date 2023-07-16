import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    marginTop: 5,
  },
  image: {
    position: 'absolute',
    left: 0,
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
  amount: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '80%',
  },
  textContent: {
    marginLeft: 100,
  },
});
