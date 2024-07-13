import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { MapsCard } from "../pages/Maps_card/MapsCard";
import { CardRouteKld } from "../pages/Gost_Kaliningrad/route/cardRoute_gos";
import routesDataKainingrad from '../data/routes_1.json';
import routesDataEvropa from '../data/routes_2.json';
import { SpotFoot } from "../pages/Gost_Kaliningrad/route/SpotFoot";
import { Suspense, lazy } from "react";
import { Map_1 } from "../pages/Gost_Kaliningrad/map/Map_1";
import { Map_2 } from "../pages/Gost_Evropa/map/Map_2";
import { LandmarksListEvropa } from "../pages/Gost_Evropa/LandmarksList/LandmarksList";
import { LandmarksListKaliningrad } from "../pages/Gost_Kaliningrad/LandmarksList/LandmarksList";

const LazyAppPage = lazy(() => import('../pages/App_page/App_page'))
const LazyMapsPage = lazy(() => import('../pages/Maps/Maps'))

function App() {


  return (


    <BrowserRouter>
      <main>
        <Suspense fullback={<div style="color:#000000">Прогружаем маршруты...</div>}>
          <Routes>

            <Route path="/" element={<LazyAppPage />} />
            <Route path="/maps" element={<LazyMapsPage />} />
            <Route path="/maps_card" element={<MapsCard />} />
            <Route path="/map_1" element={<Map_1 />} />
            <Route path="/map_2" element={<Map_2 />} />
            <Route path="/marklist_1" element={<LandmarksListKaliningrad />} />
            <Route path="/marklist_2" element={<LandmarksListEvropa />} />
            <Route path="/spot_foot_1" element={<SpotFoot />} />


            {routesDataKainingrad.map((route, index) => (
              <Route
                key={index}
                path={route.link}
                element={
                  <CardRouteKld
                    nameObject={route.nameObject}
                    history={route.history}
                    maps={route.maps}
                    swiperImages={route.swiper_img}
                  />
                }
              />
            ))}

{routesDataEvropa.map((route, index) => (
              <Route
                key={index}
                path={route.link}
                element={
                  <CardRouteKld
                    nameObject={route.nameObject}
                    history={route.history}
                    maps={route.maps}
                    swiperImages={route.swiper_img}
                  />
                }
              />
            ))}

          </Routes>
        </Suspense>
      </main>
    </BrowserRouter >
  )
}

export default App
