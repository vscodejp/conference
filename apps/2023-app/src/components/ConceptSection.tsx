import { Fragment } from 'react'
import { FC } from 'root/react-app-env'
import i18next from 'i18next'
// import Image from 'next/image'
import { urlPrefix } from '@utils/urlPath'
import { APPLY } from '@utils/feature'
import { conferenceName, year } from '@utils/constants'

const ConceptSection: FC = () => {
  return (
    <section id={'concept'} className="p-0 m-0 text-gray-600 body-font bg-vscode">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {conferenceName}
            <br className="hidden lg:inline-block" />
            {year}
          </h1>
          <div className="mb-8 leading-relaxed text-gray-300">{i18next.t('explain')}</div>
          <div className="flex justify-center">
            {APPLY && (
              <Fragment>
                <a
                  href="https://vscode.connpass.com/event/263206/"
                  className="inline-flex text-white bg-emphasis border-0 py-2 px-8 focus:outline-none hover:bg-detail4 rounded text-lg"
                  aria-label={i18next.t('apply_for_participation_from_connpass_form')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {i18next.t('apply_for_participation_from_connpass_form')}
                </a>
              </Fragment>
            )}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-white">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={`${urlPrefix}/concept.png`}
          />
        </div>
      </div>
    </section>
  )
}

export default ConceptSection
