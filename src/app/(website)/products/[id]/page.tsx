import Image from "next/image";
import { getProduct } from "@/services/getProduct";
import { Product } from "@/types";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import AddToCartButton from "../components/AddToCartButton";

export default async function ProductDetail({
  params,
}: {
  params: { id: number };
}) {
  const product: Product = await getProduct(params.id);
  const value = product.rating.rate;

  console.log(product);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-[120vh] gl:h-[30rem] w-[60rem] bg-white gl:rounded-2xl shadow-md mg:p-20 gl:p-10 grid place-items-center mg:place-items-start mg:grid-cols-3 gap-16 gl:gap-5 overflow-y-scroll xs:overflow-y-hidden">
        <div className="mt-10 mg:mt-5 col-span-1">
          <Image
            src={product.image}
            width={250}
            height={250}
            alt="product image"
          />
        </div>
        <div className="mx-10 mg:mx-0 mg:mt-10 mg:col-span-2">
          <div className="flex flex-col gap-10">
            <div className="text-xl xs:text-2xl font-semibold leading-relaxed">
              {product.title}
            </div>
            <p className="text-sm xs:text-base leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="flex flex-col gap-10 pb-16">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex gap-2 pt-10 text-sm xs:text-base">
                  <span className="font-semibold">دسته بندی:</span>
                  {product.category}
                </div>
                <div className="flex flex-col xs:flex-row items-center gap-3 pt-5">
                  <Rating
                    dir="ltr"
                    name="text-feedback"
                    value={value}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <p className="text-gray-600 text-xs">
                    ( {product.rating.count.toLocaleString("fa")} خریدار )
                  </p>
                </div>
              </div>
              <p className="font-semibold text-lg xs:text-xl ml-5 pt-5">
                {product.price.toLocaleString("fa")} تومان
              </p>
            </div>

            <AddToCartButton productId={product.id} variant="contained" />
          </div>
        </div>
      </div>
    </div>
  );
}
