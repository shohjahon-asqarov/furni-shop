import cartIcon from './icons/shopping-cart.svg';
import userIcon from './icons/user.svg';
import heartIcon from './icons/heart.svg';
import menuIcon from './icons/menu.svg';
import xIcon from './icons/close.svg';
import telegramIcon from './icons/telegram.svg';

import filterIcon from './icons/filter.svg';
import selectorIcon from './icons/selector.svg';
import mfIcon from './icons/menu2.svg';

import heroBig from './img/bg.jpg';
import heroMid from './img/bg-2.jpg';

import g1 from './products/g1.png';
import g2 from './products/g2.png';
import g3 from './products/g3.png';
import g4 from './products/g4.png';
import g5 from './products/g5.png';

import f1 from './icons/f1.svg';
import f2 from './icons/f2.svg';
import f3 from './icons/f3.svg';
import f4 from './icons/f4.svg';
import f5 from './icons/f5.svg';

import blogImg from './img/bg.jpg';
import blogImg2 from './img/bg-2.jpg';



import emptyCartGif from './gifts/empty_cart.gif';

const socialLinks = [
    {
        img: f1,
        link: 'https://t.me/dev_off'
    },
    {
        img: f2,
        link: 'https://t.me/dev_off'
    },
    {
        img: f3,
        link: 'https://t.me/dev_off'
    },
    {
        img: f4,
        link: 'https://t.me/dev_off'
    },
    {
        img: f5,
        link: 'https://t.me/dev_off'
    },
]

