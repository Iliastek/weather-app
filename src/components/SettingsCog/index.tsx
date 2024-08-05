import React from "react"
import { Link } from "react-router-dom"
type SettingsCogProps = {
  imageSrc: string
}
const SettingsCog = ({ imageSrc }: SettingsCogProps) => {
  return (
    <div className="settings">
      <Link to="/settings">
        <img src={imageSrc} alt="A settings icon" />
      </Link>
    </div>
  )
}

export default SettingsCog