import React, { Component } from 'react';

class DataTableCheckList extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.authors}
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
                <td>
                    {this.props.obj.sepractice}
                </td>
                <td>
                    <label><input type="checkbox" checked/></label>
                </td>
            </tr>
        );
    };
};
export default DataTableCheckList;