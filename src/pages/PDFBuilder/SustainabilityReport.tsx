import { Document, Page, StyleSheet } from '@react-pdf/renderer';

import CoverPage from './CoverPage';
import IntroductionPage from './IntroductionPage';
import IndexPage from './IndexPage';
import BasicModule from './BasicModule';

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
});

const styles2 = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
    backgroundColor: '#024738',
    color: '#b6d7a8',
  },
});

const SustainabilityReport = (props: any) => (
  <Document>
    <Page size='A4' style={styles2.page}>
      <CoverPage {...props} />
    </Page>
    <Page size='A4' style={styles.page}>
      <IntroductionPage {...props} />
    </Page>
    <Page size='A4' style={styles.page}>
      <IndexPage {...props} />
    </Page>
    <Page size='A4' style={styles.page}>
      <BasicModule {...props} />
    </Page>
  </Document>
);

export default SustainabilityReport;
