import { FC } from 'root/react-app-env'
import { supporters } from '../contents/supporters'
import People from './modules/People'

const SupporterSection: FC = () => {
  return <People people={supporters} sectionName="supporters" />
}

export default SupporterSection
