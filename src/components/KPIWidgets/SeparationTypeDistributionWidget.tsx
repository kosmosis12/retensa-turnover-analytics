import React from 'react';
import { PieChart as PieChartIcon } from 'lucide-react';
import { PieChart } from '@sisense/sdk-ui';
import type { HighchartsOptions } from '@sisense/sdk-ui';
// Import the main DataSource
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
  // Define the callback function to customize chart options before rendering
  const handleBeforeRender = (options: HighchartsOptions) => {
    // Safely set advanced options for the pie chart
    options.plotOptions = {
      ...options.plotOptions,
      pie: {
        ...options.plotOptions?.pie,
        innerSize: '60%', // Set the innerSize here for the donut effect
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f}%', // Format to show percentage
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
          dataSet={DataSource} // Use the main 'DataSource' for the dataSet prop
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
          // Remove innerSize prop and use the callback instead
          onBeforeRender={handleBeforeRender}
        />
      </div>
    </BaseKPIWidget>
  );
};

export default SeparationTypeDistributionWidget;
