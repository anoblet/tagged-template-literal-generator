Usage: 

/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';
import { SharedStyles } from '../shared-styles.js';
import { generator } from 'tagged-template-literal-generator';

const template = require('./test-component.html');

export class TestComponent extends LitElement {
  static get properties() { 
    return {
       prop: String,
    }
  }

  constructor() {
    super();
    this.prop = "Test";
  }

  _render(props) {
    return generator(html, this, props, template);
  }
}

window.customElements.define('test-component', TestComponent);
