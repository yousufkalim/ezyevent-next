import ServiceProvider from 'components/ServiceProvider';

export default function ServiceProviderPage() {
  return (
    <div className='container'>
      <ServiceProvider />
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
