import React, { useState, useRef } from 'react';
import bb from "./assets/bb.mp4";  // 假设你的视频文件是 bb.mp4

const Love = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMedia, setShowMedia] = useState(false); // 控制媒体（视频）是否显示
  const videoRef = useRef(null); // 用于引用视频元素

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (password === 'GZJ') {
      setIsAuthenticated(true); // 密码正确，设置为已验证
      setShowMedia(true); // 显示视频
    } else {
      setIsAuthenticated(false); // 密码错误
      setShowMedia(false); // 隐藏视频
    }
  };

  const handleCloseMedia = () => {
    setShowMedia(false); // 关闭视频
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      // 尝试让视频进入全屏模式
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) { // Firefox
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari, Opera
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className='flex items-center justify-center  bg-gray-800 border-2 border-gray-600 rounded-lg h-screen'>
      <form className='bg-white p-4 rounded-lg shadow-lg'>
        <input 
          type="text" 
          className='p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64' 
          placeholder="Who do i love the most?"
          value={password} 
          onChange={handlePasswordChange} // 监听输入框变化
        />
      </form>
      <button 
        onClick={handleSubmit} 
        className='ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        Submit
      </button>

      {/* 只有密码正确时才显示视频 */}
      {showMedia && isAuthenticated && (
        <div className='mt-4 relative'>
          <video 
            ref={videoRef} 
            src={bb} 
            alt="Protected Content" 
            className='rounded-lg shadow-xl w-64 h-64'  // 视频大小
            controls  // 添加控制按钮（播放、暂停等）
            autoPlay // 自动播放视频
            onPlay={handleVideoPlay} // 视频播放后尝试进入全屏
          />
          {/* 关闭按钮 */}
          <button 
            onClick={handleCloseMedia} 
            className='absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600'
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Love;
