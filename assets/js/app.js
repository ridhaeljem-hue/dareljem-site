/* Dar El Jem · site (FR / EN) */
(function () {
'use strict';

/* ------------------------------------------------------------------ */
/*  1. Textes de l'interface                                           */
/* ------------------------------------------------------------------ */
const T = {
fr: {
  'nav.exp':'Expériences','nav.map':'Le plan','nav.info':'Infos pratiques','nav.blog':'Chroniques','nav.pro':'Agences','nav.book':'Réserver',
  'hero.kicker':'Ave, viator · El Jem, Tunisie','hero.full':'Passez la porte du temps','hero.t1':'Passez la porte','hero.t2':'du temps','hero.cue':'Entrez',
  'hero.cap.k':'Dar El Jem · Thysdrus','hero.cap':'La culture romaine, à vivre en Tunisie',
  'intro.k':'Bienvenue à Dar El Jem','intro.title':'Un lieu pour <em>vivre</em> la Rome antique.',
  'intro.text':'À deux pas de l’amphithéâtre, entrez dans la vie de Thysdrus, la cité romaine d’El Jem : ses mosaïques, sa cuisine, ses couleurs. Musée, atelier, table romaine et décors d’époque sont réunis en un seul lieu, pour une visite en famille, entre amis ou en solo.',
  'intro.u.k':'Patrimoine mondial de l’UNESCO','intro.u':'L’amphithéâtre d’El Jem, le Ksar, est inscrit au patrimoine mondial. Dar El Jem prolonge sa visite : après les gradins, venez vivre pleinement l’expérience romaine.','intro.alt':'La façade de Dar El Jem et ses légionnaires',
  'map.k':'Le plan du domaine','map.title':'Choisissez votre aventure','map.lead':'Touchez un repère sur le plan pour découvrir l’expérience qui s’y cache.','map.hint':'Le parcours, de I à V','map.bonus':'Bonus offert : shooting dans un décor romain','map.alt':'Plan illustré de Dar El Jem et de l’amphithéâtre',
  'map.a':'Accueil & atelier des mosaïstes','map.b':'Fast food','map.amphi':'Amphithéâtre d’El Jem','map.toAmphi':'Vers l’amphithéâtre','map.entrance':'Entrée','map.parking':'Parking bus · hors site',
  'exp.k':'Les expériences','exp.title':'Cinq façons de remonter le temps','exp.lead':'À combiner librement selon vos envies. Tarifs en dinars tunisiens (DT).','exp.more':'Découvrir',
  'tm.k':'Ils sont passés par la porte','tm.title':'Ce qu’en disent nos visiteurs','tm.src':'Avis Google','tm.fromen':'Traduit de l’anglais','tm.fromfr':'Traduit du français',
  'bonus.tag':'Offert pendant votre visite','bonus.t':'Posez en tenue romaine','bonus.x':'Toge, armure, décor d’époque : une petite séance photo vous attend dans notre salle romaine.',
  'bk.k':'Réservation','bk.title':'Réservez votre venue','bk.lead':'Pas de paiement en ligne : remplissez le formulaire, il s’envoie sur WhatsApp et nous vous répondons pour confirmer la date et l’horaire.',
  'bk.s1':'Choisissez vos expériences, la date et le nombre de personnes.','bk.s2':'Envoyez la demande sur WhatsApp, nous vous répondons pour confirmer.','bk.s3':'Le jour J, présentez-vous à l’accueil : la visite commence.',
  'bk.ftitle':'Votre demande','bk.fsub':'Réponse sous 48 h environ.',
  'f.exp':'Expériences souhaitées','f.date':'Date de visite','f.slot':'Moment de la journée','f.slot1':'Matin','f.slot2':'Midi (avec repas)','f.slot3':'Après-midi',
  'f.adults':'Adultes','f.kids':'Enfants','f.name':'Nom et prénom','f.email':'E-mail','f.phone':'Téléphone / WhatsApp','f.lang':'Langue de visite','f.other':'Autre',
  'f.msg':'Un message ? (allergies, occasion spéciale…)','f.consent':'J’accepte que Dar El Jem utilise ces informations pour répondre à ma demande.','f.privacy':'En savoir plus','f.consent.short':'la case de consentement',
  'f.note':'Votre demande s’ouvre dans WhatsApp, prête à être envoyée.','f.send':'Envoyer sur WhatsApp','ok.wa':'Ouvrir WhatsApp',
  'f.err':'Merci de remplir les champs requis : {f}.','f.errexp':'au moins une expérience',
  'ok.title':'Gratias tibi !','ok.text':'WhatsApp s’est ouvert avec votre demande : il ne vous reste qu’à appuyer sur « Envoyer ». Si rien ne s’est ouvert, utilisez le bouton ci-dessous.','ok.again':'Faire une autre demande',
  'ok.pro':'WhatsApp s’est ouvert avec votre demande : appuyez sur « Envoyer », notre équipe vous répond avec une proposition adaptée.',
  'c.phone':'Téléphone','c.wa':'WhatsApp','c.wa.hint':'Écrivez-nous directement','c.mail':'E-mail',
  'inf.k':'Infos pratiques','inf.title':'Préparer votre venue','inf.where':'Adresse','inf.where.v':'Dar El Jem, avenue Farhat Hached, à quelques pas de l’amphithéâtre, El Jem – Tunisie','inf.route':'Itinéraire',
  'inf.hours':'Horaires','inf.hours.v':'Ouvert tous les jours','inf.access':'Accès','inf.access.v':'Parking bus à proximité. Le site se rejoint à pied depuis l’amphithéâtre.',
  'faq.k':'Questions fréquentes',
  'bl.k':'Les Chroniques de Ridus','bl.title':'Histoires de Thysdrus','bl.lead':'Recettes antiques, secrets de mosaïstes et vie du lieu.','bl.all':'Toutes les chroniques',
  'blp.title':'Le carnet d’un mosaïste de Thysdrus','blp.lead':'Cuisine antique, art de la mosaïque, histoire d’El Jem et nouvelles de Dar El Jem.',
  'blp.persona':'<b>Ridus</b>, mosaïste et écrivain, supervise le jour la pose des tesselles dans les villas des marchands d’huile d’olive. La nuit, à la lueur d’une lampe à huile, il écrit ces chroniques.',
  'blp.all':'Tout','art.more':'À lire aussi','art.back':'Toutes les chroniques','art.min':'min de lecture','art.sample':'Article exemple',
  'pro.k':'Espace professionnels','pro.title':'Agences, tour-opérateurs, groupes',
  'pro.lead':'Offrez à vos voyageurs une étape vivante à El Jem, en complément de la visite de l’amphithéâtre. Programmes sur mesure, restauration de groupe, conditions professionnelles sur demande.',
  'pro.cta':'Nous contacter','pro.note':'Les tarifs professionnels et la brochure 2027 sont communiqués sur demande, après échange avec notre équipe.',
  'pf.title':'Demande professionnelle','pf.sub':'Parlez-nous de votre groupe : nous revenons vers vous avec une proposition.','pf.org':'Structure','pf.type':'Type',
  'pf.t1':'Agence de voyages','pf.t2':'Tour-opérateur','pf.t3':'Hôtel','pf.t4':'École / association','pf.t5':'Entreprise',
  'pf.name':'Nom du contact','pf.country':'Pays','pf.size':'Taille du groupe','pf.when':'Période envisagée','pf.when.ph':'Ex. avril 2027, chaque mardi',
  'pf.int':'Expériences qui vous intéressent','pf.msg':'Votre projet','pf.broch':'Je souhaite recevoir la brochure professionnelle 2027.','pf.send':'Envoyer sur WhatsApp',
  'ft.about':'Un centre d’animation dédié à la culture romaine, à quelques pas de l’amphithéâtre d’El Jem.','ft.visit':'Visiter','ft.more':'Découvrir','ft.contact':'Contact','ft.city':'El Jem, Tunisie','ft.legal':'Mentions légales','ft.privacy':'Confidentialité',
  's.formats':'Formules','s.duration':'Durée','s.price':'Tarif','s.for':'Pour qui','s.expect':'Ce qui vous attend','s.menus':'Les menus','s.gallery':'En images','s.book':'Réserver cette expérience','s.close':'Fermer','s.prev':'Précédente','s.next':'Suivante',
  'cur':'DT','free':'Gratuit','pp':'/ pers.','from':'dès'
},
en: {
  'nav.exp':'Experiences','nav.map':'Site map','nav.info':'Plan your visit','nav.blog':'Chronicles','nav.pro':'Travel trade','nav.book':'Book',
  'hero.kicker':'Ave, viator · El Jem, Tunisia','hero.full':'Step through the gate of time','hero.t1':'Step through','hero.t2':'the gate of time','hero.cue':'Enter',
  'hero.cap.k':'Dar El Jem · Thysdrus','hero.cap':'Roman culture, to be lived in Tunisia',
  'intro.k':'Welcome to Dar El Jem','intro.title':'A place to <em>live</em> ancient Rome.',
  'intro.text':'A few steps from the amphitheatre, enter the daily life of Thysdrus, the Roman city of El Jem: its mosaics, its food, its colours. Museum, workshop, Roman table and period settings come together in one place, for families, friends or solo travellers.',
  'intro.u.k':'UNESCO World Heritage','intro.u':'The El Jem amphitheatre, known locally as the Ksar, is a World Heritage Site. Dar El Jem extends your visit: after the arena, come and live the Roman experience to the full.','intro.alt':'The façade of Dar El Jem with its legionaries',
  'map.k':'Site map','map.title':'Choose your adventure','map.lead':'Tap a marker on the map to discover the experience behind it.','map.hint':'The journey, from I to V','map.bonus':'Free bonus: photo shoot in a Roman setting','map.alt':'Illustrated map of Dar El Jem and the amphitheatre',
  'map.a':'Reception & mosaic artists’ workshop','map.b':'Fast food','map.amphi':'El Jem Amphitheatre','map.toAmphi':'To the amphitheatre','map.entrance':'Entrance','map.parking':'Coach parking · off site',
  'exp.k':'Experiences','exp.title':'Five ways to travel back in time','exp.lead':'Mix and match as you like. Prices in Tunisian dinars (TND).','exp.more':'Discover',
  'tm.k':'They stepped through the gate','tm.title':'What our visitors say','tm.src':'Google reviews','tm.fromen':'Translated from English','tm.fromfr':'Translated from French',
  'bonus.tag':'Free with your visit','bonus.t':'Pose in Roman dress','bonus.x':'Toga, armour and a period set: a short photo session awaits you in our Roman room.',
  'bk.k':'Booking','bk.title':'Book your visit','bk.lead':'No online payment: send us your request and we will get back to you to confirm the date and time.',
  'bk.s1':'Choose your experiences, date and number of guests.','bk.s2':'Send the request on WhatsApp and we reply to confirm.','bk.s3':'On the day, come to reception: your visit begins.',
  'bk.ftitle':'Your request','bk.fsub':'We usually reply within 48 hours.',
  'f.exp':'Experiences you’d like','f.date':'Visit date','f.slot':'Time of day','f.slot1':'Morning','f.slot2':'Lunchtime (with a meal)','f.slot3':'Afternoon',
  'f.adults':'Adults','f.kids':'Children','f.name':'Full name','f.email':'Email','f.phone':'Phone / WhatsApp','f.lang':'Visit language','f.other':'Other',
  'f.msg':'Anything else? (allergies, special occasion…)','f.consent':'I agree that Dar El Jem may use this information to reply to my request.','f.privacy':'Learn more','f.consent.short':'the consent box',
  'f.note':'Your request opens in WhatsApp, ready to send.','f.send':'Send via WhatsApp','ok.wa':'Open WhatsApp',
  'f.err':'Please fill in the required fields: {f}.','f.errexp':'at least one experience',
  'ok.title':'Gratias tibi!','ok.text':'WhatsApp has opened with your request: just tap “Send”. If nothing opened, use the button below.','ok.again':'Make another request',
  'ok.pro':'WhatsApp has opened with your request: tap “Send” and our team will reply with a tailored proposal.',
  'c.phone':'Phone','c.wa':'WhatsApp','c.wa.hint':'Message us directly','c.mail':'Email',
  'inf.k':'Plan your visit','inf.title':'Before you come','inf.where':'Address','inf.where.v':'Dar El Jem, avenue Farhat Hached, a few steps from the amphitheatre, El Jem – Tunisia','inf.route':'Get directions',
  'inf.hours':'Opening hours','inf.hours.v':'Open every day','inf.access':'Getting here','inf.access.v':'Coach parking nearby. Walk over from the amphitheatre.',
  'faq.k':'FAQ',
  'bl.k':'The Ridus Chronicles','bl.title':'Tales from Thysdrus','bl.lead':'Ancient recipes, mosaic makers’ secrets and life at Dar El Jem.','bl.all':'All chronicles',
  'blp.title':'Notebook of a Thysdrus mosaic maker','blp.lead':'Ancient cooking, the art of mosaic, El Jem history and news from Dar El Jem.',
  'blp.persona':'<b>Ridus</b>, mosaic maker and writer, spends his days laying tesserae in the villas of olive-oil merchants. At night, by the light of an oil lamp, he writes these chronicles.',
  'blp.all':'All','art.more':'Keep reading','art.back':'All chronicles','art.min':'min read','art.sample':'Sample article',
  'pro.k':'Travel trade','pro.title':'Agencies, tour operators, groups',
  'pro.lead':'Give your travellers a lively stop in El Jem alongside the amphitheatre visit. Tailor-made programmes, group dining, trade conditions on request.',
  'pro.cta':'Contact us','pro.note':'Trade rates and the 2027 brochure are shared on request, after a conversation with our team.',
  'pf.title':'Trade enquiry','pf.sub':'Tell us about your group and we will come back with a proposal.','pf.org':'Company','pf.type':'Type',
  'pf.t1':'Travel agency','pf.t2':'Tour operator','pf.t3':'Hotel','pf.t4':'School / association','pf.t5':'Company',
  'pf.name':'Contact name','pf.country':'Country','pf.size':'Group size','pf.when':'Planned period','pf.when.ph':'E.g. April 2027, every Tuesday',
  'pf.int':'Experiences of interest','pf.msg':'Your project','pf.broch':'I would like to receive the 2027 trade brochure.','pf.send':'Send via WhatsApp',
  'ft.about':'A cultural centre devoted to Roman culture, a few steps from the El Jem amphitheatre.','ft.visit':'Visit','ft.more':'Discover','ft.contact':'Contact','ft.city':'El Jem, Tunisia','ft.legal':'Legal notice','ft.privacy':'Privacy',
  's.formats':'Options','s.duration':'Duration','s.price':'Price','s.for':'For','s.expect':'What to expect','s.menus':'Menus','s.gallery':'Gallery','s.book':'Book this experience','s.close':'Close','s.prev':'Previous','s.next':'Next',
  'cur':'TND','free':'Free','pp':'/ person','from':'from'
}
};

/* ------------------------------------------------------------------ */
/*  2. Les expériences (ton visiteur, tarifs publics uniquement)       */
/* ------------------------------------------------------------------ */
const IMG = 'assets/img/';
const EXP = [
 { id:'musee', n:'I', icon:'ic-musee', img:'photo-1.webp', gallery:['photo-1.webp','v-bustes.webp','mosaique-sol.webp','mosaique-rouleaux.webp','mosaique-table.webp'], price:10, perPerson:true, dur:{fr:'Visite libre',en:'Self-guided'},
   fr:{t:'Atelier et Musée Micro Mosaïque', s:'Collection & atelier', tag:'Des milliers de tesselles pour raconter Rome.',
       d:'Commencez par le musée : une collection d’œuvres dédiées à l’art de la mosaïque. Poussez ensuite la porte de l’atelier de micro-mosaïque et regardez les artisans assembler, tesselle après tesselle, des pièces d’une finesse étonnante.',
       h:['Une collection d’œuvres en mosaïque','L’atelier de micro-mosaïque, en activité','Le point de départ idéal du parcours'], who:'Tous publics', note:'Droit d’entrée par personne.'},
   en:{t:'Micro-Mosaic Workshop & Museum', s:'Collection & workshop', tag:'Thousands of tesserae to tell the story of Rome.',
       d:'Start with the museum and its collection devoted to the art of mosaic. Then step into the micro-mosaic workshop and watch the artisans set, tessera by tessera, pieces of astonishing finesse.',
       h:['A collection of mosaic works','The micro-mosaic workshop at work','The perfect start to your visit'], who:'Everyone', note:'Entrance fee per person.'} },
 { id:'atelier', n:'II', icon:'ic-atelier', img:'photo-2.webp', gallery:['photo-2.webp','photo-3.webp','photo-4.webp','atelier-a.webp','v-outils.webp'], price:60, from:true, dur:{fr:'30 min à 8 h',en:'30 min to 8 h'},
   tiers:[{dur:{fr:'30 – 45 min',en:'30 – 45 min'},price:{fr:'60 DT',en:'60 TND'},who:{fr:'Familles, amis, curieux',en:'Families, friends, the curious'}},
          {dur:{fr:'6 – 8 heures',en:'6 – 8 hours'},price:{fr:'150 DT',en:'150 TND'},who:{fr:'Amateurs d’art et passionnés de mosaïque',en:'Art lovers and mosaic enthusiasts'}},
          {dur:{fr:'Selon le parcours',en:'Depends on the programme'},price:{fr:'Sur devis',en:'On quotation'},who:{fr:'Futurs artisans, artistes et étudiants en art',en:'Future artisans, artists and art students'}}],
   fr:{t:'Expériences & Formations en Mosaïque', s:'Atelier', tag:'Pince en main, devenez mosaïste, le temps d’un atelier ou d’une vraie formation.',
       d:'Installez-vous à la table des mosaïstes. Choix des tesselles, taille, pose : guidé pas à pas, chacun compose sa propre mosaïque, à la manière des artisans romains. De l’initiation d’une demi-heure à la journée complète, jusqu’aux parcours de formation pour les futurs artisans.',
       h:['Des formats pour tous les niveaux','Les gestes et les outils des mosaïstes','Votre propre création'], note:'L’initiation est accessible sans expérience. Les parcours de formation sont établis sur devis.'},
   en:{t:'Mosaic Experiences & Training', s:'Workshop', tag:'Pliers in hand, become a mosaic maker, for a workshop or a real training course.',
       d:'Take a seat at the mosaic makers’ table. Choosing, cutting and setting tesserae: guided step by step, everyone creates their own mosaic, just like Roman artisans. From a half-hour introduction to a full day, up to training programmes for future artisans.',
       h:['Formats for every level','The mosaic makers’ tools and techniques','Your very own creation'], note:'The introduction needs no experience. Training programmes are quoted on request.'} },
 { id:'restaurant', n:'III', icon:'ic-gastronomie', img:'photo-5.webp', gallery:['photo-5.webp','resto-table.webp','resto-daurade.webp','resto-pain.webp','resto-oeufs.webp','resto-convives.webp','resto-salle.webp'], priceLabel:{fr:'Sur demande',en:'On request'}, dur:{fr:'Déjeuner',en:'Lunch'},
   menus:[{fr:['Cena romana · Menu romain','Œufs durs aux pignons, soupe aux lentilles, huile d’olive et olives, pois chiches au cumin, purée d’olives, pain romain, plat au choix (caille au miel, poulet ou daurade) avec du raisin sec. Eau minérale, posca, fruit de saison.'],en:['Cena romana · Roman menu','Hard-boiled eggs with pine nuts, lentil soup, olive oil and olives, cumin chickpeas, olive purée, Roman bread, choice of main (honey quail, chicken or sea bream) with raisins. Mineral water, posca, seasonal fruit.']},
          {fr:['Menu I · Escalope grillée','Soupe aux poissons, escalope de poulet grillée, garnitures, fruit de saison'],en:['Menu I · Grilled chicken','Fish soup, grilled chicken escalope, sides, seasonal fruit']},
          {fr:['Menu II · Daurade grillée','Soupe aux poissons, daurade grillée, garnitures, fruit de saison'],en:['Menu II · Grilled sea bream','Fish soup, grilled sea bream, sides, seasonal fruit']},
          {fr:['Menu III · Steak de bœuf','Soupe d’agneau, steak de bœuf grillé, garnitures, fruit de saison'],en:['Menu III · Beef steak','Lamb soup, grilled beef steak, sides, seasonal fruit']}],
   extra:{fr:{t:'Animation musicale romaine',d:'Durée : 15 – 20 min · Tarif : 200 DT par groupe · Offerte pour les groupes de plus de 20 personnes.'},en:{t:'Roman music show',d:'Duration: 15 – 20 min · Price: 200 TND per group · Free for groups of more than 20 people.'}},
   fr:{t:'Le restaurant', s:'Romain & tunisien', tag:'Deux cuisines, une même générosité.',
       d:'Dans une salle aux couleurs pompéiennes, choisissez entre la Cena romana, un repas inspiré des recettes antiques servi dans une vaisselle d’époque, et la cuisine tunisienne d’aujourd’hui.',
       h:['Le menu romain et ses recettes antiques','Trois menus tunisiens complets','Une animation musicale romaine en option'], who:'Groupes de plus de 15 personnes', note:'Tarifs sur demande. Précisez vos allergies dans votre demande de réservation.'},
   en:{t:'The restaurant', s:'Roman & Tunisian', tag:'Two cuisines, the same generosity.',
       d:'In a dining room painted in Pompeian colours, choose between the Cena romana, a meal inspired by ancient recipes and served in period tableware, and today’s Tunisian cooking.',
       h:['The Roman menu and its ancient recipes','Three complete Tunisian menus','An optional Roman music show'], who:'Groups of more than 15 people', note:'Prices on request. Let us know about allergies in your booking request.'} },
 { id:'cooking', n:'IV', icon:'ic-culture', img:'cs-chef.webp', gallery:['cs-groupe.webp','cs-garum.webp','cs-caille.webp','cs-farine.webp','cs-raisin.webp','cs-dattes.webp'], priceLabel:{fr:'250 DT / groupe',en:'250 TND / group'}, dur:{fr:'20 – 30 min',en:'20 – 30 min'},
   fr:{t:'Cooking show romain', s:'Cuisine antique', tag:'Voyagez dans le temps et découvrez l’art culinaire de la Rome antique.',
       d:'Notre chef spécialisé vous dévoile les saveurs, les ingrédients et les techniques de la cuisine romaine : poissons salés, cailles farcies, pains et sauces d’autrefois. Une expérience immersive où l’histoire prend vie dans chaque plat, suivie d’une dégustation.',
       h:['Un chef spécialisé de la cuisine antique','Les ingrédients et les gestes de l’époque','Dégustation'], note:'Tarif par groupe, dégustation incluse.'},
   en:{t:'Roman cooking show', s:'Ancient cuisine', tag:'Travel back in time and discover the culinary art of ancient Rome.',
       d:'Our specialist chef reveals the flavours, ingredients and techniques of Roman cooking: salted fish, stuffed quail, breads and sauces of the past. An immersive experience where history comes alive in every dish, followed by a tasting.',
       h:['A chef specialising in ancient cuisine','Period ingredients and techniques','Tasting'], note:'Price per group, tasting included.'} },
 { id:'cafe', n:'V', icon:'ic-culture', img:'cafe-ext.webp', gallery:['cafe-int.webp','cafe-salle.webp','cafe-tasse.webp','cafe-tasse-b.webp'], priceLabel:{fr:'À la carte',en:'À la carte'}, dur:{fr:'Pause',en:'Break'},
   fr:{t:'Café romain', s:'Pause & terrasse', tag:'La pause des voyageurs du temps.',
       d:'Terminez votre parcours en savourant des boissons inspirées de la Rome antique, dans un cadre propice à la détente, à l’intérieur ou en terrasse.',
       h:['Des boissons inspirées de l’Antiquité','Une salle colorée et une terrasse','La fin idéale du parcours'], who:'Tous publics', note:'Consommation à la carte.'},
   en:{t:'Roman café', s:'Break & terrace', tag:'Where time travellers take a break.',
       d:'End your visit with drinks inspired by ancient Rome, in a relaxing setting, inside or on the terrace.',
       h:['Drinks inspired by antiquity','A colourful room and a terrace','The perfect end to your visit'], who:'Everyone', note:'Pay as you order.'} }
];

/* Avis Google réels : texte original dans la langue d'origine, traduction sur l'autre version */
const QUOTES = [
 { n:'Matth Elbi', meta:'Local Guide · Google', exp:'atelier', orig:'fr',
   fr:'L’atelier mosaïque était vraiment super. On s’amuse et on découvre la technique. Leur petit musée (visite comprise dans le prix) a par ailleurs de très belles pièces (créations et reproductions).',
   en:'The mosaic workshop was really great. You have fun and discover the technique. Their little museum (visit included in the price) also has some very beautiful pieces (creations and reproductions).' },
 { n:'Brighton, England', meta:'Local Guide · Google', exp:'musee', orig:'en',
   en:'Stopped off here for coffee on a group trip to the Colosseum. There are mosaic copies of famous artworks like the Mona Lisa, Bonaparte, Rembrant and Picasso. Well worth a visit. You can watch the staff making the mosaics right in front of you.',
   fr:'Arrêt café lors d’une excursion en groupe au Colisée. On y trouve des copies en mosaïque d’œuvres célèbres comme la Joconde, Bonaparte, Rembrandt et Picasso. La visite vaut vraiment le détour. On peut voir l’équipe réaliser les mosaïques juste devant soi.' },
 { n:'Clement.F', meta:'Local Guide · Google', orig:'fr',
   fr:'Un incontournable à El Jem ! Entre les activités immersives qui vous permettent de manger comme un romain, de vous déguiser tel quel, ou bien d’apprendre à créer des mosaïques comme eux, cet endroit incarne ce que la ville d’El Jem offre de mieux pour vivre une expérience romaine !',
   en:'A must in El Jem! Between the immersive activities that let you eat like a Roman, dress up like one, or learn to create mosaics like them, this place embodies the very best El Jem has to offer for a Roman experience!' }
];

const BONUS = { img:'tablinum.webp' };

const FAQ = {
fr:[['Faut-il réserver ?','C’est conseillé, en particulier pour le restaurant (groupes de plus de 15 personnes) et pour le cooking show. Envoyez votre demande via le formulaire, nous vous confirmons la date.'],
    ['Peut-on payer en ligne ?','Non. La réservation est une simple demande, sans paiement. Les modalités de règlement vous sont précisées lors de la confirmation.'],
    ['Combien de temps prévoir ?','L’initiation à la mosaïque dure 30 à 45 minutes, le cooking show 20 à 30 minutes. Avec un repas, comptez une demi-journée pour profiter du lieu sans vous presser.'],
    ['Vous recevez des groupes ?','Oui. Agences, tour-opérateurs, écoles : rendez-vous dans l’espace Agences pour une demande adaptée.']],
en:[['Do I need to book?','It is recommended, especially for the restaurant (groups of more than 15 people) and the cooking show. Send your request through the form and we will confirm the date.'],
    ['Can I pay online?','No. A booking is a simple request with no payment. Payment details are given when we confirm.'],
    ['How much time should I plan?','The mosaic introduction lasts 30 to 45 minutes and the cooking show 20 to 30 minutes. With a meal, allow half a day to enjoy the place at your own pace.'],
    ['Do you welcome groups?','Yes. Agencies, tour operators, schools: head to the Travel trade section for a tailored enquiry.']]
};

const PRO = {
fr:[['Clé en main','Un parcours complet en un seul lieu : musée, atelier, repas, photos.'],['Groupes à table','Menus tunisiens ou banquet romain, pour petits et grands groupes.'],['À côté du monument','Une étape facile à combiner avec la visite de l’amphithéâtre.'],['Sur mesure','Programme, horaires et conditions professionnelles définis ensemble.']],
en:[['All in one place','A complete visit on a single site: museum, workshop, meal, photos.'],['Group dining','Tunisian menus or a Roman banquet, for small and large groups.'],['Next to the monument','An easy stop to combine with the amphitheatre visit.'],['Tailor-made','Programme, timing and trade conditions agreed together.']]
};

/* ------------------------------------------------------------------ */
/*  3. Chroniques (gérées par le CMS en production)                    */
/* ------------------------------------------------------------------ */
const CATS = { cuisine:{fr:'Cuisine antique',en:'Ancient cooking'}, mosaique:{fr:'Mosaïque',en:'Mosaic'}, histoire:{fr:'Histoire de Thysdrus',en:'Thysdrus history'}, vie:{fr:'Vie du lieu',en:'Life at Dar El Jem'} };
/* Articles : chargés depuis assets/data/chroniques.json, généré à partir du back-office (Pages CMS) */
let POSTS = [];

/* ------------------------------------------------------------------ */
/*  4. Positions des repères sur le plan (en % de l'image)             */
/* ------------------------------------------------------------------ */
const MAP = {"toAmphi":[20.27,56.2],"amphi":[21.74,39.0],"entrance":[20.04,81.54],"parking":[53.44,32.68],
  "pin_I":[65.11,62.11],"pin_II":[51.21,66.52],"pin_III":[68.54,68.3],"pin_IV":[54.64,72.7],"bonus":[59.6,60.1],"pin_V":[73.99,57.6],"pin_A":[36.39,69.89],"pin_B":[28.32,83.81]};

/* ------------------------------------------------------------------ */
/*  5. Outils                                                          */
/* ------------------------------------------------------------------ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
let lang = 'fr';
try { const s = localStorage.getItem('dej-lang'); if (s && T[s]) lang = s; } catch (e) {}
if (!T[lang]) lang = 'fr';
const t = k => (T[lang][k] ?? T.fr[k] ?? k);
const L = o => o[lang] || o.fr;
const esc = s => { s = String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); return lang === 'fr' ? s.replace(/ ([:;!?»])/g, '\u202f$1') : s; };
const priceTxt = x => x.priceLabel ? L(x.priceLabel) : x.price === 0 ? t('free') : `${x.from ? t('from') + ' ' : ''}${x.price} ${t('cur')}`;
const pinSVG = (n, col) => `<svg viewBox="-15 -46 30 47" aria-hidden="true"><path d="M0 0 C-4 -10 -15 -18 -15 -30 A15 15 0 1 1 15 -30 C15 -18 4 -10 0 0Z" fill="${col}" stroke="#4e2832" stroke-width="1.2"/><circle cx="0" cy="-30" r="10.5" fill="#fff3e9"/><text x="0" y="-26" text-anchor="middle" font-family="Trajan Pro, Cinzel, serif" font-weight="700" font-size="${n.length > 2 ? 9 : 11}" fill="${col}">${n}</text></svg>`;
const fmtDate = d => new Date(d + 'T12:00:00').toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR', { day:'numeric', month:'long', year:'numeric' });

/* ------------------------------------------------------------------ */
/*  6. Rendu                                                           */
/* ------------------------------------------------------------------ */
function applyStatic() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-t]').forEach(el => { el.textContent = t(el.dataset.t); });
  $$('[data-th]').forEach(el => { el.innerHTML = t(el.dataset.th); });
  $$('[data-tp]').forEach(el => { el.placeholder = t(el.dataset.tp); });
  $$('[data-ta-alt]').forEach(el => { el.alt = t(el.dataset.taAlt); });
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
}

