    // START PRELOADER
    //cheking cookes
    let delayPr;
    //localStorage.clear() - clear local storage if need
    delayPr = localStorage.getItem("delayPr");
    if (delayPr==8000){
        localStorage.setItem("delayPr", 0)
    }
    delayPr = localStorage.getItem("delayPr");
    if (delayPr==null){
        delayPr=8000;
        localStorage.setItem("delayPr", 8000)
    }
    let preload = document.getElementById('containerpr');
    setTimeout(() => containerpr.style.display = "none", delayPr);
    
    //Randomaze function for preloader
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
      }
      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
      update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }}
    //Phrases for preloader
    const phrases = [
    'L\'or',
    'Footer maker',
    'v.2.0',
    'Loading...',
    'Loading...',
    'Loading...',
    ];
    
    const el = document.querySelector('.text');
    const fx = new TextScramble(el);
    
    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800);
      });
      counter = (counter + 1) % phrases.length;
    };
    
    next();
    // END PRELOADER
    
    
    
    
      //DATA 
    const allData ={
    'dot': 
    {"UK" : ".",
    "IE" : ".",
    "DE" : ".",
    "FR" : "/",
    "ES" : "/",
    "IT" : "/",
    "NL" : "-",
    "BE_FR" : "/",
    "BE_NL" : "-",
    "AT" : ".",},
    'combined':
    {"UK" : "<br>This promotion can not be combined with any other promotions.",
    "IE" : "<br>This promotion can not be combined with any other promotions.",
    "DE" : "<br>Dieses Angebot kann nicht mit anderen Angeboten kombiniert werden.",
    "FR" : "<br>Cette offre n'est pas combinable avec d'autres promotions.",
    "ES" : "<br>No acumulable con otras promociones.",
    "IT" : "<br>Consulta I termini e condizioni della promozione qui.",
    "NL" : " ",
    "BE_FR" : "<br>Cette offre n'est pas combinable avec d'autres promotions.",
    "BE_NL" : "<br>Deze promo is niet cumuleerbaar met andere promoties.",
    "AT" : "<br>Dieses Angebot ist nicht mit anderen Angeboten kombinierbar.",},
    'excluding':
    {"UK" : "(excluding delivery costs).",
    "IE" : "(excluding delivery costs).",
    "DE" : "(exklusive Liefergebühr).",
    "FR" : "(hors frais d’envoi).",
    "ES" : "(gastos de envío no incluidos).",
    "IT" : "(escluse spese di spedizione).",
    "NL" : "(exclusief bezorgkosten).",
    "BE_FR" : "(hors frais d’envoi).",
    "BE_NL" : "(exclusief bezorgkosten).",
    "AT" : "(exklusive Liefergebühr).",},
    'including':
    {"UK" : "(including delivery costs).",
    "IE" : "(including delivery costs).",
    "DE" : "(inklusive Versandkosten).",
    "FR" : "(coûts de livraison compris).",
    "ES" : "(incluyendo costos de envío).",
    "IT" : "(incluse le spese di spedizione).",
    "NL" : "(inclusief verzendkosten).",
    "BE_FR" : "(coûts de livraison compris).",
    "BE_NL" : "(inclusief verzendkosten).",
    "AT" : "(inklusive Versandkosten).",},
    'capsules':
    {"UK" : "capsules",
    "IE" : "capsules",
    "DE" : "Kapseln",
    "FR" : "paquets de capsules (simples et doubles)",
    "ES" : "cápsulas",
    "IT" : "capsule",
    "NL" : "capsules",
    "BE_FR" : "paquets de capsules (simples et doubles)",
    "BE_NL" : "capsules",
    "AT" : "Kapseln",},
    'beans':
    {"UK" : " ",
    "IE" : " ",
    "DE" : " ",
    "FR" : "café en grain",
    "ES" : " ",
    "IT" : " ",
    "NL" : "bonen",
    "BE_FR" : " ",
    "BE_NL" : "bonen",
    "AT" : "Bohnen",},
    'bundles':
    {"UK" : "capsule bundles",
    "IE" : "capsule bundles",
    "DE" : "Kapsel-Bundles",
    "FR" : "coffrets",
    "ES" : "lotes",
    "IT" : "assortimenti di capsule",
    "NL" : "capsule bundels",
    "BE_FR" : "сoffrets",
    "BE_NL" : "capsule bundels",
    "AT" : "Kapsel-Pakete",},
    'accessories':
    {"UK" : "accessories (glasses, capsule collection, gift box etc)",
    "IE" : "accessories (glasses, capsule collection, gift box etc)",  
    "DE" : "Accessoires (Gläser, Kapsel Kollektionen, Kaspelboxen, etc.)",
    "FR" : "accessoires (verres, collection de capsules, boîte cadeau etc)",
    "ES" : "accesorios (tazas, colección de cápsulas, caja regalo, etc.)",
    "IT" : "accessori (tazzine, kit per caffè, confezioni regalo, ecc)",
    "NL" : "accessoires (glazen, capsulecollectie, geschenkdozen, etc.)",
    "BE_FR" : "accessoires (verres, collection de capsules, boîte cadeau etc)",
    "BE_NL" : "accessoires (glazen, capsulecollectie, geschenkdozen, etc.)",
    "AT" : "Accessoires (Gläser, Kapsel-Kollektionen, Geschenkboxen usw.)",},
    'rg':
    {"UK" : "R&G",
    "IE" : " ",
    "DE" : " ",
    "FR" : "café moulu",
    "ES" : " ",
    "IT" : " ",
    "NL" : " ",
    "BE_FR" : " ",
    "BE_NL" : " ",
    "AT" : " ",},
    'machines':
    {"UK" : " ",
    "IE" : " ",
    "DE" : " ",
    "FR" : "d'une machine à café L'OR BARISTA<sup><span>&#174;</span></sup> et le mousseur à lait",
    "ES" : "la cafetera L'OR BARISTA y el espumador de leche",
    "IT" : "macchina da caffè L'OR BARISTA",
    "NL" : " ",
    "BE_FR" : "d'une machine à café L'OR BARISTA et le mousseur à lait",
    "BE_NL" : "L'OR BARISTA koffiemachines en de melkopschuimer",
    "AT" : "die L'OR BARISTA Maschine und den Milchschäumer",},
    'and':
    {"UK" : " and ",
    "IE" : " and ",
    "DE" : " und ",
    "FR" : " et ",
    "ES" : " y ",
    "IT" : " e ",
    "NL" : " en ",
    "BE_FR" : " et ",
    "BE_NL" : " en ",
    "AT" : " und ",}
    };
    
    
    
      //Variables
    let marketX;
    let MOV = "";
    let combinedInput;
    let combined = "";
    let excluding = {applicable: "", notApplicable: ""};
    let including = {applicable: "", notApplicable: ""};
    let bundles = {applicable: "", notApplicable: ""};
    let capsules = {applicable: "", notApplicable: ""};
    let accessories = {applicable: "", notApplicable: ""};
    let beans = {applicable: "", notApplicable: ""};
    let machines = {applicable: "", notApplicable: ""};
    let rg = {applicable: "", notApplicable: ""};
    let and;
    let blockstyle = "none";
    let blockstyle2 = "none";
    let zapyatayaApp = 0;
    let zapyatayaNotApp = 0;
    let znak;
    let excludingInput;
    let includingInput;
    let capsulesInput;
    let bundlesInput;
    let beansInput;
    let rgInput;
    let accessoriesInput;
    let machinesInput;
    let fdate;
    let sdate;
    let notApplicableBox;
    let attempt = document.getElementById('attempt');
    let firstPromo = document.getElementById('firstPromo');
    let secondPromo = document.getElementById('secondPromo');
    let machinePromo = document.getElementById('machinePromo');
    let staticPhrase;
    let machinePromoSt;
    let result = "";
    let displayMov = "none";
      
    
      //Functions
    
      //Chose Market
      function choseMarket(){
      marketX = document.getElementById('market').value;
      document.getElementById("start").style.display = "block";
      beans = document.getElementById("beans");
      rg = document.getElementById('rg');
      machines = document.getElementById('machines');
      

      if(marketX === "NL"){
        combDiv.style.display = "none";
        combDiv2.style.display = "none";
      }
      else{
        combDiv.style.display = "block";
        combDiv2.style.display = "block";
      }
    
      if(marketX === "FR" || marketX === "ES" || marketX === "BE_FR" || marketX === "BE_NL" || marketX === "AT" || marketX === "IT"){
        machinesdiv.style.display = "block";
        machinesdiv2.style.display = "block";
        combDiv3.style.display = "block";
      }
      else{
        machinesdiv.style.display = "none";
        machinesdiv2.style.display = "none";
        combDiv3.style.display = "none";
        machines.checked=false;
        machines2.checked=false;
      }
    
      if(marketX === "UK" || marketX === "FR"){
        rgdiv.style.display = "block";
        rgdiv2.style.display = "block";
      }
      else{
        rgdiv.style.display = "none";
        rgdiv2.style.display = "none";
        rg.checked=false;
        rg2.checked=false;
      }
    
      if(marketX === "FR" || marketX === "NL" || marketX === "AT"){
        beansdiv.style.display = "block";
        beansdiv2.style.display = "block";
      }
      else{
        beansdiv.style.display = "none";
        beansdiv2.style.display = "none";
        beans.checked=false;
        beans2.checked=false;
      }
    
    
    
      if (marketX === "FR" || marketX === "ES" || marketX === "AT" || marketX === "BE_FR" || marketX === "BE_NL" || marketX === "IT"){
        promo3dates.disabled = false;
        attempt.style.display = "none";
      }
      else {
        promo3dates.disabled = true;
        attempt.style.display = "inline-block";
      }
    
    //   zapyatayaApp = 0;
        
    //     switch(marketX){
    //       case "IE" : 
    //       case "DE" :
    //       case "IT" : zapyatayaNotApp = -3;
    //       break;
    //       case "UK" : 
    //       case "ES" :
    //       case "NL" : 
    //       case "BE_FR" :
    //       case "BE_NL" : zapyatayaNotApp = -2;
    //       break;
    //       case "AT" : zapyatayaNotApp = -1;
    //       break;
    //       case "FR" : zapyatayaNotApp = 0;
    //       break;
          
    //     }
     }
    
    
      // Chose needed sting from DATA
      function setStr(item, input){
          //debugger;
        if (input.checked) {
          zapyatayaApp ++;
          item.applicable = allData[input.value][marketX];
          item.notApplicable = "";
          }
          else{
            zapyatayaNotApp ++;
            item.applicable = "";
            item.notApplicable = allData[input.value][marketX];
          }
        
      }
    
      //Copy TO Clipboard
      function copyToClipboard(){
      const el = document.createElement('textarea');
     
      el.value = `<span style="color:#666666;">` + result;
      //el.value = document.getElementById("allFooter").innerText;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      }
    
      //onOk function
      
      function onOk(){

        result = "";

        document.getElementById('title').innerHTML = `Generated for <span style="font-size: 20px; color: #F39C12";>${marketX}</span> market!`;
        
        if (offMov.checked) {
          displayMov = "inline";
        }
        else{
          displayMov = "none";
        }
        if (notCombined.checked) {
          displayMov = "inline";
        }
        else{
          displayMov = "none";
        }

        if (firstPromo.checked) {
        promo1.style.display = "block";
        oneStar.style.display = "block";

        
    
        MOV = document.getElementById("MOV").value;
        combinedInput = document.getElementById('notCombined');
        excludingInput = document.getElementById('excluding');
        includingInput = document.getElementById('including');
        capsulesInput = document.getElementById('capsules');
        bundlesInput = document.getElementById('bundles');
        beansInput = document.getElementById("beans");
        rgInput = document.getElementById('rg');
        accessoriesInput = document.getElementById('accessories');
        machinesInput = document.getElementById('machines');
        fdate = document.getElementById('first_date').value;
        sdate = document.getElementById('second_date').value;

        notApplicableBox = document.getElementById('notApplicableBox');
    
        let result1 = setFooter();    
        document.getElementById('oneStar').innerHTML = result1;
        result += result1 + (secondPromo.checked? "<br>" : (machinePromo.checked? "<br>" : ""));
    
    
        }
        else{
        promo1.style.display = "none";
        oneStar.style.display = "none";   
        }
    
        if (offMov2.checked) {
          displayMov = "inline";
        }
        else{
          displayMov = "none";
        } 

        if (secondPromo.checked) {
        promo2.style.display = "block";
        twoStar.style.display = "block";
    
        MOV = document.getElementById("MOV2").value;
        excludingInput = document.getElementById('excluding2');
        includingInput = document.getElementById('including2');
        combinedInput = document.getElementById('notCombined2');
        capsulesInput = document.getElementById('capsules2');
        bundlesInput = document.getElementById('bundles2');
        beansInput = document.getElementById("beans2");
        rgInput = document.getElementById('rg2');
        accessoriesInput = document.getElementById('accessories2');
        machinesInput = document.getElementById('machines2');
        fdate = document.getElementById('first_date2').value;
        sdate = document.getElementById('second_date2').value;
        notApplicableBox = document.getElementById('notApplicableBox2');
    
        let result2 = (firstPromo.checked? "<br>*" : "") + setFooter();  
        document.getElementById('twoStar').innerHTML = result2;
        result += result2 + (machinePromo.checked? "<br>" : "");
        }
        else{
        promo2.style.display = "none";
        twoStar.style.display = "none";
    
        }
        
        
        
        if (machinePromo.checked){
        promo3.style.display = "block";
        threeStar.style.display = "block";
        combinedInput = document.getElementById('notCombined3');
        combined = combinedInput.checked? allData[combinedInput.value][marketX] : "";
        fdate = document.getElementById('first_date3').value;
        sdate = document.getElementById('second_date3').value;
        const localDatef = new Date(fdate);
        const localDates = new Date(sdate);
        if (localDatef && localDates && localDatef >= localDates){    
          window.alert("The second date is the smaller or equal first date in machine promo. Please change the second date!");
        } 
          let fdateStr = fdate? ((localDatef.getDate() < 10 ? '0' : '') + localDatef.getDate() 
          + allData.dot[marketX] + (localDatef.getMonth() < 9 ? '0' : '') 
          + (localDatef.getMonth()+1) 
          + allData.dot[marketX] + localDatef.getFullYear()) : "" ;
          
          let sdateStr = sdate? ((localDates.getDate() < 10 ? '0' : '') + localDates.getDate() 
          + allData.dot[marketX] + (localDates.getMonth() < 9 ? '0' : '') 
          + (localDates.getMonth()+1) 
          + allData.dot[marketX] + localDates.getFullYear()) : "" ;
        
        
        
    
        switch(marketX){
          case 'UK' : machinePromoSt = ``;
            break;
          case 'IE' : machinePromoSt = ``;
            break;
          case 'DE' : machinePromoSt = ``;
            break;
          case 'FR' : machinePromoSt = `Promotion disponible du ${fdateStr} au ${sdateStr} à 23h59.<br>Consultez les conditions générales de l'offre <a alias="termsandconditions" conversion="false" data-linkto="other" href="httpgetwrap|https://www.lorespresso.com/fr_fr/conditions-generales-de-la-promotion" style="color:#666666;text-decoration:underline;" target="_blank" title="">ici</a>.${combined}`;
            break;
          case 'ES' : machinePromoSt = `Promoción disponible desde el ${fdateStr} hasta las 23:59 del ${sdateStr}.<br>Consulta los términos y condiciones de la oferta <a alias="termsandconditions" conversion="false" data-linkto="other" href="httpgetwrap|https://www.lorespresso.com/es_es/condiciones-de-promocion" style="color:#666666;text-decoration:underline;" target="_blank" title="">aquí</a>.`;
            break;
          case 'IT' : machinePromoSt = `Promozione valida dalle 00:01 del ${fdateStr} alle 23:59 del ${sdateStr} o fino a esaurimento scorte, se precedente a tale data. Promozione applicabile sul sito lorespresso.it per gli acquisti effettuati sul territorio italiano.${combined}`;
            break;
          case 'NL' : machinePromoSt = ``;
            break;
          case 'BE_FR' : machinePromoSt = `Promotion disponible du ${fdateStr} au ${sdateStr} à<span>&nbsp;</span>23h59.<br>Consultez les conditions générales de l'offre <a alias="termsandconditions" conversion="false" data-linkto="other" href="httpgetwrap|https://www.lorespresso.com/fr_be/conditions-de-promotion" style="color:#666666;text-decoration:underline;" target="_blank" title="">ici</a>.`;
            break;
          case 'BE_NL' : machinePromoSt = `Aanbieding geldig van ${fdateStr} tot ${sdateStr}, 23:59 uur.<br>Bekijk hier de <a alias="termsandconditions" conversion="false" data-linkto="other" href="httpgetwrap|https://www.lorespresso.com/nl_be/algemene-gebruiksvoorwaarden" style="color:#666666;text-decoration:underline;" target="_blank" title="">aanbiedingsvoorwaarden</a>.`;
            break;
          case 'AT' : machinePromoSt = `Angebot erhältlich vom ${fdateStr} bis zum ${sdateStr} um 23:59 Uhr.<br>Hier erfährst du mehr zu den <a alias="termsandconditions" conversion="false" data-linkto="other" href="httpgetwrap|https://www.lorespresso.com/de_at/angebotskonditionen" style="color:#666666;text-decoration:underline;" target="_blank" title="">Angebotsbedingungen</a>.`;
            break;
        }
        let result3 = (firstPromo.checked? ((marketX === "FR" || marketX === "ES" || marketX === "AT" || marketX === "BE_FR" || marketX === "BE_NL")? "<br>**" : "") : "") + (secondPromo.checked? ((marketX === "FR" || marketX === "ES" || marketX === "AT" || marketX === "BE_FR" || marketX === "BE_NL")? "*" : "") : "") + machinePromoSt;
        document.getElementById('threeStar').innerHTML = result3;
        result += result3;
        }
        else{
        promo3.style.display = "none";
        threeStar.style.display = "none";   
        }
    
    
        let staticPhraseTC;
        switch(marketX){
          case 'UK' : staticPhraseTC = `Standard website terms and conditions apply.`;
            break;
          case 'IE' : staticPhraseTC = `Standard website terms and conditions apply.`;
            break;
          case 'DE' : staticPhraseTC = `Es gelten die Allgemeinen Geschäftsbedingungen der Webseite.`;
            break;
          case 'FR' : staticPhraseTC = `Les conditions d’utilisation standard du site s’appliquent.`;
            break;
          case 'ES' : staticPhraseTC = `Se aplican los términos y condiciones generales del sitio web.`;
            break;
          case 'IT' : staticPhraseTC = `Si applicano termini e condizioni standard del sito web.`;
            break;
          case 'NL' : staticPhraseTC = `De standaard algemene voorwaarden van de website zijn van toepassing.`;
            break;
          case 'BE_FR' : staticPhraseTC = `Les conditions d’utilisation standard du site s’appliquent.`;
            break;
          case 'BE_NL' : staticPhraseTC = `De standaard algemene voorwaarden van de website zijn van toepassing.`;
            break;
          case 'AT' : staticPhraseTC = `Es gelten die Allgemeinen Geschäftsbedingungen der Webseite.`;
            break;
        }
        
        document.getElementById('terms').innerHTML = staticPhraseTC;
        result += "<br>" + staticPhraseTC;    
    }

      
    
    
      //SET FOOTER function
    
      function setFooter() {
        
        
        zapyatayaApp = 0;
        article = "";
    
        //Coma switcher
        switch(marketX){
          case "IE" : 
          case "DE" :
          case "IT" : zapyatayaNotApp = -2;
          break;
          case "UK" : 
          case "ES" :
          case "NL" : 
          case "BE_FR" : 
          case "BE_NL" : zapyatayaNotApp = -2;
          break;
          case "AT" : zapyatayaNotApp = -1;
          break;
          case "FR" : zapyatayaNotApp = 0;
          break;
          
        }
        combined = combinedInput.checked? allData[combinedInput.value][marketX] : "";
        excluding = excludingInput.checked? allData[excludingInput.value][marketX] : "";
        including = includingInput.checked? allData[includingInput.value][marketX] : "";
        setStr(capsules, capsulesInput);
        setStr(bundles, bundlesInput);
        setStr(beans, beansInput);
        setStr(rg, rgInput);
        setStr(accessories, accessoriesInput);
        and = allData.and[marketX];
        setStr(machines, machinesInput);
    
        znak = {'empty': '', '2': allData.and[marketX], '1': '', '3': ', ', '4': ', ', '5': ', ', '6': ', '};
        
        if (notApplicableBox.checked){ 
          blockstyle = "inline";
        }
         else{
          blockstyle = "none";
        }
        if (accessoriesInput.checked || machinesInput.checked || rgInput.checked || bundlesInput.checked || beansInput.checked || capsulesInput.checked ){ 
          blockstyle2 = "inline";
        }
         else{
          blockstyle2 = "none";
        }
        
        const localDatef = new Date(fdate);
        const localDates = new Date(sdate);
        if (localDatef && localDates && localDatef >= localDates){    
          window.alert("The second date is the smaller or equal first date. Please change the second date!");
        }
        
        let fdateStr = fdate? ((localDatef.getDate() < 10 ? '0' : '') + localDatef.getDate() 
        + allData.dot[marketX] + (localDatef.getMonth() < 9 ? '0' : '') 
        + (localDatef.getMonth()+1) 
        + allData.dot[marketX] + localDatef.getFullYear()) : "" ;
        
        let sdateStr = sdate? ((localDates.getDate() < 10 ? '0' : '') + localDates.getDate() 
        + allData.dot[marketX] + (localDates.getMonth() < 9 ? '0' : '') 
        + (localDates.getMonth()+1) 
        + allData.dot[marketX] + localDates.getFullYear()) : "" ;
    
        //Articles for FR, BE_FR markets
        let articles =  {"capsules": "", "beans" : "", "bundles" : "", "rg" : "", "machines" : "", "accesories" : ""};
        let articlesNot = {"capsules": "", "beans" : "", "bundles" : "", "rg" : "", "machines" : "", "accesories" : ""};
        if (capsulesInput.checked){
              articles.capsules=" les ";
          }
          if (bundlesInput.checked && !capsulesInput.checked){
            articles.bundles=" les ";
          }
          if (beansInput.checked && !capsulesInput.checked && !bundlesInput.checked){
            articles.beans=" le ";
          }
          if (rgInput.checked && !bundlesInput.checked && !beansInput.checked && !capsulesInput.checked ){
            articles.rg=" le ";
          }
          if (machinesInput.checked && !rgInput.checked && !bundlesInput.checked && !beansInput.checked && !capsulesInput.checked ){
            articles.machines=" l'achat ";
          }
          if (accessoriesInput.checked && !machinesInput.checked && !rgInput.checked && !bundlesInput.checked && !beansInput.checked && !capsulesInput.checked ){
            articles.accesories=" les ";
          }

          if (!capsulesInput.checked){
            articlesNot.capsules=" les ";
          }
          if (!bundlesInput.checked && capsulesInput.checked){
            articlesNot.bundles=" les ";
          }
          if (!beansInput.checked && capsulesInput.checked && bundlesInput.checked){
            articlesNot.beans=" le ";
          }
          if (!rgInput.checked && bundlesInput.checked && beansInput.checked && capsulesInput.checked ){
            articlesNot.rg=" le ";
          }
          if (!machinesInput.checked && rgInput.checked && bundlesInput.checked && beansInput.checked && capsulesInput.checked ){
            articlesNot.machines=" l'achat ";
          }
          //for BE_FR start
          if (!machinesInput.checked && accessoriesInput.checked && bundlesInput.checked && capsulesInput.checked ){
            articlesNot.machines=" l'achat ";
          }
          //for BE_FR end
          if (!accessoriesInput.checked && machinesInput.checked && rgInput.checked && bundlesInput.checked && beansInput.checked && capsulesInput.checked ){
            articlesNot.accesories=" les ";
          }
          
          
    
        //Footer switcher
        switch(marketX){
          case 'UK' : staticPhrase = `*Promotion available from ${fdateStr} until 23:59 on ${sdateStr}.<span style="display: ${displayMov};"><br>This promotion is valid with a £${MOV} minimum order value ${excluding}${including}</span><span style="display: ${blockstyle2};"><br>Applicable on ${capsules.applicable}${capsules.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${bundles.applicable}${bundles.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${rg.applicable}${rg.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${accessories.applicable}.<span style="display: ${blockstyle};"><br>Not applicable on ${capsules.notApplicable}${capsules.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${bundles.notApplicable}${bundles.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${rg.notApplicable}${rg.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${accessories.notApplicable}.</span>${combined}`;
            break;
          case 'IE' : staticPhrase = `*Promotion available from ${fdateStr} until 23:59 on ${sdateStr}.<span style="display: ${displayMov};"><br>This promotion is valid with a €${MOV} minimum order value ${excluding}${including}</span><span style="display: ${blockstyle2};"><br>Applicable on ${capsules.applicable}${capsules.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${bundles.applicable}${bundles.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${accessories.applicable}.<span style="display: ${blockstyle};"><br>Not applicable on ${capsules.notApplicable}${capsules.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${bundles.notApplicable}${bundles.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${accessories.notApplicable}.</span>${combined}`;
            break;
          case 'DE' : staticPhrase = `*Angebot erhältlich vom ${fdateStr} bis zum ${sdateStr} um 23:59 Uhr.<span style="display: ${displayMov};"><br>Dieses Angebot ist nur gültig bei einem Mindestbestellwert von ${MOV}<span>&nbsp;</span>€ ${excluding}${including}</span><span style="display: ${blockstyle2};"><br>Gültig für ${capsules.applicable}${capsules.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${bundles.applicable}${bundles.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${accessories.applicable}.<span style="display: ${blockstyle};"><br>Gilt nicht für ${capsules.notApplicable}${capsules.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${bundles.notApplicable}${bundles.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${accessories.notApplicable}.</span>${combined}`;
            break;
          case 'FR' : staticPhrase = `*Promotion disponible du ${fdateStr} au ${sdateStr} à 23h59.<span style="display: ${displayMov};"><br>Cette promotion est valable pour toute commande d'un montant minimum de ${MOV} € ${excluding}${including}</span><span style="display: ${blockstyle2};"><br>Applicable sur ${articles.capsules}${capsules.applicable}${capsules.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${articles.bundles}${bundles.applicable}${bundles.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${articles.beans}${beans.applicable}${beans.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${articles.rg}${rg.applicable}${rg.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${articles.machines}${machines.applicable}${machines.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${articles.accesories}${accessories.applicable}.<span style="display: ${blockstyle};"><br>Elle n'est pas valable sur ${articlesNot.capsules}${capsules.notApplicable}${capsules.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${articlesNot.bundles}${bundles.notApplicable}${bundles.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${articlesNot.beans}${beans.notApplicable}${beans.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${articlesNot.rg}${rg.notApplicable}${rg.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${articlesNot.machines}${machines.notApplicable}${machines.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${articlesNot.accesories}${accessories.notApplicable}.</span>${combined}`;
            break;
          case 'ES' : staticPhrase = `*Promoción disponible desde el ${fdateStr} hasta las 23:59 del ${sdateStr}.<span style="display: ${displayMov};"><br>Esta oferta solo es válida para compras mínimas de ${MOV}€ ${excluding}${including}</span><span style="display: ${blockstyle2};"><br>Válida para ${capsules.applicable}${capsules.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${bundles.applicable}${bundles.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${machines.applicable}${machines.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${accessories.applicable}.<span style="display: ${blockstyle};"><br>Esta oferta no es válida para la compra de ${capsules.notApplicable}${capsules.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${bundles.notApplicable}${bundles.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${machines.notApplicable}${machines.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${accessories.notApplicable}.</span>${combined}`;
            break;
          case 'IT' : staticPhrase = `*Promozione disponibile dal ${fdateStr} alle 23:59 del ${sdateStr}.<span style="display: ${displayMov};"><br>La presente promozione è valida con un ordine minimo di €${MOV} ${excluding}${including}</span><span style="display: ${blockstyle2};"><br>Valida su ${capsules.applicable}${capsules.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${bundles.applicable}${bundles.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${articles.machines}${machines.applicable}${machines.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${accessories.applicable}.<span style="display: ${blockstyle};"><br>Non si applica agli alle ${capsules.notApplicable}${capsules.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${bundles.notApplicable}${bundles.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${articlesNot.machines}${machines.notApplicable}${machines.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${accessories.notApplicable}.</span>${combined}`;
            break;
          case 'NL' : staticPhrase = `*Aanbieding geldig van ${fdateStr} tot ${sdateStr}, 23:59 uur.<span style="display: ${displayMov};"><br>Deze aanbieding is geldig bij een minimum bestelbedrag van €${MOV} ${excluding}${including}</span><span style="display: ${blockstyle2};"><br>Van toepassing ${capsules.applicable}${capsules.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${bundles.applicable}${bundles.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${beans.applicable}${beans.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${accessories.applicable}.<span style="display: ${blockstyle};"><br>Niet geldig voor ${capsules.notApplicable}${capsules.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${bundles.notApplicable}${bundles.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${beans.notApplicable}${beans.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${accessories.notApplicable}.</span>${combined}`;
            break;
          case 'BE_FR' : staticPhrase = `*Promotion disponible du ${fdateStr} au ${sdateStr} à<span>&nbsp;</span>23h59.<span style="display: ${displayMov};"><br>Cette promotion est valable pour toute commande d'un montant minimum de ${MOV} € ${excluding}${including}</span><span style="display: ${blockstyle2};"><br>Applicable sur${articles.capsules}${capsules.applicable}${capsules.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${articles.bundles}${bundles.applicable}${bundles.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${articles.machines}${machines.applicable}${machines.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${articles.accesories}${accessories.applicable}.<span style="display: ${blockstyle};"><br>Elle n'est pas valable sur${articlesNot.capsules}${capsules.notApplicable}${capsules.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${articlesNot.bundles}${bundles.notApplicable}${bundles.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${articlesNot.machines}${machines.notApplicable}${machines.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${articlesNot.accesories}${accessories.notApplicable}.</span>${combined}`;
            break;
          case 'BE_NL' : staticPhrase = `*Aanbieding geldig van ${fdateStr} tot ${sdateStr}, 23:59 uur.<span style="display: ${displayMov};"><br>Deze aanbieding is geldig bij een minimum besteding vanaf €${MOV} ${excluding}${including}</span><span style="display: ${blockstyle2};"><br>Van toepassing op ${capsules.applicable}${capsules.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${bundles.applicable}${bundles.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${machines.applicable}${machines.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${accessories.applicable}.<span style="display: ${blockstyle};"><br>Niet geldig voor ${capsules.notApplicable}${capsules.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${bundles.notApplicable}${bundles.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${machines.notApplicable}${machines.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${accessories.notApplicable}.</span>${combined}`;
            break;
          case 'AT' : staticPhrase = `*Angebot erhältlich vom ${fdateStr} bis zum ${sdateStr} um 23:59 Uhr.<span style="display: ${displayMov};"><br>Dieses Angebot ist nur gültig bei einem Mindestbestellwert von ${MOV}<span>&nbsp;</span>€ ${excluding}${including}</span><span style="display: ${blockstyle2};"><br>Gültig für ${capsules.applicable}${capsules.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${bundles.applicable}${bundles.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${beans.applicable}${beans.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${machines.applicable}${machines.applicable === '' ? znak.empty : znak[zapyatayaApp--]}${accessories.applicable}.<span style="display: ${blockstyle};"><br>Das Angebot gilt nicht für ${capsules.notApplicable}${capsules.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${bundles.notApplicable}${bundles.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${beans.notApplicable}${beans.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${machines.notApplicable}${machines.notApplicable === '' ? znak.empty : znak[zapyatayaNotApp--]}${accessories.notApplicable}.</span>${combined}`;
            break;
        }
    
       
        return(staticPhrase);
        
    
    
        }
        
        //Load page after changes
        document.getElementsByTagName("body")[0].addEventListener("change", onOk);