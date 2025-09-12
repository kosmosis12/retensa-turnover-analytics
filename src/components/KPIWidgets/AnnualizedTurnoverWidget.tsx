import React from 'react';
import { BarChart } from 'lucide-react';
import { Chart } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import { retensa_kpi_overview_csv } from '../../RetensaTurnoverAnalytics';
import BaseKPIWidget from '../BaseKPIWidget';

interface AnnualizedTurnoverWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const AnnualizedTurnoverWidget: React.FC<AnnualizedTurnoverWidgetProps> = ({
  id,
  onMove
}) => {
  return (
    <BaseKPIWidget
      id={id}
      title="Annualized Turnover"
      value=""
      subtitle="Projected yearly rate"
      icon={<BarChart size={20} />}
      color="secondary"
      onMove={onMove}
    >
      <div style={{ marginTop: '16px', height: '120px' }}>
        <Chart
          dataSource={retensa_kpi_overview_csv}
          chartType="indicator"
          dataOptions={{
            value: [measureFactory.average(retensa_kpi_overview_csv.annualized_turnover_rate_pct)],
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