function renderMap() {
  const map = $('#map');
  $$('.pin, .mlabel', map).forEach(e => e.remove());
  const lbl = (key, cls, txt) => { const [x, y] = MAP[key]; const d = document.createElement('span'); d.className = 'mlabel ' + cls; d.style.left = x + '%'; d.style.top = y + '%'; d.textContent = txt; map.appendChild(d); };
  lbl('amphi', 'ribbon', t('map.amphi'));
  lbl('toAmphi', 'muted', t('map.toAmphi'));
  lbl('entrance', 'end', t('map.entrance'));
  lbl('parking', 'muted', t('map.parking'));
  EXP.forEach(x => {
    const [px, py] = MAP['pin_' + x.n];
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'pin'; b.dataset.id = x.id;
    b.style.left = px + '%'; b.style.top = py + '%';
    b.setAttribute('aria-label', `${x.n} · ${L(x).t}`);
    b.innerHTML = pinSVG(x.n, '#bc351b') + `<span class="tip">${esc(L(x).t)}</span>`;
    b.addEventListener('click', () => openSheet(x.id, b));
    b.addEventListener('mouseenter', () => hl(x.id, true)); b.addEventListener('mouseleave', () => hl(x.id, false));
    map.appendChild(b);
  });
  { const [bx, by] = MAP.bonus; const b = document.createElement('span'); b.className = 'pin gift'; b.style.left = bx + '%'; b.style.top = by + '%'; b.tabIndex = 0; b.setAttribute('role', 'img'); b.setAttribute('aria-label', t('map.bonus')); b.innerHTML = `<b aria-hidden="true">+</b><span class="tip">${esc(t('map.bonus'))}</span>`; map.appendChild(b); }
  [['A', 'map.a'], ['B', 'map.b']].forEach(([n, k]) => {
    const [px, py] = MAP['pin_' + n];
    const b = document.createElement('span');
    b.className = 'pin sec'; b.style.left = px + '%'; b.style.top = py + '%';
    b.setAttribute('role', 'img'); b.setAttribute('aria-label', `${n} · ${t(k)}`); b.tabIndex = 0;
    b.innerHTML = pinSVG(n, '#4e2832') + `<span class="tip">${esc(t(k))}</span>`;
    map.appendChild(b);
  });
  $('#mapList').innerHTML = EXP.map(x => `<button class="mrow" type="button" data-id="${x.id}"><span class="num">${x.n}</span><span><b>${esc(L(x).t)}</b><small>${esc(L(x).s)} · ${esc(priceTxt(x))}</small></span><span class="go">→</span></button>`).join('');
  $$('#mapList .mrow').forEach(r => {
    r.addEventListener('click', () => openSheet(r.dataset.id, r));
    r.addEventListener('mouseenter', () => hl(r.dataset.id, true)); r.addEventListener('mouseleave', () => hl(r.dataset.id, false));
    r.addEventListener('focus', () => hl(r.dataset.id, true)); r.addEventListener('blur', () => hl(r.dataset.id, false));
  });
}
function hl(id, on) { $$(`[data-id="${id}"]`).forEach(e => e.classList.toggle('hl', on)); }

