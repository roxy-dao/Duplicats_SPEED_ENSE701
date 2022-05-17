import React, { Component } from 'react';
class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.author}
                </td>
                <td>
                    {this.props.obj.source}
                </td>                
                <td>
                    {this.props.obj.pubyear}
                </td>
                <td>
                    {this.props.obj.doi}
                </td>
                <td>
                    {this.props.obj.claim}
                </td>
                <td>
                    {this.props.obj.evidence}
                </td>
            </tr>
        );
    }
}
export default DataTable;