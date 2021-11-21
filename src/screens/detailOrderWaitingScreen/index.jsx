import React, { useMemo } from 'react';
import { Box, Text, Button, Pressable } from 'native-base';
import { createStyles } from './style';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

function DetailOrderWaitingScreen() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const route = useRoute();

  const { status } = route?.params;

  console.log('status', status);
  return (
    <Box style={styles.container}>
      <ScrollView>
        <Box style={styles.guestInfoSection}>
          <Text style={styles.guestInfoPhoneNumber}>{'a512z5-0976849512'}</Text>
          <Text style={styles.guestInfoName}>
            {'Người mua:'} <Text>{'CHI PHUNG'}</Text>
          </Text>
          <Text style={styles.guestInfoAddr}>{'32 Phan Dinh Phung'}</Text>
          <Text style={styles.guestInfoStatus}>
            {'Trạng thái: '}
            <Text style={styles.guestInfoStatusInner}>{'CHỜ GIAO'}</Text>
          </Text>
        </Box>

        <Box style={styles.priceSection}>
          <Text style={styles.priceText1}>
            {'Thu hộ:'} <Text>{'350.000 đ'}</Text>
          </Text>
          <Text style={styles.priceShipText}>
            {'Tiền ship: '} <Text>{'15.000 đ'}</Text>
          </Text>
          <Text style={styles.summaryPrice}>
            {'Tổng cộng: '}
            <Text style={styles.summaryPriceNumber}>{'375.000 đ'}</Text>
          </Text>
        </Box>

        <Box style={styles.orderInfoSection}>
          <Text style={styles.orderInfoTextTitle}>{'3.5kg - 30x20x20'}</Text>
          <Text>{'1 tham cho be, 2 khăn mặt, 2 nước xả vải comfort.'}</Text>
          <Text>
            {'Tổng cộng: '}
            <Text>{'375.000 đ'}</Text>
          </Text>
        </Box>

        <Box style={styles.sellerInfoSecction}>
          <Text style={styles.sellerInfoTitleInner}>
            {'Người bán: '}
            <Text>{'shop AZKid'}</Text>
          </Text>
          <Text style={styles.sellerPhoneNumberInner}>{'039.234.5678'}</Text>
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
              <Text style={styles.btnTextTitleInner}>{'Đã giao'}</Text>
            </Box>
          </Pressable>
          <Pressable style={styles.btnInner2}>
            <Box style={styles.btnTextTitle}>
              <Text style={styles.btnTextTitleInner}>{'Chờ trả'}</Text>
            </Box>
          </Pressable>
        </Box>
      </Box>
    </Box>
  );
}

export default DetailOrderWaitingScreen;
