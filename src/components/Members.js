import { officialMembers } from '../data'
import { formerMembers } from '../data'
import { teachers } from '../data'
import Title from './Title'
import OfficialMembers from './OfficialMembers'
import FormerMembers from './FormerMembers'
import Teachers from './Teachers'
const Members = () => {
  return (<>
      <section className='section' id='tours'>
      <Title title='Official' subTitle='Members' />
      <div className='section-center featured-center'>
        {officialMembers.map((member) => {
          return <OfficialMembers {...member} key={member.id} />
        })}
      </div>
      <Title title='Former' subTitle='Officials' />
      <div className='section-center featured-center'>
        {formerMembers.map((member) => {
          return <FormerMembers {...member} key={member.id} />
        })}
      </div>
      <Title title='Beloved' subTitle='Teachers' />
      <div className='section-center featured-center'>
        {teachers.map((member) => {
          return <Teachers {...member} key={member.id} />
        })}
      </div>
    </section>
  </>

    
  )
}
export default Members
