Update: Added new strToTag function. Usage is as follows:

```
strToTag.bind(this)("${this.prop}", html)
```

Old usage:

```
import { LitElement, html } from '@polymer/lit-element';  
import { SharedStyles } from '../shared-styles.js';  
import { generator } from 'tagged-template-literal-generator';  

const template = require('./test-component.html');  

export class TestComponent extends LitElement {  
  static get properties() {  
    return {  
       prop: String  
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

```
