import test from 'ava';
import m from '.';

const url = 'https://www.pornhub.com/view_video.php?viewkey=ph56fc59c124c0c';

test('title', async t => {
	const video = await m(url, 'title');

	t.is(video.data, 'Hot kissing scene');
});
