'use strict'
const Helpers = use('Helpers')
class UploadController {
    
    async store ({ request, response }) {
        const profilePic = request.file('profile_pic', {
            types: ['image'],
            // size: '2mb'
          })
        await profilePic.move(Helpers.tmpPath('uploads'), {
            name: 'custom-name.jpg',
            overwrite: true
          })
        
          if (!profilePic.moved()) {
            return profilePic.error()
          }
          return response.status(200).json({
              status: 'berhasil'
          })
        
    }
}

module.exports = UploadController
