"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Lang = "en" | "ru"

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.home": { en: "Home", ru: "Главная" },
  "nav.tours": { en: "Tours", ru: "Туры" },
  "nav.explore": { en: "Explore", ru: "Направления" },
  "nav.about": { en: "About", ru: "О нас" },
  "nav.contact": { en: "Contact", ru: "Контакты" },

  // Hero
  "hero.subtitle": {
    en: "Premium Adventure Travel",
    ru: "Премиум приключенческий туризм",
  },
  "hero.title": {
    en: "Discover the Untamed Beauty of Kazakhstan",
    ru: "Откройте дикую красоту Казахстана",
  },
  "hero.description": {
    en: "Journey through ancient Silk Road landscapes, towering peaks, and vast steppes with Kazakhstan's most trusted adventure travel company.",
    ru: "Путешествуйте по древним ландшафтам Шёлкового пути, величественным горам и бескрайним степям с самой надёжной туристической компанией Казахстана.",
  },
  "hero.cta": { en: "Explore Destinations", ru: "Наши направления" },
  "hero.scroll": { en: "Scroll to discover", ru: "Листайте вниз" },

  // About
  "about.label": { en: "About Us", ru: "О нас" },
  "about.title": {
    en: "Your Gateway to Kazakhstan's Wild Heart",
    ru: "Ваш путь к дикому сердцу Казахстана",
  },
  "about.p1": {
    en: "KairTravelAlmaty LLP is a licensed travel company based in Almaty, Kazakhstan. We specialize in curated adventure experiences — from alpine treks in the Tien Shan mountains to cultural immersions in the vast Kazakh steppe.",
    ru: "KairTravelAlmaty ТОО — лицензированная туристическая компания, базирующаяся в Алматы, Казахстан. Мы специализируемся на организации авторских приключенческих путешествий — от альпийских треков в горах Тянь-Шань до культурного погружения в бескрайнюю казахскую степь.",
  },
  "about.p2": {
    en: "With years of local expertise, we connect travellers with authentic experiences — expert mountain guides, traditional yurt stays, and routes through some of Central Asia's most breathtaking and untouched landscapes.",
    ru: "Благодаря многолетнему опыту мы связываем путешественников с подлинными впечатлениями — опытные горные гиды, проживание в традиционных юртах и маршруты по самым захватывающим и нетронутым ландшафтам Центральной Азии.",
  },
  "about.stat1.value": { en: "500+", ru: "500+" },
  "about.stat1.label": {
    en: "Expeditions Completed",
    ru: "Экспедиций проведено",
  },
  "about.stat2.value": { en: "6+", ru: "6+" },
  "about.stat2.label": { en: "Years of Experience", ru: "Лет опыта" },
  "about.stat3.value": { en: "15+", ru: "15+" },
  "about.stat3.label": {
    en: "Unique Routes",
    ru: "Уникальных маршрутов",
  },
  "about.stat4.value": { en: "98%", ru: "98%" },
  "about.stat4.label": {
    en: "Client Satisfaction",
    ru: "Удовлетворённость клиентов",
  },

  // Explore
  "explore.label": {
    en: "Explore Kazakhstan",
    ru: "Направления Казахстана",
  },
  "explore.title": {
    en: "Iconic Destinations",
    ru: "Знаковые направления",
  },
  "explore.description": {
    en: "From alpine lakes to ancient canyons, every corner of Kazakhstan holds an adventure waiting to unfold.",
    ru: "От горных озёр до древних каньонов — каждый уголок Казахстана хранит приключение, ожидающее открытия.",
  },

  // Destination Cards
  "dest.charyn.title": { en: "Charyn Canyon", ru: "Чарынский каньон" },
  "dest.charyn.desc": {
    en: "12 million years of geological history carved into dramatic red rock formations.",
    ru: "12 миллионов лет геологической истории в драматичных красных скальных формациях.",
  },
  "dest.kolsai.title": { en: "Kolsai Lakes", ru: "Кольсайские озёра" },
  "dest.kolsai.desc": {
    en: "Three pristine alpine lakes nestled among spruce forests and mountain peaks.",
    ru: "Три чистейших горных озера среди еловых лесов и горных вершин.",
  },
  "dest.altyn.title": {
    en: "Altyn-Emel National Park",
    ru: "Национальный парк Алтын-Эмель",
  },
  "dest.altyn.desc": {
    en: "Home to the legendary Singing Dunes and vast steppe landscapes.",
    ru: "Родина легендарного Поющего бархана и бескрайних степных ландшафтов.",
  },
  "dest.lake.title": {
    en: "Big Almaty Lake",
    ru: "Большое Алматинское озеро",
  },
  "dest.lake.desc": {
    en: "A stunning turquoise alpine lake at 2,511 meters in the Tien Shan mountains.",
    ru: "Потрясающее бирюзовое горное озеро на высоте 2511 метров в горах Тянь-Шань.",
  },
  "dest.turkestan.title": { en: "Hot spring", ru: "Горячие источники" },
  "dest.turkestan.desc": {
    en: "A natural hot spring offering relaxing thermal waters and scenic surroundings, perfect for wellness and nature lovers.",
    ru: "Природный горячий источник с целебной термальной водой и живописными окрестностями, идеально подходящий для отдыха и оздоровления."
  },
  "dest.nomad.title": {
    en: "Nomadic Heritage",
    ru: "Наследие кочевников",
  },
  "dest.nomad.desc": {
    en: "Experience authentic Kazakh yurt stays, horseback riding, and traditional cuisine.",
    ru: "Погрузитесь в аутентичный быт казахских юрт, верховую езду и традиционную кухню.",
  },
  //в
  "places.ayusay.title": { en: "Ayusay", ru: "Аюсай" },
