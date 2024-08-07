import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getProducts } from "@/services/getProducts";
import ProductImage from "./ProductImage";
import { Product } from "@/types";
import Link from "next/link";

export default async function Products({
  searchParams = {},
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = parseInt(searchParams["page"] as string, 10) || 1;
  const limit = 10;
  const products = await getProducts(page, limit);
  return (
    <Container maxWidth="xl">
      <Box
        className="bg-primary bg-opacity-10"
        sx={{
          padding: 2,
          marginTop: 2,

          boxShadow: 1,
          borderRadius: 3,
          "@media (min-width:600px)": {
            padding: 3,
          },
          "@media (min-width:960px)": {
            padding: 4,
          },
        }}
      >
        <Grid container spacing={2}>
          {products.map((product: Product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Link href={`/products/${product.id}`}>
                <Card
                  sx={{ height: "100%", borderRadius: 2 }}
                  className="cursor-pointer"
                >
                  <div className="flex items-center justify-center h-48 mt-5 mb-2">
                    <div className="">
                      <ProductImage product={product} />
                    </div>
                  </div>

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom component="div">
                      {product.title}
                    </Typography>
                  </CardContent>
                  <CardContent dir="ltr" className="ml-3 flex gap-2">
                    <Typography color="text.primary">تومان</Typography>
                    <Typography color="text.primary">
                      {product.price.toLocaleString("fa")}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
