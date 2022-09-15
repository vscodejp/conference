import { Fragment } from 'react'
import { FC } from 'root/react-app-env'
import i18next from 'i18next'
import { conferenceNameWithYear } from '@utils/constants'
import { APPLY } from '@utils/feature'

const AboutSection: FC = () => {
  return (
    <section id="about" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            {conferenceNameWithYear}
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            {i18next.t('explain')}
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <img alt="" src="/icons/check.svg" />
              <span className="title-font font-medium">{i18next.t('november_20_2021')}</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <img alt="" src="/icons/check.svg" />
              <span className="title-font font-medium">{i18next.t('online')}</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <img alt="" src="/icons/check.svg" />
              <span className="title-font font-medium">{i18next.t('free')}</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <img alt="" src="/icons/check.svg" />
              <span className="title-font font-medium">
                {i18next.t('apply_for_participation_from_connpass_form')}
              </span>
            </div>
          </div>
        </div>
        {APPLY && (
          <Fragment>
            <button className="inline-flex text-white bg-emphasis border-0 py-2 px-6 focus:outline-none hover:bg-detail4 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-black bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg">
              Button
            </button>
          </Fragment>
        )}
      </div>
    </section>
  )
}

export default AboutSection
