import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import { globalStyles } from './styles/globalStyles';

const styles = StyleSheet.create({
  section: { marginBottom: 40 },
  title: {
    fontSize: 72,
    textAlign: 'center',
    marginBottom: 10,
    whiteSpace: 'normal',
    wordBreak: 'keep-all',
    overflowWrap: 'normal',
  },
  company: { fontSize: 18, textAlign: 'center', marginBottom: 20 },
  logo: { width: 300, alignSelf: 'center', marginBottom: 30 },
});

interface CoverPageProps {
  ano: string;
  nome_empresa: string;
  logoUrl?: string;
}

const CoverPage = ({ ano, nome_empresa, logoUrl }: CoverPageProps) => (
  <View style={styles.section}>
    {logoUrl && <Image src={logoUrl} style={globalStyles.logo} />}
    <Text style={styles.title}>Sustainability</Text>
    <Text style={styles.title}>Report {ano}</Text>
    <Text style={globalStyles.centeredSubtitle}>{nome_empresa}</Text>
    <Image
      src='https://images.unsplash.com/photo-1665809545481-77542f9ea0a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      style={styles.logo}
    />
  </View>
);

export default CoverPage;
