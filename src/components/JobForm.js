import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

export default class JobForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobNumber: props.job ? props.job.jobNumber : '',
            itemName: props.job ? props.job.itemName : '',
            orderedBy: props.job ? props.job.orderedBy : '',
            orderDate: props.job ? moment(props.job.orderDate) : moment(),
            unitPrice: props.job ? (props.job.unitPrice / 100).toString() : '',
            calendarFocused: false,
            error: '',
            button: props.button === 'Save Changes' ? 'Save Changes' : 'Create Job'
        };
    }

    onJobNumberChange = (e) => {
        const jobNumber = e.target.value;
        if (jobNumber.match(/^\d{1,5}$/)) {
            this.setState(() => ({ jobNumber }));
        }
    };
    onItemNameChange = (e) => {
        const itemName = e.target.value;
        this.setState(() => ({ itemName }));
    };
    onOrderedByChange = (e) => {
        const orderedBy = e.target.value;
        this.setState(() => ({ orderedBy }));
    };
    onOrderDateChange = (orderDate) => {
        this.setState(() => ({ orderDate }))
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onUnitPriceChange = (e) => {
        const unitPrice = e.target.value;
        if (!unitPrice || unitPrice.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ unitPrice }));
        }
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.jobNumber || !this.state.itemName || !this.state.orderedBy) {
            this.setState(() => ({
                error: 'Please provide required fields'
            }));
        } else {
            this.setState(() => ({
                error: ''
            }));
        }

        this.props.onSubmit({
            jobNumber: this.state.jobNumber,
            itemName: this.state.itemName,
            orderedBy: this.state.orderedBy,
            orderDate: this.state.orderDate.valueOf(),
            unitPrice: parseFloat(this.state.unitPrice, 10) * 100
        });
    }; 

    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text" 
                        placeholder="Job Number"
                        autoFocus="true"
                        value={this.state.jobNumber}
                        onChange={this.onJobNumberChange}
                    />
                    <input
                        type="text" 
                        placeholder="Item Name"
                        autoFocus="true"
                        value={this.state.itemName}
                        onChange={this.onItemNameChange}
                    />
                    <input
                        type="text" 
                        placeholder="Ordered By"
                        autoFocus="true"
                        value={this.state.orderedBy}
                        onChange={this.onOrderedByChange}
                    />
                    <SingleDatePicker
                        date={this.state.orderDate}
                        onDateChange={this.onOrderDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => {false}}
                    />                    
                    <input
                        type="text" 
                        placeholder="Unit Price"
                        autoFocus="true"
                        value={this.state.unitPrice}
                        onChange={this.onUnitPriceChange}
                    />   
                    <button>{this.state.button}</button>                 
                </form>
            </div>
        )
    }
}