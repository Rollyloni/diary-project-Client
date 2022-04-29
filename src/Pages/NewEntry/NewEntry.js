import './NewEntry.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBarComponent from "../../Components/NavBarComponent/NavBarComponent";


class NewEntry extends Component {
    state = {
        loadComponents: []
    }

    stateFunc = (newAddition) => {
        let arrayUpdate = [...this.state.loadComponents]
        console.log(arrayUpdate)
        arrayUpdate.push(newAddition)
        console.log(arrayUpdate)
        this.setState( {
            loadComponents: arrayUpdate
        })
    }

    render() {
        return (
            <>
                <Link to="/">Home</Link>
                <NavBarComponent stateFunc={this.stateFunc} noOfItems={this.state.loadComponents.length}/>
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
            </>
        )
    }
}

export default NewEntry;