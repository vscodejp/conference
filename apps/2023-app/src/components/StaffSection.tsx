import { FC } from 'root/react-app-env'
import { staffs } from '../contents/staffs'
import { People } from './modules/People'

const StaffSection: FC = () => {
  return <People people={staffs} sectionName="staffs" />
}

export default StaffSection
