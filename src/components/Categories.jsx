import Category from "./Category";

function Categories({ categories }) {
  return (
    <div className="bg-white border rounded-lg p-6">
      <ul className="space-y-4">
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </ul>
    </div>
  );
}

export default Categories;
