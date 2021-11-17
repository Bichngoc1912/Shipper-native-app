import { StyleSheet } from 'react-native';

export function createStyles() {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      backgroundColor: 'white',
      flex: 1,
    },
    addrBtnSection: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: 20,
      marginTop: 8,
      marginBottom: 8,
    },
    addrBtnText: {
      color: '#292524',
      fontSize: 12,
    },
    listOrderItem: {
      borderWidth: 1,
      borderColor: '#d9d9d9',
      padding: 16,
      marginBottom: 16,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    listOrderItemTextPhone: {
      color: '#F59E0B',
      fontWeight: 'bold',
    },
  });
}
