import React from "react"

type SettingsBoxProps = {
    headline: string
}

const Settingsbox = ({ headline }: SettingsBoxProps) => {
    return (
        <div className="Box">
            <p>{headline}</p>
        </div>
    )
}

export default Settingsbox