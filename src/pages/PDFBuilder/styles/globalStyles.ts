// globalStyles.js
import { StyleSheet } from '@react-pdf/renderer';

export const globalStyles = StyleSheet.create({
  page: {
    paddingTop: 150,
    paddingHorizontal: 150,
    paddingBottom: 150,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.6,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#034638',
  },
  barra: {
    width: '100%',
    height: 5,
    borderTop: '1px solid #011813',
    marginBottom: 20,
    marginTop: 20,
  },
  barraGrande: {
    width: '100%',
    height: 5,
    borderTop: '5px solid #011813',
    marginBottom: 20,
    marginTop: 20,
  },
  paragraph: {
    fontSize: 10,
    marginBottom: 12,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  centeredTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  centeredSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
  },
  indexItem: {
    marginBottom: 6,
    fontSize: 11,
    color: '#444',
  },
});
