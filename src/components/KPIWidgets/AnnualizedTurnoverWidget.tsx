import React from 'react';
import { BarChart } from 'lucide-react';
import { Chart, useExecuteQuery } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import { DataSource, retensa_kpi_overview_csv } from '../../RetensaTurnoverAnalytics.ts';
import BaseKPIWidget from '../BaseKPIWidget';

interface AnnualizedTurnoverWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const AnnualizedTurnoverWidget: React.FC<AnnualizedTurnoverWidgetProps> = ({ id, onMove }) => {
  const { data, isLoading } = useExecuteQuery({
    dataSource: DataSource,
    measures: [
      measureFactory.average(
        retensa_kpi_overview_csv.annualized_turnover_rate_pct,
        'Annualized Turnover',
      ),
    ],
  });

  const annualizedTurnover = data?.rows[0]?.[0]?.data ?? 0;

  return (
    <BaseKPIWidget
      id={id}
      title="Annualized Turnover"
      value={
        isLoading
          ? 'Loading…'
          : `${(annualizedTurnover as number).toFixed(1)}%`
      }
      subtitle="Projected yearly rate"
      icon={<BarChart size={20} />}
      color="secondary"
      onMove={onMove}
    >
      <div style={{ marginTop: '16px', height: '120px' }}>
        <Chart
          dataSet={DataSource}
          chartType="indicator"
          dataOptions={{
            value: [
              measureFactory.average(
                retensa_kpi_overview_csv.annualized_turnover_rate_pct,
              ),
            ],
          }}
          styleOptions={{
            width: '100%',
            height: '120px',
          }}
        />
      </div>
    </BaseKPIWidget>
  );
};

export default AnnualizedTurnoverWidget;

