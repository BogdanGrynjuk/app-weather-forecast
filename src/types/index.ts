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
}

