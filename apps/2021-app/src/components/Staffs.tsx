import { FC } from 'root/react-app-env'
import { staffs } from '../contents/staffs'
import People from './People'

const Staffs: FC = () => {
  return <People people={staffs} sectionName="staffs" />
}

export default Staffs
