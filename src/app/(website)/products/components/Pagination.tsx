"use client";
import Pagination from "@mui/material/Pagination";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function ProductsPagination() {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    router.push(`${path}/?page=${value}`, { scroll: false });
  };

  return (
    <div className="mt-5 flex justify-center">
      <Pagination
        count={2}
        shape="rounded"
        color="primary"
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
