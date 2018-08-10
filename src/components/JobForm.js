import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

export default class JobForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            brand: props.job ? props.job.brand : '',
            jobNumber: props.job ? props.job.jobNumber : '',
            itemName: props.job ? props.job.itemName : '',
            orderedBy: props.job ? props.job.orderedBy : '',
            orderDate: props.job ? moment(props.job.orderDate) : moment(),
            unitPrice: props.job ? (props.job.unitPrice / 100).toString() : '',
            quantity: props.job ? props.job.quantity : '',
            status: props.job ? props.job.status : '',
            lineValue: props.job ? (props.job.lineValue / 100).toString() : '',
            dpbp: props.job ? props.job.dpbp : '',
            etaDate: props.job ? moment(props.job.orderDate) : moment(),
            shippingInfo: props.job ? props.job.shippingInfo : '',
            detailStatus: props.job ? props.job.detailStatus : '',
            orderDetails: props.job ? props.job.orderDetails : '',
            comments: props.job ? props.job.comments : '',
            calendarFocused1: false,
            calendarFocused2: false,
            calId1: '1',
            calId2: '2',
            error: '',
            button: props.button === 'Save Changes' ? 'Save Changes' : 'Create Job'
        };
    }

    onBrandChange = (e) => {
        const brand = e.target.value;
        this.setState(() => ({ brand }));
    };
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
    onUnitPriceChange = (e) => {
        const unitPrice = e.target.value;
        if (!unitPrice || unitPrice.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ unitPrice }));
        }
    };
    onQuantityChange = (e) => {
        const quantity = e.target.value;
        if (quantity.match(/^\d{1,}$/)) {
            this.setState(() => ({ quantity }));
        }
    };
    onStatusChange = (e) => {
        const status = e.target.value;
        this.setState(() => ({ status }));
    };
    onLineValueChange = (e) => {
        const lineValue = e.target.value;
        if (lineValue.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ lineValue }));
        }
    };
    onDpbpChange = (e) => {
        const dpbp = e.target.value;
        this.setState(() => ({ dpbp }));
    };
    onOrderDateChange = (orderDate) => {
        this.setState(() => ({ orderDate }))
    };
    onEtaDateChange = (etaDate) => {
        this.setState(() => ({ etaDate }));
    } 
    onFocusChange1 = ({ focused }) => {
        this.setState(() => ({ calendarFocused1: focused }));
    };
    onFocusChange2 = ({ focused: focused2 }) => {
        this.setState(() => ({ calendarFocused2: focused2 }));
    };
    onShippingInfoChange = (e) => {
        const shippingInfo = e.target.value;
        this.setState(() => ({ shippingInfo }));
    }
    onDetailStatusChange = (e) => {
        const detailStatus = e.target.value;
        this.setState(() => ({ detailStatus }));
    }
    onOrderDetailsChange = (e) => {
        const orderDetails = e.target.value;
        this.setState(() => ({ orderDetails }));
    }
    onCommentsChange = (e) => {
        const comments = e.target.value;
        this.setState(() => ({ comments }));
    }

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
            brand: this.state.brand,
            jobNumber: this.state.jobNumber,
            itemName: this.state.itemName,
            orderedBy: this.state.orderedBy,
            orderDate: this.state.orderDate.valueOf(),
            unitPrice: parseFloat(this.state.unitPrice, 10) * 100,
            quantity: this.state.quantity,
            status: this.state.status,
            lineValue: parseFloat(this.state.lineValue, 10) * 100,
            dpbp: this.state.dpbp,
            etaDate: this.state.etaDate.valueOf(),
            shippingInfo: this.state.shippingInfo,
            detailStatus: this.state.detailStatus,
            orderDetails: this.state.orderDetails,
            comments: this.state.comments
        });
    }; 

    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text" 
                        placeholder="Brand"
                        autoFocus="true"
                        value={this.state.brand}
                        onChange={this.onBrandChange}
                    />
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
                        focused={this.state.calendarFocused1}
                        onFocusChange={this.onFocusChange1}
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
                    <input
                        type="text" 
                        placeholder="Quantity"
                        autoFocus="true"
                        value={this.state.quantity}
                        onChange={this.onQuantityChange}
                    /> 
                    <input
                        type="text" 
                        placeholder="Status"
                        autoFocus="true"
                        value={this.state.status}
                        onChange={this.onStatusChange}
                    /> 
                    <input
                        type="text" 
                        placeholder="Line Value"
                        autoFocus="true"
                        value={this.state.lineValue}
                        onChange={this.onLineValueChange}
                    /> 
                    <input
                        type="text" 
                        placeholder="DP / BP"
                        autoFocus="true"
                        value={this.state.dpbp}
                        onChange={this.onDpbpChange}
                    /> 
                    <SingleDatePicker
                        id={this.state.calId2}
                        date={this.state.etaDate}
                        onDateChange={this.onEtaDateChange}
                        focused={this.state.calendarFocused2}
                        onFocusChange={this.onFocusChange2}
                        numberOfMonths={1}
                        isOutsideRange={() => {false}}
                    />  
                    <input
                        type="text" 
                        placeholder="Shipping Info"
                        autoFocus="true"
                        value={this.state.shippingInfo}
                        onChange={this.onShippingInfoChange}
                    />  
                    <input
                        type="text" 
                        placeholder="Detail Status"
                        autoFocus="true"
                        value={this.state.detailStatus}
                        onChange={this.onDetailStatusChange}
                    />  
                    <input
                        type="text" 
                        placeholder="Order Details"
                        autoFocus="true"
                        value={this.state.orderDetails}
                        onChange={this.onOrderDetailsChange}
                    />  
                    <input
                        type="text" 
                        placeholder="Comments"
                        autoFocus="true"
                        value={this.state.comments}
                        onChange={this.onCommentsChange}
                    />  
                    
                    <button>{this.state.button}</button>                 
                </form>
            </div>
        )
    }
}