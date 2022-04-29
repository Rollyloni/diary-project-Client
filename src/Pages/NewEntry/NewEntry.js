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
                <form>
                    <label>
                        Title
                        <input name="entry-title" placeholder='Enter entry title here' />
                    </label>
                    <button>Submit Journal</button>
                    {this.state.loadComponents.length>0
                    ? this.state.loadComponents.map(component => {
                        if (component.type === "textarea") {
                            return <textarea key={component.id} placeholder="Tell me about it..." />
                        } else {
                            return <div></div>
                        }

                    })
                    : null}
                </form>
                {this.state.searchPage ? <SearchComponent /> :null}
            </>
        )
    }
}

export default NewEntry;