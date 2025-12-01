
function getImageDictionary(folder: string[]) {
  return folder.reduce((dict, image) => {
    const key = image.slice(Math.min(image.length, image.lastIndexOf('/') + 1), image.lastIndexOf('.')).split('-')[0]
    if (key == undefined) {
        return dict;
    }
    return {...dict, [key]: image};
  }, {});
}

const assetsFolder = Object.values(import.meta.glob('@/assets/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const assetsImages = getImageDictionary(assetsFolder);

export default {
    assetsImages
}