function renderCards() {
  $('#xgrid').innerHTML = EXP.map(x => `
    <button class="xcard" type="button" data-id="${x.id}">
      <span class="ph"><img src="${IMG + x.img}" alt="" loading="lazy"><img class="ic" src="assets/icons/${x.icon}.png" alt=""><span class="over"><span class="num">${x.n}</span><h3>${esc(L(x).t)}</h3></span></span>
      <span class="meta"><span>${esc(L(x.dur))}</span><b>${esc(priceTxt(x))}${x.perPerson ? ' <small style="font-weight:400;color:var(--ink-soft)">' + t('pp') + '</small>' : ''}</b></span>
      <p>${esc(L(x).tag)}</p>
      <span class="more">${t('exp.more')} →</span>
    </button>`).join('');
  $$('#xgrid .xcard').forEach(c => c.addEventListener('click', () => openSheet(c.dataset.id, c)));

  $('#quotes').innerHTML = QUOTES.map(q => { const x = q.exp && EXP.find(e => e.id === q.exp); return `
    <figure class="quote"><span class="stars" aria-label="5/5">★★★★★</span><blockquote>${esc(q[lang])}</blockquote>${q.orig !== lang ? `<span class="trad">${t(q.orig === 'fr' ? 'tm.fromfr' : 'tm.fromen')}</span>` : ''}
      <figcaption><i>${q.n[0]}</i><span><b>${esc(q.n)}</b>${esc(q.meta)}${x ? ` · <span class="exp">${esc(L(x).t)}</span>` : ''}</span></figcaption></figure>`; }).join('');
  $('#bonus').innerHTML = `<img src="${IMG + BONUS.img}" alt=""><div><div class="tag">${t('bonus.tag')}</div><p><b>${esc(t('bonus.t'))}</b> · ${esc(t('bonus.x'))}</p></div>`;
  const chips = sel => EXP.map(x => `<label class="chip"><input type="checkbox" name="exp" value="${x.id}"><span><b>${x.n}</b>${esc(L(x).t)}</span></label>`).join('');
  const keep = id => $$(`#${id} input:checked`).map(i => i.value);
  const k1 = keep('bookChips'), k2 = keep('proChips');
  $('#bookChips').innerHTML = chips(); $('#proChips').innerHTML = chips();
  k1.forEach(v => { const i = $(`#bookChips input[value="${v}"]`); if (i) i.checked = true; });
  k2.forEach(v => { const i = $(`#proChips input[value="${v}"]`); if (i) i.checked = true; });

  $('#faq').innerHTML = FAQ[lang].map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');
  $('#proGrid').innerHTML = PRO[lang].map(([h, p], i) => `<div><span class="num">${['I','II','III','IV'][i]}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('');
}

let catFilter = 'all';
function postCard(p) {
  return `<a class="post" href="#${p.id}" data-post="${p.id}"><span class="ph"><img src="${esc(p.img)}" alt="" loading="lazy"></span>
    <span class="cat">${esc(L(CATS[p.cat]))}</span><h3>${esc(L(p).t)}</h3><p>${esc(L(p).x)}</p>
    <span class="rd">${fmtDate(p.date)} · ${p.min} ${t('art.min')}</span></a>`;
}
function renderBlog() {
  $('#blogTeaser').innerHTML = [...POSTS].sort((x, y) => y.date.localeCompare(x.date)).map(postCard).join('');
  $('#cats').innerHTML = [['all', t('blp.all')], ...Object.entries(CATS).map(([k, v]) => [k, L(v)])]
    .map(([k, v]) => `<button type="button" data-cat="${k}" aria-pressed="${k === catFilter}">${esc(v)}</button>`).join('');
  $$('#cats button').forEach(b => b.addEventListener('click', () => { catFilter = b.dataset.cat; renderBlog(); }));
  $('#blogAll').innerHTML = [...POSTS].sort((x, y) => y.date.localeCompare(x.date)).filter(p => catFilter === 'all' || p.cat === catFilter).map(postCard).join('');
  bindPosts();
}
function bindPosts() {
  $$('[data-post]').forEach(a => a.onclick = e => { e.preventDefault(); go('article', a.dataset.post); });
}
function renderArticle(id) {
  const p = POSTS.find(x => x.id === id) || POSTS[0];
  if (!p) return;
  const body = L(p).body;
  const ctaExp = p.cta && EXP.find(e => e.id === p.cta);
  $('#article').innerHTML = `
    <a class="back" href="#chroniques" data-route="chroniques"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M19 12H5M11 6l-6 6 6 6"/></svg><span>${t('art.back')}</span></a>
    <div class="kicker" style="margin-top:2rem;color:var(--olive-text)">${esc(L(CATS[p.cat]))}</div>
    <h1 class="display h2" style="font-size:clamp(2rem,1.2rem + 2.6vw,3.4rem)">${esc(L(p).t)}</h1>
    <div class="byline" style="margin-top:1rem"><img src="${IMG}branch.svg" alt="" width="34"><span>Ridus · ${fmtDate(p.date)} · ${p.min} ${t('art.min')}</span></div>
    <div class="cover"><img src="${esc(p.img)}" alt=""></div>
    <div class="body">${body}</div>
    ${p.fig && p.fig.length ? `<figure class="figure">${p.fig.map(f => `<img src="${esc(f)}" alt="" loading="lazy">`).join('')}<figcaption>Dar El Jem</figcaption></figure>` : ''}
    ${ctaExp ? `<div style="margin:2rem 0"><a class="btn btn-primary" href="#reserver" data-route="home">${esc(t('s.book'))} · ${esc(L(ctaExp).t)}</a></div>` : ''}`;
  $('#related').innerHTML = POSTS.filter(x => x.id !== p.id).slice(0, 3).map(postCard).join('');
  bindPosts(); bindRoutes($('#article'));
}

/* ------------------------------------------------------------------ */
/*  7. Fiche expérience (panneau latéral)                              */
/* ------------------------------------------------------------------ */
let current = null, lastFocus = null;
function openSheet(id, from) {
  const x = EXP.find(e => e.id === id); if (!x) return;
  current = id; lastFocus = from || document.activeElement;
  const l = L(x), i = EXP.indexOf(x);
  const menus = x.menus ? `<div><h4>${t('s.menus')}</h4><div class="menus">${x.menus.map(m => `<div><span>${esc(L(m)[0])}<small>${esc(L(m)[1])}</small></span>${m.p ? `<b>${m.p} ${t('cur')}</b>` : ''}</div>`).join('')}</div></div>` : '';
  const extra = x.extra ? `<div class="extra"><h4>${esc(L(x.extra).t)}</h4><p>${esc(L(x.extra).d)}</p></div>` : '';
  const keys = x.tiers
    ? `<div><h4>${t('s.formats')}</h4><div class="tiers" role="table"><div class="tr th" role="row"><span role="columnheader">${t('s.duration')}</span><span role="columnheader">${t('s.price')}</span><span role="columnheader">${t('s.for')}</span></div>${x.tiers.map(r => `<div class="tr" role="row"><span role="cell">${esc(L(r.dur))}</span><b role="cell">${esc(L(r.price))}</b><span role="cell">${esc(L(r.who))}</span></div>`).join('')}</div></div>`
    : `<dl class="keys${l.who ? '' : ' two'}"><div><dt>${t('s.duration')}</dt><dd>${esc(L(x.dur))}</dd></div><div><dt>${t('s.price')}</dt><dd class="price">${esc(priceTxt(x))}</dd></div>${l.who ? `<div><dt>${t('s.for')}</dt><dd>${esc(l.who)}</dd></div>` : ''}</dl>`;
  $('#panel').innerHTML = `
    <div class="hero-img"><img src="${IMG + x.img}" alt="">
      <button class="x" type="button" id="sheetX" aria-label="${t('s.close')}">×</button>
      <div class="ttl"><img src="assets/icons/${x.icon}.png" alt=""><div><span class="num">${x.n} · ${esc(l.s)}</span><h2 id="sheetTitle">${esc(l.t)}</h2></div></div></div>
    <div class="inner">
      <p class="tagline">${esc(l.tag)}</p>
      <p class="desc">${esc(l.d)}</p>
      ${keys}
      <div><h4>${t('s.expect')}</h4><ul class="hl">${l.h.map(h => `<li>${esc(h)}</li>`).join('')}</ul></div>
      ${menus}
      ${extra}
      <div><h4>${t('s.gallery')}</h4><div class="gallery">${x.gallery.map(g => `<img src="${IMG + g}" alt="" loading="lazy">`).join('')}</div></div>
      <p class="note">${esc(l.note)}</p>
    </div>
    <div class="cta"><button class="btn btn-primary" type="button" id="sheetBook">${t('s.book')}</button>
      <div class="nav2"><button type="button" id="sPrev" aria-label="${t('s.prev')}">←</button><button type="button" id="sNext" aria-label="${t('s.next')}">→</button></div></div>`;
  const sheet = $('#sheet'); sheet.classList.add('open'); sheet.inert = false;
  document.body.style.overflow = 'hidden';
  $('#panel').scrollTop = 0; $('#panel').focus({ preventScroll: true });
  $('#sheetX').onclick = closeSheet;
  $('#sPrev').onclick = () => openSheet(EXP[(i + EXP.length - 1) % EXP.length].id, lastFocus);
  $('#sNext').onclick = () => openSheet(EXP[(i + 1) % EXP.length].id, lastFocus);
  $('#sheetBook').onclick = () => { closeSheet(); go('home', 'reserver'); const c = $(`#bookChips input[value="${id}"]`); if (c) c.checked = true; };
}
function closeSheet() {
  const sheet = $('#sheet'); sheet.classList.remove('open'); sheet.inert = true;
  document.body.style.overflow = ''; current = null;
  if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
}
$('#scrim').addEventListener('click', closeSheet);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if (current) closeSheet(); else if ($('#drawer').classList.contains('open')) toggleDrawer(false); }
  if (e.key === 'Tab' && current) { // garde le focus dans la fiche
    const f = $$('#panel button, #panel a'); if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
});

