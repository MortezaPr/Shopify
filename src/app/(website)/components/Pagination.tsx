"use client";
import Pagination from "@mui/material/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductsPagination() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    router.push(`/?page=${value}`, { scroll: false });
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
