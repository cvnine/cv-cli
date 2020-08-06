const downloadGit = require('download-git-repo')

const downloadFile =  async (projectName, answer) => {

    let url = `cvnine/${answer.template}`

    return new Promise((resolve, reject) => {
      downloadGit(url, projectName, {}, (err ) => {
        if (err) {
            console.log('err :>> ', err);
          reject(err)
        }
        resolve()
      })
    })
  }

  module.exports = downloadFile