/* ------------------------------------------------------------------ */
/*  8. Navigation (vues : home / chroniques / article / agences)       */
/* ------------------------------------------------------------------ */
function go(view, anchor) {
  $$('[data-view]').forEach(v => v.classList.toggle('active', v.dataset.view === view));
  $$('.menu a').forEach(a => a.toggleAttribute('aria-current', false));
  if (view === 'chroniques') $('.menu a[data-route=chroniques]').setAttribute('aria-current', 'page');
  if (view === 'agences') $('.menu a[data-route=agences]').setAttribute('aria-current', 'page');
  if (view === 'article') renderArticle(anchor);
  toggleDrawer(false);
  onScroll();
  if (view === 'home' && anchor) { const el = document.getElementById(anchor); if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; } }
  window.scrollTo({ top: 0 });
}
function bindRoutes(root = document) {
  $$('a[data-route]', root).forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const target = a.getAttribute('href').slice(1);
    const route = a.dataset.route;
    go(route, route === 'home' ? (target === 'top' ? null : target) : null);
  }));
}

/* ------------------------------------------------------------------ */
/*  9. Hero : traversée de l'arche au défilement                       */
/* ------------------------------------------------------------------ */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
function onScroll() {
  const nav = $('#nav'), hero = $('#hero');
  const home = $('[data-view=home]').classList.contains('active');
  if (!home) { nav.classList.add('solid'); return; }
  const r = hero.getBoundingClientRect();
  const span = hero.offsetHeight - innerHeight;
  const p = Math.min(1, Math.max(0, -r.top / Math.max(1, span)));
  nav.classList.toggle('solid', p > .92 || r.bottom < 80);
  if (reduce) return;
  const e = p * p;
  /* zoom calculé dans le dessin lui-même (pas de transform CSS) : rendu net, sans trous au défilement rapide */
  const s = 1 + e * 14;
  $('#wallG').setAttribute('transform', `translate(0 150) scale(${s.toFixed(4)}) translate(0 -150)`);
  $('#wall').style.opacity = String(p > .82 ? Math.max(0, 1 - (p - .82) / .12) : 1);
  $('#heroCopy').style.opacity = String(Math.max(0, 1 - p * 3));
  $('#heroCopy').style.transform = `translateY(${-p * 60}px)`;
  $('#cue').style.opacity = String(Math.max(0, 1 - p * 5));
  $('#revealCap').style.opacity = String(Math.max(0, Math.min(1, (p - .7) / .2)));
}
addEventListener('scroll', () => requestAnimationFrame(onScroll), { passive: true });
function archSize() {
  const sc = Math.max(innerWidth / 1600, innerHeight / 1000);
  document.getElementById('heroCopy').style.setProperty('--arch-w', Math.round(400 * sc) + 'px');
}
addEventListener('resize', () => { archSize();
{ const v = document.getElementById('capsule'); const mq = matchMedia('(max-width:860px),(orientation:portrait)');
  const useVid = () => { if (mq.matches && !v.getAttribute('src')) { v.src = 'assets/img/capsule.mp4'; v.play().catch(() => {}); } else if (mq.matches) v.play().catch(() => {}); else v.pause(); };
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) { const go = () => { useVid(); mq.addEventListener('change', useVid); }; if (document.readyState === 'complete') go(); else addEventListener('load', go, { once: true }); } } onScroll(); });
archSize();
{ const v = document.getElementById('capsule'); const mq = matchMedia('(max-width:860px),(orientation:portrait)');
  const useVid = () => { if (mq.matches && !v.getAttribute('src')) { v.src = 'assets/img/capsule.mp4'; v.play().catch(() => {}); } else if (mq.matches) v.play().catch(() => {}); else v.pause(); };
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) { const go = () => { useVid(); mq.addEventListener('change', useVid); }; if (document.readyState === 'complete') go(); else addEventListener('load', go, { once: true }); } }

