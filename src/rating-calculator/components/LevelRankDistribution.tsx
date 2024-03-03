import React from 'react';

import {ChartRecord} from '../../common/chart-record';
import {compareNumber} from '../../common/number-helper';
import {getRankDistribution, getRankMap} from '../rank-distribution';
import {RankDistributionDataRow} from './RankDistributionDataRow';
import {RankDistributionHeadRow} from './RankDistributionHeadRow';

const LEVEL_RANK_CELL_BASE_CLASSNAME = 'levelRankCell';
const LEVEL_RANK_CELL_CLASSNAMES = ['officialLevelCell'];

function getRecordsPerLevel(records: ReadonlyArray<ChartRecord>) {
  const levels = records.map((r) => r.level);
  levels.sort((a, b) => compareNumber(a.absoluteValue, b.absoluteValue));
  levels.reverse();
  const recordsPerLevel = new Map<string, ChartRecord[]>();
  for (const lv of levels) {
    const officialLv = lv.officialLabel;
    if (!recordsPerLevel.has(officialLv)) {
      recordsPerLevel.set(officialLv, []);
    }
  }
  for (const r of records) {
    recordsPerLevel.get(r.level.officialLabel).push(r);
  }
  return recordsPerLevel;
}

interface Props {
  topLeftCell: string;
  chartRecords: ReadonlyArray<ChartRecord>;
  topChartsCount: number;
}

export class LevelRankDistribution extends React.PureComponent<Props> {
  render() {
    const {chartRecords, topLeftCell, topChartsCount} = this.props;
    const topRecords = chartRecords.slice(0, topChartsCount);
    const rankMap = getRankMap(topRecords);
    const recordsPerLevel = getRecordsPerLevel(topRecords);
    return (
      <table className="rankDistributionTable">
        <thead>
          <RankDistributionHeadRow
            columns={rankMap.keys()}
            firstCell={topLeftCell}
            baseCellClassname={LEVEL_RANK_CELL_BASE_CLASSNAME}
            perColumnClassnames={LEVEL_RANK_CELL_CLASSNAMES}
          />
        </thead>
        <tbody>
          {Array.from(recordsPerLevel.entries()).map(([level, records]) => (
            <RankDistributionDataRow
              key={level}
              rowHead={level}
              columns={rankMap.keys()}
              rankDist={getRankDistribution(records)}
              baseCellClassname={LEVEL_RANK_CELL_BASE_CLASSNAME}
              perColumnClassnames={LEVEL_RANK_CELL_CLASSNAMES}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
