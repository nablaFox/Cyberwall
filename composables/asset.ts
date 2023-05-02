export async function useAsset(source: string) {
  const src = ref('')
  const isExternal = computed(() => {
    return source.startsWith('http') || source.startsWith('https')
  })

  const [name, ext] = source.split('.') || null
  
  if (!ext) {
    throw new Error('Asset must have an extension')
  }
  
  if (!isExternal.value) {
    await load()
  } else {
    src.value = source
  }

  async function load() {
    const { default: url } = await import(`~/assets/images/${name}.${ext}`)
    src.value = url
  }

  return {
    src,
    isExternal,
    load
  } 
}