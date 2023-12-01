import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="heading-duration-container">
        <h1 className="heading-card">{courseTitle}</h1>
        <div className="duration-clock-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration-time">{duration}</p>
        </div>
      </div>
      <p className="description-card">{description}</p>
      <ul className="skills-list">
        {tagsList.map(eachTag => (
          <li className="tags-list" key={eachTag.id}>
            <p className="tags-name">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
