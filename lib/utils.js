const fs = require("fs-extra");
const path = require('path');
const downloadGit = require('download-git-repo')


async function downloadFile(projectName, answer) {

	let url = `cvnine/${answer.template}`

	return new Promise((resolve, reject) => {
		downloadGit(url, projectName, {}, (err) => {
			if (err) {
				console.log('err :>> ', err);
				return reject(err)
			}
			resolve()
		})
	})
}

async function changeTemplate(projectName = 'demo') {
	return new Promise((resolve, reject) => {
		fs.readFile(
			path.resolve(process.cwd(), projectName, "package.json"),
			"utf8",
			(err, data) => {
				if (err) {
					console.log('err :>> ', err);
					return reject(err);
				}
				let packageContent = JSON.parse(data);
				packageContent.name = projectName;
				fs.writeFile(
					path.resolve(process.cwd(), projectName, "package.json"),
					JSON.stringify(packageContent, null, 2),
					"utf8",
					(err, data) => {
						if (err) {
							console.log('err :>> ', err);
							return reject(err);
						}
						resolve();
					}
				);
			}
		);
	});
}


module.exports = {
	downloadFile,
	changeTemplate
}
