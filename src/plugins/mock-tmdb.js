const { join } = require('path')

module.exports = {
  set: {
    http () {
      let mockSrcDir = join(__dirname, '..', 'http', 'get-mock')
      return [
        {
          method: 'get',
          path: '/mock/*',
          src: mockSrcDir,
        },
      ]
    },
  }

}
