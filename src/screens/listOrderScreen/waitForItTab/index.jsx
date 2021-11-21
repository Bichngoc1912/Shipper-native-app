import React, { useMemo } from 'react';
import { Box, Text, Pressable, Button } from 'native-base';
import { ScrollView, Linking } from 'react-native';
import { createStyles } from './style';
import { useNavigation } from '@react-navigation/native';
import { SCREENS_NAME } from '@/constants/screen';
import { colorPalletter } from '@/assets/theme/color';

const listWaiting = [
  {
    id: 'a512z1',
    phone: '0976849512',
    name: 'CHI NHUNG',
    addr: '32 Phan Dinh Phung',
  },
  {
    id: 'a512z2',
    phone: '0976849512',
    name: 'ANH TEO',
    addr: '32 Phan Dinh Phung',
  },
  {
    id: 'a512z3',
    phone: '0976849512',
    name: 'CHI DUYEN',
    addr: '32 Phan Dinh Phung',
  },
  {
    id: 'a512z4',
    phone: '0976849512',
    name: 'BE DAU TAY',
    addr: '32 Phan Dinh Phung',
  },
  {
    id: 'a512z5',
    phone: '0976849512',
    name: 'BE DAU TAY',
    addr: '32 Phan Dinh Phung',
  },
  {
    id: 'a512z6',
    phone: '0976849512',
    name: 'BE DAU TAY',
    addr: '32 Phan Dinh Phung',
  },
  {
    id: 'a512z7',
    phone: '0976849512',
    name: 'BE DAU TAY',
    addr: '32 Phan Dinh Phung',
  },
];

function WaitForItTab() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const navigation = useNavigation();

  const renderListWaiting = listWaiting.map((item) => {
    return (
      <Box style={styles.listOrderItem} key={item.id}>
        <Box>
          <Pressable onPress={() => Linking.openURL(`tel:${item.phone}`)}>
            <Text style={styles.listOrderItemTextPhone}>{item.phone}</Text>
          </Pressable>
          <Text>{item.name}</Text>
          <Text>{item.addr}</Text>
        </Box>
        <Box>
          <Button
            onPress={() =>
              navigation.navigate({
                name: SCREENS_NAME.DETAIL_WAITING_FOR_IT,
              })
            }
            style={{
              backgroundColor: colorPalletter.lime['500'],
            }}
          >
            Chi tiết
          </Button>
        </Box>
      </Box>
    );
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box style={styles.container}>
        <Pressable>
          <Box style={styles.addrBtnSection}>
            <Text style={styles.addrBtnText}>Phan Đình Phùng</Text>
            {/* <FontAwesomeIcon icon={faAngleRight} size={14} /> */}
          </Box>
        </Pressable>

        {renderListWaiting}
      </Box>
    </ScrollView>
  );
}

export default WaitForItTab;
