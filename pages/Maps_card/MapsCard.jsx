import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Maps_card.css";


export const MapsCard = () => {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        // Пример функции для получения данных из API
        const fetchData = async () => {
            try {
                const response = await fetch('./data/data_cards_map.json'); // Замените URL на ваш
                const data = await response.json();
                setRoutes(data);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <ul className="list_reset map__list">
                {routes.map((route) => (
                    <Link to={`/map_${route.id}`} key={route.id}>
                        <li className="map__item">
                            <img src={route.imageUrl} alt="картинка" />
                            <div className="info_block">
                                <p className="zag__route">{route.title}</p>
                                <p className="info__route">{route.type}</p>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>

            
        </>
    );
}