"places.ayusay.desc": {
  en: "Tourist center providing information about natural and cultural attractions in Almaty",
  ru: "Центр для туристов с информацией о природных и культурных достопримечательностях Алматы",
},

"places.centralSquare.title": { en: "Central Square", ru: "Центральная площадь" },
"places.centralSquare.desc": {
  en: "The main square of Almaty, hosting city events and festivals",
  ru: "Главная площадь Алматы, где проходят городские мероприятия и фестивали",
},

"places.28panfilov.title": { en: "Park of 28 Panfilov", ru: "Парк 28 панфиловцев" },
"places.28panfilov.desc": {
  en: "Park with monuments dedicated to the heroes of World War II",
  ru: "Парк с памятниками, посвящёнными героям Второй мировой войны",
},

"places.zenkov.title": { en: "Zenkovsky Cathedral", ru: "Зенковский собор" },
"places.zenkov.desc": {
  en: "Beautiful wooden cathedral in central Almaty, a true architectural gem",
  ru: "Красивый деревянный собор в центре Алматы, архитектурная жемчужина города",
},

"places.greenBazaar.title": { en: "Green Market", ru: "Зеленый базар" },
"places.greenBazaar.desc": {
  en: "Famous market with fruits, vegetables, and local delicacies",
  ru: "Известный базар с фруктами, овощами и местными деликатесами",
},

"places.shymbulak.title": { en: "Shymbulak", ru: "Шымбулак" },
"places.shymbulak.desc": {
  en: "Ski resort with picturesque views and slopes for beginners and professionals",
  ru: "Горнолыжный курорт с живописными видами и трассами для новичков и профессионалов",
},

"places.kokTobe.title": { en: "Kok-Tobe", ru: "Кок-Тобе" },
"places.kokTobe.desc": {
  en: "Popular observation hill with entertainment and panoramic views of Almaty",
  ru: "Популярная смотровая гора с развлечениями и панорамным видом на Алматы",
},

"places.fabric.title": { en: "Chocolate Factory Rakhat", ru: "Шоколадная фабрика Рахат" },
"places.fabric.desc": {
  en: "A famous chocolate factory offering guided tours, chocolate tasting, and a chance to see the production process.",
  ru: "Известная шоколадная фабрика с экскурсиями, дегустациями и возможностью увидеть процесс производства шоколада."
},

