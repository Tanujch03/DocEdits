import React from 'react'
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";
  import Loader from '@/components/loader';
const Provider = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<Loader />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
    </div>
  )
}

export default Provider
