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
      case 'turnover_rate':
        return measureFactory.sum(retensa_kpi_overview_csv.turnover_rate_pct);
      case 'annualized_rate':
        return measureFactory.sum(
          retensa_kpi_overview_csv.annualized_turnover_rate_pct
        );
      case 'total_separations':
        return measureFactory.sum(retensa_kpi_overview_csv.total_separations);
      case 'voluntary_separations':
        return measureFactory.sum(
          retensa_kpi_overview_csv.total_voluntary_separations
        );
      case 'involuntary_separations':
        return measureFactory.sum(
          retensa_kpi_overview_csv.total_involuntary_separations
        );
      default:
        return measureFactory.sum(retensa_kpi_overview_csv.active_population);
    }
  };

  const getIcon = () => {
    return chartType === 'line' ? (
      <LineChart size={20} />
    ) : (
      <BarChart size={20} />
    );
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
      <div style={{ marginTop: '16px', height: '200px' }}>
        <Chart
          dataSet={DataSource}
          chartType={chartType}
          dataOptions={{
            category: [retensa_kpi_overview_csv.timeframe_start],
            value: [getMeasure()],
          }}
          styleOptions={{
            width: '100%',
            height: '200px',
          }}
        />
      </div>
    </BaseKPIWidget>
  );
};

export default SisenseChartWidget;
