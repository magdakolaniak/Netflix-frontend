import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
  Spinner,
} from 'react-bootstrap';
import React from 'react';
import './LoadMovies.css';

class Kids extends React.Component {
  state = {
    value: '',
    query: '',
    movies: [],
    category: '',
    isLoading: false,
    isError: false,
  };

  componentDidMount = async (props) => {
    this.setState({
      isLoading: true,
    });

    try {
      const response = await fetch(
        'http://www.omdbapi.com/?apikey=9dd1231b&s=disney'
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data.Search);
        console.log('HISTORY', this.props.history);
        this.setState({
          movies: data.Search,
          isError: false,
          isLoading: false,
        });
      } else {
        console.log('we got an error');
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    return (
      <Container className="mb-5 p-5">
        <h3>Movies for one category</h3>
        <InputGroup className="mb-1">
          <FormControl
            onChange={(e) => this.setState({ query: e.target.value })}
            placeholder="Search"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        {this.state.isLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        <Row id="movieRow" className="flex-row flex-nowrap scroll-container">
          {this.state.movies
            .filter((movie) =>
              movie.Title.toLowerCase().includes(this.state.query)
            )
            .map((movie) => (
              <Col>
                <Card className="h-100 text-center">
                  <Card.Img
                    variant="cover"
                    src={movie.Poster}
                    onClick={() =>
                      this.props.history.push('/details/' + movie.imdbID)
                    }
                  />
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}
export default Kids;
