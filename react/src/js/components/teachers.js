// React
import React, { Component } from 'react';
import Teacher from './teacher';

class Teachers extends Component {
  render() {
    return (
      <ul className="teachers">
        {this.props.teachers.map((teacher) => {
          return <Teacher key={teacher.id} {...teacher} />
        })
        }
      </ul>
    )
  }
}

export default Teachers;
