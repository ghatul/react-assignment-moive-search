import React from 'react';
import apiSevice from './movie.service';

class MovieComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        const params = this.props.match && this.props.match.params;
        apiSevice.getMovie(params.id).then(res => {
            this.setState({ movie: res });
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>fsdfsdfsdfdsfsdsfs
        </div>
        )
    }
}

export default MovieComponent;