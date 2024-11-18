import React, { forwardRef } from 'react'
import './downloadButton.css'

const DownloadButton = forwardRef((props, ref) => {
    return (
        <button className="download-button" ref={ref}>
            <div className="docs">
                <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="black"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
               <a href="https://drive.google.com/file/d/1BBrR62lK5MV-BuJ54Ry71pRW6p9Wq5YE/view" target='_blank' >Resume</a>
            </div>
            <div className="download">
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
            </div>
        </button>
    )
})

export default DownloadButton