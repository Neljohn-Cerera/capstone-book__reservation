import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerMain: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
  titleMain: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 140,
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  image: {
    width: 70,
    height: 110,
    marginRight: 10,
    marginLeft: 10,
  },
  title: {
    width: 220,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 10,
  },
  subTitle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
    fontWeight: '400',
  },
  touchable: {
    padding: 5,
    width: 80,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  touchable_text: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  borrowButton: {
    backgroundColor: '#FF9900',
    padding: 20,
  },
  borrowButton_text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
  container_error: {
    backgroundColor: '#FFF5F5',
    borderColor: '#FC8181',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  container_success: {
    backgroundColor: '#E6FFFA',
    borderColor: '#38B2AC',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
});
