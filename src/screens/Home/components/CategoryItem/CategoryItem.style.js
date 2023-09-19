import { StyleSheet } from 'react-native'
import { colors } from '../../../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    marginVertical: 15,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
  },
  contentContainer: {
    paddingLeft: 20,
  },
  text: {
    fontFamily: 'PoppinsLightItalic',
    fontSize: 18,
  },
})
