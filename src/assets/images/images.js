const images = {};
const imageContext = import.meta.glob('./**/*.*', { eager: true }); // Update the file extension based on your needs

for (const key in imageContext) {
    if (Object.hasOwnProperty.call(imageContext, key)) {
        const imageName = key.replace('./', '');
        images[imageName] = imageContext[key].default;
    }
}

export default images;
