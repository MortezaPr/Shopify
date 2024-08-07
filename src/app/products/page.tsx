import Products from "./components/Products";
import ProductsPagination from "./components/Pagination";

export default function ProductsPage({
  searchParams = {},
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="min-h-screen mx-10">
      <Products searchParams={searchParams} />
      <ProductsPagination />
    </main>
  );
}
