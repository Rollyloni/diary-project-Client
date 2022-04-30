import '../styles/OldEntries.scss';
import { Component } from 'react';
import axios from 'axios';
import NavBar from '../Components/NavBar/NavBar'

const backendAPI = "http://localhost:9000"

class OldEntries extends Component {
    state = {
        journalEntries: null,
        firstEntry: ""
    }
    componentDidMount () {
        axios.get(`${backendAPI}/getentries`)
        .then( response => {
            const journalArray = response.data
            const firstArray = response.data[0]
            console.log(journalArray)
            this.setState({
                journalEntries: journalArray,
                firstEntry: firstArray
            })
        })
    }

    componentDidUpdate () {
        console.log(this.state.journalEntries)
        console.log(this.state.firstEntry)
    }

    handleClickLink = (entryIndex) => {
        this.setState({
            firstEntry: this.state.journalEntries[entryIndex]
        })
    }

    render() {
        if (this.state.journalEntries === null) {
            return "... Loading ..."
        }
        if (this.state.firstEntry === "") {
            return "...Loading..."
        }
        return (
            <>
                <NavBar />
                <main>
                    <section>
                        <ul>
                            {this.state.journalEntries.map( (entry, entryIndex) => {
                                return (
                                    <li onClick={()=>{this.handleClickLink(entryIndex)}} className="journal-links" key={`${entryIndex}Journal`}>
                                        <h4 className="journal-header">{entry.title}</h4>
                                        <p className="journal-para" >date</p>
                                    </li>
                                )
                            })}
                        </ul>    
                    </section>
                    <section className="textarea" >
                    <h1>{this.state.firstEntry.title}</h1>
                        <p>Date</p>
                        {this.state.firstEntry.journalContent.map( content => {
                            if (content.type === "textarea") {
                                        
                                return (
                                    <article key={content.id}>
                                        <p>{content.content}</p>
                                    </article>
                                )
                                
                            } else if (content.searchType === "movie") {
                                return(
                                    <section key={content.imdbID} className="movie-card">
                                        <h3>{content.Title}</h3>
                                        <p>Duration: {content.Runtime}</p>
                                        <p>Rated: {content.Rated}</p>
                                        <p>Genre: {content.Genre}</p>
                                        <img src={content.Poster} alt={content.Title}/>
                                    </section>
                                )
                            } else {
                                return <div></div>
                            }
                        })}
                    </section>
                </main>
            </>
        )
    }
}

export default OldEntries