import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { globalStyles } from './styles/globalStyles';

const styles = StyleSheet.create({
  section: { marginBottom: 20 },
  item: { marginBottom: 6 },
});

const IndexPage = () => (
  <View style={styles.section}>
    <Text>Index</Text>
    <Text style={globalStyles.indexItem}>
      Introduction ........................................................................ 2
    </Text>
    <Text style={globalStyles.indexItem}>
      Basic Module ......................................................................... 3
    </Text>
    <Text style={globalStyles.indexItem}>
      B1 - Basis for Preparation ............................................................ 4
    </Text>
    <Text style={globalStyles.indexItem}>
      B2 - Sustainable Practices .......................................................... 4
    </Text>
  </View>
);

export default IndexPage;
