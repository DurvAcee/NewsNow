import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        console.log('constructor from News componenet');
        this.state={
            articles: [],
            loading: false,
            page: 1,
            totalResults: null,
            pageSize: 10
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=827d52480ea84a6fbeb83926a04016ac&page=1&pageSize=${this.state.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handleNextClick = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=827d52480ea84a6fbeb83926a04016ac&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`
            let data = await fetch(url)
            let parsedData = await data.json()

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    

    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=827d52480ea84a6fbeb83926a04016ac&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

  render() {
    return (
      <div className = "container my-3">
        <h1>NewsMonkey - Top Headlines!</h1>

            <div className = "row">
                {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title? element.title.slice(0,45): " "} description={element.description? element.description.slice(0,88): " "} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                })}
            </div>

            <div className="container d-flex justify-content-end">
                <button type="button" disabled={this.state.page<=1} className="btn btn-dark mx-2" onClick={this.handlePreviousClick} >&larr; Previous</button>
                <button type="button" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize))} className="btn btn-dark mx-2" onClick={this.handleNextClick} >Next &rarr;</button>
            </div>
      </div>
    )
  }
}

export default News