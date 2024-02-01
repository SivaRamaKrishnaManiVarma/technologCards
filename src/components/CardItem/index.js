// Write your code here.

import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {title, description, imageUrl, className} = cardDetails

  return (
    <li className={`card-item ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div>
        <img className="image" src={imageUrl} alt={title} />
      </div>
    </li>
  )
}
export default Card
