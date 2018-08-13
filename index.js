'use strict';

const got = require('got');

const scape = str => {
	return str.replace(/\\/g, '');
};

const parseInputData = {
	title: `<meta property="og:title" content="`,
	views: `<span class="count">`,
	percent: `<span class="percent">`,
	upvotes: `<span class="votesUp">`,
	downvotes: `<span class="votesDown">`,
	provider: `bolded">`,
	low: `quality":"240","videoUrl":"`,
	medium: `quality":"480","videoUrl":"`,
	high: `quality":"720","videoUrl":"`
};

const splitSource = (data, title) => {
	if (title === parseInputData.title || title === parseInputData.medium || title === parseInputData.low || title === parseInputData.high) {
		return data.split(title)[1].split('"')[0];
	}

	if (title === parseInputData.views || title === parseInputData.upvotes || title === parseInputData.downvotes || title === parseInputData.percent) {
		return data.split(title)[1].split('</span>')[0];
	}

	return data.split(title)[1].split('</')[0];
};

module.exports = (url, data) => {
	return got(url).then(res => {
		const source = res.body;
		const info = splitSource(source, parseInputData[data]);
		return {data: scape(info)};
	}).catch(err => {
		if (err) {
			err.message = 'the requested data is not available';
		}
		return {data: err.message};
	});
};
