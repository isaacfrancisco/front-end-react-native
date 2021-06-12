import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 31,
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: fonts.small,
  },
});

export default styles;