/* ------------------------------------------------------------------ */
/*  10. Formulaires → message WhatsApp                                  */
/* ------------------------------------------------------------------ */
$$('.stepper button').forEach(b => b.addEventListener('click', () => {
  const i = document.getElementById(b.dataset.for); const v = (parseInt(i.value, 10) || 0) + parseInt(b.dataset.step, 10);
  i.value = Math.max(parseInt(i.min, 10) || 0, v);
}));
try { const d = new Date(); d.setDate(d.getDate() + 1); $('#b-date').min = d.toISOString().slice(0, 10); } catch (e) {}
/* Formulaires → message WhatsApp pré-rempli (rédigé en français pour l'équipe) */
const WA_NUM = '21698277634';
const val = id => { const el = $(id); return el ? el.value.trim() : ''; };
const optText = id => { const el = $(id); return el ? el.options[el.selectedIndex].text : ''; };
const checkedExp = sel => $$(sel + ' input:checked').map(i => { const x = EXP.find(e => e.id === i.value); return `${x.n} · ${x.fr.t}`; });
const line = (k, v) => v ? `*${k}* : ${v}\n` : '';
function bookMessage() {
  const d = val('#b-date'); const date = d ? new Date(d + 'T12:00:00').toLocaleDateString('fr-FR', { weekday:'long', day:'numeric', month:'long', year:'numeric' }) : '';
  const kids = +val('#b-kids');
  return `🏛️ *Demande de réservation · Dar El Jem*\n\n`
    + line('Expériences', checkedExp('#bookChips').join(', '))
    + line('Date', date) + line('Moment', optText('#b-slot'))
    + line('Personnes', `${val('#b-adults')} adulte(s)` + (kids ? `, ${kids} enfant(s)` : ''))
    + line('Nom', val('#b-name')) + line('E-mail', val('#b-email')) + line('Téléphone', val('#b-phone'))
    + line('Langue de visite', optText('#b-lang')) + (val('#b-msg') ? `\n*Message* :\n${val('#b-msg')}\n` : '');
}
function proMessage() {
  return `🤝 *Demande professionnelle · Dar El Jem*\n\n`
    + line('Structure', val('#p-org')) + line('Type', optText('#p-type')) + line('Contact', val('#p-name'))
    + line('Pays', val('#p-country')) + line('E-mail', val('#p-email')) + line('Téléphone', val('#p-phone'))
    + line('Taille du groupe', optText('#p-size')) + line('Période', val('#p-when'))
    + line('Expériences', checkedExp('#proChips').join(', '))
    + ($('#p-broch').checked ? '*Souhaite recevoir la brochure 2027*\n' : '')
    + (val('#p-msg') ? `\n*Projet* :\n${val('#p-msg')}\n` : '');
}
function handle(formId, wrapId, errId, required, needExp, build) {
  $(formId).addEventListener('submit', e => {
    e.preventDefault();
    const miss = [];
    required.forEach(([id, key]) => { const el = $(id); const ok = el.type === 'checkbox' ? el.checked : el.value.trim() && el.checkValidity(); if (!ok) miss.push(t(key)); el.setAttribute('aria-invalid', String(!ok)); });
    if (needExp && !$$(needExp + ' input:checked').length) miss.unshift(t('f.errexp'));
    $(errId).textContent = miss.length ? t('f.err').replace('{f}', miss.join(', ')) : '';
    if (miss.length) return;
    const url = `https://wa.me/${WA_NUM}?text=${encodeURIComponent(build())}`;
    $(wrapId + ' .wa-open').href = url;
    $(wrapId).classList.add('done');
    try { window.open(url, '_blank', 'noopener'); } catch (err) {}
  });
}
handle('#fBook', '#bookForm', '#bErr', [['#b-date','f.date'],['#b-name','f.name'],['#b-ok','f.consent.short']], '#bookChips', bookMessage);
handle('#fPro', '#proForm', '#pErr', [['#p-org','pf.org'],['#p-name','pf.name'],['#p-ok','f.consent.short']], null, proMessage);
$('#bAgain').addEventListener('click', () => { $('#bookForm').classList.remove('done'); $('#fBook').reset(); });

