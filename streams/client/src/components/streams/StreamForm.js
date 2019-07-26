import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError({ touched, error }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div className="field">
                <div className={`field ${meta.touched && meta.error ? 'error' : ''}`}>
                    <label>{label}</label>
                    <input {...input} autoComplete="off" />
                </div>
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Title" />
                <Field name="description" component={this.renderInput} label="Description" />
                <button className="button ui primary">Submit</button>
            </form>
        );
    };
};

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title.';
    }

    if (!formValues.description) {
        errors.description = 'You must enter description.';
    }

    return errors;
};

export default reduxForm({ form: 'streamForm', validate })(StreamForm);
