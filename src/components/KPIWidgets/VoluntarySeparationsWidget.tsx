import React from 'react';
import { UserMinus } from 'lucide-react';
import { Chart } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import { DataSource, retensa_kpi_overview_csv } from '../../RetensaTurnoverAnalytics.ts';
import BaseKPIWidget from '../BaseKPIWidget';

interface VoluntarySeparationsWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const VoluntarySeparationsWidget: React.FC<VoluntarySeparationsWidgetProps> = ({
  id,
  onMove
}) => {
  return (
    <BaseKPIWidget
      id={id}
      title="Voluntary Separations"
      value=""
      subtitle="Employee-initiated"
      icon={<UserMinus size={20} />}
      color="warning"
      onMove={onMove}
    >
      <div style={{ marginTop: '16px', height: '120px' }}>
        <Chart
          dataSet={DataSource}
          chartType="indicator"
          dataOptions={{
            value: [measureFactory.sum(retensa_kpi_overview_csv.total_voluntary_separations)],
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

export default VoluntarySeparationsWidget;
