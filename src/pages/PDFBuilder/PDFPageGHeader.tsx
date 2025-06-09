import Logo from '@assets/greendashLogo.svg';

type Props = {
  reportingYear: string;
};

const PDFPageGHeader = ({ reportingYear }: Props) => {
  return (
    <div className='pageGHeader'>
      <div className='pageGHeaderContent'>
        <img src={Logo} alt='' />
        <p>Sustainability Report {reportingYear}</p>
      </div>
      <div className='big-green-line'></div>
    </div>
  );
};

export default PDFPageGHeader;
