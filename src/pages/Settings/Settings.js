import Settingsbox from '../../components/Settingsbox'
import './settings.css'

const Settings = () => {
    return (
        <>
            <Settingsbox prop="choose your prefered hand" />
            <Settingsbox prop="choose your prefered unit" />
            <Settingsbox prop="Darkmode" />
            <Settingsbox prop="Notifications" />
        </>
    )
}

export default Settings