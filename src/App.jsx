import React, { useState,useEffect, Suspense } from "react";
import Header from "./components/Header/header";
const ReactPlayer = React.lazy(() => import("react-player"));
import { BounceLoader } from "react-spinners";
import Loading from './components/Loader/Loader'
import Lottie from "lottie-react";
import 'animate.css';

import pattern from "./assets/svg/pattern-1.svg";
import pattern_mob from "./assets/svg/pattern-1-mob.svg"
import video from "./assets/images/video-img.png";
import mobile from "./assets/images/mobile-img.webp";
import mobile2 from "./assets/images/mobile-img.png"
import facebook from "./assets/svg/facebook.svg";
import instagram from "./assets/svg/instagram-icon.svg";
import youtube from "./assets/svg/youtube.svg";
import love_icon from "./assets/images/love-icon.png"
import like_icon from "./assets/svg/like-icon.svg"
import follow_icon from "./assets/svg/follow-icon.svg"
import fire_icom from "./assets/svg/fire-icon.svg"
import Confetti from "./assets/images/confetti.json"
function Loader() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <BounceLoader color="#0B434B" />
      <p>Loading video...</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    const confettiTimer = setTimeout(() => {
      setShowConfetti(true);
    }, 4000);

    return () => clearTimeout(confettiTimer);
  }, []);

  
  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <div className="thank-you-top-section">
      {showConfetti && (
          <div className="confetti-animation">
            <Lottie animationData={Confetti} loop={false}  />
          </div>
        )}
        <h1 className="hidden-initially animate__animated animate__fadeInUp">Congratulations</h1>
        <p className="hidden-initially animate__animated animate__fadeInUp animate__delay-1s">
          You Successfully Claimed Your Free Consultation Our Consultant Will
          Call You Shortly
        </p>
        <h2 className="hidden-initially custom-animate__fadeInUp animate__animated animate__fadeInUp animate__delay-1s ">Thank You</h2>
      </div>
      <div className="thank-you-video-main ">
        <div className="graphic-pattern"></div>
        <div className="graphic-pattern-mob"></div>
        {/* <img className="graphic-pattern-mob" src={pattern_mob} alt="" /> */}
        <div className="form-svg-bg">
          <svg
            className="icf-form-main-svg "
            xmlns="http://www.w3.org/2000/svg"
            width="156"
            height="75"
            viewBox="0 0 76 156"
            fill="none"
          >
            <path
              d="M39.2891 1L39.2891 128"
              stroke="#0B434B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9297 110.985L39.2003 129.256L57.4709 110.985"
              stroke="#0B434B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="37.7907"
              cy="118.209"
              r="36.7907"
              transform="rotate(-90 37.7907 118.209)"
              stroke="#259D4A"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="thank-you-video">
          <h3 className="text-[#0B434B]">
           <span className="text-[#259D4A]">Learners University College</span>  is For Dreamers, Achievers, And
            Pioneers.
          </h3>
          {/* <div className="video-player">
            <Player/>
          </div> */}
              {/* <div className="video-player">
          <iframe className="video-player-iframe" title="vimeo-player" src="https://player.vimeo.com/video/763299013?h=6e0c81e5d9" width="100%" height="100%" frameborder="0"    allowfullscreen></iframe>
              </div> */}
          <div className="player-container">
          <Suspense fallback={<Loader />}>
          <ReactPlayer
  url="https://www.youtube.com/watch?v=n4-D0xBXkdI&modestbranding=1"
  controls={false}
  playing={playing}
  width="100%"
  height="100%"
  onPlay={() => setPlaying(true)}
  onPause={() => setPlaying(false)}
  onEnded={() => setPlaying(false)}
