import { StyleSheet } from 'react-native'
import { colors } from '../../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 8,
    borderRadius: 20,
    backgroundColor: colors.grey,
  },
  name: {
    fontSize: 18,
  },
  image: {
    width: 50,
    height: 50,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
