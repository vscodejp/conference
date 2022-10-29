import { FC } from 'root/react-app-env'
import i18next from 'i18next'
import { conferenceNameWithYear, organizationName } from '@utils/constants'
import { urlPrefix } from '@utils/endpoints.constants'

const FooterSection: FC = () => {
  const lang = i18next.language.substring(0, 2)
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img alt="" src={`${urlPrefix}/icons/vscodejp.svg`} className="w-12" />
            <span className="ml-3 text-lg md:text-xl">{conferenceNameWithYear}</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            {organizationName} 主催の年次カンファレンス。
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Documents
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href={`/${lang}/code-for-conduct`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                  aria-label="Link to Code for Conduct"
                  aria-describedby={i18next.t('code_of_conduct')}
                >
                  {i18next.t('code_of_conduct')}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/privacy-policy`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                  aria-label="Link to Privacy Policy"
                  aria-describedby={i18next.t('privacy_policy')}
                >
                  {i18next.t('privacy_policy')}
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                  aria-label="Link to Contact"
                  aria-describedby={i18next.t('contact')}
                >
                  {i18next.t('contact')}
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Past Events
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href={`https://vscodejp.github.io/conference/2022-2023/${lang}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                  aria-label="Link to VS Code Conference JP 2022 - 2023"
                  aria-describedby="VS Code Conference JP 2022 - 2023 Website"
                >
                  {'Conference 2022 - 2023'}
                </a>
              </li>
              <li>
                <a
                  href={`https://vscodejp.github.io/conference/2021/${lang}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                  aria-label="Link to VS Code Conference JP 2021"
                  aria-describedby="VS Code Conference JP 2021 Website"
                >
                  {'Conference 2021'}
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              VS Code
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="https://vscode.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  VSCode.dev
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2021-2023 {organizationName} —
            <a
              href="https://twitter.com/vscodejp"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @vscodejp
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/groups/vscodemeetup"
              rel="noopener noreferrer"
              className="text-gray-500"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/vscodejp"
              rel="noopener noreferrer"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
