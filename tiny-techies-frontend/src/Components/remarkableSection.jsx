import '../css/remarkableSection.css'
import RemarkableProject from './RemarkableProject'


const RemarkableSection = () => {
  return (
    <div className='remarkable-wrapper'>
    <div className='remarkable-title'>
      <h1>Remarkable Projects</h1>
    </div>
    <div className='remarkable-container'>
      <RemarkableProject/>
      <RemarkableProject/>
      <RemarkableProject/>
      
      </div>
    </div>
  )
}

export default RemarkableSection







