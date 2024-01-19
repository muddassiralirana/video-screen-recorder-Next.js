import React, { useEffect } from 'react';
import styles from '../app/page.module.css';
const ScreenRecorder = () => {
  const handleCapture = async () => {
    try {
      const media = await navigator.mediaDevices.getDisplayMedia();
      const mediarecorder = new MediaRecorder(media);
      mediarecorder.start();
      const [video] = media.getVideoTracks();
      video.addEventListener("ended", () => {
        mediarecorder.stop();
      });
      mediarecorder.addEventListener("dataavailable", e => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(e.data);
        link.download = "capture.webm";
        link.click();
      });
    } catch (error) {
      console.error('Error accessing screen capture:', error);
    }
  };
  useEffect(() => {
    const btn = document.getElementById('captureButton');
    btn.addEventListener('click', handleCapture);
    return () => {
      // Clean up event listener when the component unmounts
      btn.removeEventListener('click', handleCapture);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return /*#__PURE__*/React.createElement("main", {
    className: styles.content
  }, /*#__PURE__*/React.createElement("h2", null, "Screen Recorder APP"), /*#__PURE__*/React.createElement("button", {
    className: styles.button,
    id: "captureButton"
  }, "Capture the Screen"));
};
export default ScreenRecorder;