import { DownMenu } from '../../../components/DownMenu';
import routesData from '../../../data/routes_1.json';
import routesDataFood from '../../../data/routes_1_food.json';
import { FoodCardsKld } from '../FoodCard/FoodCards';


export const SpotFoot = () => {
    return (
        <>
            <h1>Кафе и рестораны по вашему маршруту</h1>

            <div className="grid__route">
                {routesDataFood.map((route, index) => (
                    <FoodCardsKld
                        key={index}
                        imageSrc={route.imageSrc}
                        title={route.title}
                        description={route.description}
                        link={route.link}
                        adress={route.adress}
                        adressLink={route.adressLink}
                        tel={route.tel}
                        telLink={route.telLink}
                        site={route.site}
                        timeWork={route.timeWork}
                    />
                ))}
            </div>

            {routesData.map((route, index) => (
                <DownMenu
                    key={index}
                    mapName="map_1"
                    marklist={route.marklist}
                    spotFoot={route.spotFoot}
                />
            ))}
        </>
    )
}