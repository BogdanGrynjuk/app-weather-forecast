import React from 'react';

import { Wrapper } from './Main.styled';
import GeneralWeatherForecast from './GeneralWeatherForecast';
import CurrentWeather from './CurrentWeather';
import { cityType, weatherDataType } from 'types';

type Props = {
  weatherForecast: weatherDataType,
  city: cityType
}

const Main: React.FC<Props> = ({ weatherForecast, city }) => {
  
  return (
    <Wrapper>
      <CurrentWeather weatherForecast={weatherForecast} city={city} />
      <GeneralWeatherForecast  weatherForecast={ weatherForecast }/>
    </Wrapper>
  );
}

export default Main;
