import { FC } from 'react';
import { Archive, Plus, TrendingUp } from 'react-feather';
import SystemButton from '../System/Button';
import Container from '../System/Container';
import ProductList from './ProductTable';

const Products: FC = () => {
    return (
        <div className="grid gap-4">
            <Container>
                <div className="flex gap-4 justify-between items-center">
                    <h1 className="text-2xl font-semibold">Produktkatalog</h1>
                    <div className="flex gap-2 items-center">
                        <SystemButton style="primary-negative">
                            Neues Produkt
                        </SystemButton>
                        <SystemButton style="primary-negative">
                            Anbindungen
                        </SystemButton>
                    </div>
                </div>
            </Container>

            <Container noPadding>
                <ProductList />
            </Container>
        </div>
    );
};

export default Products;
