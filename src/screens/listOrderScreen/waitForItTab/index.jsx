import React, { useMemo, useEffect, useState } from 'react';
import { Box, Text, Pressable, Button } from 'native-base';
import { ScrollView, Linking } from 'react-native';
import { createStyles } from './style';
import { useNavigation } from '@react-navigation/native';
import { SCREENS_NAME } from '@/constants/screen';
import { colorPalletter } from '@/assets/theme/color';
import { getListWaiForItTab } from '@/services';
import LoadingComponent from '@/components/Loading/index';

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

  const [isGettingData, setIsGettingData] = useState(false);
  const [listShop, setListShop] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    setIsGettingData(true);
    let isComponentMounted = true;

    getListWaiForItTab()
      .then((res) => {
        if (!isComponentMounted) {
          return;
        }
        setIsGettingData(false);
        setListShop(res.data?.List);
        console.log('res', res.data?.List);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        isComponentMounted = false;
      });

    return () => {
      isComponentMounted = false;
    };
  }, []);

  const renderListWaiting = listShop?.map((item, idx) => {
    return (
      <Box style={styles.listOrderItem} key={idx}>
        <Box>
          <Pressable onPress={() => Linking.openURL(`tel:${item.DienThoai}`)}>
            <Text style={styles.listOrderItemTextPhone}>{item.DienThoai}</Text>
          </Pressable>
          <Text>{item.TenShop}</Text>
          <Text>{item.DiaChi}</Text>
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
              marginBottom: 10,
            }}
          >
            Chi tiết
          </Button>
          <Text>{item.TrangThai}</Text>
        </Box>
      </Box>
    );
  });

  return (
    <>
      {isGettingData ? (
        <LoadingComponent />
      ) : (
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
      )}
    </>
  );
}

export default WaitForItTab;
