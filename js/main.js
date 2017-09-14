var en = {
  "education": "<p>Education<br/> -<br/> Diploma of Graphic Design<br/> RMIT University (School of Design)<br/> Victoria, Australia<br/> Completed November 2011<p/> Victorian Certificate of Education<br/> Ringwood Secondary College<br/> Victoria, Australia<br/> Completed November 2008<p/><br/>Awards &\n  Affiliations <br/> -<br/>Children's Apparel Winner<br/>\nAustralasian Catalogue Awards<br/>\nMelbourne, Victoria<br/>\nReceived August 2017 <p/>Marketing & Design Award<br/> Target Australia<br/> North Geelong, Australia<br/> Received September 2015<p/> Excellence in Illustration<br/> RMIT University (School of Design)<br/> Victoria, Australia<br/> Received November 2011<p/> Australian\n  Graphic Design<br/> Association (AGDA)<br/> Graduate Member<br/> (December 2013 - Current Date)</p>",
  "experience": "<p>Experience<br/> -<br/> Designer<br/> Target<br/><a href=\"www.target.com.au\"> www.target.com.au</a><br/> (March 2015 - March 2017)<p/> Freelance Designer<br/> Studio Craig<br/> <a href=\"www.lauchlancraig.com\">www.lauchlancraig.com</a><br/> (October 2014 - Current Date)<p/> Designer<br/> Icon Partners<br/> <a href=\"www.iconpartners.com.au\">www.iconpartners.com.au</a> <br/>(March 2012 - September 2014)<p/>          Junior Designer (Intern)<br/> walterwakefield<br/>\n  <a href=\"www.walterwakefield.com.au\">www.walterwakefield.com.au</a><br/> (November 2011)<p/> Junior Designer (Intern)<br/> Cowan Design<br/><a href=\"www.cowandesign.com.au\"> www.cowandesign.com</a><br/> (July 2011)<p/> Designer<br/> Glenbrae Signs<br/><a href=\"www.glenbraedesigns.com.au\"> www.glenbraesigns.com.au</a><br/> (November 2010 - January 2011)</p>",
  "profile": "<p>Profile<br/> -<br/> I am Lauchlan Craig, and I am a Graphic Designer and Thinker from Melbourne, Australia currently living in Germany. In my career so far, I have developed work in the areas of Brand Identity, Communication Design, Packaging and Online Development.<p/>\n  Since completing my studies at RMIT University I have undertaken internships at renowned studios in Melbourne and Sydney, as well as working as a Designer for Target in Geelong for a number of years.<p/> Creating work on behalf of clients from a\n  multitude of sectors has given me the opportunity to produce modern and versatile projects both locally and overseas. I am currently looking for new work and am always eager to engage with new people.<p/> If you would like to know a little more\n  about me, you can contact me via the following email address: <a href=\"mailto:info@lauchlancraig.com\">info[at]lauchlancraig.com</a> <p/> Thank you and welcome to my home.</p>"
};

