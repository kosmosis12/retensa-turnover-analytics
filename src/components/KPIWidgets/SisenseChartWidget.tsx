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
    switch (measure) {
      case 'active_population':
        return measureFactory.sum(
          retensa_kpi_overview_csv.active_population,
          'Active Population',
        );
      case 'total_separations':
        return measureFactory.sum(
          retensa_kpi_overview_csv.total_separations,
          'Total Separations',
        );
      case 'turnover_rate':
      default:
        return measureFactory.sum(
          retensa_kpi_overview_csv.turnover_rate_pct,
          'Turnover Rate',
        );
    }
  };

  const getIcon = () => {
    switch (chartType) {
      case 'bar':
        return <BarChart size={20} />;
      case 'line':
      default:
        return <LineChart size={20} />;
    }
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

