import React, { useState, useEffect } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import './Bars.css'; // CSS 파일을 임포트합니다.
import barsData from './bars_data.json'; // JSON 데이터를 불러옵니다.

function Bars() {
  const [selectedBar, setSelectedBar] = useState(null);
  const [bars, setBars] = useState([]);

  useEffect(() => {
    // JSON 데이터를 불러와서 bars 상태로 설정합니다.
    const loadedBars = barsData.map(bar => ({
      name: bar.place_name,
      lat: parseFloat(bar.y),
      lng: parseFloat(bar.x),
      info: `주소: ${bar.address_name}\n전화번호: ${bar.phone}`
    }));
    setBars(loadedBars);
  }, []);

  return (
    <div className="bars-page">
      <div className="map-container">
        <Map
          center={{ lat: 37.5665, lng: 126.9780 }}
          style={{ width: '100%', height: 'calc(100vh - 60px)' }}
          level={7}
        >
          {bars.map((bar, index) => (
            <MapMarker
              key={index}
              position={{ lat: bar.lat, lng: bar.lng }}
              title={bar.name}
              onClick={() => setSelectedBar(bar)}
            />
          ))}
          {selectedBar && (
            <CustomOverlayMap position={{ lat: selectedBar.lat, lng: selectedBar.lng }}>
              <div className="info-window">
                <h4>{selectedBar.name}</h4>
                <p>{selectedBar.info}</p>
                <button onClick={() => setSelectedBar(null)}>Close</button>
              </div>
            </CustomOverlayMap>
          )}
        </Map>
      </div>
    </div>
  );
}

export default Bars;
