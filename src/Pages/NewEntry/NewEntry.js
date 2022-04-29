import './NewEntry.scss';
import { Component } from 'react';
import NavBarComponent from "../../Components/NavBarComponent/NavBarComponent";


class NewEntry extends Component {
    state = {
        loadComponents: []
    }

    render() {
        return (
            <>
                <NavBarComponent />
                <form>
                    <label>
                        Title
                        <input name="entry-title" placeholder='Enter entry title here' />
                    </label>
                    <textarea placeholder="Tell me about it..." />
                    {this.state.loadComponents}
                </form>
            </>
        )
    }
}

export default NewEntry;