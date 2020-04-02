import aboutView1 from '@/views/About';

/**
 * @description webpack code split 적용
 * @param webpackChunkName: 분할되는 js의 그룹화
 */
const AboutCodeSplit = () => import(/* webpackChunkName: "aboutView" */ '@/views/AboutCodeSplit');

const pageGroup2 = [
	{ path: '/about/aboutView1', name: 'aboutViewDefault', component: aboutView1 },
	{ path: '/about/aboutView2', name: 'aboutViewCodeSplit', component: AboutCodeSplit },
];

export default pageGroup2;
