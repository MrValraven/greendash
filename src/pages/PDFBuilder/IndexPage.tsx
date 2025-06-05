import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import { globalStyles } from './styles/globalStyles';

const styles = StyleSheet.create({
  section: { marginBottom: 20 },
  item: { marginBottom: 6 },
});

const IndexPage = ({ logoUrl, ano_empresa }: any) => (
  <View style={styles.section}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Image src={logoUrl} style={globalStyles.logo} />
      <Text style={globalStyles.paragraph}>Sustainability Report {ano_empresa}</Text>
    </View>
    <View>
      <Text style={globalStyles.barraGrande}></Text>
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
  </View>
);

export default IndexPage;
