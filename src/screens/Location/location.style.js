import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingBottom: 130,
  },
  withoutLocation: {
    width: 200,
    height: 200,
    borderWidth: 2,
    padding: 10,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
