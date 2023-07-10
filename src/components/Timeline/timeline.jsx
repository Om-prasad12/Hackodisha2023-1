import React from "react";
import "./timeline.css";
import Image from "next/image";
import Image1 from "./assets/img1.svg";
import Image2 from "./assets/img2.svg";
import Image5 from "./assets/Union.svg";
import Image6 from "./assets/Group 171.svg";
const Timeline = () => {
  return (
    <>
      <div className="topHead">
        <div className="time-head shrink-0">
          <div>
            <Image src={Image6} alt="Image" className="img1"></Image>
          </div>
        </div>
        <div className="line">
          <Image src={Image5} alt="Image" className="img2"></Image>
        </div>
      </div>
      <div className="timeline  h-auto ">
        <div className="circularAnimation1 w-1/2 mt-4 flex flex-col items-end">
          <div className="time-headSvg inline-flex items-center w-auto ">
            <span className="svg1 flex flex-col shrink-0">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="174"
                  height="175"
                  viewBox="0 0 174 175"
                  fill="none"
                >
                  <mask id="path-1-inside-1_141_1795" fill="white">
                    <path d="M5.26562 80.3401C5.51351 62.0782 12.4165 44.5344 24.6793 31L25.351 31.6086C13.2363 44.9794 6.41681 62.3112 6.17192 80.3524L5.26562 80.3401Z" />
                  </mask>
                  <path
                    d="M5.26562 80.3401L4.26572 80.3265L4.25214 81.3264L5.25205 81.34L5.26562 80.3401ZM24.6793 31L25.3508 30.2589L24.6097 29.5875L23.9383 30.3286L24.6793 31ZM25.351 31.6086L26.0921 32.28L26.7635 31.539L26.0225 30.8675L25.351 31.6086ZM6.17192 80.3524L6.15835 81.3523L7.15826 81.3659L7.17183 80.366L6.17192 80.3524ZM6.26553 80.3537C6.51011 62.3353 13.321 45.0253 25.4204 31.6714L23.9383 30.3286C11.5119 44.0434 4.51691 61.8212 4.26572 80.3265L6.26553 80.3537ZM24.0079 31.7411L24.6796 32.3496L26.0225 30.8675L25.3508 30.2589L24.0079 31.7411ZM24.61 30.9371C12.3318 44.4884 5.42021 62.0542 5.17201 80.3388L7.17183 80.366C7.41342 62.5683 14.1409 45.4704 26.0921 32.28L24.61 30.9371ZM6.18549 79.3525L5.2792 79.3402L5.25205 81.34L6.15835 81.3523L6.18549 79.3525Z"
                    fill="#06EBE5"
                    mask="url(#path-1-inside-1_141_1795)"
                  />
                  <line
                    x1="0.0260898"
                    y1="74.5007"
                    x2="6.01792"
                    y2="74.8138"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="1.07509"
                    y1="68.5057"
                    x2="7.00704"
                    y2="69.4068"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="2.07813"
                    y1="62.5061"
                    x2="8.00442"
                    y2="63.4437"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="4.11005"
                    y1="56.5123"
                    x2="9.96291"
                    y2="57.8329"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="6.17356"
                    y1="50.5117"
                    x2="11.8343"
                    y2="52.5006"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="8.21703"
                    y1="44.5496"
                    x2="13.6223"
                    y2="47.1539"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="11.2486"
                    y1="39.5662"
                    x2="16.4543"
                    y2="42.5496"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="14.2486"
                    y1="35.5662"
                    x2="19.4543"
                    y2="38.5496"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="17.3048"
                    y1="31.6036"
                    x2="22.0615"
                    y2="35.2606"
                    stroke="#06EBE5"
                  />
                  <circle
                    cx="88"
                    cy="86"
                    r="78.5"
                    stroke="#06EBE5"
                    strokeWidth="3"
                  />
                  <circle
                    cx="88"
                    cy="86"
                    r="83.5"
                    stroke="#06EBE5"
                    strokeWidth="5"
                    strokeDasharray="10 20 30 40"
                  />
                  <circle
                    cx="88.5"
                    cy="85.5"
                    r="72"
                    stroke="#06EBE5"
                    strokeDasharray="5 2"
                  />
                  <mask id="path-15-inside-2_141_1795" fill="white">
                    <path d="M156 85.5C156 101.368 150.41 116.728 140.211 128.884C130.013 141.04 115.857 149.215 100.231 151.973C84.6051 154.73 68.5068 151.895 54.7632 143.964C41.0196 136.034 30.5093 123.515 25.0777 108.605C19.6461 93.6964 19.6406 77.3503 25.0621 62.4375C30.4835 47.5248 40.9853 34.9986 54.7236 27.0586C68.4618 19.1185 84.5581 16.2722 100.186 19.0193C115.814 21.7665 129.975 29.9315 140.182 42.0807L138.281 43.6776C128.45 31.9752 114.81 24.1105 99.7564 21.4644C84.7031 18.8183 69.1988 21.5599 55.9658 29.2079C42.7329 36.856 32.6173 48.9214 27.3952 63.2857C22.1732 77.6501 22.1785 93.3949 27.4103 107.756C32.6421 122.116 42.7659 134.175 56.004 141.814C69.2421 149.453 84.7483 152.184 99.7998 149.528C114.851 146.872 128.486 138.998 138.309 127.289C148.133 115.58 153.517 100.784 153.517 85.5H156Z" />
                  </mask>
                  <path
                    d="M156 85.5C156 101.368 150.41 116.728 140.211 128.884C130.013 141.04 115.857 149.215 100.231 151.973C84.6051 154.73 68.5068 151.895 54.7632 143.964C41.0196 136.034 30.5093 123.515 25.0777 108.605C19.6461 93.6964 19.6406 77.3503 25.0621 62.4375C30.4835 47.5248 40.9853 34.9986 54.7236 27.0586C68.4618 19.1185 84.5581 16.2722 100.186 19.0193C115.814 21.7665 129.975 29.9315 140.182 42.0807L138.281 43.6776C128.45 31.9752 114.81 24.1105 99.7564 21.4644C84.7031 18.8183 69.1988 21.5599 55.9658 29.2079C42.7329 36.856 32.6173 48.9214 27.3952 63.2857C22.1732 77.6501 22.1785 93.3949 27.4103 107.756C32.6421 122.116 42.7659 134.175 56.004 141.814C69.2421 149.453 84.7483 152.184 99.7998 149.528C114.851 146.872 128.486 138.998 138.309 127.289C148.133 115.58 153.517 100.784 153.517 85.5H156Z"
                    stroke="#06EBE5"
                    strokeWidth="6"
                    strokeLinejoin="round"
                    mask="url(#path-15-inside-2_141_1795)"
                  />
                  <mask id="path-16-inside-3_141_1795" fill="white">
                    <path d="M82.5649 168.865C64.3058 168.463 46.8209 161.412 33.3908 149.035L34.005 148.368C47.2728 160.596 64.5464 167.561 82.5849 167.959L82.5649 168.865Z" />
                  </mask>
                  <path
                    d="M82.5649 168.865C64.3058 168.463 46.8209 161.412 33.3908 149.035L34.005 148.368C47.2728 160.596 64.5464 167.561 82.5849 167.959L82.5649 168.865Z"
                    fill="black"
                  />
                  <path
                    d="M82.5649 168.865L82.5429 169.865L83.5426 169.887L83.5647 168.887L82.5649 168.865ZM33.3908 149.035L32.6554 148.357L31.9777 149.092L32.7131 149.77L33.3908 149.035ZM34.005 148.368L34.6827 147.633L33.9473 146.955L33.2696 147.691L34.005 148.368ZM82.5849 167.959L83.5846 167.981L83.6066 166.981L82.6069 166.959L82.5849 167.959ZM82.5869 167.865C64.5713 167.468 47.3195 160.511 34.0684 148.299L32.7131 149.77C46.3223 162.312 64.0403 169.457 82.5429 169.865L82.5869 167.865ZM34.1261 149.712L34.7403 149.046L33.2696 147.691L32.6554 148.357L34.1261 149.712ZM33.3273 149.104C46.7742 161.496 64.2809 168.556 82.5628 168.959L82.6069 166.959C64.8119 166.567 47.7715 159.695 34.6827 147.633L33.3273 149.104ZM81.5851 167.937L81.5651 168.843L83.5647 168.887L83.5846 167.981L81.5851 167.937Z"
                    fill="#06EBE5"
                    mask="url(#path-16-inside-3_141_1795)"
                  />
                  <line
                    x1="76.6806"
                    y1="174.053"
                    x2="77.0443"
                    y2="168.064"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="70.6977"
                    y1="172.953"
                    x2="71.649"
                    y2="167.029"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="64.706"
                    y1="171.899"
                    x2="65.6937"
                    y2="165.981"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="58.7281"
                    y1="169.817"
                    x2="60.0981"
                    y2="163.975"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="52.7445"
                    y1="167.705"
                    x2="54.7813"
                    y2="162.061"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="46.8014"
                    y1="165.609"
                    x2="49.4514"
                    y2="160.226"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="41.8417"
                    y1="162.535"
                    x2="44.8691"
                    y2="157.355"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="37.8691"
                    y1="159.502"
                    x2="40.8964"
                    y2="154.321"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="33.9343"
                    y1="156.412"
                    x2="37.6314"
                    y2="151.687"
                    stroke="#06EBE5"
                  />
                </svg>
              </span>
              <span className="subSvg self-center">
                <p>Day 1</p>
              </span>
            </span>
            <div className="svg2 flex items-center w-auto">
              <Image src={Image1} alt="Image" className="img3"></Image>
            </div>
          </div>
          <div className="content w-full">
            <span className="contentHead mx-auto">
              <h3 className="mx-auto my-5 ">September 9, 2023</h3>
            </span>
            <div className="">
              <ul className="contentUl grid grid-cols-2 w-fit justify-center gap-x-0 text-left ">
                {[
                  "7:30 AM",	"Check-in starts",
                  "7:30 AM",	"Doors open for participants",
                  "9:00 AM",	"Opening Ceremony",
                  "8:30 AM",	"Hacking Starts",
                  "9:00 AM",	"Team Building Event",
                  "12:00 PM", "Lunch Break",
                  "3:30 PM",	"Fun Event 1",
                  "5:00 PM",	"Hacker Hangout",
                  "8:00 PM",	"Fun Event 2",
                ].map((item, index) => (
                  <li className={`${index%2==0?"w-fit":"w-full"} m-auto `} key={index}>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>

        {/* Animation2 */}

        <div className="circularAnimation2 w-1/2  flex flex-col items-start  px-0 mx-0">
          <div className="headSvg inline-flex items-center w-auto ">
            <div className="svg2 flex items-center w-auto">
              <Image src={Image2} alt="Image" className="img3"></Image>
            </div>
            <span className="svg1 flex flex-col shrink-0">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="174"
                  height="175"
                  viewBox="0 0 174 175"
                  fill="none"
                >
                  <mask id="path-1-inside-1_141_1795" fill="white">
                    <path d="M5.26562 80.3401C5.51351 62.0782 12.4165 44.5344 24.6793 31L25.351 31.6086C13.2363 44.9794 6.41681 62.3112 6.17192 80.3524L5.26562 80.3401Z" />
                  </mask>
                  <path
                    d="M5.26562 80.3401L4.26572 80.3265L4.25214 81.3264L5.25205 81.34L5.26562 80.3401ZM24.6793 31L25.3508 30.2589L24.6097 29.5875L23.9383 30.3286L24.6793 31ZM25.351 31.6086L26.0921 32.28L26.7635 31.539L26.0225 30.8675L25.351 31.6086ZM6.17192 80.3524L6.15835 81.3523L7.15826 81.3659L7.17183 80.366L6.17192 80.3524ZM6.26553 80.3537C6.51011 62.3353 13.321 45.0253 25.4204 31.6714L23.9383 30.3286C11.5119 44.0434 4.51691 61.8212 4.26572 80.3265L6.26553 80.3537ZM24.0079 31.7411L24.6796 32.3496L26.0225 30.8675L25.3508 30.2589L24.0079 31.7411ZM24.61 30.9371C12.3318 44.4884 5.42021 62.0542 5.17201 80.3388L7.17183 80.366C7.41342 62.5683 14.1409 45.4704 26.0921 32.28L24.61 30.9371ZM6.18549 79.3525L5.2792 79.3402L5.25205 81.34L6.15835 81.3523L6.18549 79.3525Z"
                    fill="#06EBE5"
                    mask="url(#path-1-inside-1_141_1795)"
                  />
                  <line
                    x1="0.0260898"
                    y1="74.5007"
                    x2="6.01792"
                    y2="74.8138"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="1.07509"
                    y1="68.5057"
                    x2="7.00704"
                    y2="69.4068"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="2.07813"
                    y1="62.5061"
                    x2="8.00442"
                    y2="63.4437"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="4.11005"
                    y1="56.5123"
                    x2="9.96291"
                    y2="57.8329"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="6.17356"
                    y1="50.5117"
                    x2="11.8343"
                    y2="52.5006"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="8.21703"
                    y1="44.5496"
                    x2="13.6223"
                    y2="47.1539"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="11.2486"
                    y1="39.5662"
                    x2="16.4543"
                    y2="42.5496"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="14.2486"
                    y1="35.5662"
                    x2="19.4543"
                    y2="38.5496"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="17.3048"
                    y1="31.6036"
                    x2="22.0615"
                    y2="35.2606"
                    stroke="#06EBE5"
                  />
                  <circle
                    cx="88"
                    cy="86"
                    r="78.5"
                    stroke="#06EBE5"
                    strokeWidth="3"
                  />
                  <circle
                    cx="88"
                    cy="86"
                    r="83.5"
                    stroke="#06EBE5"
                    strokeWidth="5"
                    strokeDasharray="10 20 30 40"
                  />
                  <circle
                    cx="88.5"
                    cy="85.5"
                    r="72"
                    stroke="#06EBE5"
                    strokeDasharray="5 2"
                  />
                  <mask id="path-15-inside-2_141_1795" fill="white">
                    <path d="M156 85.5C156 101.368 150.41 116.728 140.211 128.884C130.013 141.04 115.857 149.215 100.231 151.973C84.6051 154.73 68.5068 151.895 54.7632 143.964C41.0196 136.034 30.5093 123.515 25.0777 108.605C19.6461 93.6964 19.6406 77.3503 25.0621 62.4375C30.4835 47.5248 40.9853 34.9986 54.7236 27.0586C68.4618 19.1185 84.5581 16.2722 100.186 19.0193C115.814 21.7665 129.975 29.9315 140.182 42.0807L138.281 43.6776C128.45 31.9752 114.81 24.1105 99.7564 21.4644C84.7031 18.8183 69.1988 21.5599 55.9658 29.2079C42.7329 36.856 32.6173 48.9214 27.3952 63.2857C22.1732 77.6501 22.1785 93.3949 27.4103 107.756C32.6421 122.116 42.7659 134.175 56.004 141.814C69.2421 149.453 84.7483 152.184 99.7998 149.528C114.851 146.872 128.486 138.998 138.309 127.289C148.133 115.58 153.517 100.784 153.517 85.5H156Z" />
                  </mask>
                  <path
                    d="M156 85.5C156 101.368 150.41 116.728 140.211 128.884C130.013 141.04 115.857 149.215 100.231 151.973C84.6051 154.73 68.5068 151.895 54.7632 143.964C41.0196 136.034 30.5093 123.515 25.0777 108.605C19.6461 93.6964 19.6406 77.3503 25.0621 62.4375C30.4835 47.5248 40.9853 34.9986 54.7236 27.0586C68.4618 19.1185 84.5581 16.2722 100.186 19.0193C115.814 21.7665 129.975 29.9315 140.182 42.0807L138.281 43.6776C128.45 31.9752 114.81 24.1105 99.7564 21.4644C84.7031 18.8183 69.1988 21.5599 55.9658 29.2079C42.7329 36.856 32.6173 48.9214 27.3952 63.2857C22.1732 77.6501 22.1785 93.3949 27.4103 107.756C32.6421 122.116 42.7659 134.175 56.004 141.814C69.2421 149.453 84.7483 152.184 99.7998 149.528C114.851 146.872 128.486 138.998 138.309 127.289C148.133 115.58 153.517 100.784 153.517 85.5H156Z"
                    stroke="#06EBE5"
                    strokeWidth="6"
                    strokeLinejoin="round"
                    mask="url(#path-15-inside-2_141_1795)"
                  />
                  <mask id="path-16-inside-3_141_1795" fill="white">
                    <path d="M82.5649 168.865C64.3058 168.463 46.8209 161.412 33.3908 149.035L34.005 148.368C47.2728 160.596 64.5464 167.561 82.5849 167.959L82.5649 168.865Z" />
                  </mask>
                  <path
                    d="M82.5649 168.865C64.3058 168.463 46.8209 161.412 33.3908 149.035L34.005 148.368C47.2728 160.596 64.5464 167.561 82.5849 167.959L82.5649 168.865Z"
                    fill="black"
                  />
                  <path
                    d="M82.5649 168.865L82.5429 169.865L83.5426 169.887L83.5647 168.887L82.5649 168.865ZM33.3908 149.035L32.6554 148.357L31.9777 149.092L32.7131 149.77L33.3908 149.035ZM34.005 148.368L34.6827 147.633L33.9473 146.955L33.2696 147.691L34.005 148.368ZM82.5849 167.959L83.5846 167.981L83.6066 166.981L82.6069 166.959L82.5849 167.959ZM82.5869 167.865C64.5713 167.468 47.3195 160.511 34.0684 148.299L32.7131 149.77C46.3223 162.312 64.0403 169.457 82.5429 169.865L82.5869 167.865ZM34.1261 149.712L34.7403 149.046L33.2696 147.691L32.6554 148.357L34.1261 149.712ZM33.3273 149.104C46.7742 161.496 64.2809 168.556 82.5628 168.959L82.6069 166.959C64.8119 166.567 47.7715 159.695 34.6827 147.633L33.3273 149.104ZM81.5851 167.937L81.5651 168.843L83.5647 168.887L83.5846 167.981L81.5851 167.937Z"
                    fill="#06EBE5"
                    mask="url(#path-16-inside-3_141_1795)"
                  />
                  <line
                    x1="76.6806"
                    y1="174.053"
                    x2="77.0443"
                    y2="168.064"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="70.6977"
                    y1="172.953"
                    x2="71.649"
                    y2="167.029"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="64.706"
                    y1="171.899"
                    x2="65.6937"
                    y2="165.981"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="58.7281"
                    y1="169.817"
                    x2="60.0981"
                    y2="163.975"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="52.7445"
                    y1="167.705"
                    x2="54.7813"
                    y2="162.061"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="46.8014"
                    y1="165.609"
                    x2="49.4514"
                    y2="160.226"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="41.8417"
                    y1="162.535"
                    x2="44.8691"
                    y2="157.355"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="37.8691"
                    y1="159.502"
                    x2="40.8964"
                    y2="154.321"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="33.9343"
                    y1="156.412"
                    x2="37.6314"
                    y2="151.687"
                    stroke="#06EBE5"
                  />
                </svg>
              </span>
              <span className="subSvg self-center">
                <p>DAY 2</p>
              </span>
            </span>
          </div>
          <div className="content w-full">
            <span className="contentHead mx-auto">
              <h3 className="mx-auto my-5 ">September 10, 2023</h3>
            </span>
            
            <div className="">
              <ul className="contentUl grid grid-cols-2 w-fit justify-center gap-x-0 text-left  ">
                {[
                  "12:00 AM",
                  "Discord Catch-up Session",
                  "12:00 PM",
                  "Lunch Break",
                  "2:00 PM",
                  "Fun Event 3",
                  "6:00 PM",
                  "Initial Submission Due",
                  "9:00 PM",
                  "Hacking Ends (submissions hard deadline)",
                  "9:20 PM",
                  "Closing Ceremony",
                  "10:00 PM",
                  "Demo Starts",
                  "10:30 PM",
                  "Demo Ends",
                  "11:00 PM",
                  "Event Ends",
                ].map((item, index) => (
                  <li className={`${index%2==0?"w-fit":"w-full"} m-auto `} key={index}>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>

        {/* For Animation-3 */}
        <div className="circularAnimation3 w-1/2 mb-12 flex flex-col items-end">
          <div className="headSvg inline-flex items-center w-auto ">
            <span className="svg1 flex flex-col shrink-0">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="174"
                  height="175"
                  viewBox="0 0 174 175"
                  fill="none"
                >
                  <mask id="path-1-inside-1_141_1795" fill="white">
                    <path d="M5.26562 80.3401C5.51351 62.0782 12.4165 44.5344 24.6793 31L25.351 31.6086C13.2363 44.9794 6.41681 62.3112 6.17192 80.3524L5.26562 80.3401Z" />
                  </mask>
                  <path
                    d="M5.26562 80.3401L4.26572 80.3265L4.25214 81.3264L5.25205 81.34L5.26562 80.3401ZM24.6793 31L25.3508 30.2589L24.6097 29.5875L23.9383 30.3286L24.6793 31ZM25.351 31.6086L26.0921 32.28L26.7635 31.539L26.0225 30.8675L25.351 31.6086ZM6.17192 80.3524L6.15835 81.3523L7.15826 81.3659L7.17183 80.366L6.17192 80.3524ZM6.26553 80.3537C6.51011 62.3353 13.321 45.0253 25.4204 31.6714L23.9383 30.3286C11.5119 44.0434 4.51691 61.8212 4.26572 80.3265L6.26553 80.3537ZM24.0079 31.7411L24.6796 32.3496L26.0225 30.8675L25.3508 30.2589L24.0079 31.7411ZM24.61 30.9371C12.3318 44.4884 5.42021 62.0542 5.17201 80.3388L7.17183 80.366C7.41342 62.5683 14.1409 45.4704 26.0921 32.28L24.61 30.9371ZM6.18549 79.3525L5.2792 79.3402L5.25205 81.34L6.15835 81.3523L6.18549 79.3525Z"
                    fill="#06EBE5"
                    mask="url(#path-1-inside-1_141_1795)"
                  />
                  <line
                    x1="0.0260898"
                    y1="74.5007"
                    x2="6.01792"
                    y2="74.8138"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="1.07509"
                    y1="68.5057"
                    x2="7.00704"
                    y2="69.4068"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="2.07813"
                    y1="62.5061"
                    x2="8.00442"
                    y2="63.4437"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="4.11005"
                    y1="56.5123"
                    x2="9.96291"
                    y2="57.8329"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="6.17356"
                    y1="50.5117"
                    x2="11.8343"
                    y2="52.5006"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="8.21703"
                    y1="44.5496"
                    x2="13.6223"
                    y2="47.1539"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="11.2486"
                    y1="39.5662"
                    x2="16.4543"
                    y2="42.5496"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="14.2486"
                    y1="35.5662"
                    x2="19.4543"
                    y2="38.5496"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="17.3048"
                    y1="31.6036"
                    x2="22.0615"
                    y2="35.2606"
                    stroke="#06EBE5"
                  />
                  <circle
                    cx="88"
                    cy="86"
                    r="78.5"
                    stroke="#06EBE5"
                    strokeWidth="3"
                  />
                  <circle
                    cx="88"
                    cy="86"
                    r="83.5"
                    stroke="#06EBE5"
                    strokeWidth="5"
                    strokeDasharray="10 20 30 40"
                  />
                  <circle
                    cx="88.5"
                    cy="85.5"
                    r="72"
                    stroke="#06EBE5"
                    strokeDasharray="5 2"
                  />
                  <mask id="path-15-inside-2_141_1795" fill="white">
                    <path d="M156 85.5C156 101.368 150.41 116.728 140.211 128.884C130.013 141.04 115.857 149.215 100.231 151.973C84.6051 154.73 68.5068 151.895 54.7632 143.964C41.0196 136.034 30.5093 123.515 25.0777 108.605C19.6461 93.6964 19.6406 77.3503 25.0621 62.4375C30.4835 47.5248 40.9853 34.9986 54.7236 27.0586C68.4618 19.1185 84.5581 16.2722 100.186 19.0193C115.814 21.7665 129.975 29.9315 140.182 42.0807L138.281 43.6776C128.45 31.9752 114.81 24.1105 99.7564 21.4644C84.7031 18.8183 69.1988 21.5599 55.9658 29.2079C42.7329 36.856 32.6173 48.9214 27.3952 63.2857C22.1732 77.6501 22.1785 93.3949 27.4103 107.756C32.6421 122.116 42.7659 134.175 56.004 141.814C69.2421 149.453 84.7483 152.184 99.7998 149.528C114.851 146.872 128.486 138.998 138.309 127.289C148.133 115.58 153.517 100.784 153.517 85.5H156Z" />
                  </mask>
                  <path
                    d="M156 85.5C156 101.368 150.41 116.728 140.211 128.884C130.013 141.04 115.857 149.215 100.231 151.973C84.6051 154.73 68.5068 151.895 54.7632 143.964C41.0196 136.034 30.5093 123.515 25.0777 108.605C19.6461 93.6964 19.6406 77.3503 25.0621 62.4375C30.4835 47.5248 40.9853 34.9986 54.7236 27.0586C68.4618 19.1185 84.5581 16.2722 100.186 19.0193C115.814 21.7665 129.975 29.9315 140.182 42.0807L138.281 43.6776C128.45 31.9752 114.81 24.1105 99.7564 21.4644C84.7031 18.8183 69.1988 21.5599 55.9658 29.2079C42.7329 36.856 32.6173 48.9214 27.3952 63.2857C22.1732 77.6501 22.1785 93.3949 27.4103 107.756C32.6421 122.116 42.7659 134.175 56.004 141.814C69.2421 149.453 84.7483 152.184 99.7998 149.528C114.851 146.872 128.486 138.998 138.309 127.289C148.133 115.58 153.517 100.784 153.517 85.5H156Z"
                    stroke="#06EBE5"
                    strokeWidth="6"
                    strokeLinejoin="round"
                    mask="url(#path-15-inside-2_141_1795)"
                  />
                  <mask id="path-16-inside-3_141_1795" fill="white">
                    <path d="M82.5649 168.865C64.3058 168.463 46.8209 161.412 33.3908 149.035L34.005 148.368C47.2728 160.596 64.5464 167.561 82.5849 167.959L82.5649 168.865Z" />
                  </mask>
                  <path
                    d="M82.5649 168.865C64.3058 168.463 46.8209 161.412 33.3908 149.035L34.005 148.368C47.2728 160.596 64.5464 167.561 82.5849 167.959L82.5649 168.865Z"
                    fill="black"
                  />
                  <path
                    d="M82.5649 168.865L82.5429 169.865L83.5426 169.887L83.5647 168.887L82.5649 168.865ZM33.3908 149.035L32.6554 148.357L31.9777 149.092L32.7131 149.77L33.3908 149.035ZM34.005 148.368L34.6827 147.633L33.9473 146.955L33.2696 147.691L34.005 148.368ZM82.5849 167.959L83.5846 167.981L83.6066 166.981L82.6069 166.959L82.5849 167.959ZM82.5869 167.865C64.5713 167.468 47.3195 160.511 34.0684 148.299L32.7131 149.77C46.3223 162.312 64.0403 169.457 82.5429 169.865L82.5869 167.865ZM34.1261 149.712L34.7403 149.046L33.2696 147.691L32.6554 148.357L34.1261 149.712ZM33.3273 149.104C46.7742 161.496 64.2809 168.556 82.5628 168.959L82.6069 166.959C64.8119 166.567 47.7715 159.695 34.6827 147.633L33.3273 149.104ZM81.5851 167.937L81.5651 168.843L83.5647 168.887L83.5846 167.981L81.5851 167.937Z"
                    fill="#06EBE5"
                    mask="url(#path-16-inside-3_141_1795)"
                  />
                  <line
                    x1="76.6806"
                    y1="174.053"
                    x2="77.0443"
                    y2="168.064"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="70.6977"
                    y1="172.953"
                    x2="71.649"
                    y2="167.029"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="64.706"
                    y1="171.899"
                    x2="65.6937"
                    y2="165.981"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="58.7281"
                    y1="169.817"
                    x2="60.0981"
                    y2="163.975"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="52.7445"
                    y1="167.705"
                    x2="54.7813"
                    y2="162.061"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="46.8014"
                    y1="165.609"
                    x2="49.4514"
                    y2="160.226"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="41.8417"
                    y1="162.535"
                    x2="44.8691"
                    y2="157.355"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="37.8691"
                    y1="159.502"
                    x2="40.8964"
                    y2="154.321"
                    stroke="#06EBE5"
                  />
                  <line
                    x1="33.9343"
                    y1="156.412"
                    x2="37.6314"
                    y2="151.687"
                    stroke="#06EBE5"
                  />
                </svg>
              </span>
              <span className="subSvg self-center">
                <p>DAY 3</p>
              </span>
            </span>
            <div className="svg2 flex items-center w-auto">
              <Image src={Image1} alt="Image" className="img3"></Image>
            </div>
          </div>
          <div className="content w-full">
            <span className="contentHead mx-auto">
              <h3 className="mx-auto my-5 ">September 16, 2023</h3>
            </span>
            <div className="">
              <ul className="contentUl grid grid-cols-2 w-fit justify-center gap-x-0 text-left  ">
                {[
                  "6:00 PM","Winner Announcement",
                ].map((item, index) => (
                  <li className={`${index%2==0?"w-fit":"w-full"} m-auto `} key={index}>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
