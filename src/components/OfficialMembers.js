import '../styles/Cards.css'
// const OfficialMember = ({ image, date, title, info, location, duration, cost }) => {
  const OfficialMember = ({ filename, name, info, title}) => {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={`http://ec2-13-231-167-201.ap-northeast-1.compute.amazonaws.com:3000/images/`+ filename} className='tour-img' alt={title} />
        <p className='tour-date'>{title}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{name}</h4>
        </div>
        <p>{info}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>
            {title}
          </p>
        </div>
      </div>
    </article>
  )
}
export default OfficialMember
