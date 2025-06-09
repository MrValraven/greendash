import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import { globalStyles } from './styles/globalStyles';
import BarrasDoFundo from './BarrasDoFundo';

const styles = StyleSheet.create({
  section: { marginBottom: 20, padding: 60, paddingTop: 20 },
  item: { marginBottom: 6 },
});

const IndexPage = ({ logoUrl, ano_empresa }: any) => (
  <View
    style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <View style={styles.section}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <Image src={logoUrl} style={globalStyles.logo} />
        <Text style={globalStyles.paragraph}>Sustainability Report {ano_empresa}</Text>
      </View>
      <View>
        <Text style={globalStyles.barraGrande}></Text>
        <Text style={globalStyles.sectionTitle}>Index</Text>
        <Text style={globalStyles.indexTitle}>
          Introduction
          .....................................................................................................................................
          2
        </Text>
        <Text style={globalStyles.indexTitle}>
          Basic Module
          ..................................................................................................................................
          4
        </Text>
        <Text style={globalStyles.indexItem}>
          B1 - Basis for Preparation
          ........................................................................................................
          4
        </Text>
        <Text style={globalStyles.indexItem}>
          B2 - Practices, policies and future initiatives for transitioning towards a more
          sustainable economy
          ..........................................................................................................................................
          4
        </Text>
      </View>
    </View>
    <BarrasDoFundo pageNumber={3} />
  </View>
);

export default IndexPage;
