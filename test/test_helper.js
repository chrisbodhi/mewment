export const catProfile = {
  name: 'Qwerty',
  age: 1,
  sex: 'Spayed',
  color: 'Black',
  about: 'Stinky',
  avatar: 'http://bit.ly/1rdk9Us',
  wishlist: {
    food: [{ name: '', url: '' }],
    litter: [{ name: '', url: '' }],
    toys: [{ name: '', url: '' }]
  }
};

export const defaultStatus = {
  photoIsUploading: false,
  photoUploadSuccess: false,
  photoUploadError: false,
  fetchingCats: false,
  fetchedCatsSuccess: false,
  fetchedCatsError: false,
  showUploadForm: false,
  catIndexForUpload: null
};
