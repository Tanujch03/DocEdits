
import CollaborativeRoom from '@/components/CollaborativeRoom'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { redirect } from 'next/navigation'
import { getDocument } from '@/lib/actions/room.actions'

async function page({params:{id}}:SearchParamProps) {
  const clerkUser = await currentUser() 
  if(!clerkUser) redirect('/sign-in')
    const room =  await getDocument({
  roomId:id,
userId:clerkUser.emailAddresses[0].emailAddress})
if(!room) redirect('/')

  return (
    <main className=''>
      <CollaborativeRoom roomId={id} roomMetadata={room.metadata}/>
    </main>
  )
}

export default page
