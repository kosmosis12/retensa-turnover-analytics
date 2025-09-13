import React from 'react';
import { PieChart as PieChartIcon } from 'lucide-react';
import { PieChart, type HighchartsOptions } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import {
  DataSource,
  retensa_separation_type_distribution_csv,
} from '../../RetensaTurnoverAnalytics.ts';
import BaseKPIWidget from '../BaseKPIWidget';

interface SeparationTypeDistributionWidgetProps {
  id: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const SeparationTypeDistributionWidget: React.FC<
  SeparationTypeDistributionWidgetProps
> = ({ id, onMove }) => {
  const handleBeforeRender = (options: HighchartsOptions) => {
    options.plotOptions = {
      ...options.plotOptions,
      pie: {
        ...options.plotOptions?.pie,
        innerSize: '60%',
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
      title="Separation Types"
      value=""
      subtitle="Distribution breakdown"
      icon={<PieChartIcon size={20} />}
      color="secondary"
      onMove={onMove}
    >
      <div style={{ marginTop: '16px', height: '200px' }}>
        <PieChart
          dataSet={DataSource}
          dataOptions={{
            category: [
              retensa_separation_type_distribution_csv.separation_type,
            ],
            value: [
              measureFactory.sum(retensa_separation_type_distribution_csv.count),
            ],
          }}
          styleOptions={{
            legend: {
              enabled: true,
              position: 'bottom',
            },
          }}
          onBeforeRender={handleBeforeRender}
        />
      </div>
    </BaseKPIWidget>
  );
};

export default SeparationTypeDistributionWidget;