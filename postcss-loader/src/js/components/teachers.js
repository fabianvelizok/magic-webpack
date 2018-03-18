// React
import React, { Component } from 'react';
import Teacher from './teacher';
import '../../css/teachers.scss'

class Teachers extends Component {
  render() {
    return (
      <ul className="Teachers">
        {this.props.teachers.map((teacher) => {
          return <Teacher key={teacher.id} {...teacher} />
        })
        }
      </ul>
    )
  }
}

export default Teachers;
