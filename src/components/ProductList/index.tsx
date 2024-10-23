import { FC } from "react";
import { PageRoutes } from "../../lib/store/router.store";
import SystemButton from "../System/Button";
import Container from "../System/Container";
import TutorialOverlay from "../System/TutorialOverlay";
import ProductList from "./ProductTable";
import { Filter, Search } from "react-feather";

const Products: FC = () => {
  return (
    <div className="grid gap-4">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold">Produktkatalog</h1>
          <div className="flex items-center gap-2">
            <SystemButton style="primary-negative">Neues Produkt</SystemButton>
            <SystemButton style="primary-negative">Anbindungen</SystemButton>
          </div>
        </div>
      </Container>

      <Container noPadding>
        <ProductList />
      </Container>
      <TutorialOverlay
        title="Nutzen Sie spezifische Filter und Suche"
        description="Nutzen Sie den Filter, um die Auswahl nach Ihren Wünschen einzugrenzen. Die Ergebnisse werden in Echtzeit aktualisiert."
        clipPath="inset(160px 10px 620px 265px round 15px)"
        tooltip={{
          top: "19.5rem",
          left: "17rem",
          arrow: "top",
          icon: <Search size={18} />,
        }}
        forPage={PageRoutes.PRODUCT_LIST}
      />
    </div>
  );
};

export default Products;
