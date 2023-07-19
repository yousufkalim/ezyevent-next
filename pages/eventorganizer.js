import EventOrganiser from 'components/EventOrganiser';
export default function EventOrganizerPage() {
  return (
    <div className='container'>
      <EventOrganiser />
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
