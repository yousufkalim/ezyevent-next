import ContactUs from 'components/ContactUs';

export default function ContactPage() {
  return (
    <div className='container'>
      <ContactUs />
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