"places.kayindy.title": { en: "Lake Kaiyndy", ru: "Озеро Кайынды" },
"places.kayindy.desc": {
  en: "Unique lake with submerged forest and crystal clear water",
  ru: "Уникальное озеро с затонувшим лесом и прозрачной водой",
},

"places.issyk.title": { en: "Lake Issyk", ru: "Озеро Иссык" },
"places.issyk.desc": {
  en: "Mountain lake with scenic views and clear water, perfect for relaxation",
  ru: "Горное озеро с живописными пейзажами и чистой водой для отдыха",
},

  // Author's Adventure Tours
  "tours.label": { en: "Author's Adventures", ru: "Авторские туры" },
  "tours.title": { en: "Curated Tour Experiences", ru: "Авторские маршруты" },
  "tours.description": {
    en: "Handcrafted itineraries designed to reveal the most breathtaking landscapes and cultural gems of Kazakhstan.",
    ru: "Тщательно продуманные маршруты, раскрывающие самые захватывающие пейзажи и культурные сокровища Казахстана.",
  },
  "tours.route": { en: "Route", ru: "Маршрут" },
  "tours.time": { en: "Time", ru: "Время" },
  "tours.included": { en: "Included", ru: "Включено" },
  "tours.price": { en: "Price", ru: "Цена" },
  "tours.book": { en: "Book Now", ru: "Забронировать" },
  "tours.people": { en: "people", ru: "чел." },
  "tours.upto": { en: "up to", ru: "до" },

  // Tour 1 — City Tour
  "tour1.title": { en: "City Tour", ru: "Городской тур" },
  "tour1.route": {
    en: "Ayusai Visit Center, Central Square, Panfilov Park, Zenkov Cathedral, Chocolate Factory, Green Bazaar",
    ru: "Визит-центр Аюсай, Центральная площадь, Парк Панфилова, Вознесенский собор, Шоколадная фабрика, Зелёный базар",
  },
  "tour1.time": { en: "10:00 - 19:00", ru: "10:00 - 19:00" },
  "tour1.included": {
    en: "Transport with guide, eco fees",
    ru: "Транспорт с гидом, экосборы",
  },

  // Tour 2 — Kolsai Easy
  "tour2.title": { en: "Kolsai Easy", ru: "Кольсай Лайт" },
  "tour2.route": {
    en: "Kolsai Lake, Moon Canyon, Black Canyon, Charyn Canyon",
    ru: "Кольсайское озеро, Лунный каньон, Чёрный каньон, Чарынский каньон",
  },
  "tour2.time": { en: "07:00 - 20:00", ru: "07:00 - 20:00" },
  "tour2.included": {
    en: "Transport with guide, tickets, eco fees",
    ru: "Транспорт с гидом, билеты, экосборы",
  },
  

  // Tour 3 — Kolsai Full Express
  "tour3.title": {
    en: 'Kolsai Full "Express"',
    ru: 'Кольсай Полный "Экспресс"',
  },
  "tour3.route": {
    en: "Kolsai Lake, Kaindy Lake, Black Canyon, Charyn Canyon",
    ru: "Кольсайское озеро, Каинды, Чёрный каньон, Чарынский каньон",
  },
  "tour3.time": { en: "05:30 - 20:00", ru: "05:30 - 20:00" },
  "tour3.included": {
    en: "Transport with guide, off-road car to Kaindy, horse rental, tickets, eco fees",
    ru: "Транспорт с гидом, внедорожник до Каинды, аренда лошадей, билеты, экосборы",
  },


  // Tour 4 — Shymbulak - Kok Tobe
  "tour4.title": { en: "Shymbulak - Kok Tobe", ru: "Шымбулак - Кок-Тобе" },
  "tour4.route": {
    en: "Shymbulak, Navat Restaurant, Kok Tobe",
    ru: "Шымбулак, ресторан Нават, Кок-Тобе",
  },
  "tour4.time": { en: "10:00 - 19:00", ru: "10:00 - 19:00" },
  "tour4.included": {
    en: "Transport with guide, cable car tickets, entrance tickets",
    ru: "Транспорт с гидом, билеты на канатную дорогу, входные билеты",
  },

  // Tour 5 — Nature Tours
  "tour5.title": { en: "Huns Village and Oi-Qaragai", ru: "Аул Гунны и Ой-Карагай" },
  "tour5.route": { en: "Almaty - Huns Ethno Village - Oi-Qaragai Ski Resort - Almaty", ru: "Алматы - Этно-аул Гунны - Ой-Карагай - Алматы" },
  "tour5.time": { en: "09:30 - 19:00", ru: "09:30 - 19:00" },
  "tour5.included": {en: "Transport with guide, entrance tickets", ru: "Транспорт с гидом, входные билеты",},

  "tour6.title": { en: "Big Almaty Lake and Springs", ru: "БАО и Источники" },
  "tour6.route": { en: "Almaty - Big Almaty lake - Almaarasan gorge - Thermal springs - Almaty", ru: "Алматы - БАО - Алма-Арасан - Термальные источники - Алматы" },
  "tour6.time": { en: "06:00 - 16:00", ru: "06:00 - 16:00" },
  "tour6.included": { en: "Transportation with English-speaking guide, SUV to lake, eco fees", ru: "Транспорт с гидом, внедорожник до озера, экосборы" },


  "tour7.title": { en: "Nomads City and Tamgaly Tas", ru: "Город Кочевников и Тамгалы-Тас" },
  "tour7.route": { en: "Almaty - Nomads Castle - Boat trip to Tamgaly Tas - Retro Cars - Almaty", ru: "Алматы - Замок Кочевников - Лодка до Тамгалы-Тас - Ретро авто - Алматы" },
  "tour7.time": { en: "08:00 - 19:00", ru: "08:00 - 19:00" },
  "tour7.included": { en: "Transportation with guide, boat, eco fees, tickets", ru: "Транспорт с гидом, лодка, экосборы, билеты" },


  "tour8.title": { en: "Assy Plateau and Turgen", ru: "Плато Ассы и Тургень" },
  "tour8.route": { en: "Almaty - Assy plateau - Turgen gorge - Issyk lake - Almaty", ru: "Алматы - Плато Ассы - Тургень - Озеро Иссык - Алматы" },
  "tour8.time": { en: "07:00 - 19:00", ru: "07:00 - 19:00" },
  "tour8.included": { en: "Transportation with guide and eco fees", ru: "Транспорт с гидом и экосборы" },


  "tour9.title": { en: "Singing Dunes", ru: "Поющий бархан" },
  "tour9.route": { en: "Almaty - Basshy village - Singing Dunes - Almaty", ru: "Алматы - поселок Басши - Поющий бархан - Алматы" },
  "tour9.time": { en: "06:00 - 19:00", ru: "06:00 - 19:00" },
  "tour9.included": { en: "Transportation with guide, SUV to dunes, eco fees", ru: "Транспорт с гидом, внедорожник, экосборы" },


  "tour10.title": { en: "Aktau and Katutau Mountains", ru: "Горы Актау и Катутау" },
  "tour10.route": { en: "Almaty - Basshy village - Aktau and Katutau mountains - Almaty", ru: "Алматы - Басши - горы Актау и Катутау - Алматы" },
  "tour10.time": { en: "06:00 - 19:00", ru: "06:00 - 19:00" },
  "tour10.included": { en: "Transportation with guide, SUV to mountains, eco fees", ru: "Транспорт с гидом, внедорожник, экосборы" },


  "tour11.title": { en: "Issyk Lake and Waterfall", ru: "Озеро Иссык и Водопад" },
  "tour11.route": { en: "Almaty - Issyk lake - Turgen gorge - bear waterfall - Almaty", ru: "Алматы - Озеро Иссык - Тургень - Медвежий водопад - Алматы" },
  "tour11.time": { en: "09:00 - 19:00", ru: "09:00 - 19:00" },
  "tour11.included": { en: "Transportation with guide and eco fees", ru: "Транспорт с гидом и экосборы" },

  
