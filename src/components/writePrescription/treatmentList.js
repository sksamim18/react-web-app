import React from 'react'


class TreatmentList extends React.Component {
    
    render() {
        return (
            <div>
	            <ul class="list-group text-left">
                {this.props.treatmentList.map((text) => (
                	<li class="list-group-item">{text}
                	</li>
                ))}
                </ul>
            </div>
        )
    }
}
export default TreatmentList