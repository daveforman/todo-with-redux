import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {addNewItem} from '../actions';

class AddForm extends Component{
    handleAddItem(values){
        console.log('New Item:', values);
        this.props.addNewItem(values).then(()=>{
            this.props.history.push('/');
        });;
    }

    renderInput(props){
        console.log('Render Input Props:', props);
        return(
            <div>
                <label>{props.label}</label> 
                <input {...props.input} type="text"/>
                <p className="red-text text-darken-2">{props.meta.touched && props.meta.error}</p>
            </div>    
        );
    }

    render() {
        const {handleSubmit} = this.props;

        return(
            <div>
                <Link className="btn right" to="/">Go Back</Link>
                <h3 className ="center">Add Item </h3>
                <form onSubmit={handleSubmit(this.handleAddItem.bind(this))}>
                    <Field name="title" label="Item Title" component={this.renderInput}/>
                    <Field name="details" label="Item Details" component={this.renderInput}/>
                    <button>Add To Do Item</button>
                </form>    
            </div>    
        )
    }
}

function validate(values){
    const {title, details} = values;
    const errors = {};

    if(!title){
        errors.title = 'Pease enter a title';
    }

    if(!details){
        errors.details = "Please give your item some details"
    }

    return errors;
}

AddForm = reduxForm({
    form: 'add_item',
    validate: validate
})(AddForm);

export default connect(null, {addNewItem: addNewItem})(AddForm);