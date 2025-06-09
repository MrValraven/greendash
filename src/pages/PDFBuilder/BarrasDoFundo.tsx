import { View, Text, Svg, Polygon } from '@react-pdf/renderer';
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
            {/* <Svg viewBox='0 0 100 100'>
              <Polygon points='60,10 10,60 60,60' fill='#004f4f' />
            </Svg>*/}
            <View
              style={{
                width: 10,
                height: 30,
                backgroundColor: '#004f4f',
                border: '1px solid #004f4f',
                /*  clipPath: 'polygon(50% 50%, 75% 25%, 75% 75%, 25% 75%)', */
              }}
            ></View>
            <View
              style={{
                width: 60,
                height: 30,
                backgroundColor: '#007373',
                border: '1px solid #007373',
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                fontSize: 12,
              }}
            >
              <Text>{pageNumber}</Text>
            </View>
            <View style={{ width: 10, height: 30, backgroundColor: '#004f4f' }}></View>
          </View>
        </View>
      </View>
      <View style={globalStyles.barraFundo}></View>
    </View>
  );
};

export default BarrasDoFundo;
