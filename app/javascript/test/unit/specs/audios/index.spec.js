import Vue from 'vue';
import Audios from '@/components/audios/index.vue';

describe('audios/index.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Audios);
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.test h1').textContent)
      .to.equal('titletitle')
  })
})