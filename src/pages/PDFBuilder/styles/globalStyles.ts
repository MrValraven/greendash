// globalStyles.js
import { StyleSheet } from '@react-pdf/renderer';

export const globalStyles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingHorizontal: 50,
    paddingBottom: 60,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.6,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  paragraph: {
    marginBottom: 12,
  },
  logo: {
    width: 140,
    height: 'auto',
    marginBottom: 30,
    alignSelf: 'center',
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