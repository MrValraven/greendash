// globalStyles.js
import { StyleSheet } from '@react-pdf/renderer';

export const globalStyles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.6,
    color: '#000',
    padding: 20,
    paddingBottom: 0,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#034638',
  },
  sectionTitleh2: {
    fontSize: 14,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: 500,
    color: '#155347',
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
    borderTop: '3px solid #047273',
    marginBottom: 0,
    marginTop: 0,
  },
  paragraph: {
    fontSize: 10,
    marginBottom: 12,
    fontWeight: 400,
    lineHeight: 1.3,
    color: ' #404040',
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
    paddingLeft: 20,
  },
  indexTitle: {
    marginBottom: 6,
    fontSize: 11,
    color: '#444',
    fontWeight: 500,
  },
  barraFundo: {
    width: '100%',
    height: 20,
    backgroundColor: '#023d3c',
  },
});
