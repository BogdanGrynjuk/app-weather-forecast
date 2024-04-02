import { Theme } from '@emotion/react';

export interface ITheme extends Theme {
  color: {
    textPrimary: string;
    textSecondary: string;
    bgPrimary: string;
    bgSecondary: string;   
  };
  ff: {
    inconsolata: string;
  };
  fw: {
    regular: number;
    semiBold: number;
    bold: number;
  };
  fs: {
    s: string;
    m: string;
    l: string;
    xl: string;   
  };
  mq: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export type weatherForecastType = {
  country: string
  sunrise: number
  sunset: number
  list: [{
    clouds: {
      all: number
    }
    dt: number
    main: {
      feels_like: number
      humidity: number
      pressure: number
      temp: number
      temp_max: number
      temp_min: number
    }
    pop: number
    visibility: number
    weather: [{
      icon: string
      description: string
    }]
    wind: {
      speed: number
      gust: number
      deg: number
    }
  }]
};

export type cityType = {
  name: string
  country: string
  local_names?: {
    uk?: string
  }
  lat: number
  lon: number
  state: string
};

export type optionType = {
  name: string
  country: string
  local_names?: {
    uk?: string
  }
  lat: number
  lon: number
  state: string
};