/>
          </Suspense>
          {!playing && (
            <div className="custom-play-button" onClick={handlePlayPause}>
              {/* <div className="pulse-circle"></div> */}

              <svg
                className="pulse-circle"
                width="144"
                height="144"
                viewBox="0 0 144 144"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_1033_15)">
                  <circle
                    cx="71.5059"
                    cy="71.5059"
                    r="71.5059"
                    fill="#259D4A"
                  />
                </g>
                <path
                  d="M100.372 66.2702C105.631 69.3067 105.631 76.8978 100.372 79.9343L63.8852 101C58.6259 104.036 52.0517 100.241 52.0517 94.1677L52.0517 52.0368C52.0517 45.9638 58.6259 42.1683 63.8852 45.2047L100.372 66.2702Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_b_1033_15"
                    x="-6.78073"
                    y="-6.78073"
                    width="156.573"
                    height="156.573"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="3.39037"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1033_15"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1033_15"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          )}
        </div>

        </div>
      </div>


      <div className="social-media-main">
        <div className="social-media-inner">
          <div className=" social-media-left">
            <h3>Stay In Touch With Us To Get New Tips & Techniques</h3>
            <div className="social-cards-main">
              <div className="social-card">
                <div className="social-card-head">
                  <img src={instagram} alt="" />
                  <h4>Instagram</h4>
                </div>
                <p>
                  Follow Learners University College on Instagram for free
                  educational teachings, Motivational and inspirational posts,
                </p>
              </div>
              <div className="social-card">
                <div className="social-card-head">
                  <img src={facebook} alt="" />
                  <h4>Facebook</h4>
                </div>
                <p>
                  Connect with us on Facebook to get free informational videos
                  and inspirational stories and posts.
                </p>
              </div>
              <div className="social-card">
                <div className="social-card-head">
                  <img src={youtube} alt="" />
                  <h4>Youtube</h4>
                </div>
                <p>
                  Subscribe our Youtube channel for access to free coaching and
                  teaching videos on developing your skills.
                </p>
              </div>
              <div className="social-card">
                <div className="social-card-head">
                  <img src={instagram} alt="" />
                  <h4>LinkedIn</h4>
                </div>
                <p>
                  Follow Learners University College on Instagram for free
                  educational teachings, Motivational and inspirational posts,
                </p>
              </div>
            </div>
          </div>

          <div className="social-main-image-div">
            <img className="love-icon" src={love_icon} alt="" />
            <img className="like-icon" src={like_icon} alt="" />
            <img className=" social-main-image-right" src={mobile} alt="" />
            <img className="social-main-image-right-mob" src={mobile2} alt="" />
            <img className="follow-icon" src={follow_icon} alt="" />
            <img className="fire-icon" src={fire_icom} alt="" />
            
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="map-main">
          <div className="map">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1803.2636719674551!2d55.45647343147658!3d25.320079606252662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b8e879d1579%3A0x419e8f2f88063d86!2sLearners%20University%20College%20-%20Sharjah%20Branch!5e0!3m2!1sen!2sin!4v1702282488274!5m2!1sen!2sin"
  width="416"
  height="311"
  style={{ border: "0" }} // Corrected the style attribute
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>

          </div>
          <div className="address-section">
            <div className="address-sub">
            <div className="address-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.2015 30.3221C31.1863 29.4791 31.7559 28.2496 31.7618 26.9533V22.2289C31.7618 20.8534 30.8653 19.6387 29.5511 19.2331L24.1007 17.5511C23.117 17.2476 22.0471 17.4462 21.2378 18.0826C19.9464 19.0983 18.1253 19.1665 16.8764 18.0989C16.3048 17.6103 15.7478 17.0956 15.207 16.5549C14.6662 16.014 14.1515 15.457 13.6629 14.8854C12.5953 13.6365 12.6635 11.8154 13.6792 10.524C14.3156 9.71482 14.5142 8.64482 14.2107 7.66115L12.5288 2.21082C12.1232 0.896494 10.9083 0 9.53282 0H4.80852C3.51223 0.00597286 2.2826 0.575496 1.43969 1.56034C0.743011 2.37435 0.348724 3.41279 0.415523 4.48214C0.836586 11.2218 3.62182 17.8407 8.77145 22.9904C13.9211 28.14 20.54 30.9252 27.2797 31.3462C28.349 31.413 29.3874 31.0188 30.2015 30.3221ZM10.1203 11.2452C9.47927 12.0602 9.4477 13.1988 10.0425 14.048C11.0696 15.5142 12.2371 16.9104 13.5443 18.2175C14.8514 19.5247 16.2476 20.6923 17.7138 21.7193C18.563 22.3141 19.7016 22.2825 20.5167 21.6415L22.6915 19.931C22.8939 19.7719 23.1614 19.7222 23.4073 19.7981L28.8575 21.48C29.1861 21.5815 29.4103 21.8851 29.4103 22.2289V26.9467C29.4062 27.5583 29.1371 28.1378 28.6724 28.5356C28.267 28.8826 27.8158 29.0237 27.4262 28.9994C21.2364 28.6127 15.1634 26.0567 10.4342 21.3277C5.70514 16.5984 3.14918 10.5255 2.76247 4.33552C2.73814 3.94601 2.87924 3.4948 3.2262 3.0894C3.62388 2.62477 4.20354 2.35561 4.81495 2.35152H9.53282C9.87669 2.35152 10.1804 2.57565 10.2818 2.90422L11.9637 8.35455C12.0396 8.60045 11.99 8.86796 11.8309 9.07026L10.1203 11.2452Z"
                  fill="#0B434B"
                />
              </svg>
              <h6>+971 50 418 1328</h6>
            </div>
            <div className="address-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.3577 14.2169C26.3577 17.1279 23.998 19.4876 21.087 19.4876C18.1762 19.4876 15.8164 17.1279 15.8164 14.2169C15.8164 11.306 18.1762 8.94629 21.087 8.94629C23.998 8.94629 26.3577 11.306 26.3577 14.2169ZM23.7224 14.2169C23.7224 15.6724 22.5424 16.8523 21.087 16.8523C19.6316 16.8523 18.4517 15.6724 18.4517 14.2169C18.4517 12.7615 19.6316 11.5816 21.087 11.5816C22.5424 11.5816 23.7224 12.7615 23.7224 14.2169Z"
                  fill="#0B434B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.2675 31.5218C26.8006 28.0574 33.3854 20.7268 33.3854 14.2169C33.3854 7.38261 27.8794 1.9187 21.0872 1.9187C14.2952 1.9187 8.78906 7.38261 8.78906 14.2169C8.78906 20.7268 15.3739 28.0574 18.907 31.5218C20.1343 32.7255 22.0402 32.7255 23.2675 31.5218ZM27.4702 22.5326C29.4685 19.585 30.7501 16.6687 30.7501 14.2169C30.7501 8.84395 26.4298 4.55403 21.0872 4.55403C15.7447 4.55403 11.4244 8.84395 11.4244 14.2169C11.4244 16.6687 12.706 19.585 14.7044 22.5326C16.6547 25.4091 19.0484 27.9696 20.752 29.6404C20.8676 29.7535 20.9862 29.7892 21.0872 29.7892C21.1883 29.7892 21.3069 29.7535 21.4225 29.6404C23.1261 27.9696 25.5199 25.4091 27.4702 22.5326Z"
                  fill="#0B434B"
                />
                <path
                  d="M9.94153 26.6784C9.32889 26.0658 8.30187 26.2011 7.86867 26.9513L2.28864 36.6162C1.2743 38.3731 2.54222 40.5692 4.5709 40.5692H37.6018C39.6304 40.5692 40.8984 38.3731 39.8841 36.6162L34.3022 26.9479C33.8689 26.1978 32.8418 26.0625 32.2292 26.6751C31.8076 27.0968 31.7217 27.7493 32.0198 28.2656L37.6018 37.9339H4.5709L10.1509 28.2689C10.4491 27.7526 10.3632 27.1001 9.94153 26.6784Z"
                  fill="#0B434B"
                />
              </svg>
              <h6>
                B01, Ground Floor, North Entrance – Sharjah Book Authority – Al
                Zahiya, Sharjah, UAE
              </h6>
            </div>
            
            </div>

            <div className="address-sub">
            <div className="address-content">
            <a
            className="address-content"
    href="https://wa.me/971564031122"
    target="_blank"
    rel="noopener noreferrer"
  >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
              >
                <path
                  d="M0 41.0841L2.90374 30.5397C1.10852 27.4447 0.166769 23.9397 0.176579 20.3565C0.176579 9.12871 9.35868 0 20.6303 0C26.1042 0 31.2446 2.11864 35.1 5.96539C38.9651 9.81214 41.0938 14.9281 41.084 20.3663C41.084 31.5941 31.9019 40.7228 20.6205 40.7228H20.6107C17.187 40.7228 13.8222 39.8636 10.8302 38.2429L0 41.0841ZM11.3501 34.5622L11.9681 34.9332C14.5776 36.4758 17.5696 37.2861 20.6205 37.2959H20.6303C29.9988 37.2959 37.6309 29.7098 37.6309 20.376C37.6309 15.8556 35.8651 11.6086 32.6573 8.40622C29.4494 5.20385 25.1723 3.44645 20.6303 3.44645C11.2618 3.43669 3.62968 11.0228 3.62968 20.3565C3.62968 23.5491 4.52238 26.6636 6.22931 29.3583L6.63152 30.0027L4.91478 36.2414L11.3501 34.5622Z"
                  fill="white"
                />
                <path
                  d="M0.716797 40.3715L3.52244 30.1884C1.78608 27.2105 0.873756 23.8227 0.873756 20.3665C0.883566 9.52917 9.74194 0.712891 20.631 0.712891C25.9185 0.712891 30.8725 2.76319 34.6003 6.47325C38.3281 10.1833 40.3784 15.1236 40.3784 20.3762C40.3784 31.2135 31.5102 40.0298 20.631 40.0298H20.6212C17.3152 40.0298 14.0681 39.1999 11.184 37.6378L0.716797 40.3715Z"
                  fill="url(#paint0_linear_1154_1058)"
                />
                <path
                  d="M0 41.0841L2.90374 30.5397C1.10852 27.4447 0.166769 23.9397 0.176579 20.3565C0.176579 9.12871 9.35868 0 20.6303 0C26.1042 0 31.2446 2.11864 35.1 5.96539C38.9651 9.81214 41.0938 14.9281 41.084 20.3663C41.084 31.5941 31.9019 40.7228 20.6205 40.7228H20.6107C17.187 40.7228 13.8222 39.8636 10.8302 38.2429L0 41.0841ZM11.3501 34.5622L11.9681 34.9332C14.5776 36.4758 17.5696 37.2861 20.6205 37.2959H20.6303C29.9988 37.2959 37.6309 29.7098 37.6309 20.376C37.6309 15.8556 35.8651 11.6086 32.6573 8.40622C29.4494 5.20385 25.1723 3.44645 20.6303 3.44645C11.2618 3.43669 3.62968 11.0228 3.62968 20.3565C3.62968 23.5491 4.52238 26.6636 6.22931 29.3583L6.63152 30.0027L4.91478 36.2414L11.3501 34.5622Z"
                  fill="url(#paint1_linear_1154_1058)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5199 11.8445C15.1373 10.9951 14.7351 10.9756 14.3722 10.9658C14.0779 10.9561 13.7345 10.9561 13.3912 10.9561C13.0478 10.9561 12.4985 11.083 12.0276 11.5907C11.5567 12.0984 10.2422 13.3285 10.2422 15.8377C10.2422 18.3371 12.0766 20.7584 12.3317 21.1001C12.5868 21.4419 15.8731 26.7433 21.0625 28.7839C25.3789 30.4827 26.2618 30.141 27.1938 30.0531C28.1257 29.9652 30.2152 28.8229 30.6469 27.6318C31.0687 26.4407 31.0687 25.4253 30.9412 25.2105C30.8136 24.9957 30.4703 24.8688 29.9602 24.6149C29.45 24.3611 26.9387 23.1309 26.4678 22.9552C25.9969 22.7892 25.6536 22.7013 25.3201 23.209C24.9767 23.7167 23.9957 24.859 23.7014 25.2007C23.4071 25.5425 23.103 25.5815 22.5929 25.3277C22.0828 25.0738 20.4347 24.5368 18.4825 22.799C16.962 21.4516 15.932 19.7821 15.6377 19.2744C15.3434 18.7667 15.6082 18.4933 15.8633 18.2395C16.0889 18.0149 16.3734 17.6439 16.6285 17.351C16.8835 17.0581 16.9718 16.8433 17.1386 16.5016C17.3053 16.1599 17.2269 15.867 17.0993 15.6132C16.9718 15.3691 15.9712 12.8501 15.5199 11.8445Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1154_1058"
                    x1="20.5466"
                    y1="40.3695"
                    x2="20.5466"
                    y2="0.711503"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#20B038" />
                    <stop offset="1" stop-color="#60D66A" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1154_1058"
                    x1="20.546"
                    y1="41.0802"
                    x2="20.546"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9F9F9" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
              <h6>+971 56 403 1122</h6>
              </a>
            </div>
            
            <div className="address-content">
              <a className="address-content" href="mailto:info@leanersuae.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="27"
                viewBox="0 0 33 27"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 3.48664C0 1.69532 1.45215 0.243164 3.24348 0.243164H29.1913C30.9827 0.243164 32.4348 1.69532 32.4348 3.48664V22.9475C32.4348 24.7389 30.9827 26.191 29.1913 26.191H3.24348C1.45215 26.191 0 24.7389 0 22.9475V3.48664ZM2.43261 3.48664C2.43261 3.03881 2.79565 2.67577 3.24348 2.67577H29.1913C29.6391 2.67577 30.0022 3.03881 30.0022 3.48664V4.89147L16.2174 12.8522L2.43261 4.89147V3.48664ZM17.4339 14.9588L30.0022 7.70058V22.9475C30.0022 23.3953 29.6391 23.7584 29.1913 23.7584H3.24348C2.79565 23.7584 2.43261 23.3953 2.43261 22.9475V7.70058L15.0009 14.9588C15.7536 15.3934 16.6812 15.3934 17.4339 14.9588Z"
                  fill="#0B434B"
                />
              </svg>
              <h6>info@leanersuae.com</h6>
              </a>
            </div>
            </div>
          </div>
          <svg 
          className="star-icon"
          xmlns="http://www.w3.org/2000/svg" width="147" height="147" viewBox="0 0 147 147" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M108.84 115.459L141.696 116.449L107.453 75.7913L146.829 40.0817L114.139 36.6637L112.53 5.05941L75.8761 38.2995L44.0007 0.452776L38.1761 31.5574L5.32241 30.5695L39.5659 71.228L0.189351 106.937L32.8815 110.354L34.489 141.96L71.1425 108.72L103.017 146.566L108.84 115.459Z" fill="#259D4A"/>
</svg>
        </div>
        <p className="text-[#05170F] font-medium text-center">Landing Page & Digital Marketing By <span className="text-[#009B3E] font-bold">WebQ Media</span></p>
      </div>

    </>
  );
}

export default App;
