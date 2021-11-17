import React, { useMemo } from 'react';
import { Box, Text } from 'native-base';
import { createStyles } from './style';

function DetailOrderWaitingScreen() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  return (
    <Box style={styles.container}>
      <Text>{'Detail cho giao'}</Text>
    </Box>
  );
}

export default DetailOrderWaitingScreen;