const newProducts = [
    {
        id: 20,
        images: [g1, g2, g3, g4],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 21,
        images: [g2, g3, g4, g1],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 22,
        images: [g3, g1, g2, g4],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
]

const products = [
    {
        id: 1,
        images: [g1, g2, g3, g4],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 29,
        images: [g2, g3, g4, g1],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 2,
        images: [g3, g4, g1, g2],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 3,
        images: [g3, g4, g1, g2],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 4,
        images: [g4, g1, g2, g3],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 5,
        images: [g5, g2, g3, g4],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 6,
        images: [g5, g2, g3, g4],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 7,
        images: [g1, g2, g3, g4],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 8,
        images: [g1, g2, g3, g4],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 9,
        images: [g3, g2, g3, g4],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 10,
        images: [g2, g2, g3, g4],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 11,
        images: [g5, g2, g3, g4],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 12,
        images: [g2, g2, g3, g5],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 13,
        images: [g3, g2, g1, g4],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 14,
        images: [g5, g2, g3, g4],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 15,
        images: [g3, g2, g1, g4],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
    {
        id: 16,
        images: [g4, g2, g3, g1],
        like: false,
        title: `Metta ofis stuli`,
        model: 'Metta ofis stuli',
        price: 1170000,
        count: 1,
        description: `RCH 8085 JE stul yumshoq va qulay. Ergonomik shakldagi g'ildiraklardagi kompyuter stulining orqa tomoni har bir foydalanuvchiga moslashtirilgan yumshoq o'rnatilgan bel tayanchi bilan to'ldiriladi. Bu maktab o'quvchisi uchun ish stoli, uy ofis uchun stul yoki to'liq huquqli ofis kreslosi. Plastik ramka to'r bilan qoplangan. Ofis kreslosi o'rindig'i qoliplangan ko'pikli poliuretandan tayyorlangan va qora to'r mato bilan qoplangan. Plastik qo'l dayamalari o'rindiq va orqaga mahkam o'rnatiladi, bu esa o'tirgan holatda ishlashni yanada qulay qiladi. Balandlikni sozlash 10 sm diapazonda gaz kartriji yordamida amalga oshiriladi.Ishchi kursi uzoq vaqt xizmat qiladi, xonada ko'p joy egallamaydi va har qanday interyerga yaxshi mos keladi. Kompyuter kursisi Top Gun tebranish mexanizmi bilan jihozlangan. Hajmi (WxDxH): 580x550x1010, O'rindiq kengligi (mm): 480, O'rindiq chuqurligi (mm): 470, Orqa balandligi (mm): 460, O'rindiq balandligi (mm): 450-550.`,
        characteristics: {
            manufacturer: 'Alhambra',
            quantity: 6,
            color: 'Kulrang',
            weight: 2.9,

        },
        delivery: {
            title: `Biz tovarlarning narxini mijozlar uchun iloji boricha qulay saqlashga harakat qilamiz, shuning uchun etkazib berish mijoz tomonidan QABUL QILGAN BO'LGAN SO'ng to'lanadi, shunda hamma narsa iloji boricha shaffof bo'ladi va biz mijozlarimiz uchun tovarlarning eng maqbul narxini saqlab qolishimiz mumkin. Yetkazib berish SDEK yoki Rossiya pochta xizmatlari tomonidan amalga oshiriladi va butun buyurtma uchun sug'urta ta'minlanadi.`,
            period: '1-3 kun',
            warning: `Yakuniy etkazib berish narxi buyurtma sizning manzilingizga etib kelganida ma'lum bo'ladi.`
        }
    },
]

const blogData = [
    {
        id: 1,
        img: blogImg,
        data: '01.07.2023',
        views: 1257,
        title: 'Biz 3D vizualizatsiya bilan bepul ofis dizayni eskizini yaratamiz',
        description: `Sizning e'tiboringizga zamonaviy, ergonomik va ayni paytda maksimal darajada funktsional ofis interyerlarini yaratish uchun kerak bo'lgan barcha narsalarni o'z ichiga olgan narxlari bilan ofis mebellari katalogini taqdim etamiz.`
    },
    {
        id: 2,
        img: blogImg2,
        data: '01.07.2023',
        views: 157,
        title: 'Biz 3D vizualizatsiya bilan bepul ofis dizayni eskizini yaratamiz',
        description: `Sizning e'tiboringizga zamonaviy, ergonomik va ayni paytda maksimal darajada funktsional ofis interyerlarini yaratish uchun kerak bo'lgan barcha narsalarni o'z ichiga olgan narxlari bilan ofis mebellari katalogini taqdim etamiz.`
    },
    {
        id: 3,
        img: blogImg,
        data: '01.07.2023',
        views: 2257,
        title: 'Biz 3D vizualizatsiya bilan bepul ofis dizayni eskizini yaratamiz',
        description: `Sizning e'tiboringizga zamonaviy, ergonomik va ayni paytda maksimal darajada funktsional ofis interyerlarini yaratish uchun kerak bo'lgan barcha narsalarni o'z ichiga olgan narxlari bilan ofis mebellari katalogini taqdim etamiz.`
    },
    {
        id: 4,
        img: blogImg2,
        data: '01.07.2023',
        views: 3277,
        title: 'Biz 3D vizualizatsiya bilan bepul ofis dizayni eskizini yaratamiz',
        description: `Sizning e'tiboringizga zamonaviy, ergonomik va ayni paytda maksimal darajada funktsional ofis interyerlarini yaratish uchun kerak bo'lgan barcha narsalarni o'z ichiga olgan narxlari bilan ofis mebellari katalogini taqdim etamiz.`
    },
    {
        id: 5,
        img: blogImg,
        data: '01.07.2023',
        views: 4237,
        title: 'Biz 3D vizualizatsiya bilan bepul ofis dizayni eskizini yaratamiz',
        description: `Sizning e'tiboringizga zamonaviy, ergonomik va ayni paytda maksimal darajada funktsional ofis interyerlarini yaratish uchun kerak bo'lgan barcha narsalarni o'z ichiga olgan narxlari bilan ofis mebellari katalogini taqdim etamiz.`
    },
    {
        id: 6,
        img: blogImg2,
        data: '01.07.2023',
        views: 6457,
        title: 'Biz 3D vizualizatsiya bilan bepul ofis dizayni eskizini yaratamiz',
        description: `Sizning e'tiboringizga zamonaviy, ergonomik va ayni paytda maksimal darajada funktsional ofis interyerlarini yaratish uchun kerak bo'lgan barcha narsalarni o'z ichiga olgan narxlari bilan ofis mebellari katalogini taqdim etamiz.`
    }
]

export {
    cartIcon, userIcon, heartIcon, menuIcon, xIcon, heroBig, heroMid, telegramIcon, filterIcon, selectorIcon, mfIcon, products, newProducts, socialLinks, emptyCartGif, blogData
}