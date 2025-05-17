import calendarDt from '../../assets/img/mainPageImg/calendar-dt.png';
import calendarDtX2 from '../../assets/img/mainPageImg/calendar-dt-x2.png';
import calendarTabl from '../../assets/img/mainPageImg/calendar-tabl.png';
import calendarTablX2 from '../../assets/img/mainPageImg/calendar-tabl-x2.png';
import calendarMob from '../../assets/img/mainPageImg/calendar-mob.png';
import calendarMobX2 from '../../assets/img/mainPageImg/calendar-mob-x2.png';
import sidebarDt from '../../assets/img/mainPageImg/sidebar-dt.png';
import sidebarDtX2 from '../../assets/img/mainPageImg/sidebar-dt-x2.png';
import sidebarTabl from '../../assets/img/mainPageImg/sidebar-tabl.png';
import sidebarTablX2 from '../../assets/img/mainPageImg/sidebar-tabl-x2.png';
import sidebarMob from '../../assets/img/mainPageImg/sidebar-mob.png';
import sidebarMobX2 from '../../assets/img/mainPageImg/sidebar-mob-x2.png';
import oneDt from '../../assets/img/mainPageImg/one-dt.png';
import oneDtX2 from '../../assets/img/mainPageImg/one-dt-x2.png';
import oneTabl from '../../assets/img/mainPageImg/one-tabl.png';
import oneTablX2 from '../../assets/img/mainPageImg/one-tabl-x2.png';
import oneMob from '../../assets/img/mainPageImg/one-mob.png';
import oneMobX2 from '../../assets/img/mainPageImg/one-mob-x2.png';
import {
  DescrImgWrap,
  DescrItem,
  DescrItemMid,
  DescrList,
  DescrName,
  DescrPicture,
  DescrSpan,
  DescrText,
  DescrTextWrap,
  DescrTextWrapMid,
  DescrTitle,
  DescrWrap,
} from './Description.styled';

const Description = () => {
  return (
    <DescrWrap>
      <DescrList>
        <DescrItem>
          <DescrTextWrap>
            <DescrSpan>1.</DescrSpan>
            <DescrName>Calendar</DescrName>
            <DescrTitle>VIEW</DescrTitle>
            <DescrText>
              GooseTrack&apos;s Calendar view provides a comprehensive overview
              of your schedule, displaying all your tasks, events, and
              appointments in a visually appealing and intuitive layout.
            </DescrText>
          </DescrTextWrap>
          <DescrImgWrap>
            <DescrPicture>
              <source
                srcSet={`${calendarDt} 1x,${calendarDtX2} 2x`}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={`${calendarTabl} 1x, ${calendarTablX2} 2x`}
                media=" (min-width: 480px)"
              />
              <source
                srcSet={`${calendarMob} 1x, ${calendarMobX2} 2x`}
                media="(min-width: 320px)"
              />
              <img src={calendarMob} alt="calendar" />
            </DescrPicture>
          </DescrImgWrap>
        </DescrItem>
        <DescrItemMid>
          <DescrTextWrapMid>
            <DescrSpan>2.</DescrSpan>
            <DescrTitle>SIDEBAR</DescrTitle>
            <DescrText>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The &quot;My Account&quot; section allows you to
              manage your profile information and preferences, while the
              calendar provides a quick and convenient way to view your upcoming
              events and tasks.
            </DescrText>
          </DescrTextWrapMid>
          <DescrImgWrap>
            <DescrPicture>
              <source
                srcSet={`${sidebarDt} 1x, ${sidebarDtX2} 2x`}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={`${sidebarTabl} 1x, ${sidebarTablX2} 2x`}
                media=" (min-width: 480px)"
              />
              <source
                srcSet={`${sidebarMob} 1x, ${sidebarMobX2} 2x`}
                media="(min-width: 320px)"
              />
              <img src={sidebarMob} alt="sidebar" />
            </DescrPicture>
          </DescrImgWrap>
        </DescrItemMid>
        <DescrItem>
          <DescrTextWrap>
            <DescrSpan>3.</DescrSpan>
            <DescrName>All in</DescrName>
            <DescrTitle>ONE</DescrTitle>
            <DescrText>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </DescrText>
          </DescrTextWrap>
          <DescrImgWrap>
            <DescrPicture>
              <source
                srcSet={`${oneDt} 1x, ${oneDtX2} 2x`}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={`${oneTabl} 1x, ${oneTablX2} 2x`}
                media=" (min-width: 480px)"
              />
              <source
                srcSet={`${oneMob} 1x, ${oneMobX2} 2x`}
                media="(min-width: 320px)"
              />
              <img src={oneMob} alt="one" />
            </DescrPicture>
          </DescrImgWrap>
        </DescrItem>
      </DescrList>
    </DescrWrap>
  );
};

export default Description;