// --- TWO-DAY TOURS ---
  "tours.twoday.label": { en: "Weekend Expeditions", ru: "Двухдневные экспедиции" },

  // Singing Dunes & Mountains (2 Days)
  "tour12.title": { en: "Singing Dunes and Aktau Mountains", ru: "Поющий бархан и горы Актау" },
  "tour12.route": { 
    en: "Almaty - Basshy - Singing Dunes - Overnight - Aktau and Katutau Mountains - Almaty", 
    ru: "Алматы - Басши - Поющий бархан - Ночевка - горы Актау и Катутау - Алматы" 
  },
  "tour12.time": { en: "2 Days (Starts 06:00 AM)", ru: "2 дня (Старт в 06:00)" },
  "tour12.included": { 
    en: "Transport with English guide, SUV, Eco fees, Guesthouse, 3 meals included", 
    ru: "Транспорт с гидом, внедорожник, экосборы, гостевой дом, 3-разовое питание" 
  },


  // Kolsai Full 2 (2 Days)
  "tour13.title": { en: 'Two-day tour "Kolsai Full 2"', ru: 'Двухдневный тур "Кольсай Фулл 2"' },
  "tour13.route": { 
    en: "Charyn Canyon - Moon Canyon - Black Canyon - Saty - Kaindy Lake - Kolsai Lake", 
    ru: "Чарынский каньон - Лунный каньон - Черный каньон - Саты - Каинды - Кольсай" 
  },
  "tour13.time": { en: "2 Days (Starts 09:00 AM)", ru: "2 дня (Старт в 09:00)" },
  "tour13.included": { 
    en: "English guide, SUV to Kaindy, Horse rental, Tickets, Guesthouse with breakfast", 
    ru: "Англоговорящий гид, внедорожник, аренда лошадей, билеты, гостевой дом с завтраком" 
  },
  // Tour 14 
  "tour14.title": { en: "Khorgos", ru: "Хоргос" },
  "tour14.route": { en: "Almaty Botanical Garden - Big Almaty Lake - Almaty City Park", 
  ru: "Ботанический сад Алматы - Большое Алматинское озеро - Городской парк Алматы" },
