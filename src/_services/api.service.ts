import axios from 'axios'
import { Keys } from '../_enums/keys.enum'

export default  {
    async getAutocomplete(query: string) {
        // THERE WAS A CORS PROBLEM
        console.log('Mock DATA: ')
        return {"fuzzy":[{"query":"islamic","priority":92798},{"query":"islam","priority":46208},{"query":"islamic art","priority":7915},{"query":"faroe islands","priority":3237},{"query":"islands","priority":2954}],"autocomplete":[{"query":"islamic","priority":92798},{"query":"islam","priority":46208},{"query":"islamic art","priority":7915},{"query":"islands","priority":2954},{"query":"islamic architecture","priority":2143}],"did_you_mean":[{"query":"islamic","priority":92798},{"query":"islam","priority":46208},{"query":"illustration","priority":47968},{"query":"israel","priority":18271},{"query":"islamic art","priority":7915}]}
        
        console.log('getAutocomplete')
            return await axios(
              `https://unsplash.com/nautocomplete/${query}?client_id=${Keys.AccessKey}`
            )
    },
    async getImages(input: string) {
            return await axios(
              `https://api.unsplash.com/photos?page=1&query=/${input}&client_id=${Keys.AccessKey}`      
            )
          } 
}