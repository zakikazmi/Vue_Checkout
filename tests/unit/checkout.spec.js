import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Information from '@/components/Information.vue'

describe('Information.vue', () => {
  it('render h1 tag', () => {
    const wrapper = shallowMount(Information)
    expect(wrapper.find('h1').text()).equal('Payment Information')
  })
})
