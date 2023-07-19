import AboutUs from 'components/AboutUs';

export default function AboutPage() {
  return (
    <div className='container'>
      <AboutUs />
      <style jsx>
        {`
          .container {
            width: 100vw;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
}
