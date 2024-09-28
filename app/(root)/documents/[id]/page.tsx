import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import React from 'react'

function page() {
  return (
    <div>
      <Header  >
        <div className='flex w-fit items-center justify-center gap-2'>
          <p className='document-title'>This is a document</p>
        </div>
        
      </Header>
      <Editor />
    </div>
  )
}

export default page
