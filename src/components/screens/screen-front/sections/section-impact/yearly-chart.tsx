import { useImpact } from '../../../../../utils/impact-ticker';
import {
  fmtInt,
  LiveFigure,
  useReveal,
} from '../../../../_commons/impact-number';
import { impactCopy } from './copy';

const selYtd = (s: { ytd: number }) => s.ytd;

// Year-by-year bars. Past years are green; the year in progress is orange and
// counts live. On phones the columns become rows with proportional bars.
const YearlyChart = ({ locale }: { locale: string }) => {
  const c = impactCopy(locale);
  const data = useImpact();
  const { ref, revealed } = useReveal<HTMLDivElement>('yr');
  const max = Math.max(...data.years.map((y) => y[1]));
  const ariaLabel = data.years
    .map((y) => `${c.year(y[0])}: ${fmtInt(y[1])} kWh`)
    .join(', ');
  return (
    <div className={`pe-yr${revealed ? ' pe-go' : ''}`} ref={ref}>
      <div className="pe-head">
        <h3>{c.chartTitle}</h3>
        <span>{c.chartUnit}</span>
      </div>
      <div className="pe-cols" role="img" aria-label={ariaLabel}>
        {data.years.map(([year, kwh, current]) => (
          <div key={year} className={`pe-col${current ? ' pe-ytd' : ''}`}>
            <div className="pe-v" aria-hidden="true">
              {current ? (
                <LiveFigure select={selYtd} reserve={7.9} />
              ) : (
                fmtInt(kwh)
              )}
            </div>
            <div className="pe-u" aria-hidden="true">
              kWh
            </div>
            <div
              className="pe-b"
              aria-hidden="true"
              style={
                {
                  height: Math.max(4, (kwh / max) * 250),
                  '--w': `${Math.max(1, (kwh / max) * 100)}%`,
                } as React.CSSProperties
              }
            />
            <div className="pe-y" aria-hidden="true">
              {c.year(year)}
              {current ? ` ${c.chartCurrent}` : ''}
            </div>
          </div>
        ))}
      </div>
      <p className="pe-fn">
        {c.footnote(
          data.factors.co2KgPerKwh,
          data.factors.kgCo2PerTreeYear,
          data.factors.tCo2PerCarYear,
          locale === 'th' ? 'กฟผ. 2566' : data.factors.source ?? 'EGAT 2023',
          c.date(data.asof)
        )}
      </p>
    </div>
  );
};

export default YearlyChart;