/* ------------------------------------------------------------------ */
/*  11. Langue, menu mobile, démarrage                                 */
/* ------------------------------------------------------------------ */
function setLang(l) {
  lang = l; try { localStorage.setItem('dej-lang', l); } catch (e) {}
  /* Chroniques : défilement horizontal automatique */
{ const rail = $('#blogTeaser'); let paused = false, timer;
  const step = dir => { const card = rail.querySelector('.post'); if (!card) return;
    const w = card.getBoundingClientRect().width + parseFloat(getComputedStyle(rail).columnGap || 0);
    const rtl = document.documentElement.dir === 'rtl' ? -1 : 1;
    const end = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
    if (dir > 0 && end) rail.scrollTo({ left: 0 }); else rail.scrollBy({ left: dir * w * rtl }); };
  $('#railPrev').addEventListener('click', () => step(-1));
  $('#railNext').addEventListener('click', () => step(1));
  ['mouseenter','focusin','touchstart'].forEach(e => rail.addEventListener(e, () => paused = true, { passive: true }));
  ['mouseleave','focusout'].forEach(e => rail.addEventListener(e, () => paused = false));
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => { if (!paused && !document.hidden) step(1); }, 4500);
}
applyStatic(); renderMap(); renderCards(); renderBlog();
  if ($('[data-view=article]').classList.contains('active')) renderArticle($('#article .cover img') ? POSTS.find(p => $('#article .cover img').src.endsWith(p.img))?.id : null);
  if (current) openSheet(current, lastFocus);
}
$$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
function toggleDrawer(open) {
  const d = $('#drawer'); d.classList.toggle('open', open); d.inert = !open;
  $('#burger').setAttribute('aria-expanded', String(open));
  if (open) $('#drawerClose').focus();
}
$('#burger').addEventListener('click', () => toggleDrawer(true));
$('#drawerClose').addEventListener('click', () => toggleDrawer(false));

