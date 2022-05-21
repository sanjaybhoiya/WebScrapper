const PORT = 3000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const scrap = express()

const url = 'https://www.usmagazine.com/'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.item-title', html).each(function () {
            const title = $(this).text()
            

            articles.push({
                title,
              
               
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))

scrap.listen(PORT, () => console.log(`server running on PORT ${PORT}`))



