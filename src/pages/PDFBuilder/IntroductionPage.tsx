import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { globalStyles } from './styles/globalStyles';
import PDFPageGHeader from './PDFPageGHeader';

const styles = StyleSheet.create({
  section: { marginBottom: 20 },
  paragraph: { marginBottom: 12, lineHeight: 1.5 },
});

const IntroductionPage = ({ ano_empresa, nome_empresa }) => (
  <View style={styles.section}>
    <Text style={globalStyles.paragraph}>
      {nome_empresa} | Sustainability Report {ano_empresa}
    </Text>
    <Text style={globalStyles.sectionTitle}>Introduction</Text>
    <Text style={globalStyles.paragraph}>
      This Sustainability Report reflects our ongoing commitment to responsible business practices
      and transparency in our operations. As a responsible company, we recognize our role in
      contributing to a more sustainable future and aligning our activities with our stakeholders'
      environmental, social, and governance (ESG) expectations. This report follows the
      Comprehensive Module under VSME in line with CSRD.
    </Text>
    <Text style={globalStyles.paragraph}>
      In this report, we outline our key sustainability efforts, performance indicators, and ESG
      behaviours. Our aim is to integrate sustainability into our core business strategy to create
      long-term value for our customers, employees, partners, and the communities we serve.
    </Text>
    <Text style={globalStyles.paragraph}>
      By reporting on our sustainability performance, we reaffirm our dedication to responsible
      growth, innovation, and ethical conduct. We invite all stakeholders to engage with us on this
      journey towards a more sustainable and resilient future.
    </Text>
  </View>
);

export default IntroductionPage;
