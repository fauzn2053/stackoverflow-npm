import React from 'react'

class DisplayData extends React.Component {
    getData = () => {
        const data = this.props.location.state;
        return data.result.log_result.map(item => (
            <tr>
                <th scope="row" key={item.tags}>{item.title}</th>
                <td>{item.tags.join(", ")}</td>
                <td><a href={item.link}>{item.link}</a></td>
            </tr>
        ))
    }
    render() {
        const temp = this.getData();
        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Tags</th>
                            <th scope="col">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {temp}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default DisplayData
