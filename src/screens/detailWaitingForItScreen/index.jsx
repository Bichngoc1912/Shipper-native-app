import React, { useMemo, useEffect, useState } from 'react';
import { Box, Text, ScrollView, Pressable, Checkbox } from 'native-base';
import { createStyles } from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getDetailOrder } from '@/services';
import { useRoute } from '@react-navigation/core';
import LoadingComponent from '@/components/Loading/index';

const listOrder = [
  {
    id: 'a24abe',
    name: 'CHI PHUNG',
    address: '32 Phan Đình Phùng',
  },
  {
    id: 'a512z1',
    name: 'BE DAU TAY',
    address: '53 Nguyễn Văn Trỗi',
  },
  {
    id: 'a98ab6',
    name: 'HOA THUY TIEN',
    address: '61 Hùng Vương',
  },
  {
    id: 'a24abc',
    name: 'CHI PHUNG',
    address: '32 Phan Đình Phùng',
  },
  {
    id: 'a24abf',
    name: 'CHI PHUNG',
    address: '32 Phan Đình Phùng',
  },
];

const DetailWaitingForItScreen = () => {
  const styles = useMemo(() => {
    return createStyles();
  });

  const route = useRoute();
  const { id, tab } = route?.params;

  const [isGettingData, setIsGettingData] = useState(false);
  const [listShop, setListShop] = useState();
  const [shopInfo, setShopInfo] = useState();

  useEffect(() => {
    setIsGettingData(true);
    let isComponentMounted = true;

    getDetailOrder({ id: id, tab: tab })
      .then((res) => {
        if (!isComponentMounted) {
          return;
        }

        setListShop(res?.data?.List);
        setShopInfo(res?.data);
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
  }, [id, tab]);

  const renderListOrder = listShop?.map((item) => {
    return (
      <Box key={item.MaDonHang} style={styles.orderItem}>
        <Box style={styles.orderItemTitleBox}>
          <Checkbox
            accessibilityLabel="This is a dummy checkbox"
            colorScheme="green"
            size="sm"
          />
          <Text style={styles.orderItemTitle}>
            <Text style={styles.orderTitleBold}>{item.MaDonHang} </Text>
            {'-'} {item.TenKH}
          </Text>
        </Box>
        <Text style={styles.orderItemAddress}>{item.DiaChiKH}</Text>
      </Box>
    );
  });

  return (
    <>
      {isGettingData ? (
        <LoadingComponent />
      ) : (
        <Box style={styles.container}>
          <ScrollView>
            <Box style={styles.sellerInfoSection}>
              <Text style={styles.sellerInfoPhoneTxt}>{shopInfo?.DienThoai}</Text>
              <Text style={styles.sellerInfoTitle}>
                {'Người bán:'}
                <Text style={styles.sellerInfoName}>{shopInfo?.TenShop}</Text>
              </Text>
              <Text style={styles.sellerInfoTitle}>
                {'Địa chỉ: '}
                <Text style={styles.sellerInfoAddress}>{shopInfo?.DiaChi}</Text>
              </Text>
            </Box>

            {renderListOrder}

            <Box style={styles.orderStatusSection}>
              <Text style={styles.orderStatusTitle}>
                {'Trạng thái: '}{' '}
                <Text style={styles.orderStatusTitleBold}>{'CHỜ LẤY'}</Text>
              </Text>
            </Box>
          </ScrollView>

          <Box style={styles.btnGroupBottom}>
            <Box style={styles.btnGroupButtonTitle}>
              <Text style={styles.btnGroupButtonTitleInner}>
                {'Chuyển trạng thái đơn hàng này sang'}
              </Text>
            </Box>
            <Box style={styles.btnGroupInner}>
              <Pressable style={styles.btnInner1}>
                <Box style={styles.btnTextTitle}>
                  <Text style={styles.btnTextTitleInner}>{''}</Text>
                </Box>
              </Pressable>
              <Pressable style={styles.btnInner2}>
                <Box style={styles.btnTextTitle}>
                  <Text style={styles.btnTextTitleInner}>{'Chờ giao'}</Text>
                </Box>
              </Pressable>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default DetailWaitingForItScreen;
