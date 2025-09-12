import React from 'react';
import { Users } from 'lucide-react';
import { Chart } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import { retensa_kpi_overview_csv } from '../../RetensaTurnoverAnalytics';
import BaseKPIWidget from '../BaseKPIWidget';

interface TotalSeparationsWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const TotalSeparationsWidget: React.FC<TotalSeparationsWidgetProps> = ({
  id,
  onMove
}) => {
  return (
    <BaseKPIWidget
      id={id}
      title="Total Separations"
      value=""
      subtitle="All departures"
      icon={<Users size={20} />}
      color="danger"
      onMove={onMove}
    >
      <div style={{ marginTop: '16px', height: '120px' }}>
        <Chart
          dataSource={retensa_kpi_overview_csv}
          chartType="indicator"
          dataOptions={{
            value: [measureFactory.sum(retensa_kpi_overview_csv.total_separations)],
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

export default TotalSeparationsWidget;
