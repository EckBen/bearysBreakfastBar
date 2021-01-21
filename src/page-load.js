function makeTitleElements(pageTitle, beeClass1, beeClass2, headingClass, containerClass) {
  let container = document.createElement('div');
  container.classList.add('heading-container');

  if (containerClass && containerClass != '') {
    container.classList.add(containerClass);
  }
  
  let bee1 = document.createElement('img');
  bee1.classList.add('decorations', beeClass1);
  bee1.setAttribute('src', './img/bee.svg');
  
  let bee2 = document.createElement('img');
  bee2.classList.add('decorations', beeClass2);
  bee2.setAttribute('src', './img/bee.svg');
  
  let heading = document.createElement('div');
  heading.classList.add("heading");

  if (headingClass && headingClass != '') {
    heading.classList.add(headingClass);
  }
  
  let title = document.createElement('h1');
  title.textContent = pageTitle;
  
  heading.appendChild(title);

  container.appendChild(bee1);
  container.appendChild(bee2);
  container.appendChild(heading);

  return container;
}

function makeSubTitleElements(subTitle, headingClass, containerClass) {
  let container = document.createElement('div');
  container.classList.add('heading-container');

  if (containerClass && containerClass != '') {
    container.classList.add(containerClass);
  }
  
  let heading = document.createElement('div');
  heading.classList.add("heading");

  if (headingClass && headingClass != '') {
    heading.classList.add(headingClass);
  }
  
  let title = document.createElement('h2');
  title.textContent = subTitle;
  
  heading.appendChild(title);

  container.appendChild(heading);


  let hive = document.createElement('img');
  hive.classList.add('decorations', 'sub-container-hive');
  hive.setAttribute('src', './img/honeycomb.svg');

  container.appendChild(hive);

  return container;
}

function makeComb(pageConfig) {
  let outer = document.createElement('div');
  outer.classList.add('comb-outer');
  outer.classList.add(pageConfig[0]['outer']);
  
  let inner = document.createElement('div');
  inner.classList.add('comb-inner');
  inner.classList.add(pageConfig[0]['inner']);

  for (let i = 1; i < pageConfig.length; i++) {
    if (pageConfig[i]['el'] == 'p') {
      var element = document.createElement('p');
      let elementText = document.createTextNode(pageConfig[i]['text']);

      element.appendChild(elementText);
    } else if (pageConfig[i]['el'] == 'h3') {
      var element = document.createElement('h3');
      let elementText = document.createTextNode(pageConfig[i]['text']);
  
      element.appendChild(elementText);
    } else {
      var element = document.createElement('div');
      element.style.backgroundImage = `url(${pageConfig[i]['source']})`;
      element.setAttribute('title', pageConfig[i]['text']);     
    }
    
    element.classList.add(pageConfig[i]['class']);

    inner.appendChild(element);
  }

  outer.appendChild(inner);
  
  return outer;
}

function makeContact(name, position, phone, email, pic, alt) {
  return [
    {
      'outer': 'contact-outer',
      'inner': 'contact-inner'
    },
    {
      'el': 'h3',
      'text': name,
      'class': 'person'
    },
    {
      'el': 'p',
      'text': position,
      'class': 'position'
    },
    {
      'el': 'p',
      'text': phone,
      'class': 'phone'
    },
    {
      'el': 'p',
      'text': email,
      'class': 'email'
    },
    {
      'el': 'img',
      'text': alt,
      'class': 'contact-pic',
      'source': pic
    }
  ]
}

function makeMenuItem(name, description, price, pic, alt) {
  return [
    {
      'outer': 'menu-outer',
      'inner': 'menu-inner'
    },
    {
      'el': 'h3',
      'text': name,
      'class': 'item-name'
    },
    {
      'el': 'p',
      'text': description,
      'class': 'item-description'
    },
    {
      'el': 'p',
      'text': price,
      'class': 'item-price'
    },
    {
      'el': 'img',
      'text': alt,
      'class': 'item-pic',
      'source': pic
    }
  ]
}

function makeReview(review, name) {
  return [
    {
      'outer': 'review-outer',
      'inner': 'review-inner'
    },
    {
      'el': 'p',
      'text': review,
      'class': 'review'
    },
    {
      'el': 'p',
      'text': name,
      'class': 'customer'
    }
  ]
}

