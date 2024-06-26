import React from 'react';
import { cityType } from 'types';
import { Wrapper, Settlement, Region } from './Location.styled';

type Props = {
  city: cityType
  isVisible: boolean
}

const Location: React.FC<Props> = ({city, isVisible}) => {
  let cityName: string = '';
  let cityDetails: string[] = [city.country];

  if (city && city?.local_names && city.local_names?.uk) {
    cityName = city.local_names.uk;
  } else {
    cityName = city.name;
  }

  if (city && city?.state) {
    cityDetails.unshift(city.state);
  }
  return (
    <Wrapper isVisible={isVisible}>
      <Settlement>
        {cityName}
      </Settlement>
      <Region>
        {cityDetails.join(' ')}
      </Region>
    </Wrapper>
  );
}

export default Location;
