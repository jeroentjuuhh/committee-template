import { PolymerElement } from '../../@polymer/polymer/polymer-element.js';
import { html } from '../../@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<template id="wisvch-committee">
  <style>
    :host {
      display: block;
    }

    #container {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
      width: 100vw;
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
    
    h2 {
      text-align: center;
    }

  </style>
  <h2 class="test"> <span id="committeename"></span>Committee of W.I.S.V. 'Christiaan Huygens'</h2>
  <div id="container">

  </div>
</template>`;

document.head.appendChild($_documentContainer.content);
(function(document, customElements, fetch) {
  // Points to this document which has the template
  const doc = window.document;
  const docLocation = doc.baseURI.substring(0, doc.baseURI.lastIndexOf('/'));

  class WisvchCommittee extends HTMLElement {
    constructor() {
      super();
      const template = doc.getElementById('wisvch-committee');
      const clone = document.importNode(template.content, true);
      const shadow = this.attachShadow({mode: 'open'});
      shadow.appendChild(clone);
    };

    async connectedCallback() {
      const committeeName = this.getAttribute('committee-name');
      this.shadowRoot.getElementById('committeename').textContent = committeeName;
      const location = this.getAttribute('src') || 'committee.json';

      const content = await fetch(location);
      const json = await content.json();
      const committee = json.committee;

      const container = this.shadowRoot.getElementById('container');
      for (const member of committee) {
        const div = document.createElement('div');

        if (member.img) {
          const img = document.createElement('img');
          img.src = `${docLocation}/resources/icons/${member.img}.svg`;
          div.appendChild(img);
        }

        const role = document.createElement('h3');
        role.textContent = member.role;
        div.appendChild(role);

        const name = document.createElement('span');
        name.textContent = member.name;
        div.appendChild(name);

        container.appendChild(div);
      }
    };
  }

  customElements.define('wisvch-committee', WisvchCommittee);
})(document, window.customElements, window.fetch);
