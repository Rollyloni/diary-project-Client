import '../styles/OldEntries.scss';
import { Component } from 'react';
import axios from 'axios';
import NavBar from '../Components/NavBar/NavBar'

const backendAPI = "http://localhost:9000"

function translateDate (dateStamp) {
    const dateString = new Date(dateStamp).toString()
    const dateStringArray = dateString.split(" ")
    for (let i = 1; i <= 4; i++) {
        dateStringArray.pop()
    }

    return dateStringArray.join(" ")
}

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
                <main className='read-journal'>
                    <section className='read-journal--left'>
                        <ul className='read-journal__list'>
                            {this.state.journalEntries.map( (entry, entryIndex) => {
                                return (
                                    <li onClick={()=>{this.handleClickLink(entryIndex)}} className="read-journal__links" key={`${entryIndex}Journal`}>
                                        <h4 className="read-journal__header">{entry.title}</h4>
                                        <p className="read-journal__para" >{translateDate(entry.dateStamp)}</p>
                                    </li>
                                )
                            })}
                        </ul>    
                    </section>
                    <section className="active-journal-post" >
                        <div className='active-journal-post__heading-container'>
                            <h1 className='active-journal-post__heading'>{this.state.firstEntry.title}</h1>
                            <p className='active-journal-post__date'>Date: {translateDate(this.state.firstEntry.dateStamp)}</p>
                        </div>
                        <div className='active-journal-post__subcontainer'>
                            {this.state.firstEntry.journalContent.map( content => {
                                if (content.type === "textarea") {
                                            
                                    return (
                                        <article class="active-journal-post__textarea" key={content.id}>
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
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default OldEntries