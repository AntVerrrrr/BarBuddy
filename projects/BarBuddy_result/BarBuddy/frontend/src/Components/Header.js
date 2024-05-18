//상단 메뉴바 버튼 이동을 다룸 
// Header.js

import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  const navigateToSpirits = () => {
    history.push('/spirits'); // '/spirits'는 양주 페이지의 경로입니다.
  };

  const navigateToCocktails = () => {
    history.push('/cocktails'); // '/cocktails'는 칵테일 조리법 페이지의 경로입니다.
  };

  const navigateToBars = () => {
    history.push('/bars'); // '/bars'는 술집 페이지의 경로입니다.
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={navigateToSpirits}>양주</button>
          </li>
          <li>
            <button onClick={navigateToCocktails}>칵테일 조리법</button>
          </li>
          <li>
            <button onClick={navigateToBars}>술집</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
