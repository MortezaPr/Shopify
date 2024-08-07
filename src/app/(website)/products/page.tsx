import Products from "./components/Products";
import ProductsPagination from "./components/Pagination";

export default function ProductsPage({
  searchParams = {},
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div
      className="min-h-screen mx-10
    "
    >
      <Products searchParams={searchParams} />
      <div className="pt-5 pb-8">
        <ProductsPagination />
      </div>
    </div>
  );
}
