import React from 'react';
import {useState} from 'react';
import { Modal, Button, Form, Row, Col, Image} from 'react-bootstrap';
let priceOpts=[...Array(501).keys()];
const now = new Date().getUTCFullYear();
const yearOpts = Array(now - (now - 200)).fill('').map((v, idx) => now - idx);

// <Form.Control as="select" placeholder="Enter Year" >
//    {yearOpts.map( ((num) => (
//      <option key={num} value={num}>{num}</option>
//    )))}
// </Form.Control>

//if react in strict mode then anamation={false} must be set for the modal
function SellModal(props) {
  const [file, setFile] = useState(0);

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="med"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{backgroundColor: "#78c2ad"}} closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='sell-header'>
          Create New TextBook Listing
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Textbook Name</Form.Label>
          <Form.Control value={props.name} onChange={props.nameInputHandler} type="text" placeholder="Enter Textbook Name" />
        </Form.Group>
        <Form.Group controlId="formBasicAuthor">
          <Form.Label>Textbook Author</Form.Label>
          <Form.Control value={props.author} onChange={props.authorInputHandler} type="text" placeholder="Enter Author Name" />
        </Form.Group>

        <Row>

        <Col xs={9}>
        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control value={props.price} onChange={props.priceInputHandler} as="select" placeholder="Enter Price" >
             {priceOpts.map( ((num) => (
               <option key={num} value={num}>{num}</option>
             )))}
          </Form.Control>
        </Form.Group>
        </Col>

        <Col>
        <Form.Group controlId="formBasicFlexibleCheckbox">
          <Form.Label>Flexible?</Form.Label>
          <Form.Check value={props.flexible} onChange={props.flexibleInputHandler} type="checkbox"/>
        </Form.Group>
        </Col>

        </Row>

        <Form.Group controlId="formBasicDate">
          <Form.Label>Date Published</Form.Label>
          <Form.Control value={props.datePublished} onChange={(e, data)=>{props.datePublishedInputHandler(data.value)}} type="Date" placeholder="Enter Author Name" />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control value={props.description} onChange={props.descriptionInputHandler} type="text" placeholder="Enter Textbook Description" />
        </Form.Group>
        <Form.Group controlId="formBasicCourses">
          <Form.Label>Courses</Form.Label>
          <Form.Control value={props.course} onChange={props.courseInputHandler} type="text" placeholder="Enter Relevant Courses" />
        </Form.Group>
        <Form.Group>
          <Form.File id="formBasicFile" label="Upload Pictures" onChange={ (event)=>{setFile(URL.createObjectURL(event.target.files[0]))} }/>
          <Image style={{maxWidth: "100px", maxHeight: "100px", paddingTop: "10px"}} src={file}/>
        </Form.Group>

      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-secondary mr-auto" onClick={props.onHide}>Close</Button>

        <Button className="btn btn-primary" variant="primary" onClick={props.createListing}>
          Submit
        </Button>

      </Modal.Footer>
    </Modal>
  );
}



export default SellModal;
