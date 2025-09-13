import React from 'react';
import { LineChart } from 'lucide-react';
import { Chart, type HighchartsOptions } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data'; // Re-add measureFactory
import {
  DataSource,
  retensa_kpi_overview_csv,
} from '../../RetensaTurnoverAnalytics.ts';
import BaseKPIWidget from '../BaseKPIWidget';

// ... (interface remains the same)

const TurnoverTrendsWidget: React.FC<TurnoverTrendsWidgetProps> = ({
  id,
  onMove,
}) => {
  const handleBeforeRender = (options: HighchartsOptions) => {
    // ... (styling function remains the same)
  };

  return (
    <BaseKPIWidget
      id={id}
      title="Turnover Trends"
      value=""
      subtitle="Monthly turnover rate over time"
      icon={<LineChart size={20} />}
      color="primary"
      onMove={onMove}
    >
      <div style={{ height: '200px' }}>
        <Chart
          dataSource={DataSource} // ✅ FIX 1: Correct prop name
          chartType="line"
          dataOptions={{
            category: [retensa_kpi_overview_csv.timeframe_start],
            value: [
              // ✅ FIX 2: Re-add measureFactory wrapper
              measureFactory.sum(
                retensa_kpi_overview_csv.turnover_rate_pct,
                'Turnover Rate'
              ),
            ],
          }}
          onBeforeRender={handleBeforeRender}
        />
      </div>
    </BaseKPIWidget>
  );
};

export default TurnoverTrendsWidget;