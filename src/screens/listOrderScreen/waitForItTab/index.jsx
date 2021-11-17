import React, { useMemo } from 'react';
import { Box, Text, Pressable, Checkbox } from 'native-base';
import { ScrollView } from 'react-native';
import { createStyles } from './style';

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

const WaitForItTab = () => {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const renderListWaiting = listWaiting.map((item) => {
    return (
      <Box style={styles.listOrderItem} key={item.id}>
        <Box>
          <Text style={styles.listOrderItemTextPhone}>
            {item.id} {'-'} {item.phone}
          </Text>
          <Text>{item.name}</Text>
          <Text>{item.addr}</Text>
        </Box>
        <Box>
          <Checkbox colorScheme="green" accessibilityLabel="This is a dummy checkbox" />
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
};

export default WaitForItTab;
