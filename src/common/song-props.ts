import {ChartType, getChartTypeName} from './chart-type';
import {GameRegion} from './game-region';
import {GameVersion} from './game-version';
import {getMaiToolsBaseUrl} from './script-host';
import {getSongNickname, isNiconicoLink} from './song-name-helper';
import {MagicApi} from './infra/magic-api';
import {MaiToolsApi} from './infra/mai-tools-api';
import {SongDatabaseFactory} from './application/song-database-factory';
import {Difficulty} from './difficulties';
import {getDefaultLevel, getDisplayLv, getOfficialLevel} from './level-helper';

export interface BasicSongProps {
  dx: ChartType;
  name: string;
  nickname?: string | null;
  ico?: string;
}

export interface SongProperties extends BasicSongProps {
  debut: number; // from 0 to latest version number
  lv: ReadonlyArray<number>;
}

export class SongDetails {
  constructor(
    readonly properties: SongProperties | undefined,
    readonly displayName: string,
  ) {}
  
  get version(): number | undefined {
    return this.properties?.debut;
  }
  
  getLevel(
    difficulty: Difficulty,
    defaultLabel: string | undefined
  ): DifficultyLevel {
    const defaultLevel = getDefaultLevel(defaultLabel);
    if (!this.properties) {
      return {
        label: getDisplayLv(defaultLevel, true),
        officialLabel: getOfficialLevel(defaultLevel),
        value: defaultLevel,
        absoluteValue: Math.abs(defaultLevel)
      };
    }
    
    const exactLevel = this.properties.lv[difficulty];
    return {
      label: getDisplayLv(exactLevel, false),
      officialLabel: getOfficialLevel(defaultLevel),
      value: exactLevel,
      absoluteValue: Math.abs(exactLevel)
    };
  }
}

export class DifficultyLevel {
  label: string;
  officialLabel: string;
  value: number;
  absoluteValue: number;
}

export class SongDatabase {
  constructor(
    readonly gameVer: GameVersion = null,
    readonly region: GameRegion = null,
    private readonly verbose = true,
    private dxMap: Map<string, SongProperties> = new Map(),
    private standardMap: Map<string, SongProperties> = new Map(),
    private nameByIco: Map<string, string> = new Map(),
  ) {
  }

  hasDualCharts(songName: string, genre: string): boolean {
    if (songName === 'Link') return true;
    if (this.dxMap.has(songName) && this.standardMap.has(songName)) {
      return true;
    }
    const nickname = getSongNickname(songName, genre);
    if (nickname) {
      return this.dxMap.has(nickname) && this.standardMap.has(nickname);
    }
    return false;
  }

  getSongPropsByIco(ico: string, chartType: ChartType) {
    const name = this.nameByIco.get(ico);
    return this.getSongProperties(name, '', chartType);
  }

  getSongProperties(
    songName: string,
    genre: string,
    chartType: ChartType = ChartType.STANDARD
  ): SongProperties | undefined {
    if (songName == null) {
      return;
    }
    const map = chartType === ChartType.DX ? this.dxMap : this.standardMap;
    let songProps = map.get(songName);
    if (songProps) {
      return songProps;
    }
    const nickname = getSongNickname(songName, genre);
    songProps = map.get(nickname);
    if (songProps) {
      return songProps;
    }
    if (this.verbose) {
      console.warn(`Could not find song properties for ${songName} ${chartType}`);
    }
  }

  getAllProps(): SongDetails[] {
    const details: SongDetails[] = [];
    for (const songProps of this.dxMap.values()) {
      details.push(this.toSongDetails(ChartType.DX, songProps));
    }
    for (const songProps of this.standardMap.values()) {
      details.push(this.toSongDetails(ChartType.STANDARD, songProps));
    }
    return details;
  }

  getPropsForSongs(songs: ReadonlyArray<BasicSongProps>): SongDetails[] {
    return songs
      .map((s) => this.getByNickname(s.dx, s.nickname ?? s.name))
      .filter(details => details.properties);
  }

  async getByIdx(type: ChartType, name: string, idx: string): Promise<SongDetails> {
    if (name === 'Link') {
      const isNico = await isNiconicoLink(idx);
      return this.getByGenre(type, name, isNico ? 'niconico' : 'org');
    }

    return this.getByNickname(type, name);
  }
  
  getByGenre(type: ChartType, name: string, genre: string): SongDetails {
    return this.getByNickname(type, getSongNickname(name, genre));
  }

  getByIco(type: ChartType, ico: string): SongDetails {
    const icoName = this.nameByIco.get(ico);
    return this.getByNickname(type, icoName);
  }

  private getByNickname(type: ChartType, nickname: string): SongDetails {
    const map = type === ChartType.DX ? this.dxMap : this.standardMap;
    const properties = map.get(nickname);
    return this.toSongDetails(type, properties);
  }

  private toSongDetails(
    type: ChartType,
    properties: SongProperties
  ): SongDetails {
    const nickname = properties.nickname ?? properties.name;
    const displayName = (this.dxMap.has(nickname) && this.standardMap.has(nickname)) ?
      `${nickname}[${getChartTypeName(type)}]` :
      nickname;
    return new SongDetails(properties, displayName);
  }

  toString(): string {
    return String({dxMap: this.dxMap, standardMap: this.standardMap});
  }
}

// TODO: accept overrides from rating calculator
export async function loadSongDatabase(
  gameVer: GameVersion,
  gameRegion: GameRegion
): Promise<SongDatabase> {
  const factory = new SongDatabaseFactory(
    new MaiToolsApi(getMaiToolsBaseUrl()),
    new MagicApi(),
  );

  return factory.create(gameVer, gameRegion);
}
