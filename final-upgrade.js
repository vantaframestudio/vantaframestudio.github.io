
/* Vantaframe Studio — final upgrade behavior
   Does not replace, edit, or change any existing video source. */
(function(){

  /* Car-first intro: let the existing Lamborghini hero video lead, then reveal the headline and copy. */
  const introHero=document.querySelector(".hero");
  const introCopy=document.querySelector(".hero-copy");
  const introCar=document.querySelector(".hero-media-one video");
  const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(introHero && introCopy && !reduceMotion){
    document.body.classList.add("vf-car-intro");
    const revealCopy=function(){
      window.setTimeout(function(){document.body.classList.add("vf-car-copy-visible");},1350);
    };
    if(introCar && introCar.readyState < 2){
      let started=false;
      const onceReady=function(){if(started)return;started=true;revealCopy();};
      introCar.addEventListener("loadeddata",onceReady,{once:true});
      introCar.addEventListener("error",onceReady,{once:true});
      window.setTimeout(onceReady,1700);
    }else{
      revealCopy();
    }
  }else if(introHero && introCopy){
    document.body.classList.add("vf-car-copy-visible");
  }

  function makeIcon(type){
    if(type==="whatsapp") return '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.5.7 4.8 1.9 6.8L3 29l6.8-2.1c1.9 1 4 1.6 6.2 1.6 7 0 12.7-5.6 12.7-12.6C28.7 8.6 23 3 16 3Zm0 23c-2 0-3.9-.5-5.5-1.5l-.4-.2-4 1.2 1.2-3.9-.3-.4a10.3 10.3 0 0 1-1.7-5.6C5.3 9.7 10.1 5 16 5c5.9 0 10.7 4.7 10.7 10.6 0 5.9-4.8 10.4-10.7 10.4Zm5.8-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.8c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-1-2.3c-.3-.6-.5-.6-.7-.6h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.5.7.3 1.3.5 1.7.6.7.2 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4Z"/></svg>';
    if(type==="instagram") return '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="4" y="4" width="24" height="24" rx="7"/><circle cx="16" cy="16" r="6.2"/><circle cx="23" cy="9" r="1.4" fill="currentColor" stroke="none"/></svg>';
    return '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="4" y="7" width="24" height="18" rx="3"/><path d="M5.5 9 16 18l10.5-9"/></svg>';
  }

  const contact=document.querySelector(".contact-links");
  const inquiryMessage="Hi Vantaframe Studio, I found you through your website and I am interested in your services. I would like to know more about AI ads, website design, pricing, and how we can get started.";
  const whatsappUrl="https://wa.me/2348102992744?text="+encodeURIComponent(inquiryMessage);
  const emailUrl="mailto:benjaminadarefe@gmail.com?subject="+encodeURIComponent("AI Advertisement Inquiry")+"&body="+encodeURIComponent(inquiryMessage);
  if(contact){
    contact.classList.add("vf-icon-links");
    contact.innerHTML=[
      '<a class="vf-icon-btn" href="'+emailUrl+'" aria-label="Email" title="Email">'+makeIcon("email")+"</a>",
      '<a class="vf-icon-btn" href="https://www.instagram.com/_vantaframestudio_?stkn=cmJqMzNidmhxMHB2&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">'+makeIcon("instagram")+"</a>",
      '<a class="vf-icon-btn" href="'+whatsappUrl+'" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">'+makeIcon("whatsapp")+"</a>"
    ].join("");
  }

  /* Add a light cinematic hover response to the existing hero videos. */
  document.querySelectorAll(".hero-media").forEach(function(card){
    card.addEventListener("pointermove",function(e){
      if(!window.matchMedia("(pointer:fine)").matches) return;
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      if(card.classList.contains("hero-media-one")){
        card.style.transform="translate(-50%,-50%) rotateY("+(x*3)+"deg) rotateX("+(-y*3)+"deg) scale(1.015)";
      }else{
        card.style.transform="rotateY("+(x*3)+"deg) rotateX("+(-y*3)+"deg)";
      }
    });
    card.addEventListener("pointerleave",function(){
      if(card.classList.contains("hero-media-one")) card.style.transform="translate(-50%,-50%)";
      else if(card.classList.contains("hero-media-two")) card.style.transform="rotate(-5deg)";
      else card.style.transform="rotate(5deg)";
    });
  });
  /* Vantaframe AI assistant — upgraded lead-generation assistant. */
  const botRoot=document.getElementById("vf-bot-root");
  if(!botRoot){
    const bot=document.createElement("div");
    bot.id="vf-bot-root";
    bot.innerHTML=`
      <button class="vf-bot-launch" aria-label="Open Vantaframe AI assistant"><span class="vf-bot-dot"></span><span class="vf-bot-spark">✦</span></button>
      <section class="vf-bot-panel" aria-label="Vantaframe AI assistant" aria-hidden="true">
        <header class="vf-bot-head">
          <div><span class="vf-bot-status"></span><strong>Vantaframe AI</strong><small>Your AI advertising assistant</small></div>
          <button class="vf-bot-close" aria-label="Close assistant">×</button>
        </header>
        <div class="vf-bot-messages"></div>
        <div class="vf-bot-chips">
          <button data-q="What services do you offer?">Services</button>
          <button data-q="How does pricing work?">Pricing</button>
          <button data-q="I want to create an ad">Start a project</button>
          <button data-q="I want to speak to someone">Contact</button>
        </div>
        <form class="vf-bot-form"><input class="vf-bot-input" autocomplete="off" placeholder="Ask Vantaframe AI..." aria-label="Message"/><button type="submit" aria-label="Send message">↑</button></form>
      </section>`;
    document.body.appendChild(bot);

    const panel=bot.querySelector(".vf-bot-panel"), launch=bot.querySelector(".vf-bot-launch"), close=bot.querySelector(".vf-bot-close");
    const messages=bot.querySelector(".vf-bot-messages"), form=bot.querySelector(".vf-bot-form"), input=bot.querySelector(".vf-bot-input"), chips=bot.querySelector(".vf-bot-chips");
    const lead={name:"",business:"",service:"",format:"",budget:"",contact:""};
    let captureStep="";

    function addMessage(value,who="bot",actions=[]){
      const row=document.createElement("div"); row.className="vf-bot-msg "+who;
      const bubble=document.createElement("div"); bubble.className="vf-bot-bubble"; bubble.textContent=value; row.appendChild(bubble);
      if(actions.length){
        const a=document.createElement("div"); a.className="vf-bot-actions";
        actions.forEach(item=>{const b=document.createElement("button");b.type="button";b.textContent=item.label;b.addEventListener("click",item.onClick);a.appendChild(b);});
        row.appendChild(a);
      }
      messages.appendChild(row); messages.scrollTop=messages.scrollHeight;
    }
    function openBot(){
      panel.classList.add("open");panel.setAttribute("aria-hidden","false");launch.classList.add("hidden");
      if(!messages.children.length) addMessage("Hi! I’m Vantaframe AI. I can answer questions about our AI advertising and website design services, explain pricing, and help you prepare a project request.");
      setTimeout(()=>input.focus(),120);
    }
    function closeBot(){panel.classList.remove("open");panel.setAttribute("aria-hidden","true");launch.classList.remove("hidden");}
    function send(value){value=(value||"").trim();if(!value)return;addMessage(value,"user");input.value="";setTimeout(()=>reply(value),180);}
    function handoff(){
      const lines=[
        "Hi Vantaframe Studio, I’d like to discuss a project.",
        "Name: "+(lead.name||"Not provided"),
        "Business: "+(lead.business||"Not provided"),
        "Project type: "+(lead.service||"Not provided"),
        "Project goal: "+(lead.format||"Not provided"),
        "Budget range: "+(lead.budget||"Not provided"),
        "Contact: "+(lead.contact||"Not provided"),
        "I found Vantaframe through the website."
      ];
      window.open("https://wa.me/2348102992744?text="+encodeURIComponent(lines.join("\n")),"_blank");
    }
    function startProject(){
      captureStep="name";
      addMessage("Great. Let’s get the project details together. What’s your name?");
    }
    function reply(raw){
      const q=raw.toLowerCase().replace(/[’']/g,"").replace(/[^a-z0-9£₦]+/g," ").trim();
      const has=(words)=>words.some(word=>q.includes(word));
      const websiteIntent=has(["website","web design","web development","portfolio","landing page","online store","ecommerce","e commerce"]);
      const adIntent=has(["advert","video ad","commercial","ugc","social media","reel","campaign","promo"]);
      const pricingIntent=has(["price","pricing","cost","how much","budget","rate","£","₦"]);
      const contactIntent=has(["contact","whatsapp","human","speak to","talk to someone","email"]);
      const beginIntent=has(["start a project","get started","hire you","book","work with you","i need","i want"]);
      const goToPricing=()=>{window.location.hash="website-pricing";};
      const openWhatsApp=()=>window.open("https://wa.me/2348102992744?text="+encodeURIComponent(inquiryMessage),"_blank","noopener");
      const askProject=()=>addMessage("I can help prepare a short project brief. Would you like to discuss a website, an AI advert, or both?", "bot", [
        {label:"Website",onClick:()=>{lead.service="Website design";startProject();}},
        {label:"AI advert",onClick:()=>{lead.service="AI advert";startProject();}},
        {label:"Both",onClick:()=>{lead.service="Website and AI advert";startProject();}}
      ]);

      if(captureStep==="name"){lead.name=raw;captureStep="business";addMessage("Thanks, "+raw+". What is your business or brand called?");return;}
      if(captureStep==="business"){lead.business=raw;captureStep="service";addMessage("What would you like us to create: a website, an AI advert, or both?");return;}
      if(captureStep==="service"){lead.service=raw;captureStep="format";addMessage("What should the project help you achieve? For example, more enquiries, a stronger brand presence, or launching a product.");return;}
      if(captureStep==="format"){lead.format=raw;captureStep="budget";addMessage("Do you have a budget range or preferred package in mind? You can also say you are not sure.");return;}
      if(captureStep==="budget"){lead.budget=raw;captureStep="contact";addMessage("What is the best email address or WhatsApp number for the project?");return;}
      if(captureStep==="contact"){
        lead.contact=raw;captureStep="";
        addMessage("Here is your project brief. You can review it and send it to Vantaframe Studio on WhatsApp.", "bot", [{label:"Send project brief",onClick:handoff}]);
        return;
      }

      if(has(["hello","hi","hey","good morning","good afternoon","good evening"])){
        addMessage("Hi! I can explain our AI advertising and website services, share the listed starting price, or help you prepare a project brief. What are you planning?");
        return;
      }
      if(contactIntent){
        addMessage("You can reach Vantaframe Studio by WhatsApp or email. I can also prepare a project brief first.", "bot", [
          {label:"Open WhatsApp",onClick:openWhatsApp},
          {label:"Prepare a project brief",onClick:askProject}
        ]);
        return;
      }
      if(pricingIntent){
        addMessage("The basic website package starts from £600. Business Pro, Premium and online store projects are quoted to scope. A local Naira quote is available on request. AI advert pricing depends on the length, creative, production and deliverables.", "bot", [
          {label:"See website packages",onClick:goToPricing},
          {label:"Discuss a project",onClick:askProject}
        ]);
        return;
      }
      if(websiteIntent){
        addMessage("We build mobile-friendly business and portfolio websites, landing pages and online stores. The basic website starts from £600; larger projects are quoted to scope. Tell me what your website needs to do and I can help you prepare a project brief.", "bot", [
          {label:"See website packages",onClick:goToPricing},
          {label:"Plan a website",onClick:()=>{lead.service="Website design";startProject();}}
        ]);
        return;
      }
      if(adIntent){
        addMessage("We create AI product ads, commercials and social videos for platforms such as Instagram, TikTok, YouTube and WhatsApp. The creative and quote depend on your product, audience, video length and deliverables. What are you promoting?");
        addMessage("I can collect the details for a project brief whenever you are ready.", "bot", [{label:"Plan an advert",onClick:()=>{lead.service="AI advert";startProject();}}]);
        return;
      }
      if(has(["process","how does it work","how it works","timeline","how long","delivery"])){
        addMessage("We start by understanding your goals and scope, then agree on the creative direction, deliverables, timeline and quote before production. Timing depends on the project size and any revisions.");
        addMessage("Would you like to discuss a website or an AI advert?", "bot", [
          {label:"Website",onClick:()=>{lead.service="Website design";startProject();}},
          {label:"AI advert",onClick:()=>{lead.service="AI advert";startProject();}}
        ]);
        return;
      }
      if(has(["revision","changes","edit","update","maintenance","hosting","domain","payment"])){
        addMessage("Those details depend on the agreed project scope. We confirm deliverables, revisions, timeline and any hosting or paid-service costs in the written quote before work begins. What are you looking to build?");
        return;
      }
      if(has(["service","what do you do","offer","what is vantaframe"])){
        addMessage("Vantaframe Studio offers AI video advertising and website design, including business websites, portfolios, landing pages and online stores. We can help you decide which service fits your goal.");
        askProject();
        return;
      }
      if(has(["nigeria","nigerian","naira","local"])){
        addMessage("Yes. Vantaframe Studio works with Nigerian businesses and can provide a local Naira quote on request. Projects are scoped around your audience, goals and deliverables.");
        return;
      }
      if(beginIntent){
        askProject();
        return;
      }
      addMessage("I can help with AI adverts, websites, starting prices, project scope or contacting the studio. What are you hoping to create?");
    }

    launch.addEventListener("click",openBot);close.addEventListener("click",closeBot);
    form.addEventListener("submit",e=>{e.preventDefault();send(input.value);});
    chips.addEventListener("click",e=>{if(e.target.matches("button"))send(e.target.dataset.q);});
  }

})();