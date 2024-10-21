import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';
import DynamicFilter from '../../System/DynamicFilter';
import { productFilter } from './filters';
import { products } from './products';
import { productsColumnDefs } from './tableConfig';

export interface Product {
    id: number;
    name: string;
    price: number;
    availability: string;
    productNumber: string;
    category: string;
    advisorId: number;
    customerGroups: string[];
    rating: number;
    reviewsCount: number;
}

const ProductList: React.FC = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleApplyFilters = (filters: any) => {
        let filtered = products;

        if (filters.search) {
            filtered = filtered.filter(product =>
                product.productNumber.toLowerCase().includes(filters.search.toLowerCase()) ||
                product.name.toLowerCase().includes(filters.search.toLowerCase())
            );
        }
        if (filters.category) {
            filtered = filtered.filter(product => product.category === filters.category);
        }
        if (filters.availability) {
            filtered = filtered.filter(product => product.availability === filters.availability);
        }
        if (filters.priceRange) {
            filtered = filtered.filter(product => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]);
        }
        if (filters.customerGroups.length > 0) {
            filtered = filtered.filter(product =>
                filters.customerGroups.some((group: string) => product.customerGroups.includes(group))
            );
        }

        setFilteredProducts(filtered);
    };

    return (
        <>
            <DynamicFilter filterConfig={productFilter} onApplyFilters={handleApplyFilters} />
            <div className="ag-theme-alpine" style={{ height: '76dvh', width: '100%' }}>

                <AgGridReact<Product>
                    rowData={filteredProducts}
                    columnDefs={productsColumnDefs}
                    pagination={true}
                    paginationPageSize={20}
                />
            </div>
        </>
    );
};

export default ProductList;