"tour14.time": { 
  en: "09:00 - 15:00", 
  ru: "09:00 - 15:00" 
},
"tour14.included": { 
  en: "• Comfortable transfer from Almaty and back\n• Visit to the Khorgos center and free time for shopping\n       • Huge selection of goods: clothing, technology, accessories, household goods\n• Opportunity to buy high-quality goods at affordable prices\n• Assistance from a guide and escort", 
  ru: "• Комфортный трансфер из Алматы и обратно\n• Посещение центра Хоргос и свободное время для покупок\n• Огромный выбор товаров: одежда, техника, аксессуары, товары для дома\n• Возможность купить качественные товары по доступным ценам\n• Помощь и сопровождение гида"
},
  



  

  // Tour 6 — Multi-day Packages
 // ===== PACKAGE 1 =====
// ================= PACKAGE 1 =================
"tours.multiday": { 
    en: "Multi-day Packages", 
    ru: "Многодневные пакеты" 
  },

"tour6.pkg1.title": {
  en: "PACKAGE 1 – 3 DAYS TOUR",
  ru: "ПАКЕТ 1 – ТУР НА 3 ДНЯ",
},
"tour6.pkg1.duration": {
  en: "Including Airport Transfers",
  ru: "С трансфером из аэропорта",
},

"tour6.pkg1.day1": {
  en: 'Day 1-2: Two-day tour "Kolsai Full 2" (Kolsai Lake, Kaindy Lake, Moon Canyon, Black Canyon, Charyn Canyon, Charyn River)',
  ru: 'День 1-2: Двухдневный тур "Кольсай Фулл 2" (озеро Кольсай, озеро Каинды, Лунный каньон, Чёрный каньон, Чарынский каньон, река Чарын)',
},

"tour6.pkg1.day2": {
  en: "Overnight in guesthouse or hotel near Kolsai",
  ru: "Ночёвка в гостевом доме или отеле у Кольсая",
},

