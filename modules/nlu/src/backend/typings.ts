import sdk from 'botpress/sdk'

import { Prediction } from './tools/fastText'

export type EngineByBot = { [botId: string]: Engine }

export type Prediction = { name: string; confidence: number }

export interface Engine {
  sync(): Promise<void>
  checkSyncNeeded(): Promise<boolean>
  extract(event): Promise<sdk.IO.EventUnderstanding>
}

export interface EntityExtractor {
  extract(input: string, lang: string): Promise<sdk.NLU.Entity[]>
}

export interface IntentClassifier {
  predict(input: string): Promise<Prediction[]>
}

export interface LanguageIdentifier {
  identify(input: string): Promise<string>
}
