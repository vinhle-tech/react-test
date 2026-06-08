export function Product({ product, className }) {
  return (
    <div
      style={{
        backgroundColor: "green",
        border: "2px solid #ccc",
        color: "#fff",
      }}
    >
      {product.name}-{product.id}-{className}
    </div>
  );
}
