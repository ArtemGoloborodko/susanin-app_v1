import { useEffect, useState } from "react";
import { mapInfo } from '../../../data/data_cards_info.js';

export const MapInfo = ({ mapName }) => {
    const [routes, setRoutes] = useState([]);

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (mapInfo[mapName]) {
            setRoutes(mapInfo[mapName]);
        }
    }, [mapName]);


    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="map__info_block" style={{ maxHeight: expanded ? 'none' : '230px', overflow: 'hidden' }}>
            <h3 className="map__info_h2">Описание маршрута:</h3>
            {routes.map(route => (
                <div key={route.id}>
                    <div dangerouslySetInnerHTML={{ __html: route.opisanie }} />
                </div>
            ))}
            {!expanded ? (
                <div className="read_more" onClick={toggleExpanded}>
                    Читать полностью
                </div>
            ) : (
                <div className="read_more" onClick={toggleExpanded}>
                    Скрыть
                </div>
            )}
        </div>

    );
};
