import { Component } from 'react';
import { Container, Col, Row, Form, Alert, Button } from 'react-bootstrap';
import './MyStyles.css';
import { checking } from './EmailCheck.js';
import { PasswordCheck } from './PasswordCheck.js';

class Registration extends Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    city: '',
    postalCode: '',
    year: '',
  };

  submitForm = () => {};
  render() {
    return (
      <>
        <div>
          <Container>
            <Row>
              <Col md={6} className="mx-auto">
                <h2 className="my-4 title">Fill the registration form </h2>{' '}
                <Form onSubmit={this.submitForm}>
                  <Form.Row className="my-4">
                    <Col>
                      <Form.Control
                        value={this.state.name}
                        placeholder="First name"
                        type="text"
                        onChange={(e) =>
                          this.setState({
                            name: e.currentTarget.value,
                          })
                        }
                        className="inputs"
                      />

                      {this.state.name && this.state.name.length < 2 && (
                        <Alert variant="danger" className="alerts mx-auto">
                          Should contain at least 2 characters
                        </Alert>
                      )}
                    </Col>
                    <Col>
                      <Form.Control
                        value={this.state.lastName}
                        placeholder="Last name"
                        onChange={(e) =>
                          this.setState({
                            lastName: e.currentTarget.value,
                          })
                        }
                      />
                      {this.state.lastName && this.state.lastName.length < 3 && (
                        <Alert variant="danger" className="alerts mx-auto">
                          Should contain at least 3 characters
                        </Alert>
                      )}
                    </Col>
                  </Form.Row>
                  <Form.Row className="my-4">
                    <Form.Group as={Col}>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({
                            email: e.currentTarget.value,
                          })
                        }
                      />
                      {this.state.email && !checking(this.state.email) && (
                        <Alert variant="danger" className="alerts mx-auto">
                          Invalid e-mail
                        </Alert>
                      )}
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(e) =>
                          this.setState({
                            password: e.currentTarget.value,
                          })
                        }
                        className=""
                      />

                      {this.state.password &&
                        !this.state.password.length < 8 &&
                        !PasswordCheck(this.state.password) && (
                          <Alert variant="danger" className="alerts mx-auto">
                            Should contain at least 8 chars, 1 digit, 1 letter
                          </Alert>
                        )}
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group className=" mx-auto">
                      <Form.Label>Year of birth</Form.Label>
                      <Form.Control
                        placeholder="YYYY"
                        value={this.state.year}
                        onChange={(e) =>
                          this.setState({
                            year: e.currentTarget.value,
                          })
                        }
                        min="1910"
                        maxlength="4"
                      />
                      {this.state.year &&
                      this.state.year.toString() < '1910' ? (
                        <Alert variant="danger" className="alerts mx-auto">
                          Provide valid Year
                        </Alert>
                      ) : (
                        <alert></alert>
                      )}
                    </Form.Group>
                  </Form.Row>
                  <Form.Group className="my-4">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      placeholder="1234 Main St"
                      value={this.state.address}
                      onChange={(e) =>
                        this.setState({
                          address: e.currentTarget.value,
                        })
                      }
                    />
                    {this.state.address && this.state.address.length < 3 && (
                      <Alert variant="danger" className="alerts mx-auto">
                        Should contain at least 3 characters
                      </Alert>
                    )}
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        placeholder="City Name"
                        value={this.state.city}
                        onChange={(e) =>
                          this.setState({
                            city: e.currentTarget.value,
                          })
                        }
                      />
                      {this.state.city && this.state.city.length < 3 && (
                        <Alert variant="danger" className="alerts mx-auto">
                          Should contain at least 3 characters
                        </Alert>
                      )}
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Postal Code</Form.Label>
                      <Form.Control
                        value={this.state.postalCode}
                        onChange={(e) =>
                          this.setState({
                            postalCode: e.currentTarget.value,
                          })
                        }
                        maxlength="5"
                      />
                      {this.state.postalCode &&
                        this.state.postalCode.length < 5 && (
                          <Alert variant="danger" className="alerts mx-auto">
                            Valid postal code must contain 5 digits
                          </Alert>
                        )}
                    </Form.Group>
                  </Form.Row>
                  {this.state && (
                    <Button variant="success" className="mt-4">
                      {' '}
                      Submit form
                    </Button>
                  )}
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
export default Registration;
