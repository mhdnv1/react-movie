import React from "react"
import Movies from "../components/Movies"
import Loader from "../components/Loader"
import Search from "../components/Search"

export default class  Main extends React.Component {
    state = {
        movies:[],
        loding : true
    }
    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=329ffa13&s=iron')
        .then(response => response.json())
        .then(data=>this.setState({movies:data.Search, loding:false}))
    }
    searchMovies = (str , type = 'all')=>{
        this.setState({loding:true})
        fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=${str}${type !== 'all' ? `&type=${type}`: ' '}`)
        .then(response => response.json())
        .then(data=>this.setState({movies:data.Search, loding:false}))
    }
    render(){
        return(
            <div className="content container">
             <Search searchMovie={this.searchMovies} />
              {this.state.loding ? <Loader/> : (<Movies movies={this.state.movies} />)}  
            </div>
        )
    }
}