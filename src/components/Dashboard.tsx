import React, { useState, useCallback } from 'react';
import {
  ActivePopulationWidget,
  TurnoverRateWidget,
  AnnualizedTurnoverWidget,
  TotalSeparationsWidget,
  VoluntarySeparationsWidget,
  InvoluntarySeparationsWidget,
  SeparationTypeDistributionWidget,
  TenureTurnoverWidget,
  RelativeDifferenceWidget,
  SisenseChartWidget
} from './KPIWidgets';
import './Dashboard.css';

interface WidgetData {
  id: string;
  type: string;
  position: number;
}

interface DashboardProps {
  // No props needed - widgets will connect directly to Sisense data model
}

const Dashboard: React.FC<DashboardProps> = () => {
  const [widgetOrder, setWidgetOrder] = useState<WidgetData[]>([
    { id: 'active-population', type: 'ActivePopulation', position: 0 },
    { id: 'turnover-rate', type: 'TurnoverRate', position: 1 },
    { id: 'annualized-turnover', type: 'AnnualizedTurnover', position: 2 },
    { id: 'total-separations', type: 'TotalSeparations', position: 3 },
    { id: 'voluntary-separations', type: 'VoluntarySeparations', position: 4 },
    { id: 'involuntary-separations', type: 'InvoluntarySeparations', position: 5 },
    { id: 'separation-types', type: 'SeparationTypes', position: 6 },
    { id: 'tenure-turnover', type: 'TenureTurnover', position: 7 },
    { id: 'relative-difference', type: 'RelativeDifference', position: 8 },
    { id: 'turnover-chart', type: 'SisenseChart', position: 9 },
  ]);

  const handleWidgetMove = useCallback((dragId: string, targetId: string) => {
    setWidgetOrder(prevOrder => {
      const dragIndex = prevOrder.findIndex(widget => widget.id === dragId);
      const targetIndex = prevOrder.findIndex(widget => widget.id === targetId);
      
      if (dragIndex === -1 || targetIndex === -1) return prevOrder;
      
      const newOrder = [...prevOrder];
      const draggedWidget = newOrder.splice(dragIndex, 1)[0];
      newOrder.splice(targetIndex, 0, draggedWidget);
      
      return newOrder.map((widget, index) => ({
        ...widget,
        position: index
      }));
    });
  }, []);

  const renderWidget = (widget: WidgetData) => {
    const commonProps = {
      id: widget.id,
      onMove: handleWidgetMove,
    };

    switch (widget.type) {
      case 'ActivePopulation':
        return <ActivePopulationWidget {...commonProps} />;
      
      case 'TurnoverRate':
        return <TurnoverRateWidget {...commonProps} />;
      
      case 'AnnualizedTurnover':
        return <AnnualizedTurnoverWidget {...commonProps} />;
      
      case 'TotalSeparations':
        return <TotalSeparationsWidget {...commonProps} />;
      
      case 'VoluntarySeparations':
        return <VoluntarySeparationsWidget {...commonProps} />;
      
      case 'InvoluntarySeparations':
        return <InvoluntarySeparationsWidget {...commonProps} />;
      
      case 'SeparationTypes':
        return <SeparationTypeDistributionWidget {...commonProps} />;
      
      case 'TenureTurnover':
        return <TenureTurnoverWidget {...commonProps} />;
      
      case 'RelativeDifference':
        return <RelativeDifferenceWidget {...commonProps} />;
      
      case 'SisenseChart':
        return (
          <SisenseChartWidget
            {...commonProps}
            title="Turnover Trends"
            chartType="line"
            measure="turnover_rate"
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Retensa Turnover Analytics</h1>
        <p className="dashboard__subtitle">Drag and drop widgets to customize your dashboard</p>
      </div>
      
      <div className="dashboard__grid">
        {widgetOrder
          .sort((a, b) => a.position - b.position)
          .map(widget => (
            <div key={widget.id} className="dashboard__widget">
              {renderWidget(widget)}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
