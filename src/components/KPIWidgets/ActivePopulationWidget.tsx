import React from 'react';
import { Users } from 'lucide-react';
import { Chart } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import { retensa_kpi_overview_csv } from '../../RetensaTurnoverAnalytics.ts';
import BaseKPIWidget from '../BaseKPIWidget';

interface ActivePopulationWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const ActivePopulationWidget: React.FC<ActivePopulationWidgetProps> = ({
  id,
  onMove,
}) => {
  return (
    <BaseKPIWidget
      id={id}
      title="Active Population"
      value=""
      subtitle="Current employees"
      icon={<Users size={20} />}
      color="primary"
      onMove={onMove}
    >
      <div style={{ marginTop: '16px', height: '120px' }}>
        <Chart
          dataSource={retensa_kpi_overview_csv}
          chartType="indicator"
          dataOptions={{
            value: [
              measureFactory.sum(retensa_kpi_overview_csv.active_population),
            ],
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

export default ActivePopulationWidget;