const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<template id="wisvch-navigation">
  <style>
    :host {
      display: block;
    }

    #container {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
    }

    #container div {
      min-width: 250px;
    }

    #container img {
      margin-top: 5px;
      width: 70px;
    }

    #container h3 {
      margin: 5px 0;
    }
      
    span {
      margin: 0px 20px 0px 20px;
    }
      
    ul {
      list-style: none;
      padding: 0px;
    }
      
    a span {
      text-decoration: none;
    }
      
    #ch-logo {
      max-width: 100%;
      margin: 10px;
      position: absolute;
      left: 300px;
      top: 25px;
      height: calc(100vh / 5);
    }
    
      
  </style>
    <div>
        <img id="ch-logo" src="../resources/images/ch-logo.png">
    </div>
    
    <div id="container"></div>
</template>`;

document.head.appendChild($_documentContainer.content);
(function(document, customElements, fetch) {
  // Points to this document which has the template
  const doc = window.document;
  const docLocation = doc.baseURI.substring(0, doc.baseURI.lastIndexOf('/'));

  class WisvchHeader extends HTMLElement {
    constructor() {
      super();
      const template = doc.getElementById('wisvch-navigation');
      const clone = document.importNode(template.content, true);
      const shadow = this.attachShadow({
        mode: 'open'
      });
      shadow.appendChild(clone);
    };

    async connectedCallback() {
      //      const committeeName = this.getAttribute('hea-name');
      //      this.shadowRoot.getElementById('committeename').textContent = committeeName;
      const location = this.getAttribute('src');

      const content = await fetch(location);
      const json = await content.json();
      const pages = json.pages;

      const container = this.shadowRoot.getElementById('container');

      // create a list for the navigation bar
      const listElement = document.createElement('ul');
      listElement.id = "nav";

      for (const page of pages) {
        
        const a = document.createElement('a');
        a.href = page.href;

        const a_span = document.createElement('span');
        a_span.textContent = page.name;
        a.appendChild(a_span);
        listElement.appendChild(a);

      }

      container.appendChild(listElement);
      console.log(container);

    };
  }

  customElements.define('wisvch-navigation', WisvchHeader);
})(document, window.customElements, window.fetch);
