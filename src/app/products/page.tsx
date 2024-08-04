import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { getProducts } from "@/api/getProducts";

export default async function Products() {
  const products = await getProducts();
  return (
    <Container>
      <Box
        sx={{
          padding: 2,
          marginTop: 2,
          backgroundColor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          "@media (min-width:600px)": {
            padding: 3,
          },
          "@media (min-width:960px)": {
            padding: 4,
          },
        }}
      >
        {products.map((product) => (
          <Box key={product.id} sx={{ marginBottom: 2 }}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <img src={product.image} alt={product.title} width="100" />
            <p>
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