"tour6.pkg1.day3": {
  en: "Day 3: Shymbulak Ski Resort, Navat Restaurant (traditional food), Park of 28 Panfilov Men, Zenkov Cathedral, Chocolate Factory (shop), Green Bazaar",
  ru: "День 3: Шымбулак, ресторан «Нават» (традиционная кухня), Парк 28 панфиловцев, Зенковский собор, Шоколадная фабрика (магазин), Зелёный базар",
},

"tour6.pkg1.included": {
  en: "Transportation with English-speaking guide, SUV to Kaindy Lake, horse rental, tickets and eco fees, guesthouse accommodation with breakfast, cable car tickets in Shymbulak",
  ru: "Транспорт с англоговорящим гидом, внедорожник до озера Каинды, аренда лошадей, билеты и экосборы, проживание в гостевом доме с завтраком, билеты на канатную дорогу в Шымбулаке",
},

// ===== PACKAGE 2 =====
// ================= PACKAGE 2 =================

"tour6.pkg2.title": {
  en: "PACKAGE 2 – 3 DAYS TOUR",
  ru: "ПАКЕТ 2 – ТУР НА 3 ДНЯ",
},
"tour6.pkg2.duration": {
  en: "Including Airport Transfers",
  ru: "С трансфером из аэропорта",
},

"tour6.pkg2.day1": {
  en: 'Day 1: "Kolsai Full Express" (Kolsai Lake, Kaindy Lake, Black Canyon, Charyn Canyon)',
  ru: 'День 1: "Кольсай Фулл Экспресс" (озеро Кольсай, озеро Каинды, Чёрный каньон, Чарынский каньон)',
},

"tour6.pkg2.day2": {
  en: 'Day 2: "Shymbulak – Kok-Tobe" (Shymbulak Ski Resort, Kok-Tobe Amusement Park)',
  ru: 'День 2: "Шымбулак – Кок-Тобе" (горнолыжный курорт Шымбулак, парк Кок-Тобе)',
},

"tour6.pkg2.day3": {
  en: 'Day 3: "City Tour" (Ayusai Visit Center, Central Square, Park of 28 Panfilov Men, Zenkov Cathedral, Chocolate Factory, Green Bazaar)',
  ru: 'День 3: "Городской тур" (визит-центр Аюсай, Центральная площадь, Парк 28 панфиловцев, Зенковский собор, Шоколадная фабрика, Зелёный базар)',
},

"tour6.pkg2.included": {
  en: "Transportation with English-speaking guide, SUV to Kaindy Lake, horse rental, tickets and eco fees, cable car tickets in Shymbulak, Kok-Tobe entrance fees",
  ru: "Транспорт с англоговорящим гидом, внедорожник до Каинды, аренда лошадей, билеты и экосборы, билеты на канатную дорогу в Шымбулаке, входные билеты на Кок-Тобе",
},


// ================= PACKAGE 3 =================

"tour6.pkg3.title": {
  en: "PACKAGE 3 – 4 DAYS TOUR",
  ru: "ПАКЕТ 3 – ТУР НА 4 ДНЯ",
},
"tour6.pkg3.duration": {
  en: "Including Airport Transfers",
  ru: "С трансфером из аэропорта",
},

"tour6.pkg3.day1": {
  en: 'Day 1-2: Two-day tour "Kolsai Full 2" (Kolsai Lake, Kaindy Lake, Moon Canyon, Black Canyon, Charyn Canyon, Charyn River)',
  ru: 'День 1-2: Двухдневный тур "Кольсай Фулл 2" (озеро Кольсай, озеро Каинды, Лунный каньон, Чёрный каньон, Чарынский каньон, река Чарын)',
},

"tour6.pkg3.day2": {
  en: 'Day 3: "Shymbulak – Kok-Tobe" (Shymbulak Ski Resort, Kok-Tobe Amusement Park, Restaurant "Navat")',
  ru: 'День 3: "Шымбулак – Кок-Тобе" (горнолыжный курорт Шымбулак, парк Кок-Тобе, ресторан «Нават»)',
},

