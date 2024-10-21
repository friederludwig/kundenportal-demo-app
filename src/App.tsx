import { FC } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './ag-grid-theme-builder.css'
import Header from './components/System/Header';
import Sidebar from './components/System/Sidebar';
import PageWrapper from './components/System/PageWrapper';

const App: FC = () => {
    return (
        <PrimeReactProvider>
            <div>
                <Header/>
                <Sidebar/>
                <PageWrapper/>
            </div>
        </PrimeReactProvider>
    );
};

export default App;
