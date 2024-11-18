import React, { forwardRef } from 'react'
import './designationCube.css'

const DesignationCube = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="scene">
            <div className="cube">
                <span className="side top">
                    <span>Full Stack</span> Developer
                </span>
                <span className="side front">
                    <span>MERN Stack</span> Developer
                </span>
            </div>
        </div>
    )
})

export default DesignationCube