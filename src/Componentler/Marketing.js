import React from "react";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardGroup,
  CardText,
} from "reactstrap";

const Marketing = () => {
  return (
    <div>
      <section id={"marketing"}>
        <Container>
          <h1 className="mb-4">Marketing Strategies</h1>
          <p className="mb-5">
            Join 40,000+ other marketers and get proven strategies on email
            marketing
          </p>
          <div className="row">
            {/* Row Başlangıç */}

            {/* Birinci Sütun */}
            <div className="col-lg-4">
              <CardGroup>
                <Card className="border border-0">
                  <CardImg
                    alt="Card image cap"
                    src="https://technext.github.io/productly/v1.0.0/assets/img/marketing/marketing01.png"
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="p" className="card-title mb-4">
                      By <a href="#!">Abdullah</a> | 03 March 2019
                    </CardTitle>

                    <CardText tag={"h2"} className="card-text">
                      Increasing Prosperity With Positive Thinking
                    </CardText>
                  </CardBody>
                </Card>
              </CardGroup>
            </div>
            {/* Birinci Sütun */}

            {/* İkinci Sütun */}
            <div className="col-lg-4">
              <CardGroup>
                <Card className="border border-0">
                  <CardImg
                    alt="Card image cap"
                    src="https://technext.github.io/productly/v1.0.0/assets/img/marketing/marketing02.png"
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="p" className="card-title mb-4">
                      By <a href="#!">Abdullah</a> | 03 March 2019
                    </CardTitle>

                    <CardText tag={"h2"} className="card-text">
                      Motivation Is The First Step To Success{" "}
                    </CardText>
                  </CardBody>
                </Card>
              </CardGroup>
            </div>
            {/* İkinci Sütun */}

            {/* Üçüncü Sütun */}
            <div className="col-lg-4">
              <CardGroup>
                <Card className="border border-0">
                  <CardImg
                    alt="Card image cap"
                    src="https://technext.github.io/productly/v1.0.0/assets/img/marketing/marketing03.png"
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="p" className="card-title mb-4">
                      By <a href="#!">Abdullah</a> | 03 March 2019
                    </CardTitle>

                    <CardText tag={"h2"} className="card-text">
                      Success Steps For Your Personal Or Business Life
                    </CardText>
                  </CardBody>
                </Card>
              </CardGroup>
            </div>
            {/* Üçüncü Sütun */}

            {/* Row Bitiş */}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Marketing;
