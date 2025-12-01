import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      name: 'CHEN',
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    home: {
      heroTitle: 'Capturing moments, telling stories.',
      heroSubtitle: 'Lifestyle & portrait photographer',
      fromTheJournals: 'From the journals',
    },
    about: {
      title: 'About',
      text: 'A photographer who loves soft light, quiet colors, and honest emotions.',
    },
    portfolio: {
      title: 'Portfolio',
    },
    contact: {
      title: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      consent: 'I confirm the information above is correct.',
      send: 'Send',
    },
    locale: {
      en: 'English',
      zh: '中文',
    },
  },
  'zh-TW': {
    nav: {
      name: 'CHEN',
      about: '關於我',
      portfolio: '作品集',
      contact: '聯絡',
    },
    home: {
      heroTitle: '捕捉每一刻，記錄每個故事。',
      heroSubtitle: '生活風格與人像攝影',
      fromTheJournals: '從日記裡的片刻',
    },
    about: {
      title: '關於我',
      text: '喜歡自然光、柔和色調與真實情緒的攝影師。',
    },
    portfolio: {
      title: '作品集',
    },
    contact: {
      title: '聯絡我',
      name: '姓名',
      email: '電子郵件',
      message: '訊息內容',
      consent: '我確認以上資訊正確無誤。',
      send: '送出',
    },
    locale: {
      en: 'English',
      zh: '中文',
    },
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'en',
  messages,
})
