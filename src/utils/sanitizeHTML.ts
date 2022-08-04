import sanitizeHtml from 'sanitize-html';

const sanitize = (value: string) => sanitizeHtml(value, {
  allowedTags: [],
})

const safeHTML = (value: string) => {
  return sanitize(value)
}

export default safeHTML