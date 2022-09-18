import { Dimensions, StyleSheet } from 'react-native';

let ScreenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 160,
    width: '100%',
    padding: 20,
    paddingLeft: 4,
    marginBottom: 20,
    borderRadius: 5,
  },
  qrCodeContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: 100,
    width: '100%',
    height: ScreenHeight,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  qrtouchable: {
    marginTop: 20,
    width: 250,
    padding: 15,
    backgroundColor: '#FF9900',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  image: {
    width: 70,
    height: 120,
    marginRight: 10,
    marginLeft: 10,
  },
  touchable: {
    width: 120,
    padding: 5,
    backgroundColor: '#FF9900',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  touchable_text: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  bookTitle: {
    width: 220,
    fontSize: 14,
    fontWeight: '700',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 10,
  },
  status: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1,
    padding: 5,
  },
});
