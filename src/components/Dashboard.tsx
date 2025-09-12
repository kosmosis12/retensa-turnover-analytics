import React, { useState, useCallback } from 'react';
import {
  ActivePopulationWidget,
  TurnoverRateWidget,
  AnnualizedTurnoverWidget,
  SeparationsOverviewWidget,
  SeparationTypeDistributionWidget,
  TenureTurnoverWidget,
  RelativeDifferenceWidget,
  SisenseChartWidget
} from './KPIWidgets';
import './Dashboard.css';

// Restored missing interface
interface WidgetData {
  id: string;
  type: string;
  position: number;
}

// Restored missing interface
interface DashboardProps {
  // No props needed
}

const Dashboard: React.FC<DashboardProps> = () => {
  const [widgetOrder, setWidgetOrder] = useState<WidgetData[]>([
    { id: 'active-population', type: 'ActivePopulation', position: 0 },
    { id: 'turnover-rate', type: 'TurnoverRate', position: 1 },
    { id: 'annualized-turnover', type: 'AnnualizedTurnover', position: 2 },
    { id: 'separations-overview', type: 'SeparationsOverview', position: 3 },
    { id: 'separation-types', type: 'SeparationTypes', position: 4 },
    { id: 'tenure-turnover', type: 'TenureTurnover', position: 5 },
    { id: 'relative-difference', type: 'RelativeDifference', position: 6 },
    { id: 'turnover-chart', type: 'SisenseChart', position: 7 },
  ]);

  // Restored the handleWidgetMove function for drag-and-drop
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
      case 'SeparationsOverview':
        return <SeparationsOverviewWidget {...commonProps} />;
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

  // Restored the missing return statement
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
