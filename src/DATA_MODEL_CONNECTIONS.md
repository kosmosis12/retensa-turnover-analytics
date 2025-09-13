# Retensa Turnover Analytics - Data Model Connections

## Overview
All KPI widgets now directly connect to the Sisense data model defined in `RetensaTurnoverAnalytics.ts`. Each widget uses the appropriate Sisense SDK components to pull real-time data from the defined dimensions.

## Widget Data Connections

### 1. ActivePopulationWidget
- **Data Source**: `retensa_kpi_overview_csv`
- **Measure**: `active_population` (sum)
- **Component**: Sisense `KpiWidget`
- **Purpose**: Shows current employee count

### 2. TurnoverRateWidget
- **Data Source**: `retensa_kpi_overview_csv`
- **Measure**: `turnover_rate_pct` (average)
- **Component**: Sisense `KpiWidget`
- **Purpose**: Shows current period turnover percentage

### 3. AnnualizedTurnoverWidget
- **Data Source**: `retensa_kpi_overview_csv`
- **Measure**: `annualized_turnover_rate_pct` (average)
- **Component**: Sisense `KpiWidget`
- **Purpose**: Shows projected yearly turnover rate

### 4. TotalSeparationsWidget
- **Data Source**: `retensa_kpi_overview_csv`
- **Measure**: `total_separations` (sum)
- **Component**: Sisense `KpiWidget`
- **Purpose**: Shows total departures count

### 5. VoluntarySeparationsWidget
- **Data Source**: `retensa_kpi_overview_csv`
- **Measure**: `total_voluntary_separations` (sum)
- **Component**: Sisense `KpiWidget`
- **Purpose**: Shows employee-initiated departures

### 6. InvoluntarySeparationsWidget
- **Data Source**: `retensa_kpi_overview_csv`
- **Measure**: `total_involuntary_separations` (sum)
- **Component**: Sisense `KpiWidget`
- **Purpose**: Shows company-initiated departures

### 7. SeparationTypeDistributionWidget
- **Data Source**: `retensa_separation_type_distribution_csv`
- **Category**: `separation_type`
- **Value**: `count`
- **Component**: Sisense `Chart` (pie chart)
- **Purpose**: Shows breakdown of separation types

### 8. TenureTurnoverWidget
- **Data Source**: `retensa_voluntary_turnover_by_tenure_csv`
- **Category**: `tenure_bucket`
- **Value**: `voluntary_turnover_rate_pct`
- **Component**: Sisense `Chart` (column chart)
- **Purpose**: Shows voluntary turnover rates by tenure

### 9. RelativeDifferenceWidget
- **Data Source**: `retensa_relative_difference_by_tenure_csv`
- **Category**: `tenure_bucket`
- **Value**: `relative_difference_pct`
- **Component**: Sisense `Chart` (bar chart)
- **Purpose**: Shows relative differences by tenure from baseline

### 10. SisenseChartWidget
- **Data Source**: `retensa_kpi_overview_csv`
- **Category**: `timeframe_start` (date dimension)
- **Value**: Configurable measure (turnover_rate_pct by default)
- **Component**: Sisense `Chart` (line chart)
- **Purpose**: Shows trends over time

## Key Features

### Data Integration
- All widgets connect directly to Sisense data model
- No hardcoded sample data
- Real-time data updates when connected to Sisense instance
- Proper data source configuration with `live: false` for development

### Drag & Drop
- Uses `react-dnd` with HTML5 backend
- Smooth drag animations and visual feedback
- Persistent widget ordering during session

### Modern UI
- Phosphor React icons for professional appearance
- Roboto font for clean typography
- Modern color palette with semantic colors
- Responsive design for all screen sizes

### Sisense Integration
- Uses `@sisense/sdk-ui` components
- Proper measure factories (sum, average)
- Date dimension support for time-based charts
- Chart type variety (pie, column, bar, line)

## Configuration Notes

1. **SisenseContextProvider**: Configured in `main.tsx` with placeholder URL
2. **Data Source**: All widgets use the "Retensa Turnover Analytics" data source
3. **Live Data**: Set to `false` for development, change to `true` for production
4. **Chart Types**: Optimized for different data visualization needs

## Next Steps

1. Update SisenseContextProvider URL to your actual Sisense instance
2. Configure authentication if required
3. Set `live: true` in data source configurations for production
4. Add error handling for data connection failures
5. Implement data refresh intervals if needed

