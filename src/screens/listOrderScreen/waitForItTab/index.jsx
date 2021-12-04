import React, { useMemo, useEffect, useState, useRef } from 'react';
import { Box, Text, Pressable, Button } from 'native-base';
import { ScrollView, Linking } from 'react-native';
import { createStyles } from './style';
import { useNavigation } from '@react-navigation/native';
import { SCREENS_NAME } from '@/constants/screen';
import { colorPalletter } from '@/assets/theme/color';
import { getListWaiForItTab } from '@/services';
import LoadingComponent from '@/components/Loading/index';
import ListStreetNameBottomSheet from '@/components/ListStreetNameCL';

function WaitForItTab() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const [isGettingData, setIsGettingData] = useState(false);
  const [listShop, setListShop] = useState();

  const navigation = useNavigation();

  const modalRef = useRef(null);
  const onOpen = () => {
    modalRef.current?.open();
  };

  useEffect(() => {
    setIsGettingData(true);
    let isComponentMounted = true;

    getListWaiForItTab({ tab: 'CL', group: 9 })
      .then((res) => {
        if (!isComponentMounted) {
          return;
        }

        setIsGettingData(false);
        setListShop(res.data?.List);
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
                params: {
                  tab: 'CL',
                  id: item.ShopID,
                },
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
        <ListStreetNameBottomSheet modal={modalRef} tab={'CL'} />
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
            <Pressable onPress={() => onOpen()}>
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
