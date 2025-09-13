import React from 'react';
import { LineChart } from 'lucide-react';
import { Chart, type HighchartsOptions } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import {
  DataSource,
  retensa_kpi_overview_csv,
} from '../../RetensaTurnoverAnalytics.ts';
import BaseKPIWidget from '../BaseKPIWidget';

interface TurnoverTrendsWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const TurnoverTrendsWidget: React.FC<TurnoverTrendsWidgetProps> = ({
  id,
  onMove,
}) => {
  const handleBeforeRender = (options: HighchartsOptions) => {
    options.plotOptions = {
      ...options.plotOptions,
      line: {
        ...options.plotOptions?.line,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%',
        },
        marker: {
          enabled: true,
        },
      },
    };
    
    options.legend = {
      ...options.legend,
      enabled: true,
      align: 'center',
      verticalAlign: 'bottom',
    };

    return options;
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
          dataSet={DataSource}
          chartType="line"
          dataOptions={{
            category: [retensa_kpi_overview_csv.timeframe_start],
            value: [
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