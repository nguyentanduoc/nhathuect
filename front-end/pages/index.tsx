import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";
import MainLayout from "../components/layout/MainLayout";
import ProductItem, { IProductItem } from "../components/product/ProductItem";

const Home: NextPage = () => {
  const items: IProductItem[] = [
    {
      title: "abl",
      srcImage:
        "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o=",
      text: "Get this image on: Depositphotos | License details",
    },
    {
      title: "abl",
      srcImage:
        "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o=",
      text: "Get this image on: Depositphotos | License details",
    },
    {
      title: "abl",
      srcImage:
        "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o=",
      text: "Get this image on: Depositphotos | License details",
    },
    {
      title: "abl",
      srcImage:
        "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o=",
      text: "Get this image on: Depositphotos | License details",
    },
    {
      title: "abl",
      srcImage:
        "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o=",
      text: "Get this image on: Depositphotos | License details",
    },
    {
      title: "abl",
      srcImage:
        "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=f1479caa27cfdc80362d5c9b4f04c53ffedf2366ca83fee6239ca4470b9a746e&o=",
      text: "Get this image on: Depositphotos | License details",
    },
  ];
  return (
    <MainLayout>
      <Row className="g-2">
        {items.map((item, index) => (
          <Col xl={3} lg={3} md={4} sm={6} xs={12}>
            <ProductItem key={`product-${index}`} {...item} />
          </Col>
        ))}
      </Row>
    </MainLayout>
  );
};

export default Home;
