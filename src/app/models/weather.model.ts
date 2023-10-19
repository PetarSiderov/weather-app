

export class WeatherResponse {
    cityName?: string;
    dailyPrediction?: Daily[];
}
export class Daily {
    dt?: number;
    sunrise?: number;
    sunset?: number;
    moonrise?: number;
    moonset?: number;
    moon_phase?: number;
    summary?: string;
    temp?: Temp;
    feels_like?: FeelsLike;
    pressure?: number;
    humidity?: number;
    dew_point?: number;
    wind_speed?: number;
    wind_deg?: number;
    wind_gust?: number;
    weather?: Weather[];
    clouds?: number;
    pop?: number;
    uvi?: number;
    rain?: number | null;
}

export interface FeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

export interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}