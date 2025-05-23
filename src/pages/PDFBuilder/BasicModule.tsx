import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { globalStyles } from './styles/globalStyles';

const styles = StyleSheet.create({
  heading: { fontSize: 16, marginVertical: 10 },
  paragraph: { marginBottom: 10, lineHeight: 1.5 },
});

interface BasicModuleProps {
  nome_empresa: string;
  module: string;
  reportType: string;
  practices_sustainable_economy: string;
}

const BasicModule = ({
  nome_empresa,
  module,
  reportType,
  practices_sustainable_economy,
}: BasicModuleProps) => (
  <View>
    <Text style={globalStyles.sectionTitle}>B1 - Basis for Preparation</Text>
    <Text style={globalStyles.paragraph}>
      For the preparation of this sustainability report, the {module} module was chosen.
    </Text>
    <Text style={globalStyles.paragraph}>
      {nome_empresa} has made use of the right to secrecy of sensitive information according to ESRS
      VSME point 19, and it has not made certain data public.
    </Text>
    <Text style={globalStyles.paragraph}>
      Our Sustainability Report has been prepared on a {reportType} basis.
    </Text>

    <Text style={globalStyles.sectionTitle}>B2 - Sustainable Economy Practices</Text>
    <Text style={globalStyles.paragraph}>
      {nome_empresa} is committed to specific practices, policies, and initiatives that aim to
      contribute to the transition towards a more sustainable economy. These actions help mitigate
      negative impacts while reinforcing positive outcomes for both society and the environment.
      They form an integral part of our sustainability strategy and further reinforce our long-term
      commitment to a more responsible and sustainable future.
    </Text>
    <Text style={globalStyles.paragraph}>
      {nome_empresa} has implemented a range of practices: {practices_sustainable_economy}
    </Text>
  </View>
);

export default BasicModule;
