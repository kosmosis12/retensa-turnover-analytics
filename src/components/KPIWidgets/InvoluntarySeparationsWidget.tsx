import React from 'react';
import { UserX } from 'lucide-react';
import { Chart } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import { DataSource, retensa_kpi_overview_csv } from '../../RetensaTurnoverAnalytics.ts';
import BaseKPIWidget from '../BaseKPIWidget';

interface InvoluntarySeparationsWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const InvoluntarySeparationsWidget: React.FC<InvoluntarySeparationsWidgetProps> = ({
  id,
  onMove
}) => {
  return (
    <BaseKPIWidget
      id={id}
      title="Involuntary Separations"
      value=""
      subtitle="Company-initiated"
      icon={<UserX size={20} />}
      color="danger"
      onMove={onMove}
    >
      <div style={{ height: '120px' }}>
        <Chart
          dataSet={DataSource}
          chartType="indicator"
          dataOptions={{
            value: [measureFactory.sum(retensa_kpi_overview_csv.total_involuntary_separations)],
          }}
        />
      </div>
    </BaseKPIWidget>
  );
};

export default InvoluntarySeparationsWidget;
