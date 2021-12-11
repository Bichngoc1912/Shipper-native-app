import React, { useMemo, useEffect, useState, useRef } from 'react';
import { Box, Text, Pressable, Button } from 'native-base';
import { ScrollView, Linking } from 'react-native';
import { createStyles } from './style';
import { useNavigation } from '@react-navigation/native';
import { SCREENS_NAME } from '@/constants/screen';
import { colorPalletter } from '@/assets/theme/color';
import { getListReturnTab } from '@/services';
import LoadingComponent from '@/components/Loading/index';
import ListStreetNameTLBottomSheet from '@/components/ListStreetNameTL';
import EmptyListOrder from '@/components/EmptyListOrder';
import { useSelector } from 'react-redux';

function ReturnsGoodTab() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const [isGettingData, setIsGettingData] = useState(false);
  const [listShop, setListShop] = useState();
  const [isEmptyListOrder, setIsEmptyListOrder] = useState(false);

  const navigation = useNavigation();

  const modalRef = useRef(null);
  const onOpen = () => {
    modalRef.current?.open();
  };

  const code = useSelector((state) => state.userAccount.code);

  useEffect(() => {
    setIsGettingData(true);
    let isComponentMounted = true;

    getListReturnTab({ tab: 'TL', group: 10, code: code })
      .then((res) => {
        if (!isComponentMounted) {
          return;
        }

        if (!res?.data?.List) {
          setIsEmptyListOrder(true);
          setIsGettingData(false);
          return;
        }

        setIsEmptyListOrder(false);
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
                name: SCREENS_NAME.DETAIL_ORDER_WAITING,
                params: {
                  tab: 'TL',
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
      </Box>
    );
  });

  return (
    <>
      {isGettingData ? (
        <LoadingComponent />
      ) : (
        <>
          {isEmptyListOrder ? (
            <EmptyListOrder />
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
      )}
      <ListStreetNameTLBottomSheet modal={modalRef} />
    </>
  );
}

export default ReturnsGoodTab;
