import Layout from "./layout/layout";
import { Routes } from "./Routes";
import { CatalogProvider } from './store';

function App() {
    return (
        <CatalogProvider>
            <Layout>
                <Routes />
            </Layout>
        </CatalogProvider>
    );
}

export default App;
