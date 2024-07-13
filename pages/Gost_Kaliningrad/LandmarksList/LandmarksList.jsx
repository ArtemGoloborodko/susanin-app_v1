import { useState, useEffect } from 'react';
import './LandmarksList.css';
import landmarksData from '../../../data/landmarks.json';
import { DownMenu } from '../../../components/DownMenu';
import routesData from '../../../data/routes_1.json';


const landmarks = landmarksData.map_1;

export const LandmarksListKaliningrad = () => {

  const [visited, setVisited] = useState(
    JSON.parse(localStorage.getItem('visitedLandmarks')) || {}
  );

  useEffect(() => {
    // Сохраняем в localStorage при изменении состояния visited
    localStorage.setItem('visitedLandmarks', JSON.stringify(visited));
  }, [visited]);

  const toggleVisited = (landmarkName) => {
    setVisited({
      ...visited,
      [landmarkName]: !visited[landmarkName]
    });
  };

  return (
    <div className="container">
      <h1 className="heading">Отмечайте места, которые вы видели</h1>
      <ul className="landmark__list">
        {landmarks.map((landmark, index) => (
          <li key={index} className="landmark__item">
            <label className={visited[landmark] ? 'landmark__label visited' : 'landmark__label'}>
              <input
                type="checkbox"
                checked={visited[landmark] || false}
                onChange={() => toggleVisited(landmark)}
                className="landmark__checkbox"
              />
              <span className={visited[landmark] ? 'landmark__text visited' : 'landmark__text'}>
                {landmark}
              </span>
            </label>
          </li>
        ))}
      </ul>
      {routesData.map((route, index) => (
                    <DownMenu
                        key={index}
                        mapName="map_1"
                        marklist={route.marklist}
                        spotFoot={route.spotFoot}
                    />
                ))}
    </div>
  );
};


