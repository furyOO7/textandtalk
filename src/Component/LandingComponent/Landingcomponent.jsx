
import React, { useState, useEffect } from 'react';
import { Form, FormControl, InputGroup, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './landingcomponent.css'

const LandingComponent = (props) => {
	const [ allcountrycode, setAllcountrycode ] = useState([]);
	const [ countrycode, setcountrycode ] = useState('+91');
	const [ number, setNumber ] = useState('');
    const [show, setShow] = useState({
        status: false,
        message: ''
    });

	useEffect(() => {
		// console.log(props.countryCode.length, props.countryCode);
		if (props.countryCode.length) {
			setAllcountrycode(props.countryCode);
		}
	}, []);
    const numberhandler =(e) =>{
        e.persist()
        if(show.status){
            setShow({
                status: false,
                message: ''
            })
        }
        if(e.target.value && (e.target.value >=0 || e.target.value <=9)){
            setNumber(e.target.value)
        }else{
            if(number.length && e.target.value === ''){
                setNumber('')
            }else{
                setShow({
                    status: true,
                    message: 'Please enter number only'
                })
            }
        }
        // console.log(number);
    } 
    const hitapihandler =(e) => {
        e.preventDefault();
        if(show.status){
            setShow({
                status: false,
                message: ''
            })
        }
        // console.log(number.length);
        if(number.length === 10){
            window.open(`https://wa.me/${countrycode}${number}`)
        }else{
            setShow({
                status: true,
                message: 'Something is not right, Kindly enter the number again'
            })
        }
    }
	return (
        <React.Fragment>
		<Container >
            <Row className="justify-content-md-center mt-4">
                <Col  xs lg>
			<Form>
				{/* <Form.Group controlId="formcountrycode" /> */}
				<Form.Group controlId="formnumber">
					<InputGroup size="lg">
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroup-sizing-lg">{countrycode}</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={numberhandler} value={number} placeholder="Enter number"/>
					</InputGroup>
                    
				</Form.Group>
                <Form.Group controlId="formsuccessbtn">
                <div className="text-center">
                    <Button variant="outline-success" size="lg" onClick={hitapihandler}>Go</Button>
                    </div>
				</Form.Group>
			</Form>
            </Col>
            </Row>
		</Container>
        {
            show.status ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{show.message}</Alert.Heading>
          </Alert> : ''
        }
        
        </React.Fragment>
	);
};

export default LandingComponent;
