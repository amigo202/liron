const SUPPORT = [
  'לירון, רק השאלה הזאת. לא את כל המבחן.',
  'מותר לעצור לשתי שניות לפני שעונים.',
  'טעות בתרגול = תבנית חדשה שלמדת.',
  'אם זה לא ברור מיד, מפרקים לצעד אחד קטן.',
  'אין צורך להיות מהירה לפני שאת ברורה.',
  'את לא אמורה לדעת הכול מראש — בשביל זה מתרגלים.'
];

const q = (text, options, answer, explanation) => ({text, options, answer, explanation});
const scaleQ = (text, explanation='אין כאן תשובה נכונה או לא נכונה. עני לפי מה שמאפיין אותך בדרך כלל, לא לפי מה שנדמה לך שמחפשים.') => ({text, scale:true, explanation});

const sections = {
  quantitative: {
    title:'כמותי', icon:'%', desc:'אחוזים, יחס, ממוצע, סדרות, בעיות מילוליות וקריאת נתונים.', scored:true,
    questions:[
      q('תקציב ההוצאות הוא 4,000,000 ₪ והביצוע בפועל 4,600,000 ₪. מה שיעור החריגה?',['10%','12%','15%','20%'],2,'הפער הוא 600,000. מחלקים בתקציב המקורי: 600,000 ÷ 4,000,000 = 15%. תבנית: פער ÷ בסיס × 100.'),
      q('הכנסות מתוכננות: 8 מיליון ₪. בפועל: 7.2 מיליון ₪. בכמה אחוזים ההכנסות נמוכות מהתכנון?',['5%','8%','10%','12.5%'],2,'הפער הוא 0.8 מיליון. 0.8 ÷ 8 = 10%. תמיד מחלקים בבסיס ההשוואה — כאן התקציב.'),
      q('מחלקה גדלה מ-40 ל-46 עובדים. מה שיעור הגידול?',['6%','10%','15%','20%'],2,'הגידול הוא 6 עובדים. 6 ÷ 40 = 15%. הבסיס הוא הכמות הישנה.'),
      q('מחיר שירות הוא 500 ₪ לשעה. בוצעו 120 שעות לחיוב. מה ההכנסה?',['50,000 ₪','55,000 ₪','60,000 ₪','65,000 ₪'],2,'120 × 500 = 60,000 ₪. תבנית פשוטה: כמות × מחיר ליחידה.'),
      q('עובד עבד 160 שעות בחודש, מהן 120 שעות לחיוב לקוח. מה שיעור הניצולת?',['65%','70%','75%','80%'],2,'120 ÷ 160 = 75%. ניצולת = שעות לחיוב ÷ סך השעות.'),
      q('פרויקט הכניס 200,000 ₪ ועלותו 150,000 ₪. מה הרווח הכספי?',['25,000 ₪','40,000 ₪','50,000 ₪','75,000 ₪'],2,'רווח = הכנסה פחות עלות: 200,000 - 150,000 = 50,000 ₪.'),
      q('באותו פרויקט: הכנסה 200,000 ₪ ורווח 50,000 ₪. מה שיעור הרווחיות מתוך ההכנסה?',['20%','25%','30%','33%'],1,'50,000 ÷ 200,000 = 25%. Margin פשוט = רווח ÷ הכנסה × 100.'),
      q('הממוצע של 80, 100, 120 ו-140 הוא:',['100','105','110','115'],2,'מחברים: 440. מחלקים ב-4: 110.'),
      q('מה המספר הבא בסדרה: 3, 6, 12, 24, ?',['30','36','42','48'],3,'בכל צעד מכפילים ב-2. 24 × 2 = 48. בסדרות חפשי קודם חוק פשוט.'),
      q('מה המספר הבא: 10, 13, 17, 22, 28, ?',['33','34','35','36'],2,'ההפרשים הם +3, +4, +5, +6, ולכן הבא הוא +7: 35.'),
      q('יחס העובדים בין ביקורת למס הוא 3:2. אם בביקורת 90 עובדים, כמה במס?',['45','60','75','80'],1,'3 חלקים = 90, לכן חלק אחד = 30. במס יש 2 חלקים: 60.'),
      q('תקציב ירד מ-1.2 מיליון ל-1.02 מיליון ₪. מה אחוז הירידה?',['10%','12%','15%','18%'],2,'הירידה היא 180,000. 180,000 ÷ 1,200,000 = 15%.'),
      q('שלושה פרויקטים הכניסו 100, 150 ו-250 אלף ₪. איזה חלק מההכנסה הכוללת הגיע מהפרויקט השלישי?',['40%','45%','50%','55%'],2,'סה״כ 500 אלף. 250 מתוך 500 = 50%.'),
      q('עלות חודשית היא 75,000 ₪. אם היא נשארת זהה במשך 8 חודשים, מה העלות המצטברת?',['525,000 ₪','575,000 ₪','600,000 ₪','650,000 ₪'],2,'75,000 × 8 = 600,000 ₪.'),
      q('תקציב שנתי 12 מיליון ₪. אחרי 6 חודשים בוצעו 7.2 מיליון ₪. אם הקצב נמשך, מה הביצוע השנתי המשוער?',['12 מיליון','13.2 מיליון','14.4 מיליון','15 מיליון'],2,'חצי שנה = 7.2 מיליון. בקצב זהה שנה שלמה היא פי 2: 14.4 מיליון.'),
      q('מחיר לאחר הנחה של 20% הוא 800 ₪. מה היה המחיר לפני ההנחה?',['960 ₪','1,000 ₪','1,020 ₪','1,200 ₪'],1,'אחרי 20% הנחה נשארים 80%. 800 ÷ 0.8 = 1,000 ₪.'),
      q('5 עובדים מסיימים משימה ב-12 ימים בקצב זהה. כמה ימי-אדם נדרשים?',['17','50','60','72'],2,'5 × 12 = 60 ימי-אדם. זה מודד את היקף העבודה הכולל.'),
      q('מה המספר החסר: 2, 5, 11, 23, ?',['35','41','45','47'],3,'בכל פעם מכפילים ב-2 ומוסיפים 1. 23×2+1 = 47.'),
      q('אם 30% מתקציב של 900,000 ₪ מוקדש לספקים, כמה נשאר לשאר ההוצאות?',['270,000 ₪','540,000 ₪','600,000 ₪','630,000 ₪'],3,'נשארים 70%: 900,000 × 0.7 = 630,000 ₪.'),
      q('הוצאה עלתה מ-250 אלף ל-300 אלף ₪, וההכנסה נשארה קבועה. מה נכון לומר?',['הרווחיות בהכרח עלתה','הרווחיות עשויה להישחק','אין שום השפעה','ההכנסה עלתה ב-20%'],1,'אם ההכנסה קבועה והעלות עולה, הרווח קטן ולכן הרווחיות נשחקת. כאן מספיק להבין את הכיוון.')
    ]
  },
  verbal: {
    title:'מילולי', icon:'א', desc:'הבנת הנקרא, אנלוגיות, לוגיקה והסקת מסקנות.', scored:true,
    questions:[
      q('השלימי את האנלוגיה: תקציב : תכנון :: ביצוע : ?',['עבר','מדידה','ספק','שכר'],1,'תקציב קשור לתכנון; ביצוע קשור למדידה של מה שקרה בפועל. חפשי קשר זהה.'),
      q('איזו מילה יוצאת דופן?',['תחזית','תקציב','ביצוע','מקלדת'],3,'שלוש הראשונות מושגים פיננסיים; מקלדת היא חפץ.'),
      q('אם כל מנהלי המחלקות מקבלים דוח, ודנה היא מנהלת מחלקה — מה ניתן להסיק?',['דנה לא מקבלת דוח','דנה מקבלת דוח','רק דנה מקבלת דוח','אי אפשר לדעת'],1,'כל A הם B; דנה היא A; לכן דנה היא B.'),
      q('כל פרויקט רווחי נבדק. חלק מהפרויקטים שנבדקו אינם רווחיים. מה נכון?',['כל פרויקט שנבדק רווחי','יש פרויקטים שנבדקו ואינם רווחיים','אף פרויקט רווחי לא נבדק','אין מספיק מידע'],1,'המשפט השני אומר במפורש שיש פרויקטים שנבדקו ואינם רווחיים. לא מוסיפים מידע.'),
      q('מה הקשר הקרוב ביותר: חריגה היא לתקציב כמו סטייה היא ל־?',['יעד','עובד','מחשב','חשבונית'],0,'חריגה נמדדת מול תקציב; סטייה נמדדת מול יעד או בסיס להשוואה.'),
      q('קראי: "המחלקה עמדה בתקציב, אך הרווחיות ירדה בשל גידול בעלויות ישירות." מה הסיבה המוצהרת?',['ירידה בהכנסות','גידול בעלויות ישירות','חריגה בתקציב הכולל','קיטון בכוח אדם'],1,'השאלה מבקשת מה נאמר בטקסט, לא מה עוד יכול להיות נכון.'),
      q('איזו מסקנה הכי זהירה: "בחודשיים האחרונים עלה ה-WIP"?',['בוודאות יש הפסד','ייתכן שבוצעה עבודה שעדיין לא חויבה','כל הלקוחות לא משלמים','ההכנסות בהכרח ירדו'],1,'WIP עשוי לעלות כשעבודה בוצעה ועדיין לא חויבה. "ייתכן" הוא ניסוח זהיר.'),
      q('מה ההפך הקרוב ביותר ל"עקבי"?',['שיטתי','יציב','משתנה','מסודר'],2,'עקבי = שומר על קו קבוע; ההפך הקרוב הוא משתנה/לא עקבי.'),
      q('השלימי: "למרות שהנתונים היו חלקיים, המנהלת החליטה ____ את הדיון עד לקבלת מידע נוסף."',['להאיץ','לדחות','לסכם','לשכוח'],1,'מידע חלקי מוביל באופן הגיוני לדחיית הדיון עד לקבלת מידע נוסף.'),
      q('אם א׳ גדול מב׳, וב׳ גדול מג׳ — מה בהכרח נכון?',['ג׳ גדול מא׳','א׳ גדול מג׳','א׳ שווה לג׳','אין קשר'],1,'טרנזיטיביות: אם A>B ו-B>C, אז A>C.'),
      q('כל מי שעובד בפרויקט X עבר הדרכה. יואב לא עבר הדרכה. מה ניתן להסיק?',['יואב עובד בפרויקט X','יואב לא עובד בפרויקט X','יואב מנהל הפרויקט','אי אפשר להסיק דבר'],1,'אם כל העובדים בפרויקט עברו הדרכה, ומישהו לא עבר — הוא לא בקבוצת העובדים בפרויקט.'),
      q('בחרי את המילה הקרובה במשמעות ל"לשקף" בהקשר ניהולי.',['להסתיר','להציג','למחוק','להפחית'],1,'בדיווח, לשקף = להציג את התמונה כפי שהיא.'),
      q('"התקציב אושר רק לאחר שכל ההנחות נבדקו." מה קרה קודם?',['התקציב אושר','ההנחות נבדקו','בוצעה חריגה','התקציב בוטל'],1,'"לאחר" מסמן סדר: קודם בדקו את ההנחות, אחר כך אישרו.'),
      q('איזו טענה היא עובדה ולא פרשנות?',['הדו״ח מצוין','הצוות עובד לאט','ההוצאה ביולי הייתה 120,000 ₪','המנהל לא מרוצה'],2,'מספר מדיד הוא עובדה; שאר המשפטים כוללים הערכה.'),
      q('אם חלק מהמנהלים הם רואי חשבון, וכל רואי החשבון מכירים תקינה — מה ניתן להסיק?',['כל המנהלים מכירים תקינה','חלק מהמנהלים מכירים תקינה','אין מנהלים שמכירים תקינה','כל מי שמכיר תקינה הוא מנהל'],1,'חלק מהמנהלים הם רואי חשבון, וכל רואי החשבון מכירים תקינה; לכן חלק מהמנהלים מכירים תקינה.'),
      q('מה המשפט הברור ביותר לדיווח הנהלה?',['יש פה כל מיני דברים שצריך לבדוק','ההוצאות גבוהות','ההוצאות גבוהות ב-8% מהתקציב, בעיקר בשל שכר','משהו לא מסתדר'],2,'דיווח טוב כולל גודל פער וסיבה מרכזית. הוא קונקרטי וניתן לפעולה.'),
      q('השלימי: "אם התחזית מתבססת על הנחות לא מעודכנות, היא עלולה להיות ____".',['מדויקת יותר','פחות אמינה','קצרה יותר','רווחית יותר'],1,'הנחות לא מעודכנות פוגעות באמינות התחזית.'),
      q('מה הסדר ההגיוני ביותר לניתוח בעיה?',['פתרון → סיבה → נתונים','נתונים → סיבה → השפעה → פעולה','השפעה → פעולה → נתונים','פעולה → נתונים → סיבה'],1,'תבנית טובה: מה קרה → למה → מה המשמעות → מה עושים.'),
      q('"לא כל הפרויקטים חרגו." מה בהכרח נכון?',['אף פרויקט לא חרג','לפחות פרויקט אחד לא חרג','כל הפרויקטים חרגו','בדיוק פרויקט אחד חרג'],1,'"לא כל" פירושו שלפחות אחד לא חרג. אי אפשר לדעת כמה בדיוק.'),
      q('איזה ניסוח הכי ענייני כאשר אינך יודעת תשובה?',['אין לי מושג','אני מנחשת ש...','אני רוצה לבדוק את הנתון ולחזור עם תשובה מדויקת','זה לא באחריותי'],2,'ניסוח מקצועי מכיר בחוסר הוודאות ומציע דרך להשלים את המידע.')
    ]
  },
  english: {
    title:'אנגלית', icon:'EN', desc:'אוצר מילים עסקי, השלמת משפטים והבנת הנקרא.', scored:true,
    questions:[
      q('Choose the best translation for “forecast”.',['תקציב','תחזית','הכנסה','חשבונית'],1,'Forecast = תחזית — הערכה מעודכנת של מה שצפוי קדימה.'),
      q('Choose the best translation for “revenue”.',['הכנסה','הוצאה','רווח','עלות'],0,'Revenue = הכנסות.'),
      q('Choose the best translation for “margin”.',['מסגרת','שיעור רווחיות','ספק','שכר'],1,'Margin בהקשר פיננסי = מרווח/שיעור רווחיות.'),
      q('Complete: “The team ___ the budget every month.”',['review','reviews','reviewed are','reviewing'],1,'The team הוא נושא יחיד בהווה פשוט, ולכן reviews.'),
      q('Complete: “Actual expenses were higher ___ expected.”',['then','than','that','from'],1,'בהשוואה משתמשים ב-than: higher than expected.'),
      q('What does “budget variance” mean?',['פער בין תקציב לביצוע','הכנסה מלקוח','שעות עבודה','תשלום לספק'],0,'Variance = סטייה/פער. Budget variance = ההפרש בין תכנון לביצוע.'),
      q('Complete: “We need to understand the reason ___ the increase.”',['for','at','on','by'],0,'הצירוף הוא reason for = הסיבה ל־.'),
      q('Choose the closest meaning to “accurate”.',['מהיר','מדויק','יקר','מורכב'],1,'Accurate = מדויק.'),
      q('Read: “Revenue increased, but profit decreased because costs rose faster.” What happened?',['ההכנסות ירדו','העלויות ירדו','ההכנסות עלו אך הרווח ירד','הרווח עלה'],2,'Revenue increased = הכנסות עלו; profit decreased = הרווח ירד.'),
      q('Choose the best word: “The manager asked for a more ___ explanation.”',['clear','clearly','clearness','clarify'],0,'לפני explanation צריך adjective: clear.'),
      q('What does “billable hours” mean?',['שעות חופשה','שעות לחיוב לקוח','שעות נוספות בלבד','שעות הדרכה'],1,'Billable hours = שעות עבודה שניתן לחייב עליהן לקוח.'),
      q('What is WIP in a project-services context?',['עבודה בתהליך','רווח שנתי','עלות שכר','מסגרת תקציב'],0,'WIP = Work in Progress — עבודה בתהליך/עבודה שבוצעה ועדיין לא חויבה במלואה.'),
      q('Complete: “If costs continue to rise, profitability ___ decline.”',['may','did','has','was'],0,'May = עשויה. זה מתאים לאפשרות עתידית.'),
      q('Choose the best translation for “stakeholder”.',['בעל עניין / גורם רלוונטי','לקוח בלבד','ספק בלבד','בנק'],0,'Stakeholder הוא גורם בעל עניין או השפעה.'),
      q('Complete: “I will check the figures and get back ___ you.”',['to','at','for','with'],0,'הביטוי הוא get back to you = אחזור אלייך עם תשובה.'),
      q('What does “data-driven decision” mean?',['החלטה אקראית','החלטה שמבוססת על נתונים','החלטה של מחשב בלבד','החלטה ללא מנהל'],1,'Data-driven = מבוסס נתונים.'),
      q('Read: “The project is on budget but behind schedule.” What does it mean?',['חורג בעלויות אך בזמן','עומד בתקציב אך מאחר בלוח הזמנים','רווחי מאוד','בוטל'],1,'On budget = במסגרת התקציב; behind schedule = באיחור.'),
      q('Choose the closest meaning to “assumption”.',['הנחה','חשבונית','חריגה','תחזית'],0,'Assumption = הנחה שעליה מבוסס תכנון או חישוב.'),
      q('Complete: “The report was prepared ___ senior management.”',['for','of','by to','at'],0,'Prepared for = הוכן עבור.'),
      q('What does “cost analysis” mean?',['ניתוח עלויות','תמחור לקוח בלבד','ניתוח עובדים','בדיקת אנגלית'],0,'Cost analysis = ניתוח עלויות: מה מרכיב את העלות, מה השתנה ומה גורם לפער.')
    ]
  },
  personality: {
    title:'אישיות', icon:'♡', desc:'היכרות עם סגנון שאלות אישיות — בלי ציון ובלי “תשובה נכונה”.', scored:false,
    questions:[
      scaleQ('אני מעדיפה לתכנן את העבודה שלי מראש ולא לחכות לרגע האחרון.'),
      scaleQ('כשיש כמה משימות דחופות, אני מצליחה לקבוע סדרי עדיפויות.'),
      scaleQ('אני מרגישה בנוח לשאול שאלה כשמשהו אינו ברור לי.'),
      scaleQ('אני נוטה לבדוק את העבודה שלי לפני שאני שולחת אותה.'),
      scaleQ('אני נהנית לעבוד גם באופן עצמאי וגם כחלק מצוות.'),
      scaleQ('כשאני מקבלת ביקורת מקצועית, אני מנסה להבין מה אפשר לשפר.'),
      scaleQ('אני יכולה לשנות את סדר היום שלי כשנכנסת משימה דחופה.'),
      scaleQ('אני מעדיפה הנחיות ברורות בתחילת משימה חדשה.'),
      scaleQ('אני מרגישה אחריות אישית לתוצאה של משימה שאני מובילה.'),
      scaleQ('אני מסוגלת לומר למנהל כשאני חושבת שיש סיכון מקצועי.'),
      scaleQ('אני נהנית ללמוד מערכת או תהליך חדש.'),
      scaleQ('אני נוטה להיכנס לפרטים כאשר הנושא חשוב לי.'),
      scaleQ('אני אוהבת לקבל החלטה רק אחרי שיש לי מספיק מידע.'),
      scaleQ('אני מרגישה בנוח להציג מידע גם כאשר הוא אינו נוח לצד השני.'),
      scaleQ('אני מתאוששת יחסית מהר מטעות או ביקורת.'),
      scaleQ('אני מעדיפה לעבוד בסביבה שבה יש נהלים ברורים.'),
      scaleQ('אני בודקת עם המנהל ציפיות כשיש כמה משימות מתחרות.'),
      scaleQ('אני מרגישה בנוח לקחת אחריות על תהליך מתחילתו ועד סופו.'),
      scaleQ('אני יכולה לעבוד תחת לחץ בלי לאבד לגמרי את סדר הפעולות.'),
      scaleQ('אני מבקשת עזרה כשאני מבינה שאין לי מספיק מידע או זמן.')
    ]
  },
  integrity: {
    title:'אמינות ויושרה', icon:'✓', desc:'תרגול עקרונות של שקיפות, אחריות ונהלים — לא ניסיון “לשחק” שאלון אמינות.', scored:false,
    questions:[
      q('את מגלה טעות קטנה בדוח שכבר נשלח להנהלה. מה הגישה המקצועית?',['מתעלמת כי הטעות קטנה','בודקת את ההשפעה ומעדכנת את הממונה לפי הצורך','משנה את הקובץ בלי לספר','מחכה שמישהו יבחין'],1,'העיקרון הוא שקיפות ובדיקת השפעה. במבחן אמיתי עני לפי הערכים וההתנהגות שלך, לא לפי “ניחוש” של רצוי.'),
      q('מנהל מבקש לפצל דרישת רכש כדי לעקוף סף אישור. מה הגישה המקצועית?',['לבצע כי הוא מנהל','לבדוק את הנוהל ולהעלות במסלול האישור המתאים','לפצל רק הפעם','להעביר לאחריות מישהו אחר'],1,'העיקרון: מהות העסקה והיררכיית האישורים קודמות לנוחות.'),
      q('קיבלת החזר הוצאות גבוה ב-200 ₪ בטעות. מה נכון לעשות?',['להשאיר כי הסכום קטן','לדווח ולבקש תיקון','להמתין לסוף השנה','לתרום את הכסף'],1,'גם טעות קטנה היא טעות. שקיפות ותיקון עדיפים.'),
      q('קולגה מבקש ממך לסמן שביצע בדיקה שלא ביצע. מה תעשי?',['מאשרת כדי לעזור','מסרבת ומבקשת להשלים את הבדיקה','מסמנת בלי שם','מתעלמת'],1,'אין לאשר פעולה שלא בוצעה. דיווח צריך להתאים למציאות.'),
      q('את רואה מידע רגיש על שכר פתוח על מסך משותף. מה תעשי?',['מצלמת לעצמך','משתפת חברה','סוגרת/מתריעה לגורם המתאים','משאירה כי זה לא שלי'],2,'מידע רגיש דורש שמירה על סודיות וצמצום חשיפה.'),
      q('לקוח מבקש ממך “לעגל” נתון כדי שייראה טוב יותר. מה הגישה הנכונה?',['מסכימה אם ההשפעה קטנה','מסבירה שלא ניתן להציג מידע לא מדויק ומציעה ניסוח שקוף','משנה רק את הכותרת','מבקשת ממישהו אחר לעשות'],1,'אפשר להציג הקשר, אבל לא לשנות עובדות. דיוק ושקיפות.'),
      q('את מאחרת בהשלמת משימה. מה עדיף?',['להסתיר עד שמישהו ישאל','לעדכן מוקדם, להסביר ולתת מועד חדש ריאלי','לסמן שהושלם','להאשים גורם אחר'],1,'ניהול ציפיות מוקדם מראה אחריות גם כשיש קושי.'),
      q('מצאת קיצור דרך שמבטל בקרת מערכת. מה תעשי?',['משתמשת בו כדי לחסוך זמן','בודקת אם הוא מאושר ואם לא — פועלת דרך התהליך התקין','משתפת את כולם מיד','משתמשת רק כשדחוף'],1,'קיצור דרך אינו בהכרח מורשה. בודקים הרשאה ומשמעות.'),
      q('מנהל בכיר מבקש ממך לא לדווח כרגע על חריגה מהותית. מה נכון?',['להסתיר כי הוא ביקש','לברר, להסביר את הצורך בשקיפות ולפעול לפי המדיניות','למחוק את החריגה','לספר לכל הארגון'],1,'דיווח אמין לצד טיפול מקצועי לפי הנהלים והדרג המתאים.'),
      q('את מקבלת מסמך פנימי בטעות שאינו מיועד אלייך. מה תעשי?',['קוראת מתוך סקרנות','מעבירה לחברים','מודיעה לשולח ומטפלת לפי הנוהל','שומרת לעתיד'],2,'סודיות חלה גם על מידע שהגיע אלייך בטעות.'),
      q('עובד מבקש שתאשרי הוצאה ללא מסמך תומך כי “כולם מכירים את הספק”.',['מאשרת','מבקשת מסמך/אישור לפי הנוהל','משלמת ואז בודקת','מתעלמת'],1,'היכרות עם ספק אינה מחליפה תיעוד ובקרה.'),
      q('גילית שטעית בחישוב שהשפיע על החלטה. מה נכון?',['לתקן בשקט','לעדכן את הגורמים הרלוונטיים, להסביר ולתקן','לחכות לסבב הבא','למחוק את הקובץ'],1,'לקיחת אחריות כוללת גם תיקון וגם עדכון כשיש השפעה.'),
      q('קולגה משתף אותך בסיסמה כדי שתיכנסי במקומו. מה תעשי?',['משתמשת כי הוא אישר','מסרבת ופועלת דרך הרשאה מתאימה','שומרת את הסיסמה לחירום','מעבירה לעוד עובד'],1,'הרשאות אישיות אינן מיועדות להעברה. פועלים דרך גישה מורשית.'),
      q('לקוח נותן לך מתנה יקרה לאחר פרויקט. מה נכון?',['לקחת בלי לשאול','לבדוק מדיניות מתנות וניגוד עניינים ולפעול לפיה','למכור אותה','להסתיר מהצוות'],1,'בודקים מדיניות כדי למנוע ניגוד עניינים.'),
      q('את רואה שקולגה טעה אך הטעות עדיין לא השפיעה. מה תעשי?',['מחכה שתהיה השפעה','פונה אליו ומסייעת לתקן לפני שהבעיה גדלה','מספרת לכולם','מתעלמת'],1,'מניעה מוקדמת עדיפה על המתנה, ואפשר לטפל באופן ענייני ומכבד.'),
      q('מבקשים ממך לחתום על מסמך שלא קראת כי “אין זמן”. מה נכון?',['לחתום','לבקש זמן סביר לעבור עליו או להפנות לגורם מוסמך','לחתום ולקרוא אחר כך','לסרב לכל מסמך'],1,'חתימה מייצגת אחריות. אם לא בדקת, עוצרים או מפנים לגורם מוסמך.'),
      q('את מגלה נתון שמחזק את העמדה שלך ונתון אחר שסותר אותה. מה נכון?',['להציג רק את המחזק','להציג את התמונה המלאה ולהסביר את אי-הוודאות','למחוק את הנתון הסותר','להימנע מדיווח'],1,'יושרה אנליטית דורשת להציג גם נתונים שאינם נוחים למסקנה המקורית.'),
      q('חברה טובה מבקשת מידע פנימי על משרה שעדיין לא פורסמה. מה תעשי?',['משתפת כי זו רק משרה','בודקת אם המידע פומבי ואם לא — לא משתפת','שולחת רק חלק','מבקשת ממנה לא לספר'],1,'מידע פנימי נשאר פנימי עד שמותר לפרסמו.'),
      q('את מגלה שביצעת פעולה בניגוד לנוהל מחוסר ידיעה. מה נכון?',['להסתיר','לעדכן, לבדוק את ההשפעה וללמוד את הנוהל','להאשים את ההדרכה','להמשיך כך כי כבר קרה'],1,'טעות יכולה לקרות; האחריות נמדדת גם באופן שבו מתקנים ולומדים.'),
      q('במבחן אמינות אמיתי את מתלבטת מה “נכון” לענות. מה הגישה הטובה ביותר?',['לנחש מה הארגון רוצה','לענות בכנות ובעקביות לפי ההתנהגות שלך','לבחור תמיד תשובה קיצונית','לענות אקראית'],1,'אין טריק בטוח לשאלון אמינות. כנות ועקביות הן הגישה הנכונה וההוגנת.')
    ]
  }
};

