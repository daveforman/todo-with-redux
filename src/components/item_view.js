import React, {Component} from "react";
import {connect} from 'react-redux';
import {getSingleItem} from '../actions';
import {Link} from 'react-router-dom';

class ItemView extends Component {
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getSingleItem(id);

    }


        render(){
            const {item} = this.props;
            return (
            <div>
                <Link className="btn" to='/'> View Full List</Link>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
            </div>
            )    
        }

}

function mapStateToProps(state){
    return{
        item: state.list.singleItem
    }
}

export default connect(mapStateToProps, {getSingleItem: getSingleItem})(ItemView);