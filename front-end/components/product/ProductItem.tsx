import { Card } from "react-bootstrap";
export interface IProductItem {
  srcImage: string;
  title: string;
  text: string;
}
const ProductItem = ({ text, title, srcImage }: IProductItem) => {
  return (
    <Card>
      <Card.Img variant="top" src={srcImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