function makeInfo(info) {
  return [[
    {
      'outer': 'info-hours-outer',
      'inner': 'info-hours-inner'
    },
    {
      'el': 'h3',
      'text': 'Hours',
      'class': 'hours'
    },
    {
      'el': 'p',
      'text': `Sunday: ${info.hours.sunday.open}am - ${info.hours.sunday.close}pm`,
      'class': 'sunday'
    },
    {
      'el': 'p',
      'text': `Monday: ${info.hours.monday.open}am - ${info.hours.monday.close}pm`,
      'class': 'monday'
    },
    {
      'el': 'p',
      'text': `Tuesday: ${info.hours.tuesday.open}am - ${info.hours.tuesday.close}pm`,
      'class': 'tuesday'
    },
    {
      'el': 'p',
      'text': `Wednesday: ${info.hours.wednesday.open}am - ${info.hours.wednesday.close}pm`,
      'class': 'wednesday'
    },
    {
      'el': 'p',
      'text': `Thursday: ${info.hours.thursday.open}am - ${info.hours.thursday.close}pm`,
      'class': 'thursday'
    },
    {
      'el': 'p',
      'text': `Friday: ${info.hours.friday.open}am - ${info.hours.friday.close}pm`,
      'class': 'friday'
    },
    {
      'el': 'p',
      'text': `Saturday: ${info.hours.saturday.open}am - ${info.hours.saturday.close}pm`,
      'class': 'saturday'
    }],
    [{
      'outer': 'info-location-outer',
      'inner': 'info-location-inner'
    },
    {
      'el': 'h3',
      'text': 'Location',
      'class': 'location'
    },
    {
      'el': 'p',
      'text': `${info.location.street}, ${info.location.city}, ${info.location.state}`,
      'class': 'address'
    }]
  ]
}

function loadMain(type, parent, contents) {
contents.forEach(content => {
    if (type == 'home') {
      var contentConfig = makeReview(content.text, content.name);
    } else if (type == 'menu') {
      if (content.item) {
        var contentConfig = makeMenuItem(content.name, content.description, content.price, content.pic, content.alt);
      } else {
        var sectionTitle = makeSubTitleElements(content.subtitle, 'sub-heading', 'sub-container');
        parent.appendChild(sectionTitle);
        return;
      }
    } else {
      var contentConfig = makeContact(content.name, content.position, content.phone, content.email, content.pic, content.alt);
    }
    
    let contentComb = makeComb(contentConfig);
    
    parent.appendChild(contentComb);
  });
}

function loadTitle(type, parent, title) {
  if (type == "main") {
    var titleElements = makeTitleElements(title.title, title.beeClass1, title.beeClass2);
  } else if (type == "contact") {
    var titleElements = makeTitleElements(title.title, title.beeClass1, title.beeClass2, "contact-heading", "contact-container");
  } else if (type == "menu") {
    var titleElements = makeTitleElements(title.title, title.beeClass1, title.beeClass2, "menu-heading", "menu-container");
  } else {
    var titleElements = makeSubTitleElements(title.title);
  }
  
  parent.appendChild(titleElements);
}

function loadInfo(parent, info) {
  let information = makeInfo(info);

  information.forEach(section => {
    let infoComb = makeComb(section);
    parent.appendChild(infoComb);
  });
}

function wipeOut(el) {
  el.textContent = '';
}

function viewWidth () {
  const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  console.log(width);
  return width;
}

let loadHomePage = (parent, reviews, title, info) => {
  loadTitle('main', parent, title);
  loadMain('home', parent, reviews);
  loadInfo(parent, info);

  let hive = document.createElement('img');
  hive.classList.add('decorations', 'hive');
  hive.setAttribute('src', './img/honeycomb.svg');

  parent.appendChild(hive);
}

let loadMenuPage = (content, menu, menuTitle) => {
  loadTitle('menu', content, menuTitle);
  loadMain('menu', content, menu);
}

let loadContactPage = (content, contacts, contactTitle) => {
  loadTitle('contact', content, contactTitle);
  loadMain('contact', content, contacts);
}

export { loadHomePage, loadMenuPage, loadContactPage, wipeOut, viewWidth };