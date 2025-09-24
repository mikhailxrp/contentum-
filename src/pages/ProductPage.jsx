import { useState } from "react";
import ProductForm from "../components/ProductForm.jsx";
import Header from "../components/Header.jsx";
import MainContent from "../components/MainContent.jsx";
import ContentPlan from "../components/ContentPlan.jsx";
import Articles from "../components/Articles.jsx";
import ArticlesIntegration from "../components/ArticlesIntegration.jsx";

function ProductPage() {
  const [activeTab, setActiveTab] = useState("product");
  const tabs = [
    { id: "product", icon: "📋", label: "Продукт" },
    { id: "content-plan", icon: "📊", label: "Контент план" },
    { id: "articles", icon: "📝", label: "Статьи" },
    { id: "integrations", icon: "🔗", label: "Интеграции" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <Header
        title="Название продукта"
        activeTab={activeTab}
        onTabClick={handleTabClick}
        tabs={tabs}
      />
      <MainContent>
        {activeTab === "product" && <ProductForm />}
        {activeTab === "content-plan" && <ContentPlan />}
        {activeTab === "articles" && <Articles />}
        {activeTab === "integrations" && <ArticlesIntegration />}
      </MainContent>
    </>
  );
}

export default ProductPage;
