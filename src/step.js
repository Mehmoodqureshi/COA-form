import React, { useEffect } from "react";
import { MDBContainer } from "mdbreact";
import { Fade } from "react-reveal";
export default function Step(props) {
  const { heading, children } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="d-flex justify-content-center main-content">
      <MDBContainer className="m-4">
        <Fade className="ml-3">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h3 className="text-center ">{heading}</h3>
              {children}
            </div>
          </div>
        </Fade>
      </MDBContainer>
    </div>
  );
}
