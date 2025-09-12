import React from 'react';
import { PieChart } from 'lucide-react';
import { Chart } from '@sisense/sdk-ui';
import { retensa_separation_type_distribution_csv } from '../../RetensaTurnoverAnalytics';
import BaseKPIWidget from '../BaseKPIWidget';

interface SeparationTypeDistributionWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const SeparationTypeDistributionWidget: React.FC<SeparationTypeDistributionWidgetProps> = ({
  id,
  onMove
}) => {
  return (
    <BaseKPIWidget
      id={id}
      title="Separation Types"
      value=""
      subtitle="Distribution breakdown"
      icon={<PieChart size={20} />}
      color="secondary"
      onMove={onMove}
    >
      <div style={{ marginTop: '16px', height: '200px' }}>
        <Chart
          dataSource={retensa_separation_type_distribution_csv}
          chartType="pie"
          dataOptions={{
            category: [retensa_separation_type_distribution_csv.separation_type],
            value: [retensa_separation_type_distribution_csv.count],
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

export default SeparationTypeDistributionWidget;
