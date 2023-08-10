import InvFrom from 'components/Invitation';

export default function ServiceProviderPage() {
  return (
    <div className='container'>
      <InvFrom />
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
