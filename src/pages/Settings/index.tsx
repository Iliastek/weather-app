import React from 'react'
import Settingsbox from '../../components/Settingsbox/index.tsx'
import './settings.css'

const Settings = () => {
    return (
        <div>
            <Settingsbox headline="choose your prefered hand" />
            <Settingsbox headline="choose your prefered unit" />
            <Settingsbox headline="Darkmode" />
            <Settingsbox headline="Notifications" />
        </div>
    )
}

export default Settings