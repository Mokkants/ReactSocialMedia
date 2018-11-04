"use strict";
import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
      
const app = express();
const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

//TODO: Remove once app is finished
import devBundle from './devBundle'
devBundle.compile(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

export default app