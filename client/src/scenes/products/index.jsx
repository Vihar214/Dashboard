import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from "state/api";
import FlexBetween from "components/FlexBetween";

const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
  img,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        boxShadow: "2",
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "1rem",
      }}
    >
      <CardContent>
        <Box
          component="img"
          alt="product"
          src={"/product.jpg"}
          height="100%"
          width="100%"
          borderRadius="1rem"
          sx={{ objectFit: "cover" }}
        />
        <Typography
          ml="0.3rem"
          mt="0.5rem"
          sx={{ fontSize: 15 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <FlexBetween>
          <Box height="2rem" ml="0.3rem">
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              sx={{ mb: "1rem" }}
              color={theme.palette.secondary[400]}
            >
              ₹{Number(price).toFixed(2)}
            </Typography>
          </Box>
          <Rating value={rating} readOnly />
        </FlexBetween>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Typography ml="-0.13rem" fontSize="12px">
            see more
          </Typography>
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>id: {_id} </Typography>
          <Typography>Supply left: {supply} </Typography>
          <Typography>
            Yearly Sales This year: {stat.yearlySalesTotal}{" "}
          </Typography>
          <Typography>
            Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}{" "}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Products" subtitle="See your list of products" />

      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="25px"
          columnGap="2%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
              category,
              supply,
              stat,
            }) => (
              <Product
                key={_id}
                _id={_id}
                name={name}
                description={description}
                price={price}
                rating={rating}
                category={category}
                supply={supply}
                stat={stat}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Products;
