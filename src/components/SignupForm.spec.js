import { shallowMount } from '@vue/test-utils';
import SignupForm from './SignupForm.vue';

describe('SignupForm.vue', () => {
	test('ID와 PW, 닉네임이 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
		const wrapper = shallowMount(SignupForm, {
			data() {
				return {
					username: '',
					password: '',
					nickname: '',
				};
			},
		});
		const button = wrapper.find('.btn');
		expect(button.element.disabled).toBeTruthy();
	});
});
