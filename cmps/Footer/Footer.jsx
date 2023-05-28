import styles from '../../styles/Footer.module.css'
import { Input } from '../../cmps'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div style={{ flex: 1, width: '100%', color: '#eaeaea', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ textAlign: 'right', padding: '0 20px', marginTop: 18 }}>
                    :איזורי פעילות<hr style={{ marginBottom: 0 }} />
                </h3>
                <p style={{ padding: '0 20px', margin: 0, direction: 'rtl' }}>
                    קריית יערים,
                    מבשרת ציון,
                    אבו גוש,
                    בית שמש,
                    אבן ספיר,
                    אורה,
                    בר גיורא,
                    ירושלים,
                    מוצא,
                    עמינדב נס הרים,
                    נווה אילן,
                    קריית ענבים,
                    בית זית,
                    עין כרם,
                    גבעת זאב,
                    צור הדסה,
                    גוש עציון,
                    אפרת,
                    אלעזר,
                    אלון שבות,
                    תקוע,
                    ראש צורים,
                    כפר עציון,
                    נווה דניאל,
                    גילה,
                    מלחה,
                    נוקדים,
                    רמות פסגת זאב קטמון,
                    קריית מנחם,
                    ממילא משכנות האומה,
                    גאולה,
                    קריית יובל,
                    קטמון,
                    גונן,
                    גוננים,
                    נחלאות,
                    טלבייה,
                    גבעת משואה,
                    (מנחת)
                    בית צפאפא,
                    רמת רחל,
                    גילה,
                    הר חומה,
                    עין כרם,
                    בית זית,
                    קריית היובל,
                    קריית מנחם,
                    עיר גנים,
                    הר הרצל,
                    מוסררה,
                    מרכז העיר,
                    ימין משה,
                    שמעון הצדיק,
                    רמת אשכול,
                    סנהדריה,
                    ההגבעה הצרפתית,
                    הר הצופים,
                    הר הזיתים,
                    פסגת זאב.
                </p>
            </div>
        </div>
    )
}

export default Footer