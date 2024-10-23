import { FC } from 'react';
import SystemButton from '../System/Button';
import Container from '../System/Container';
import ProductList from './ProductTable';
import { X } from 'react-feather';
import TutorialOverlay from '../System/TutorialOverlay';
import { PageRoutes } from '../../lib/store/router.store';

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
            <TutorialOverlay
                title='Individuelle Filter und Suche'
                description='Nutzen Sie den Filter, um die Auswahl nach Ihren Wünschen einzugrenzen. Die Ergebnisse werden in Echtzeit aktualisiert. So finden Sie genau das, was Sie suchen!'
                focusPoint={{ size: 100, left: 360, top: 230 }} 
                forPage={PageRoutes.PRODUCT_LIST}/>
        </div>
    );
};

export default Products;
