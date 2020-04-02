/**
 * vue cli 3이상 webpack 설정
 *
 * @description webpack 설정이 필요 없다면 vue.config.js 파일 또한 없어도 된다.
 */

const path = require('path');

module.exports = {
	/**
	 * @description production-sub-path는 프로젝트 환경에 맞게 수정.
	 * @example http://www.project.co.kr/vueProject/ => /vueProject/ 로 수정
	 */
	// publicPath: process.env.NODE_ENV === 'production' ? '/vueProject/' : '/',
	// outputDir: process.env.NODE_ENV === 'production' ? 'dist/vueProject/' : 'dist/',
	// devServer: {
	// 	disableHostCheck: true,
	// },
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src'),
				'@router': path.join(__dirname, 'src/router'),
			},
		},
	},
};
