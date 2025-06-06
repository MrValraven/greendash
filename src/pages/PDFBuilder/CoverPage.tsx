import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import { globalStyles } from './styles/globalStyles';
import capaImage from '@assets/capa.jpg';

const styles = StyleSheet.create({
  section: { padding: 20 },
  title: {
    fontSize: 42,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 10,
    whiteSpace: 'normal',
    wordBreak: 'keep-all',
    overflowWrap: 'normal',
  },
  company: { fontSize: 16, textAlign: 'left', marginBottom: 20, fontWeight: 500 },
  logo: { width: '100%', alignSelf: 'center', marginTop: 30 },
  barra: {
    width: '100%',
    height: 5,
    borderTop: '1px solid #898889',
    marginBottom: 20,
    marginTop: 20,
  },
});

interface CoverPageProps {
  ano: string;
  nome_empresa: string;
  logoUrl?: string;
  module: string;
}

const CoverPage = ({ module, ano, nome_empresa, logoUrl }: CoverPageProps) => (
  <View style={styles.section}>
    {logoUrl && <Image src={logoUrl} style={globalStyles.logo} />}
    <Text style={styles.title}>Sustainability</Text>
    <Text style={styles.title}>Report {ano}</Text>
    <Text style={styles.company}>{module} Module</Text>
    <Text style={styles.title}></Text>
    <Text style={styles.company}>{nome_empresa}</Text>
    <Text style={styles.barra}></Text>
    <Image
      src={
        capaImage ||
        'https://images.unsplash.com/photo-1665809545481-77542f9ea0a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
      style={styles.logo}
    />
  </View>
);

export default CoverPage;
