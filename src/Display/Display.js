import City from './City';

export default function Display({ waterfrontId, skylineId, castleId }) {
  return <div>
    <City skylineId={skylineId} waterfrontId={waterfrontId} castleId={castleId} />
  </div>;
}
