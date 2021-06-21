import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CategoryItem } from "./CategoryItem";
import bookImg from "../../../assets/img/book-category.jpg";
import clothesImg from "../../../assets/img/clothes-category.jpg";
import electronicImg from "../../../assets/img/electronic-category.jpg";
import houseHoldImg from "../../../assets/img/household-category.jpg";
import personalImg from "../../../assets/img/personal-category.jpg";
import schoolSuppliesImg from "../../../assets/img/school-supply-category.jpg";
import { Text } from "..";
import { CSSProperties } from "react";
import { R } from "../../res";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function CategoryPanel(props: Props) {
  return (
    <div {...props}>
      <Container style={styles.container}>
        <Text
          text={R.strings.home.category}
          serif
          semiBold
          style={styles.panelName}
        />

        <div style={styles.separator}></div>

        <Row xs={2} sm={2} md={3} lg={6}>
          <Col>
            <CategoryItem
              imageSource={bookImg}
              title={R.strings.home.book}
              style={styles.categoryItem}
            />
          </Col>
          <Col>
            <CategoryItem
              imageSource={schoolSuppliesImg}
              title={R.strings.home.schoolSupplies}
              style={styles.categoryItem}
            />
          </Col>
          <Col>
            <CategoryItem
              imageSource={houseHoldImg}
              title={R.strings.home.houseHold}
              style={styles.categoryItem}
            />
          </Col>
          <Col>
            <CategoryItem
              imageSource={personalImg}
              title={R.strings.home.personalUse}
              style={styles.categoryItem}
            />
          </Col>
          <Col>
            <CategoryItem
              imageSource={electronicImg}
              title={R.strings.home.electronic}
              style={styles.categoryItem}
            />
          </Col>
          <Col>
            <CategoryItem
              imageSource={clothesImg}
              title={R.strings.home.other}
              style={styles.categoryItem}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

interface Style {
  container: CSSProperties;
  panelName: CSSProperties;
  separator: CSSProperties;
  categoryItem: CSSProperties;
}

const styles: Style = {
  categoryItem: {
    marginTop: 5,
    marginBottom: 5
    // alignSelf: "center",
    // alignItems: "center",
    // justifyContent: "center"
    // height: "100%"
    // marginLeft: 20,
    // marginRight: 20
  },
  container: {
    backgroundColor: R.colors.white,
    borderRadius: 5,
    // padding: 10
    paddingTop: 10,
    paddingBottom: 10
    // paddingRight: 30,
    // paddingLeft: 30
  },
  panelName: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20
  },
  separator: {
    height: 1,
    backgroundColor: R.colors.background,
    width: 99999,
    marginLeft: -100, // Don't know why container has a padding on the left
    marginTop: 5,
    marginBottom: 5
  }
};
