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

class LoadMovies extends React.Component {
  state = {
    value: '',
    query: 'Lord of The Ring',
    movies: [],
    category: '',
    isLoading: false,
    isError: false,
    input: '',
    output: '',
  };

  fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=9dd1231b&s=${this.state.query}`
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          movies: data.Search,
          isError: false,
          isLoading: false,
        });
        console.log(this.state.movies.length);
      } else {
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     this.setState({ query: event.target.value });
  //   }
  // };

  componentDidMount = async () => {
    this.setState({
      isLoading: true,
    });
    this.fetchMovies();
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query && this.state.query.length > 4) {
      this.fetchMovies();
    }
  }

  render() {
    return (
      <Container className="mb-5 p-5">
        <h3>
          Selection of <br></br>"{`${this.state.query}`}" <br></br>Movies from
          our Database{' '}
        </h3>
        <h4 className="mt-5 mt-5">Feel free to search for anything!</h4>
        <InputGroup className="mt-5">
          <FormControl
            onKeyPress={this.handleUserInput}
            onChange={(e) => this.setState({ query: e.target.value })}
            // onKeyPress={(e) => this.setState({ query: e.target.value })}
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
          {this.state.movies &&
            this.state.movies.map((movie) => (
              <Col key={movie.Poster}>
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
export default LoadMovies;
