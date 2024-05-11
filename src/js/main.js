// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import PineconeRouter from 'pinecone-router'
// then load alpine.js
import Alpine from 'alpinejs'
// add the router as a plugin
Alpine.plugin(PineconeRouter)
// start alpine
Alpine.start()