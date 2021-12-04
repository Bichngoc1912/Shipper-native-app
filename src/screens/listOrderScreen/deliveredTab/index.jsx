import React, { useMemo, useEffect, useState, useRef } from 'react';
import { Box, Text, Pressable, Button } from 'native-base';
import { ScrollView, Linking } from 'react-native';
import { createStyles } from './style';
import { useNavigation } from '@react-navigation/native';
import { SCREENS_NAME } from '@/constants/screen';
import { colorPalletter } from '@/assets/theme/color';
import { getListWaiForItTab } from '@/services';
import LoadingComponent from '@/components/Loading/index';
import ListStreetNameDGBottomSheet from '@/components/ListStreetNameDG';

function DeliveredScreen() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const modalRef = useRef(null);
  const onOpen = () => {
    modalRef.current?.open();
  };

  const navigation = useNavigation();

  const [isGettingData, setIsGettingData] = useState(false);
  const [listShop, setListShop] = useState();

  useEffect(() => {
    setIsGettingData(true);
    let isComponentMounted = true;

    getListWaiForItTab({ tab: 'DG', group: 6 })
      .then((res) => {
        if (!isComponentMounted) {
          return;
        }

        setListShop(res?.data?.List);
        setIsGettingData(false);
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

  const renderListWaiting = listShop?.map((item) => {
    return (
      <Box style={styles.listOrderItem} key={item.DonHangID}>
        <Box>
          <Pressable onPress={() => Linking.openURL(`tel:${item.DienThoai}`)}>
            <Text style={styles.listOrderItemTextPhone}>{item.DienThoai}</Text>
          </Pressable>
          <Text>{item.TenKH}</Text>
          <Text>{item.DiaChi}</Text>
        </Box>
        <Box>
          <Button
            onPress={() =>
              navigation.navigate({
                name: SCREENS_NAME.DETAIL_DELIVERD,
                params: {
                  id: item.DonHangID,
                  tab: 'DG',
                },
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

export default DeliveredScreen;
