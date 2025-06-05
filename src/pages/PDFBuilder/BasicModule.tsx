import { View, Text, Image } from '@react-pdf/renderer';
import { globalStyles } from './styles/globalStyles';

interface BasicModuleProps {
  nome_empresa: string;
  module: string;
  reportType: string;
  practices_sustainable_economy: string;
  subsidiaries?: string;
  ano_empresa: string;
  logoUrl: string;
}

const BasicModule = ({
  nome_empresa,
  module,
  reportType,
  practices_sustainable_economy,
  subsidiaries = 'No subsidiaries reported.',
  ano_empresa,
  logoUrl,
}: BasicModuleProps) => (
  <View>
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
      <Text style={globalStyles.sectionTitle}>B1 - Basis for Preparation</Text>
      <Text style={globalStyles.paragraph}>
        For the preparation of this sustainability report, the {module} module was chosen.
      </Text>
      <Text style={globalStyles.paragraph}>
        {nome_empresa} has made use of the right to secrecy of sensitive information according to
        ESRS VSME point 19, and it has not made certain data public.
      </Text>
      <Text style={globalStyles.paragraph}>
        Our Sustainability Report has been prepared on a {reportType} basis.
      </Text>
      <Text style={globalStyles.paragraph}>{subsidiaries || 'No subsidiaries reported.'}</Text>

      <Text style={globalStyles.sectionTitle}>B2 - Sustainable Economy Practices</Text>
      <Text style={globalStyles.paragraph}>
        {nome_empresa} is committed to specific practices, policies, and initiatives that aim to
        contribute to the transition towards a more sustainable economy. These actions help mitigate
        negative impacts while reinforcing positive outcomes for both society and the environment.
        They form an integral part of our sustainability strategy and further reinforce our
        long-term commitment to a more responsible and sustainable future.
      </Text>
      <Text style={globalStyles.paragraph}>{practices_sustainable_economy}</Text>
    </View>
  </View>
);

export default BasicModule;
