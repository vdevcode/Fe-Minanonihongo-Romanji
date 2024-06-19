export async function copy(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text)
  } else {
    const textArea = document.createElement('textarea')
    textArea.value = text

    textArea.style.position = 'absolute'
    textArea.style.opacity = '0'

    document.body.prepend(textArea)
    textArea.select()

    try {
      document.execCommand('copy')
    } catch (error) {
    } finally {
      textArea.remove()
    }
  }
}
