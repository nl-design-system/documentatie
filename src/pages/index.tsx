import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { Heading2, Heading3, Icon, Image, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import { Card, CardContent, CardGroup, CardIllustration } from '../components/CardGroup';
import HomepageHero from '../components/HomepageHero';
import { Link } from '../components/Link';
import HeartbeatJSON from '@site/docs/community/events/heartbeat/heartbeats.json';
import { VideoPlayer } from '@site/src/components/VideoPlayer';
import { IconArrowRight } from '@tabler/icons-react';

const DeveloperSVG = () => (
  <svg height="48" width="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 3.76471C0 1.68552 1.68552 0 3.76471 0H44.2353C46.3145 0 48 1.68552 48 3.76471V44.2353C48 46.3145 46.3145 48 44.2353 48H3.76471C1.68552 48 0 46.3145 0 44.2353V3.76471Z"
      fill="var(--card-illustration-color, #011C33)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.2064 8.68657C22.7492 7.14366 25.2506 7.14366 26.7934 8.68657L39.3134 21.2074C40.8562 22.7503 40.8562 25.2518 39.3134 26.7947L26.7934 39.3155C25.2506 40.8584 22.7492 40.8584 21.2064 39.3155L8.68641 26.7947C7.14359 25.2518 7.14359 22.7503 8.68641 21.2074L21.2064 8.68657ZM26.224 16.9214C25.7313 16.7338 25.1803 16.9826 24.9934 17.4771L20.4323 29.5412C20.2454 30.0357 20.4932 30.5887 20.9859 30.7764L21.7591 31.0708C22.2518 31.2585 22.8027 31.0097 22.9897 30.5152L27.5508 18.4511C27.7377 17.9566 27.4899 17.4036 26.9972 17.2159L26.224 16.9214ZM18.4195 19.152C18.9502 19.6896 18.9502 20.5613 18.4195 21.099L15.5612 23.995L18.4195 26.8911C18.9502 27.4287 18.9502 28.3004 18.4195 28.8381C17.8889 29.3758 17.0285 29.3758 16.4978 28.8381L13.3774 25.6766C12.4608 24.7479 12.4608 23.2422 13.3774 22.3135L16.4978 19.152C17.0285 18.6143 17.8889 18.6143 18.4195 19.152ZM31.5056 19.152C30.975 18.6143 30.1146 18.6143 29.5839 19.152C29.0532 19.6896 29.0532 20.5613 29.5839 21.099L32.4423 23.995L29.5839 26.8911C29.0532 27.4287 29.0532 28.3004 29.5839 28.8381C30.1146 29.3758 30.975 29.3758 31.5056 28.8381L34.626 25.6766C35.5427 24.7479 35.5426 23.2422 34.626 22.3135L31.5056 19.152Z"
      fill="var(--card-illustration-background-color, #99CFFF)"
    />
  </svg>
);

const ManagerSVG = () => (
  <svg height="48" width="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 3.76471C0 1.68552 1.68552 0 3.76471 0H44.2353C46.3145 0 48 1.68552 48 3.76471V44.2353C48 46.3145 46.3145 48 44.2353 48H3.76471C1.68552 48 0 46.3145 0 44.2353V3.76471Z"
      fill="var(--card-illustration-color, #30003C)"
    />
    <path
      d="M20.6237 8.42277C21.1957 7.85076 21.9715 7.52941 22.7804 7.52941H37.8784C38.6874 7.52941 39.4632 7.85076 40.0352 8.42277C40.6072 8.99477 40.9286 9.77058 40.9286 10.5795V27.3551C40.9286 27.9102 40.5941 28.4107 40.0813 28.6231C39.5684 28.8356 38.978 28.7182 38.5855 28.3256L33.9548 23.695H22.7804C21.9715 23.695 21.1957 23.3736 20.6237 22.8016C20.0517 22.2296 19.7303 21.4538 19.7303 20.6448V10.5795C19.7303 9.77058 20.0517 8.99477 20.6237 8.42277Z"
      fill="var(--card-illustration-background-color, #F1B5FF)"
    />
    <path
      d="M29.4609 11.6227C29.8487 11.2348 30.4776 11.2348 30.8655 11.6227L34.3067 15.0639C34.6945 15.4517 34.6945 16.0806 34.3067 16.4684L30.8655 19.9096C30.4776 20.2975 29.8488 20.2975 29.4609 19.9096L26.0197 16.4684C25.6318 16.0806 25.6318 15.4517 26.0197 15.0639L29.4609 11.6227Z"
      fill="var(--card-illustration-color, #30003C)"
    />
    <path
      d="M8.01687 20.7857C8.01687 19.9573 8.68844 19.2857 9.51687 19.2857H15.034C15.8322 19.2857 16.4906 19.9108 16.532 20.7079L16.6876 23.7055C16.7703 25.2998 18.0871 26.55 19.6835 26.55H27.7151C28.5435 26.55 29.2151 27.2216 29.2151 28.05V32.4011C29.2151 33.2101 28.8938 33.9859 28.3218 34.5579C27.7497 35.1299 26.9739 35.4513 26.165 35.4513H14.9906L10.36 40.0819C9.96741 40.4744 9.37705 40.5919 8.86416 40.3794C8.35128 40.167 8.01687 39.6665 8.01687 39.1114V20.7857Z"
      fill="var(--card-illustration-background-color, #F1B5FF)"
    />
  </svg>
);

const DesignerSVG = () => (
  <svg height="48" width="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M48 3.76471C48 1.68552 46.3145 9.29955e-07 44.2353 8.84513e-07L3.76471 0C1.68552 -4.54421e-08 9.29955e-07 1.68552 8.84513e-07 3.76471L0 44.2353C-4.54421e-08 46.3145 1.68552 48 3.76471 48H44.2353C46.3145 48 48 46.3145 48 44.2353V3.76471Z"
      fill="var(--card-illustration-color, #35050D)"
    />
    <path
      d="M14.7149 18.5255C13.9944 19.2459 13.9944 20.4141 14.7149 21.1345L16.4349 22.8544C16.5821 22.7974 16.7242 22.7401 16.8592 22.6831C17.9444 22.2245 19.2357 21.3028 19.8736 20.811C21.3384 19.6819 23.3787 19.6269 24.9002 20.6973C25.0311 20.7894 25.1573 20.8893 25.2781 20.9969L25.2845 20.9905L26.8756 22.5838C26.8963 22.6047 26.9185 22.6274 26.9417 22.6521L27.0599 22.7702L27.053 22.7769L27.0616 22.7872L27.1058 22.8416L27.1107 22.8475C28.3851 24.3881 28.3939 26.5881 27.201 28.1398C26.7098 28.7787 25.7891 30.072 25.3309 31.1592C25.2742 31.2933 25.2176 31.4344 25.1612 31.5806L26.8702 33.2896C27.5906 34.0101 28.7586 34.0101 29.4791 33.2896L41.6343 21.1345C42.3548 20.4141 42.3548 19.2459 41.6343 18.5255L29.4791 6.37036C28.7586 5.64988 27.5906 5.64988 26.8702 6.37036L14.7149 18.5255Z"
      fill="var(--card-illustration-background-color, #FFB8BA)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3252 31.0692C10.2239 31.3439 9.9066 31.4655 9.61574 31.4326C9.22856 31.3888 8.82668 31.4798 8.48495 31.7127L6.56283 32.8586C5.80285 33.3766 5.61876 34.3885 6.08231 35.1318C6.14853 35.238 6.22797 35.3387 6.32083 35.4317L12.5675 41.6867C13.3104 42.4306 14.5459 42.3142 15.1371 41.4444L16.2815 39.5197C16.5034 39.1932 16.5963 38.8118 16.5664 38.4407C16.5439 38.1625 16.6638 37.8663 16.9243 37.7661L20.5067 36.3888C21.1132 36.1292 21.5614 35.6063 21.7309 34.976C21.9533 34.1497 22.5978 31.8474 23.2561 30.2853C23.8341 28.9139 24.9091 27.4276 25.4158 26.7685C25.9787 26.0363 25.9706 25.0008 25.3754 24.2815C25.3357 24.2335 25.3269 24.2186 25.282 24.1737L18.4791 30.9766C18.3854 31.0703 18.3368 31.1981 18.3181 31.3292C18.2174 32.0333 17.6118 32.5751 16.8801 32.5756C16.0784 32.5761 15.4289 31.9266 15.4295 31.1249C15.43 30.3927 15.9725 29.7867 16.6774 29.6868C16.8076 29.6683 16.9345 29.6204 17.0281 29.5279L23.8689 22.7605C23.7857 22.6772 23.6971 22.6029 23.6042 22.5375C22.8946 22.0383 21.9356 22.0614 21.2459 22.593C20.5877 23.1004 19.1034 24.1768 17.7338 24.7556C16.1739 25.4148 13.8747 26.0602 13.0494 26.2828C12.42 26.4526 11.8978 26.9014 11.6386 27.5088L10.3252 31.0692Z"
      fill="var(--card-illustration-background-color, #FFB8BA)"
    />
  </svg>
);

const ContentSVG = () => (
  <svg height="48" width="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 3.75C0 1.67893 1.67893 0 3.75 0L44.25 0C46.3211 0 48 1.67893 48 3.75V44.25C48 46.3211 46.3211 48 44.25 48H3.75C1.67893 48 0 46.3211 0 44.25L0 3.75Z"
      fill="var(--card-illustration-color, #46280D)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.5035 8.29311C31.486 7.27563 29.8363 7.27563 28.8189 8.29311L25.4786 11.6334L31.9266 18.0815L35.2669 14.7412C36.2844 13.7237 36.2844 12.074 35.2669 11.0566L32.5035 8.29311ZM30.0684 19.9396L23.6204 13.4916L8.75727 28.3547C8.33258 28.7794 8.06766 29.3378 8.00734 29.9353L7.53678 34.5963C7.454 35.4162 8.14381 36.106 8.96375 36.0232L13.6247 35.5527C14.2223 35.4924 14.7806 35.2274 15.2053 34.8028L30.0684 19.9396Z"
      fill="var(--card-illustration-background-color, #FFB980)"
    />
    <path
      d="M31.7822 25.962C32.4382 25.306 33.5018 25.306 34.1578 25.962L39.978 31.7822C40.634 32.4382 40.634 33.5018 39.978 34.1578L34.1578 39.978C33.5018 40.634 32.4382 40.634 31.7822 39.978L25.962 34.1578C25.306 33.5018 25.306 32.4382 25.962 31.7822L31.7822 25.962Z"
      fill="var(--card-illustration-background-color, #FFB980)"
    />
  </svg>
);

const GuidelineSVG = () => (
  <svg height="64" width="64" viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M97.8536 9.97715C112.151 2.92953 127.96 -0.478547 143.883 0.0540872C159.806 0.586721 175.353 5.04366 189.15 13.0311C190.456 13.7873 191.569 14.8387 192.399 16.1016C193.229 17.3645 193.754 18.8041 193.932 20.306L194 21.4537V184.274C194 185.981 193.552 187.658 192.7 189.137C191.849 190.615 190.624 191.843 189.15 192.697C187.675 193.55 186.003 194 184.3 194C182.597 194 180.925 193.55 179.45 192.697C167.653 185.868 154.272 182.273 140.65 182.273C127.028 182.273 113.647 185.868 101.85 192.697C100.375 193.55 98.7027 194 97 194C95.2973 194 93.6246 193.55 92.15 192.697C80.788 186.118 67.9479 182.536 54.83 182.284C41.7121 182.032 28.7447 185.12 17.1399 191.257L13.968 193.008L12.9689 193.436L12.4936 193.592L11.4266 193.844L10.8349 193.942L9.7 194H9.2926L8.2256 193.883L7.4787 193.747L6.4311 193.436L5.2089 192.891L4.2874 192.347L3.4241 191.695L2.8421 191.15L2.134 190.353L1.5132 189.487L1.2998 189.137L0.9894 188.554L0.562601 187.552L0.407401 187.075L0.1552 186.005L0.0582004 185.412L0.0194009 184.936L0 184.274V21.4537C4.32544e-05 19.7465 0.448265 18.0693 1.29962 16.5909C2.15097 15.1124 3.37545 13.8847 4.85 13.0311C18.6472 5.04366 34.1942 0.586721 50.1172 0.0540872C66.0402 -0.478547 81.8489 2.92953 96.1464 9.97715L97 10.4051L97.8536 9.97715Z"
      fill="#99CFFF"
    />
    <path
      d="M143.883 0.0540872C127.96 -0.478547 112.151 2.92953 97.8536 9.97715L97 10.4051V194C98.7027 194 100.375 193.55 101.85 192.697C113.647 185.868 127.028 182.273 140.65 182.273C154.272 182.273 167.653 185.868 179.45 192.697C180.925 193.55 182.597 194 184.3 194C186.003 194 187.675 193.55 189.15 192.697C190.624 191.843 191.849 190.615 192.7 189.137C193.552 187.658 194 185.981 194 184.274V21.4537L193.932 20.306C193.754 18.8041 193.229 17.3645 192.399 16.1016C191.569 14.8387 190.456 13.7873 189.15 13.0311C175.353 5.04366 159.806 0.586721 143.883 0.0540872Z"
      fill="#41A6E9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M74.1403 77.6247C73.3073 76.7918 71.9568 76.7918 71.1239 77.6247L46.2974 102.451L34.6382 90.7921C33.8053 89.9591 32.4548 89.9591 31.6218 90.7921L27.2873 95.1266C26.4544 95.9595 26.4544 97.31 27.2873 98.143L42.6219 113.478C44.6518 115.507 47.9429 115.507 49.9728 113.478L78.4748 84.9756C79.3077 84.1427 79.3077 82.7922 78.4748 81.9592L74.1403 77.6247Z"
      fill="#001C35"
    />
    <path
      d="M164.076 80.7637L161.236 77.9237C160.005 76.6921 158.008 76.6921 156.776 77.9237L146 88.6999L135.224 77.9237C133.992 76.6921 131.995 76.6921 130.764 77.9237L127.924 80.7637C126.692 81.9954 126.692 83.9922 127.924 85.2239L138.7 96L127.924 106.776C126.692 108.008 126.692 110.005 127.924 111.236L130.764 114.076C131.995 115.308 133.992 115.308 135.224 114.076L146 103.3L156.776 114.076C158.008 115.308 160.005 115.308 161.236 114.076L164.076 111.236C165.308 110.005 165.308 108.008 164.076 106.776L153.3 96L164.076 85.2239C165.308 83.9922 165.308 81.9954 164.076 80.7637Z"
      fill="#001C35"
    />
  </svg>
);

const ComponentSVG = () => (
  <svg height="64" width="64" viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M85.8893 4.60219C92.0256 -1.53407 101.974 -1.53406 108.111 4.60219L189.398 85.8893C195.534 92.0256 195.534 101.974 189.398 108.111L108.111 189.398C101.974 195.534 92.0256 195.534 85.8893 189.398L4.60219 108.111C-1.53407 101.974 -1.53406 92.0256 4.60219 85.8893L85.8893 4.60219Z"
      fill="#FFB980"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M68.5079 60.4123C65.6415 57.5459 65.6415 52.8985 68.5079 50.0321L91.7691 26.7709C94.6355 23.9045 99.2829 23.9045 102.149 26.7709L125.411 50.0321C128.277 52.8985 128.277 57.5459 125.411 60.4123L102.149 83.6735C99.2829 86.5399 94.6355 86.5399 91.7691 83.6735L68.5079 60.4123Z"
      fill="#46280D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M68.5079 144.122C65.6415 141.256 65.6415 136.608 68.5079 133.742L91.7691 110.481C94.6355 107.614 99.2829 107.614 102.149 110.481L125.411 133.742C128.277 136.608 128.277 141.256 125.411 144.122L102.149 167.383C99.2829 170.25 94.6355 170.25 91.7691 167.383L68.5079 144.122Z"
      fill="#D08139"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M60.2944 125.528C57.428 128.395 52.7806 128.395 49.9141 125.528L26.653 102.267C23.7865 99.4009 23.7865 94.7535 26.653 91.8871L49.9141 68.6259C52.7806 65.7595 57.428 65.7595 60.2944 68.6259L83.5556 91.8871C86.422 94.7535 86.422 99.4009 83.5556 102.267L60.2944 125.528Z"
      fill="#D08139"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M144.004 125.528C141.138 128.395 136.49 128.395 133.624 125.528L110.363 102.267C107.496 99.4009 107.496 94.7535 110.363 91.8871L133.624 68.6259C136.49 65.7595 141.138 65.7595 144.004 68.6259L167.265 91.8871C170.132 94.7535 170.132 99.4009 167.265 102.267L144.004 125.528Z"
      fill="#D08139"
    />
  </svg>
);

const ExamplesSVG = () => (
  <svg height="64" width="74" viewBox="0 0 206 234" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 56.2614C0 52.2335 3.26529 48.9682 7.29323 48.9682H186.707C190.735 48.9682 194 52.2335 194 56.2614V124.818C194 128.846 190.735 132.111 186.707 132.111H7.29323C3.26529 132.111 0 128.846 0 124.818V56.2614Z"
      fill="#EFFAEE"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.6193 93.6321C22.9114 91.9242 22.9114 89.1551 24.6193 87.4472L38.479 73.5875C40.1869 71.8796 42.956 71.8796 44.6639 73.5875L58.5236 87.4472C60.2315 89.1551 60.2315 91.9242 58.5236 93.6321L44.6639 107.492C42.956 109.2 40.1869 109.2 38.479 107.492L24.6193 93.6321Z"
      fill="#001B07"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M80.0479 93.6321C78.3399 91.9242 78.3399 89.1551 80.0479 87.4472L93.9076 73.5875C95.6155 71.8796 98.3845 71.8796 100.092 73.5875L113.952 87.4472C115.66 89.1551 115.66 91.9242 113.952 93.6321L100.092 107.492C98.3845 109.2 95.6155 109.2 93.9076 107.492L80.0479 93.6321Z"
      fill="#001B07"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M135.476 93.6321C133.769 91.9242 133.769 89.1551 135.476 87.4472L149.336 73.5875C151.044 71.8796 153.813 71.8796 155.521 73.5875L169.381 87.4472C171.089 89.1551 171.089 91.9242 169.381 93.6321L155.521 107.492C153.813 109.2 151.044 109.2 149.336 107.492L135.476 93.6321Z"
      fill="#001B07"
    />
    <g filter="url(#filter0_d_936_2023)">
      <path
        d="M118.151 222C114.123 222 110.857 218.735 110.857 214.707L110.857 35.2932C110.857 31.2653 114.123 28 118.151 28L186.707 28C190.735 28 194 31.2653 194 35.2932L194 214.707C194 218.735 190.735 222 186.707 222H118.151Z"
        fill="#1F4F17"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M149.336 52.6193C151.044 50.9114 153.813 50.9114 155.521 52.6193L169.381 66.479C171.089 68.1869 171.089 70.956 169.381 72.6639L155.521 86.5236C153.813 88.2315 151.044 88.2315 149.336 86.5236L135.477 72.6639C133.769 70.956 133.769 68.1869 135.477 66.479L149.336 52.6193Z"
        fill="#B2F5A7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M149.336 108.048C151.044 106.34 153.813 106.34 155.521 108.048L169.381 121.908C171.089 123.615 171.089 126.385 169.381 128.092L155.521 141.952C153.813 143.66 151.044 143.66 149.336 141.952L135.477 128.092C133.769 126.385 133.769 123.615 135.477 121.908L149.336 108.048Z"
        fill="#B2F5A7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M149.336 163.469C151.044 161.771 153.813 161.771 155.521 163.469L169.381 177.243C171.089 178.94 171.089 181.692 169.381 183.389L155.521 197.164C153.813 198.861 151.044 198.861 149.336 197.164L135.477 183.389C133.769 181.692 133.769 178.94 135.477 177.243L149.336 163.469Z"
        fill="#B2F5A7"
      />
    </g>
    <g filter="url(#filter1_d_936_2023)">
      <path
        d="M41.2068 127.735C41.2068 123.707 44.4721 120.442 48.5 120.442H117.056C121.084 120.442 124.35 123.707 124.35 127.735V196.291C124.35 200.319 121.084 203.584 117.056 203.584H48.5C44.4721 203.584 41.2068 200.319 41.2068 196.291V127.735Z"
        fill="#B2F5A7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.6858 145.061C81.3937 143.353 84.1627 143.353 85.8706 145.061L99.7304 158.921C101.438 160.628 101.438 163.398 99.7304 165.105L85.8706 178.965C84.1627 180.673 81.3937 180.673 79.6858 178.965L65.8261 165.105C64.1182 163.398 64.1182 160.628 65.8261 158.921L79.6858 145.061Z"
        fill="#001B07"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_936_2023"
        x="82.8574"
        y="0"
        width="123.143"
        height="234"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-8" dy="-8" />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.157715 0 0 0 0 0.0405552 0 0 0 0.12 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_936_2023" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_936_2023" result="shape" />
      </filter>
      <filter
        id="filter1_d_936_2023"
        x="25.2068"
        y="96.4416"
        width="123.143"
        height="123.143"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="4" dy="-4" />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0732747 0 0 0 0 0.0188421 0 0 0 0.2 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_936_2023" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_936_2023" result="shape" />
      </filter>
    </defs>
  </svg>
);

const UserResearchSVG = () => (
  <svg height="64" width="64" viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M-0.000244141 15.8002H159V166.681C159 173.374 153.602 178.8 146.943 178.8H12.0568C5.39794 178.8 -9.77581e-05 173.374 -9.77581e-05 166.681L-0.000244141 15.8002Z"
      fill="#F1B5FF"
    />
    <path
      d="M-0.000244141 14.8002H159V165.681C159 172.374 153.602 177.8 146.943 177.8H12.0568C5.39794 177.8 -9.77581e-05 172.374 -9.77581e-05 165.681L-0.000244141 14.8002Z"
      fill="#F1B5FF"
    />
    <path
      d="M172 103.8C172 140.803 142.003 170.8 105 170.8C67.9967 170.8 37.9998 140.803 37.9998 103.8C37.9998 66.7966 67.9967 36.7997 105 36.7997C142.003 36.7997 172 66.7966 172 103.8Z"
      fill="#30003C"
    />
    <path
      d="M52.9998 55.7997C52.9998 64.084 46.284 70.7997 37.9998 70.7997C29.7155 70.7997 22.9998 64.084 22.9998 55.7997C22.9998 47.5154 29.7155 40.7997 37.9998 40.7997C46.284 40.7997 52.9998 47.5154 52.9998 55.7997Z"
      fill="#D68BE7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.4733 47.4327C37.3163 46.5896 38.6832 46.5896 39.5262 47.4327L46.3675 54.2739C47.2105 55.117 47.2105 56.4838 46.3675 57.3268L39.5262 64.1681C38.6832 65.0111 37.3163 65.0111 36.4733 64.1681L29.632 57.3268C28.789 56.4838 28.789 55.117 29.632 54.2739L36.4733 47.4327Z"
      fill="#F1B5FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M104.726 26.8004C94.5185 26.8004 84.4113 28.8108 74.9812 32.7169C65.5511 36.623 56.9826 42.3482 49.7651 49.5657C42.5476 56.7832 36.8224 65.3517 32.9163 74.7818C29.0102 84.2119 26.9998 94.3191 26.9998 104.526C26.9998 114.733 29.0102 124.84 32.9163 134.271C36.8224 143.701 42.5476 152.269 49.7651 159.487C56.9826 166.704 65.5511 172.429 74.9812 176.335C84.4113 180.242 94.5185 182.252 104.726 182.252C114.933 182.252 125.04 180.242 134.47 176.335C140.347 173.901 145.889 170.76 150.979 166.992L174.429 190.443C178.906 194.92 186.165 194.92 190.642 190.443C195.119 185.966 195.119 178.707 190.642 174.23L167.191 150.779C170.96 145.69 174.1 140.148 176.535 134.271C180.441 124.84 182.451 114.733 182.451 104.526C182.451 94.3191 180.441 84.2119 176.535 74.7818C172.629 65.3517 166.903 56.7832 159.686 49.5657C152.468 42.3482 143.9 36.623 134.47 32.7169C125.04 28.8108 114.933 26.8004 104.726 26.8004ZM83.7554 53.8996C90.4037 51.1458 97.5294 49.7284 104.726 49.7284C111.922 49.7284 119.047 51.1458 125.696 53.8996C132.344 56.6535 138.385 60.6899 143.473 65.7783C148.562 70.8668 152.598 76.9076 155.352 83.556C158.106 90.2044 159.523 97.33 159.523 104.526C159.523 111.722 158.106 118.848 155.352 125.496C152.598 132.145 148.562 138.186 143.473 143.274C138.385 148.363 132.344 152.399 125.696 155.153C119.047 157.907 111.922 159.324 104.726 159.324C97.5294 159.324 90.4037 157.907 83.7554 155.153C77.107 152.399 71.0661 148.363 65.9777 143.274C60.8892 138.186 56.8529 132.145 54.099 125.496C51.3452 118.848 49.9278 111.722 49.9278 104.526C49.9278 97.33 51.3452 90.2044 54.099 83.556C56.8529 76.9076 60.8892 70.8667 65.9777 65.7783C71.0661 60.6899 77.107 56.6535 83.7554 53.8996Z"
      fill="#A953BC"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M98.6484 71.2241C101.88 67.9925 107.12 67.9925 110.351 71.2241L136.576 97.449C139.808 100.681 139.808 105.92 136.576 109.152L110.351 135.377C107.12 138.608 101.88 138.608 98.6484 135.377L72.4235 109.152C69.1918 105.92 69.1918 100.681 72.4235 97.449L98.6484 71.2241Z"
      fill="#F1B5FF"
    />
    <path
      d="M-0.000244141 5.23206C-0.000244141 2.34247 2.45871 0 5.49198 0L32.1293 0.131182V14.8002H-0.000244141L-0.000244141 5.23206Z"
      fill="#A953BC"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.1293 0.131182L23.3417 0.0879056V14.8002H32.1293V0.131182Z"
      fill="#F1B5FF"
    />
    <path
      d="M32.1293 0.131182L153.5 0C156.533 0 158.992 2.34247 158.992 5.23206L159 14.8002H32.1293V0.131182Z"
      fill="#A953BC"
    />
    <path
      d="M149.251 7.06328C149.251 8.94152 147.653 10.4641 145.681 10.4641C143.709 10.4641 142.111 8.94152 142.111 7.06328C142.111 5.18505 143.709 3.66244 145.681 3.66244C147.653 3.66244 149.251 5.18505 149.251 7.06328Z"
      fill="#30003C"
    />
    <path
      d="M136.619 7.06328C136.619 8.94152 135.021 10.4641 133.049 10.4641C131.077 10.4641 129.479 8.94152 129.479 7.06328C129.479 5.18505 131.077 3.66244 133.049 3.66244C135.021 3.66244 136.619 5.18505 136.619 7.06328Z"
      fill="#30003C"
    />
  </svg>
);

const HEARTBEAT = HeartbeatJSON[0];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - homepage`}
      description="NL Design System samenwerken aan componenten en richtlijnen voor een begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening"
      wrapperClassName="container--narrow"
    >
      <main>
        <HomepageHero title="NL Design System">
          <Paragraph lead>
            Met een actieve community van specialisten verzamelt het kernteam de beste{' '}
            <Link to="/richtlijnen">richtlijnen</Link>, <Link to="/componenten">componenten</Link> en{' '}
            <Link to="/voorbeelden">voorbeelden</Link> om robuuste websites en webapplicaties voor de digitale overheid
            te bouwen.
          </Paragraph>
          <Paragraph>
            NL Design System helpt toegankelijke, gebruiksvriendelijk oplossingen te maken die met behulp van het{' '}
            <Link to="/handboek/estafettemodel">Estafettemodel</Link> toewerken naar een consistente gebruikerservaring
            bij de hele overheid. Het bevat de basisonderdelen waarover je afspraken kunt maken, gebruikersonderzoek
            kunt doen en kunt hergebruiken.
          </Paragraph>
          <Link href="/handboek/introductie">
            Lees de introductie{' '}
            <Icon style={{ '--utrecht-icon-inset-block-start': '4px' }}>
              <IconArrowRight />
            </Icon>
          </Link>
        </HomepageHero>

        <div className="container">
          <Heading2>Meedoen als...</Heading2>
          <Paragraph>
            Meedoen? In het Handboek vind je gegroepeerd per doelgroep alle informatie die je nodig hebt om aan de slag
            te gaan!
          </Paragraph>
          <CardGroup appearance="medium">
            <Card component="section" appearance="medium">
              <CardIllustration background="light-blue">
                <DeveloperSVG />
              </CardIllustration>
              <CardContent>
                <Heading3>
                  <Link to="/handboek/developer/overzicht">Developer</Link>
                </Heading3>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardIllustration background="light-pink">
                <DesignerSVG />
              </CardIllustration>
              <CardContent>
                <Heading3>
                  <Link to="/handboek/designer/overzicht">Designer</Link>
                </Heading3>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardIllustration background="light-purple">
                <ManagerSVG />
              </CardIllustration>
              <CardContent>
                <Heading3>
                  <Link to="/handboek/manager/introductie">Manager</Link>
                </Heading3>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardIllustration background="light-green">
                <ContentSVG />
              </CardIllustration>
              <CardContent>
                <Heading3>
                  <Link to="/richtlijnen/content">Contentschrijver</Link>
                </Heading3>
              </CardContent>
            </Card>
          </CardGroup>
        </div>
        <div className="container" style={{ paddingBlockEnd: '20px' }}>
          <Heading2>
            Heartbeat van{' '}
            {new Date(HEARTBEAT.date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Heading2>
          <Paragraph>
            Elke 2 weken delen het Kernteam en de Community waar ze mee bezig zijn in de Heartbeat. Bekijk gelijk de
            laatste Heartbeat over "{HEARTBEAT.topic}"
          </Paragraph>
          <Paragraph>
            Of bekijk de 50+ eerdere opnames via het{' '}
            <Link to="/events/heartbeat/videos">overzicht van alle Heartbeats</Link>.
          </Paragraph>
          <VideoPlayer videoId={HEARTBEAT.youtubeId} />
        </div>
        <div className="container">
          <Heading2>Gebruik NL Design System</Heading2>
          <CardGroup>
            <Card component="section" appearance="medium">
              <CardIllustration background="dark-blue">
                <GuidelineSVG />
              </CardIllustration>
              <CardContent>
                <div>
                  <Heading2>
                    <Link to="/richtlijnen">Richtlijnen</Link>
                  </Heading2>
                  <Paragraph>
                    Fundamentele richtlijnen voor het toepassen van stijl elementen zoals typografie, kleuren en iconen.
                  </Paragraph>
                </div>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardIllustration background="dark-orange">
                <ComponentSVG />
              </CardIllustration>
              <CardContent>
                <div>
                  <Heading2>
                    <Link to="/componenten">Componenten</Link>
                  </Heading2>
                  <Paragraph>
                    Een overzicht van herbruikbare, toegankelijke componenten voor formulieren, navigatie, tabellen en
                    meer.
                  </Paragraph>
                </div>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardIllustration background="dark-green">
                <ExamplesSVG />
              </CardIllustration>
              <CardContent>
                <div>
                  <Heading2>
                    <Link to="/voorbeelden">Voorbeelden</Link>
                  </Heading2>
                  <Paragraph>
                    Een overzicht van patronen en templates om vaak voorkomende scenario's op een consistente,
                    weloverwogen manier op te lossen.
                  </Paragraph>
                </div>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardIllustration background="dark-purple">
                <UserResearchSVG />
              </CardIllustration>
              <CardContent>
                <div>
                  <Heading2>
                    <Link href="/voorbeelden/onderzoek">Gebruikersonderzoek</Link>
                  </Heading2>
                  <Paragraph>
                    NL Design System verzamelt en publiceert gebruikersonderzoeken en faciliteert de community om samen
                    te werken aan nieuwe onderzoeken.
                  </Paragraph>
                </div>
              </CardContent>
            </Card>
          </CardGroup>
        </div>
        <div className="container" style={{ paddingBlockEnd: '40px' }}>
          <Heading2>Wie doen er al mee?</Heading2>
          <CardGroup appearance="small">
            <Card appearance="small" href="https://github.com/nl-design-system/utrecht">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__utrecht.svg"
                  alt="Gemeente Utrecht logo, naar Gemeente Utrecht op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/denhaag">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__denhaag.svg"
                  alt="Gemeente Den Haag logo, naar Gemeente Den Haag op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/amsterdam">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__amsterdam.svg"
                  alt="Gemeente Amsterdam logo, naar Gemeente Amsterdam op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/rotterdam">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rotterdam.svg"
                  alt="Gemeente Rotterdam logo, naar Gemeente Rotterdam op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/tilburg">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__tilburg.png"
                  alt="Gemeente Tilburg logo, naar Gemeente Tilburg op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/rvo">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rvo.svg"
                  alt="Rijksdienst voor Ondernemend Nederland logo, naar RVO op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/lux">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__logius.png"
                  alt="Logius logo, naar LUX op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/rijkshuisstijl-community">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rijkshuisstijl-community.png"
                  alt="Rijkshuisstijl Community logo, naar Rijkshuisstijl Community op GitHub"
                />
              </CardIllustration>
            </Card>
          </CardGroup>
          <Paragraph className="homepage__paragraph">
            Naast de organisaties die componenten bijdragen doen{' '}
            <Link to="/community/wie-doet-mee">diverse andere organisaties</Link> mee in de community van NL Design
            System.
          </Paragraph>
        </div>
        <div className="container">
          <Heading2>Blijf op de hoogte</Heading2>
          <CardGroup>
            <Card component="section" appearance="medium" background>
              <CardContent>
                <div>
                  <Heading3>Heartbeat</Heading3>
                  <Paragraph>
                    Sluit aan bij de 2-wekelijkse online bijeenkomst waarbij ontwikkelingen rondom het NL Design System
                    worden besproken.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link href="/events/heartbeat/aanmelden">Meld je aan voor de Heartbeat</Link>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium" background>
              <CardContent>
                <div>
                  <Heading3>Nieuwsbrief</Heading3>
                  <Paragraph>
                    Meld je aan voor de nieuwsbrief en ontvang elke maand een update van de ontwikkelingen rondom het NL
                    Design System.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link href="/project/blijf-op-de-hoogte#nieuwsbrief">Meld je aan voor de nieuwsbrief</Link>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium" background>
              <CardContent>
                <div>
                  <Heading3>Design Open Hour</Heading3>
                  <Paragraph>
                    Wees welkom bij de 2-wekelijkse online bijeenkomst waar designers informatie, inzichten en tips uit
                    te wisselen.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link href="/events/design-open-hour/aanmelden">Meld je aan voor het Design Open Hour</Link>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium" background>
              <CardContent>
                <div>
                  <Heading3>Developer Open Hour</Heading3>
                  <Paragraph>
                    Wees welkom bij de wekelijkse online bijeenkomst waar developers informatie, inzichten en tips uit
                    wisselen.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link href="/events/developer-open-hour/aanmelden">Meld je aan voor de Developer Open Hour</Link>
                </Paragraph>
              </CardContent>
            </Card>
          </CardGroup>
        </div>
      </main>
    </Layout>
  );
}
