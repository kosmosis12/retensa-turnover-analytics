import React from 'react';
import { Clock } from 'lucide-react';
import { Chart, type HighchartsOptions } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import {
  DataSource,
  retensa_voluntary_turnover_by_tenure_csv,
} from '../../RetensaTurnoverAnalytics.ts';
import BaseKPIWidget from '../BaseKPIWidget';

interface TenureTurnoverWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const TenureTurnoverWidget: React.FC<TenureTurnoverWidgetProps> = ({
  id,
  onMove,
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
      <div style={{ height: '200px' }}>
        <Chart
          dataSet={DataSource}
          chartType="bar"
          dataOptions={{
            category: [retensa_voluntary_turnover_by_tenure_csv.tenure_bucket],
            value: [
              measureFactory.sum(
                retensa_voluntary_turnover_by_tenure_csv.voluntary_turnover_rate_pct
              ),
            ],
          }}
          onBeforeRender={handleBeforeRender}
        />
      </div>
    </BaseKPIWidget>
  );
};

export default TenureTurnoverWidget;