import React from 'react';
import { Users } from 'lucide-react';
import { PieChart, useExecuteQuery } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import type { HighchartsOptions } from '@sisense/sdk-ui';
import {
  DataSource,
  retensa_kpi_overview_csv,
  retensa_separation_type_distribution_csv,
} from '../../RetensaTurnoverAnalytics.ts';
import BaseKPIWidget from '../BaseKPIWidget';

interface SeparationsOverviewWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const SeparationsOverviewWidget: React.FC<SeparationsOverviewWidgetProps> = ({
  id,
  onMove,
}) => {
  const { data, isLoading } = useExecuteQuery({
    dataSource: DataSource,
    measures: [
      measureFactory.sum(
        retensa_kpi_overview_csv.total_separations,
        'Total Separations'
      ),
    ],
  });

  const totalSeparations = data?.rows[0]?.[0]?.data ?? 0;

  const handleBeforeRender = (options: HighchartsOptions) => {
    // All specific Highcharts options go here
    options.plotOptions = {
      ...options.plotOptions,
      pie: {
        ...options.plotOptions?.pie,
        innerSize: '50%', // Moved innerSize into the callback
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f}%',
        },
      },
    };
    return options;
  };

  return (
    <BaseKPIWidget
      id={id}
      title="Separations Overview"
      value={isLoading ? 'Loading...' : totalSeparations}
      subtitle="Total with voluntary/involuntary breakdown"
      icon={<Users size={20} />}
      color="danger"
      onMove={onMove}
    >
      <div style={{ height: '160px' }}>
        <PieChart
          dataSet={DataSource}
          dataOptions={{
            category: [
              retensa_separation_type_distribution_csv.separation_type,
            ],
            value: [retensa_separation_type_distribution_csv.count],
          }}
          styleOptions={{
            legend: {
              enabled: true,
              position: 'bottom',
            },
          }}
          // The onBeforeRender prop is used for all advanced customizations
          onBeforeRender={handleBeforeRender}
        />
      </div>
    </BaseKPIWidget>
  );
};

export default SeparationsOverviewWidget;