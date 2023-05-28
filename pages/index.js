import styles from '../styles/Home.module.css'
import ShareIcon from '@mui/icons-material/Share'
import {
  Icon,
  Button,
  Header,
  Main,
  LocationOnIcon,
  CheckCircleIcon,
  HeadphonesIcon,
  CallIcon,
  Footer,
} from '../cmps'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'

import { FacebookShareButton, WhatsappShareButton } from 'react-share'
import { useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
export default function Home() {
  const [isShareActive, setIsShareActive] = useState(false)
  return (
    <>
      <div className={styles.wrapper}>
        <Header>
          <title>לכידת נחשים ירושלים והסביבה</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:title" content="לוכדי נחשים" key="נחש" />
          <meta
            name="description"
            content={`
           לוכדי נחשים מקצוענים מטעם רשות הגנים, מחיר הוגן, שירות לקוחות מיידי ולעניין, מיומנים בעבודה. התקשרו עכשיו או שלחו הודעה.
            `}
          />
          <meta
            name="keywords"
            content="נחש, נחשים, לכידת נחשים, מה עושים כשרואים נחש, תפסית נחשים, נחש בחצר, לוכד, לוכדים, לוכדי נחשים"
          />
          <Button style={{ marginRight: 12 }}>
            <div>
              <CallIcon />
            </div>
            <a href="tel:0502228557">התקשרו עכשיו</a>
          </Button>
          <Icon icon={LocationOnIcon} label="ירושלים והסביבה" />
          <Icon icon={CheckCircleIcon} label="מקצועיות ומענה מהיר" />
          <Icon icon={HeadphonesIcon} label="מענה 24/7" />
        </Header>
        <Main>
          <div className={styles.announcementWrapper}>
            <div className={styles.announcement}>
              <h1>?נתקלתם בנחש</h1>
              <h2 style={{ margin: 4 }}>!התקשרו עכשיו</h2>
              <h3 style={{ margin: 0, padding: 0, textAlign: 'center' }}>
                שיחת ייעוץ חינם בווצאפ ובטלפון
              </h3>
              <div className={styles.buttons}>
                <Button
                  style={{
                    flex: 1,
                    paddingTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: 18,
                    }}
                  >
                    בנימין
                    <CallIcon />
                  </div>
                  <a href="tel:0546878025" className={styles.wideNumber}>
                    054-687-8025
                  </a>
                </Button>
                <h1>או</h1>
                <Button
                  style={{
                    flex: 1,
                    paddingTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: 18,
                    }}
                  >
                    אור
                    <CallIcon />
                  </div>
                  <a href="tel:0502228557" className={styles.wideNumber}>
                    050-222-8557
                  </a>
                </Button>
              </div>
              <p
                className={styles.rashut}
                style={{
                  color: 'rgba(0, 0, 0, 1)',
                  fontWeight: 'bold',
                  fontSize: 24,
                  marginTop: 40,
                  textAlign: 'center',
                }}
              >
                לוכדים מוסמכים מטעם רשות הטבע והגנים
              </p>
              <div
                className={styles.whatsapp}
                onClick={() => {
                  window.location.href =
                    'https://wa.me/972502228557?text=שלום%20ראיתי%20נחש%20אשמח%20לדעת%20מה%20לעשות.'
                }}
              >
                <WhatsAppIcon
                  className={styles.whICON}
                  style={{
                    flex: 1,
                    fontSize: 50,
                    color: '#0da68a',
                    marginRight: 5,
                  }}
                />
                <div style={{ fontWeight: 'bold' }}>שלחו הודעה</div>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>?מה עושים כשנתקלים בנחש</h1>
              <p style={{ direction: 'rtl' }}>
                תופסים מרחק בטוח מהנחש של כמה מטרים. שומרים על קשר עין ומתקשרים
                ללוכד. אם יש אפשרות ניתן לצלם את הנחש ולשלוח תמונה. הכי חשוב לא
                מתרקבים לנחש ולא מנסים לגעת בו.
              </p>
            </div>
            <img
              style={{
                margin: '40px',
                borderRadius: 5,
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 7px 23px',
              }}
              src="/main.jpg"
              width={300}
            />
          </div>
        </Main>
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '80px',
          position: 'relative',
        }}
        className={styles.shareContainer}
      >
        <div
          className={`${styles.shareWrapper} ${
            isShareActive ? styles.shareWrapperActive : ''
          }`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CancelOutlinedIcon
            onClick={() => {
              setIsShareActive(false)
            }}
            style={{
              cursor: 'pointer',
              position: 'absolute',
              bottom: 50,
              right: -15,
              backgroundColor: '#262626',
              borderRadius: '50%',
              fontSize: 40,
              color: '#ffffff',
            }}
            className={`${styles.shareWrapperIcons} ${
              isShareActive ? styles.shareWrapperIconsActive : ''
            }`}
          />
          <WhatsappShareButton
            url={'https://www.snakecatch.co.il/'}
            quote={'לכידת נחשים'}
            hashtag={'#נחש'}
            description={''}
            className="Demo__some-network__share-button"
          >
            <WhatsAppIcon
              className={`${styles.shareWrapperIcons} ${
                isShareActive ? styles.shareWrapperIconsActive : ''
              }`}
              style={{ fontSize: 45, color: '#ffffff', margin: '0 10px' }}
            />
          </WhatsappShareButton>
          <FacebookShareButton
            url={'https://www.snakecatch.co.il/'}
            quote={'לכידת נחשים'}
            hashtag={'#נחש'}
            description={''}
            className="Demo__some-network__share-button"
          >
            <FacebookOutlinedIcon
              className={`${styles.shareWrapperIcons} ${
                isShareActive ? styles.shareWrapperIconsActive : ''
              }`}
              style={{ fontSize: 45, color: '#ffffff', margin: '0 10px' }}
            />
          </FacebookShareButton>
        </div>
        <button
          onClick={() => {
            setIsShareActive((prev) => !prev)
          }}
          className={styles.shareButton}
        >
          <ShareIcon style={{ margin: '0 5px' }} />
          <div
            style={{
              margin: '0 5px',
            }}
          >
            שתף
          </div>
        </button>
      </div>

      <Footer />
    </>
  )
}
