import type { Dimension, DateDimension, Attribute, DataSourceInfo } from '@sisense/sdk-data';

import { createAttribute, createDateDimension, createDimension } from '@sisense/sdk-data';

export const DataSource: DataSourceInfo = {
    title: 'Retensa Turnover Analytics',
    type: 'elasticube',
};

interface retensa_data_dictionary_csvDimension extends Dimension {
    retensa_data_dictionary_csv_description: Attribute;
    file: Attribute;
    key_fields: Attribute;
}
export const retensa_data_dictionary_csv = createDimension({
    name: 'retensa_data_dictionary.csv',
    retensa_data_dictionary_csv_description: createAttribute({
        name: '[retensa_data_dictionary.csv.description]',
        type: 'text-attribute',
        expression: '[retensa_data_dictionary.csv.description]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    file: createAttribute({
        name: 'file',
        type: 'text-attribute',
        expression: '[retensa_data_dictionary.csv.file]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    key_fields: createAttribute({
        name: 'key_fields',
        type: 'text-attribute',
        expression: '[retensa_data_dictionary.csv.key_fields]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
}) as retensa_data_dictionary_csvDimension;

interface retensa_kpi_overview_csvDimension extends Dimension {
    active_population: Attribute;
    annualized_turnover_rate_pct: Attribute;
    total_involuntary_separations: Attribute;
    total_separations: Attribute;
    total_voluntary_separations: Attribute;
    turnover_rate_pct: Attribute;
    timeframe_end: DateDimension;
    timeframe_start: DateDimension;
}
export const retensa_kpi_overview_csv = createDimension({
    name: 'retensa_kpi_overview.csv',
    active_population: createAttribute({
        name: 'active_population',
        type: 'numeric-attribute',
        expression: '[retensa_kpi_overview.csv.active_population]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    annualized_turnover_rate_pct: createAttribute({
        name: 'annualized_turnover_rate_pct',
        type: 'numeric-attribute',
        expression: '[retensa_kpi_overview.csv.annualized_turnover_rate_pct]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    total_involuntary_separations: createAttribute({
        name: 'total_involuntary_separations',
        type: 'numeric-attribute',
        expression: '[retensa_kpi_overview.csv.total_involuntary_separations]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    total_separations: createAttribute({
        name: 'total_separations',
        type: 'numeric-attribute',
        expression: '[retensa_kpi_overview.csv.total_separations]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    total_voluntary_separations: createAttribute({
        name: 'total_voluntary_separations',
        type: 'numeric-attribute',
        expression: '[retensa_kpi_overview.csv.total_voluntary_separations]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    turnover_rate_pct: createAttribute({
        name: 'turnover_rate_pct',
        type: 'numeric-attribute',
        expression: '[retensa_kpi_overview.csv.turnover_rate_pct]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    timeframe_end: createDateDimension({
        name: 'timeframe_end',
        expression: '[retensa_kpi_overview.csv.timeframe_end (Calendar)]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    timeframe_start: createDateDimension({
        name: 'timeframe_start',
        expression: '[retensa_kpi_overview.csv.timeframe_start (Calendar)]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
}) as retensa_kpi_overview_csvDimension;

interface retensa_rates_table_csvDimension extends Dimension {
    annual_change_pct: Attribute;
    annualized_rate_pct: Attribute;
    category: Attribute;
    monthly_change_pct: Attribute;
    rate_pct: Attribute;
    separation_type_key: Attribute;
}
export const retensa_rates_table_csv = createDimension({
    name: 'retensa_rates_table.csv',
    annual_change_pct: createAttribute({
        name: 'annual_change_pct',
        type: 'numeric-attribute',
        expression: '[retensa_rates_table.csv.annual_change_pct]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    annualized_rate_pct: createAttribute({
        name: 'annualized_rate_pct',
        type: 'numeric-attribute',
        expression: '[retensa_rates_table.csv.annualized_rate_pct]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    category: createAttribute({
        name: 'category',
        type: 'text-attribute',
        expression: '[retensa_rates_table.csv.category]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    monthly_change_pct: createAttribute({
        name: 'monthly_change_pct',
        type: 'numeric-attribute',
        expression: '[retensa_rates_table.csv.monthly_change_pct]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    rate_pct: createAttribute({
        name: 'rate_pct',
        type: 'numeric-attribute',
        expression: '[retensa_rates_table.csv.rate_pct]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    separation_type_key: createAttribute({
        name: 'separation_type_key',
        type: 'text-attribute',
        expression: '[retensa_rates_table.csv.separation_type_key]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
}) as retensa_rates_table_csvDimension;

interface retensa_relative_difference_by_tenure_csvDimension extends Dimension {
    relative_difference_pct: Attribute;
    tenure_bucket: Attribute;
}
export const retensa_relative_difference_by_tenure_csv = createDimension({
    name: 'retensa_relative_difference_by_tenure.csv',
    relative_difference_pct: createAttribute({
        name: 'relative_difference_pct',
        type: 'numeric-attribute',
        expression: '[retensa_relative_difference_by_tenure.csv.relative_difference_pct]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    tenure_bucket: createAttribute({
        name: 'tenure_bucket',
        type: 'text-attribute',
        expression: '[retensa_relative_difference_by_tenure.csv.tenure_bucket]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
}) as retensa_relative_difference_by_tenure_csvDimension;

interface retensa_sample_separation_events_csvDimension extends Dimension {
    employee_id: Attribute;
    event_id: Attribute;
    separation_type: Attribute;
    tenure_bucket: Attribute;
    event_date: DateDimension;
}
export const retensa_sample_separation_events_csv = createDimension({
    name: 'retensa_sample_separation_events.csv',
    employee_id: createAttribute({
        name: 'employee_id',
        type: 'numeric-attribute',
        expression: '[retensa_sample_separation_events.csv.employee_id]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    event_id: createAttribute({
        name: 'event_id',
        type: 'numeric-attribute',
        expression: '[retensa_sample_separation_events.csv.event_id]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    separation_type: createAttribute({
        name: 'separation_type',
        type: 'text-attribute',
        expression: '[retensa_sample_separation_events.csv.separation_type]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    tenure_bucket: createAttribute({
        name: 'tenure_bucket',
        type: 'text-attribute',
        expression: '[retensa_sample_separation_events.csv.tenure_bucket]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    event_date: createDateDimension({
        name: 'event_date',
        expression: '[retensa_sample_separation_events.csv.event_date (Calendar)]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
}) as retensa_sample_separation_events_csvDimension;

interface retensa_separation_type_distribution_csvDimension extends Dimension {
    count: Attribute;
    percent: Attribute;
    separation_type: Attribute;
}
export const retensa_separation_type_distribution_csv = createDimension({
    name: 'retensa_separation_type_distribution.csv',
    count: createAttribute({
        name: 'count',
        type: 'numeric-attribute',
        expression: '[retensa_separation_type_distribution.csv.count]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    percent: createAttribute({
        name: 'percent',
        type: 'numeric-attribute',
        expression: '[retensa_separation_type_distribution.csv.percent]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    separation_type: createAttribute({
        name: 'separation_type',
        type: 'text-attribute',
        expression: '[retensa_separation_type_distribution.csv.separation_type]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
}) as retensa_separation_type_distribution_csvDimension;

interface retensa_voluntary_turnover_by_tenure_csvDimension extends Dimension {
    tenure_bucket: Attribute;
    voluntary_turnover_rate_pct: Attribute;
}
export const retensa_voluntary_turnover_by_tenure_csv = createDimension({
    name: 'retensa_voluntary_turnover_by_tenure.csv',
    tenure_bucket: createAttribute({
        name: 'tenure_bucket',
        type: 'text-attribute',
        expression: '[retensa_voluntary_turnover_by_tenure.csv.tenure_bucket]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
    voluntary_turnover_rate_pct: createAttribute({
        name: 'voluntary_turnover_rate_pct',
        type: 'numeric-attribute',
        expression: '[retensa_voluntary_turnover_by_tenure.csv.voluntary_turnover_rate_pct]',
        dataSource: { title: 'Retensa Turnover Analytics', live: false },
    }),
}) as retensa_voluntary_turnover_by_tenure_csvDimension;

