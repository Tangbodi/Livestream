import {
  LivestreamPlayer,
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";

const apiKey = "f4xufhd7rut4";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJAc3RyZWFtLWlvL2Rhc2hib2FyZCIsImlhdCI6MTczNTQzODIzNCwiZXhwIjoxNzM1NTI0NjM0LCJ1c2VyX2lkIjoiIWFub24iLCJyb2xlIjoidmlld2VyIiwiY2FsbF9jaWRzIjpbImxpdmVzdHJlYW06bGl2ZXN0cmVhbV82ZTA3ODEzMi1hZDY1LTQ3NDMtODJlNi1mMzg2NDc4MGE3ZmEiXX0.TLNw9FBRQbEtKw14y7mWnNZXLtl2-9uKAtmDWx0kboc";
const callId = "livestream_6e078132-ad65-4743-82e6-f3864780a7fa";

const user: User = { type: "anonymous" };
const client = new StreamVideoClient({ apiKey, user, token });

export default function App() {
  return (
    <StreamVideo client={client}>
      <LivestreamPlayer callType="livestream" callId={callId} />
    </StreamVideo>
  );
}
