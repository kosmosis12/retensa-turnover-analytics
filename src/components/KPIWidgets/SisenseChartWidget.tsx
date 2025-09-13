import React from 'react';
import { LineChart, BarChart } from 'lucide-react';
import { Chart } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import { DataSource, retensa_kpi_overview_csv } from '../../RetensaTurnoverAnalytics.ts';
import BaseKPIWidget from '../BaseKPIWidget';

interface SisenseChartWidgetProps {
  id: string;
  title: string;
  chartType: 'line' | 'bar';
  measure: string;
  onMove?: (dragId: string, targetId: string) => void;
}

const SisenseChartWidget: React.FC<SisenseChartWidgetProps> = ({
  id,
  title,
  chartType,
  measure,
  onMove,
}) => {
  const getMeasure = () => {
    // ... (getMeasure function remains the same)
  };

  const getIcon = () => {
    // ... (getIcon function remains the same)
  };

  return (
    <BaseKPIWidget
      id={id}
      title={title}
      value=""
      subtitle="Interactive Chart"
      icon={getIcon()}
      color="primary"
      onMove={onMove}
    >
      <div style={{ height: '200px' }}>
        <Chart
          dataSet={DataSource}
          chartType={chartType}
          dataOptions={{
            category: [retensa_kpi_overview_csv.timeframe_start],
            value: [getMeasure()],
          }}
        />
      </div>
    </BaseKPIWidget>
  );
};

export default SisenseChartWidget;
