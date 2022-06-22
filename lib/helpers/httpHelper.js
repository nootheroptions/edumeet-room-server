exports.loginHelper = function(data) {
	const html = `<!DOCTYPE html>
	<html>
		<head>
			<meta charset='utf-8'>
			<title>edumeet</title>
		</head>
		<body>
			<script type='text/javascript'>
				let data = ${JSON.stringify(data)};
	
				window.opener.postMessage({
					type: 'edumeet-login',
					data
				}, '*');
	
				window.close();
			</script>
		</body>
	</html>`;

	return html;
};

exports.logoutHelper = function() {
	const html = `<!DOCTYPE html>
	<html>
		<head>
			<meta charset='utf-8'>
			<title>edumeet</title>
		</head>
		<body>
			<script type='text/javascript'>
				window.opener.postMessage({
					type: 'edumeet-logout'
				}, '*');

				window.close();
			</script>
		</body>
	</html>`;

	return html;
};