var de = {
  "education": "<p>Ausbildung<br/> -<br/> Diploma of Graphic Design<br/> RMIT University (School of Design)<br/> Victoria, Australia<br/> Abgeschlossen November 2011<p/> Victorian Certificate of Education<br/> Ringwood Secondary College<br/> Victoria, Australia<br/> Abgeschlossen November 2008<p/><br/>Auszeichnungen & Mitgliedschaften <br/> -<br/>Children's Apparel Winner<br/>\nAustralasian Catalogue Awards<br/>Melbourne, Victoria<br/>Ausgezeichnet August 2017 <p/>Marketing & Design Award<br/> Target Australia<br/> North Geelong, Australia<br/> Ausgezeichnet September 2015<p/> Excellence in Illustration<br/> RMIT University (School of Design)<br/> Victoria, Australia<br/> Ausgezeichnet November 2011<p/> Australian\n  Graphic Design<br/> Association (AGDA)<br/> Graduate Member<br/> (Dezember 2013 - Heute)</p>",
  "experience": "<p>Erfahrung<br/> -<br/> Designer<br/> Target<br/><a href=\"www.target.com.au\"> www.target.com.au</a><br/> (März 2015 - März 2017)<p/> Freischaffender Designer<br/> Studio Craig<br/> <a href=\"www.lauchlancraig.com\">www.lauchlancraig.com</a><br/> (Oktober 2014 - Heute)<p/> Designer<br/> Icon Partners<br/> <a href=\"www.iconpartners.com.au\">www.iconpartners.com.au</a> <br/>(März 2012 - September 2014)<p/> Junior Designer (Praktikum)<br/> walterwakefield<br/>  <a href=\"www.walterwakefield.com.au\">www.walterwakefield.com.au</a><br/> (November 2011)<p/> Junior Designer (Praktikum)<br/> Cowan Design<br/><a href=\"www.cowandesign.com.au\"> www.cowandesign.com</a><br/> (July 2011)<p/> Designer<br/> Glenbrae Signs<br/><a href=\"www.glenbraedesigns.com.au\"> www.glenbraesigns.com.au</a><br/> (November 2010 - Januar 2011)</p>",
  "profile": "<p>Profil<br/>-<br/> Ich heiße Lauchlan Craig und bin ein Grafikdesigner und Denker aus Melbourne. Derzeit lebe ich in Deutschland. In meiner Karriere habe ich Berufserfahrung in den Bereichen Markenidentität, Kommunikationsdesign, Verpackungsdesign und Webentwicklung sammeln können. <p/> Nach dem Studium an der RMIT Universität habe ich Praktika in renommierten Studios in Melbourne und Sydney absolviert und einige Jahre als Grafikdesigner bei Target in Geelong gearbeitet.<p/> Die Arbeit im Auftrag von Kunden aus einer Vielzahl von Sektoren hat mir die Möglichkeit gegeben, moderne und vielseitige Projekte sowohl lokal als auch in Übersee zu realisieren. Ich bin derzeit auf der Suche nach einer neuen Herausforderung und bin immer gespannt darauf, neue Menschen zu treffen.<p/> Wenn Sie ein wenig mehr über mich erfahren möchten, würde ich mich über eine Kontaktaufnahe über folgende E-mail Adresse freuen: <a href=\"mailto:info@lauchlancraig.com\">info[at]lauchlancraig.com<\/a> <p/> Vielen Dank und Wilkommen in meiner Welt.</p>"
};


function changeLang(lang){
  var newLang = lang;
  var edu = document.getElementById('education');
  var exp = document.getElementById('experience');
  var profile = document.getElementById('profile');
  var currLang = document.getElementsByClassName('active')[0];
  var inactiveLang = document.getElementsByClassName('inactive')[0];
  var logo = document.getElementById("logo");

  function switchActive(){
    inactiveLang.className = "active";
    inactiveLang.removeAttribute("href");
    currLang.className = "inactive";
    currLang.setAttribute("href", "#");
  }

  if(lang == 'de'){
    edu.innerHTML = en['education'];
    exp.innerHTML = en['experience'];
    profile.innerHTML = en['profile'];

    profile.className = "text-container right primary";
    edu.className = "text-container left";
    exp.className ="text-container right";
    logo.src = "img/lc_EN.svg";
    logo.className = "eng";
    logo.setAttribute("width","222");
    logo.setAttribute("height", "38");
    switchActive();

  } else if (lang == 'en') {
    edu.innerHTML = de['education'];
    exp.innerHTML = de['experience'];
    profile.innerHTML = de['profile'];

    profile.className = "text-container right primary de";
    edu.className = "text-container left de";
    exp.className = "text-container right de";
    logo.src = "img/lc_DE.svg";
    logo.className = "ger";
    logo.setAttribute("width","298");
    logo.setAttribute("height", "38");
    switchActive();
  }
}

function determineLang() {
  var currLang = document.getElementsByClassName('active')[0];
  switch (currLang.getAttribute('id')) {
    case 'de':
    changeLang('de');
      break;
    case 'en':
    changeLang('en');
      break;
    default:
      break;
  }
}