"tour6.pkg3.day3": {
  en: 'Day 4: "City Tour" (Ayusai Visit Center, Central Square, Park of 28 Panfilov Men, Zenkov Cathedral, Chocolate Factory, Green Bazaar)',
  ru: 'День 4: "Городской тур" (визит-центр Аюсай, Центральная площадь, Парк 28 панфиловцев, Зенковский собор, Шоколадная фабрика, Зелёный базар)',
},

"tour6.pkg3.included": {
  en: "Transportation with English-speaking guide, SUV to Kaindy Lake, horse rental, tickets and eco fees, guesthouse accommodation, cable car tickets in Shymbulak, Kok-Tobe entrance fees",
  ru: "Транспорт с англоговорящим гидом, внедорожник до Каинды, аренда лошадей, билеты и экосборы, проживание в гостевом доме, билеты на канатную дорогу в Шымбулаке, входные билеты на Кок-Тобе",
},


// ================= PACKAGE 4 =================

"tour6.pkg4.title": {
  en: "PACKAGE 4 – 3 DAYS TOUR",
  ru: "ПАКЕТ 4 – ТУР НА 3 ДНЯ",
},
"tour6.pkg4.duration": {
  en: "Including Airport Transfers",
  ru: "С трансфером из аэропорта",
},

"tour6.pkg4.day1": {
  en: 'Day 1: "Kolsai Easy" (Kolsai Lake, Moon Canyon, Black Canyon, Charyn Canyon)',
  ru: 'День 1: "Кольсай Изи" (озеро Кольсай, Лунный каньон, Чёрный каньон, Чарынский каньон)',
},

"tour6.pkg4.day2": {
  en: 'Day 2: "Shymbulak – Kok-Tobe" (Shymbulak Ski Resort, Kok-Tobe Amusement Park, Restaurant "Navat")',
  ru: 'День 2: "Шымбулак – Кок-Тобе" (горнолыжный курорт Шымбулак, парк Кок-Тобе, ресторан «Нават»)',
},

"tour6.pkg4.day3": {
  en: 'Day 3: "City Tour" (Ayusai Visit Center, Central Square, Park of 28 Panfilov Men, Zenkov Cathedral, Chocolate Factory, Green Bazaar)',
  ru: 'День 3: "Городской тур" (визит-центр Аюсай, Центральная площадь, Парк 28 панфиловцев, Зенковский собор, Шоколадная фабрика, Зелёный базар)',
},

"tour6.pkg4.included": {
  en: "Transportation with English-speaking guide, tickets and eco fees, cable car tickets in Shymbulak, Kok-Tobe entrance fees",
  ru: "Транспорт с англоговорящим гидом, билеты и экосборы, билеты на канатную дорогу в Шымбулаке, входные билеты на Кок-Тобе",
},


  // Contact
  "contact.label": { en: "Contact Us", ru: "Связаться с нами" },
  "contact.title": {
    en: "Start Your Adventure",
    ru: "Начните ваше приключение",
  },
  "contact.description": {
    en: "Ready to explore Kazakhstan? Reach out to our team and we will help you plan the perfect journey.",
    ru: "Готовы исследовать Казахстан? Свяжитесь с нашей командой, и мы поможем спланировать идеальное путешествие.",
  },
  "contact.name": { en: "Full Name", ru: "Полное имя" },
  "contact.email": { en: "Email Address", ru: "Электронная почта" },
  "contact.message": { en: "Your Message", ru: "Ваше сообщение" },
  "contact.send": { en: "Send Message", ru: "Oтправить" },
  "contact.phone": { en: "Phone", ru: "Телефон" },
  "contact.email.label": { en: "Email", ru: "Почта" },
  "contact.website": { en: "Website", ru: "Сайт" },
  "contact.address": { en: "Address", ru: "Адрес" },
  "contact.address.value": {
    en: "55 Aiteke Bi Street, Almaty, Kazakhstan",
    ru: "ул. Айтеке Би 55, Алматы, Казахстан",
  },

  // Footer
  "footer.rights": {
    en: "All rights reserved.",
    ru: "Все права защищены.",
  },
  "footer.tagline": {
    en: "Premium adventure travel across Kazakhstan",
    ru: "Премиум приключенческий туризм по Казахстану",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
