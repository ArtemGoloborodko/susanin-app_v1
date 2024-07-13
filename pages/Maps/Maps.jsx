import { Link } from "react-router-dom"
import { MapsCard } from "../Maps_card/MapsCard"

const Maps = () => {
    return (
        <>
        <h1>Выберите маршрут, который вам нравится</h1>
    
        
        <MapsCard />    
        <Link to={"/"}>Назад</Link>
        </>
    )
}

export default Maps