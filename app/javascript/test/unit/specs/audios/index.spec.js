import Vue from 'vue';
import { expect } from 'chai';

import Audios from '../../../../packs/components/Uploadform.vue';

describe('Uploadform.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Audios);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.wrapAudios h1').textContent)
      .to.equal('titletitle');
  });
});
