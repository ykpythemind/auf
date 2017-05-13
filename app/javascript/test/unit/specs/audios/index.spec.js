import Vue from 'vue';
import { expect } from 'chai';

import Audios from '../../../../packs/components/audios/index.vue';

describe('audios/index.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Audios);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.wrapAudios h1').textContent)
      .to.equal('titletitle');
  });
});
