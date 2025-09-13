import React from 'react';
import { TrendingDown } from 'lucide-react';
import { Chart } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import { DataSource, retensa_relative_difference_by_tenure_csv } from '../../RetensaTurnoverAnalytics.ts';
import BaseKPIWidget from '../BaseKPIWidget';

interface RelativeDifferenceWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const RelativeDifferenceWidget: React.FC<RelativeDifferenceWidgetProps> = ({
  id,
  onMove,
}) => {
  return (
    <BaseKPIWidget
      id={id}
      title="Relative Difference by Tenure"
      value=""
      subtitle="Difference from baseline"
      icon={<TrendingDown size={20} />}
      color="secondary"
      onMove={onMove}
    >
      <div style={{ height: '200px' }}>
        <Chart
          dataSet={DataSource}
          chartType="bar"
          dataOptions={{
            category: [
              retensa_relative_difference_by_tenure_csv.tenure_bucket,
            ],
            value: [
              measureFactory.sum(
                retensa_relative_difference_by_tenure_csv.relative_difference_pct
              ),
            ],
          }}
        />
      </div>
    </BaseKPIWidget>
  );
};

export default RelativeDifferenceWidget;