import React from 'react'


class DiagnosisList extends React.Component {
    
    render() {
        return (
            <div>
	            <ul class="list-group text-left">
                {this.props.diagnosislist.map((text) => (
                	<li class="list-group-item">{text}
                	</li>
                ))}
                </ul>
            </div>
        )
    }
}
export default DiagnosisList