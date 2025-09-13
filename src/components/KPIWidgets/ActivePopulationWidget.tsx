import React from 'react';
import { Users } from 'lucide-react';
import { Chart, useExecuteQuery } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import { DataSource, retensa_kpi_overview_csv } from '../../RetensaTurnoverAnalytics.ts';
import BaseKPIWidget from '../BaseKPIWidget';

interface ActivePopulationWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const ActivePopulationWidget: React.FC<ActivePopulationWidgetProps> = ({ id, onMove }) => {
  const { data, isLoading } = useExecuteQuery({
    dataSource: DataSource,
    measures: [
      measureFactory.sum(
        retensa_kpi_overview_csv.active_population,
        'Active Population',
      ),
    ],
  });

  const activePopulation = data?.rows[0]?.[0]?.data ?? 0;

  return (
    <BaseKPIWidget
      id={id}
      title="Active Population"
      value={isLoading ? 'Loading…' : activePopulation.toLocaleString()}
      subtitle="Current employees"
      icon={<Users size={20} />}
      color="primary"
      onMove={onMove}
    >
      <div style={{ marginTop: '16px', height: '120px' }}>
        <Chart
          dataSet={DataSource}
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
