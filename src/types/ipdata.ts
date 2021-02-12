export interface IPData {
  ip: string;
  is_eu: boolean;
  city: string;
  region: string;
  region_code: string;
  country_name: string;
  country_code: string;
  continent_name: string;
  continent_code: string;
  latitude: number;
  longitude: number;
  postal: string;
  calling_code: string;
  flag: string;
  emoji_flag: string;
  emoji_unicode: string;
  languages: Language[];
  currency: Currency;
  time_zone: TimeZone;
  threat: Threat;
  count: string;
}

export interface Currency {
  name: string;
  code: string;
  symbol: string;
  native: string;
  plural: string;
}

export interface Language {
  name: string;
  native: string;
}

export interface Threat {
  is_tor: boolean;
  is_proxy: boolean;
  is_anonymous: boolean;
  is_known_attacker: boolean;
  is_known_abuser: boolean;
  is_threat: boolean;
  is_bogon: boolean;
}

export interface TimeZone {
  name: string;
  abbr: string;
  offset: string;
  is_dst: boolean;
  current_time: Date;
}
