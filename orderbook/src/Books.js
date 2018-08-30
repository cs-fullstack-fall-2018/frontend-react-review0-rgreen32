import React, {Component} from 'react'

class Books extends Component{
    render(){
        var allbooks = this.props.books.map(
            forEachItem => {
                return (<div>
                        <p>{forEachItem.booktitle} is part of the {forEachItem.genre} genre</p>
                    </div>
                )
            }
        )
        return(
            <div>
                <h1>{allbooks}</h1>
            </div>
        )
    }


}
export default Books