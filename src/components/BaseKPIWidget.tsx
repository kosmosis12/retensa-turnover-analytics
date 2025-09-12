import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import './BaseKPIWidget.css';

interface BaseKPIWidgetProps {
  id: string;
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'secondary';
  onMove?: (dragId: string, targetId: string) => void;
  children?: React.ReactNode;
}

const BaseKPIWidget: React.FC<BaseKPIWidgetProps> = ({
  id,
  title,
  value,
  subtitle,
  trend,
  icon,
  color = 'primary',
  onMove,
  children
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'widget',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'widget',
    drop: (item: { id: string }) => {
      if (item.id !== id && onMove) {
        onMove(item.id, id);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const getColorClass = () => {
    switch (color) {
      case 'success': return 'kpi-widget--success';
      case 'warning': return 'kpi-widget--warning';
      case 'danger': return 'kpi-widget--danger';
      case 'secondary': return 'kpi-widget--secondary';
      default: return 'kpi-widget--primary';
    }
  };

  const formatValue = (val: string | number) => {
    if (typeof val === 'number') {
      return val.toLocaleString();
    }
    return val;
  };

  const formatTrend = (trendValue: number) => {
    const absValue = Math.abs(trendValue);
    return `${trendValue > 0 ? '+' : ''}${trendValue.toFixed(1)}%`;
  };

  return (
    <div
      ref={(node) => {
        drag(drop(node));
      }}
      className={`kpi-widget ${getColorClass()} ${isDragging ? 'kpi-widget--dragging' : ''} ${isOver ? 'kpi-widget--drag-over' : ''}`}
    >
      <div className="kpi-widget__header">
        <div className="kpi-widget__title">
          {icon && <span className="kpi-widget__icon">{icon}</span>}
          <h3>{title}</h3>
        </div>
        <div className="kpi-widget__drag-handle">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <circle cx="2" cy="2" r="1"/>
            <circle cx="6" cy="2" r="1"/>
            <circle cx="10" cy="2" r="1"/>
            <circle cx="2" cy="6" r="1"/>
            <circle cx="6" cy="6" r="1"/>
            <circle cx="10" cy="6" r="1"/>
            <circle cx="2" cy="10" r="1"/>
            <circle cx="6" cy="10" r="1"/>
            <circle cx="10" cy="10" r="1"/>
          </svg>
        </div>
      </div>
      
      <div className="kpi-widget__content">
        <div className="kpi-widget__value">
          {formatValue(value)}
        </div>
        {subtitle && (
          <div className="kpi-widget__subtitle">
            {subtitle}
          </div>
        )}
        {trend && (
          <div className={`kpi-widget__trend ${trend.isPositive ? 'kpi-widget__trend--positive' : 'kpi-widget__trend--negative'}`}>
            <span className="kpi-widget__trend-icon">
              {trend.isPositive ? '↗' : '↘'}
            </span>
            {formatTrend(trend.value)}
          </div>
        )}
      </div>

      {children && (
        <div className="kpi-widget__children">
          {children}
        </div>
      )}
    </div>
  );
};

export default BaseKPIWidget;
