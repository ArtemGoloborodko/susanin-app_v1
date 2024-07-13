import { useState, useRef, useEffect } from 'react';
import { mapInfo } from '../data/data_cards_info.js';
import { SiOpenstreetmap } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ToggleRouteButton = ({mapName}) => {
    const [isRouteVisible, setIsRouteVisible] = useState(false);
    const iframeRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    const handleButtonClick = () => {
        setIsRouteVisible(prevState => !prevState);
    };

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const ref = iframeRef.current;
        const scriptUrl = mapInfo[mapName]?.[0]?.src_map; // Проверка на наличие src_map в mapInfo

        if (!scriptUrl) {
            console.error('src_map is not defined in mapInfo.map_1');
            return;
        }

        const handleLoad = () => {
            if (!loaded && ref && ref.contentWindow) {
                const script = ref.contentWindow.document.createElement('script');
                script.type = 'text/javascript';
                script.src = scriptUrl;
                script.async = true;
                ref.contentWindow.document.body.appendChild(script);
                setLoaded(true);
            }
        };

        if (ref) {
            ref.addEventListener('load', handleLoad);
            if (ref.contentWindow && ref.contentWindow.document.readyState === 'complete') {
                handleLoad();
            }
        }

        return () => {
            if (ref) {
                ref.removeEventListener('load', handleLoad);
            }
        };
    }, [loaded, mapName]);

    return (
        <div className='toggle__btn'>
            <button onClick={handleButtonClick}>
                {/* {isRouteVisible ? 'Скрыть маршрут' : 'Показать маршрут'} */}
                <SiOpenstreetmap className='icon__btn_toggle' size={30} />
            </button>
            {isRouteVisible && (
                <iframe
                    ref={iframeRef}
                    width="100%"
                    height="800"
                    frameBorder="0"
                    sandbox="allow-scripts allow-same-origin"
                    src={mapInfo[mapName]?.[0]?.src_map} // Подставляем src_map в атрибут src
                    data-aos="fade-up"
                ></iframe>
            )}
        </div>
    );
};
