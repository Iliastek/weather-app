import React from "react"
type FavoritenProps = {
    prop: string
}
const Favoriten = ({ prop }: FavoritenProps) => {
    return (
        <div className="Box">
            <p>{prop}</p>
        </div>
    )
}

export default Favoriten