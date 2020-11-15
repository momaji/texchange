import React from 'react';
import { Modal, Button, Form, Row, Col, Image} from 'react-bootstrap';
let priceOpts=[...Array(501).keys()];

//if react in strict mode then anamation={false} must be set for the modal
function EditModal(props) {
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
          Edit TextBook Listing
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={props.editListing}>
      <Modal.Body>
        <Form.Group controlId="formBasicEditName">
          <Form.Label>Textbook Name</Form.Label>
          <Form.Control required value={props.name} onChange={props.nameInputHandler} type="text" placeholder="Enter Textbook Name" />
        </Form.Group>
        <Form.Group controlId="formBasicAuthor">
          <Form.Label>Textbook Author</Form.Label>
          <Form.Control required value={props.author} onChange={props.authorInputHandler} type="text" placeholder="Enter Author Name" />
        </Form.Group>
        <Row>
          <Col xs={9}>
            <Form.Group controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control required value={props.price} onChange={props.priceInputHandler} as="select" placeholder="Enter Price" >
                 {priceOpts.map( ((num) => (
                   <option key={num} value={num}>{num}</option>
                 )))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicFlexibleCheckbox">
              <Form.Label>Flexible?</Form.Label>
              <Form.Check checked={props.flexible} onChange={props.flexibleInputHandler} type="checkbox"/>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formBasicDate">
          <Form.Label>Date Published</Form.Label>
          <Form.Control required value={props.datePublished} onChange={props.datePublishedInputHandler} type="Date" placeholder="Enter Author Name" />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control value={props.description} onChange={props.descriptionInputHandler} type="text" placeholder="Enter Textbook Description" />
        </Form.Group>
        <Form.Group controlId="formBasicCourses">
          <Form.Label>Courses</Form.Label>
          <Form.Control value={props.courses} onChange={props.coursesInputHandler} type="text" placeholder="Enter Relevant Courses" />
        </Form.Group>
        <Form.Group>
          <Form.File id="formBasicFile" label="Upload Pictures" filename={props.file} onChange={ props.fileInputHandler }/>
          <Image style={{maxWidth: "100px", maxHeight: "100px", paddingTop: "10px"}} src={props.file} type='application/json'/>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-secondary mr-auto" onClick={props.onHide}>Cancel</Button>
        <Button className="btn btn-primary" variant="primary" type="submit">
          Save
        </Button>
      </Modal.Footer>
      </Form>
    </Modal>
  );
}



export default EditModal;
