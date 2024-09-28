import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedOut,SignedIn,SignInButton,UserButton } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
    <div>
      <Header  >
        <div className='flex w-fit items-center justify-center gap-2'>
          <p className='document-title'>This is a document</p>
        </div>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      </Header>
      <Editor />
    </div>
  )
}

export default page
