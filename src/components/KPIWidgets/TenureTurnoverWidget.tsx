import React from 'react';
import { Clock } from 'lucide-react';
import { Chart } from '@sisense/sdk-ui';
import type { HighchartsOptions } from '@sisense/sdk-ui';
// Import the main DataSource AS WELL AS the specific dimension
import { DataSource, retensa_voluntary_turnover_by_tenure_csv } from '../../RetensaTurnoverAnalytics';
import BaseKPIWidget from '../BaseKPIWidget';

interface TenureTurnoverWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const TenureTurnoverWidget: React.FC<TenureTurnoverWidgetProps> = ({
  id,
  onMove
}) => {
  const handleBeforeRender = (options: HighchartsOptions) => {
    options.plotOptions = {
      ...options.plotOptions,
      bar: {
        ...options.plotOptions?.bar,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%',
        },
      },
    };
    return options;
  };

  return (
    <BaseKPIWidget
      id={id}
      title="Voluntary Turnover by Tenure"
      value=""
      subtitle="By tenure buckets"
      icon={<Clock size={20} />}
      color="warning"
      onMove={onMove}
    >
      <div style={{ marginTop: '16px', height: '200px' }}>
        <Chart
          dataSet={DataSource} // Use the main 'DataSource' for the dataSet prop
          chartType="bar"
          dataOptions={{
            // Use the specific dimension here to define the category and value
            category: [retensa_voluntary_turnover_by_tenure_csv.tenure_bucket],
            value: [retensa_voluntary_turnover_by_tenure_csv.voluntary_turnover_rate_pct],
          }}
          styleOptions={{}}
          onBeforeRender={handleBeforeRender}
        />
      </div>
    </BaseKPIWidget>
  );
};

export default TenureTurnoverWidget;
