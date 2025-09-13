import React from 'react';
import { Clock } from 'lucide-react';
import { Chart } from '@sisense/sdk-ui';
import type { HighchartsOptions } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data'; // Import measureFactory
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
  // ... (styling function remains the same)

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
          dataSource={DataSource} // ✅ FIX 1: Correct prop name
          chartType="bar"
          dataOptions={{
            category: [retensa_voluntary_turnover_by_tenure_csv.tenure_bucket],
            value: [
              // ✅ FIX 2: Add measureFactory wrapper
              measureFactory.sum(
                retensa_voluntary_turnover_by_tenure_csv.voluntary_turnover_rate_pct
              ),
            ],
          }}
          styleOptions={{}}
          onBeforeRender={handleBeforeRender}
        />
      </div>
    </BaseKPIWidget>
  );
};

export default TenureTurnoverWidget;