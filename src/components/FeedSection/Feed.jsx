import React from 'react'
import { useAppContext } from '../../useContextHook/useContextApi'
import { useTheme } from '../../useContextHook/useTheme'
import Sidebar from '../SidebarSection/Sidebar'
import VideoList from '../VideoSection/VideoList'

const Feed = () => {
  const { videoData, loading } = useAppContext()
  const {isDarkMode} = useTheme()

  return (
    <div className={`flex flex-row h-screen ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'}`}>
      <Sidebar />
      <div className='w-full grow overflow-y-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 gap-4 p-5'>
      {videoData?.map((video) => (
        <VideoList key={video.id} video={video} />
      ))}
        </div>
      </div>
    </div>
  )
}

export default Feed
