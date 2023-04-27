// import { useState, useEffect } from 'react'
import { MessageBox } from "../pages"
import { Chat } from '../components'
const Messages = () => {

  return (
    <div className="flex  overflow-hidden">
      <div className="flex-1 lg:max-h-[calc(100vh-60px)] overflow-auto">
        {

          Array.from({ length: 30 }, (arr, index) => <Chat />)
        }
      </div>
      <div className="flex-1 hidden lg:block max-h-[calc(100vh-50px)]">
        <MessageBox />
      </div>

    </div>
  )
}

export default Messages