import './NewEntry.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBarComponent from "../../Components/NavBarComponent/NavBarComponent";
import SearchComponent from '../../Components/SearchComponent/SearchComponent';


class NewEntry extends Component {
    state = {
        loadComponents: [],
        searchPage: false
    }

    stateFunc = (newAddition) => {
        let arrayUpdate = [...this.state.loadComponents]
        arrayUpdate.push(newAddition)
        console.log(arrayUpdate)
        this.setState( {
            loadComponents: arrayUpdate
        })
    }

    searchFunc = (bool) => {
        console.log(bool)
        this.setState({
            searchPage: bool
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        let currentTime = Date.now()
        const journalEntryObj = {
            title: event.target.entryTitle.value,
            journalContent:this.state.loadComponents,
            dateStamp: currentTime
        }
        console.log(journalEntryObj)
        //event.reset()
    }

    onInputChange = (event) => {
        let eventIndex = event.target.name[0]
        let updateArray = [...this.state.loadComponents]
        updateArray[eventIndex].content = event.target.value
        this.setState({
            loadComponents: updateArray
        })
    }

    render() {
        return (
            <>
                <Link to="/">Home</Link>
                <NavBarComponent
                    stateFunc={this.stateFunc}
                    noOfItems={this.state.loadComponents.length}
                    clickSearch={this.state.searchPage}
                    searchFunc={this.searchFunc}
                    />
                <form onSubmit={(event) => {this.handleFormSubmit(event)}}>
                    <label>
                        Title
                        <input name="entryTitle" placeholder='Enter entry title here' />
                    </label>
                    <button>Submit Journal</button>
                    {this.state.loadComponents.length>0
                    ? this.state.loadComponents.map(component => {
                        if (component.type === "textarea") {
                            
                            return <textarea 
                                name={`${component.id[0]}input`} 
                                key={component.id} 
                                placeholder="Tell me about it..." 
                                onChange={(event) => {this.onInputChange(event)} }
                            />
                            
                        } else if (component.searchType === "movie") {
                            return(
                                <section name={component.imdbID} key={component.imdbID} className="movie-card">
                                    <h3>{component.Title}</h3>
                                    <p>Duration: {component.Runtime}</p>
                                    <p>Rated: {component.Rated}</p>
                                    <p>Genre: {component.Genre}</p>
                                    <img src={component.Poster} alt={component.Title}/>
                                </section>
                            )
                            
                        } else {
                            return <div></div>
                        }
                    })
                    : null}
                </form>
                {this.state.searchPage 
                ? <SearchComponent 
                    searchFunc={this.searchFunc}
                    stateFunc={this.stateFunc}
                  /> 
                :null}
            </>
        )
    }
}

export default NewEntry;