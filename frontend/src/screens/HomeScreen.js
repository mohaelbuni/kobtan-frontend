import React from "react";
import Aux from "../hoc/_Aux/index";

import { Row, Col, Card,Image,Table } from "react-bootstrap"


function HomeScreen() {
  const date = new Date()
  return (
    <Aux>
 
              <Card
        
        className='my-2 to-print'
      >
        <Row style={{paddingTop:'10px'}}>
          <Col style={{ textAlign: "left", marginLeft: "50px" }}>
            <p>التـــــــــاريخ</p>
            <p>
              {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
            </p>
          </Col>
          <Col style={{ textAlign: "right", marginRight: "50px" }}>
            <p>
              <Image src='/images/Logo.png'></Image>
            </p>
          </Col>
        </Row>
        <hr />
        <br />
        <Row style={{ paddingTop: "30px" }}>
          <Col
          style={{

          textAlign: "center",

        }}
        >
            <h2> الســـــــلام عليــــــكم </h2>
            <br />
            <h4> Information Security Department </h4>
          </Col>
        </Row>
        <br />
        <br />
        <Row style={{ paddingTop: "30px" }}>
          <Col style={{ textAlign: "right", marginRight: "5px" }}>
            <h4>:OTP إفــادة بتسليــم </h4>
          </Col>
        </Row>
        <Row style={{ paddingTop: "30px" }}>
          <Col md={1}></Col>

          <Col md={10}>
            <Table responsive bordered hover>
              <thead>
                <tr>
                  <th>Number of OTP</th>
                  <th>Recipent Name</th>
                  <th>Branch</th>
                  <th>date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'></th>
                  <td></td>
                  <td></td>
                  <td>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</td>
                </tr>
              </tbody>
            </Table>
            
 
          </Col>
          <Col md={1}></Col>
        </Row>

        <Row
          style={{ textAlign: "right", marginRight: "5px", paddingTop: "50px" }}
        >
          <Col></Col>

          <Col style={{ textAlign: "right" }}>
            <h5> :التوقيع</h5>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <h5> :المستلم</h5>
          </Col>
        </Row>
        <Row
          style={{ textAlign: "left", marginLeft: "10px", paddingTop: "150px" }}
        >
          <Col>
            <h5 style={{ marginLeft: "0px" }}>
              مساعد مدير إدارة تقنية المعلومات
            </h5>
            <h6 style={{ marginLeft: "0px" }}>محمد الهادي رحاب</h6>
          </Col>
        </Row>
        <Row style={{ textAlign: "right", marginRight: "10px" }}>
          <Col>
            <h5>
              عبدالمهيمن البوني <i class='fas fa-feather-alt'></i>
            </h5>
          </Col>
        </Row>
      </Card>

        
              <button onClick={(e)=>{
                e.preventDefault()
                // var prtContent = document.getElementById("to-print");
                // var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
                // WinPrint.document.write(prtContent.innerHTML);
                // WinPrint.document.close();
                // WinPrint.focus();
                // WinPrint.print();
                window.print()

              }}>submit</button>
    </Aux>
  );
}

export default HomeScreen;
