import { View, Text } from '@react-pdf/renderer';
import React from 'react';
import { globalStyles } from './styles/globalStyles';

const BarrasDoFundo = ({ pageNumber }: any) => {
  return (
    <View id='barrasDoFundo'>
      <View id='barrasDoFundoEmCima'>
        <View
          id='barrasContainer'
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <View id='barrasInnerContainer' style={{ display: 'flex', flexDirection: 'row' }}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: '#004f4f',
                clipPath: 'clip-path: polygon(50% 50%, 75% 25%, 75% 75%, 25% 75%)',
              }}
            ></View>
            <View
              style={{
                width: 60,
                height: 30,
                backgroundColor: '#007373',
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Helvetica',
                fontSize: 16,
              }}
            >
              <Text>{pageNumber}</Text>
            </View>
            <View style={{ width: 30, height: 30, backgroundColor: '#004f4f' }}></View>
          </View>
        </View>
      </View>
      <View style={globalStyles.barraFundo}></View>
    </View>
  );
};

export default BarrasDoFundo;
