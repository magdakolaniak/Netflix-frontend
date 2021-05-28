import { Component } from 'react';
import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Container,
} from 'react-bootstrap';
import './MyStyles.css';

class ShowDetails extends Component {
  state = {
    movieToShow: null,
    commentToShow: null,
  };

  componentDidMount = async (props) => {
    let idFromUrl = this.props.match.params.check;

    try {
      const response = await fetch(
        'http://www.omdbapi.com/?apikey=e741ac6e&i=' + idFromUrl
      );
      const response2 = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + idFromUrl,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGRkZmIxZjBmYjAwMTVkOTE3MGEiLCJpYXQiOjE2MjIxOTUxNzUsImV4cCI6MTYyMzQwNDc3NX0.Gvh4YZWhe-pQH4aIL3JKgqcs8AzJ8ULur8F7KnRkvPs',
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        let data2 = await response2.json();
        console.log(data);
        console.log('COMMENTS ARE HERE', data2);
        this.setState({
          movieToShow: data,
          commentToShow: data2,
        });
      } else {
        console.log('we got an error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        {this.state.movieToShow && (
          <div>
            <h2 className="mt-3"> {this.state.movieToShow.Title}</h2>
            <br></br>

            <Container>
              <Row>
                <Col xs={8}>
                  <Card>
                    <Card.Img
                      className="h-100"
                      src={this.state.movieToShow.Poster}
                    />

                    <ListGroup className="list-group-flush text-dark">
                      <ListGroupItem>
                        Country: {this.state.movieToShow.Country}
                      </ListGroupItem>
                      <ListGroupItem>
                        Box Office: {this.state.movieToShow.BoxOffice}
                      </ListGroupItem>
                      <ListGroupItem>
                        DVD Release: {this.state.movieToShow.DVD}
                      </ListGroupItem>
                      <ListGroupItem>
                        Director: {this.state.movieToShow.Director}
                      </ListGroupItem>
                      <ListGroupItem>
                        Actors: {this.state.movieToShow.Actors}
                      </ListGroupItem>
                      <ListGroupItem>
                        Awards: {this.state.movieToShow.Awards}
                      </ListGroupItem>
                      <ListGroupItem>
                        Production: {this.state.movieToShow.Production}
                      </ListGroupItem>
                      <ListGroupItem>
                        Language: {this.state.movieToShow.Language}
                      </ListGroupItem>
                      <ListGroupItem>
                        Genre: {this.state.movieToShow.Genre}
                      </ListGroupItem>
                      <ListGroupItem>
                        Plot: {this.state.movieToShow.Plot}
                      </ListGroupItem>
                      <ListGroupItem>
                        Runtime: {this.state.movieToShow.Runtime}
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                </Col>
                <Col xs={4}>
                  {this.state.commentToShow.length > 0 && (
                    <ListGroup>
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    </ListGroup>
                  )}
                  {this.state.commentToShow.length === 0 && (
                    <h2 className="color-dark">
                      {' '}
                      So sorry, we have no comments for now
                    </h2>
                  )}
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </>
    );
  }
}

export default ShowDetails;
