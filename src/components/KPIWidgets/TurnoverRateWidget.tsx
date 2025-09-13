import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Chart } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import { retensa_kpi_overview_csv } from '../../RetensaTurnoverAnalytics.ts';
import BaseKPIWidget from '../BaseKPIWidget';

interface TurnoverRateWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const TurnoverRateWidget: React.FC<TurnoverRateWidgetProps> = ({
  id,
  onMove,
}) => {
  return (
    <BaseKPIWidget
      id={id}
      title="Turnover Rate"
      value=""
      subtitle="Current period"
      icon={<TrendingUp size={20} />}
      color="warning"
      onMove={onMove}
    >
      <div style={{ marginTop: '16px', height: '120px' }}>
        <Chart
          dataSource={retensa_kpi_overview_csv}
          chartType="indicator"
          dataOptions={{
            value: [
              measureFactory.average(
                retensa_kpi_overview_csv.turnover_rate_pct
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

export default TurnoverRateWidget;