/* Chroniques : défilement horizontal automatique */
{ const rail = $('#blogTeaser'); let paused = false, timer;
  const step = dir => { const card = rail.querySelector('.post'); if (!card) return;
    const w = card.getBoundingClientRect().width + parseFloat(getComputedStyle(rail).columnGap || 0);
    const rtl = document.documentElement.dir === 'rtl' ? -1 : 1;
    const end = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
    if (dir > 0 && end) rail.scrollTo({ left: 0 }); else rail.scrollBy({ left: dir * w * rtl }); };
  $('#railPrev').addEventListener('click', () => step(-1));
  $('#railNext').addEventListener('click', () => step(1));
  ['mouseenter','focusin','touchstart'].forEach(e => rail.addEventListener(e, () => paused = true, { passive: true }));
  ['mouseleave','focusout'].forEach(e => rail.addEventListener(e, () => paused = false));
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => { if (!paused && !document.hidden) step(1); }, 4500);
}
applyStatic(); renderMap(); renderCards(); renderBlog(); bindRoutes();
const h = (location.hash || '').slice(1);
if (h === 'chroniques' || h === 'agences') go(h); else onScroll();
fetch('assets/data/chroniques.json', { cache: 'no-cache' })
  .then(r => r.ok ? r.json() : [])
  .then(list => { POSTS = Array.isArray(list) ? list : []; renderBlog(); if (POSTS.some(p => p.id === h)) go('article', h); })
  .catch(() => { POSTS = []; renderBlog(); });
})();
