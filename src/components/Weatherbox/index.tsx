import React from "react"

type WeatherBoxProps = {
    headline: string
}

const WeatherBox = ({ headline }: WeatherBoxProps) => {
    return (
        <div className="Overview">
            <p>{headline}</p>
        </div>
    )
}

export default WeatherBox