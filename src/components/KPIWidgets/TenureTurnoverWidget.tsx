import React from 'react';
import { Clock } from 'lucide-react';
import { Chart } from '@sisense/sdk-ui';
import { retensa_voluntary_turnover_by_tenure_csv } from '../../RetensaTurnoverAnalytics';
import BaseKPIWidget from '../BaseKPIWidget';

interface TenureTurnoverWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const TenureTurnoverWidget: React.FC<TenureTurnoverWidgetProps> = ({
  id,
  onMove
}) => {
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
          dataSource={retensa_voluntary_turnover_by_tenure_csv}
          chartType="column"
          dataOptions={{
            category: [retensa_voluntary_turnover_by_tenure_csv.tenure_bucket],
            value: [retensa_voluntary_turnover_by_tenure_csv.voluntary_turnover_rate_pct],
          }}
          styleOptions={{
            width: '100%',
            height: '200px',
          }}
        />
      </div>
    </BaseKPIWidget>
  );
};

export default TenureTurnoverWidget;
