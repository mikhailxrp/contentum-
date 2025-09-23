function ProductForm() {
  const benefits = [
    "Портреты аудиторий и сегменты (ICP/персоны).",
    "Карта болей/мотиваций, возражений и триггеров.",
    "Формулировки ценности (UVP), офферы и CTA",
    "Список тем контент-плана (приоритетный), теги/ключевые слова.",
    "Черновики брифов для статей/постов (структура + тезисы).",
  ];

  return (
    <div className="product-form">
      <div className="form-header">
        <h2>
          Опишите продукт, чтобы ИИ провёл маркет-исследование и собрал
          контент-план
        </h2>
      </div>

      <div className="benefits-section">
        <h3>Что вы получите после заполнения</h3>
        <ul className="benefits-list">
          {benefits.map((benefit, index) => (
            <li key={index} className="benefit-item">
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="form-content">
        <textarea
          className="product-description"
          placeholder="Введите описание вашего продукта..."
          rows="8"
        />
      </div>

      <div className="form-footer">
        <button className="btn btn-primary">Добавить описание +</button>
      </div>
    </div>
  );
}

export default ProductForm;