const order = ['quantitative','verbal','english','personality','integrity'];
const state = {active:null, index:0, answers:[], startedAt:0, timerId:null};

function $(s, root=document){return root.querySelector(s)}
function $$(s, root=document){return [...root.querySelectorAll(s)]}
function shuffle(arr){return [...arr].sort(()=>Math.random()-.5)}
function support(){return SUPPORT[Math.floor(Math.random()*SUPPORT.length)]}

function showView(id){
  $$('.view').forEach(v=>v.classList.toggle('active',v.id===id));
  $$('.tab').forEach(t=>t.classList.toggle('active',t.dataset.view===id));
  if(id==='short' && !$('#shortMount').children.length) startMixed('short');
  if(id==='long' && !$('#longMount').children.length) startMixed('long');
  window.scrollTo({top:0,behavior:'smooth'});
}
$$('.tab').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
$$('[data-start-test]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.startTest)));

function renderSectionCards(){
  const mount=$('#sectionCards');
  mount.innerHTML=order.map(key=>{
    const s=sections[key];
    return `<article class="section-card"><div><h3>${s.title}</h3><p>${s.desc}</p><div class="count">20 שאלות</div><button class="primary start-section" data-key="${key}" style="margin-top:14px">מתחילה תרגול</button></div><div class="icon">${s.icon}</div></article>`;
  }).join('');
  $$('.start-section',mount).forEach(b=>b.addEventListener('click',()=>startSection(b.dataset.key)));
}

function startSection(key){
  const practice=$('#practice');
  const s=sections[key];
  const questions=s.questions.map(x=>({...x,section:key}));
  renderQuiz(practice, questions, `${s.title} — 20 שאלות`, `תרגול לפי נושא`, false);
}

function startMixed(kind){
  const countPer=kind==='short'?3:10;
  const questions=[];
  order.forEach(key=>{
    const picked=shuffle(sections[key].questions).slice(0,countPer).map(x=>({...x,section:key}));
    questions.push(...picked);
  });
  const shuffled=shuffle(questions);
  const mount=kind==='short'?$('#shortMount'):$('#longMount');
  renderQuiz(mount, shuffled, kind==='short'?'מבחן קצר — 15 שאלות':'מבחן ארוך — 50 שאלות', kind==='short'?'חימום רגוע':'סימולציה רציפה', true);
}

function renderQuiz(mount, questions, title, kicker, timed){
  clearInterval(state.timerId);
  state.active={mount,questions,title,kicker,timed}; state.index=0; state.answers=[]; state.startedAt=Date.now();
  const node=$('#quizTemplate').content.cloneNode(true); mount.innerHTML=''; mount.append(node);
  $('.quiz-title',mount).textContent=title; $('.quiz-kicker',mount).textContent=kicker;
  if(timed){ $('.timer',mount).hidden=false; state.timerId=setInterval(()=>updateTimer(mount),1000); updateTimer(mount); }
  $('.quit',mount).addEventListener('click',()=>{clearInterval(state.timerId); if(mount.id==='practice'){renderPracticeHome();} else {mount.innerHTML=''; showView('home');}});
  $('.next',mount).addEventListener('click',()=>nextQuestion());
  renderQuestion();
}

function updateTimer(mount){
  const sec=Math.floor((Date.now()-state.startedAt)/1000), m=String(Math.floor(sec/60)).padStart(2,'0'), s=String(sec%60).padStart(2,'0');
  $('.timer',mount).textContent=`${m}:${s}`;
}

function renderQuestion(){
  const {mount,questions}=state.active, item=questions[state.index], s=sections[item.section];
  $('.support-line',mount).textContent=support();
  $('.question-text',mount).textContent=item.text;
  $('.progress-bar',mount).style.width=`${(state.index/questions.length)*100}%`;
  $('.progress-copy',mount).textContent=`שאלה ${state.index+1} מתוך ${questions.length} • ${s.title}`;
  const answers=$('.answers',mount); answers.innerHTML='';
  const feedback=$('.feedback',mount); feedback.hidden=true; feedback.className='feedback'; feedback.innerHTML='';
  const next=$('.next',mount); next.disabled=true; next.textContent=state.index===questions.length-1?'לסיכום':'לשאלה הבאה';

  if(item.scale){
    answers.innerHTML=`<div class="scale">${['בכלל לא','מעט','במידה בינונית','די','מאוד'].map((x,i)=>`<button data-value="${i}">${x}</button>`).join('')}</div><div class="scale-legend"><span>לא מאפיין אותי</span><span>מאפיין אותי מאוד</span></div>`;
    $$('.scale button',answers).forEach(btn=>btn.addEventListener('click',()=>{
      $$('.scale button',answers).forEach(x=>x.classList.remove('selected')); btn.classList.add('selected');
      state.answers[state.index]={value:+btn.dataset.value,scored:false};
      feedback.hidden=false; feedback.classList.add('good'); feedback.innerHTML=`<strong>אין כאן ציון.</strong>${item.explanation}`;
      next.disabled=false;
    }));
  } else {
    item.options.forEach((opt,i)=>{
      const btn=document.createElement('button'); btn.className='answer'; btn.textContent=opt;
      btn.addEventListener('click',()=>chooseAnswer(btn,i,item)); answers.append(btn);
    });
  }
}

function chooseAnswer(btn,i,item){
  const {mount}=state.active, answers=$$('.answer',mount); answers.forEach(x=>x.disabled=true);
  const isScored=sections[item.section].scored;
  if(isScored){
    answers[item.answer].classList.add('correct');
    if(i!==item.answer) btn.classList.add('wrong'); else btn.classList.add('selected');
    state.answers[state.index]={value:i,correct:i===item.answer,scored:true,section:item.section};
    const fb=$('.feedback',mount); fb.hidden=false; fb.classList.add(i===item.answer?'good':'bad');
    fb.innerHTML=`<strong>${i===item.answer?'נכון. יפה.':'לא הפעם — וזה בדיוק מה שהתרגול נועד לעשות.'}</strong>${item.explanation}`;
  } else {
    btn.classList.add('selected');
    state.answers[state.index]={value:i,scored:false,section:item.section};
    const fb=$('.feedback',mount); fb.hidden=false; fb.classList.add('good');
    fb.innerHTML=`<strong>כאן לא מקבלים ציון.</strong>${item.explanation}`;
  }
  $('.next',mount).disabled=false;
}

function nextQuestion(){
  if(state.index<state.active.questions.length-1){state.index++; renderQuestion(); window.scrollTo({top:0,behavior:'smooth'});} else finishQuiz();
}

function finishQuiz(){
  clearInterval(state.timerId);
  const {mount,questions,title}=state.active;
  const scored=state.answers.filter(a=>a?.scored), correct=scored.filter(a=>a.correct).length;
  const pct=scored.length?Math.round(correct/scored.length*100):100;
  const elapsed=Math.floor((Date.now()-state.startedAt)/1000), mins=Math.floor(elapsed/60), secs=elapsed%60;
  const by={}; order.forEach(k=>{const a=state.answers.filter(x=>x?.scored&&x.section===k); if(a.length) by[k]=`${a.filter(x=>x.correct).length}/${a.length}`;});
  mount.innerHTML=`<div class="results"><div class="eyebrow">סיום תרגול</div><h2>${title}</h2>${scored.length?`<div class="score-ring" style="--p:${pct}"><span>${pct}%</span></div>`:''}<p>${pct>=80?'יש כאן בסיס חזק. עכשיו המטרה היא עקביות, לא שלמות.':pct>=60?'את לומדת את התבניות. זה בדיוק השלב שבו תרגול קצר נוסף נותן הרבה.':'הציון כאן הוא מפה, לא תווית. עברי על ההסברים וחזרי רק על מה שהיה קשה.'}</p><div class="result-grid"><div><b>${questions.length}</b><br>שאלות</div><div><b>${mins}:${String(secs).padStart(2,'0')}</b><br>זמן</div><div><b>${scored.length?correct:'—'}</b><br>${scored.length?'נכונות':'ללא ציון'}</div></div>${Object.keys(by).length?`<p>${Object.entries(by).map(([k,v])=>`${sections[k].title}: <b>${v}</b>`).join(' • ')}</p>`:''}<button class="primary again">מתרגלת שוב</button><button class="ghost home" style="margin-right:8px">חזרה לבית</button></div>`;
  $('.again',mount).addEventListener('click',()=>{
    if(mount.id==='shortMount') startMixed('short'); else if(mount.id==='longMount') startMixed('long'); else renderPracticeHome();
  });
  $('.home',mount).addEventListener('click',()=>showView('home'));
}

function renderPracticeHome(){
  $('#practice').innerHTML=`<div class="section-head"><div><h2>תרגול לפי נושא</h2><p>בחרי סקשן. אפשר לעצור בכל רגע ולחזור.</p></div></div><div id="sectionCards" class="section-cards"></div>`;
  renderSectionCards();
}

renderSectionCards();
