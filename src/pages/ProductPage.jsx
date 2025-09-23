import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import MainContent from "../components/MainContent.jsx";
import ProductForm from "../components/ProductForm.jsx";

function ProductPage() {
  const [activeSidebarItem, setActiveSidebarItem] = useState("create-product");
  const [activeTab, setActiveTab] = useState("product");

  const handleSidebarItemClick = (itemId) => {
    setActiveSidebarItem(itemId);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="app-layout">
      <Sidebar
        activeItem={activeSidebarItem}
        onItemClick={handleSidebarItemClick}
      />
      <div className="main-layout">
        <Header
          title="Название продукта"
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
        <MainContent>
          <ProductForm />
        </MainContent>
      </div>
    </div>
  );
}

export default ProductPage;
