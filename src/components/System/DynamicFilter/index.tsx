import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { Tooltip } from 'primereact/tooltip';
import { useState } from 'react';
import { ArrowDownCircle, Info, Search, X } from 'react-feather';
import { getDynamicFilterStyles } from './styles';

const DynamicFilter = ({ filterConfig, onApplyFilters }) => {
    const styles = getDynamicFilterStyles();

    const initialFilters = filterConfig.filters.reduce((acc, filter) => {
        acc[filter.name] = filter.type === 'multiSelect' ? [] : '';
        return acc;
    }, {});

    const [filters, setFilters] = useState(initialFilters);

    const updateFilter = (key, value) => {
        const updatedFilters = { ...filters, [key]: value };
        setFilters(updatedFilters);
        onApplyFilters(updatedFilters);
    };

    const resetFilters = () => {
        setFilters(initialFilters);
        onApplyFilters(initialFilters);
    };

    const getNumberOfActiveFilters = () => {
        let counter = 0;
        Object.values(filters).forEach(f => {
            if (f && (Array.isArray(f) ? f.length > 0 : f)) counter++;
        });
        return counter || '';
    };

    return (
        <div className="bg-primary-100 pb-2 rounded-t-md relative border-b">
            <h3 className={styles.label}>
                Filter
            </h3>
            <div className={styles.hero}>
                {filterConfig.filters.map((filter, index) => (
                    <div key={index} className={`col-span-${filter.span || 5}`}>
                        <label>{filter.title}</label>
                        {filter.type === 'select' && (
                            <Dropdown
                                value={filters[filter.name]}
                                options={filter.options.map(opt => ({ label: opt.key, value: opt.value }))}
                                onChange={(e) => updateFilter(filter.name, e.value)}
                                placeholder={filter.placeholder}
                                className="w-full text-sm"
                            />
                        )}
                        {filter.type === 'multiSelect' && (
                            <MultiSelect
                                value={filters[filter.name]}
                                options={filter.options.map(opt => ({ label: opt.key, value: opt.value }))}
                                onChange={(e) => updateFilter(filter.name, e.value)}
                                placeholder={filter.placeholder}
                                className="w-full text-sm"
                            />
                        )}
                        {filter.type === 'text' && (
                            <IconField iconPosition="left">
                                <InputIcon className="-translate-y-[3px] text-gray-400">
                                    <Search size={22} />
                                </InputIcon>
                                <InputText
                                    value={filters[filter.name]}
                                    onChange={(e) => updateFilter(filter.name, e.target.value)}
                                    placeholder={filter.placeholder}
                                    className="w-full p-3 text-sm pl-11"
                                />
                            </IconField>
                        )}
                    </div>
                ))}

                <div class={styles.actions}>
                    <Button className={`${styles.actionBtn} extended-filters-btn`}>
                        <ArrowDownCircle size={22} />
                    </Button>
                    <Tooltip position="left" target=".extended-filters-btn">
                        <div className="flex items-center gap-2">
                            <Info size={16} />
                            <p className="text-xs">
                                Erweiterte Filter-Einstellungen sind in der Demo deaktiviert.
                            </p>
                        </div>
                    </Tooltip>

                    <Button
                        className={`${styles.actionBtn} reset-filters-btn`}
                        onClick={resetFilters}
                        disabled={getNumberOfActiveFilters() === ""}>
                        <X size={22} />
                        {getNumberOfActiveFilters() &&
                            <span className={styles.filterCount}>{getNumberOfActiveFilters()}</span>
                        }
                    </Button>
                    <Tooltip position="left" target=".reset-filters-btn">
                        <div className="flex items-center gap-2">
                            <p className="text-xs">
                                Filter zurücksetzten
                            </p>
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default DynamicFilter;
