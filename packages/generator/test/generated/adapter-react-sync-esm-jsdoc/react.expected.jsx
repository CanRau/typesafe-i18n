// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
// @ts-check
/* eslint-disable */

/**
 * @typedef { import('typesafe-i18n/adapters/adapter-react').ReactInit<Locales, Translation, TranslationFunctions> } ReactInit,
 * @typedef { import('./types.actual.js').Locales } Locales,
 * @typedef { import('./types.actual.js').Translation } Translation,
 * @typedef { import('./types.actual.js').TranslationFunctions } TranslationFunctions,
 * @typedef { import('./types.actual.js').Formatters } Formatters
 */

import { initI18nReact } from 'typesafe-i18n/adapters/adapter-react'

import { baseLocale, getTranslationForLocale } from './util.actual.js'
import { initFormatters } from './formatters-template.actual.js'

/** @type { ReactInit } */
const { component: TypesafeI18n, context: I18nContext } = initI18nReact(baseLocale, getTranslationForLocale, initFormatters)

export { I18nContext }

export default TypesafeI18n
