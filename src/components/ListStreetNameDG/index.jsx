import React, { useMemo, useEffect, useState } from 'react';
import { Box, Text, Pressable } from 'native-base';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { CreateStyles } from './style';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { getListStreetNameDG } from '@/services/getListAddress';

const ListStreetNameDGBottomSheet = (props) => {
  const { modal, tab } = props;
  const [listStreet, setListStreet] = useState();

  const onClose = () => {
    modal.current?.close();
  };

  const styles = useMemo(() => {
    return CreateStyles();
  });

  console.log('tab', tab);
  useEffect(() => {
    let isComponentMounted = true;

    getListStreetNameDG({ tab: tab })
      .then((res) => {
        if (!res?.data || !isComponentMounted) {
          return;
        }

        setListStreet(res?.data?.List);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        if (!isComponentMounted) return;
      });

    return () => {
      isComponentMounted = false;
    };
  }, [tab]);

  const renderListStreetName = listStreet?.map((item) => {
    return (
      <Pressable key={item.GroupID}>
        <Box style={styles.streetNameItem}>
          <Text>{item.Name}</Text>
        </Box>
      </Pressable>
    );
  });

  return (
    <Portal>
      <Modalize
        ref={modal}
        adjustToContentHeight={false}
        HeaderComponent={
          <Box style={styles.header}>
            <Text style={styles.headerText}>Địa chỉ đường</Text>

            <Pressable onPress={() => onClose()}>
              <Box>
                <FontAwesomeIcon icon={faTimes} size={18} />
              </Box>
            </Pressable>
          </Box>
        }
      >
        <Box style={styles.container}>{renderListStreetName}</Box>
      </Modalize>
    </Portal>
  );
};

export default ListStreetNameDGBottomSheet;
